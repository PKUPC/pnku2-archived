(this["webpackJsonpguiding-star-frontend"]=this["webpackJsonpguiding-star-frontend"]||[]).push([[70],{676:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var r=n(170),i=n(383),c=n(190),s=n(57),a=n(17),o=n(1);function d(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"\u5f00\u53d1\u8005\u767b\u5f55"})}),Object(o.jsxs)(i.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:10},onFinish:function(e){fetch("/service/auth/manual?tabid=".concat(a.b,"&preid=").concat(a.a),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identity:e.identity,dev_secret:"sadhjkr2hjkrasdfioh13"})}).then((function(e){if(200===e.status)return e.json();r.b.error({content:"HTTP \u9519\u8bef ".concat(e.body),key:"HTTP_ERROR",duration:3}).then()})).then((function(e){!1===e.ok?r.b.error({content:"\u670d\u52a1\u5668\u62a5\u544a\u4e86\u4e00\u4e2a\u9519\u8bef\uff1a ".concat(e.error_msg),key:"BAD_REQUEST",duration:3}).then():window.location.href=e.redirect}))},children:[Object(o.jsx)(i.a.Item,{label:"Identity",name:"identity",rules:[{required:!0,message:"Please input an identity!"}],children:Object(o.jsx)(c.a,{})}),Object(o.jsx)(i.a.Item,{wrapperCol:{offset:4,span:16},children:Object(o.jsx)(s.a,{htmlType:"submit",children:"\u767b\u5f55"})})]})]})}}}]);