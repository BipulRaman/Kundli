import{t as xs,a as vs,K as ks,b as ws,p as js,r as g,j as i,B as ct,f as Ns,u as jr,o as Nr,w as Sr,x as Ss,q as kt,L as Vt,F as Ge,y as Tr,S as Lr,z as Cr}from"./index-BJ_aE55X.js";import{g as Qe,d as Ct,P as _r,z as Er,h as Ts,C as Mr,M as Fr}from"./PlaceSearch-CQ3YWbkH.js";import{M as cn,T as qt}from"./TopBar-CRMAFfRr.js";async function Or(t,e,n=!1){const s=await xs(ks.Report(e),{method:"POST",headers:{"Content-Type":"application/json",...vs(t)},body:JSON.stringify({refresh:n})});if(await ws(s),!s.ok)throw new Error(await js(s));return await s.json()}async function Ut(t,e){const n=await xs(ks.Report(e),{headers:vs(t)});if(await ws(n),!n.ok)throw new Error(await js(n));return await n.json()}function $r({title:t,message:e,confirmLabel:n="Confirm",cancelLabel:s="Cancel",danger:r=!1,onConfirm:a,onCancel:o}){const l=g.useRef(null),h=g.useId(),c=g.useId();return g.useEffect(()=>{var d;(d=l.current)==null||d.focus()},[]),g.useEffect(()=>{function d(f){f.key==="Escape"&&(f.stopImmediatePropagation(),o())}return window.addEventListener("keydown",d,!0),()=>window.removeEventListener("keydown",d,!0)},[o]),i.jsx(cn,{children:i.jsx("div",{className:"modal-backdrop confirm-backdrop",onClick:o,children:i.jsxs("div",{className:"modal confirm-modal",role:"alertdialog","aria-modal":"true","aria-labelledby":h,"aria-describedby":c,onClick:d=>d.stopPropagation(),children:[i.jsxs("div",{className:"confirm-head",children:[i.jsx("h2",{id:h,children:t}),i.jsx("p",{id:c,children:e})]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{type:"button",className:"confirm-cancel",ref:l,onClick:o,children:s}),i.jsx("button",{type:"button",className:r?"confirm-go danger":"confirm-go",onClick:a,children:n})]})]})})})}const _n=[{id:"north",label:"North Indian"},{id:"south",label:"South Indian"},{id:"east",label:"East Indian"}],En=[{id:"male",label:"Male"},{id:"female",label:"Female"},{id:"other",label:"Other"}],Mn=[{id:"en",label:"English"},{id:"hi",label:"हिन्दी"}],Wt=50,Fn="(min-width: 64rem)";function Ar(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`k_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}const Rr=Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Kolkata",zr=new Date,Dr=[...Mr].sort((t,e)=>t.name.localeCompare(e.name)).flatMap(t=>t.zones.map(e=>({value:`${t.code}|${e}`,label:`${t.name} | ${e.replace(/_/g," ")} (${Ir(e)})`,countryCode:t.code,zone:e}))),Pr=Qe("Asia/Kolkata")?"Asia/Kolkata":Rr;var bs,ys;const Yt=((bs=Qe(Pr))==null?void 0:bs.code)??((ys=Qe("Asia/Kolkata"))==null?void 0:ys.code)??"IN",On={name:"",gender:"",language:"",style:"",year:1990,month:1,day:1,hour:12,minute:0,second:0,latitude:Number.NaN,longitude:Number.NaN,timeZone:"",tzOffsetHours:0,varshphalStartYear:new Date().getFullYear(),varshphalEndYear:new Date().getFullYear()};function $n({onSubmit:t,initial:e,loggedIn:n=!1,savedItems:s,savedLoading:r=!1,savedError:a=null,onRetrySaved:o,onSelectSaved:l,onDeleteSaved:h,hideRecent:c=!1,defaultTab:d="new",requestedTab:f,readOnly:y=!1,desktopWorkspace:k=!1,feedback:z}){const v=g.useId(),[Z,K]=g.useState(()=>k&&typeof window<"u"&&window.matchMedia(Fn).matches);g.useEffect(()=>{if(!k)return;const u=window.matchMedia(Fn),x=()=>K(u.matches);return x(),u.addEventListener("change",x),()=>u.removeEventListener("change",x)},[k]);const[w,Ne]=g.useState(e??On),[te,ye]=g.useState(()=>zn(e??On)),[pt,Be]=g.useState(()=>{var u;return e!=null&&e.timeZone?`${((u=Qe(e.timeZone))==null?void 0:u.code)??Yt}|${e.timeZone}`:""}),[se,re]=g.useState(d),Se=g.useRef(!1);g.useEffect(()=>{Se.current||re(d)},[d]),g.useEffect(()=>{f&&re(f)},[f]);const[He,ft]=g.useState(""),[Te,he]=g.useState(!1),[B,q]=g.useState(null),[Le,Ve]=g.useState(null),[ie,Ce]=g.useState(()=>!!(e!=null&&e.place)),[_e,G]=g.useState(null),[Ee,qe]=g.useState(()=>!!(e&&Number.isFinite(e.latitude)&&Number.isFinite(e.longitude)));function J(u,x){Ne(L=>({...L,[u]:x}))}function xe(u,x,L){const T=x.replace(/\D/g,"").slice(0,L);ye(Bt=>({...Bt,[u]:T}));const bt=parseInt(T,10);Number.isNaN(bt)||J(u,bt)}function mt(u){const x=u.replace(/\D/g,"").slice(0,2);ye(T=>({...T,hour:x}));const L=parseInt(x,10);Number.isNaN(L)||J("hour",Rn(L,te.meridiem))}function Ue(u){ye(L=>({...L,meridiem:u}));const x=parseInt(te.hour,10);Number.isNaN(x)||J("hour",Rn(x,u))}g.useEffect(()=>{var u;e&&(Ne(e.place?{...e,place:Ct(e.place)}:e),ye(zn(e)),Be(e.timeZone?`${((u=Qe(e.timeZone))==null?void 0:u.code)??Yt}|${e.timeZone}`:""),Ce(!!e.place),G(null),qe(Number.isFinite(e.latitude)&&Number.isFinite(e.longitude)))},[e]),g.useEffect(()=>{try{localStorage.removeItem("kundli.recent")}catch{}},[]);function P(){q({lat:Ee&&Number.isFinite(w.latitude)?String(w.latitude):"",lon:Ee&&Number.isFinite(w.longitude)?String(w.longitude):"",cz:pt,error:null})}function ve(u){q(x=>x&&{...x,...u,error:null})}function O(u){const x=Ur(u.clipboardData.getData("text"));x&&(u.preventDefault(),ve({lat:String(x.lat),lon:String(x.lng)}))}function Me(){if(!B)return;const u=Number(B.lat.trim()),x=Number(B.lon.trim()),L=B.cz.split("|")[1]??"";if(!B.lat.trim()||!Number.isFinite(u)||Math.abs(u)>90){q(T=>T&&{...T,error:"Latitude must be a number between -90 and 90."});return}if(!B.lon.trim()||!Number.isFinite(x)||Math.abs(x)>180){q(T=>T&&{...T,error:"Longitude must be a number between -180 and 180."});return}if(!L){q(T=>T&&{...T,error:"Pick a country and time zone."});return}Ne(T=>({...T,latitude:u,longitude:x,timeZone:L})),Be(B.cz),qe(!0),he(!0),G(null),q(null)}function gt(u){var L;const x=Er(u.countryCode,u.longitude);if(Ne(T=>({...T,place:u.label,latitude:An(u.latitude),longitude:An(u.longitude),...x?{timeZone:x}:{}})),x){const T=((L=Qe(x))==null?void 0:L.code)??u.countryCode??Yt;Be(`${T}|${x}`)}Ce(!0),G(null),qe(!0)}const ue=n?(s??[]).map(u=>({key:u.id,name:u.name||u.input.name||"Unnamed",input:u.input,onLoad:()=>l==null?void 0:l(u),onDelete:h?()=>Ve(u):void 0})):[],We=!c&&n,$=k&&Z&&We,it=We&&!$,pe=We?se:"new",at=$||pe==="new",Ye=$||pe==="recent",U=He.trim().toLowerCase(),fe=U?ue.filter(u=>u.name.toLowerCase().includes(U)||(u.input.place??"").toLowerCase().includes(U)):ue,It=fe.slice(0,Wt);return i.jsxs("div",{className:`form-shell${$?" is-workspace":""}`,children:[it&&i.jsxs("div",{className:"form-tabs",role:"tablist","aria-label":"Birth charts",onFocusCapture:()=>{Se.current=!0},onKeyDown:u=>{var L;let x;if(u.key==="Home")x="new";else if(u.key==="End")x="recent";else if(u.key==="ArrowLeft"||u.key==="ArrowRight")x=se==="new"?"recent":"new";else return;u.preventDefault(),re(x),(L=document.getElementById(`${v}-${x}-tab`))==null||L.focus()},children:[i.jsx("button",{type:"button",role:"tab",id:`${v}-new-tab`,"aria-controls":`${v}-new-panel`,"aria-selected":se==="new",tabIndex:se==="new"?0:-1,className:se==="new"?"form-tab active":"form-tab",onClick:()=>re("new"),children:"Add New"}),i.jsxs("button",{type:"button",role:"tab",id:`${v}-recent-tab`,"aria-controls":`${v}-recent-panel`,"aria-selected":se==="recent",tabIndex:se==="recent"?0:-1,className:se==="recent"?"form-tab active":"form-tab",onClick:()=>re("recent"),children:["Profiles (",ue.length,")"]})]}),i.jsxs("div",{className:"form-panels",children:[i.jsxs("form",{id:`${v}-new-panel`,role:it?"tabpanel":void 0,"aria-labelledby":$?`${v}-new-heading`:it?`${v}-new-tab`:void 0,className:at?"birth-form":"birth-form panel-hidden","aria-hidden":!at,onFocusCapture:()=>{Se.current=!0,$&&re("new")},onSubmit:u=>{var L,T;if(u.preventDefault(),!((L=w.name)!=null&&L.trim()))return;if(!w.gender||!w.language||!w.style){u.currentTarget.reportValidity();return}if(!Te&&!ie){G((T=w.place)!=null&&T.trim()?"Pick a birth place from the suggestions, or enter the coordinates yourself.":"Birth place is required, or enter the coordinates yourself.");return}if(!Ee||!w.timeZone){G("Latitude, longitude and time zone are required.");return}const x={...w,name:w.name.trim(),gender:w.gender,language:w.language,style:w.style,id:w.id??Ar()};Ne(x),t(x)},children:[$&&i.jsxs("header",{className:"workspace-panel-head",children:[i.jsx("span",{className:"workspace-panel-mark",children:i.jsx(ct,{})}),i.jsxs("div",{children:[i.jsx("h2",{id:`${v}-new-heading`,children:"Create a new Kundli"}),i.jsx("p",{children:"Start with a name, then add the birth details."})]})]}),i.jsxs("fieldset",{className:"bf-fields",disabled:y,children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-name`,children:"Name *"}),i.jsx("input",{id:`${v}-name`,name:"birth-name",autoComplete:"off",type:"text",value:w.name,required:!0,placeholder:"e.g. Aarya Sharma…",onChange:u=>J("name",u.target.value)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-gender`,children:"Gender *"}),i.jsxs("select",{id:`${v}-gender`,name:"gender",required:!0,value:w.gender,onChange:u=>{const x=En.find(L=>L.id===u.currentTarget.value);J("gender",(x==null?void 0:x.id)??"")},children:[i.jsx("option",{value:"",disabled:!0,children:"Select gender…"}),En.map(u=>i.jsx("option",{value:u.id,children:u.label},u.id))]})]}),i.jsxs("div",{className:"field bf-wide",children:[i.jsxs("label",{htmlFor:`${v}-place`,children:["Birth place ",Te?"":"*"]}),i.jsx(_r,{id:`${v}-place`,value:w.place??"",onChange:u=>{J("place",u),Ce(!1),G(null)},onSelect:gt,disabled:y,required:!Te}),_e&&i.jsx("p",{className:"field-error",role:"alert",children:_e}),i.jsxs("div",{className:"coord-summary",children:[i.jsx("span",{className:"coord-summary-text",children:Ee?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"coord-summary-part",children:[Vr(w.latitude)," · ",qr(w.longitude)," ·"]}),i.jsx("span",{className:"coord-summary-part coord-summary-part--tz",children:w.timeZone?`TimeZone: ${w.timeZone.replace(/_/g," ")} (${Br(w.timeZone,Hr(w))})`:"TimeZone: not set"})]}):i.jsx("span",{className:"coord-summary-empty",children:"Latitude, longitude & time zone fill in once you pick a place"})}),!y&&i.jsx("button",{type:"button",className:"coord-summary-edit","aria-haspopup":"dialog","aria-label":"Enter coordinates and time zone",title:"Enter coordinates and time zone",onClick:P,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-year`,children:"Date of birth (YYYY / MM / DD) *"}),i.jsxs("div",{className:"segment-group",role:"group","aria-label":"Date of birth: year, month, day",children:[i.jsx("input",{id:`${v}-year`,type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg seg-year","aria-label":"Year",placeholder:"YYYY",maxLength:4,required:!0,value:te.year,onChange:u=>xe("year",u.target.value,4)}),i.jsx("span",{className:"seg-sep","aria-hidden":"true",children:"/"}),i.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg","aria-label":"Month",placeholder:"MM",maxLength:2,required:!0,value:te.month,onChange:u=>xe("month",u.target.value,2)}),i.jsx("span",{className:"seg-sep","aria-hidden":"true",children:"/"}),i.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg","aria-label":"Day",placeholder:"DD",maxLength:2,required:!0,value:te.day,onChange:u=>xe("day",u.target.value,2)})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-hour`,children:"Time of birth (HH : MM : SS · AM/PM) *"}),i.jsxs("div",{className:"segment-group",role:"group","aria-label":"Time of birth: hour, minute, second, AM or PM",children:[i.jsx("input",{id:`${v}-hour`,type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg","aria-label":"Hour (1 to 12)",placeholder:"HH",maxLength:2,required:!0,value:te.hour,onChange:u=>mt(u.target.value)}),i.jsx("span",{className:"seg-sep","aria-hidden":"true",children:":"}),i.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg","aria-label":"Minute (0 to 59)",placeholder:"MM",maxLength:2,required:!0,value:te.minute,onChange:u=>xe("minute",u.target.value,2)}),i.jsx("span",{className:"seg-sep","aria-hidden":"true",children:":"}),i.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",className:"seg","aria-label":"Second (0 to 59)",placeholder:"SS",maxLength:2,required:!0,value:te.second,onChange:u=>xe("second",u.target.value,2)}),i.jsxs("select",{className:"seg-ampm","aria-label":"AM or PM",value:te.meridiem,onChange:u=>Ue(u.target.value),children:[i.jsx("option",{value:"AM",children:"AM"}),i.jsx("option",{value:"PM",children:"PM"})]})]})]}),i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-varshphal-start`,children:"Varshphal Start Year *"}),i.jsx("input",{id:`${v}-varshphal-start`,name:"varshphal-start-year",type:"number",required:!0,min:w.year,max:w.year+120,value:w.varshphalStartYear??new Date().getFullYear(),onChange:u=>J("varshphalStartYear",Number(u.target.value)||w.year)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-varshphal-end`,children:"Varshphal End Year *"}),i.jsx("input",{id:`${v}-varshphal-end`,name:"varshphal-end-year",type:"number",required:!0,min:w.year,max:w.year+120,value:w.varshphalEndYear??new Date().getFullYear(),onChange:u=>J("varshphalEndYear",Number(u.target.value)||w.year)})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-language`,children:"Kundli Language *"}),i.jsxs("select",{id:`${v}-language`,name:"language",required:!0,value:w.language,onChange:u=>{const x=Mn.find(L=>L.id===u.currentTarget.value);J("language",(x==null?void 0:x.id)??"")},children:[i.jsx("option",{value:"",disabled:!0,children:"Select Kundli language…"}),Mn.map(u=>i.jsx("option",{value:u.id,children:u.label},u.id))]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:`${v}-style`,children:"Chart style *"}),i.jsxs("select",{id:`${v}-style`,name:"chart-style",required:!0,value:w.style,onChange:u=>{const x=_n.find(L=>L.id===u.currentTarget.value);J("style",(x==null?void 0:x.id)??"")},children:[i.jsx("option",{value:"",disabled:!0,children:"Select chart style…"}),_n.map(u=>i.jsx("option",{value:u.id,children:u.label},u.id))]})]})]}),z,!y&&i.jsxs("div",{className:"birth-form-actions",children:[i.jsx("button",{type:"submit",className:"primary",children:n?"Save & Generate":"Generate"}),$&&i.jsx("span",{children:"Your chart is saved to your account."})]})]}),We&&i.jsxs("div",{id:`${v}-recent-panel`,role:$?"region":"tabpanel","aria-labelledby":$?`${v}-recent-heading`:`${v}-recent-tab`,className:Ye?"recents-panel":"recents-panel panel-hidden","aria-hidden":!Ye,onFocusCapture:()=>{Se.current=!0,$&&re("recent")},children:[$&&i.jsxs("header",{className:"workspace-profiles-head",children:[i.jsxs("div",{children:[i.jsx("h2",{id:`${v}-recent-heading`,children:"Saved profiles"}),i.jsx("p",{children:"Pick up where you left off."})]}),!r&&!a&&i.jsx("span",{className:"workspace-profile-count",children:ue.length.toLocaleString()})]}),r?i.jsx("p",{className:"loading",role:"status",children:"Loading saved profiles…"}):a?i.jsxs("div",{className:"recents-feedback",children:[i.jsx("p",{className:"error",role:"alert",children:a}),o&&i.jsx("button",{type:"button",className:"plan-cta-action",onClick:o,children:"Try again"})]}):ue.length===0?i.jsxs("div",{className:"recents-empty-state",children:[$&&i.jsx(ct,{className:"workspace-empty-mark"}),i.jsx("p",{className:"recents-empty",children:"No saved charts in your account yet."}),i.jsx("button",{type:"button",className:$?"plan-cta-action":"primary",onClick:()=>{var u;re("new"),$&&((u=document.getElementById(`${v}-name`))==null||u.focus())},children:"Cast your first chart"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"recents-toolbar",children:i.jsxs("div",{className:"recents-search",children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m21 21-4.3-4.3"})]}),i.jsx("input",{type:"search",className:"recents-search-input",placeholder:$?"Search name or place…":"Search your charts by name or place…",value:He,onChange:u=>ft(u.target.value),"aria-label":"Search saved charts"}),!$&&i.jsx("span",{className:"recents-search-count",children:ue.length})]})}),fe.length===0?i.jsxs("p",{className:"recents-empty",children:["No charts match “",He.trim(),"”."]}):i.jsxs(i.Fragment,{children:[i.jsx("ul",{className:"recents-list",children:It.map(u=>{var x;return i.jsxs("li",{className:"recents-item",children:[i.jsxs("button",{type:"button",className:"recents-load",onClick:u.onLoad,title:"Load this chart",children:[$&&i.jsx("span",{className:"workspace-profile-avatar","aria-hidden":"true",children:(x=Array.from(u.name.trim())[0])==null?void 0:x.toLocaleUpperCase()}),i.jsx("span",{className:"recents-name",children:u.name}),i.jsxs("span",{className:"recents-meta",children:[Oe(u.input.day),"/",Oe(u.input.month),"/",Oe(u.input.year,4),u.input.place?` · ${Ct(u.input.place)}`:` · ${Oe(u.input.hour)}:${Oe(u.input.minute)}`]})]}),u.onDelete&&i.jsx("button",{type:"button",className:"recents-remove",onClick:u.onDelete,title:"Delete","aria-label":"Delete",children:i.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M3 6h18"}),i.jsx("path",{d:"M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"}),i.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),i.jsx("path",{d:"M10 11v6"}),i.jsx("path",{d:"M14 11v6"})]})})]},u.key)})}),fe.length>Wt&&i.jsxs("p",{className:"recents-more",children:["Showing ",Wt," of ",fe.length," — refine your search to narrow results."]})]})]})]})]}),B&&i.jsx(cn,{children:i.jsx("div",{className:"modal-backdrop",onClick:()=>q(null),children:i.jsxs("div",{className:"modal coord-modal",role:"dialog","aria-modal":"true","aria-label":"Coordinates and time zone",onClick:u=>u.stopPropagation(),children:[i.jsx("button",{type:"button",className:"modal-close","aria-label":"Close",onClick:()=>q(null),children:"×"}),i.jsxs("div",{className:"coord-modal-head",children:[i.jsx("h2",{children:"Coordinates & time zone"}),i.jsx("p",{children:"Normally filled in from the birth place. Set them here when you already know the exact values."})]}),i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"coord-lat",children:"Latitude (°N) *"}),i.jsx("input",{id:"coord-lat",type:"number",step:"0.0001",placeholder:"e.g. 25.3356",value:B.lat,onPaste:O,onChange:u=>ve({lat:u.target.value})})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"coord-lon",children:"Longitude (°E) *"}),i.jsx("input",{id:"coord-lon",type:"number",step:"0.0001",placeholder:"e.g. 83.0076",value:B.lon,onPaste:O,onChange:u=>ve({lon:u.target.value})})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"coord-tz",children:"Country | TZ Location *"}),i.jsxs("select",{id:"coord-tz",value:B.cz,onChange:u=>ve({cz:u.target.value}),children:[i.jsx("option",{value:"",children:"Select a time zone…"}),Dr.map(u=>i.jsx("option",{value:u.value,children:u.label},u.value))]})]}),B.error&&i.jsx("p",{className:"field-error",children:B.error}),i.jsxs("div",{className:"coord-modal-actions",children:[i.jsx("button",{type:"button",className:"coord-modal-cancel",onClick:()=>q(null),children:"Cancel"}),i.jsx("button",{type:"button",className:"primary",onClick:Me,children:"Apply"})]})]})})}),Le&&i.jsx($r,{title:"Delete chart?",message:i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:Le.name||Le.input.name||"This chart"})," ","will be removed from your account. This cannot be undone."]}),confirmLabel:"Delete",danger:!0,onConfirm:()=>{h==null||h(Le),Ve(null)},onCancel:()=>Ve(null)})]})}function Ls(t){const e=t<0?"-":"+",n=Math.abs(t),s=Math.floor(n),r=Math.round((n-s)*60);return`UTC${e}${Oe(s)}:${Oe(r)}`}function Ir(t){try{return Ls(Ts(t,zr))}catch{return"UTC"}}function Br(t,e){try{return Ls(Ts(t,e)).replace("UTC","GMT")}catch{return"GMT"}}function Hr(t){const e=(n,s)=>typeof n=="number"&&Number.isFinite(n)?n:s;return new Date(Date.UTC(e(t.year,2e3),e(t.month,1)-1,e(t.day,1),e(t.hour,12),e(t.minute,0),e(t.second,0)))}function Vr(t){return Number.isFinite(t)?`${Math.abs(t).toFixed(4)}° ${t<0?"S":"N"}`:"—"}function qr(t){return Number.isFinite(t)?`${Math.abs(t).toFixed(4)}° ${t<0?"W":"E"}`:"—"}function Oe(t,e=2){return String(t).padStart(e,"0")}function An(t){return Math.round(t*1e4)/1e4}function Rn(t,e){const n=t%12;return e==="PM"?n+12:n}function Ur(t){const e=t.trim().match(/^([+-]?\d+(?:\.\d+)?)\s*[,;\s]\s*([+-]?\d+(?:\.\d+)?)$/);if(!e)return null;const n=Number(e[1]),s=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(s)?null:{lat:n,lng:s}}function zn(t){const e=a=>typeof a=="number"&&Number.isFinite(a)?String(a):"",n=typeof t.hour=="number"&&Number.isFinite(t.hour),s=n?t.hour:0,r=s%12===0?12:s%12;return{year:e(t.year),month:e(t.month),day:e(t.day),hour:n?String(r):"",minute:e(t.minute),second:e(t.second),meridiem:s<12?"AM":"PM"}}function Cs({feature:t,title:e,message:n,suggestedPlan:s,onClose:r}){const a=Ns(),o=g.useRef(null),l=g.useId(),h=g.useId();return g.useEffect(()=>{var c;(c=o.current)==null||c.focus()},[]),g.useEffect(()=>{function c(d){d.key==="Escape"&&(d.stopImmediatePropagation(),r())}return window.addEventListener("keydown",c,!0),()=>window.removeEventListener("keydown",c,!0)},[r]),i.jsx(cn,{children:i.jsx("div",{className:"modal-backdrop confirm-backdrop",onClick:r,children:i.jsxs("div",{className:"modal confirm-modal upgrade-modal",role:"alertdialog","aria-modal":"true","aria-labelledby":l,"aria-describedby":h,onClick:c=>c.stopPropagation(),children:[i.jsxs("div",{className:"confirm-head",children:[i.jsx("h2",{id:l,children:e}),i.jsx("p",{id:h,children:n})]}),i.jsxs("div",{className:"confirm-actions",children:[i.jsx("button",{type:"button",className:"confirm-cancel",ref:o,onClick:r,children:"Not now"}),i.jsx("button",{type:"button",className:"confirm-go",onClick:()=>void a({to:"/subscription",search:{feature:t,plan:s}}),children:"Upgrade plan"})]})]})})})}const Wr={male:"Male",female:"Female",other:"Other"},Yr={en:"English",hi:"हिन्दी"},Zr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_t=t=>String(t).padStart(2,"0");function Gr(t){const e=Zr[t.month-1]??String(t.month);return`${t.day} ${e} ${t.year}`}function Jr(t){const e=t.hour<12?"AM":"PM";return`${t.hour%12===0?12:t.hour%12}:${_t(t.minute)}:${_t(t.second)} ${e} (Local Time)`}function Kr(t){const e=t<0?"-":"+",n=Math.abs(t),s=Math.floor(n),r=Math.round((n-s)*60);return`UTC${e}${_t(s)}:${_t(r)}`}function Qr(t){return`${Math.abs(t).toFixed(4)}° ${t<0?"S":"N"}`}function Xr(t){return`${Math.abs(t).toFixed(4)}° ${t<0?"W":"E"}`}function ei({input:t}){var n,s;const e=t.varshphalStartYear&&t.varshphalEndYear?t.varshphalStartYear===t.varshphalEndYear?String(t.varshphalStartYear):`${t.varshphalStartYear} – ${t.varshphalEndYear}`:null;return i.jsxs("div",{className:"bd-summary",children:[i.jsxs("dl",{className:"bd-facts",children:[i.jsxs("div",{className:"bd-fact bd-fact-wide bd-fact-name",children:[i.jsx("dt",{children:"Name"}),i.jsx("dd",{children:((n=t.name)==null?void 0:n.trim())||"Unnamed chart"})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Gender"}),i.jsx("dd",{children:Wr[t.gender]??"—"})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Kundli Language"}),i.jsx("dd",{children:Yr[t.language]})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Date of birth"}),i.jsx("dd",{children:Gr(t)})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Time of birth"}),i.jsx("dd",{children:Jr(t)})]}),((s=t.place)==null?void 0:s.trim())&&i.jsxs("div",{className:"bd-fact bd-fact-span2",children:[i.jsx("dt",{children:"Place"}),i.jsx("dd",{children:Ct(t.place.trim())})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Time zone"}),i.jsxs("dd",{children:[t.timeZone??"—"," ",i.jsxs("span",{className:"bd-fact-muted",children:["(",Kr(t.tzOffsetHours),")"]})]})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Coordinates"}),i.jsxs("dd",{children:[Qr(t.latitude),", ",Xr(t.longitude)]})]}),e&&i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Varshphal years"}),i.jsx("dd",{children:e})]}),i.jsxs("div",{className:"bd-fact",children:[i.jsx("dt",{children:"Chart style"}),i.jsx("dd",{children:t.style.charAt(0).toUpperCase()+t.style.slice(1)})]})]}),i.jsx(Fr,{items:["Parashari (BPHS)","Whole-sign houses","Lahiri ayanamsa","Vimshottari dasha","Drik ganita"]})]})}const ti=[{id:"chart",label:"The Chart"},{id:"analysis",label:"Analysis & Timing"},{id:"reading",label:"Reading"}],Dn=[{id:"birth-details",label:"Birth Details",group:"chart"},{id:"overview",label:"Overview",group:"chart"},{id:"planets",label:"Planets",group:"chart"},{id:"shadbala",label:"Shadbala",group:"chart"},{id:"charts",label:"Divisional Charts",group:"chart"},{id:"dashas",label:"Dashas",group:"analysis"},{id:"ashtaka",label:"Ashtakavarga",group:"analysis"},{id:"yogas",label:"Yogas & Doshas",group:"analysis"},{id:"varshphal",label:"Varshphal",group:"analysis"},{id:"interpretation",label:"Interpretation",group:"reading"}],ni={"birth-details":i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("circle",{cx:"12",cy:"8",r:"3.4"}),i.jsx("path",{d:"M5 20a7 7 0 0 1 14 0"})]}),overview:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"}),i.jsx("path",{d:"M14 3v5h5"}),i.jsx("path",{d:"M8 13h8M8 17h6"})]}),planets:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("circle",{cx:"12",cy:"12",r:"3.4"}),i.jsx("path",{d:"M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.4 5.4l2 2M16.6 16.6l2 2M18.6 5.4l-2 2M7.4 16.6l-2 2"})]}),shadbala:i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M5 20V11M10 20V5M15 20v-6M20 20V8"})}),charts:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"7",rx:"1.4"}),i.jsx("rect",{x:"13.5",y:"3.5",width:"7",height:"7",rx:"1.4"}),i.jsx("rect",{x:"3.5",y:"13.5",width:"7",height:"7",rx:"1.4"}),i.jsx("rect",{x:"13.5",y:"13.5",width:"7",height:"7",rx:"1.4"})]}),dashas:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("circle",{cx:"12",cy:"12",r:"9"}),i.jsx("path",{d:"M12 7v5l3.5 2"})]}),ashtaka:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"1.8"}),i.jsx("path",{d:"M3.5 9.5h17M3.5 15h17M9.5 4v16M15 4v16"})]}),yogas:i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M12 3l1.9 5.4L19.5 10l-5.6 1.6L12 17l-1.9-5.4L4.5 10l5.6-1.6L12 3Z"})}),varshphal:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("rect",{x:"3.5",y:"4.5",width:"17",height:"16",rx:"2"}),i.jsx("path",{d:"M3.5 9.5h17M8 2.5v4M16 2.5v4"})]}),interpretation:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M5 4a2 2 0 0 1 2-2h12v16H7a2 2 0 0 0-2 2V4Z"}),i.jsx("path",{d:"M9 6h6M9 10h6"})]})};class ne{constructor(e,n,s,r,a){this.kind=e,this.input=n,this.begin=s,this.end=r,this.file=a}getText(){return this.input.slice(this.begin,this.end)}getPosition(){let[e,n]=[1,1];for(let s=0;s<this.begin;s++)this.input[s]===`
`?(e++,n=1):n++;return[e,n]}size(){return this.end-this.begin}}class De{liquidMethodMissing(e,n){}}const si=Object.prototype.toString,Pn=String.prototype.toLowerCase,At=Object.hasOwnProperty;function j(t){return typeof t=="string"}function H(t){return typeof t=="function"}function ri(t){return t&&H(t.then)}function Et(t){return t&&H(t.next)&&H(t.throw)&&H(t.return)}function m(t){return t=S(t),j(t)?t:D(t)?"":V(t)?t.map(e=>m(e)).join(""):String(t)}function dt(t,e,n){if(e<0&&(e=t.length+e),!(n&&!At.call(t,e)))return t[e]}function ht(t){return t=S(t),V(t)?t:j(t)&&t.length>0?[t]:ai(t)?Array.from(t):Rt(t)?Object.keys(t).map(e=>[e,t[e]]):[]}function W(t){return t=S(t),D(t)?[]:V(t)?t:[t]}function S(t){return t instanceof De&&H(t.valueOf)?t.valueOf():t}function Xt(t){return+S(t)||0}function ut(t){return typeof t=="number"}function _s(t){return t&&H(t.toLiquid)?_s(t.toLiquid()):t}function D(t){return t==null}function ii(t){return t===void 0}function V(t){return si.call(t)==="[object Array]"}function Es(t){return t&&ut(t.length)}function ai(t){return Rt(t)&&Symbol.iterator in t}function In(t,e){t=t||{};for(const n in t)if(At.call(t,n)&&e(t[n],n,t)===!1)break;return t}function oi(t){return t[t.length-1]}function Rt(t){const e=typeof t;return t!==null&&(e==="object"||e==="function")}function Ms(t,e,n=1){const s=[];for(let r=t;r<e;r+=n)s.push(r);return s}function et(t,e,n=" "){return Fs(t,e,n,(s,r)=>r+s)}function li(t,e,n=" "){return Fs(t,e,n,(s,r)=>s+r)}function Fs(t,e,n,s){t=String(t);const r=e-t.length;return r<=0?t:s(t,n.repeat(r))}function Os(t){return t}function ci(t){return[...t].some(n=>n>="a"&&n<="z")?t.toUpperCase():t.toLowerCase()}function di(t,e){return t.length>e?t.slice(0,e-3)+"...":t}function hi(t,e){return D(t)&&D(e)?0:D(t)?1:D(e)||t<e?-1:t>e?1:0}function ui(t,e){return D(t)&&D(e)?0:D(t)?1:D(e)||(t=Pn.call(t),e=Pn.call(e),t<e)?-1:t>e?1:0}function zt(t){return function(...e){return t.call(this,...e.map(S))}}function de(t){return function(...e){return t.call(this,...e.map(Xt))}}function*wt(t){const e=new Set;for(const n of t){const s=JSON.stringify(n);e.has(s)||(e.add(s),yield n)}}const Bn="__liquidClass__";class Pe extends Error{constructor(e,n){super(typeof e=="string"?e:e.message),this.context="",typeof e!="string"&&Object.defineProperty(this,"originalError",{value:e,enumerable:!1}),Object.defineProperty(this,"token",{value:n,enumerable:!1}),Object.defineProperty(this,Bn,{value:"LiquidError",enumerable:!1})}update(){Object.defineProperty(this,"context",{value:xi(this.token),enumerable:!1}),this.message=vi(this.message,this.token),this.stack=this.message+`
`+this.context+`
`+this.stack,this.originalError&&(this.stack+=`
From `+this.originalError.stack)}static is(e){return(e==null?void 0:e[Bn])==="LiquidError"}}class pi extends Pe{constructor(e,n){super(e,n),this.name="TokenizationError",super.update()}}class fi extends Pe{constructor(e,n){super(e,n),this.name="ParseError",this.message=e.message,super.update()}}class mi extends Pe{constructor(e,n){super(e,n.token),this.name="RenderError",this.message=e.message,super.update()}static is(e){return e.name==="RenderError"}}class $s extends Pe{constructor(e){super(e[0],e[0].token),this.errors=e,this.name="LiquidErrors";const n=e.length>1?"s":"";this.message=`${e.length} error${n} found`,super.update()}static is(e){return e.name==="LiquidErrors"}}class gi extends Pe{constructor(e,n){super(e,n),this.name="UndefinedVariableError",this.message=e.message,super.update()}}class bi extends Error{constructor(e){super(`undefined variable: ${e}`),this.name="InternalUndefinedVariableError",this.variableName=e}}class yi extends Error{constructor(e){super(e),this.name="AssertionError",this.message=e+""}}function xi(t){const[e,n]=t.getPosition(),s=t.input.split(`
`),r=Math.max(e-2,1),a=Math.min(e+3,s.length);return Ms(r,a+1).map(l=>{const h=l===e?">> ":"   ",c=et(String(l),String(a).length);let d=`${h}${c}| `;const f=l===e?`
`+et("^",n+d.length):"";return d+=s[l-1],d+=f,d}).join(`
`)}function vi(t,e){e.file&&(t+=`, file:${e.file}`);const[n,s]=e.getPosition();return t+=`, line:${n}, col:${s}`,t}const C=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],ki=1,tt=4,Hn=8,As=16,wi=32,ji=64,Ni=128;function Nt(t){const e=t.charCodeAt(0);return e>=128?!C[e]:!!(C[e]&ki)}C[160]=C[5760]=C[6158]=C[8192]=C[8193]=C[8194]=C[8195]=C[8196]=C[8197]=C[8198]=C[8199]=C[8200]=C[8201]=C[8202]=C[8232]=C[8233]=C[8239]=C[8287]=C[12288]=tt;C[8220]=C[8221]=Ni;function Y(t,e){if(!t){const n=typeof e=="function"?e():e||`expect ${t} to be true`;throw new yi(n)}}function Mt(t,e=`unexpected ${JSON.stringify(t)}`){Y(!t,e)}class Si extends De{equals(e){return D(S(e))}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return null}}class nt extends De{equals(e){return e instanceof nt?!1:(e=S(e),j(e)||V(e)?e.length===0:Rt(e)?Object.keys(e).length===0:!1)}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return""}static is(e){return e instanceof nt}}class dn extends nt{equals(e){return e===!1||D(S(e))?!0:j(e)?/^\s*$/.test(e):super.equals(e)}static is(e){return e instanceof dn}}class hn extends De{constructor(e,n,s){super(),this.i=0,this.length=e,this.name=`${s}-${n}`}next(){this.i++}index0(){return this.i}index(){return this.i+1}first(){return this.i===0}last(){return this.i===this.length-1}rindex(){return this.length-this.i}rindex0(){return this.length-this.i-1}valueOf(){return JSON.stringify(this)}}class Rs{constructor(){this.buffer=""}write(e){this.buffer+=m(e)}}class Ti{constructor(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")}}class Li{constructor(){this.buffer=""}write(e){e=S(e),typeof e!="string"&&this.buffer===""?this.buffer=e:this.buffer=m(this.buffer)+m(e)}}class Vn extends De{constructor(e=()=>""){super(),this.superBlockRender=e}*super(){const e=new Rs;return yield this.superBlockRender(e),e.buffer}}function le(t){return t&&H(t.equals)&&H(t.gt)&&H(t.geq)&&H(t.lt)&&H(t.leq)}const qn=new Si,zs={true:!0,false:!1,nil:qn,null:qn,empty:new nt,blank:new dn},Un=new WeakMap;function Wn(t){const e=Un.get(t);if(e)return e;const n={};for(const[s,r]of Object.entries(t)){let a=n;for(let o=0;o<s.length;o++){const l=s[o];a[l]=a[l]||{},o===s.length-1&&Nt(s[o])&&(a[l].needBoundary=!0),a=a[l]}a.data=r,a.end=!0}return Un.set(t,n),n}var Ft=function(){return Ft=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ft.apply(this,arguments)};function F(t,e,n,s){function r(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function l(d){try{c(s.next(d))}catch(f){o(f)}}function h(d){try{c(s.throw(d))}catch(f){o(f)}}function c(d){d.done?a(d.value):r(d.value).then(l,h)}c((s=s.apply(t,[])).next())})}function en(t,e){const n=e||t;return(s,...r)=>s?n(...r):t(...r)}function me(t){return F(this,void 0,void 0,function*(){if(!Et(t))return t;let e,n=!1,s="next";do{const r=t[s](e);n=!!r.done,e=r.value,s="next";try{Et(e)&&(e=me(e)),ri(e)&&(e=yield e)}catch(a){s="throw",e=a}}while(!n);return e})}function ge(t){if(!Et(t))return t;let e,n=!1,s="next";do{const r=t[s](e);if(n=!!r.done,e=r.value,s="next",Et(e))try{e=ge(e)}catch(a){s="throw",e=a}}while(!n);return e}const Ci=/%([-_0^#:]+)?(\d+)?([EO])?(.)/;function _i(t){return[31,Ei(t)?29:28,31,30,31,30,31,31,30,31,30,31]}function Ds(t){let e=0;for(let n=0;n<t.getMonth();++n)e+=_i(t)[n];return e+t.getDate()}function Yn(t,e){const n=Ds(t)+(e-t.getDay()),r=7-new Date(t.getFullYear(),0,1).getDay()+e;return String(Math.floor((n-r)/7)+1)}function Ei(t){const e=t.getFullYear();return!!(!(e&3)&&(e%100||e%400===0&&e))}function Mi(t){const e=t.getDate();if([11,12,13].includes(e))return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Fi(t){return parseInt(t.getFullYear().toString().substring(0,2),10)}const Oi={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},$i=new Set("aAbBceklpP");function Zn(t,e){const n=Math.abs(t.getTimezoneOffset()),s=Math.floor(n/60),r=n%60;return(t.getTimezoneOffset()>0?"-":"+")+et(s,2,"0")+(e.flags[":"]?":":"")+et(r,2,"0")}const tn={a:t=>t.getShortWeekdayName(),A:t=>t.getLongWeekdayName(),b:t=>t.getShortMonthName(),B:t=>t.getLongMonthName(),c:t=>t.toLocaleString(),C:t=>Fi(t),d:t=>t.getDate(),e:t=>t.getDate(),H:t=>t.getHours(),I:t=>String(t.getHours()%12||12),j:t=>Ds(t),k:t=>t.getHours(),l:t=>String(t.getHours()%12||12),L:t=>t.getMilliseconds(),m:t=>t.getMonth()+1,M:t=>t.getMinutes(),N:(t,e)=>{var n;const s=Number(e.width)||9,r=et(String(t.getMilliseconds()),3,"0").slice(0,s);return(n=e.memoryLimit)===null||n===void 0||n.use(s-r.length),li(r,s,"0")},p:t=>t.getHours()<12?"AM":"PM",P:t=>t.getHours()<12?"am":"pm",q:t=>Mi(t),s:t=>Math.round(t.getTime()/1e3),S:t=>t.getSeconds(),u:t=>t.getDay()||7,U:t=>Yn(t,0),w:t=>t.getDay(),W:t=>Yn(t,1),x:t=>t.toLocaleDateString(),X:t=>t.toLocaleTimeString(),y:t=>t.getFullYear().toString().slice(2,4),Y:t=>t.getFullYear(),z:Zn,Z:(t,e)=>t.getTimeZoneName()||Zn(t,e),t:()=>"	",n:()=>`
`,"%":()=>"%"};tn.h=tn.b;function St(t,e,n){let s="",r=e,a;for(;a=Ci.exec(r);)s+=r.slice(0,a.index),r=r.slice(a.index+a[0].length),s+=Ai(t,a,n);return s+r}function Ai(t,e,n){const[s,r="",a,o,l]=e,h=tn[l];if(!h)return s;const c={};for(const k of r)c[k]=!0;let d=String(h(t,{flags:c,width:a,modifier:o,memoryLimit:n})),f=$i.has(l)?" ":"0",y=Number(a)||Oi[l]||0;return c["^"]?d=d.toUpperCase():c["#"]&&(d=ci(d)),c._?f=" ":c[0]&&(f="0"),c["-"]&&(y=0),n==null||n.use(Number(y)-d.length),et(d,y,f)}function Ps(){return typeof Intl<"u"?Intl.DateTimeFormat:void 0}const Ri=6e4,zi=/([zZ]|([+-])(\d{2}):?(\d{2}))$/,Is=["January","February","March","April","May","June","July","August","September","October","November","December"],Di=Is.map(t=>t.slice(0,3)),Bs=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Pi=Bs.map(t=>t.slice(0,3));class ae{constructor(e,n,s){this.locale=n,this.DateTimeFormat=Ps(),this.date=new Date(e),this.timezoneFixed=s!==void 0,s===void 0&&(s=this.date.getTimezoneOffset()),this.timezoneOffset=j(s)?ae.getTimezoneOffset(s,this.date):s,this.timezoneName=j(s)?s:"";const r=(this.date.getTimezoneOffset()-this.timezoneOffset)*Ri,a=this.date.getTime()+r;this.displayDate=new Date(a)}getTime(){return this.displayDate.getTime()}getMilliseconds(){return this.displayDate.getMilliseconds()}getSeconds(){return this.displayDate.getSeconds()}getMinutes(){return this.displayDate.getMinutes()}getHours(){return this.displayDate.getHours()}getDay(){return this.displayDate.getDay()}getDate(){return this.displayDate.getDate()}getMonth(){return this.displayDate.getMonth()}getFullYear(){return this.displayDate.getFullYear()}toLocaleString(e,n){return n!=null&&n.timeZone?this.date.toLocaleString(e,n):this.displayDate.toLocaleString(e,n)}toLocaleTimeString(e){return this.displayDate.toLocaleTimeString(e)}toLocaleDateString(e){return this.displayDate.toLocaleDateString(e)}getTimezoneOffset(){return this.timezoneOffset}getTimeZoneName(){if(this.timezoneFixed)return this.timezoneName;if(this.DateTimeFormat)return this.DateTimeFormat().resolvedOptions().timeZone}getLongMonthName(){var e;return(e=this.format({month:"long"}))!==null&&e!==void 0?e:Is[this.getMonth()]}getShortMonthName(){var e;return(e=this.format({month:"short"}))!==null&&e!==void 0?e:Di[this.getMonth()]}getLongWeekdayName(){var e;return(e=this.format({weekday:"long"}))!==null&&e!==void 0?e:Bs[this.displayDate.getDay()]}getShortWeekdayName(){var e;return(e=this.format({weekday:"short"}))!==null&&e!==void 0?e:Pi[this.displayDate.getDay()]}valid(){return!isNaN(this.getTime())}format(e){return this.DateTimeFormat&&this.DateTimeFormat(this.locale,e).format(this.displayDate)}static createDateFixedToTimezone(e,n){const s=e.match(zi);if(s&&s[1]==="Z")return new ae(+new Date(e),n,0);if(s&&s[2]&&s[3]&&s[4]){const[,,r,a,o]=s,l=(r==="+"?-1:1)*(parseInt(a,10)*60+parseInt(o,10));return new ae(+new Date(e),n,l)}return new ae(e,n)}static getTimezoneOffset(e,n){const s=n.toLocaleString("en-US",{timeZone:e}),r=n.toLocaleString("en-US",{timeZone:"UTC"}),a=new Date(s);return(+new Date(r)-+a)/(60*1e3)}}class nn{constructor(e,n){this.base=0,this.message=`${e} limit exceeded`,this.limit=n}use(e){+e>0&&(Y(this.base+ +e<=this.limit,this.message),this.base+=+e)}check(e){+e>0&&Y(+e<=this.limit,this.message)}}class un extends ne{constructor(e,[n,s],r,a,o,l,h,c){super(e,r,a,o,c),this.trimLeft=!1,this.trimRight=!1;const d=r[n]==="-",f=r[s-1]==="-";let y=d?n+1:n,k=f?s-1:s;for(;y<k&&C[r.charCodeAt(y)]&tt;)y++;for(;k>y&&C[r.charCodeAt(k-1)]&tt;)k--;this.contentRange=[y,k],this.trimLeft=d||l,this.trimRight=f||h}get content(){return this.input.slice(this.contentRange[0],this.contentRange[1])}}class Gn extends un{constructor(e,n,s,r,a){const{trimTagLeft:o,trimTagRight:l,tagDelimiterLeft:h,tagDelimiterRight:c}=r,[d,f]=[n+h.length,s-c.length];super(E.Tag,[d,f],e,n,s,o,l,a),this.tokenizer=new ce(e,r.operators,a,this.contentRange),this.name=this.tokenizer.readTagName(),this.tokenizer.assert(this.name,"illegal tag syntax, tag name expected"),this.tokenizer.skipBlank(),this.args=this.tokenizer.input.slice(this.tokenizer.p,this.contentRange[1])}}class Ii extends un{constructor(e,n,s,r,a){const{trimOutputLeft:o,trimOutputRight:l,outputDelimiterLeft:h,outputDelimiterRight:c}=r,d=[n+h.length,s-c.length];super(E.Output,d,e,n,s,o,l,a)}}class Jn extends ne{constructor(e,n,s,r){super(E.HTML,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.trimLeft=0,this.trimRight=0}getContent(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)}}class Bi extends ne{constructor(e,n,s,r){super(E.Number,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=Number(this.getText())}}class Zt extends ne{constructor(e,n,s,r){super(E.Word,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=this.getText()}}class Hi extends ne{constructor(e,n,s,r){super(E.Literal,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.literal=this.getText(),this.content=zs[this.literal]}}const Kn={"==":2,"!=":2,">":2,"<":2,">=":2,"<=":2,contains:2,not:1,and:0,or:0},Vi={"==":0,"!=":0,">":0,"<":0,">=":0,"<=":0,contains:0,not:1,and:0,or:0};class qi extends ne{constructor(e,n,s,r){super(E.Operator,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.operator=this.getText()}getPrecedence(){return this.operator in Kn?Kn[this.operator]:1}}class Qn extends ne{constructor(e,n,s,r,a,o){super(E.PropertyAccess,s,r,a,o),this.variable=e,this.props=n}}class Hs extends ne{constructor(e,n,s,r,a,o){super(E.Filter,s,r,a,o),this.name=e,this.args=n}}class Ui extends ne{constructor(e,n,s,r,a,o){super(E.Hash,e,n,s,o),this.input=e,this.begin=n,this.end=s,this.name=r,this.value=a,this.file=o}}const Wi=/[\da-fA-F]/,Xn=/[0-7]/,es={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"};function ts(t){const e=t.charCodeAt(0);return e>=97?e-87:e>=65?e-55:e-48}function Yi(t){let e="";for(let n=1;n<t.length-1;n++){if(t[n]!=="\\"){e+=t[n];continue}if(es[t[n+1]]!==void 0)e+=es[t[++n]];else if(t[n+1]==="u"){let s=0,r=n+2;for(;r<=n+5&&Wi.test(t[r]);)s=s*16+ts(t[r++]);n=r-1,e+=String.fromCharCode(s)}else if(!Xn.test(t[n+1]))e+=t[++n];else{let s=n+1,r=0;for(;s<=n+3&&Xn.test(t[s]);)r=r*8+ts(t[s++]);n=s-1,e+=String.fromCharCode(r)}}return e}class Zi extends ne{constructor(e,n,s,r){super(E.Quoted,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=Yi(this.getText())}}class Gi extends ne{constructor(e,n,s,r,a,o){super(E.Range,e,n,s,o),this.input=e,this.begin=n,this.end=s,this.lhs=r,this.rhs=a,this.file=o}}class Ji extends un{constructor(e,n,s,r,a){super(E.Tag,[n,s],e,n,s,!1,!1,a),this.tokenizer=new ce(e,r.operators,a,this.contentRange),this.name=this.tokenizer.readTagName(),this.tokenizer.assert(this.name,"illegal liquid tag syntax"),this.tokenizer.skipBlank()}get args(){return this.tokenizer.input.slice(this.tokenizer.p,this.contentRange[1])}}class Ki extends ne{constructor(e,n,s,r,a,o){super(E.FilteredValue,s,r,a,o),this.initial=e,this.filters=n,this.input=s,this.begin=r,this.end=a,this.file=o}}const Qi={now:()=>Date.now()};function sn(){return typeof global=="object"&&global.performance||typeof window=="object"&&window.performance||Qi}class Xi{renderTemplatesToNodeStream(e,n){const s=new Ti;return Promise.resolve().then(()=>me(this.renderTemplates(e,n,s))).then(()=>s.end(),r=>s.error(r)),s.stream}*renderTemplates(e,n,s){s||(s=n.opts.keepOutputType?new Li:new Rs),n.renderLimit.check(sn().now());const r=[];for(const a of e){n.renderLimit.check(sn().now());try{const o=yield a.render(n,s);if(o&&s.write(o),n.breakCalled||n.continueCalled)break}catch(o){const l=Pe.is(o)?o:new mi(o,a);if(n.opts.catchAllErrors)r.push(l);else throw l}}if(r.length)throw new $s(r);return s.buffer}}class ea{constructor(e){this.postfix=[...ra(e)]}*evaluate(e,n){Y(e,"unable to evaluate: context not defined");const s=[];for(const r of this.postfix)if(Gs(r)){const a=s.pop();let o;if(Vi[r.operator]===1)o=yield e.opts.operators[r.operator](a,e);else{const l=s.pop();o=yield e.opts.operators[r.operator](l,a,e)}s.push(o)}else s.push(yield I(r,e,n));return s[0]}valid(){return!!this.postfix.length}}function*I(t,e,n=!1){if(t){if("content"in t)return t.content;if($t(t))return yield ta(t,e,n);if(Js(t))return yield sa(t,e)}}function*ta(t,e,n){const s=[];for(const r of t.props)s.push(yield I(r,e,!1));try{if(t.variable){const r=yield I(t.variable,e,n);return yield e._getFromScope(r,s)}else return yield e._get(s)}catch(r){if(n&&r.name==="InternalUndefinedVariableError")return null;throw new gi(r,t)}}function na(t){return t.content}function*sa(t,e){const n=yield I(t.lhs,e),s=yield I(t.rhs,e);return e.memoryLimit.use(s-n+1),Ms(+n,+s+1)}function*ra(t){const e=[];for(const n of t)if(Gs(n)){for(;e.length&&e[e.length-1].getPrecedence()>n.getPrecedence();)yield e.pop();e.push(n)}else yield n;for(;e.length;)yield e.pop()}function Ae(t,e){return!Dt(t,e)}function Dt(t,e){return t=S(t),e.opts.jsTruthy?!t:t===!1||t===void 0||t===null}const ia={"==":be,"!=":(t,e)=>!be(t,e),">":(t,e)=>le(t)?t.gt(e):le(e)?e.lt(t):S(t)>S(e),"<":(t,e)=>le(t)?t.lt(e):le(e)?e.gt(t):S(t)<S(e),">=":(t,e)=>le(t)?t.geq(e):le(e)?e.leq(t):S(t)>=S(e),"<=":(t,e)=>le(t)?t.leq(e):le(e)?e.geq(t):S(t)<=S(e),contains:(t,e)=>(t=S(t),V(t)?t.some(n=>be(n,e)):H(t==null?void 0:t.indexOf)?t.indexOf(S(e))>-1:!1),not:(t,e)=>Dt(S(t),e),and:(t,e,n)=>Ae(S(t),n)&&Ae(S(e),n),or:(t,e,n)=>Ae(S(t),n)||Ae(S(e),n)};function be(t,e){return le(t)?t.equals(e):le(e)?e.equals(t):(t=S(t),e=S(e),V(t)?V(e)&&aa(t,e):t===e)}function aa(t,e){return t.length!==e.length?!1:!t.some((n,s)=>!be(n,e[s]))}function oa(t,e){return t.some(n=>be(n,e))}class Gt{constructor(e,n,s,r){this.key=e,this.value=n,this.next=s,this.prev=r}}class ns{constructor(e,n=0){this.limit=e,this.size=n,this.cache={},this.head=new Gt("HEAD",null,null,null),this.tail=new Gt("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}write(e,n){if(this.cache[e])this.cache[e].value=n;else{const s=new Gt(e,n,this.head.next,this.head);this.head.next.prev=s,this.head.next=s,this.cache[e]=s,this.size++,this.ensureLimit()}}read(e){if(!this.cache[e])return;const{value:n}=this.cache[e];return this.remove(e),this.write(e,n),n}remove(e){const n=this.cache[e];n.prev.next=n.next,n.next.prev=n.prev,delete this.cache[e],this.size--}clear(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}}ensureLimit(){this.size>this.limit&&this.remove(this.tail.prev.key)}}function Vs(t,e){const n=document.createElement("base");n.href=t;const s=document.getElementsByTagName("head")[0];s.insertBefore(n,s.firstChild);const r=document.createElement("a");r.href=e;const a=r.href;return s.removeChild(n),a}function la(t,e,n){return t.length&&oi(t)!=="/"&&(t+="/"),Vs(t,e).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,(r,a,o)=>{const l=o.split("/").pop();return/\.\w+$/.test(l)?r:a+o+n})}function ca(t){return F(this,void 0,void 0,function*(){return new Promise((e,n)=>{const s=new XMLHttpRequest;s.onload=()=>{s.status>=200&&s.status<300?e(s.responseText):n(new Error(s.statusText))},s.onerror=()=>{n(new Error("An error occurred whilst receiving the response."))},s.open("GET",t),s.send()})})}function da(t){const e=new XMLHttpRequest;if(e.open("GET",t,!1),e.send(),e.status<200||e.status>=300)throw new Error(e.statusText);return e.responseText}function ha(t){return F(this,void 0,void 0,function*(){return!0})}function ua(t){return!0}function pa(t){return Vs(t,".")}const fa="/";var ma=Object.freeze({__proto__:null,resolve:la,readFile:ca,readFileSync:da,exists:ha,existsSync:ua,dirname:pa,sep:fa});function rn(t,e){typeof e=="string"?t.use(e.length):e===null||typeof e=="number"||typeof e=="boolean"?t.use(JSON.stringify(e).length):Array.isArray(e)?t.use(e.length+1):typeof e=="object"&&t.use(2)}function ga(t,e,...n){return t=S(t),V(t)||j(t)?t.length?t:e:t===!1&&new Map(n).get("allow_false")?!1:Dt(t,this.context)?e:t}function ss(t,e=0){const n=this.context.memoryLimit;return JSON.stringify(t,(s,r)=>(rn(n,r),r),e)}function ba(t,e=0){const n=this.context.memoryLimit,s=[];return JSON.stringify(t,function(r,a){if(typeof a!="object"||a===null)return rn(n,a),a;for(;s.length>0&&s[s.length-1]!==this;)s.pop();return s.includes(a)?(n.use(10),"[Circular]"):(s.push(a),rn(n,a),a)},e)}function ya(t){return Number(t)}const xa={raw:!0,handler:Os};var qs={default:ga,raw:xa,jsonify:ss,to_integer:ya,json:ss,inspect:ba};const va={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},ka={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function Pt(t){return t=m(t),this.context.memoryLimit.use(t.length),t.replace(/&|<|>|"|'/g,e=>va[e])}function wa(t){return Pt.call(this,t)}function ja(t){return t=m(t),this.context.memoryLimit.use(t.length),t.replace(/&(amp|lt|gt|#34|#39);/g,e=>ka[e])}function Na(t){return Pt.call(this,ja.call(this,t))}function Sa(t){const e=m(t);return this.context.memoryLimit.use(e.length),e.replace(/\r?\n/gm,`<br />
`)}function Ta(t){const e=m(t);this.context.memoryLimit.use(e.length);const n=new Map([["<script","<\/script>"],["<style","</style>"],["<!--","-->"],["<",">"]]);let s="",r=0;for(;r<e.length;){const a=e.indexOf("<",r);if(a<0)return s+e.slice(r);s+=e.slice(r,a);for(const[o,l]of n){if(!e.startsWith(o,a))continue;const h=e.indexOf(l,a+o.length);if(h>=0){r=h+l.length;break}n.delete(o)}if(r<=a)return s+e.slice(a)}return s}var La=Object.freeze({__proto__:null,escape:Pt,xml_escape:wa,escape_once:Na,newline_to_br:Sa,strip_html:Ta});class Ca{constructor(e){this.mapping=e,this.sep="/"}exists(e){return F(this,void 0,void 0,function*(){return this.existsSync(e)})}existsSync(e){return!D(this.mapping[e])}readFile(e){return F(this,void 0,void 0,function*(){return this.readFileSync(e)})}readFileSync(e){const n=this.mapping[e];if(D(n))throw new Error(`ENOENT: ${e}`);return n}dirname(e){const n=e.split(this.sep);return n.pop(),n.join(this.sep)}resolve(e,n,s){if(n+=s,e===".")return n;const r=e.split(/\/+/);for(const a of n.split(this.sep))a==="."||a===""||(a===".."?(r.length>1||r[0]!=="")&&r.pop():r.push(a));return r.join(this.sep)}}const Ke={root:["."],layouts:["."],partials:["."],relativeReference:!0,jekyllInclude:!1,keyValueSeparator:":",cache:void 0,extname:"",fs:ma,dynamicPartials:!0,jsTruthy:!1,dateFormat:"%A, %B %-e, %Y at %-l:%M %P %z",locale:"",trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,ownPropertyOnly:!0,lenientIf:!1,globals:{},keepOutputType:!1,operators:ia,memoryLimit:1/0,parseLimit:1/0,renderLimit:1/0};function _a(t){var e,n;if(t.hasOwnProperty("root")&&(t.hasOwnProperty("partials")||(t.partials=t.root),t.hasOwnProperty("layouts")||(t.layouts=t.root)),t.hasOwnProperty("cache")){let s;typeof t.cache=="number"?s=t.cache>0?new ns(t.cache):void 0:typeof t.cache=="object"?s=t.cache:s=t.cache?new ns(1024):void 0,t.cache=s}return t=Object.assign(Object.assign(Object.assign({},Ke),t.jekyllInclude?{dynamicPartials:!1}:{}),t),(!t.fs.dirname||!t.fs.sep)&&t.relativeReference&&(console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning"),t.relativeReference=!1),t.root=Tt(t.root),t.partials=Tt(t.partials),t.layouts=Tt(t.layouts),t.outputEscape=t.outputEscape&&Ea(t.outputEscape),t.locale||(t.locale=(n=(e=Ps())===null||e===void 0?void 0:e().resolvedOptions().locale)!==null&&n!==void 0?n:"en-US"),t.templates&&(t.fs=new Ca(t.templates),t.relativeReference=!0,t.root=t.partials=t.layouts="."),t}function Ea(t){return t==="escape"?Pt:t==="json"?qs.json:(Y(H(t),"`outputEscape` need to be of type string or function"),t)}function Tt(t){let e=[];return V(t)&&(e=t),j(t)&&(e=[t]),e}function Ma(t,e){let n=!1;for(let s=0;s<t.length;s++){const r=t[s];Ia(r)&&(!n&&r.trimLeft&&Fa(t[s-1],e.greedy),Ie(r)&&(r.name==="raw"?n=!0:r.name==="endraw"&&(n=!1)),!n&&r.trimRight&&Oa(t[s+1],e.greedy))}}function Fa(t,e){if(!t||!fn(t))return;const n=e?tt:As;for(;C[t.input.charCodeAt(t.end-1-t.trimRight)]&n;)t.trimRight++}function Oa(t,e){if(!t||!fn(t))return;const n=e?tt:As;for(;C[t.input.charCodeAt(t.begin+t.trimLeft)]&n;)t.trimLeft++;t.input.charAt(t.begin+t.trimLeft)===`
`&&t.trimLeft++}class ce{constructor(e,n=Ke.operators,s,r){this.input=e,this.file=s,this.rawBeginAt=-1,this.p=r?r[0]:0,this.N=r?r[1]:e.length,this.opTrie=Wn(n),this.literalTrie=Wn(zs)}readExpression(){return new ea(this.readExpressionTokens())}*readExpressionTokens(){for(;this.p<this.N;){const e=this.readOperator();if(e){yield e;continue}const n=this.readValue();if(n){yield n;continue}return}}readOperator(){this.skipBlank();const e=this.matchTrie(this.opTrie);if(e!==-1)return new qi(this.input,this.p,this.p=e,this.file)}matchTrie(e){let n=e,s=this.p,r;for(;n[this.input[s]]&&s<this.N;)n=n[this.input[s++]],n.end&&(r=n);return!r||r.needBoundary&&Nt(this.peek(s-this.p))?-1:s}readFilteredValue(){const e=this.p,n=this.readExpression();this.assert(n.valid(),`invalid value expression: ${this.snapshot()}`);const s=this.readFilters();return new Ki(n,s,this.input,e,this.p,this.file)}readFilters(){const e=[];for(;;){const n=this.readFilter();if(!n)return e;e.push(n)}}readFilter(){if(this.skipBlank(),this.end())return null;this.assert(this.read()==="|",'expected "|" before filter');const e=this.readIdentifier();if(!e.size())return this.assert(this.end(),"expected filter name"),null;const n=[];if(this.skipBlank(),this.peek()===":")do{++this.p;const s=this.readFilterArg();s&&n.push(s),this.skipBlank(),this.assert(this.end()||this.peek()===","||this.peek()==="|",()=>`unexpected character ${this.snapshot()}`)}while(this.peek()===",");else if(!(this.peek()==="|"||this.end()))throw this.error('expected ":" after filter name');return new Hs(e.getText(),n,this.input,e.begin,this.p,this.file)}readFilterArg(){const e=this.readValue();if(!e)return;if(this.skipBlank(),this.peek()!==":")return e;++this.p;const n=this.readValue();return[e.getText(),n]}readTopLevelTokens(e=Ke){const n=[];for(;this.p<this.N;){const s=this.readTopLevelToken(e);n.push(s)}return Ma(n,e),n}readTopLevelToken(e){const{tagDelimiterLeft:n,outputDelimiterLeft:s}=e;return this.rawBeginAt>-1?this.readEndrawOrRawContent(e):this.match(n)?this.readTagToken(e):this.match(s)?this.readOutputToken(e):this.readHTMLToken([n,s])}readHTMLToken(e){const n=this.p;for(;this.p<this.N&&!e.some(s=>this.match(s));)++this.p;return new Jn(this.input,n,this.p,this.file)}readTagToken(e){const{file:n,input:s}=this,r=this.p;if(this.readToDelimiter(e.tagDelimiterRight)===-1)throw this.error(`tag ${this.snapshot(r)} not closed`,r);const a=new Gn(s,r,this.p,e,n);return a.name==="raw"&&(this.rawBeginAt=r),a}readToDelimiter(e,n=!1){for(this.skipBlank();this.p<this.N;){if(n&&this.peekType()&Hn){this.readQuoted();continue}if(++this.p,this.rmatch(e))return this.p}return-1}readOutputToken(e=Ke){const{file:n,input:s}=this,{outputDelimiterRight:r}=e,a=this.p;if(this.readToDelimiter(r,!0)===-1)throw this.error(`output ${this.snapshot(a)} not closed`,a);return new Ii(s,a,this.p,e,n)}readEndrawOrRawContent(e){const{tagDelimiterLeft:n,tagDelimiterRight:s}=e,r=this.p;let a=this.readTo(n)-n.length;for(;this.p<this.N;){if(this.readIdentifier().getText()!=="endraw"){a=this.readTo(n)-n.length;continue}for(;this.p<=this.N;){if(this.rmatch(s)){const o=this.p;return r===a?(this.rawBeginAt=-1,new Gn(this.input,r,o,e,this.file)):(this.p=a,new Jn(this.input,r,a,this.file))}if(this.rmatch(n))break;this.p++}}throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`,r)}readLiquidTagTokens(e=Ke){const n=[];for(;this.p<this.N;){const s=this.readLiquidTagToken(e);s&&n.push(s)}return n}readLiquidTagToken(e){if(this.skipBlank(),this.end())return;const n=this.p;this.readToDelimiter(`
`);const s=this.p;return new Ji(this.input,n,s,e,this.file)}error(e,n=this.p){return new pi(e,new Zt(this.input,n,this.N,this.file))}assert(e,n,s){if(!e)throw this.error(typeof n=="function"?n():n,s)}snapshot(e=this.p){return JSON.stringify(di(this.input.slice(e,this.N),32))}readWord(){return this.readIdentifier()}readIdentifier(){this.skipBlank();const e=this.p;for(;!this.end()&&Nt(this.peek());)++this.p;return new Zt(this.input,e,this.p,this.file)}readNonEmptyIdentifier(){const e=this.readIdentifier();return e.size()?e:void 0}readTagName(){return this.skipBlank(),this.input[this.p]==="#"?this.input.slice(this.p,++this.p):this.readIdentifier().getText()}readHashes(e){const n=[];for(;;){const s=this.readHash(e);if(!s)return n;n.push(s)}}readHash(e){this.skipBlank(),this.peek()===","&&++this.p;const n=this.p,s=this.readNonEmptyIdentifier();if(!s)return;let r;this.skipBlank();const a=j(e)?e:e?"=":":";return this.peek()===a&&(++this.p,r=this.readValue()),new Ui(this.input,n,this.p,s,r,this.file)}remaining(){return this.input.slice(this.p,this.N)}advance(e=1){this.p+=e}end(){return this.p>=this.N}read(){return this.input[this.p++]}readTo(e){for(;this.p<this.N;)if(++this.p,this.rmatch(e))return this.p;return-1}readValue(){this.skipBlank();const e=this.p,n=this.readLiteral()||this.readQuoted()||this.readRange()||this.readNumber(),s=this.readProperties(!n);return s.length?new Qn(n,s,this.input,e,this.p):n}readScopeValue(){this.skipBlank();const e=this.p,n=this.readProperties();if(n.length)return new Qn(void 0,n,this.input,e,this.p)}readProperties(e=!0){const n=[];for(;;){if(this.peek()==="["){this.p++;const s=this.readValue()||new Zt(this.input,this.p,this.p,this.file);this.assert(this.readTo("]")!==-1,"[ not closed"),n.push(s);continue}if(e&&!n.length){const s=this.readNonEmptyIdentifier();if(s){n.push(s);continue}}if(this.peek()==="."&&this.peek(1)!=="."){this.p++;const s=this.readNonEmptyIdentifier();if(!s)break;n.push(s);continue}break}return n}readNumber(){this.skipBlank();let e=!1,n=!1,s=0;for(this.peekType()&ji&&s++;this.p+s<=this.N;)if(this.peekType(s)&wi)n=!0,s++;else if(this.peek(s)==="."&&this.peek(s+1)!=="."){if(e||!n)return;e=!0,s++}else break;if(n&&!Nt(this.peek(s))){const r=new Bi(this.input,this.p,this.p+s,this.file);return this.advance(s),r}}readLiteral(){this.skipBlank();const e=this.matchTrie(this.literalTrie);if(e===-1)return;const n=new Hi(this.input,this.p,e,this.file);return this.p=e,n}readRange(){this.skipBlank();const e=this.p;if(this.peek()!=="(")return;++this.p;const n=this.readValueOrThrow();this.skipBlank(),this.assert(this.read()==="."&&this.read()===".","invalid range syntax");const s=this.readValueOrThrow();return this.skipBlank(),this.assert(this.read()===")","invalid range syntax"),new Gi(this.input,e,this.p,n,s,this.file)}readValueOrThrow(){const e=this.readValue();return this.assert(e,()=>`unexpected token ${this.snapshot()}, value expected`),e}readQuoted(){this.skipBlank();const e=this.p;if(!(this.peekType()&Hn))return;++this.p;let n=!1;for(;this.p<this.N&&(++this.p,!(this.input[this.p-1]===this.input[e]&&!n));)n?n=!1:this.input[this.p-1]==="\\"&&(n=!0);return new Zi(this.input,e,this.p,this.file)}*readFileNameTemplate(e){const{outputDelimiterLeft:n}=e,s=[","," ","\r",`
`,"	",n],r=new Set(s);for(;this.p<this.N&&!r.has(this.peek());)yield this.match(n)?this.readOutputToken(e):this.readHTMLToken(s)}match(e){for(let n=0;n<e.length;n++)if(e[n]!==this.input[this.p+n])return!1;return!0}rmatch(e){for(let n=0;n<e.length;n++)if(e[e.length-1-n]!==this.input[this.p-1-n])return!1;return!0}peekType(e=0){return this.p+e>=this.N?0:C[this.input.charCodeAt(this.p+e)]}peek(e=0){return this.p+e>=this.N?"":this.input[this.p+e]}skipBlank(){for(;this.peekType()&tt;)++this.p}}class $a{constructor(e,n){this.handlers={},this.stopRequested=!1,this.tokens=e,this.parseToken=n}on(e,n){return this.handlers[e]=n,this}trigger(e,n){const s=this.handlers[e];return s?(s.call(this,n),!0):!1}start(){this.trigger("start");let e;for(;!this.stopRequested&&(e=this.tokens.shift());){if(this.trigger("token",e)||Ie(e)&&this.trigger(`tag:${e.name}`,e))continue;const n=this.parseToken(e,this.tokens);this.trigger("template",n)}return this.stopRequested||this.trigger("end"),this}stop(){return this.stopRequested=!0,this}}class pn{constructor(e){this.token=e}}class R extends pn{constructor(e,n,s){super(e),this.name=e.name,this.liquid=s,this.tokenizer=e.tokenizer}}class rt{constructor(e,n){this.hash={};const s=e instanceof ce?e:new ce(e,{});for(const r of s.readHashes(n))this.hash[r.name.content]=r.value}*render(e){const n={};for(const s of Object.keys(this.hash))n[s]=this.hash[s]===void 0?!0:yield I(this.hash[s],e);return n}}function Aa(t){return class extends R{constructor(e,n,s){super(e,n,s),H(t.parse)&&t.parse.call(this,e,n)}*render(e,n){const s=yield new rt(this.token.args,e.opts.keyValueSeparator).render(e);return yield t.render.call(this,e,n,s)}}}function Us(t){return V(t)}class Ws{constructor(e,n,s){this.token=e,this.name=e.name,this.handler=H(n)?n:H(n==null?void 0:n.handler)?n.handler:Os,this.raw=!H(n)&&!!(n!=null&&n.raw),this.args=e.args,this.liquid=s}*render(e,n){const s=[];for(const r of this.args)Us(r)?s.push([r[0],yield I(r[1],n)]):s.push(yield I(r,n));return yield this.handler.apply({context:n,token:this.token,liquid:this.liquid},[e,...s])}}class ee{constructor(e,n){this.filters=[];const s=typeof e=="string"?new ce(e,n.options.operators).readFilteredValue():e;this.initial=s.initial,this.filters=s.filters.map(r=>new Ws(r,this.getFilter(n,r.name),n))}*value(e,n){n=n||e.opts.lenientIf&&this.filters.length>0&&this.filters[0].name==="default";let s=yield this.initial.evaluate(e,n);for(const r of this.filters)s=yield r.render(s,e);return s}getFilter(e,n){const s=e.filters[n];return Y(s||!e.options.strictFilters,()=>`undefined filter: ${n}`),s}}class Ra extends pn{constructor(e,n){var s;super(e);const r=new ce(e.input,n.options.operators,e.file,e.contentRange);this.value=new ee(r.readFilteredValue(),n);const a=this.value.filters,o=n.options.outputEscape;if(!(!((s=a[a.length-1])===null||s===void 0)&&s.raw)&&o){const l=new Hs(toString.call(o),[],"",0,0);a.push(new Ws(l,o,n))}}*render(e,n){const s=yield this.value.value(e,!1);n.write(s)}*arguments(){yield this.value}}class za extends pn{constructor(e){super(e),this.str=e.getContent()}*render(e,n){n.write(this.str)}}class ze{constructor(e,n){this.segments=e,this.location=n}toString(){return Ot(this.segments,!0)}toArray(){function*e(...n){for(const s of n)s instanceof ze?yield Array.from(e(...s.segments)):yield s}return Array.from(e(...this.segments))}}class Jt{constructor(){this.map=new Map}get(e){const n=Ot([e.segments[0]]);return this.map.has(n)||this.map.set(n,[]),this.map.get(n)}has(e){return this.map.has(Ot([e.segments[0]]))}push(e){this.get(e).push(e)}asObject(){return Object.fromEntries(this.map)}}const Ys={partials:!0};function*Zs(t,e,n){const s=new Jt,r=new Jt,a=new Jt,o=new rs(new Set),l=new Set;function h(d,f){s.push(d);const y=f.alias(d);if(y!==void 0){const k=y.segments[0];j(k)&&!o.has(k)&&r.push(y)}else{const k=d.segments[0];j(k)&&!f.has(k)&&r.push(d)}for(const k of d.segments)k instanceof ze&&h(k,f)}function*c(d,f){if(d.arguments)for(const y of d.arguments())for(const k of is(y))h(k,f);if(d.localScope)for(const y of d.localScope()){f.add(y.content),f.deleteAlias(y.content);const[k,z]=y.getPosition();a.push(new ze([y.content],{row:k,col:z,file:y.file}))}if(d.children)if(d.partialScope){const y=d.partialScope();if(y===void 0){for(const v of yield d.children(e,n))yield c(v,f);return}if(l.has(y.name))return;const k=new Set,z=y.isolated?new rs(k):f.push(k);for(const v of y.scope)if(j(v))k.add(v);else{const[Z,K]=v;k.add(Z);const w=Array.from(is(K));w.length&&z.setAlias(Z,w[0].segments)}for(const v of yield d.children(e,n))yield c(v,z),l.add(y.name);z.pop()}else{d.blockScope&&f.push(new Set(d.blockScope()));for(const y of yield d.children(e,n))yield c(y,f);d.blockScope&&f.pop()}}for(const d of t)yield c(d,o);return{variables:s.asObject(),globals:r.asObject(),locals:a.asObject()}}function ke(t,e={}){const n=Object.assign(Object.assign({},Ys),e);return me(Zs(t,n.partials,!1))}function we(t,e={}){const n=Object.assign(Object.assign({},Ys),e);return ge(Zs(t,n.partials,!0))}class rs{constructor(e){this.stack=[{names:e,aliases:new Map}]}has(e){for(const n of this.stack)if(n.names.has(e))return!0;return!1}push(e){return this.stack.push({names:e,aliases:new Map}),this}pop(){var e;return(e=this.stack.pop())===null||e===void 0?void 0:e.names}add(e){this.stack[0].names.add(e)}alias(e){const n=e.segments[0];if(!j(n))return;const s=this.getAlias(n);if(s!==void 0)return new ze([...s,...e.segments.slice(1)],e.location)}setAlias(e,n){this.stack[this.stack.length-1].aliases.set(e,n)}deleteAlias(e){this.stack[this.stack.length-1].aliases.delete(e)}getAlias(e){for(const n of this.stack){if(n.aliases.has(e))return n.aliases.get(e);if(n.names.has(e))return}}}function*is(t){X(t)?yield*Xe(t):t instanceof ee&&(yield*Da(t))}function*Da(t){for(const e of t.initial.postfix)X(e)&&(yield*Xe(e));for(const e of t.filters)for(const n of e.args)Us(n)&&n[1]?yield*Xe(n[1]):X(n)&&(yield*Xe(n))}function*Xe(t){Js(t)?(yield*Xe(t.lhs),yield*Xe(t.rhs)):$t(t)&&(yield an(t))}function an(t){const e=[];let n=t.file;const s=t.props[0];n=n||s.file,on(s)||os(s)||ls(s)?e.push(s.content):$t(s)&&e.push(...an(s).segments);for(const o of t.props.slice(1))n=n||o.file,on(o)||os(o)||ls(o)?e.push(o.content):$t(o)&&e.push(an(o));const[r,a]=t.getPosition();return new ze(e,{row:r,col:a,file:n})}const as=/^[\u0080-\uFFFFa-zA-Z_][\u0080-\uFFFFa-zA-Z0-9_-]*$/;function Ot(t,e=!1){const n=[],s=t[0];j(s)&&(!e||s.match(as)?n.push(`${s}`):n.push(`['${s}']`));for(const r of t.slice(1))r instanceof ze?n.push(`[${Ot(r.segments)}]`):j(r)?r.match(as)?n.push(`.${r}`):n.push(`['${r}']`):n.push(`[${r}]`);return n.join("")}var st;(function(t){t.Partials="partials",t.Layouts="layouts",t.Root="root"})(st||(st={}));class Pa{constructor(e){var n,s,r,a;if(this.options=e,e.relativeReference){const l=e.fs.sep;Y(l,"`fs.sep` is required for relative reference");const h=["."+l,".."+l,"./","../"];this.shouldLoadRelative=c=>h.some(d=>c.startsWith(d))}else this.shouldLoadRelative=l=>!1;const o=e.fs;this.contains=en(((n=o.contains)===null||n===void 0?void 0:n.bind(o))||(()=>F(this,void 0,void 0,function*(){return!0})),((s=o.containsSync)===null||s===void 0?void 0:s.bind(o))||(()=>!0)),this.exists=en(((r=o.exists)===null||r===void 0?void 0:r.bind(o))||(()=>F(this,void 0,void 0,function*(){return!1})),(a=o.existsSync)===null||a===void 0?void 0:a.bind(o))}*lookup(e,n,s,r){const a=this.options[n];for(const o of this.candidates(e,a,r)){let l=!1;for(const h of a)if(yield this.contains(!!s,h,o)){l=!0;break}if(l&&(yield this.exists(!!s,o)))return o}throw this.lookupError(e,a)}*candidates(e,n,s){const{fs:r,extname:a}=this.options;this.shouldLoadRelative(e)&&s&&(yield r.resolve(this.dirname(s),e,a));for(const o of n)yield r.resolve(o,e,a);if(r.fallback!==void 0){const o=r.fallback(e);o!==void 0&&(yield o)}}dirname(e){const n=this.options.fs;return Y(n.dirname,"`fs.dirname` is required for relative reference"),n.dirname(e)}lookupError(e,n){const s=new Error("ENOENT");return s.message=`ENOENT: Failed to lookup "${e}" in "${n}"`,s.code="ENOENT",s}}class Fe{constructor(e){var n,s;this.liquid=e,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new Pa(this.liquid.options),this.parseLimit=new nn("parse length",e.options.parseLimit),this.readFile=en(((n=this.fs.readFile)===null||n===void 0?void 0:n.bind(this.fs))||(()=>F(this,void 0,void 0,function*(){throw new Error("readFile not implemented")})),(s=this.fs.readFileSync)===null||s===void 0?void 0:s.bind(this.fs))}parse(e,n){e=String(e),this.parseLimit.use(e.length);const r=new ce(e,this.liquid.options.operators,n).readTopLevelTokens(this.liquid.options);return this.parseTokens(r)}parseTokens(e){let n;const s=[],r=[];for(;n=e.shift();)try{s.push(this.parseToken(n,e))}catch(a){if(this.liquid.options.catchAllErrors)r.push(a);else throw a}if(r.length)throw new $s(r);return s}parseToken(e,n){try{if(Ie(e)){const s=this.liquid.tags[e.name];return Y(s,`tag "${e.name}" not found`),new s(e,n,this.liquid,this)}return Ba(e)?new Ra(e,this.liquid):new za(e)}catch(s){throw Pe.is(s)?s:new fi(s,e)}}parseStream(e){return new $a(e,(n,s)=>this.parseToken(n,s))}*_parseFileCached(e,n,s=st.Root,r){const a=this.cache,o=this.loader.shouldLoadRelative(e)?r+","+e:s+":"+e,l=yield a.read(o);if(l)return l;const h=this._parseFile(e,n,s,r),c=n?yield h:me(h);a.write(o,c);try{return yield c}catch(d){throw a.remove(o),d}}*_parseFile(e,n,s=st.Root,r){const a=yield this.loader.lookup(e,s,n,r);return this.parse(yield this.readFile(!!n,a),a)}}var E;(function(t){t[t.Number=1]="Number",t[t.Literal=2]="Literal",t[t.Tag=4]="Tag",t[t.Output=8]="Output",t[t.HTML=16]="HTML",t[t.Filter=32]="Filter",t[t.Hash=64]="Hash",t[t.PropertyAccess=128]="PropertyAccess",t[t.Word=256]="Word",t[t.Range=512]="Range",t[t.Quoted=1024]="Quoted",t[t.Operator=2048]="Operator",t[t.FilteredValue=4096]="FilteredValue",t[t.Delimited=12]="Delimited"})(E||(E={}));function Ia(t){return!!(oe(t)&E.Delimited)}function Gs(t){return oe(t)===E.Operator}function fn(t){return oe(t)===E.HTML}function Ba(t){return oe(t)===E.Output}function Ie(t){return oe(t)===E.Tag}function on(t){return oe(t)===E.Quoted}function os(t){return oe(t)===E.Number}function $t(t){return oe(t)===E.PropertyAccess}function ls(t){return oe(t)===E.Word}function Js(t){return oe(t)===E.Range}function X(t){return(oe(t)&1667)>0}function oe(t){return t?t.kind:-1}function je(t){const e=Object.create(null);return t&&Object.assign(e,t),e}class $e{constructor(e={},n=Ke,s={},{memoryLimit:r,renderLimit:a}={}){var o,l,h,c,d;this.scopes=[je()],this.registers={},this.breakCalled=!1,this.continueCalled=!1,this.sync=!!s.sync,this.opts=n,this.globals=(o=s.globals)!==null&&o!==void 0?o:n.globals,this.environments=Rt(e)?e:Object(e),this.strictVariables=(l=s.strictVariables)!==null&&l!==void 0?l:this.opts.strictVariables,this.ownPropertyOnly=(h=s.ownPropertyOnly)!==null&&h!==void 0?h:n.ownPropertyOnly,this.memoryLimit=r??new nn("memory alloc",(c=s.memoryLimit)!==null&&c!==void 0?c:n.memoryLimit),this.renderLimit=a??new nn("template render",sn().now()+((d=s.renderLimit)!==null&&d!==void 0?d:n.renderLimit))}getRegister(e,n=void 0){return this.registers[e]=this.registers[e]||n}setRegister(e,n){return this.registers[e]=n}saveRegister(...e){return e.map(n=>[n,this.getRegister(n)])}restoreRegister(e){return e.forEach(([n,s])=>this.setRegister(n,s))}getAll(){return[this.globals,this.environments,...this.scopes].reduce((e,n)=>Ft(e,n),{})}get(e){return this.getSync(e)}getSync(e){return ge(this._get(e))}*_get(e){const n=this.findScope(e[0]);return yield this._getFromScope(n,e)}getFromScope(e,n){return ge(this._getFromScope(e,n))}*_getFromScope(e,n,s=this.strictVariables){j(n)&&(n=n.split("."));for(let r=0;r<n.length;r++)if(e=yield this.readProperty(e,n[r]),s&&ii(e))throw new bi(n.slice(0,r+1).join("."));return e}push(e){return this.scopes.push(e)}pop(){return this.scopes.pop()}bottom(){return this.scopes[0]}spawn(e={}){return new $e(e,this.opts,{sync:this.sync,globals:this.globals,strictVariables:this.strictVariables,ownPropertyOnly:this.ownPropertyOnly},{renderLimit:this.renderLimit,memoryLimit:this.memoryLimit})}findScope(e){for(let n=this.scopes.length-1;n>=0;n--){const s=this.scopes[n];if(e in s)return s}return e in this.environments?this.environments:this.globals}readProperty(e,n){if(e=_s(e),n=S(n),D(e))return e;if(V(e)&&ut(n))return dt(e,n,this.ownPropertyOnly);const s=mn(e,n,this.ownPropertyOnly);return s===void 0&&e instanceof De?e.liquidMethodMissing(n,this):H(s)?s.call(e):n==="size"?qa(e):n==="first"?Ha(e,this.ownPropertyOnly):n==="last"?Va(e,this.ownPropertyOnly):s}}function mn(t,e,n){if(!(n&&!At.call(t,e)&&!(t instanceof De)))return t[e]}function Ha(t,e){return V(t)?dt(t,0,e):mn(t,"first",e)}function Va(t,e){return V(t)?dt(t,-1,e):mn(t,"last",e)}function qa(t){if(At.call(t,"size")||t.size!==void 0)return t.size;if(V(t)||j(t))return t.length;if(typeof t=="object")return Object.keys(t).length}var Re;(function(t){t[t.OUTPUT=0]="OUTPUT",t[t.STORE=1]="STORE"})(Re||(Re={}));const Ua=de(Math.abs),Wa=de(Math.max),Ya=de(Math.min),Za=de(Math.ceil),Ga=de((t,e,n=!1)=>n?Math.floor(t/e):t/e),Ja=de(Math.floor),Ka=de((t,e)=>t-e),Qa=de((t,e)=>t+e),Xa=de((t,e)=>(t%e+e)%e),eo=de((t,e)=>t*e);function to(t,e=0){t=Xt(t),e=Xt(e);const n=Math.pow(10,e),s=t*n*(1+Number.EPSILON);return Math.round(s)/n}var no=Object.freeze({__proto__:null,abs:Ua,at_least:Wa,at_most:Ya,ceil:Za,divided_by:Ga,floor:Ja,minus:Ka,plus:Qa,modulo:Xa,times:eo,round:to});const so=t=>decodeURIComponent(m(t)).replace(/\+/g," "),ro=t=>encodeURIComponent(m(t)).replace(/%20/g,"+"),io=t=>encodeURIComponent(m(t)).replace(/%20/g,"+").replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()),ao=t=>encodeURI(m(t)).replace(/%5B/g,"[").replace(/%5D/g,"]"),cs=/[^\p{M}\p{L}\p{Nd}]+/ug,oo={raw:/\s+/g,default:cs,pretty:/[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,ascii:/[^A-Za-z0-9]+/g,latin:cs,none:null};function lo(t,e="default",n=!1){t=m(t);const s=oo[e];return s&&(e==="latin"&&(t=co(t)),t=t.replace(s,"-").replace(/^-|-$/g,"")),n?t:t.toLowerCase()}function co(t){return t.replace(/[àáâãäå]/g,"a").replace(/[æ]/g,"ae").replace(/[ç]/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[ð]/g,"d").replace(/[ñ]/g,"n").replace(/[òóôõöø]/g,"o").replace(/[ùúûü]/g,"u").replace(/[ýÿ]/g,"y").replace(/[ß]/g,"ss").replace(/[œ]/g,"oe").replace(/[þ]/g,"th").replace(/[ẞ]/g,"SS").replace(/[Œ]/g,"OE").replace(/[Þ]/g,"TH")}var ho=Object.freeze({__proto__:null,url_decode:so,url_encode:ro,cgi_escape:io,uri_escape:ao,slugify:lo});const uo=zt(function(t,e){const n=W(t),s=D(e)?" ":m(e);let r=s.length*Math.max(n.length-1,0);for(let a=0;a<n.length;a++)r+=String(n[a]).length;return this.context.memoryLimit.use(r),Array.prototype.join.call(n,s)}),po=zt(function(t){return Es(t)?dt(t,-1,this.context.ownPropertyOnly):""}),fo=zt(function(t){return Es(t)?dt(t,0,this.context.ownPropertyOnly):""}),mo=zt(function(t){const e=W(t);return this.context.memoryLimit.use(e.length),[...e].reverse()});function*Ks(t,e,n){const s=[],r=W(t);this.context.memoryLimit.use(r.length);for(const a of r)s.push([a,e?yield this.context._getFromScope(a,m(e).split("."),!1):a]);return s.sort((a,o)=>n(a[1],o[1])).map(a=>a[0])}function*go(t,e){return yield*Ks.call(this,t,e,hi)}function*bo(t,e){return yield*Ks.call(this,t,e,ui)}const yo=t=>t&&t.length||0;function*xo(t,e){const n=[],s=W(t);this.context.memoryLimit.use(s.length);for(const r of s)n.push(yield this.context._getFromScope(r,m(e),!1));return n}function*vo(t,e){let n=0;const s=W(t);for(const r of s){const a=Number(e?yield this.context._getFromScope(r,m(e),!1):r);n+=Number.isNaN(a)?0:a}return n}function ko(t){const e=W(t);return this.context.memoryLimit.use(e.length),Array.prototype.filter.call(e,n=>!D(S(n)))}function Qs(t,e=[]){const n=W(t),s=W(e);return this.context.memoryLimit.use(n.length+s.length),Array.prototype.concat.call(n,s)}function wo(t,e){return Qs.call(this,t,[e])}function jo(t,e){const n=W(t);this.context.memoryLimit.use(n.length);const s=[...n];return s.unshift(e),s}function No(t){const e=W(t);this.context.memoryLimit.use(e.length);const n=[...e];return n.pop(),n}function So(t){const e=W(t);this.context.memoryLimit.use(e.length);const n=[...e];return n.shift(),n}function To(t,e,n=1){return t=S(t),D(t)?[]:(V(t)||(t=m(t)),e=e<0?t.length+e:e,e<0||n<0?V(t)?[]:"":(this.context.memoryLimit.use(n),V(t)?Array.prototype.slice.call(t,e,e+n):String.prototype.slice.call(t,e,e+n)))}function Xs(t){return this.context.opts.jekyllWhere?e=>nt.is(t)?be(e,t):V(e)?oa(e,t):be(e,t):t===void 0?e=>Ae(e,this.context):e=>be(e,t)}function*er(t,e,n,s){const r=[];e=W(e),this.context.memoryLimit.use(e.length);const a=new ce(m(n)).readScopeValue();for(const l of e)r.push(yield I(a,this.context.spawn(l)));const o=Xs.call(this,s);return Array.prototype.filter.call(e,(l,h)=>o(r[h])===t)}function*tr(t,e,n,s){const r=[],a=new ee(m(s),this.liquid),o=W(e);this.context.memoryLimit.use(o.length);for(const l of o){this.context.push({[n]:l});const h=yield a.value(this.context);this.context.pop(),h===t&&r.push(l)}return r}function*Lo(t,e,n){return yield*er.call(this,!0,t,e,n)}function*Co(t,e,n){return yield*er.call(this,!1,t,e,n)}function*_o(t,e,n){return yield*tr.call(this,!0,t,e,n)}function*Eo(t,e,n){return yield*tr.call(this,!1,t,e,n)}function*Mo(t,e){const n=new Map;t=ht(t);const s=new ce(m(e)).readScopeValue();this.context.memoryLimit.use(t.length);for(const r of t){const a=yield I(s,this.context.spawn(r));n.has(a)||n.set(a,[]),n.get(a).push(r)}return[...n.entries()].map(([r,a])=>({name:r,items:a}))}function*Fo(t,e,n){const s=new Map,r=new ee(m(n),this.liquid);t=ht(t),this.context.memoryLimit.use(t.length);for(const a of t){this.context.push({[e]:a});const o=yield r.value(this.context);this.context.pop(),s.has(o)||s.set(o,[]),s.get(o).push(a)}return[...s.entries()].map(([a,o])=>({name:a,items:o}))}function*gn(t,e,n){const s=new ce(m(e)).readScopeValue(),r=W(t),a=Xs.call(this,n);for(let o=0;o<r.length;o++){const l=yield I(s,this.context.spawn(r[o]));if(a(l))return[o,r[o]]}}function*bn(t,e,n){const s=new ee(m(n),this.liquid),r=W(t);for(let a=0;a<r.length;a++){this.context.push({[e]:r[a]});const o=yield s.value(this.context);if(this.context.pop(),o)return[a,r[a]]}}function*Oo(t,e,n){return!!(yield*gn.call(this,t,e,n))}function*$o(t,e,n){return!!(yield*bn.call(this,t,e,n))}function*Ao(t,e,n){const s=yield*gn.call(this,t,e,n);return s?s[0]:void 0}function*Ro(t,e,n){const s=yield*bn.call(this,t,e,n);return s?s[0]:void 0}function*zo(t,e,n){const s=yield*gn.call(this,t,e,n);return s?s[1]:void 0}function*Do(t,e,n){const s=yield*bn.call(this,t,e,n);return s?s[1]:void 0}function Po(t){return t=W(t),this.context.memoryLimit.use(t.length),[...new Set(t)]}function Io(t,e=1){if(t=S(t),D(t))return[];V(t)||(t=m(t)),this.context.memoryLimit.use(t.length);const n=[...t].sort(()=>Math.random()-.5);return e===1?n[0]:n.slice(0,e)}var Bo=Object.freeze({__proto__:null,join:uo,last:po,first:fo,reverse:mo,sort:go,sort_natural:bo,size:yo,map:xo,sum:vo,compact:ko,concat:Qs,push:wo,unshift:jo,pop:No,shift:So,slice:To,where:Lo,reject:Co,where_exp:_o,reject_exp:Eo,group_by:Mo,group_by_exp:Fo,has:Oo,has_exp:$o,find_index:Ao,find_index_exp:Ro,find:zo,find_exp:Do,uniq:Po,sample:Io});function yn(t,e,n){var s,r;const a=((s=t==null?void 0:t.length)!==null&&s!==void 0?s:0)+((r=n==null?void 0:n.length)!==null&&r!==void 0?r:0);this.context.memoryLimit.use(a);const o=sr(t,this.context.opts,n);return o?(e=S(e),e=D(e)?this.context.opts.dateFormat:m(e),this.context.memoryLimit.use(e.length),St(o,e,this.context.memoryLimit)):t}function Ho(t){return yn.call(this,t,"%Y-%m-%dT%H:%M:%S%:z")}function Vo(t){return yn.call(this,t,"%a, %d %b %Y %H:%M:%S %z")}function qo(t,e,n){return nr.call(this,t,"%b",e,n)}function Uo(t,e,n){return nr.call(this,t,"%B",e,n)}function nr(t,e,n,s){const r=sr(t,this.context.opts);if(!r)return t;const a=this.context.memoryLimit;if(n==="ordinal"){const o=r.getDate();return s==="US"?St(r,`${e} ${o}%q, %Y`,a):St(r,`${o}%q ${e} %Y`,a)}return St(r,`%d ${e} %Y`,a)}function sr(t,e,n){let s;const r=n??e.timezoneOffset,a=e.locale;if(t=S(t),!D(t))return t==="now"||t==="today"?s=new ae(Date.now(),a,r):ut(t)?s=new ae(t*1e3,a,r):j(t)?/^\d+$/.test(t)?s=new ae(+t*1e3,a,r):e.preserveTimezones&&n===void 0?s=ae.createDateFixedToTimezone(t,a):s=new ae(t,a,r):s=new ae(t,a,r),s.valid()?s:void 0}var Wo=Object.freeze({__proto__:null,date:yn,date_to_xmlschema:Ho,date_to_rfc822:Vo,date_to_string:qo,date_to_long_string:Uo});const Kt=/[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu,ds=/[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;function Yo(t,e){Y(arguments.length===2,"append expect 2 arguments");const n=m(t),s=m(e);return this.context.memoryLimit.use(n.length+s.length),n+s}function Zo(t,e){Y(arguments.length===2,"prepend expect 2 arguments");const n=m(t),s=m(e);return this.context.memoryLimit.use(n.length+s.length),s+n}function Go(t,e){const n=m(t);if(this.context.memoryLimit.use(n.length),e){e=m(e),this.context.memoryLimit.use(e.length);for(let s=0,r=new Set(e);s<n.length;s++)if(!r.has(n[s]))return n.slice(s);return""}return n.trimStart()}function Jo(t){const e=m(t);return this.context.memoryLimit.use(e.length),e.toLowerCase()}function Ko(t){const e=m(t);return this.context.memoryLimit.use(e.length),m(e).toUpperCase()}function Qo(t,e){const n=m(t);return e=m(e),this.context.memoryLimit.use(n.length+e.length),n.split(e).join("")}function Xo(t,e){const n=m(t);return e=m(e),this.context.memoryLimit.use(n.length+e.length),n.replace(e,"")}function el(t,e){const n=m(t),s=m(e);this.context.memoryLimit.use(n.length+s.length);const r=n.lastIndexOf(s);return r===-1?n:n.substring(0,r)+n.substring(r+s.length)}function tl(t,e){if(t=m(t),this.context.memoryLimit.use(t.length),e){e=m(e),this.context.memoryLimit.use(e.length);for(let n=t.length-1,s=new Set(e);n>=0;n--)if(!s.has(t[n]))return t.slice(0,n+1);return""}return t.trimEnd()}function nl(t,e){const n=m(t);this.context.memoryLimit.use(n.length);const s=n.split(m(e));for(;s.length&&s[s.length-1]==="";)s.pop();return s}function sl(t,e){const n=m(t);if(this.context.memoryLimit.use(n.length),e){const s=new Set(m(e));this.context.memoryLimit.use(s.size);let r=0,a=n.length-1;for(;s.has(n[r]);)r++;for(;a>=r&&s.has(n[a]);)a--;return n.slice(r,a+1)}return n.trim()}function rl(t){const e=m(t);return this.context.memoryLimit.use(e.length),e.replace(/\r?\n/gm,"")}function il(t){return t=m(t),this.context.memoryLimit.use(t.length),t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function al(t,e,n){const s=m(t);e=m(e),n=m(n);const r=s.split(e),a=s.length+(r.length-1)*(n.length-e.length);return this.context.memoryLimit.use(a),r.join(n)}function ol(t,e,n){const s=m(t);return e=m(e),n=m(n),this.context.memoryLimit.use(s.length+e.length+n.length),s.replace(e,()=>n)}function ll(t,e,n){const s=m(t),r=m(e),a=m(n);this.context.memoryLimit.use(s.length+r.length+a.length);const o=s.lastIndexOf(r);return o===-1?s:s.substring(0,o)+a+s.substring(o+r.length)}function cl(t,e=50,n="..."){const s=m(t);return n=m(n),this.context.memoryLimit.use(s.length+n.length),s.length<=e?t:s.substring(0,e-n.length)+n}function dl(t,e=15,n="..."){const s=m(t);n=m(n),this.context.memoryLimit.use(s.length+n.length);const r=s.split(/\s+/);e<=0&&(e=1);let a=r.slice(0,e).join(" ");return r.length>=e&&(a+=n),a}function hl(t){const e=m(t);return this.context.memoryLimit.use(e.length),e.replace(/\s+/g," ")}function ul(t,e){const n=m(t);if(this.context.memoryLimit.use(n.length),t=n.trim(),!t)return 0;switch(e){case"cjk":return(t.match(Kt)||[]).length+(t.match(ds)||[]).length;case"auto":return Kt.test(t)?t.match(Kt).length+(t.match(ds)||[]).length:t.split(/\s+/).length;default:return t.split(/\s+/).length}}function pl(t,e="and"){e=m(e);let n=e.length+t.length*2;for(let s=0;s<t.length;s++)n+=m(t[s]).length;switch(this.context.memoryLimit.use(n),t.length){case 0:return"";case 1:return t[0];case 2:return`${t[0]} ${e} ${t[1]}`;default:return`${t.slice(0,-1).join(", ")}, ${e} ${t[t.length-1]}`}}var fl=Object.freeze({__proto__:null,append:Yo,prepend:Zo,lstrip:Go,downcase:Jo,upcase:Ko,remove:Qo,remove_first:Xo,remove_last:el,rstrip:tl,split:nl,strip:sl,strip_newlines:rl,capitalize:il,replace:al,replace_first:ol,replace_last:ll,truncate:cl,truncatewords:dl,normalize_whitespace:hl,number_of_words:ul,array_to_sentence_string:pl});function ml(t){return btoa(String.fromCharCode(...new TextEncoder().encode(t)))}function gl(t){return new TextDecoder().decode(Uint8Array.from(atob(t),e=>e.charCodeAt(0)))}function bl(t){if(typeof Buffer<"u"&&Buffer.isBuffer(t))return this.context.memoryLimit.use(t.byteLength),t.toString("base64");const e=m(t);return this.context.memoryLimit.use(e.length),ml(e)}function yl(t){const e=m(t);return this.context.memoryLimit.use(e.length),gl(e)}var xl=Object.freeze({__proto__:null,base64_encode:bl,base64_decode:yl});function rr(t){const e=new Uint8Array(t);let n="";for(let s=0;s<e.length;s++)n+=e[s].toString(16).padStart(2,"0");return n}function vl(t){return F(this,void 0,void 0,function*(){const e=new TextEncoder().encode(t),n=yield crypto.subtle.digest("SHA-256",e);return rr(n)})}function kl(t,e){return F(this,void 0,void 0,function*(){const n=new TextEncoder,s=yield crypto.subtle.importKey("raw",n.encode(e),{name:"HMAC",hash:"SHA-256"},!1,["sign"]),r=yield crypto.subtle.sign("HMAC",s,n.encode(t));return rr(r)})}function wl(t){const e=m(t);return this.context.memoryLimit.use(e.length),vl(e)}function jl(t,e){const n=m(t),s=m(e);return this.context.memoryLimit.use(n.length+s.length),kl(n,s)}var Nl=Object.freeze({__proto__:null,sha256:wl,hmac_sha256:jl});const Sl=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},La),no),ho),Bo),Wo),fl),xl),Nl),qs);class Tl extends R{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.key=this.identifier.content,this.tokenizer.assert(this.key,"expected variable name"),this.tokenizer.skipBlank(),this.tokenizer.assert(this.tokenizer.peek()==="=",'expected "="'),this.tokenizer.advance(),this.value=new ee(this.tokenizer.readFilteredValue(),this.liquid)}*render(e){e.bottom()[this.key]=yield this.value.value(e,this.liquid.options.lenientIf)}*arguments(){yield this.value}*localScope(){yield this.identifier}}const hs=["offset","limit","reversed"];class Ll extends R{constructor(e,n,s,r){super(e,n,s);const a=this.tokenizer.readIdentifier(),o=this.tokenizer.readIdentifier(),l=this.tokenizer.readValue();if(!a.size()||o.content!=="in"||!l)throw new Error(`illegal tag: ${e.getText()}`);this.variable=a.content,this.collection=l,this.hash=new rt(this.tokenizer,s.options.keyValueSeparator),this.templates=[],this.elseTemplates=[];let h;const c=r.parseStream(n).on("start",()=>h=this.templates).on("tag:else",d=>{Mt(d.args),h=this.elseTemplates}).on("tag:endfor",d=>{Mt(d.args),c.stop()}).on("template",d=>h.push(d)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});c.start()}*render(e,n){const s=this.liquid.renderer;let r=ht(yield I(this.collection,e));if(!r.length){yield s.renderTemplates(this.elseTemplates,e,n);return}const a="continue-"+this.variable+"-"+this.collection.getText();e.push(je({continue:e.getRegister(a,{})}));const o=yield this.hash.render(e);e.pop(),r=(this.liquid.options.orderedFilterParameters?Object.keys(o).filter(c=>hs.includes(c)):hs.filter(c=>o[c]!==void 0)).reduce((c,d)=>d==="offset"?_l(c,o.offset):d==="limit"?El(c,o.limit):Cl(c),r),e.setRegister(a,(o.offset||0)+r.length);const h=je({forloop:new hn(r.length,this.collection.getText(),this.variable)});e.push(h);for(const c of r){if(h[this.variable]=c,e.continueCalled=e.breakCalled=!1,yield s.renderTemplates(this.templates,e,n),e.breakCalled)break;h.forloop.next()}e.continueCalled=e.breakCalled=!1,e.pop()}*children(){const e=this.templates.slice();return this.elseTemplates&&e.push(...this.elseTemplates),e}*arguments(){yield this.collection;for(const e of Object.values(this.hash.hash))X(e)&&(yield e)}blockScope(){return[this.variable,"forloop"]}}function Cl(t){return[...t].reverse()}function _l(t,e){return t.slice(e)}function El(t,e){return t.slice(0,e)}class Ml extends R{constructor(e,n,s,r){for(super(e,n,s),this.templates=[],this.identifier=this.readVariable(),this.variable=this.identifier.content;n.length;){const a=n.shift();if(Ie(a)&&a.name==="endcapture")return;this.templates.push(r.parseToken(a,n))}throw new Error(`tag ${e.getText()} not closed`)}readVariable(){let e=this.tokenizer.readIdentifier();if(e.content||(e=this.tokenizer.readQuoted(),e))return e;throw this.tokenizer.error("invalid capture name")}*render(e){const s=yield this.liquid.renderer.renderTemplates(this.templates,e);e.bottom()[this.variable]=s}*children(){return this.templates}*localScope(){yield this.identifier}}class Fl extends R{constructor(e,n,s,r){super(e,n,s),this.branches=[],this.elseTemplates=[],this.value=new ee(this.tokenizer.readFilteredValue(),this.liquid),this.elseTemplates=[];let a=[],o=0;const l=r.parseStream(n).on("tag:when",h=>{if(o>0)return;a=[];const c=[];for(;!h.tokenizer.end();)c.push(h.tokenizer.readValueOrThrow()),h.tokenizer.skipBlank(),h.tokenizer.peek()===","?h.tokenizer.readTo(","):h.tokenizer.readTo("or");this.branches.push({values:c,templates:a})}).on("tag:else",()=>{o++,a=this.elseTemplates}).on("tag:endcase",()=>l.stop()).on("template",h=>{(a!==this.elseTemplates||o===1)&&a.push(h)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});l.start()}*render(e,n){const s=this.liquid.renderer,r=S(yield this.value.value(e,e.opts.lenientIf));let a=!1;for(const o of this.branches)for(const l of o.values){const h=yield I(l,e,e.opts.lenientIf);if(be(r,h)){yield s.renderTemplates(o.templates,e,n),a=!0;break}}a||(yield s.renderTemplates(this.elseTemplates,e,n))}*arguments(){yield this.value,yield*this.branches.flatMap(e=>e.values)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}}class Ol extends R{constructor(e,n,s){for(super(e,n,s);n.length;){const r=n.shift();if(Ie(r)&&r.name==="endcomment")return}throw new Error(`tag ${e.getText()} not closed`)}render(){}}class $l extends R{constructor(e,n,s,r){super(e,n,s);const a=this.tokenizer;for(this.file=xn(a,this.liquid,r),this.currentFile=e.file;!a.end();){a.skipBlank();const o=a.p,l=a.readIdentifier();if((l.content==="with"||l.content==="for")&&(a.skipBlank(),a.peek()!==":")){const h=a.readValue();if(h){const c=a.p,d=a.readIdentifier();let f;d.content==="as"?f=a.readIdentifier():a.p=c;const y={value:h,alias:f&&f.content};l.content==="with"?this.with=y:this.forBinding=y,a.skipBlank(),a.peek()===","&&a.advance();continue}}a.p=o;break}this.hash=new rt(a,s.options.keyValueSeparator)}*render(e,n){const{liquid:s,hash:r}=this,a=yield vn(this.file,e,s);Y(a,()=>`illegal file path "${a}"`);const o=e.spawn(),l=o.bottom();if(Ft(l,yield r.render(e)),this.with){const{value:h,alias:c}=this.with;l[c||a]=yield I(h,e)}if(this.forBinding){const{value:h,alias:c}=this.forBinding,d=ht(yield I(h,e));l.forloop=new hn(d.length,h.getText(),c);for(const f of d){l[c]=f;const y=yield s._parsePartialFile(a,o.sync,this.currentFile);yield s.renderer.renderTemplates(y,o,n),l.forloop.next()}}else{const h=yield s._parsePartialFile(a,o.sync,this.currentFile);yield s.renderer.renderTemplates(h,o,n)}}*children(e,n){return e&&j(this.file)?yield this.liquid._parsePartialFile(this.file,n,this.currentFile):[]}partialScope(){if(j(this.file)){const e=Object.keys(this.hash.hash);if(this.with){const{value:n,alias:s}=this.with;j(s)?e.push([s,n]):j(this.file)&&e.push([this.file,n])}if(this.forBinding){const{value:n,alias:s}=this.forBinding;j(s)?e.push([s,n]):j(this.file)&&e.push([this.file,n])}return{name:this.file,isolated:!0,scope:e}}}*arguments(){for(const e of Object.values(this.hash.hash))X(e)&&(yield e);if(this.with){const{value:e}=this.with;X(e)&&(yield e)}if(this.forBinding){const{value:e}=this.forBinding;X(e)&&(yield e)}}}function xn(t,e,n){if(e.options.dynamicPartials){const a=t.readValue();if(t.assert(a,"illegal file path"),a.getText()==="none")return;if(on(a)){const o=n.parse(na(a));return us(o)}return a}const s=[...t.readFileNameTemplate(e.options)],r=us(n.parseTokens(s));return r==="none"?void 0:r}function us(t){return t.length===1&&fn(t[0].token)?t[0].token.getContent():t}function*vn(t,e,n){return typeof t=="string"?t:Array.isArray(t)?n.renderer.renderTemplates(t,e):yield I(t,e)}class Al extends R{constructor(e,n,s,r){super(e,n,s);const{tokenizer:a}=e;this.file=xn(a,this.liquid,r),this.currentFile=e.file;const o=a.p;a.readIdentifier().content==="with"?(a.skipBlank(),a.peek()!==":"?this.withVar=a.readValue():a.p=o):a.p=o,this.hash=new rt(a,s.options.jekyllInclude||s.options.keyValueSeparator)}*render(e,n){const{liquid:s,hash:r,withVar:a}=this,{renderer:o}=s,l=yield vn(this.file,e,s);Y(l,()=>`illegal file path "${l}"`);const h=e.saveRegister("blocks","blockMode");e.setRegister("blocks",{}),e.setRegister("blockMode",Re.OUTPUT);const c=je(yield r.render(e));a&&(c[l]=yield I(a,e));const d=yield s._parsePartialFile(l,e.sync,this.currentFile);e.push(e.opts.jekyllInclude?je({include:c}):c),yield o.renderTemplates(d,e,n),e.pop(),e.restoreRegister(h)}*children(e,n){return e&&j(this.file)?yield this.liquid._parsePartialFile(this.file,n,this.currentFile):[]}partialScope(){if(j(this.file)){let e;return this.liquid.options.jekyllInclude?e=["include"]:(e=Object.keys(this.hash.hash),this.withVar&&e.push([this.file,this.withVar])),{name:this.file,isolated:!1,scope:e}}}*arguments(){yield*Object.values(this.hash.hash).filter(X),X(this.file)&&(yield this.file),X(this.withVar)&&(yield this.withVar)}}class Rl extends R{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.variable=this.identifier.content}render(e,n){const s=e.environments;ut(s[this.variable])||(s[this.variable]=0),n.write(m(--s[this.variable]))}*localScope(){yield this.identifier}}class zl extends R{constructor(e,n,s){super(e,n,s),this.candidates=[];const r=this.tokenizer.readValue();for(this.tokenizer.skipBlank(),r&&(this.tokenizer.peek()===":"?(this.group=r,this.tokenizer.advance()):this.candidates.push(r));!this.tokenizer.end();){const a=this.tokenizer.readValue();a&&this.candidates.push(a),this.tokenizer.readTo(",")}this.tokenizer.assert(this.candidates.length,()=>`empty candidates: "${e.getText()}"`)}*render(e,n){const r=`cycle:${yield I(this.group,e)}:`+this.candidates.join(","),a=e.getRegister("cycle",{});let o=a[r];o===void 0&&(o=a[r]=0);const l=this.candidates[o];return o=(o+1)%this.candidates.length,a[r]=o,yield I(l,e)}*arguments(){yield*this.candidates,this.group&&(yield this.group)}}class Dl extends R{constructor(e,n,s,r){super(e,n,s),this.branches=[];let a=[];r.parseStream(n).on("start",()=>this.branches.push({value:new ee(e.tokenizer.readFilteredValue(),this.liquid),templates:a=[]})).on("tag:elsif",o=>{Y(!this.elseTemplates,"unexpected elsif after else"),this.branches.push({value:new ee(o.tokenizer.readFilteredValue(),this.liquid),templates:a=[]})}).on("tag:else",o=>{Mt(o.args),Y(!this.elseTemplates,"duplicated else"),a=this.elseTemplates=[]}).on("tag:endif",function(o){Mt(o.args),this.stop()}).on("template",o=>a.push(o)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()}*render(e,n){const s=this.liquid.renderer;for(const{value:r,templates:a}of this.branches){const o=yield r.value(e,e.opts.lenientIf);if(Ae(o,e)){yield s.renderTemplates(a,e,n);return}}yield s.renderTemplates(this.elseTemplates||[],e,n)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}arguments(){return this.branches.map(e=>e.value)}}class Pl extends R{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.variable=this.identifier.content}render(e,n){const s=e.environments;ut(s[this.variable])||(s[this.variable]=0);const r=s[this.variable];s[this.variable]++,n.write(m(r))}*localScope(){yield this.identifier}}class Il extends R{constructor(e,n,s,r){super(e,n,s),this.file=xn(this.tokenizer,this.liquid,r),this.currentFile=e.file,this.args=new rt(this.tokenizer,s.options.keyValueSeparator),this.templates=r.parseTokens(n)}*render(e,n){const{liquid:s,args:r,file:a}=this,{renderer:o}=s;if(a===void 0){e.setRegister("blockMode",Re.OUTPUT),yield o.renderTemplates(this.templates,e,n);return}const l=yield vn(this.file,e,s);Y(l,()=>`illegal file path "${l}"`);const h=yield s._parseLayoutFile(l,e.sync,this.currentFile);e.setRegister("blockMode",Re.STORE);const c=yield o.renderTemplates(this.templates,e),d=e.getRegister("blocks",{});d[""]===void 0&&(d[""]=(f,y)=>y.write(c)),e.setRegister("blockMode",Re.OUTPUT),e.push(je(yield r.render(e))),yield o.renderTemplates(h,e,n),e.pop()}*children(e){const n=this.templates.slice();return e&&j(this.file)&&n.push(...yield this.liquid._parsePartialFile(this.file,!0,this.currentFile)),n}*arguments(){for(const e of Object.values(this.args.hash))X(e)&&(yield e);X(this.file)&&(yield this.file)}partialScope(){if(j(this.file))return{name:this.file,isolated:!1,scope:Object.keys(this.args.hash)}}}class Bl extends R{constructor(e,n,s,r){super(e,n,s),this.templates=[];const a=/\w+/.exec(e.args);for(this.block=a?a[0]:"";n.length;){const o=n.shift();if(Ie(o)&&o.name==="endblock")return;const l=r.parseToken(o,n);this.templates.push(l)}throw new Error(`tag ${e.getText()} not closed`)}*render(e,n){const s=this.getBlockRender(e);e.getRegister("blockMode")===Re.STORE?e.getRegister("blocks",{})[this.block]=s:yield s(new Vn,n)}getBlockRender(e){const n=this,{liquid:s,templates:r}=this,a=e.getRegister("blocks",{})[this.block],o=function*(l,h){const c=e.getRegister("blockStack",[]);if(c.includes(n))throw new Error("block tag cannot be nested");c.push(n),e.push(je({block:l})),yield s.renderer.renderTemplates(r,e,h),e.pop(),c.pop()};return a?(l,h)=>a(new Vn(c=>o(l,c)),h):o}*children(){return this.templates}blockScope(){return["block"]}}class Hl extends R{constructor(e,n,s){for(super(e,n,s),this.tokens=[];n.length;){const r=n.shift();if(Ie(r)&&r.name==="endraw")return;this.tokens.push(r)}throw new Error(`tag ${e.getText()} not closed`)}render(){return this.tokens.map(e=>e.getText()).join("")}}class Vl extends hn{constructor(e,n,s,r){super(e,s,r),this.length=e,this.cols=n}row(){return Math.floor(this.i/this.cols)+1}col0(){return this.i%this.cols}col(){return this.col0()+1}col_first(){return this.col0()===0}col_last(){return this.col()===this.cols}}class ql extends R{constructor(e,n,s,r){super(e,n,s);const a=this.tokenizer.readIdentifier();this.tokenizer.skipBlank();const o=this.tokenizer.readIdentifier(),l=this.tokenizer.readValue();if(o.content!=="in"||!l)throw new Error(`illegal tag: ${e.getText()}`);this.variable=a.content,this.collection=l,this.args=new rt(this.tokenizer,s.options.keyValueSeparator),this.templates=[];let h;const c=r.parseStream(n).on("start",()=>h=this.templates).on("tag:endtablerow",()=>c.stop()).on("template",d=>h.push(d)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});c.start()}*render(e,n){let s=ht(yield I(this.collection,e));const r=yield this.args.render(e),a=r.offset||0,o=r.limit===void 0?s.length:r.limit;s=s.slice(a,a+o);const l=r.cols||s.length,h=this.liquid.renderer,c=new Vl(s.length,l,this.collection.getText(),this.variable),d=je({tablerowloop:c});e.push(d);for(let f=0;f<s.length;f++,c.next())d[this.variable]=s[f],c.col0()===0&&(c.row()!==1&&n.write("</tr>"),n.write(`<tr class="row${c.row()}">`)),n.write(`<td class="col${c.col()}">`),yield h.renderTemplates(this.templates,e,n),n.write("</td>");s.length&&n.write("</tr>"),e.pop()}*children(){return this.templates}*arguments(){yield this.collection;for(const e of Object.values(this.args.hash))X(e)&&(yield e)}blockScope(){return[this.variable,"tablerowloop"]}}class Ul extends R{constructor(e,n,s,r){super(e,n,s),this.branches=[],this.elseTemplates=[];let a=[],o=0;r.parseStream(n).on("start",()=>this.branches.push({value:new ee(e.tokenizer.readFilteredValue(),this.liquid),test:Dt,templates:a=[]})).on("tag:elsif",l=>{if(o>0){a=[];return}this.branches.push({value:new ee(l.tokenizer.readFilteredValue(),this.liquid),test:Ae,templates:a=[]})}).on("tag:else",()=>{o++,a=this.elseTemplates}).on("tag:endunless",function(){this.stop()}).on("template",l=>{(a!==this.elseTemplates||o===1)&&a.push(l)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()}*render(e,n){const s=this.liquid.renderer;for(const{value:r,test:a,templates:o}of this.branches){const l=yield r.value(e,e.opts.lenientIf);if(a(l,e)){yield s.renderTemplates(o,e,n);return}}yield s.renderTemplates(this.elseTemplates,e,n)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}arguments(){return this.branches.map(e=>e.value)}}class Wl extends R{render(e,n){e.breakCalled=!0}}class Yl extends R{render(e,n){e.continueCalled=!0}}class Zl extends R{constructor(e,n,s){super(e,n,s),this.tokenizer.skipBlank(),this.tokenizer.end()||(this.value=new ee(this.tokenizer.readFilteredValue(),this.liquid))}*render(e,n){if(!this.value)return;const s=yield this.value.value(e,!1);n.write(s)}*arguments(){this.value&&(yield this.value)}}class Gl extends R{constructor(e,n,s,r){super(e,n,s);const a=this.tokenizer.readLiquidTagTokens(this.liquid.options);this.templates=r.parseTokens(a)}*render(e,n){yield this.liquid.renderer.renderTemplates(this.templates,e,n)}*children(){return this.templates}}class Jl extends R{constructor(e,n,s){if(super(e,n,s),e.args.search(/\n\s*[^#\s]/g)!==-1)throw new Error("every line of an inline comment must start with a '#' character")}render(){}}const Kl={assign:Tl,for:Ll,capture:Ml,case:Fl,comment:Ol,include:Al,render:$l,decrement:Rl,increment:Pl,cycle:zl,if:Dl,layout:Il,block:Bl,raw:Hl,tablerow:ql,unless:Ul,break:Wl,continue:Yl,echo:Zl,liquid:Gl,"#":Jl};class kn{constructor(e={}){this.renderer=new Xi,this.filters=Object.create(null),this.tags=Object.create(null),this.options=_a(e),this.parser=new Fe(this),In(Kl,(n,s)=>this.registerTag(s,n)),In(Sl,(n,s)=>this.registerFilter(s,n))}parse(e,n){return new Fe(this).parse(e,n)}_render(e,n,s){const r=n instanceof $e?n:new $e(n,this.options,s);return this.renderer.renderTemplates(e,r)}render(e,n,s){return F(this,void 0,void 0,function*(){return me(this._render(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}renderSync(e,n,s){return ge(this._render(e,n,Object.assign(Object.assign({},s),{sync:!0})))}renderToNodeStream(e,n,s={}){const r=new $e(n,this.options,s);return this.renderer.renderTemplatesToNodeStream(e,r)}_parseAndRender(e,n,s){const r=this.parse(e);return this._render(r,n,s)}parseAndRender(e,n,s){return F(this,void 0,void 0,function*(){return me(this._parseAndRender(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}parseAndRenderSync(e,n,s){return ge(this._parseAndRender(e,n,Object.assign(Object.assign({},s),{sync:!0})))}_parsePartialFile(e,n,s){return new Fe(this).parseFile(e,n,st.Partials,s)}_parseLayoutFile(e,n,s){return new Fe(this).parseFile(e,n,st.Layouts,s)}_parseFile(e,n,s,r){return new Fe(this).parseFile(e,n,s,r)}parseFile(e,n){return F(this,void 0,void 0,function*(){return me(new Fe(this).parseFile(e,!1,n))})}parseFileSync(e,n){return ge(new Fe(this).parseFile(e,!0,n))}*_renderFile(e,n,s){const r=yield this._parseFile(e,s.sync,s.lookupType);return yield this._render(r,n,s)}renderFile(e,n,s){return F(this,void 0,void 0,function*(){return me(this._renderFile(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}renderFileSync(e,n,s){return ge(this._renderFile(e,n,Object.assign(Object.assign({},s),{sync:!0})))}renderFileToNodeStream(e,n,s){return F(this,void 0,void 0,function*(){const r=yield this.parseFile(e);return this.renderToNodeStream(r,n,s)})}_evalValue(e,n){const s=new ee(e,this),r=n instanceof $e?n:new $e(n,this.options);return s.value(r)}evalValue(e,n){return F(this,void 0,void 0,function*(){return me(this._evalValue(e,n))})}evalValueSync(e,n){return ge(this._evalValue(e,n))}registerFilter(e,n){this.filters[e]=n}registerTag(e,n){this.tags[e]=H(n)?n:Aa(n)}plugin(e){return e.call(this,kn)}express(){const e=this;let n=!0;return function(s,r,a){if(n){n=!1;const o=Tt(this.root);e.options.root.unshift(...o),e.options.layouts.unshift(...o),e.options.partials.unshift(...o)}e.renderFile(s,r).then(o=>a(null,o),a)}}analyze(e,n={}){return F(this,void 0,void 0,function*(){return ke(e,n)})}analyzeSync(e,n={}){return we(e,n)}parseAndAnalyze(e,n,s={}){return F(this,void 0,void 0,function*(){return ke(this.parse(e,n),s)})}parseAndAnalyzeSync(e,n,s={}){return we(this.parse(e,n),s)}variables(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Object.keys(s.variables)})}variablesSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Object.keys(s.variables)}fullVariables(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.variables).flatMap(r=>r.map(a=>String(a)))))})}fullVariablesSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.variables).flatMap(r=>r.map(a=>String(a)))))}variableSegments(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Array.from(wt(Object.values(s.variables).flatMap(r=>r.map(a=>a.toArray()))))})}variableSegmentsSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Array.from(wt(Object.values(s.variables).flatMap(r=>r.map(a=>a.toArray()))))}globalVariables(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Object.keys(s.globals)})}globalVariablesSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Object.keys(s.globals)}globalFullVariables(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.globals).flatMap(r=>r.map(a=>String(a)))))})}globalFullVariablesSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.globals).flatMap(r=>r.map(a=>String(a)))))}globalVariableSegments(e,n={}){return F(this,void 0,void 0,function*(){const s=yield ke(j(e)?this.parse(e):e,n);return Array.from(wt(Object.values(s.globals).flatMap(r=>r.map(a=>a.toArray()))))})}globalVariableSegmentsSync(e,n={}){const s=we(j(e)?this.parse(e):e,n);return Array.from(wt(Object.values(s.globals).flatMap(r=>r.map(a=>a.toArray()))))}}const Ql=`{%- comment -%}
  Full kundli document template (LiquidJS).
  Data shape: see KundliJson in src/astro/kundliJson.ts. This template is fully
  self-contained: all presentation (including the embedded <style> block below)
  lives here, so the same template + a KundliJson object renders an identical
  document anywhere — no external stylesheet required. All astrology logic is
  pre-computed in the JSON; charts are drawn here from plain values by the
  chart.liquid partial, keeping this file the single source of presentation.
  Section ids (overview, planets, shadbala, charts, dashas, ashtaka, yogas,
  varshphal, interpretation) match the sidebar navigation anchors.
{%- endcomment -%}
<div class="kundli-doc" lang="{{ meta.language }}">
  <style>
    .kundli-doc {
      --ink: #1d1a16;
      --muted: #6f665a;
      --faint: #9a9183;
      --accent: #8a2d3b;
      --gold: #b08436;
      --hair: #e4ddcf;
      --tint: #faf7f1;
      --head: #f4eee3;
      color: var(--ink);
      /* Devanagari families trail the Latin ones. Font fallback is per glyph, so this
         leaves English rendering untouched and only supplies a face for the scripts
         Noto Sans has no glyphs for. */
      --doc-body: "Noto Sans", "Segoe UI", "Nirmala UI", "Noto Sans Devanagari",
        "Kohinoor Devanagari", "Devanagari Sangam MN", Mangal, sans-serif;
      --doc-display: Manrope, "Noto Sans", "Segoe UI", "Nirmala UI",
        "Noto Sans Devanagari", "Kohinoor Devanagari", "Devanagari Sangam MN",
        Mangal, sans-serif;
      font-family: var(--doc-body);
      font-size: 13.5px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }
    .kundli-doc * { box-sizing: border-box; }
    .kundli-doc section { margin: 0 0 2rem; }

    /* Headings */
    .kundli-doc h1, .kundli-doc h2, .kundli-doc h3, .kundli-doc h4 {
      font-family: var(--doc-display);
    }
    .kundli-doc h1 { font-size: 2rem; font-weight: 600; letter-spacing: 0.01em; margin: 0; }
    .kundli-doc h2 {
      position: relative;
      font-size: 0.95rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent);
      margin: 0 0 0.95rem;
      padding-bottom: 0.35rem;
      border-bottom: 1px solid var(--hair);
    }
    .kundli-doc h2::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 2.4rem;
      height: 2px;
      background: var(--gold);
    }
    .kundli-doc h3 { font-size: 1rem; font-weight: 600; margin: 1rem 0 0.3rem; }
    .kundli-doc h4 {
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--muted);
      margin: 0.9rem 0 0.3rem;
    }
    .kundli-doc p { margin: 0.4rem 0; }

    /* Masthead */
    .kp-head { margin-bottom: 1.6rem; padding-bottom: 1rem; border-bottom: 2px solid var(--accent); }
    .kp-eyebrow {
      margin: 0 0 0.5rem;
      font-size: 0.95rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      color: var(--gold);
    }
    .kp-sub { margin: 0.25rem 0; color: var(--muted); }
    .kp-meta { margin: 0.2rem 0; color: var(--faint); font-size: 0.78rem; letter-spacing: 0.02em; }
    .kp-asc { margin: 0.6rem 0 0; font-size: 0.95rem; }
    .kp-asc strong { color: var(--accent); }
    .kp-disclaimer { color: var(--muted); font-size: 0.8rem; font-style: italic; }

    /* Charts */
    .kp-charts { display: flex; flex-wrap: wrap; gap: 1.75rem; }
    .kp-charts .kp-chart { flex: 1 1 300px; max-width: 420px; }
    .kp-chart { margin: 0; }
    .kp-chart figcaption {
      margin-bottom: 0.5rem;
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      text-align: center;
    }
    .kp-varga-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem 1.1rem;
    }
    .kp-varga-desc { margin: 0.35rem 0 0; font-size: 0.72rem; color: var(--muted); text-align: center; }

    /* SVG chart internals (markup is generated by the chart.liquid partial;
       per-cell font sizes are set inline there so labels fit their house). */
    .kundli-doc .chart-svg { width: 100%; max-width: 420px; height: auto; display: block; margin: 0 auto; }
    .kundli-doc .chart-frame { fill: #fff; stroke: var(--accent); stroke-width: 1.5; }
    .kundli-doc .chart-line { stroke: #cabda3; stroke-width: 1; fill: none; }
    .kundli-doc .grid-cell { fill: #fff; stroke: #cabda3; stroke-width: 1; }
    .kundli-doc .grid-cell.lagna { fill: rgba(138, 45, 59, 0.06); }
    .kundli-doc .lagna-mark { stroke: var(--accent); stroke-width: 2; }
    .kundli-doc .house-sign {
      fill: var(--accent);
      font-size: 13px;
      font-weight: 600;
      font-family: var(--doc-body);
    }
    .kundli-doc .planet {
      fill: var(--ink);
      font-size: 13px;
      font-weight: 600;
      text-anchor: middle;
      font-family: var(--doc-body);
    }
    .kundli-doc .planet.retro { fill: var(--accent); font-style: italic; }
    .kundli-doc .planet-deg { font-size: 8px; font-weight: 400; fill: var(--muted); }

    /* Tables */
    .kp-scroll { overflow-x: auto; }
    .kp-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
    .kp-table thead th {
      background: var(--head);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.68rem;
      font-weight: 600;
      text-align: left;
      padding: 0.45rem 0.35rem;
      border-bottom: 1.5px solid var(--accent);
    }
    .kp-table td { padding: 0.35rem 0.35rem; border-bottom: 1px solid var(--hair); }
    .kp-table tbody tr:nth-child(even) td { background: var(--tint); }
    .kp-table .kp-active td { background: rgba(138, 45, 59, 0.09); font-weight: 600; }
    /* Values that read as a single token should never break across lines. */
    .kp-nowrap { white-space: nowrap; }
    /* "Direct" is the unremarkable default, so it recedes; the notable states
       are badged so they can be picked out while scanning the column. */
    .kp-state-direct { color: var(--faint); }
    .kp-state-retro,
    .kp-state-combust {
      display: inline-block;
      padding: 0.05rem 0.4rem;
      border-radius: 999px;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }
    .kp-state-retro { background: rgba(138, 45, 59, 0.1); color: var(--accent); }
    .kp-state-combust { background: rgba(191, 138, 26, 0.16); color: #8a6100; }
    .kp-av thead th, .kp-av td { text-align: center; padding: 0.35rem 0.4rem; }
    .kp-av thead th:first-child, .kp-av thead th:nth-child(2),
    .kp-av td:first-child, .kp-av td:nth-child(2) { text-align: left; }
    .kp-asc-row td { background: rgba(138, 45, 59, 0.09); font-weight: 600; }
    .kp-maha td { background: var(--head); font-weight: 600; }
    .kp-antar .kp-tree { padding-left: 1.5rem; position: relative; color: var(--muted); }
    .kp-antar .kp-tree::before { content: "\\2514"; position: absolute; left: 0.6rem; color: var(--faint); }

    /* Collapsible 4-level dasha tree (Maha > Antar > Pratyantar > Sukshma) */
    .kp-dtree { font-size: 0.85rem; border-top: 1.5px solid var(--accent); }
    .kp-dtree-head, .kp-drow {
      display: grid;
      grid-template-columns: minmax(12rem, 1fr) 8rem 8rem;
      gap: 0.5rem;
      padding: 0.34rem 0.6rem;
      align-items: baseline;
    }
    .kp-dtree-head { font-weight: 600; border-bottom: 1.5px solid var(--accent); }
    .kp-drow { border-bottom: 1px solid var(--hair); }
    .kp-dtree summary.kp-drow { cursor: pointer; list-style: none; }
    .kp-dtree summary.kp-drow::-webkit-details-marker { display: none; }
    .kp-dtree summary.kp-drow .kp-dname::before {
      content: "\\25B8"; display: inline-block; width: 0.9em; color: var(--faint);
    }
    .kp-dtree details[open] > summary.kp-drow .kp-dname::before { content: "\\25BE"; }
    .kp-d1 > summary.kp-drow { background: var(--head); font-weight: 600; }
    .kp-d2 > summary.kp-drow .kp-dname { padding-left: 1.1rem; }
    .kp-d3 > summary.kp-drow .kp-dname { padding-left: 2.2rem; color: var(--muted); }
    .kp-d4 .kp-dname { padding-left: 4.2rem; color: var(--muted); }
    .kp-drow.kp-dactive { background: rgba(138, 45, 59, 0.09); font-weight: 600; }
    .kp-ddate { color: var(--muted); white-space: nowrap; }

    /* Lists */
    .kp-list { list-style: none; padding: 0; margin: 0.5rem 0; max-width: 430px; }
    .kp-list li {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 0.6rem;
      padding: 0.32rem 0;
      border-bottom: 1px dotted var(--hair);
    }
    .kp-list li span { color: var(--muted); }
    .kp-list li strong { text-align: right; }
    .kp-bullets { margin: 0.4rem 0; padding-left: 1.1rem; font-size: 0.85rem; }
    .kp-bullets li { margin-bottom: 0.5rem; }
    .kp-bullets li strong { color: var(--accent); }
    .kp-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; }
    .kp-current { margin: 0 0 0.6rem; font-weight: 600; color: var(--accent); }
    .kp-varsha { padding-top: 1.1rem; margin-top: 1.1rem; border-top: 1px solid var(--hair); }
    .kp-good { color: #2f7a47; font-weight: 600; }
    .kp-bad { color: var(--accent); font-weight: 600; }
    .kp-scope {
      display: inline-block;
      margin-left: 0.15rem;
      padding: 0.02rem 0.4rem;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: var(--gold);
      background: var(--head);
      border: 1px solid var(--hair);
      border-radius: 999px;
      vertical-align: middle;
      white-space: nowrap;
    }
    .kp-acts { margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.22rem 0.3rem; align-items: baseline; }
    .kp-acts-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
    .kp-act { font-size: 0.72rem; padding: 0.03rem 0.4rem; border-radius: 4px; background: var(--head); border: 1px solid var(--hair); color: var(--ink); white-space: nowrap; }
    .kp-act-antar { font-size: 0.68rem; background: transparent; color: var(--muted); }

    /* Footer & page marks */
    .kp-foot {
      margin-top: 1.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--hair);
      color: var(--faint);
      font-size: 0.72rem;
      text-align: center;
      letter-spacing: 0.04em;
    }
    .doc-page-no {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      margin-top: 1.6rem;
      padding-top: 0.6rem;
      border-top: 1px solid var(--hair);
      color: var(--faint);
      font-size: 0.66rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .doc-foot-brand {
      text-transform: none;
      letter-spacing: 0.04em;
    }
    .doc-foot-brand a {
      color: var(--accent);
      text-decoration: none;
    }
    .doc-foot-brand a:hover { text-decoration: underline; }
    /* Continuation label on split pages */
    .kp-cont {
      margin: 0 0 1.4rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--muted);
    }

    @media (max-width: 720px) {
      .kp-cols { grid-template-columns: 1fr; }
      .kp-varga-grid { grid-template-columns: 1fr; }
      /* The 4-level dasha tree is too wide for a phone: the fixed 12rem name
         column pushed the grid past the scroll box, so indented period names
         were clipped and row highlights stopped short. Let the name column
         shrink and wrap, and tighten the indents instead. */
      .kp-dtree { font-size: 0.78rem; }
      .kp-dtree-head, .kp-drow {
        grid-template-columns: minmax(0, 1fr) 5.6rem 5.6rem;
        gap: 0.35rem;
        padding: 0.34rem 0.4rem;
      }
      .kp-ddate { font-size: 0.72rem; }
      .kp-d2 > summary.kp-drow .kp-dname { padding-left: 0.7rem; }
      .kp-d3 > summary.kp-drow .kp-dname { padding-left: 1.4rem; }
      .kp-d4 .kp-dname { padding-left: 2.9rem; }
    }

    /* Print always uses the full desktop layout regardless of viewport width. */
    @media print {
      .kp-cols { grid-template-columns: 1fr 1fr; }
      .kp-varga-grid { grid-template-columns: repeat(2, 1fr); }
      .kp-dtree { font-size: 0.85rem; }
      .kp-dtree-head, .kp-drow {
        grid-template-columns: minmax(12rem, 1fr) 8rem 8rem;
        gap: 0.5rem;
        padding: 0.34rem 0.6rem;
      }
      .kp-d2 > summary.kp-drow .kp-dname { padding-left: 1.1rem; }
      .kp-d3 > summary.kp-drow .kp-dname { padding-left: 2.2rem; }
      .kp-d4 .kp-dname { padding-left: 4.2rem; }
    }
  </style>

  <!-- Repeating print footer via <tfoot>: Chrome renders a table-footer-group at
       the bottom of EVERY printed page (space reserved automatically, no overlap).
       This is the only reliable cross-page footer technique in Chrome, which does
       NOT support @page margin boxes. On screen the table parts use display:contents
       so the sections lay out exactly as before; the tfoot is hidden on screen. -->
  <table class="kp-doc-table">
    <tfoot class="kp-doc-tfoot">
      <tr>
        <td>
          <div class="kp-running-foot">
            <span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span>
          </div>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>

  <section id="overview" class="doc-page">
    <header class="kp-head">
      <p class="kp-eyebrow">{{ labels.eyebrow | escape }}</p>
      <h1>{{ meta.name }}</h1>
      <p class="kp-sub">{% if meta.gender and meta.gender != "—" %}{{ meta.gender }} · {% endif %}{{ meta.date }} · {{ meta.time }}{% if meta.place and meta.place != "—" %} · {{ meta.place }}{% endif %}</p>
      <p class="kp-meta">
        {{ labels.lat | escape }} {{ meta.latitude }}, {{ labels.lon | escape }} {{ meta.longitude }} · {{ meta.timeZone }}
        · {{ labels.ayanamsa | escape }} {{ meta.ayanamsa }}
      </p>
      <p class="kp-asc">
        <strong>{{ labels.lagna | escape }}</strong> {{ ascendant.sign }} {{ ascendant.degree }}
        · {{ ascendant.nakshatra }} ({{ labels.pada | escape }} {{ ascendant.pada }})
        <br>
        <strong>{{ labels.rashiMoonSign | escape }}</strong> {{ interpretation.moonSign }}
        · {{ interpretation.moonNak }} ({{ labels.pada | escape }} {{ interpretation.moonPada }})
      </p>
    </header>

    <div class="kp-charts">
      <figure class="kp-chart">
        <figcaption>{{ overview.rashi.title }}</figcaption>
        {% render 'chart', cells: overview.rashi.cells, style: meta.style, lang: meta.language, uid: 'd1' %}
      </figure>
      <figure class="kp-chart">
        <figcaption>{{ overview.navamsa.title }}</figcaption>
        {% render 'chart', cells: overview.navamsa.cells, style: meta.style, lang: meta.language, uid: 'd9' %}
      </figure>
    </div>

    <h2>{{ labels.panchangHeading | escape }}</h2>
    <ul class="kp-list kp-panchang">
      <li><span>{{ labels.vara | escape }}</span><strong>{{ panchang.vara }}</strong></li>
      <li><span>{{ labels.tithi | escape }}</span><strong>{{ panchang.paksha }} {{ panchang.tithi }}</strong></li>
      <li><span>{{ labels.nakshatra | escape }}</span><strong>{{ panchang.nakshatra }}</strong></li>
      <li><span>{{ labels.yoga | escape }}</span><strong>{{ panchang.yoga }}</strong></li>
      <li><span>{{ labels.karana | escape }}</span><strong>{{ panchang.karana }}</strong></li>
      <li><span>{{ labels.sunrise | escape }}</span><strong>{{ panchang.sunrise }}</strong></li>
      <li><span>{{ labels.sunset | escape }}</span><strong>{{ panchang.sunset }}</strong></li>
      <li><span>{{ labels.lunarPhase | escape }}</span><strong>{{ panchang.moonPhase }}</strong></li>
    </ul>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="planets" class="doc-page">
    <h2>{{ labels.planetsHeading | escape }}</h2>
    <div class="kp-scroll">
      <table class="kp-table">
        <thead>
          <tr>
            <th>{{ labels.colPlanet | escape }}</th><th>{{ labels.colSign | escape }}</th><th>{{ labels.colDegree | escape }}</th><th>{{ labels.colHouse | escape }}</th>
            <th>{{ labels.colNakshatra | escape }}</th><th>{{ labels.colPada | escape }}</th><th>{{ labels.colSignLord | escape }}</th><th>{{ labels.colNakLord | escape }}</th>
            <th>{{ labels.colDignity | escape }}</th><th>{{ labels.colState | escape }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for p in planets -%}
            <tr>
              <td class="kp-nowrap">{{ p.glyph }} {{ p.name }}</td>
              <td>{{ p.sign }}</td>
              <td class="kp-nowrap">{{ p.degree }}</td>
              <td>{{ p.house }}</td>
              <td>{{ p.nakshatra }}</td>
              <td>{{ p.pada }}</td>
              <td>{{ p.signLordName }}</td>
              <td>{{ p.nakLordName }}</td>
              <td class="kp-nowrap">{{ p.dignity }}</td>
              <td><span class="kp-state-{{ p.state | downcase }}">{{ p.state }}</span></td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="shadbala" class="doc-page">
    <h2>{{ labels.shadbalaHeading | escape }}</h2>
    <p class="kp-sub">{{ labels.shadbalaOrderLabel | escape }} {{ shadbala.order }}</p>
    <div class="kp-scroll">
      <table class="kp-table">
        <thead>
          <tr>
            <th>{{ labels.colRank | escape }}</th><th>{{ labels.colPlanet | escape }}</th>
            {%- for c in shadbala.components -%}<th>{{ c.label }}</th>{%- endfor -%}
            <th>{{ labels.colTotal | escape }}</th><th>{{ labels.colRequired | escape }}</th><th>{{ labels.colRatio | escape }}</th><th>{{ labels.colStrength | escape }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for r in shadbala.rows -%}
            <tr>
              <td>{{ r.rank }}</td>
              <td>{{ r.glyph }} {{ r.name }}</td>
              <td>{{ r.sthana }}</td>
              <td>{{ r.dig }}</td>
              <td>{{ r.kala }}</td>
              <td>{{ r.cheshta }}</td>
              <td>{{ r.naisargika }}</td>
              <td>{{ r.drik }}</td>
              <td><strong>{{ r.total }}</strong></td>
              <td>{{ r.required }}</td>
              <td>{{ r.ratio }}</td>
              <td><span class="kp-{{ r.strengthTone }}">{{ r.strengthLabel }}</span></td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="charts" class="doc-page">
    <h2>{{ labels.chartsHeading | escape }}</h2>
    <p class="kp-sub">{{ labels.chartsIntro | escape }}</p>
    <div class="kp-varga-grid">
      {%- for v in vargas -%}
        <figure class="kp-chart" id="{{ v.anchor }}">
          <figcaption>{{ v.title }}</figcaption>
          {% render 'chart', cells: v.cells, style: meta.style, lang: meta.language, uid: v.id %}
          <p class="kp-varga-desc">{{ v.description }}</p>
        </figure>
      {%- endfor -%}
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="dashas" class="doc-page">
    <h2>{{ labels.dashaHeading | escape }}</h2>
    <p class="kp-current">{{ labels.dashaRunningLabel | escape }} {{ dasha.current }}</p>
    <p class="kp-sub">
      {{ labels.dashaIntro | escape }}
    </p>
    <div class="kp-scroll">
      <div class="kp-dtree">
        <div class="kp-dtree-head"><span>{{ labels.colPeriod | escape }}</span><span>{{ labels.colStart | escape }}</span><span>{{ labels.colEnd | escape }}</span></div>
        {%- for d in dasha.periods -%}
          <details class="kp-dnode kp-d1" id="{{ d.anchor }}"{% if d.active %} open{% endif %}>
            <summary class="kp-drow{% if d.active %} kp-dactive{% endif %}">
              <span class="kp-dname">{{ d.glyph }} {{ d.lordName }} {{ labels.mahadasha | escape }}</span>
              <span class="kp-ddate">{{ d.start }}</span>
              <span class="kp-ddate">{{ d.end }}</span>
            </summary>
            {%- for a in d.antars -%}
              <details class="kp-dnode kp-d2"{% if a.active %} open{% endif %}>
                <summary class="kp-drow{% if a.active %} kp-dactive{% endif %}">
                  <span class="kp-dname">{{ a.lordName }} {{ labels.antardasha | escape }}</span>
                  <span class="kp-ddate">{{ a.start }}</span>
                  <span class="kp-ddate">{{ a.end }}</span>
                </summary>
                {%- for p in a.prats -%}
                  <details class="kp-dnode kp-d3"{% if p.active %} open{% endif %}>
                    <summary class="kp-drow{% if p.active %} kp-dactive{% endif %}">
                      <span class="kp-dname">{{ p.lordName }} {{ labels.pratyantardasha | escape }}</span>
                      <span class="kp-ddate">{{ p.start }}</span>
                      <span class="kp-ddate">{{ p.end }}</span>
                    </summary>
                    {%- for s in p.sukshmas -%}
                      <div class="kp-drow kp-d4{% if s.active %} kp-dactive{% endif %}">
                        <span class="kp-dname">{{ s.lordName }} {{ labels.sukshma | escape }}</span>
                        <span class="kp-ddate">{{ s.start }}</span>
                        <span class="kp-ddate">{{ s.end }}</span>
                      </div>
                    {%- endfor -%}
                  </details>
                {%- endfor -%}
              </details>
            {%- endfor -%}
          </details>
        {%- endfor -%}
      </div>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="ashtaka" class="doc-page">
    <h2>{{ labels.ashtakavargaHeading | escape }}</h2>
    <p class="kp-sub">
      {{ labels.ashtakavargaIntro | escape }} {{ labels.ashtakavargaTotalLabel | escape }} {{ ashtakavarga.total }} {{ labels.ashtakavargaClassical | escape }}
    </p>
    <div class="kp-scroll">
      <table class="kp-table kp-av">
        <thead>
          <tr>
            <th>{{ labels.colSign | escape }}</th><th>{{ labels.colHouse | escape }}</th>
            {%- for h in ashtakavarga.heads -%}<th>{{ h }}</th>{%- endfor -%}
            <th>{{ labels.colSav | escape }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for r in ashtakavarga.rows -%}
            <tr class="{% if r.isAsc %}kp-asc-row{% endif %}">
              <td>{{ r.signShort }} {{ r.sign }}</td>
              <td>{{ r.house }}</td>
              {%- for v in r.bav -%}<td>{{ v }}</td>{%- endfor -%}
              <td class="{% if r.savTone != "" %}kp-{{ r.savTone }}{% endif %}"><strong>{{ r.sav }}</strong></td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="yogas" class="doc-page">
    <h2>{{ labels.yogasHeading | escape }}</h2>
    <div class="kp-cols">
      <div>
        <h3>{{ labels.yogas | escape }}</h3>
        {%- if yogas.size == 0 -%}
          <p class="kp-sub">{{ labels.noYogas | escape }}</p>
        {%- else -%}
          <ul class="kp-bullets">
            {%- for y in yogas -%}
              <li>
                <strong>{{ y.name }}</strong> — {{ y.description }}{%- if y.scope %} <span class="kp-scope">{{ y.scope }}</span>{%- endif -%}
                {%- if y.activations.size > 0 -%}
                  <div class="kp-acts">
                    <span class="kp-acts-label">{{ labels.dashaActivation | escape }}</span>
                    {%- for a in y.activations -%}
                      <span class="kp-act{% unless a.maha %} kp-act-antar{% endunless %}">{{ a.label }} · {{ a.window }}</span>
                    {%- endfor -%}
                  </div>
                {%- endif -%}
              </li>
            {%- endfor -%}
          </ul>
        {%- endif -%}
      </div>
      <div>
        <h3>{{ labels.doshas | escape }}</h3>
        <ul class="kp-bullets">
          {%- for d in doshas -%}
            <li>
              <strong>{{ d.name }}</strong> —
              <span class="kp-{{ d.statusTone }}">{{ d.statusLabel }}</span>
              {%- if d.scope %} <span class="kp-scope">{{ d.scope }}</span>{%- endif -%}
              <br />{{ d.detail }}
              {%- if d.activations.size > 0 -%}
                <div class="kp-acts">
                  <span class="kp-acts-label">{{ labels.dashaActivation | escape }}</span>
                  {%- for a in d.activations -%}
                    <span class="kp-act{% unless a.maha %} kp-act-antar{% endunless %}">{{ a.label }} · {{ a.window }}</span>
                  {%- endfor -%}
                </div>
              {%- endif -%}
            </li>
          {%- endfor -%}
        </ul>
      </div>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="varshphal" class="doc-page">
    <h2>{{ labels.varshphalHeading | escape }}</h2>
    <p class="kp-sub">
      {{ labels.varshphalIntro | escape }} ({{ varshphal.range }}).
    </p>
    {%- for y in varshphal.years -%}
      <div class="kp-varsha" id="{{ y.anchor }}">
        <h3>{{ y.year }} · {{ labels.age | escape }} {{ y.age }}</h3>
        <p class="kp-sub"><strong>{{ labels.varshaPravesh | escape }}</strong> {{ y.pravesh }}</p>
        <ul class="kp-list kp-varsha-key">
          <li><span>{{ labels.varshaLagna | escape }}</span><strong>{{ y.lagna }}</strong></li>
          <li><span>{{ labels.muntha | escape }}</span><strong>{{ y.muntha }}</strong></li>
          <li><span>{{ labels.yearLord | escape }}</span><strong>{{ y.yearLordName }}</strong></li>
        </ul>
        <figure class="kp-chart">
          <figcaption>{{ y.chart.title }}</figcaption>
          {% render 'chart', cells: y.chart.cells, style: meta.style, lang: meta.language, uid: y.anchor %}
        </figure>
        <h4>{{ labels.muddaHeading | escape }}</h4>
        <div class="kp-scroll">
          <table class="kp-table">
            <thead><tr><th>{{ labels.colLord | escape }}</th><th>{{ labels.colStart | escape }}</th><th>{{ labels.colEnd | escape }}</th></tr></thead>
            <tbody>
              {%- for d in y.mudda -%}
                <tr><td>{{ d.glyph }} {{ d.lordName }}</td><td>{{ d.start }}</td><td>{{ d.end }}</td></tr>
              {%- endfor -%}
            </tbody>
          </table>
        </div>
      </div>
    {%- endfor -%}
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="interpretation" class="doc-page">
    <h2>{{ labels.interpretationHeading | escape }}</h2>
    <p class="kp-disclaimer">
      {{ labels.interpretationDisclaimer | escape }}
    </p>
    <h3>{{ labels.interpLagnaHeading | escape }} {{ interpretation.lagnaSign }}</h3>
    <p>{{ interpretation.lagnaText }} {{ labels.interpLagnaOutro | escape }}</p>

    <h3>{{ labels.interpMoonHeading | escape }} {{ interpretation.moonSign }}</h3>
    <p>
      {{ labels.interpMoonLead | escape }} {{ interpretation.moonSign }} {{ labels.interpMoonNatureSuffix | escape }} {{ interpretation.moonText }}
      {{ labels.interpBirthStar | escape }} <strong>{{ interpretation.moonNak }}</strong>, {{ labels.pada | escape }} {{ interpretation.moonPada }}.
    </p>

    <h3>{{ labels.interpSunHeading | escape }} {{ interpretation.sunSign }}</h3>
    <p>{{ interpretation.sunText }} {{ labels.interpSunOutro | escape }}</p>

    <h3>{{ labels.interpPlanetsHeading | escape }}</h3>
    <ul class="kp-bullets">
      {%- for p in interpretation.planets -%}
        <li><strong>{{ p.name }}</strong> {{ p.rest }}</li>
      {%- endfor -%}
    </ul>

    {%- if interpretation.current -%}
      <h3>{{ labels.interpCurrentHeading | escape }}</h3>
      <p>
        {{ labels.currentPre | escape }} <strong>{{ interpretation.current.mahaName }}</strong> {{ labels.mahadasha | escape }}.
        {{ interpretation.current.mahaText }} {{ labels.currentMid | escape }}
        (<strong>{{ interpretation.current.antarName }}</strong> {{ labels.antardasha | escape }}) {{ labels.currentPost | escape }}
        {{ interpretation.current.antarText }}
      </p>
    {%- endif -%}
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

        </td>
      </tr>
    </tbody>
  </table>
</div>
`,Xl=`{%- comment -%}
  Chart geometry (North / South / East Indian styles), owned entirely by the template.

  The backend sends values only: cells[] with { sign, signShort, house, isLagna,
  planets[] { short, degree, retrograde } }. Everything below - the frame, the cell
  polygons, where each label sits and how big it is - is decided here.

  Parameters:
    cells  - 12 chart cells (index order is sign 0-11)
    style  - "north" | "south" | "east"
    uid    - unique token per chart on the page (clip-path ids must not collide)

  Geometry model, one table per style, all indexed 0-11 and kept in step:
    keys    - lookup key per slot (house 1-12 for North, sign 0-11 otherwise)
    polys   - cell outline, also used as the clip region (nothing can escape a cell)
    boxes   - "x,y,w,h" label box, inscribed inside the cell polygon
    labels  - "x,y,anchor,font" for the sign abbreviation (anchor: m=middle, s=start)

  The label box is the key to correctness: it is chosen to sit strictly inside its
  cell (including the diagonal edges of triangular cells), so planet rows can never
  spill into a neighbouring house. Row height and font size shrink to fit the box
  when a house is crowded, and the clip path is the final backstop.
{%- endcomment -%}

{%- assign keys = "0,1,2,3,4,5,6,7,8,9,10,11" | split: "," -%}

{%- if style == "south" -%}
  {%- assign viewBox = "0 0 360 360" -%}
  {%- assign polys = "90,0 180,0 180,90 90,90|180,0 270,0 270,90 180,90|270,0 360,0 360,90 270,90|270,90 360,90 360,180 270,180|270,180 360,180 360,270 270,270|270,270 360,270 360,360 270,360|180,270 270,270 270,360 180,360|90,270 180,270 180,360 90,360|0,270 90,270 90,360 0,360|0,180 90,180 90,270 0,270|0,90 90,90 90,180 0,180|0,0 90,0 90,90 0,90" | split: "|" -%}
  {%- assign boxes = "94,18,82,68|184,18,82,68|274,18,82,68|274,108,82,68|274,198,82,68|274,288,82,68|184,288,82,68|94,288,82,68|4,288,82,68|4,198,82,68|4,108,82,68|4,18,82,68" | split: "|" -%}
  {%- assign labels = "95,13,s,11|185,13,s,11|275,13,s,11|275,103,s,11|275,193,s,11|275,283,s,11|185,283,s,11|95,283,s,11|5,283,s,11|5,193,s,11|5,103,s,11|5,13,s,11" | split: "|" -%}
{%- elsif style == "east" -%}
  {%- assign viewBox = "0 0 360 360" -%}
  {%- assign polys = "0,0 120,0 120,120|120,0 240,0 240,120 120,120|240,0 360,0 240,120|360,0 360,120 240,120|240,120 360,120 360,240 240,240|360,240 360,360 240,240|240,240 360,360 240,360|120,240 240,240 240,360 120,360|120,240 120,360 0,360|0,240 120,240 0,360|0,120 120,120 120,240 0,240|0,0 120,120 0,120" | split: "|" -%}
  {%- assign boxes = "62,8,54,50|126,24,108,84|246,8,50,50|304,62,52,52|246,144,108,84|304,246,52,52|246,300,52,52|126,264,108,84|62,302,52,52|6,246,52,50|6,144,108,84|6,62,52,50" | split: "|" -%}
  {%- assign labels = "30,18,m,10|128,16,s,11|318,22,m,10|330,52,m,10|248,136,s,11|342,326,m,10|262,290,m,10|128,256,s,11|100,292,m,10|22,320,m,10|8,136,s,11|26,48,m,10" | split: "|" -%}
{%- else -%}
  {%- comment -%} North: slots are houses 1-12, so keys are house numbers. {%- endcomment -%}
  {%- assign viewBox = "-12 -12 384 384" -%}
  {%- assign keys = "1,2,3,4,5,6,7,8,9,10,11,12" | split: "," -%}
  {%- assign polys = "180,0 270,90 180,180 90,90|0,0 180,0 90,90|0,0 90,90 0,180|0,180 90,90 180,180 90,270|0,180 90,270 0,360|0,360 90,270 180,360|90,270 180,180 270,270 180,360|180,360 270,270 360,360|270,270 360,180 360,360|180,180 270,90 360,180 270,270|270,90 360,0 360,180|180,0 360,0 270,90" | split: "|" -%}
  {%- assign boxes = "132,54,96,76|60,28,60,30|28,60,30,60|42,144,96,76|28,240,30,60|60,302,60,30|132,234,96,76|240,302,60,30|302,240,30,60|222,144,96,76|302,60,30,60|240,28,60,30" | split: "|" -%}
  {%- assign labels = "180,46,m,13|90,22,m,13|26,52,m,13|90,136,m,13|26,232,m,13|90,296,m,13|180,226,m,13|270,296,m,13|334,232,m,13|270,136,m,13|334,52,m,13|270,22,m,13" | split: "|" -%}
{%- endif -%}
<svg viewBox="{{ viewBox }}" class="chart-svg" xmlns="http://www.w3.org/2000/svg">
<defs>
{%- for k in keys -%}
<clipPath id="cc-{{ uid }}-{{ forloop.index0 }}"><polygon points="{{ polys[forloop.index0] }}" /></clipPath>
{%- endfor -%}
</defs>
<rect x="0" y="0" width="360" height="360" class="chart-frame" />
{%- if style == "north" -%}
<line x1="0" y1="0" x2="360" y2="360" class="chart-line" />
<line x1="360" y1="0" x2="0" y2="360" class="chart-line" />
<polygon points="180,0 360,180 180,360 0,180" class="chart-line" fill="none" />
{%- endif -%}
{%- for k in keys -%}
  {%- assign idx = forloop.index0 -%}
  {%- assign key = k | plus: 0 -%}
  {%- if style == "north" -%}
    {%- assign cell = cells | where: "house", key | first -%}
  {%- else -%}
    {%- assign cell = cells | where: "sign", key | first -%}
  {%- endif -%}
  {%- assign box = boxes[idx] | split: "," -%}
  {%- assign bx = box[0] | plus: 0 -%}
  {%- assign by = box[1] | plus: 0 -%}
  {%- assign bw = box[2] | plus: 0 -%}
  {%- assign bh = box[3] | plus: 0 -%}
  {%- assign lab = labels[idx] | split: "," -%}
  {%- assign lx = lab[0] | plus: 0 -%}
  {%- assign ly = lab[1] | plus: 0 -%}
  {%- assign lfs = lab[3] | plus: 0 -%}
  {%- assign lanchor = "middle" -%}
  {%- if lab[2] == "s" -%}{%- assign lanchor = "start" -%}{%- endif -%}
  {%- unless style == "north" -%}
<polygon points="{{ polys[idx] }}" class="grid-cell{% if cell.isLagna %} lagna{% endif %}" />
    {%- if style == "south" and cell.isLagna -%}
      {%- assign mx = bx | minus: 4 -%}
      {%- assign my = by | minus: 18 -%}
<line x1="{{ mx }}" y1="{{ my }}" x2="{{ mx | plus: 41 }}" y2="{{ my }}" class="lagna-mark" />
    {%- endif -%}
  {%- endunless -%}
<g clip-path="url(#cc-{{ uid }}-{{ idx }})">
<text x="{{ lx }}" y="{{ ly }}" class="house-sign" style="font-size:{{ lfs }}px;text-anchor:{{ lanchor }}">{{ cell.signShort }}</text>
  {%- assign n = cell.planets | size -%}
  {%- if n > 0 -%}
    {%- comment -%} Two columns only when the box is wide enough for two labels. {%- endcomment -%}
    {%- assign cols = 1 -%}
    {%- if n > 1 and bw >= 50 -%}{%- assign cols = 2 -%}{%- endif -%}
    {%- comment -%} LiquidJS divided_by is float division, so integers need floor/ceil. {%- endcomment -%}
    {%- assign rows = n | divided_by: cols | ceil -%}
    {%- assign colW = bw | divided_by: cols -%}
    {%- assign halfCol = colW | divided_by: 2 -%}
    {%- comment -%} Fit rows to the box, then size the font to the row and column. {%- endcomment -%}
    {%- assign rowH = bh | divided_by: rows | at_most: 16 -%}
    {%- assign fsCol = colW | times: 10 | divided_by: 26 -%}
    {%- assign fs = rowH | minus: 2 | at_most: fsCol | at_most: 13 | at_least: 6 -%}
    {%- assign dfs = fs | times: 6 | divided_by: 10 | at_least: 5 -%}
    {%- assign ddy = fs | divided_by: 4 -%}
    {%- comment -%}
      Devanagari puts its vowel marks and the shirorekha above the letter, so the space a
      Latin superscript rises into is already occupied. The degree sits on the baseline
      instead, which is also how Indian charts print it.
    {%- endcomment -%}
    {%- if lang == 'hi' -%}{%- assign ddy = 0 -%}{%- endif -%}
    {%- assign offY = rows | times: rowH | times: -1 | plus: bh | divided_by: 2 | at_least: 0 -%}
    {%- for p in cell.planets -%}
      {%- assign i = forloop.index0 -%}
      {%- assign r = i | divided_by: cols | floor -%}
      {%- assign c = i | modulo: cols -%}
      {%- comment -%} Centre a short final row instead of left-aligning it. {%- endcomment -%}
      {%- assign rowCount = r | times: cols | times: -1 | plus: n | at_most: cols -%}
      {%- assign shift = cols | minus: rowCount | times: colW | divided_by: 2 -%}
      {%- assign px = c | times: colW | plus: bx | plus: halfCol | plus: shift -%}
      {%- assign py = r | times: rowH | plus: by | plus: offY | plus: fs -%}
<text x="{{ px }}" y="{{ py }}" class="planet{% if p.retrograde %} retro{% endif %}" style="font-size:{{ fs }}px;text-anchor:middle">{{ p.short }}<tspan class="planet-deg" dx="1" dy="-{{ ddy }}" style="font-size:{{ dfs }}px">{{ p.degree }}</tspan></text>
    {%- endfor -%}
  {%- endif -%}
</g>
{%- endfor -%}
</svg>
`,jt={chart:Xl},ir=new kn({cache:!1,relativeReference:!1,fs:{exists:t=>Promise.resolve(t in jt),existsSync:t=>t in jt,readFile:t=>Promise.resolve(jt[t]??""),readFileSync:t=>jt[t]??"",resolve:(t,e)=>e}}),ec=ir.parse(Ql),ps=new Set(["H1","H2","H3","H4","H5","H6"]),tc=6,nc=t=>t*96/25.4;function sc(t,e){if(typeof document>"u")return[t];const n=document.createElement("div");n.className=e.docClassName,n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;";const s=document.createElement("div");s.className=e.pageClassName;const r=document.createElement("div");r.className=e.bodyClassName;const a=document.createElement("div");a.innerHTML=e.footHtml,s.append(r,...Array.from(a.childNodes)),n.appendChild(s),document.body.appendChild(n);try{const o=rc(s,r,e.footClassName);if(o<=0)return[t];r.style.flex="0 0 auto";const l=document.createElement("div");l.innerHTML=t;const h=Array.from(l.children);if(!h.length)return[t];const c=ac(ic(h),r,o);return c.length?c:[t]}finally{n.remove()}}function rc(t,e,n){const s=getComputedStyle(t),r=t.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom),a=t.querySelector(`.${n}`);let o=0;if(a){const c=getComputedStyle(a);o=a.offsetHeight+parseFloat(c.marginTop||"0")+parseFloat(c.marginBottom||"0")}const l=r-o,h=e.clientHeight;return Math.max(l,h)-nc(tc)}function ic(t){const e=[];let n=0;for(;n<t.length;){const s=[t[n]];if(ps.has(t[n].tagName)){for(n+=1;n<t.length&&ps.has(t[n].tagName);)s.push(t[n]),n+=1;n<t.length&&(s.push(t[n]),n+=1)}else n+=1;e.push(s)}return e}function ac(t,e,n){var a;const s=[];e.replaceChildren();const r=()=>{e.childNodes.length&&s.push(e.innerHTML),e.replaceChildren()};for(const o of t){const l=e.childNodes.length;for(const h of o)e.appendChild(h.cloneNode(!0));if(!(e.scrollHeight<=n)){for(;e.childNodes.length>l;)(a=e.lastChild)==null||a.remove();if(l>0){r();for(const h of o)e.appendChild(h.cloneNode(!0));if(e.scrollHeight<=n)continue;e.replaceChildren()}for(const h of oc(o,e,n,r))e.appendChild(h)}}return r(),s}function oc(t,e,n,s){const r=[];for(const o of t)r.push(...lc(o,e,n));for(let o=0;o<r.length;o+=1){const l=r[o];if(e.appendChild(l),!(e.scrollHeight<=n)){if(e.childNodes.length===1){s();continue}l.remove(),s(),e.appendChild(l)}}const a=Array.from(e.childNodes);return e.replaceChildren(),a}function lc(t,e,n){const s=t.matches("table")?t:t.querySelector("table");return s?cc(t,s,e,n):t.matches("ul, ol")?dc(t,e,n):[t]}function cc(t,e,n,s){const r=e.querySelector("tbody"),a=r?Array.from(r.rows):[];if(a.length<2)return[t];const o=t!==e,l=()=>{const f=e.cloneNode(!1),y=e.querySelector("thead");y&&f.appendChild(y.cloneNode(!0));const k=document.createElement("tbody");if(f.appendChild(k),!o)return{piece:f,sink:k};const z=t.cloneNode(!1);return z.appendChild(f),{piece:z,sink:k}},h=[];let{piece:c,sink:d}=l();n.replaceChildren(c);for(const f of a)d.appendChild(f.cloneNode(!0)),!(n.scrollHeight<=s)&&d.rows.length!==1&&(d.deleteRow(-1),h.push(c),{piece:c,sink:d}=l(),d.appendChild(f.cloneNode(!0)),n.replaceChildren(c));return h.push(c),n.replaceChildren(),h}function dc(t,e,n){var c;const s=Array.from(t.children).filter(d=>d.tagName==="LI");if(s.length<2)return[t];const r=t.tagName==="OL",a=r?Number(t.start||1):1,o=[];let l=0,h=t.cloneNode(!1);r&&h.setAttribute("start",String(a)),e.replaceChildren(h);for(const d of s)h.appendChild(d.cloneNode(!0)),l+=1,!(e.scrollHeight<=n)&&h.children.length!==1&&((c=h.lastElementChild)==null||c.remove(),o.push(h),h=t.cloneNode(!1),r&&h.setAttribute("start",String(a+l-1)),h.appendChild(d.cloneNode(!0)),e.replaceChildren(h));return o.push(h),e.replaceChildren(),o}const hc="report-doc",uc="report-page",pc="report-page-body",ar="report-page-foot";function or(t){return`<span class="doc-foot-brand">${fs(t.lifeReport)} | <a href="https://kundli.bipul.in">https://kundli.bipul.in</a></span><span class="page-num" data-label="${fs(t.page)}"></span>`}function lr(t){return`<div class="${ar}">${or(t)}</div>`}function fs(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function cr(t,e){return sc(t,{docClassName:hc,pageClassName:uc,bodyClassName:pc,footHtml:lr(e),footClassName:ar})}const dr='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Noto+Sans:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap">';function Qt(t,e,n){const s=new Blob([e],{type:n}),r=URL.createObjectURL(s),a=document.createElement("a");a.href=r,a.download=t,a.click(),URL.revokeObjectURL(r)}function fc(t,e){return`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=900"><title>${e}</title>${dr}<style>
    * { box-sizing: border-box; }
    html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body {
      margin: 0;
      padding: 1.5rem;
      background:
        radial-gradient(1100px 620px at 78% -8%, rgba(138, 79, 212, 0.1), transparent 60%),
        radial-gradient(900px 520px at 8% 0%, rgba(224, 169, 59, 0.12), transparent 55%),
        radial-gradient(circle at top, #ffffff, #f5f1ea);
      background-attachment: fixed;
      -webkit-font-smoothing: antialiased;
      /* Keep the sheet at full desktop width even inside a narrow window. */
      min-width: 900px;
    }
    .kundli-doc {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
    .doc-page {
      width: 8.5in;
      min-height: 11in;
      background: #fff;
      border: 1px solid #ddd4ca;
      box-shadow: 0 10px 30px -14px rgba(60, 40, 10, 0.25);
      padding: 0.6in 0.7in 0.8in;
    }
    @page { size: letter; margin: 14mm; }
    @media print {
      body { padding: 0; background: #fff; min-width: 0; }
      .kundli-doc { gap: 0; }
      .doc-page {
        width: auto;
        min-height: 0;
        height: auto;
        max-width: none;
        border: none;
        box-shadow: none;
        padding: 0;
        break-after: page;
        page-break-after: always;
      }
      .doc-page:last-child { break-after: auto; page-break-after: auto; }
      .kp-table, .kp-chart { break-inside: avoid; }
      .kp-table tr { break-inside: avoid; }
    }</style></head><body>${t}<style>
    @media (max-width: 720px) {
      .kp-cols { grid-template-columns: 1fr 1fr; }
      .kp-varga-grid { grid-template-columns: repeat(2, 1fr); }
      .kp-dtree { font-size: 0.85rem; }
      .kp-dtree-head, .kp-drow {
        grid-template-columns: minmax(12rem, 1fr) 8rem 8rem;
        gap: 0.5rem;
        padding: 0.34rem 0.6rem;
      }
      .kp-ddate { font-size: inherit; }
      .kp-d2 > summary.kp-drow .kp-dname { padding-left: 1.1rem; }
      .kp-d3 > summary.kp-drow .kp-dname { padding-left: 2.2rem; }
      .kp-d4 .kp-dname { padding-left: 4.2rem; }
    }</style></body></html>`}function mc(t,e,n){const r=`
    * { box-sizing: border-box; }
    html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body {
      margin: 0;
      padding: 2rem 1.5rem;
      background: #f5f1e9;
      /* The app's pairing, with system fallbacks so the file still reads as a
         document offline or on a machine that never loads the webfonts. */
      --doc-body: "Noto Sans", "Segoe UI", "Nirmala UI", "Noto Sans Devanagari", sans-serif;
      --doc-display: Manrope, "Noto Sans", "Segoe UI", "Nirmala UI",
        "Noto Sans Devanagari", sans-serif;
      font-family: var(--doc-body);
      font-size: 13.5px;
      line-height: 1.55;
      color: #1d1a16;
      -webkit-font-smoothing: antialiased;
      /* Keep the sheet at full desktop width even inside a narrow window. */
      min-width: 890px;
    }
    .report-doc {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      counter-reset: doc-page;
    }
    .report-page {
      width: 210mm;
      min-height: 297mm;
      background: #fff;
      border: 1px solid #e4ddcf;
      box-shadow: 0 10px 30px -14px rgba(60, 40, 10, 0.25);
      padding: 0.6in 0.7in 0.45in;
      display: flex;
      flex-direction: column;
      counter-increment: doc-page;
    }
    .report-page-body { flex: 1 0 auto; }
    .report-page-body > :first-child { margin-top: 0; }
    .report-page-foot {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      margin-top: 1.6rem;
      padding-top: 0.6rem;
      border-top: 1px solid #e4ddcf;
      color: #9a9183;
      font-size: 0.66rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .report-page-foot .doc-foot-brand { text-transform: none; letter-spacing: 0.04em; }
    .report-page-foot a { color: #8a2d3b; text-decoration: none; }
    .page-num::before { content: attr(data-label) " " counter(doc-page); }
    h1, h2, h3, h4 { font-family: var(--doc-display); }
    h1 {
      margin: 0 0 1.6rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #8a2d3b;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    h2 {
      position: relative;
      margin: 2rem 0 0.95rem;
      padding-bottom: 0.35rem;
      border-bottom: 1px solid #e4ddcf;
      font-size: 0.95rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8a2d3b;
    }
    h2::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 2.4rem;
      height: 2px;
      background: #b08436;
    }
    h3 { margin: 1.4rem 0 0.3rem; font-size: 1rem; font-weight: 600; }
    h4 {
      margin: 1.1rem 0 0.3rem;
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #6f665a;
    }
    p { margin: 0.4rem 0 0.75rem; }
    ul, ol { margin: 0.4rem 0 0.9rem; padding-left: 1.3rem; }
    li { margin-bottom: 0.25rem; }
    /* The report body arrives with its tables already wrapped for scrolling.
       This document is pinned to desktop width so nothing can overflow, but the
       wrapper still has to be a no-op box rather than an unstyled div. */
    .report-table-scroll { overflow-x: auto; margin: 0.5rem 0 1.2rem; }
    table { width: 100%; margin: 0; border-collapse: collapse; font-size: 0.8rem; }
    thead th {
      background: #f4eee3;
      color: #8a2d3b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.68rem;
      font-weight: 600;
      text-align: left;
      padding: 0.45rem 0.35rem;
      border-bottom: 1.5px solid #8a2d3b;
    }
    td { padding: 0.35rem; border-bottom: 1px solid #e4ddcf; text-align: left; vertical-align: top; }
    tbody tr:nth-child(even) td { background: #faf7f1; }
    blockquote {
      margin: 0.5rem 0 1rem;
      padding: 0.15rem 0 0.15rem 0.9rem;
      border-left: 2px solid #b08436;
      color: #6f665a;
      font-style: italic;
    }
    hr { margin: 1.6rem 0; border: none; border-top: 1px solid #e4ddcf; }
    code {
      font-family: ui-monospace, "SF Mono", "Cascadia Mono", monospace;
      font-size: 0.85em;
      background: #faf7f1;
      padding: 0.1em 0.35em;
      border-radius: 4px;
    }
    pre {
      margin: 0.5rem 0 1rem;
      padding: 0.8rem 1rem;
      background: #faf7f1;
      border: 1px solid #e4ddcf;
      border-radius: 8px;
      overflow-x: auto;
    }
    pre code { background: none; padding: 0; }
    /* The sheet already carries its own margins, so the page box adds none —
       otherwise the printed text column would be inset twice. */
    @page { size: A4; margin: 0; }
    @media print {
      body { padding: 0; background: #fff; min-width: 0; }
      .report-doc { display: block; gap: 0; }
      .report-page {
        width: 100%;
        min-height: 0;
        height: auto;
        border: none;
        box-shadow: none;
        display: block;
        break-after: page;
        page-break-after: always;
      }
      .report-page:last-child { break-after: auto; page-break-after: auto; }
      .report-table-scroll { overflow: visible; }
      tr { break-inside: avoid; }
    }`,a=t.map(o=>`<section class="report-page"><div class="report-page-body">${o}</div>${lr(n)}</section>`).join("");return`<!doctype html><html lang="${n.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=890"><title>${e}</title>${dr}<style>${r}</style></head><body><div class="report-doc">${a}</div></body></html>`}const gc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Je(t){return t.replace(/[&<>"']/g,e=>gc[e])}function Lt(t){const e=[];let n=t.replace(/`([^`]+)`/g,(s,r)=>(e.push(r),`\0${e.length-1}\0`));return n=n.replace(/\*\*\*([^*]+)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/(^|[^*\w])\*([^*\n]+)\*/g,"$1<em>$2</em>").replace(/(^|[^\w_])_([^_\n]+)_(?![\w_])/g,"$1<em>$2</em>"),n.replace(/\u0000(\d+)\u0000/g,(s,r)=>`<code>${e[Number(r)]}</code>`)}const bc="report-";function yc(t,e){const n=t.replace(/[*_`]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||`section-${e.size+1}`,s=(e.get(n)??0)+1;return e.set(n,s),`${bc}${n}${s>1?`-${s}`:""}`}const ms=t=>/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(t);function ln(t){return t.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(n=>n.trim())}function xc(t){return ln(t).map(e=>{const n=e.startsWith(":"),s=e.endsWith(":");return n&&s?"center":s?"right":n?"left":null})}function gs(t,e,n){const s=n?` style="text-align:${n}"`:"";return`<${t}${s}>${Lt(Je(e))}</${t}>`}function vc(t){return hr(t,new Map)}function hr(t,e){const n=t.replace(/\r\n?/g,`
`).split(`
`),s=[];let r=0;for(;r<n.length;){const a=n[r];if(!a.trim()){r+=1;continue}const o=/^\s*```+\s*([\w-]*)\s*$/.exec(a);if(o){const f=[];for(r+=1;r<n.length&&!/^\s*```+\s*$/.test(n[r]);)f.push(n[r]),r+=1;r+=1;const y=o[1]?` class="language-${Je(o[1])}"`:"";s.push(`<pre><code${y}>${Je(f.join(`
`))}</code></pre>`);continue}if(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(a)){s.push("<hr />"),r+=1;continue}const l=/^(#{1,6})\s+(.*)$/.exec(a);if(l){const f=l[1].length,y=l[2].trim(),k=yc(y,e);s.push(`<h${f} id="${k}">${Lt(Je(y))}</h${f}>`),r+=1;continue}if(a.includes("|")&&r+1<n.length&&ms(n[r+1])){const f=xc(n[r+1]),y=ln(a),k=[];for(r+=2;r<n.length&&n[r].includes("|")&&n[r].trim();)k.push(ln(n[r])),r+=1;const z=y.map((Z,K)=>gs("th",Z,f[K]??null)).join(""),v=k.map(Z=>`<tr>${Z.map((K,w)=>gs("td",K,f[w]??null)).join("")}</tr>`).join("");s.push(`<div class="report-table-scroll"><table><thead><tr>${z}</tr></thead><tbody>${v}</tbody></table></div>`);continue}if(/^\s*>\s?/.test(a)){const f=[];for(;r<n.length&&/^\s*>\s?/.test(n[r]);)f.push(n[r].replace(/^\s*>\s?/,"")),r+=1;s.push(`<blockquote>${hr(f.join(`
`),e)}</blockquote>`);continue}const h=/^\s*[-*+]\s+/.test(a),c=/^\s*\d+[.)]\s+/.test(a);if(h||c){const f=h?/^\s*[-*+]\s+/:/^\s*\d+[.)]\s+/,y=[];for(;r<n.length&&f.test(n[r]);){const v=[n[r].replace(f,"")];for(r+=1;r<n.length&&n[r].trim()&&!/^\s*[-*+]\s+/.test(n[r])&&!/^\s*\d+[.)]\s+/.test(n[r])&&!/^(#{1,6})\s+/.test(n[r]);)v.push(n[r].trim()),r+=1;y.push(`<li>${Lt(Je(v.join(" ")))}</li>`)}const k=h?"ul":"ol";s.push(`<${k}>${y.join("")}</${k}>`);continue}const d=[];for(;r<n.length&&n[r].trim()&&!/^(#{1,6})\s+/.test(n[r])&&!/^\s*[-*+]\s+/.test(n[r])&&!/^\s*\d+[.)]\s+/.test(n[r])&&!/^\s*>\s?/.test(n[r])&&!/^\s*```+/.test(n[r])&&!/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(n[r])&&!(n[r].includes("|")&&r+1<n.length&&ms(n[r+1]));)d.push(n[r].trim()),r+=1;d.length?s.push(`<p>${Lt(Je(d.join(" ")))}</p>`):r+=1}return s.join(`
`)}function kc(t){const e=/^(\d+)\.\s+(.*)$/.exec(t);return e?{ordinal:e[1],text:e[2]}:{ordinal:null,text:t}}function wc(t){if(!t||typeof DOMParser>"u")return[];const e=new DOMParser().parseFromString(t,"text/html"),n=[];return e.querySelectorAll("h2[id], h3[id]").forEach(s=>{const r=(s.textContent??"").trim();if(!r)return;if(s.tagName==="H3"&&n.length){n[n.length-1].children.push({id:s.id,label:r});return}const{ordinal:a,text:o}=kc(r);n.push({id:s.id,label:o,ordinal:a,children:[]})}),n}const jc=2e4;function _c({mode:t,hubTab:e}){var Cn;const n=Ns(),{token:s,user:r,signOut:a,hasFeature:o}=jr(),l=(r==null?void 0:r.appRole)==="superadmin",h=Nr(r==null?void 0:r.appRole),{input:c,data:d,loading:f,error:y,style:k,saved:z,savedLoading:v,savedError:Z,refreshSaved:K,activeProfile:w,saveToAccount:Ne,removeSaved:te}=Sr(),[ye,pt]=g.useState("overview"),[Be,se]=g.useState(null),[re,Se]=g.useState(null),[He,ft]=g.useState(null),[Te,he]=g.useState({}),[B,q]=g.useState(!1),[Le,Ve]=g.useState(null),[ie,Ce]=g.useState(!1),[_e,G]=g.useState(!1),[Ee,qe]=g.useState(!1),[J,xe]=g.useState(""),[mt,Ue]=g.useState(null),[P,ve]=g.useState("chart"),[O,Me]=g.useState(null),[gt,ue]=g.useState(!1),[We,$]=g.useState(!1),[it,pe]=g.useState(null),at=g.useRef(null),Ye=g.useRef(null),U=(w==null?void 0:w.id)??null,fe=(O==null?void 0:O.status)??(w==null?void 0:w.reportStatus)??"none",It=fe==="ready",u=(O==null?void 0:O.markdown)??null,x=(O==null?void 0:O.locked)??!o(Ss),L=g.useMemo(()=>u?vc(u):"",[u]),T=g.useMemo(()=>wc(L),[L]),[bt,Bt]=g.useState(0),ur=g.useCallback(()=>Bt(p=>p+1),[]);g.useEffect(()=>{Ce(!1)},[c==null?void 0:c.id]),g.useEffect(()=>{Me(null),ue(!1),pe(null),ve("chart")},[U]),g.useEffect(()=>{if(P!=="report"||!U||!s||O)return;let p=!1;return(async()=>{try{const b=await Ut(s,U);p||Me(b)}catch(b){if(p)return;b instanceof kt?(a(),n({to:"/login"})):pe("Could not load the report. Please try again.")}finally{p||ue(!0)}})(),()=>{p=!0}},[P,U,s,O,a,n]),g.useEffect(()=>{if(P!=="report"||!U||!s||(O==null?void 0:O.status)!=="pending"||x)return;const p=window.setInterval(()=>{(async()=>{try{Me(await Ut(s,U))}catch{}})()},jc);return()=>window.clearInterval(p)},[P,U,s,O==null?void 0:O.status,x]),g.useEffect(()=>{if(!_e)return;function p(N){Ye.current&&!Ye.current.contains(N.target)&&G(!1)}function b(N){N.key==="Escape"&&G(!1)}return document.addEventListener("mousedown",p),document.addEventListener("keydown",b),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",b)}},[_e]);async function wn(p){if(!r||!s){n({to:"/login"});return}try{const b=await Ne(p);n({to:"/kundli/$profileId",params:{profileId:b.id}})}catch(b){if(b instanceof Tr){Ve(b.message);return}window.alert(b instanceof Error&&b.message?b.message:"Couldn't save the chart. Please try again.")}}function jn(p){q(!1),n({to:"/kundli/$profileId",params:{profileId:p.id}})}g.useEffect(()=>{if(!d){xe("");return}let p=!1;Ue(null);const b={...d,meta:{...d.meta,style:k}};return ir.render(ec,b).then(N=>{p||xe(N)}).catch(N=>{p||Ue(N instanceof Error?N.message:String(N))}),()=>{p=!0}},[d,k]);const yt=g.useMemo(()=>({lifeReport:(d==null?void 0:d.labels.lifeReport)??"Life Report",page:(d==null?void 0:d.labels.page)??"Page",lang:(d==null?void 0:d.meta.language)??"en"}),[d]),Ze=g.useMemo(()=>d?{charts:d.vargas.map(p=>({id:p.anchor,label:p.title})),dashas:d.dasha.periods.map(p=>({id:p.anchor,label:`${p.lordName} ${d.labels.mahadasha}`})),varshphal:d.varshphal.years.map(p=>({id:p.anchor,label:`${d.labels.year} ${p.year}`}))}:{},[d]);g.useEffect(()=>{if(!d)return;const p={};Object.keys(Ze).forEach(N=>{var _;(_=Ze[N])==null||_.forEach(M=>{p[M.id]=N})});const b=new IntersectionObserver(N=>{const _=N.filter(A=>A.isIntersecting).sort((A,Q)=>Q.intersectionRatio-A.intersectionRatio)[0];if(!_)return;const M=_.target.id;if(p[M]){const A=p[M];pt(A),se(M),he(Q=>Q[A]?Q:{...Q,[A]:!0})}else pt(M),se(null)},{rootMargin:"-20% 0px -70% 0px",threshold:[0,.25,.5,1]});return Dn.forEach(N=>{const _=document.getElementById(N.id);_&&b.observe(_)}),Object.keys(p).forEach(N=>{const _=document.getElementById(N);_&&b.observe(_)}),()=>b.disconnect()},[d,Ze,J]),g.useEffect(()=>{if(P!=="report"||T.length===0)return;const p={};T.forEach(N=>{N.children.forEach(_=>{p[_.id]=N.id})});const b=new IntersectionObserver(N=>{const _=N.filter(Q=>Q.isIntersecting).sort((Q,wr)=>wr.intersectionRatio-Q.intersectionRatio)[0];if(!_)return;const M=_.target.id,A=p[M];A?(Se(A),ft(M),he(Q=>Q[A]?Q:{...Q,[A]:!0})):(Se(M),ft(null))},{rootMargin:"-20% 0px -70% 0px",threshold:[0,.25,.5,1]});return T.forEach(N=>{const _=document.getElementById(N.id);_&&b.observe(_),N.children.forEach(M=>{const A=document.getElementById(M.id);A&&b.observe(A)})}),()=>b.disconnect()},[P,T,bt]),g.useEffect(()=>{const p=at.current;if(!p)return;const b=p.querySelector(".nav-sublink.active, .nav-link.active");b&&b.scrollIntoView({block:"nearest"})},[ye,Be,re,He,Te]),g.useEffect(()=>(document.body.classList.toggle("nav-locked",B),()=>document.body.classList.remove("nav-locked")),[B]);function xt(p){const b=document.getElementById(p);b&&b.scrollIntoView({behavior:"smooth",block:"start"}),q(!1)}function Nn(p){he(b=>({...b,[p]:!b[p]}))}const vt=P==="report"?T.filter(p=>p.children.length>0).map(p=>p.id):Object.keys(Ze).filter(p=>{var b;return(((b=Ze[p])==null?void 0:b.length)??0)>0});function pr(){he(p=>{const b={...p};return vt.forEach(N=>{b[N]=!0}),b})}function fr(){he(p=>{const b={...p};return vt.forEach(N=>{delete b[N]}),b})}function mr(){q(!1),n(r?{to:"/kundli",search:{tab:"new"}}:{to:"/"})}function gr(){q(!1),n({to:"/kundli",search:{tab:"recent"}})}function Sn(){Qt(`${Ht}.html`,fc(J,ot||"Kundli"),"text/html")}async function br(){if(!c||!s){n({to:"/login"});return}if(!l){Ue("AI Agent Input export is restricted to superadmins.");return}qe(!0);try{const p=await Cr(s,c);Qt(`${Ht}-ai.md`,p,"text/markdown")}catch(p){p instanceof kt?(a(),n({to:"/login"})):Ue("Could not generate the AI Agent Input. Please try again.")}finally{qe(!1)}}const ot=(Cn=c==null?void 0:c.name)==null?void 0:Cn.trim(),Ht=(ot||"kundli").replace(/\s+/g,"_").toLowerCase();async function yr(){if(!U||!s){n({to:"/login"});return}$(!0),pe(null);try{Me(await Or(s,U,!1))}catch(p){p instanceof kt?(a(),n({to:"/login"})):pe(p instanceof Error?p.message:"Could not start the report.")}finally{$(!1)}}async function xr(){if(!(!U||!s)){$(!0),pe(null);try{Me(await Ut(s,U))}catch(p){p instanceof kt?(a(),n({to:"/login"})):pe("Could not check the report. Please try again.")}finally{$(!1)}}}function Tn(){L&&Qt(`${Ht}-report.html`,mc(cr(L,yt),`${ot||"Kundli"} — ${yt.lifeReport}`,yt),"text/html")}const Ln=Le?i.jsx(Cs,{feature:Lr,title:"Your plan is full",message:Le,onClose:()=>Ve(null)}):null;if(t==="hub"){const p=z.length,b=e??(p>0?"recent":"new");return i.jsxs(i.Fragment,{children:[i.jsx(qt,{}),i.jsxs("main",{className:"hub page-main",id:"main-content",children:[i.jsx("div",{className:"landing-bg","aria-hidden":!0}),i.jsxs("div",{className:"hub-shell page-container",children:[i.jsxs("header",{className:"page-heading hub-heading",children:[i.jsxs("div",{children:[i.jsx("span",{className:"hub-desktop eyebrow",children:"Your personal astrology space"}),i.jsxs("h1",{children:[i.jsx("span",{className:"hub-mobile",children:"Welcome back"}),i.jsx("span",{className:"hub-desktop",children:"Your Kundli workspace"})]}),i.jsx("p",{children:p>0?"Open a saved profile, or cast a new chart.":"Cast your first chart and it'll be saved to your account."})]}),!v&&!Z&&i.jsxs("div",{className:"hub-desktop hub-collection",children:[i.jsx("span",{className:"eyebrow",children:"Your collection"}),i.jsxs("strong",{children:[p.toLocaleString()," saved ",p===1?"profile":"profiles"]})]})]}),i.jsx("section",{className:"hub-card",children:i.jsx($n,{onSubmit:wn,loggedIn:!!r,desktopWorkspace:!0,savedItems:z,savedLoading:v,savedError:Z,onRetrySaved:()=>void K(),onSelectSaved:jn,onDeleteSaved:h?te:void 0,defaultTab:b,requestedTab:e,feedback:i.jsxs(i.Fragment,{children:[f&&i.jsx("p",{className:"loading",role:"status",children:"Casting your chart…"}),y&&i.jsx("p",{className:"error",role:"alert",children:y})]})})})]})]}),Ln]})}if(t==="landing")return i.jsxs(i.Fragment,{children:[i.jsx(qt,{}),i.jsxs("main",{className:"landing",id:"main-content",children:[i.jsx("div",{className:"landing-bg","aria-hidden":!0}),i.jsxs("div",{className:"landing-page",children:[i.jsxs("section",{className:"landing-inner page-container",children:[i.jsxs("div",{className:"landing-hero",children:[i.jsxs("div",{className:"landing-brand",children:[i.jsx(ct,{className:"landing-mark"}),i.jsx("span",{className:"landing-badge",children:"Vedic Astrology · Sidereal"})]}),i.jsxs("h1",{className:"landing-title",children:["Your Vedic Birth Chart, ",i.jsx("span",{className:"accent",children:"Clearly Revealed"})]}),i.jsx("p",{className:"landing-tagline",children:"Turn your birth details into a beautifully organized Kundli with divisional charts, planetary strengths, dashas, yogas, doshas, Panchang & annual forecasts."}),i.jsxs("div",{className:"landing-actions",children:[i.jsxs(Vt,{to:"/login",className:"landing-primary",children:["Generate My Kundli",i.jsx("span",{"aria-hidden":"true",children:"→"})]}),i.jsx("a",{href:"#features",className:"landing-secondary",children:"Explore Features"})]}),i.jsxs("div",{className:"landing-proof","aria-label":"Product highlights",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"16"})," divisional charts"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"3"})," chart styles"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"1"})," complete report"]})]})]}),i.jsxs("div",{className:"landing-preview","aria-label":"Kundli report preview",children:[i.jsxs("div",{className:"preview-toolbar",children:[i.jsxs("span",{className:"preview-brand",children:[i.jsx(ct,{className:"preview-mark"})," Kundli Report"]}),i.jsx("span",{className:"preview-status",children:"Ready to explore"})]}),i.jsxs("div",{className:"preview-body",children:[i.jsxs("div",{className:"preview-chart","aria-hidden":"true",children:[i.jsx("div",{className:"chart-diamond chart-diamond-outer"}),i.jsx("div",{className:"chart-diamond chart-diamond-inner"}),i.jsx("span",{className:"chart-planet planet-sun",children:"Su"}),i.jsx("span",{className:"chart-planet planet-moon",children:"Mo"}),i.jsx("span",{className:"chart-planet planet-jupiter",children:"Ju"}),i.jsx("span",{className:"chart-planet planet-saturn",children:"Sa"}),i.jsx("span",{className:"chart-center",children:"Lagna"})]}),i.jsxs("div",{className:"preview-details",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Ascendant"}),i.jsx("strong",{children:"Calculated precisely"})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Nakshatra"}),i.jsx("strong",{children:"With pada & lord"})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Vimshottari"}),i.jsx("strong",{children:"Full dasha timeline"})]})]})]}),i.jsxs("div",{className:"preview-tabs","aria-hidden":"true",children:[i.jsx("span",{className:"is-active",children:"Overview"}),i.jsx("span",{children:"Charts"}),i.jsx("span",{children:"Dashas"}),i.jsx("span",{children:"Yogas"})]})]})]}),i.jsxs("section",{className:"landing-feature-section page-container",id:"features",children:[i.jsxs("header",{className:"landing-section-head",children:[i.jsx("span",{className:"landing-card-eyebrow",children:"Everything in one place"}),i.jsx("h2",{children:"A Complete View of Your Astrological Blueprint"}),i.jsx("p",{children:"Go beyond a basic birth chart with the calculations and context needed for meaningful Vedic astrology."})]}),i.jsxs("div",{className:"landing-feature-grid",children:[i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.charts}),i.jsx("h3",{children:"Divisional Charts"}),i.jsx("p",{children:"Explore D1 through D60, including Navamsa, Dasamsa & other essential vargas."}),i.jsx("span",{className:"feature-meta",children:"16 charts included"})]}),i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.dashas}),i.jsx("h3",{children:"Dashas & Timelines"}),i.jsx("p",{children:"Follow Vimshottari Mahadasha and Antardasha periods with active-cycle highlights."}),i.jsx("span",{className:"feature-meta",children:"Life periods mapped"})]}),i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.styles}),i.jsx("h3",{children:"Planetary Strength"}),i.jsx("p",{children:"Understand dignity, Shadbala, aspects, combustion, retrograde motion & house placement."}),i.jsx("span",{className:"feature-meta",children:"Detailed planet analysis"})]}),i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.yogas}),i.jsx("h3",{children:"Yogas & Doshas"}),i.jsx("p",{children:"Discover significant combinations with clear explanations of their astrological meaning."}),i.jsx("span",{className:"feature-meta",children:"Context, not just labels"})]}),i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.panchang}),i.jsx("h3",{children:"Panchang & Varshphal"}),i.jsx("p",{children:"See Tithi, Nakshatra, Yoga, Karana, sunrise details & year-by-year solar returns."}),i.jsx("span",{className:"feature-meta",children:"Calendar & annual insights"})]}),i.jsxs("article",{className:"landing-feature-card",children:[i.jsx("span",{className:"lf-icon",children:Ge.print}),i.jsx("h3",{children:"Beautifully Portable"}),i.jsx("p",{children:"Switch North, South & East Indian layouts, then print or save your complete report."}),i.jsx("span",{className:"feature-meta",children:"Designed for every device"})]})]})]}),i.jsxs("section",{className:"landing-journey page-container",children:[i.jsxs("div",{className:"journey-copy",children:[i.jsx("span",{className:"landing-card-eyebrow",children:"Simple by design"}),i.jsx("h2",{children:"From Birth Details to Deep Insight"}),i.jsx("p",{children:"Your charts stay connected to your account, ready whenever you want to return and explore."})]}),i.jsxs("ol",{className:"journey-steps",children:[i.jsxs("li",{children:[i.jsx("span",{children:"01"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Sign In Securely"}),i.jsx("p",{children:"Use email OTP, authenticator, or Google."})]})]}),i.jsxs("li",{children:[i.jsx("span",{children:"02"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Add Birth Details"}),i.jsx("p",{children:"Enter date, exact time & birthplace."})]})]}),i.jsxs("li",{children:[i.jsx("span",{children:"03"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Explore Your Kundli"}),i.jsx("p",{children:"Navigate every chart, strength & timeline."})]})]})]})]}),i.jsxs("section",{className:"landing-final-cta page-container",children:[i.jsx(ct,{className:"final-cta-mark"}),i.jsxs("div",{children:[i.jsx("span",{className:"landing-card-eyebrow",children:"Your chart awaits"}),i.jsx("h2",{children:"Begin Your Vedic Astrology Journey"}),i.jsx("p",{children:"Sign in to create your complete Kundli and keep every chart in one secure place."})]}),i.jsxs(Vt,{to:"/login",className:"landing-primary",children:["Create My Kundli",i.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),i.jsxs("footer",{className:"landing-footer page-container",children:[i.jsx("span",{children:"© 2026 Kundli Maker"}),i.jsx(Vt,{to:"/privacy",children:"Privacy Policy"})]})]})]})]});const vr=i.jsxs("div",{className:"export-menu",ref:Ye,children:[i.jsx("button",{type:"button",className:"export-trigger",onClick:()=>G(p=>!p),"aria-haspopup":"menu","aria-expanded":_e,title:"Export","aria-label":"Export",children:i.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.jsx("path",{d:"M7 10l5 5 5-5"}),i.jsx("path",{d:"M12 15V3"})]})}),_e&&i.jsxs("div",{className:"export-pop",role:"menu",children:[i.jsxs("button",{type:"button",className:"export-item",role:"menuitem",onClick:()=>{G(!1),window.print()},children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M6 9V2h12v7"}),i.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.jsx("rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"})]}),"Print / Save as PDF"]}),i.jsxs("button",{type:"button",className:"export-item",role:"menuitem",onClick:()=>{G(!1),Sn()},children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.jsx("path",{d:"M7 10l5 5 5-5"}),i.jsx("path",{d:"M12 15V3"})]}),"Download HTML"]}),It&&u&&i.jsxs("button",{type:"button",className:"export-item",role:"menuitem",onClick:()=>{G(!1),Tn()},title:"The written life report for this chart",children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),i.jsx("path",{d:"M14 2v6h6"}),i.jsx("path",{d:"M8 13h8M8 17h5"})]}),"Download Report"]}),l&&i.jsxs("button",{type:"button",className:"export-item",role:"menuitem",disabled:Ee,onClick:()=>{G(!1),br()},title:"Compact chart summary built for pasting into an AI agent",children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M12 3l1.7 4.8L18.5 9.5l-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z"}),i.jsx("path",{d:"M18 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"})]}),Ee?"Preparing…":"Download AI Agent Input"]})]})]}),lt=(p,b=2)=>String(p).padStart(b,"0"),kr=ot?i.jsxs("div",{className:"topbar-context no-print",children:[i.jsx("span",{className:"topbar-context-rule","aria-hidden":!0}),i.jsxs("span",{className:"topbar-context-text",children:[i.jsx("strong",{className:"topbar-context-name",children:ot}),c&&i.jsxs("span",{className:"topbar-context-meta",children:[lt(c.day),"/",lt(c.month),"/",lt(c.year,4)," ·"," ",lt(c.hour),":",lt(c.minute),c.place?` · ${Ct(c.place)}`:""]})]})]}):null;return i.jsxs("div",{className:`app${B?" nav-open":""}`,children:[i.jsx(qt,{onMenu:()=>q(p=>!p),navOpen:B,actions:vr,context:kr}),i.jsx("div",{className:"nav-backdrop no-print",onClick:()=>q(!1),"aria-hidden":!0}),i.jsxs("nav",{className:`app-nav${B?" open":""}`,ref:at,children:[i.jsxs("div",{className:"nav-actions",children:[i.jsxs("button",{className:"nav-new",onClick:mr,children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M12 5v14M5 12h14"})}),"New"]}),r&&i.jsxs("button",{className:"nav-list",onClick:gr,children:[i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M8 6h13M8 12h13M8 18h13"}),i.jsx("path",{d:"M3.5 6h.01M3.5 12h.01M3.5 18h.01"})]}),"Profiles"]}),i.jsxs("div",{className:"nav-tools",children:[i.jsx("button",{className:"nav-tool nav-tool-icon",disabled:vt.length===0,onClick:pr,title:"Expand all","aria-label":"Expand all",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M8 9l4-4 4 4"}),i.jsx("path",{d:"M8 15l4 4 4-4"})]})}),i.jsx("button",{className:"nav-tool nav-tool-icon",disabled:vt.length===0,onClick:fr,title:"Collapse all","aria-label":"Collapse all",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M8 5l4 4 4-4"}),i.jsx("path",{d:"M8 19l4-4 4 4"})]})})]})]}),P==="report"?i.jsx("ul",{className:"nav-pages",children:T.length>0&&i.jsxs("li",{className:"nav-group",children:[i.jsx("p",{className:"nav-group-label",children:"Life Report"}),i.jsx("ul",{className:"nav-group-items",children:T.map(p=>{const b=p.children.length>0,N=Te[p.id],_=re===p.id;return i.jsxs("li",{children:[i.jsxs("div",{className:_?"nav-row active":"nav-row",children:[i.jsxs("button",{className:_?"nav-link active":"nav-link",onClick:()=>{xt(p.id),b&&he(M=>({...M,[p.id]:!0}))},children:[i.jsx("span",{className:"nav-ic nav-num",children:p.ordinal}),i.jsx("span",{className:"nav-label",children:p.label})]}),b&&i.jsx("button",{className:"nav-toggle",onClick:()=>Nn(p.id),"aria-label":N?"Collapse":"Expand","aria-expanded":N,children:i.jsx("span",{className:N?"nav-caret open":"nav-caret"})})]}),b&&N&&i.jsx("ul",{className:"nav-sub",children:p.children.map(M=>i.jsx("li",{children:i.jsx("button",{className:He===M.id?"nav-sublink active":"nav-sublink",onClick:()=>xt(M.id),children:M.label})},M.id))})]},p.id)})})]})}):i.jsx("ul",{className:"nav-pages",children:ti.map(p=>i.jsxs("li",{className:"nav-group",children:[i.jsx("p",{className:"nav-group-label",children:p.label}),i.jsx("ul",{className:"nav-group-items",children:Dn.filter(b=>b.group===p.id).map(b=>{const N=Ze[b.id]??[],_=N.length>0,M=Te[b.id];return i.jsxs("li",{children:[i.jsxs("div",{className:ye===b.id?"nav-row active":"nav-row",children:[i.jsxs("button",{className:ye===b.id?"nav-link active":"nav-link",onClick:()=>{xt(b.id),_&&he(A=>({...A,[b.id]:!0}))},children:[i.jsx("span",{className:"nav-ic",children:ni[b.id]}),i.jsx("span",{className:"nav-label",children:b.label})]}),_&&i.jsx("button",{className:"nav-toggle",onClick:()=>Nn(b.id),"aria-label":M?"Collapse":"Expand","aria-expanded":M,children:i.jsx("span",{className:M?"nav-caret open":"nav-caret"})})]}),_&&M&&i.jsx("ul",{className:"nav-sub",children:N.map(A=>i.jsx("li",{children:i.jsx("button",{className:Be===A.id?"nav-sublink active":"nav-sublink",onClick:()=>xt(A.id),children:A.label})},A.id))})]},b.id)})})]},p.id))})]}),i.jsxs("main",{className:"doc",id:"main-content",children:[i.jsx("section",{id:"birth-details",className:"bd-section no-print",children:i.jsxs("div",{className:"bd-card",children:[i.jsxs("div",{className:"bd-head",children:[i.jsxs("div",{className:"bd-head-text",children:[i.jsx("h2",{className:"bd-title",children:"Birth Details"}),i.jsx("p",{className:"bd-sub",children:ie?"Update the birth data, then regenerate the chart.":"The birth data used for this chart."})]}),i.jsx("button",{type:"button",className:ie?"bd-edit-btn is-active":"bd-edit-btn",onClick:()=>Ce(p=>!p),"aria-pressed":ie,title:ie?"Cancel editing":"Edit birth details","aria-label":ie?"Cancel editing":"Edit birth details",children:ie?i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M18 6 6 18M6 6l12 12"})}):i.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M12 20h9"}),i.jsx("path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"})]})})]}),ie||!c?i.jsx($n,{onSubmit:p=>{wn(p),Ce(!1)},initial:c??void 0,loggedIn:!!r,savedItems:z,onSelectSaved:jn,onDeleteSaved:h?te:void 0,hideRecent:!0,readOnly:!ie},`${(c==null?void 0:c.id)??"new"}-${ie?"edit":"view"}`):i.jsx(ei,{input:c}),f&&i.jsx("p",{className:"loading",children:"Casting your chart…"}),y&&i.jsx("p",{className:"error",children:y})]})}),mt&&i.jsxs("p",{className:"error",children:["Template error: ",mt]}),i.jsxs("div",{className:"doc-tabbar no-print",children:[i.jsxs("div",{className:"doc-tabs",role:"tablist","aria-label":"Chart views",children:[i.jsxs("button",{type:"button",role:"tab",id:"doc-tab-chart","aria-selected":P==="chart","aria-controls":"doc-panel-chart",className:P==="chart"?"doc-tab is-active":"doc-tab",onClick:()=>ve("chart"),children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"1.5"}),i.jsx("path",{d:"M12 3 21 12 12 21 3 12Z"}),i.jsx("path",{d:"M3 3 12 12 21 3M3 21 12 12 21 21"})]}),"Kundli"]}),i.jsxs("button",{type:"button",role:"tab",id:"doc-tab-report","aria-selected":P==="report","aria-controls":"doc-panel-report",className:P==="report"?"doc-tab is-active":"doc-tab",onClick:()=>ve("report"),children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),i.jsx("path",{d:"M14 2v6h6"}),i.jsx("path",{d:"M8 13h8M8 17h5"})]}),"Report",!x&&fe==="pending"&&i.jsx("span",{className:"doc-tab-badge is-pending",children:"Writing…"})]})]}),(P==="chart"||gt&&fe==="ready"&&!x)&&i.jsx(Nc,{onDownload:P==="chart"?Sn:Tn,menuTitle:P==="chart"?"Save or print this chart":"Save or print this report"})]}),i.jsx("div",{id:"doc-panel-chart",role:"tabpanel","aria-labelledby":"doc-tab-chart",hidden:P!=="chart",children:i.jsx("div",{className:"doc-render",dangerouslySetInnerHTML:{__html:J}})}),i.jsx("div",{id:"doc-panel-report",role:"tabpanel","aria-labelledby":"doc-tab-report",className:"report-panel",hidden:P!=="report",children:P==="report"&&i.jsx(Sc,{profileId:U,checking:!gt,status:fe,markdown:u,body:L,footLabels:yt,locked:x,failure:(O==null?void 0:O.error)??null,busy:We,error:it,onGenerate:()=>void yr(),onRefresh:()=>void xr(),onRendered:ur})})]}),Ln]})}function Nc({onDownload:t,menuTitle:e}){const[n,s]=g.useState(!1),r=g.useRef(null);g.useEffect(()=>{if(!n)return;function o(h){r.current&&!r.current.contains(h.target)&&s(!1)}function l(h){h.key==="Escape"&&s(!1)}return document.addEventListener("mousedown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",l)}},[n]);function a(o){s(!1),o()}return i.jsxs("div",{className:"doc-menu",ref:r,children:[i.jsx("button",{type:"button",className:"doc-bar-btn",onClick:()=>s(o=>!o),"aria-haspopup":"menu","aria-expanded":n,"aria-label":"Download",title:e,children:i.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M12 3v12"}),i.jsx("path",{d:"m7 10 5 5 5-5"}),i.jsx("path",{d:"M5 21h14"})]})}),n&&i.jsxs("div",{className:"doc-menu-pop",role:"menu",children:[i.jsxs("button",{type:"button",className:"doc-menu-item",role:"menuitem",onClick:()=>a(t),children:[i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),i.jsx("path",{d:"M14 3v5h5"})]}),"Download HTML"]}),i.jsxs("button",{type:"button",className:"doc-menu-item",role:"menuitem",onClick:()=>a(()=>window.print()),children:[i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[i.jsx("path",{d:"M6 9V3h12v6"}),i.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.jsx("path",{d:"M6 14h12v7H6z"})]}),"Print / PDF"]})]})]})}function Sc({profileId:t,checking:e,status:n,markdown:s,body:r,footLabels:a,locked:o,failure:l,busy:h,error:c,onGenerate:d,onRefresh:f,onRendered:y}){const[k,z]=g.useState(()=>r?[r]:[]),[v,Z]=g.useState(!1);return g.useEffect(()=>{if(!r){z([]);return}z([r]);const K=requestAnimationFrame(()=>z(cr(r,a)));return()=>cancelAnimationFrame(K)},[r,a]),g.useEffect(()=>{k.length&&y()},[k,y]),t?o?i.jsxs("div",{className:"report-empty",children:[i.jsx("h3",{className:"report-empty-title",children:"Life report is not in your plan"}),i.jsx("p",{className:"report-empty-text",children:"A written reading of this chart across health, career, finance, life direction and relationships. Your current plan does not include it. Upgrade to generate and read life reports for your saved charts."}),i.jsx("button",{type:"button",className:"report-btn",onClick:()=>Z(!0),children:"Upgrade plan"}),v&&i.jsx(Cs,{feature:Ss,title:"Life report is not in your plan",message:"Life reports are written for each saved chart across health, career, finance, life direction and relationships. Upgrade to include them.",onClose:()=>Z(!1)})]}):e?i.jsxs("div",{className:"report-empty",children:[i.jsx("span",{className:"report-checking-spinner","aria-hidden":"true"}),i.jsx("h3",{className:"report-empty-title",children:"Checking…"}),i.jsx("p",{className:"report-empty-text",children:"Looking for a report on this chart."})]}):n==="ready"&&s?i.jsxs(i.Fragment,{children:[c&&i.jsx("p",{className:"error",children:c}),i.jsx("article",{className:"report-doc",children:k.map((K,w)=>i.jsxs("section",{className:"report-page",children:[i.jsx("div",{className:"report-page-body",dangerouslySetInnerHTML:{__html:K}}),i.jsx("div",{className:"report-page-foot",dangerouslySetInnerHTML:{__html:or(a)}})]},w))})]}):n==="pending"?i.jsxs("div",{className:"report-empty",children:[i.jsx("h3",{className:"report-empty-title",children:"Writing your report"}),i.jsx("p",{className:"report-empty-text",children:"This takes a few minutes. You can leave this page — the report keeps being written, and it will be here when you come back."}),c&&i.jsx("p",{className:"error",children:c}),i.jsx("button",{type:"button",className:"report-btn",onClick:f,disabled:h,children:h?"Checking…":"Check again"})]}):n==="failed"?i.jsxs("div",{className:"report-empty",children:[i.jsx("h3",{className:"report-empty-title",children:"The report could not be written"}),i.jsx("p",{className:"report-empty-text",children:l??"Something went wrong while writing the report."}),c&&i.jsx("p",{className:"error",children:c}),i.jsx("button",{type:"button",className:"report-btn",onClick:d,disabled:h,children:h?"Starting…":"Try again"})]}):i.jsxs("div",{className:"report-empty",children:[i.jsx("h3",{className:"report-empty-title",children:"Life report"}),i.jsx("p",{className:"report-empty-text",children:"A written reading of this chart across health, career, finance, life direction and relationships. It takes a few minutes to write, and it is saved to your account once it is done."}),c&&i.jsx("p",{className:"error",children:c}),i.jsx("button",{type:"button",className:"report-btn",onClick:d,disabled:h,children:h?"Starting…":"Generate report"})]}):i.jsxs("div",{className:"report-empty",children:[i.jsx("h3",{className:"report-empty-title",children:"Save this chart first"}),i.jsx("p",{className:"report-empty-text",children:"A life report belongs to a saved chart. Save this one to your account, then open it again to generate the report."})]})}export{_c as A};
