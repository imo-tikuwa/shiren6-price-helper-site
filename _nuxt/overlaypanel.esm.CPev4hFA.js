import{J as S,Z as f,K as s,L as K,U as D,as as P,R as T,M as B,a9 as I,Q as z,S as A,T as v,o,q as p,w as b,b as j,$ as R,V as l,a1 as m,c as y,W as h,D as H,a as U,X as Z,B as L}from"./entry.B1gwfetv.js";import{O as u}from"./overlayeventbus.esm.DbM3etv5.js";var N={root:function(e){var n=e.instance;return["p-overlaypanel p-component",{"p-ripple-disabled":n.$primevue.config.ripple===!1}]},content:"p-overlaypanel-content",closeButton:"p-overlaypanel-close p-link",closeIcon:"p-overlaypanel-close-icon"},V=S.extend({name:"overlaypanel",classes:N}),q={name:"BaseOverlayPanel",extends:z,props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},closeOnEscape:{type:Boolean,default:!0}},style:V,provide:function(){return{$parentInstance:this}}},x={name:"OverlayPanel",extends:q,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&f.clear(this.container),this.overlayEventListener&&(u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;this.container.setAttribute(this.attributeSelector,""),s.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&f.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(r){n.container.contains(r.target)&&(n.selfClick=!0)},this.focus(),u.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&f.clear(e)},alignOverlay:function(){s.absolutePosition(this.container,this.target,!1);var e=s.getOffset(this.container),n=s.getOffset(this.target),r=0;e.left<n.left&&(r=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft","".concat(r,"px")),e.top<n.top&&(this.container.setAttribute("data-p-overlaypanel-flipped","true"),!this.isUnstyled&&s.addClass(this.container,"p-overlaypanel-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),s.focus(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&s.isClient()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new K(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!s.isTouchDevice()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",s.setAttribute(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-overlaypanel[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){u.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return D()},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:P,ripple:T},components:{Portal:B,TimesIcon:I}};function a(t){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w(Object(n),!0).forEach(function(r){F(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function F(t,e,n){return e=M(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t){var e=J(t,"string");return a(e)=="symbol"?e:String(e)}function J(t,e){if(a(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Q=["aria-modal"],W=["aria-label"];function X(t,e,n,r,c,i){var C=A("Portal"),k=v("ripple"),O=v("focustrap");return o(),p(C,{appendTo:t.appendTo},{default:b(function(){return[j(R,l({name:"p-overlaypanel",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:b(function(){return[c.visible?m((o(),y("div",l({key:0,ref:i.containerRef,role:"dialog","aria-modal":c.visible,onClick:e[5]||(e[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:t.cx("root")},g(g({},t.$attrs),t.ptm("root"))),[t.$slots.container?h(t.$slots,"container",{key:0,onClose:i.hide,onKeydown:function(d){return i.onButtonKeydown(d)},closeCallback:i.hide,keydownCallback:function(d){return i.onButtonKeydown(d)}}):(o(),y(H,{key:1},[U("div",l({class:t.cx("content"),onClick:e[0]||(e[0]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onMousedown:e[1]||(e[1]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContentKeydown&&i.onContentKeydown.apply(i,arguments)})},t.ptm("content")),[h(t.$slots,"default")],16),t.showCloseIcon?m((o(),y("button",l({key:0,class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",autofocus:"",onClick:e[3]||(e[3]=function(){return i.hide&&i.hide.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(){return i.onButtonKeydown&&i.onButtonKeydown.apply(i,arguments)})},t.ptm("closeButton")),[h(t.$slots,"closeicon",{},function(){return[(o(),p(Z(t.closeIcon?"span":"TimesIcon"),l({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,W)),[[k]]):L("",!0)],64))],16,Q)),[[O]]):L("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}x.render=X;export{x as default};
