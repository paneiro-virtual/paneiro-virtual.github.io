require("./_fix-re-wks")("split",2,function(e,i,r){"use strict";var n=require("./_is-regexp"),t=r,s=[].push,c="split",u="length",l="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[u]||2!="ab"[c](/(?:ab)*/)[u]||4!="."[c](/(.?)(.?)/)[u]||"."[c](/()()/)[u]>1||""[c](/.?/)[u]){var o=void 0===/()??/.exec("")[1];r=function(e,i){var r=String(this);if(void 0===e&&0===i)return[];if(!n(e))return t.call(r,e,i);var c,a,d,v,p,f=[],x=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=void 0===i?4294967295:i>>>0,b=new RegExp(e.source,x+"g");for(o||(c=new RegExp("^"+b.source+"$(?!\\s)",x));(a=b.exec(r))&&(d=a.index+a[0][u],!(d>g&&(f.push(r.slice(g,a.index)),!o&&a[u]>1&&a[0].replace(c,function(){for(p=1;p<arguments[u]-2;p++)void 0===arguments[p]&&(a[p]=void 0)}),a[u]>1&&a.index<r[u]&&s.apply(f,a.slice(1)),v=a[0][u],g=d,f[u]>=h)));)b[l]===a.index&&b[l]++;return g===r[u]?!v&&b.test("")||f.push(""):f.push(r.slice(g)),f[u]>h?f.slice(0,h):f}}else"0"[c](void 0,0)[u]&&(r=function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)});return[function(n,t){var s=e(this),c=void 0==n?void 0:n[i];return void 0!==c?c.call(n,s,t):r.call(String(s),n,t)},r]});