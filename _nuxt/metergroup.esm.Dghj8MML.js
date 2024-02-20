import{H as O,N as g,o,c as i,B as h,C as f,S as n,T as u,W as y,a as c,t as b,P as S,b as d,z as v}from"./entry.4Unyay7u.js";var k={root:function(t){var r=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":r.orientation==="horizontal","p-metergroup-vertical":r.orientation==="vertical"}]},metercontainer:"p-metergroup-meters",meter:"p-metergroup-meter",labellist:function(t){var r=t.props;return["p-metergroup-labels",{"p-metergroup-labels-vertical":r.labelOrientation==="vertical","p-metergroup-labels-horizontal":r.labelOrientation==="horizontal"}]},labellistitem:"p-metergroup-label",labelicon:"p-metergroup-label-icon",labellisttype:"p-metergroup-label-marker",label:"p-metergroup-label-text"},M=O.extend({name:"metergroup",classes:k}),V={name:"MeterGroup",extends:g,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:M,provide:function(){return{$parentInstance:this}}},P={name:"MeterGroupLabel",hostName:"MeterGroup",extends:g,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function G(e,t,r,p,z,a){return o(),i("ol",n({class:e.cx("labellist")},e.ptm("labellist")),[(o(!0),i(h,null,f(r.value,function(l,s){return o(),i("li",n({key:s+"_label",class:e.cx("labellistitem")},e.ptm("labellistitem")),[u(e.$slots,"icon",{value:l,class:y(e.cx("labelicon"))},function(){return[l.icon?(o(),i("i",n({key:0,class:[l.icon,e.cx("labelicon")],style:{color:l.color}},e.ptm("labelicon")),null,16)):(o(),i("span",n({key:1,class:e.cx("labellisttype"),style:{backgroundColor:l.color}},e.ptm("labellisttype")),null,16))]}),c("span",n({class:e.cx("label")},e.ptm("label")),b(l.label)+" ("+b(e.$parentInstance.percentValue(l.value))+")",17)],16)}),128))],16)}P.render=G;var N={name:"MeterGroup",extends:V,methods:{getPTOptions:function(t,r,p){return this.ptm(t,{context:{value:r,index:p}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))},percentValue:function(t){return this.percent(t)+"%"},meterSize:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(t,r){return t+r.value},0))},percentages:function(){var t=0,r=[];return this.value.forEach(function(p){t+=p.value,r.push(t)}),r}},components:{MeterGroupLabel:P}},C=["aria-valuemin","aria-valuemax","aria-valuenow"];function $(e,t,r,p,z,a){var l=S("MeterGroupLabel");return o(),i("div",n({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a.totalPercent},e.ptm("root")),[e.labelPosition==="start"?u(e.$slots,"label",{key:0,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[d(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):v("",!0),u(e.$slots,"start",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),c("div",n({class:e.cx("metercontainer")},e.ptm("metercontainer")),[(o(!0),i(h,null,f(e.value,function(s,m){return u(e.$slots,"meter",{key:m,value:s,index:m,class:y(e.cx("meter")),orientation:e.orientation,size:a.percentValue(s.value),totalPercent:a.totalPercent},function(){return[c("span",n({class:e.cx("meter"),style:a.meterSize(s)},a.getPTOptions("meter",s,m)),null,16)]})}),128))],16),u(e.$slots,"end",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),e.labelPosition==="end"?u(e.$slots,"label",{key:1,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[d(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):v("",!0)],16,C)}N.render=$;export{N as default};
