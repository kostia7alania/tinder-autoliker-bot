(function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=0)})({0:function(t,n,e){t.exports=e("1984")},"00ee":function(t,n,e){var r=e("b622"),o=r("toStringTag"),c={};c[o]="z",t.exports="[object z]"===String(c)},"0366":function(t,n,e){var r=e("59ed");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),c=e("5c6c"),i=e("fc6a"),a=e("a04b"),u=e("1a2d"),f=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=i(t),n=a(n),f)try{return s(t,n)}catch(e){}if(u(t,n))return c(!o.f.call(t,n),t[n])}},"07fa":function(t,n,e){var r=e("50c4");t.exports=function(t){return r(t.length)}},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),c=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,n){t.exports=function(t){try{return String(t)}catch(n){return"Object"}}},1626:function(t,n){t.exports=function(t){return"function"===typeof t}},1984:function(t,n,e){"use strict";e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("6c57"),e("b0c0"),globalThis.chrome=chrome,chrome.runtime.onInstalled.addListener((function(){console.log("installed!")})),chrome.runtime.onMessageExternal.addListener((function(t,n,e){console.log("Hello from the background",{request:t,sender:n,sendResponse:e})})),console.log("hi frm background.js",chrome);var r=0;chrome.runtime.onConnect.addListener((function(t){"devtools-page"===t.name&&(0===r&&console.log("DevTools window opening.",{port:t}),r++,t.onDisconnect.addListener((function(n){r--,0===r&&console.log("Last DevTools window closing.",{port2:n,port:t})})))})),chrome.runtime.onMessage.addListener((function(t,n){var e,r,o;(console.log("background.js",t,n),"content"===t.from&&"showPageAction"===t.subject)&&(null!==n&&void 0!==n&&null!==(e=n.tab)&&void 0!==e&&e.id&&chrome.pageAction?chrome.pageAction.show(null===n||void 0===n||null===(r=n.tab)||void 0===r?void 0:r.id):console.warn("sender.tab.id =",null===n||void 0===n||null===(o=n.tab)||void 0===o?void 0:o.id))}))},"19aa":function(t,n){t.exports=function(t,n,e){if(t instanceof n)return t;throw TypeError("Incorrect "+(e?e+" ":"")+"invocation")}},"1a2d":function(t,n,e){var r=e("7b0b"),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},"1be4":function(t,n,e){var r=e("d066");t.exports=r("document","documentElement")},"1c7e":function(t,n,e){var r=e("b622"),o=r("iterator"),c=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){c=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(u){}t.exports=function(t,n){if(!n&&!c)return!1;var e=!1;try{var r={};r[o]=function(){return{next:function(){return{done:e=!0}}}},t(r)}catch(u){}return e}},"1cdc":function(t,n,e){var r=e("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},2266:function(t,n,e){var r=e("825a"),o=e("e95a"),c=e("07fa"),i=e("0366"),a=e("9a1f"),u=e("35a1"),f=e("2a62"),s=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,e){var l,d,p,v,b,h,y,g=e&&e.that,m=!(!e||!e.AS_ENTRIES),x=!(!e||!e.IS_ITERATOR),w=!(!e||!e.INTERRUPTED),j=i(n,g,1+m+w),O=function(t){return l&&f(l,"normal",t),new s(!0,t)},S=function(t){return m?(r(t),w?j(t[0],t[1],O):j(t[0],t[1])):w?j(t,O):j(t)};if(x)l=t;else{if(d=u(t),!d)throw TypeError(String(t)+" is not iterable");if(o(d)){for(p=0,v=c(t);v>p;p++)if(b=S(t[p]),b&&b instanceof s)return b;return new s(!1)}l=a(t,d)}h=l.next;while(!(y=h.call(l)).done){try{b=S(y.value)}catch(P){f(l,"throw",P)}if("object"==typeof b&&b&&b instanceof s)return b}return new s(!1)}},"23cb":function(t,n,e){var r=e("5926"),o=Math.max,c=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):c(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,c=e("9112"),i=e("6eeb"),a=e("ce4e"),u=e("e893"),f=e("94ca");t.exports=function(t,n){var e,s,l,d,p,v,b=t.target,h=t.global,y=t.stat;if(s=h?r:y?r[b]||a(b,{}):(r[b]||{}).prototype,s)for(l in n){if(p=n[l],t.noTargetGet?(v=o(s,l),d=v&&v.value):d=s[l],e=f(h?l:b+(y?".":"#")+l,t.forced),!e&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&c(p,"sham",!0),i(s,l,p,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),c=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},2626:function(t,n,e){"use strict";var r=e("d066"),o=e("9bf2"),c=e("b622"),i=e("83ab"),a=c("species");t.exports=function(t){var n=r(t),e=o.f;i&&n&&!n[a]&&e(n,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,n,e){var r=e("825a"),o=e("dc4a");t.exports=function(t,n,e){var c,i;r(t);try{if(c=o(t,"return"),!c){if("throw"===n)throw e;return e}c=c.call(t)}catch(a){i=!0,c=a}if("throw"===n)throw e;if(i)throw c;return r(c),e}},"2cf4":function(t,n,e){var r,o,c,i,a=e("da84"),u=e("1626"),f=e("d039"),s=e("0366"),l=e("1be4"),d=e("cc12"),p=e("1cdc"),v=e("605d"),b=a.setImmediate,h=a.clearImmediate,y=a.process,g=a.MessageChannel,m=a.Dispatch,x=0,w={},j="onreadystatechange";try{r=a.location}catch(T){}var O=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},S=function(t){return function(){O(t)}},P=function(t){O(t.data)},E=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};b&&h||(b=function(t){var n=[],e=arguments.length,r=1;while(e>r)n.push(arguments[r++]);return w[++x]=function(){(u(t)?t:Function(t)).apply(void 0,n)},o(x),x},h=function(t){delete w[t]},v?o=function(t){y.nextTick(S(t))}:m&&m.now?o=function(t){m.now(S(t))}:g&&!p?(c=new g,i=c.port2,c.port1.onmessage=P,o=s(i.postMessage,i,1)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(E)?(o=E,a.addEventListener("message",P,!1)):o=j in d("script")?function(t){l.appendChild(d("script"))[j]=function(){l.removeChild(this),O(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:b,clear:h}},"2d00":function(t,n,e){var r,o,c=e("da84"),i=e("342f"),a=c.process,u=c.Deno,f=a&&a.versions||u&&u.version,s=f&&f.v8;s?(r=s.split("."),o=r[0]<4?1:r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,n,e){var r=e("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,n,e){var r=e("f5df"),o=e("dc4a"),c=e("3f8c"),i=e("b622"),a=i("iterator");t.exports=function(t){if(void 0!=t)return o(t,a)||o(t,"@@iterator")||c[r(t)]}},"37e8":function(t,n,e){var r=e("83ab"),o=e("9bf2"),c=e("825a"),i=e("df75");t.exports=r?Object.defineProperties:function(t,n){c(t);var e,r=i(n),a=r.length,u=0;while(a>u)o.f(t,e=r[u++],n[e]);return t}},"3bbe":function(t,n,e){var r=e("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3f8c":function(t,n){t.exports={}},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"44d2":function(t,n,e){var r=e("b622"),o=e("7c73"),c=e("9bf2"),i=r("unscopables"),a=Array.prototype;void 0==a[i]&&c.f(a,i,{configurable:!0,value:o(null)}),t.exports=function(t){a[i][t]=!0}},"44de":function(t,n,e){var r=e("da84");t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},4840:function(t,n,e){var r=e("825a"),o=e("5087"),c=e("b622"),i=c("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},"485a":function(t,n,e){var r=e("1626"),o=e("861d");t.exports=function(t,n){var e,c;if("string"===n&&r(e=t.toString)&&!o(c=e.call(t)))return c;if(r(e=t.valueOf)&&!o(c=e.call(t)))return c;if("string"!==n&&r(e=t.toString)&&!o(c=e.call(t)))return c;throw TypeError("Can't convert object to primitive value")}},4930:function(t,n,e){var r=e("2d00"),o=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,n,e){var r=e("fc6a"),o=e("23cb"),c=e("07fa"),i=function(t){return function(n,e,i){var a,u=r(n),f=c(u),s=o(i,f);if(t&&e!=e){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},5087:function(t,n,e){var r=e("68ee"),o=e("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a constructor")}},"50c4":function(t,n,e){var r=e("5926"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),c=e("7418"),i=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=c.f;return e?n.concat(e(t)):n}},5926:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!==n||0===n?0:(n>0?r:e)(n)}},"59ed":function(t,n,e){var r=e("1626"),o=e("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a function")}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"5e77":function(t,n,e){var r=e("83ab"),o=e("1a2d"),c=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,a=o(c,"name"),u=a&&"something"===function(){}.name,f=a&&(!r||r&&i(c,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:f}},"605d":function(t,n,e){var r=e("c6b6"),o=e("da84");t.exports="process"==r(o.process)},6069:function(t,n){t.exports="object"==typeof window},"60da":function(t,n,e){"use strict";var r=e("83ab"),o=e("d039"),c=e("df75"),i=e("7418"),a=e("d1e7"),u=e("7b0b"),f=e("44ad"),s=Object.assign,l=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||c(s({},n)).join("")!=o}))?function(t,n){var e=u(t),o=arguments.length,s=1,l=i.f,d=a.f;while(o>s){var p,v=f(arguments[s++]),b=l?c(v).concat(l(v)):c(v),h=b.length,y=0;while(h>y)p=b[y++],r&&!d.call(v,p)||(e[p]=v[p])}return e}:s},"68ee":function(t,n,e){var r=e("d039"),o=e("1626"),c=e("f5df"),i=e("d066"),a=e("8925"),u=[],f=i("Reflect","construct"),s=/^\s*(?:class|function)\b/,l=s.exec,d=!s.exec((function(){})),p=function(t){if(!o(t))return!1;try{return f(Object,u,t),!0}catch(n){return!1}},v=function(t){if(!o(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!l.call(s,a(t))};t.exports=!f||r((function(){var t;return p(p.call)||!p(Object)||!p((function(){t=!0}))||t}))?v:p},"69f3":function(t,n,e){var r,o,c,i=e("7f9a"),a=e("da84"),u=e("861d"),f=e("9112"),s=e("1a2d"),l=e("c6cd"),d=e("f772"),p=e("d012"),v="Object already initialized",b=a.WeakMap,h=function(t){return c(t)?o(t):r(t,{})},y=function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(i||l.state){var g=l.state||(l.state=new b),m=g.get,x=g.has,w=g.set;r=function(t,n){if(x.call(g,t))throw new TypeError(v);return n.facade=t,w.call(g,t,n),n},o=function(t){return m.call(g,t)||{}},c=function(t){return x.call(g,t)}}else{var j=d("state");p[j]=!0,r=function(t,n){if(s(t,j))throw new TypeError(v);return n.facade=t,f(t,j,n),n},o=function(t){return s(t,j)?t[j]:{}},c=function(t){return s(t,j)}}t.exports={set:r,get:o,has:c,enforce:h,getterFor:y}},"6c57":function(t,n,e){var r=e("23e7"),o=e("da84");r({global:!0},{globalThis:o})},"6eeb":function(t,n,e){var r=e("da84"),o=e("1626"),c=e("1a2d"),i=e("9112"),a=e("ce4e"),u=e("8925"),f=e("69f3"),s=e("5e77").CONFIGURABLE,l=f.get,d=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var f,l=!!u&&!!u.unsafe,v=!!u&&!!u.enumerable,b=!!u&&!!u.noTargetGet,h=u&&void 0!==u.name?u.name:n;o(e)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!c(e,"name")||s&&e.name!==h)&&i(e,"name",h),f=d(e),f.source||(f.source=p.join("string"==typeof h?h:""))),t!==r?(l?!b&&t[n]&&(v=!0):delete t[n],v?t[n]=e:i(t,n,e)):v?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,n,e){var r,o=e("825a"),c=e("37e8"),i=e("7839"),a=e("d012"),u=e("1be4"),f=e("cc12"),s=e("f772"),l=">",d="<",p="prototype",v="script",b=s("IE_PROTO"),h=function(){},y=function(t){return d+v+l+t+d+"/"+v+l},g=function(t){t.write(y("")),t.close();var n=t.parentWindow.Object;return t=null,n},m=function(){var t,n=f("iframe"),e="java"+v+":";return n.style.display="none",u.appendChild(n),n.src=String(e),t=n.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},x=function(){try{r=new ActiveXObject("htmlfile")}catch(n){}x="undefined"!=typeof document?document.domain&&r?g(r):m():g(r);var t=i.length;while(t--)delete x[p][i[t]];return x()};a[b]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(h[p]=o(t),e=new h,h[p]=null,e[b]=t):e=x(),void 0===n?e:c(e,n)}},"7dd0":function(t,n,e){"use strict";var r=e("23e7"),o=e("c430"),c=e("5e77"),i=e("1626"),a=e("9ed3"),u=e("e163"),f=e("d2bb"),s=e("d44e"),l=e("9112"),d=e("6eeb"),p=e("b622"),v=e("3f8c"),b=e("ae93"),h=c.PROPER,y=c.CONFIGURABLE,g=b.IteratorPrototype,m=b.BUGGY_SAFARI_ITERATORS,x=p("iterator"),w="keys",j="values",O="entries",S=function(){return this};t.exports=function(t,n,e,c,p,b,P){a(e,n,c);var E,T,A,_=function(t){if(t===p&&F)return F;if(!m&&t in R)return R[t];switch(t){case w:return function(){return new e(this,t)};case j:return function(){return new e(this,t)};case O:return function(){return new e(this,t)}}return function(){return new e(this)}},I=n+" Iterator",k=!1,R=t.prototype,M=R[x]||R["@@iterator"]||p&&R[p],F=!m&&M||_(p),L="Array"==n&&R.entries||M;if(L&&(E=u(L.call(new t)),E!==Object.prototype&&E.next&&(o||u(E)===g||(f?f(E,g):i(E[x])||d(E,x,S)),s(E,I,!0,!0),o&&(v[I]=S))),h&&p==j&&M&&M.name!==j&&(!o&&y?l(R,"name",j):(k=!0,F=function(){return M.call(this)})),p)if(T={values:_(j),keys:b?F:_(w),entries:_(O)},P)for(A in T)(m||k||!(A in R))&&d(R,A,T[A]);else r({target:n,proto:!0,forced:m||k},T);return o&&!P||R[x]===F||d(R,x,F,{name:p}),v[n]=F,T}},"7f9a":function(t,n,e){var r=e("da84"),o=e("1626"),c=e("8925"),i=r.WeakMap;t.exports=o(i)&&/native code/.test(c(i))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n,e){var r=e("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,n,e){var r=e("1626"),o=e("c6cd"),c=Function.toString;r(o.inspectSource)||(o.inspectSource=function(t){return c.call(t)}),t.exports=o.inspectSource},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),c=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),o=e("1626"),c=/#|\.prototype\./,i=function(t,n){var e=u[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=i.normalize=function(t){return String(t).replace(c,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"9a1f":function(t,n,e){var r=e("59ed"),o=e("825a"),c=e("35a1");t.exports=function(t,n){var e=arguments.length<2?c(t):n;if(r(e))return o(e.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),c=e("825a"),i=e("a04b"),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(c(t),n=i(n),c(e),o)try{return a(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},"9ed3":function(t,n,e){"use strict";var r=e("ae93").IteratorPrototype,o=e("7c73"),c=e("5c6c"),i=e("d44e"),a=e("3f8c"),u=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:c(1,e)}),i(t,f,!1,!0),a[f]=u,t}},a04b:function(t,n,e){var r=e("c04e"),o=e("d9b5");t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},a4b4:function(t,n,e){var r=e("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(t,n,e){"use strict";var r=e("23e7"),o=e("c430"),c=e("fea9"),i=e("d039"),a=e("d066"),u=e("1626"),f=e("4840"),s=e("cdf9"),l=e("6eeb"),d=!!c&&i((function(){c.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var n=f(this,a("Promise")),e=u(t);return this.then(e?function(e){return s(n,t()).then((function(){return e}))}:t,e?function(e){return s(n,t()).then((function(){throw e}))}:t)}}),!o&&u(c)){var p=a("Promise").prototype["finally"];c.prototype["finally"]!==p&&l(c.prototype,"finally",p,{unsafe:!0})}},ae93:function(t,n,e){"use strict";var r,o,c,i=e("d039"),a=e("1626"),u=e("7c73"),f=e("e163"),s=e("6eeb"),l=e("b622"),d=e("c430"),p=l("iterator"),v=!1;[].keys&&(c=[].keys(),"next"in c?(o=f(f(c)),o!==Object.prototype&&(r=o)):v=!0);var b=void 0==r||i((function(){var t={};return r[p].call(t)!==t}));b?r={}:d&&(r=u(r)),a(r[p])||s(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},b0c0:function(t,n,e){var r=e("83ab"),o=e("5e77").EXISTS,c=e("9bf2").f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/,f="name";r&&!o&&c(i,f,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},b575:function(t,n,e){var r,o,c,i,a,u,f,s,l=e("da84"),d=e("06cf").f,p=e("2cf4").set,v=e("1cdc"),b=e("d4c3"),h=e("a4b4"),y=e("605d"),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,x=l.process,w=l.Promise,j=d(l,"queueMicrotask"),O=j&&j.value;O||(r=function(){var t,n;y&&(t=x.domain)&&t.exit();while(o){n=o.fn,o=o.next;try{n()}catch(e){throw o?i():c=void 0,e}}c=void 0,t&&t.enter()},v||y||h||!g||!m?!b&&w&&w.resolve?(f=w.resolve(void 0),f.constructor=w,s=f.then,i=function(){s.call(f,r)}):i=y?function(){x.nextTick(r)}:function(){p.call(l,r)}:(a=!0,u=m.createTextNode(""),new g(r).observe(u,{characterData:!0}),i=function(){u.data=a=!a})),t.exports=O||function(t){var n={fn:t,next:void 0};c&&(c.next=n),o||(o=n,i()),c=n}},b622:function(t,n,e){var r=e("da84"),o=e("5692"),c=e("1a2d"),i=e("90e3"),a=e("4930"),u=e("fdbf"),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||i;t.exports=function(t){return c(f,t)&&(a||"string"==typeof f[t])||(a&&c(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},c04e:function(t,n,e){var r=e("861d"),o=e("d9b5"),c=e("dc4a"),i=e("485a"),a=e("b622"),u=a("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,a=c(t,u);if(a){if(void 0===n&&(n="default"),e=a.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("ce4e"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},ca84:function(t,n,e){var r=e("1a2d"),o=e("fc6a"),c=e("4d64").indexOf,i=e("d012");t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(i,e)&&r(a,e)&&f.push(e);while(n.length>u)r(a,e=n[u++])&&(~c(f,e)||f.push(e));return f}},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},cca6:function(t,n,e){var r=e("23e7"),o=e("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(t,n,e){var r=e("825a"),o=e("861d"),c=e("f069");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=c.f(t),i=e.resolve;return i(n),e.promise}},ce4e:function(t,n,e){var r=e("da84");t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,e){var r=e("da84"),o=e("1626"),c=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?c(r[t]):r[t]&&r[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d2bb:function(t,n,e){var r=e("825a"),o=e("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(e,[]),n=e instanceof Array}catch(c){}return function(e,c){return r(e),o(c),n?t.call(e,c):e.__proto__=c,e}}():void 0)},d44e:function(t,n,e){var r=e("9bf2").f,o=e("1a2d"),c=e("b622"),i=c("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},d4c3:function(t,n,e){var r=e("342f"),o=e("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},d9b5:function(t,n,e){var r=e("1626"),o=e("d066"),c=e("fdbf");t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return r(n)&&Object(t)instanceof n}},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dc4a:function(t,n,e){var r=e("59ed");t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},df75:function(t,n,e){var r=e("ca84"),o=e("7839");t.exports=Object.keys||function(t){return r(t,o)}},e163:function(t,n,e){var r=e("1a2d"),o=e("1626"),c=e("7b0b"),i=e("f772"),a=e("e177"),u=i("IE_PROTO"),f=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var n=c(t);if(r(n,u))return n[u];var e=n.constructor;return o(e)&&n instanceof e?e.prototype:n instanceof Object?f:null}},e177:function(t,n,e){var r=e("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,n,e){"use strict";var r=e("fc6a"),o=e("44d2"),c=e("3f8c"),i=e("69f3"),a=e("7dd0"),u="Array Iterator",f=i.set,s=i.getterFor(u);t.exports=a(Array,"Array",(function(t,n){f(this,{type:u,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),c.Arguments=c.Array,o("keys"),o("values"),o("entries")},e2cc:function(t,n,e){var r=e("6eeb");t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},e667:function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(n){return{error:!0,value:n}}}},e6cf:function(t,n,e){"use strict";var r,o,c,i,a=e("23e7"),u=e("c430"),f=e("da84"),s=e("d066"),l=e("fea9"),d=e("6eeb"),p=e("e2cc"),v=e("d2bb"),b=e("d44e"),h=e("2626"),y=e("59ed"),g=e("1626"),m=e("861d"),x=e("19aa"),w=e("8925"),j=e("2266"),O=e("1c7e"),S=e("4840"),P=e("2cf4").set,E=e("b575"),T=e("cdf9"),A=e("44de"),_=e("f069"),I=e("e667"),k=e("69f3"),R=e("94ca"),M=e("b622"),F=e("6069"),L=e("605d"),C=e("2d00"),D=M("species"),G="Promise",N=k.get,U=k.set,z=k.getterFor(G),B=l&&l.prototype,W=l,q=B,X=f.TypeError,Y=f.document,H=f.process,K=_.f,V=K,$=!!(Y&&Y.createEvent&&f.dispatchEvent),J=g(f.PromiseRejectionEvent),Q="unhandledrejection",Z="rejectionhandled",tt=0,nt=1,et=2,rt=1,ot=2,ct=!1,it=R(G,(function(){var t=w(W),n=t!==String(W);if(!n&&66===C)return!0;if(u&&!q["finally"])return!0;if(C>=51&&/native code/.test(t))return!1;var e=new W((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},o=e.constructor={};return o[D]=r,ct=e.then((function(){}))instanceof r,!ct||!n&&F&&!J})),at=it||!O((function(t){W.all(t)["catch"]((function(){}))})),ut=function(t){var n;return!(!m(t)||!g(n=t.then))&&n},ft=function(t,n){if(!t.notified){t.notified=!0;var e=t.reactions;E((function(){var r=t.value,o=t.state==nt,c=0;while(e.length>c){var i,a,u,f=e[c++],s=o?f.ok:f.fail,l=f.resolve,d=f.reject,p=f.domain;try{s?(o||(t.rejection===ot&&pt(t),t.rejection=rt),!0===s?i=r:(p&&p.enter(),i=s(r),p&&(p.exit(),u=!0)),i===f.promise?d(X("Promise-chain cycle")):(a=ut(i))?a.call(i,l,d):l(i)):d(r)}catch(v){p&&!u&&p.exit(),d(v)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&lt(t)}))}},st=function(t,n,e){var r,o;$?(r=Y.createEvent("Event"),r.promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},!J&&(o=f["on"+t])?o(r):t===Q&&A("Unhandled promise rejection",e)},lt=function(t){P.call(f,(function(){var n,e=t.facade,r=t.value,o=dt(t);if(o&&(n=I((function(){L?H.emit("unhandledRejection",r,e):st(Q,e,r)})),t.rejection=L||dt(t)?ot:rt,n.error))throw n.value}))},dt=function(t){return t.rejection!==rt&&!t.parent},pt=function(t){P.call(f,(function(){var n=t.facade;L?H.emit("rejectionHandled",n):st(Z,n,t.value)}))},vt=function(t,n,e){return function(r){t(n,r,e)}},bt=function(t,n,e){t.done||(t.done=!0,e&&(t=e),t.value=n,t.state=et,ft(t,!0))},ht=function(t,n,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===n)throw X("Promise can't be resolved itself");var r=ut(n);r?E((function(){var e={done:!1};try{r.call(n,vt(ht,e,t),vt(bt,e,t))}catch(o){bt(e,o,t)}})):(t.value=n,t.state=nt,ft(t,!1))}catch(o){bt({done:!1},o,t)}}};if(it&&(W=function(t){x(this,W,G),y(t),r.call(this);var n=N(this);try{t(vt(ht,n),vt(bt,n))}catch(e){bt(n,e)}},q=W.prototype,r=function(t){U(this,{type:G,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=p(q,{then:function(t,n){var e=z(this),r=K(S(this,W));return r.ok=!g(t)||t,r.fail=g(n)&&n,r.domain=L?H.domain:void 0,e.parent=!0,e.reactions.push(r),e.state!=tt&&ft(e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=vt(ht,n),this.reject=vt(bt,n)},_.f=K=function(t){return t===W||t===c?new o(t):V(t)},!u&&g(l)&&B!==Object.prototype)){i=B.then,ct||(d(B,"then",(function(t,n){var e=this;return new W((function(t,n){i.call(e,t,n)})).then(t,n)}),{unsafe:!0}),d(B,"catch",q["catch"],{unsafe:!0}));try{delete B.constructor}catch(yt){}v&&v(B,q)}a({global:!0,wrap:!0,forced:it},{Promise:W}),b(W,G,!1,!0),h(G),c=s(G),a({target:G,stat:!0,forced:it},{reject:function(t){var n=K(this);return n.reject.call(void 0,t),n.promise}}),a({target:G,stat:!0,forced:u||it},{resolve:function(t){return T(u&&this===c?W:this,t)}}),a({target:G,stat:!0,forced:at},{all:function(t){var n=this,e=K(n),r=e.resolve,o=e.reject,c=I((function(){var e=y(n.resolve),c=[],i=0,a=1;j(t,(function(t){var u=i++,f=!1;c.push(void 0),a++,e.call(n,t).then((function(t){f||(f=!0,c[u]=t,--a||r(c))}),o)})),--a||r(c)}));return c.error&&o(c.value),e.promise},race:function(t){var n=this,e=K(n),r=e.reject,o=I((function(){var o=y(n.resolve);j(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},e893:function(t,n,e){var r=e("1a2d"),o=e("56ef"),c=e("06cf"),i=e("9bf2");t.exports=function(t,n){for(var e=o(n),a=i.f,u=c.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},e95a:function(t,n,e){var r=e("b622"),o=e("3f8c"),c=r("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[c]===t)}},f069:function(t,n,e){"use strict";var r=e("59ed"),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},f5df:function(t,n,e){var r=e("00ee"),o=e("1626"),c=e("c6b6"),i=e("b622"),a=i("toStringTag"),u="Arguments"==c(function(){return arguments}()),f=function(t,n){try{return t[n]}catch(e){}};t.exports=r?c:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=f(n=Object(t),a))?e:u?c(n):"Object"==(r=c(n))&&o(n.callee)?"Arguments":r}},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,n,e){var r=e("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,n,e){var r=e("da84");t.exports=r.Promise}});
//# sourceMappingURL=background.js.map