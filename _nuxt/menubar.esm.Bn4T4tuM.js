import{s as D}from"./index.esm.CAOCvnbG.js";import{D as V,U as S,O as m,Z as L,E as I,K as F,N as l,R as T,L as K,M as B,o as c,c as f,F as x,y as z,a as A,Y as R,S as y,V as w,T as P,P as v,t as N,at as j,Q as k,b as M,a1 as G,a2 as U}from"./entry.uLqhXPCv.js";import{s as q}from"./index.esm.f8bc8xeE.js";import{s as H}from"./index.esm.CJWJegcs.js";var W={submenu:function(e){var i=e.instance,n=e.processedItem;return{display:i.isItemActive(n)?"block":"none"}}},Z={root:function(e){var i=e.instance;return["p-menubar p-component",{"p-menubar-mobile":i.queryMatches,"p-menubar-mobile-active":i.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",menu:"p-menubar-root-list",menuitem:function(e){var i=e.instance,n=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(n),"p-focus":i.isItemFocused(n),"p-disabled":i.isItemDisabled(n)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-menubar-end"},Q=V.extend({name:"menubar",classes:Z,inlineStyles:W}),Y={name:"BaseMenubar",extends:F,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$parentInstance:this}}},O={name:"MenubarSub",hostName:"Menubar",extends:F,emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,n){return e&&e.item?m.getItemValue(e.item[i],n):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,i,n){return this.ptm(n,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return m.isNotEmpty(e.items)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(n){return i.isItemVisible(n)&&i.getItemProp(n,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:l({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:l({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:l({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}}},components:{AngleRightIcon:H,AngleDownIcon:q},directives:{ripple:T}},J=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],X=["onClick","onMouseenter"],_=["href","target"],$=["id"],ee=["id"];function te(t,e,i,n,a,s){var u=K("MenubarSub",!0),d=B("ripple");return c(),f("ul",l({class:i.level===0?t.cx("menu"):t.cx("submenu")},i.level===0?t.ptm("menu"):t.ptm("submenu")),[(c(!0),f(x,null,z(i.items,function(r,o){return c(),f(x,{key:s.getItemKey(r)},[s.isItemVisible(r)&&!s.getItemProp(r,"separator")?(c(),f("li",l({key:0,id:s.getItemId(r),style:s.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),s.getItemProp(r,"class")],role:"menuitem","aria-label":s.getItemLabel(r),"aria-disabled":s.isItemDisabled(r)||void 0,"aria-expanded":s.isItemGroup(r)?s.isItemActive(r):void 0,"aria-haspopup":s.isItemGroup(r)&&!s.getItemProp(r,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":s.getAriaSetSize(),"aria-posinset":s.getAriaPosInset(o)},s.getPTOptions(r,o,"menuitem"),{"data-p-highlight":s.isItemActive(r),"data-p-focused":s.isItemFocused(r),"data-p-disabled":s.isItemDisabled(r)}),[A("div",l({class:t.cx("content"),onClick:function(b){return s.onItemClick(b,r)},onMouseenter:function(b){return s.onItemMouseEnter(b,r)}},s.getPTOptions(r,o,"content")),[i.templates.item?(c(),y(P(i.templates.item),{key:1,item:r.item,root:i.root,hasSubmenu:s.getItemProp(r,"items"),label:s.getItemLabel(r),props:s.getMenuItemProps(r,o)},null,8,["item","root","hasSubmenu","label","props"])):R((c(),f("a",l({key:0,href:s.getItemProp(r,"url"),class:t.cx("action"),target:s.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},s.getPTOptions(r,o,"action")),[i.templates.itemicon?(c(),y(P(i.templates.itemicon),{key:0,item:r.item,class:w([t.cx("icon"),s.getItemProp(r,"icon")])},null,8,["item","class"])):s.getItemProp(r,"icon")?(c(),f("span",l({key:1,class:[t.cx("icon"),s.getItemProp(r,"icon")]},s.getPTOptions(r,o,"icon")),null,16)):v("",!0),A("span",l({id:s.getItemLabelId(r),class:t.cx("label")},s.getPTOptions(r,o,"label")),N(s.getItemLabel(r)),17,$),s.getItemProp(r,"items")?(c(),f(x,{key:2},[i.templates.submenuicon?(c(),y(P(i.templates.submenuicon),{key:0,root:i.root,active:s.isItemActive(r),class:w(t.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),y(P(i.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:t.cx("submenuIcon")},s.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):v("",!0)],16,_)),[[d]])],16,X),s.isItemVisible(r)&&s.isItemGroup(r)?(c(),y(u,{key:0,menuId:i.menuId,role:"menu",style:j(t.sx("submenu",!0,{processedItem:r})),focusedItemId:i.focusedItemId,items:r.items,mobileActive:i.mobileActive,activeItemPath:i.activeItemPath,templates:i.templates,level:i.level+1,"aria-labelledby":s.getItemLabelId(r),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(h){return t.$emit("item-click",h)}),onItemMouseenter:e[1]||(e[1]=function(h){return t.$emit("item-mouseenter",h)})},null,8,["menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):v("",!0)],16,J)):v("",!0),s.isItemVisible(r)&&s.getItemProp(r,"separator")?(c(),f("li",l({key:1,id:s.getItemId(r),class:[t.cx("separator"),s.getItemProp(r,"class")],style:s.getItemProp(r,"style"),role:"separator"},t.ptm("separator")),null,16,ee)):v("",!0)],64)}),128))],16)}O.render=te;var ie={name:"Menubar",extends:Y,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||S()},activeItemPath:function(e){m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||S(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&L.clear(this.container),this.container=null},methods:{getItemProp:function(e,i){return e?m.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&m.isNotEmpty(e.items)},toggle:function(e){var i=this;this.mobileActive?(this.mobileActive=!1,L.clear(this.menubar),this.hide()):(this.mobileActive=!0,L.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){i.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},I.focus(this.menubar)},hide:function(e,i){var n=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){I.focus(n.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&I.focus(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,n=e.isFocus;if(!m.isEmpty(i)){var a=i.index,s=i.key,u=i.level,d=i.parentKey,r=i.items,o=m.isNotEmpty(r),h=this.activeItemPath.filter(function(b){return b.parentKey!==d&&b.parentKey!==s});o&&h.push(i),this.focusedItemInfo={index:a,level:u,parentKey:d},this.activeItemPath=h,o&&(this.dirty=!0),n&&I.focus(this.menubar)}},onItemClick:function(e){var i=e.originalEvent,n=e.processedItem,a=this.isProccessedItemGroup(n),s=m.isEmpty(n.parent),u=this.isSelected(n);if(u){var d=n.index,r=n.key,o=n.level,h=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(p){return r!==p.key&&r.startsWith(p.key)}),this.focusedItemInfo={index:d,level:o,parentKey:h},this.dirty=!s,I.focus(this.menubar)}else if(a)this.onItemChange(e);else{var b=s?n:this.activeItemPath.find(function(p){return p.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,b?b.index:-1),this.mobileActive=!1,I.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],n=i?m.isEmpty(i.parent):null;if(n){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowRightKey(e))}else{var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s)}e.preventDefault()},onArrowUpKey:function(e){var i=this,n=this.visibleItems[this.focusedItemInfo.index],a=m.isEmpty(n.parent);if(a){var s=this.isProccessedItemGroup(n);if(s){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var d=this.activeItemPath.find(function(o){return o.key===n.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:d?d.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==i.focusedItemInfo.parentKey});else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()},onArrowLeftKey:function(e){var i=this,n=this.visibleItems[this.focusedItemInfo.index],a=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(a)this.onItemChange({originalEvent:e,processedItem:a}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault();else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],n=i?this.activeItemPath.find(function(u){return u.key===i.parentKey}):null;if(n){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowDownKey(e))}else{var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=I.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),n=i&&I.findSingle(i,'a[data-pc-section="action"]');n?n.click():i&&i.click();var a=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(a);!s&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(i);!n&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var n=e.container&&!e.container.contains(i.target),a=!(e.target&&(e.target===i.target||e.target.contains(i.target)));n&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){I.isTouchDevice()||e.hide(i,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var i=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=i,this.queryMatches=i.matches,this.matchMediaListener=function(){e.queryMatches=i.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return m.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var i=this,n=e>0?m.findLastIndex(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var n=this;this.searchValue=(this.searchValue||"")+i;var a=-1,s=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return n.isItemMatched(u)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return n.isItemMatched(u)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(u){return n.isItemMatched(u)}),a!==-1&&(s=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500),s},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,n=I.findSingle(this.menubar,'li[id="'.concat(i,'"]'));n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(d,r){var o=(s!==""?s+"_":"")+r,h={item:d,index:r,level:n,key:o,parent:a,parentKey:s};h.items=i.createProcessedItems(d.items,n+1,h,o),u.push(h)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(n){return n.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(m.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:O,BarsIcon:D}};function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?C(Object(i),!0).forEach(function(n){ne(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function ne(t,e,i){return e=se(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function se(t){var e=re(t,"string");return g(e)=="symbol"?e:String(e)}function re(t,e){if(g(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(g(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ae=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function oe(t,e,i,n,a,s){var u=K("BarsIcon"),d=K("MenubarSub");return c(),f("div",l({ref:s.containerRef,class:t.cx("root")},t.ptm("root")),[t.$slots.start?(c(),f("div",l({key:0,class:t.cx("start")},t.ptm("start")),[k(t.$slots,"start")],16)):v("",!0),k(t.$slots,"menubutton",{id:a.id,class:w(t.cx("button")),toggleCallback:function(o){return s.menuButtonClick(o)}},function(){var r;return[t.model&&t.model.length>0?(c(),f("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":(r=t.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(o){return s.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return s.menuButtonKeydown(o)})},E(E({},t.buttonProps),t.ptm("button"))),[k(t.$slots,"menubuttonicon",{},function(){return[M(u,G(U(t.ptm("menubuttonicon"))),null,16)]})],16,ae)):v("",!0)]}),M(d,{ref:s.menubarRef,id:a.id,role:"menubar",items:s.processedItems,templates:t.$slots,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?s.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?s.focusedItemId:void 0,activeItemPath:a.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:s.onFocus,onBlur:s.onBlur,onKeydown:s.onKeyDown,onItemClick:s.onItemClick,onItemMouseenter:s.onItemMouseEnter},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(c(),f("div",l({key:1,class:t.cx("end")},t.ptm("end")),[k(t.$slots,"end")],16)):v("",!0)],16)}ie.render=oe;export{ie as default};
