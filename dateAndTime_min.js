"use strict";function getDm(t,r,o,e){var a=e/1440,n=r,h=t;return n<=2&&(n+=12,h--),365*h-679004+(1e4*h+100*n+o<=15821004?-2+Math.floor((h+4716)/4)-1179:Math.floor(h/400)-Math.floor(h/100)+Math.floor(h/4))+Math.floor(30.6001*(n+1))+o-51544.5+a}function CalDat(t){var r,o,e,a,n,h;if((r=Math.floor(t+2451545.5))<0)return CalDatNegativeJD(t+2451545);r<2299161?(o=0,e=r+1524):e=r+(o=Math.floor((r-1867216.25)/36524.25))-Math.floor(.25*o)+1525,(a=Math.floor((e-122.1)/365.25))<0&&a++,n=365*a+Math.floor(.25*a),(h=Math.floor((e-n)/30.6001))<0&&h++;var l=e-n-Math.floor(30.6001*h),i=h-1-12*Math.floor(h/14+1e-5),f=a-4715-Math.floor((7+i)/10+1e-5),g=generateDateString(f,i,l),M=24*(t-Math.floor(t+.5)+.5),s=Math.floor(M),u=Math.floor(60*(M-s)),c=3600*(M-s-u/60);return{yy:f,mm:i,dd:l,h:s,m:u,s:c,dateString:g,timeString:generateTimeString(s,u,c)}}function CalDatNegativeJD(t){var r,o,e,a,n=-Math.floor(t+.5),h=n-Math.floor(n/1461),l=Math.floor(h/(365+1e-10))+1,i=-4712-l,f=365*l+Math.floor(l/4)+1-n;for(r=l%4==0?[0,31,60,91,121,152,182,213,244,274,305,335,366]:[0,31,59,90,120,151,181,212,243,273,304,334,365],o=1;o<13;o++)if(f<=r[o]){e=o,a=f-r[o-1];break}var g=generateDateString(i,e,a),M=24*(.5+(t+n)),s=Math.floor(M),u=Math.floor(60*(M-s)),c=3600*(M-s-u/60);return{yy:i,mm:e,dd:a,h:s,m:u,s:c,dateString:g,timeString:generateTimeString(s,u,c)}}function DeltaT(t){var r,o,e,a,n=100*t+2e3;return 3.16880878140289e-10*(n>2150?32*(r=.01*(n-1820))*r-20:n>2050?32*(r=.01*(n-1820))*r-20-.5628*(2150-n):n>2005?62.92+.32217*(r=n-2e3)+.005589*r*r:n>1986?63.86+.3345*(r=n-2e3)-.060374*(o=r*r)+.0017275*(e=o*r)+651814e-9*(a=o*o)+2373599e-11*(o*e):n>1961?45.45+1.067*(r=n-1975)-(o=r*r)/260-(e=r*o)/718:n>1941?29.07+.407*(r=n-1950)-(o=r*r)/233+(e=r*o)/2547:n>1920?21.2+.84493*(r=n-1920)-.0761*(o=r*r)+.0020936*(e=o*r):n>1900?1.494119*(r=n-1900)-2.79-.0598939*(o=r*r)+.0061966*(e=r*o)-197e-6*(a=o*o):n>1860?7.62+.5737*(r=n-1860)-.251754*(o=r*r)+.01680668*(e=r*o)-.0004473624*(a=o*o)+o*e/233174:n>1800?13.72-.332447*(r=n-1800)+.0068612*(o=r*r)+.0041116*(e=r*o)-37436e-8*(a=o*o)+121272e-10*(o*e)-1.699e-7*(e*e)+8.75e-10*(e*a):n>1700?8.83+.1603*(r=n-1700)-.0059285*(o=r*r)+13336e-8*(e=r*o)-(a=o*o)/1174e3:n>1600?120-.9808*(r=n-1600)-.01532*(o=r*r)+(e=r*o)/7129:n>500?1574.2-556.01*(r=.01*(n-1e3))+71.23472*(o=r*r)+.319781*(e=r*o)-.8503463*(a=o*o)-.005050998*(o*e)+.0083572073*(e*e):n>-500?10583.6-1014.41*(r=.01*n)+33.78311*(o=r*r)-5.952053*(e=r*o)-.1798452*(a=o*o)+.022174192*(o*e)+.0090316521*(e*e):32*(r=.01*(n-1820))*r-20)}function generateDateString(t,r,o){var e=Math.abs(t),a=e=e<10?"000"+e:e<100?"00"+e:e<1e3?"0"+e:e.toString();t<0&&(a="-"+a);var n=r.toString();r<10&&(n="0"+n);var h=o.toString();return o<10&&(h="0"+h),a+"-"+n+"-"+h}function generateTimeString(t,r,o){var e=t+r/60+(o+.5)/3600,a=Math.floor(e),n=Math.floor(60*(e-a)),h=Math.floor(3600*(e-a-n/60));return a=a.toString(),n=n.toString(),h=h.toString(),a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),h.length<2&&(h="0"+h),a+":"+n+":"+h}function showHide(t){$("#show"+t).toggleClass("active"),starCharts()}function sanityCheck(t,r,o,e,a,n){if($(r).css("background-color","white"),isNaN(t)||t<o||t>e){$(r).css("background-color","#e2a8a8");var h='<p style="color:red;">'+a+"</p>";$(n).append(h)}}function convertDM(t,r){var o,e,a,n,h;return e="hm"==r?(t-=24*Math.floor(t/24))+.05/3600:Math.abs(t)+.5/3600,a=Math.floor(e),n=Math.floor(60*(e-a)),h="hm"==r?Math.floor(36e3*(e-a-n/60)):Math.floor(3600*(e-a-n/60)),a=a.toString(),n=n.toString(),h=h.toString(),a.length<2&&(a="0"+a),"dm"==r&&t<0&&(a="-"+a),n.length<2&&(n="0"+n),h.length<2&&(h="0"+h),"hm"==r?(h.length<3&&(h="0"+h),o=a+"<sup>h</sup>"+n+"<sup>m</sup>"+h.slice(0,2)+"."+h.slice(2)+"<sup>s</sup>"):o=a+"&deg;"+n+"'"+h+'"',o}