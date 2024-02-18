import{B as k,D as l,J as o,R as y,G as x,I as T,o as c,c as u,a as m,L as b,M as P,W as w,P as h,S,Q as p,K as v,t as D}from"./entry.BLorSS5Z.js";var L={root:"p-tabmenu p-component",menu:"p-tabmenu-nav p-reset",menuitem:function(e){var t=e.instance,r=e.index,d=e.item;return["p-tabmenuitem",{"p-highlight":t.d_activeIndex===r,"p-disabled":t.disabled(d)}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",inkbar:"p-tabmenu-ink-bar"},C=k.extend({name:"tabmenu",classes:L}),F={name:"BaseTabMenu",extends:x,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:C,provide:function(){return{$parentInstance:this}}},K={name:"TabMenu",extends:F,emits:["update:activeIndex","tab-change"],timeout:null,data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.updateInkBar();var e=this.findActiveItem();e&&(e.tabIndex="0")},updated:function(){this.updateInkBar()},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r}})},onItemClick:function(e,t,r){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:r})},onKeydownItem:function(e,t,r){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(e,t,r),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?l.getAttribute(t,"data-p-disabled")===!0?this.findNextItem(t.children[0]):t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?l.getAttribute(t,"data-p-disabled")===!0?this.findPrevItem(t.children[0]):t.children[0]:null},findFirstItem:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=l.find(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},onTabKey:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),t=l.findSingle(this.$refs.nav,'[data-pc-section="action"][tabindex="0"]');t!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),t.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,t=!1,r=0;r<e.length;r++){var d=e[r];l.getAttribute(d,"data-p-highlight")&&(this.$refs.inkbar.style.width=l.getWidth(d)+"px",this.$refs.inkbar.style.left=l.getOffset(d).left-l.getOffset(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,t){var r=this;return{action:o({class:this.cx("action"),tabindex:-1,onClick:function(i){return r.onItemClick(i,e,t)},onKeyDown:function(i){return r.onKeydownItem(i,e,t)}},this.getPTOptions("action",e,t)),icon:o({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon",e,t)),label:o({class:this.cx("label")},this.getPTOptions("label",e,t))}}},directives:{ripple:y}},M=["aria-labelledby","aria-label"],B=["onClick","onKeydown","data-p-highlight","data-p-disabled"],N=["href","target","aria-label","aria-disabled"];function O(a,e,t,r,d,i){var I=T("ripple");return c(),u("div",o({class:a.cx("root")},a.ptm("root")),[m("ul",o({ref:"nav",class:a.cx("menu"),role:"menubar","aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptm("menu")),[(c(!0),u(b,null,P(a.model,function(n,s){return c(),u(b,{key:i.label(n)+"_"+s.toString()},[i.visible(n)?(c(),u("li",o({key:0,ref_for:!0,ref:"tab",class:[a.cx("menuitem",{item:n,index:s}),n.class],role:"presentation",onClick:function(f){return i.onItemClick(f,n,s)},onKeydown:function(f){return i.onKeydownItem(f,n,s)}},i.getPTOptions("menuitem",n,s),{"data-p-highlight":d.d_activeIndex===s,"data-p-disabled":i.disabled(n)}),[a.$slots.item?(c(),h(p(a.$slots.item),{key:1,item:n,index:s,active:s===d.d_activeIndex,label:i.label(n),props:i.getMenuItemProps(n,s)},null,8,["item","index","active","label","props"])):w((c(),u("a",o({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:n.url,class:a.cx("action"),target:n.target,"aria-label":i.label(n),"aria-disabled":i.disabled(n),tabindex:-1},i.getPTOptions("action",n,s)),[a.$slots.itemicon?(c(),h(p(a.$slots.itemicon),{key:0,item:n,class:S([a.cx("icon"),n.icon])},null,8,["item","class"])):n.icon?(c(),u("span",o({key:1,class:[a.cx("icon"),n.icon]},i.getPTOptions("icon",n,s)),null,16)):v("",!0),m("span",o({class:a.cx("label")},i.getPTOptions("label",n,s)),D(i.label(n)),17)],16,N)),[[I]])],16,B)):v("",!0)],64)}),128)),m("li",o({ref:"inkbar",role:"none",class:a.cx("inkbar")},a.ptm("inkbar")),null,16)],16,M)],16)}K.render=O;export{K as default};
