(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Wd(n={}){return{date:n.date||null,taxYear:n.taxYear||null,yearNumber:n.yearNumber??0,monthInTaxYear:n.monthInTaxYear??0,remainingMonths:n.remainingMonths??12,equity:n.equity??0,bond:n.bond??0,cash:n.cash??0,isa:n.isa??0,adjEquityMin:n.adjEquityMin??0,adjBondMin:n.adjBondMin??0,adjCashTarget:n.adjCashTarget??0,pa:n.pa??0,brl:n.brl??0,hrl:n.hrl??0,other:n.other??0,statePension:n.statePension??0,sippDraw:n.sippDraw??0,isaDraw:n.isaDraw??0,totalMonthlyNet:n.totalMonthlyNet??0,taxEfficient:n.taxEfficient??!0,annualTaxableSoFar:n.annualTaxableSoFar??0,projectedAnnualTaxable:n.projectedAnnualTaxable??0,headroomToBRL:n.headroomToBRL??0,inProtection:n.inProtection??!1,protectionReason:n.protectionReason||null,consecutiveCashDraws:n.consecutiveCashDraws??0,boostAmount:n.boostAmount??0,boostEligible:n.boostEligible??!1,source:n.source||"Growth",drawFromEquity:n.drawFromEquity??0,drawFromBond:n.drawFromBond??0,drawFromCash:n.drawFromCash??0,rebalanceNeeded:n.rebalanceNeeded??!1,rebalanceActions:n.rebalanceActions||[],alerts:n.alerts||[],calculationDetails:n.calculationDetails||{}}}function Kd(n){return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,source:n.source,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,inProtection:n.inProtection,reason:n.protectionReason||"",boostAmount:n.boostAmount,rebal:n.rebalanceActions.join("; "),adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget}}const $t={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"};function $e(n,t=$t.INFO,e=null){return{message:n,severity:t,code:e}}const ql="6.0.0",Nt={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},Yd={OTHER_INCOME_CAP:.04},bt={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},Cs={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},we={NORMAL:{LINKER:.15,NOMINAL:.3,PROPERTY:.2,COMMODITY:.1,CASH:.1,EQUITY:.15},HIGH_INFLATION:{LINKER:.5,NOMINAL:.1,PROPERTY:.15,COMMODITY:.15,CASH:.05,EQUITY:.05},DEFLATION:{LINKER:.05,NOMINAL:.5,PROPERTY:.1,COMMODITY:.05,CASH:.2,EQUITY:.1},VOLATILITY:{LINKER:.03,NOMINAL:.05,PROPERTY:.08,COMMODITY:.15,CASH:.002}},fi={1985:.1969,1986:.2467,1987:.0467,1988:.0744,1989:.352,1990:-.0986,1991:.2076,1992:.1975,1993:.2815,1994:-.058,1995:.2353,1996:.1601,1997:.2376,1998:.1398,1999:.2406,2e3:-.0574,2001:-.1337,2002:-.2248,2003:.2079,2004:.1248,2005:.2205,2006:.1684,2007:.0547,2008:-.2983,2009:.3034,2010:.1459,2011:-.0336,2012:.1225,2013:.2043,2014:.0117,2015:.0098,2016:.1672,2017:.1326,2018:-.0943,2019:.1924,2020:-.0966,2021:.182,2022:.0078,2023:.0782},$l={1985:.061,1986:.034,1987:.042,1988:.049,1989:.079,1990:.095,1991:.059,1992:.036,1993:.016,1994:.025,1995:.034,1996:.024,1997:.031,1998:.034,1999:.013,2e3:.03,2001:.012,2002:.013,2003:.014,2004:.013,2005:.021,2006:.023,2007:.023,2008:.036,2009:.022,2010:.033,2011:.045,2012:.028,2013:.026,2014:.015,2015:.001,2016:.007,2017:.027,2018:.025,2019:.018,2020:.009,2021:.026,2022:.101,2023:.075},Qd={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}},hn={START_MONTH:4,START_DAY:6};function jl(n,t,e,r=Nt.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=t;if(n>Nt.PA_TAPER_THRESHOLD){const p=(n-Nt.PA_TAPER_THRESHOLD)*Nt.PA_TAPER_RATE;i=Math.max(0,t-p)}const s=Math.max(0,n-i),a=Math.max(0,e-i),c=r-e;let u=0;const d=Math.min(s,a);if(u+=d*Nt.BASIC_RATE,s>a){const p=Math.min(s-a,c);u+=p*Nt.HIGHER_RATE}if(s>a+c){const p=s-a-c;u+=p*Nt.ADDITIONAL_RATE}return u}function Ds(n,t,e,r=Nt.HIGHER_RATE_LIMIT){return n-jl(n,t,e,r)}function Jd(n,t){return Math.max(0,t-n)}function Xd(n){const t=typeof n=="string"?new Date(n):n,e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();if(r<hn.START_MONTH||r===hn.START_MONTH&&i<hn.START_DAY){const s=e-1;return`${String(s).slice(-2)}/${String(e).slice(-2)}`}return`${String(e).slice(-2)}/${String(e+1).slice(-2)}`}function Zd(n,t){const e=typeof n=="string"?new Date(n):n,r=typeof t=="string"?new Date(t):t,i=r.getFullYear()-e.getFullYear(),s=r.getMonth()-e.getMonth(),a=r.getDate()-e.getDate();return i*12+s+a/30}function tf(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function ef(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1)}function yo(n){const e=(typeof n=="string"?new Date(n):n).getMonth()+1;return e>=hn.START_MONTH?12-(e-hn.START_MONTH):hn.START_MONTH-e}function nf(n){return 12-yo(n)}function rf(n,t){const e=Zd(n,t);return Math.floor(e/12)}function sf(n){const{baseSalary:t,cumulativeInflation:e,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:c=0,pa:u,brl:d,hrl:p,taxMode:y="inflates"}=n,T=y==="frozen"?u:u*e,b=y==="frozen"?d:d*e,C=y==="frozen"?p:p*e,k=t*e,P=of(i,r),N=c>=a?s*e:0,x=P+N,L=Math.max(0,b-x),ot=Math.max(0,k-x),H=Math.min(L,ot);return{pa:T,brl:b,hrl:C,targetGross:k,other:P,statePension:N,fixedIncome:x,annualSippDraw:H,monthlySippDraw:H/12,sippPlusfixedAtBRL:L+x===b}}function of(n,t,e=Yd.OTHER_INCOME_CAP){let r=n;for(const i of t)r*=1+Math.min(i,e);return r}function af(n){const{equity:t,bond:e,cash:r,isaBalance:i=0,baseSalary:s,cumulativeInflation:a,yearlyInflation:c=[],other:u=0,statePension:d=0,statePensionYear:p=12,yearNumber:y=0,pa:T,brl:b,hrl:C,taxMode:k="inflates",currentDate:P,taxYearHistory:N=[],inProtection:x=!1,protectionFactor:U=20}=n,L=sf({baseSalary:s,cumulativeInflation:a,yearlyInflation:c,other:u,statePension:d,statePensionYear:p,yearNumber:y,pa:T,brl:b,hrl:C,taxMode:k}),ot=L.targetGross,H=Ds(ot,L.pa,L.brl,L.hrl),I=H/12,m=L.monthlySippDraw,g=L.other/12,v=L.statePension/12,E=g+v,A=m+E,_=A*12,zt=Ds(_,L.pa,L.brl,L.hrl)/12,Gt=Math.max(0,I-zt),et=yo(P),mt=Gt*et,dt=i>=mt;let nt;if(dt&&Gt>0)nt={mode:"tax-efficient",monthlySipp:x?m*(1-U/100):m,monthlyIsa:Gt,monthlyOther:g,monthlyState:v,reason:"ISA top-up keeps SIPP+Other at BRL for tax efficiency",taxBoostEligible:!x,isaUsedForTopUp:!0};else if(!dt&&Gt>0){const ve=Math.max(0,ot/12-E);nt={mode:"standard",monthlySipp:x?ve*(1-U/100):ve,monthlyIsa:0,monthlyOther:g,monthlyState:v,reason:`Insufficient ISA for ${et} months - drawing to target`,taxBoostEligible:!0,isaUsedForTopUp:!1,warning:`Need £${Math.round(mt-i).toLocaleString()} more ISA for tax-efficient mode`}}else nt={mode:"tax-efficient",monthlySipp:x?m*(1-U/100):m,monthlyIsa:0,monthlyOther:g,monthlyState:v,reason:"Target income achieved within BRL",taxBoostEligible:!x,isaUsedForTopUp:!1};const Wt=cf({taxYearHistory:N,remainingMonths:et,brl:L.brl,currentMonthlySipp:nt.monthlySipp,monthlyFixedIncome:E,inProtection:x,growthSurplus:t+e-(n.adjEquityMin||0)-(n.adjBondMin||0)}),qt=nt.monthlySipp+nt.monthlyIsa+nt.monthlyOther+nt.monthlyState,rt=(nt.monthlySipp+E)*12,On=jl(rt,L.pa,L.brl,L.hrl);return{...nt,boostAmount:Wt.boostAmount,boostReason:Wt.reason,taxInfo:{pa:L.pa,brl:L.brl,hrl:L.hrl,annualTaxable:rt,annualTax:On,monthlyTax:On/12,effectiveRate:rt>0?On/rt:0,headroomToBRL:Jd(rt,L.brl)},monthlyGross:nt.monthlySipp+E,monthlyNet:Ds((nt.monthlySipp+E)*12,L.pa,L.brl,L.hrl)/12+nt.monthlyIsa,monthlyTotal:qt,remainingMonths:et,isaBalance:i,isaNeededMonthly:Gt,totalIsaNeeded:mt,hasSufficientIsa:dt,calculation:{targetGross:ot,targetNet:H,monthlyTargetNet:I,monthlyGrossAtBRL:A,monthlyNetAtBRL:zt}}}function cf(n){const{taxYearHistory:t,remainingMonths:e,brl:r,currentMonthlySipp:i,monthlyFixedIncome:s,inProtection:a,growthSurplus:c}=n;if(a)return{boostAmount:0,reason:"In protection mode - no boost"};let u=0,d=0;for(const U of t)U.inProtection&&U.stdSipp&&(u+=U.stdSipp-(U.sipp||0)),U.boostAmount>0&&(d+=U.boostAmount);const p=Math.max(0,u-d);if(p<=0)return{boostAmount:0,reason:"No shortfall to recover"};const b=t.reduce((U,L)=>U+(L.sipp||0),0)*12/t.length+i*e*12/e+s*12,k=Math.max(0,r-b)/e,P=c/e,N=p/e,x=Math.min(N,k,P);return x<=0?{boostAmount:0,reason:"No headroom for boost"}:{boostAmount:x,reason:`Catching up £${Math.round(p).toLocaleString()} protection shortfall`}}function dn(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function lf(n,t,e){const r=dn(n.equityMin,t,n.duration,e,!0),i=dn(n.bondMin,t,n.duration,e,!0),s=dn(n.cashTarget,t,n.duration,e,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function uf(n){return n.reduce((t,e)=>t*(1+e),1)}function hf(n){const{equity:t,bond:e,adjEquityMin:r,adjBondMin:i,priorHistory:s=[],consecutiveLimit:a=bt.CONSECUTIVE_LIMIT,recoveryBuffer:c=bt.RECOVERY_BUFFER,disableProtection:u=!1}=n;if(u)return{inProtection:!1,reason:"Protection disabled",consecutiveCashDraws:0,growthDeficit:0,canExitProtection:!1};const d=t+e,p=r+i,y=d-p,T=Math.max(0,-y);let b=0;for(let x=s.length-1;x>=0&&s[x].source==="Cash";x--)b++;const C=s[s.length-1],k=C?C.inProtection:!1;let P=!1,N="";return k?d>=p+c?(P=!1,N="Exiting protection - growth funds recovered"):(P=!0,N=`Continuing protection - need £${Math.round(p+c-d).toLocaleString()} more to exit`):T>0&&b+1>=a?(P=!0,N=`Entering protection - ${b+1} consecutive cash draws with growth below minimum`):T>0?N=`Growth below minimum but only ${b} consecutive cash draws (limit: ${a})`:N="Growth funds healthy",{inProtection:P,reason:N,consecutiveCashDraws:b,wasInProtection:k,totalGrowth:d,minGrowth:p,growthSurplus:y,growthDeficit:T,recoveryTarget:p+c,amountToRecover:P?Math.max(0,p+c-d):0,canExitProtection:k&&d>=p+c}}function df(n){const{drawAmount:t,equity:e,bond:r,cash:i,adjEquityMin:s,adjBondMin:a,inProtection:c}=n,u=Math.max(0,e-s),d=Math.max(0,r-a),p=u+d;if(c)return{source:"Cash",fromEquity:0,fromBond:0,fromCash:Math.min(t,i),shortfall:Math.max(0,t-i),reason:"Protection mode - preserving growth funds"};if(p>=t){const b=u/p,C=d/p;return{source:"Growth",fromEquity:t*b,fromBond:t*C,fromCash:0,shortfall:0,reason:"Drawing proportionally from growth surplus"}}const y=p,T=Math.min(t-y,i);return{source:"Mixed",fromEquity:u,fromBond:d,fromCash:T,shortfall:Math.max(0,t-y-T),reason:"Insufficient growth surplus - using cash supplement"}}function ff(n){const{equity:t,bond:e,cash:r,adjEquityMin:i,adjBondMin:s,adjCashTarget:a,inProtection:c}=n,u=[],d=r-a;if(d<0?u.push({priority:"high",action:"Top up cash",amount:Math.abs(d),reason:`Cash £${Math.round(Math.abs(d)).toLocaleString()} below target`}):d>a*.5&&u.push({priority:"low",action:"Consider investing excess cash",amount:d-a*.25,reason:`Cash £${Math.round(d).toLocaleString()} above target`}),!c){const p=t-i,y=e-s;if(p+y>0){const b=i/(i+s),C=t/(t+e);Math.abs(C-b)>.1&&(C>b?u.push({priority:"medium",action:"Consider rebalancing equity to bonds",amount:(C-b)*(t+e),reason:`Equity ${Math.round(C*100)}% vs target ${Math.round(b*100)}%`}):u.push({priority:"medium",action:"Consider rebalancing bonds to equity",amount:(b-C)*(t+e),reason:`Equity ${Math.round(C*100)}% vs target ${Math.round(b*100)}%`}))}}return u}function Hl(n){return function(){let t=n+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Kn(n,t,e){const r=e(),i=e(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+t*s}function pf(n){const t=JSON.stringify(n);let e=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e.toString(16)}var Ac={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},mf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],a=n[e++],c=n[e++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=s>>2,y=(s&3)<<4|c>>4;let T=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(T=64)),r.push(e[p],e[y],e[T],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(zl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const y=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||y==null)throw new gf;const T=s<<2|c>>4;if(r.push(T),d!==64){const b=c<<4&240|d>>2;if(r.push(b),y!==64){const C=d<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _f=function(n){const t=zl(n);return Gl.encodeByteArray(t,!0)},pi=function(n){return _f(n).replace(/\./g,"")},Wl=function(n){try{return Gl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=()=>yf().__FIREBASE_DEFAULTS__,Ef=()=>{if(typeof process>"u"||typeof Ac>"u")return;const n=Ac.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},If=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wl(n[1]);return t&&JSON.parse(t)},Oi=()=>{try{return vf()||Ef()||If()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kl=n=>{var t,e;return(e=(t=Oi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Tf=n=>{const t=Kl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Yl=()=>{var n;return(n=Oi())===null||n===void 0?void 0:n.config},Ql=n=>{var t;return(t=Oi())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pi(JSON.stringify(e)),pi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Rf(){var n;const t=(n=Oi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Df(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kf(){return!Rf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nf(){try{return typeof indexedDB=="object"}catch{return!1}}function Mf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="FirebaseError";class ge extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Of,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?xf(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ge(i,c,r)}}function xf(n,t){return n.replace(Vf,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Vf=/\{\$([^}]+)}/g;function Lf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function mi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],a=t[i];if(bc(s)&&bc(a)){if(!mi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function bc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qn(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Jn(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Ff(n,t){const e=new Uf(n,t);return e.subscribe.bind(e)}class Uf{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Bf(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=ks),i.error===void 0&&(i.error=ks),i.complete===void 0&&(i.complete=ks);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bf(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ks(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new wf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jf(t))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=je){return this.instances.has(t)}getOptions(t=je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$f(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=je){return this.component?this.component.multipleInstances?t:je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $f(n){return n===je?void 0:n}function jf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const zf={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Gf=G.INFO,Wf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Kf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Wf[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vo{constructor(t){this.name=t,this._logLevel=Gf,this._logHandler=Kf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Yf=(n,t)=>t.some(e=>n instanceof e);let Rc,Sc;function Qf(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jf(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,Gs=new WeakMap,Xl=new WeakMap,Ns=new WeakMap,Eo=new WeakMap;function Xf(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(Ce(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Jl.set(e,n)}).catch(()=>{}),Eo.set(t,n),t}function Zf(n){if(Gs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Gs.set(n,t)}let Ws={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Xl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function tp(n){Ws=n(Ws)}function ep(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ms(this),t,...e);return Xl.set(r,t.sort?t.sort():[t]),Ce(r)}:Jf().includes(n)?function(...t){return n.apply(Ms(this),t),Ce(Jl.get(this))}:function(...t){return Ce(n.apply(Ms(this),t))}}function np(n){return typeof n=="function"?ep(n):(n instanceof IDBTransaction&&Zf(n),Yf(n,Qf())?new Proxy(n,Ws):n)}function Ce(n){if(n instanceof IDBRequest)return Xf(n);if(Ns.has(n))return Ns.get(n);const t=np(n);return t!==n&&(Ns.set(n,t),Eo.set(t,n)),t}const Ms=n=>Eo.get(n);function rp(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,t),c=Ce(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ce(a.result),u.oldVersion,u.newVersion,Ce(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ip=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],Os=new Map;function Pc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=sp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ip.includes(e)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),i&&u.done]))[0]};return Os.set(t,s),s}tp(n=>({...n,get:(t,e,r)=>Pc(t,e)||n.get(t,e,r),has:(t,e)=>!!Pc(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ap(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ap(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ks="@firebase/app",Cc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new vo("@firebase/app"),cp="@firebase/app-compat",lp="@firebase/analytics-compat",up="@firebase/analytics",hp="@firebase/app-check-compat",dp="@firebase/app-check",fp="@firebase/auth",pp="@firebase/auth-compat",mp="@firebase/database",gp="@firebase/data-connect",_p="@firebase/database-compat",yp="@firebase/functions",vp="@firebase/functions-compat",Ep="@firebase/installations",Ip="@firebase/installations-compat",Tp="@firebase/messaging",wp="@firebase/messaging-compat",Ap="@firebase/performance",bp="@firebase/performance-compat",Rp="@firebase/remote-config",Sp="@firebase/remote-config-compat",Pp="@firebase/storage",Cp="@firebase/storage-compat",Dp="@firebase/firestore",kp="@firebase/vertexai-preview",Np="@firebase/firestore-compat",Mp="firebase",Op="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",xp={[Ks]:"fire-core",[cp]:"fire-core-compat",[up]:"fire-analytics",[lp]:"fire-analytics-compat",[dp]:"fire-app-check",[hp]:"fire-app-check-compat",[fp]:"fire-auth",[pp]:"fire-auth-compat",[mp]:"fire-rtdb",[gp]:"fire-data-connect",[_p]:"fire-rtdb-compat",[yp]:"fire-fn",[vp]:"fire-fn-compat",[Ep]:"fire-iid",[Ip]:"fire-iid-compat",[Tp]:"fire-fcm",[wp]:"fire-fcm-compat",[Ap]:"fire-perf",[bp]:"fire-perf-compat",[Rp]:"fire-rc",[Sp]:"fire-rc-compat",[Pp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Dp]:"fire-fst",[Np]:"fire-fst-compat",[kp]:"fire-vertex","fire-js":"fire-js",[Mp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map,Vp=new Map,Qs=new Map;function Dc(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function yn(n){const t=n.name;if(Qs.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;Qs.set(t,n);for(const e of gi.values())Dc(e,n);for(const e of Vp.values())Dc(e,n);return!0}function Io(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Yt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new vr("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=Op;function Zl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw De.create("bad-app-name",{appName:String(i)});if(e||(e=Yl()),!e)throw De.create("no-options");const s=gi.get(i);if(s){if(mi(e,s.options)&&mi(r,s.config))return s;throw De.create("duplicate-app",{appName:i})}const a=new Hf(i);for(const u of Qs.values())a.addComponent(u);const c=new Fp(e,r,a);return gi.set(i,c),c}function tu(n=Ys){const t=gi.get(n);if(!t&&n===Ys&&Yl())return Zl();if(!t)throw De.create("no-app",{appName:n});return t}function ke(n,t,e){var r;let i=(r=xp[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(c.join(" "));return}yn(new Ke(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebase-heartbeat-database",Bp=1,lr="firebase-heartbeat-store";let xs=null;function eu(){return xs||(xs=rp(Up,Bp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(lr)}catch(e){console.warn(e)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),xs}async function qp(n){try{const e=(await eu()).transaction(lr),r=await e.objectStore(lr).get(nu(n));return await e.done,r}catch(t){if(t instanceof ge)he.warn(t.message);else{const e=De.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function kc(n,t){try{const r=(await eu()).transaction(lr,"readwrite");await r.objectStore(lr).put(t,nu(n)),await r.done}catch(e){if(e instanceof ge)he.warn(e.message);else{const r=De.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(r.message)}}}function nu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=1024,jp=30*24*60*60*1e3;class Hp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=jp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){he.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nc(),{heartbeatsToSend:r,unsentEntries:i}=zp(this._heartbeatsCache.heartbeats),s=pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return he.warn(e),""}}}function Nc(){return new Date().toISOString().substring(0,10)}function zp(n,t=$p){const e=[];let r=n.slice();for(const i of n){const s=e.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Mc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Mc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nf()?Mf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mc(n){return pi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){yn(new Ke("platform-logger",t=>new op(t),"PRIVATE")),yn(new Ke("heartbeat",t=>new Hp(t),"PRIVATE")),ke(Ks,Cc,n),ke(Ks,Cc,"esm2017"),ke("fire-js","")}Wp("");var Kp="firebase",Yp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(Kp,Yp,"app");function To(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function ru(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qp=ru,iu=new vr("auth","Firebase",ru());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new vo("@firebase/auth");function Jp(n,...t){_i.logLevel<=G.WARN&&_i.warn(`Auth (${Sn}): ${n}`,...t)}function ri(n,...t){_i.logLevel<=G.ERROR&&_i.error(`Auth (${Sn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,...t){throw Ao(n,...t)}function Qt(n,...t){return Ao(n,...t)}function wo(n,t,e){const r=Object.assign(Object.assign({},Qp()),{[t]:e});return new vr("auth","Firebase",r).create(t,{appName:n.name})}function le(n){return wo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xp(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ht(n,"argument-error"),wo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ao(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return iu.create(n,...t)}function B(n,t,...e){if(!n)throw Ao(t,...e)}function oe(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ri(t),new Error(t)}function de(n,t){n||oe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zp(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zp()||Pf()||"connection"in navigator)?navigator.onLine:!0}function em(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.shortDelay=t,this.longDelay=e,de(e>t,"Short delay should be less than long delay!"),this.isMobile=bf()||Cf()}get(){return tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,t){de(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Ir(3e4,6e4);function _e(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function ne(n,t,e,r,i={}){return ou(n,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const c=Er(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:t,headers:u},s);return Sf()||(d.referrerPolicy="no-referrer"),su.fetch()(au(n,n.config.apiHost,e,c),d)})}async function ou(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nm),t);try{const i=new sm(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Xr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xr(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw wo(n,p,d);Ht(n,p)}}catch(i){if(i instanceof ge)throw i;Ht(n,"network-request-failed",{message:String(i)})}}async function Tr(n,t,e,r,i={}){const s=await ne(n,t,e,r,i);return"mfaPendingCredential"in s&&Ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function au(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?bo(n.config,i):`${n.config.apiScheme}://${i}`}function im(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),rm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=Qt(n,t,r);return i.customData._tokenResponse=e,i}function xc(n){return n!==void 0&&n.enterprise!==void 0}class om{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return im(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function am(n,t){return ne(n,"GET","/v2/recaptchaConfig",_e(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(n,t){return ne(n,"POST","/v1/accounts:delete",t)}async function cu(n,t){return ne(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lm(n,t=!1){const e=ut(n),r=await e.getIdToken(t),i=Ro(r);B(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:nr(Vs(i.auth_time)),issuedAtTime:nr(Vs(i.iat)),expirationTime:nr(Vs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vs(n){return Number(n)*1e3}function Ro(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wl(e);return i?JSON.parse(i):(ri("Failed to decode base64 JWT payload"),null)}catch(i){return ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vc(n){const t=Ro(n);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof ge&&um(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function um({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await vn(n,cu(e,{idToken:r}));B(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?lu(s.providerUserInfo):[],c=fm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Xs(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function dm(n){const t=ut(n);await yi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fm(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function lu(n){return n.map(t=>{var{providerId:e}=t,r=To(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,t){const e=await ou(n,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=au(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",su.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function mm(n,t){return ne(n,"POST","/v2/accounts:revokeToken",_e(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){B(t.length!==0,"internal-error");const e=Vc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await pm(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,a=new fn;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return oe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,t){B(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ae{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=To(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xs(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await vn(this,this.stsTokenManager.getToken(this.auth,t));return B(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return lm(this,t)}reload(){return dm(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ae(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(le(this.auth));const t=await this.getIdToken();return await vn(this,cm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,a,c,u,d,p;const y=(r=e.displayName)!==null&&r!==void 0?r:void 0,T=(i=e.email)!==null&&i!==void 0?i:void 0,b=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=e.photoURL)!==null&&a!==void 0?a:void 0,k=(c=e.tenantId)!==null&&c!==void 0?c:void 0,P=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,N=(d=e.createdAt)!==null&&d!==void 0?d:void 0,x=(p=e.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:U,emailVerified:L,isAnonymous:ot,providerData:H,stsTokenManager:I}=e;B(U&&I,t,"internal-error");const m=fn.fromJSON(this.name,I);B(typeof U=="string",t,"internal-error"),Ae(y,t.name),Ae(T,t.name),B(typeof L=="boolean",t,"internal-error"),B(typeof ot=="boolean",t,"internal-error"),Ae(b,t.name),Ae(C,t.name),Ae(k,t.name),Ae(P,t.name),Ae(N,t.name),Ae(x,t.name);const g=new ae({uid:U,auth:t,email:T,emailVerified:L,displayName:y,isAnonymous:ot,photoURL:C,phoneNumber:b,tenantId:k,stsTokenManager:m,createdAt:N,lastLoginAt:x});return H&&Array.isArray(H)&&(g.providerData=H.map(v=>Object.assign({},v))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(t,e,r=!1){const i=new fn;i.updateFromServerResponse(e);const s=new ae({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await yi(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new fn;c.updateFromIdToken(r);const u=new ae({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map;function ce(n){de(n instanceof Function,"Expected a class definition");let t=Lc.get(n);return t?(de(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Lc.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}uu.type="NONE";const Fc=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,t,e){return`firebase:${n}:${t}:${e}`}class pn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ii(this.userKey,i.apiKey,s),this.fullPersistenceKey=ii("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ae._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new pn(ce(Fc),t,r);const i=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ce(Fc);const a=ii(r,t.config.apiKey,t.name);let c=null;for(const d of e)try{const p=await d._get(a);if(p){const y=ae._fromJSON(t,p);d!==s&&(c=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new pn(s,t,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(e.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new pn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gu(t))return"Blackberry";if(_u(t))return"Webos";if(du(t))return"Safari";if((t.includes("chrome/")||fu(t))&&!t.includes("edge/"))return"Chrome";if(mu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hu(n=Pt()){return/firefox\//i.test(n)}function du(n=Pt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fu(n=Pt()){return/crios\//i.test(n)}function pu(n=Pt()){return/iemobile/i.test(n)}function mu(n=Pt()){return/android/i.test(n)}function gu(n=Pt()){return/blackberry/i.test(n)}function _u(n=Pt()){return/webos/i.test(n)}function So(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gm(n=Pt()){var t;return So(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _m(){return Df()&&document.documentMode===10}function yu(n=Pt()){return So(n)||mu(n)||_u(n)||gu(n)||/windows phone/i.test(n)||pu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n,t=[]){let e;switch(n){case"Browser":e=Uc(Pt());break;case"Worker":e=`${Uc(Pt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((a,c)=>{try{const u=t(s);a(u)}catch(u){c(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(n,t={}){return ne(n,"GET","/v2/passwordPolicy",_e(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=6;class Im{constructor(t){var e,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Em,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ce(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await cu(this,{idToken:t}),r=await ae._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Yt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await yi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=em()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Yt(this.app))return Promise.reject(le(this));const e=t?ut(t):null;return e&&B(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Yt(this.app)?Promise.reject(le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vm(this),e=new Im(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await mm(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ce(t)||this._popupRedirectResolver;B(e,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ce(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Jp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ye(n){return ut(n)}class Bc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ff(e=>this.observer=e)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wm(n){xi=n}function Eu(n){return xi.loadJS(n)}function Am(){return xi.recaptchaEnterpriseScript}function bm(){return xi.gapiScript}function Rm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Sm="recaptcha-enterprise",Pm="NO_RECAPTCHA";class Cm{constructor(t){this.type=Sm,this.auth=ye(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{am(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new om(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){const u=window.grecaptcha;xc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(d=>{a(d)}).catch(()=>{a(Pm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!e&&xc(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Am();u.length!==0&&(u+=c),Eu(u).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function qc(n,t,e,r=!1){const i=new Cm(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vi(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await qc(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,t){const e=Io(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(mi(s,t??{}))return i;Ht(i,"already-initialized")}return e.initialize({options:t})}function km(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ce);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Nm(n,t,e){const r=ye(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Iu(t),{host:a,port:c}=Mm(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Om()}function Iu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Mm(n){const t=Iu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$c(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:$c(a)}}}function $c(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Om(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return oe("not implemented")}_getIdTokenResponse(t){return oe("not implemented")}_linkToIdToken(t,e){return oe("not implemented")}_getReauthenticationResolver(t){return oe("not implemented")}}async function xm(n,t){return ne(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n,t){return Tr(n,"POST","/v1/accounts:signInWithPassword",_e(n,t))}async function Lm(n,t){return ne(n,"POST","/v1/accounts:sendOobCode",_e(n,t))}async function Fm(n,t){return Lm(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(n,t){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,t))}async function Bm(n,t){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Po{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new ur(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new ur(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vi(t,e,"signInWithPassword",Vm);case"emailLink":return Um(t,{email:this._email,oobCode:this._password});default:Ht(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vi(t,r,"signUpPassword",xm);case"emailLink":return Bm(t,{idToken:e,email:this._email,oobCode:this._password});default:Ht(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n,t){return Tr(n,"POST","/v1/accounts:signInWithIdp",_e(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="http://localhost";class Ye extends Po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ye(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ht("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=To(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ye(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return mn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,mn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,mn(t,e)}buildRequest(){const t={requestUri:qm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Er(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jm(n){const t=Qn(Jn(n)).link,e=t?Qn(Jn(t)).deep_link_id:null,r=Qn(Jn(n)).deep_link_id;return(r?Qn(Jn(r)).link:null)||r||e||t||n}class Co{constructor(t){var e,r,i,s,a,c;const u=Qn(Jn(t)),d=(e=u.apiKey)!==null&&e!==void 0?e:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=$m((i=u.mode)!==null&&i!==void 0?i:null);B(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const e=jm(t);try{return new Co(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(t,e){return ur._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Co.parseLink(e);return B(r,"argument-error"),ur._fromEmailAndCode(t,r.code,r.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Do{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends wr{constructor(){super("facebook.com")}static credential(t){return Ye._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends wr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ye._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return se.credentialFromTaggedObject(t)}static credentialFromError(t){return se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return se.credential(e,r)}catch{return null}}}se.GOOGLE_SIGN_IN_METHOD="google.com";se.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends wr{constructor(){super("github.com")}static credential(t){return Ye._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Re.credentialFromTaggedObject(t)}static credentialFromError(t){return Re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Re.credential(t.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends wr{constructor(){super("twitter.com")}static credential(t,e){return Ye._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Se.credential(e,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,t){return Tr(n,"POST","/v1/accounts:signUp",_e(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await ae._fromIdTokenResponse(t,r,i),a=jc(r);return new Qe({user:s,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=jc(r);return new Qe({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function jc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends ge{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ei(t,e,r,i)}}function Tu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ei._fromErrorAndOperation(n,s,t,r):s})}async function zm(n,t,e=!1){const r=await vn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Qe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,t,e=!1){const{auth:r}=n;if(Yt(r.app))return Promise.reject(le(r));const i="reauthenticate";try{const s=await vn(n,Tu(r,i,t,n),e);B(s.idToken,r,"internal-error");const a=Ro(s.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),Qe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(n,t,e=!1){if(Yt(n.app))return Promise.reject(le(n));const r="signIn",i=await Tu(n,r,t),s=await Qe._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function Wm(n,t){return wu(ye(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(n){const t=ye(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Km(n,t,e){const r=ye(n);await vi(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fm)}async function Ym(n,t,e){if(Yt(n.app))return Promise.reject(le(n));const r=ye(n),a=await vi(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hm).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Au(n),u}),c=await Qe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Qm(n,t,e){return Yt(n.app)?Promise.reject(le(n)):Wm(ut(n),Pn.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Au(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,t){return ne(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=ut(n),s={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await vn(r,Jm(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Zm(n,t,e,r){return ut(n).onIdTokenChanged(t,e,r)}function tg(n,t,e){return ut(n).beforeAuthStateChanged(t,e)}function eg(n,t,e,r){return ut(n).onAuthStateChanged(t,e,r)}function ng(n){return ut(n).signOut()}const Ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=1e3,ig=10;class Ru extends bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);_m()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ig):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ru.type="LOCAL";const sg=Ru;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Su.type="SESSION";const Pu=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Vi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(e.origin,s)),u=await og(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=ko("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function cg(n){Xt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function lg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ug(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hg(){return Cu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="firebaseLocalStorageDb",dg=1,Ti="firebaseLocalStorage",ku="fbase_key";class Ar{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Li(n,t){return n.transaction([Ti],t?"readwrite":"readonly").objectStore(Ti)}function fg(){const n=indexedDB.deleteDatabase(Du);return new Ar(n).toPromise()}function Zs(){const n=indexedDB.open(Du,dg);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ti,{keyPath:ku})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ti)?t(r):(r.close(),await fg(),t(await Zs()))})})}async function Hc(n,t,e){const r=Li(n,!0).put({[ku]:t,value:e});return new Ar(r).toPromise()}async function pg(n,t){const e=Li(n,!1).get(t),r=await new Ar(e).toPromise();return r===void 0?null:r.value}function zc(n,t){const e=Li(n,!0).delete(t);return new Ar(e).toPromise()}const mg=800,gg=3;class Nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(hg()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await lg(),!this.activeServiceWorker)return;this.sender=new ag(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zs();return await Hc(t,Ii,"1"),await zc(t,Ii),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>pg(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>zc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Li(i,!1).getAll();return new Ar(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nu.type="LOCAL";const _g=Nu;new Ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,t){return t?ce(t):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Po{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return mn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function yg(n){return wu(n.auth,new No(n),n.bypassAuthState)}function vg(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),Gm(e,new No(n),n.bypassAuthState)}async function Eg(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),zm(e,new No(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yg;case"linkViaPopup":case"linkViaRedirect":return Eg;case"reauthViaPopup":case"reauthViaRedirect":return vg;default:Ht(this.auth,"internal-error")}}resolve(t){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Ir(2e3,1e4);async function Tg(n,t,e){if(Yt(n.app))return Promise.reject(Qt(n,"operation-not-supported-in-this-environment"));const r=ye(n);Xp(n,t,Do);const i=Mu(r,e);return new He(r,"signInViaPopup",t,i).executeNotNull()}class He extends Ou{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){de(this.filter.length===1,"Popup operations only handle one event");const t=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ig.get())};t()}}He.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="pendingRedirect",si=new Map;class Ag extends Ou{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=si.get(this.auth._key());if(!t){try{const r=await bg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}si.set(this.auth._key(),t)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bg(n,t){const e=Pg(t),r=Sg(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Rg(n,t){si.set(n._key(),t)}function Sg(n){return ce(n._redirectPersistence)}function Pg(n){return ii(wg,n.config.apiKey,n.name)}async function Cg(n,t,e=!1){if(Yt(n.app))return Promise.reject(le(n));const r=ye(n),i=Mu(r,t),a=await new Ag(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=10*60*1e3;class kg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ng(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!xu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Qt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(t))}saveEventToCache(t){this.cachedEventUids.add(Gc(t)),this.lastProcessedEventTime=Date.now()}}function Gc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function xu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ng(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(n,t={}){return ne(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xg=/^https?/;async function Vg(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Mg(n);for(const e of t)try{if(Lg(e))return}catch{}Ht(n,"unauthorized-domain")}function Lg(n){const t=Js(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!xg.test(e))return!1;if(Og.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Ir(3e4,6e4);function Wc(){const n=Xt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Ug(n){return new Promise((t,e)=>{var r,i,s;function a(){Wc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wc(),e(Qt(n,"network-request-failed"))},timeout:Fg.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Xt().gapi)===null||s===void 0)&&s.load)a();else{const c=Rm("iframefcb");return Xt()[c]=()=>{gapi.load?a():e(Qt(n,"network-request-failed"))},Eu(`${bm()}?onload=${c}`).catch(u=>e(u))}}).catch(t=>{throw oi=null,t})}let oi=null;function Bg(n){return oi=oi||Ug(n),oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Ir(5e3,15e3),$g="__/auth/iframe",jg="emulator/auth/iframe",Hg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gg(n){const t=n.config;B(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?bo(t,jg):`https://${n.config.authDomain}/${$g}`,r={apiKey:t.apiKey,appName:n.name,v:Sn},i=zg.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Er(r).slice(1)}`}async function Wg(n){const t=await Bg(n),e=Xt().gapi;return B(e,n,"internal-error"),t.open({where:document.body,url:Gg(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Qt(n,"network-request-failed"),c=Xt().setTimeout(()=>{s(a)},qg.get());function u(){Xt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yg=500,Qg=600,Jg="_blank",Xg="http://localhost";class Kc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zg(n,t,e,r=Yg,i=Qg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Kg),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Pt().toLowerCase();e&&(c=fu(d)?Jg:e),hu(d)&&(t=t||Xg,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[b,C])=>`${T}${b}=${C},`,"");if(gm(d)&&c!=="_self")return t_(t||"",c),new Kc(null);const y=window.open(t||"",c,p);B(y,n,"popup-blocked");try{y.focus()}catch{}return new Kc(y)}function t_(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="__/auth/handler",n_="emulator/auth/handler",r_=encodeURIComponent("fac");async function Yc(n,t,e,r,i,s){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Sn,eventId:i};if(t instanceof Do){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Lf(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(t instanceof wr){const p=t.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${r_}=${encodeURIComponent(u)}`:"";return`${i_(n)}?${Er(c).slice(1)}${d}`}function i_({config:n}){return n.emulator?bo(n,n_):`https://${n.authDomain}/${e_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class s_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pu,this._completeRedirectFn=Cg,this._overrideRedirectResult=Rg}async _openPopup(t,e,r,i){var s;de((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yc(t,e,r,Js(),i);return Zg(t,a,ko())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Yc(t,e,r,Js(),i);return cg(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(de(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Wg(t),r=new kg(t);return e.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ls,{type:Ls},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ls];a!==void 0&&e(!!a),Ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Vg(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return yu()||du()||So()}}const o_=s_;var Qc="@firebase/auth",Jc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l_(n){yn(new Ke("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vu(n)},d=new Tm(r,i,s,u);return km(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),yn(new Ke("auth-internal",t=>{const e=ye(t.getProvider("auth").getImmediate());return(r=>new a_(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Qc,Jc,c_(n)),ke(Qc,Jc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=5*60,h_=Ql("authIdTokenMaxAge")||u_;let Xc=null;const d_=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>h_)return;const i=e==null?void 0:e.token;Xc!==i&&(Xc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function f_(n=tu()){const t=Io(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Dm(n,{popupRedirectResolver:o_,persistence:[_g,sg,Pu]}),r=Ql("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=d_(s.toString());tg(e,a,()=>a(e.currentUser)),Zm(e,c=>a(c))}}const i=Kl("auth");return i&&Nm(e,`http://${i}`),e}function p_(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}wm({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",p_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l_("Browser");var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ge,Vu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,m){function g(){}g.prototype=m.prototype,I.D=m.prototype,I.prototype=new g,I.prototype.constructor=I,I.C=function(v,E,A){for(var _=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)_[Bt-2]=arguments[Bt];return m.prototype[E].apply(v,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,g){g||(g=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)v[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=I.g[0],g=I.g[1],E=I.g[2];var A=I.g[3],_=m+(A^g&(E^A))+v[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=A+(E^m&(g^E))+v[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=E+(g^A&(m^g))+v[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=g+(m^E&(A^m))+v[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(A^g&(E^A))+v[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(E^m&(g^E))+v[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=E+(g^A&(m^g))+v[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=g+(m^E&(A^m))+v[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(A^g&(E^A))+v[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(E^m&(g^E))+v[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=E+(g^A&(m^g))+v[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=g+(m^E&(A^m))+v[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(A^g&(E^A))+v[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(E^m&(g^E))+v[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=E+(g^A&(m^g))+v[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=g+(m^E&(A^m))+v[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(E^A&(g^E))+v[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^E&(m^g))+v[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(A^m))+v[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(E^A))+v[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^A&(g^E))+v[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^E&(m^g))+v[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(A^m))+v[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(E^A))+v[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^A&(g^E))+v[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^E&(m^g))+v[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(A^m))+v[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(E^A))+v[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^A&(g^E))+v[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^E&(m^g))+v[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(A^m))+v[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(E^A))+v[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(g^E^A)+v[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^E)+v[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=E+(A^m^g)+v[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=g+(E^A^m)+v[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^A)+v[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^E)+v[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=E+(A^m^g)+v[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=g+(E^A^m)+v[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^A)+v[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^E)+v[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=E+(A^m^g)+v[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=g+(E^A^m)+v[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^A)+v[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^E)+v[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=E+(A^m^g)+v[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=g+(E^A^m)+v[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(E^(g|~A))+v[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~E))+v[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=E+(m^(A|~g))+v[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=g+(A^(E|~m))+v[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~A))+v[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~E))+v[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=E+(m^(A|~g))+v[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=g+(A^(E|~m))+v[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~A))+v[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~E))+v[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=E+(m^(A|~g))+v[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=g+(A^(E|~m))+v[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~A))+v[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~E))+v[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=E+(m^(A|~g))+v[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=g+(A^(E|~m))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var g=m-this.blockSize,v=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=g;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<m;)if(v[E++]=I.charCodeAt(A++),E==this.blockSize){i(this,v),E=0;break}}else for(;A<m;)if(v[E++]=I[A++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var g=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=g&255,g/=256;for(this.u(I),I=Array(16),m=g=0;4>m;++m)for(var v=0;32>v;v+=8)I[g++]=this.g[m]>>>v&255;return I};function s(I,m){var g=c;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=m(I)}function a(I,m){this.h=m;for(var g=[],v=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;v&&A==m||(g[E]=A,v=!1)}this.g=g}var c={};function u(I){return-128<=I&&128>I?s(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return P(d(-I));for(var m=[],g=1,v=0;I>=g;v++)m[v]=I/g|0,g*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return P(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),v=y,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),_=parseInt(I.substring(E,E+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(_))):(v=v.j(g),v=v.add(d(_)))}return v}var y=u(0),T=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var I=0,m=1,g=0;g<this.g.length;g++){var v=this.i(g);I+=(0<=v?v:4294967296+v)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(k(this))return"-"+P(this).toString(I);for(var m=d(Math.pow(I,6)),g=this,v="";;){var E=L(g,m).g;g=N(g,E.j(m));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(I);if(g=E,C(g))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=N(this,I),k(I)?-1:C(I)?0:1};function P(I){for(var m=I.g.length,g=[],v=0;v<m;v++)g[v]=~I.g[v];return new a(g,~I.h).add(T)}n.abs=function(){return k(this)?P(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),g=[],v=0,E=0;E<=m;E++){var A=v+(this.i(E)&65535)+(I.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);v=_>>>16,A&=65535,_&=65535,g[E]=_<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function N(I,m){return I.add(P(m))}n.j=function(I){if(C(this)||C(I))return y;if(k(this))return k(I)?P(this).j(P(I)):P(P(this).j(I));if(k(I))return P(this.j(P(I)));if(0>this.l(b)&&0>I.l(b))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,g=[],v=0;v<2*m;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<I.g.length;E++){var A=this.i(v)>>>16,_=this.i(v)&65535,Bt=I.i(E)>>>16,zt=I.i(E)&65535;g[2*v+2*E]+=_*zt,x(g,2*v+2*E),g[2*v+2*E+1]+=A*zt,x(g,2*v+2*E+1),g[2*v+2*E+1]+=_*Bt,x(g,2*v+2*E+1),g[2*v+2*E+2]+=A*Bt,x(g,2*v+2*E+2)}for(v=0;v<m;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=m;v<2*m;v++)g[v]=0;return new a(g,0)};function x(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function U(I,m){this.g=I,this.h=m}function L(I,m){if(C(m))throw Error("division by zero");if(C(I))return new U(y,y);if(k(I))return m=L(P(I),m),new U(P(m.g),P(m.h));if(k(m))return m=L(I,P(m)),new U(P(m.g),m.h);if(30<I.g.length){if(k(I)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var g=T,v=m;0>=v.l(I);)g=ot(g),v=ot(v);var E=H(g,1),A=H(v,1);for(v=H(v,2),g=H(g,2);!C(v);){var _=A.add(v);0>=_.l(I)&&(E=E.add(g),A=_),v=H(v,1),g=H(g,1)}return m=N(I,E.j(m)),new U(E,m)}for(E=y;0<=I.l(m);){for(g=Math.max(1,Math.floor(I.m()/m.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(g),_=A.j(m);k(_)||0<_.l(I);)g-=v,A=d(g),_=A.j(m);C(A)&&(A=T),E=E.add(A),I=N(I,_)}return new U(E,I)}n.A=function(I){return L(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)&I.i(v);return new a(g,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)|I.i(v);return new a(g,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)^I.i(v);return new a(g,this.h^I.h)};function ot(I){for(var m=I.g.length+1,g=[],v=0;v<m;v++)g[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(g,I.h)}function H(I,m){var g=m>>5;m%=32;for(var v=I.g.length-g,E=[],A=0;A<v;A++)E[A]=0<m?I.i(A+g)>>>m|I.i(A+g+1)<<32-m:I.i(A+g);return new a(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ge=a}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lu,Xn,Fu,ai,to,Uu,Bu,qu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(o,l){if(l)t:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break t;h=h[w]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var R=h++;return{value:l(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function y(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,T.apply(null,arguments)}function b(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,R){for(var M=Array(arguments.length-2),J=2;J<arguments.length;J++)M[J-2]=arguments[J];return l.prototype[w].apply(f,M)}}function k(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const w=o.length||0,R=f.length||0;o.length=w+R;for(let M=0;M<R;M++)o[w+M]=f[M]}else o.push(f)}}class N{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var ot=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let R=0;R<g.length;R++)h=g[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function E(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function _(){var o=dt;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Bt{constructor(){this.h=this.g=null}add(l,h){const f=zt.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var zt=new N(()=>new Gt,o=>o.reset());class Gt{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let et,mt=!1,dt=new Bt,nt=()=>{const o=c.Promise.resolve(void 0);et=()=>{o.then(Wt)}};var Wt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var l=zt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}mt=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function rt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function ve(o,l){if(rt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ot){t:{try{L(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:md[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ve.aa.h.call(this)}}C(ve,rt);var md={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),gd=0;function _d(o,l,h,f,w){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=w,this.key=++gd,this.da=this.fa=!1}function Or(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xr(o){this.src=o,this.g={},this.h=0}xr.prototype.add=function(o,l,h,f,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var M=as(o,l,f,w);return-1<M?(l=o[M],h||(l.fa=!1)):(l=new _d(l,this.src,R,!!f,w),l.fa=h,o.push(l)),l};function os(o,l){var h=l.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Or(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function as(o,l,h,f){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==f)return w}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),ls={};function ba(o,l,h,f,w){if(Array.isArray(l)){for(var R=0;R<l.length;R++)ba(o,l[R],h,f,w);return null}return h=Pa(h),o&&o[Mr]?o.K(l,h,d(f)?!!f.capture:!1,w):yd(o,l,h,!1,f,w)}function yd(o,l,h,f,w,R){if(!l)throw Error("Invalid event type");var M=d(w)?!!w.capture:!!w,J=hs(o);if(J||(o[cs]=J=new xr(o)),h=J.add(l,h,f,M,R),h.proxy)return h;if(f=vd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)On||(w=M),w===void 0&&(w=!1),o.addEventListener(l.toString(),f,w);else if(o.attachEvent)o.attachEvent(Sa(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function vd(){function o(h){return l.call(o.src,o.listener,h)}const l=Ed;return o}function Ra(o,l,h,f,w){if(Array.isArray(l))for(var R=0;R<l.length;R++)Ra(o,l[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=Pa(h),o&&o[Mr]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],h=as(R,h,f,w),-1<h&&(Or(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=hs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=as(l,h,f,w)),(h=-1<o?l[o]:null)&&us(h))}function us(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Mr])os(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Sa(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=hs(l))?(os(h,o),h.h==0&&(h.src=null,l[cs]=null)):Or(o)}}}function Sa(o){return o in ls?ls[o]:ls[o]="on"+o}function Ed(o,l){if(o.da)o=!0;else{l=new ve(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&us(o),o=h.call(f,l)}return o}function hs(o){return o=o[cs],o instanceof xr?o:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(o){return typeof o=="function"?o:(o[ds]||(o[ds]=function(l){return o.handleEvent(l)}),o[ds])}function It(){qt.call(this),this.i=new xr(this),this.M=this,this.F=null}C(It,qt),It.prototype[Mr]=!0,It.prototype.removeEventListener=function(o,l,h,f){Ra(this,o,l,h,f)};function Ct(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new rt(l,o);else if(l instanceof rt)l.target=l.target||o;else{var w=l;l=new rt(f,o),v(l,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var M=l.g=h[R];w=Vr(M,f,!0,l)&&w}if(M=l.g=o,w=Vr(M,f,!0,l)&&w,w=Vr(M,f,!1,l)&&w,h)for(R=0;R<h.length;R++)M=l.g=h[R],w=Vr(M,f,!1,l)&&w}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Or(h[f]);delete o.g[l],o.h--}}this.F=null},It.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},It.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Vr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,R=0;R<l.length;++R){var M=l[R];if(M&&!M.da&&M.capture==h){var J=M.listener,gt=M.ha||M.src;M.fa&&os(o.i,M),w=J.call(gt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ca(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Da(o){o.g=Ca(()=>{o.g=null,o.i&&(o.i=!1,Da(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Id extends qt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(o){qt.call(this),this.h=o,this.g={}}C(xn,qt);var ka=[];function Na(o){H(o.g,function(l,h){this.g.hasOwnProperty(h)&&us(l)},o),o.g={}}xn.prototype.N=function(){xn.aa.N.call(this),Na(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=c.JSON.stringify,Td=c.JSON.parse,wd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ps(){}ps.prototype.h=null;function Ma(o){return o.h||(o.h=o.i())}function Oa(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){rt.call(this,"d")}C(ms,rt);function gs(){rt.call(this,"c")}C(gs,rt);var Fe={},xa=null;function Lr(){return xa=xa||new It}Fe.La="serverreachability";function Va(o){rt.call(this,Fe.La,o)}C(Va,rt);function Ln(o){const l=Lr();Ct(l,new Va(l))}Fe.STAT_EVENT="statevent";function La(o,l){rt.call(this,Fe.STAT_EVENT,o),this.stat=l}C(La,rt);function Dt(o){const l=Lr();Ct(l,new La(l,o))}Fe.Ma="timingevent";function Fa(o,l){rt.call(this,Fe.Ma,o),this.size=l}C(Fa,rt);function Fn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Ad(o,l,h,f,w,R){o.info(function(){if(o.g)if(R)for(var M="",J=R.split("&"),gt=0;gt<J.length;gt++){var K=J[gt].split("=");if(1<K.length){var Tt=K[0];K=K[1];var wt=Tt.split("_");M=2<=wt.length&&wt[1]=="type"?M+(Tt+"="+K+"&"):M+(Tt+"=redacted&")}}else M=null;else M=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+l+`
`+h+`
`+M})}function bd(o,l,h,f,w,R,M){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+l+`
`+h+`
`+R+" "+M})}function rn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Sd(o,h)+(f?" "+f:"")})}function Rd(o,l){o.info(function(){return"TIMEOUT: "+l})}Un.prototype.info=function(){};function Sd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var M=1;M<w.length;M++)w[M]=""}}}}return fs(h)}catch{return l}}var Fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function Ur(){}C(Ur,ps),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},_s=new Ur;function Ee(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var qa={},ys={};function vs(o,l,h){o.L=1,o.v=jr(re(l)),o.m=h,o.P=!0,$a(o,null)}function $a(o,l){o.F=Date.now(),Br(o),o.A=re(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),nc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ba,o.g=Ec(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Id(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(ka[0]=w.toString()),w=ka);for(var R=0;R<w.length;R++){var M=ba(h,w[R],f||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Ln(),Ad(o.i,o.u,o.A,o.l,o.R,o.m)}Ee.prototype.ca=function(o){o=o.target;const l=this.M;l&&ie(o)==3?l.j():this.Y(o)},Ee.prototype.Y=function(o){try{if(o==this.g)t:{const wt=ie(this.g);var l=this.g.Ba();const an=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||wt!=4||l==7||(l==8||0>=an?Ln(3):Ln(2)),Es(this);var h=this.g.Z();this.X=h;e:if(ja(this)){var f=lc(this.g);o="";var w=f.length,R=ie(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Bn(this);var M="";break e}this.h.i=new c.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(R&&l==w-1)});f.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,bd(this.i,this.u,this.A,this.l,this.R,wt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var J,gt=this.g;if((J=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(J)){var K=J;break e}}K=null}if(h=K)rn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,h);else{this.o=!1,this.s=3,Dt(12),Ue(this),Bn(this);break t}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<M.length;)if(Kt=Pd(this,M),Kt==ys){wt==4&&(this.s=4,Dt(14),h=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==qa){this.s=4,Dt(15),rn(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else rn(this.i,this.l,Kt,null),Is(this,Kt);if(ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||M.length!=0||this.h.h||(this.s=1,Dt(16),h=!1),this.o=this.o&&h,!h)rn(this.i,this.l,M,"[Invalid Chunked Response]"),Ue(this),Bn(this);else if(0<M.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Ss(Tt),Tt.M=!0,Dt(11))}}else rn(this.i,this.l,M,null),Is(this,M);wt==4&&Ue(this),this.o&&!this.J&&(wt==4?gc(this.j,this):(this.o=!1,Br(this)))}else zd(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Ue(this),Bn(this)}}}catch{}finally{}};function ja(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Pd(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?ys:(h=Number(l.substring(h,f)),isNaN(h)?qa:(f+=1,f+h>l.length?ys:(l=l.slice(f,f+h),o.C=f+h,l)))}Ee.prototype.cancel=function(){this.J=!0,Ue(this)};function Br(o){o.S=Date.now()+o.I,Ha(o,o.I)}function Ha(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fn(T(o.ba,o),l)}function Es(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Ee.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Rd(this.i,this.A),this.L!=2&&(Ln(),Dt(17)),Ue(this),this.s=2,Bn(this)):Ha(this,this.S-o)};function Bn(o){o.j.G==0||o.J||gc(o.j,o)}function Ue(o){Es(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Na(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Is(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ts(h.h,o))){if(!o.K&&Ts(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Yr(h),Wr(h);else break t;Rs(h),Dt(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Fn(T(h.Za,h),6e3));if(1>=Wa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else qe(h,11)}else if((o.K||h.g==o)&&Yr(h),!x(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let K=w[l];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const Tt=K[3];Tt!=null&&(h.la=Tt,h.j.info("VER="+h.la));const wt=K[4];wt!=null&&(h.Aa=wt,h.j.info("SVER="+h.Aa));const an=K[5];an!=null&&typeof an=="number"&&0<an&&(f=1.5*an,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Kt=o.g;if(Kt){const Jr=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var R=f.h;R.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ws(R,R.h),R.h=null))}if(f.D){const Ps=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(f.ya=Ps,Z(f.I,f.D,Ps))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var M=o;if(f.qa=vc(f,f.J?f.ia:null,f.W),M.K){Ka(f.h,M);var J=M,gt=f.L;gt&&(J.I=gt),J.B&&(Es(J),Br(J)),f.g=M}else pc(f);0<h.i.length&&Kr(h)}else K[0]!="stop"&&K[0]!="close"||qe(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?qe(h,7):bs(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}Ln(4)}catch{}}var Cd=class{constructor(o,l){this.g=o,this.map=l}};function za(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wa(o){return o.h?1:o.g?o.g.size:0}function Ts(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ws(o,l){o.g?o.g.add(l):o.h=l}function Ka(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}za.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ya(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return k(o.i)}function Dd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function kd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function Qa(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=kd(o),f=Dd(o),w=f.length,R=0;R<w;R++)l.call(void 0,f[R],h&&h[R],o)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var R=o[h].substring(0,f);w=o[h].substring(f+1)}else R=o[h];l(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Be){this.h=o.h,qr(this,o.j),this.o=o.o,this.g=o.g,$r(this,o.s),this.l=o.l;var l=o.i,h=new jn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Xa(this,h),this.m=o.m}else o&&(l=String(o).match(Ja))?(this.h=!1,qr(this,l[1]||"",!0),this.o=qn(l[2]||""),this.g=qn(l[3]||"",!0),$r(this,l[4]),this.l=qn(l[5]||"",!0),Xa(this,l[6]||"",!0),this.m=qn(l[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}Be.prototype.toString=function(){var o=[],l=this.j;l&&o.push($n(l,Za,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push($n(l,Za,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push($n(h,h.charAt(0)=="/"?xd:Od,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",$n(h,Ld)),o.join("")};function re(o){return new Be(o)}function qr(o,l,h){o.j=h?qn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function $r(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Xa(o,l,h){l instanceof jn?(o.i=l,Fd(o.i,o.h)):(h||(l=$n(l,Vd)),o.i=new jn(l,o.h))}function Z(o,l,h){o.i.set(l,h)}function jr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function qn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Md),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Md(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Za=/[#\/\?@]/g,Od=/[#\?:]/g,xd=/[#\?]/g,Vd=/[#\?@]/g,Ld=/#/g;function jn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ie(o){o.g||(o.g=new Map,o.h=0,o.i&&Nd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=jn.prototype,n.add=function(o,l){Ie(this),this.i=null,o=sn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function tc(o,l){Ie(o),l=sn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ec(o,l){return Ie(o),l=sn(o,l),o.g.has(l)}n.forEach=function(o,l){Ie(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(l,w,f,this)},this)},this)},n.na=function(){Ie(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const w=o[f];for(let R=0;R<w.length;R++)h.push(l[f])}return h},n.V=function(o){Ie(this);let l=[];if(typeof o=="string")ec(this,o)&&(l=l.concat(this.g.get(sn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Ie(this),this.i=null,o=sn(this,o),ec(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function nc(o,l,h){tc(o,l),0<h.length&&(o.i=null,o.g.set(sn(o,l),k(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const R=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var w=R;M[f]!==""&&(w+="="+encodeURIComponent(String(M[f]))),o.push(w)}}return this.i=o.join("&")};function sn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Fd(o,l){l&&!o.j&&(Ie(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(tc(this,f),nc(this,w,h))},o)),o.j=l}function Ud(o,l){const h=new Un;if(c.Image){const f=new Image;f.onload=b(Te,h,"TestLoadImage: loaded",!0,l,f),f.onerror=b(Te,h,"TestLoadImage: error",!1,l,f),f.onabort=b(Te,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(Te,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Bd(o,l){const h=new Un,f=new AbortController,w=setTimeout(()=>{f.abort(),Te(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?Te(h,"TestPingServer: ok",!0,l):Te(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),Te(h,"TestPingServer: error",!1,l)})}function Te(o,l,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function qd(){this.g=new wd}function $d(o,l,h){const f=h||"";try{Qa(o,function(w,R){let M=w;d(w)&&(M=fs(w)),l.push(f+R+"="+encodeURIComponent(M))})}catch(w){throw l.push(f+"type="+encodeURIComponent("_badmap")),w}}function Hr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Hr,ps),Hr.prototype.g=function(){return new zr(this.l,this.j)},Hr.prototype.i=function(o){return function(){return o}}({});function zr(o,l){It.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zr,It),n=zr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,zn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Hn(this):zn(this),this.readyState==3&&rc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ic(o){let l="";return H(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function As(o,l,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=ic(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,l,h))}function st(o){It.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(st,It);var jd=/^https?$/i,Hd=["POST","PUT"];n=st.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?Ma(this.o):Ma(_s),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){sc(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Hd,l,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of h)this.g.setRequestHeader(R,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){sc(this,R)}};function sc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,oc(o),Gr(o)}function oc(o){o.A||(o.A=!0,Ct(o,"complete"),Ct(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ct(this,"complete"),Ct(this,"abort"),Gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ac(this):this.bb())},n.bb=function(){ac(this)};function ac(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ie(o)!=4||o.Z()!=2)){if(o.u&&ie(o)==4)Ca(o.Ea,0,o);else if(Ct(o,"readystatechange"),ie(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var f;if(f=M===0){var w=String(o.D).match(Ja)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!jd.test(w?w.toLowerCase():"")}h=f}if(h)Ct(o,"complete"),Ct(o,"success");else{o.m=6;try{var R=2<ie(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",oc(o)}}finally{Gr(o)}}}}function Gr(o,l){if(o.g){cc(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ct(o,"ready");try{h.onreadystatechange=f}catch{}}}function cc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ie(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ie(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Td(l)}};function lc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(o){const l={};o=(o.g&&2<=ie(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(x(o[f]))continue;var h=E(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[w]||[];l[w]=R,R.push(h)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function uc(o){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,o),this.cb=Gn("retryDelaySeedMs",1e4,o),this.Wa=Gn("forwardChannelMaxRetries",2,o),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new za(o&&o.concurrentRequestLimit),this.Da=new qd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=uc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Dt(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=vc(this,null,this.W),Kr(this)};function bs(o){if(hc(o),o.G==3){var l=o.U++,h=re(o.I);if(Z(h,"SID",o.K),Z(h,"RID",l),Z(h,"TYPE","terminate"),Wn(o,h),l=new Ee(o,o.j,l),l.L=2,l.v=jr(re(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Ec(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Br(l)}yc(o)}function Wr(o){o.g&&(Ss(o),o.g.cancel(),o.g=null)}function hc(o){Wr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Yr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Kr(o){if(!Ga(o.h)&&!o.s){o.s=!0;var l=o.Ga;et||nt(),mt||(et(),mt=!0),dt.add(l,o),o.B=0}}function Gd(o,l){return Wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fn(T(o.Ga,o,l),_c(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new Ee(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=fc(this,w,l),h=re(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Wn(this,h),R&&(this.O?l="headers="+encodeURIComponent(String(ic(R)))+"&"+l:this.m&&As(h,this.m,R)),ws(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",l),Z(h,"SID","null"),w.T=!0,vs(w,h,null)):vs(w,h,l),this.G=2}}else this.G==3&&(o?dc(this,o):this.i.length==0||Ga(this.h)||dc(this))};function dc(o,l){var h;l?h=l.l:h=o.U++;const f=re(o.I);Z(f,"SID",o.K),Z(f,"RID",h),Z(f,"AID",o.T),Wn(o,f),o.m&&o.o&&As(f,o.m,o.o),h=new Ee(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=fc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ws(o.h,h),vs(h,f,l)}function Wn(o,l){o.H&&H(o.H,function(h,f){Z(l,f,h)}),o.l&&Qa({},function(h,f){Z(l,f,h)})}function fc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;t:{var w=o.i;let R=-1;for(;;){const M=["count="+h];R==-1?0<h?(R=w[0].g,M.push("ofs="+R)):R=0:M.push("ofs="+R);let J=!0;for(let gt=0;gt<h;gt++){let K=w[gt].g;const Tt=w[gt].map;if(K-=R,0>K)R=Math.max(0,w[gt].g-100),J=!1;else try{$d(Tt,M,"req"+K+"_")}catch{f&&f(Tt)}}if(J){f=M.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,f}function pc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;et||nt(),mt||(et(),mt=!0),dt.add(l,o),o.v=0}}function Rs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fn(T(o.Fa,o),_c(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Wr(this),mc(this))};function Ss(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function mc(o){o.g=new Ee(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=re(o.qa);Z(l,"RID","rpc"),Z(l,"SID",o.K),Z(l,"AID",o.T),Z(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(l,"TO",o.ja),Z(l,"TYPE","xmlhttp"),Wn(o,l),o.m&&o.o&&As(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=jr(re(l)),h.m=null,h.P=!0,$a(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Wr(this),Rs(this),Dt(19))};function Yr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function gc(o,l){var h=null;if(o.g==l){Yr(o),Ss(o),o.g=null;var f=2}else if(Ts(o.h,l))h=l.D,Ka(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;f=Lr(),Ct(f,new Fa(f,h)),Kr(o)}else pc(o);else if(w=l.s,w==3||w==0&&0<l.X||!(f==1&&Gd(o,l)||f==2&&Rs(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),w){case 1:qe(o,5);break;case 4:qe(o,10);break;case 3:qe(o,6);break;default:qe(o,2)}}}function _c(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function qe(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;const w=!f;f=new Be(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qr(f,"https"),jr(f),w?Ud(f.toString(),h):Bd(f.toString(),h)}else Dt(2);o.G=0,o.l&&o.l.sa(l),yc(o),hc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function yc(o){if(o.G=0,o.ka=[],o.l){const l=Ya(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function vc(o,l,h){var f=h instanceof Be?re(h):new Be(h);if(f.g!="")l&&(f.g=l+"."+f.g),$r(f,f.s);else{var w=c.location;f=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var R=new Be(null);f&&qr(R,f),l&&(R.g=l),w&&$r(R,w),h&&(R.l=h),f=R}return h=o.D,l=o.ya,h&&l&&Z(f,h,l),Z(f,"VER",o.la),Wn(o,f),f}function Ec(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new st(new Hr({eb:h})):new st(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}n=Ic.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qr(){}Qr.prototype.g=function(o,l){return new Vt(o,l)};function Vt(o,l){It.call(this),this.g=new uc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!x(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!x(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new on(this)}C(Vt,It),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){bs(this.g)},Vt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=fs(o),o=h);l.i.push(new Cd(l.Ya++,o)),l.G==3&&Kr(l)},Vt.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,Vt.aa.N.call(this)};function Tc(o){ms.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Tc,ms);function wc(){gs.call(this),this.status=1}C(wc,gs);function on(o){this.g=o}C(on,Ic),on.prototype.ua=function(){Ct(this.g,"a")},on.prototype.ta=function(o){Ct(this.g,new Tc(o))},on.prototype.sa=function(o){Ct(this.g,new wc)},on.prototype.ra=function(){Ct(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,qu=function(){return new Qr},Bu=function(){return Lr()},Uu=Fe,to={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fr.NO_ERROR=0,Fr.TIMEOUT=8,Fr.HTTP_ERROR=6,ai=Fr,Ua.COMPLETE="complete",Fu=Ua,Oa.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",It.prototype.listen=It.prototype.K,Xn=Oa,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Lu=st}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});const tl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new vo("@firebase/firestore");function Yn(){return Je.logLevel}function V(n,...t){if(Je.logLevel<=G.DEBUG){const e=t.map(Mo);Je.debug(`Firestore (${Cn}): ${n}`,...e)}}function fe(n,...t){if(Je.logLevel<=G.ERROR){const e=t.map(Mo);Je.error(`Firestore (${Cn}): ${n}`,...e)}}function En(n,...t){if(Je.logLevel<=G.WARN){const e=t.map(Mo);Je.warn(`Firestore (${Cn}): ${n}`,...e)}}function Mo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const t=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+n;throw fe(t),new Error(t)}function Q(n,t){n||q()}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ge{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class m_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Rt.UNAUTHENTICATED))}shutdown(){}}class g_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class __{constructor(t){this.t=t,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ue,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ue)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new $u(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new Rt(t)}}class y_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class v_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new y_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Q(this.o===void 0);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new E_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=T_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function Y(n,t){return n<t?-1:n>t?1:0}function In(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ht(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new ht(0,0))}static max(){return new $(new ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(),r===void 0?r=t.length-e:r>t.length-e&&q(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return hr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends hr{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const w_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends hr{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return w_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(tt.fromString(t))}static fromName(t){return new F(tt.fromString(t).popFirst(5))}static empty(){return new F(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new tt(t.slice()))}}function A_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new ht(e+1,0):new ht(e,r));return new Me(i,F.empty(),t)}function b_(n){return new Me(n.readTime,n.key,-1)}class Me{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Me($.min(),F.empty(),-1)}static max(){return new Me($.max(),F.empty(),-1)}}function R_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Y(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class P_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==S_)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let i=0,s=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&e()},u=>r(u))}),a=!0,s===i&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(i=>i?D.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new D((r,i)=>{const s=t.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;e(t[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(t,e){return new D((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function C_(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Oo.oe=-1;function Fi(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function D_(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function tn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ti(this.root,t,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ti(this.root,t,this.comparator,!0)}}class ti{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new _t(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,r,i,s){return this}insert(t,e,r){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new nl(this.data.getIterator())}getIteratorFrom(t){return new nl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class nl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new vt(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return In(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zu("Invalid base64 string: "+s):s}}(t);return new Et(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const k_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oe(n){if(Q(!!n),typeof n=="string"){let t=0;const e=k_.exec(n);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xe(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Vo(n){const t=n.mapValue.fields.__previous_value__;return xo(t)?Vo(t):t}function dr(n){const t=Oe(n.mapValue.fields.__local_write_time__.timestampValue);return new ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,r,i,s,a,c,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class fr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{}};function Ze(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xo(n)?4:O_(n)?9007199254740991:M_(n)?10:11:q()}function ee(n,t){if(n===t)return!0;const e=Ze(n);if(e!==Ze(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dr(n).isEqual(dr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Oe(i.timestampValue),c=Oe(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Xe(i.bytesValue).isEqual(Xe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=at(i.doubleValue),c=at(s.doubleValue);return a===c?wi(a)===wi(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return In(n.arrayValue.values||[],t.arrayValue.values||[],ee);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(el(a)!==el(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ee(a[u],c[u])))return!1;return!0}(n,t);default:return q()}}function pr(n,t){return(n.values||[]).find(e=>ee(e,t))!==void 0}function Tn(n,t){if(n===t)return 0;const e=Ze(n),r=Ze(t);if(e!==r)return Y(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,t.booleanValue);case 2:return function(s,a){const c=at(s.integerValue||s.doubleValue),u=at(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,t);case 3:return rl(n.timestampValue,t.timestampValue);case 4:return rl(dr(n),dr(t));case 5:return Y(n.stringValue,t.stringValue);case 6:return function(s,a){const c=Xe(s),u=Xe(a);return c.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Y(c[d],u[d]);if(p!==0)return p}return Y(c.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const c=Y(at(s.latitude),at(a.latitude));return c!==0?c:Y(at(s.longitude),at(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return il(n.arrayValue,t.arrayValue);case 10:return function(s,a){var c,u,d,p;const y=s.fields||{},T=a.fields||{},b=(c=y.value)===null||c===void 0?void 0:c.arrayValue,C=(u=T.value)===null||u===void 0?void 0:u.arrayValue,k=Y(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:il(b,C)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===ei.mapValue&&a===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(a===ei.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const T=Y(u[y],p[y]);if(T!==0)return T;const b=Tn(c[u[y]],d[p[y]]);if(b!==0)return b}return Y(u.length,p.length)}(n.mapValue,t.mapValue);default:throw q()}}function rl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Y(n,t);const e=Oe(n),r=Oe(t),i=Y(e.seconds,r.seconds);return i!==0?i:Y(e.nanos,r.nanos)}function il(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=Tn(e[i],r[i]);if(s)return s}return Y(e.length,r.length)}function wn(n){return eo(n)}function eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Oe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Xe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=eo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${eo(e.fields[a])}`;return i+"}"}(n.mapValue):q()}function sl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function no(n){return!!n&&"integerValue"in n}function Lo(n){return!!n&&"arrayValue"in n}function ol(n){return!!n&&"nullValue"in n}function al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function M_(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return tn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function O_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ci(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rr(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=rr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ci(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){tn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Mt(rr(this.value))}}function Gu(n){const t=[];return tn(n.fields,(e,r)=>{const i=new yt([e]);if(ci(r)){const s=Gu(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new Lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,r,i,s,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(t){return new St(t,0,$.min(),$.min(),$.min(),Mt.empty(),0)}static newFoundDocument(t,e,r,i){return new St(t,1,e,$.min(),r,i,0)}static newNoDocument(t,e){return new St(t,2,e,$.min(),$.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,$.min(),$.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e){this.position=t,this.inclusive=e}}function cl(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],a=n.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Tn(a,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ll(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ee(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function x_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{}class lt extends Wu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new L_(t,e,r):e==="array-contains"?new B_(t,r):e==="in"?new q_(t,r):e==="not-in"?new $_(t,r):e==="array-contains-any"?new j_(t,r):new lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new F_(t,r):new U_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Tn(e,this.value)):e!==null&&Ze(this.value)===Ze(e)&&this.matchesComparison(Tn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends Wu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Jt(t,e)}matches(t){return Ku(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ku(n){return n.op==="and"}function Yu(n){return V_(n)&&Ku(n)}function V_(n){for(const t of n.filters)if(t instanceof Jt)return!1;return!0}function ro(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(Yu(n))return n.filters.map(t=>ro(t)).join(",");{const t=n.filters.map(e=>ro(e)).join(",");return`${n.op}(${t})`}}function Qu(n,t){return n instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&ee(r.value,i.value)}(n,t):n instanceof Jt?function(r,i){return i instanceof Jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Qu(a,i.filters[c]),!0):!1}(n,t):void q()}function Ju(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${wn(e.value)}`}(n):n instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ju).join(" ,")+"}"}(n):"Filter"}class L_ extends lt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class F_ extends lt{constructor(t,e){super(t,"in",e),this.keys=Xu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class U_ extends lt{constructor(t,e){super(t,"not-in",e),this.keys=Xu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class B_ extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lo(e)&&pr(e.arrayValue,this.value)}}class q_ extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pr(this.value.arrayValue,e)}}class $_ extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!pr(this.value.arrayValue,e)}}class j_ extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>pr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t,e=null,r=[],i=[],s=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function ul(n,t=null,e=[],r=[],i=null,s=null,a=null){return new H_(n,t,e,r,i,s,a)}function Fo(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ro(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>wn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>wn(r)).join(",")),t.ue=e}return t.ue}function Uo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!x_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ll(n.startAt,t.startAt)&&ll(n.endAt,t.endAt)}function io(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function z_(n,t,e,r,i,s,a,c){return new Dn(n,t,e,r,i,s,a,c)}function Bo(n){return new Dn(n)}function hl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zu(n){return n.collectionGroup!==null}function ir(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new vt(yt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new mr(s,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new mr(yt.keyField(),r))}return t.ce}function Zt(n){const t=j(n);return t.le||(t.le=G_(t,ir(n))),t.le}function G_(n,t){if(n.limitType==="F")return ul(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mr(i.field,s)});const e=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function so(n,t){const e=n.filters.concat([t]);return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function bi(n,t,e){return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ui(n,t){return Uo(Zt(n),Zt(t))&&n.limitType===t.limitType}function th(n){return`${Fo(Zt(n))}|lt:${n.limitType}`}function cn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Ju(i)).join(", ")}]`),Fi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>wn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>wn(i)).join(",")),`Target(${r})`}(Zt(n))}; limitType=${n.limitType})`}function Bi(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of ir(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,ir(r),i)||r.endAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,ir(r),i))}(n,t)}function W_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eh(n){return(t,e)=>{let r=!1;for(const i of ir(n)){const s=K_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function K_(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?Tn(u,d):q()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){tn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new it(F.comparator);function pe(){return Y_}const nh=new it(F.comparator);function Zn(...n){let t=nh;for(const e of n)t=t.insert(e.key,e);return t}function rh(n){let t=nh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ze(){return sr()}function ih(){return sr()}function sr(){return new kn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Q_=new it(F.comparator),J_=new vt(F.comparator);function z(...n){let t=J_;for(const e of n)t=t.add(e);return t}const X_=new vt(Y);function Z_(){return X_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(t)?"-0":t}}function sh(n){return{integerValue:""+n}}function ty(n,t){return D_(t)?sh(t):qo(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this._=void 0}}function ey(n,t,e){return n instanceof Ri?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xo(s)&&(s=Vo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof gr?ah(n,t):n instanceof _r?ch(n,t):function(i,s){const a=oh(i,s),c=dl(a)+dl(i.Pe);return no(a)&&no(i.Pe)?sh(c):qo(i.serializer,c)}(n,t)}function ny(n,t,e){return n instanceof gr?ah(n,t):n instanceof _r?ch(n,t):e}function oh(n,t){return n instanceof Si?function(r){return no(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ri extends qi{}class gr extends qi{constructor(t){super(),this.elements=t}}function ah(n,t){const e=lh(t);for(const r of n.elements)e.some(i=>ee(i,r))||e.push(r);return{arrayValue:{values:e}}}class _r extends qi{constructor(t){super(),this.elements=t}}function ch(n,t){let e=lh(t);for(const r of n.elements)e=e.filter(i=>!ee(i,r));return{arrayValue:{values:e}}}class Si extends qi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function dl(n){return at(n.integerValue||n.doubleValue)}function lh(n){return Lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ry(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof gr&&i instanceof gr||r instanceof _r&&i instanceof _r?In(r.elements,i.elements,ee):r instanceof Si&&i instanceof Si?ee(r.Pe,i.Pe):r instanceof Ri&&i instanceof Ri}(n.transform,t.transform)}class iy{constructor(t,e){this.version=t,this.transformResults=e}}class Ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function li(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class $i{}function uh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new $o(n.key,Ft.none()):new Sr(n.key,n.data,Ft.none());{const e=n.data,r=Mt.empty();let i=new vt(yt.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ve(n.key,r,new Lt(i.toArray()),Ft.none())}}function sy(n,t,e){n instanceof Sr?function(i,s,a){const c=i.value.clone(),u=pl(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Ve?function(i,s,a){if(!li(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=pl(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(hh(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function or(n,t,e,r){return n instanceof Sr?function(s,a,c,u){if(!li(s.precondition,a))return c;const d=s.value.clone(),p=ml(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ve?function(s,a,c,u){if(!li(s.precondition,a))return c;const d=ml(s.fieldTransforms,u,a),p=a.data;return p.setAll(hh(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(s,a,c){return li(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function oy(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=oh(r.transform,i||null);s!=null&&(e===null&&(e=Mt.empty()),e.set(r.field,s))}return e||null}function fl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&In(r,i,(s,a)=>ry(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Sr extends $i{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ve extends $i{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function pl(n,t,e){const r=new Map;Q(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],a=s.transform,c=t.data.field(s.field);r.set(s.field,ny(a,c,e[i]))}return r}function ml(n,t,e){const r=new Map;for(const i of n){const s=i.transform,a=e.data.field(i.field);r.set(i.field,ey(s,a,t))}return r}class $o extends $i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ay extends $i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sy(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ih();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=e.has(i.key)?null:c;const u=uh(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&In(this.mutations,t.mutations,(e,r)=>fl(e,r))&&In(this.baseMutations,t.baseMutations,(e,r)=>fl(e,r))}}class jo{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Q(t.mutations.length===r.length);let i=function(){return Q_}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new jo(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,W;function hy(n){switch(n){default:return q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function dh(n){if(n===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(n){case ct.OK:return S.OK;case ct.CANCELLED:return S.CANCELLED;case ct.UNKNOWN:return S.UNKNOWN;case ct.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ct.INTERNAL:return S.INTERNAL;case ct.UNAVAILABLE:return S.UNAVAILABLE;case ct.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ct.NOT_FOUND:return S.NOT_FOUND;case ct.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ct.ABORTED:return S.ABORTED;case ct.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ct.DATA_LOSS:return S.DATA_LOSS;default:return q()}}(W=ct||(ct={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Ge([4294967295,4294967295],0);function gl(n){const t=dy().encode(n),e=new Vu;return e.update(t),new Uint8Array(e.digest())}function _l(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ge([e,r],0),new Ge([i,s],0)]}class Ho{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tr(`Invalid padding: ${e}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ge.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Ge.fromNumber(r)));return i.compare(fy)===1&&(i=new Ge([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=gl(t),[r,i]=_l(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Ho(s,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=gl(t),[r,i]=_l(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Pr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ji($.min(),i,new it(Y),pe(),z())}}class Pr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pr(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class fh{constructor(t,e){this.targetId=t,this.me=e}}class ph{constructor(t,e,r=Et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class yl{constructor(){this.fe=0,this.ge=El(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=z(),e=z(),r=z();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Pr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=El()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class py{constructor(t){this.Le=t,this.Be=new Map,this.ke=pe(),this.qe=vl(),this.Qe=new it(Y)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(io(s))if(r===0){const a=new F(s.path);this.Ue(e,a,St.newNoDocument(a,$.min()))}else Q(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),u=c?this.Xe(c,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let a,c;try{a=Xe(r).toUint8Array()}catch(u){if(u instanceof zu)return En("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ho(a,i,s)}catch(u){return En(u instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&io(c.target)){const u=new F(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,St.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let r=z();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new ji(t,e,this.Qe,this.ke,r);return this.ke=pe(),this.qe=vl(),this.Qe=new it(Y),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new yl,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new vt(Y),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new yl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vl(){return new it(F.comparator)}function El(){return new it(F.comparator)}const my={asc:"ASCENDING",desc:"DESCENDING"},gy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_y={and:"AND",or:"OR"};class yy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oo(n,t){return n.useProto3Json||Fi(t)?t:{value:t}}function Pi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function vy(n,t){return Pi(n,t.toTimestamp())}function te(n){return Q(!!n),$.fromTimestamp(function(e){const r=Oe(e);return new ht(r.seconds,r.nanos)}(n))}function zo(n,t){return ao(n,t).canonicalString()}function ao(n,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function gh(n){const t=tt.fromString(n);return Q(Ih(t)),t}function co(n,t){return zo(n.databaseId,t.path)}function Fs(n,t){const e=gh(t);if(e.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(yh(e))}function _h(n,t){return zo(n.databaseId,t)}function Ey(n){const t=gh(n);return t.length===4?tt.emptyPath():yh(t)}function lo(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yh(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Il(n,t,e){return{name:co(n,t),fields:e.value.mapValue.fields}}function Iy(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),Et.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Et.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?S.UNKNOWN:dh(d.code);return new O(p,d.message||"")}(a);e=new ph(r,i,s,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fs(n,r.document.name),s=te(r.document.updateTime),a=r.document.createTime?te(r.document.createTime):$.min(),c=new Mt({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ui(d,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Fs(n,r.document),s=r.readTime?te(r.readTime):$.min(),a=St.newNoDocument(i,s),c=r.removedTargetIds||[];e=new ui([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Fs(n,r.document),s=r.removedTargetIds||[];e=new ui([],s,i,null)}else{if(!("filter"in t))return q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new uy(i,s),c=r.targetId;e=new fh(c,a)}}return e}function Ty(n,t){let e;if(t instanceof Sr)e={update:Il(n,t.key,t.value)};else if(t instanceof $o)e={delete:co(n,t.key)};else if(t instanceof Ve)e={update:Il(n,t.key,t.data),updateMask:ky(t.fieldMask)};else{if(!(t instanceof ay))return q();e={verify:co(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Si)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw q()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,t.precondition)),e}function wy(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(i,s){let a=i.updateTime?te(i.updateTime):te(s);return a.isEqual($.min())&&(a=te(s)),new iy(a,i.transformResults||[])}(e,t))):[]}function Ay(n,t){return{documents:[_h(n,t.path)]}}function by(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=_h(n,i);const s=function(d){if(d.length!==0)return Eh(Jt.create(d,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:ln(T.field),direction:Py(T.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=oo(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Ry(n){let t=Ey(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Q(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let s=[];e.where&&(s=function(y){const T=vh(y);return T instanceof Jt&&Yu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(T=>function(C){return new mr(un(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(T))}(e.orderBy));let c=null;e.limit&&(c=function(y){let T;return T=typeof y=="object"?y.value:y,Fi(T)?null:T}(e.limit));let u=null;e.startAt&&(u=function(y){const T=!!y.before,b=y.values||[];return new Ai(b,T)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const T=!y.before,b=y.values||[];return new Ai(b,T)}(e.endAt)),z_(t,i,a,s,c,"F",u,d)}function Sy(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=un(e.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=un(e.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=un(e.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=un(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return lt.create(un(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(r=>vh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function Py(n){return my[n]}function Cy(n){return gy[n]}function Dy(n){return _y[n]}function ln(n){return{fieldPath:n.canonicalString()}}function un(n){return yt.fromServerFormat(n.fieldPath)}function Eh(n){return n instanceof lt?function(e){if(e.op==="=="){if(al(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NAN"}};if(ol(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(al(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NAN"}};if(ol(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(e.field),op:Cy(e.op),value:e.value}}}(n):n instanceof Jt?function(e){const r=e.getFilters().map(i=>Eh(i));return r.length===1?r[0]:{compositeFilter:{op:Dy(e.op),filters:r}}}(n):q()}function ky(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ih(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e,r,i,s=$.min(),a=$.min(),c=Et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new Pe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t){this.ct=t}}function My(n){const t=Ry({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.un=new xy}addToCollectionParentIndex(t,e){return this.un.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(Me.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(Me.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class xy{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new vt(tt.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new vt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new An(0)}static kn(){return new An(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.changes=new kn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&or(r.mutation,i,Lt.empty(),ht.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const i=ze();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let a=Zn();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ze();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let s=pe();const a=sr(),c=function(){return sr()}();return e.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ve)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),or(p.mutation,d,p.mutation.getFieldMask(),ht.now())):a.set(d.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var y;return c.set(d,new Ly(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(t,e){const r=sr();let i=new it((a,c)=>a-c),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let p=r.get(u)||Lt.empty();p=c.applyToLocalView(d,p),r.set(u,p);const y=(i.get(c.batchId)||z()).add(u);i=i.insert(c.batchId,y)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,y=ih();p.forEach(T=>{if(!s.has(T)){const b=uh(e.get(T),r.get(T));b!==null&&y.set(T,b),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):D.resolve(ze());let c=-1,u=s;return a.next(d=>D.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),s.get(p)?D.resolve():this.remoteDocumentCache.getEntry(t,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(t,d,s)).next(()=>this.computeViews(t,u,d,z())).next(p=>({batchId:c,changes:rh(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let i=Zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let a=Zn();return this.indexManager.getCollectionParents(t,s).next(c=>D.forEach(c,u=>{const d=function(y,T){return new Dn(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(p=>{p.forEach((y,T)=>{a=a.insert(y,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(a=>{s.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,St.newInvalidDocument(p)))});let c=Zn();return a.forEach((u,d)=>{const p=s.get(u);p!==void 0&&or(p.mutation,d,Lt.empty(),ht.now()),Bi(e,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return D.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:te(i.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:My(i.bundledQuery),readTime:te(i.readTime)}}(e)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.overlays=new it(F.comparator),this.Ir=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ze();return D.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const i=ze(),s=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new it((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=ze(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=ze(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return D.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ly(e,r));let s=this.Ir.get(e);s===void 0&&(s=z(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Tr=new vt(ft.Er),this.dr=new vt(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new ft(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new tt([])),r=new ft(e,t),i=new ft(e,t+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new tt([])),r=new ft(e,t),i=new ft(e,t+1);let s=z();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new ft(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||Y(t.wr,e.wr)}static Ar(t,e){return Y(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new vt(ft.Er)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cy(s,e,r,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new ft(c.key,s)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),i=new ft(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const c=this.Dr(a.wr);s.push(c)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new vt(Y);return e.forEach(i=>{const s=new ft(i,0),a=new ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{r=r.add(c.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const a=new ft(new F(s),0);let c=new vt(Y);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.wr)),!0)},a),D.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(e.mutations,i=>{const s=new ft(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new ft(e,0),i=this.br.firstAfterOrEqual(r);return D.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t){this.Mr=t,this.docs=function(){return new it(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=pe();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=pe();const a=e.path,c=new F(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||R_(b_(p),r)<=0||(i.has(p.key)||Bi(e,p))&&(s=s.insert(p.key,p.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(t,e,r,i){q()}Or(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Hy(this)}getSize(t){return D.resolve(this.size)}}class Hy extends Vy{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){this.persistence=t,this.Nr=new kn(e=>Fo(e),Uo),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Go,this.targetCount=0,this.kr=An.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),D.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new An(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.Kn(e),D.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Oo(0),this.Kr=!1,this.Kr=!0,this.$r=new qy,this.referenceDelegate=t(this),this.Ur=new zy(this),this.indexManager=new Oy,this.remoteDocumentCache=function(i){return new jy(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ny(e),this.Gr=new Uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new By,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new $y(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Wy(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Wy extends P_{constructor(t){super(),this.currentSequenceNumber=t}}class Wo{constructor(t){this.persistence=t,this.Jr=new Go,this.Yr=null}static Zr(t){return new Wo(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),D.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=F.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,$.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return D.or([()=>D.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=z(),i=z();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ko(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kf()?8:C_(Pt())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Ky;return this.Xi(t,e,a).next(c=>{if(s.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(Yn()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",cn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Yn()<=G.DEBUG&&V("QueryEngine","Query:",cn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yn()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",cn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Zt(e))):D.resolve())}Yi(t,e){if(hl(e))return D.resolve(null);let r=Zt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=bi(e,null,"F"),r=Zt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=z(...s);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.ts(e,c);return this.ns(e,d,a,u.readTime)?this.Yi(t,bi(e,null,"F")):this.rs(t,d,e,u)}))})))}Zi(t,e,r,i){return hl(e)||i.isEqual($.min())?D.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const a=this.ts(e,s);return this.ns(e,a,r,i)?D.resolve(null):(Yn()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cn(e)),this.rs(t,a,e,A_(i,-1)).next(c=>c))})}ts(t,e){let r=new vt(eh(t));return e.forEach((i,s)=>{Bi(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return Yn()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",cn(e)),this.Ji.getDocumentsMatchingQuery(t,e,Me.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new it(Y),this._s=new kn(s=>Fo(s),Uo),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Jy(n,t,e,r){return new Qy(n,t,e,r)}async function Th(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=z();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Xy(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const y=d.batch,T=y.keys();let b=D.resolve();return T.forEach(C=>{b=b.next(()=>p.getEntry(u,C)).next(k=>{const P=d.docVersions.get(C);Q(P!==null),k.version.compareTo(P)<0&&(y.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function wh(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Zy(n,t){const e=j(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((p,y)=>{const T=i.get(y);if(!T)return;c.push(e.Ur.removeMatchingKeys(s,p.removedDocuments,y).next(()=>e.Ur.addMatchingKeys(s,p.addedDocuments,y)));let b=T.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(y)!==null?b=b.withResumeToken(Et.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(y,b),function(k,P,N){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(T,b,p)&&c.push(e.Ur.updateTargetData(s,b))});let u=pe(),d=z();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(tv(s,a,t.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual($.min())){const p=e.Ur.getLastRemoteSnapshotVersion(s).next(y=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return D.waitFor(c).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(e.os=i,s))}function tv(n,t,e){let r=z(),i=z();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let a=pe();return e.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function ev(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function nv(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,D.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Pe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function uo(n,t,e){const r=j(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Rr(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Tl(n,t,e){const r=j(n);let i=$.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const y=j(u),T=y._s.get(p);return T!==void 0?D.resolve(y.os.get(T)):y.Ur.getTargetData(d,p)}(r,a,Zt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:$.min(),e?s:z())).next(c=>(rv(r,W_(t),c),{documents:c,Ts:s})))}function rv(n,t,e){let r=n.us.get(t)||$.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class wl{constructor(){this.activeTargetIds=Z_()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class iv{constructor(){this.so=new wl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new wl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni=null;function Us(){return ni===null?ni=function(){return 268435456+Math.round(2147483648*Math.random())}():ni++,"0x"+ni.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class cv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,a){const c=Us(),u=this.xo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${c}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(e,u,d,i).then(p=>(V("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw En("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(e,r,i,s,a,c){return this.Mo(e,r,i,s,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,r){const i=ov[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=Us();return new Promise((a,c)=>{const u=new Lu;u.setWithCredentials(!0),u.listenOnce(Fu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ai.NO_ERROR:const p=u.getResponseJson();V(At,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(p)),a(p);break;case ai.TIMEOUT:V(At,`RPC '${t}' ${s} timed out`),c(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const y=u.getStatus();if(V(At,`RPC '${t}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const b=T==null?void 0:T.error;if(b&&b.status&&b.message){const C=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(N)>=0?N:S.UNKNOWN}(b.status);c(new O(C,b.message))}else c(new O(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(S.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{V(At,`RPC '${t}' ${s} completed.`)}});const d=JSON.stringify(i);V(At,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=Us(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=qu(),c=Bu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=s.join("");V(At,`Creating RPC '${t}' stream ${i}: ${p}`,u);const y=a.createWebChannel(p,u);let T=!1,b=!1;const C=new av({Io:P=>{b?V(At,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(T||(V(At,`Opening RPC '${t}' stream ${i} transport.`),y.open(),T=!0),V(At,`RPC '${t}' stream ${i} sending:`,P),y.send(P))},To:()=>y.close()}),k=(P,N,x)=>{P.listen(N,U=>{try{x(U)}catch(L){setTimeout(()=>{throw L},0)}})};return k(y,Xn.EventType.OPEN,()=>{b||(V(At,`RPC '${t}' stream ${i} transport opened.`),C.yo())}),k(y,Xn.EventType.CLOSE,()=>{b||(b=!0,V(At,`RPC '${t}' stream ${i} transport closed`),C.So())}),k(y,Xn.EventType.ERROR,P=>{b||(b=!0,En(At,`RPC '${t}' stream ${i} transport errored:`,P),C.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),k(y,Xn.EventType.MESSAGE,P=>{var N;if(!b){const x=P.data[0];Q(!!x);const U=x,L=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(L){V(At,`RPC '${t}' stream ${i} received error:`,L);const ot=L.status;let H=function(g){const v=ct[g];if(v!==void 0)return dh(v)}(ot),I=L.message;H===void 0&&(H=S.INTERNAL,I="Unknown error status: "+ot+" with message "+L.message),b=!0,C.So(new O(H,I)),y.close()}else V(At,`RPC '${t}' stream ${i} received:`,x),C.bo(x)}}),k(c,Uu.STAT_EVENT,P=>{P.stat===to.PROXY?V(At,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===to.NOPROXY&&V(At,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){return new yy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,r,i,s,a,c,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ah(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(fe(e.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lv extends bh{constructor(t,e,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Iy(this.serializer,t),r=function(s){if(!("targetChange"in s))return $.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?te(a.readTime):$.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=lo(this.serializer),e.addTarget=function(s,a){let c;const u=a.target;if(c=io(u)?{documents:Ay(s,u)}:{query:by(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=mh(s,a.resumeToken);const d=oo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=Pi(s,a.snapshotVersion.toTimestamp());const d=oo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Sy(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=lo(this.serializer),e.removeTarget=t,this.a_(e)}}class uv extends bh{constructor(t,e,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Q(!!t.streamToken),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=wy(t.writeResults,t.commitTime),r=te(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=lo(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ty(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,ao(e,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(S.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,ao(e,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(e),this.D_=!1):V("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{en(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=j(u);d.L_.add(4),await Cr(d),d.q_.set("Unknown"),d.L_.delete(4),await zi(d)}(this))})}),this.q_=new dv(r,i)}}async function zi(n){if(en(n))for(const t of n.B_)await t(!0)}async function Cr(n){for(const t of n.B_)await t(!1)}function Rh(n,t){const e=j(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Xo(e)?Jo(e):Nn(e).r_()&&Qo(e,t))}function Yo(n,t){const e=j(n),r=Nn(e);e.N_.delete(t),r.r_()&&Sh(e,t),e.N_.size===0&&(r.r_()?r.o_():en(e)&&e.q_.set("Unknown"))}function Qo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Nn(n).A_(t)}function Sh(n,t){n.Q_.xe(t),Nn(n).R_(t)}function Jo(n){n.Q_=new py({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.q_.v_()}function Xo(n){return en(n)&&!Nn(n).n_()&&n.N_.size>0}function en(n){return j(n).L_.size===0}function Ph(n){n.Q_=void 0}async function pv(n){n.q_.set("Online")}async function mv(n){n.N_.forEach((t,e)=>{Qo(n,t)})}async function gv(n,t){Ph(n),Xo(n)?(n.q_.M_(t),Jo(n)):n.q_.set("Unknown")}async function _v(n,t,e){if(n.q_.set("Online"),t instanceof ph&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ci(n,r)}else if(t instanceof ui?n.Q_.Ke(t):t instanceof fh?n.Q_.He(t):n.Q_.We(t),!e.isEqual($.min()))try{const r=await wh(n.localStore);e.compareTo(r)>=0&&await function(s,a){const c=s.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Et.EMPTY_BYTE_STRING,p.snapshotVersion)),Sh(s,u);const y=new Pe(p.target,u,d,p.sequenceNumber);Qo(s,y)}),s.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ci(n,r)}}async function Ci(n,t,e){if(!Rr(t))throw t;n.L_.add(1),await Cr(n),n.q_.set("Offline"),e||(e=()=>wh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await zi(n)})}function Ch(n,t){return t().catch(e=>Ci(n,e,t))}async function Gi(n){const t=j(n),e=xe(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;yv(t);)try{const i=await ev(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,vv(t,i)}catch(i){await Ci(t,i)}Dh(t)&&kh(t)}function yv(n){return en(n)&&n.O_.length<10}function vv(n,t){n.O_.push(t);const e=xe(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Dh(n){return en(n)&&!xe(n).n_()&&n.O_.length>0}function kh(n){xe(n).start()}async function Ev(n){xe(n).p_()}async function Iv(n){const t=xe(n);for(const e of n.O_)t.m_(e.mutations)}async function Tv(n,t,e){const r=n.O_.shift(),i=jo.from(r,t,e);await Ch(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Gi(n)}async function wv(n,t){t&&xe(n).V_&&await async function(r,i){if(function(a){return hy(a)&&a!==S.ABORTED}(i.code)){const s=r.O_.shift();xe(r).s_(),await Ch(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gi(r)}}(n,t),Dh(n)&&kh(n)}async function bl(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=en(e);e.L_.add(3),await Cr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await zi(e)}async function Av(n,t){const e=j(n);t?(e.L_.delete(2),await zi(e)):t||(e.L_.add(2),await Cr(e),e.q_.set("Unknown"))}function Nn(n){return n.K_||(n.K_=function(e,r,i){const s=j(e);return s.w_(),new lv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:pv.bind(null,n),Ro:mv.bind(null,n),mo:gv.bind(null,n),d_:_v.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Xo(n)?Jo(n):n.q_.set("Unknown")):(await n.K_.stop(),Ph(n))})),n.K_}function xe(n){return n.U_||(n.U_=function(e,r,i){const s=j(e);return s.w_(),new uv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ev.bind(null,n),mo:wv.bind(null,n),f_:Iv.bind(null,n),g_:Tv.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Gi(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,c=new Zo(t,e,a,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,t){if(fe("AsyncQueue",`${t}: ${n}`),Rr(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Zn(),this.sortedSet=new it(this.comparator)}static emptySet(t){return new gn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof gn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new gn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.W_=new it(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class bn{constructor(t,e,r,i,s,a,c,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,s){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new bn(t,e,gn.emptySet(e),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ui(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Rv{constructor(){this.queries=Sl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=j(e),s=i.queries;i.queries=Sl(),s.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Sl(){return new kn(n=>th(n),Ui)}async function Nh(n,t){const e=j(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new bv,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ta(a,`Initialization of query '${cn(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&ea(e)}async function Mh(n,t){const e=j(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Sv(n,t){const e=j(n);let r=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&ea(e)}function Pv(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function ea(n){n.Y_.forEach(t=>{t.next()})}var ho,Pl;(Pl=ho||(ho={})).ea="default",Pl.Cache="cache";class Oh{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new bn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=bn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ho.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.key=t}}class Vh{constructor(t){this.key=t}}class Cv{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=z(),this.mutatedKeys=z(),this.Aa=eh(t),this.Ra=new gn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Rl,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,y)=>{const T=i.get(p),b=Bi(this.query,y)?y:null,C=!!T&&this.mutatedKeys.has(T.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;T&&b?T.data.isEqual(b.data)?C!==k&&(r.track({type:3,doc:b}),P=!0):this.ga(T,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.Aa(b,u)>0||d&&this.Aa(b,d)<0)&&(c=!0)):!T&&b?(r.track({type:0,doc:b}),P=!0):T&&!b&&(r.track({type:1,doc:T}),P=!0,(u||d)&&(c=!0)),P&&(b?(a=a.add(b),s=k?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,y)=>function(b,C){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return k(b)-k(C)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),i=i!=null&&i;const c=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new bn(this.query,t.Ra,s,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Vh(r))}),this.da.forEach(r=>{t.has(r)||e.push(new xh(r))}),e}ba(t){this.Ta=t.Ts,this.da=z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return bn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Dv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class kv{constructor(t){this.key=t,this.va=!1}}class Nv{constructor(t,e,r,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new kn(c=>th(c),Ui),this.Ma=new Map,this.xa=new Set,this.Oa=new it(F.comparator),this.Na=new Map,this.La=new Go,this.Ba={},this.ka=new Map,this.qa=An.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Mv(n,t,e=!0){const r=$h(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Lh(r,t,e,!0),i}async function Ov(n,t){const e=$h(n);await Lh(e,t,!0,!1)}async function Lh(n,t,e,r){const i=await nv(n.localStore,Zt(t)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let c;return r&&(c=await xv(n,t,s,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Rh(n.remoteStore,i),c}async function xv(n,t,e,r,i){n.Ka=(y,T,b)=>async function(k,P,N,x){let U=P.view.ma(N);U.ns&&(U=await Tl(k.localStore,P.query,!1).then(({documents:I})=>P.view.ma(I,U)));const L=x&&x.targetChanges.get(P.targetId),ot=x&&x.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges(U,k.isPrimaryClient,L,ot);return Dl(k,P.targetId,H.wa),H.snapshot}(n,y,T,b);const s=await Tl(n.localStore,t,!0),a=new Cv(t,s.Ts),c=a.ma(s.documents),u=Pr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);Dl(n,e,d.wa);const p=new Dv(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Vv(n,t,e){const r=j(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Ui(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Yo(r.remoteStore,i.targetId),fo(r,i.targetId)}).catch(br)):(fo(r,i.targetId),await uo(r.localStore,i.targetId,!0))}async function Lv(n,t){const e=j(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Yo(e.remoteStore,r.targetId))}async function Fv(n,t,e){const r=zv(n);try{const i=await function(a,c){const u=j(a),d=ht.now(),p=c.reduce((b,C)=>b.add(C.key),z());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=pe(),k=z();return u.cs.getEntries(b,p).next(P=>{C=P,C.forEach((N,x)=>{x.isValidDocument()||(k=k.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,C)).next(P=>{y=P;const N=[];for(const x of c){const U=oy(x,y.get(x.key).overlayedDocument);U!=null&&N.push(new Ve(x.key,U,Gu(U.value.mapValue),Ft.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,N,c)}).next(P=>{T=P;const N=P.applyToLocalDocumentSet(y,k);return u.documentOverlayCache.saveOverlays(b,P.batchId,N)})}).then(()=>({batchId:T.batchId,changes:rh(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new it(Y)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,e),await Dr(r,i.changes),await Gi(r.remoteStore)}catch(i){const s=ta(i,"Failed to persist write");e.reject(s)}}async function Fh(n,t){const e=j(n);try{const r=await Zy(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Q(a.va):i.removedDocuments.size>0&&(Q(a.va),a.va=!1))}),await Dr(e,r,t)}catch(r){await br(r)}}function Cl(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=j(a);u.onlineState=c;let d=!1;u.queries.forEach((p,y)=>{for(const T of y.j_)T.Z_(c)&&(d=!0)}),d&&ea(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uv(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let a=new it(F.comparator);a=a.insert(s,St.newNoDocument(s,$.min()));const c=z().add(s),u=new ji($.min(),new Map,new it(Y),a,c);await Fh(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),na(r)}else await uo(r.localStore,t,!1).then(()=>fo(r,t,e)).catch(br)}async function Bv(n,t){const e=j(n),r=t.batch.batchId;try{const i=await Xy(e.localStore,t);Bh(e,r,null),Uh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dr(e,i)}catch(i){await br(i)}}async function qv(n,t,e){const r=j(n);try{const i=await function(a,c){const u=j(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(Q(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,t);Bh(r,t,e),Uh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dr(r,i)}catch(i){await br(i)}}function Uh(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Bh(n,t,e){const r=j(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function fo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||qh(n,r)})}function qh(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Yo(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),na(n))}function Dl(n,t,e){for(const r of e)r instanceof xh?(n.La.addReference(r.key,t),$v(n,r)):r instanceof Vh?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||qh(n,r.key)):q()}function $v(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+e),n.xa.add(r),na(n))}function na(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(tt.fromString(t)),r=n.qa.next();n.Na.set(r,new kv(e)),n.Oa=n.Oa.insert(e,r),Rh(n.remoteStore,new Pe(Zt(Bo(e.path)),r,"TargetPurposeLimboResolution",Oo.oe))}}async function Dr(n,t,e){const r=j(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=Ko.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const p=j(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>D.forEach(d,T=>D.forEach(T.$i,b=>p.persistence.referenceDelegate.addReference(y,T.targetId,b)).next(()=>D.forEach(T.Ui,b=>p.persistence.referenceDelegate.removeReference(y,T.targetId,b)))))}catch(y){if(!Rr(y))throw y;V("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const b=p.os.get(T),C=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(T,k)}}}(r.localStore,s))}async function jv(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Th(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dr(e,r.hs)}}function Hv(n,t){const e=j(n),r=e.Na.get(t);if(r&&r.va)return z().add(r.key);{let i=z();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function $h(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uv.bind(null,t),t.Ca.d_=Sv.bind(null,t.eventManager),t.Ca.$a=Pv.bind(null,t.eventManager),t}function zv(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qv.bind(null,t),t}class Di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hi(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Jy(this.persistence,new Yy,t.initialUser,this.serializer)}Ga(t){return new Gy(Wo.Zr,this.serializer)}Wa(t){return new iv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Di.provider={build:()=>new Di};class po{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jv.bind(null,this.syncEngine),await Av(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Rv}()}createDatastore(t){const e=Hi(t.databaseInfo.databaseId),r=function(s){return new cv(s)}(t.databaseInfo);return function(s,a,c,u){return new hv(s,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,a,c){return new fv(r,i,s,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Cl(this.syncEngine,e,0),function(){return Al.D()?new Al:new sv}())}createSyncEngine(t,e){return function(i,s,a,c,u,d,p){const y=new Nv(i,s,a,c,u,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=j(i);V("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Cr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}po.provider={build:()=>new po};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):fe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=ju.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ta(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Th(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function kl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Wv(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>bl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>bl(t.remoteStore,i)),n._onlineComponents=t}async function Wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;En("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new Di)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new Di);return n._offlineComponents}async function Hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await kl(n,new po))),n._onlineComponents}function Kv(n){return Hh(n).then(t=>t.syncEngine)}async function zh(n){const t=await Hh(n),e=t.eventManager;return e.onListen=Mv.bind(null,t.syncEngine),e.onUnlisten=Vv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ov.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Lv.bind(null,t.syncEngine),e}function Yv(n,t,e={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const p=new jh({next:T=>{p.Za(),a.enqueueAndForget(()=>Mh(s,y));const b=T.docs.has(c);!b&&T.fromCache?d.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&T.fromCache&&u&&u.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new Oh(Bo(c.path),p,{includeMetadataChanges:!0,_a:!0});return Nh(s,y)}(await zh(n),n.asyncQueue,t,e,r)),r.promise}function Qv(n,t,e={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const p=new jh({next:T=>{p.Za(),a.enqueueAndForget(()=>Mh(s,y)),T.fromCache&&u.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new Oh(c,p,{includeMetadataChanges:!0,_a:!0});return Nh(s,y)}(await zh(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jv(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ml(n){if(!F.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ol(n){if(F.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wi(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Xv(n,t){if(t<=0)throw new O(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ki{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m_;switch(r.type){case"firstParty":return new v_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Nl.get(e);r&&(V("ComponentProvider","Removing Datastore"),Nl.delete(e),r.terminate())}(this),Promise.resolve()}}function Zv(n,t,e,r={}){var i;const s=(n=me(n,Ki))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Rt.MOCK_USER;else{c=Af(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Rt(d)}n._authCredentials=new g_(new $u(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Le(this.firestore,t,this._query)}}class xt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class Ne extends Le{constructor(t,e,r){super(t,e,Bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new F(t))}withConverter(t){return new Ne(this.firestore,t,this._path)}}function tE(n,t,...e){if(n=ut(n),Wh("collection","path",t),n instanceof Ki){const r=tt.fromString(t,...e);return Ol(r),new Ne(n,null,r)}{if(!(n instanceof xt||n instanceof Ne))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Ol(r),new Ne(n.firestore,null,r)}}function _n(n,t,...e){if(n=ut(n),arguments.length===1&&(t=ju.newId()),Wh("doc","path",t),n instanceof Ki){const r=tt.fromString(t,...e);return Ml(r),new xt(n,null,new F(r))}{if(!(n instanceof xt||n instanceof Ne))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Ml(r),new xt(n.firestore,n instanceof Ne?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ah(this,"async_queue_retry"),this.Vu=()=>{const r=Bs();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ue;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Rr(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw fe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Zo.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Mn extends Ki{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Vl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vl(t),this._firestoreClient=void 0,await t}}}function eE(n,t){const e=typeof n=="object"?n:tu(),r=typeof n=="string"?n:"(default)",i=Io(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Tf("firestore");s&&Zv(i,...s)}return i}function Yi(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nE(n),n._firestoreClient}function nE(n){var t,e,r;const i=n._freezeSettings(),s=function(c,u,d,p){return new N_(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Gv(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rn(Et.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rn(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/^__.*__$/;class iE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sr(t,this.data,e,this.fieldTransforms)}}class Kh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Yh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class oa{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new oa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ki(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Yh(this.Cu)&&rE.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class sE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Hi(t)}Qu(t,e,r,i=!1){return new oa({Cu:t,methodName:e,qu:r,path:yt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ji(n){const t=n._freezeSettings(),e=Hi(n._databaseId);return new sE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function aa(n,t,e,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);ca("Data must be an object, but it was:",a,r);const c=Qh(r,a);let u,d;if(s.merge)u=new Lt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const y of s.mergeFields){const T=mo(t,y,e);if(!a.contains(T))throw new O(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Xh(p,T)||p.push(T)}u=new Lt(p),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new iE(new Mt(c),u,d)}class Xi extends ra{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xi}}function oE(n,t,e,r){const i=n.Qu(1,t,e);ca("Data must be an object, but it was:",i,r);const s=[],a=Mt.empty();tn(r,(u,d)=>{const p=la(t,u,e);d=ut(d);const y=i.Nu(p);if(d instanceof Xi)s.push(p);else{const T=kr(d,y);T!=null&&(s.push(p),a.set(p,T))}});const c=new Lt(s);return new Kh(a,c,i.fieldTransforms)}function aE(n,t,e,r,i,s){const a=n.Qu(1,t,e),c=[mo(t,r,e)],u=[i];if(s.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)c.push(mo(t,s[T])),u.push(s[T+1]);const d=[],p=Mt.empty();for(let T=c.length-1;T>=0;--T)if(!Xh(d,c[T])){const b=c[T];let C=u[T];C=ut(C);const k=a.Nu(b);if(C instanceof Xi)d.push(b);else{const P=kr(C,k);P!=null&&(d.push(b),p.set(b,P))}}const y=new Lt(d);return new Kh(p,y,a.fieldTransforms)}function cE(n,t,e,r=!1){return kr(e,n.Qu(r?4:3,t))}function kr(n,t){if(Jh(n=ut(n)))return ca("Unsupported field value:",t,n),Qh(n,t);if(n instanceof ra)return function(r,i){if(!Yh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=kr(c,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ty(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ht.fromDate(r);return{timestampValue:Pi(i.serializer,s)}}if(r instanceof ht){const s=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pi(i.serializer,s)}}if(r instanceof ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rn)return{bytesValue:mh(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sa)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return qo(c.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Wi(r)}`)}(n,t)}function Qh(n,t){const e={};return Hu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tn(n,(r,i)=>{const s=kr(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Jh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof ia||n instanceof Rn||n instanceof xt||n instanceof ra||n instanceof sa)}function ca(n,t,e){if(!Jh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Wi(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function mo(n,t,e){if((t=ut(t))instanceof Qi)return t._internalPath;if(typeof t=="string")return la(n,t);throw ki("Field path arguments must be of type string or ",n,!1,void 0,e)}const lE=new RegExp("[~\\*/\\[\\]]");function la(n,t,e){if(t.search(lE)>=0)throw ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Qi(...t.split("."))._internalPath}catch{throw ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ki(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new O(S.INVALID_ARGUMENT,c+n+u)}function Xh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new uE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class uE extends Zh{data(){return super.data()}}function Zi(n,t){return typeof t=="string"?la(n,t):t instanceof Qi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ua{}class ha extends ua{}function ar(n,t,...e){let r=[];t instanceof ua&&r.push(t),r=r.concat(e),function(s){const a=s.filter(u=>u instanceof fa).length,c=s.filter(u=>u instanceof ts).length;if(a>1||a>0&&c>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ts extends ha{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ts(t,e,r)}_apply(t){const e=this._parse(t);return td(t._query,e),new Le(t.firestore,t.converter,so(t._query,e))}_parse(t){const e=Ji(t.firestore);return function(s,a,c,u,d,p,y){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ul(y,p);const b=[];for(const C of y)b.push(Fl(u,s,C));T={arrayValue:{values:b}}}else T=Fl(u,s,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ul(y,p),T=cE(c,a,y,p==="in"||p==="not-in");return lt.create(d,p,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function da(n,t,e){const r=t,i=Zi("where",n);return ts._create(i,r,e)}class fa extends ua{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new fa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const u of c)td(a,u),a=so(a,u)}(t._query,e),new Le(t.firestore,t.converter,so(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pa extends ha{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new pa(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mr(s,a)}(t._query,this._field,this._direction);return new Le(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Dn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Ll(n,t="asc"){const e=t,r=Zi("orderBy",n);return pa._create(r,e)}class ma extends ha{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new ma(t,e,r)}_apply(t){return new Le(t.firestore,t.converter,bi(t._query,this._limit,this._limitType))}}function dE(n){return Xv("limit",n),ma._create("limit",n,"F")}function Fl(n,t,e){if(typeof(e=ut(e))=="string"){if(e==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zu(t)&&e.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!F.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sl(n,new F(r))}if(e instanceof xt)return sl(n,e._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wi(e)}.`)}function Ul(n,t){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function td(n,t){const e=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class fE{convertValue(t,e="none"){switch(Ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return tn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>at(a.doubleValue));return new sa(s)}convertGeoPoint(t){return new ia(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dr(t));default:return null}}convertTimestamp(t){const e=Oe(t);return new ht(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);Q(Ih(r));const i=new fr(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(e)||fe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ed extends Zh{constructor(t,e,r,i,s,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class hi extends ed{data(t={}){return super.data(t)}}class pE{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new er(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new hi(this._firestore,this._userDataWriter,r.key,r,new er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new hi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new hi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:mE(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){n=me(n,xt);const t=me(n.firestore,Mn);return Yv(Yi(t),n._key).then(e=>yE(t,n,e))}class nd extends fE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xt(this.firestore,null,e)}}function es(n){n=me(n,Le);const t=me(n.firestore,Mn),e=Yi(t),r=new nd(t);return hE(n._query),Qv(e,n._query).then(i=>new pE(t,r,n,i))}function _a(n,t,e){n=me(n,xt);const r=me(n.firestore,Mn),i=ga(n.converter,t,e);return ya(r,[aa(Ji(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Ft.none())])}function _E(n,t){const e=me(n.firestore,Mn),r=_n(n),i=ga(n.converter,t);return ya(e,[aa(Ji(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ft.exists(!1))]).then(()=>r)}function ya(n,t){return function(r,i){const s=new ue;return r.asyncQueue.enqueueAndForget(async()=>Fv(await Kv(r),i,s)),s.promise}(Yi(n),t)}function yE(n,t,e){const r=e.docs.get(t._key),i=new nd(n);return new ed(n,i,t._key,r,new er(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Ji(t)}set(t,e,r){this._verifyNotCommitted();const i=$s(t,this._firestore),s=ga(i.converter,e,r),a=aa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Ft.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=$s(t,this._firestore);let a;return a=typeof(e=ut(e))=="string"||e instanceof Qi?aE(this._dataReader,"WriteBatch.update",s._key,e,r,i):oE(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,Ft.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=$s(t,this._firestore);return this._mutations=this._mutations.concat(new $o(e._key,Ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $s(n,t){if((n=ut(n)).firestore!==t)throw new O(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){return Yi(n=me(n,Mn)),new vE(n,t=>ya(n,t))}(function(t,e=!0){(function(i){Cn=i})(Sn),yn(new Ke("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Mn(new __(r.getProvider("auth-internal")),new I_(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),ke(tl,"4.7.3",t),ke(tl,"4.7.3","esm2017")})();const rd={apiKey:"AIzaSyDiwM2Z7yrLoTjuQvJtQ1L5PY753Mw2Sb0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:62f509abaf480f98fd9e85"};function pt(){return rd.apiKey!=="YOUR_API_KEY"}let js=null,Ut=null,Ot=null;try{pt()?(js=Zl(rd),Ut=f_(js),Ot=eE(js)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const EE=new se;let jt=null,di=[];function IE(){if(!pt()||!Ut){console.warn("Firebase not configured - auth disabled");return}eg(Ut,n=>{jt=n,di.forEach(t=>t(n))})}function TE(n){return di.push(n),jt!==void 0&&n(jt),()=>{di=di.filter(t=>t!==n)}}function ns(){return jt}function nn(){return jt!==null}async function wE(n,t,e=null){if(!pt()||!Ut)throw new Error("Firebase not configured");const r=await Ym(Ut,n,t);return e&&r.user&&await Xm(r.user,{displayName:e}),r}async function AE(n,t){if(!pt()||!Ut)throw new Error("Firebase not configured");return Qm(Ut,n,t)}async function bE(){if(!pt()||!Ut)throw new Error("Firebase not configured");return Tg(Ut,EE)}async function RE(){if(!pt()||!Ut)throw new Error("Firebase not configured");return ng(Ut)}async function SE(n){if(!pt()||!Ut)throw new Error("Firebase not configured");return Km(Ut,n)}function PE(){var n;return jt?{uid:jt.uid,email:jt.email,displayName:jt.displayName||((n=jt.email)==null?void 0:n.split("@")[0])||"User",photoURL:jt.photoURL,emailVerified:jt.emailVerified}:null}function va(n){const t=ns();return!t||!Ot?null:_n(Ot,"users",t.uid,n)}function rs(n){const t=ns();return!t||!Ot?null:tE(Ot,"users",t.uid,n)}async function CE(){if(!pt())return null;const n=va("decision");if(!n)return null;try{const t=await gE(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading decision data:",t),null}}async function id(n){if(!pt())return;const t=va("decision");if(t)try{await _a(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving decision data:",e),e}}async function DE(n={}){if(!pt())return[];const t=rs("history");if(!t)return[];try{let e=ar(t,Ll("date",n.sortDesc?"desc":"asc"));n.taxYear&&(e=ar(t,da("taxYear","==",n.taxYear),Ll("date",n.sortDesc?"desc":"asc"))),n.limit&&(e=ar(e,dE(n.limit)));const r=await es(e),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){return console.error("Error loading decision history:",e),[]}}async function kE(n){if(!pt())return null;const t=rs("history");if(!t)return null;try{const e=ar(t,da("date","==",n.date)),r=await es(e);if(!r.empty){const s=r.docs[0].id;return await _a(_n(Ot,"users",ns().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await _E(t,{...n,createdAt:new Date().toISOString()})).id}catch(e){throw console.error("Error adding history record:",e),e}}async function NE(n){if(!pt())return;const t=rs("history");if(t)try{const e=ar(t,da("date","==",n)),r=await es(e),i=Ni(Ot);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(e){throw console.error("Error deleting history record:",e),e}}async function sd(){if(!pt())return;const n=rs("history");if(n)try{const t=await es(n),e=500,r=[];let i=Ni(Ot),s=0;t.forEach(a=>{i.delete(a.ref),s++,s>=e&&(r.push(i),i=Ni(Ot),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(t){throw console.error("Error clearing history:",t),t}}async function ME(n){if(!pt())return;const t=va("stress");if(t)try{await _a(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving stress data:",e),e}}async function OE(){if(!pt())return;const n=ns();if(!(!n||!Ot))try{await sd();const t=Ni(Ot);t.delete(_n(Ot,"users",n.uid,"decision")),t.delete(_n(Ot,"users",n.uid,"stress")),t.delete(_n(Ot,"users",n.uid,"profile")),await t.commit(),console.log("All user data wiped successfully")}catch(t){throw console.error("Error wiping user data:",t),t}}let kt=null,We=null;const od=5e3;function cr(){return{settings:{equityMin:bt.EQUITY_MIN,bondMin:bt.BOND_MIN,cashTarget:bt.CASH_TARGET,duration:bt.DURATION_YEARS,baseSalary:bt.BASE_SALARY,protectionFactor:bt.PROTECTION_FACTOR,recoveryBuffer:bt.RECOVERY_BUFFER,consecutiveLimit:bt.CONSECUTIVE_LIMIT,startDate:null},taxYears:{},history:[],lastModified:null,checksum:null}}function Nr(){return pt()&&nn()}function xE(){kt=null,We=null}function is(){return kt&&We&&Date.now()-We<od?kt:cr()}async function VE(){if(kt&&We&&Date.now()-We<od)return kt;if(!Nr())return console.warn("Firebase not available - returning defaults"),cr();try{const n=await CE(),t=await DE();if(n){const e={settings:n.settings||cr().settings,taxYears:n.taxYears||{},history:t||[],lastModified:n.lastModified,checksum:n.checksum};return kt=e,We=Date.now(),e}}catch(n){console.error("Error loading from Firebase:",n)}return cr()}async function LE(n){if(!Nr())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=FE(n),await id({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),kt=n,We=Date.now()}catch(t){throw console.error("Error saving to Firebase:",t),new Error("Failed to save decision data")}}function FE(n){const t={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return pf(t)}function UE(){return is().settings}function Ea(n){const e=is().taxYears[n];return e||{pa:Nt.PERSONAL_ALLOWANCE,brl:Nt.BASIC_RATE_LIMIT,hrl:Nt.HIGHER_RATE_LIMIT,cpi:.025,other:0,statePension:0,isaBalance:0,isaMonthlyDraw:0}}async function BE(n,t){const e=await VE();e.taxYears[n]={...Ea(n),...t},await LE(e)}function qE(){return is().taxYears}function ad(n={}){let e=[...is().history];return n.taxYear&&(e=e.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(e=e.filter(r=>r.date>=n.startDate)),n.endDate&&(e=e.filter(r=>r.date<=n.endDate)),n.sortDesc?e.sort((r,i)=>i.date.localeCompare(r.date)):e.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(e=e.slice(0,n.limit)),e}async function $E(n){if(!Nr())throw new Error("Must be logged in to save history");if(await kE(n),kt){const t=kt.history.findIndex(e=>e.date===n.date);t>=0?kt.history[t]=n:kt.history.push(n),kt.history.sort((e,r)=>e.date.localeCompare(r.date))}}async function jE(n){if(!Nr())throw new Error("Must be logged in to delete history");await NE(n),kt&&(kt.history=kt.history.filter(t=>t.date!==n))}function HE(n){return ad({taxYear:n})}async function zE(){if(!Nr())throw new Error("Must be logged in to wipe data");const n=cr();await sd(),await id({settings:n.settings,taxYears:{},lastModified:new Date().toISOString()}),xE()}function GE(n){const{date:t,equity:e,bond:r,cash:i,isaBalance:s=0}=n,a=UE(),c=typeof t=="string"?ef(t):t,u=Xd(c),d=Ea(u),p=HE(u),y=a.startDate||(p.length>0?p[0].date:t),T=rf(y,c),b=p.map(H=>d.cpi);for(let H=0;H<T;H++)b[H]||b.unshift(d.cpi);const C=uf(b),k=lf(a,T,C),P=hf({equity:e,bond:r,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,priorHistory:p,consecutiveLimit:a.consecutiveLimit,recoveryBuffer:a.recoveryBuffer}),N=af({equity:e,bond:r,cash:i,isaBalance:s,baseSalary:a.baseSalary,cumulativeInflation:C,yearlyInflation:b,other:d.other,statePension:d.statePension,statePensionYear:a.statePensionYear||12,yearNumber:T,pa:d.pa,brl:d.brl,hrl:d.hrl,taxMode:a.taxMode||"inflates",currentDate:c,taxYearHistory:p,inProtection:P.inProtection,protectionFactor:a.protectionFactor,adjEquityMin:k.equity,adjBondMin:k.bond}),x=df({drawAmount:N.monthlySipp+N.boostAmount,equity:e,bond:r,cash:i,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,inProtection:P.inProtection}),U=ff({equity:e,bond:r,cash:i,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,inProtection:P.inProtection}),L=WE({recommendation:N,protectionStatus:P,glidepaths:k,funds:{equity:e,bond:r,cash:i},withdrawalSource:x});return Wd({date:typeof t=="string"?t:t.toISOString().slice(0,7),taxYear:u,yearNumber:T,monthInTaxYear:nf(c),remainingMonths:yo(c),equity:e,bond:r,cash:i,isa:s,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,pa:N.taxInfo.pa,brl:N.taxInfo.brl,hrl:N.taxInfo.hrl,other:N.monthlyOther,statePension:N.monthlyState,sippDraw:N.monthlySipp+N.boostAmount,isaDraw:N.monthlyIsa,totalMonthlyNet:N.monthlyNet,taxEfficient:N.mode==="tax-efficient",annualTaxableSoFar:N.taxInfo.annualTaxable,headroomToBRL:N.taxInfo.headroomToBRL,inProtection:P.inProtection,protectionReason:P.reason,consecutiveCashDraws:P.consecutiveCashDraws,boostAmount:N.boostAmount,boostEligible:N.taxBoostEligible,source:x.source,drawFromEquity:x.fromEquity,drawFromBond:x.fromBond,drawFromCash:x.fromCash,rebalanceNeeded:U.length>0,rebalanceActions:U.map(H=>H.action),alerts:L,calculationDetails:{mode:N.mode,reason:N.reason,isaNeededMonthly:N.isaNeededMonthly,totalIsaNeeded:N.totalIsaNeeded,hasSufficientIsa:N.hasSufficientIsa,cumulativeInflation:C,yearlyInflation:b,glidepaths:k,protectionStatus:P,taxInfo:N.taxInfo}})}function WE(n){const{recommendation:t,protectionStatus:e,glidepaths:r,funds:i,withdrawalSource:s}=n,a=[];e.inProtection&&a.push($e(`Protection Mode Active: ${e.reason}`,$t.WARNING,"protection-active")),e.canExitProtection&&a.push($e("Exiting protection mode - growth funds recovered",$t.SUCCESS,"protection-exit")),t.warning&&a.push($e(t.warning,$t.WARNING,"insufficient-isa")),t.boostAmount>0&&a.push($e(`Tax Boost: +£${Math.round(t.boostAmount).toLocaleString()}/mo (${t.boostReason})`,$t.INFO,"tax-boost")),t.isaUsedForTopUp&&t.monthlyIsa>0&&a.push($e(`Using £${Math.round(t.monthlyIsa).toLocaleString()} ISA top-up to stay tax-efficient`,$t.INFO,"isa-topup"));const c=i.cash-r.cash;return c<0&&a.push($e(`Cash £${Math.round(Math.abs(c)).toLocaleString()} below target - consider topping up`,$t.DANGER,"low-cash")),s.shortfall>0&&a.push($e(`Withdrawal shortfall: £${Math.round(s.shortfall).toLocaleString()} could not be covered`,$t.DANGER,"shortfall")),a}function KE(n){const t=Kd(n);t.stdSipp=n.sippDraw-(n.boostAmount||0),$E(t)}function Ia(n,t,e=0){const r=Hl(e);let i=n.equityStart,s=n.bondStart,a=n.cashStart,c=0,u=0,d=0,p=0,y=!1,T=null;const b=[],C=[];let k=.025;b.push({year:0,month:0,equity:i,bond:s,cash:a,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let P=0;P<n.years*12;P++){const N=Math.floor(P/12),x=P%12,U=t.equity[N]||0,L=t.inflation[N]||.025;x===0&&N>0&&C.push(t.inflation[N-1]||.025);const ot=Math.pow(1+U,1/12)-1,H=YE(L,U,k,r)/12,I=Math.max(.001,L)/12;i*=1+ot,s*=1+H,a*=1+I,k=L;const m=C.reduce((dt,nt)=>dt*(1+nt),1)*(1+L*(x/12)),g=dn(n.equityMin,N,n.duration,m,!0),v=dn(n.bondMin,N,n.duration,m,!0),E=dn(n.cashTarget,N,n.duration,m,!1),A=QE(n,N,m,C),_=i+s,Bt=g+v,zt=_>=Bt+A;let Gt=!1,et=A,mt="Growth";if(!n.disableProtection&&!zt?(Gt=!0,et=A*n.protectionMult,c++,d++,u=Math.max(u,d)):d=0,!Gt&&zt){const dt=Math.max(0,i-g),nt=Math.max(0,s-v),Wt=dt+nt;if(Wt>=et){const qt=et*(dt/Wt),rt=et*(nt/Wt);i-=qt,s-=rt,mt="Growth"}else a-=et,mt="Cash"}else if(a>=et)a-=et,mt="Cash";else if(s>=et-a){const dt=et-a;a=0,s-=dt,mt="Bond+Cash"}else if(i>=et-a-s){const dt=et-a-s;a=0,s=0,i-=dt,mt="All"}else if(n.hodlEnabled&&p<n.hodlValue){const dt=n.hodlValue-p,nt=et-a-s-i,Wt=Math.min(dt,nt);p+=Wt,a=0,s=0,i=0,mt="HODL",Wt<nt&&(y=!0,T=P)}else y=!0,T=P;if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(x===0||P===n.years*12-1||y)&&b.push({year:N+x/12,month:P,equity:i,bond:s,cash:a,total:i+s+a,draw:et,source:mt,inProtection:Gt,equityMin:g,bondMin:v,cashMax:E}),y)break}return{failed:y,years:y?T/12:n.years,failMonth:T,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,protMonths:c,maxConsec:u,hodlUsed:p,hist:b,seed:e}}function YE(n,t,e,r){const i=e;let s;i>.045?s=we.HIGH_INFLATION:i<0?s=we.DEFLATION:s=we.NORMAL;const a=n+.005+Kn(0,we.VOLATILITY.LINKER,r),c=.04-(n>.04?(n-.04)*.5:0)+Kn(0,we.VOLATILITY.NOMINAL,r),u=t*.6+n+Kn(0,we.VOLATILITY.PROPERTY,r),d=n*1.2+Kn(0,we.VOLATILITY.COMMODITY,r),p=Math.max(.001,n)+Kn(0,we.VOLATILITY.CASH,r),y=t*.5;return s.LINKER*a+s.NOMINAL*c+s.PROPERTY*u+s.COMMODITY*d+s.CASH*p+s.EQUITY*y}function QE(n,t,e,r){n.taxMode==="frozen"?n.pa:n.pa*e;const i=n.taxMode==="frozen"?n.brl:n.brl*e,s=n.baseSalary*e;let a=n.other;for(const p of r)a*=1+Math.min(p,.04);const c=t>=n.statePensionYear?n.statePension*e:0,u=a+c;return Math.max(0,Math.min(i,s)-u)/12}function JE(n,t=1e3){const e=Object.keys(fi).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<t;i++){const s=Hl(i*12345),a={equity:{},inflation:{}};for(let c=0;c<n.years;c++){const u=e[Math.floor(s()*e.length)];a.equity[c]=fi[u],a.inflation[c]=$l[u]||.025}r.push(Ia(n,a,i))}return r}function XE(n){const t=Object.keys(fi).map(Number).sort((i,s)=>i-s),e=Math.max(...t),r=[];for(const i of t){if(i+n.years-1>e)continue;const s={equity:{},inflation:{}};for(let c=0;c<n.years;c++)s.equity[c]=fi[i+c]||0,s.inflation[c]=$l[i+c]||.025;const a=Ia(n,s,i);a.startYear=i,r.push(a)}return r}function ZE(n,t){const e={equity:{},inflation:{}};for(let r=0;r<n.years;r++)e.equity[r]=t.equity[r%t.equity.length],e.inflation[r]=t.inflation[r%t.inflation.length];return Ia(n,e,999)}function tI(n){const t=n.filter(e=>e.failed).length;return(n.length-t)/n.length*100}function cd(n){const t=n.filter(a=>!a.failed),e=n.filter(a=>a.failed),r=n.map(a=>a.years).sort((a,c)=>a-c),i=t.map(a=>a.final).sort((a,c)=>a-c),s=n.map(a=>a.protMonths);return{total:n.length,successCount:t.length,failCount:e.length,successRate:tI(n),minYears:r[0],p10Years:r[Math.floor(n.length*.1)],medianYears:r[Math.floor(n.length*.5)],medianFinal:i[Math.floor(i.length*.5)]||0,p10Final:i[Math.floor(i.length*.1)]||0,p90Final:i[Math.floor(i.length*.9)]||0,avgFinal:t.reduce((a,c)=>a+c.final,0)/(t.length||1),runsWithProtection:n.filter(a=>a.protMonths>0).length,avgProtMonths:s.reduce((a,c)=>a+c,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(a=>a.maxConsec)),runsUsingHodl:n.filter(a=>a.hodlUsed>0).length,avgHodlUsed:n.filter(a=>a.hodlUsed>0).reduce((a,c)=>a+c.hodlUsed,0)/(n.filter(a=>a.hodlUsed>0).length||1),maxHodlUsed:Math.max(...n.map(a=>a.hodlUsed||0))}}let go=null,_o=null;const eI=5e3;function ld(){return{settings:{equityMin:bt.EQUITY_MIN,bondMin:bt.BOND_MIN,cashTarget:bt.CASH_TARGET,duration:bt.DURATION_YEARS,baseSalary:bt.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:Nt.PERSONAL_ALLOWANCE,brl:Nt.BASIC_RATE_LIMIT,hrl:Nt.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:Cs.PROTECTION_MULTIPLIER,consecutiveLimit:bt.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:Cs.HODL_ENABLED,hodlValue:Cs.HODL_VALUE},lastModified:null,checksum:null}}function nI(){return pt()&&nn()}function rI(){go=null,_o=null}function iI(){return go&&_o&&Date.now()-_o<eI?go:ld()}function sI(){return iI().settings}async function oI(){if(!nI())throw new Error("Must be logged in to reset settings");const n=ld();await ME({settings:n.settings,lastModified:new Date().toISOString()}),rI()}function Ta(n={}){const t=sI();return{equityStart:n.equityStart??t.equityMin,bondStart:n.bondStart??t.bondMin,cashStart:n.cashStart??t.cashTarget,equityMin:t.equityMin,bondMin:t.bondMin,cashTarget:t.cashTarget,years:n.years??t.duration,duration:t.duration,baseSalary:t.baseSalary,other:t.other,statePension:t.statePension,statePensionYear:t.statePensionYear,pa:t.pa,brl:t.brl,hrl:t.hrl,taxMode:t.taxMode,protectionMult:t.protectionMult,consecutiveLimit:t.consecutiveLimit,disableProtection:t.disableProtection,hodlEnabled:t.hodlEnabled,hodlValue:t.hodlValue}}function X(n,t=null){const e=Math.abs(n),r=t!==null?t:e<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function ud(n,t){const e=aI(n);t.innerHTML=e}function aI(n){const t=n,e=t.calculationDetails||{};let r="";const i=t.taxEfficient?"success":"warning",s=t.taxEfficient?"Tax-Efficient Mode":"Standard Mode",a=t.taxEfficient?"✓":"!";if(r+=`<div class="decision-mode ${i}">
    <span class="mode-icon">${a}</span>
    <span class="mode-label">${s}</span>
    ${t.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,t.alerts&&t.alerts.length>0){r+='<div class="alerts">';for(const P of t.alerts){const N=cI(P.severity);r+=`<div class="alert ${N}">${P.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${X(t.sippDraw)}</span>`,r+="</div>",t.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${X(t.isaDraw)}</span>`,r+="</div>"),t.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${X(t.other)}</span>`,r+="</div>"),t.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${X(t.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const c=t.sippDraw+t.isaDraw+t.other+t.statePension;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${X(c)}</span>`,r+="</div>",t.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${X(t.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${t.source.toLowerCase()}">${t.source}</div>`,t.source==="Growth"&&(t.drawFromEquity>0||t.drawFromBond>0)&&(r+='<div class="source-breakdown">',t.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${X(t.drawFromEquity)}</div>`),t.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${X(t.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const u=t.equity+t.bond+t.cash,d=t.adjEquityMin+t.adjBondMin+t.adjCashTarget,p=u-d,y=d>0?p/d*100:0;r+='<div class="fund-grid">';const T=t.equity-t.adjEquityMin;r+=Hs("Equity",t.equity,t.adjEquityMin,T);const b=t.bond-t.adjBondMin;r+=Hs("Bond",t.bond,t.adjBondMin,b);const C=t.cash-t.adjCashTarget;r+=Hs("Cash",t.cash,t.adjCashTarget,C),r+="</div>";const k=p>=0?"healthy":"warning";if(r+=`<div class="overall-status ${k}">`,r+=`<span>Total Surplus: ${X(p)}</span>`,r+=`<span>(${y.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-grid">',r+=`<div class="tax-item"><span>Personal Allowance:</span><span>${X(t.pa)}</span></div>`,r+=`<div class="tax-item"><span>Basic Rate Limit:</span><span>${X(t.brl)}</span></div>`,e.taxInfo&&(r+=`<div class="tax-item"><span>Projected Annual Taxable:</span><span>${X(e.taxInfo.annualTaxable)}</span></div>`,r+=`<div class="tax-item"><span>Headroom to BRL:</span><span>${X(e.taxInfo.headroomToBRL)}</span></div>`,r+=`<div class="tax-item"><span>Estimated Annual Tax:</span><span>${X(e.taxInfo.annualTax)}</span></div>`),r+="</div>",r+="</div>",t.rebalanceNeeded&&t.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const P of t.rebalanceActions)r+=`<li>${P}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${e.reason||"Standard calculation based on your settings."}</p>`,!e.hasSufficientIsa&&e.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${X(e.totalIsaNeeded)} in your ISA (${t.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(e,null,2)+"</pre>",r+="</details>",r}function Hs(n,t,e,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${X(t)}</div>
    <div class="fund-min">Min: ${X(e)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${X(r)}</div>
  </div>`}function cI(n){switch(n){case $t.DANGER:return"alert-danger";case $t.WARNING:return"alert-warning";case $t.SUCCESS:return"alert-success";case $t.INFO:default:return"alert-info"}}function lI(){return`
    .decision-mode {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .decision-mode.success {
      background: rgba(46, 160, 67, 0.15);
      border: 1px solid rgba(46, 160, 67, 0.3);
      color: #2ea043;
    }

    .decision-mode.warning {
      background: rgba(240, 198, 116, 0.15);
      border: 1px solid rgba(240, 198, 116, 0.3);
      color: #f0c674;
    }

    .mode-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: currentColor;
      color: #1a1a2e;
      font-size: 14px;
    }

    .protection-badge {
      margin-left: auto;
      padding: 4px 10px;
      background: rgba(248, 81, 73, 0.2);
      border: 1px solid rgba(248, 81, 73, 0.4);
      border-radius: 4px;
      color: #f85149;
      font-size: 12px;
      text-transform: uppercase;
    }

    .alerts {
      margin-bottom: 20px;
    }

    .alert {
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .alert-danger {
      background: rgba(248, 81, 73, 0.15);
      border-left: 4px solid #f85149;
      color: #f85149;
    }

    .alert-warning {
      background: rgba(240, 198, 116, 0.15);
      border-left: 4px solid #f0c674;
      color: #f0c674;
    }

    .alert-success {
      background: rgba(46, 160, 67, 0.15);
      border-left: 4px solid #2ea043;
      color: #2ea043;
    }

    .alert-info {
      background: rgba(126, 184, 218, 0.15);
      border-left: 4px solid #7eb8da;
      color: #7eb8da;
    }

    .recommendation-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
    }

    .recommendation-card h3 {
      margin: 0 0 20px 0;
      color: var(--primary);
    }

    .draw-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }

    .draw-row.primary .label {
      font-weight: 600;
      color: var(--primary);
    }

    .draw-row.primary .value {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary);
    }

    .draw-row.muted {
      color: var(--text-muted);
    }

    .draw-row.total {
      border-bottom: none;
      padding-top: 16px;
    }

    .draw-row.total .label {
      font-weight: 600;
    }

    .draw-row.total .value {
      font-size: 20px;
      font-weight: 700;
      color: var(--success);
    }

    .divider {
      height: 2px;
      background: var(--border);
      margin: 8px 0;
    }

    .boost-indicator {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 12px;
      padding: 8px 12px;
      background: rgba(126, 184, 218, 0.1);
      border-radius: 6px;
      font-size: 14px;
      color: var(--info);
    }

    .source-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    .source-card h4 {
      margin: 0 0 12px 0;
      color: var(--text-muted);
      font-size: 14px;
    }

    .source-label {
      display: inline-block;
      padding: 12px 32px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
    }

    .source-label.growth {
      background: rgba(46, 160, 67, 0.2);
      color: #2ea043;
    }

    .source-label.cash {
      background: rgba(240, 198, 116, 0.2);
      color: #f0c674;
    }

    .source-label.mixed {
      background: rgba(126, 184, 218, 0.2);
      color: #7eb8da;
    }

    .source-breakdown {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 12px;
      color: var(--text-muted);
      font-size: 14px;
    }

    .fund-status {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .fund-status h4 {
      margin: 0 0 16px 0;
    }

    .fund-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .fund-cell {
      padding: 16px;
      border-radius: 8px;
      text-align: center;
    }

    .fund-cell.healthy {
      background: rgba(46, 160, 67, 0.1);
      border: 1px solid rgba(46, 160, 67, 0.2);
    }

    .fund-cell.deficit {
      background: rgba(248, 81, 73, 0.1);
      border: 1px solid rgba(248, 81, 73, 0.2);
    }

    .fund-name {
      font-weight: 600;
      margin-bottom: 8px;
    }

    .fund-current {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .fund-min {
      font-size: 12px;
      color: var(--text-muted);
    }

    .fund-surplus {
      font-size: 14px;
      margin-top: 8px;
    }

    .fund-cell.healthy .fund-surplus {
      color: #2ea043;
    }

    .fund-cell.deficit .fund-surplus {
      color: #f85149;
    }

    .overall-status {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 16px;
      padding: 12px;
      border-radius: 8px;
    }

    .overall-status.healthy {
      background: rgba(46, 160, 67, 0.1);
      color: #2ea043;
    }

    .overall-status.warning {
      background: rgba(248, 81, 73, 0.1);
      color: #f85149;
    }

    .tax-info, .rebalance-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .tax-info h4, .rebalance-card h4 {
      margin: 0 0 16px 0;
    }

    .tax-grid {
      display: grid;
      gap: 8px;
    }

    .tax-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
    }

    .tax-item:last-child {
      border-bottom: none;
    }

    .rebalance-card ul {
      margin: 0;
      padding-left: 20px;
    }

    .rebalance-card li {
      margin-bottom: 8px;
      color: var(--text-muted);
    }

    .mode-explanation {
      background: var(--card-alt);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .mode-explanation h4 {
      margin: 0 0 12px 0;
      color: var(--primary);
    }

    .mode-explanation p {
      margin: 0 0 8px 0;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .isa-warning {
      color: var(--warning) !important;
    }

    .debug-section {
      margin-top: 20px;
      padding: 16px;
      background: var(--card-alt);
      border-radius: 8px;
    }

    .debug-section summary {
      cursor: pointer;
      color: var(--text-muted);
      font-size: 14px;
    }

    .debug-section pre {
      margin-top: 16px;
      padding: 16px;
      background: var(--card);
      border-radius: 6px;
      overflow-x: auto;
      font-size: 12px;
      color: var(--text-muted);
    }
  `}const uI={currentDecision:null,hasUnsavedChanges:!1,activeTab:"decision"};function hI(n){try{const t=GE(n);uI.currentDecision=t;const e=document.getElementById("decisionOutput");return e&&ud(t,e),t}catch(t){return console.error("Decision calculation error:",t),mI("Failed to calculate decision: "+t.message),null}}function dI(n={}){const t=Ta(n),e=JE(t),r=cd(e);return{results:e,stats:r,config:t}}function fI(n={}){const t=Ta(n),e=XE(t),r=cd(e);return{results:e,stats:r,config:t}}function pI(n={}){const t=Ta(n),e={};for(const[r,i]of Object.entries(Qd))e[r]={...i,result:ZE(t,i)};return e}function mI(n){console.error(n),alert(n)}let yr=null,zs=null;function gI(n,t=null){yr=n,zs=t,IE(),TE(e=>{Bl(),zs&&zs(e)}),Bl()}function Bl(){if(yr){if(!pt()){yr.innerHTML=`
      <div class="auth-panel auth-not-configured">
        <p class="text-muted">Cloud sync not configured</p>
        <small>Sign in required to save data</small>
      </div>
    `;return}nn()?_I():yI()}}function _I(){var t,e,r,i;const n=PE();yr.innerHTML=`
    <div class="auth-panel auth-logged-in">
      <div class="user-info">
        ${n.photoURL?`<img src="${n.photoURL}" alt="Profile" class="user-avatar" />`:`<div class="user-avatar-placeholder">${((e=(t=n.displayName)==null?void 0:t.charAt(0))==null?void 0:e.toUpperCase())||"U"}</div>`}
        <div class="user-details">
          <span class="user-name">${n.displayName}</span>
          <span class="user-email">${n.email}</span>
        </div>
      </div>
      <div class="auth-actions">
        <button type="button" class="btn btn-sm btn-outline-secondary" id="auth-logout">
          Sign Out
        </button>
        <button type="button" class="btn btn-sm btn-outline-danger" id="auth-wipe" title="Reset all data">
          Reset Data
        </button>
      </div>
      <div class="sync-status">
        <span class="sync-indicator sync-connected"></span>
        <small>Synced to cloud</small>
      </div>
    </div>
  `,(r=document.getElementById("auth-logout"))==null||r.addEventListener("click",wI),(i=document.getElementById("auth-wipe"))==null||i.addEventListener("click",AI)}function yI(){yr.innerHTML=`
    <div class="auth-panel auth-logged-out">
      <div class="auth-tabs">
        <button type="button" class="auth-tab active" data-tab="login">Sign In</button>
        <button type="button" class="auth-tab" data-tab="signup">Sign Up</button>
      </div>

      <div id="auth-tab-content">
        <!-- Login form (default) -->
        <form id="auth-login-form" class="auth-form">
          <div class="form-group">
            <input type="email" id="login-email" class="form-control" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="password" id="login-password" class="form-control" placeholder="Password" required />
          </div>
          <div id="login-error" class="auth-error"></div>
          <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          <button type="button" id="forgot-password" class="btn btn-link btn-sm">Forgot password?</button>
        </form>
      </div>

      <div class="auth-divider">
        <span>or</span>
      </div>

      <button type="button" id="google-signin" class="btn btn-outline-secondary btn-block google-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" class="google-icon">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Sign in with Google
      </button>

      <p class="auth-note">
        <small>Sign in to sync your data across devices</small>
      </p>
    </div>
  `,vI()}function vI(){var n,t,e;document.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>EI(r.dataset.tab))}),(n=document.getElementById("auth-login-form"))==null||n.addEventListener("submit",hd),(t=document.getElementById("forgot-password"))==null||t.addEventListener("click",dd),(e=document.getElementById("google-signin"))==null||e.addEventListener("click",TI)}function EI(n){var e,r,i;document.querySelectorAll(".auth-tab").forEach(s=>{s.classList.toggle("active",s.dataset.tab===n)});const t=document.getElementById("auth-tab-content");t&&(n==="signup"?(t.innerHTML=`
      <form id="auth-signup-form" class="auth-form">
        <div class="form-group">
          <input type="text" id="signup-name" class="form-control" placeholder="Display Name" required />
        </div>
        <div class="form-group">
          <input type="email" id="signup-email" class="form-control" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input type="password" id="signup-password" class="form-control" placeholder="Password (min 6 chars)" required minlength="6" />
        </div>
        <div id="signup-error" class="auth-error"></div>
        <button type="submit" class="btn btn-primary btn-block">Create Account</button>
      </form>
    `,(e=document.getElementById("auth-signup-form"))==null||e.addEventListener("submit",II)):(t.innerHTML=`
      <form id="auth-login-form" class="auth-form">
        <div class="form-group">
          <input type="email" id="login-email" class="form-control" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input type="password" id="login-password" class="form-control" placeholder="Password" required />
        </div>
        <div id="login-error" class="auth-error"></div>
        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
        <button type="button" id="forgot-password" class="btn btn-link btn-sm">Forgot password?</button>
      </form>
    `,(r=document.getElementById("auth-login-form"))==null||r.addEventListener("submit",hd),(i=document.getElementById("forgot-password"))==null||i.addEventListener("click",dd)))}async function hd(n){var i,s;n.preventDefault();const t=(i=document.getElementById("login-email"))==null?void 0:i.value,e=(s=document.getElementById("login-password"))==null?void 0:s.value,r=document.getElementById("login-error");if(!(!t||!e))try{r.textContent="",r.style.display="none",await AE(t,e)}catch(a){console.error("Login error:",a),r.textContent=ss(a.code),r.style.display="block"}}async function II(n){var s,a,c;n.preventDefault();const t=(s=document.getElementById("signup-name"))==null?void 0:s.value,e=(a=document.getElementById("signup-email"))==null?void 0:a.value,r=(c=document.getElementById("signup-password"))==null?void 0:c.value,i=document.getElementById("signup-error");if(!(!t||!e||!r))try{i.textContent="",i.style.display="none",await wE(e,r,t)}catch(u){console.error("Signup error:",u),i.textContent=ss(u.code),i.style.display="block"}}async function TI(){try{await bE()}catch(n){console.error("Google sign-in error:",n),alert(ss(n.code))}}async function wI(){try{await RE()}catch(n){console.error("Logout error:",n),alert("Failed to sign out. Please try again.")}}async function dd(){var t;const n=(t=document.getElementById("login-email"))==null?void 0:t.value;if(!n){alert("Please enter your email address first.");return}try{await SE(n),alert("Password reset email sent. Check your inbox.")}catch(e){console.error("Password reset error:",e),alert(ss(e.code))}}async function AI(){if(!(!confirm(`Are you sure you want to RESET ALL DATA?

This will permanently delete:
- All your decision history
- All settings
- All tax year configurations

This action CANNOT be undone!`)||!confirm(`FINAL WARNING!

All your pension planning data will be permanently deleted.

Are you absolutely sure?`)))try{nn()&&(await OE(),await zE(),await oI()),alert("All data has been reset to defaults."),window.location.reload()}catch(e){console.error("Wipe data error:",e),alert("Failed to reset data. Please try again.")}}function ss(n){return{"auth/email-already-in-use":"This email is already registered.","auth/invalid-email":"Please enter a valid email address.","auth/operation-not-allowed":"This sign-in method is not enabled.","auth/weak-password":"Password must be at least 6 characters.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Invalid email or password.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in cancelled.","auth/popup-blocked":"Pop-up blocked. Please allow pop-ups and try again."}[n]||"An error occurred. Please try again."}function bI(){return`
    .auth-panel {
      padding: 1rem;
      border-radius: 8px;
      background: var(--bg-secondary, #1e1e2e);
    }

    .auth-not-configured {
      text-align: center;
      opacity: 0.7;
    }

    .auth-logged-in .user-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .user-avatar-placeholder {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #7c3aed);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .user-details {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-weight: 600;
    }

    .user-email {
      font-size: 0.8rem;
      opacity: 0.7;
    }

    .auth-actions {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .sync-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .sync-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .sync-connected {
      background: #2ea043;
    }

    .auth-tabs {
      display: flex;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--border-color, #333);
    }

    .auth-tab {
      flex: 1;
      padding: 0.5rem;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.2s;
    }

    .auth-tab.active {
      opacity: 1;
      border-bottom: 2px solid var(--primary-color, #7c3aed);
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .auth-error {
      color: #f85149;
      font-size: 0.85rem;
      display: none;
    }

    .auth-divider {
      display: flex;
      align-items: center;
      margin: 1rem 0;
    }

    .auth-divider::before,
    .auth-divider::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid var(--border-color, #333);
    }

    .auth-divider span {
      padding: 0 0.5rem;
      font-size: 0.85rem;
      opacity: 0.6;
    }

    .google-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .google-icon {
      flex-shrink: 0;
    }

    .auth-note {
      text-align: center;
      margin-top: 1rem;
      opacity: 0.6;
    }
  `}const fd=document.createElement("style");fd.textContent=lI()+bI();document.head.appendChild(fd);gI(document.getElementById("authPanel"),n=>{n?(console.log("Logged in as:",n.email),wa(),Aa()):console.log("Logged out")});document.getElementById("versionDisplay").textContent=`v${ql}`;document.getElementById("entryMonth").value=tf();let Mi=null;document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&wa(),n.dataset.tab==="taxyears"&&Aa()})});window.handleDecisionSubmit=function(n){n.preventDefault();const t={date:document.getElementById("entryMonth").value,equity:parseFloat(document.getElementById("entryEquity").value)||0,bond:parseFloat(document.getElementById("entryBond").value)||0,cash:parseFloat(document.getElementById("entryCash").value)||0,isaBalance:parseFloat(document.getElementById("entryISA").value)||0};try{Mi=hI(t);const e=document.getElementById("decisionOutput");ud(Mi,e),document.getElementById("saveBtn").disabled=!1}catch(e){console.error("Decision error:",e),alert("Error calculating decision: "+e.message)}};window.saveCurrentDecision=async function(){if(!Mi){alert("No decision to save");return}if(!nn()){alert("Please sign in to save decisions");return}try{await KE(Mi),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};window.runMonteCarloUI=function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("stressResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',setTimeout(()=>{try{const{results:t,stats:e}=dI(n);pd(e,"Monte Carlo (1000 runs)")}catch(t){console.error("Simulation error:",t),document.getElementById("stressResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runHistoricalUI=function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("stressResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',setTimeout(()=>{try{const{results:t,stats:e}=fI(n);pd(e,"Historical Analysis")}catch(t){console.error("Simulation error:",t),document.getElementById("stressResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runScenariosUI=function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("stressResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',setTimeout(()=>{try{const t=pI(n);RI(t)}catch(t){console.error("Scenario error:",t),document.getElementById("stressResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};function pd(n,t){const e=n.successRate>=90?"success":n.successRate>=80?"warning":"danger";let r=`
        <div class="card">
          <h2>${t}</h2>
          <div class="grid-4" style="margin-bottom: 24px;">
            <div class="stat-box ${e}">
              <div class="stat-value">${n.successRate.toFixed(1)}%</div>
              <div class="stat-label">Success Rate</div>
            </div>
            <div class="stat-box danger">
              <div class="stat-value">${n.failCount}</div>
              <div class="stat-label">Failures</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${n.p10Years.toFixed(1)}</div>
              <div class="stat-label">10th %ile Years</div>
            </div>
            <div class="stat-box success">
              <div class="stat-value">${X(n.medianFinal)}</div>
              <div class="stat-label">Median Final</div>
            </div>
          </div>

          <div class="grid-4">
            <div class="stat-box">
              <div class="stat-value">${n.runsWithProtection}</div>
              <div class="stat-label">Runs w/ Protection</div>
            </div>
            <div class="stat-box warning">
              <div class="stat-value">${n.avgProtMonths.toFixed(0)}</div>
              <div class="stat-label">Avg Protection Mo</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${n.maxConsecutive}</div>
              <div class="stat-label">Max Consecutive</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${X(n.avgFinal)}</div>
              <div class="stat-label">Avg Final (success)</div>
            </div>
          </div>

          <div class="alert ${e==="success"?"alert-success":e==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById("stressResults").innerHTML=r}function RI(n){let t='<div class="card"><h2>Scenario Analysis</h2>';for(const[e,r]of Object.entries(n)){const i=r.result,s=i.failed?"danger":"success";t+=`
          <div class="history-item" style="border-left: 4px solid ${r.color};">
            <div>
              <div class="history-date">${r.name}</div>
              <div class="history-details">
                Protection: ${i.protMonths} mo | Max streak: ${i.maxConsec} mo
                ${i.hodlUsed>0?` | HODL used: ${X(i.hodlUsed)}`:""}
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 24px; color: var(--${s});">${i.years.toFixed(1)} yrs</div>
              <div style="font-size: 12px; color: var(--${s});">${i.failed?"FAILED":"OK"}</div>
            </div>
          </div>
        `}t+="</div>",document.getElementById("stressResults").innerHTML=t}function wa(){const n=ad({sortDesc:!0,limit:50}),t=document.getElementById("historyList");if(n.length===0){t.innerHTML='<p class="loading">No history entries yet.</p>';return}let e="";for(const r of n){const i=r.inProtection?"protection":"";e+=`
          <div class="history-item ${i}">
            <div>
              <div class="history-date">${r.date} (${r.taxYear})</div>
              <div class="history-details">
                SIPP: ${X(r.sipp||0)} |
                Source: ${r.source} |
                Total: ${X(r.total||0)}
                ${r.inProtection?" | PROTECTION":""}
              </div>
            </div>
            <div>
              <button class="secondary" style="padding: 8px 12px; font-size: 12px;" onclick="deleteHistoryEntry('${r.date}')">Delete</button>
            </div>
          </div>
        `}t.innerHTML=e}window.deleteHistoryEntry=async function(n){if(confirm(`Delete entry for ${n}?`)){if(!nn()){alert("Please sign in to delete entries");return}try{await jE(n),wa()}catch(t){console.error("Delete error:",t),alert("Error deleting: "+t.message)}}};function Aa(){const n=qE(),t=document.getElementById("taxYearsList"),e=Object.keys(n).sort().reverse();if(e.length===0){t.innerHTML='<p class="loading">No tax years configured.</p>';return}let r="<table><thead><tr><th>Tax Year</th><th>PA</th><th>BRL</th><th>Other</th><th>State Pension</th><th>Actions</th></tr></thead><tbody>";for(const i of e){const s=n[i];r+=`
          <tr>
            <td><strong>${i}</strong></td>
            <td>${X(s.pa||12570)}</td>
            <td>${X(s.brl||50270)}</td>
            <td>${X(s.other||0)}</td>
            <td>${X(s.statePension||0)}</td>
            <td><button class="secondary" style="padding: 6px 12px; font-size: 12px;" onclick="editTaxYear('${i}')">Edit</button></td>
          </tr>
        `}r+="</tbody></table>",t.innerHTML=r}window.addTaxYear=async function(){if(!nn()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await BE(n,{}),Aa()}catch(t){console.error("Save error:",t),alert("Error saving: "+t.message)}};window.editTaxYear=function(n){Ea(n),alert("Edit functionality: Would open form for "+n)};console.log("Pension Planner v"+ql+" loaded");
