(this["webpackJsonpeit-pos-front-end"]=this["webpackJsonpeit-pos-front-end"]||[]).push([[12],{321:function(e,t,a){"use strict";var n=a(1),o=a(31),c=a(2),r=a(0),l=(a(6),a(3)),i=a(123),d=a(55),s=a(5),u=a(281),m=r.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,g=e.icon,k=e.id,y=e.inputProps,O=e.inputRef,v=e.name,j=e.onBlur,N=e.onChange,C=e.onFocus,E=e.readOnly,w=e.required,x=e.tabIndex,$=e.type,I=e.value,S=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=Object(i.a)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),A=Object(o.a)(P,2),B=A[0],R=A[1],F=Object(d.a)(),z=f;F&&"undefined"===typeof z&&(z=F.disabled);var T="checkbox"===$||"radio"===$;return r.createElement(u.a,Object(n.a)({component:"span",className:Object(l.a)(p.root,b,B&&p.checked,z&&p.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){j&&j(e),F&&F.onBlur&&F.onBlur(e)},ref:t},S),r.createElement("input",Object(n.a)({autoFocus:a,checked:s,defaultChecked:h,className:p.input,disabled:z,id:T&&k,name:v,onChange:function(e){var t=e.target.checked;R(t),N&&N(e,t)},readOnly:E,ref:O,required:w,tabIndex:x,type:$,value:I},y)),B?m:g)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},335:function(e,t,a){"use strict";var n=a(1),o=a(2),c=a(0),r=(a(6),a(3)),l=a(55),i=a(5),d=a(110),s=a(9),u=c.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(o.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(l.a)(),k=m;"undefined"===typeof k&&"undefined"!==typeof u.props.disabled&&(k=u.props.disabled),"undefined"===typeof k&&g&&(k=g.disabled);var y={disabled:k};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),c.createElement("label",Object(n.a)({className:Object(r.a)(a.root,i,"end"!==h&&a["labelPlacement".concat(Object(s.a)(h))],k&&a.disabled),ref:t},f),c.cloneElement(u,y),c.createElement(d.a,{component:"span",className:Object(r.a)(a.label,k&&a.disabled)},p))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},337:function(e,t,a){"use strict";var n=a(1),o=a(2),c=a(0),r=(a(6),a(3)),l=a(5),i=a(16),d=a(9),s=a(321),u=c.forwardRef((function(e,t){var a=e.classes,l=e.className,i=e.color,u=void 0===i?"secondary":i,m=e.edge,p=void 0!==m&&m,b=e.size,h=void 0===b?"medium":b,f=Object(o.a)(e,["classes","className","color","edge","size"]),g=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(r.a)(a.root,l,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===h&&a["size".concat(Object(d.a)(h))])},c.createElement(s.a,Object(n.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(r.a)(a.switchBase,a["color".concat(Object(d.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),c.createElement("span",{className:a.track}))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},343:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(14),c=a(0),r=a.n(c),l=a(15),i=a(65),d=a(30),s=a(64),u=a(125),m=a(21),p=a(17),b=a(282),h=a(286),f=a(335),g=a(337),k=a(66),y=a.n(k),O=a(304),v=a(95),j=a(19),N={fetchApi:m.a};t.default=Object(l.b)((function(e){var t=e.global;return Object(n.a)({},t)}),N)((function(e){var t=e.fetchApi,a=Object(d.g)(),l=a.location,m=a.push,k=Object(c.useState)([]),N=Object(o.a)(k,2),E=N[0],w=N[1],x=Object(c.useState)([]),$=Object(o.a)(x,2),I=$[0],S=$[1],P=Object(c.useState)(!1),A=Object(o.a)(P,2),B=A[0],R=A[1],F=Object(c.useState)(!1),z=Object(o.a)(F,2),T=z[0],L=z[1],D=Object(p.a)(),q=Object(c.useCallback)((function(e){if(t(!1),Array.isArray(e.data)){var a=C(e.data);w(a)}}),[t]),U=Object(c.useCallback)((function(e){j.b.error("Unable to get customers")}),[]);Object(c.useEffect)((function(){t(!0),Object(u.d)().then(q).catch(U)}),[t,U,q]);var H,J=function(e){var t=e.target.value.trim();t.length?(R(!0),Object(u.e)(t).then((function(e){if(R(!1),console.log(e.data),Array.isArray(e.data)){S(e.data);var t=C(e.data);w(t)}})).catch((function(){j.b.error("Unable to search customers")}))):Object(u.d)().then(q).catch(U)},M=r.a.createElement("div",{className:D.inputsTop},r.a.createElement("div",{className:D.searchTab},r.a.createElement(O.a,{id:"customer search-item-search",getOptionLabel:function(e){return"".concat(e.firstName,"-").concat(e.lastName)},options:I,onChange:function(e,a){a&&Object(u.e)(a.id).then((function(e){if(t(!1),Array.isArray(e.data)){var a=C(e.data);w(a)}})).catch((function(e){j.b.error("Unable to filter customer detail"),t(!1)}))},loading:B,noOptionsText:"No customers found",renderInput:function(e){return r.a.createElement(b.a,Object.assign({autoFocus:!0},e,{label:"Enter a Customer name or Id",variant:"outlined",onChange:J,InputProps:Object(n.a)(Object(n.a)({},e.InputProps),{},{startAdornment:r.a.createElement(y.a,null),endAdornment:r.a.createElement(c.Fragment,null,B&&r.a.createElement(h.a,{color:"inherit",size:20}),e.InputProps.endAdornment)})}))}})));H=T?(H=E.filter((function(e){return e.dueTotal>0}))).map((function(e,t){return{id:e.id,firstName:e.firstName,lastName:e.lastName,phoneNo:e.phoneNo,dueTotal:e.dueTotal}})):E.map((function(e,t){return{id:e.id,firstName:e.firstName,lastName:e.lastName,phoneNo:e.phoneNo}}));return r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:D.pageContainer},r.a.createElement(v.a,{title:"Customers",createNewPath:"customers"}),M,r.a.createElement("div",null,r.a.createElement(f.a,{control:r.a.createElement(g.a,{checked:T,onChange:function(e){L(e.target.checked)},name:"credit-customer-toggler"}),value:T,label:"Show Credit Customers",labelPlacement:"start"})),r.a.createElement(i.a,{tableData:H,tableHeaders:T?s.d:s.c,handleEdit:function(e){return function(){m("".concat(l.pathname,"/edit/").concat(e.id))}},payButton:T,payButtonClick:function(e){return function(){m("/cashbooks/payCustomerDue/".concat(e.id))}}})))}));var C=function(e){return e.map((function(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,phoneNo:e.phoneNo,dueTotal:e.dueTotal}}))}}}]);
//# sourceMappingURL=12.f00de6c8.chunk.js.map