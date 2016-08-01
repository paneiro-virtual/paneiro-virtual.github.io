define(["./core","./var/document","./var/documentElement","./var/hasOwn","./var/indexOf"],function(e,n,t,o,r){function c(t,o){if(t===o)return i=!0,0;var c=!t.compareDocumentPosition-!o.compareDocumentPosition;return c?c:(c=(t.ownerDocument||t)===(o.ownerDocument||o)?t.compareDocumentPosition(o):1,1&c?t===n||t.ownerDocument===n&&e.contains(n,t)?-1:o===n||o.ownerDocument===n&&e.contains(n,o)?1:u?r.call(u,t)-r.call(u,o):0:4&c?-1:1)}function a(e){var n,t=[],o=0,r=0;if(i=!1,u=!l&&e.slice(0),e.sort(c),i){for(;n=e[r++];)n===e[r]&&(o=t.push(r));for(;o--;)e.splice(t[o],1)}return u=null,e}var i,u,l=e.expando.split("").sort(c).join("")===e.expando,s=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector;e.extend({find:function(t,o,r,c){var a,i,u=0;if(r=r||[],o=o||n,!t||"string"!=typeof t)return r;if(1!==(i=o.nodeType)&&9!==i)return[];if(c)for(;a=c[u++];)e.find.matchesSelector(a,t)&&r.push(a);else e.merge(r,o.querySelectorAll(t));return r},uniqueSort:a,unique:a,text:function(n){var t,o="",r=0,c=n.nodeType;if(c){if(1===c||9===c||11===c)return n.textContent;if(3===c||4===c)return n.nodeValue}else for(;t=n[r++];)o+=e.text(t);return o},contains:function(e,n){var t=9===e.nodeType?e.documentElement:e,o=n&&n.parentNode;return e===o||!(!o||1!==o.nodeType||!t.contains(o))},isXMLDoc:function(e){var n=e&&(e.ownerDocument||e).documentElement;return!!n&&"HTML"!==n.nodeName},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),e.extend(e.find,{matches:function(n,t){return e.find(n,null,null,t)},matchesSelector:function(e,n){return s.call(e,n)},attr:function(n,t){var r=e.expr.attrHandle[t.toLowerCase()],c=r&&o.call(e.expr.attrHandle,t.toLowerCase())?r(n,t,e.isXMLDoc(n)):void 0;return void 0!==c?c:n.getAttribute(t)}})});