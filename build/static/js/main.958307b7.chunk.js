(this["webpackJsonpgpltrader-app"]=this["webpackJsonpgpltrader-app"]||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(201),s=a(186),l=a(103),d="#727272",b="#036998",u=Object(l.a)({overrides:{MuiCssBaseline:{"@global":{html:{WebkitFontSmoothing:"auto"}}},MuiInputBase:{root:{background:"white"}},MuiStepper:{root:{background:"transparent",paddingTop:0}}},typography:{fontFamily:"Open Sans, sans-serif",fontSize:16,fontWeight:"normal",textDecoration:"none",color:d},animations:{translatePageContainer:{animation:"$translate .6s ease-out forwards",keyframeName:"@keyframes translate",keyframeValue:{to:{opacity:1,paddingLeft:"4vw"}}}},palette:{primary:{light:"#A1C3ED",main:b,dark:"#286090",contrastText:"#FFFFFF"},yellow:"#FFA900",white:"#FFF",red:"#FF5251",blue:b,lightBlue:"#05C7F2",main:b,purple:"#9746FF",green:"#69BF41",errorMessage:"#f44336",secondary:{light:"#F5F5F5",main:b,dark:"#9E9E9E",contrastText:"#FFFFFF"},text:{primary:d},icons:{},background:{paper:"#fff",default:"#F7F7F7"}},space:{globalPadding:"0px 30px 0px 30px",unit:8,padding:"0px 30px 0px 30px",margin:8},MuiButton:{text:{borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}}),p=a(42),h=a(9),j=a(3),m=a.n(j),f=a(6),x=a(75),g=a(30),O=a.n(g),v=a(46),y=a(7),w="user/fetchStarted",T="user/fetchSuccess",C="user/fetchError",k=function(){return{type:w}},N=function(e){return{type:C,payload:e}},S={loading:!1,data:{name:"",birthday:"",cpf:"",ddd:"",telephone:"",address:"",state:"",city:""}};var R=a.p+"static/media/logo.b1896102.png",I=a(2);m.a.propTypes={classes:m.a.object};var z=[{id:2,name:"Planos",url:"/plans"},{id:3,name:"Contato",url:"/plans"}],E=Object(f.a)((function(e){return{container:{justifyContent:"center",alignItems:"center",width:"100%",padding:"20px 0px",marginBottom:"115px"},link:{marginRight:"50px",cursor:"pointer",color:"white",fontWeight:600,fontSize:"1.2rem",textDecoration:"none"},linkAccount:{background:"#dadada",color:"#1c1c1c",fontWeight:700,fontSize:"1rem",textDecoration:"none",padding:"10px 20px",borderRadius:"5px"}}}))((function(e){var t=e.classes;return Object(I.jsx)(te,{className:t.container,children:Object(I.jsxs)(te,{justifyContent:"space-between",alignItems:"center",width:"60%",children:[Object(I.jsx)(te,{width:"50%",children:Object(I.jsx)("img",{src:R,alt:"",width:230})}),Object(I.jsxs)(te,{width:"50%",justifyContent:"flex-end",alignItems:"center",children:[z.map((function(e){return Object(I.jsx)(p.c,{to:e.url,className:t.link,children:e.name},e.id)})),Object(I.jsx)(p.c,{to:"/my-account",className:t.linkAccount,children:"Minha conta"})]})]})})}));m.a.propTypes={children:m.a.object,classes:m.a.object};var F=Object(f.a)((function(e){return{wrapper:{display:"flex",flexDirection:"column",height:"100vh",background:"linear-gradient(350deg, rgba(56,56,56,1) 15%, rgba(0,0,0,1) 100%)",backgroundSize:"cover",backgroundRepeat:"no-repeat"},container:{width:"100%",height:"100%"},content:{display:"flex",flexDirection:"column",width:"93.5vw",height:"100%",left:"6.5vw",overflowY:"auto",position:"fixed"}}}))((function(e){var t=e.classes,a=e.children,r=Object(x.b)();return Object(n.useEffect)((function(){r(function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(k())}catch(a){t(N(a))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(I.jsxs)("div",{className:t.wrapper,children:[Object(I.jsx)(E,{}),Object(I.jsxs)("div",{className:t.container,children:[a,Object(I.jsx)("div",{id:"snackbar"})]})]})})),W=a(14),A=a(187),D=["children","background","color","width","height","borderRadius","fontSize","style","loading","disabled"],P=Object(l.a)({overrides:{MuiButton:{text:{width:223,textTransform:"none",background:"white",boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",borderRadius:8,color:"black",fontFamily:"Nunito",fontWeight:"bold",fontSize:"1rem",transition:".5s","&:hover":{transform:"scale(1.05)"},"&:disabled":{color:"white",background:"grey",cursor:"not-allowed"}},root:{}}}});m.a.propTypes={children:m.a.object,style:m.a.object,background:m.a.string,color:m.a.string,fontSize:m.a.string,width:m.a.string,height:m.a.string,borderRadius:m.a.string,disabled:m.a.bool,loading:m.a.bool};var B=function(e){var t=e.children,a=e.background,n=e.color,r=e.width,i=e.height,c=e.borderRadius,o=e.fontSize,l=e.style,d=e.loading,b=e.disabled,u=Object(W.a)(e,D);return Object(I.jsx)(s.a,{theme:P,children:Object(I.jsx)(A.a,Object(y.a)(Object(y.a)({style:Object(y.a)({background:a,color:n,width:r,height:i,borderRadius:c,fontSize:o},l)},u),{},{disabled:b||d,children:d?Object(I.jsx)(we,{isLoading:!0,size:24,color:"white"}):t}))})},L=["children"],_=Object(l.a)({overrides:{MuiButton:{text:{fontFamily:"Nunito",fontStyle:"normal",textTransform:"none",fontSize:"1rem",transition:".5s",color:u.palette.primary.main,"&:hover":{background:"transparent",transform:"scale(1.05)"}}}}});m.a.propTypes={children:m.a.object};var H=function(e){var t=e.children,a=Object(W.a)(e,L);return Object(I.jsx)(s.a,{theme:_,children:Object(I.jsx)(A.a,Object(y.a)(Object(y.a)({},a),{},{children:t}))})},M=["children"],V=Object(l.a)({overrides:{MuiButton:{text:{transition:".5s","&:hover":{transform:"scale(1.25)"}}}}});m.a.propTypes={children:m.a.object};var Y=function(e){var t=e.children,a=Object(W.a)(e,M);return Object(I.jsx)(s.a,{theme:V,children:Object(I.jsx)(A.a,Object(y.a)(Object(y.a)({},a),{},{children:t}))})},q=["children"],$=Object(l.a)({overrides:{MuiButton:{text:{border:"1px solid ".concat(u.palette.primary.main),textTransform:"none",background:"transparent",borderRadius:8,color:u.palette.primary.main,fontFamily:"Nunito",fontWeight:600,fontSize:"1rem",transition:".5s","&:hover":{transform:"scale(1.05)"}}}}});m.a.propTypes={children:m.a.object};var Z=function(e){var t=e.children,a=Object(W.a)(e,q);return Object(I.jsx)(s.a,{theme:$,children:Object(I.jsx)(A.a,Object(y.a)(Object(y.a)({},a),{},{children:t}))})},U=["variant","children","classes"];m.a.propTypes={classes:m.a.object,children:m.a.object,variant:m.a.oneOf(["contained","text","outlined"])};var J=function(e){var t=e.variant,a=void 0===t?"contained":t,n=e.children,r=(e.classes,Object(W.a)(e,U));return Object(I.jsxs)(I.Fragment,{children:["contained"===a&&Object(I.jsx)(B,Object(y.a)(Object(y.a)({},r),{},{children:n})),"text"===a&&Object(I.jsx)(H,Object(y.a)(Object(y.a)({},r),{},{children:n})),"icon"===a&&Object(I.jsx)(Y,Object(y.a)(Object(y.a)({},r),{},{children:n})),"outlined"===a&&Object(I.jsx)(Z,Object(y.a)(Object(y.a)({},r),{},{children:n}))]})},K=a(39),G=a.n(K),Q=a(47),X=["flexDirection","width","height","margin","alignItems","justifyContent","center","fullHeight","children","className","style","classes","sheet","inline"],ee=function(e){var t=e.flexDirection,a=e.width,n=e.height,r=e.margin,i=e.alignItems,c=e.justifyContent,o=e.center,s=e.fullHeight,l=e.children,d=e.className,b=e.style,u=e.classes,p=(e.sheet,e.inline,Object(W.a)(e,X));return Object(I.jsx)("div",Object(y.a)(Object(y.a)({style:Object(y.a)({justifyContent:c,alignItems:i,width:a,height:n,flexDirection:t,margin:r},b)},p),{},{className:G()(u.root,Object(Q.a)({},u.center,!0===o),Object(Q.a)({},u.fullHeight,!0===s),d),children:l}))};ee.defaultProps={center:!1,fullHeight:!1,sheet:null};var te=Object(f.a)({root:{display:function(e){return e.inline?"inline-flex":"flex"}},center:{alignItems:"center",justifyContent:"center"},fullHeight:{height:"100%"}})(ee),ae=["clean","children","className","style","classes","width","height","background","title","content","borderRadius"],ne=function(e){var t=e.clean,a=void 0!==t&&t,n=e.children,r=e.className,i=e.style,c=e.classes,o=e.width,s=e.height,l=e.background,d=e.title,b=e.content,u=e.borderRadius,p=Object(W.a)(e,ae);return Object(I.jsx)("div",Object(y.a)(Object(y.a)({className:G()(a?null:c.root,r),style:Object(y.a)({width:o,height:s,background:l,borderRadius:u},i)},p),{},{children:d&&b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(te,{children:d}),Object(I.jsx)(te,{children:b})]}):n}))};m.a.propTypes={classes:m.a.object,className:m.a.string,clean:m.a.bool,title:m.a.string,content:m.a.string,borderRadius:m.a.oneOfType[(m.a.string,m.a.number)]},ne.defaultProps={};var re=Object(f.a)({root:{background:"#FFF"}})(ne),ie=a(19),ce=["textAlign","fontSize","width","fontWeight","opacity","margin","lineHeight","color","style","italic","type","element","children","className","classes","url","urlExterna","h1Html"],oe=["children","to"],se="span",le=function(e){var t=e.children,a=e.to,n=Object(W.a)(e,oe);return Object(I.jsx)("a",Object(y.a)(Object(y.a)({href:a},n),{},{children:t}))};le.defaultProps={to:void 0};var de=Object(f.a)((function(e){return{italic:{fontStyle:"italic"}}}))((function(e){var t=e.textAlign,a=e.fontSize,n=e.width,i=e.fontWeight,c=e.opacity,o=e.margin,s=e.lineHeight,l=e.color,d=e.style,b=e.italic,u=(e.type,e.element),h=void 0===u?se:u,j=e.children,m=e.className,f=e.classes,x=e.url,g=e.urlExterna,O=(e.h1Html,Object(W.a)(e,ce)),v=r.a.useState(se),w=Object(ie.a)(v,2),T=w[0],C=w[1];return r.a.useEffect((function(){C(x&&!g?p.b:x?le:h)}),[h,x,g]),Object(I.jsx)(T,Object(y.a)(Object(y.a)({to:x,className:G()(m,Object(Q.a)({},f.italic,!0===b)),style:Object(y.a)({textAlign:t,fontSize:a,fontWeight:i,width:n,lineHeight:s,color:l,opacity:c,margin:o},d)},O),{},{children:j}))})),be=a(202);m.a.propTypes={children:m.a.object,style:m.a.object,background:m.a.string,color:m.a.string,fontSize:m.a.string,width:m.a.string,height:m.a.string,borderRadius:m.a.string};m.a.propTypes={classes:m.a.object,className:m.a.object,children:m.a.object,variant:m.a.oneOf(["standard","outlined","filled, formik"])};var ue=a(190),pe=a(191),he=a(192),je=a(193),me=a(194),fe=a(203);Object(f.a)((function(e){return{table:{width:"100%",minWidth:700,borderCollapse:"collapse",marginTop:"30px"},tableHeader:{fontSize:"1.05rem",fontWeight:600,color:"black","&:nth-child(1)":{borderBottomLeftRadius:"15px",borderTopLeftRadius:"10px"},"&:last-child":{borderBottomRightRadius:"15px",borderTopRightRadius:"10px"},borderRight:"0.8px solid #b6b6b66c",borderBottom:"8px solid #E5E5E5"},tableRow:{background:"white",paddingBottom:"10px",transition:".5s","&:hover":{transform:"scale(1.025)"}},tableCellRadiusLeft:{borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px"},tableCellRadiusRight:{borderBottomRightRadius:"10px",borderTopRightRadius:"10px"},tableBorderBottom:{borderBottom:"4px solid #E5E5E5",textAlign:"center"},tableHeadRow:{color:"white"},flexPagination:{margin:"25px 0px"}}}))((function(e){var t=e.classes,a=e.tableHead,r=e.onFetch,i=e.pagination,c=e.onClick,o=Object(n.useState)([]),s=Object(ie.a)(o,2),l=s[0],d=s[1],b=Object(n.useState)(0),u=Object(ie.a)(b,1)[0],p=Object(n.useState)(1),h=Object(ie.a)(p,2),j=h[0],m=h[1],f=Object(n.useCallback)(function(){var e=Object(v.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:a=e.sent,d(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,e.finish(9);case 11:case"end":return e.stop()}}),e,null,[[0,7,9,11]])})));return function(t){return e.apply(this,arguments)}}(),[r]);return Object(n.useEffect)((function(){f(j)}),[r,f,j]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(ue.a,{className:t.table,children:[Object(I.jsx)(pe.a,{children:Object(I.jsx)(he.a,{className:t.tableHeadRow,children:a.map((function(e){return Object(I.jsx)(je.a,{align:"center",className:t.tableHeader,children:Object(I.jsx)(de,{fontSize:"0.95rem",fontWeight:600,children:e.text})},e.id)}))})}),Object(I.jsx)(me.a,{children:l.map((function(e){return Object(I.jsx)(he.a,{className:t.tableRow,onClick:c,style:{cursor:"undefined"===typeof c?"auto":"pointer"},children:Object.keys(e).map((function(a){return"id"!==a&&Object(I.jsx)(je.a,{className:t.tableBorderBottom,children:Object(I.jsx)(de,{fontSize:"0.85rem",children:e[a]})},a)}))},e.id)}))})]}),i&&Object(I.jsx)(te,{center:!0,className:t.flexPagination,children:Object(I.jsx)(fe.a,{count:u,page:j,onChange:function(e,t){m(t)},size:"large"})})]})}));var xe=a(195),ge=["classes","isLoading","children","sheet","className","size","keepMounted","width","color"],Oe=["className","color","size"],ve={loading:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},root:{}},ye=function(e){var t=e.className,a=e.color,n=e.size,r=Object(W.a)(e,Oe);return Object(I.jsx)("div",Object(y.a)(Object(y.a)({className:t},r),{},{children:Object(I.jsx)(xe.a,{size:n||80,color:a,thickness:5})}))},we=Object(f.a)((function(){return ve}))((function(e){var t=e.classes,a=e.isLoading,n=e.children,r=(e.sheet,e.className),i=e.size,c=(e.keepMounted,e.width),o=e.color,s=Object(W.a)(e,ge);return Object(I.jsx)(I.Fragment,{children:a?Object(I.jsx)(ye,Object(y.a)({className:G()(r,t.loading),size:i,classes:{root:ve.root},style:{width:c},color:o},s)):n})})),Te=a(207),Ce=a(205),ke=["data","classes"];m.a.propTypes={classes:m.a.object,data:m.a.shape({id:m.a.oneOfType([m.a.number,m.a.string]).isRequired,descricao:m.a.string.isRequired,checked:m.a.bool}).isRequired};var Ne={message:"Altera\xe7\xf5es salvas com sucesso",severity:"success",open:!1};function Se(e){return Object(I.jsx)(Ce.a,Object(y.a)({elevation:6,variant:"filled"},e))}Object(f.a)((function(e){return{snackbar:{position:"fixed",bottom:"2vh",width:"100%"}}}))((function(e){var t=e.data,a=void 0===t?Ne:t,r=e.classes,i=Object(W.a)(e,ke),c=Object(n.useState)(!1),o=Object(ie.a)(c,2),s=o[0],l=o[1];Object(n.useEffect)((function(){a.open&&l(!0)}),[a]);var d=function(e,t){"clickaway"!==t&&l(!1)};return Object(I.jsx)(Te.a,Object(y.a)(Object(y.a)({open:s,autoHideDuration:2500,onClose:d},i),{},{className:r.snackbar,children:Object(I.jsx)(Se,{onClose:d,severity:a.severity,children:a.message})}))}));m.a.propTypes={classes:m.a.object};Object(f.a)((function(e){return{}}))((function(e){e.classes;return Object(I.jsx)(te,{flexDirection:"column",alignItems:"center",children:Object(I.jsx)(de,{fontSize:"3rem",fontWeight:600,color:"white",style:{marginBottom:"25px"},children:"P\xe1gina inicial"})})}));var Re=a(57),Ie=a(101),ze=a.n(Ie).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,headers:{"Content-Type":"application/json"}}),Ee=localStorage.getItem("token")||"";Ee&&(ze.defaults.headers.authorization=Ee);var Fe=ze;m.a.propTypes={classes:m.a.object};var We={email:"",password:"",confirmPassword:"",nationalityId:"",confirmation:!1},Ae=function(e){var t={};return e.email?(e.password||(t.password="Campo obrigat\xf3rio *"),t):(t.email="Campo obrigat\xf3rio *",t)},De=Object(f.a)((function(e){return{marginTop12:{marginTop:12},marginTop20:{marginTop:20},marginTop35:{marginTop:50},"@keyframes fadeIn":{from:{opacity:"0"},to:{opacity:"1"}},container:{flexDirection:"column",alignItems:"center",position:"relative",animation:"$fadeIn 2s"},card:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px",width:"500px",height:"100%",background:"white",borderRadius:"10px"},cardTitle:{fontWeight:700,fontSize:"2.1rem",color:"#1c1c1c"},createAccount:{color:"#007af7",fontWeight:600},displayNone:{display:"none"},boxError:{border:"1px solid red",margin:"10px 0",borderRadius:"5px"},button:{width:"100%",height:"50px",backgroundColor:"#1c1c1c",fontSize:"1.2rem",color:"white",marginTop:"20px","&:hover":{transform:"scale(1.05)",backgroundColor:"#1c1c1cf2"}}}}))((function(e){var t=e.classes,a=Object(n.useState)(!1),r=Object(ie.a)(a,2),i=r[0],c=r[1],o=Object(n.useState)(!1),s=Object(ie.a)(o,2),l=s[0],d=s[1],b=Object(h.f)(),u=function(){var e=Object(v.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,Fe.post("/auth",t);case 4:a=e.sent,n=a.data,localStorage.setItem("token",n.token),b("/license-list"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),d(!0);case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(te,{className:t.container,children:Object(I.jsxs)(re,{className:t.card,children:[Object(I.jsx)(de,{className:t.cardTitle,children:"Login"}),Object(I.jsx)(de,{children:"Acesse nossa plataforma para verificar suas licen\xe7as"}),Object(I.jsx)(Re.b,{initialValues:We,validate:Ae,onSubmit:u,children:function(e){return Object(I.jsxs)(Re.a,{children:[Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"email",name:"email",label:"Email",type:"email",InputLabelProps:{shrink:!0},size:"small",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"password",type:"password",name:"password",label:"Senha",InputLabelProps:{shrink:!0},size:"small",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(I.jsx)(te,{center:!0,className:l?t.boxError:t.displayNone,children:Object(I.jsx)(de,{color:"red",fontWeight:600,style:{padding:"5px 0px"},children:"Erro ao logar - verifique os dados"})}),Object(I.jsx)(J,{className:t.button,type:"submit",disabled:i,children:i?Object(I.jsx)(we,{isLoading:!0,size:24,color:"white"}):"Entrar"})]})}})]})})})),Pe=a(199),Be=a(80),Le=a.n(Be),_e=a(208),He=a(209),Me=a(197),Ve=a(198),Ye=a(74),qe=a.n(Ye);m.a.propTypes={classes:m.a.object,onClose:m.a.func.isRequired,nextStep:m.a.func};var $e=Object(f.a)((function(e){return{marginTop20:{marginTop:20},card:{position:"relative",background:"white",padding:"35px",display:"flex",flexDirection:"column",height:350},title:{color:"#1c1c1c",textAlign:"center",fontSize:"1.5rem",fontWeight:700},button:{width:"95%",backgroundColor:"#1c1c1c",color:"white"},closeIcon:{position:"absolute",right:"0px",top:"15px",cursor:"pointer","&:hover":{transform:"unset",backgroundColor:"white"}}}}))((function(e){var t=e.classes,a=e.onClose;return Object(I.jsxs)(re,{className:t.card,children:[Object(I.jsx)(J,{variant:"icon",onClick:function(){return a()},className:t.closeIcon,children:Object(I.jsx)(qe.a,{})}),Object(I.jsx)(He.a,{disableTypography:!0,className:t.title,children:"Ative sua licen\xe7a"}),Object(I.jsx)(Me.a,{children:Object(I.jsxs)(te,{width:"100%",flexDirection:"column",children:[Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"license",name:"license",label:"Licen\xe7a",type:"license",InputLabelProps:{shrink:!0},size:"small"}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"account",type:"account",name:"account",label:"Id da conta metatrader",InputLabelProps:{shrink:!0},size:"small"})]})}),Object(I.jsx)(Ve.a,{children:Object(I.jsx)(te,{width:"100%",center:!0,children:Object(I.jsx)(J,{className:t.button,children:"Ativar"})})})]})}));m.a.propTypes={open:m.a.bool,onClose:m.a.func,classes:m.a.object,nextStep:m.a.func};var Ze=Object(f.a)((function(){return{paper:{borderRadius:20,maxWidth:500,maxHeight:480}}}))((function(e){var t=e.open,a=e.onClose,n=e.classes,r=e.nextStep;return Object(I.jsx)(_e.a,{classes:{paper:n.paper},maxWidth:"sm",fullWidth:!0,open:t,onClose:a,children:Object(I.jsx)($e,{nextStep:r,onClose:a})})}));m.a.propTypes={classes:m.a.object,onClose:m.a.func.isRequired,nextStep:m.a.func};var Ue=Object(f.a)((function(e){return{marginTop20:{marginTop:20},card:{position:"relative",background:"white",padding:"35px",display:"flex",flexDirection:"column",height:420},title:{color:"#1c1c1c",textAlign:"center",fontSize:"1.5rem",fontWeight:700},button:{width:"95%",backgroundColor:"#1c1c1c",color:"white"},closeIcon:{position:"absolute",right:"0px",top:"15px",cursor:"pointer","&:hover":{transform:"unset",backgroundColor:"white"}}}}))((function(e){var t=e.classes,a=e.onClose;return Object(I.jsxs)(re,{className:t.card,children:[Object(I.jsx)(J,{variant:"icon",onClick:function(){return a()},className:t.closeIcon,children:Object(I.jsx)(qe.a,{})}),Object(I.jsx)(He.a,{disableTypography:!0,className:t.title,children:"Alterar licen\xe7a"}),Object(I.jsx)(Me.a,{children:Object(I.jsxs)(te,{width:"100%",flexDirection:"column",children:[Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"license",name:"license",label:"Licen\xe7a",type:"license",InputLabelProps:{shrink:!0},size:"small"}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"account",type:"account",name:"account",label:"Conta atual",InputLabelProps:{shrink:!0},size:"small"}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"account",type:"account",name:"account",label:"Conta nova",InputLabelProps:{shrink:!0},size:"small"})]})}),Object(I.jsx)(Ve.a,{children:Object(I.jsx)(te,{width:"100%",center:!0,children:Object(I.jsx)(J,{className:t.button,children:"Alterar"})})})]})}));m.a.propTypes={open:m.a.bool,onClose:m.a.func,classes:m.a.object,nextStep:m.a.func};var Je=Object(f.a)((function(){return{paper:{borderRadius:20,maxWidth:500}}}))((function(e){var t=e.open,a=e.onClose,n=e.classes,r=e.nextStep;return Object(I.jsx)(_e.a,{classes:{paper:n.paper},maxWidth:"sm",fullWidth:!0,open:t,onClose:a,children:Object(I.jsx)(Ue,{nextStep:r,onClose:a})})}));m.a.propTypes={classes:m.a.object};var Ke=[{id:1,name:"Data de compra"},{id:2,name:"Data ativa\xe7\xe3o"},{id:3,name:"Licen\xe7a"},{id:4,name:"Conta"},{id:5,name:"Tipo"},{id:6,name:"A\xe7\xe3o"}],Ge=[{id:1,created_at:"2022-04-14T17:43:16.393Z",active_at:"2022-04-14T17:43:16.393Z",license_code:"59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",account:55987,type:"DEFINITIVA"},{id:2,created_at:"2022-04-14T17:43:16.393Z",active_at:"2022-04-14T17:43:16.393Z",license_code:"59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",account:55987,type:"DEFINITIVA"},{id:3,created_at:"2022-04-14T17:43:16.393Z",active_at:"2022-04-14T17:43:16.393Z",license_code:"59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",account:55987,type:"DEFINITIVA"}],Qe=Object(f.a)((function(e){return{flex:{justifyContent:"space-between",width:"60%",height:"65px",borderRadius:"5px",padding:"20px 45px",marginBottom:"5px",backgroundColor:"white",color:"#1c1c1c",fontWeight:500},table:{width:"100%",backgroundColor:"white",borderRadius:"5px",border:"3px solid gray"},button:{width:"225px",height:"45px",fontSize:"1.2rem",fontWeight:700,color:"#1c1c1c",marginTop:"20px",borderRadius:"5px","&:hover":{transform:"scale(1.01)",backgroundColor:"white"}},btEdit:{width:"5% !important",height:"30px",borderRadius:"2px",border:"1px solid #dbdada"}}}))((function(e){var t=e.classes,a=Object(n.useState)(!1),r=Object(ie.a)(a,2),i=r[0],c=r[1],o=Object(n.useState)(!1),s=Object(ie.a)(o,2),l=s[0],d=s[1],b=function(){d(!0)};return Object(I.jsxs)(te,{flexDirection:"column",alignItems:"center",children:[Object(I.jsx)(Ze,{open:i,onClose:function(){return c(!1)}}),Object(I.jsx)(Je,{open:l,onClose:function(){return d(!1)}}),Object(I.jsx)(de,{fontSize:"3rem",fontWeight:600,color:"white",children:"Suas licen\xe7as"}),Object(I.jsx)(de,{color:"white",style:{margin:"10px 0 20px 0"},children:"Aqui voc\xea pode ativar ou editar uma licen\xe7a"}),Object(I.jsx)(te,{width:"60%",justifyContent:"flex-start",style:{margin:"25px 0"},children:Object(I.jsx)(J,{className:t.button,onClick:function(){c(!0)},children:"Ativar licen\xe7a"})}),Object(I.jsx)(te,{width:"60%",justifyContent:"center",style:{background:"gray",borderRadius:"8px",padding:"3px"},children:Object(I.jsxs)(ue.a,{className:t.table,children:[Object(I.jsx)(pe.a,{children:Object(I.jsx)(he.a,{style:{background:"#151a301a"},children:Ke.map((function(e){return Object(I.jsx)(je.a,{align:"center",className:t.tableHeader,children:Object(I.jsx)(de,{fontSize:"0.95rem",fontWeight:700,children:e.name})},e.name)}))})}),Object(I.jsx)(me.a,{children:Ge.map((function(e){return Object(I.jsxs)(he.a,{className:t.tableRow,children:[Object(I.jsx)(je.a,{align:"center",className:t.tableBorderBottom,children:Object(I.jsx)(de,{fontSize:"0.85rem",children:Le()(e.active_at).format("DD/MM/YYYY")})}),Object(I.jsx)(je.a,{align:"center",className:t.tableBorderBottom,children:Object(I.jsx)(de,{fontSize:"0.85rem",children:Le()(e.created_at).format("DD/MM/YYYY")})}),Object(I.jsx)(je.a,{align:"center",children:Object(I.jsx)(de,{fontWeight:600,children:e.license_code})}),Object(I.jsx)(je.a,{align:"center",children:Object(I.jsx)(de,{fontWeight:600,children:e.account})}),Object(I.jsx)(je.a,{align:"center",children:Object(I.jsx)(de,{fontWeight:600,children:e.type})}),Object(I.jsx)(je.a,{align:"center",className:"".concat(t.tableCellRadiusRight),children:Object(I.jsx)(J,{className:t.btEdit,onClick:b,children:Object(I.jsx)(Pe.a,{fontSize:"small"})})})]},e.id)}))})]})})]})})),Xe=a.p+"static/media/forex.cbead0c4.png",et=a(200);m.a.propTypes={classes:m.a.object};var tt=[{id:1,title:"LICEN\xc7A METATRADER 4",price:"R$ 497,00",description:["LICEN\xc7A DEFINITIVA","Contas Demo ilimitadas","Sem mensalidade","Direito a atualiza\xe7\xf5es"],url:"https://clkdmg.site/pay/gpl-trader"},{id:2,title:"LICEN\xc7A METATRADER 4",price:"R$ 497,00",description:["LICEN\xc7A DEFINITIVA","Contas Demo ilimitadas","Sem mensalidade","Direito a atualiza\xe7\xf5es"],url:"https://clkdmg.site/pay/gpl-trader"},{id:3,title:"LICEN\xc7A METATRADER 4",price:"R$ 497,00",description:["LICEN\xc7A DEFINITIVA","Contas Demo ilimitadas","Sem mensalidade","Direito a atualiza\xe7\xf5es"],url:"https://clkdmg.site/pay/gpl-trader"}],at=Object(f.a)((function(e){return{"@keyframes animateToLeft":{from:{left:"-300px",opacity:"0"},to:{left:0,opacity:"1"}},container:{justifyContent:"space-between",alignItems:"flex-start",position:"relative",animation:"$animateToLeft 1s"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px 30px",alignItems:"center",width:"30%",height:"600px",background:"white",borderRadius:"20px"},cardTitle:{fontWeight:800,fontSize:"1.1rem",color:"#1c1c1c"},icon:{color:"#00d72e",marginRight:"5px"},price:{fontWeight:800,fontSize:"2rem",textAlign:"left",color:"#1c1c1c"},description:{display:"flex",alignItems:"center",textAlign:"left",fontWeight:500,lineHeight:"37px"},button:{width:"100%",height:"50px",backgroundColor:"#1c1c1c",color:"white","&:hover":{transform:"scale(1.05)",backgroundColor:"#1c1c1cf2"}}}}))((function(e){var t=e.classes;return Object(I.jsxs)(te,{flexDirection:"column",alignItems:"center",children:[Object(I.jsx)(de,{fontSize:"3rem",fontWeight:600,color:"white",style:{marginBottom:"25px"},children:"Planos"}),Object(I.jsx)(te,{width:"60%",className:t.container,children:tt.map((function(e){return Object(I.jsxs)(re,{className:t.card,children:[Object(I.jsx)("img",{src:Xe,alt:"Forex box plan",width:130}),Object(I.jsx)(de,{className:t.cardTitle,children:e.title}),Object(I.jsx)(de,{className:t.price,children:e.price}),Object(I.jsx)(te,{flexDirection:"column",children:e.description.map((function(e){return Object(I.jsxs)(de,{className:t.description,children:[Object(I.jsx)(et.a,{className:t.icon})," ",e]})}))}),Object(I.jsx)(J,{className:t.button,onClick:function(){return window.open(e.url,"_blank")},children:"COMPRAR"})]})}))})]})})),nt=a(206);m.a.propTypes={classes:m.a.object};var rt={email:"",password:"",confirmPassword:"",nationalityId:"",confirmation:!1},it=function(e){var t={};return e.email?e.password?e.confirmPassword?e.confirmPassword!==e.password?(t.confirmPassword="Senhas diferentes",t):e.nationalityId?(e.confirmation||(t.confirmation="Campo obrigat\xf3rio *"),t):(t.nationalityId="Campo obrigat\xf3rio *",t):(t.confirmPassword="Campo obrigat\xf3rio *",t):(t.password="Campo obrigat\xf3rio *",t):(t.email="Campo obrigat\xf3rio *",t)},ct=Object(f.a)((function(e){return{marginTop12:{marginTop:12},marginTop20:{marginTop:20},marginTop35:{marginTop:50},"@keyframes fadeIn":{from:{opacity:"0"},to:{opacity:"1"}},container:{flexDirection:"column",alignItems:"center",position:"relative",animation:"$fadeIn 2s"},card:{display:"flex",flexDirection:"column",padding:"30px",width:"500px",height:"600px",background:"white",borderRadius:"10px"},cardTitle:{fontWeight:700,fontSize:"2.1rem",color:"#06061e"},createAccount:{color:"#007af7",fontWeight:600},button:{width:"100%",height:"50px",backgroundColor:"#06061e",color:"white",marginTop:"50px"}}}))((function(e){var t=e.classes;return Object(I.jsx)(te,{className:t.container,children:Object(I.jsxs)(re,{className:t.card,children:[Object(I.jsx)(de,{className:t.cardTitle,children:"Registrar conta"}),Object(I.jsxs)(de,{children:["J\xe1 tem uma conta?"," ",Object(I.jsx)(de,{className:t.createAccount,children:"Fazer login"})]}),Object(I.jsx)(Re.b,{initialValues:rt,validate:it,children:function(e){return Object(I.jsxs)(Re.a,{children:[Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop35,id:"fullname",name:"fullname",label:"Nome completo",InputLabelProps:{shrink:!0},size:"small",value:e.values.fullname,onChange:e.handleChange,error:e.touched.fullname&&Boolean(e.errors.fullname),helperText:e.touched.fullname&&e.errors.fullname}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"email",name:"email",label:"Email",type:"email",InputLabelProps:{shrink:!0},size:"small",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"password",type:"password",name:"password",label:"Senha",InputLabelProps:{shrink:!0},size:"small",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(I.jsx)(be.a,{variant:"outlined",fullWidth:!0,className:t.marginTop20,id:"confirmPassword",type:"password",name:"confirmPassword",label:"Confirmar senha",InputLabelProps:{shrink:!0},size:"small",value:e.values.confirmPassword,onChange:e.handleChange,error:e.touched.confirmPassword&&Boolean(e.errors.confirmPassword),helperText:e.touched.confirmPassword&&e.errors.confirmPassword}),Object(I.jsxs)(te,{className:t.marginTop12,children:[Object(I.jsx)(nt.a,{size:"small",checked:e.values.confirmation,name:"confirmation",value:e.values.confirmation,onChange:e.handleChange,error:e.touched.confirmation&&Boolean(e.errors.confirmation),helperText:e.touched.confirmation&&e.errors.confirmation}),Object(I.jsx)(de,{for:"scales",fontSize:14,children:"Eu concordo com os Termos e Condi\xe7\xf5es e com a Pol\xedtica de Privacidade"})]}),e.errors.confirmation&&Object(I.jsx)(te,{children:Object(I.jsx)(de,{className:t.typography2,children:"Campo obrigat\xf3rio *"})}),Object(I.jsx)(J,{className:t.button,children:"Registrar"})]})}})]})})}));function ot(){return Object(I.jsx)(p.a,{children:Object(I.jsx)(F,{children:Object(I.jsxs)(h.c,{children:[Object(I.jsx)(h.a,{path:"/plans",element:Object(I.jsx)(at,{})}),Object(I.jsx)(h.a,{path:"/my-account",element:Object(I.jsx)(De,{})}),Object(I.jsx)(h.a,{path:"/register",element:Object(I.jsx)(ct,{})}),Object(I.jsx)(h.a,{path:"/license-list",element:Object(I.jsx)(Qe,{})})]})})})}var st=a(102),lt=function(){return Object(I.jsx)(s.a,{theme:u,children:Object(I.jsxs)(st.a,{children:[Object(I.jsx)(o.a,{}),Object(I.jsx)(ot,{})]})})},dt=a(104),bt=a(81),ut=a(34),pt=Object(dt.a)(Object(bt.b)()),ht=Object(ut.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(y.a)(Object(y.a)({},e),{},{loading:!0,data:null,error:null});case T:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,data:t.payload,error:null});case C:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,data:null,error:t.payload});default:return e}}}),jt=Object(bt.a)({reducer:ht,middleware:pt});c.a.render(Object(I.jsx)(x.a,{store:jt,children:Object(I.jsx)(lt,{})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.958307b7.chunk.js.map