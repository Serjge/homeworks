(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,function(e,a,s){e.exports={message:"Message_message__1x-qa",message__avatar:"Message_message__avatar__3yZsa",message__avatar_none:"Message_message__avatar_none__2f3Co",message__body:"Message_message__body__Sp_cr",message__body_item:"Message_message__body_item__1OTE6",message__name:"Message_message__name__2EUbO",Message__text:"Message_Message__text__OhYoI",message__time:"Message_message__time__2XXuE"}},,,,,,function(e,a,s){e.exports={someClass:"Affair_someClass__3ux30",wrapper:"Affair_wrapper__3fJen",name:"Affair_name__uBhLH",button:"Affair_button__3pel7",priority:"Affair_priority__1sHWz",low:"Affair_low__2j-7z",middle:"Affair_middle__1Cv4d",high:"Affair_high__2OlwD"}},,function(e,a,s){e.exports={someClass:"Affairs_someClass__I1zrU",button:"Affairs_button__M7y8y"}},function(e,a,s){e.exports={someClass:"Greeting_someClass__5BGjS",wrapper:"Greeting_wrapper__2QL6K",columns:"Greeting_columns__3m9E3",error:"Greeting_error__2ZIm2",errorText:"Greeting_errorText__2aN2r",inputClass:"Greeting_inputClass__39DtJ",button:"Greeting_button__207i7"}},,,,,function(e,a,s){e.exports={button:"Header_button__38Wlq",wrapper:"Header_wrapper__3sLhx",menu:"Header_menu__3fE62",act:"Header_act__2fwfC"}},,function(e,a,s){e.exports={superInput:"SuperInputText_superInput__e7BgH",errorInput:"SuperInputText_errorInput__N_Qrn",error:"SuperInputText_error__2Z9mm"}},function(e,a,s){e.exports={blue:"HW4_blue__10P36",column:"HW4_column__253k1",testSpanError:"HW4_testSpanError__3V-CN"}},,function(e,a,s){e.exports={default:"SuperButton_default__8V8X6",red:"SuperButton_red__3B092"}},,function(e,a,s){e.exports={spanClassName:"SuperCheckbox_spanClassName__rWfaZ"}},,function(e,a,s){e.exports={App:"App_App__3mL3o"}},,,,,,function(e,a,s){},,,,,,,,function(e,a,s){"use strict";s.r(a);var t=s(1),n=s.n(t),c=s(17),r=s.n(c),i=(s(31),s(25)),o=s.n(i),j=s(9),l=s(3),d=s(4),m=s(5),b=s(7),u=s(0),O=["options","onChange","onChangeOption"],h=function(e){var a=e.options,s=e.onChange,t=e.onChangeOption,n=Object(b.a)(e,O),c=a?a.map((function(e,a){return Object(u.jsx)("option",{value:e,children:e},a)})):[];return Object(u.jsx)("select",Object(m.a)(Object(m.a)({onChange:function(e){s&&s(e),t&&t(e.currentTarget.value)}},n),{},{children:c}))},_=["type","name","options","value","onChange","onChangeOption"],x=function(e){e.type;var a=e.name,s=e.options,t=e.value,n=e.onChange,c=e.onChangeOption,r=(Object(b.a)(e,_),function(e){n&&n(e),c&&c(e.currentTarget.value)}),i=s?s.map((function(e,s){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:a,checked:t===e,value:e,onChange:r}),e]},a+"-"+s)})):[];return Object(u.jsx)("form",{children:i})},g=["x","y","z"];var p=function(){var e=Object(t.useState)(g[1]),a=Object(d.a)(e,2),s=a[0],n=a[1];return console.log(s),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(h,{options:g,value:s,onChangeOption:n})}),Object(u.jsx)("div",{children:Object(u.jsx)(x,{name:"radio",options:g,value:s,onChangeOption:n})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},v=s(15),f=function(e,a){switch(a.type){case"sort":var s=Object(v.a)(e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})));return"up"===a.payload?s:s.reverse();case"check":return e.filter((function(e){return e.age>=a.payload}));case"check-up":var t=Object(v.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));return"up"===a.payload.filter?t.filter((function(e){return e.age>=a.payload.age})):"down"===a.payload.filter?t.reverse().filter((function(e){return e.age>=a.payload.age})):e.filter((function(e){return e.age>=a.payload.age}));default:return e}},N=s(21),C=s.n(N),y=["red","className"],w=function(e){var a=e.red,s=e.className,t=Object(b.a)(e,y),n="".concat(a?C.a.red:C.a.default," ").concat(s);return Object(u.jsx)("button",Object(m.a)({className:n},t))},k=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var S=function(){var e=Object(t.useState)(k),a=Object(d.a)(e,2),s=a[0],n=a[1],c=s.map((function(e){return Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"300px"},children:[Object(u.jsxs)("span",{children:[" ",e.name]}),Object(u.jsx)("span",{children:e.age})]},e._id)})),r=[0,18,65],i=Object(t.useState)(r[0]),o=Object(d.a)(i,2),j=o[0],l=o[1],m=Object(t.useState)("default"),b=Object(d.a)(m,2),O=b[0],_=b[1],x=f([{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u042f\u0440\u043e\u0441\u043b\u0430\u0432",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55},{_id:6,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:45}],{type:"check-up",payload:{age:j,filter:O}}).map((function(e){return Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"300px"},children:[Object(u.jsxs)("span",{children:[" ",e.name]}),Object(u.jsx)("span",{children:e.age})]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",c,Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{onClick:function(){n(f(k,{type:"sort",payload:"up"})),console.log("sortUp")},children:"sort up"}),Object(u.jsx)(w,{onClick:function(){return n(f(k,{type:"sort",payload:"down"}))},children:"sort down"}),Object(u.jsx)(w,{onClick:function(){return n(f(k,{type:"check",payload:18}))},children:"check 18"})]}),Object(u.jsx)("hr",{}),x,"Filter age: ",Object(u.jsx)(h,{options:r,onChangeOption:l,value:j}),"   Sort Name: ",Object(u.jsx)(h,{options:["default","up","down"],onChangeOption:_,value:O}),Object(u.jsx)("hr",{})]})},A=s(14),M={pic:s.p+"static/media/new.3e9639fe.svg",isLoading:!1},T=function(e){return{type:"loading",payload:{isLoading:e}}};var E=function(){var e=Object(A.c)((function(e){return e.loading})),a=Object(A.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 10",e.isLoading?Object(u.jsx)("div",{style:{height:"50px"},children:Object(u.jsx)("img",{src:e.pic})}):Object(u.jsx)("div",{style:{height:"50px"},children:Object(u.jsx)(w,{onClick:function(){a(T(!0)),setTimeout((function(){return a(T(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var H=function(){var e=Object(t.useState)(0),a=Object(d.a)(e,2),s=a[0],n=a[1],c=Object(t.useState)(),r=Object(d.a)(c,2),i=r[0],o=r[1],j=Object(t.useState)(!1),l=Object(d.a)(j,2),m=l[0],b=l[1],O=function(){clearTimeout(s)};console.log(i);var h=null===i||void 0===i?void 0:i.toLocaleTimeString(),_=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:{height:"50px",width:"150px",textAlign:"center"},children:[Object(u.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),m&&Object(u.jsx)("div",{children:_})]}),Object(u.jsx)(w,{onClick:function(){O();var e=window.setInterval((function(){var e=new Date;o(e)}),1e3);n(e)},children:"start"}),Object(u.jsx)(w,{onClick:O,children:"stop"})]})};var B=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(H,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var F=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{}),Object(u.jsx)(S,{}),Object(u.jsx)(B,{}),Object(u.jsx)(E,{})]})},I=s(2),W=s.n(I);var L=function(e){return Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar,children:Object(u.jsx)("img",{alt:"avatar",src:e.avatar})}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsxs)("div",{className:W.a.message__body_item,children:[Object(u.jsx)("p",{className:W.a.message__name,children:e.name}),Object(u.jsx)("p",{className:W.a.Message__text,children:e.message})]}),Object(u.jsx)("div",{className:W.a.message__time,children:e.time})]})]})};var P=function(e){return console.log(typeof e.messages[0]),"Serjge"===e.messages[0].name?W.a.message__body__Serjge:W.a.message__body,3===e.messages.length?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar_none}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsxs)("div",{className:W.a.message__body_item,children:[Object(u.jsx)("p",{className:W.a.message__name,children:e.messages[0].name}),Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[0].message})]}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[0].time})]})]}),Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar_none}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsx)("div",{className:W.a.message__body_item,children:Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[1].message})}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[1].time})]})]}),Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar,children:Object(u.jsx)("img",{alt:"avatar",src:e.messages[2].avatar})}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsx)("div",{className:W.a.message__body_item,children:Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[2].message})}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[2].time})]})]})]}):2===e.messages.length?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar_none}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsxs)("div",{className:W.a.message__body_item,children:[Object(u.jsx)("p",{className:W.a.message__name,children:e.messages[0].name}),Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[0].message})]}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[0].time})]})]}),Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar,children:Object(u.jsx)("img",{alt:"avatar",src:e.messages[1].avatar})}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsx)("div",{className:W.a.message__body_item,children:Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[1].message})}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[1].time})]})]})]}):Object(u.jsxs)("div",{className:W.a.message,children:[Object(u.jsx)("div",{className:W.a.message__avatar,children:Object(u.jsx)("img",{alt:"avatar",src:e.messages[0].avatar})}),Object(u.jsxs)("div",{className:W.a.message__body,children:[Object(u.jsxs)("div",{className:W.a.message__body_item,children:[Object(u.jsx)("p",{className:W.a.message__name,children:e.messages[0].name}),Object(u.jsx)("p",{className:W.a.Message__text,children:e.messages[0].message})]}),Object(u.jsx)("div",{className:W.a.message__time,children:e.messages[0].time})]})]})},G="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",J="Serjge",z="Hello Friends!",D="22:00",U=[{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"Hello Friend!",time:"22:00"},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"Glad to see you!",time:"22:01"},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"How are you?",time:"22:02"}];var Z=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(L,{avatar:G,name:J,message:z,time:D}),Object(u.jsx)("hr",{}),Object(u.jsx)(P,{messages:U})]})},X=s(8),q=s.n(X);var Y=function(e){var a="".concat(q.a.priority," ").concat(function(){switch(e.affair.priority){case"low":return q.a.low;case"middle":return q.a.middle;case"high":return q.a.high;default:return""}}());return Object(u.jsxs)("div",{className:q.a.wrapper,children:[Object(u.jsx)("div",{className:q.a.name,children:e.affair.name}),Object(u.jsx)("div",{className:a,children:e.affair.priority}),Object(u.jsx)("button",{className:q.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"Delete"})]})},K=s(10),Q=s.n(K);var V=function(e){var a=e.data.map((function(a){return Object(u.jsx)(Y,{affair:a,deleteAffairCallback:e.deleteAffairCallback},a._id)}));return Object(u.jsxs)("div",{children:[a,Object(u.jsx)("button",{className:Q.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:Q.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:Q.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:Q.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},R=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var $=function(){var e=Object(t.useState)(R),a=Object(d.a)(e,2),s=a[0],n=a[1],c=Object(t.useState)("all"),r=Object(d.a)(c,2),i=r[0],o=r[1],j=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(s,i);return Object(u.jsxs)("div",{className:Q.a.someClass,children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(V,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,a){return e.filter((function(e){return e._id!==a}))}(s,e))}})]})},ee=s(11),ae=s.n(ee),se=function(e){var a=e.name,s=e.setNameCallback,t=e.addUser,n=e.error,c=e.totalUsers,r=""!==n?ae.a.error:"",i=""!==n?ae.a.errorText:"";return Object(u.jsxs)("div",{className:ae.a.wrapper,children:[Object(u.jsxs)("div",{className:ae.a.columns,children:[Object(u.jsx)("input",{value:a,onChange:s,className:ae.a.inputClass+" "+r}),Object(u.jsx)("span",{className:i,children:n})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:ae.a.button,onClick:t,children:"add"}),Object(u.jsx)("span",{children:c})]})]})},te=function(e){var a=e.users,s=e.addUserCallback,n=Object(t.useState)(""),c=Object(d.a)(n,2),r=c[0],i=c[1],o=Object(t.useState)(""),j=Object(d.a)(o,2),l=j[0],m=j[1],b=a.length;return Object(u.jsx)(se,{name:r,setNameCallback:function(e){i(e.currentTarget.value),m("")},addUser:function(){""===r.trim()?m("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"):(s(r.trim()),alert("Hello ".concat(r.trim()," !")),i(""))},error:l,totalUsers:b})},ne=s(41);var ce=function(){var e=Object(t.useState)([]),a=Object(d.a)(e,2),s=a[0],n=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(te,{users:s,addUserCallback:function(e){var a=[{_id:Object(ne.a)(),name:e}].concat(Object(v.a)(s));n(a)}})]})},re=s(18),ie=s.n(re),oe=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],je=function(e){e.type;var a=e.onChange,s=e.onChangeText,t=e.onKeyPress,n=e.onEnter,c=e.error,r=e.className,i=e.spanClassName,o=Object(b.a)(e,oe),j="".concat(ie.a.error," ").concat(i||""),l="".concat(c?ie.a.errorInput:ie.a.superInput," ").concat(r);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(m.a)({type:"text",onChange:function(e){a&&a(e),s&&s(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),n&&"Enter"===e.key&&n()},className:l},o)),c&&Object(u.jsx)("span",{className:j,children:c})]})},le=s(19),de=s.n(le),me=s(23),be=s.n(me),ue=["type","onChange","onChangeChecked","className","spanClassName","children"],Oe=function(e){e.type;var a=e.onChange,s=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),c=Object(b.a)(e,ue),r="".concat(be.a.checkbox," ").concat(t||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(m.a)({type:"checkbox",onChange:function(e){a&&a(e),s&&s(e.currentTarget.checked)},className:r},c)),n&&Object(u.jsx)("span",{className:be.a.spanClassName,children:n})]})};var he=function(){var e=Object(t.useState)(""),a=Object(d.a)(e,2),s=a[0],n=a[1],c=s?"":"error",r=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(s)},i=Object(t.useState)(!1),o=Object(d.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:de.a.column,children:[Object(u.jsx)(je,{value:s,onChangeText:n,onEnter:r,error:c,spanClassName:de.a.testSpanError}),Object(u.jsx)(je,{className:de.a.blue}),Object(u.jsx)(w,{children:"default"}),Object(u.jsx)(w,{red:!0,onClick:r,children:"delete "}),Object(u.jsx)(w,{disabled:!0,children:"disabled"}),Object(u.jsx)(Oe,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(Oe,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_e=["autoFocus","onBlur","onEnter","spanProps"],xe=["children","onDoubleClick","className"],ge=function(e){e.autoFocus;var a=e.onBlur,s=e.onEnter,n=e.spanProps,c=Object(b.a)(e,_e),r=Object(t.useState)(!1),i=Object(d.a)(r,2),o=i[0],j=i[1],l=n||{},O=l.children,h=l.onDoubleClick,_=l.className,x=Object(b.a)(l,xe),g="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",_);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(je,Object(m.a)({autoFocus:!0,onBlur:function(e){j(!1),a&&a(e)},onEnter:function(){j(!1),s&&s()}},c)):Object(u.jsx)("span",Object(m.a)(Object(m.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:g},x),{},{children:O||c.value}))})};function pe(e,a){var s=JSON.stringify(a);localStorage.setItem(e,s)}function ve(e,a){var s=a,t=localStorage.getItem(e);return null!==t&&(s=JSON.parse(t)),s}pe("test",{x:"A",y:1});ve("test",{x:"",y:0});function fe(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",x:"0",y:"0",enableBackground:"new 0 0 920.729 920.729",version:"1.1",viewBox:"0 0 920.729 920.729",xmlSpace:"preserve",fill:" #4676D7",children:[Object(u.jsx)("path",{d:"M897.491 833.729a28.3 28.3 0 00-4.1.3l-245.7 31.8c-12.6 1.601-21.399-12.2-14.6-23 3.7-5.7 7.3-11.5 10.899-17.3 9.5-15.4-3.199-35.9-20.8-35.9-1.2 0-2.399.101-3.7.301l-322 48.399-38.5 5.8-105 15.801c-11.9 1.8-19.9 11.899-18.9 24 .4 5.399 2.6 10.5 6.1 14.3 4.1 4.5 9.8 7 16 7 1.2 0 2.4-.101 3.7-.3l383.8-57.7c13.101-2 22.101 12.8 14.4 23.6-2.5 3.4-5 6.9-7.5 10.3-6.9 9.4-5.3 25.101 2.7 33.2 4.1 4.2 9.3 6.4 14.8 6.4.6 0 1.3 0 1.899-.101h.201l331.3-42.199h.201c5.7-.9 10.7-4.2 14-9.301 3.601-5.6 4.9-12.5 3.3-18.699-2.6-10.101-11.4-16.701-22.5-16.701zM755.891 191.529c26.7-31.7 22.6-79-9.1-105.7l-81.101-68.2c-31.7-26.7-79-22.6-105.7 9.1l-32.1 38.1 195.9 164.8 32.101-38.1z"}),Object(u.jsx)("path",{d:"M698.891 258.629L502.991 93.829 436.591 172.829 632.491 337.629z"}),Object(u.jsx)("path",{d:"M.091 877.43c-.5 6.8 5.8 12.1 12.4 10.399l49.5-12.5-58.2-49-3.7 51.101zM236.69 807.229l367.701-436.8-195.901-164.8-367.7 436.7c-6.8 8.101-10.9 18.101-11.6 28.601l-8.7 120.8 72.8 61.3 117.3-29.5a50.653 50.653 0 0026.1-16.301z"})]})}var Ne=function(){var e=Object(t.useState)(ve("editable-span-value","")),a=Object(d.a)(e,2),s=a[0],n=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsxs)("div",{children:[Object(u.jsx)(fe,{}),Object(u.jsx)(ge,{value:s,onChangeText:n,spanProps:{children:s?void 0:"enter text..."}})]}),Object(u.jsx)(w,{onClick:function(){pe("editable-span-value",s)},children:"save"}),Object(u.jsx)(w,{onClick:function(){n(ve("editable-span-value",""))},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Ce=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(Z,{}),Object(u.jsx)($,{}),Object(u.jsx)(ce,{}),Object(u.jsx)(he,{}),Object(u.jsx)(Ne,{})]})};var ye=function(){return Object(u.jsx)("div",{})};var we=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ke="/pre-junior",Se="/junior",Ae="/junior-plus";var Me=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/*",element:Object(u.jsx)(we,{})}),Object(u.jsx)(l.b,{path:"/",element:Object(u.jsx)(l.a,{to:ke})}),Object(u.jsx)(l.b,{path:ke,element:Object(u.jsx)(Ce,{})}),Object(u.jsx)(l.b,{path:Se,element:Object(u.jsx)(F,{})}),Object(u.jsx)(l.b,{path:Ae,element:Object(u.jsx)(ye,{})})]})})},Te=s(16),Ee=s.n(Te);var He=function(){var e=function(e){return e.isActive?Ee.a.act:""};return Object(u.jsxs)("div",{className:Ee.a.wrapper,children:[Object(u.jsx)("button",{className:Ee.a.button,children:"menu"}),Object(u.jsxs)("div",{className:Ee.a.menu,children:[Object(u.jsx)(j.b,{className:e,to:ke,children:"PreJunior"}),Object(u.jsx)(j.b,{className:e,to:Se,children:"Junior"}),Object(u.jsx)(j.b,{className:e,to:Ae,children:"JuniorPlus"})]})]})};var Be=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(He,{}),Object(u.jsx)(Me,{})]})})};var Fe=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Be,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=s(24),We=Object(Ie.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;return"loading"===a.type?Object(m.a)(Object(m.a)({},e),{},{isLoading:a.payload.isLoading}):e}}),Le=Object(Ie.b)(We),Pe=Le;window.store=Le,r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(A.a,{store:Pe,children:Object(u.jsx)(Fe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.237d43ad.chunk.js.map