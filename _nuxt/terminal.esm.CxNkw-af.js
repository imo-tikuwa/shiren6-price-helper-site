import{aq as d,B as u,G as f,o as m,c as p,$ as v,J as t,t as a,K as y,a as o,L as T,M as g,W as h,a3 as w}from"./entry.BLorSS5Z.js";var l=d(),k={root:"p-terminal p-component",content:"p-terminal-content",prompt:"p-terminal-prompt",command:"p-terminal-command",response:"p-terminal-response",container:"p-terminal-prompt-container",commandText:"p-terminal-input"},S=u.extend({name:"terminal",classes:k}),x={name:"BaseTerminal",extends:f,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}},B={name:"Terminal",extends:x,data:function(){return{commandText:null,commands:[]}},mounted:function(){l.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){l.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter")&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function C(e,n,K,L,i,s){return m(),p("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("root")),[e.welcomeMessage?(m(),p("div",v(t({key:0},e.ptm("welcomeMessage"))),a(e.welcomeMessage),17)):y("",!0),o("div",t({class:e.cx("content")},e.ptm("content")),[(m(!0),p(T,null,g(i.commands,function(r,c){return m(),p("div",t({key:r.text+c.toString()},e.ptm("commands")),[o("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),o("span",t({class:e.cx("command")},e.ptm("command")),a(r.text),17),o("div",t({class:e.cx("response"),"aria-live":"polite"},e.ptm("response")),a(r.response),17)],16)}),128))],16),o("div",t({class:e.cx("container")},e.ptm("container")),[o("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),h(o("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(r){return i.commandText=r}),type:"text",class:e.cx("commandText"),autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return s.onKeydown&&s.onKeydown.apply(s,arguments)})},e.ptm("commandText")),null,16),[[w,i.commandText]])],16)],16)}B.render=C;export{B as default};
