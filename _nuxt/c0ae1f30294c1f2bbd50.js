(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("43076363",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var r=n(332);n.n(r).a},335:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"img[data-v-e38e9eac]{margin:0;padding:0}",""])},336:function(t,e,n){"use strict";var r=n(339),o=n.n(r),c={data:function(){return{recipeinfo:""}},created:function(){this.addtiles()},methods:{addtiles:function(){var t=this;o.a.get("https://www.themealdb.com/api/json/v1/1/randomselection.php").then(function(e){console.log(e.data.meals),t.recipeinfo=e.data.meals}).catch(function(t){console.log(t)})}}},d=(n(334),n(20)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card-group",{attrs:{deck:""}},t._l(t.recipeinfo,function(e,r){return n("div",{staticStyle:{width:"460px"}},[r<4?n("div",[n("b-card",[n("img",{attrs:{src:e.strMealThumb,alt:"",height:"350",width:"400"}}),t._v(" "),n("b-card-title",[t._v("\n                  "+t._s(e.strMeal)+"\n               ")]),t._v(" "),n("b-card-text",[t._v("\n                  "+t._s(e.strCategory)+"\n               ")]),t._v(" "),n("b-button",{attrs:{href:"#",variant:"warning"}},[t._v("Get Recipe")]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("small",{staticClass:"text-muted"},[t._v(" Country of origin : "+t._s(e.strArea))])])],1)],1):t._e()])}),0)],1)},[],!1,null,"e38e9eac",null);e.a=component.exports},342:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("936848d2",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";var r=n(342);n.n(r).a},381:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"*[data-v-aa5f5328]{text-align:center}",""])},386:function(t,e,n){"use strict";n.r(e);var r=n(141),o=n(336),c={data:function(){return{eventdetails:[{id:"event1",name:"Event 1",date:"March 23rd 2019",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",location:"New York"},{id:"event2",name:"Event 2",date:"June 23rd 2019",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",title:" Chicago"},{id:"event3",name:"Event 3",date:"June 23rd 2019",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",title:"Seattle"}]}}},d=n(20),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{role:"tablist"}},t._l(t.eventdetails,function(e){return n("div",[n("b-card",[n("b-card-header",{attrs:{"header-tag":"header",role:"tab"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.id,expression:"eventinfo.id"}],attrs:{block:"",href:"#",variant:"info"}},[t._v(t._s(e.name)+" ")])],1),t._v(" "),n("b-collapse",{attrs:{id:e.id,accordion:"my-event",role:"tabpanel"}},[n("b-card-body",[n("b-card-text",{attrs:{right:""}},[t._v("Date :  "+t._s(e.date))]),t._v(" "),n("b-card-text",{attrs:{right:""}},[t._v("Description : "+t._s(e.description))]),t._v(" "),n("b-card-text",{attrs:{right:""}},[t._v("Venue :  "+t._s(e.location))])],1)],1)],1)],1)}),0)},[],!1,null,"86184342",null).exports,v={components:{navbar:r.a,foodtiles:o.a,eventstable:l}},f=(n(380),Object(d.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("h1",[this._v("Upcoming Events")]),this._v(" "),e("eventstable")],1)},[],!1,null,"aa5f5328",null));e.default=f.exports}}]);