"use strict";var Frac=function(a){return a-Math.floor(a)},Modulus=function(a,t){return a-t*Math.floor(a/t)};function eclipticToEquatorial(a,t,e){var M=Math.cos(e),n=Math.sin(e),s=Math.cos(a),h=Math.sin(a),r=Math.cos(t),o=Math.sin(t),i=o*M+r*n*h;i=Math.asin(i);var c=r*h*M-o*n,u=r*s;return{ra:Math.atan2(c,u),dec:i}}function sunMoonPlanets(a){var t=[],e=planetPos(a,[!0,!0,!0,!0,!0,!0,!0,!0]);return t[0]=e[2],t[1]=MediumMoon(a),t[2]=e[0],t[3]=e[1],t[4]=e[3],t[5]=e[4],t[6]=e[5],t[7]=e[6],t[8]=e[7],t}function MiniSun(a){var t=2*Math.PI,e=(Math.PI,23.43929111*Math.PI/180),M=t*Frac(.993133+99.997361*a),n=t*Frac(.7859453+M/t+(6893*Math.sin(M)+72*Math.sin(2*M)+6191.2*a)/1296e3),s=eclipticToEquatorial(n,0,e);return{ra:s.ra,dec:s.dec,lam:n,bet:0}}function MiniMoon(a){var t=2*Math.PI,e=(Math.PI,3600/Math.PI*180),M=23.43929111*Math.PI/180,n=Frac(.606433+1336.855225*a),s=t*Frac(.374897+1325.55241*a),h=t*Frac(.993133+99.997361*a),r=t*Frac(.827361+1236.853086*a),o=t*Frac(.259086+1342.227825*a),i=22640*Math.sin(s)-4586*Math.sin(s-2*r)+2370*Math.sin(2*r)+769*Math.sin(2*s)-668*Math.sin(h)-412*Math.sin(2*o)-212*Math.sin(2*s-2*r)-206*Math.sin(s+h-2*r)+192*Math.sin(s+2*r)-165*Math.sin(h-2*r)-125*Math.sin(r)-110*Math.sin(s+h)+148*Math.sin(s-h)-55*Math.sin(2*o-2*r),c=o+(i+412*Math.sin(2*o)+541*Math.sin(h))/e,u=o-2*r,l=-526*Math.sin(u)+44*Math.sin(s+u)-31*Math.sin(u-s)-23*Math.sin(h+u)+11*Math.sin(u-h)-25*Math.sin(o-2*s)+21*Math.sin(o-s),p=t*Frac(n+i/1296e3),v=(18520*Math.sin(c)+l)/e,b=eclipticToEquatorial(p,v,M);return{ra:b.ra,dec:b.dec,lam:p,bet:v}}function MiniMoonDist(a){var t=function(a){return a-6.283185307179586*Math.floor(.5*(.3183098861837907*a+1))},e=a*a,M=e*a,n=e*e,s=-2.472840876591278+t(8399.684731773916*a)+t(-2854728398477281e-20*e)+t(3.201709550047375e-8*M)+t(-1.53637455543612e-10*n),h=1.454788532322509+t(70.99330481835962*a)+t(-.0001855750416003838*e)+t(-2.183940189294126e-7*M)+t(1.032701622131422e-9*n),r=1.796595523358783+t(.005629793667315685*a)+t(2582602479270498e-21*e)+t(-6.690428799311597e-10*M),o=1.753470343150658+t(628.3075849621554*a)+t(-9.793236358412627e-8*e)+t(4.363323129985824e-11*M)+t(7.272205216643039e-13*n),i=s-o+Math.PI,c=s-h,u=o-r,l=385000.5289868034;return l+=-20905.35504324328*Math.cos(c),l+=-569.9251213522875*Math.cos(2*c),l+=-129.6201386785059*Math.cos(u-c),l+=104.7552251859368*Math.cos(u+c),l+=108.7427016883919*Math.cos(i),l+=-152.1377114862193*Math.cos(2*i-u-c),l+=-204.5859838051395*Math.cos(2*i-u),l+=246.1584775524063*Math.cos(2*i-2*c),l+=-3699.110919209897*Math.cos(2*i-c),l+=-2955.967563710265*Math.cos(2*i),l+=-170.7330784603796*Math.cos(2*i+c)}function MediumMoon(a){var t=function(a){return a-6.283185307179586*Math.floor(.5*(.3183098861837907*a+1))},e=a*a,M=e*a,n=e*e,s=e*M,h=3.8103440908308803+t(8399.68473007193*a)+t(-3318952042550094e-20*e)+t(3.1102494491060616e-8*M)+t(-2.0328237648922845e-10*n),r=1.4547895404440776+t(70.99330544847925*a)+t(-.00018548192818782712*e)+t(-2.1961637966359412e-7*M)+t(1.0327016221314225e-9*n),o=2.182438847423769+t(-33.781427419672326*a)+t(30816644950982666e-21*e)+t(3.6447710769397583e-8*M)+t(-1.738541860458796e-10*n),i=1.7534699452640696+t(628.3075850810316*a)+t(-9.793236358412627e-8*e)+t(4.363323129985824e-11*M)+t(7.272205216643039e-13*n),c=1.7965956331206+t(.00562986697114427*a)+t(25659491293243853e-22*e)+t(-5.727588828628058e-10*M)+t(5.51669487734541e-11*n),u=t(h-i+Math.PI),l=t(h-o),p=t(h-r),v=t(i-c),b=h;b+=-.001995472498018293*Math.sin(2*l),b+=.0001916628565478175*Math.sin(-2*l+p),b+=.1097598086261916*Math.sin(p),b+=-.0002186490808966586*Math.sin(2*l+p),b+=.00372834182278019*Math.sin(2*p),b+=.00017513318791757*Math.sin(3*p),b+=-.0007142342143774959*Math.sin(-p+v),b+=-.003230883385671323*Math.sin(v),b+=-.0005302909592585855*Math.sin(p+v),b+=-.0006059594976151819*Math.sin(u),b+=.0009959815905878214*Math.sin(2*u-p-v),b+=.0007986268729360748*Math.sin(2*u-v),b+=.001026135054568928*Math.sin(2*u-2*p),b+=.02223568023224499*Math.sin(2*u-p),b+=.0002675059342607472*Math.sin(2*u-2*l),b+=.01148966695626307*Math.sin(2*u),b+=.0009306298945895796*Math.sin(2*u+p),b+=.0001491896510579414*Math.sin(4*u-2*p),b+=.0001863130931752139*Math.sin(4*u-p),b+=a*(81293558048447e-19*Math.sin(v));var f=.08950261906476278*Math.sin(l);f+=.004846651648159632*Math.sin(-l+p),f+=.004897428574922555*Math.sin(l+p),f+=.0001539752292512595*Math.sin(2*p-l),f+=.0003001576051004671*Math.sin(l+2*p),f+=.0008075741060449063*Math.sin(2*u-l-p),f+=.0009671245654627556*Math.sin(2*u+l-p),f+=.003023552571339078*Math.sin(2*u-l),f+=.0005684958997727675*Math.sin(2*u+l),f+=.0001617202836489691*Math.sin(2*u-l+p);var m=385000.529032284;m+=-20905.35493520509*Math.cos(p),m+=-569.9251153350947*Math.cos(2*p),m+=-129.6202221720506*Math.cos(-p+v),m+=104.7552926742703*Math.cos(p+v),m+=108.742701272463*Math.cos(u),m+=-152.1378094258907*Math.cos(2*u-p-v),m+=-204.5861164608731*Math.cos(2*u-v),m+=246.1584748535579*Math.cos(2*u-2*p),m+=-3699.110896398076*Math.cos(2*u-p),m+=-2955.967557972414*Math.cos(2*u),m+=-170.7330771247706*Math.cos(2*u+p);var G=(m*=.9999999498265204)*Math.cos(b)*Math.cos(f),P=m*Math.sin(b)*Math.cos(f),d=m*Math.sin(f),I=10180391e-12*a+4.7020439e-7*e-5.417367e-10*M-2.507948e-12*n+4.63486e-15*s,g=-.000113469002*a+1.2372674e-7*e+1.265417e-9*M-1.371808e-12*n-3.20334e-15*s,k=Math.sqrt(1-I*I-g*g),q=2*I*g,F=(1-2*I*I)*G+q*P+2*I*k*d,T=q*G+(1-2*g*g)*P+-2*g*k*d,x=-2*I*k*G+2*g*k*P+(1-2*I*I-2*g*g)*d,L=Math.atan2(T,F),H=Math.asin(x/m),y=.9174821430652418,E=.397776969112606,w=y*T-E*x,S=E*T+y*x,z=Math.atan2(w,F),A=Math.asin(S/m),O=precession_matrix(0,a),_=O.p11*F+O.p12*w+O.p13*S,j=O.p21*F+O.p22*w+O.p23*S,J=O.p31*F+O.p32*w+O.p33*S;return{Xgeo:F,Ygeo:T,Zgeo:x,rGeo:m,lam2000:L,bet2000:H,ra2000:z,dec2000:A,ra:Math.atan2(j,_),dec:Math.asin(J/m)}}function planetPos(a,t){var e,M,n,s,h,r,o,i,c,u,l,p,v,b,f,m,G,P,d,I,g=2*Math.PI,k=1.58125073358306e-7,q=.917482139208287,F=.397776978008764;a>-2&&a<.5?(e=[.38709927,.72333566,1.00000261,1.52371034,5.202887,9.53667594,19.18916464,30.06992276],M=[3.7e-7,39e-7,562e-8,1847e-8,-11607e-8,-.0012506,-.00196176,26291e-8],n=[.20563593,.00677672,.01671123,.0933941,.04838624,.05386179,.04725744,.00859048],s=[1906e-8,-4107e-8,-4392e-8,7882e-8,-13253e-8,-50991e-8,-4397e-8,5105e-8],h=[.122259947932126,.0592482741110957,-2.67209908480332e-7,.0322832054248893,.0227660215304719,.0433887433093108,.0134850740589642,.0308930864549255],r=[-.000103803282729438,-137689024689833e-19,-.000225962193202099,-.00014191813200034,-320641418200886e-19,33791145114937e-18,-42400854315025e-18,617357863015434e-20],o=[4.40259868429583,3.17613445608937,1.75343755707279,-.0794723815383351,.600331137865858,.87186603715888,5.4670362664056,-.962026001887529],i=[2608.79030501053,1021.32854958241,628.307577900922,334.061301681387,52.966311891386,21.3365387887055,7.47842217160454,3.81283674131913],c=[1.35189357642502,2.29689635603878,1.79660147404917,-.41789517122344,.257060466847075,1.61615531016306,2.98371499179911,.784783148988019],u=[.00280085010386076,468322452858386e-19,.00564218940290684,.00775643308768542,.00370929031433238,-.00731244366619248,.00712186505651484,-.00562719702463221],l=[.843530995489199,1.33831572240834,0,.864977129749742,1.75360052596996,1.9837835429754,1.2918390439753,2.30006864135446],p=[-.00218760982161663,-.00484667775462579,0,-.00510636965735315,.00357253294639726,-.00503838053087464,.000740122402738538,-887786158636444e-19]):(e=[.38709843,.72332102,1.00000018,1.52371243,5.20248019,9.54149883,19.18797948,30.06952752],M=[0,-2.6e-7,-3e-8,9.7e-7,-2864e-8,-3065e-8,-20455e-8,6447e-8],n=[.20563661,.00676399,.01673163,.09336511,.0485359,.05550825,.0468574,.00895439],s=[2123e-8,-5107e-8,-3661e-8,9149e-8,18026e-8,-32044e-8,-155e-7,818e-8],h=[.122270686943013,.059302368845932,-948516635288838e-20,.0323203332904682,.0226650928050204,.0435327181373017,.0134910682177473,.0308932911820467],r=[-.000103002002069847,759113504862414e-20,-.000233381587852327,-.000126493959268765,-563216004289318e-19,788834716694625e-19,-314429791393038e-19,39095375244673e-19],o=[4.40262213698312,3.17614508514451,1.75347846863765,-.0797289377825283,.599255160009829,.873986072195182,5.48387278993662,5.30969114052348],i=[2608.79031817869,1021.32855334028,628.307588608167,334.061243342709,52.9690623526126,21.3299296671748,7.47865077657529,3.81293622316663],c=[1.35189222676191,2.29977771922823,1.79646842620403,-.417438213482006,.249144920643598,1.62073649087534,3.00954181748462,.814747397394972],u=[.00278205709660699,.000991285579543109,.00554931973527652,.00789301155937221,.00317635891415782,.00945610278111832,.00161739399982927,.000176267433410065],l=[.843685496572442,1.33818957716586,-.08923177123077,.867659193442843,1.75044003925455,1.98339193542262,1.29088918553089,2.30010586556221],p=[-.00213177691337826,-.00476024137061832,-.00421040715476989,-.00468663333114593,.00227322485367811,-.00436594147292966,.00100176645623426,-.000105819661614267],v=[0,0,0,0,-217328398458334e-20,452022822974011e-20,101806800598081e-19,-721658739114615e-20],b=[0,0,0,0,.00105837813038487,-.0023447571730711,-.0170574253165864,.0119286828071507],f=[0,0,0,0,-.00621955723490303,.0152402406847545,.00308735567441944,-.00177369905538672],m=[0,0,0,0,.669355584755475,.669355584755475,.133871116951095,.133871116951095]);var T=[0,0,0,0,0,0,0,0],x=[0,0,0,0,0,0,0,0],L=[0,0,0,0,0,0,0,0],H=[0,0,0,0,0,0,0,0],y=[0,0,0,0,0,0,0,0],E=[0,0,0,0,0,0,0,0],w=[0,0,0,0,0,0,0,0],S=[0,0,0,0,0,0,0,0];for(G=0;G<8;G++)if(t[G]||2==G){var z=e[G]+M[G]*a,A=n[G]+s[G]*a,O=h[G]+r[G]*a,_=o[G]+Modulus(i[G]*a,g),j=c[G]+u[G]*a,J=l[G]+p[G]*a,N=j-J,U=_-j;(a<=-2||a>=.5)&&G>3&&(U=U+v[G]*a*a+b[G]*Math.cos(m[G]*a)+f[G]*Math.sin(m[G]*a));var V=kepler(U,A),W=Math.sin(V),C=Math.cos(V),D=z*Math.sqrt(1-A*A),X=i[G]/(1-A*C);P=z*(C-A),d=D*W;var Y=-z*W*X,Z=D*C*X,B=Math.cos(N),K=Math.sin(N),Q=Math.cos(J),R=Math.sin(J),$=Math.sin(O),aa=Math.cos(O),ta=B*Q-K*R*aa,ea=-K*Q-B*R*aa;T[G]=ta*P+ea*d,E[G]=ta*Y+ea*Z;var Ma=B*R+K*Q*aa,na=B*Q*aa-K*R;x[G]=Ma*P+na*d,w[G]=Ma*Y+na*Z;var sa=K*$,ha=B*$;L[G]=sa*P+ha*d,S[G]=sa*Y+ha*Z,H[G]=Math.sqrt(T[G]*T[G]+x[G]*x[G]+L[G]*L[G])}for(T[2]=-T[2],x[2]=-x[2],L[2]=-L[2],y[2]=H[2],H[2]=0,E[2]=-E[2],w[2]=-w[2],S[2]=-S[2],G=0;G<8;G++)if(2!=G&&t[G]){T[G]=T[G]+T[2],x[G]=x[G]+x[2],L[G]=L[G]+L[2],y[G]=Math.sqrt(T[G]*T[G]+x[G]*x[G]+L[G]*L[G]);var ra=y[G]*k;T[G]-=E[G]*ra,x[G]-=w[G]*ra,L[G]-=S[G]*ra}var oa=precession_matrix(0,a),ia=[];for(G=0;G<8;G++)if(t[G]){var ca=Math.atan2(x[G],T[G]),ua=Math.asin(L[G]/y[G]),la=T[G],pa=q*x[G]-F*L[G],va=F*x[G]+q*L[G],ba=E[G]*k,fa=(q*w[G]-F*S[G])*k,ma=(F*w[G]+q*S[G])*k;P=oa.p11*la+oa.p12*pa+oa.p13*va,d=oa.p21*la+oa.p22*pa+oa.p23*va,I=oa.p31*la+oa.p32*pa+oa.p33*va;var Ga=oa.p11*ba+oa.p12*fa+oa.p13*ma,Pa=oa.p21*ba+oa.p22*fa+oa.p23*ma,da=oa.p31*ba+oa.p32*fa+oa.p33*ma,Ia=Math.sqrt(P*P+d*d+I*I);ia[G]={ra:Math.atan2(d,P),dec:Math.asin(I/Ia),ra2000:Math.atan2(pa,la),dec2000:Math.asin(va/Ia),lam2000:ca,bet2000:ua,rHelio:H[G],rGeo:y[G],betax:Ga,betay:Pa,betaz:da}}return ia}function planetMag(a){var t=a.i,e=5*Math.LOG10E*Math.log(a.rHelio*a.rGeo);switch(a.object){case"Mercury":e+=((302e-8*t-488e-6)*t+.0498)*t-.6;break;case"Venus":e+=t<163.6?((1.3e-7*t+57e-6)*t+.0103)*t-4.47:.98-.0102*t;break;case"Mars":e+=.016*t-1.52;break;case"Jupiter":e+=.005*t-9.4;break;case"Uranus":e+=.002*t-7.19;break;case"Neptune":e-=6.87;break;case"Saturn":e+=.044*t-8.88;var M=Math.PI/180,n=(40.589-.036*a.T)*M,s=(83.537-.004*a.T)*M,h=Math.cos(n),r=Math.sin(n),o=Math.cos(s),i=o*h,c=o*r,u=Math.sin(s),l=a.planet.lam2000,p=a.planet.bet2000,v=a.planet.rGeo*Math.cos(p)*Math.cos(l),b=a.planet.rGeo*Math.cos(p)*Math.sin(l),f=a.planet.rGeo*Math.sin(p);l=a.sun.lam2000,p=a.sun.bet2000;a.sun.rGeo,Math.cos(p),Math.cos(l),a.sun.rGeo,Math.cos(p),Math.sin(l),a.sun.rGeo,Math.sin(p);var m=.917482139208287,G=.397776978008764,P=v*i+(m*b-G*f)*c+(G*b+m*f)*u,d=Math.abs(P)/a.planet.rGeo;e+=d*(1.25*d-2.6)}return e}function planetMag_astroOnPersonalComputer(a){var t=.01*a.i,e=5*Math.LOG10E*Math.log(a.rHelio*a.rGeo);switch(a.object){case"Mercury":e+=t*(3.8-2.73*t+2*t*t)-.42;break;case"Venus":e+=t*(.09+2.39*t-.65*t*t)-4.4;break;case"Mars":e+=1.6*t-1.52;break;case"Jupiter":e+=.5*t-9.4;break;case"Uranus":e-=7.19;break;case"Neptune":e-=6.87;break;case"Saturn":e-=8.88;var M=Math.PI/180,n=(40.589-.036*a.T)*M,s=(83.537-.004*a.T)*M,h=Math.cos(n),r=Math.sin(n),o=Math.cos(s),i=Math.sin(s),c=30827100*a.T;c-=360*Math.floor(c/360);var u=10957.5*a.T,l=(227.2037+c+(u-=360*Math.floor(u/360)))*M,p=Math.cos(l),v=Math.sin(l),b=-p*r-v*i*h,f=p*h-v*i*r,m=v*o,G=v*r-p*i*h,P=-v*h-p*i*r,d=p*o,I=o*h,g=o*r,k=i,q=a.planet.lam2000,F=a.planet.bet2000,T=a.planet.rGeo*Math.cos(F)*Math.cos(q),x=a.planet.rGeo*Math.cos(F)*Math.sin(q),L=a.planet.rGeo*Math.sin(F);q=a.sun.lam2000,F=a.sun.bet2000;var H=T-a.sun.rGeo*Math.cos(F)*Math.cos(q),y=x-a.sun.rGeo*Math.cos(F)*Math.sin(q),E=L-a.sun.rGeo*Math.sin(F),w=.917482139208287,S=.397776978008764,z=w*x-S*L,A=S*x+w*L,O=w*y-S*E,_=S*y+w*E,j=T*b+z*f+A*m,J=T*G+z*P+A*d,N=T*I+z*g+A*k,U=Math.atan2(J,j),V=Math.abs(N)/Math.sqrt(j*j+J*J+N*N);j=H*b+O*f+_*m,J=H*G+O*P+_*d;var W=(Math.atan2(J,j)-U)/M;e+=V*(1.25*V-2.6)+4.4*(.01*Math.abs(W-360*Math.floor((W+180)/360)))}return e}function kepler(a,t){var e=a-Math.floor(a/(2*Math.PI)+.5)*(2*Math.PI),M=e;t>.8&&(M=Math.PI);for(var n=1.01*M,s=0,h=100;Math.abs(M-n)>1e-15&&s<h;)M=(n=M)-(n-t*Math.sin(n)-e)/(1-t*Math.cos(n)),s++;if(s==h)for(s=0,h=60,e>0?(n=0,M=Math.PI):(M=0,n=-Math.PI);M-n>1e-15&&s<h;){var r=.5*(M+n);r-t*Math.sin(r)-e>0?M=r:n=r,s++}return M}function aberration(a,t,e){var M=planetPos(e.T,[!1,!1,!0,!1,!1,!1,!1,!1])[2],n=-(e.m.p11*M.betax+e.m.p12*M.betay+e.m.p13*M.betaz),s=-(e.m.p21*M.betax+e.m.p22*M.betay+e.m.p23*M.betaz),h=-(e.m.p31*M.betax+e.m.p32*M.betay+e.m.p33*M.betaz);if("LAST"in e){var r=15514103102587391e-22*e.cosLat/Math.sqrt(e.cosLat*e.cosLat+.9933056020041341*e.sinLat*e.sinLat);n-=r*Math.sin(e.LAST),s+=r*Math.cos(e.LAST)}var o=Math.cos(a)*Math.cos(t)+n,i=Math.sin(a)*Math.cos(t)+s,c=Math.sin(t)+h,u=Math.sqrt(o*o+i*i+c*c);return{ra:Math.atan2(i,o),dec:Math.asin(c/u)}}function moonIlluminated(a,t,e,M,n,s){var h=384400/149597870.7,r=Math.sin(t)*Math.sin(M)+Math.cos(t)*Math.cos(M)*Math.cos(a-e),o=.5*(1+(h-r)/Math.sqrt(1-2*h*r+h*h)),i="waning",c=s-n;(c-=2*Math.PI*Math.floor(.5*(c/Math.PI+1)))>0&&(i="waxing");var u="";o>=.95?(u="full moon",o<.99&&(u="nearly full")):u=o>.55?i+" gibbous":o>.45?"waxing"==i?"first quarter":"third quarter":o>.05?i+" crescent":o>.01?i+" (thin) crescent":"new moon";var l=Math.acos(r),p=(180*l/Math.PI).toFixed(1)+"&deg;";return{illuminated:o,phase:u,elong:l,elongTxt:p+=c>0?" E":" W"}}function elongationPhase(a,t){var e=180/Math.PI,M=.5*(a.rGeo*a.rGeo+t.rGeo*t.rGeo-a.rHelio*a.rHelio)/(t.rGeo*a.rGeo);M=180*Math.acos(M)/Math.PI;var n,s=a.lam2000-t.lam2000;(s-=2*Math.PI*Math.floor(.5*(s/Math.PI+1)))>0?n=M.toFixed(1)+"&deg; E":(n=M.toFixed(1)+"&deg; W",M=-M);var h=.5*(a.rGeo*a.rGeo+a.rHelio*a.rHelio-t.rGeo*t.rGeo)/(a.rHelio*a.rGeo),r=.5*(1+h),o=Math.acos(h)*e;return{elongation:n,illuminated:r.toFixed(2),phaseAng:o,elongFloat:M}}