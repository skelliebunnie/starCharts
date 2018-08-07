"use strict";function precession_matrix(p,e){if(0==p)return precessionMatrixVondrak(e);var t=precessionMatrixVondrak(p),a=precessionMatrixVondrak(p+e),r={};return r.p11=a.p11*t.p11+a.p12*t.p12+a.p13*t.p13,r.p12=a.p11*t.p21+a.p12*t.p22+a.p13*t.p23,r.p13=a.p11*t.p31+a.p12*t.p32+a.p13*t.p33,r.p21=a.p21*t.p11+a.p22*t.p12+a.p23*t.p13,r.p22=a.p21*t.p21+a.p22*t.p22+a.p23*t.p23,r.p23=a.p21*t.p31+a.p22*t.p32+a.p23*t.p33,r.p31=a.p31*t.p11+a.p32*t.p12+a.p33*t.p13,r.p32=a.p31*t.p21+a.p32*t.p22+a.p33*t.p23,r.p33=a.p31*t.p31+a.p32*t.p32+a.p33*t.p33,r}function precessionMatrixAstronomyOnPersonalComputer(p,e){var t=p*p,a=e*e,r=a*e,n=Math.PI/180/3600,M=(2306.2181+1.39656*p-139e-6*t)*e+(.30188-345e-6*p)*a+.017998*r;M*=n,M-=2*Math.PI*Math.floor(.5*M/Math.PI);var s=Math.cos(M),h=Math.sin(M),o=(2004.3109-.8533*p-217e-6*t)*e+(-.42665-217e-6*p)*a-.041833*r;o*=n,o-=2*Math.PI*Math.floor(.5*o/Math.PI);var i=Math.cos(o),c=Math.sin(o),u=(.7928+411e-6*p)*a+205e-6*r;u*=n,u-=2*Math.PI*Math.floor(.5*u/Math.PI),u+=M;var f=Math.cos(u),v=Math.sin(u),P={};return P.p11=-v*h+f*i*s,P.p12=-v*s-f*i*h,P.p13=-f*c,P.p21=f*h+v*i*s,P.p22=f*s-v*i*h,P.p23=-v*c,P.p31=c*s,P.p32=-c*h,P.p33=i,P}function precessed_ra_dec(p,e,t){var a=Math.cos(e)*Math.cos(p),r=Math.cos(e)*Math.sin(p),n=Math.sin(e),M=t.p11*a+t.p12*r+t.p13*n,s=t.p21*a+t.p22*r+t.p23*n,h=t.p31*a+t.p32*r+t.p33*n,o=Math.asin(h);return{ra:Math.atan2(s,M),dec:o}}function precessionMatrixVondrak(p){for(var e=[.01559490024120026,.0244719973015758,.02151775790129995,.01169573974755144,.02602271819084525,.01674533688817117,.0397997422384214,.02291460724719032,.03095165175950535,.01427996660722633,.03680403764749055,.008807750966790847,.02007407446383254,.0489420883874403,.03110487775831478,.01994662002279234,.04609144151393476,.01282282715750936],t=[-.1076593062579846,.05932495062847037,-.007703729840835942,.01203357586861691,.000728786082003343,-6609012098588148e-20,.001888045891520004,.009848668946298234,.001763501537747769,-.004347554865592219,-.004494201976897112,.000179723665294558,-.002897646374457124,.0003213481408001133,0,0,0,0],a=[-.01572365411244583,-.01924576393436911,.03441793111567203,-.009229382101760265,.0007099369818066644,.00630563269451746,.008375146833970948,.001453733482001713,-.005900793277074788,-.002285254065278213,-.002141335465978059,-.0004177599299066708,-.001494779621447613,-.002049868015261339,0,0,0,0],r=[.00614611792998422,.008253100851149026,-.01440165141619654,.003363590350788535,-7138615291626988e-20,-.002504786979418468,-.00172978832643207,-.0006280861013429611,.001241749955604002,.0009224361511874661,.0004610771596491818,-.001613979006196489,.0006367428132294327,.0004010956619564596,0,0,0,0],n=[-.04155568953790275,.0257426196723017,-.002959273392809311,.004475809265755418,1822441292043207e-20,-.0001972760876678778,.000389971927172294,.003913904086152674,.0004058488092230152,-.001787289168266385,-.0009302656497305446,-2067134029104406e-20,-.0013107116813526,5625225752812272e-20,0,0,0,0],M=[-.06673908312554792,.06550733801292973,-.007055149797375992,.005111848628877972,0,-.0005444464620177098,.0009830562551572195,.00938623573369417,0,-.003177877146985308,-.004324046613805478,0,0,-.001615990759958801,.001587849478343136,-.002398762740975183,.002838548328494804,.0005357813386138708],s=[-.01069967856443793,-.02029794993715239,.03266650186037179,-.0041544791939612,0,.004640389727239152,.008287602553739408,.0007486759753624905,0,-.00118062300801947,-.001970956729830991,0,0,-.002165451504436122,-.005086043543188153,-.001461733557390353,.0002004643484864111,.000690981600754813],h=.04107992866630529+p*(.02444817476355586+p*(1.401111538406559e-16*p-3.592047589119096e-8)),o=.4086163677095374+p*(p*(7.078279744199225e-12+7.320686584753994e-17*p)-2150908863572772e-21),i=p*(3.830798934518299e-7+p*(7.13645738593237e-11-2.957363454768169e-15*p))-9530113429264049e-20,c=0;c<18;c++){var u=e[c]*p,f=Math.cos(u),v=Math.sin(u);h+=t[c]*f+a[c]*v,o+=r[c]*f+n[c]*v,i+=M[c]*f+s[c]*v}var P=.9174821430652418,I=.397776969112606,d=Math.sin(h),l=Math.cos(h),x=Math.sin(o),k=Math.cos(o),V=Math.sin(i),m=Math.cos(i),_={};return _.p11=m*l+V*k*d,_.p12=(-m*d+V*k*l)*P+V*x*I,_.p13=(-m*d+V*k*l)*I-V*x*P,_.p21=-V*l+m*k*d,_.p22=(V*d+m*k*l)*P+m*x*I,_.p23=(V*d+m*k*l)*I-m*x*P,_.p31=x*d,_.p32=x*l*P-k*I,_.p33=x*l*I+k*P,_}function getEclipticNorthPole(p){for(var e=[.008872675714438448,.002721171635850839,.01276551261109221,.005311230183583759,.01010158409514403,.01774911103723047,.006457538856299678,.01169573974755144,.01402496720352586,.01559490024120026],t=[-.004042409513143679,.01369057902014126,-.00272231303641459,6066147796929918e-20,-.002643611413508775,.0003705237378617317,.0001300171245300725,.001793366356240462,.0006949647136035256,-.0002841056070893575],a=[-.02679541800930862,-.005879989388723328,.002379320151262638,-.001124940920469153,-.0002535950507103844,-.0002334436585479198,-4630035619629337e-20,.0001949605448048464,-.0001582323402321061,6429759997016795e-20],r=[-.07027648004398257,-.01050635377614501,.009206833364122355,-.004338070256775063,.00159873402544959,-.001266401388354526,.002365565589582342,-.001406551395163585,-.002497496966995317,.001041115112690355],n=[.01094614582138286,-.03731722874613446,.004834754426333641,.001314243946566702,.005865328196370537,-.001594566164651417,-.001397371249338167,-.003275851922070258,-.0005344059415931104,.0001760885226173251],M=p*p,s=p*M,h=.4020449277403929+8343285174584774e-21*p+1.073862303657622e-9*M-3.456721546310992e-12*s,o=.07607910574041958+8044557043881831e-21*p-8.706623454941823e-9*M-3.616710061077139e-12*s,i=0;i<10;i++){var c=Math.cos(e[i]*p),u=Math.sin(e[i]*p);h+=t[i]*c+a[i]*u,o+=r[i]*c+n[i]*u}return{ra:o-.5*Math.PI,dec:.5*Math.PI-h}}function epsA(p){for(var e=[.01532858089089921,.015860621752315,.01169573974755144,.01559490024120026,.01506217261699529,.02174714560147994,.001554089860791389,.02053328531758035,.02268297944830176,.03095165175950535],t=[.003654878375600794,-.001201396532490081,.001839729670341384,-.0002612203166421586,-.0004368615016759239,-.001714302097549313,-.0003059918662245779,-.0001369510752414054,8582844219576704e-20,.0001886473398345326],a=[-.008264717248747798,-.004180588892934996,.00217115166735481,-.004312766318139272,.000923099046629921,-.0002742348150863777,-.001436127797997386,-.0003677794257791271,.0003271207736678532,1461255099616602e-20],r=.4073802401575857+p*(1757180522429052e-21-p*(1.958162458001416e-10+5.332950492204896e-13*p)),n=0;n<10;n++){var M=e[n]*p,s=Math.cos(M),h=Math.sin(M);r+=t[n]*s+a[n]*h}return r}function nutation(p){var e=p*p,t=p*e,a=e*e,r=e*t,n=2*Math.PI,M=function(p){return p-n*Math.floor((p+Math.PI)/n)},s=.4090926006005829-.00022707106390167*p-8.876938501115605e-10*e+9.712757287348442e-9*t-2.792526803190927e-12*a-2.104091376015386e-13*r,h=M(2.355555743493879+M(8328.691425719086*p)+.0001545547230282712*e+2.503335442409089e-7*t-1.186339077675034e-9*a),o=M(-.04312518025660639+M(628.3019551713968*p)-2681989283897953e-21*e+6.593466063089689e-10*t-5.570509195948569e-11*a),i=M(1.627905081537519+M(8433.466156916373*p)-6181956210563916e-20*e-5.027517873105888e-9*t+2.021673050226765e-11*a),c=M(-1.084718718529083+M(7771.377145593714*p)-308855403687641e-19*e+3.196376599555171e-8*t-1.53637455543612e-10*a),u=M(2.182439196615671+M(-33.75704595363087*p)+3622624787986675e-20*e+3.734034971905646e-8*t-2.879308452109534e-10*a),f=-(8341905928143386e-20+8.46804664246782e-8*p)*Math.sin(u)-6385435421407674e-21*Math.sin(2*(i-c+u))-1103636166255602e-21*Math.sin(2*(i+u))+1005772161400512e-21*Math.sin(2*u)+7.155253612348986e-7*Math.sin(o)-2.505618914847115e-7*Math.sin(o+2*(i-c+u))+3.447796126441765e-7*Math.sin(h),v=s+(4462822944682345e-20*Math.cos(u)+2778145290154494e-21*Math.cos(2*(i-c+u))+4.743703096047555e-7*Math.cos(2*(i+u))-4.351164002863597e-7*Math.cos(2*u)),P=Math.cos(f),I=Math.sin(f),d=Math.cos(s),l=Math.sin(s),x=Math.cos(v),k=Math.sin(v),V={Ee:f*d};return V.p11=P,V.p12=-I*d,V.p13=-I*l,V.p21=I*x,V.p22=P*x*d+k*l,V.p23=P*x*l-k*d,V.p31=I*k,V.p32=P*k*d-x*l,V.p33=P*k*l+x*d,V}