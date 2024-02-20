import{J as A,aA as u,Z as v,K as s,L as B,G as z,M as K,as as R,Q as H,S as j,T as D,o as a,q as b,w as p,b as y,$ as F,V as c,a1 as I,c as m,W as d,D as T,X as C,Y as g,B as O,a as h,t as N,a0 as k}from"./entry.B1gwfetv.js";import{O as U}from"./overlayeventbus.esm.DbM3etv5.js";var V={root:function(e){var n=e.instance;return["p-confirm-popup p-component",{"p-ripple-disabled":n.$primevue.config.ripple===!1}]},content:"p-confirm-popup-content",icon:"p-confirm-popup-icon",message:"p-confirm-popup-message",footer:"p-confirm-popup-footer",rejectButton:function(e){var n=e.instance;return["p-confirm-popup-reject",n.confirmation&&!n.confirmation.rejectClass?"p-button-sm p-button-text":null]},acceptButton:function(e){var n=e.instance;return["p-confirm-popup-accept",n.confirmation&&!n.confirmation.acceptClass?"p-button-sm":null]}},X=A.extend({name:"confirmpopup",classes:V}),q={name:"BaseConfirmPopup",extends:H,props:{group:String},style:X,provide:function(){return{$parentInstance:this}}},Z={name:"ConfirmPopup",extends:q,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(n){n&&n.group===e.group&&(e.confirmation=n,e.target=n.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},u.on("confirm",this.confirmListener),u.on("close",this.closeListener)},beforeUnmount:function(){u.off("confirm",this.confirmListener),u.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(v.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.accept(),s.focus(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.reject(),s.focus(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),v.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){v.clear(e)},alignOverlay:function(){s.absolutePosition(this.container,this.target,!1);var e=s.getOffset(this.container),n=s.getOffset(this.target),r=0;e.left<n.left&&(r=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft","".concat(r,"px")),e.top<n.top&&(this.container.setAttribute("data-p-confirm-popup-flipped","true"),!this.isUnstyled&&s.addClass(this.container,"p-confirm-popup-flipped"))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.visible&&e.container&&!e.container.contains(n.target)&&!e.isTargetClicked(n)?(e.confirmation.onHide&&e.confirmation.onHide(),e.visible=!1):e.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new B(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!s.isTouchDevice()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){U.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code==="Escape"&&(u.emit("close",this.closeListener),s.focus(this.target))},getCXOptions:function(e,n){return{contenxt:{icon:e,iconClass:n.class}}}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel:function(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon:function(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon:function(){return this.confirmation?this.confirmation.rejectIcon:null}},components:{CPButton:z,Portal:K},directives:{focustrap:R}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w(Object(n),!0).forEach(function(r){G(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function G(t,e,n){return e=J(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){var e=M(t,"string");return f(e)=="symbol"?e:String(e)}function M(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(f(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Q=["aria-modal"];function W(t,e,n,r,o,i){var L=j("CPButton"),E=j("Portal"),P=D("focustrap");return a(),b(E,null,{default:p(function(){return[y(F,c({name:"p-confirm-popup",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:p(function(){return[o.visible?I((a(),m("div",c({key:0,ref:i.containerRef,role:"alertdialog",class:t.cx("root"),"aria-modal":o.visible,onClick:e[2]||(e[2]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[3]||(e[3]=function(){return i.onOverlayKeydown&&i.onOverlayKeydown.apply(i,arguments)})},S(S({},t.$attrs),t.ptm("root"))),[t.$slots.container?d(t.$slots,"container",{key:0,message:o.confirmation,onAccept:i.accept,onReject:i.reject,acceptCallback:i.accept,rejectCallback:i.reject}):(a(),m(T,{key:1},[t.$slots.message?(a(),b(C(t.$slots.message),{key:1,message:o.confirmation},null,8,["message"])):(a(),m("div",c({key:0,class:t.cx("content")},t.ptm("content")),[d(t.$slots,"icon",{},function(){return[t.$slots.icon?(a(),b(C(t.$slots.icon),{key:0,class:g(t.cx("icon"))},null,8,["class"])):o.confirmation.icon?(a(),m("span",c({key:1,class:[o.confirmation.icon,t.cx("icon")]},t.ptm("icon")),null,16)):O("",!0)]}),h("span",c({class:t.cx("message")},t.ptm("message")),N(o.confirmation.message),17)],16)),h("div",c({class:t.cx("footer")},t.ptm("footer")),[y(L,{label:i.rejectLabel,onClick:e[0]||(e[0]=function(l){return i.reject()}),onKeydown:i.onRejectKeydown,autofocus:o.autoFocusReject,class:g([t.cx("rejectButton"),o.confirmation.rejectClass]),unstyled:t.unstyled,pt:t.ptm("rejectButton")},k({_:2},[i.rejectIcon||t.$slots.rejecticon?{name:"icon",fn:p(function(l){return[d(t.$slots,"rejecticon",{},function(){return[h("span",c({class:[i.rejectIcon,l.class]},t.ptm("rejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","onKeydown","autofocus","class","unstyled","pt"]),y(L,{label:i.acceptLabel,onClick:e[1]||(e[1]=function(l){return i.accept()}),onKeydown:i.onAcceptKeydown,autofocus:o.autoFocusAccept,class:g([t.cx("acceptButton"),o.confirmation.acceptClass]),unstyled:t.unstyled,pt:t.ptm("acceptButton")},k({_:2},[i.acceptIcon||t.$slots.accepticon?{name:"icon",fn:p(function(l){return[d(t.$slots,"accepticon",{},function(){return[h("span",c({class:[i.acceptIcon,l.class]},t.ptm("acceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","onKeydown","autofocus","class","unstyled","pt"])],16)],64))],16,Q)),[[P]]):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}Z.render=W;export{Z as default};
