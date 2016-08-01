"use strict";var LIBRARY=require("./_library"),global=require("./_global"),ctx=require("./_ctx"),classof=require("./_classof"),$export=require("./_export"),isObject=require("./_is-object"),aFunction=require("./_a-function"),anInstance=require("./_an-instance"),forOf=require("./_for-of"),speciesConstructor=require("./_species-constructor"),task=require("./_task").set,microtask=require("./_microtask")(),PROMISE="Promise",TypeError=global.TypeError,process=global.process,$Promise=global[PROMISE],process=global.process,isNode="process"==classof(process),empty=function(){},Internal,GenericPromiseCapability,Wrapper,USE_NATIVE=!!function(){try{var e=$Promise.resolve(1),r=(e.constructor={})[require("./_wks")("species")]=function(e){e(empty,empty)};return(isNode||"function"==typeof PromiseRejectionEvent)&&e.then(empty)instanceof r}catch(e){}}(),sameConstructor=function(e,r){return e===r||e===$Promise&&r===Wrapper},isThenable=function(e){var r;return!(!isObject(e)||"function"!=typeof(r=e.then))&&r},newPromiseCapability=function(e){return sameConstructor($Promise,e)?new PromiseCapability(e):new GenericPromiseCapability(e)},PromiseCapability=GenericPromiseCapability=function(e){var r,t;this.promise=new e(function(e,o){if(void 0!==r||void 0!==t)throw TypeError("Bad Promise constructor");r=e,t=o}),this.resolve=aFunction(r),this.reject=aFunction(t)},perform=function(e){try{e()}catch(e){return{error:e}}},notify=function(e,r){if(!e._n){e._n=!0;var t=e._c;microtask(function(){for(var o=e._v,i=1==e._s,n=0,s=function(r){var t,n,s=i?r.ok:r.fail,c=r.resolve,a=r.reject,l=r.domain;try{s?(i||(2==e._h&&onHandleUnhandled(e),e._h=1),s===!0?t=o:(l&&l.enter(),t=s(o),l&&l.exit()),t===r.promise?a(TypeError("Promise-chain cycle")):(n=isThenable(t))?n.call(t,c,a):c(t)):a(o)}catch(e){a(e)}};t.length>n;)s(t[n++]);e._c=[],e._n=!1,r&&!e._h&&onUnhandled(e)})}},onUnhandled=function(e){task.call(global,function(){var r,t,o,i=e._v;if(isUnhandled(e)&&(r=perform(function(){isNode?process.emit("unhandledRejection",i,e):(t=global.onunhandledrejection)?t({promise:e,reason:i}):(o=global.console)&&o.error&&o.error("Unhandled promise rejection",i)}),e._h=isNode||isUnhandled(e)?2:1),e._a=void 0,r)throw r.error})},isUnhandled=function(e){if(1==e._h)return!1;for(var r,t=e._a||e._c,o=0;t.length>o;)if(r=t[o++],r.fail||!isUnhandled(r.promise))return!1;return!0},onHandleUnhandled=function(e){task.call(global,function(){var r;isNode?process.emit("rejectionHandled",e):(r=global.onrejectionhandled)&&r({promise:e,reason:e._v})})},$reject=function(e){var r=this;r._d||(r._d=!0,r=r._w||r,r._v=e,r._s=2,r._a||(r._a=r._c.slice()),notify(r,!0))},$resolve=function(e){var r,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw TypeError("Promise can't be resolved itself");(r=isThenable(e))?microtask(function(){var o={_w:t,_d:!1};try{r.call(e,ctx($resolve,o,1),ctx($reject,o,1))}catch(e){$reject.call(o,e)}}):(t._v=e,t._s=1,notify(t,!1))}catch(e){$reject.call({_w:t,_d:!1},e)}}};USE_NATIVE||($Promise=function(e){anInstance(this,$Promise,PROMISE,"_h"),aFunction(e),Internal.call(this);try{e(ctx($resolve,this,1),ctx($reject,this,1))}catch(e){$reject.call(this,e)}},Internal=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},Internal.prototype=require("./_redefine-all")($Promise.prototype,{then:function(e,r){var t=newPromiseCapability(speciesConstructor(this,$Promise));return t.ok="function"!=typeof e||e,t.fail="function"==typeof r&&r,t.domain=isNode?process.domain:void 0,this._c.push(t),this._a&&this._a.push(t),this._s&&notify(this,!1),t.promise},catch:function(e){return this.then(void 0,e)}}),PromiseCapability=function(){var e=new Internal;this.promise=e,this.resolve=ctx($resolve,e,1),this.reject=ctx($reject,e,1)}),$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise}),require("./_set-to-string-tag")($Promise,PROMISE),require("./_set-species")(PROMISE),Wrapper=require("./_core")[PROMISE],$export($export.S+$export.F*!USE_NATIVE,PROMISE,{reject:function(e){var r=newPromiseCapability(this),t=r.reject;return t(e),r.promise}}),$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{resolve:function(e){if(e instanceof $Promise&&sameConstructor(e.constructor,this))return e;var r=newPromiseCapability(this),t=r.resolve;return t(e),r.promise}}),$export($export.S+$export.F*!(USE_NATIVE&&require("./_iter-detect")(function(e){$Promise.all(e).catch(empty)})),PROMISE,{all:function(e){var r=this,t=newPromiseCapability(r),o=t.resolve,i=t.reject,n=perform(function(){var t=[],n=0,s=1;forOf(e,!1,function(e){var c=n++,a=!1;t.push(void 0),s++,r.resolve(e).then(function(e){a||(a=!0,t[c]=e,--s||o(t))},i)}),--s||o(t)});return n&&i(n.error),t.promise},race:function(e){var r=this,t=newPromiseCapability(r),o=t.reject,i=perform(function(){forOf(e,!1,function(e){r.resolve(e).then(t.resolve,o)})});return i&&o(i.error),t.promise}});