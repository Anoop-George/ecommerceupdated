(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{153:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var r=a[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken")},232:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),l=a(0),c=a.n(l),i=a(149),o=a.n(i),s=a(153),u=a(142),d=a(238),m=a(152),p=a(141),E=a(140),y=a(16);t.default=function(e){var t=parseInt(e.match.params.id.substring(1),10),a=Object(l.useState)([]),n=r()(a,2),i=n[0],f=n[1],v=Object(l.useState)(!0),g=r()(v,2),h=g[0],j=g[1],O=Object(l.useState)(null),b=r()(O,2),k=b[0],C=b[1],D=Object(l.useState)(""),P=r()(D,2),S=P[0],z=P[1],R=Object(l.useState)(!1),w=r()(R,2),A=w[0],N=w[1];Object(l.useEffect)((function(){o.a.get("/api/PODetails/".concat(t,"/"),{headers:{"content-type":"application/json","X-CSRFTOKEN":s.a}}).then((function(e){f(e.data)}))}),[h]);var _=function(e){"accept"==e?i.accepted=!0:"reject"==e?i.rejected=!0:"delivered"==e?i.delivered=!0:"rejected_reason"==e&&(i.rejected_reason=S),o.a.put("/api/PODetails/".concat(t,"/"),i,{headers:{"content-type":"application/json","X-CSRFTOKEN":s.a}}).then((function(){j(!h),C("Recorded")})).catch((function(){C("Error happened")}))};return c.a.createElement("div",null,c.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start"},c.a.createElement(m.a,{item:!0,xs:12,sm:4,key:i.id,style:{padding:4,marginTop:8}},c.a.createElement(E.a,{elevation:1},c.a.createElement(y.b,{style:{textDecoration:"none"},to:{pathname:"/ProfileDetails:".concat(i.user)}},c.a.createElement(p.a,null,"User Details")),c.a.createElement(p.a,null,"PO reference number : ",i.id),c.a.createElement(p.a,null,"Product name : ",i.name),c.a.createElement(p.a,null,"Product id : ",i.product),c.a.createElement(p.a,null,"Quantity : ",i.quantity),c.a.createElement(p.a,null,"Ordered user id :",i.user),i.accepted?c.a.createElement(p.a,null," Purchase order status:Accepted"):c.a.createElement(p.a,null,"Purchase order status:Not Accepted"),i.cashondelivary?c.a.createElement(p.a,null," Payment method:Cash on delivery"):c.a.createElement(p.a,null,"Payment method: Online"),c.a.createElement(p.a,null,"Created ",i.created," "),i.delivered?c.a.createElement(p.a,null," Delivery status:Delivered"):c.a.createElement(p.a,null,"Delivery status:Not Delivered"),i.rejected?c.a.createElement(p.a,null," Acceptance status:Order Rejected"):c.a.createElement(p.a,null,"Acceptance status:Order not rejected"),i.rejected_reason?c.a.createElement(p.a,null," Acceptance status:",i.rejected_reason):null,c.a.createElement("div",null),c.a.createElement(u.a,{size:"small",variant:"contained",color:"primary",style:{margin:2},onClick:function(){return _("accept")}},"accept order"),c.a.createElement(u.a,{size:"small",variant:"contained",color:"primary",style:{margin:2},onClick:function(){return _("reject")}},"Reject Order"),c.a.createElement(u.a,{size:"small",variant:"contained",color:"primary",style:{margin:2},onClick:function(){return _("delivered")}},"Mark Delivered"),c.a.createElement(d.a,{id:"outlined-basic",label:"Reason for rejection",variant:"outlined",value:S,onChange:function(e){return z(e.target.value)},style:{margin:5}}),c.a.createElement(u.a,{size:"small",color:"primary",style:{margin:4},onClick:function(){return _("rejected_reason")},variant:"outlined"},"Submit rejection reason"),c.a.createElement(u.a,{size:"small",variant:"contained",color:"secondary",style:{margin:2},onClick:function(){return N(!0)}},"Delete Order"),A?c.a.createElement("div",{style:{backgroundColor:"lightgrey"}},c.a.createElement(p.a,null,"Are you sure ? "),c.a.createElement(u.a,{size:"small",variant:"contained",color:"secondary",style:{margin:2},onClick:function(){o.a.delete("/api/PODetails/".concat(t,"/"),{headers:{"content-type":"application/json","X-CSRFTOKEN":s.a}}).then((function(){f([]),C("deleted")})).catch((function(){C("Error happened")}))}},"Delete"),c.a.createElement(u.a,{size:"small",variant:"contained",color:"secondary",style:{margin:2},onClick:function(){return N(!1)}},"cancel")):null)),c.a.createElement(m.a,{item:!0,xs:5,sm:5,style:{margin:3}},k?c.a.createElement("div",null,c.a.createElement(p.a,{style:{margin:3}},k),c.a.createElement(u.a,{size:"small",style:{margin:3},onClick:function(){return C(null)}},"dismiss")):null)))}}}]);