(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,function(e,s,a){e.exports={message:"Message_message__1x-qa",message__avatar:"Message_message__avatar__3yZsa",message__avatar_none:"Message_message__avatar_none__2f3Co",message__body:"Message_message__body__Sp_cr",message__body_item:"Message_message__body_item__1OTE6",message__name:"Message_message__name__2EUbO",Message__text:"Message_Message__text__OhYoI",message__time:"Message_message__time__2XXuE"}},,,,,,function(e,s,a){e.exports={someClass:"Affair_someClass__3ux30",wrapper:"Affair_wrapper__3fJen",name:"Affair_name__uBhLH",button:"Affair_button__3pel7",priority:"Affair_priority__1sHWz",low:"Affair_low__2j-7z",middle:"Affair_middle__1Cv4d",high:"Affair_high__2OlwD"}},,function(e,s,a){e.exports={someClass:"Affairs_someClass__I1zrU",button:"Affairs_button__M7y8y"}},function(e,s,a){e.exports={someClass:"Greeting_someClass__5BGjS",wrapper:"Greeting_wrapper__2QL6K",columns:"Greeting_columns__3m9E3",error:"Greeting_error__2ZIm2",errorText:"Greeting_errorText__2aN2r",inputClass:"Greeting_inputClass__39DtJ",button:"Greeting_button__207i7"}},,,function(e,s,a){e.exports={button:"Header_button__38Wlq",wrapper:"Header_wrapper__3sLhx",menu:"Header_menu__3fE62",act:"Header_act__2fwfC"}},function(e,s,a){e.exports={superInput:"SuperInputText_superInput__e7BgH",errorInput:"SuperInputText_errorInput__N_Qrn",error:"SuperInputText_error__2Z9mm"}},function(e,s,a){e.exports={blue:"HW4_blue__10P36",column:"HW4_column__253k1",testSpanError:"HW4_testSpanError__3V-CN"}},,function(e,s,a){e.exports={default:"SuperButton_default__8V8X6",red:"SuperButton_red__3B092"}},function(e,s,a){e.exports={dark:"HW12_dark__gnrEr","dark-text":"HW12_dark-text__R_oSV",red:"HW12_red__kL0Eh","red-text":"HW12_red-text__9hjkc",some:"HW12_some__2KfPV","some-text":"HW12_some-text__7aD6Q"}},function(e,s,a){e.exports={spanClassName:"SuperCheckbox_spanClassName__rWfaZ"}},,function(e,s,a){e.exports={App:"App_App__3mL3o"}},function(e,s,a){e.exports={range:"SuperRange_range__1_0UY"}},,,,,,function(e,s,a){},,function(e,s,a){"use strict";a.r(s);var t=a(1),n=a.n(t),c=a(21),r=a.n(c),i=(a(29),a(22)),j=a.n(i),o=a(9),l=a(3),m=a(4),d=a(7),b=a(6),_=a(0),u=["options","onChange","onChangeOption"],O=function(e){e.options,e.onChange,e.onChangeOption;var s=Object(b.a)(e,u);return Object(_.jsx)("select",Object(d.a)(Object(d.a)({onChange:function(e){}},s),{},{children:[]}))},h=["type","name","options","value","onChange","onChangeOption"],x=function(e){e.type;var s=e.name,a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(b.a)(e,h),a?a.map((function(e,a){return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",{type:"radio"}),e]},s+"-"+a)})):[]);return Object(_.jsx)(_.Fragment,{children:t})},g=["x","y","z"];var v=function(){var e=Object(t.useState)(g[1]),s=Object(m.a)(e,2),a=s[0],n=s[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 7",Object(_.jsx)("div",{children:Object(_.jsx)(O,{options:g,value:a,onChangeOption:n})}),Object(_.jsx)("div",{children:Object(_.jsx)(x,{name:"radio",options:g,value:a,onChangeOption:n})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},p=a(18),f=a.n(p),N=["red","className"],C=function(e){var s=e.red,a=e.className,t=Object(b.a)(e,N),n="".concat(s?f.a.red:f.a.default," ").concat(a);return Object(_.jsx)("button",Object(d.a)({className:n},t))},y=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var k=function(){var e=Object(t.useState)(y),s=Object(m.a)(e,2),a=s[0],n=s[1],c=a.map((function(e){return Object(_.jsx)("div",{children:"some name, age"},e._id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 8",c,Object(_.jsx)("div",{children:Object(_.jsx)(C,{onClick:function(){return n(({type:"sort",payload:"up"}.type,y))},children:"sort up"})}),Object(_.jsx)("div",{children:"sort down"}),"check 18",Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var S=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 10",Object(_.jsx)("div",{children:Object(_.jsx)(C,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var w=function(){var e=Object(t.useState)(0),s=Object(m.a)(e,2),a=(s[0],s[1]),n=Object(t.useState)(),c=Object(m.a)(n,2),r=(c[0],c[1],Object(t.useState)(!1)),i=Object(m.a)(r,2),j=i[0],o=(i[1],function(){});return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{onMouseEnter:function(){},onMouseLeave:function(){},children:"Time"}),j&&Object(_.jsx)("div",{children:"Date"}),Object(_.jsx)(C,{onClick:function(){var e=window.setInterval((function(){}),1e3);a(e)},children:"start"}),Object(_.jsx)(C,{onClick:o,children:"stop"})]})};var A=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 9",Object(_.jsx)(w,{}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},H=a(23),M=a.n(H),W=["type","onChange","onChangeRange","className"],E=function(e){e.type;var s=e.onChange,a=e.onChangeRange,t=e.className,n=Object(b.a)(e,W),c="".concat(M.a.range," ").concat(t||"");return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("input",Object(d.a)({type:"range",onChange:function(e){s&&s(e),a&&a(+e.currentTarget.value)},className:c},n))})},T=function(e){e.onChangeRange,e.value;return Object(_.jsx)(_.Fragment,{children:"DoubleRange"})};var F=function(){var e=Object(t.useState)(0),s=Object(m.a)(e,2),a=s[0],n=(s[1],Object(t.useState)(100)),c=Object(m.a)(n,2),r=c[0];return c[1],Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 11",Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:a}),Object(_.jsx)(E,{})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:a}),Object(_.jsx)(T,{}),Object(_.jsx)("span",{children:r})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},I=a(19),G=a.n(I);var B=function(){return Object(_.jsxs)("div",{className:G.a.some,children:[Object(_.jsx)("hr",{}),Object(_.jsx)("span",{className:G.a["some-text"],children:"homeworks 12"}),Object(_.jsx)("hr",{})]})};var P=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(v,{}),Object(_.jsx)(k,{}),Object(_.jsx)(A,{}),Object(_.jsx)(S,{}),Object(_.jsx)(F,{}),Object(_.jsx)(B,{})]})},J=a(2),U=a.n(J);var Z=function(e){return Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar,children:Object(_.jsx)("img",{alt:"avatar",src:e.avatar})}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsxs)("div",{className:U.a.message__body_item,children:[Object(_.jsx)("p",{className:U.a.message__name,children:e.name}),Object(_.jsx)("p",{className:U.a.Message__text,children:e.message})]}),Object(_.jsx)("div",{className:U.a.message__time,children:e.time})]})]})};var L=function(e){return console.log(typeof e.messages[0]),"Serjge"===e.messages[0].name?U.a.message__body__Serjge:U.a.message__body,3===e.messages.length?Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar_none}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsxs)("div",{className:U.a.message__body_item,children:[Object(_.jsx)("p",{className:U.a.message__name,children:e.messages[0].name}),Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[0].message})]}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[0].time})]})]}),Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar_none}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsx)("div",{className:U.a.message__body_item,children:Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[1].message})}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[1].time})]})]}),Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar,children:Object(_.jsx)("img",{alt:"avatar",src:e.messages[2].avatar})}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsx)("div",{className:U.a.message__body_item,children:Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[2].message})}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[2].time})]})]})]}):2===e.messages.length?Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar_none}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsxs)("div",{className:U.a.message__body_item,children:[Object(_.jsx)("p",{className:U.a.message__name,children:e.messages[0].name}),Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[0].message})]}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[0].time})]})]}),Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar,children:Object(_.jsx)("img",{alt:"avatar",src:e.messages[1].avatar})}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsx)("div",{className:U.a.message__body_item,children:Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[1].message})}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[1].time})]})]})]}):Object(_.jsxs)("div",{className:U.a.message,children:[Object(_.jsx)("div",{className:U.a.message__avatar,children:Object(_.jsx)("img",{alt:"avatar",src:e.messages[0].avatar})}),Object(_.jsxs)("div",{className:U.a.message__body,children:[Object(_.jsxs)("div",{className:U.a.message__body_item,children:[Object(_.jsx)("p",{className:U.a.message__name,children:e.messages[0].name}),Object(_.jsx)("p",{className:U.a.Message__text,children:e.messages[0].message})]}),Object(_.jsx)("div",{className:U.a.message__time,children:e.messages[0].time})]})]})},R="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",X="Serjge",q="Hello Friends!",D="22:00",Y=[{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"Hello Friend!",time:"22:00"},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"Glad to see you!",time:"22:01"},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Serjge",message:"How are you?",time:"22:02"}];var K=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(Z,{avatar:R,name:X,message:q,time:D}),Object(_.jsx)("hr",{}),Object(_.jsx)(L,{messages:Y})]})},z=a(8),V=a.n(z);var Q=function(e){var s="".concat(V.a.priority," ").concat(function(){switch(e.affair.priority){case"low":return V.a.low;case"middle":return V.a.middle;case"high":return V.a.high;default:return""}}());return Object(_.jsxs)("div",{className:V.a.wrapper,children:[Object(_.jsx)("div",{className:V.a.name,children:e.affair.name}),Object(_.jsx)("div",{className:s,children:e.affair.priority}),Object(_.jsx)("button",{className:V.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"Delete"})]})},$=a(10),ee=a.n($);var se=function(e){var s=e.data.map((function(s){return Object(_.jsx)(Q,{affair:s,deleteAffairCallback:e.deleteAffairCallback},s._id)}));return Object(_.jsxs)("div",{children:[s,Object(_.jsx)("button",{className:ee.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{className:ee.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{className:ee.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{className:ee.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},ae=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var te=function(){var e=Object(t.useState)(ae),s=Object(m.a)(e,2),a=s[0],n=s[1],c=Object(t.useState)("all"),r=Object(m.a)(c,2),i=r[0],j=r[1],o=function(e,s){return"all"===s?e:e.filter((function(e){return e.priority===s}))}(a,i);return Object(_.jsxs)("div",{className:ee.a.someClass,children:[Object(_.jsx)("hr",{}),"homeworks 2",Object(_.jsx)(se,{data:o,setFilter:j,deleteAffairCallback:function(e){return n(function(e,s){return e.filter((function(e){return e._id!==s}))}(a,e))}})]})},ne=a(24),ce=a(11),re=a.n(ce),ie=function(e){var s=e.name,a=e.setNameCallback,t=e.addUser,n=e.error,c=e.totalUsers,r=""!==n?re.a.error:"",i=""!==n?re.a.errorText:"";return Object(_.jsxs)("div",{className:re.a.wrapper,children:[Object(_.jsxs)("div",{className:re.a.columns,children:[Object(_.jsx)("input",{value:s,onChange:a,className:re.a.inputClass+" "+r}),Object(_.jsx)("span",{className:i,children:n})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{className:re.a.button,onClick:t,children:"add"}),Object(_.jsx)("span",{children:c})]})]})},je=function(e){var s=e.users,a=e.addUserCallback,n=Object(t.useState)(""),c=Object(m.a)(n,2),r=c[0],i=c[1],j=Object(t.useState)(""),o=Object(m.a)(j,2),l=o[0],d=o[1],b=s.length;return Object(_.jsx)(ie,{name:r,setNameCallback:function(e){i(e.currentTarget.value),d("")},addUser:function(){""===r.trim()?d("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"):(a(r.trim()),alert("Hello ".concat(r.trim()," !")),i(""))},error:l,totalUsers:b})},oe=a(33);var le=function(){var e=Object(t.useState)([]),s=Object(m.a)(e,2),a=s[0],n=s[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 3",Object(_.jsx)(je,{users:a,addUserCallback:function(e){var s=[{_id:Object(oe.a)(),name:e}].concat(Object(ne.a)(a));n(s)}})]})},me=a(15),de=a.n(me),be=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],_e=function(e){e.type;var s=e.onChange,a=e.onChangeText,t=e.onKeyPress,n=e.onEnter,c=e.error,r=e.className,i=e.spanClassName,j=Object(b.a)(e,be),o="".concat(de.a.error," ").concat(i||""),l="".concat(c?de.a.errorInput:de.a.superInput," ").concat(r);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",Object(d.a)({type:"text",onChange:function(e){s&&s(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),n&&"Enter"===e.key&&n()},className:l},j)),c&&Object(_.jsx)("span",{className:o,children:c})]})},ue=a(16),Oe=a.n(ue),he=a(20),xe=a.n(he),ge=["type","onChange","onChangeChecked","className","spanClassName","children"],ve=function(e){e.type;var s=e.onChange,a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),c=Object(b.a)(e,ge),r="".concat(xe.a.checkbox," ").concat(t||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){s&&s(e),a&&a(e.currentTarget.checked)},className:r},c)),n&&Object(_.jsx)("span",{className:xe.a.spanClassName,children:n})]})};var pe=function(){var e=Object(t.useState)(""),s=Object(m.a)(e,2),a=s[0],n=s[1],c=a?"":"error",r=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(t.useState)(!1),j=Object(m.a)(i,2),o=j[0],l=j[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 4",Object(_.jsxs)("div",{className:Oe.a.column,children:[Object(_.jsx)(_e,{value:a,onChangeText:n,onEnter:r,error:c,spanClassName:Oe.a.testSpanError}),Object(_.jsx)(_e,{className:Oe.a.blue}),Object(_.jsx)(C,{children:"default"}),Object(_.jsx)(C,{red:!0,onClick:r,children:"delete "}),Object(_.jsx)(C,{disabled:!0,children:"disabled"}),Object(_.jsx)(ve,{checked:o,onChangeChecked:l,children:"some text "}),Object(_.jsx)(ve,{checked:o,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var fe=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(K,{}),Object(_.jsx)(te,{}),Object(_.jsx)(le,{}),Object(_.jsx)(pe,{})]})};var Ne=function(){return Object(_.jsx)("div",{})};var Ce=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:"404"}),Object(_.jsx)("div",{children:"Page not found!"}),Object(_.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ye="/pre-junior",ke="/junior",Se="/junior-plus";var we=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{path:"/*",element:Object(_.jsx)(Ce,{})}),Object(_.jsx)(l.a,{path:"/",element:Object(_.jsx)(fe,{})}),Object(_.jsx)(l.a,{path:ye,element:Object(_.jsx)(fe,{})}),Object(_.jsx)(l.a,{path:ke,element:Object(_.jsx)(P,{})}),Object(_.jsx)(l.a,{path:Se,element:Object(_.jsx)(Ne,{})})]})})},Ae=a(14),He=a.n(Ae);var Me=function(){var e=function(e){return e.isActive?He.a.act:""};return Object(_.jsxs)("div",{className:He.a.wrapper,children:[Object(_.jsx)("button",{className:He.a.button,children:"menu"}),Object(_.jsxs)("div",{className:He.a.menu,children:[Object(_.jsx)(o.b,{className:e,to:ye,children:"PreJunior"}),Object(_.jsx)(o.b,{className:e,to:ke,children:"Junior"}),Object(_.jsx)(o.b,{className:e,to:Se,children:"JuniorPlus"})]})]})};var We=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(o.a,{children:[Object(_.jsx)(Me,{}),Object(_.jsx)(we,{})]})})};var Ee=function(){return Object(_.jsxs)("div",{className:j.a.App,children:[Object(_.jsx)("div",{children:"react homeworks:"}),Object(_.jsx)(We,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(Ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.2c192060.chunk.js.map