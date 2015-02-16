// Shamelessly stolen from http://statpages.org/pdfs.html
var Pi=Math.PI; 
var PiD2=Pi/2; 

function StatCom(q,i,j,b) {
	var zz=1; var z=zz; var k=i; while(k<=j) { zz=zz*q*k/(k-b); z=z+zz; k=k+2 }
	return z
}

function StudT(t,n) {
	var fn=Math.floor(n); 
	var cn=Math.ceil(n)
	if( fn!=n ) {
		Tf = Math.log( StudT(t,fn) ); 
		Tc = Math.log( StudT(t,cn) )
		return Math.exp( (cn-n)*Tf + (n-fn)*Tc )
	}
	t=Math.abs(t); 
	var w=t/Math.sqrt(n); 
	var th=Math.atan(w)
	if(n==1) { return 1-th/PiD2 }
		var sth=Math.sin(th); var cth=Math.cos(th)
	if((n%2)==1)
		{ return 1-(th+sth*cth*StatCom(cth*cth,2,n-3,-1))/PiD2 }
	else
		{ return 1-sth*StatCom(cth*cth,1,n-3,-1) }
}
function AStudT(p,n) { 
	var v=0.5; 
	var dv=0.5; 
	var t=0
	while(dv>1e-6) { 
		t=1/v-1; 
		dv=dv/2; 
		if(StudT(t,n)>p) { 
			v=v-dv 
		} else { 
			v=v+dv 
		} 
	}
	return t
}