"use strict";var date1,date2,place1,place2,long1,long2,lat1,lat2,tz1,tz2,tipsEnabled,tips,highPrecCalInTips,starsLoc=[],brightestStarsLoc=[],conLabelLoc=[];starsLoc[0]=brightStars(),starsLoc[1]=brightStars(),brightestStarsLoc[0]=brightestStars(),brightestStarsLoc[1]=brightestStars(),conLabelLoc[0]=constellationLabel(),conLabelLoc[1]=constellationLabel();var magLimit=5.3,magLimitTip=5.3,milkyLoc=[];function init(){init_cont()}function init_cont(){var t=new Date,e=$("#long1").text(),a=$("#lat1").text();""!=e&&""!=a?(place1=$("#place1").text(),long1=parseFloat(e),lat1=parseFloat(a)):(place1="Champaign, IL, USA",long1=-88.2434,lat1=40.1164);var r="GMT",n=t.getTimezoneOffset(),o=t.toTimeString(),i=o.indexOf("GMT");-1!=i&&(r=o.slice(i+3)),tz1={tz:n,tzString:r},place2="",long2=long1,lat2=-30,lat1<0&&(lat2=30),tz2={tz:tz1.tz,tzString:tz1.tzString};var d=t.getFullYear(),l=t.getMonth()+1,s=t.getDate(),c=t.getHours(),p=t.getMinutes(),h=t.getSeconds()+.001*t.getMilliseconds(),u=generateDateString(d,l,s),g=generateTimeString(c,p,h),m=getDm(d,l,s,tz1.tz)+(c+p/60+h/3600)/24,v=m/36525,f=DeltaT(v),y=getGMST(date1={yyyy:d,mm:l,dd:s,h:c,m:p,s:h,tz:tz1.tz,tzString:tz1.tzString,dateString:u,timeString:g,D:m,T:v,dT:f}),M=getSidereal(y,long1);date1.LST=M.hour,date1.LST_rad=M.rad,date1.LSTstring=M.string;var T=(c+=(tz1.tz-tz2.tz)/60)+p/60+h/3600;T-=24*Math.floor(c/24);var S=CalDat(m+tz2.tz/1440);h=3600*(T-(c=Math.floor(T))-(p=Math.floor(60*(T-c)))/60),g=generateTimeString(c,p,h),M=getSidereal(y=getGMST(date2={yyyy:S.yy,mm:S.mm,dd:S.dd,h:c,m:p,s:h,tz:tz2.tz,tzString:tz2.tzString,dateString:S.dateString,timeString:g,D:m,T:v,dT:f}),long2),date2.LST=M.hour,date2.LST_rad=M.rad,date2.LSTstring=M.string,tipsEnabled=!0,tips=[[],[]],highPrecCalInTips=!0,$("#loc1").on("click",function(t){displayPopup(t,1)}),$("#loc2").on("click",function(t){displayPopup(t,2)}),starChart()}function displayChangeLocs(){$("button.menu").attr("disabled",!0),$("#inputlocs").slideDown(),$("#geolocmessage").empty(),$("#geolocerr").empty(),$("#place1in").val(place1),$("#long1in").val(long1),$("#lat1in").val(lat1),$("#year1in").val(date1.yyyy),$("#month1in").val(date1.mm),$("#day1in").val(date1.dd),$("#hour1in").val(date1.h),$("#minute1in").val(date1.m),$("#second1in").val(date1.s.toFixed(3)),$("#tz1in").val(-tz1.tz/60),$("#place2in").val(place2),$("#long2in").val(long2),$("#lat2in").val(lat2),$("#year2in").val(date2.yyyy),$("#month2in").val(date2.mm),$("#day2in").val(date2.dd),$("#hour2in").val(date2.h),$("#minute2in").val(date2.m),$("#second2in").val(date2.s.toFixed(3)),$("#tz2in").val(-tz2.tz/60),$("#synTimeYes").prop("checked",!0),$("#synTimeNo").prop("checked",!1),$(".timeInputLoc2").hide()}function geoloc(){$("#geolocmessage").append("Please wait..."),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){var e=t.coords.longitude,a=t.coords.latitude;$("#place1in").val(""),$("#long1in").val(e),$("#lat1in").val(a),$("#geolocmessage").empty();$("#geolocmessage").append("Success! Longitude and latitude have been entered.")},function(t){ipLookUp()}):ipLookUp()}function ipLookUp(){$.ajax({url:"http://ip-api.com/json",success:function(t){var e=t.city;""!=t.region&&(e+=", "+t.region),e+=", "+t.countryCode,$("#place1in").text(e),$("#long1in").text(t.lon),$("#lat1in").text(t.lat),$("#geolocmessage").empty();$("#geolocmessage").append("Success! Longitude and latitude have been entered.")},timeout:1e3,error:function(t,e,a){$("#geolocmessage").empty();$("#geolocerr").append("Unable to determine your location by GPS or IP address!")}})}function changeSyncTime(t,e){var a="#"+e+"Yes",r="#"+e+"No";0==t?($(a).prop("checked",!1),$(r).prop("checked",!0),$(".timeInputLoc2").show()):($(a).prop("checked",!0),$(r).prop("checked",!1),$(".timeInputLoc2").hide())}function changeLocationsAndTimes(t){place1=t.place1in.value,long1=parseFloat(t.long1in.value),lat1=parseFloat(t.lat1in.value);var e=parseFloat(t.tz1in.value);tz1.tz=60*-e;var a=Math.abs(e)+.5/60;tz1.tzString=e>=0?"+":"-";var r=Math.floor(a).toString();r.length<2&&(r="0"+r);var n=Math.floor(60*(a-Math.floor(a))).toString();n.length<2&&(n="0"+n),tz1.tzString+=r+n;var o=parseInt(t.year1in.value),i=parseInt(t.month1in.value),d=parseInt(t.day1in.value),l=parseInt(t.hour1in.value),s=parseInt(t.minute1in.value),c=parseFloat(t.second1in.value);place2=t.place2in.value,long2=parseFloat(t.long2in.value),lat2=parseFloat(t.lat2in.value);var p=parseFloat(t.tz2in.value);tz2.tz=60*-p,a=Math.abs(p)+.5/60,tz2.tzString=p>=0?"+":"-",(r=Math.floor(a).toString()).length<2&&(r="0"+r),(n=Math.floor(60*(a-Math.floor(a))).toString()).length<2&&(n="0"+n),tz2.tzString+=r+n;var h,u,g,m,v,f,y=document.getElementById("synTimeYes").checked;y?(h=o,u=i,g=d,m=l,v=s,f=c):(h=parseInt(t.year2in.value),u=parseInt(t.month2in.value),g=parseInt(t.day2in.value),m=parseInt(t.hour2in.value),v=parseInt(t.minute2in.value),f=parseFloat(t.second2in.value));var M="#errorlocs";$(M).empty();var T=-180,S=180,b="Invalid longitude! Longitude must be a number between -180 and 180. West of Greenwich is negative; east of Greenwich is positive.";if(sanityCheck(long1,"#long1in",T,S,b,M),sanityCheck(long2,"#long2in",T,S,b,M),T=-90,S=90,b="Invalid latitude! Latitude must be a number between -90 and 90, positive in the northern hemisphere and negative in the southern hemisphere.",sanityCheck(lat1,"#lat1in",T,S,b,M),sanityCheck(lat2,"#lat2in",T,S,b,M),b="Invalid year! Please enter an integer between "+(T=-2e5)+" and "+(S=2e5)+". Note that 0 means 1 BCE, -1 means 2 BCE and so on. Warning: positions of the Sun, Moon and planets are not accurate outside the years between -3000 and 3000.",sanityCheck(o,"#year1in",T,S,b,M),y||sanityCheck(h,"#year2in",T,S,b,M),T=1,S=12,b="Invalid month! Month must be an integer between 1 and 12.",sanityCheck(i,"#month1in",T,S,b,M),y||sanityCheck(u,"#month2in",T,S,b,M),T=1,S=31,b="Invalid day! Day must be an integer between 1 and 31.",sanityCheck(d,"#day1in",T,S,b,M),y||sanityCheck(g,"#day2in",T,S,b,M),T=0,S=23,b="Invalid hour! Hour must be an integer between 0 and 23.",sanityCheck(l,"#hour1in",T,S,b,M),y||sanityCheck(m,"#hour2in",T,S,b,M),T=0,S=59,b="Invalid minute! Minute must be an integer between 0 and 59.",sanityCheck(s,"#minute1in",T,S,b,M),y||sanityCheck(v,"#minute2in",T,S,b,M),T=0,S=60,b="Invalid second! Second must be a number between 0 and 60.",sanityCheck(c,"#second1in",T,S,b,M),y||sanityCheck(f,"#second2in",T,S,b,M),T=-12,S=14,b="Invalid time zone! Time zone must be a number between -12 and 14.",sanityCheck(e,"#tz1in",T,S,b,M),sanityCheck(p,"#tz2in",T,S,b,M),""==$(M).text()){$("#inputlocs").slideUp(),$("button.menu").attr("disabled",!1);var x=getDm(o,i,d,0),L=CalDat(x);o=L.yy,i=L.mm,d=L.dd;var z=L.dateString,P=generateTimeString(l,s,c),C=(x=getDm(o,i,d,tz1.tz)+(l+s/60+c/3600)/24)/36525,_=DeltaT(C),w=getGMST(date1={yyyy:o,mm:i,dd:d,h:l,m:s,s:c,tz:tz1.tz,tzString:tz1.tzString,dateString:z,timeString:P,D:x,T:C,dT:_}),A=getSidereal(w,long1);date1.LST=A.hour,date1.LST_rad=A.rad,date1.LSTstring=A.string,x=getDm(h,u,g,0),h=(L=CalDat(x)).yy,u=L.mm,g=L.dd,z=L.dateString,P=generateTimeString(m,v,f),C=(x=getDm(h,u,g,tz2.tz)+(m+v/60+f/3600)/24)/36525,_=DeltaT(C),A=getSidereal(w=getGMST(date2={yyyy:h,mm:u,dd:g,h:m,m:v,s:f,tz:tz2.tz,tzString:tz1.tzString,dateString:z,timeString:P,D:x,T:C,dT:_}),long2),date2.LST=A.hour,date2.LST_rad=A.rad,date2.LSTstring=A.string,starChart()}}function showHide(t,e){var a=t.toString();$("#show"+e+a).toggleClass("active"),starChartLoc(t)}function getGMST(t){var e=Math.floor(t.D-.5)+.5,a=t.h+t.m/60+t.s/3600+t.tz/60;a-=24*Math.floor(a/24);var r=.06570748587250752*e;r-=24*Math.floor(r/24),r+=6.697374558336001+1.0027378119113546*a,r-=24*Math.floor(r/24);var n=t.T+t.dT;return r+=n*(.08541030618518518+2577003148148148e-20*n)-2.686296296296296e-7,r-=24*Math.floor(r/24)}function getSidereal(t,e){var a=t+e/15,r=(a-=24*Math.floor(a/24))*Math.PI/12,n=a+.5/3600,o=Math.floor(n).toString(),i=Math.floor(60*(n-o)).toString(),d=Math.floor(3600*(n-o-i/60)).toString();return o.length<2&&(o="0"+o),i.length<2&&(i="0"+i),d.length<2&&(d="0"+d),{hour:a,rad:r,string:o+":"+i+":"+d}}function starChart(){var t=date1.dateString+"&nbsp;&nbsp;"+date1.timeString+"  GMT"+tz1.tzString,e=date2.dateString+"&nbsp;&nbsp;"+date2.timeString+" GMT"+tz2.tzString;$("#place1").text(place1),$("#long1").html(long1+"&deg;"),$("#lat1").html(lat1+"&deg;"),$("#time1").html(t),$("#siderealTime1").text(date1.LSTstring),$("#place2").text(place2),$("#long2").html(long2+"&deg;"),$("#lat2").html(lat2+"&deg;"),$("#time2").html(e),$("#siderealTime2").text(date2.LSTstring);var a=setupDrawingParameters();starChartLoc(1),starChartLoc(2),addLegend(a)}function starChartLoc(t){var e,a,r;1==t?(e=date1,a=lat1):(e=date2,a=lat2);var n=a*Math.PI/180,o=t.toString(),i=document.getElementById("loc"+o);Math.abs(e.yyyy)>3e3&&""==$("#warning"+o).text()&&$("#warning"+o).append('<p style="color:red;">Warning: Positions of the Sun, Moon and planets are not accurate at this time.</p>'),Math.abs(e.yyyy)<3e3&&""!=$("#warning"+o).text()&&$("#warning"+o).empty();e.T;var d=e.T+e.dT,l=setupDrawingParameters();l.loc=t;var s={milky:{}};if(l.showPlanets=$("#showPlanets"+o).hasClass("active"),l.showEquator=$("#showEquator"+o).hasClass("active"),l.showEcliptic=$("#showEcliptic"+o).hasClass("active"),l.showMilkyWay=$("#showMilkyWay"+o).hasClass("active"),l.showConLines=$("#showConLines"+o).hasClass("active"),l.showConLab=$("#showConLab"+o).hasClass("active"),l.showDayNight=$("#showDayNight"+o).hasClass("active"),l.showEcliptic&&(Math.abs(d)<1?l.eclipticNorthPoleDec=1.16170371649804:l.eclipticNorthPoleDec=.5*Math.PI-epsA(d)),l.showMilkyWay){s.milky.north=milkyLoc[t-1].northernEdge,s.milky.south=milkyLoc[t-1].southernEdge,s.milky.betaCas=milkyLoc[t-1].betaCas,s.milky.thetaOph=milkyLoc[t-1].thetaOph,s.milky.lambdaSco=milkyLoc[t-1].lambdaSco,s.milky.coalsack=milkyLoc[t-1].coalsack,r=s.milky.north[0].Tepoch,Math.abs(d-r)>.1&&milkyWayBoundaryPrecession(s.milky,r,d);var c=galacticNorthPole(d);l.galPoleRa=c.ra,l.galPoleDec=c.dec}if(s.conLines=constellationLines(),l.showConLab&&(s.conLab=conLabelLoc[t-1],r=s.conLab[0].Tepoch,Math.abs(d-r)>.1)){var p=precession_matrix(r,d-r);addPrecession(s.conLab,p,d);for(var h=1;h<s.conLab.length;h++)if("ra2"in s.conLab[h]){var u=precessed_ra_dec(s.conLab[h].ra2,s.conLab[h].dec2,p);s.conLab[h].ra2=u.ra,s.conLab[h].dec2=u.dec}}s.stars=starsLoc[t-1],r=s.stars[0].Tepoch,Math.abs(d-r)>.1&&recomputeStarPos(d,s.stars),l.showPlanets?s.planets=sunMoonPlanets(d):(s.planets=[],s.planets[0]=MiniSun(d)),drawStarsPlanets(i,s,l,e.LST_rad,n)}function drawStarsPlanets(t,e,a,r,n){var o=t.getContext("2d");o.clearRect(0,0,t.width,t.height);var i=Math.cos(n),d=Math.sin(n),l=.5*Math.PI,s=2*Math.PI,c=.47*Math.max(t.width,t.height),p=.5*t.width,h=.5*t.height,u={ra:e.planets[0].ra,dec:e.planets[0].dec},g=180*ra_dec_to_alt_az(u,r,i,d).alt/Math.PI;o.beginPath(),o.setLineDash([]),o.arc(p,h,c,0,2*Math.PI);var m=255,v=255;a.showDayNight&&(m=Math.round(255*(1+g/18)),m=Math.min(m,255),m=Math.max(0,m),v=Math.round(.95*m)),o.fillStyle="rgb("+v+","+v+","+m+")",o.fill(),o.strokeStyle="black",o.stroke(),o.font="20px Arial",o.fillStyle="black",o.fillText("N",p-5,15),o.fillText("S",p-5,t.height),o.fillText("E",0,h+5),o.fillText("W",t.width-18,h+5);var f,y,M,T,S,b,x={halfPI:l,xc:p,yc:h,r:c,r2:c*c,altSun:g};if(drawAzimuthLabels(o,x),a.showEquator){var L="black";m<170&&(L="yellow"),drawCircle(o,r,i,d,{ra:0,dec:l,linestyle:[],color:L},x)}if(a.showEcliptic){var z="brown";m<170&&(z="yellow"),drawCircle(o,r,i,d,{ra:-.5*Math.PI,dec:a.eclipticNorthPoleDec,linestyle:[10,15],color:z},x)}a.showMilkyWay&&(drawMilkyWay(o,r,e.milky,i,d,x,a),drawCircle(o,r,i,d,{ra:a.galPoleRa,dec:a.galPoleDec,linestyle:[14,15],color:"magenta"},x)),(a.showConLines||tipsEnabled)&&(tipsEnabled&&((f=new Array(e.stars.length)).fill(!0),tips[a.loc-1].length=0),drawConstellationLinesAndSetupTips(o,e.conLines,e.stars,r,i,d,x,a,f));var P=e.stars.length;for(o.fillStyle=m<170?"white":"black",y=1;y<P;y++)e.stars[y].mag>magLimit||(b=ra_dec_to_xy_above(e.stars[y],r,i,d,x)).x>-998&&(S=a.starMagA*e.stars[y].mag+a.starMagB,S=Math.max(S,1),o.beginPath(),o.arc(b.x,b.y,S,0,s),o.fill(),tipsEnabled&&e.stars[y].mag<magLimitTip&&f[y]&&(f[y]=!1,S=Math.max(S,3),tips[a.loc-1].push({x:b.x,y:b.y,r2:S*S,object:"star",starInd:y})));if(tipsEnabled&&(f.length=0),a.showPlanets)for(o.font="20px Arial",y=0;y<9;y++){if(u={ra:e.planets[y].ra,dec:e.planets[y].dec},1==y){var C=topoCentricEquatorial(e.planets[y].rGeo,u.ra,u.dec,r,d,i);u={ra:C.raTopo,dec:C.decTopo}}if((b=ra_dec_to_xy_above(u,r,i,d,x)).x>-998){M=b.x,T=b.y;var _=String.fromCharCode(a.code[y]);o.fillStyle=a.color[y],o.fillText(_,M+a.offset[y].x,T+a.offset[y].y),o.beginPath(),o.arc(M,T,a.size[y],0,s),o.fill(),tipsEnabled&&(S=.5*o.measureText(_).width,S=Math.max(S,10),tips[a.loc-1].push({x:M+a.offset[y].x+S,y:T+a.offset[y].y-10,r2:S*S,object:a.pName[y],pIndex:y}))}}a.showConLab&&drawConstellationLabel(o,e.conLab,r,i,d,x,a)}function drawAzimuthLabels(t,e){var a=10*Math.PI/180;t.font="15px Arial",t.txtAlign="center";for(var r=1;r<36;r++){var n=10*r;if(10*r!=90&&10*r!=90&&10*r!=180&&10*r!=270){var o,i,d=r*a,l=Math.cos(d),s=Math.sin(d),c=e.xc-e.r*s,p=e.yc-e.r*l,h=e.xc-1.02*e.r*s,u=e.yc-1.02*e.r*l;n<90||n>270?(o=e.xc-1.03*e.r*s,i=e.yc-1.03*e.r*l):(o=e.xc-1.06*e.r*s,i=e.yc-1.06*e.r*l),t.beginPath(),t.moveTo(c,p),t.lineTo(h,u),t.stroke();var g=n.toString()+String.fromCharCode(176);t.save(),t.translate(o,i),n<90||n>270?t.rotate(-d):t.rotate(Math.PI-d);var m=t.measureText(g).width;t.fillText(g,.5*-m,0),t.restore()}}t.txtAlign="start"}function ra_dec_to_alt_az(t,e,a,r){var n=e-t.ra,o=Math.cos(n),i=Math.sin(n),d=Math.cos(t.dec),l=Math.sin(t.dec),s=l*r+a*d*o;s=Math.asin(s);var c=Math.cos(s),p=d*i/c,h=(d*o*r-l*a)/c;return Math.abs(c)<1e-10&&(p=0,h=1),{alt:s,cosA:h,sinA:p}}function atmosphericRefraction(t,e,a){var r=t+.003137559423803098/(t+.08918632477691024);return.000296705972839036*(2.80198*e/a)/Math.tan(r)}function ra_dec_to_xy_above(t,e,a,r,n){var o=e-t.ra,i=Math.cos(o),d=Math.sin(o),l=Math.cos(t.dec),s=Math.sin(t.dec),c=s*r+a*l*i;c=Math.asin(c);var p,h,u=Math.cos(c),g=l*d/u,m=(l*i*r-s*a)/u;if(Math.abs(u)<1e-10&&(g=0,m=1),c>-.0175&&(c+=atmosphericRefraction(c,101,286)),c>=0){var v=n.r*Math.tan(.5*(n.halfPI-c));p=n.xc+v*g,h=n.yc+v*m}else p=-999,h=-999;return{x:p,y:h}}function ra_dec_to_xy(t,e,a,r,n){var o=e-t.ra,i=Math.cos(o),d=Math.sin(o),l=Math.cos(t.dec),s=Math.sin(t.dec),c=s*r+a*l*i;c=Math.asin(c);var p=Math.cos(c),h=l*d/p,u=(l*i*r-s*a)/p;Math.abs(p)<1e-10&&(h=0,u=1),c>-.0175&&(c+=atmosphericRefraction(c,101,286));var g=n.r*Math.tan(.5*(n.halfPI-c));return{x:n.xc+g*h,y:n.yc+g*u}}function topoCentricEquatorial(t,e,a,r,n,o){var i=t*Math.cos(e)*Math.cos(a),d=t*Math.sin(e)*Math.cos(a),l=t*Math.sin(a),s=.9933056020041341,c=6378.1366/Math.sqrt(o*o+s*n*n),p=s*c,h=i-c*o*Math.cos(r),u=d-c*o*Math.sin(r),g=l-p*n,m=Math.sqrt(h*h+u*u+g*g);return{rTopo:m,raTopo:Math.atan2(u,h),decTopo:Math.asin(g/m)}}function drawCircle(t,e,a,r,n,o){var i,d,l,s,c,p=!0;if(Math.abs(n.dec-o.halfPI)<1e-5)i=-a,d=0,l=r;else{var h,u=e-n.ra,g=Math.sin(u),m=Math.cos(u),v=Math.sin(n.dec),f=Math.cos(n.dec),y=r*v+a*f*m;Math.abs(Math.abs(y)-1)<1e-5?p=!1:(i=(h=Math.sqrt(1-y*y))*(c=(f*m*r-v*a)/h),d=h*(s=f*g/h),l=y)}if(p){var M=Math.sqrt(i*i+d*d),T=-d/M,S=i/M,b=-l*S,x=l*T,L=M,z=Math.PI/25;t.beginPath(),t.setLineDash(n.linestyle),s=S,c=T;var P=o.xc+o.r*s,C=o.yc+o.r*c;t.moveTo(P,C);for(var _=1;_<25;_++){var w=_*z,A=Math.cos(w),$=Math.sin(w),D=A*T+$*b,k=A*S+$*x,I=$*L,E=Math.sqrt(D*D+k*k);if(E<1e-5)t.lineTo(o.xc,o.yc);else{c=D/E,s=k/E;var R=Math.asin(I),F=o.r*Math.tan(.5*(o.halfPI-R));P=o.xc+F*s,C=o.yc+F*c;t.lineTo(P,C)}}s=-S,c=-T,P=o.xc+o.r*s,C=o.yc+o.r*c,t.lineTo(P,C),t.strokeStyle=n.color,t.stroke()}}function milkyWayBoundaryPrecession(t,e,a){var r=precession_matrix(e,a-e);addPrecession(t.north,r,a),addPrecession(t.south,r,a),addPrecession(t.betaCas,r),addPrecession(t.thetaOph,r,a),addPrecession(t.lambdaSco,r,a),addPrecession(t.coalsack,r,a)}function addPrecession(t,e,a){t[0].epoch="",t[0].Tepoch=a;for(var r=1;r<t.length;r++){var n=precessed_ra_dec(t[r].ra,t[r].dec,e);t[r].ra=n.ra,t[r].dec=n.dec}}function drawMilkyWay(t,e,a,r,n,o,i){i.showDayNight&&o.altSun<-6?t.strokeStyle="yellow":t.strokeStyle="blue",t.setLineDash([]),drawLineAboveHorizon(t,e,a.north,r,n,o),drawLineAboveHorizon(t,e,a.south,r,n,o),drawLineAboveHorizon(t,e,a.betaCas,r,n,o),drawLineAboveHorizon(t,e,a.thetaOph,r,n,o),drawLineAboveHorizon(t,e,a.lambdaSco,r,n,o),drawLineAboveHorizon(t,e,a.coalsack,r,n,o)}function drawLineAboveHorizon(t,e,a,r,n,o){var i,d,l={ra:a[1].ra,dec:a[1].dec},s=ra_dec_to_xy(l,e,r,n,o);i=s.x,d=s.y;for(var c=2;c<a.length;c++)addLine(t,i,d,i=(s=ra_dec_to_xy(l={ra:a[c].ra,dec:a[c].dec},e,r,n,o)).x,d=s.y,o)}function galacticNorthPole(t){var e=precession_matrix(0,t);return precessed_ra_dec(3.366012906575397,.4734787372451951,e)}function drawConstellationLinesAndSetupTips(t,e,a,r,n,o,i,d,l){var s,c,p,h;for(t.strokeStyle="#1B9722",d.showDayNight&&i.altSun<-6&&(t.strokeStyle="#93ff33"),t.setLineDash([]),c=0;c<e.length;c++)$.each(e[c],function(e,c){if("name"!=e&&"abbr"!=e){var u,g,m,v,f={ra:a[c[0]].ra,dec:a[c[0]].dec},y=ra_dec_to_xy(f,r,n,o,i);g=y.x,v=y.y,h=(g-i.xc)*(g-i.xc)+(v-i.yc)*(v-i.yc),tipsEnabled&&l[c[0]]&&h<i.r2&&(s=c[0],l[s]=!1,p=d.starMagA*a[s].mag+d.starMagB,p=Math.max(p,3),tips[d.loc-1].push({x:g,y:v,r2:p*p,object:"star",starInd:s}));for(var M=1;M<c.length;M++)u=g,m=v,g=(y=ra_dec_to_xy(f={ra:a[c[M]].ra,dec:a[c[M]].dec},r,n,o,i)).x,v=y.y,d.showConLines&&addLine(t,u,m,g,v,i),h=(g-i.xc)*(g-i.xc)+(v-i.yc)*(v-i.yc),tipsEnabled&&l[c[M]]&&h<i.r2&&(s=c[M],l[s]=!1,p=d.starMagA*a[s].mag+d.starMagB,p=Math.max(p,3),tips[d.loc-1].push({x:g,y:v,r2:p*p,object:"star",starInd:s}))}})}function drawConstellationLabel(t,e,a,r,n,o,i){t.font=12..toString()+"px Arial";var d=255,l=255;i.showDayNight&&(d=Math.round(255*(1+o.altSun/18)),d=Math.min(d,255),d=Math.max(0,d),l=Math.round(.95*d));var s="orange";d>130&&(s="#6c3483");for(var c="rgb("+l+","+l+","+d+")",p=1;p<e.length;p++){var h={ra:e[p].ra,dec:e[p].dec},u=ra_dec_to_xy_above(h,a,r,n,o);if(u.x>-998){var g=t.measureText(e[p].abbr).width;t.fillStyle=c,t.fillRect(u.x,u.y-12,g,12),t.fillStyle=s,t.fillText(e[p].abbr,u.x,u.y)}"ra2"in e[p]&&(u=ra_dec_to_xy_above(h={ra:e[p].ra2,dec:e[p].dec2},a,r,n,o)).x>-998&&(t.fillStyle=c,t.fillRect(u.x,u.y-12,g,12),t.fillStyle=s,t.fillText(e[p].abbr,u.x,u.y))}}function recomputeStarPos(t,e){var a=e[0].Tepoch,r=t-a;e[0].epoch="",e[0].Tepoch=t;for(var n=precession_matrix(a,r),o=1;o<e.length;o++){var i=e[o].x+e[o].vx*r,d=e[o].y+e[o].vy*r,l=e[o].z+e[o].vz*r,s=Math.sqrt(i*i+d*d+l*l);e[o].dist2000<99e3&&(e[o].mag=e[o].mag2000+5*Math.LOG10E*Math.log(s/e[o].dist2000)),e[o].x=n.p11*i+n.p12*d+n.p13*l,e[o].y=n.p21*i+n.p22*d+n.p23*l,e[o].z=n.p31*i+n.p32*d+n.p33*l;var c=e[o].vx,p=e[o].vy,h=e[o].vz;e[o].vx=n.p11*c+n.p12*p+n.p13*h,e[o].vy=n.p21*c+n.p22*p+n.p23*h,e[o].vz=n.p31*c+n.p32*p+n.p33*h,e[o].ra=Math.atan2(e[o].y,e[o].x),e[o].dec=Math.asin(e[o].z/s)}}function addLine(t,e,a,r,n,o){var i=function(t){return t*t},d=i(e-o.xc)+i(a-o.yc),l=i(r-o.xc)+i(n-o.yc);if(!(d>o.r2&&l>o.r2)){var s=e,c=r,p=a,h=n;if(d>o.r2||l>o.r2){var u,g=(e-o.xc)*(r-o.xc)+(a-o.yc)*(n-o.yc),m=i(e-r)+i(a-n),v=d-g;d<=o.r2?(c=e+(u=(v+Math.sqrt(v*v+m*(o.r2-d)))/m)*(r-e),h=a+u*(n-a)):(s=e+(u=(v-Math.sqrt(v*v+m*(o.r2-d)))/m)*(r-e),p=a+u*(n-a))}t.beginPath(),t.moveTo(s,p),t.lineTo(c,h),t.stroke()}}function addLegend(t){var e,a,r,n,o=document.getElementById("legend"),i=o.getContext("2d");i.clearRect(0,0,o.width,o.height),i.font="20px Arial",i.fillStyle="black",i.fillText("Magnitude scale:",0,20);var d=2*Math.PI;for(e=-1;e<6;e++){a=t.starMagA*e+t.starMagB,r=180+40*(e+1);var l=-20;-1==e&&(l=-22),i.fillText(e.toString(),r+l,20),i.beginPath(),i.arc(r,15,a,0,d),i.fill()}i.fillText("Planet symbols:   Sun",0,50),i.fillText("Moon",270,50),i.fillText("Mercury",380,50),i.fillText("Venus",160,75),i.fillText("Mars",270,75),i.fillText("Jupiter",380,75),i.fillText("Saturn",160,100),i.fillText("Uranus",270,100),i.fillText("Neptune",380,100),i.fillStyle=t.color[0],r=195,n=50,i.fillText(String.fromCharCode(t.code[0]),r,n),i.beginPath(),i.arc(r-t.offset[0].x,n-t.offset[0].y,t.size[0],0,d),i.fill(),i.fillStyle=t.color[1],r=320,i.fillText(String.fromCharCode(t.code[1]),r,n),i.beginPath(),i.arc(r-t.offset[1].x,n-t.offset[1].y,t.size[1],0,d),i.fill(),i.fillStyle=t.color[2],r=455,i.fillText(String.fromCharCode(t.code[2]),r,n),i.beginPath(),i.arc(r-t.offset[2].x,n-t.offset[2].y,t.size[2],0,d),i.fill(),i.fillStyle=t.color[3],r=220,n=75,i.fillText(String.fromCharCode(t.code[3]),r,n),i.beginPath(),i.arc(r-t.offset[3].x,n-t.offset[3].y,t.size[3],0,d),i.fill(),i.fillStyle=t.color[4],r=320,i.fillText(String.fromCharCode(t.code[4]),r,n),i.beginPath(),i.arc(r-t.offset[4].x,n-t.offset[4].y,t.size[4],0,d),i.fill(),i.fillStyle=t.color[5],r=445,i.fillText(String.fromCharCode(t.code[5]),r,n),i.beginPath(),i.arc(r-t.offset[5].x,n-t.offset[5].y,t.size[5],0,d),i.fill(),i.fillStyle=t.color[6],r=225,n=100,i.fillText(String.fromCharCode(t.code[6]),r,n),i.beginPath(),i.arc(r-t.offset[6].x,n-t.offset[6].y,t.size[6],0,d),i.fill(),i.fillStyle=t.color[7],r=335,i.fillText(String.fromCharCode(t.code[7]),r,n),i.beginPath(),i.arc(r-t.offset[7].x,n-t.offset[7].y,t.size[7],0,d),i.fill(),i.fillStyle=t.color[8],r=460,i.fillText(String.fromCharCode(t.code[8]),r,n),i.beginPath(),i.arc(r-t.offset[8].x,n-t.offset[8].y,t.size[8],0,d),i.fill()}function displayPopup(t,e){var a,r,n=document.getElementById("loc"+e).getBoundingClientRect(),o=t.clientX-n.left,i=t.clientY-n.top,d=!1;for(a=0;a<tips[e-1].length;a++){var l=o-(r=tips[e-1][a]).x,s=i-r.y;if(l*l+s*s<r.r2){d=!0;break}}if(d){var c,p,h="#tip"+e;$(h+"text").empty(),1==e?(c=date1,long1,p=lat1*Math.PI/180):(c=date2,long2,p=lat2*Math.PI/180);var u=c.h+c.m/60+c.s/3600,g=c.LST_rad-1.0027378119113546*u*Math.PI/12;g-=2*Math.PI*Math.floor(.5*g/Math.PI);var m={loc:e,lat:p,LST:c.LST_rad,LST0:g,T:c.T,dT:c.dT,hours:u},v=c.T+c.dT;v>-50&&v<10&&(m.nu=nutation(v),m.LAST=m.LST+m.nu.Ee),"star"==r.object?displayPopupStar(r,m):"Sun"==r.object?displayPopupSun(r,m):"Moon"==r.object?displayPopupMoon(r,m):displayPopupPlanet(r,m),$(h).css("left",r.x+3+"px"),$(h).css("top",r.y+3+"px"),$(h).show()}}function closePopup(t){var e="#"+t;$(e).hide(),$(e+"text").empty(),$(e).css("left","-200px")}function displayPopupSun(t,e){var a,r=[!1,!1,!0,!1,!1,!1,!1,!1],n=e.T+e.dT;a=highPrecCalInTips?planetGeoVSOP(n,"Sun",!1):planetPos(n,r)[2];var o,i,d=180/Math.PI,l=12/Math.PI,s=convertDM(a.ra2000*l,"hm"),c=convertDM(a.dec2000*d,"dm"),p=Math.cos(e.lat),h=Math.sin(e.lat),u=e.LST;"nu"in e?(u=e.LAST,o=precessed_ra_dec(a.ra,a.dec,e.nu),a.ra=o.ra,a.dec=o.dec,i=topoCentricEquatorial(149597870.7*a.rGeo,a.ra,a.dec,u,h,p)):i=topoCentricEquatorial(149597870.7*a.rGeo,a.ra,a.dec,u,h,p);var g={ra:i.raTopo,dec:i.decTopo};if("nu"in e){var m={T:n,m:e.nu,LAST:e.LAST,cosLat:p,sinLat:h};g=aberration(i.raTopo,i.decTopo,m)}var v=convertDM(g.ra*l,"hm"),f=convertDM(g.dec*d,"dm"),y=precession_matrix(n,-n);if("nu"in e){var M={p11:e.nu.p11,p12:e.nu.p21,p13:e.nu.p31,p21:e.nu.p12,p22:e.nu.p22,p23:e.nu.p32,p31:e.nu.p13,p32:e.nu.p23,p33:e.nu.p33};o=precessed_ra_dec(i.raTopo,i.decTopo,M),o=precessed_ra_dec(o.ra,o.dec,y)}else o=precessed_ra_dec(i.raTopo,i.decTopo,y);var T=convertDM(o.ra*l,"hm"),S=convertDM(o.dec*d,"dm"),b=31.965/a.rGeo,x=ra_dec_to_alt_az(o={ra:g.ra,dec:g.dec},u,p,h),L=(x.alt+atmosphericRefraction(x.alt,101,286))*d,z=Math.atan2(x.sinA,x.cosA)*d+180;L=L.toFixed(2)+"&deg;",z=z.toFixed(2)+"&deg;";for(var P=n-e.hours/876600,C=[],_=[],w=0;w<25;w++)a=planetPos(P+w/876600,r)[2],C[w]=a.ra,_[w]=a.dec;var A=getTransitTime(e.LST0,e.lat,C,_,!1),D=A.t+" ("+A.alt+")",k=-.01454441043328608,I=getRiseSet(k,e.LST0,e.lat,C,_),E=I.rise+" ("+I.azRise+"), "+I.set;"above"==I.rise&&(E="circumpolar"),k=-.1047197551196598;var R=(I=getRiseSet(k,e.LST0,e.lat,C,_)).rise+", "+I.set;"above"==I.rise&&(R="above -6&deg;"),k=-.2094395102393196;var F=(I=getRiseSet(k,e.LST0,e.lat,C,_)).rise+", "+I.set;"above"==I.rise&&(F="above -12&deg;"),k=-.3141592653589793;var G=(I=getRiseSet(k,e.LST0,e.lat,C,_)).rise+", "+I.set;"above"==I.rise&&(G="above -18&deg;");var q="<table>";q+='<tr><th colspan="2">Sun</th></tr>',q+="<tr><td>Distance</td> <td>"+a.rGeo.toFixed(3)+" AU</td></tr>",q+="<tr><td>Angular Diameter</td> <td>"+b.toFixed(1)+"'</td></tr>",q+="<tr><td>Geocentric Ra, Dec (J2000)</td> <td>"+s+", "+c+"</td></tr>",q+="<tr><td>Topocentric Ra, Dec (J2000)</td> <td>"+T+", "+S+"</td></tr>","nu"in e?(q+="<tr><td>App. Topo. Ra, Dec (of date)</td> <td>"+v+", "+f+"</td></tr>",q+="<tr><td>Apparent Sidereal Time</td> <td>"+convertDM(12*e.LAST/Math.PI,"hm")+"</td></tr>"):q+="<tr><td>Topocentric Ra, Dec (of date)</td> <td>"+v+", "+f+"</td></tr>",q+="<tr><td>Altitude, Azimuth</td> <td>"+L+", "+z+"</td></tr>",q+="<tr><td>Rise (Azi), Set</td> <td>"+E+"</td></tr>",q+="<tr><td>Upper Transit (Altitude)</td> <td>"+D+"</td></tr>",q+="<tr><td>Civ. Twi. beg., end</td> <td>"+R+"</td></tr>",q+="<tr><td>Nat. Twi. beg., end</td> <td>"+F+"</td></tr>",q+="<tr><td>Ast. Twi. beg., end</td> <td>"+G+"</td></tr>";var N="#tip"+e.loc+"text";$(N).append(q)}function displayPopupMoon(t,e){var a,r,n,o,i,d,l=e.T+e.dT;if(highPrecCalInTips){n=(a=MoonPosElpMpp02(l,!0)).rGeo;d=(r=planetPos(l,[!1,!1,!0,!1,!1,!1,!1,!1])[2]).rGeo,i=r.lam2000,o=a.lam2000}else a=MediumMoon(l),d=1,i=(r=MiniSun(l)).lam,o=a.lam,n=a.rGeo;var s,c,p=180/Math.PI,h=12/Math.PI,u=Math.cos(e.lat),g=Math.sin(e.lat),m=convertDM(a.ra2000*h,"hm"),v=convertDM(a.dec2000*p,"dm"),f=e.LST;"nu"in e?(f=e.LAST,s=precessed_ra_dec(a.ra,a.dec,e.nu),a.ra=s.ra,a.dec=s.dec,c=topoCentricEquatorial(a.rGeo,a.ra,a.dec,f,g,u)):c=topoCentricEquatorial(a.rGeo,a.ra,a.dec,e.LST,g,u);var y={ra:c.raTopo,dec:c.decTopo};if("nu"in e){var M=15514103102587391e-22*u/Math.sqrt(u*u+.9933056020041341*g*g),T=-M*Math.sin(e.LAST),S=M*Math.cos(e.LAST),b=Math.cos(y.ra)*Math.cos(y.dec)+T,x=Math.sin(y.ra)*Math.cos(y.dec)+S,L=Math.sin(y.dec),z=Math.sqrt(b*b+x*x+L*L);y.ra=Math.atan2(x,b),y.dec=Math.asin(L/z)}var P=convertDM(y.ra*h,"hm"),C=convertDM(y.dec*p,"dm"),_=c.rTopo,w=precession_matrix(l,-l);if("nu"in e){var A={p11:e.nu.p11,p12:e.nu.p21,p13:e.nu.p31,p21:e.nu.p12,p22:e.nu.p22,p23:e.nu.p32,p31:e.nu.p13,p32:e.nu.p23,p33:e.nu.p33};s=precessed_ra_dec(c.raTopo,c.decTopo,A),s=precessed_ra_dec(s.ra,s.dec,w)}else s=precessed_ra_dec(c.raTopo,c.decTopo,w);var D=convertDM(s.ra*h,"hm"),k=convertDM(s.dec*p,"dm"),I=ra_dec_to_alt_az(s={ra:y.ra,dec:y.dec},f,u,g),E=(I.alt+atmosphericRefraction(I.alt,101,286))*p,R=Math.atan2(I.sinA,I.cosA)*p+180;E=E.toFixed(2)+"&deg;",R=R.toFixed(2)+"&deg;";for(var F=moonIlluminated(r.ra,r.dec,c.raTopo,c.decTopo,i,o,_,d),G=F.illuminated.toFixed(2),q=F.phase,N=F.elongTxt,U=F.mag.toFixed(1),B=l-e.hours/876600,O=[],j=[],H=0;H<25;H++)a=MediumMoon(B+H/876600),O[H]=a.ra,j[H]=a.dec;var W=getTransitTime(e.LST0,e.lat,O,j,!0),J=W.t+" ("+W.alt+")",V=getRiseSet(.002327105669325773,e.LST0,e.lat,O,j),Y=V.rise+" ("+V.azRise+")",X=V.set+" ("+V.azSet+")";"above"==V.rise&&(Y="circumpolar",X="circumpolar");var K="<table>";K+='<tr><th colspan="2">Moon</th></tr>',K+="<tr><td>Geocentric Distance</td><td>"+n.toFixed(0)+" km ("+(n/6371).toFixed(1)+"R<sub>&oplus;</sub>)</td></tr>",K+="<tr><td>Topocentric Distance</td><td>"+_.toFixed(0)+" km ("+(_/6371).toFixed(1)+"R<sub>&oplus;</sub>)</td></tr>",K+="<tr><td>Angular Diameter</td> <td>"+(3475/_*10800/Math.PI).toFixed(1)+"'</td></tr>",K+="<tr><td>Phase</td> <td>"+q+"</td></tr>",K+="<tr><td>Illuminated</td> <td>"+G+"</td> </tr>",K+="<tr><td>Apparent Magnitude</td> <td>"+U+"</td> </tr>",K+="<tr><td>Solar Elongation</td> <td>"+N+"</td> </tr>",K+="<tr><td>Geocentric Ra, Dec (J2000)</td> <td>"+m+", "+v+"</td></tr>",K+="<tr><td>Topocentric Ra, Dec (J2000)</td> <td>"+D+", "+k+"</td></tr>","nu"in e?(K+="<tr><td>App. Topo. Ra, Dec (of date)</td> <td>"+P+", "+C+"</td></tr>",K+="<tr><td>Apparent Sidereal Time</td> <td>"+convertDM(12*e.LAST/Math.PI,"hm")+"</td></tr>"):K+="<tr><td>Topocentric Ra, Dec (of date)</td> <td>"+P+", "+C+"</td></tr>",K+="<tr><td>Altitude, Azimuth</td> <td>"+E+", "+R+"</td></tr>",K+="<tr><td>Rise (Azimuth)</td> <td>"+Y+"</td></tr>",K+="<tr><td>Upper Transit (Altitude)</td> <td>"+J+"</td></tr>",K+="<tr><td>Set (Azimuth)</td> <td>"+X+"</td></tr>";var Q="#tip"+e.loc+"text";$(Q).append(K)}function displayPopupPlanet(t,e){var a=[!1,!1,!0,!1,!1,!1,!1,!1],r=t.pIndex-1;t.pIndex<4&&r--,a[r]=!0;var n,o,i=e.T+e.dT;if(highPrecCalInTips)o={rGeo:(n=planetGeoVSOP(i,t.object,!0)).dSunEarth,lam2000:n.lamSun2000,bet2000:n.betSun2000};else{var d=planetPos(i,a);n=d[r],o=d[2]}var l,s,c=n.rHelio,p=n.rGeo,h=180/Math.PI,u=12/Math.PI,g=convertDM(n.ra2000*u,"hm"),m=convertDM(n.dec2000*h,"dm"),v=Math.cos(e.lat),f=Math.sin(e.lat),y=e.LST;"nu"in e?(y=e.LAST,l=precessed_ra_dec(n.ra,n.dec,e.nu),n.ra=l.ra,n.dec=l.dec,s=topoCentricEquatorial(149597870.7*p,n.ra,n.dec,y,f,v)):s=topoCentricEquatorial(149597870.7*p,n.ra,n.dec,y,f,v);var M={ra:s.raTopo,dec:s.decTopo};if("nu"in e){var T={T:i,m:e.nu,LAST:e.LAST,cosLat:v,sinLat:f};M=aberration(s.raTopo,s.decTopo,T)}var S=convertDM(M.ra*u,"hm"),b=convertDM(M.dec*h,"dm"),x=precession_matrix(i,-i);if("nu"in e){var L={p11:e.nu.p11,p12:e.nu.p21,p13:e.nu.p31,p21:e.nu.p12,p22:e.nu.p22,p23:e.nu.p32,p31:e.nu.p13,p32:e.nu.p23,p33:e.nu.p33};l=precessed_ra_dec(s.raTopo,s.decTopo,L),l=precessed_ra_dec(l.ra,l.dec,x)}else l=precessed_ra_dec(s.raTopo,s.decTopo,x);var z=convertDM(l.ra*u,"hm"),P=convertDM(l.dec*h,"dm"),C=elongationPhase(n,o),_=C.elongation,w=C.illuminated,A={object:t.object,i:C.phaseAng,rHelio:c,rGeo:p,T:i,planet:n,sun:o},D=planetMag(A),k={Mercury:6.726865375887558,Venus:16.68838398040351,Mars:9.3468517633725,Jupiter:192.78588394427936,Saturn:160.5799887548923,Uranus:69.93800100978119,Neptune:67.89738430970871}[t.object]/p,I=ra_dec_to_alt_az(l={ra:M.ra,dec:M.dec},y,v,f),E=(I.alt+atmosphericRefraction(I.alt,101,286))*h,R=Math.atan2(I.sinA,I.cosA)*h+180;E=E.toFixed(2)+"&deg;",R=R.toFixed(2)+"&deg;";var F=[],G=[],q=i-e.hours/876600;a[2]=!1;for(var N=0;N<25;N++)n=planetPos(q+N/876600,a)[r],F[N]=n.ra,G[N]=n.dec;var U=getTransitTime(e.LST0,e.lat,F,G,!1),B=U.t+" ("+U.alt+")",O=getRiseSet(-.009890199094634533,e.LST0,e.lat,F,G),j=O.rise+" ("+O.azRise+"), "+O.set;"above"==O.rise&&(j="circumpolar");var H="#tip"+e.loc+"text",W="<table>";W+='<tr><th colspan="2">'+t.object+"</th></tr>",W+="<tr><td>Heliocentric Distance</td> <td>"+c.toFixed(3)+" AU</td></tr>",W+="<tr><td>Geocentric Distance</td> <td>"+p.toFixed(3)+" AU</td></tr>",W+="<tr><td>Angular Diameter</td> <td>"+k.toPrecision(3)+'"</td></tr>',W+="<tr> <td>Elongation</td> <td>"+_+"</td></tr>",t.pIndex<5&&(W+="<tr><td>Illuminated</td> <td>"+w+"</td></tr>"),W+="<tr><td>Apparent Magnitude</td> <td>"+D.toFixed(1)+"</td></tr>",W+="<tr><td>Geocentric Ra, Dec (J2000)</td> <td>"+g+", "+m+"</td></tr>",W+="<tr><td>Topocentric Ra, Dec (J2000)</td> <td>"+z+", "+P+"</td></tr>","nu"in e?(W+="<tr><td>App. Topo. Ra, Dec (of date)</td> <td>"+S+", "+b+"</td></tr>",W+="<tr><td>Apparent Sidereal Time</td> <td>"+convertDM(12*e.LAST/Math.PI,"hm")+"</td></tr>"):W+="<tr><td>Topocentric Ra, Dec (of date)</td> <td>"+S+", "+b+"</td></tr>",W+="<tr><td>Altitude, Azimuth</td> <td>"+E+", "+R+"</td></tr>",W+="<tr><td>Rise (Azi), Set</td> <td>"+j+"</td></tr>",W+="<tr><td>Upper Transit (Altitude)</td> <td>"+B+"</td></tr>",$(H).append(W)}function displayPopupStar(t,e){var a=brightStars(),r=a[t.starInd],n=e.T+e.dT,o=a[0].Tepoch,i=n-o,d=r.x+r.vx*i,l=r.y+r.vy*i,s=r.z+r.vz*i,c=Math.sqrt(d*d+l*l+s*s);if(n>-50&&n<10){var p=planetPos(n,[!1,!1,!0,!1,!1,!1,!1,!1])[2],h=p.rGeo*Math.PI/648e3;d-=-h*Math.cos(p.ra2000)*Math.cos(p.dec2000),l-=-h*Math.sin(p.ra2000)*Math.cos(p.dec2000),s-=-h*Math.sin(p.dec2000),c=Math.sqrt(d*d+l*l+s*s)}var u=180/Math.PI,g=12/Math.PI,m=convertDM(Math.atan2(l,d)*g,"hm"),v=convertDM(Math.asin(s/c)*u,"dm"),f=precession_matrix(o,i),y=e.LST;"nu"in e&&(y=e.LAST,f={p11:e.nu.p11*f.p11+e.nu.p12*f.p21+e.nu.p13*f.p31,p12:e.nu.p11*f.p12+e.nu.p12*f.p22+e.nu.p13*f.p32,p13:e.nu.p11*f.p13+e.nu.p12*f.p23+e.nu.p13*f.p33,p21:e.nu.p21*f.p11+e.nu.p22*f.p21+e.nu.p23*f.p31,p22:e.nu.p21*f.p12+e.nu.p22*f.p22+e.nu.p23*f.p32,p23:e.nu.p21*f.p13+e.nu.p22*f.p23+e.nu.p23*f.p33,p31:e.nu.p31*f.p11+e.nu.p32*f.p21+e.nu.p33*f.p31,p32:e.nu.p31*f.p12+e.nu.p32*f.p22+e.nu.p33*f.p32,p33:e.nu.p31*f.p13+e.nu.p32*f.p23+e.nu.p33*f.p33});var M=f.p11*d+f.p12*l+f.p13*s,T=f.p21*d+f.p22*l+f.p23*s,S=f.p31*d+f.p32*l+f.p33*s,b=Math.atan2(T,M),x=Math.asin(S/c);if("nu"in e){var L={T:n,m:e.nu,LAST:e.LAST,cosLat:Math.cos(e.lat),sinLat:Math.sin(e.lat)};b=(q=aberration(b,x,L)).ra,x=q.dec}var z,P=convertDM(b*g,"hm"),C=convertDM(x*u,"dm"),_="<table>",w=r.name,A=3.2616*c,D="";z=r.dist2000>=99e3?"?":c.toPrecision(4)+" pc ("+A.toPrecision(4)+" ly)","bayer"in r&&"<"!=w.slice(0,1)&&(w+=", "+r.bayer+" "+r.con);var k=r.mag.toFixed(2),I="Mag.",E=0;if(r.dist2000<99e3){var R=r.mag+5-5*Math.LOG10E*Math.log(r.dist2000);E=5*Math.LOG10E*Math.log(c/r.dist2000),I+=", Abs. Mag.",k=(k=r.mag+E).toFixed(2)+", "+R.toFixed(2)}if("varMax"in r&&"varMin"in r){var F=parseFloat(r.varMax)+E,G=parseFloat(r.varMin)+E;D=F.toFixed(2)+" &ndash; "+G.toFixed(2)}_+='<tr><th colspan="2">'+w+"</th></tr>",_+="<tr><td>"+I+"</td> <td>"+k+"</td></tr>",""!=D&&(_+="<tr><td>Variable</td> <td>"+D+"</td></tr>"),_+="<tr><td>Distance</td> <td>"+z+"</td></tr>","spect"in r&&(_+="<tr><td>Spec, col. ind.</td> <td>"+r.spect,"colorInd"in r&&(_+=", "+r.colorInd),_+="</td></tr>"),_+="<tr><td>Constellation</td> <td>"+constellationAbbrNames()[r.con]+"</td></tr>",_+="<tr><td>Ra, Dec (J2000)</td> <td>"+m+", "+v+"</td></tr>","nu"in e?(_+="<tr><td>App. Ra, Dec (of date)</td> <td>"+P+", "+C+"</td></tr>",_+="<tr><td>Apparent Sidereal Time</td> <td>"+convertDM(12*e.LAST/Math.PI,"hm")+"</td></tr>"):_+="<tr><td>Ra, Dec (of date)</td> <td>"+P+", "+C+"</td></tr>";var q={ra:b,dec:x},N=ra_dec_to_alt_az(q,y,Math.cos(e.lat),Math.sin(e.lat)),U=(N.alt+atmosphericRefraction(N.alt,101,286))*u,B=Math.atan2(N.sinA,N.cosA)*u+180;_+="<tr><td>Alt, Azimuth</td> <td>"+U.toFixed(2)+"&deg;, "+B.toFixed(2)+"&deg;</td></tr>",U=-.009890199094634533;var O=riseSetStar(e.LST0,U,e.lat,b,x);_+="<tr><td>Upper Transit (Alt)</td> <td>"+(O.transit+" ("+O.altTransit+")")+"</td></tr>";var j=O.rise+" ("+O.azRise+"), "+O.set;"above"==O.rise&&(j="circumpolar"),_+="<tr><td>Rise (Azi), Set</td> <td>"+j+"</td></tr>",_+="</table>";var H="#tip"+e.loc+"text";$(H).append(_)}function setupDrawingParameters(){return{color:["red","orange","maroon","#FF00FF","red","brown","brown","#7277e6","#7277e6"],code:[9788,9789,9791,9792,9794,9795,9796,9954,9798],size:[1,2,1,2,2,2,2,2,2],offset:[{x:-10,y:7},{x:-10,y:7},{x:-5,y:7},{x:-7,y:0},{x:-7,y:2},{x:-10,y:7},{x:-5,y:7},{x:-10,y:3},{x:-8,y:5}],pName:["Sun","Moon","Mercury","Venus","Mars","Jupiter","Saturn","Uranus","Neptune"],starMagA:-4/6.5,starMagB:1- -4/6.5*5}}milkyLoc[0]={northernEdge:northernEdge(),southernEdge:southernEdge(),betaCas:betaCas(),thetaOph:thetaOph(),lambdaSco:lambdaSco(),coalsack:coalsack()},milkyLoc[1]={northernEdge:northernEdge(),southernEdge:southernEdge(),betaCas:betaCas(),thetaOph:thetaOph(),lambdaSco:lambdaSco(),coalsack:coalsack()};