define(["./core","./core/access","./var/document","./var/documentElement","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(t,e,o,s,n,f,i,c){function r(e){return t.isWindow(e)?e:9===e.nodeType&&e.defaultView}return t.offset={setOffset:function(e,o,s){var n,f,i,c,r,l,a,p=t.css(e,"position"),u=t(e),d={};"static"===p&&(e.style.position="relative"),r=u.offset(),i=t.css(e,"top"),l=t.css(e,"left"),a=("absolute"===p||"fixed"===p)&&(i+l).indexOf("auto")>-1,a?(n=u.position(),c=n.top,f=n.left):(c=parseFloat(i)||0,f=parseFloat(l)||0),t.isFunction(o)&&(o=o.call(e,s,t.extend({},r))),null!=o.top&&(d.top=o.top-r.top+c),null!=o.left&&(d.left=o.left-r.left+f),"using"in o?o.using.call(e,d):u.css(d)}},t.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(o){t.offset.setOffset(this,e,o)});var o,s,n=this[0],f={top:0,left:0},i=n&&n.ownerDocument;if(i)return o=i.documentElement,t.contains(o,n)?(f=n.getBoundingClientRect(),s=r(i),{top:f.top+s.pageYOffset-o.clientTop,left:f.left+s.pageXOffset-o.clientLeft}):f},position:function(){if(this[0]){var e,o,s=this[0],n={top:0,left:0};return"fixed"===t.css(s,"position")?o=s.getBoundingClientRect():(e=this.offsetParent(),o=this.offset(),t.nodeName(e[0],"html")||(n=e.offset()),n.top+=t.css(e[0],"borderTopWidth",!0),n.left+=t.css(e[0],"borderLeftWidth",!0)),{top:o.top-n.top-t.css(s,"marginTop",!0),left:o.left-n.left-t.css(s,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===t.css(e,"position");)e=e.offsetParent;return e||s})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,s){var n="pageYOffset"===s;t.fn[o]=function(t){return e(this,function(t,e,o){var f=r(t);return void 0===o?f?f[s]:t[e]:void(f?f.scrollTo(n?f.pageXOffset:o,n?o:f.pageYOffset):t[e]=o)},o,t,arguments.length)}}),t.each(["top","left"],function(e,o){t.cssHooks[o]=i(c.pixelPosition,function(e,s){if(s)return s=f(e,o),n.test(s)?t(e).position()[o]+"px":s})}),t});