(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9fOb":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));r("E9XD");var n,i,a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=(n=["",""],i=["",""],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}})));function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(){for(var e=this,r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return s(this,t),this.tag=function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return"function"==typeof t?e.interimTag.bind(e,t):"string"==typeof t?e.transformEndResult(t):(t=t.map(e.transformString.bind(e)),e.transformEndResult(t.reduce(e.processSubstitutions.bind(e,n))))},n.length>0&&Array.isArray(n[0])&&(n=n[0]),this.transformers=n.map((function(t){return"function"==typeof t?t():t})),this.tag}return a(t,[{key:"interimTag",value:function(t,e){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return this.tag(o,t.apply(void 0,[e].concat(n)))}},{key:"processSubstitutions",value:function(t,e,r){var n=this.transformSubstitution(t.shift(),e);return"".concat(e,n,r)}},{key:"transformString",value:function(t){return this.transformers.reduce((function(t,e){return e.onString?e.onString(t):t}),t)}},{key:"transformSubstitution",value:function(t,e){return this.transformers.reduce((function(t,r){return r.onSubstitution?r.onSubstitution(t,e):t}),t)}},{key:"transformEndResult",value:function(t){return this.transformers.reduce((function(t,e){return e.onEndResult?e.onEndResult(t):t}),t)}}]),t}(),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(e){if(""===t)return e.trim();if("start"===(t=t.toLowerCase())||"left"===t)return e.replace(/^\s*/,"");if("end"===t||"right"===t)return e.replace(/\s*$/,"");throw new Error("Side not supported: "+t)}}};function c(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(e){if("initial"===t){var r=e.match(/^[^\S\n]*(?=\S)/gm),n=r&&Math.min.apply(Math,c(r.map((function(t){return t.length}))));if(n){var i=new RegExp("^.{"+n+"}","gm");return e.replace(i,"")}return e}if("all"===t)return e.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+t)}}},p=function(t,e){return{onEndResult:function(r){if(null==t||null==e)throw new Error("replaceResultTransformer requires at least 2 arguments.");return r.replace(t,e)}}},f=function(t,e){return{onSubstitution:function(r,n){if(null==t||null==e)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==r?r:r.toString().replace(t,e)}}},g={separator:"",conjunction:"",serial:!1},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return{onSubstitution:function(e,r){if(Array.isArray(e)){var n=e.length,i=t.separator,a=t.conjunction,o=t.serial,s=r.match(/(\n?[^\S\n]+)$/);if(e=s?e.join(i+s[1]):e.join(i+" "),a&&n>1){var u=e.lastIndexOf(i);e=e.slice(0,u)+(o?i:"")+" "+a+e.slice(u+1)}}return e}}},m=function(t){return{onSubstitution:function(e,r){if(null==t||"string"!=typeof t)throw new Error("You need to specify a string character to split by.");return"string"==typeof e&&e.includes(t)&&(e=e.split(t)),e}}},y=function(t){return null!=t&&!Number.isNaN(t)&&"boolean"!=typeof t},v=function(){return{onSubstitution:function(t){return Array.isArray(t)?t.filter(y):y(t)?t:""}}},b=(new u(h({separator:","}),d,l),new u(h({separator:",",conjunction:"and"}),d,l),new u(h({separator:",",conjunction:"or"}),d,l),new u(m("\n"),v,h,d,l),new u(m("\n"),h,d,l,f(/&/g,"&amp;"),f(/</g,"&lt;"),f(/>/g,"&gt;"),f(/"/g,"&quot;"),f(/'/g,"&#x27;"),f(/`/g,"&#x60;")),new u(p(/(?:\n(?:\s*))+/g," "),l),new u(p(/(?:\n\s*)/g,""),l),new u(h({separator:","}),p(/(?:\s+)/g," "),l),new u(h({separator:",",conjunction:"or"}),p(/(?:\s+)/g," "),l),new u(h({separator:",",conjunction:"and"}),p(/(?:\s+)/g," "),l),new u(h,d,l),new u(h,p(/(?:\s+)/g," "),l),new u(d,l));new u(d("all"),l)},"I1v/":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),i=r.n(n),a=r("VdAu"),o=r("+3Ox"),s=r("f0fW"),u=function(t){var e=Object.assign({},t);return i.a.createElement(s.a,Object.assign({style:{width:"200px",height:"200px"}},e))};e.default=function(t){var e=t.data;return i.a.createElement("div",null,i.a.createElement(o.a,null),i.a.createElement(a.a,{className:"imgs",sx:{display:"grid",gridGap:3,gridTemplateColumns:"repeat(auto-fit, minmax(128px, 1fr))"}},e.allFile.edges.map((function(t){return i.a.createElement(u,{key:t.node.id,width:200,fluid:t.node.childImageSharp.fluid})}))))}},f0fW:function(t,e,r){"use strict";r.d(e,"a",(function(){return I})),r.d(e,"b",(function(){return E})),r.d(e,"c",(function(){return k})),r.d(e,"d",(function(){return C})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return m})),r.d(e,"h",(function(){return y}));var n=r("q1tI"),i=r.n(n),a=(r("9fOb"),r("q8gk"),r("17x9")),o=r.n(a),s=r("i8i4");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)e.indexOf(r=a[n])>=0||(i[r]=t[r]);return i}var d=new Set,p=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function f(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function g(t){t&&d.add(t)}function h(t){return d.has(t)}function m(t,e,n,i,a,o,s,l){var c,d;return void 0===l&&(l={}),null!=s&&s.current&&!("objectFit"in document.documentElement.style)&&(s.current.dataset.objectFit=null!=(c=l.objectFit)?c:"cover",s.current.dataset.objectPosition=""+(null!=(d=l.objectPosition)?d:"50% 50%"),function(t){try{var e=function(){window.objectFitPolyfill(t.current)},n=function(){if(!("objectFitPolyfill"in window))return Promise.resolve(r.e(15).then(r.t.bind(null,"eCb9",7))).then((function(){}))}();Promise.resolve(n&&n.then?n.then(e):e())}catch(t){return Promise.reject(t)}}(s)),f()||(l=u({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},l)),u({},n,{loading:i,shouldLoad:t,"data-main-image":"",style:u({},l,{opacity:e?1:0}),onLoad:function(t){if(!e){g(o);var r=t.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().catch((function(){})).then((function(){a(!0)})):a(!0)}},ref:s})}function y(t,e,r,n,i,a,o,s){var l={};a&&(l.backgroundColor=a,"fixed"===r?(l.width=n,l.height=i,l.backgroundColor=a,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),s&&(l.objectPosition=s);var c=u({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:u({opacity:e?0:1,transition:"opacity 500ms linear"},l)});return f()||(c.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),c}var v,b=["children"],w=function(t){var e=t.layout,r=t.width,n=t.height;return"fullWidth"===e?i.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===e?i.a.createElement("div",{style:{maxWidth:r,display:"block"}},i.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},E=function(t){var e=t.children,r=c(t,b);return i.a.createElement(n.Fragment,null,i.a.createElement(w,u({},r)),e,!1)},S=["src","srcSet","loading","alt","shouldLoad","innerRef"],L=["fallback","sources","shouldLoad"],O=function(t){var e=t.src,r=t.srcSet,n=t.loading,a=t.alt,o=void 0===a?"":a,s=t.shouldLoad,l=t.innerRef,d=c(t,S);return i.a.createElement("img",u({},d,{decoding:"async",loading:n,src:s?e:void 0,"data-src":s?void 0:e,srcSet:s?r:void 0,"data-srcset":s?void 0:r,alt:o,ref:l}))},j=Object(n.forwardRef)((function(t,e){var r=t.fallback,n=t.sources,a=void 0===n?[]:n,o=t.shouldLoad,s=void 0===o||o,l=c(t,L),d=l.sizes||(null==r?void 0:r.sizes),p=i.a.createElement(O,u({},l,r,{sizes:d,shouldLoad:s,innerRef:e}));return a.length?i.a.createElement("picture",null,a.map((function(t){var e=t.media,r=t.srcSet,n=t.type;return i.a.createElement("source",{key:e+"-"+n+"-"+r,type:n,media:e,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:d})})),p):p}));O.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},j.displayName="Picture",j.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var R=["fallback"],C=function(t){var e=t.fallback,r=c(t,R);return e?i.a.createElement(j,u({},r,{fallback:{src:e},"aria-hidden":!0,alt:""})):i.a.createElement("div",u({},r))};C.displayName="Placeholder",C.propTypes={fallback:a.string,sources:null==(v=j.propTypes)?void 0:v.sources,alt:function(t,e,r){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Validation failed."):null}};var k=Object(n.forwardRef)((function(t,e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,u({ref:e},t)),i.a.createElement("noscript",null,i.a.createElement(j,u({},t,{shouldLoad:!0}))))}));k.displayName="MainImage",k.propTypes=j.propTypes;var x=function(t,e,r){return t.alt||""===t.alt?o.a.string.apply(o.a,[t,e,r].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:o.a.object.isRequired,alt:x},A=["style","className"],T=function(t){var e,a;function o(e){var r;return(r=t.call(this,e)||this).root=Object(n.createRef)(),r.hydrated={current:!1},r.forceRender={current:!1},r.lazyHydrator=null,r.ref=Object(n.createRef)(),r.unobserveRef=void 0,r.state={isLoading:p(),isLoaded:!1},r}a=t,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,l(e,a);var d=o.prototype;return d._lazyHydrate=function(t,e){var n=this,i=this.root.current.querySelector("[data-gatsby-image-ssr]");return p()&&i&&!this.hydrated.current?(this.hydrated.current=!0,Promise.resolve()):r.e(2).then(r.bind(null,"5TLY")).then((function(r){var i=r.lazyHydrate,a=JSON.stringify(n.props.image.images);n.lazyHydrator=i(u({image:t.image.images,isLoading:e.isLoading||h(a),isLoaded:e.isLoaded||h(a),toggleIsLoaded:function(){null==t.onLoad||t.onLoad(),n.setState({isLoaded:!0})},ref:n.ref},t),n.root,n.hydrated,n.forceRender)}))},d._setupIntersectionObserver=function(t){var e=this;void 0===t&&(t=!0),r.e(16).then(r.bind(null,"1aP2")).then((function(r){var n=(0,r.createIntersectionObserver)((function(){if(e.root.current){var r=JSON.stringify(e.props.image.images);null==e.props.onStartLoad||e.props.onStartLoad({wasCached:t&&h(r)}),e.setState({isLoading:!0,isLoaded:t&&h(r)})}}));e.root.current&&(e.unobserveRef=n(e.root))}))},d.shouldComponentUpdate=function(t,e){var r=this,n=!1;return this.state.isLoading||!e.isLoading||e.isLoaded||(this.forceRender.current=!0),this.props.image.images!==t.image.images&&(this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&Object(s.render)(null,this.root.current)),this.setState({isLoading:!1,isLoaded:!1},(function(){r._setupIntersectionObserver(!1)})),n=!0),this.root.current&&!n&&this._lazyHydrate(t,e),!1},d.componentDidMount=function(){if(this.root.current){var t=this.root.current.querySelector("[data-gatsby-image-ssr]"),e=JSON.stringify(this.props.image.images);if(p()&&t&&f()){var r,n;if(null==(r=(n=this.props).onStartLoad)||r.call(n,{wasCached:!1}),t.complete){var i,a;null==(i=(a=this.props).onLoad)||i.call(a),g(e)}else{var o=this;t.addEventListener("load",(function r(){t.removeEventListener("load",r),null==o.props.onLoad||o.props.onLoad(),g(e)}))}return}this._setupIntersectionObserver(!0)}},d.componentWillUnmount=function(){this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&this.lazyHydrator())},d.render=function(){var t=this.props.as||"div",e=this.props.image,r=e.width,n=e.height,a=e.layout,o=function(t,e,r){var n={},i="gatsby-image-wrapper";return f()||(n.position="relative",n.overflow="hidden"),"fixed"===r?(n.width=t,n.height=e):"constrained"===r&&(f()||(n.display="inline-block",n.verticalAlign="top"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(r,n,a),s=o.style,l=o.className,d=c(o,A),p=this.props.className;this.props.class&&(p=this.props.class);var g=function(t,e,r){var n=null;return"fullWidth"===t&&(n='<div aria-hidden="true" style="padding-top: '+r/e*100+'%;"></div>'),"constrained"===t&&(n='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+e+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(a,r,n);return i.a.createElement(t,u({},d,{style:u({},s,this.props.style,{backgroundColor:this.props.backgroundColor}),className:l+(p?" "+p:""),ref:this.root,dangerouslySetInnerHTML:{__html:g},suppressHydrationWarning:!0}))},o}(n.Component),I=function(t){if(!t.image)return null;f();var e=t.image,r=JSON.stringify([e.width,e.height,e.layout,t.className,t.class,t.backgroundColor]);return i.a.createElement(T,u({key:r},t))};I.propTypes=_,I.displayName="GatsbyImage";var q,z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(t,e){return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?o.a.number.apply(o.a,[t,e].concat([].slice.call(arguments,2))):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),W={src:o.a.string.isRequired,alt:x,width:N,height:N,sizes:o.a.string,layout:function(t){if(void 0!==t.layout&&!P.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},H=(q=I,function(t){var e=t.src,r=t.__imageData,n=t.__error,a=c(t,z);return n&&console.warn(n),r?i.a.createElement(q,u({image:r},a)):(console.warn("Image not loaded",e),null)});H.displayName="StaticImage",H.propTypes=W},q8gk:function(t,e,r){"use strict";var n=function(t,e){if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");e=Object.assign({pascalCase:!1},e);var r;return 0===(t=Array.isArray(t)?t.map((function(t){return t.trim()})).filter((function(t){return t.length})).join("-"):t.trim()).length?"":1===t.length?e.pascalCase?t.toUpperCase():t.toLowerCase():(t!==t.toLowerCase()&&(t=function(t){for(var e=!1,r=!1,n=!1,i=0;i<t.length;i++){var a=t[i];e&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(t=t.slice(0,i)+"-"+t.slice(i),e=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(t=t.slice(0,i-1)+"-"+t.slice(i-1),n=r,r=!1,e=!0):(e=a.toLowerCase()===a&&a.toUpperCase()!==a,n=r,r=a.toUpperCase()===a&&a.toLowerCase()!==a)}return t}(t)),t=t.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(t,e){return e.toUpperCase()})).replace(/\d+(\w|$)/g,(function(t){return t.toUpperCase()})),r=t,e.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};t.exports=n,t.exports.default=n}}]);
//# sourceMappingURL=component---src-pages-gallery-jsx-da98177a560e1e865c5a.js.map