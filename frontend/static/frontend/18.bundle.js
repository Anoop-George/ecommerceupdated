(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(e,t,n){"use strict";var a=n(2),i=n(1),r=n(0),c=(n(4),n(3)),o=n(5),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,x=e.component,m=void 0===x?"div":x,g=e.container,f=void 0!==g&&g,p=e.direction,v=void 0===p?"row":p,w=e.item,b=void 0!==w&&w,y=e.justify,h=void 0===y?"flex-start":y,j=e.lg,S=void 0!==j&&j,E=e.md,C=void 0!==E&&E,O=e.sm,W=void 0!==O&&O,I=e.spacing,k=void 0===I?0:I,z=e.wrap,M=void 0===z?"wrap":z,D=e.xl,G=void 0!==D&&D,N=e.xs,B=void 0!==N&&N,R=e.zeroMinWidth,J=void 0!==R&&R,U=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(c.a)(d.root,u,f&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],b&&d.item,J&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==h&&d["justify-xs-".concat(String(h))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==C&&d["grid-md-".concat(String(C))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==G&&d["grid-xl-".concat(String(G))]);return r.createElement(m,Object(i.a)({className:A,ref:t},U))})),x=Object(o.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=x},230:function(e,t,n){"use strict";n.r(t);var a=n(43),i=n.n(a),r=n(0),c=n.n(r),o=n(152),s=n(141),l=n(149),d=n.n(l),u=n(142),x=n(140);t.default=function(e){var t=Object(r.useState)([]),n=i()(t,2),a=n[0],l=n[1],m=Object(r.useState)(""),g=i()(m,2),f=g[0],p=g[1],v=Object(r.useState)(""),w=i()(v,2),b=w[0],y=w[1],h=parseInt(e.match.params.id.substring(1),10),j=Object(r.useState)("api/CommentList/".concat(h)),S=i()(j,2),E=S[0],C=S[1];return Object(r.useEffect)((function(){d.a.get(E).then((function(e){p(e.data.next),y(e.data.previous),l(e.data.results)}))}),[E]),c.a.createElement("div",null,c.a.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},c.a.createElement(o.a,{item:!0,xs:12,sm:10},c.a.createElement(s.a,{variant:"h6"},"User Reviews "),a.length<1?c.a.createElement(s.a,{style:{margin:5,padding:5}},"No User Reviews yet"," "):null),a.map((function(e){return c.a.createElement(o.a,{item:!0,xs:12,sm:10,key:e.author},c.a.createElement(x.a,{elevation:2,style:{margin:2,padding:3}},c.a.createElement(s.a,{variant:"body1"},e.comment),c.a.createElement(s.a,{variant:"body2"},"Author ID: ",e.author)))})),a.length>0?c.a.createElement(o.a,{item:!0,xs:12,sm:10},c.a.createElement(u.a,{style:{margin:4},onClick:function(){return C(b)},variant:"contained",color:"secondary"},"Prev"," "),c.a.createElement(u.a,{style:{margin:4},onClick:function(){return C(f)},variant:"contained",color:"primary"},"next"," ")):null))}}}]);