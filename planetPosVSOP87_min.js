"use strict";function planetGeoVSOP(a,e,r){var s;switch(e){case"Sun":s={X:0,Y:0,Z:0};break;case"Mercury":s=MercuryPosVSOP(a);break;case"Venus":s=VenusPosVSOP(a);break;case"Mars":s=MarsPosVSOP(a);break;case"Jupiter":s=JupiterPosVSOP(a);break;case"Saturn":s=SaturnPosVSOP(a);break;case"Uranus":s=UranusPosVSOP(a);break;case"Neptune":s=NeptunePosVSOP(a)}var t=EarthPosVSOP(a),n=Math.sqrt(s.X*s.X+s.Y*s.Y+s.Z*s.Z),u=s.X-t.X,P=s.Y-t.Y,c=s.Z-t.Z,S=Math.sqrt(u*u+P*P+c*c),o=Math.sqrt(t.X*t.X+t.Y*t.Y+t.Z*t.Z),M=Math.atan2(-t.Y,-t.X),V=-Math.asin(t.Z/o);if(r){var p=1.581250740982066e-7;switch(e){case"Sun":break;case"Mercury":s=MercuryPosVSOP(a-S*p);break;case"Venus":s=VenusPosVSOP(a-S*p);break;case"Mars":s=MarsPosVSOP(a-S*p);break;case"Jupiter":s=JupiterPosVSOP(a-S*p);break;case"Saturn":s=SaturnPosVSOP(a-S*p);break;case"Uranus":s=UranusPosVSOP(a-S*p);break;case"Neptune":s=NeptunePosVSOP(a-S*p)}n=Math.sqrt(s.X*s.X+s.Y*s.Y+s.Z*s.Z),u=s.X-t.X,P=s.Y-t.Y,c=s.Z-t.Z,S=Math.sqrt(u*u+P*P+c*c)}var h=Math.atan2(P,u),b=Math.asin(c/S),i=.917482139208287,O=.397776978008764,X=i*P-O*c,Y=O*P+i*c,Z=Math.atan2(X,u),k=Math.asin(Y/S),q=precession_matrix(0,a),l=q.p11*u+q.p12*X+q.p13*Y,v=q.p21*u+q.p22*X+q.p23*Y,y=q.p31*u+q.p32*X+q.p33*Y,J=Math.atan2(v,l),N=Math.asin(y/S);return{X:s.X,Y:s.Y,Z:s.Z,Xgeo:u,Ygeo:P,Zgeo:c,rHelio:n,rGeo:S,lam2000:h,bet2000:b,ra2000:Z,dec2000:k,ra:J,dec:N,dSunEarth:o,lamSun2000:M,betSun2000:V}}