(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b16e2e"],{"1a33":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-list"},[r("Search",{attrs:{placeholder:"请输入搜索内容",search:function(e){return t.$store.commit("search",e)}}}),r("div",{staticClass:"orders"},[r("ul",{staticClass:"order"},t._l(t.order,(function(e){return r("li",{key:e.id,on:{touchend:function(r){return t.clickOrder(e.id)}}},[t._v(t._s(e.name))])})),0)]),t._l(t.list,(function(t){return r("Product",{key:t._id,attrs:{data:t}})})),r("div",{directives:[{name:"show",rawName:"v-show",value:t.others.length,expression:"others.length"}],staticClass:"btn-others",on:{click:t.showOthers}},[r("span",[t._v("查看其它"+t._s(t.others.length)+"条商品")])])],2)},s=[],n=(r("99af"),r("fb6a"),r("ac1f"),r("841c"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ickt-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.msg},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.showSearch(e)},input:function(e){e.target.composing||(t.msg=e.target.value)}}})])}),i=[],o={props:["placeholder","search"],data:function(){return{msg:""}},methods:{showSearch:function(){this.search(this.msg),this.msg=""}}},c=o,u=(r("78be"),r("2877")),h=Object(u["a"])(c,n,i,!1,null,"0e41efca",null),l=h.exports,d=r("be6f"),f={components:{Search:l,Product:d["a"]},data:function(){return{order:[{name:"价格排序",id:"price"},{name:"销量排序",id:"sales"},{name:"好评排序",id:"evaluate"},{name:"优惠排序",id:"discount"}],list:[],others:[]}},methods:{getData:function(){var t=this,e=this.$route.params;this.$http.get("/data/list",{params:e}).then((function(e){var r=e.data;t.list=r.slice(0,3),t.others=r.slice(3)}))},showOthers:function(){this.list=this.list.concat(this.others),this.others=[]},clickOrder:function(t){var e=this,r=this.$route.params;this.$http.get("/data/order",{params:{type:r.type,id:t,mode:-1}}).then((function(t){var r=t.data;if(!r.length)return e.$message.error("没有数据");e.list=r.slice(0,3),e.others=r.slice(3)}))}},computed:{dealSearch:function(){return this.$store.state.search}},created:function(){this.getData()},watch:{$route:function(){this.getData()},dealSearch:function(t){var e=this,r=this.$route.params;this.$http.get("/data/search",{params:{type:r.type,value:t}}).then((function(t){var r=t.data;if(!r.length)return e.$message.error("没有数据"),e.list=[],void(e.others=[]);e.list=r.slice(0,3),e.others=r.slice(3)}))}}},p=f,m=(r("b8d3"),Object(u["a"])(p,a,s,!1,null,"4b3c3a38",null));e["default"]=m.exports},"78be":function(t,e,r){"use strict";var a=r("8d67"),s=r.n(a);s.a},"7c67":function(t,e,r){},"8d67":function(t,e,r){},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),n=r("e8b5"),i=r("861d"),o=r("7b0b"),c=r("50c4"),u=r("8418"),h=r("65f0"),l=r("1dde"),d=r("b622"),f=r("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=l("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},w=!g||!b;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,a,s,n,i=o(this),l=h(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?i:arguments[e],y(n)){if(s=c(n.length),d+s>m)throw TypeError(v);for(r=0;r<s;r++,d++)r in n&&u(l,d,n[r])}else{if(d>=m)throw TypeError(v);u(l,d++,n)}return l.length=d,l}})},b8d3:function(t,e,r){"use strict";var a=r("7c67"),s=r.n(a);s.a},fb6a:function(t,e,r){"use strict";var a=r("23e7"),s=r("861d"),n=r("e8b5"),i=r("23cb"),o=r("50c4"),c=r("fc6a"),u=r("8418"),h=r("b622"),l=r("1dde"),d=r("ae40"),f=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=h("species"),v=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var r,a,h,l=c(this),d=o(l.length),f=i(t,d),p=i(void 0===e?d:e,d);if(n(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?s(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,f,p);for(a=new(void 0===r?Array:r)(g(p-f,0)),h=0;f<p;f++,h++)f in l&&u(a,h,l[f]);return a.length=h,a}})}}]);
//# sourceMappingURL=chunk-61b16e2e.c7b915ab.js.map