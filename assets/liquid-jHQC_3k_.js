import{B as Kt}from"./index-BdrU0pPv.js";class z{constructor(e,n,s,r,i){this.kind=e,this.input=n,this.begin=s,this.end=r,this.file=i}getText(){return this.input.slice(this.begin,this.end)}getPosition(){let[e,n]=[1,1];for(let s=0;s<this.begin;s++)this.input[s]===`
`?(e++,n=1):n++;return[e,n]}size(){return this.end-this.begin}}class Y{liquidMethodMissing(e,n){}}const en=Object.prototype.toString,Je=String.prototype.toLowerCase,be=Object.hasOwnProperty;function p(t){return typeof t=="string"}function T(t){return typeof t=="function"}function tn(t){return t&&T(t.then)}function pe(t){return t&&T(t.next)&&T(t.throw)&&T(t.return)}function d(t){return t=g(t),p(t)?t:v(t)?"":S(t)?t.map(e=>d(e)).join(""):String(t)}function re(t,e,n){if(e<0&&(e=t.length+e),!(n&&!be.call(t,e)))return t[e]}function ie(t){return t=g(t),S(t)?t:p(t)&&t.length>0?[t]:sn(t)?Array.from(t):ye(t)?Object.keys(t).map(e=>[e,t[e]]):[]}function _(t){return t=g(t),v(t)?[]:S(t)?t:[t]}function g(t){return t instanceof Y&&T(t.valueOf)?t.valueOf():t}function Le(t){return+g(t)||0}function ae(t){return typeof t=="number"}function xt(t){return t&&T(t.toLiquid)?xt(t.toLiquid()):t}function v(t){return t==null}function nn(t){return t===void 0}function S(t){return en.call(t)==="[object Array]"}function Tt(t){return t&&ae(t.length)}function sn(t){return ye(t)&&Symbol.iterator in t}function Ze(t,e){t=t||{};for(const n in t)if(be.call(t,n)&&e(t[n],n,t)===!1)break;return t}function rn(t){return t[t.length-1]}function ye(t){const e=typeof t;return t!==null&&(e==="object"||e==="function")}function St(t,e,n=1){const s=[];for(let r=t;r<e;r+=n)s.push(r);return s}function X(t,e,n=" "){return _t(t,e,n,(s,r)=>r+s)}function an(t,e,n=" "){return _t(t,e,n,(s,r)=>s+r)}function _t(t,e,n,s){t=String(t);const r=e-t.length;return r<=0?t:s(t,n.repeat(r))}function Lt(t){return t}function on(t){return[...t].some(n=>n>="a"&&n<="z")?t.toUpperCase():t.toLowerCase()}function ln(t,e){return t.length>e?t.slice(0,e-3)+"...":t}function cn(t,e){return v(t)&&v(e)?0:v(t)?1:v(e)||t<e?-1:t>e?1:0}function hn(t,e){return v(t)&&v(e)?0:v(t)?1:v(e)||(t=Je.call(t),e=Je.call(e),t<e)?-1:t>e?1:0}function ke(t){return function(...e){return t.call(this,...e.map(g))}}function M(t){return function(...e){return t.call(this,...e.map(Le))}}function*oe(t){const e=new Set;for(const n of t){const s=JSON.stringify(n);e.has(s)||(e.add(s),yield n)}}const Qe="__liquidClass__";class J extends Error{constructor(e,n){super(typeof e=="string"?e:e.message),this.context="",typeof e!="string"&&Object.defineProperty(this,"originalError",{value:e,enumerable:!1}),Object.defineProperty(this,"token",{value:n,enumerable:!1}),Object.defineProperty(this,Qe,{value:"LiquidError",enumerable:!1})}update(){Object.defineProperty(this,"context",{value:bn(this.token),enumerable:!1}),this.message=yn(this.message,this.token),this.stack=this.message+`
`+this.context+`
`+this.stack,this.originalError&&(this.stack+=`
From `+this.originalError.stack)}static is(e){return(e==null?void 0:e[Qe])==="LiquidError"}}class dn extends J{constructor(e,n){super(e,n),this.name="TokenizationError",super.update()}}class pn extends J{constructor(e,n){super(e,n),this.name="ParseError",this.message=e.message,super.update()}}class un extends J{constructor(e,n){super(e,n.token),this.name="RenderError",this.message=e.message,super.update()}static is(e){return e.name==="RenderError"}}class Ot extends J{constructor(e){super(e[0],e[0].token),this.errors=e,this.name="LiquidErrors";const n=e.length>1?"s":"";this.message=`${e.length} error${n} found`,super.update()}static is(e){return e.name==="LiquidErrors"}}class fn extends J{constructor(e,n){super(e,n),this.name="UndefinedVariableError",this.message=e.message,super.update()}}class gn extends Error{constructor(e){super(`undefined variable: ${e}`),this.name="InternalUndefinedVariableError",this.variableName=e}}class mn extends Error{constructor(e){super(e),this.name="AssertionError",this.message=e+""}}function bn(t){const[e,n]=t.getPosition(),s=t.input.split(`
`),r=Math.max(e-2,1),i=Math.min(e+3,s.length);return St(r,i+1).map(o=>{const h=o===e?">> ":"   ",c=X(String(o),String(i).length);let l=`${h}${c}| `;const u=o===e?`
`+X("^",n+l.length):"";return l+=s[o-1],l+=u,l}).join(`
`)}function yn(t,e){e.file&&(t+=`, file:${e.file}`);const[n,s]=e.getPosition();return t+=`, line:${n}, col:${s}`,t}const m=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],kn=1,K=4,Ge=8,Ft=16,wn=32,vn=64,xn=128;function ce(t){const e=t.charCodeAt(0);return e>=128?!m[e]:!!(m[e]&kn)}m[160]=m[5760]=m[6158]=m[8192]=m[8193]=m[8194]=m[8195]=m[8196]=m[8197]=m[8198]=m[8199]=m[8200]=m[8201]=m[8202]=m[8232]=m[8233]=m[8239]=m[8287]=m[12288]=K;m[8220]=m[8221]=xn;function L(t,e){if(!t){const n=typeof e=="function"?e():e||`expect ${t} to be true`;throw new mn(n)}}function ue(t,e=`unexpected ${JSON.stringify(t)}`){L(!t,e)}class Tn extends Y{equals(e){return v(g(e))}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return null}}class ee extends Y{equals(e){return e instanceof ee?!1:(e=g(e),p(e)||S(e)?e.length===0:ye(e)?Object.keys(e).length===0:!1)}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return""}static is(e){return e instanceof ee}}class Me extends ee{equals(e){return e===!1||v(g(e))?!0:p(e)?/^\s*$/.test(e):super.equals(e)}static is(e){return e instanceof Me}}class De extends Y{constructor(e,n,s){super(),this.i=0,this.length=e,this.name=`${s}-${n}`}next(){this.i++}index0(){return this.i}index(){return this.i+1}first(){return this.i===0}last(){return this.i===this.length-1}rindex(){return this.length-this.i}rindex0(){return this.length-this.i-1}valueOf(){return JSON.stringify(this)}}class zt{constructor(){this.buffer=""}write(e){this.buffer+=d(e)}}class Sn{constructor(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")}}class _n{constructor(){this.buffer=""}write(e){e=g(e),typeof e!="string"&&this.buffer===""?this.buffer=e:this.buffer=d(this.buffer)+d(e)}}class Xe extends Y{constructor(e=()=>""){super(),this.superBlockRender=e}*super(){const e=new zt;return yield this.superBlockRender(e),e.buffer}}function E(t){return t&&T(t.equals)&&T(t.gt)&&T(t.geq)&&T(t.lt)&&T(t.leq)}const Ke=new Tn,Nt={true:!0,false:!1,nil:Ke,null:Ke,empty:new ee,blank:new Me},et=new WeakMap;function tt(t){const e=et.get(t);if(e)return e;const n={};for(const[s,r]of Object.entries(t)){let i=n;for(let a=0;a<s.length;a++){const o=s[a];i[o]=i[o]||{},a===s.length-1&&ce(s[a])&&(i[o].needBoundary=!0),i=i[o]}i.data=r,i.end=!0}return et.set(t,n),n}var fe=function(){return fe=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},fe.apply(this,arguments)};function k(t,e,n,s){function r(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function o(l){try{c(s.next(l))}catch(u){a(u)}}function h(l){try{c(s.throw(l))}catch(u){a(u)}}function c(l){l.done?i(l.value):r(l.value).then(o,h)}c((s=s.apply(t,[])).next())})}function Oe(t,e){const n=e||t;return(s,...r)=>s?n(...r):t(...r)}function D(t){return k(this,void 0,void 0,function*(){if(!pe(t))return t;let e,n=!1,s="next";do{const r=t[s](e);n=!!r.done,e=r.value,s="next";try{pe(e)&&(e=D(e)),tn(e)&&(e=yield e)}catch(i){s="throw",e=i}}while(!n);return e})}function P(t){if(!pe(t))return t;let e,n=!1,s="next";do{const r=t[s](e);if(n=!!r.done,e=r.value,s="next",pe(e))try{e=P(e)}catch(i){s="throw",e=i}}while(!n);return e}const Ln=/%([-_0^#:]+)?(\d+)?([EO])?(.)/;function On(t){return[31,Fn(t)?29:28,31,30,31,30,31,31,30,31,30,31]}function Rt(t){let e=0;for(let n=0;n<t.getMonth();++n)e+=On(t)[n];return e+t.getDate()}function nt(t,e){const n=Rt(t)+(e-t.getDay()),r=7-new Date(t.getFullYear(),0,1).getDay()+e;return String(Math.floor((n-r)/7)+1)}function Fn(t){const e=t.getFullYear();return!!(!(e&3)&&(e%100||e%400===0&&e))}function zn(t){const e=t.getDate();if([11,12,13].includes(e))return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Nn(t){return parseInt(t.getFullYear().toString().substring(0,2),10)}const Rn={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},En=new Set("aAbBceklpP");function st(t,e){const n=Math.abs(t.getTimezoneOffset()),s=Math.floor(n/60),r=n%60;return(t.getTimezoneOffset()>0?"-":"+")+X(s,2,"0")+(e.flags[":"]?":":"")+X(r,2,"0")}const Fe={a:t=>t.getShortWeekdayName(),A:t=>t.getLongWeekdayName(),b:t=>t.getShortMonthName(),B:t=>t.getLongMonthName(),c:t=>t.toLocaleString(),C:t=>Nn(t),d:t=>t.getDate(),e:t=>t.getDate(),H:t=>t.getHours(),I:t=>String(t.getHours()%12||12),j:t=>Rt(t),k:t=>t.getHours(),l:t=>String(t.getHours()%12||12),L:t=>t.getMilliseconds(),m:t=>t.getMonth()+1,M:t=>t.getMinutes(),N:(t,e)=>{var n;const s=Number(e.width)||9,r=X(String(t.getMilliseconds()),3,"0").slice(0,s);return(n=e.memoryLimit)===null||n===void 0||n.use(s-r.length),an(r,s,"0")},p:t=>t.getHours()<12?"AM":"PM",P:t=>t.getHours()<12?"am":"pm",q:t=>zn(t),s:t=>Math.round(t.getTime()/1e3),S:t=>t.getSeconds(),u:t=>t.getDay()||7,U:t=>nt(t,0),w:t=>t.getDay(),W:t=>nt(t,1),x:t=>t.toLocaleDateString(),X:t=>t.toLocaleTimeString(),y:t=>t.getFullYear().toString().slice(2,4),Y:t=>t.getFullYear(),z:st,Z:(t,e)=>t.getTimeZoneName()||st(t,e),t:()=>"	",n:()=>`
`,"%":()=>"%"};Fe.h=Fe.b;function he(t,e,n){let s="",r=e,i;for(;i=Ln.exec(r);)s+=r.slice(0,i.index),r=r.slice(i.index+i[0].length),s+=An(t,i,n);return s+r}function An(t,e,n){const[s,r="",i,a,o]=e,h=Fe[o];if(!h)return s;const c={};for(const y of r)c[y]=!0;let l=String(h(t,{flags:c,width:i,modifier:a,memoryLimit:n})),u=En.has(o)?" ":"0",f=Number(i)||Rn[o]||0;return c["^"]?l=l.toUpperCase():c["#"]&&(l=on(l)),c._?u=" ":c[0]&&(u="0"),c["-"]&&(f=0),n==null||n.use(Number(f)-l.length),X(l,f,u)}function Et(){return typeof Intl<"u"?Intl.DateTimeFormat:void 0}const Mn=6e4,Dn=/([zZ]|([+-])(\d{2}):?(\d{2}))$/,At=["January","February","March","April","May","June","July","August","September","October","November","December"],Pn=At.map(t=>t.slice(0,3)),Mt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Cn=Mt.map(t=>t.slice(0,3));class N{constructor(e,n,s){this.locale=n,this.DateTimeFormat=Et(),this.date=new Date(e),this.timezoneFixed=s!==void 0,s===void 0&&(s=this.date.getTimezoneOffset()),this.timezoneOffset=p(s)?N.getTimezoneOffset(s,this.date):s,this.timezoneName=p(s)?s:"";const r=(this.date.getTimezoneOffset()-this.timezoneOffset)*Mn,i=this.date.getTime()+r;this.displayDate=new Date(i)}getTime(){return this.displayDate.getTime()}getMilliseconds(){return this.displayDate.getMilliseconds()}getSeconds(){return this.displayDate.getSeconds()}getMinutes(){return this.displayDate.getMinutes()}getHours(){return this.displayDate.getHours()}getDay(){return this.displayDate.getDay()}getDate(){return this.displayDate.getDate()}getMonth(){return this.displayDate.getMonth()}getFullYear(){return this.displayDate.getFullYear()}toLocaleString(e,n){return n!=null&&n.timeZone?this.date.toLocaleString(e,n):this.displayDate.toLocaleString(e,n)}toLocaleTimeString(e){return this.displayDate.toLocaleTimeString(e)}toLocaleDateString(e){return this.displayDate.toLocaleDateString(e)}getTimezoneOffset(){return this.timezoneOffset}getTimeZoneName(){if(this.timezoneFixed)return this.timezoneName;if(this.DateTimeFormat)return this.DateTimeFormat().resolvedOptions().timeZone}getLongMonthName(){var e;return(e=this.format({month:"long"}))!==null&&e!==void 0?e:At[this.getMonth()]}getShortMonthName(){var e;return(e=this.format({month:"short"}))!==null&&e!==void 0?e:Pn[this.getMonth()]}getLongWeekdayName(){var e;return(e=this.format({weekday:"long"}))!==null&&e!==void 0?e:Mt[this.displayDate.getDay()]}getShortWeekdayName(){var e;return(e=this.format({weekday:"short"}))!==null&&e!==void 0?e:Cn[this.displayDate.getDay()]}valid(){return!isNaN(this.getTime())}format(e){return this.DateTimeFormat&&this.DateTimeFormat(this.locale,e).format(this.displayDate)}static createDateFixedToTimezone(e,n){const s=e.match(Dn);if(s&&s[1]==="Z")return new N(+new Date(e),n,0);if(s&&s[2]&&s[3]&&s[4]){const[,,r,i,a]=s,o=(r==="+"?-1:1)*(parseInt(i,10)*60+parseInt(a,10));return new N(+new Date(e),n,o)}return new N(e,n)}static getTimezoneOffset(e,n){const s=n.toLocaleString("en-US",{timeZone:e}),r=n.toLocaleString("en-US",{timeZone:"UTC"}),i=new Date(s);return(+new Date(r)-+i)/(60*1e3)}}class ze{constructor(e,n){this.base=0,this.message=`${e} limit exceeded`,this.limit=n}use(e){+e>0&&(L(this.base+ +e<=this.limit,this.message),this.base+=+e)}check(e){+e>0&&L(+e<=this.limit,this.message)}}class Pe extends z{constructor(e,[n,s],r,i,a,o,h,c){super(e,r,i,a,c),this.trimLeft=!1,this.trimRight=!1;const l=r[n]==="-",u=r[s-1]==="-";let f=l?n+1:n,y=u?s-1:s;for(;f<y&&m[r.charCodeAt(f)]&K;)f++;for(;y>f&&m[r.charCodeAt(y-1)]&K;)y--;this.contentRange=[f,y],this.trimLeft=l||o,this.trimRight=u||h}get content(){return this.input.slice(this.contentRange[0],this.contentRange[1])}}class rt extends Pe{constructor(e,n,s,r,i){const{trimTagLeft:a,trimTagRight:o,tagDelimiterLeft:h,tagDelimiterRight:c}=r,[l,u]=[n+h.length,s-c.length];super(b.Tag,[l,u],e,n,s,a,o,i),this.tokenizer=new A(e,r.operators,i,this.contentRange),this.name=this.tokenizer.readTagName(),this.tokenizer.assert(this.name,"illegal tag syntax, tag name expected"),this.tokenizer.skipBlank(),this.args=this.tokenizer.input.slice(this.tokenizer.p,this.contentRange[1])}}class jn extends Pe{constructor(e,n,s,r,i){const{trimOutputLeft:a,trimOutputRight:o,outputDelimiterLeft:h,outputDelimiterRight:c}=r,l=[n+h.length,s-c.length];super(b.Output,l,e,n,s,a,o,i)}}class it extends z{constructor(e,n,s,r){super(b.HTML,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.trimLeft=0,this.trimRight=0}getContent(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)}}class qn extends z{constructor(e,n,s,r){super(b.Number,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=Number(this.getText())}}class xe extends z{constructor(e,n,s,r){super(b.Word,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=this.getText()}}class Vn extends z{constructor(e,n,s,r){super(b.Literal,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.literal=this.getText(),this.content=Nt[this.literal]}}const at={"==":2,"!=":2,">":2,"<":2,">=":2,"<=":2,contains:2,not:1,and:0,or:0},In={"==":0,"!=":0,">":0,"<":0,">=":0,"<=":0,contains:0,not:1,and:0,or:0};class Bn extends z{constructor(e,n,s,r){super(b.Operator,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.operator=this.getText()}getPrecedence(){return this.operator in at?at[this.operator]:1}}class ot extends z{constructor(e,n,s,r,i,a){super(b.PropertyAccess,s,r,i,a),this.variable=e,this.props=n}}class Dt extends z{constructor(e,n,s,r,i,a){super(b.Filter,s,r,i,a),this.name=e,this.args=n}}class $n extends z{constructor(e,n,s,r,i,a){super(b.Hash,e,n,s,a),this.input=e,this.begin=n,this.end=s,this.name=r,this.value=i,this.file=a}}const Hn=/[\da-fA-F]/,lt=/[0-7]/,ct={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"};function ht(t){const e=t.charCodeAt(0);return e>=97?e-87:e>=65?e-55:e-48}function Un(t){let e="";for(let n=1;n<t.length-1;n++){if(t[n]!=="\\"){e+=t[n];continue}if(ct[t[n+1]]!==void 0)e+=ct[t[++n]];else if(t[n+1]==="u"){let s=0,r=n+2;for(;r<=n+5&&Hn.test(t[r]);)s=s*16+ht(t[r++]);n=r-1,e+=String.fromCharCode(s)}else if(!lt.test(t[n+1]))e+=t[++n];else{let s=n+1,r=0;for(;s<=n+3&&lt.test(t[s]);)r=r*8+ht(t[s++]);n=s-1,e+=String.fromCharCode(r)}}return e}class Wn extends z{constructor(e,n,s,r){super(b.Quoted,e,n,s,r),this.input=e,this.begin=n,this.end=s,this.file=r,this.content=Un(this.getText())}}class Yn extends z{constructor(e,n,s,r,i,a){super(b.Range,e,n,s,a),this.input=e,this.begin=n,this.end=s,this.lhs=r,this.rhs=i,this.file=a}}class Jn extends Pe{constructor(e,n,s,r,i){super(b.Tag,[n,s],e,n,s,!1,!1,i),this.tokenizer=new A(e,r.operators,i,this.contentRange),this.name=this.tokenizer.readTagName(),this.tokenizer.assert(this.name,"illegal liquid tag syntax"),this.tokenizer.skipBlank()}get args(){return this.tokenizer.input.slice(this.tokenizer.p,this.contentRange[1])}}class Zn extends z{constructor(e,n,s,r,i,a){super(b.FilteredValue,s,r,i,a),this.initial=e,this.filters=n,this.input=s,this.begin=r,this.end=i,this.file=a}}const Qn={now:()=>Date.now()};function Ne(){return typeof global=="object"&&global.performance||typeof window=="object"&&window.performance||Qn}class Gn{renderTemplatesToNodeStream(e,n){const s=new Sn;return Promise.resolve().then(()=>D(this.renderTemplates(e,n,s))).then(()=>s.end(),r=>s.error(r)),s.stream}*renderTemplates(e,n,s){s||(s=n.opts.keepOutputType?new _n:new zt),n.renderLimit.check(Ne().now());const r=[];for(const i of e){n.renderLimit.check(Ne().now());try{const a=yield i.render(n,s);if(a&&s.write(a),n.breakCalled||n.continueCalled)break}catch(a){const o=J.is(a)?a:new un(a,i);if(n.opts.catchAllErrors)r.push(o);else throw o}}if(r.length)throw new Ot(r);return s.buffer}}class Xn{constructor(e){this.postfix=[...ns(e)]}*evaluate(e,n){L(e,"unable to evaluate: context not defined");const s=[];for(const r of this.postfix)if(Bt(r)){const i=s.pop();let a;if(In[r.operator]===1)a=yield e.opts.operators[r.operator](i,e);else{const o=s.pop();a=yield e.opts.operators[r.operator](o,i,e)}s.push(a)}else s.push(yield x(r,e,n));return s[0]}valid(){return!!this.postfix.length}}function*x(t,e,n=!1){if(t){if("content"in t)return t.content;if(me(t))return yield Kn(t,e,n);if($t(t))return yield ts(t,e)}}function*Kn(t,e,n){const s=[];for(const r of t.props)s.push(yield x(r,e,!1));try{if(t.variable){const r=yield x(t.variable,e,n);return yield e._getFromScope(r,s)}else return yield e._get(s)}catch(r){if(n&&r.name==="InternalUndefinedVariableError")return null;throw new fn(r,t)}}function es(t){return t.content}function*ts(t,e){const n=yield x(t.lhs,e),s=yield x(t.rhs,e);return e.memoryLimit.use(s-n+1),St(+n,+s+1)}function*ns(t){const e=[];for(const n of t)if(Bt(n)){for(;e.length&&e[e.length-1].getPrecedence()>n.getPrecedence();)yield e.pop();e.push(n)}else yield n;for(;e.length;)yield e.pop()}function H(t,e){return!we(t,e)}function we(t,e){return t=g(t),e.opts.jsTruthy?!t:t===!1||t===void 0||t===null}const ss={"==":C,"!=":(t,e)=>!C(t,e),">":(t,e)=>E(t)?t.gt(e):E(e)?e.lt(t):g(t)>g(e),"<":(t,e)=>E(t)?t.lt(e):E(e)?e.gt(t):g(t)<g(e),">=":(t,e)=>E(t)?t.geq(e):E(e)?e.leq(t):g(t)>=g(e),"<=":(t,e)=>E(t)?t.leq(e):E(e)?e.geq(t):g(t)<=g(e),contains:(t,e)=>(t=g(t),S(t)?t.some(n=>C(n,e)):T(t==null?void 0:t.indexOf)?t.indexOf(g(e))>-1:!1),not:(t,e)=>we(g(t),e),and:(t,e,n)=>H(g(t),n)&&H(g(e),n),or:(t,e,n)=>H(g(t),n)||H(g(e),n)};function C(t,e){return E(t)?t.equals(e):E(e)?e.equals(t):(t=g(t),e=g(e),S(t)?S(e)&&rs(t,e):t===e)}function rs(t,e){return t.length!==e.length?!1:!t.some((n,s)=>!C(n,e[s]))}function is(t,e){return t.some(n=>C(n,e))}class Te{constructor(e,n,s,r){this.key=e,this.value=n,this.next=s,this.prev=r}}class dt{constructor(e,n=0){this.limit=e,this.size=n,this.cache={},this.head=new Te("HEAD",null,null,null),this.tail=new Te("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}write(e,n){if(this.cache[e])this.cache[e].value=n;else{const s=new Te(e,n,this.head.next,this.head);this.head.next.prev=s,this.head.next=s,this.cache[e]=s,this.size++,this.ensureLimit()}}read(e){if(!this.cache[e])return;const{value:n}=this.cache[e];return this.remove(e),this.write(e,n),n}remove(e){const n=this.cache[e];n.prev.next=n.next,n.next.prev=n.prev,delete this.cache[e],this.size--}clear(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}}ensureLimit(){this.size>this.limit&&this.remove(this.tail.prev.key)}}function Pt(t,e){const n=document.createElement("base");n.href=t;const s=document.getElementsByTagName("head")[0];s.insertBefore(n,s.firstChild);const r=document.createElement("a");r.href=e;const i=r.href;return s.removeChild(n),i}function as(t,e,n){return t.length&&rn(t)!=="/"&&(t+="/"),Pt(t,e).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,(r,i,a)=>{const o=a.split("/").pop();return/\.\w+$/.test(o)?r:i+a+n})}function os(t){return k(this,void 0,void 0,function*(){return new Promise((e,n)=>{const s=new XMLHttpRequest;s.onload=()=>{s.status>=200&&s.status<300?e(s.responseText):n(new Error(s.statusText))},s.onerror=()=>{n(new Error("An error occurred whilst receiving the response."))},s.open("GET",t),s.send()})})}function ls(t){const e=new XMLHttpRequest;if(e.open("GET",t,!1),e.send(),e.status<200||e.status>=300)throw new Error(e.statusText);return e.responseText}function cs(t){return k(this,void 0,void 0,function*(){return!0})}function hs(t){return!0}function ds(t){return Pt(t,".")}const ps="/";var us=Object.freeze({__proto__:null,resolve:as,readFile:os,readFileSync:ls,exists:cs,existsSync:hs,dirname:ds,sep:ps});function Re(t,e){typeof e=="string"?t.use(e.length):e===null||typeof e=="number"||typeof e=="boolean"?t.use(JSON.stringify(e).length):Array.isArray(e)?t.use(e.length+1):typeof e=="object"&&t.use(2)}function fs(t,e,...n){return t=g(t),S(t)||p(t)?t.length?t:e:t===!1&&new Map(n).get("allow_false")?!1:we(t,this.context)?e:t}function pt(t,e=0){const n=this.context.memoryLimit;return JSON.stringify(t,(s,r)=>(Re(n,r),r),e)}function gs(t,e=0){const n=this.context.memoryLimit,s=[];return JSON.stringify(t,function(r,i){if(typeof i!="object"||i===null)return Re(n,i),i;for(;s.length>0&&s[s.length-1]!==this;)s.pop();return s.includes(i)?(n.use(10),"[Circular]"):(s.push(i),Re(n,i),i)},e)}function ms(t){return Number(t)}const bs={raw:!0,handler:Lt};var Ct={default:fs,raw:bs,jsonify:pt,to_integer:ms,json:pt,inspect:gs};const ys={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},ks={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function ve(t){return t=d(t),this.context.memoryLimit.use(t.length),t.replace(/&|<|>|"|'/g,e=>ys[e])}function ws(t){return ve.call(this,t)}function vs(t){return t=d(t),this.context.memoryLimit.use(t.length),t.replace(/&(amp|lt|gt|#34|#39);/g,e=>ks[e])}function xs(t){return ve.call(this,vs.call(this,t))}function Ts(t){const e=d(t);return this.context.memoryLimit.use(e.length),e.replace(/\r?\n/gm,`<br />
`)}function Ss(t){const e=d(t);this.context.memoryLimit.use(e.length);const n=new Map([["<script","<\/script>"],["<style","</style>"],["<!--","-->"],["<",">"]]);let s="",r=0;for(;r<e.length;){const i=e.indexOf("<",r);if(i<0)return s+e.slice(r);s+=e.slice(r,i);for(const[a,o]of n){if(!e.startsWith(a,i))continue;const h=e.indexOf(o,i+a.length);if(h>=0){r=h+o.length;break}n.delete(a)}if(r<=i)return s+e.slice(i)}return s}var _s=Object.freeze({__proto__:null,escape:ve,xml_escape:ws,escape_once:xs,newline_to_br:Ts,strip_html:Ss});class Ls{constructor(e){this.mapping=e,this.sep="/"}exists(e){return k(this,void 0,void 0,function*(){return this.existsSync(e)})}existsSync(e){return!v(this.mapping[e])}readFile(e){return k(this,void 0,void 0,function*(){return this.readFileSync(e)})}readFileSync(e){const n=this.mapping[e];if(v(n))throw new Error(`ENOENT: ${e}`);return n}dirname(e){const n=e.split(this.sep);return n.pop(),n.join(this.sep)}resolve(e,n,s){if(n+=s,e===".")return n;const r=e.split(/\/+/);for(const i of n.split(this.sep))i==="."||i===""||(i===".."?(r.length>1||r[0]!=="")&&r.pop():r.push(i));return r.join(this.sep)}}const Q={root:["."],layouts:["."],partials:["."],relativeReference:!0,jekyllInclude:!1,keyValueSeparator:":",cache:void 0,extname:"",fs:us,dynamicPartials:!0,jsTruthy:!1,dateFormat:"%A, %B %-e, %Y at %-l:%M %P %z",locale:"",trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,ownPropertyOnly:!0,lenientIf:!1,globals:{},keepOutputType:!1,operators:ss,memoryLimit:1/0,parseLimit:1/0,renderLimit:1/0};function Os(t){var e,n;if(t.hasOwnProperty("root")&&(t.hasOwnProperty("partials")||(t.partials=t.root),t.hasOwnProperty("layouts")||(t.layouts=t.root)),t.hasOwnProperty("cache")){let s;typeof t.cache=="number"?s=t.cache>0?new dt(t.cache):void 0:typeof t.cache=="object"?s=t.cache:s=t.cache?new dt(1024):void 0,t.cache=s}return t=Object.assign(Object.assign(Object.assign({},Q),t.jekyllInclude?{dynamicPartials:!1}:{}),t),(!t.fs.dirname||!t.fs.sep)&&t.relativeReference&&(console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning"),t.relativeReference=!1),t.root=de(t.root),t.partials=de(t.partials),t.layouts=de(t.layouts),t.outputEscape=t.outputEscape&&Fs(t.outputEscape),t.locale||(t.locale=(n=(e=Et())===null||e===void 0?void 0:e().resolvedOptions().locale)!==null&&n!==void 0?n:"en-US"),t.templates&&(t.fs=new Ls(t.templates),t.relativeReference=!0,t.root=t.partials=t.layouts="."),t}function Fs(t){return t==="escape"?ve:t==="json"?Ct.json:(L(T(t),"`outputEscape` need to be of type string or function"),t)}function de(t){let e=[];return S(t)&&(e=t),p(t)&&(e=[t]),e}function zs(t,e){let n=!1;for(let s=0;s<t.length;s++){const r=t[s];js(r)&&(!n&&r.trimLeft&&Ns(t[s-1],e.greedy),Z(r)&&(r.name==="raw"?n=!0:r.name==="endraw"&&(n=!1)),!n&&r.trimRight&&Rs(t[s+1],e.greedy))}}function Ns(t,e){if(!t||!je(t))return;const n=e?K:Ft;for(;m[t.input.charCodeAt(t.end-1-t.trimRight)]&n;)t.trimRight++}function Rs(t,e){if(!t||!je(t))return;const n=e?K:Ft;for(;m[t.input.charCodeAt(t.begin+t.trimLeft)]&n;)t.trimLeft++;t.input.charAt(t.begin+t.trimLeft)===`
`&&t.trimLeft++}class A{constructor(e,n=Q.operators,s,r){this.input=e,this.file=s,this.rawBeginAt=-1,this.p=r?r[0]:0,this.N=r?r[1]:e.length,this.opTrie=tt(n),this.literalTrie=tt(Nt)}readExpression(){return new Xn(this.readExpressionTokens())}*readExpressionTokens(){for(;this.p<this.N;){const e=this.readOperator();if(e){yield e;continue}const n=this.readValue();if(n){yield n;continue}return}}readOperator(){this.skipBlank();const e=this.matchTrie(this.opTrie);if(e!==-1)return new Bn(this.input,this.p,this.p=e,this.file)}matchTrie(e){let n=e,s=this.p,r;for(;n[this.input[s]]&&s<this.N;)n=n[this.input[s++]],n.end&&(r=n);return!r||r.needBoundary&&ce(this.peek(s-this.p))?-1:s}readFilteredValue(){const e=this.p,n=this.readExpression();this.assert(n.valid(),`invalid value expression: ${this.snapshot()}`);const s=this.readFilters();return new Zn(n,s,this.input,e,this.p,this.file)}readFilters(){const e=[];for(;;){const n=this.readFilter();if(!n)return e;e.push(n)}}readFilter(){if(this.skipBlank(),this.end())return null;this.assert(this.read()==="|",'expected "|" before filter');const e=this.readIdentifier();if(!e.size())return this.assert(this.end(),"expected filter name"),null;const n=[];if(this.skipBlank(),this.peek()===":")do{++this.p;const s=this.readFilterArg();s&&n.push(s),this.skipBlank(),this.assert(this.end()||this.peek()===","||this.peek()==="|",()=>`unexpected character ${this.snapshot()}`)}while(this.peek()===",");else if(!(this.peek()==="|"||this.end()))throw this.error('expected ":" after filter name');return new Dt(e.getText(),n,this.input,e.begin,this.p,this.file)}readFilterArg(){const e=this.readValue();if(!e)return;if(this.skipBlank(),this.peek()!==":")return e;++this.p;const n=this.readValue();return[e.getText(),n]}readTopLevelTokens(e=Q){const n=[];for(;this.p<this.N;){const s=this.readTopLevelToken(e);n.push(s)}return zs(n,e),n}readTopLevelToken(e){const{tagDelimiterLeft:n,outputDelimiterLeft:s}=e;return this.rawBeginAt>-1?this.readEndrawOrRawContent(e):this.match(n)?this.readTagToken(e):this.match(s)?this.readOutputToken(e):this.readHTMLToken([n,s])}readHTMLToken(e){const n=this.p;for(;this.p<this.N&&!e.some(s=>this.match(s));)++this.p;return new it(this.input,n,this.p,this.file)}readTagToken(e){const{file:n,input:s}=this,r=this.p;if(this.readToDelimiter(e.tagDelimiterRight)===-1)throw this.error(`tag ${this.snapshot(r)} not closed`,r);const i=new rt(s,r,this.p,e,n);return i.name==="raw"&&(this.rawBeginAt=r),i}readToDelimiter(e,n=!1){for(this.skipBlank();this.p<this.N;){if(n&&this.peekType()&Ge){this.readQuoted();continue}if(++this.p,this.rmatch(e))return this.p}return-1}readOutputToken(e=Q){const{file:n,input:s}=this,{outputDelimiterRight:r}=e,i=this.p;if(this.readToDelimiter(r,!0)===-1)throw this.error(`output ${this.snapshot(i)} not closed`,i);return new jn(s,i,this.p,e,n)}readEndrawOrRawContent(e){const{tagDelimiterLeft:n,tagDelimiterRight:s}=e,r=this.p;let i=this.readTo(n)-n.length;for(;this.p<this.N;){if(this.readIdentifier().getText()!=="endraw"){i=this.readTo(n)-n.length;continue}for(;this.p<=this.N;){if(this.rmatch(s)){const a=this.p;return r===i?(this.rawBeginAt=-1,new rt(this.input,r,a,e,this.file)):(this.p=i,new it(this.input,r,i,this.file))}if(this.rmatch(n))break;this.p++}}throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`,r)}readLiquidTagTokens(e=Q){const n=[];for(;this.p<this.N;){const s=this.readLiquidTagToken(e);s&&n.push(s)}return n}readLiquidTagToken(e){if(this.skipBlank(),this.end())return;const n=this.p;this.readToDelimiter(`
`);const s=this.p;return new Jn(this.input,n,s,e,this.file)}error(e,n=this.p){return new dn(e,new xe(this.input,n,this.N,this.file))}assert(e,n,s){if(!e)throw this.error(typeof n=="function"?n():n,s)}snapshot(e=this.p){return JSON.stringify(ln(this.input.slice(e,this.N),32))}readWord(){return this.readIdentifier()}readIdentifier(){this.skipBlank();const e=this.p;for(;!this.end()&&ce(this.peek());)++this.p;return new xe(this.input,e,this.p,this.file)}readNonEmptyIdentifier(){const e=this.readIdentifier();return e.size()?e:void 0}readTagName(){return this.skipBlank(),this.input[this.p]==="#"?this.input.slice(this.p,++this.p):this.readIdentifier().getText()}readHashes(e){const n=[];for(;;){const s=this.readHash(e);if(!s)return n;n.push(s)}}readHash(e){this.skipBlank(),this.peek()===","&&++this.p;const n=this.p,s=this.readNonEmptyIdentifier();if(!s)return;let r;this.skipBlank();const i=p(e)?e:e?"=":":";return this.peek()===i&&(++this.p,r=this.readValue()),new $n(this.input,n,this.p,s,r,this.file)}remaining(){return this.input.slice(this.p,this.N)}advance(e=1){this.p+=e}end(){return this.p>=this.N}read(){return this.input[this.p++]}readTo(e){for(;this.p<this.N;)if(++this.p,this.rmatch(e))return this.p;return-1}readValue(){this.skipBlank();const e=this.p,n=this.readLiteral()||this.readQuoted()||this.readRange()||this.readNumber(),s=this.readProperties(!n);return s.length?new ot(n,s,this.input,e,this.p):n}readScopeValue(){this.skipBlank();const e=this.p,n=this.readProperties();if(n.length)return new ot(void 0,n,this.input,e,this.p)}readProperties(e=!0){const n=[];for(;;){if(this.peek()==="["){this.p++;const s=this.readValue()||new xe(this.input,this.p,this.p,this.file);this.assert(this.readTo("]")!==-1,"[ not closed"),n.push(s);continue}if(e&&!n.length){const s=this.readNonEmptyIdentifier();if(s){n.push(s);continue}}if(this.peek()==="."&&this.peek(1)!=="."){this.p++;const s=this.readNonEmptyIdentifier();if(!s)break;n.push(s);continue}break}return n}readNumber(){this.skipBlank();let e=!1,n=!1,s=0;for(this.peekType()&vn&&s++;this.p+s<=this.N;)if(this.peekType(s)&wn)n=!0,s++;else if(this.peek(s)==="."&&this.peek(s+1)!=="."){if(e||!n)return;e=!0,s++}else break;if(n&&!ce(this.peek(s))){const r=new qn(this.input,this.p,this.p+s,this.file);return this.advance(s),r}}readLiteral(){this.skipBlank();const e=this.matchTrie(this.literalTrie);if(e===-1)return;const n=new Vn(this.input,this.p,e,this.file);return this.p=e,n}readRange(){this.skipBlank();const e=this.p;if(this.peek()!=="(")return;++this.p;const n=this.readValueOrThrow();this.skipBlank(),this.assert(this.read()==="."&&this.read()===".","invalid range syntax");const s=this.readValueOrThrow();return this.skipBlank(),this.assert(this.read()===")","invalid range syntax"),new Yn(this.input,e,this.p,n,s,this.file)}readValueOrThrow(){const e=this.readValue();return this.assert(e,()=>`unexpected token ${this.snapshot()}, value expected`),e}readQuoted(){this.skipBlank();const e=this.p;if(!(this.peekType()&Ge))return;++this.p;let n=!1;for(;this.p<this.N&&(++this.p,!(this.input[this.p-1]===this.input[e]&&!n));)n?n=!1:this.input[this.p-1]==="\\"&&(n=!0);return new Wn(this.input,e,this.p,this.file)}*readFileNameTemplate(e){const{outputDelimiterLeft:n}=e,s=[","," ","\r",`
`,"	",n],r=new Set(s);for(;this.p<this.N&&!r.has(this.peek());)yield this.match(n)?this.readOutputToken(e):this.readHTMLToken(s)}match(e){for(let n=0;n<e.length;n++)if(e[n]!==this.input[this.p+n])return!1;return!0}rmatch(e){for(let n=0;n<e.length;n++)if(e[e.length-1-n]!==this.input[this.p-1-n])return!1;return!0}peekType(e=0){return this.p+e>=this.N?0:m[this.input.charCodeAt(this.p+e)]}peek(e=0){return this.p+e>=this.N?"":this.input[this.p+e]}skipBlank(){for(;this.peekType()&K;)++this.p}}class Es{constructor(e,n){this.handlers={},this.stopRequested=!1,this.tokens=e,this.parseToken=n}on(e,n){return this.handlers[e]=n,this}trigger(e,n){const s=this.handlers[e];return s?(s.call(this,n),!0):!1}start(){this.trigger("start");let e;for(;!this.stopRequested&&(e=this.tokens.shift());){if(this.trigger("token",e)||Z(e)&&this.trigger(`tag:${e.name}`,e))continue;const n=this.parseToken(e,this.tokens);this.trigger("template",n)}return this.stopRequested||this.trigger("end"),this}stop(){return this.stopRequested=!0,this}}class Ce{constructor(e){this.token=e}}class w extends Ce{constructor(e,n,s){super(e),this.name=e.name,this.liquid=s,this.tokenizer=e.tokenizer}}class ne{constructor(e,n){this.hash={};const s=e instanceof A?e:new A(e,{});for(const r of s.readHashes(n))this.hash[r.name.content]=r.value}*render(e){const n={};for(const s of Object.keys(this.hash))n[s]=this.hash[s]===void 0?!0:yield x(this.hash[s],e);return n}}function As(t){return class extends w{constructor(e,n,s){super(e,n,s),T(t.parse)&&t.parse.call(this,e,n)}*render(e,n){const s=yield new ne(this.token.args,e.opts.keyValueSeparator).render(e);return yield t.render.call(this,e,n,s)}}}function jt(t){return S(t)}class qt{constructor(e,n,s){this.token=e,this.name=e.name,this.handler=T(n)?n:T(n==null?void 0:n.handler)?n.handler:Lt,this.raw=!T(n)&&!!(n!=null&&n.raw),this.args=e.args,this.liquid=s}*render(e,n){const s=[];for(const r of this.args)jt(r)?s.push([r[0],yield x(r[1],n)]):s.push(yield x(r,n));return yield this.handler.apply({context:n,token:this.token,liquid:this.liquid},[e,...s])}}class F{constructor(e,n){this.filters=[];const s=typeof e=="string"?new A(e,n.options.operators).readFilteredValue():e;this.initial=s.initial,this.filters=s.filters.map(r=>new qt(r,this.getFilter(n,r.name),n))}*value(e,n){n=n||e.opts.lenientIf&&this.filters.length>0&&this.filters[0].name==="default";let s=yield this.initial.evaluate(e,n);for(const r of this.filters)s=yield r.render(s,e);return s}getFilter(e,n){const s=e.filters[n];return L(s||!e.options.strictFilters,()=>`undefined filter: ${n}`),s}}class Ms extends Ce{constructor(e,n){var s;super(e);const r=new A(e.input,n.options.operators,e.file,e.contentRange);this.value=new F(r.readFilteredValue(),n);const i=this.value.filters,a=n.options.outputEscape;if(!(!((s=i[i.length-1])===null||s===void 0)&&s.raw)&&a){const o=new Dt(toString.call(a),[],"",0,0);i.push(new qt(o,a,n))}}*render(e,n){const s=yield this.value.value(e,!1);n.write(s)}*arguments(){yield this.value}}class Ds extends Ce{constructor(e){super(e),this.str=e.getContent()}*render(e,n){n.write(this.str)}}class W{constructor(e,n){this.segments=e,this.location=n}toString(){return ge(this.segments,!0)}toArray(){function*e(...n){for(const s of n)s instanceof W?yield Array.from(e(...s.segments)):yield s}return Array.from(e(...this.segments))}}class Se{constructor(){this.map=new Map}get(e){const n=ge([e.segments[0]]);return this.map.has(n)||this.map.set(n,[]),this.map.get(n)}has(e){return this.map.has(ge([e.segments[0]]))}push(e){this.get(e).push(e)}asObject(){return Object.fromEntries(this.map)}}const Vt={partials:!0};function*It(t,e,n){const s=new Se,r=new Se,i=new Se,a=new ut(new Set),o=new Set;function h(l,u){s.push(l);const f=u.alias(l);if(f!==void 0){const y=f.segments[0];p(y)&&!a.has(y)&&r.push(f)}else{const y=l.segments[0];p(y)&&!u.has(y)&&r.push(l)}for(const y of l.segments)y instanceof W&&h(y,u)}function*c(l,u){if(l.arguments)for(const f of l.arguments())for(const y of ft(f))h(y,u);if(l.localScope)for(const f of l.localScope()){u.add(f.content),u.deleteAlias(f.content);const[y,se]=f.getPosition();i.push(new W([f.content],{row:y,col:se,file:f.file}))}if(l.children)if(l.partialScope){const f=l.partialScope();if(f===void 0){for(const I of yield l.children(e,n))yield c(I,u);return}if(o.has(f.name))return;const y=new Set,se=f.isolated?new ut(y):u.push(y);for(const I of f.scope)if(p(I))y.add(I);else{const[We,Xt]=I;y.add(We);const Ye=Array.from(ft(Xt));Ye.length&&se.setAlias(We,Ye[0].segments)}for(const I of yield l.children(e,n))yield c(I,se),o.add(f.name);se.pop()}else{l.blockScope&&u.push(new Set(l.blockScope()));for(const f of yield l.children(e,n))yield c(f,u);l.blockScope&&u.pop()}}for(const l of t)yield c(l,a);return{variables:s.asObject(),globals:r.asObject(),locals:i.asObject()}}function j(t,e={}){const n=Object.assign(Object.assign({},Vt),e);return D(It(t,n.partials,!1))}function q(t,e={}){const n=Object.assign(Object.assign({},Vt),e);return P(It(t,n.partials,!0))}class ut{constructor(e){this.stack=[{names:e,aliases:new Map}]}has(e){for(const n of this.stack)if(n.names.has(e))return!0;return!1}push(e){return this.stack.push({names:e,aliases:new Map}),this}pop(){var e;return(e=this.stack.pop())===null||e===void 0?void 0:e.names}add(e){this.stack[0].names.add(e)}alias(e){const n=e.segments[0];if(!p(n))return;const s=this.getAlias(n);if(s!==void 0)return new W([...s,...e.segments.slice(1)],e.location)}setAlias(e,n){this.stack[this.stack.length-1].aliases.set(e,n)}deleteAlias(e){this.stack[this.stack.length-1].aliases.delete(e)}getAlias(e){for(const n of this.stack){if(n.aliases.has(e))return n.aliases.get(e);if(n.names.has(e))return}}}function*ft(t){O(t)?yield*G(t):t instanceof F&&(yield*Ps(t))}function*Ps(t){for(const e of t.initial.postfix)O(e)&&(yield*G(e));for(const e of t.filters)for(const n of e.args)jt(n)&&n[1]?yield*G(n[1]):O(n)&&(yield*G(n))}function*G(t){$t(t)?(yield*G(t.lhs),yield*G(t.rhs)):me(t)&&(yield Ee(t))}function Ee(t){const e=[];let n=t.file;const s=t.props[0];n=n||s.file,Ae(s)||mt(s)||bt(s)?e.push(s.content):me(s)&&e.push(...Ee(s).segments);for(const a of t.props.slice(1))n=n||a.file,Ae(a)||mt(a)||bt(a)?e.push(a.content):me(a)&&e.push(Ee(a));const[r,i]=t.getPosition();return new W(e,{row:r,col:i,file:n})}const gt=/^[\u0080-\uFFFFa-zA-Z_][\u0080-\uFFFFa-zA-Z0-9_-]*$/;function ge(t,e=!1){const n=[],s=t[0];p(s)&&(!e||s.match(gt)?n.push(`${s}`):n.push(`['${s}']`));for(const r of t.slice(1))r instanceof W?n.push(`[${ge(r.segments)}]`):p(r)?r.match(gt)?n.push(`.${r}`):n.push(`['${r}']`):n.push(`[${r}]`);return n.join("")}var te;(function(t){t.Partials="partials",t.Layouts="layouts",t.Root="root"})(te||(te={}));class Cs{constructor(e){var n,s,r,i;if(this.options=e,e.relativeReference){const o=e.fs.sep;L(o,"`fs.sep` is required for relative reference");const h=["."+o,".."+o,"./","../"];this.shouldLoadRelative=c=>h.some(l=>c.startsWith(l))}else this.shouldLoadRelative=o=>!1;const a=e.fs;this.contains=Oe(((n=a.contains)===null||n===void 0?void 0:n.bind(a))||(()=>k(this,void 0,void 0,function*(){return!0})),((s=a.containsSync)===null||s===void 0?void 0:s.bind(a))||(()=>!0)),this.exists=Oe(((r=a.exists)===null||r===void 0?void 0:r.bind(a))||(()=>k(this,void 0,void 0,function*(){return!1})),(i=a.existsSync)===null||i===void 0?void 0:i.bind(a))}*lookup(e,n,s,r){const i=this.options[n];for(const a of this.candidates(e,i,r)){let o=!1;for(const h of i)if(yield this.contains(!!s,h,a)){o=!0;break}if(o&&(yield this.exists(!!s,a)))return a}throw this.lookupError(e,i)}*candidates(e,n,s){const{fs:r,extname:i}=this.options;this.shouldLoadRelative(e)&&s&&(yield r.resolve(this.dirname(s),e,i));for(const a of n)yield r.resolve(a,e,i);if(r.fallback!==void 0){const a=r.fallback(e);a!==void 0&&(yield a)}}dirname(e){const n=this.options.fs;return L(n.dirname,"`fs.dirname` is required for relative reference"),n.dirname(e)}lookupError(e,n){const s=new Error("ENOENT");return s.message=`ENOENT: Failed to lookup "${e}" in "${n}"`,s.code="ENOENT",s}}class B{constructor(e){var n,s;this.liquid=e,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new Cs(this.liquid.options),this.parseLimit=new ze("parse length",e.options.parseLimit),this.readFile=Oe(((n=this.fs.readFile)===null||n===void 0?void 0:n.bind(this.fs))||(()=>k(this,void 0,void 0,function*(){throw new Error("readFile not implemented")})),(s=this.fs.readFileSync)===null||s===void 0?void 0:s.bind(this.fs))}parse(e,n){e=String(e),this.parseLimit.use(e.length);const r=new A(e,this.liquid.options.operators,n).readTopLevelTokens(this.liquid.options);return this.parseTokens(r)}parseTokens(e){let n;const s=[],r=[];for(;n=e.shift();)try{s.push(this.parseToken(n,e))}catch(i){if(this.liquid.options.catchAllErrors)r.push(i);else throw i}if(r.length)throw new Ot(r);return s}parseToken(e,n){try{if(Z(e)){const s=this.liquid.tags[e.name];return L(s,`tag "${e.name}" not found`),new s(e,n,this.liquid,this)}return qs(e)?new Ms(e,this.liquid):new Ds(e)}catch(s){throw J.is(s)?s:new pn(s,e)}}parseStream(e){return new Es(e,(n,s)=>this.parseToken(n,s))}*_parseFileCached(e,n,s=te.Root,r){const i=this.cache,a=this.loader.shouldLoadRelative(e)?r+","+e:s+":"+e,o=yield i.read(a);if(o)return o;const h=this._parseFile(e,n,s,r),c=n?yield h:D(h);i.write(a,c);try{return yield c}catch(l){throw i.remove(a),l}}*_parseFile(e,n,s=te.Root,r){const i=yield this.loader.lookup(e,s,n,r);return this.parse(yield this.readFile(!!n,i),i)}}var b;(function(t){t[t.Number=1]="Number",t[t.Literal=2]="Literal",t[t.Tag=4]="Tag",t[t.Output=8]="Output",t[t.HTML=16]="HTML",t[t.Filter=32]="Filter",t[t.Hash=64]="Hash",t[t.PropertyAccess=128]="PropertyAccess",t[t.Word=256]="Word",t[t.Range=512]="Range",t[t.Quoted=1024]="Quoted",t[t.Operator=2048]="Operator",t[t.FilteredValue=4096]="FilteredValue",t[t.Delimited=12]="Delimited"})(b||(b={}));function js(t){return!!(R(t)&b.Delimited)}function Bt(t){return R(t)===b.Operator}function je(t){return R(t)===b.HTML}function qs(t){return R(t)===b.Output}function Z(t){return R(t)===b.Tag}function Ae(t){return R(t)===b.Quoted}function mt(t){return R(t)===b.Number}function me(t){return R(t)===b.PropertyAccess}function bt(t){return R(t)===b.Word}function $t(t){return R(t)===b.Range}function O(t){return(R(t)&1667)>0}function R(t){return t?t.kind:-1}function V(t){const e=Object.create(null);return t&&Object.assign(e,t),e}class ${constructor(e={},n=Q,s={},{memoryLimit:r,renderLimit:i}={}){var a,o,h,c,l;this.scopes=[V()],this.registers={},this.breakCalled=!1,this.continueCalled=!1,this.sync=!!s.sync,this.opts=n,this.globals=(a=s.globals)!==null&&a!==void 0?a:n.globals,this.environments=ye(e)?e:Object(e),this.strictVariables=(o=s.strictVariables)!==null&&o!==void 0?o:this.opts.strictVariables,this.ownPropertyOnly=(h=s.ownPropertyOnly)!==null&&h!==void 0?h:n.ownPropertyOnly,this.memoryLimit=r??new ze("memory alloc",(c=s.memoryLimit)!==null&&c!==void 0?c:n.memoryLimit),this.renderLimit=i??new ze("template render",Ne().now()+((l=s.renderLimit)!==null&&l!==void 0?l:n.renderLimit))}getRegister(e,n=void 0){return this.registers[e]=this.registers[e]||n}setRegister(e,n){return this.registers[e]=n}saveRegister(...e){return e.map(n=>[n,this.getRegister(n)])}restoreRegister(e){return e.forEach(([n,s])=>this.setRegister(n,s))}getAll(){return[this.globals,this.environments,...this.scopes].reduce((e,n)=>fe(e,n),{})}get(e){return this.getSync(e)}getSync(e){return P(this._get(e))}*_get(e){const n=this.findScope(e[0]);return yield this._getFromScope(n,e)}getFromScope(e,n){return P(this._getFromScope(e,n))}*_getFromScope(e,n,s=this.strictVariables){p(n)&&(n=n.split("."));for(let r=0;r<n.length;r++)if(e=yield this.readProperty(e,n[r]),s&&nn(e))throw new gn(n.slice(0,r+1).join("."));return e}push(e){return this.scopes.push(e)}pop(){return this.scopes.pop()}bottom(){return this.scopes[0]}spawn(e={}){return new $(e,this.opts,{sync:this.sync,globals:this.globals,strictVariables:this.strictVariables,ownPropertyOnly:this.ownPropertyOnly},{renderLimit:this.renderLimit,memoryLimit:this.memoryLimit})}findScope(e){for(let n=this.scopes.length-1;n>=0;n--){const s=this.scopes[n];if(e in s)return s}return e in this.environments?this.environments:this.globals}readProperty(e,n){if(e=xt(e),n=g(n),v(e))return e;if(S(e)&&ae(n))return re(e,n,this.ownPropertyOnly);const s=qe(e,n,this.ownPropertyOnly);return s===void 0&&e instanceof Y?e.liquidMethodMissing(n,this):T(s)?s.call(e):n==="size"?Bs(e):n==="first"?Vs(e,this.ownPropertyOnly):n==="last"?Is(e,this.ownPropertyOnly):s}}function qe(t,e,n){if(!(n&&!be.call(t,e)&&!(t instanceof Y)))return t[e]}function Vs(t,e){return S(t)?re(t,0,e):qe(t,"first",e)}function Is(t,e){return S(t)?re(t,-1,e):qe(t,"last",e)}function Bs(t){if(be.call(t,"size")||t.size!==void 0)return t.size;if(S(t)||p(t))return t.length;if(typeof t=="object")return Object.keys(t).length}var U;(function(t){t[t.OUTPUT=0]="OUTPUT",t[t.STORE=1]="STORE"})(U||(U={}));const $s=M(Math.abs),Hs=M(Math.max),Us=M(Math.min),Ws=M(Math.ceil),Ys=M((t,e,n=!1)=>n?Math.floor(t/e):t/e),Js=M(Math.floor),Zs=M((t,e)=>t-e),Qs=M((t,e)=>t+e),Gs=M((t,e)=>(t%e+e)%e),Xs=M((t,e)=>t*e);function Ks(t,e=0){t=Le(t),e=Le(e);const n=Math.pow(10,e),s=t*n*(1+Number.EPSILON);return Math.round(s)/n}var er=Object.freeze({__proto__:null,abs:$s,at_least:Hs,at_most:Us,ceil:Ws,divided_by:Ys,floor:Js,minus:Zs,plus:Qs,modulo:Gs,times:Xs,round:Ks});const tr=t=>decodeURIComponent(d(t)).replace(/\+/g," "),nr=t=>encodeURIComponent(d(t)).replace(/%20/g,"+"),sr=t=>encodeURIComponent(d(t)).replace(/%20/g,"+").replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()),rr=t=>encodeURI(d(t)).replace(/%5B/g,"[").replace(/%5D/g,"]"),yt=/[^\p{M}\p{L}\p{Nd}]+/ug,ir={raw:/\s+/g,default:yt,pretty:/[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,ascii:/[^A-Za-z0-9]+/g,latin:yt,none:null};function ar(t,e="default",n=!1){t=d(t);const s=ir[e];return s&&(e==="latin"&&(t=or(t)),t=t.replace(s,"-").replace(/^-|-$/g,"")),n?t:t.toLowerCase()}function or(t){return t.replace(/[àáâãäå]/g,"a").replace(/[æ]/g,"ae").replace(/[ç]/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[ð]/g,"d").replace(/[ñ]/g,"n").replace(/[òóôõöø]/g,"o").replace(/[ùúûü]/g,"u").replace(/[ýÿ]/g,"y").replace(/[ß]/g,"ss").replace(/[œ]/g,"oe").replace(/[þ]/g,"th").replace(/[ẞ]/g,"SS").replace(/[Œ]/g,"OE").replace(/[Þ]/g,"TH")}var lr=Object.freeze({__proto__:null,url_decode:tr,url_encode:nr,cgi_escape:sr,uri_escape:rr,slugify:ar});const cr=ke(function(t,e){const n=_(t),s=v(e)?" ":d(e);let r=s.length*Math.max(n.length-1,0);for(let i=0;i<n.length;i++)r+=String(n[i]).length;return this.context.memoryLimit.use(r),Array.prototype.join.call(n,s)}),hr=ke(function(t){return Tt(t)?re(t,-1,this.context.ownPropertyOnly):""}),dr=ke(function(t){return Tt(t)?re(t,0,this.context.ownPropertyOnly):""}),pr=ke(function(t){const e=_(t);return this.context.memoryLimit.use(e.length),[...e].reverse()});function*Ht(t,e,n){const s=[],r=_(t);this.context.memoryLimit.use(r.length);for(const i of r)s.push([i,e?yield this.context._getFromScope(i,d(e).split("."),!1):i]);return s.sort((i,a)=>n(i[1],a[1])).map(i=>i[0])}function*ur(t,e){return yield*Ht.call(this,t,e,cn)}function*fr(t,e){return yield*Ht.call(this,t,e,hn)}const gr=t=>t&&t.length||0;function*mr(t,e){const n=[],s=_(t);this.context.memoryLimit.use(s.length);for(const r of s)n.push(yield this.context._getFromScope(r,d(e),!1));return n}function*br(t,e){let n=0;const s=_(t);for(const r of s){const i=Number(e?yield this.context._getFromScope(r,d(e),!1):r);n+=Number.isNaN(i)?0:i}return n}function yr(t){const e=_(t);return this.context.memoryLimit.use(e.length),Array.prototype.filter.call(e,n=>!v(g(n)))}function Ut(t,e=[]){const n=_(t),s=_(e);return this.context.memoryLimit.use(n.length+s.length),Array.prototype.concat.call(n,s)}function kr(t,e){return Ut.call(this,t,[e])}function wr(t,e){const n=_(t);this.context.memoryLimit.use(n.length);const s=[...n];return s.unshift(e),s}function vr(t){const e=_(t);this.context.memoryLimit.use(e.length);const n=[...e];return n.pop(),n}function xr(t){const e=_(t);this.context.memoryLimit.use(e.length);const n=[...e];return n.shift(),n}function Tr(t,e,n=1){return t=g(t),v(t)?[]:(S(t)||(t=d(t)),e=e<0?t.length+e:e,e<0||n<0?S(t)?[]:"":(this.context.memoryLimit.use(n),S(t)?Array.prototype.slice.call(t,e,e+n):String.prototype.slice.call(t,e,e+n)))}function Wt(t){return this.context.opts.jekyllWhere?e=>ee.is(t)?C(e,t):S(e)?is(e,t):C(e,t):t===void 0?e=>H(e,this.context):e=>C(e,t)}function*Yt(t,e,n,s){const r=[];e=_(e),this.context.memoryLimit.use(e.length);const i=new A(d(n)).readScopeValue();for(const o of e)r.push(yield x(i,this.context.spawn(o)));const a=Wt.call(this,s);return Array.prototype.filter.call(e,(o,h)=>a(r[h])===t)}function*Jt(t,e,n,s){const r=[],i=new F(d(s),this.liquid),a=_(e);this.context.memoryLimit.use(a.length);for(const o of a){this.context.push({[n]:o});const h=yield i.value(this.context);this.context.pop(),h===t&&r.push(o)}return r}function*Sr(t,e,n){return yield*Yt.call(this,!0,t,e,n)}function*_r(t,e,n){return yield*Yt.call(this,!1,t,e,n)}function*Lr(t,e,n){return yield*Jt.call(this,!0,t,e,n)}function*Or(t,e,n){return yield*Jt.call(this,!1,t,e,n)}function*Fr(t,e){const n=new Map;t=ie(t);const s=new A(d(e)).readScopeValue();this.context.memoryLimit.use(t.length);for(const r of t){const i=yield x(s,this.context.spawn(r));n.has(i)||n.set(i,[]),n.get(i).push(r)}return[...n.entries()].map(([r,i])=>({name:r,items:i}))}function*zr(t,e,n){const s=new Map,r=new F(d(n),this.liquid);t=ie(t),this.context.memoryLimit.use(t.length);for(const i of t){this.context.push({[e]:i});const a=yield r.value(this.context);this.context.pop(),s.has(a)||s.set(a,[]),s.get(a).push(i)}return[...s.entries()].map(([i,a])=>({name:i,items:a}))}function*Ve(t,e,n){const s=new A(d(e)).readScopeValue(),r=_(t),i=Wt.call(this,n);for(let a=0;a<r.length;a++){const o=yield x(s,this.context.spawn(r[a]));if(i(o))return[a,r[a]]}}function*Ie(t,e,n){const s=new F(d(n),this.liquid),r=_(t);for(let i=0;i<r.length;i++){this.context.push({[e]:r[i]});const a=yield s.value(this.context);if(this.context.pop(),a)return[i,r[i]]}}function*Nr(t,e,n){return!!(yield*Ve.call(this,t,e,n))}function*Rr(t,e,n){return!!(yield*Ie.call(this,t,e,n))}function*Er(t,e,n){const s=yield*Ve.call(this,t,e,n);return s?s[0]:void 0}function*Ar(t,e,n){const s=yield*Ie.call(this,t,e,n);return s?s[0]:void 0}function*Mr(t,e,n){const s=yield*Ve.call(this,t,e,n);return s?s[1]:void 0}function*Dr(t,e,n){const s=yield*Ie.call(this,t,e,n);return s?s[1]:void 0}function Pr(t){return t=_(t),this.context.memoryLimit.use(t.length),[...new Set(t)]}function Cr(t,e=1){if(t=g(t),v(t))return[];S(t)||(t=d(t)),this.context.memoryLimit.use(t.length);const n=[...t].sort(()=>Math.random()-.5);return e===1?n[0]:n.slice(0,e)}var jr=Object.freeze({__proto__:null,join:cr,last:hr,first:dr,reverse:pr,sort:ur,sort_natural:fr,size:gr,map:mr,sum:br,compact:yr,concat:Ut,push:kr,unshift:wr,pop:vr,shift:xr,slice:Tr,where:Sr,reject:_r,where_exp:Lr,reject_exp:Or,group_by:Fr,group_by_exp:zr,has:Nr,has_exp:Rr,find_index:Er,find_index_exp:Ar,find:Mr,find_exp:Dr,uniq:Pr,sample:Cr});function Be(t,e,n){var s,r;const i=((s=t==null?void 0:t.length)!==null&&s!==void 0?s:0)+((r=n==null?void 0:n.length)!==null&&r!==void 0?r:0);this.context.memoryLimit.use(i);const a=Qt(t,this.context.opts,n);return a?(e=g(e),e=v(e)?this.context.opts.dateFormat:d(e),this.context.memoryLimit.use(e.length),he(a,e,this.context.memoryLimit)):t}function qr(t){return Be.call(this,t,"%Y-%m-%dT%H:%M:%S%:z")}function Vr(t){return Be.call(this,t,"%a, %d %b %Y %H:%M:%S %z")}function Ir(t,e,n){return Zt.call(this,t,"%b",e,n)}function Br(t,e,n){return Zt.call(this,t,"%B",e,n)}function Zt(t,e,n,s){const r=Qt(t,this.context.opts);if(!r)return t;const i=this.context.memoryLimit;if(n==="ordinal"){const a=r.getDate();return s==="US"?he(r,`${e} ${a}%q, %Y`,i):he(r,`${a}%q ${e} %Y`,i)}return he(r,`%d ${e} %Y`,i)}function Qt(t,e,n){let s;const r=n??e.timezoneOffset,i=e.locale;if(t=g(t),!v(t))return t==="now"||t==="today"?s=new N(Date.now(),i,r):ae(t)?s=new N(t*1e3,i,r):p(t)?/^\d+$/.test(t)?s=new N(+t*1e3,i,r):e.preserveTimezones&&n===void 0?s=N.createDateFixedToTimezone(t,i):s=new N(t,i,r):s=new N(t,i,r),s.valid()?s:void 0}var $r=Object.freeze({__proto__:null,date:Be,date_to_xmlschema:qr,date_to_rfc822:Vr,date_to_string:Ir,date_to_long_string:Br});const _e=/[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu,kt=/[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;function Hr(t,e){L(arguments.length===2,"append expect 2 arguments");const n=d(t),s=d(e);return this.context.memoryLimit.use(n.length+s.length),n+s}function Ur(t,e){L(arguments.length===2,"prepend expect 2 arguments");const n=d(t),s=d(e);return this.context.memoryLimit.use(n.length+s.length),s+n}function Wr(t,e){const n=d(t);if(this.context.memoryLimit.use(n.length),e){e=d(e),this.context.memoryLimit.use(e.length);for(let s=0,r=new Set(e);s<n.length;s++)if(!r.has(n[s]))return n.slice(s);return""}return n.trimStart()}function Yr(t){const e=d(t);return this.context.memoryLimit.use(e.length),e.toLowerCase()}function Jr(t){const e=d(t);return this.context.memoryLimit.use(e.length),d(e).toUpperCase()}function Zr(t,e){const n=d(t);return e=d(e),this.context.memoryLimit.use(n.length+e.length),n.split(e).join("")}function Qr(t,e){const n=d(t);return e=d(e),this.context.memoryLimit.use(n.length+e.length),n.replace(e,"")}function Gr(t,e){const n=d(t),s=d(e);this.context.memoryLimit.use(n.length+s.length);const r=n.lastIndexOf(s);return r===-1?n:n.substring(0,r)+n.substring(r+s.length)}function Xr(t,e){if(t=d(t),this.context.memoryLimit.use(t.length),e){e=d(e),this.context.memoryLimit.use(e.length);for(let n=t.length-1,s=new Set(e);n>=0;n--)if(!s.has(t[n]))return t.slice(0,n+1);return""}return t.trimEnd()}function Kr(t,e){const n=d(t);this.context.memoryLimit.use(n.length);const s=n.split(d(e));for(;s.length&&s[s.length-1]==="";)s.pop();return s}function ei(t,e){const n=d(t);if(this.context.memoryLimit.use(n.length),e){const s=new Set(d(e));this.context.memoryLimit.use(s.size);let r=0,i=n.length-1;for(;s.has(n[r]);)r++;for(;i>=r&&s.has(n[i]);)i--;return n.slice(r,i+1)}return n.trim()}function ti(t){const e=d(t);return this.context.memoryLimit.use(e.length),e.replace(/\r?\n/gm,"")}function ni(t){return t=d(t),this.context.memoryLimit.use(t.length),t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function si(t,e,n){const s=d(t);e=d(e),n=d(n);const r=s.split(e),i=s.length+(r.length-1)*(n.length-e.length);return this.context.memoryLimit.use(i),r.join(n)}function ri(t,e,n){const s=d(t);return e=d(e),n=d(n),this.context.memoryLimit.use(s.length+e.length+n.length),s.replace(e,()=>n)}function ii(t,e,n){const s=d(t),r=d(e),i=d(n);this.context.memoryLimit.use(s.length+r.length+i.length);const a=s.lastIndexOf(r);return a===-1?s:s.substring(0,a)+i+s.substring(a+r.length)}function ai(t,e=50,n="..."){const s=d(t);return n=d(n),this.context.memoryLimit.use(s.length+n.length),s.length<=e?t:s.substring(0,e-n.length)+n}function oi(t,e=15,n="..."){const s=d(t);n=d(n),this.context.memoryLimit.use(s.length+n.length);const r=s.split(/\s+/);e<=0&&(e=1);let i=r.slice(0,e).join(" ");return r.length>=e&&(i+=n),i}function li(t){const e=d(t);return this.context.memoryLimit.use(e.length),e.replace(/\s+/g," ")}function ci(t,e){const n=d(t);if(this.context.memoryLimit.use(n.length),t=n.trim(),!t)return 0;switch(e){case"cjk":return(t.match(_e)||[]).length+(t.match(kt)||[]).length;case"auto":return _e.test(t)?t.match(_e).length+(t.match(kt)||[]).length:t.split(/\s+/).length;default:return t.split(/\s+/).length}}function hi(t,e="and"){e=d(e);let n=e.length+t.length*2;for(let s=0;s<t.length;s++)n+=d(t[s]).length;switch(this.context.memoryLimit.use(n),t.length){case 0:return"";case 1:return t[0];case 2:return`${t[0]} ${e} ${t[1]}`;default:return`${t.slice(0,-1).join(", ")}, ${e} ${t[t.length-1]}`}}var di=Object.freeze({__proto__:null,append:Hr,prepend:Ur,lstrip:Wr,downcase:Yr,upcase:Jr,remove:Zr,remove_first:Qr,remove_last:Gr,rstrip:Xr,split:Kr,strip:ei,strip_newlines:ti,capitalize:ni,replace:si,replace_first:ri,replace_last:ii,truncate:ai,truncatewords:oi,normalize_whitespace:li,number_of_words:ci,array_to_sentence_string:hi});function pi(t){return btoa(String.fromCharCode(...new TextEncoder().encode(t)))}function ui(t){return new TextDecoder().decode(Uint8Array.from(atob(t),e=>e.charCodeAt(0)))}function fi(t){if(typeof Buffer<"u"&&Buffer.isBuffer(t))return this.context.memoryLimit.use(t.byteLength),t.toString("base64");const e=d(t);return this.context.memoryLimit.use(e.length),pi(e)}function gi(t){const e=d(t);return this.context.memoryLimit.use(e.length),ui(e)}var mi=Object.freeze({__proto__:null,base64_encode:fi,base64_decode:gi});function Gt(t){const e=new Uint8Array(t);let n="";for(let s=0;s<e.length;s++)n+=e[s].toString(16).padStart(2,"0");return n}function bi(t){return k(this,void 0,void 0,function*(){const e=new TextEncoder().encode(t),n=yield crypto.subtle.digest("SHA-256",e);return Gt(n)})}function yi(t,e){return k(this,void 0,void 0,function*(){const n=new TextEncoder,s=yield crypto.subtle.importKey("raw",n.encode(e),{name:"HMAC",hash:"SHA-256"},!1,["sign"]),r=yield crypto.subtle.sign("HMAC",s,n.encode(t));return Gt(r)})}function ki(t){const e=d(t);return this.context.memoryLimit.use(e.length),bi(e)}function wi(t,e){const n=d(t),s=d(e);return this.context.memoryLimit.use(n.length+s.length),yi(n,s)}var vi=Object.freeze({__proto__:null,sha256:ki,hmac_sha256:wi});const xi=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},_s),er),lr),jr),$r),di),mi),vi),Ct);class Ti extends w{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.key=this.identifier.content,this.tokenizer.assert(this.key,"expected variable name"),this.tokenizer.skipBlank(),this.tokenizer.assert(this.tokenizer.peek()==="=",'expected "="'),this.tokenizer.advance(),this.value=new F(this.tokenizer.readFilteredValue(),this.liquid)}*render(e){e.bottom()[this.key]=yield this.value.value(e,this.liquid.options.lenientIf)}*arguments(){yield this.value}*localScope(){yield this.identifier}}const wt=["offset","limit","reversed"];class Si extends w{constructor(e,n,s,r){super(e,n,s);const i=this.tokenizer.readIdentifier(),a=this.tokenizer.readIdentifier(),o=this.tokenizer.readValue();if(!i.size()||a.content!=="in"||!o)throw new Error(`illegal tag: ${e.getText()}`);this.variable=i.content,this.collection=o,this.hash=new ne(this.tokenizer,s.options.keyValueSeparator),this.templates=[],this.elseTemplates=[];let h;const c=r.parseStream(n).on("start",()=>h=this.templates).on("tag:else",l=>{ue(l.args),h=this.elseTemplates}).on("tag:endfor",l=>{ue(l.args),c.stop()}).on("template",l=>h.push(l)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});c.start()}*render(e,n){const s=this.liquid.renderer;let r=ie(yield x(this.collection,e));if(!r.length){yield s.renderTemplates(this.elseTemplates,e,n);return}const i="continue-"+this.variable+"-"+this.collection.getText();e.push(V({continue:e.getRegister(i,{})}));const a=yield this.hash.render(e);e.pop(),r=(this.liquid.options.orderedFilterParameters?Object.keys(a).filter(c=>wt.includes(c)):wt.filter(c=>a[c]!==void 0)).reduce((c,l)=>l==="offset"?Li(c,a.offset):l==="limit"?Oi(c,a.limit):_i(c),r),e.setRegister(i,(a.offset||0)+r.length);const h=V({forloop:new De(r.length,this.collection.getText(),this.variable)});e.push(h);for(const c of r){if(h[this.variable]=c,e.continueCalled=e.breakCalled=!1,yield s.renderTemplates(this.templates,e,n),e.breakCalled)break;h.forloop.next()}e.continueCalled=e.breakCalled=!1,e.pop()}*children(){const e=this.templates.slice();return this.elseTemplates&&e.push(...this.elseTemplates),e}*arguments(){yield this.collection;for(const e of Object.values(this.hash.hash))O(e)&&(yield e)}blockScope(){return[this.variable,"forloop"]}}function _i(t){return[...t].reverse()}function Li(t,e){return t.slice(e)}function Oi(t,e){return t.slice(0,e)}class Fi extends w{constructor(e,n,s,r){for(super(e,n,s),this.templates=[],this.identifier=this.readVariable(),this.variable=this.identifier.content;n.length;){const i=n.shift();if(Z(i)&&i.name==="endcapture")return;this.templates.push(r.parseToken(i,n))}throw new Error(`tag ${e.getText()} not closed`)}readVariable(){let e=this.tokenizer.readIdentifier();if(e.content||(e=this.tokenizer.readQuoted(),e))return e;throw this.tokenizer.error("invalid capture name")}*render(e){const s=yield this.liquid.renderer.renderTemplates(this.templates,e);e.bottom()[this.variable]=s}*children(){return this.templates}*localScope(){yield this.identifier}}class zi extends w{constructor(e,n,s,r){super(e,n,s),this.branches=[],this.elseTemplates=[],this.value=new F(this.tokenizer.readFilteredValue(),this.liquid),this.elseTemplates=[];let i=[],a=0;const o=r.parseStream(n).on("tag:when",h=>{if(a>0)return;i=[];const c=[];for(;!h.tokenizer.end();)c.push(h.tokenizer.readValueOrThrow()),h.tokenizer.skipBlank(),h.tokenizer.peek()===","?h.tokenizer.readTo(","):h.tokenizer.readTo("or");this.branches.push({values:c,templates:i})}).on("tag:else",()=>{a++,i=this.elseTemplates}).on("tag:endcase",()=>o.stop()).on("template",h=>{(i!==this.elseTemplates||a===1)&&i.push(h)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});o.start()}*render(e,n){const s=this.liquid.renderer,r=g(yield this.value.value(e,e.opts.lenientIf));let i=!1;for(const a of this.branches)for(const o of a.values){const h=yield x(o,e,e.opts.lenientIf);if(C(r,h)){yield s.renderTemplates(a.templates,e,n),i=!0;break}}i||(yield s.renderTemplates(this.elseTemplates,e,n))}*arguments(){yield this.value,yield*this.branches.flatMap(e=>e.values)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}}class Ni extends w{constructor(e,n,s){for(super(e,n,s);n.length;){const r=n.shift();if(Z(r)&&r.name==="endcomment")return}throw new Error(`tag ${e.getText()} not closed`)}render(){}}class Ri extends w{constructor(e,n,s,r){super(e,n,s);const i=this.tokenizer;for(this.file=$e(i,this.liquid,r),this.currentFile=e.file;!i.end();){i.skipBlank();const a=i.p,o=i.readIdentifier();if((o.content==="with"||o.content==="for")&&(i.skipBlank(),i.peek()!==":")){const h=i.readValue();if(h){const c=i.p,l=i.readIdentifier();let u;l.content==="as"?u=i.readIdentifier():i.p=c;const f={value:h,alias:u&&u.content};o.content==="with"?this.with=f:this.forBinding=f,i.skipBlank(),i.peek()===","&&i.advance();continue}}i.p=a;break}this.hash=new ne(i,s.options.keyValueSeparator)}*render(e,n){const{liquid:s,hash:r}=this,i=yield He(this.file,e,s);L(i,()=>`illegal file path "${i}"`);const a=e.spawn(),o=a.bottom();if(fe(o,yield r.render(e)),this.with){const{value:h,alias:c}=this.with;o[c||i]=yield x(h,e)}if(this.forBinding){const{value:h,alias:c}=this.forBinding,l=ie(yield x(h,e));o.forloop=new De(l.length,h.getText(),c);for(const u of l){o[c]=u;const f=yield s._parsePartialFile(i,a.sync,this.currentFile);yield s.renderer.renderTemplates(f,a,n),o.forloop.next()}}else{const h=yield s._parsePartialFile(i,a.sync,this.currentFile);yield s.renderer.renderTemplates(h,a,n)}}*children(e,n){return e&&p(this.file)?yield this.liquid._parsePartialFile(this.file,n,this.currentFile):[]}partialScope(){if(p(this.file)){const e=Object.keys(this.hash.hash);if(this.with){const{value:n,alias:s}=this.with;p(s)?e.push([s,n]):p(this.file)&&e.push([this.file,n])}if(this.forBinding){const{value:n,alias:s}=this.forBinding;p(s)?e.push([s,n]):p(this.file)&&e.push([this.file,n])}return{name:this.file,isolated:!0,scope:e}}}*arguments(){for(const e of Object.values(this.hash.hash))O(e)&&(yield e);if(this.with){const{value:e}=this.with;O(e)&&(yield e)}if(this.forBinding){const{value:e}=this.forBinding;O(e)&&(yield e)}}}function $e(t,e,n){if(e.options.dynamicPartials){const i=t.readValue();if(t.assert(i,"illegal file path"),i.getText()==="none")return;if(Ae(i)){const a=n.parse(es(i));return vt(a)}return i}const s=[...t.readFileNameTemplate(e.options)],r=vt(n.parseTokens(s));return r==="none"?void 0:r}function vt(t){return t.length===1&&je(t[0].token)?t[0].token.getContent():t}function*He(t,e,n){return typeof t=="string"?t:Array.isArray(t)?n.renderer.renderTemplates(t,e):yield x(t,e)}class Ei extends w{constructor(e,n,s,r){super(e,n,s);const{tokenizer:i}=e;this.file=$e(i,this.liquid,r),this.currentFile=e.file;const a=i.p;i.readIdentifier().content==="with"?(i.skipBlank(),i.peek()!==":"?this.withVar=i.readValue():i.p=a):i.p=a,this.hash=new ne(i,s.options.jekyllInclude||s.options.keyValueSeparator)}*render(e,n){const{liquid:s,hash:r,withVar:i}=this,{renderer:a}=s,o=yield He(this.file,e,s);L(o,()=>`illegal file path "${o}"`);const h=e.saveRegister("blocks","blockMode");e.setRegister("blocks",{}),e.setRegister("blockMode",U.OUTPUT);const c=V(yield r.render(e));i&&(c[o]=yield x(i,e));const l=yield s._parsePartialFile(o,e.sync,this.currentFile);e.push(e.opts.jekyllInclude?V({include:c}):c),yield a.renderTemplates(l,e,n),e.pop(),e.restoreRegister(h)}*children(e,n){return e&&p(this.file)?yield this.liquid._parsePartialFile(this.file,n,this.currentFile):[]}partialScope(){if(p(this.file)){let e;return this.liquid.options.jekyllInclude?e=["include"]:(e=Object.keys(this.hash.hash),this.withVar&&e.push([this.file,this.withVar])),{name:this.file,isolated:!1,scope:e}}}*arguments(){yield*Object.values(this.hash.hash).filter(O),O(this.file)&&(yield this.file),O(this.withVar)&&(yield this.withVar)}}class Ai extends w{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.variable=this.identifier.content}render(e,n){const s=e.environments;ae(s[this.variable])||(s[this.variable]=0),n.write(d(--s[this.variable]))}*localScope(){yield this.identifier}}class Mi extends w{constructor(e,n,s){super(e,n,s),this.candidates=[];const r=this.tokenizer.readValue();for(this.tokenizer.skipBlank(),r&&(this.tokenizer.peek()===":"?(this.group=r,this.tokenizer.advance()):this.candidates.push(r));!this.tokenizer.end();){const i=this.tokenizer.readValue();i&&this.candidates.push(i),this.tokenizer.readTo(",")}this.tokenizer.assert(this.candidates.length,()=>`empty candidates: "${e.getText()}"`)}*render(e,n){const r=`cycle:${yield x(this.group,e)}:`+this.candidates.join(","),i=e.getRegister("cycle",{});let a=i[r];a===void 0&&(a=i[r]=0);const o=this.candidates[a];return a=(a+1)%this.candidates.length,i[r]=a,yield x(o,e)}*arguments(){yield*this.candidates,this.group&&(yield this.group)}}class Di extends w{constructor(e,n,s,r){super(e,n,s),this.branches=[];let i=[];r.parseStream(n).on("start",()=>this.branches.push({value:new F(e.tokenizer.readFilteredValue(),this.liquid),templates:i=[]})).on("tag:elsif",a=>{L(!this.elseTemplates,"unexpected elsif after else"),this.branches.push({value:new F(a.tokenizer.readFilteredValue(),this.liquid),templates:i=[]})}).on("tag:else",a=>{ue(a.args),L(!this.elseTemplates,"duplicated else"),i=this.elseTemplates=[]}).on("tag:endif",function(a){ue(a.args),this.stop()}).on("template",a=>i.push(a)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()}*render(e,n){const s=this.liquid.renderer;for(const{value:r,templates:i}of this.branches){const a=yield r.value(e,e.opts.lenientIf);if(H(a,e)){yield s.renderTemplates(i,e,n);return}}yield s.renderTemplates(this.elseTemplates||[],e,n)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}arguments(){return this.branches.map(e=>e.value)}}class Pi extends w{constructor(e,n,s){super(e,n,s),this.identifier=this.tokenizer.readIdentifier(),this.variable=this.identifier.content}render(e,n){const s=e.environments;ae(s[this.variable])||(s[this.variable]=0);const r=s[this.variable];s[this.variable]++,n.write(d(r))}*localScope(){yield this.identifier}}class Ci extends w{constructor(e,n,s,r){super(e,n,s),this.file=$e(this.tokenizer,this.liquid,r),this.currentFile=e.file,this.args=new ne(this.tokenizer,s.options.keyValueSeparator),this.templates=r.parseTokens(n)}*render(e,n){const{liquid:s,args:r,file:i}=this,{renderer:a}=s;if(i===void 0){e.setRegister("blockMode",U.OUTPUT),yield a.renderTemplates(this.templates,e,n);return}const o=yield He(this.file,e,s);L(o,()=>`illegal file path "${o}"`);const h=yield s._parseLayoutFile(o,e.sync,this.currentFile);e.setRegister("blockMode",U.STORE);const c=yield a.renderTemplates(this.templates,e),l=e.getRegister("blocks",{});l[""]===void 0&&(l[""]=(u,f)=>f.write(c)),e.setRegister("blockMode",U.OUTPUT),e.push(V(yield r.render(e))),yield a.renderTemplates(h,e,n),e.pop()}*children(e){const n=this.templates.slice();return e&&p(this.file)&&n.push(...yield this.liquid._parsePartialFile(this.file,!0,this.currentFile)),n}*arguments(){for(const e of Object.values(this.args.hash))O(e)&&(yield e);O(this.file)&&(yield this.file)}partialScope(){if(p(this.file))return{name:this.file,isolated:!1,scope:Object.keys(this.args.hash)}}}class ji extends w{constructor(e,n,s,r){super(e,n,s),this.templates=[];const i=/\w+/.exec(e.args);for(this.block=i?i[0]:"";n.length;){const a=n.shift();if(Z(a)&&a.name==="endblock")return;const o=r.parseToken(a,n);this.templates.push(o)}throw new Error(`tag ${e.getText()} not closed`)}*render(e,n){const s=this.getBlockRender(e);e.getRegister("blockMode")===U.STORE?e.getRegister("blocks",{})[this.block]=s:yield s(new Xe,n)}getBlockRender(e){const n=this,{liquid:s,templates:r}=this,i=e.getRegister("blocks",{})[this.block],a=function*(o,h){const c=e.getRegister("blockStack",[]);if(c.includes(n))throw new Error("block tag cannot be nested");c.push(n),e.push(V({block:o})),yield s.renderer.renderTemplates(r,e,h),e.pop(),c.pop()};return i?(o,h)=>i(new Xe(c=>a(o,c)),h):a}*children(){return this.templates}blockScope(){return["block"]}}class qi extends w{constructor(e,n,s){for(super(e,n,s),this.tokens=[];n.length;){const r=n.shift();if(Z(r)&&r.name==="endraw")return;this.tokens.push(r)}throw new Error(`tag ${e.getText()} not closed`)}render(){return this.tokens.map(e=>e.getText()).join("")}}class Vi extends De{constructor(e,n,s,r){super(e,s,r),this.length=e,this.cols=n}row(){return Math.floor(this.i/this.cols)+1}col0(){return this.i%this.cols}col(){return this.col0()+1}col_first(){return this.col0()===0}col_last(){return this.col()===this.cols}}class Ii extends w{constructor(e,n,s,r){super(e,n,s);const i=this.tokenizer.readIdentifier();this.tokenizer.skipBlank();const a=this.tokenizer.readIdentifier(),o=this.tokenizer.readValue();if(a.content!=="in"||!o)throw new Error(`illegal tag: ${e.getText()}`);this.variable=i.content,this.collection=o,this.args=new ne(this.tokenizer,s.options.keyValueSeparator),this.templates=[];let h;const c=r.parseStream(n).on("start",()=>h=this.templates).on("tag:endtablerow",()=>c.stop()).on("template",l=>h.push(l)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});c.start()}*render(e,n){let s=ie(yield x(this.collection,e));const r=yield this.args.render(e),i=r.offset||0,a=r.limit===void 0?s.length:r.limit;s=s.slice(i,i+a);const o=r.cols||s.length,h=this.liquid.renderer,c=new Vi(s.length,o,this.collection.getText(),this.variable),l=V({tablerowloop:c});e.push(l);for(let u=0;u<s.length;u++,c.next())l[this.variable]=s[u],c.col0()===0&&(c.row()!==1&&n.write("</tr>"),n.write(`<tr class="row${c.row()}">`)),n.write(`<td class="col${c.col()}">`),yield h.renderTemplates(this.templates,e,n),n.write("</td>");s.length&&n.write("</tr>"),e.pop()}*children(){return this.templates}*arguments(){yield this.collection;for(const e of Object.values(this.args.hash))O(e)&&(yield e)}blockScope(){return[this.variable,"tablerowloop"]}}class Bi extends w{constructor(e,n,s,r){super(e,n,s),this.branches=[],this.elseTemplates=[];let i=[],a=0;r.parseStream(n).on("start",()=>this.branches.push({value:new F(e.tokenizer.readFilteredValue(),this.liquid),test:we,templates:i=[]})).on("tag:elsif",o=>{if(a>0){i=[];return}this.branches.push({value:new F(o.tokenizer.readFilteredValue(),this.liquid),test:H,templates:i=[]})}).on("tag:else",()=>{a++,i=this.elseTemplates}).on("tag:endunless",function(){this.stop()}).on("template",o=>{(i!==this.elseTemplates||a===1)&&i.push(o)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()}*render(e,n){const s=this.liquid.renderer;for(const{value:r,test:i,templates:a}of this.branches){const o=yield r.value(e,e.opts.lenientIf);if(i(o,e)){yield s.renderTemplates(a,e,n);return}}yield s.renderTemplates(this.elseTemplates,e,n)}*children(){const e=this.branches.flatMap(n=>n.templates);return this.elseTemplates&&e.push(...this.elseTemplates),e}arguments(){return this.branches.map(e=>e.value)}}class $i extends w{render(e,n){e.breakCalled=!0}}class Hi extends w{render(e,n){e.continueCalled=!0}}class Ui extends w{constructor(e,n,s){super(e,n,s),this.tokenizer.skipBlank(),this.tokenizer.end()||(this.value=new F(this.tokenizer.readFilteredValue(),this.liquid))}*render(e,n){if(!this.value)return;const s=yield this.value.value(e,!1);n.write(s)}*arguments(){this.value&&(yield this.value)}}class Wi extends w{constructor(e,n,s,r){super(e,n,s);const i=this.tokenizer.readLiquidTagTokens(this.liquid.options);this.templates=r.parseTokens(i)}*render(e,n){yield this.liquid.renderer.renderTemplates(this.templates,e,n)}*children(){return this.templates}}class Yi extends w{constructor(e,n,s){if(super(e,n,s),e.args.search(/\n\s*[^#\s]/g)!==-1)throw new Error("every line of an inline comment must start with a '#' character")}render(){}}const Ji={assign:Ti,for:Si,capture:Fi,case:zi,comment:Ni,include:Ei,render:Ri,decrement:Ai,increment:Pi,cycle:Mi,if:Di,layout:Ci,block:ji,raw:qi,tablerow:Ii,unless:Bi,break:$i,continue:Hi,echo:Ui,liquid:Wi,"#":Yi};class Ue{constructor(e={}){this.renderer=new Gn,this.filters=Object.create(null),this.tags=Object.create(null),this.options=Os(e),this.parser=new B(this),Ze(Ji,(n,s)=>this.registerTag(s,n)),Ze(xi,(n,s)=>this.registerFilter(s,n))}parse(e,n){return new B(this).parse(e,n)}_render(e,n,s){const r=n instanceof $?n:new $(n,this.options,s);return this.renderer.renderTemplates(e,r)}render(e,n,s){return k(this,void 0,void 0,function*(){return D(this._render(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}renderSync(e,n,s){return P(this._render(e,n,Object.assign(Object.assign({},s),{sync:!0})))}renderToNodeStream(e,n,s={}){const r=new $(n,this.options,s);return this.renderer.renderTemplatesToNodeStream(e,r)}_parseAndRender(e,n,s){const r=this.parse(e);return this._render(r,n,s)}parseAndRender(e,n,s){return k(this,void 0,void 0,function*(){return D(this._parseAndRender(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}parseAndRenderSync(e,n,s){return P(this._parseAndRender(e,n,Object.assign(Object.assign({},s),{sync:!0})))}_parsePartialFile(e,n,s){return new B(this).parseFile(e,n,te.Partials,s)}_parseLayoutFile(e,n,s){return new B(this).parseFile(e,n,te.Layouts,s)}_parseFile(e,n,s,r){return new B(this).parseFile(e,n,s,r)}parseFile(e,n){return k(this,void 0,void 0,function*(){return D(new B(this).parseFile(e,!1,n))})}parseFileSync(e,n){return P(new B(this).parseFile(e,!0,n))}*_renderFile(e,n,s){const r=yield this._parseFile(e,s.sync,s.lookupType);return yield this._render(r,n,s)}renderFile(e,n,s){return k(this,void 0,void 0,function*(){return D(this._renderFile(e,n,Object.assign(Object.assign({},s),{sync:!1})))})}renderFileSync(e,n,s){return P(this._renderFile(e,n,Object.assign(Object.assign({},s),{sync:!0})))}renderFileToNodeStream(e,n,s){return k(this,void 0,void 0,function*(){const r=yield this.parseFile(e);return this.renderToNodeStream(r,n,s)})}_evalValue(e,n){const s=new F(e,this),r=n instanceof $?n:new $(n,this.options);return s.value(r)}evalValue(e,n){return k(this,void 0,void 0,function*(){return D(this._evalValue(e,n))})}evalValueSync(e,n){return P(this._evalValue(e,n))}registerFilter(e,n){this.filters[e]=n}registerTag(e,n){this.tags[e]=T(n)?n:As(n)}plugin(e){return e.call(this,Ue)}express(){const e=this;let n=!0;return function(s,r,i){if(n){n=!1;const a=de(this.root);e.options.root.unshift(...a),e.options.layouts.unshift(...a),e.options.partials.unshift(...a)}e.renderFile(s,r).then(a=>i(null,a),i)}}analyze(e,n={}){return k(this,void 0,void 0,function*(){return j(e,n)})}analyzeSync(e,n={}){return q(e,n)}parseAndAnalyze(e,n,s={}){return k(this,void 0,void 0,function*(){return j(this.parse(e,n),s)})}parseAndAnalyzeSync(e,n,s={}){return q(this.parse(e,n),s)}variables(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Object.keys(s.variables)})}variablesSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Object.keys(s.variables)}fullVariables(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.variables).flatMap(r=>r.map(i=>String(i)))))})}fullVariablesSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.variables).flatMap(r=>r.map(i=>String(i)))))}variableSegments(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Array.from(oe(Object.values(s.variables).flatMap(r=>r.map(i=>i.toArray()))))})}variableSegmentsSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Array.from(oe(Object.values(s.variables).flatMap(r=>r.map(i=>i.toArray()))))}globalVariables(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Object.keys(s.globals)})}globalVariablesSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Object.keys(s.globals)}globalFullVariables(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.globals).flatMap(r=>r.map(i=>String(i)))))})}globalFullVariablesSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Array.from(new Set(Object.values(s.globals).flatMap(r=>r.map(i=>String(i)))))}globalVariableSegments(e,n={}){return k(this,void 0,void 0,function*(){const s=yield j(p(e)?this.parse(e):e,n);return Array.from(oe(Object.values(s.globals).flatMap(r=>r.map(i=>i.toArray()))))})}globalVariableSegmentsSync(e,n={}){const s=q(p(e)?this.parse(e):e,n);return Array.from(oe(Object.values(s.globals).flatMap(r=>r.map(i=>i.toArray()))))}}const Zi=`{%- comment -%}
  Full kundli document template (LiquidJS).
  Data shape: see KundliJson in src/astro/kundliJson.ts. This template is fully
  self-contained: all presentation (including the embedded <style> block below)
  lives here, so the same template + a KundliJson object renders an identical
  document anywhere — no external stylesheet required. All astrology logic is
  pre-computed in the JSON; charts are drawn here from plain values by the
  chart.liquid partial, keeping this file the single source of presentation.
  Section ids (overview, planets, shadbala, charts, dashas, ashtaka, yogas,
  gochar, varshphal, interpretation) match the sidebar navigation anchors.
{%- endcomment -%}
<div class="kundli-doc" lang="{{ meta.language }}">
  <style>
    .kundli-doc {
      /* Reading text is a softened warm ink rather than near-black, and the life
         report uses the same value so the two documents read at the same weight.
         Grey (--muted, --faint) is kept for small uppercase labels, page footers and
         the coordinates line — never for the reading text itself. */
      --ink: #464038;
      --muted: #6f665a;
      --faint: #9a9183;
      --accent: #8a2d3b;
      --gold: #b08436;
      --hair: #e4ddcf;
      --tint: #faf7f1;
      --head: #f4eee3;
      color: var(--ink);
      /* The app's one type stack, used for every element of both documents: Noto
         Sans for Latin, Noto Sans Devanagari for Hindi, then the platform's UI face
         when the webfonts are unavailable — an exported file opened offline. */
      --doc-font: "Noto Sans", "Noto Sans Devanagari", ui-sans-serif, system-ui,
        -apple-system, "Segoe UI", sans-serif;
      font-family: var(--doc-font);
      font-size: 13.5px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }
    .kundli-doc * { box-sizing: border-box; }
    .kundli-doc section { margin: 0 0 2rem; }

    /* Headings */
    .kundli-doc h1, .kundli-doc h2, .kundli-doc h3, .kundli-doc h4 {
      font-family: var(--doc-font);
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

    /* Devanagari is never letter-spaced: tracking breaks the continuous headline
       its letters hang from, so the small-caps headings and labels below would
       read as spaced-out letters in Hindi. !important because every tracked rule
       is more specific than this one. */
    .kundli-doc:lang(hi),
    .kundli-doc:lang(hi) *,
    .kundli-doc:lang(hi) *::before,
    .kundli-doc:lang(hi) *::after {
      letter-spacing: normal !important;
    }

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
    .kp-sub { margin: 0.25rem 0; }
    .kp-meta { margin: 0.2rem 0; color: var(--faint); font-size: 0.78rem; letter-spacing: 0.02em; }
    .kp-asc { margin: 0.6rem 0 0; font-size: 0.95rem; }
    .kp-asc strong { color: var(--accent); }
    .kp-disclaimer { font-size: 0.8rem; font-style: italic; }

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
    .kp-varga-desc { margin: 0.35rem 0 0; font-size: 0.72rem; text-align: center; }

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
      font-family: var(--doc-font);
    }
    .kundli-doc .planet {
      fill: var(--ink);
      font-size: 13px;
      font-weight: 600;
      text-anchor: middle;
      font-family: var(--doc-font);
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
    /* "Direct" is the unremarkable default and stays plain text; the notable
       states are badged so they can be picked out while scanning the column. */
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
    .kp-d3 > summary.kp-drow .kp-dname { padding-left: 2.2rem; }
    .kp-d4 .kp-dname { padding-left: 4.2rem; }
    .kp-drow.kp-dactive { background: rgba(138, 45, 59, 0.09); font-weight: 600; }
    .kp-ddate { white-space: nowrap; }

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
    .kp-act-antar { font-size: 0.68rem; background: transparent; }

    /* Gochar tables. Where the table has less than about 640px — a phone, or a narrow
       tablet — each graha becomes a card instead of a row that must be scrolled
       sideways. This is a container query rather than a media query because it should
       answer to the width the table actually gets: paper and the exported file always
       lay the sheet out at full width, so they keep the table with nothing having to
       undo the cards. The few labels a card needs come from data-label, so they are
       already in the document's language. Cell order mirrors the header. */
    .kp-gochar-wrap { container-type: inline-size; }
    @container (max-width: 640px) {
      .kp-gochar-pos, .kp-gochar-signs {
        display: block;
        border-top: 1.5px solid var(--accent);
      }
      .kp-gochar-pos thead, .kp-gochar-signs thead { display: none; }
      /* The body is the grid and every card a subgrid of it, so a column lines up from
         card to card. Without subgrid each card keeps the same tracks on its own. */
      .kp-gochar-pos tbody, .kp-gochar-signs tbody {
        display: grid;
        column-gap: 0.75rem;
      }
      .kp-gochar-pos tr, .kp-gochar-signs tr {
        display: grid;
        grid-column: 1 / -1;
        padding: 0.55rem 0.45rem;
        border-bottom: 1px solid var(--hair);
      }
      .kp-gochar-pos tbody tr:nth-child(even),
      .kp-gochar-signs tbody tr:nth-child(even) { background: var(--tint); }
      .kp-gochar-pos td, .kp-gochar-signs td,
      .kp-gochar-pos tbody tr:nth-child(even) td,
      .kp-gochar-signs tbody tr:nth-child(even) td {
        padding: 0.12rem 0;
        border: 0;
        background: none;
      }
      .kp-gochar-pos td:first-child, .kp-gochar-signs td:first-child { font-weight: 600; }
      .kp-gochar-wrap td[data-label]::before {
        content: attr(data-label);
        margin-right: 0.35rem;
        font-size: 0.64rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--muted);
      }
      /* A house number or a bindu count is meaningless without its label, and a third
         of a phone is too narrow to keep both on one line, so the positions card sets
         the label above the number, like a stat. */
      .kp-gochar-pos td[data-label] { padding-top: 0.35rem; }
      .kp-gochar-pos td[data-label]::before { display: block; margin: 0; }

      .kp-gochar-pos tbody { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto; }
      .kp-gochar-pos tr {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
        grid-template-columns: subgrid;
        grid-template-areas:
          "planet planet result"
          "sign   degree state"
          "nak    nak    nak"
          "lagna  moon   bindus";
      }
      .kp-gochar-pos td:nth-child(1) { grid-area: planet; }
      .kp-gochar-pos td:nth-child(2) { grid-area: sign; }
      .kp-gochar-pos td:nth-child(3) { grid-area: degree; }
      .kp-gochar-pos td:nth-child(4) { grid-area: nak; }
      .kp-gochar-pos td:nth-child(5) { grid-area: state; text-align: right; }
      .kp-gochar-pos td:nth-child(6) { grid-area: lagna; }
      .kp-gochar-pos td:nth-child(7) { grid-area: moon; }
      .kp-gochar-pos td:nth-child(8) { grid-area: bindus; text-align: right; }
      .kp-gochar-pos td:nth-child(9) { grid-area: result; text-align: right; }

      .kp-gochar-signs tbody { grid-template-columns: minmax(0, 1fr) auto auto; }
      .kp-gochar-signs tr {
        grid-template-columns: minmax(0, 1fr) auto auto;
        grid-template-columns: subgrid;
        grid-template-areas:
          "planet  sign    next"
          "entered entered entered"
          "leaves  leaves  leaves";
      }
      .kp-gochar-signs td:nth-child(1) { grid-area: planet; }
      .kp-gochar-signs td:nth-child(2) { grid-area: sign; }
      .kp-gochar-signs td:nth-child(3) { grid-area: entered; }
      .kp-gochar-signs td:nth-child(4) { grid-area: leaves; }
      .kp-gochar-signs td:nth-child(5) { grid-area: next; }
      .kp-gochar-signs td:nth-child(5)::before {
        content: "\\2192";
        margin-right: 0.35rem;
        color: var(--faint);
      }
    }

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
            <span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

  <section id="gochar" class="doc-page">
    <h2>{{ labels.gocharHeading | escape }}</h2>
    <p class="kp-current">{{ labels.gocharAsOfLabel | escape }} {{ gochar.at }}</p>
    <p class="kp-sub">{{ labels.gocharIntro | escape }}</p>
    <div class="kp-charts">
      <figure class="kp-chart">
        <figcaption>{{ gochar.fromLagna.title }}</figcaption>
        {% render 'chart', cells: gochar.fromLagna.cells, style: meta.style, lang: meta.language, uid: 'gochar-lagna' %}
      </figure>
      <figure class="kp-chart">
        <figcaption>{{ gochar.fromMoon.title }}</figcaption>
        {% render 'chart', cells: gochar.fromMoon.cells, style: meta.style, lang: meta.language, uid: 'gochar-moon' %}
      </figure>
    </div>

    <h3>{{ labels.gocharPositionsHeading | escape }}</h3>
    <div class="kp-scroll kp-gochar-wrap">
      <table class="kp-table kp-gochar-pos">
        <thead>
          <tr>
            <th>{{ labels.colPlanet | escape }}</th><th>{{ labels.colSign | escape }}</th><th>{{ labels.colDegree | escape }}</th>
            <th>{{ labels.colNakshatra | escape }}</th><th>{{ labels.colState | escape }}</th>
            <th>{{ labels.colFromLagna | escape }}</th><th>{{ labels.colFromMoon | escape }}</th>
            <th>{{ labels.colBindus | escape }}</th><th>{{ labels.colResult | escape }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for r in gochar.rows -%}
            <tr>
              <td class="kp-nowrap">{{ r.glyph }} {{ r.name }}</td>
              <td>{{ r.sign }}</td>
              <td class="kp-nowrap">{{ r.degree }}</td>
              <td>{{ r.nakshatra }} ({{ labels.pada | escape }} {{ r.pada }})</td>
              <td><span class="kp-state-{{ r.stateTone }}">{{ r.state }}</span></td>
              <td data-label="{{ labels.colFromLagna | escape }}">{{ r.houseFromLagna }}</td>
              <td data-label="{{ labels.colFromMoon | escape }}">{{ r.houseFromMoon }}</td>
              <td data-label="{{ labels.colBindus | escape }}"{% if r.binduTone != "" %} class="kp-{{ r.binduTone }}"{% endif %}>{{ r.bindus }}</td>
              <td><span class="kp-{{ r.resultTone }}">{{ r.result }}</span></td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    </div>

    <h3>{{ labels.gocharSignsHeading | escape }}</h3>
    <div class="kp-scroll kp-gochar-wrap">
      <table class="kp-table kp-gochar-signs">
        <thead>
          <tr>
            <th>{{ labels.colPlanet | escape }}</th><th>{{ labels.colSign | escape }}</th>
            <th>{{ labels.colEntered | escape }}</th><th>{{ labels.colLeaves | escape }}</th><th>{{ labels.colNextSign | escape }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for r in gochar.rows -%}
            <tr>
              <td class="kp-nowrap">{{ r.glyph }} {{ r.name }}</td>
              <td>{{ r.sign }}</td>
              <td data-label="{{ labels.colEntered | escape }}">{{ r.entered }}</td>
              <td data-label="{{ labels.colLeaves | escape }}">{{ r.leaves }}</td>
              <td>{{ r.nextSign }}</td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
    </div>
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
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
    <span class="doc-page-no"><span class="doc-foot-brand">{{ labels.brand | escape }} | <a href="{{ site.url | escape }}">{{ site.url | escape }}</a></span><span class="page-num" data-label="{{ labels.page | escape }}"></span></span>
  </section>

        </td>
      </tr>
    </tbody>
  </table>
</div>
`,Qi=`{%- comment -%}
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
`,le={chart:Qi},Gi=new Ue({cache:!0,relativeReference:!1,globals:{site:Kt},fs:{exists:t=>Promise.resolve(t in le),existsSync:t=>t in le,readFile:t=>Promise.resolve(le[t]??""),readFileSync:t=>le[t]??"",resolve:(t,e)=>e}}),Ki=Gi.parse(Zi);export{Gi as engine,Ki as template};
