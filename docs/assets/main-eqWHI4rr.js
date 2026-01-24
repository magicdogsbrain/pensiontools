(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function cp(n){const t=(n.sippDraw||0)+(n.other||0)+(n.statePension||0),e=t*12,r=n.pa||12570,i=n.brl||50270,s=n.hrl||125140;let a=0;e>r&&(e<=i?a=(e-r)*.2:e<=s?a=(i-r)*.2+(e-i)*.4:a=(i-r)*.2+(s-i)*.4+(e-s)*.45);const l=a/12,u=t-l+(n.isaDraw||0);return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget,source:n.source,dEquity:n.drawFromEquity||0,dBond:n.drawFromBond||0,dCash:n.drawFromCash||0,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,pa:r,brl:i,monthlyTax:l,monthlyNet:u,mode:n.taxEfficient?"Tax-Efficient":"Standard",inProtection:n.inProtection,reason:n.protectionReason||"",consecutiveDraws:n.consecutiveCashDraws||0,boostAmount:n.boostAmount,boostEligible:n.boostEligible||!1,rebal:n.rebalanceActions?n.rebalanceActions.join("; "):"",yearlyIsaSavingsAllocation:n.yearlyIsaSavingsAllocation||0,isaSavingsUsedThisMonth:n.isaDraw||0,cumulativeIsaSavingsUsed:n.cumulativeIsaSavingsUsed||0,taxPaidMonthly:l,taxPaidYTD:n.taxPaidYTD||l,taxProjectedAnnual:n.taxProjectedAnnual||a,taxSavedMonthly:n.taxSavedMonthly||0,taxSavedYTD:n.taxSavedYTD||0,taxSavedProjectedAnnual:n.taxSavedProjectedAnnual||0,isTaxEfficientYear:n.isTaxEfficientYear??!0,protectionInducedTaxEfficiency:n.protectionInducedTaxEfficiency||!1}}const ss={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"},Zu="6.0.0",ne={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},td={ASSUMED_CPI:.025,OTHER_INCOME_CAP:.04},Qt={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},ko={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},mi={1928:.4781,1929:-.172,1930:-.338,1931:-.527,1932:-.231,1933:.669,1934:.041,1935:.3879,1936:.2492,1937:-.3839,1938:.2846,1939:-.0278,1940:-.1278,1941:-.1552,1942:.0782,1943:.1382,1944:.1226,1945:.2665,1946:-.0818,1947:.0225,1948:-.0246,1949:.1279,1950:.1787,1951:.1463,1952:.0837,1953:-.0377,1954:.4399,1955:.2084,1956:.0262,1957:-.1278,1958:.3396,1959:.1612,1960:-.0912,1961:.1889,1962:-.1081,1963:.1715,1964:.1478,1965:.1058,1966:-.1858,1967:.1506,1968:.0457,1969:-.1524,1970:.0482,1971:.0627,1972:.1476,1973:-.1652,1974:-.2777,1975:.3815,1976:.1774,1977:-.1271,1978:-.0303,1979:.0414,1980:.1493,1981:-.0909,1982:.1976,1983:.2027,1984:-.0365,1985:.2778,1986:.2278,1987:.0227,1988:.1185,1989:.2697,1990:-.0456,1991:.2013,1992:.044,1993:.1372,1994:.0218,1995:.3345,1996:.2601,1997:.2264,1998:.1627,1999:.2516,2e3:-.0617,2001:-.0727,2002:-.1679,2003:.2525,2004:.0333,2005:-.0061,2006:.1618,2007:.0648,2008:-.3355,2009:.1882,2010:.1102,2011:.0556,2012:.0728,2013:.2665,2014:.0775,2015:-.023,2016:.1342,2017:.2511,2018:-.0583,2019:.2234,2020:.0726,2021:.1873,2022:-.0878,2023:.1399,2024:.1299},Aa={1928:-.012,1929:.002,1930:-.06,1931:-.094,1932:-.103,1933:.005,1934:.021,1935:.03,1936:.014,1937:.028,1938:-.02,1939:-.014,1940:.01,1941:.099,1942:.09,1943:.03,1944:.023,1945:.023,1946:.186,1947:.087,1948:.03,1949:-.02,1950:.059,1951:.06,1952:.009,1953:.006,1954:-.007,1955:.004,1956:.03,1957:.028,1958:.017,1959:.015,1960:.014,1961:.007,1962:.013,1963:.017,1964:.01,1965:.019,1966:.034,1967:.028,1968:.046,1969:.062,1970:.055,1971:.033,1972:.034,1973:.087,1974:.124,1975:.069,1976:.048,1977:.067,1978:.09,1979:.133,1980:.125,1981:.089,1982:.038,1983:.038,1984:.04,1985:.038,1986:.011,1987:.044,1988:.044,1989:.046,1990:.061,1991:.03,1992:.029,1993:.027,1994:.026,1995:.025,1996:.034,1997:.017,1998:.016,1999:.027,2e3:.034,2001:.016,2002:.024,2003:.019,2004:.033,2005:.034,2006:.025,2007:.041,2008:.001,2009:.027,2010:.015,2011:.03,2012:.017,2013:.015,2014:.008,2015:.007,2016:.021,2017:.021,2018:.019,2019:.023,2020:.012,2021:.07,2022:.065,2023:.032,2024:.029},up={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}},fr={START_MONTH:4,START_DAY:6};function dp(n,t,e,r=ne.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=t;if(n>ne.PA_TAPER_THRESHOLD){const f=(n-ne.PA_TAPER_THRESHOLD)*ne.PA_TAPER_RATE;i=Math.max(0,t-f)}const s=Math.max(0,n-i),a=Math.max(0,e-i),l=r-e;let u=0;const h=Math.min(s,a);if(u+=h*ne.BASIC_RATE,s>a){const f=Math.min(s-a,l);u+=f*ne.HIGHER_RATE}if(s>a+l){const f=s-a-l;u+=f*ne.ADDITIONAL_RATE}return u}function ed(n){const t=typeof n=="string"?new Date(n):n,e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();if(r<fr.START_MONTH||r===fr.START_MONTH&&i<fr.START_DAY){const s=e-1;return`${String(s).slice(-2)}/${String(e).slice(-2)}`}return`${String(e).slice(-2)}/${String(e+1).slice(-2)}`}function hp(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function nd(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1)}function fp(n){const e=(typeof n=="string"?new Date(n):n).getMonth()+1;return e>=fr.START_MONTH?12-(e-fr.START_MONTH):fr.START_MONTH-e}function pp(n){const{baseSalary:t,cumulativeInflation:e,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:l=0,pa:u,brl:h,hrl:f,taxMode:m="inflates"}=n,_=m==="frozen"?u:u*e,T=m==="frozen"?h:h*e,S=m==="frozen"?f:f*e,R=t*e,b=mp(i,r),k=l>=a?s*e:0,D=b+k,L=Math.max(0,T-D),z=Math.max(0,R-D),V=Math.min(L,z);return{pa:_,brl:T,hrl:S,targetGross:R,other:b,statePension:k,fixedIncome:D,annualSippDraw:V,monthlySippDraw:V/12,sippPlusfixedAtBRL:L+D===T}}function mp(n,t,e=td.OTHER_INCOME_CAP){let r=n;for(const i of t)r*=1+Math.min(i,e);return r}function gp(n,t,e=.025){const r=[],i=[];for(let s=0;s<=t;s++){s>0&&i.push(e);const a=Math.pow(1+e,s),l=pp({baseSalary:n.baseSalary,cumulativeInflation:a,yearlyInflation:[...i],other:n.other,statePension:n.statePension,statePensionYear:n.statePensionYear,yearNumber:s,pa:n.pa,brl:n.brl,hrl:n.hrl,taxMode:n.taxMode}),u=l.annualSippDraw+l.other+l.statePension,h=dp(u,l.pa,l.brl,l.hrl);r.push({year:s,brl:l.brl,other:l.other,statePension:l.statePension,sippDraw:l.annualSippDraw,totalTaxable:u,tax:h,netIncome:u-h})}return r}function pr(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function yp(n,t,e){const r=pr(n.equityMin,t,n.duration,e,!0),i=pr(n.bondMin,t,n.duration,e,!0),s=pr(n.cashTarget,t,n.duration,e,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function vp(n,t=td.ASSUMED_CPI){const e=[];for(let r=0;r<=n.duration;r++){const i=Math.pow(1+t,r),s=yp(n,r,i);e.push({year:r,cumulativeInflation:i,equityMin:s.equity,bondMin:s.bond,cashTarget:s.cash,totalMin:s.total})}return e}function Sa(n){let t=n;return function(){return t=Math.sin(t)*1e4,t-Math.floor(t)}}function Zr(n,t,e){const r=e(),i=e(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+t*s}function rd(n){const t=JSON.stringify(n);let e=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e.toString(16)}var xc={};/**
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
 */const id=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},_p=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,T=h&63;u||(T=64,a||(_=64)),r.push(e[f],e[m],e[_],e[T])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(id(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_p(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const m=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new wp;const _=s<<2|l>>4;if(r.push(_),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const S=h<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ep=function(n){const t=id(n);return sd.encodeByteArray(t,!0)},Es=function(n){return Ep(n).replace(/\./g,"")},od=function(n){try{return sd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>Ip().__FIREBASE_DEFAULTS__,Tp=()=>{if(typeof process>"u"||typeof xc>"u")return;const n=xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ap=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&od(n[1]);return t&&JSON.parse(t)},zs=()=>{try{return bp()||Tp()||Ap()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ad=n=>{var t,e;return(e=(t=zs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Sp=n=>{const t=ad(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ld=()=>{var n;return(n=zs())===null||n===void 0?void 0:n.config},cd=n=>{var t;return(t=zs())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class xp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Rp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Es(JSON.stringify(e)),Es(JSON.stringify(a)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function Cp(){var n;const t=(n=zs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Np(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lp(){return!Cp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Op(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Bp="FirebaseError";class Ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Bp,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Fp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ue(i,l,r)}}function Fp(n,t){return n.replace(zp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const zp=/\{\$([^}]+)}/g;function Up(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Is(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],a=t[i];if(Rc(s)&&Rc(a)){if(!Is(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Rc(n){return n!==null&&typeof n=="object"}/**
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
 */function xi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ei(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ni(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function $p(n,t){const e=new qp(n,t);return e.subscribe.bind(e)}class qp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");jp(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Mo),i.error===void 0&&(i.error=Mo),i.complete===void 0&&(i.complete=Mo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Mo(){}/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class zn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class Hp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new xp;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yp(t))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Dn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dn){return this.instances.has(t)}getOptions(t=Dn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dn){return this.component?this.component.multipleInstances?t:Dn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wp(n){return n===Dn?void 0:n}function Yp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Kp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Qp=Z.INFO,Xp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Jp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Xp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xa{constructor(t){this.name=t,this._logLevel=Qp,this._logHandler=Jp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const Zp=(n,t)=>t.some(e=>n instanceof e);let Pc,Cc;function tm(){return Pc||(Pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function em(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ud=new WeakMap,Jo=new WeakMap,dd=new WeakMap,Do=new WeakMap,Ra=new WeakMap;function nm(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(on(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ud.set(e,n)}).catch(()=>{}),Ra.set(t,n),t}function rm(n){if(Jo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Jo.set(n,t)}let Zo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Jo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||dd.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return on(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function im(n){Zo=n(Zo)}function sm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(No(this),t,...e);return dd.set(r,t.sort?t.sort():[t]),on(r)}:em().includes(n)?function(...t){return n.apply(No(this),t),on(ud.get(this))}:function(...t){return on(n.apply(No(this),t))}}function om(n){return typeof n=="function"?sm(n):(n instanceof IDBTransaction&&rm(n),Zp(n,tm())?new Proxy(n,Zo):n)}function on(n){if(n instanceof IDBRequest)return nm(n);if(Do.has(n))return Do.get(n);const t=om(n);return t!==n&&(Do.set(n,t),Ra.set(t,n)),t}const No=n=>Ra.get(n);function am(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,t),l=on(a);return r&&a.addEventListener("upgradeneeded",u=>{r(on(a.result),u.oldVersion,u.newVersion,on(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const lm=["get","getKey","getAll","getAllKeys","count"],cm=["put","add","delete","clear"],Lo=new Map;function kc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Lo.get(t))return Lo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=cm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lm.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),i&&u.done]))[0]};return Lo.set(t,s),s}im(n=>({...n,get:(t,e,r)=>kc(t,e)||n.get(t,e,r),has:(t,e)=>!!kc(t,e)||n.has(t,e)}));/**
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
 */class um{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dm(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ta="@firebase/app",Mc="0.10.13";/**
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
 */const Ve=new xa("@firebase/app"),hm="@firebase/app-compat",fm="@firebase/analytics-compat",pm="@firebase/analytics",mm="@firebase/app-check-compat",gm="@firebase/app-check",ym="@firebase/auth",vm="@firebase/auth-compat",_m="@firebase/database",wm="@firebase/data-connect",Em="@firebase/database-compat",Im="@firebase/functions",bm="@firebase/functions-compat",Tm="@firebase/installations",Am="@firebase/installations-compat",Sm="@firebase/messaging",xm="@firebase/messaging-compat",Rm="@firebase/performance",Pm="@firebase/performance-compat",Cm="@firebase/remote-config",km="@firebase/remote-config-compat",Mm="@firebase/storage",Dm="@firebase/storage-compat",Nm="@firebase/firestore",Lm="@firebase/vertexai-preview",Vm="@firebase/firestore-compat",Om="firebase",Bm="10.14.1";/**
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
 */const ea="[DEFAULT]",Fm={[ta]:"fire-core",[hm]:"fire-core-compat",[pm]:"fire-analytics",[fm]:"fire-analytics-compat",[gm]:"fire-app-check",[mm]:"fire-app-check-compat",[ym]:"fire-auth",[vm]:"fire-auth-compat",[_m]:"fire-rtdb",[wm]:"fire-data-connect",[Em]:"fire-rtdb-compat",[Im]:"fire-fn",[bm]:"fire-fn-compat",[Tm]:"fire-iid",[Am]:"fire-iid-compat",[Sm]:"fire-fcm",[xm]:"fire-fcm-compat",[Rm]:"fire-perf",[Pm]:"fire-perf-compat",[Cm]:"fire-rc",[km]:"fire-rc-compat",[Mm]:"fire-gcs",[Dm]:"fire-gcs-compat",[Nm]:"fire-fst",[Vm]:"fire-fst-compat",[Lm]:"fire-vertex","fire-js":"fire-js",[Om]:"fire-js-all"};/**
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
 */const bs=new Map,zm=new Map,na=new Map;function Dc(n,t){try{n.container.addComponent(t)}catch(e){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Er(n){const t=n.name;if(na.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;na.set(t,n);for(const e of bs.values())Dc(e,n);for(const e of zm.values())Dc(e,n);return!0}function Pa(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function pe(n){return n.settings!==void 0}/**
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
 */const Um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Si("app","Firebase",Um);/**
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
 */class $m{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=Bm;function hd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ea,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(e||(e=ld()),!e)throw an.create("no-options");const s=bs.get(i);if(s){if(Is(e,s.options)&&Is(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const a=new Gp(i);for(const u of na.values())a.addComponent(u);const l=new $m(e,r,a);return bs.set(i,l),l}function fd(n=ea){const t=bs.get(n);if(!t&&n===ea&&ld())return hd();if(!t)throw an.create("no-app",{appName:n});return t}function ln(n,t,e){var r;let i=(r=Fm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(l.join(" "));return}Er(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const qm="firebase-heartbeat-database",jm=1,gi="firebase-heartbeat-store";let Vo=null;function pd(){return Vo||(Vo=am(qm,jm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gi)}catch(e){console.warn(e)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),Vo}async function Hm(n){try{const e=(await pd()).transaction(gi),r=await e.objectStore(gi).get(md(n));return await e.done,r}catch(t){if(t instanceof Ue)Ve.warn(t.message);else{const e=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ve.warn(e.message)}}}async function Nc(n,t){try{const r=(await pd()).transaction(gi,"readwrite");await r.objectStore(gi).put(t,md(n)),await r.done}catch(e){if(e instanceof Ue)Ve.warn(e.message);else{const r=an.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ve.warn(r.message)}}}function md(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wm=1024,Ym=30*24*60*60*1e3;class Gm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Ym}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ve.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lc(),{heartbeatsToSend:r,unsentEntries:i}=Km(this._heartbeatsCache.heartbeats),s=Es(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ve.warn(e),""}}}function Lc(){return new Date().toISOString().substring(0,10)}function Km(n,t=Wm){const e=[];let r=n.slice();for(const i of n){const s=e.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Vc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Vc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Qm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vp()?Op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Vc(n){return Es(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xm(n){Er(new zn("platform-logger",t=>new um(t),"PRIVATE")),Er(new zn("heartbeat",t=>new Gm(t),"PRIVATE")),ln(ta,Mc,n),ln(ta,Mc,"esm2017"),ln("fire-js","")}Xm("");var Jm="firebase",Zm="10.14.1";/**
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
 */ln(Jm,Zm,"app");function Ca(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tg=gd,yd=new Si("auth","Firebase",gd());/**
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
 */const Ts=new xa("@firebase/auth");function eg(n,...t){Ts.logLevel<=Z.WARN&&Ts.warn(`Auth (${Cr}): ${n}`,...t)}function ds(n,...t){Ts.logLevel<=Z.ERROR&&Ts.error(`Auth (${Cr}): ${n}`,...t)}/**
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
 */function ce(n,...t){throw Ma(n,...t)}function me(n,...t){return Ma(n,...t)}function ka(n,t,e){const r=Object.assign(Object.assign({},tg()),{[t]:e});return new Si("auth","Firebase",r).create(t,{appName:n.name})}function Ne(n){return ka(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ng(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ce(n,"argument-error"),ka(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ma(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return yd.create(n,...t)}function W(n,t,...e){if(!n)throw Ma(t,...e)}function ke(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ds(t),new Error(t)}function Oe(n,t){n||ke(t)}/**
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
 */function ra(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rg(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rg()||Mp()||"connection"in navigator)?navigator.onLine:!0}function sg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ri{constructor(t,e){this.shortDelay=t,this.longDelay=e,Oe(e>t,"Short delay should be less than long delay!"),this.isMobile=Pp()||Dp()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Da(n,t){Oe(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class vd{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const og={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ag=new Ri(3e4,6e4);function $e(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Te(n,t,e,r,i={}){return _d(n,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=xi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:t,headers:u},s);return kp()||(h.referrerPolicy="no-referrer"),vd.fetch()(wd(n,n.config.apiHost,e,l),h)})}async function _d(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},og),t);try{const i=new cg(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw os(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw os(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw os(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ka(n,f,h);ce(n,f)}}catch(i){if(i instanceof Ue)throw i;ce(n,"network-request-failed",{message:String(i)})}}async function Pi(n,t,e,r,i={}){const s=await Te(n,t,e,r,i);return"mfaPendingCredential"in s&&ce(n,"multi-factor-auth-required",{_serverResponse:s}),s}function wd(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Da(n.config,i):`${n.config.apiScheme}://${i}`}function lg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),ag.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function os(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=me(n,t,r);return i.customData._tokenResponse=e,i}function Bc(n){return n!==void 0&&n.enterprise!==void 0}class ug{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return lg(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function dg(n,t){return Te(n,"GET","/v2/recaptchaConfig",$e(n,t))}/**
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
 */async function hg(n,t){return Te(n,"POST","/v1/accounts:delete",t)}async function Ed(n,t){return Te(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function ai(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fg(n,t=!1){const e=bt(n),r=await e.getIdToken(t),i=Na(r);W(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ai(Oo(i.auth_time)),issuedAtTime:ai(Oo(i.iat)),expirationTime:ai(Oo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oo(n){return Number(n)*1e3}function Na(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=od(e);return i?JSON.parse(i):(ds("Failed to decode base64 JWT payload"),null)}catch(i){return ds("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fc(n){const t=Na(n);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ir(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ue&&pg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ia{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Ir(n,Ed(e,{idToken:r}));W(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Id(s.providerUserInfo):[],l=yg(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ia(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function gg(n){const t=bt(n);await As(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yg(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Id(n){return n.map(t=>{var{providerId:e}=t,r=Ca(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vg(n,t){const e=await _d(n,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=wd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function _g(n,t){return Te(n,"POST","/v2/accounts:revokeToken",$e(n,t))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Fc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){W(t.length!==0,"internal-error");const e=Fc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await vg(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,a=new mr;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function Xe(n,t){W(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Me{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Ca(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ir(this,this.stsTokenManager.getToken(this.auth,t));return W(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return fg(this,t)}reload(){return gg(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Me(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(Ne(this.auth));const t=await this.getIdToken();return await Ir(this,hg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,a,l,u,h,f;const m=(r=e.displayName)!==null&&r!==void 0?r:void 0,_=(i=e.email)!==null&&i!==void 0?i:void 0,T=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=e.photoURL)!==null&&a!==void 0?a:void 0,R=(l=e.tenantId)!==null&&l!==void 0?l:void 0,b=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=e.createdAt)!==null&&h!==void 0?h:void 0,D=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:L,isAnonymous:z,providerData:V,stsTokenManager:E}=e;W(C&&E,t,"internal-error");const g=mr.fromJSON(this.name,E);W(typeof C=="string",t,"internal-error"),Xe(m,t.name),Xe(_,t.name),W(typeof L=="boolean",t,"internal-error"),W(typeof z=="boolean",t,"internal-error"),Xe(T,t.name),Xe(S,t.name),Xe(R,t.name),Xe(b,t.name),Xe(k,t.name),Xe(D,t.name);const w=new Me({uid:C,auth:t,email:_,emailVerified:L,displayName:m,isAnonymous:z,photoURL:S,phoneNumber:T,tenantId:R,stsTokenManager:g,createdAt:k,lastLoginAt:D});return V&&Array.isArray(V)&&(w.providerData=V.map(v=>Object.assign({},v))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(t,e,r=!1){const i=new mr;i.updateFromServerResponse(e);const s=new Me({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await As(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Id(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new mr;l.updateFromIdToken(r);const u=new Me({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const zc=new Map;function De(n){Oe(n instanceof Function,"Expected a class definition");let t=zc.get(n);return t?(Oe(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,zc.set(n,t),t)}/**
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
 */class bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}bd.type="NONE";const Uc=bd;/**
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
 */function hs(n,t,e){return`firebase:${n}:${t}:${e}`}class gr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=hs("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Me._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new gr(De(Uc),t,r);const i=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||De(Uc);const a=hs(r,t.config.apiKey,t.name);let l=null;for(const h of e)try{const f=await h._get(a);if(f){const m=Me._fromJSON(t,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gr(s,t,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new gr(s,t,r))}}/**
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
 */function $c(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Td(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pd(t))return"Blackberry";if(Cd(t))return"Webos";if(Ad(t))return"Safari";if((t.includes("chrome/")||Sd(t))&&!t.includes("edge/"))return"Chrome";if(Rd(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Td(n=Wt()){return/firefox\//i.test(n)}function Ad(n=Wt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sd(n=Wt()){return/crios\//i.test(n)}function xd(n=Wt()){return/iemobile/i.test(n)}function Rd(n=Wt()){return/android/i.test(n)}function Pd(n=Wt()){return/blackberry/i.test(n)}function Cd(n=Wt()){return/webos/i.test(n)}function La(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wg(n=Wt()){var t;return La(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Eg(){return Np()&&document.documentMode===10}function kd(n=Wt()){return La(n)||Rd(n)||Cd(n)||Pd(n)||/windows phone/i.test(n)||xd(n)}/**
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
 */function Md(n,t=[]){let e;switch(n){case"Browser":e=$c(Wt());break;case"Worker":e=`${$c(Wt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Cr}/${r}`}/**
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
 */class Ig{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bg(n,t={}){return Te(n,"GET","/v2/passwordPolicy",$e(n,t))}/**
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
 */const Tg=6;class Ag{constructor(t){var e,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Tg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Sg{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new Ig(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=De(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ed(this,{idToken:t}),r=await Me._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(pe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await As(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pe(this.app))return Promise.reject(Ne(this));const e=t?bt(t):null;return e&&W(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pe(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(De(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bg(this),e=new Ag(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Si("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await _g(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&De(t)||this._popupRedirectResolver;W(e,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[De(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&eg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qe(n){return bt(n)}class qc{constructor(t){this.auth=t,this.observer=null,this.addObserver=$p(e=>this.observer=e)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xg(n){Us=n}function Dd(n){return Us.loadJS(n)}function Rg(){return Us.recaptchaEnterpriseScript}function Pg(){return Us.gapiScript}function Cg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const kg="recaptcha-enterprise",Mg="NO_RECAPTCHA";class Dg{constructor(t){this.type=kg,this.auth=qe(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{dg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new ug(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Bc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(Mg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!e&&Bc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Rg();u.length!==0&&(u+=l),Dd(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function jc(n,t,e,r=!1){const i=new Dg(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ss(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jc(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function Ng(n,t){const e=Pa(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Is(s,t??{}))return i;ce(i,"already-initialized")}return e.initialize({options:t})}function Lg(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(De);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Vg(n,t,e){const r=qe(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Nd(t),{host:a,port:l}=Og(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bg()}function Nd(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Og(n){const t=Nd(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Hc(a)}}}function Hc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Bg(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Va{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ke("not implemented")}_getIdTokenResponse(t){return ke("not implemented")}_linkToIdToken(t,e){return ke("not implemented")}_getReauthenticationResolver(t){return ke("not implemented")}}async function Fg(n,t){return Te(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function zg(n,t){return Pi(n,"POST","/v1/accounts:signInWithPassword",$e(n,t))}async function Ug(n,t){return Te(n,"POST","/v1/accounts:sendOobCode",$e(n,t))}async function $g(n,t){return Ug(n,t)}/**
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
 */async function qg(n,t){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",$e(n,t))}async function jg(n,t){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",$e(n,t))}/**
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
 */class yi extends Va{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new yi(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new yi(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ss(t,e,"signInWithPassword",zg);case"emailLink":return qg(t,{email:this._email,oobCode:this._password});default:ce(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ss(t,r,"signUpPassword",Fg);case"emailLink":return jg(t,{idToken:e,email:this._email,oobCode:this._password});default:ce(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function yr(n,t){return Pi(n,"POST","/v1/accounts:signInWithIdp",$e(n,t))}/**
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
 */const Hg="http://localhost";class Un extends Va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ce("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Ca(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Un(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return yr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,yr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,yr(t,e)}buildRequest(){const t={requestUri:Hg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=xi(e)}return t}}/**
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
 */function Wg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yg(n){const t=ei(ni(n)).link,e=t?ei(ni(t)).deep_link_id:null,r=ei(ni(n)).deep_link_id;return(r?ei(ni(r)).link:null)||r||e||t||n}class Oa{constructor(t){var e,r,i,s,a,l;const u=ei(ni(t)),h=(e=u.apiKey)!==null&&e!==void 0?e:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Wg((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const e=Yg(t);try{return new Oa(e)}catch{return null}}}/**
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
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(t,e){return yi._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Oa.parseLink(e);return W(r,"argument-error"),yi._fromEmailAndCode(t,r.code,r.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ba{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ci extends Ba{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends Ci{constructor(){super("facebook.com")}static credential(t){return Un._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ze.credential(t.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class Ce extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Un._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ce.credential(e,r)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
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
 */class tn extends Ci{constructor(){super("github.com")}static credential(t){return Un._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class en extends Ci{constructor(){super("twitter.com")}static credential(t,e){return Un._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return en.credential(e,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */async function Gg(n,t){return Pi(n,"POST","/v1/accounts:signUp",$e(n,t))}/**
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
 */class $n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await Me._fromIdTokenResponse(t,r,i),a=Wc(r);return new $n({user:s,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Wc(r);return new $n({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Wc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xs extends Ue{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new xs(t,e,r,i)}}function Ld(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(n,s,t,r):s})}async function Kg(n,t,e=!1){const r=await Ir(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return $n._forOperation(n,"link",r)}/**
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
 */async function Qg(n,t,e=!1){const{auth:r}=n;if(pe(r.app))return Promise.reject(Ne(r));const i="reauthenticate";try{const s=await Ir(n,Ld(r,i,t,n),e);W(s.idToken,r,"internal-error");const a=Na(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),$n._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ce(r,"user-mismatch"),s}}/**
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
 */async function Vd(n,t,e=!1){if(pe(n.app))return Promise.reject(Ne(n));const r="signIn",i=await Ld(n,r,t),s=await $n._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function Xg(n,t){return Vd(qe(n),t)}/**
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
 */async function Od(n){const t=qe(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Jg(n,t,e){const r=qe(n);await Ss(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$g)}async function Zg(n,t,e){if(pe(n.app))return Promise.reject(Ne(n));const r=qe(n),a=await Ss(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Od(n),u}),l=await $n._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ty(n,t,e){return pe(n.app)?Promise.reject(Ne(n)):Xg(bt(n),kr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Od(n),r})}/**
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
 */async function ey(n,t){return Te(n,"POST","/v1/accounts:update",t)}/**
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
 */async function ny(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=bt(n),s={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await Ir(r,ey(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function ry(n,t,e,r){return bt(n).onIdTokenChanged(t,e,r)}function iy(n,t,e){return bt(n).beforeAuthStateChanged(t,e)}function sy(n,t,e,r){return bt(n).onAuthStateChanged(t,e,r)}function oy(n){return bt(n).signOut()}const Rs="__sak";/**
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
 */class Bd{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ay=1e3,ly=10;class Fd extends Bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Eg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ly):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fd.type="LOCAL";const cy=Fd;/**
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
 */class zd extends Bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}zd.type="SESSION";const Ud=zd;/**
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
 */function uy(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class $s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new $s(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(e.origin,s)),u=await uy(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function Fa(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class dy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Fa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ve(){return window}function hy(n){ve().location.href=n}/**
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
 */function $d(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function fy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function py(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function my(){return $d()?self:null}/**
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
 */const qd="firebaseLocalStorageDb",gy=1,Ps="firebaseLocalStorage",jd="fbase_key";class ki{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function qs(n,t){return n.transaction([Ps],t?"readwrite":"readonly").objectStore(Ps)}function yy(){const n=indexedDB.deleteDatabase(qd);return new ki(n).toPromise()}function sa(){const n=indexedDB.open(qd,gy);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ps,{keyPath:jd})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ps)?t(r):(r.close(),await yy(),t(await sa()))})})}async function Yc(n,t,e){const r=qs(n,!0).put({[jd]:t,value:e});return new ki(r).toPromise()}async function vy(n,t){const e=qs(n,!1).get(t),r=await new ki(e).toPromise();return r===void 0?null:r.value}function Gc(n,t){const e=qs(n,!0).delete(t);return new ki(e).toPromise()}const _y=800,wy=3;class Hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>wy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $d()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(my()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await fy(),!this.activeServiceWorker)return;this.sender=new dy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||py()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sa();return await Yc(t,Rs,"1"),await Gc(t,Rs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>vy(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Gc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=qs(i,!1).getAll();return new ki(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hd.type="LOCAL";const Ey=Hd;new Ri(3e4,6e4);/**
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
 */function Wd(n,t){return t?De(t):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class za extends Va{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return yr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return yr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return yr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Iy(n){return Vd(n.auth,new za(n),n.bypassAuthState)}function by(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),Qg(e,new za(n),n.bypassAuthState)}async function Ty(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),Kg(e,new za(n),n.bypassAuthState)}/**
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
 */class Yd{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Iy;case"linkViaPopup":case"linkViaRedirect":return Ty;case"reauthViaPopup":case"reauthViaRedirect":return by;default:ce(this.auth,"internal-error")}}resolve(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ay=new Ri(2e3,1e4);async function Sy(n,t,e){if(pe(n.app))return Promise.reject(me(n,"operation-not-supported-in-this-environment"));const r=qe(n);ng(n,t,Ba);const i=Wd(r,e);return new Nn(r,"signInViaPopup",t,i).executeNotNull()}class Nn extends Yd{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const t=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ay.get())};t()}}Nn.currentPopupAction=null;/**
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
 */const xy="pendingRedirect",fs=new Map;class Ry extends Yd{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=fs.get(this.auth._key());if(!t){try{const r=await Py(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}fs.set(this.auth._key(),t)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Py(n,t){const e=My(t),r=ky(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Cy(n,t){fs.set(n._key(),t)}function ky(n){return De(n._redirectPersistence)}function My(n){return hs(xy,n.config.apiKey,n.name)}async function Dy(n,t,e=!1){if(pe(n.app))return Promise.reject(Ne(n));const r=qe(n),i=Wd(r,t),a=await new Ry(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Ny=10*60*1e3;class Ly{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Vy(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Gd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(me(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ny&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(t))}saveEventToCache(t){this.cachedEventUids.add(Kc(t)),this.lastProcessedEventTime=Date.now()}}function Kc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Gd({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Vy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gd(n);default:return!1}}/**
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
 */async function Oy(n,t={}){return Te(n,"GET","/v1/projects",t)}/**
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
 */const By=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/;async function zy(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Oy(n);for(const e of t)try{if(Uy(e))return}catch{}ce(n,"unauthorized-domain")}function Uy(n){const t=ra(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Fy.test(e))return!1;if(By.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $y=new Ri(3e4,6e4);function Qc(){const n=ve().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function qy(n){return new Promise((t,e)=>{var r,i,s;function a(){Qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qc(),e(me(n,"network-request-failed"))},timeout:$y.get()})}if(!((i=(r=ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ve().gapi)===null||s===void 0)&&s.load)a();else{const l=Cg("iframefcb");return ve()[l]=()=>{gapi.load?a():e(me(n,"network-request-failed"))},Dd(`${Pg()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw ps=null,t})}let ps=null;function jy(n){return ps=ps||qy(n),ps}/**
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
 */const Hy=new Ri(5e3,15e3),Wy="__/auth/iframe",Yy="emulator/auth/iframe",Gy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ky=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qy(n){const t=n.config;W(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Da(t,Yy):`https://${n.config.authDomain}/${Wy}`,r={apiKey:t.apiKey,appName:n.name,v:Cr},i=Ky.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${xi(r).slice(1)}`}async function Xy(n){const t=await jy(n),e=ve().gapi;return W(e,n,"internal-error"),t.open({where:document.body,url:Qy(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=me(n,"network-request-failed"),l=ve().setTimeout(()=>{s(a)},Hy.get());function u(){ve().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zy=500,tv=600,ev="_blank",nv="http://localhost";class Xc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rv(n,t,e,r=Zy,i=tv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Jy),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Wt().toLowerCase();e&&(l=Sd(h)?ev:e),Td(h)&&(t=t||nv,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[T,S])=>`${_}${T}=${S},`,"");if(wg(h)&&l!=="_self")return iv(t||"",l),new Xc(null);const m=window.open(t||"",l,f);W(m,n,"popup-blocked");try{m.focus()}catch{}return new Xc(m)}function iv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const sv="__/auth/handler",ov="emulator/auth/handler",av=encodeURIComponent("fac");async function Jc(n,t,e,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Cr,eventId:i};if(t instanceof Ba){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Up(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(t instanceof Ci){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${av}=${encodeURIComponent(u)}`:"";return`${lv(n)}?${xi(l).slice(1)}${h}`}function lv({config:n}){return n.emulator?Da(n,ov):`https://${n.authDomain}/${sv}`}/**
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
 */const Bo="webStorageSupport";class cv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ud,this._completeRedirectFn=Dy,this._overrideRedirectResult=Cy}async _openPopup(t,e,r,i){var s;Oe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Jc(t,e,r,ra(),i);return rv(t,a,Fa())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Jc(t,e,r,ra(),i);return hy(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Xy(t),r=new Ly(t);return e.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Bo,{type:Bo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bo];a!==void 0&&e(!!a),ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zy(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return kd()||Ad()||La()}}const uv=cv;var Zc="@firebase/auth",tu="1.7.9";/**
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
 */class dv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fv(n){Er(new zn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Md(n)},h=new Sg(r,i,s,u);return Lg(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Er(new zn("auth-internal",t=>{const e=qe(t.getProvider("auth").getImmediate());return(r=>new dv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Zc,tu,hv(n)),ln(Zc,tu,"esm2017")}/**
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
 */const pv=5*60,mv=cd("authIdTokenMaxAge")||pv;let eu=null;const gv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>mv)return;const i=e==null?void 0:e.token;eu!==i&&(eu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yv(n=fd()){const t=Pa(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Ng(n,{popupRedirectResolver:uv,persistence:[Ey,cy,Ud]}),r=cd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=gv(s.toString());iy(e,a,()=>a(e.currentUser)),ry(e,l=>a(l))}}const i=ad("auth");return i&&Vg(e,`http://${i}`),e}function vv(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}xg({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=me("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",vv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fv("Browser");var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,Kd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function w(){}w.prototype=g.prototype,E.D=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(v,I,A){for(var y=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)y[pt-2]=arguments[pt];return g.prototype[I].apply(v,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);var v=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)v[I]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(I=0;16>I;++I)v[I]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],I=E.g[2];var A=E.g[3],y=g+(A^w&(I^A))+v[0]+3614090360&4294967295;g=w+(y<<7&4294967295|y>>>25),y=A+(I^g&(w^I))+v[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(w^A&(g^w))+v[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=w+(g^I&(A^g))+v[3]+3250441966&4294967295,w=I+(y<<22&4294967295|y>>>10),y=g+(A^w&(I^A))+v[4]+4118548399&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(I^g&(w^I))+v[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(w^A&(g^w))+v[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=w+(g^I&(A^g))+v[7]+4249261313&4294967295,w=I+(y<<22&4294967295|y>>>10),y=g+(A^w&(I^A))+v[8]+1770035416&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(I^g&(w^I))+v[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(w^A&(g^w))+v[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=w+(g^I&(A^g))+v[11]+2304563134&4294967295,w=I+(y<<22&4294967295|y>>>10),y=g+(A^w&(I^A))+v[12]+1804603682&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(I^g&(w^I))+v[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(w^A&(g^w))+v[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=w+(g^I&(A^g))+v[15]+1236535329&4294967295,w=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(w^I))+v[1]+4129170786&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^I&(g^w))+v[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^w&(A^g))+v[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(I^A))+v[0]+3921069994&4294967295,w=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(w^I))+v[5]+3593408605&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^I&(g^w))+v[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^w&(A^g))+v[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(I^A))+v[4]+3889429448&4294967295,w=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(w^I))+v[9]+568446438&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^I&(g^w))+v[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^w&(A^g))+v[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(I^A))+v[8]+1163531501&4294967295,w=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(w^I))+v[13]+2850285829&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^I&(g^w))+v[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^w&(A^g))+v[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(I^A))+v[12]+2368359562&4294967295,w=I+(y<<20&4294967295|y>>>12),y=g+(w^I^A)+v[5]+4294588738&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^I)+v[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^w)+v[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=w+(I^A^g)+v[14]+4259657740&4294967295,w=I+(y<<23&4294967295|y>>>9),y=g+(w^I^A)+v[1]+2763975236&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^I)+v[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^w)+v[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=w+(I^A^g)+v[10]+3200236656&4294967295,w=I+(y<<23&4294967295|y>>>9),y=g+(w^I^A)+v[13]+681279174&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^I)+v[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^w)+v[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=w+(I^A^g)+v[6]+76029189&4294967295,w=I+(y<<23&4294967295|y>>>9),y=g+(w^I^A)+v[9]+3654602809&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^I)+v[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^w)+v[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=w+(I^A^g)+v[2]+3299628645&4294967295,w=I+(y<<23&4294967295|y>>>9),y=g+(I^(w|~A))+v[0]+4096336452&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~I))+v[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~w))+v[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=w+(A^(I|~g))+v[5]+4237533241&4294967295,w=I+(y<<21&4294967295|y>>>11),y=g+(I^(w|~A))+v[12]+1700485571&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~I))+v[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~w))+v[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=w+(A^(I|~g))+v[1]+2240044497&4294967295,w=I+(y<<21&4294967295|y>>>11),y=g+(I^(w|~A))+v[8]+1873313359&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~I))+v[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~w))+v[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=w+(A^(I|~g))+v[13]+1309151649&4294967295,w=I+(y<<21&4294967295|y>>>11),y=g+(I^(w|~A))+v[4]+4149444226&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~I))+v[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~w))+v[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=w+(A^(I|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var w=g-this.blockSize,v=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=w;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(v[I++]=E.charCodeAt(A++),I==this.blockSize){i(this,v),I=0;break}}else for(;A<g;)if(v[I++]=E[A++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var w=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=w&255,w/=256;for(this.u(E),E=Array(16),g=w=0;4>g;++g)for(var v=0;32>v;v+=8)E[w++]=this.g[g]>>>v&255;return E};function s(E,g){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function a(E,g){this.h=g;for(var w=[],v=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;v&&A==g||(w[I]=A,v=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return b(h(-E));for(var g=[],w=1,v=0;E>=w;v++)g[v]=E/w|0,w*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return b(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),v=m,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),y=parseInt(E.substring(I,I+A),g);8>A?(A=h(Math.pow(g,A)),v=v.j(A).add(h(y))):(v=v.j(w),v=v.add(h(y)))}return v}var m=u(0),_=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-b(this).m();for(var E=0,g=1,w=0;w<this.g.length;w++){var v=this.i(w);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(R(this))return"-"+b(this).toString(E);for(var g=h(Math.pow(E,6)),w=this,v="";;){var I=L(w,g).g;w=k(w,I.j(g));var A=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=I,S(w))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function R(E){return E.h==-1}n.l=function(E){return E=k(this,E),R(E)?-1:S(E)?0:1};function b(E){for(var g=E.g.length,w=[],v=0;v<g;v++)w[v]=~E.g[v];return new a(w,~E.h).add(_)}n.abs=function(){return R(this)?b(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],v=0,I=0;I<=g;I++){var A=v+(this.i(I)&65535)+(E.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=y>>>16,A&=65535,y&=65535,w[I]=y<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function k(E,g){return E.add(b(g))}n.j=function(E){if(S(this)||S(E))return m;if(R(this))return R(E)?b(this).j(b(E)):b(b(this).j(E));if(R(E))return b(this.j(b(E)));if(0>this.l(T)&&0>E.l(T))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,w=[],v=0;v<2*g;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<E.g.length;I++){var A=this.i(v)>>>16,y=this.i(v)&65535,pt=E.i(I)>>>16,X=E.i(I)&65535;w[2*v+2*I]+=y*X,D(w,2*v+2*I),w[2*v+2*I+1]+=A*X,D(w,2*v+2*I+1),w[2*v+2*I+1]+=y*pt,D(w,2*v+2*I+1),w[2*v+2*I+2]+=A*pt,D(w,2*v+2*I+2)}for(v=0;v<g;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=g;v<2*g;v++)w[v]=0;return new a(w,0)};function D(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function C(E,g){this.g=E,this.h=g}function L(E,g){if(S(g))throw Error("division by zero");if(S(E))return new C(m,m);if(R(E))return g=L(b(E),g),new C(b(g.g),b(g.h));if(R(g))return g=L(E,b(g)),new C(b(g.g),g.h);if(30<E.g.length){if(R(E)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var w=_,v=g;0>=v.l(E);)w=z(w),v=z(v);var I=V(w,1),A=V(v,1);for(v=V(v,2),w=V(w,2);!S(v);){var y=A.add(v);0>=y.l(E)&&(I=I.add(w),A=y),v=V(v,1),w=V(w,1)}return g=k(E,I.j(g)),new C(I,g)}for(I=m;0<=E.l(g);){for(w=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=h(w),y=A.j(g);R(y)||0<y.l(E);)w-=v,A=h(w),y=A.j(g);S(A)&&(A=_),I=I.add(A),E=k(E,y)}return new C(I,E)}n.A=function(E){return L(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],v=0;v<g;v++)w[v]=this.i(v)&E.i(v);return new a(w,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],v=0;v<g;v++)w[v]=this.i(v)|E.i(v);return new a(w,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],v=0;v<g;v++)w[v]=this.i(v)^E.i(v);return new a(w,this.h^E.h)};function z(E){for(var g=E.g.length+1,w=[],v=0;v<g;v++)w[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(w,E.h)}function V(E,g){var w=g>>5;g%=32;for(var v=E.g.length-w,I=[],A=0;A<v;A++)I[A]=0<g?E.i(A+w)>>>g|E.i(A+w+1)<<32-g:E.i(A+w);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Vn=a}).apply(typeof nu<"u"?nu:typeof self<"u"?self:typeof window<"u"?window:{});var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qd,ri,Xd,ms,oa,Jd,Zd,th;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof as=="object"&&as];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function i(o,c){if(c)t:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var x=o[p];if(!(x in d))break t;d=d[x]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,x={next:function(){if(!p&&d<o.length){var P=d++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),o.apply(c,x)}}return function(){return o.apply(c,arguments)}}function _(o,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function T(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,x,P){for(var O=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)O[lt-2]=arguments[lt];return c.prototype[x].apply(p,O)}}function R(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function b(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const x=o.length||0,P=p.length||0;o.length=x+P;for(let O=0;O<P;O++)o[x+O]=p[O]}else o.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(o){return/^[\s\xa0]*$/.test(o)}function C(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var z=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)o[d]=p[d];for(let P=0;P<w.length;P++)d=w[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=gt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class pt{constructor(){this.h=this.g=null}add(c,d){const p=X.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var X=new k(()=>new St,o=>o.reset());class St{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,Mt=!1,gt=new pt,it=()=>{const o=l.Promise.resolve(void 0);ct=()=>{o.then(ue)}};var ue=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var c=X;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Mt=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function ot(o,c){if(q.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(z){t:{try{L(c.nodeName);var x=!0;break t}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:at[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ot.aa.h.call(this)}}S(ot,q);var at={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function zt(o,c,d,p,x){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=x,this.key=++Dt,this.da=this.fa=!1}function Yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _n(o){this.src=o,this.g={},this.h=0}_n.prototype.add=function(o,c,d,p,x){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var O=En(o,c,p,x);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new zt(c,this.src,P,!!p,x),c.fa=d,o.push(c)),c};function wn(o,c){var d=c.type;if(d in o.g){var p=o.g[d],x=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=x)&&Array.prototype.splice.call(p,x,1),P&&(Yt(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function En(o,c,d,p){for(var x=0;x<o.length;++x){var P=o[x];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==p)return x}return-1}var de="closure_lm_"+(1e6*Math.random()|0),je={};function In(o,c,d,p,x){if(Array.isArray(c)){for(var P=0;P<c.length;P++)In(o,c[P],d,p,x);return null}return d=$r(d),o&&o[Ft]?o.K(c,d,h(p)?!!p.capture:!1,x):zr(o,c,d,!1,p,x)}function zr(o,c,d,p,x,P){if(!c)throw Error("Invalid event type");var O=h(x)?!!x.capture:!!x,lt=Xn(o);if(lt||(o[de]=lt=new _n(o)),d=lt.add(c,d,p,O,P),d.proxy)return d;if(p=qi(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)vt||(x=O),x===void 0&&(x=!1),o.addEventListener(c.toString(),p,x);else if(o.attachEvent)o.attachEvent(Ae(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qi(){function o(d){return c.call(o.src,o.listener,d)}const c=We;return o}function He(o,c,d,p,x){if(Array.isArray(c))for(var P=0;P<c.length;P++)He(o,c[P],d,p,x);else p=h(p)?!!p.capture:!!p,d=$r(d),o&&o[Ft]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],d=En(P,d,p,x),-1<d&&(Yt(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Xn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=En(c,d,p,x)),(d=-1<o?c[o]:null)&&Qn(d))}function Qn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ft])wn(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Ae(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Xn(c))?(wn(d,o),d.h==0&&(d.src=null,c[de]=null)):Yt(o)}}}function Ae(o){return o in je?je[o]:je[o]="on"+o}function We(o,c){if(o.da)o=!0;else{c=new ot(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Qn(o),o=d.call(p,c)}return o}function Xn(o){return o=o[de],o instanceof _n?o:null}var Ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function $r(o){return typeof o=="function"?o:(o[Ur]||(o[Ur]=function(c){return o.handleEvent(c)}),o[Ur])}function wt(){ut.call(this),this.i=new _n(this),this.M=this,this.F=null}S(wt,ut),wt.prototype[Ft]=!0,wt.prototype.removeEventListener=function(o,c,d,p){He(this,o,c,d,p)};function xt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new q(c,o);else if(c instanceof q)c.target=c.target||o;else{var x=c;c=new q(p,o),v(c,x)}if(x=!0,d)for(var P=d.length-1;0<=P;P--){var O=c.g=d[P];x=Jn(O,p,!0,c)&&x}if(O=c.g=o,x=Jn(O,p,!0,c)&&x,x=Jn(O,p,!1,c)&&x,d)for(P=0;P<d.length;P++)O=c.g=d[P],x=Jn(O,p,!1,c)&&x}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Yt(d[p]);delete o.g[c],o.h--}}this.F=null},wt.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},wt.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Jn(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,P=0;P<c.length;++P){var O=c[P];if(O&&!O.da&&O.capture==d){var lt=O.listener,Nt=O.ha||O.src;O.fa&&wn(o.i,O),x=lt.call(Nt,p)!==!1&&x}}return x&&!p.defaultPrevented}function bn(o,c,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Zn(o){o.g=bn(()=>{o.g=null,o.i&&(o.i=!1,Zn(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class qr extends ut{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Zn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(o){ut.call(this),this.h=o,this.g={}}S(Tn,ut);var Q=[];function dt(o){V(o.g,function(c,d){this.g.hasOwnProperty(d)&&Qn(c)},o),o.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),dt(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rt=l.JSON.stringify,tr=l.JSON.parse,er=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ye(){}Ye.prototype.h=null;function An(o){return o.h||(o.h=o.i())}function Se(){}var te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oe(){q.call(this,"d")}S(oe,q);function nr(){q.call(this,"c")}S(nr,q);var xe={},Sn=null;function xn(){return Sn=Sn||new wt}xe.La="serverreachability";function Kt(o){q.call(this,xe.La,o)}S(Kt,q);function he(o){const c=xn();xt(c,new Kt(c))}xe.STAT_EVENT="statevent";function Rn(o,c){q.call(this,xe.STAT_EVENT,o),this.stat=c}S(Rn,q);function Pt(o){const c=xn();xt(c,new Rn(c,o))}xe.Ma="timingevent";function ji(o,c){q.call(this,xe.Ma,o),this.size=c}S(ji,q);function Pn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function jr(){this.g=!0}jr.prototype.xa=function(){this.g=!1};function zf(o,c,d,p,x,P){o.info(function(){if(o.g)if(P)for(var O="",lt=P.split("&"),Nt=0;Nt<lt.length;Nt++){var nt=lt[Nt].split("=");if(1<nt.length){var Ut=nt[0];nt=nt[1];var $t=Ut.split("_");O=2<=$t.length&&$t[1]=="type"?O+(Ut+"="+nt+"&"):O+(Ut+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+c+`
`+d+`
`+O})}function Uf(o,c,d,p,x,P,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+c+`
`+d+`
`+P+" "+O})}function rr(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+qf(o,d)+(p?" "+p:"")})}function $f(o,c){o.info(function(){return"TIMEOUT: "+c})}jr.prototype.info=function(){};function qf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var P=x[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<x.length;O++)x[O]=""}}}}return Rt(d)}catch{return c}}var Hi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_o;function Wi(){}S(Wi,Ye),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},_o=new Wi;function Ge(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var jl={},wo={};function Eo(o,c,d){o.L=1,o.v=Qi(Re(c)),o.m=d,o.P=!0,Hl(o,null)}function Hl(o,c){o.F=Date.now(),Yi(o),o.A=Re(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),sc(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ql,o.g=bc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new qr(_(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(Q[0]=x.toString()),x=Q);for(var P=0;P<x.length;P++){var O=In(d,x[P],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),he(),zf(o.i,o.u,o.A,o.l,o.R,o.m)}Ge.prototype.ca=function(o){o=o.target;const c=this.M;c&&Pe(o)==3?c.j():this.Y(o)},Ge.prototype.Y=function(o){try{if(o==this.g)t:{const $t=Pe(this.g);var c=this.g.Ba();const or=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||hc(this.g)))){this.J||$t!=4||c==7||(c==8||0>=or?he(3):he(2)),Io(this);var d=this.g.Z();this.X=d;e:if(Wl(this)){var p=hc(this.g);o="";var x=p.length,P=Pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Hr(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==x-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Uf(this.i,this.u,this.A,this.l,this.R,$t,d),this.o){if(this.T&&!this.K){e:{if(this.g){var lt,Nt=this.g;if((lt=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(lt)){var nt=lt;break e}}nt=null}if(d=nt)rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bo(this,d);else{this.o=!1,this.s=3,Pt(12),Cn(this),Hr(this);break t}}if(this.P){d=!0;let fe;for(;!this.J&&this.C<O.length;)if(fe=jf(this,O),fe==wo){$t==4&&(this.s=4,Pt(14),d=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==jl){this.s=4,Pt(15),rr(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else rr(this.i,this.l,fe,null),bo(this,fe);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||O.length!=0||this.h.h||(this.s=1,Pt(16),d=!1),this.o=this.o&&d,!d)rr(this.i,this.l,O,"[Invalid Chunked Response]"),Cn(this),Hr(this);else if(0<O.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Po(Ut),Ut.M=!0,Pt(11))}}else rr(this.i,this.l,O,null),bo(this,O);$t==4&&Cn(this),this.o&&!this.J&&($t==4?_c(this.j,this):(this.o=!1,Yi(this)))}else ap(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Cn(this),Hr(this)}}}catch{}finally{}};function Wl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function jf(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?wo:(d=Number(c.substring(d,p)),isNaN(d)?jl:(p+=1,p+d>c.length?wo:(c=c.slice(p,p+d),o.C=p+d,c)))}Ge.prototype.cancel=function(){this.J=!0,Cn(this)};function Yi(o){o.S=Date.now()+o.I,Yl(o,o.I)}function Yl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pn(_(o.ba,o),c)}function Io(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ge.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?($f(this.i,this.A),this.L!=2&&(he(),Pt(17)),Cn(this),this.s=2,Hr(this)):Yl(this,this.S-o)};function Hr(o){o.j.G==0||o.J||_c(o.j,o)}function Cn(o){Io(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,dt(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function bo(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||To(d.h,o))){if(!o.K&&To(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ns(d),ts(d);else break t;Ro(d),Pt(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=Pn(_(d.Za,d),6e3));if(1>=Ql(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mn(d,11)}else if((o.K||d.g==o)&&ns(d),!D(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let nt=x[c];if(d.T=nt[0],nt=nt[1],d.G==2)if(nt[0]=="c"){d.K=nt[1],d.ia=nt[2];const Ut=nt[3];Ut!=null&&(d.la=Ut,d.j.info("VER="+d.la));const $t=nt[4];$t!=null&&(d.Aa=$t,d.j.info("SVER="+d.Aa));const or=nt[5];or!=null&&typeof or=="number"&&0<or&&(p=1.5*or,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const fe=o.g;if(fe){const is=fe.g?fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(is){var P=p.h;P.g||is.indexOf("spdy")==-1&&is.indexOf("quic")==-1&&is.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ao(P,P.h),P.h=null))}if(p.D){const Co=fe.g?fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(p.ya=Co,ht(p.I,p.D,Co))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Ic(p,p.J?p.ia:null,p.W),O.K){Xl(p.h,O);var lt=O,Nt=p.L;Nt&&(lt.I=Nt),lt.B&&(Io(lt),Yi(lt)),p.g=O}else yc(p);0<d.i.length&&es(d)}else nt[0]!="stop"&&nt[0]!="close"||Mn(d,7);else d.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?Mn(d,7):xo(d):nt[0]!="noop"&&d.l&&d.l.ta(nt),d.v=0)}}he(4)}catch{}}var Hf=class{constructor(o,c){this.g=o,this.map=c}};function Gl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ql(o){return o.h?1:o.g?o.g.size:0}function To(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ao(o,c){o.g?o.g.add(c):o.h=c}function Xl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Gl.prototype.cancel=function(){if(this.i=Jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return R(o.i)}function Wf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function Yf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Zl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Yf(o),p=Wf(o),x=p.length,P=0;P<x;P++)c.call(void 0,p[P],d&&d[P],o)}var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),x=null;if(0<=p){var P=o[d].substring(0,p);x=o[d].substring(p+1)}else P=o[d];c(P,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function kn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof kn){this.h=o.h,Gi(this,o.j),this.o=o.o,this.g=o.g,Ki(this,o.s),this.l=o.l;var c=o.i,d=new Gr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ec(this,d),this.m=o.m}else o&&(c=String(o).match(tc))?(this.h=!1,Gi(this,c[1]||"",!0),this.o=Wr(c[2]||""),this.g=Wr(c[3]||"",!0),Ki(this,c[4]),this.l=Wr(c[5]||"",!0),ec(this,c[6]||"",!0),this.m=Wr(c[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}kn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Yr(c,nc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Yr(c,nc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yr(d,d.charAt(0)=="/"?Xf:Qf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yr(d,Zf)),o.join("")};function Re(o){return new kn(o)}function Gi(o,c,d){o.j=d?Wr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ki(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ec(o,c,d){c instanceof Gr?(o.i=c,tp(o.i,o.h)):(d||(c=Yr(c,Jf)),o.i=new Gr(c,o.h))}function ht(o,c,d){o.i.set(c,d)}function Qi(o){return ht(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Kf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,Qf=/[#\?:]/g,Xf=/[#\?]/g,Jf=/[#\?@]/g,Zf=/#/g;function Gr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ke(o){o.g||(o.g=new Map,o.h=0,o.i&&Gf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Gr.prototype,n.add=function(o,c){Ke(this),this.i=null,o=ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function rc(o,c){Ke(o),c=ir(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ic(o,c){return Ke(o),c=ir(o,c),o.g.has(c)}n.forEach=function(o,c){Ke(this),this.g.forEach(function(d,p){d.forEach(function(x){o.call(c,x,p,this)},this)},this)},n.na=function(){Ke(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const x=o[p];for(let P=0;P<x.length;P++)d.push(c[p])}return d},n.V=function(o){Ke(this);let c=[];if(typeof o=="string")ic(this,o)&&(c=c.concat(this.g.get(ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Ke(this),this.i=null,o=ir(this,o),ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function sc(o,c,d){rc(o,c),0<d.length&&(o.i=null,o.g.set(ir(o,c),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const P=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var x=P;O[p]!==""&&(x+="="+encodeURIComponent(String(O[p]))),o.push(x)}}return this.i=o.join("&")};function ir(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function tp(o,c){c&&!o.j&&(Ke(o),o.i=null,o.g.forEach(function(d,p){var x=p.toLowerCase();p!=x&&(rc(this,p),sc(this,x,d))},o)),o.j=c}function ep(o,c){const d=new jr;if(l.Image){const p=new Image;p.onload=T(Qe,d,"TestLoadImage: loaded",!0,c,p),p.onerror=T(Qe,d,"TestLoadImage: error",!1,c,p),p.onabort=T(Qe,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=T(Qe,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function np(o,c){const d=new jr,p=new AbortController,x=setTimeout(()=>{p.abort(),Qe(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(x),P.ok?Qe(d,"TestPingServer: ok",!0,c):Qe(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Qe(d,"TestPingServer: error",!1,c)})}function Qe(o,c,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function rp(){this.g=new er}function ip(o,c,d){const p=d||"";try{Zl(o,function(x,P){let O=x;h(x)&&(O=Rt(x)),c.push(p+P+"="+encodeURIComponent(O))})}catch(x){throw c.push(p+"type="+encodeURIComponent("_badmap")),x}}function Xi(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Xi,Ye),Xi.prototype.g=function(){return new Ji(this.l,this.j)},Xi.prototype.i=function(o){return function(){return o}}({});function Ji(o,c){wt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ji,wt),n=Ji.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Qr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Kr(this):Qr(this),this.readyState==3&&oc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Kr(this))},n.Qa=function(o){this.g&&(this.response=o,Kr(this))},n.ga=function(){this.g&&Kr(this)};function Kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Qr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ac(o){let c="";return V(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function So(o,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=ac(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ht(o,c,d))}function yt(o){wt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(yt,wt);var sp=/^https?$/i,op=["POST","PUT"];n=yt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_o.g(),this.v=this.o?An(this.o):An(_o),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){lc(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),x=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(op,c,void 0))||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){lc(this,P)}};function lc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,cc(o),Zi(o)}function cc(o){o.A||(o.A=!0,xt(o,"complete"),xt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xt(this,"complete"),xt(this,"abort"),Zi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),yt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uc(this):this.bb())},n.bb=function(){uc(this)};function uc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Pe(o)!=4||o.Z()!=2)){if(o.u&&Pe(o)==4)bn(o.Ea,0,o);else if(xt(o,"readystatechange"),Pe(o)==4){o.h=!1;try{const O=o.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var x=String(o.D).match(tc)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),p=!sp.test(x?x.toLowerCase():"")}d=p}if(d)xt(o,"complete"),xt(o,"success");else{o.m=6;try{var P=2<Pe(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",cc(o)}}finally{Zi(o)}}}}function Zi(o,c){if(o.g){dc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xt(o,"ready");try{d.onreadystatechange=p}catch{}}}function dc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Pe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Pe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),tr(c)}};function hc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ap(o){const c={};o=(o.g&&2<=Pe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(D(o[p]))continue;var d=I(o[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[x]||[];c[x]=P,P.push(d)}E(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function fc(o){this.Aa=0,this.i=[],this.j=new jr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Gl(o&&o.concurrentRequestLimit),this.Da=new rp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fc.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Pt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ic(this,null,this.W),es(this)};function xo(o){if(pc(o),o.G==3){var c=o.U++,d=Re(o.I);if(ht(d,"SID",o.K),ht(d,"RID",c),ht(d,"TYPE","terminate"),Jr(o,d),c=new Ge(o,o.j,c),c.L=2,c.v=Qi(Re(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=bc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yi(c)}Ec(o)}function ts(o){o.g&&(Po(o),o.g.cancel(),o.g=null)}function pc(o){ts(o),o.u&&(l.clearTimeout(o.u),o.u=null),ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function es(o){if(!Kl(o.h)&&!o.s){o.s=!0;var c=o.Ga;ct||it(),Mt||(ct(),Mt=!0),gt.add(c,o),o.B=0}}function lp(o,c){return Ql(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pn(_(o.Ga,o,c),wc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new Ge(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),v(P,this.S)):P=this.S),this.m!==null||this.O||(x.H=P,P=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=gc(this,x,c),d=Re(this.I),ht(d,"RID",o),ht(d,"CVER",22),this.D&&ht(d,"X-HTTP-Session-Id",this.D),Jr(this,d),P&&(this.O?c="headers="+encodeURIComponent(String(ac(P)))+"&"+c:this.m&&So(d,this.m,P)),Ao(this.h,x),this.Ua&&ht(d,"TYPE","init"),this.P?(ht(d,"$req",c),ht(d,"SID","null"),x.T=!0,Eo(x,d,null)):Eo(x,d,c),this.G=2}}else this.G==3&&(o?mc(this,o):this.i.length==0||Kl(this.h)||mc(this))};function mc(o,c){var d;c?d=c.l:d=o.U++;const p=Re(o.I);ht(p,"SID",o.K),ht(p,"RID",d),ht(p,"AID",o.T),Jr(o,p),o.m&&o.o&&So(p,o.m,o.o),d=new Ge(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=gc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ao(o.h,d),Eo(d,p,c)}function Jr(o,c){o.H&&V(o.H,function(d,p){ht(c,p,d)}),o.l&&Zl({},function(d,p){ht(c,p,d)})}function gc(o,c,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;t:{var x=o.i;let P=-1;for(;;){const O=["count="+d];P==-1?0<d?(P=x[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let lt=!0;for(let Nt=0;Nt<d;Nt++){let nt=x[Nt].g;const Ut=x[Nt].map;if(nt-=P,0>nt)P=Math.max(0,x[Nt].g-100),lt=!1;else try{ip(Ut,O,"req"+nt+"_")}catch{p&&p(Ut)}}if(lt){p=O.join("&");break t}}}return o=o.i.splice(0,d),c.D=o,p}function yc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ct||it(),Mt||(ct(),Mt=!0),gt.add(c,o),o.v=0}}function Ro(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pn(_(o.Fa,o),wc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pn(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ts(this),vc(this))};function Po(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function vc(o){o.g=new Ge(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Re(o.qa);ht(c,"RID","rpc"),ht(c,"SID",o.K),ht(c,"AID",o.T),ht(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ht(c,"TO",o.ja),ht(c,"TYPE","xmlhttp"),Jr(o,c),o.m&&o.o&&So(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Qi(Re(c)),d.m=null,d.P=!0,Hl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ts(this),Ro(this),Pt(19))};function ns(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function _c(o,c){var d=null;if(o.g==c){ns(o),Po(o),o.g=null;var p=2}else if(To(o.h,c))d=c.D,Xl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=o.B;p=xn(),xt(p,new ji(p,d)),es(o)}else yc(o);else if(x=c.s,x==3||x==0&&0<c.X||!(p==1&&lp(o,c)||p==2&&Ro(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),x){case 1:Mn(o,5);break;case 4:Mn(o,10);break;case 3:Mn(o,6);break;default:Mn(o,2)}}}function wc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Mn(o,c){if(o.j.info("Error code "+c),c==2){var d=_(o.fb,o),p=o.Xa;const x=!p;p=new kn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Gi(p,"https"),Qi(p),x?ep(p.toString(),d):np(p.toString(),d)}else Pt(2);o.G=0,o.l&&o.l.sa(c),Ec(o),pc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ec(o){if(o.G=0,o.ka=[],o.l){const c=Jl(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function Ic(o,c,d){var p=d instanceof kn?Re(d):new kn(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ki(p,p.s);else{var x=l.location;p=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var P=new kn(null);p&&Gi(P,p),c&&(P.g=c),x&&Ki(P,x),d&&(P.l=d),p=P}return d=o.D,c=o.ya,d&&c&&ht(p,d,c),ht(p,"VER",o.la),Jr(o,p),p}function bc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new yt(new Xi({eb:d})):new yt(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tc(){}n=Tc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function rs(){}rs.prototype.g=function(o,c){return new ee(o,c)};function ee(o,c){wt.call(this),this.g=new fc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!D(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!D(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new sr(this)}S(ee,wt),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){xo(this.g)},ee.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Rt(o),o=d);c.i.push(new Hf(c.Ya++,o)),c.G==3&&es(c)},ee.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,ee.aa.N.call(this)};function Ac(o){oe.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const d in c){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Ac,oe);function Sc(){nr.call(this),this.status=1}S(Sc,nr);function sr(o){this.g=o}S(sr,Tc),sr.prototype.ua=function(){xt(this.g,"a")},sr.prototype.ta=function(o){xt(this.g,new Ac(o))},sr.prototype.sa=function(o){xt(this.g,new Sc)},sr.prototype.ra=function(){xt(this.g,"b")},rs.prototype.createWebChannel=rs.prototype.g,ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,th=function(){return new rs},Zd=function(){return xn()},Jd=xe,oa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,ms=Hi,$l.COMPLETE="complete",Xd=$l,Se.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",wt.prototype.listen=wt.prototype.K,ri=Se,yt.prototype.listenOnce=yt.prototype.L,yt.prototype.getLastError=yt.prototype.Ka,yt.prototype.getLastErrorCode=yt.prototype.Ba,yt.prototype.getStatus=yt.prototype.Z,yt.prototype.getResponseJson=yt.prototype.Oa,yt.prototype.getResponseText=yt.prototype.oa,yt.prototype.send=yt.prototype.ea,yt.prototype.setWithCredentials=yt.prototype.Ha,Qd=yt}).apply(typeof as<"u"?as:typeof self<"u"?self:typeof window<"u"?window:{});const ru="@firebase/firestore";/**
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
 */class jt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let Mr="10.14.0";/**
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
 */const qn=new xa("@firebase/firestore");function ti(){return qn.logLevel}function $(n,...t){if(qn.logLevel<=Z.DEBUG){const e=t.map(Ua);qn.debug(`Firestore (${Mr}): ${n}`,...e)}}function Be(n,...t){if(qn.logLevel<=Z.ERROR){const e=t.map(Ua);qn.error(`Firestore (${Mr}): ${n}`,...e)}}function br(n,...t){if(qn.logLevel<=Z.WARN){const e=t.map(Ua);qn.warn(`Firestore (${Mr}): ${n}`,...e)}}function Ua(n){if(typeof n=="string")return n;try{/**
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
 */function Y(n="Unexpected state"){const t=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+n;throw Be(t),new Error(t)}function st(n,t){n||Y()}function K(n,t){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Le{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class eh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _v{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(jt.UNAUTHENTICATED))}shutdown(){}}class wv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ev{constructor(t){this.t=t,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){st(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new Le;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Le,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Le)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new eh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string"),new jt(t)}}class Iv{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bv{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Iv(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Av{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){st(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(st(typeof e.token=="string"),this.R=e.token,new Tv(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sv(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class nh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Sv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function rt(n,t){return n<t?-1:n>t?1:0}function Tr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class At{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new At(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new At(0,0))}static max(){return new G(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vi{constructor(t,e,r){e===void 0?e=0:e>t.length&&Y(),r===void 0?r=t.length-e:r>t.length-e&&Y(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vi?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends vi{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends vi{construct(t,e,r){return new Vt(t,e,r)}static isValidIdentifier(t){return xv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new F(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new F(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vt(e)}static emptyPath(){return new Vt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(ft.fromString(t))}static fromName(t){return new j(ft.fromString(t).popFirst(5))}static empty(){return new j(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new ft(t.slice()))}}function Rv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new At(e+1,0):new At(e,r));return new hn(i,j.empty(),t)}function Pv(n){return new hn(n.readTime,n.key,-1)}class hn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new hn(G.min(),j.empty(),-1)}static max(){return new hn(G.max(),j.empty(),-1)}}function Cv(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:rt(n.largestBatchId,t.largestBatchId))}/**
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
 */const kv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Mi(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==kv)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&e()},u=>r(u))}),a=!0,s===i&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(i=>i?N.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new N((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,e){return new N((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Dv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Di(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $a{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}$a.oe=-1;function js(n){return n==null}function Cs(n){return n===0&&1/n==-1/0}function Nv(n){return typeof n=="number"&&Number.isInteger(n)&&!Cs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function iu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ls(this.root,t,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ls(this.root,t,this.comparator,!0)}}class ls{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Lt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new su(this.data.getIterator())}getIteratorFrom(t){return new su(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ot(this.comparator);return e.data=t,e}}class su{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class re{constructor(t){this.fields=t,t.sort(Vt.comparator)}static empty(){return new re([])}unionWith(t){let e=new Ot(Vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new re(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ih("Invalid base64 string: "+s):s}}(t);return new Bt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const Lv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(st(!!n),typeof n=="string"){let t=0;const e=Lv.exec(n);if(st(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jn(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */function qa(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ja(n){const t=n.mapValue.fields.__previous_value__;return qa(t)?ja(t):t}function _i(n){const t=fn(n.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}/**
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
 */class Vv{constructor(t,e,r,i,s,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class wi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof wi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const cs={mapValue:{}};function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qa(n)?4:Bv(n)?9007199254740991:Ov(n)?10:11:Y()}function Ie(n,t){if(n===t)return!0;const e=Hn(n);if(e!==Hn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _i(n).isEqual(_i(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=fn(i.timestampValue),l=fn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return jn(i.bytesValue).isEqual(jn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=_t(i.doubleValue),l=_t(s.doubleValue);return a===l?Cs(a)===Cs(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Tr(n.arrayValue.values||[],t.arrayValue.values||[],Ie);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(iu(a)!==iu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ie(a[u],l[u])))return!1;return!0}(n,t);default:return Y()}}function Ei(n,t){return(n.values||[]).find(e=>Ie(e,t))!==void 0}function Ar(n,t){if(n===t)return 0;const e=Hn(n),r=Hn(t);if(e!==r)return rt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=_t(s.integerValue||s.doubleValue),u=_t(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return ou(n.timestampValue,t.timestampValue);case 4:return ou(_i(n),_i(t));case 5:return rt(n.stringValue,t.stringValue);case 6:return function(s,a){const l=jn(s),u=jn(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=rt(l[h],u[h]);if(f!==0)return f}return rt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=rt(_t(s.latitude),_t(a.latitude));return l!==0?l:rt(_t(s.longitude),_t(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return au(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},_=a.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=_.value)===null||u===void 0?void 0:u.arrayValue,R=rt(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:au(T,S)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===cs.mapValue&&a===cs.mapValue)return 0;if(s===cs.mapValue)return 1;if(a===cs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=rt(u[m],f[m]);if(_!==0)return _;const T=Ar(l[u[m]],h[f[m]]);if(T!==0)return T}return rt(u.length,f.length)}(n.mapValue,t.mapValue);default:throw Y()}}function ou(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return rt(n,t);const e=fn(n),r=fn(t),i=rt(e.seconds,r.seconds);return i!==0?i:rt(e.nanos,r.nanos)}function au(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=Ar(e[i],r[i]);if(s)return s}return rt(e.length,r.length)}function Sr(n){return aa(n)}function aa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=fn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return jn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=aa(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${aa(e.fields[a])}`;return i+"}"}(n.mapValue):Y()}function lu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function la(n){return!!n&&"integerValue"in n}function Ha(n){return!!n&&"arrayValue"in n}function cu(n){return!!n&&"nullValue"in n}function uu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gs(n){return!!n&&"mapValue"in n}function Ov(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function li(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=li(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=li(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Bv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xt{constructor(t){this.value=t}static empty(){return new Xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=li(e)}setAll(t){let e=Vt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=li(a):i.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());gs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];gs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Yn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Xt(li(this.value))}}function sh(n){const t=[];return Yn(n.fields,(e,r)=>{const i=new Vt([e]);if(gs(r)){const s=sh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new re(t)}/**
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
 */class Ht{constructor(t,e,r,i,s,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Ht(t,0,G.min(),G.min(),G.min(),Xt.empty(),0)}static newFoundDocument(t,e,r,i){return new Ht(t,1,e,G.min(),r,i,0)}static newNoDocument(t,e){return new Ht(t,2,e,G.min(),G.min(),Xt.empty(),0)}static newUnknownDocument(t,e){return new Ht(t,3,e,G.min(),G.min(),Xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ks{constructor(t,e){this.position=t,this.inclusive=e}}function du(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],a=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),e.key):r=Ar(a,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ie(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ii{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fv(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class oh{}class It extends oh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Uv(t,e,r):e==="array-contains"?new jv(t,r):e==="in"?new Hv(t,r):e==="not-in"?new Wv(t,r):e==="array-contains-any"?new Yv(t,r):new It(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new $v(t,r):new qv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ar(e,this.value)):e!==null&&Hn(this.value)===Hn(e)&&this.matchesComparison(Ar(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends oh{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ge(t,e)}matches(t){return ah(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ah(n){return n.op==="and"}function lh(n){return zv(n)&&ah(n)}function zv(n){for(const t of n.filters)if(t instanceof ge)return!1;return!0}function ca(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+Sr(n.value);if(lh(n))return n.filters.map(t=>ca(t)).join(",");{const t=n.filters.map(e=>ca(e)).join(",");return`${n.op}(${t})`}}function ch(n,t){return n instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&Ie(r.value,i.value)}(n,t):n instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ch(a,i.filters[l]),!0):!1}(n,t):void Y()}function uh(n){return n instanceof It?function(e){return`${e.field.canonicalString()} ${e.op} ${Sr(e.value)}`}(n):n instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(uh).join(" ,")+"}"}(n):"Filter"}class Uv extends It{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class $v extends It{constructor(t,e){super(t,"in",e),this.keys=dh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qv extends It{constructor(t,e){super(t,"not-in",e),this.keys=dh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function dh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>j.fromName(r.referenceValue))}class jv extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ha(e)&&Ei(e.arrayValue,this.value)}}class Hv extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ei(this.value.arrayValue,e)}}class Wv extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ei(this.value.arrayValue,e)}}class Yv extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ha(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}/**
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
 */class Gv{constructor(t,e=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function fu(n,t=null,e=[],r=[],i=null,s=null,a=null){return new Gv(n,t,e,r,i,s,a)}function Wa(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ca(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),js(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Sr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Sr(r)).join(",")),t.ue=e}return t.ue}function Ya(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fv(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ch(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!hu(n.startAt,t.startAt)&&hu(n.endAt,t.endAt)}function ua(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Dr{constructor(t,e=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Kv(n,t,e,r,i,s,a,l){return new Dr(n,t,e,r,i,s,a,l)}function Ga(n){return new Dr(n)}function pu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hh(n){return n.collectionGroup!==null}function ci(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ot(Vt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Ii(s,r))}),e.has(Vt.keyField().canonicalString())||t.ce.push(new Ii(Vt.keyField(),r))}return t.ce}function _e(n){const t=K(n);return t.le||(t.le=Qv(t,ci(n))),t.le}function Qv(n,t){if(n.limitType==="F")return fu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ii(i.field,s)});const e=n.endAt?new ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ks(n.startAt.position,n.startAt.inclusive):null;return fu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function da(n,t){const e=n.filters.concat([t]);return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ms(n,t,e){return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Hs(n,t){return Ya(_e(n),_e(t))&&n.limitType===t.limitType}function fh(n){return`${Wa(_e(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>uh(i)).join(", ")}]`),js(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Sr(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Sr(i)).join(",")),`Target(${r})`}(_e(n))}; limitType=${n.limitType})`}function Ws(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of ci(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=du(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ci(r),i)||r.endAt&&!function(a,l,u){const h=du(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ci(r),i))}(n,t)}function Xv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ph(n){return(t,e)=>{let r=!1;for(const i of ci(n)){const s=Jv(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jv(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ar(u,h):Y()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Nr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return rh(this.inner)}size(){return this.innerSize}}/**
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
 */const Zv=new mt(j.comparator);function Fe(){return Zv}const mh=new mt(j.comparator);function ii(...n){let t=mh;for(const e of n)t=t.insert(e.key,e);return t}function gh(n){let t=mh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ln(){return ui()}function yh(){return ui()}function ui(){return new Nr(n=>n.toString(),(n,t)=>n.isEqual(t))}const t0=new mt(j.comparator),e0=new Ot(j.comparator);function J(...n){let t=e0;for(const e of n)t=t.add(e);return t}const n0=new Ot(rt);function r0(){return n0}/**
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
 */function Ka(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(t)?"-0":t}}function vh(n){return{integerValue:""+n}}function i0(n,t){return Nv(t)?vh(t):Ka(n,t)}/**
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
 */class Ys{constructor(){this._=void 0}}function s0(n,t,e){return n instanceof Ds?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qa(s)&&(s=ja(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof bi?wh(n,t):n instanceof Ti?Eh(n,t):function(i,s){const a=_h(i,s),l=mu(a)+mu(i.Pe);return la(a)&&la(i.Pe)?vh(l):Ka(i.serializer,l)}(n,t)}function o0(n,t,e){return n instanceof bi?wh(n,t):n instanceof Ti?Eh(n,t):e}function _h(n,t){return n instanceof Ns?function(r){return la(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ds extends Ys{}class bi extends Ys{constructor(t){super(),this.elements=t}}function wh(n,t){const e=Ih(t);for(const r of n.elements)e.some(i=>Ie(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ti extends Ys{constructor(t){super(),this.elements=t}}function Eh(n,t){let e=Ih(t);for(const r of n.elements)e=e.filter(i=>!Ie(i,r));return{arrayValue:{values:e}}}class Ns extends Ys{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function mu(n){return _t(n.integerValue||n.doubleValue)}function Ih(n){return Ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function a0(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof bi&&i instanceof bi||r instanceof Ti&&i instanceof Ti?Tr(r.elements,i.elements,Ie):r instanceof Ns&&i instanceof Ns?Ie(r.Pe,i.Pe):r instanceof Ds&&i instanceof Ds}(n.transform,t.transform)}class l0{constructor(t,e){this.version=t,this.transformResults=e}}class ie{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ie}static exists(t){return new ie(void 0,t)}static updateTime(t){return new ie(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ys(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Gs{}function bh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Qa(n.key,ie.none()):new Ni(n.key,n.data,ie.none());{const e=n.data,r=Xt.empty();let i=new Ot(Vt.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new gn(n.key,r,new re(i.toArray()),ie.none())}}function c0(n,t,e){n instanceof Ni?function(i,s,a){const l=i.value.clone(),u=yu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof gn?function(i,s,a){if(!ys(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=yu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Th(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function di(n,t,e,r){return n instanceof Ni?function(s,a,l,u){if(!ys(s.precondition,a))return l;const h=s.value.clone(),f=vu(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof gn?function(s,a,l,u){if(!ys(s.precondition,a))return l;const h=vu(s.fieldTransforms,u,a),f=a.data;return f.setAll(Th(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,t,e,r):function(s,a,l){return ys(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function u0(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=_h(r.transform,i||null);s!=null&&(e===null&&(e=Xt.empty()),e.set(r.field,s))}return e||null}function gu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Tr(r,i,(s,a)=>a0(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ni extends Gs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gn extends Gs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Th(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function yu(n,t,e){const r=new Map;st(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,o0(a,l,e[i]))}return r}function vu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,a=e.data.field(i.field);r.set(i.field,s0(s,a,t))}return r}class Qa extends Gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d0 extends Gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class h0{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&c0(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=di(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=di(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yh();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(i.key)?null:l;const u=bh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),J())}isEqual(t){return this.batchId===t.batchId&&Tr(this.mutations,t.mutations,(e,r)=>gu(e,r))&&Tr(this.baseMutations,t.baseMutations,(e,r)=>gu(e,r))}}class Xa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){st(t.mutations.length===r.length);let i=function(){return t0}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Xa(t,e,r,i)}}/**
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
 */class f0{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class p0{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Et,tt;function m0(n){switch(n){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Ah(n){if(n===void 0)return Be("GRPC error has no .code"),M.UNKNOWN;switch(n){case Et.OK:return M.OK;case Et.CANCELLED:return M.CANCELLED;case Et.UNKNOWN:return M.UNKNOWN;case Et.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Et.INTERNAL:return M.INTERNAL;case Et.UNAVAILABLE:return M.UNAVAILABLE;case Et.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Et.NOT_FOUND:return M.NOT_FOUND;case Et.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Et.ABORTED:return M.ABORTED;case Et.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Et.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(tt=Et||(Et={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function g0(){return new TextEncoder}/**
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
 */const y0=new Vn([4294967295,4294967295],0);function _u(n){const t=g0().encode(n),e=new Kd;return e.update(t),new Uint8Array(e.digest())}function wu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Vn([e,r],0),new Vn([i,s],0)]}class Ja{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new si(`Invalid padding: ${e}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new si(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Vn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Vn.fromNumber(r)));return i.compare(y0)===1&&(i=new Vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=_u(t),[r,i]=wu(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Ja(s,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=_u(t),[r,i]=wu(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ks{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Li.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ks(G.min(),i,new mt(rt),Fe(),J())}}class Li{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Li(r,e,J(),J(),J())}}/**
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
 */class vs{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Sh{constructor(t,e){this.targetId=t,this.me=e}}class xh{constructor(t,e,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Eu{constructor(){this.fe=0,this.ge=bu(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=J(),e=J(),r=J();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Li(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=bu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,st(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class v0{constructor(t){this.Le=t,this.Be=new Map,this.ke=Fe(),this.qe=Iu(),this.Qe=new mt(rt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:Y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(ua(s))if(r===0){const a=new j(s.path);this.Ue(e,a,Ht.newNoDocument(a,G.min()))}else st(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let a,l;try{a=jn(r).toUint8Array()}catch(u){if(u instanceof ih)return br("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ja(a,i,s)}catch(u){return br(u instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ua(l.target)){const u=new j(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ht.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let r=J();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new Ks(t,e,this.Qe,this.ke,r);return this.ke=Fe(),this.qe=Iu(),this.Qe=new mt(rt),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Eu,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ot(rt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Eu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Iu(){return new mt(j.comparator)}function bu(){return new mt(j.comparator)}const _0={asc:"ASCENDING",desc:"DESCENDING"},w0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E0={and:"AND",or:"OR"};class I0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ha(n,t){return n.useProto3Json||js(t)?t:{value:t}}function Ls(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function b0(n,t){return Ls(n,t.toTimestamp())}function we(n){return st(!!n),G.fromTimestamp(function(e){const r=fn(e);return new At(r.seconds,r.nanos)}(n))}function Za(n,t){return fa(n,t).canonicalString()}function fa(n,t){const e=function(i){return new ft(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ph(n){const t=ft.fromString(n);return st(Nh(t)),t}function pa(n,t){return Za(n.databaseId,t.path)}function Fo(n,t){const e=Ph(t);if(e.get(1)!==n.databaseId.projectId)throw new F(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(kh(e))}function Ch(n,t){return Za(n.databaseId,t)}function T0(n){const t=Ph(n);return t.length===4?ft.emptyPath():kh(t)}function ma(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kh(n){return st(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Tu(n,t,e){return{name:pa(n,t),fields:e.value.mapValue.fields}}function A0(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(st(f===void 0||typeof f=="string"),Bt.fromBase64String(f||"")):(st(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Bt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?M.UNKNOWN:Ah(h.code);return new F(f,h.message||"")}(a);e=new xh(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fo(n,r.document.name),s=we(r.document.updateTime),a=r.document.createTime?we(r.document.createTime):G.min(),l=new Xt({mapValue:{fields:r.document.fields}}),u=Ht.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];e=new vs(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Fo(n,r.document),s=r.readTime?we(r.readTime):G.min(),a=Ht.newNoDocument(i,s),l=r.removedTargetIds||[];e=new vs([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Fo(n,r.document),s=r.removedTargetIds||[];e=new vs([],s,i,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new p0(i,s),l=r.targetId;e=new Sh(l,a)}}return e}function S0(n,t){let e;if(t instanceof Ni)e={update:Tu(n,t.key,t.value)};else if(t instanceof Qa)e={delete:pa(n,t.key)};else if(t instanceof gn)e={update:Tu(n,t.key,t.data),updateMask:L0(t.fieldMask)};else{if(!(t instanceof d0))return Y();e={verify:pa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ds)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ti)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ns)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,t.precondition)),e}function x0(n,t){return n&&n.length>0?(st(t!==void 0),n.map(e=>function(i,s){let a=i.updateTime?we(i.updateTime):we(s);return a.isEqual(G.min())&&(a=we(s)),new l0(a,i.transformResults||[])}(e,t))):[]}function R0(n,t){return{documents:[Ch(n,t.path)]}}function P0(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ch(n,i);const s=function(h){if(h.length!==0)return Dh(ge.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:cr(_.field),direction:M0(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ha(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:i}}function C0(n){let t=T0(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){st(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(m){const _=Mh(m);return _ instanceof ge&&lh(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(_=>function(S){return new Ii(ur(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,js(_)?null:_}(e.limit));let u=null;e.startAt&&(u=function(m){const _=!!m.before,T=m.values||[];return new ks(T,_)}(e.startAt));let h=null;return e.endAt&&(h=function(m){const _=!m.before,T=m.values||[];return new ks(T,_)}(e.endAt)),Kv(t,i,a,s,l,"F",u,h)}function k0(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Mh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ur(e.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ur(e.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ur(e.unaryFilter.field);return It.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ur(e.unaryFilter.field);return It.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(e){return It.create(ur(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(r=>Mh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(n):Y()}function M0(n){return _0[n]}function D0(n){return w0[n]}function N0(n){return E0[n]}function cr(n){return{fieldPath:n.canonicalString()}}function ur(n){return Vt.fromServerFormat(n.fieldPath)}function Dh(n){return n instanceof It?function(e){if(e.op==="=="){if(uu(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NAN"}};if(cu(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uu(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NAN"}};if(cu(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(e.field),op:D0(e.op),value:e.value}}}(n):n instanceof ge?function(e){const r=e.getFilters().map(i=>Dh(i));return r.length===1?r[0]:{compositeFilter:{op:N0(e.op),filters:r}}}(n):Y()}function L0(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class rn{constructor(t,e,r,i,s=G.min(),a=G.min(),l=Bt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class V0{constructor(t){this.ct=t}}function O0(n){const t=C0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ms(t,t.limit,"L"):t}/**
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
 */class B0{constructor(){this.un=new F0}addToCollectionParentIndex(t,e){return this.un.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(hn.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(hn.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class F0{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Ot(ft.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Ot(ft.comparator)).toArray()}}/**
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
 */class xr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new xr(0)}static kn(){return new xr(-1)}}/**
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
 */class z0{constructor(){this.changes=new Nr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class U0{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class $0{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&di(r.mutation,i,re.empty(),At.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,J()).next(()=>r))}getLocalViewOfDocuments(t,e,r=J()){const i=Ln();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let a=ii();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ln();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,J()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let s=Fe();const a=ui(),l=function(){return ui()}();return e.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gn)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),di(f.mutation,h,f.mutation.getFieldMask(),At.now())):a.set(h.key,re.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var m;return l.set(h,new U0(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const r=ui();let i=new mt((a,l)=>a-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=r.get(u)||re.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||J()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=yh();f.forEach(_=>{if(!s.has(_)){const T=bh(e.get(_),r.get(_));T!==null&&m.set(_,T),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):N.resolve(Ln());let l=-1,u=s;return a.next(h=>N.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,J())).next(f=>({batchId:l,changes:gh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(r=>{let i=ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let a=ii();return this.indexManager.getCollectionParents(t,s).next(l=>N.forEach(l,u=>{const h=function(m,_){return new Dr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ht.newInvalidDocument(f)))});let l=ii();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&di(f.mutation,h,re.empty(),At.now()),Ws(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class q0{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return N.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:we(i.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:O0(i.bundledQuery),readTime:we(i.readTime)}}(e)),N.resolve()}}/**
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
 */class j0{constructor(){this.overlays=new mt(j.comparator),this.Ir=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ln();return N.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const i=Ln(),s=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new mt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ln(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ln(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new f0(e,r));let s=this.Ir.get(e);s===void 0&&(s=J(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
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
 */class H0{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
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
 */class tl{constructor(){this.Tr=new Ot(kt.Er),this.dr=new Ot(kt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new kt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new j(new ft([])),r=new kt(e,t),i=new kt(e,t+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new ft([])),r=new kt(e,t),i=new kt(e,t+1);let s=J();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new kt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||rt(t.wr,e.wr)}static Ar(t,e){return rt(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
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
 */class W0{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ot(kt.Er)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new h0(s,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new kt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),i=new kt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ot(rt);return e.forEach(i=>{const s=new kt(i,0),a=new kt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const a=new kt(new j(s),0);let l=new Ot(rt);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){st(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(e.mutations,i=>{const s=new kt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new kt(e,0),i=this.br.firstAfterOrEqual(r);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Y0{constructor(t){this.Mr=t,this.docs=function(){return new mt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(e))}getEntries(t,e){let r=Fe();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Fe();const a=e.path,l=new j(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Cv(Pv(f),r)<=0||(i.has(f.key)||Ws(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(t,e,r,i){Y()}Or(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new G0(this)}getSize(t){return N.resolve(this.size)}}class G0 extends z0{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class K0{constructor(t){this.persistence=t,this.Nr=new Nr(e=>Wa(e),Ya),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tl,this.targetCount=0,this.kr=xr.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),N.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new xr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.Kn(e),N.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Br.containsKey(e))}}/**
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
 */class Q0{constructor(t,e){this.qr={},this.overlays={},this.Qr=new $a(0),this.Kr=!1,this.Kr=!0,this.$r=new H0,this.referenceDelegate=t(this),this.Ur=new K0(this),this.indexManager=new B0,this.remoteDocumentCache=function(i){return new Y0(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new V0(e),this.Gr=new q0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new j0,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new W0(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){$("MemoryPersistence","Starting transaction:",t);const i=new X0(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class X0 extends Mv{constructor(t){super(),this.currentSequenceNumber=t}}class el{constructor(t){this.persistence=t,this.Jr=new tl,this.Yr=null}static Zr(t){return new el(t)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),N.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=j.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return N.or([()=>N.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class nl{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=J(),i=J();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nl(t,e.fromCache,r,i)}}/**
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
 */class J0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Z0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lp()?8:Dv(Wt())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new J0;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(ti()<=Z.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",lr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(ti()<=Z.DEBUG&&$("QueryEngine","Query:",lr(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ti()<=Z.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",lr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_e(e))):N.resolve())}Yi(t,e){if(pu(e))return N.resolve(null);let r=_e(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ms(e,null,"F"),r=_e(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=J(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Ms(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,r,i){return pu(e)||i.isEqual(G.min())?N.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const a=this.ts(e,s);return this.ns(e,a,r,i)?N.resolve(null):(ti()<=Z.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(e)),this.rs(t,a,e,Rv(i,-1)).next(l=>l))})}ts(t,e){let r=new Ot(ph(t));return e.forEach((i,s)=>{Ws(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return ti()<=Z.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",lr(e)),this.Ji.getDocumentsMatchingQuery(t,e,hn.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class t_{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new mt(rt),this._s=new Nr(s=>Wa(s),Ya),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function e_(n,t,e,r){return new t_(n,t,e,r)}async function Lh(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=J();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function n_(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,_=m.keys();let T=N.resolve();return _.forEach(S=>{T=T.next(()=>f.getEntry(u,S)).next(R=>{const b=h.docVersions.get(S);st(b!==null),R.version.compareTo(b)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Vh(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function r_(n,t){const e=K(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,m)));let T=_.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?T=T.withResumeToken(Bt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(R,b,k){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(_,T,f)&&l.push(e.Ur.updateTargetData(s,T))});let u=Fe(),h=J();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(i_(s,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(m=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.os=i,s))}function i_(n,t,e){let r=J(),i=J();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let a=Fe();return e.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function s_(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function o_(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,N.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new rn(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ga(n,t,e){const r=K(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Di(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Au(n,t,e){const r=K(n);let i=G.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=K(u),_=m._s.get(f);return _!==void 0?N.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(r,a,_e(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:G.min(),e?s:J())).next(l=>(a_(r,Xv(t),l),{documents:l,Ts:s})))}function a_(n,t,e){let r=n.us.get(t)||G.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class Su{constructor(){this.activeTargetIds=r0()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class l_{constructor(){this.so=new Su,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Su,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class c_{_o(t){}shutdown(){}}/**
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
 */class xu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let us=null;function zo(){return us===null?us=function(){return 268435456+Math.round(2147483648*Math.random())}():us++,"0x"+us.toString(16)}/**
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
 */const u_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class d_{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const qt="WebChannelConnection";class h_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,a){const l=zo(),u=this.xo(e,r.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,u,h,i).then(f=>($("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw br("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,s,a,l){return this.Mo(e,r,i,s,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,r){const i=u_[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=zo();return new Promise((a,l)=>{const u=new Qd;u.setWithCredentials(!0),u.listenOnce(Xd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ms.NO_ERROR:const f=u.getResponseJson();$(qt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case ms.TIMEOUT:$(qt,`RPC '${t}' ${s} timed out`),l(new F(M.DEADLINE_EXCEEDED,"Request time out"));break;case ms.HTTP_ERROR:const m=u.getStatus();if($(qt,`RPC '${t}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const S=function(b){const k=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(k)>=0?k:M.UNKNOWN}(T.status);l(new F(S,T.message))}else l(new F(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(qt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);$(qt,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",h,r,15)})}Bo(t,e,r){const i=zo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=th(),l=Zd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(qt,`Creating RPC '${t}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let _=!1,T=!1;const S=new d_({Io:b=>{T?$(qt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(_||($(qt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),_=!0),$(qt,`RPC '${t}' stream ${i} sending:`,b),m.send(b))},To:()=>m.close()}),R=(b,k,D)=>{b.listen(k,C=>{try{D(C)}catch(L){setTimeout(()=>{throw L},0)}})};return R(m,ri.EventType.OPEN,()=>{T||($(qt,`RPC '${t}' stream ${i} transport opened.`),S.yo())}),R(m,ri.EventType.CLOSE,()=>{T||(T=!0,$(qt,`RPC '${t}' stream ${i} transport closed`),S.So())}),R(m,ri.EventType.ERROR,b=>{T||(T=!0,br(qt,`RPC '${t}' stream ${i} transport errored:`,b),S.So(new F(M.UNAVAILABLE,"The operation could not be completed")))}),R(m,ri.EventType.MESSAGE,b=>{var k;if(!T){const D=b.data[0];st(!!D);const C=D,L=C.error||((k=C[0])===null||k===void 0?void 0:k.error);if(L){$(qt,`RPC '${t}' stream ${i} received error:`,L);const z=L.status;let V=function(w){const v=Et[w];if(v!==void 0)return Ah(v)}(z),E=L.message;V===void 0&&(V=M.INTERNAL,E="Unknown error status: "+z+" with message "+L.message),T=!0,S.So(new F(V,E)),m.close()}else $(qt,`RPC '${t}' stream ${i} received:`,D),S.bo(D)}}),R(l,Jd.STAT_EVENT,b=>{b.stat===oa.PROXY?$(qt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===oa.NOPROXY&&$(qt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Uo(){return typeof document<"u"?document:null}/**
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
 */function Qs(n){return new I0(n,!0)}/**
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
 */class Oh{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bh{constructor(t,e,r,i,s,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Oh(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(Be(e.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new F(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f_ extends Bh{constructor(t,e,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=A0(this.serializer,t),r=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?we(a.readTime):G.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ma(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=ua(u)?{documents:R0(s,u)}:{query:P0(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Rh(s,a.resumeToken);const h=ha(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=Ls(s,a.snapshotVersion.toTimestamp());const h=ha(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=k0(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ma(this.serializer),e.removeTarget=t,this.a_(e)}}class p_ extends Bh{constructor(t,e,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return st(!!t.streamToken),this.lastStreamToken=t.streamToken,st(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){st(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=x0(t.writeResults,t.commitTime),r=we(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ma(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>S0(this.serializer,r))};this.a_(e)}}/**
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
 */class m_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,fa(e,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(M.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,fa(e,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class g_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Be(e),this.D_=!1):$("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class y_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Gn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=K(u);h.L_.add(4),await Vi(h),h.q_.set("Unknown"),h.L_.delete(4),await Xs(h)}(this))})}),this.q_=new g_(r,i)}}async function Xs(n){if(Gn(n))for(const t of n.B_)await t(!0)}async function Vi(n){for(const t of n.B_)await t(!1)}function Fh(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ol(e)?sl(e):Lr(e).r_()&&il(e,t))}function rl(n,t){const e=K(n),r=Lr(e);e.N_.delete(t),r.r_()&&zh(e,t),e.N_.size===0&&(r.r_()?r.o_():Gn(e)&&e.q_.set("Unknown"))}function il(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Lr(n).A_(t)}function zh(n,t){n.Q_.xe(t),Lr(n).R_(t)}function sl(n){n.Q_=new v0({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Lr(n).start(),n.q_.v_()}function ol(n){return Gn(n)&&!Lr(n).n_()&&n.N_.size>0}function Gn(n){return K(n).L_.size===0}function Uh(n){n.Q_=void 0}async function v_(n){n.q_.set("Online")}async function __(n){n.N_.forEach((t,e)=>{il(n,t)})}async function w_(n,t){Uh(n),ol(n)?(n.q_.M_(t),sl(n)):n.q_.set("Unknown")}async function E_(n,t,e){if(n.q_.set("Online"),t instanceof xh&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Vs(n,r)}else if(t instanceof vs?n.Q_.Ke(t):t instanceof Sh?n.Q_.He(t):n.Q_.We(t),!e.isEqual(G.min()))try{const r=await Vh(n.localStore);e.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Bt.EMPTY_BYTE_STRING,f.snapshotVersion)),zh(s,u);const m=new rn(f.target,u,h,f.sequenceNumber);il(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Vs(n,r)}}async function Vs(n,t,e){if(!Di(t))throw t;n.L_.add(1),await Vi(n),n.q_.set("Offline"),e||(e=()=>Vh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Xs(n)})}function $h(n,t){return t().catch(e=>Vs(n,e,t))}async function Js(n){const t=K(n),e=pn(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;I_(t);)try{const i=await s_(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,b_(t,i)}catch(i){await Vs(t,i)}qh(t)&&jh(t)}function I_(n){return Gn(n)&&n.O_.length<10}function b_(n,t){n.O_.push(t);const e=pn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function qh(n){return Gn(n)&&!pn(n).n_()&&n.O_.length>0}function jh(n){pn(n).start()}async function T_(n){pn(n).p_()}async function A_(n){const t=pn(n);for(const e of n.O_)t.m_(e.mutations)}async function S_(n,t,e){const r=n.O_.shift(),i=Xa.from(r,t,e);await $h(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Js(n)}async function x_(n,t){t&&pn(n).V_&&await async function(r,i){if(function(a){return m0(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();pn(r).s_(),await $h(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Js(r)}}(n,t),qh(n)&&jh(n)}async function Ru(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Gn(e);e.L_.add(3),await Vi(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Xs(e)}async function R_(n,t){const e=K(n);t?(e.L_.delete(2),await Xs(e)):t||(e.L_.add(2),await Vi(e),e.q_.set("Unknown"))}function Lr(n){return n.K_||(n.K_=function(e,r,i){const s=K(e);return s.w_(),new f_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:v_.bind(null,n),Ro:__.bind(null,n),mo:w_.bind(null,n),d_:E_.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ol(n)?sl(n):n.q_.set("Unknown")):(await n.K_.stop(),Uh(n))})),n.K_}function pn(n){return n.U_||(n.U_=function(e,r,i){const s=K(e);return s.w_(),new p_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:T_.bind(null,n),mo:x_.bind(null,n),f_:A_.bind(null,n),g_:S_.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Js(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class al{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,l=new al(t,e,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ll(n,t){if(Be("AsyncQueue",`${t}: ${n}`),Di(n))return new F(M.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class vr{constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=ii(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new vr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new vr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Pu{constructor(){this.W_=new mt(j.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Y():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Rr{constructor(t,e,r,i,s,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Rr(t,e,vr.emptySet(e),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class P_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class C_{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=K(e),s=i.queries;i.queries=Cu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new F(M.ABORTED,"Firestore shutting down"))}}function Cu(){return new Nr(n=>fh(n),Hs)}async function Hh(n,t){const e=K(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new P_,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ll(a,`Initialization of query '${lr(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&cl(e)}async function Wh(n,t){const e=K(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function k_(n,t){const e=K(n);let r=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&cl(e)}function M_(n,t,e){const r=K(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function cl(n){n.Y_.forEach(t=>{t.next()})}var ya,ku;(ku=ya||(ya={})).ea="default",ku.Cache="cache";class Yh{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Rr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Rr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ya.Cache}}/**
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
 */class Gh{constructor(t){this.key=t}}class Kh{constructor(t){this.key=t}}class D_{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=ph(t),this.Ra=new vr(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Pu,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,m)=>{const _=i.get(f),T=Ws(this.query,m)?m:null,S=!!_&&this.mutatedKeys.has(_.key),R=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;_&&T?_.data.isEqual(T.data)?S!==R&&(r.track({type:3,doc:T}),b=!0):this.ga(_,T)||(r.track({type:2,doc:T}),b=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!_&&T?(r.track({type:0,doc:T}),b=!0):_&&!T&&(r.track({type:1,doc:_}),b=!0,(u||h)&&(l=!0)),b&&(T?(a=a.add(T),s=R?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,m)=>function(T,S){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(T)-R(S)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Rr(this.query,t.Ra,s,a,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=J(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Kh(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Gh(r))}),e}ba(t){this.Ta=t.Ts,this.da=J();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class N_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class L_{constructor(t){this.key=t,this.va=!1}}class V_{constructor(t,e,r,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Nr(l=>fh(l),Hs),this.Ma=new Map,this.xa=new Set,this.Oa=new mt(j.comparator),this.Na=new Map,this.La=new tl,this.Ba={},this.ka=new Map,this.qa=xr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function O_(n,t,e=!0){const r=ef(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Qh(r,t,e,!0),i}async function B_(n,t){const e=ef(n);await Qh(e,t,!0,!1)}async function Qh(n,t,e,r){const i=await o_(n.localStore,_e(t)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return r&&(l=await F_(n,t,s,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Fh(n.remoteStore,i),l}async function F_(n,t,e,r,i){n.Ka=(m,_,T)=>async function(R,b,k,D){let C=b.view.ma(k);C.ns&&(C=await Au(R.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,C)));const L=D&&D.targetChanges.get(b.targetId),z=D&&D.targetMismatches.get(b.targetId)!=null,V=b.view.applyChanges(C,R.isPrimaryClient,L,z);return Du(R,b.targetId,V.wa),V.snapshot}(n,m,_,T);const s=await Au(n.localStore,t,!0),a=new D_(t,s.Ts),l=a.ma(s.documents),u=Li.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Du(n,e,h.wa);const f=new N_(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function z_(n,t,e){const r=K(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Hs(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ga(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&rl(r.remoteStore,i.targetId),va(r,i.targetId)}).catch(Mi)):(va(r,i.targetId),await ga(r.localStore,i.targetId,!0))}async function U_(n,t){const e=K(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),rl(e.remoteStore,r.targetId))}async function $_(n,t,e){const r=K_(n);try{const i=await function(a,l){const u=K(a),h=At.now(),f=l.reduce((T,S)=>T.add(S.key),J());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Fe(),R=J();return u.cs.getEntries(T,f).next(b=>{S=b,S.forEach((k,D)=>{D.isValidDocument()||(R=R.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,S)).next(b=>{m=b;const k=[];for(const D of l){const C=u0(D,m.get(D.key).overlayedDocument);C!=null&&k.push(new gn(D.key,C,sh(C.value.mapValue),ie.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,k,l)}).next(b=>{_=b;const k=b.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(T,b.batchId,k)})}).then(()=>({batchId:_.batchId,changes:gh(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new mt(rt)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,e),await Oi(r,i.changes),await Js(r.remoteStore)}catch(i){const s=ll(i,"Failed to persist write");e.reject(s)}}async function Xh(n,t){const e=K(n);try{const r=await r_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(st(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?st(a.va):i.removedDocuments.size>0&&(st(a.va),a.va=!1))}),await Oi(e,r,t)}catch(r){await Mi(r)}}function Mu(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=K(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(l)&&(h=!0)}),h&&cl(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function q_(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let a=new mt(j.comparator);a=a.insert(s,Ht.newNoDocument(s,G.min()));const l=J().add(s),u=new Ks(G.min(),new Map,new mt(rt),a,l);await Xh(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),ul(r)}else await ga(r.localStore,t,!1).then(()=>va(r,t,e)).catch(Mi)}async function j_(n,t){const e=K(n),r=t.batch.batchId;try{const i=await n_(e.localStore,t);Zh(e,r,null),Jh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Oi(e,i)}catch(i){await Mi(i)}}async function H_(n,t,e){const r=K(n);try{const i=await function(a,l){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(st(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,t);Zh(r,t,e),Jh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Oi(r,i)}catch(i){await Mi(i)}}function Jh(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Zh(n,t,e){const r=K(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function va(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||tf(n,r)})}function tf(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(rl(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ul(n))}function Du(n,t,e){for(const r of e)r instanceof Gh?(n.La.addReference(r.key,t),W_(n,r)):r instanceof Kh?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||tf(n,r.key)):Y()}function W_(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+e),n.xa.add(r),ul(n))}function ul(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(ft.fromString(t)),r=n.qa.next();n.Na.set(r,new L_(e)),n.Oa=n.Oa.insert(e,r),Fh(n.remoteStore,new rn(_e(Ga(e.path)),r,"TargetPurposeLimboResolution",$a.oe))}}async function Oi(n,t,e){const r=K(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(h=>{var f;if((h||e)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=nl.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,_=>N.forEach(_.$i,T=>f.persistence.referenceDelegate.addReference(m,_.targetId,T)).next(()=>N.forEach(_.Ui,T=>f.persistence.referenceDelegate.removeReference(m,_.targetId,T)))))}catch(m){if(!Di(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const T=f.os.get(_),S=T.snapshotVersion,R=T.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(_,R)}}}(r.localStore,s))}async function Y_(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const r=await Lh(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new F(M.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Oi(e,r.hs)}}function G_(n,t){const e=K(n),r=e.Na.get(t);if(r&&r.va)return J().add(r.key);{let i=J();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function ef(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=q_.bind(null,t),t.Ca.d_=k_.bind(null,t.eventManager),t.Ca.$a=M_.bind(null,t.eventManager),t}function K_(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=j_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=H_.bind(null,t),t}class Os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return e_(this.persistence,new Z0,t.initialUser,this.serializer)}Ga(t){return new Q0(el.Zr,this.serializer)}Wa(t){return new l_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Os.provider={build:()=>new Os};class _a{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y_.bind(null,this.syncEngine),await R_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new C_}()}createDatastore(t){const e=Qs(t.databaseInfo.databaseId),r=function(s){return new h_(s)}(t.databaseInfo);return function(s,a,l,u){return new m_(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,a,l){return new y_(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Mu(this.syncEngine,e,0),function(){return xu.D()?new xu:new c_}())}createSyncEngine(t,e){return function(i,s,a,l,u,h,f){const m=new V_(i,s,a,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=K(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Vi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_a.provider={build:()=>new _a};/**
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
 */class nf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Be("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Q_{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=nh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ll(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $o(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Nu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await X_(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ru(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ru(t.remoteStore,i)),n._onlineComponents=t}async function X_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await $o(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;br("Error using user provided cache. Falling back to memory cache: "+e),await $o(n,new Os)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await $o(n,new Os);return n._offlineComponents}async function rf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Nu(n,new _a))),n._onlineComponents}function J_(n){return rf(n).then(t=>t.syncEngine)}async function sf(n){const t=await rf(n),e=t.eventManager;return e.onListen=O_.bind(null,t.syncEngine),e.onUnlisten=z_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=B_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=U_.bind(null,t.syncEngine),e}function Z_(n,t,e={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new nf({next:_=>{f.Za(),a.enqueueAndForget(()=>Wh(s,m));const T=_.docs.has(l);!T&&_.fromCache?h.reject(new F(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&u&&u.source==="server"?h.reject(new F(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Yh(Ga(l.path),f,{includeMetadataChanges:!0,_a:!0});return Hh(s,m)}(await sf(n),n.asyncQueue,t,e,r)),r.promise}function tw(n,t,e={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new nf({next:_=>{f.Za(),a.enqueueAndForget(()=>Wh(s,m)),_.fromCache&&u.source==="server"?h.reject(new F(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Yh(l,f,{includeMetadataChanges:!0,_a:!0});return Hh(s,m)}(await sf(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function of(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Lu=new Map;/**
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
 */function af(n,t,e){if(!e)throw new F(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ew(n,t,e,r){if(t===!0&&r===!0)throw new F(M.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vu(n){if(!j.isDocumentKey(n))throw new F(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ou(n){if(j.isDocumentKey(n))throw new F(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Y()}function ze(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(n);throw new F(M.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function nw(n,t){if(t<=0)throw new F(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Bu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ew("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=of((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class to{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _v;switch(r.type){case"firstParty":return new bv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Lu.get(e);r&&($("ComponentProvider","Removing Datastore"),Lu.delete(e),r.terminate())}(this),Promise.resolve()}}function rw(n,t,e,r={}){var i;const s=(n=ze(n,to))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=jt.MOCK_USER;else{l=Rp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new F(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new jt(h)}n._authCredentials=new wv(new eh(l,u))}}/**
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
 */class yn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new yn(this.firestore,t,this._query)}}class Zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}}class cn extends yn{constructor(t,e,r){super(t,e,Ga(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new j(t))}withConverter(t){return new cn(this.firestore,t,this._path)}}function iw(n,t,...e){if(n=bt(n),af("collection","path",t),n instanceof to){const r=ft.fromString(t,...e);return Ou(r),new cn(n,null,r)}{if(!(n instanceof Zt||n instanceof cn))throw new F(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Ou(r),new cn(n.firestore,null,r)}}function _r(n,t,...e){if(n=bt(n),arguments.length===1&&(t=nh.newId()),af("doc","path",t),n instanceof to){const r=ft.fromString(t,...e);return Vu(r),new Zt(n,null,new j(r))}{if(!(n instanceof Zt||n instanceof cn))throw new F(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Vu(r),new Zt(n.firestore,n instanceof cn?n.converter:null,new j(r))}}/**
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
 */class Fu{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Oh(this,"async_queue_retry"),this.Vu=()=>{const r=Uo();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Uo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Uo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Le;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Di(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=al.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Vr extends to{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Fu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fu(t),this._firestoreClient=void 0,await t}}}function sw(n,t){const e=typeof n=="object"?n:fd(),r=typeof n=="string"?n:"(default)",i=Pa(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Sp("firestore");s&&rw(i,...s)}return i}function eo(n){if(n._terminated)throw new F(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ow(n),n._firestoreClient}function ow(n){var t,e,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new Vv(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,of(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Q_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Pr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pr(Bt.fromBase64String(t))}catch(e){throw new F(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pr(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class no{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class dl{constructor(t){this._methodName=t}}/**
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
 */class hl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
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
 */class fl{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const aw=/^__.*__$/;class lw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new gn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ni(t,this.data,e,this.fieldTransforms)}}class lf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new gn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function cf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class pl{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new pl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Bs(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(cf(this.Cu)&&aw.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class cw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qs(t)}Qu(t,e,r,i=!1){return new pl({Cu:t,methodName:e,qu:r,path:Vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ro(n){const t=n._freezeSettings(),e=Qs(n._databaseId);return new cw(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ml(n,t,e,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);gl("Data must be an object, but it was:",a,r);const l=uf(r,a);let u,h;if(s.merge)u=new re(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=wa(t,m,e);if(!a.contains(_))throw new F(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);hf(f,_)||f.push(_)}u=new re(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new lw(new Xt(l),u,h)}class io extends dl{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof io}}function uw(n,t,e,r){const i=n.Qu(1,t,e);gl("Data must be an object, but it was:",i,r);const s=[],a=Xt.empty();Yn(r,(u,h)=>{const f=yl(t,u,e);h=bt(h);const m=i.Nu(f);if(h instanceof io)s.push(f);else{const _=Bi(h,m);_!=null&&(s.push(f),a.set(f,_))}});const l=new re(s);return new lf(a,l,i.fieldTransforms)}function dw(n,t,e,r,i,s){const a=n.Qu(1,t,e),l=[wa(t,r,e)],u=[i];if(s.length%2!=0)throw new F(M.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(wa(t,s[_])),u.push(s[_+1]);const h=[],f=Xt.empty();for(let _=l.length-1;_>=0;--_)if(!hf(h,l[_])){const T=l[_];let S=u[_];S=bt(S);const R=a.Nu(T);if(S instanceof io)h.push(T);else{const b=Bi(S,R);b!=null&&(h.push(T),f.set(T,b))}}const m=new re(h);return new lf(f,m,a.fieldTransforms)}function hw(n,t,e,r=!1){return Bi(e,n.Qu(r?4:3,t))}function Bi(n,t){if(df(n=bt(n)))return gl("Unsupported field value:",t,n),uf(n,t);if(n instanceof dl)return function(r,i){if(!cf(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Bi(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=At.fromDate(r);return{timestampValue:Ls(i.serializer,s)}}if(r instanceof At){const s=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ls(i.serializer,s)}}if(r instanceof hl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pr)return{bytesValue:Rh(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Za(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fl)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ka(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Zs(r)}`)}(n,t)}function uf(n,t){const e={};return rh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yn(n,(r,i)=>{const s=Bi(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function df(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof At||n instanceof hl||n instanceof Pr||n instanceof Zt||n instanceof dl||n instanceof fl)}function gl(n,t,e){if(!df(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Zs(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function wa(n,t,e){if((t=bt(t))instanceof no)return t._internalPath;if(typeof t=="string")return yl(n,t);throw Bs("Field path arguments must be of type string or ",n,!1,void 0,e)}const fw=new RegExp("[~\\*/\\[\\]]");function yl(n,t,e){if(t.search(fw)>=0)throw Bs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new no(...t.split("."))._internalPath}catch{throw Bs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bs(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new F(M.INVALID_ARGUMENT,l+n+u)}function hf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class ff{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(so("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class pw extends ff{data(){return super.data()}}function so(n,t){return typeof t=="string"?yl(n,t):t instanceof no?t._internalPath:t._delegate._internalPath}/**
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
 */function mw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vl{}class _l extends vl{}function hi(n,t,...e){let r=[];t instanceof vl&&r.push(t),r=r.concat(e),function(s){const a=s.filter(u=>u instanceof El).length,l=s.filter(u=>u instanceof oo).length;if(a>1||a>0&&l>0)throw new F(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class oo extends _l{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new oo(t,e,r)}_apply(t){const e=this._parse(t);return pf(t._query,e),new yn(t.firestore,t.converter,da(t._query,e))}_parse(t){const e=ro(t.firestore);return function(s,a,l,u,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$u(m,f);const T=[];for(const S of m)T.push(Uu(u,s,S));_={arrayValue:{values:T}}}else _=Uu(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$u(m,f),_=hw(l,a,m,f==="in"||f==="not-in");return It.create(h,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function wl(n,t,e){const r=t,i=so("where",n);return oo._create(i,r,e)}class El extends vl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new El(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ge.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)pf(a,u),a=da(a,u)}(t._query,e),new yn(t.firestore,t.converter,da(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Il extends _l{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Il(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new F(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(s,a)}(t._query,this._field,this._direction);return new yn(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Dr(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function zu(n,t="asc"){const e=t,r=so("orderBy",n);return Il._create(r,e)}class bl extends _l{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new bl(t,e,r)}_apply(t){return new yn(t.firestore,t.converter,Ms(t._query,this._limit,this._limitType))}}function gw(n){return nw("limit",n),bl._create("limit",n,"F")}function Uu(n,t,e){if(typeof(e=bt(e))=="string"){if(e==="")throw new F(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hh(t)&&e.indexOf("/")!==-1)throw new F(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!j.isDocumentKey(r))throw new F(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lu(n,new j(r))}if(e instanceof Zt)return lu(n,e._key);throw new F(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zs(e)}.`)}function $u(n,t){if(!Array.isArray(n)||n.length===0)throw new F(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pf(n,t){const e=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class yw{convertValue(t,e="none"){switch(Hn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(jn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Y()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>_t(a.doubleValue));return new fl(s)}convertGeoPoint(t){return new hl(_t(t.latitude),_t(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ja(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_i(t));default:return null}}convertTimestamp(t){const e=fn(t);return new At(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);st(Nh(r));const i=new wi(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(e)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function Tl(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class oi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mf extends ff{constructor(t,e,r,i,s,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(so("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class _s extends mf{data(t={}){return super.data(t)}}class vw{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new _s(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new _s(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new _s(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:_w(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function _w(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function gf(n){n=ze(n,Zt);const t=ze(n.firestore,Vr);return Z_(eo(t),n._key).then(e=>Ew(t,n,e))}class yf extends yw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function ao(n){n=ze(n,yn);const t=ze(n.firestore,Vr),e=eo(t),r=new yf(t);return mw(n._query),tw(e,n._query).then(i=>new vw(t,r,n,i))}function Al(n,t,e){n=ze(n,Zt);const r=ze(n.firestore,Vr),i=Tl(n.converter,t,e);return Sl(r,[ml(ro(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,ie.none())])}function ww(n,t){const e=ze(n.firestore,Vr),r=_r(n),i=Tl(n.converter,t);return Sl(e,[ml(ro(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ie.exists(!1))]).then(()=>r)}function Sl(n,t){return function(r,i){const s=new Le;return r.asyncQueue.enqueueAndForget(async()=>$_(await J_(r),i,s)),s.promise}(eo(n),t)}function Ew(n,t,e){const r=e.docs.get(t._key),i=new yf(n);return new mf(n,i,t._key,r,new oi(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class Iw{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ro(t)}set(t,e,r){this._verifyNotCommitted();const i=qo(t,this._firestore),s=Tl(i.converter,e,r),a=ml(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ie.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=qo(t,this._firestore);let a;return a=typeof(e=bt(e))=="string"||e instanceof no?dw(this._dataReader,"WriteBatch.update",s._key,e,r,i):uw(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ie.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=qo(t,this._firestore);return this._mutations=this._mutations.concat(new Qa(e._key,ie.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function qo(n,t){if((n=bt(n)).firestore!==t)throw new F(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Fs(n){return eo(n=ze(n,Vr)),new Iw(n,t=>Sl(n,t))}(function(t,e=!0){(function(i){Mr=i})(Cr),Er(new zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Vr(new Ev(r.getProvider("auth-internal")),new Av(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ln(ru,"4.7.3",t),ln(ru,"4.7.3","esm2017")})();const vf={apiKey:"AIzaSyBdbve0H70D-Ch69WlaxEly7PVBFVRB5p0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:2d6f7173c8d7fab6fd9e85",measurementId:"G-80XX542QZE"};function Tt(){return vf.apiKey!=="YOUR_API_KEY"}let jo=null,se=null,Jt=null;try{Tt()?(jo=hd(vf),se=yv(jo),Jt=sw(jo)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const bw=new Ce;let nn=null,fi=[];function Tw(){if(!Tt()||!se){console.warn("Firebase not configured - auth disabled");return}sy(se,n=>{console.log("onAuthStateChanged fired:",n?n.email:"null"),nn=n,console.log("Notifying",fi.length,"listeners"),fi.forEach(t=>t(n))})}function Aw(n){return console.log("onAuthStateChange: adding listener, currentUser is:",nn&&nn.email),fi.push(n),nn&&(console.log("onAuthStateChange: immediately calling listener with user"),n(nn)),()=>{fi=fi.filter(t=>t!==n)}}function Fi(){return nn}function be(){return nn!==null}async function Sw(n,t,e=null){if(!Tt()||!se)throw new Error("Firebase not configured");const r=await Zg(se,n,t);return e&&r.user&&await ny(r.user,{displayName:e}),r}async function xw(n,t){if(!Tt()||!se)throw new Error("Firebase not configured");return ty(se,n,t)}async function Rw(){if(!Tt()||!se)throw new Error("Firebase not configured");console.log("Initiating Google sign-in popup...");try{const n=await Sy(se,bw);return console.log("Google sign-in successful:",n.user.email),n}catch(n){throw console.error("signInWithPopup error:",n.code,n.message),n}}async function _f(){if(!Tt()||!se)throw new Error("Firebase not configured");return oy(se)}async function Pw(n){if(!Tt()||!se)throw new Error("Firebase not configured");return Jg(se,n)}Tw();function lo(n,t="settings"){const e=Fi();return!e||!Jt?null:_r(Jt,"users",e.uid,n,t)}function co(n){const t=Fi();return!t||!Jt?null:iw(Jt,"users",t.uid,n)}async function wf(){if(!Tt())return null;const n=lo("decision");if(!n)return null;try{const t=await gf(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading decision data:",t),null}}async function Cw(n){if(!Tt())return;const t=lo("decision");if(t)try{await Al(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving decision data:",e),e}}async function xl(n={}){if(!Tt())return[];const t=co("history");if(!t)return[];try{let e=hi(t,zu("date",n.sortDesc?"desc":"asc"));n.taxYear&&(e=hi(t,wl("taxYear","==",n.taxYear),zu("date",n.sortDesc?"desc":"asc"))),n.limit&&(e=hi(e,gw(n.limit)));const r=await ao(e),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){return console.error("Error loading decision history:",e),[]}}async function kw(n){if(!Tt())return null;const t=co("history");if(!t)return null;try{const e=hi(t,wl("date","==",n.date)),r=await ao(e);if(!r.empty){const s=r.docs[0].id;return await Al(_r(Jt,"users",Fi().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await ww(t,{...n,createdAt:new Date().toISOString()})).id}catch(e){throw console.error("Error adding history record:",e),e}}async function Mw(n){if(!Tt())return;const t=co("history");if(t)try{const e=hi(t,wl("date","==",n)),r=await ao(e),i=Fs(Jt);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(e){throw console.error("Error deleting history record:",e),e}}async function Dw(){if(!Tt())return;const n=co("history");if(n)try{const t=await ao(n),e=500,r=[];let i=Fs(Jt),s=0;t.forEach(a=>{i.delete(a.ref),s++,s>=e&&(r.push(i),i=Fs(Jt),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(t){throw console.error("Error clearing history:",t),t}}async function Nw(){if(!Tt())return null;const n=lo("stress");if(!n)return null;try{const t=await gf(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading stress data:",t),null}}async function Ef(n){if(!Tt())return;const t=lo("stress");if(t)try{await Al(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving stress data:",e),e}}async function Lw(){if(!Tt())return;const n=Fi();if(!(!n||!Jt))try{await Dw();const t=Fs(Jt);t.delete(_r(Jt,"users",n.uid,"decision","settings")),t.delete(_r(Jt,"users",n.uid,"stress","settings")),t.delete(_r(Jt,"users",n.uid,"profile","settings")),await t.commit(),console.log("All user data wiped successfully")}catch(t){throw console.error("Error wiping user data:",t),t}}async function Vw(){if(!Tt())return!1;const n=await wf(),t=await xl({limit:1});return n!==null||t.length>0}let Gt=null,On=null;const If=5e3;function ws(){return{settings:{equityMin:Qt.EQUITY_MIN,bondMin:Qt.BOND_MIN,cashTarget:Qt.CASH_TARGET,duration:Qt.DURATION_YEARS,baseSalary:Qt.BASE_SALARY,protectionFactor:Qt.PROTECTION_FACTOR,recoveryBuffer:Qt.RECOVERY_BUFFER,consecutiveLimit:Qt.CONSECUTIVE_LIMIT,startDate:null,statePension:12e3,statePensionYear:12},taxYears:{},history:[],lastModified:null,checksum:null}}function zi(){return Tt()&&be()}function Ow(){Gt=null,On=null}function bf(){return Gt&&On&&Date.now()-On<If?Gt:ws()}async function Kn(){if(Gt&&On&&Date.now()-On<If)return Gt;if(!zi())return console.warn("Firebase not available - returning defaults"),ws();try{const n=await wf(),t=await xl();if(n){const e={settings:n.settings||ws().settings,taxYears:n.taxYears||{},history:t||[],lastModified:n.lastModified,checksum:n.checksum};return Gt=e,On=Date.now(),e}}catch(n){console.error("Error loading from Firebase:",n)}return ws()}async function uo(n){if(!zi())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=Bw(n),await Cw({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),Gt=n,On=Date.now()}catch(t){throw console.error("Error saving to Firebase:",t),new Error("Failed to save decision data")}}function Bw(n){const t={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return rd(t)}async function Or(){return(await Kn()).settings}async function Rl(n){const t=await Kn();t.settings={...t.settings,...n},await uo(t)}function Pl(){return{pa:ne.PERSONAL_ALLOWANCE,brl:ne.BASIC_RATE_LIMIT,hrl:ne.HIGHER_RATE_LIMIT,cpi:.04,other:0,isaSavingsAllocation:0,isaSavingsUsed:0,isTaxEfficient:!0,taxEfficiencyChoice:null,grossIncomeToDate:0,startMonth:4,yearSetupComplete:!1,confirmedSalary:null}}function Fw(n){const e=bf().taxYears[n];return e||Pl()}async function Cl(n){const e=(await Kn()).taxYears[n];return e||Pl()}async function kl(n,t){const e=await Kn();e.taxYears[n]={...Fw(n),...t},await uo(e)}async function zw(n,t){const e=await Kn(),r=e.taxYears[n]||Pl();r.isaSavingsUsed=(r.isaSavingsUsed||0)+t,e.taxYears[n]=r,await uo(e)}async function Uw(n){return(await Cl(n)).yearSetupComplete===!0}async function ho(){return(await Kn()).taxYears}function $w(n={}){let e=[...bf().history];return n.taxYear&&(e=e.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(e=e.filter(r=>r.date>=n.startDate)),n.endDate&&(e=e.filter(r=>r.date<=n.endDate)),n.sortDesc?e.sort((r,i)=>i.date.localeCompare(r.date)):e.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(e=e.slice(0,n.limit)),e}async function Tf(n={}){if(zi())try{return await xl(n)}catch(t){console.error("Error loading history from Firebase:",t)}return $w(n)}async function qw(n){if(!zi())throw new Error("Must be logged in to save history");if(await kw(n),Gt){const t=Gt.history.findIndex(e=>e.date===n.date);t>=0?Gt.history[t]=n:Gt.history.push(n),Gt.history.sort((e,r)=>e.date.localeCompare(r.date))}}async function jw(n){if(!zi())throw new Error("Must be logged in to delete history");await Mw(n),Gt&&(Gt.history=Gt.history.filter(t=>t.date!==n))}async function Hw(n){const t=await Or(),e=await ho(),r=t.statePension||0,i=t.statePensionYear||12,s=Object.keys(e).sort(),a=s.indexOf(n),l=a>=0?a:s.length,u=Math.max(0,i-l),h=l>=i;let f=0;if(h){let m=1;for(let _=0;_<l;_++){const T=s[_],S=e[T],R=(S==null?void 0:S.cpi)||.025;m*=1+R}f=r*m}return{amount:f,yearsUntil:u,isReceiving:h}}async function Ww(n){const t=cp(n);t.stdSipp=n.sippDraw-(n.boostAmount||0),await qw(t),n.isaDraw&&n.isaDraw>0&&n.taxYear&&await zw(n.taxYear,n.isaDraw)}function fo(n,t,e=0){const r=Sa(e);let i=n.equityStart,s=n.bondStart,a=n.cashStart,l=n.hodlEnabled?n.hodlStart!==void 0?n.hodlStart:n.hodlValue:0,u=0,h=null,f=0,m=0,_=0,T=0,S=!1,R=!1,b=null,k=0,D=-1;const C=[],L=[];let z=1;C.push({year:0,month:0,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let V=0;V<n.years*12;V++){const E=Math.floor(V/12),g=V%12,w=g>=3?E:E-1;if(w!==D&&(k=0,D=w),V>0&&V%12===0){const at=t.inflation[E]||.025;L.push(at),z*=1+at}const v=t.equity[E]||0,I=t.inflation[E]||.025,A=E>0?t.inflation[E-1]||.025:I,y=pr(n.equityMin,E,n.duration,z,!0),pt=pr(n.bondMin,E,n.duration,z,!0),X=pr(n.cashTarget,E,n.duration,z,!1),St=Gw(n,E,z,L),ct=St;let gt=S?St*n.protectionMult:St;S&&(k+=ct-gt);const it=Yw(I,v,A,r),ue=Math.max(.005,I+.012);if(i*=1+Math.pow(1+v,1/12)-1,s*=1+Math.pow(1+it,1/12)-1,a*=1+Math.pow(1+ue,1/12)-1,l>0){const Dt=(r()-.5)*2*.06;let zt=0;v<-.1?zt=Math.min(.15,Math.abs(v)*.4):v<-.05&&(zt=Math.abs(v)*.2);let Yt=.069+Dt+zt;Yt=Math.max(-.08,Math.min(.18,Yt)),l*=1+Math.pow(1+Yt,1/12)-1}const ut=i+s,q=y+pt;S&&ut>q+5e3&&(S=!1,T=0,m=Math.max(m,_),_=0),S&&(f++,_++);let vt=0;if(!S&&k>0&&ut>q+15e3){let at=g>=3?15-g:3-g;at<1&&(at=1);const Ft=ut-q-15e3,Dt=Math.min(k/at,Ft/at),zt=ct*.5;vt=Math.min(Dt,zt),vt>50&&(gt+=vt,k-=vt)}let ot="Growth";if(!S&&ut>=q+gt){const at=Math.max(0,i-y),Ft=Math.max(0,s-pt),Dt=at+Ft;if(Dt>0){if(i-=gt*at/Dt,s-=gt*Ft/Dt,T=0,ot="Growth",a<X){const zt=ut-q-gt;if(zt>5e3){const Yt=Math.min((X-a)*.3,zt*.5);i-=Yt*at/Dt,s-=Yt*Ft/Dt,a+=Yt}}}else a-=gt,ot="Cash"}else if(a>=gt)a-=gt,T++,ot="Cash",!n.disableProtection&&T>=n.consecutiveLimit&&(S=!0);else{const at=gt-a;a=0,s>at?(s-=at,ot="Bond"):i>at?(i-=at,ot="Equity"):l>at?(l-=at,u+=at,h===null&&(h=V),ot="HODL"):(R=!0,b=V)}if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(g===0||V===n.years*12-1||R)&&C.push({year:E+g/12,month:V,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:gt,boostAmount:vt,source:ot,inProtection:S,equityMin:y,bondMin:pt,cashMax:X}),R)break}return m=Math.max(m,_),{failed:R,years:R?b/12:n.years,failMonth:b,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,finalHodl:l,protMonths:f,maxConsec:m,hodlUsed:u,hodlUsedMonth:h,hist:C,seed:e}}function Yw(n,t,e,r){let i=.15,s=.3,a=.2,l=.1,u=.1,h=.15;const f=e!==void 0?e:n,m=f>.045,_=f>.07;if(m){const C=r()>.3?1:.5;_?(i=.15+.35*C,s=.3-.2*C,h=.15-.1*C,l=.1+.05*C):(i=.15+.2*C,s=.3-.1*C,h=.15-.05*C)}m&&r()<.15&&(i=.2,s=.25,h=.12);const T=n+.005+Zr(0,.03,r),S=.04-(n>.04?(n-.04)*.5:0)+Zr(0,.05,r),R=.03+n*.3+Zr(0,.08,r),b=n*.8+Zr(0,.15,r),k=Math.max(.005,n+.005),D=t*.5+Zr(0,.02,r);return i*T+s*S+a*R+l*b+u*k+h*D}function Gw(n,t,e,r){n.taxMode==="frozen"?n.pa:n.pa*e;const i=n.taxMode==="frozen"?n.brl:n.brl*e,s=n.baseSalary*e;let a=n.other;for(const f of r)a*=1+Math.min(f,.04);const l=t>=n.statePensionYear?n.statePension*e:0,u=a+l;return Math.max(0,Math.min(i,s)-u)/12}function Af(n,t=1e3){const e=Object.keys(mi).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<t;i++){const s=Sa(i*12345),a={equity:{},inflation:{}};for(let l=0;l<n.years;l++){const u=e[Math.floor(s()*e.length)];a.equity[l]=mi[u],a.inflation[l]=Aa[u]||.025}r.push(fo(n,a,i))}return r}function Sf(n){const t=Object.keys(mi).map(Number).sort((i,s)=>i-s),e=Math.max(...t),r=[];for(const i of t){if(i+n.years-1>e)continue;const s={equity:{},inflation:{}};for(let l=0;l<n.years;l++)s.equity[l]=mi[i+l]||0,s.inflation[l]=Aa[i+l]||.025;const a=fo(n,s,i);a.startYear=i,r.push(a)}return r}function Kw(n,t){const e={equity:{},inflation:{}};for(let r=0;r<n.years;r++)e.equity[r]=t.equity[r%t.equity.length],e.inflation[r]=t.inflation[r%t.inflation.length];return fo(n,e,999)}function Qw(n){const t=n.filter(e=>e.failed).length;return(n.length-t)/n.length*100}function xf(n){const t=n.filter(l=>!l.failed),e=n.filter(l=>l.failed),r=n.map(l=>l.years).sort((l,u)=>l-u),i=t.map(l=>l.final).sort((l,u)=>l-u),s=n.map(l=>l.protMonths).sort((l,u)=>l-u),a=(l,u)=>l[Math.floor(l.length*u)]||0;return{total:n.length,successCount:t.length,failCount:e.length,successRate:Qw(n),survival:{p5:a(r,.05),p10:a(r,.1),p25:a(r,.25),p50:a(r,.5),p75:a(r,.75),p90:a(r,.9),p95:a(r,.95),min:r[0],max:r[r.length-1]},finalValue:{p5:a(i,.05),p10:a(i,.1),p25:a(i,.25),p50:a(i,.5),p75:a(i,.75),p90:a(i,.9),p95:a(i,.95),min:i[0]||0,max:i[i.length-1]||0,avg:t.reduce((l,u)=>l+u.final,0)/(t.length||1)},minYears:r[0],p10Years:a(r,.1),medianYears:a(r,.5),medianFinal:a(i,.5),p10Final:a(i,.1),p90Final:a(i,.9),avgFinal:t.reduce((l,u)=>l+u.final,0)/(t.length||1),protection:{runsWithProtection:n.filter(l=>l.protMonths>0).length,pctWithProtection:n.filter(l=>l.protMonths>0).length/n.length*100,avgMonths:s.reduce((l,u)=>l+u,0)/n.length,maxMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,p50Months:a(s,.5),p90Months:a(s,.9),p95Months:a(s,.95)},runsWithProtection:n.filter(l=>l.protMonths>0).length,avgProtMonths:s.reduce((l,u)=>l+u,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,hodl:{runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,pctUsingHodl:n.filter(l=>l.hodlUsed>0).length/n.length*100,avgUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxUsed:Math.max(...n.map(l=>l.hodlUsed||0))},runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,avgHodlUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxHodlUsed:Math.max(...n.map(l=>l.hodlUsed||0)),failures:e.map(l=>({seed:l.seed,startYear:l.startYear,years:l.years,failMonth:l.failMonth,protMonths:l.protMonths}))}}let sn=null,Bn=null;const Rf=5e3;function wr(){return{settings:{equityMin:Qt.EQUITY_MIN,bondMin:Qt.BOND_MIN,cashTarget:Qt.CASH_TARGET,duration:Qt.DURATION_YEARS,baseSalary:Qt.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:ne.PERSONAL_ALLOWANCE,brl:ne.BASIC_RATE_LIMIT,hrl:ne.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:ko.PROTECTION_MULTIPLIER,consecutiveLimit:Qt.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:ko.HODL_ENABLED,hodlValue:ko.HODL_VALUE},lastModified:null,checksum:null}}function Ml(){return Tt()&&be()}function Xw(){sn=null,Bn=null}function Jw(){return sn&&Bn&&Date.now()-Bn<Rf?sn:wr()}async function Pf(){if(sn&&Bn&&Date.now()-Bn<Rf)return sn;if(!Ml())return console.warn("Firebase not available - returning defaults"),wr();try{const n=await Nw();if(n){const t={settings:n.settings||wr().settings,lastModified:n.lastModified,checksum:n.checksum};return sn=eE(t),Bn=Date.now(),sn}}catch(n){console.error("Error loading stress data from Firebase:",n)}return wr()}async function Zw(n){if(!Ml())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=tE(n),await Ef({settings:n.settings,lastModified:n.lastModified,checksum:n.checksum}),sn=n,Bn=Date.now()}catch(t){throw console.error("Error saving stress data to Firebase:",t),new Error("Failed to save stress data")}}function tE(n){return rd(n.settings)}function eE(n){const t={...wr()};return n.settings&&(t.settings={...t.settings,...n.settings},n.settings.pacwMin!==void 0&&n.settings.equityMin===void 0&&(t.settings.equityMin=n.settings.pacwMin),n.settings.cgtMin!==void 0&&n.settings.bondMin===void 0&&(t.settings.bondMin=n.settings.cgtMin),n.settings.csh2Target!==void 0&&n.settings.cashTarget===void 0&&(t.settings.cashTarget=n.settings.csh2Target),t.settings.hodlEnabled===void 0&&(t.settings.hodlEnabled=!1),t.settings.hodlValue===void 0&&(t.settings.hodlValue=25e3)),t.lastModified=n.lastModified,t.checksum=n.checksum,t}function nE(){return Jw().settings}async function vn(){return(await Pf()).settings}async function Dl(n){const t=await Pf();t.settings={...t.settings,...n},await Zw(t)}async function rE(){if(!Ml())throw new Error("Must be logged in to reset settings");const n=wr();await Ef({settings:n.settings,lastModified:new Date().toISOString()}),Xw()}function Nl(n={},t=null){const e=t||nE();return{equityStart:n.equityStart??e.equityMin,bondStart:n.bondStart??e.bondMin,cashStart:n.cashStart??e.cashTarget,equityMin:e.equityMin,bondMin:e.bondMin,cashTarget:e.cashTarget,years:n.years??e.duration,duration:e.duration,baseSalary:e.baseSalary,other:e.other,statePension:e.statePension,statePensionYear:e.statePensionYear,pa:e.pa,brl:e.brl,hrl:e.hrl,taxMode:e.taxMode,protectionMult:e.protectionMult,consecutiveLimit:e.consecutiveLimit,disableProtection:e.disableProtection,hodlEnabled:e.hodlEnabled,hodlValue:e.hodlValue}}function U(n,t=null){const e=Math.abs(n),r=t!==null?t:e<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function qu(n,t){const e=iE(n);t.innerHTML=e}function iE(n){var v,I,A,y,pt;const t=n,e=t.calculationDetails||{};let r="";const i=t.isTaxEfficientYear??t.taxEfficient,s=t.protectionInducedTaxEfficiency||!1;let a,l,u;if(s?(a="info",l="Protection-Induced Tax Efficiency",u="↑"):i?(a="success",l="Tax-Efficient Year",u="✓"):(a="warning",l="Tax-Inefficient Year",u="!"),r+=`<div class="decision-mode ${a}">
    <span class="mode-icon">${u}</span>
    <span class="mode-label">${l}</span>
    ${t.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,i&&t.yearlyIsaSavingsAllocation>0){const X=t.cumulativeIsaSavingsUsed||0,St=t.yearlyIsaSavingsAllocation,ct=Math.max(0,St-X-(t.isaDraw||0)),Mt=St>0?(X+(t.isaDraw||0))/St*100:0;r+=`<div class="isa-progress-card">
      <h4>ISA/Savings Allocation</h4>
      <div class="isa-progress-bar">
        <div class="isa-progress-fill" style="width: ${Math.min(Mt,100)}%"></div>
      </div>
      <div class="isa-progress-stats">
        <span>Used: ${U(X+(t.isaDraw||0))} of ${U(St)}</span>
        <span>Remaining: ${U(ct)}</span>
      </div>
    </div>`}if(t.alerts&&t.alerts.length>0){r+='<div class="alerts">';for(const X of t.alerts){const St=sE(X.severity);r+=`<div class="alert ${St}">${X.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${U(t.sippDraw)}</span>`,r+="</div>",t.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${U(t.isaDraw)}</span>`,r+="</div>"),t.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${U(t.other)}</span>`,r+="</div>"),t.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${U(t.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const h=t.sippDraw+t.other+t.statePension,f=h*12,m=t.pa||12570,_=t.brl||50270;let T=0;f>m&&(f<=_?T=(f-m)*.2:T=(_-m)*.2+(f-_)*.4);const S=h-T/12+t.isaDraw;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${U(S)}</span>`,r+="</div>",t.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${U(t.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${t.source.toLowerCase()}">${t.source}</div>`,t.source==="Growth"&&(t.drawFromEquity>0||t.drawFromBond>0)&&(r+='<div class="source-breakdown">',t.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${U(t.drawFromEquity)}</div>`),t.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${U(t.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const R=t.equity+t.bond+t.cash,b=t.adjEquityMin+t.adjBondMin+t.adjCashTarget,k=R-b,D=b>0?k/b*100:0;r+='<div class="fund-grid">';const C=t.equity-t.adjEquityMin;r+=Ho("Equity",t.equity,t.adjEquityMin,C);const L=t.bond-t.adjBondMin;r+=Ho("Bond",t.bond,t.adjBondMin,L);const z=t.cash-t.adjCashTarget;r+=Ho("Cash",t.cash,t.adjCashTarget,z),r+="</div>";const V=k>=0?"healthy":"warning";r+=`<div class="overall-status ${V}">`,r+=`<span>Total Surplus: ${U(k)}</span>`,r+=`<span>(${D.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-thresholds">',r+=`<div class="tax-threshold-item"><span class="label">PA:</span><span>${U(t.pa)}</span></div>`,r+=`<div class="tax-threshold-item"><span class="label">BRL:</span><span>${U(t.brl)}</span></div>`,e.taxInfo&&(r+=`<div class="tax-threshold-item"><span class="label">Headroom:</span><span class="${e.taxInfo.headroomToBRL>0?"success":"warning"}">${U(e.taxInfo.headroomToBRL)}</span></div>`),r+="</div>",r+='<div class="tax-comparison">',r+='<div class="tax-comparison-header">',r+="<div></div><div>Monthly</div><div>YTD</div><div>Projected</div>",r+="</div>";const E=((v=e.taxInfo)==null?void 0:v.monthlyTax)||T/12,g=t.taxPaidYTD||E,w=t.taxProjectedAnnual||((I=e.taxInfo)==null?void 0:I.annualTax)||T;if(r+='<div class="tax-comparison-row">',r+='<div class="label">Tax Paid</div>',r+=`<div>${U(E)}</div>`,r+=`<div>${U(g)}</div>`,r+=`<div>${U(w)}</div>`,r+="</div>",i||((A=e.taxInfo)==null?void 0:A.taxSavedAnnual)>0){const X=t.taxSavedMonthly||((y=e.taxInfo)==null?void 0:y.taxSavedMonthly)||0,St=t.taxSavedYTD||X,ct=t.taxSavedProjectedAnnual||((pt=e.taxInfo)==null?void 0:pt.taxSavedAnnual)||0;ct>0&&(r+='<div class="tax-comparison-row saved">',r+='<div class="label">Tax Saved</div>',r+=`<div class="success">-${U(X)}</div>`,r+=`<div class="success">-${U(St)}</div>`,r+=`<div class="success">-${U(ct)}</div>`,r+="</div>")}if(r+="</div>",e.taxInfo){const X=e.taxInfo.effectiveRate*100;r+=`<div class="effective-rate">
      <span>Effective Tax Rate:</span>
      <span class="${X<=20?"success":X<=40?"warning":"danger"}">${X.toFixed(1)}%</span>
    </div>`}if(r+="</div>",t.rebalanceNeeded&&t.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const X of t.rebalanceActions)r+=`<li>${X}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${e.reason||"Standard calculation based on your settings."}</p>`,!e.hasSufficientIsa&&e.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${U(e.totalIsaNeeded)} in your ISA (${t.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(e,null,2)+"</pre>",r+="</details>",r}function Ho(n,t,e,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${U(t)}</div>
    <div class="fund-min">Min: ${U(e)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${U(r)}</div>
  </div>`}function sE(n){switch(n){case ss.DANGER:return"alert-danger";case ss.WARNING:return"alert-warning";case ss.SUCCESS:return"alert-success";case ss.INFO:default:return"alert-info"}}function oE(){return`
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

    /* Info mode (protection-induced efficiency) */
    .decision-mode.info {
      background: rgba(126, 184, 218, 0.15);
      border: 1px solid rgba(126, 184, 218, 0.3);
      color: #7eb8da;
    }

    /* ISA Progress Card */
    .isa-progress-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 20px;
    }

    .isa-progress-card h4 {
      margin: 0 0 12px 0;
      font-size: 14px;
      color: var(--text-muted);
    }

    .isa-progress-bar {
      height: 8px;
      background: var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .isa-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), #5a9aba);
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .isa-progress-stats {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      font-size: 13px;
      color: var(--text-muted);
    }

    /* Tax Thresholds Row */
    .tax-thresholds {
      display: flex;
      gap: 20px;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
    }

    .tax-threshold-item {
      display: flex;
      gap: 8px;
      font-size: 14px;
    }

    .tax-threshold-item .label {
      color: var(--text-muted);
    }

    .tax-threshold-item .success {
      color: var(--success);
    }

    .tax-threshold-item .warning {
      color: var(--warning);
    }

    /* Tax Comparison Table */
    .tax-comparison {
      margin: 16px 0;
    }

    .tax-comparison-header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .tax-comparison-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 8px;
      padding: 10px 0;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
    }

    .tax-comparison-row:last-child {
      border-bottom: none;
    }

    .tax-comparison-row .label {
      color: var(--text-muted);
    }

    .tax-comparison-row.saved {
      background: rgba(46, 160, 67, 0.05);
    }

    .tax-comparison-row .success {
      color: var(--success);
    }

    .tax-comparison-row .warning {
      color: var(--warning);
    }

    .tax-comparison-row .danger {
      color: var(--danger);
    }

    /* Effective Rate */
    .effective-rate {
      display: flex;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--card-alt);
      border-radius: 8px;
      margin-top: 16px;
      font-size: 14px;
    }

    .effective-rate .success {
      color: var(--success);
      font-weight: 600;
    }

    .effective-rate .warning {
      color: var(--warning);
      font-weight: 600;
    }

    .effective-rate .danger {
      color: var(--danger);
      font-weight: 600;
    }
  `}async function aE(n){const t=nd(n),e=ed(t),r=t.getMonth()+1;return await Uw(e)?{showWizard:!1,taxYear:e,isApril:r===4,reason:"Year setup already complete"}:{showWizard:!0,taxYear:e,isApril:r===4,reason:`Tax year ${e} has not been set up`}}function lE(n,t){return n*(1+t)}function cE(n){const{targetAnnualGross:t,brl:e,pa:r=12570,remainingMonths:i,grossIncomeToDate:s=0}=n,a=S=>S<=r?0:S<=e?(S-r)*.2:(e-r)*.2+(S-e)*.4,l=Math.max(0,e-s);if(l<=0)return{isaNeeded:0,brlExhausted:!0,remainingBrlHeadroom:0,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!1,reason:"BRL already exhausted by prior income"};if(t<=e)return{isaNeeded:0,brlExhausted:!1,remainingBrlHeadroom:l,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!0,targetAchievableAtBrl:!0,reason:"Target achievable at BRL without ISA"};const u=a(t),h=t-u,f=a(e),m=e-f,_=Math.max(0,h-m),T=_/12*i;return{isaNeeded:T,isaNeededAnnual:_,brlExhausted:!1,remainingBrlHeadroom:l,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!0,targetAchievableAtBrl:!1,netAtTarget:h,netAtBrl:m,taxAtTarget:u,taxAtBrl:f,reason:`Need £${Math.round(T).toLocaleString()} ISA/Savings for tax efficiency`}}function uE(n,t,e){return e?{sufficient:!1,isBrlExhausted:!0,options:[{key:"reduced",label:"Reduce salary to BRL",description:"Accept lower income to stay tax-efficient"},{key:"inefficient",label:"Accept tax-inefficient year",description:"Draw full SIPP, pay 40% on excess"}]}:n>=t?{sufficient:!0,isBrlExhausted:!1,options:[]}:{sufficient:!1,isBrlExhausted:!1,shortfall:t-n,options:[{key:"increase",label:`Increase ISA to £${Math.round(t).toLocaleString()}`,description:"Provide enough ISA for tax efficiency"},{key:"reduced",label:"Reduce salary to BRL",description:"Keep ISA to grow, accept lower income"},{key:"inefficient",label:"Accept tax-inefficient year",description:"Draw full SIPP, ISA stays untouched"}]}}async function dE(n){const t=nd(n),e=ed(t),i=t.getMonth()+1===4,s=fp(t),a=await Or(),l=await Cl(e),u=await ho(),h=Object.keys(u).sort(),f=h.indexOf(e)-1,m=f>=0?u[h[f]]:null,_=await Hw(e),T=(m==null?void 0:m.cpi)||.025,S=lE(a.baseSalary,T);return{taxYear:e,selectedMonth:n,isApril:i,remainingMonths:s,baseSalary:a.baseSalary,suggestedSalary:S,defaults:{pa:(m==null?void 0:m.pa)||l.pa,brl:(m==null?void 0:m.brl)||l.brl,hrl:(m==null?void 0:m.hrl)||l.hrl,cpi:T,other:(m==null?void 0:m.other)||0},statePension:_,existingConfig:l.yearSetupComplete?l:null}}function hE(n){const{targetSalary:t,brl:e,other:r=0,statePension:i=0,isaSavingsAllocation:s=0,remainingMonths:a,grossIncomeToDate:l=0,isTaxEfficient:u=!0}=n,h=t/12,f=r/12,m=i/12,_=f+m;if(!u)return{monthlySipp:h-_,monthlyIsa:0,monthlyOther:f,monthlyStatePension:m,monthlyTotal:h,mode:"tax-inefficient"};const T=Math.max(0,e-l),S=Math.max(0,T/a-_),R=Math.min(h-_,S),b=s/a;return{monthlySipp:R,monthlyIsa:b,monthlyOther:f,monthlyStatePension:m,monthlyTotal:R+b+_,mode:"tax-efficient"}}function fE(n){const{pa:t,brl:e,hrl:r,cpi:i,other:s,isaSavingsAllocation:a,isTaxEfficient:l,taxEfficiencyChoice:u,grossIncomeToDate:h,startMonth:f,confirmedSalary:m}=n;return{pa:t,brl:e,hrl:r,cpi:i,other:s,isaSavingsAllocation:l?a:0,isaSavingsUsed:0,isTaxEfficient:l,taxEfficiencyChoice:u,grossIncomeToDate:h||0,startMonth:f||4,yearSetupComplete:!0,confirmedSalary:m}}let Fn=null,Ai=null,le=1,et=null,B={};async function pE(n,t,e){Fn=n,Ai=e,le=1,B={},et=await dE(t),B={pa:et.defaults.pa,brl:et.defaults.brl,hrl:et.defaults.hrl,cpi:et.defaults.cpi,other:et.defaults.other,grossIncomeToDate:0,confirmedSalary:et.suggestedSalary,isaSavingsAllocation:0,isTaxEfficient:!0,taxEfficiencyChoice:null},pi()}async function mE(n){return await aE(n)}function pi(){if(!Fn||!et)return;const n=et.isApril?6:7;Fn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Tax Year ${et.taxYear} Setup</div>
        <div class="wizard-subtitle">
          ${et.isApril?"Setting up for the full tax year":`Starting in ${Ll(et.selectedMonth)} - ${et.remainingMonths} months remaining`}
        </div>

        <div class="wizard-progress">
          ${vE(n,le)}
        </div>

        ${gE()}
      </div>
    </div>
  `,_E()}function gE(){if(et.isApril,et.isApril)switch(le){case 1:return ju();case 2:return Hu();case 3:return Wu();case 4:return Yu();case 5:return Gu();case 6:return Ku();default:return""}else switch(le){case 1:return ju();case 2:return yE();case 3:return Hu();case 4:return Wu();case 5:return Yu();case 6:return Gu();case 7:return Ku();default:return""}}function ju(){return`
    <div class="wizard-step">
      <div class="wizard-step-title">Tax Thresholds for ${et.taxYear}</div>
      <div class="wizard-step-desc">
        Enter the tax thresholds for this tax year. These are pre-filled with standard values.
      </div>

      <div class="wizard-grid">
        <div class="wizard-grid-item">
          <label>Personal Allowance</label>
          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizPA" value="${B.pa}">
          </div>
        </div>
        <div class="wizard-grid-item">
          <label>Basic Rate Limit</label>
          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizBRL" value="${B.brl}">
          </div>
        </div>
        <div class="wizard-grid-item">
          <label>Higher Rate Limit</label>
          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizHRL" value="${B.hrl}">
          </div>
        </div>
      </div>

      <div class="wizard-example">
        <strong>Note:</strong> BRL is the threshold where 40% tax begins. Staying at or below BRL keeps you in the 20% tax band.
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="cancel">Cancel</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function yE(){const n=Ll(et.selectedMonth),t=bE(et.selectedMonth);return`
    <div class="wizard-step">
      <div class="wizard-step-title">Income Before Starting Pension</div>
      <div class="wizard-step-desc">
        You're starting your pension drawdown in ${n}. Enter any taxable income you've already received this tax year (April to ${t}).
      </div>

      <div class="wizard-input">
        <span class="wizard-unit">£</span>
        <input type="number" id="wizIncomeToDate" value="${B.grossIncomeToDate}" placeholder="0">
        <span class="wizard-unit">gross</span>
      </div>

      <div class="wizard-example">
        <strong>Include:</strong> Employment income, self-employment, rental income, dividends, etc. received since April.
        <br><strong>Exclude:</strong> Tax-free income like ISA withdrawals.
      </div>

      <div class="wizard-info-box">
        <p>This affects how much BRL headroom you have remaining. If you've already earned above the BRL, you cannot be tax-efficient this year.</p>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function Hu(){const n=B.cpi!==void 0?B.cpi:et.defaults.cpi,t=(n*100).toFixed(1),e=et.baseSalary,r=Math.round(e*(1+n));return`
    <div class="wizard-step">
      <div class="wizard-step-title">Inflation and Target Salary</div>
      <div class="wizard-step-desc">
        Enter last year's CPI (used to adjust your target salary for inflation).
      </div>

      <div class="wizard-input" style="margin-bottom: 16px;">
        <span class="wizard-unit">CPI</span>
        <input type="number" id="wizCPI" value="${t}" step="0.1" style="max-width: 80px;" onchange="window._updateWizardSalary && window._updateWizardSalary()">
        <span class="wizard-unit">%</span>
      </div>

      <div class="wizard-info-box" id="salaryInfoBox">
        <p>Based on <span id="cpiDisplay">${t}</span>% inflation, your target salary should be:</p>
        <p style="font-size: 24px; color: var(--primary); margin: 12px 0;">£<span id="suggestedSalaryDisplay">${r.toLocaleString()}</span></p>
        <p>per year (gross)</p>
      </div>

      <div class="wizard-step-desc" style="margin-top: 16px;">
        Confirm or adjust your target salary:
      </div>

      <div class="wizard-input">
        <span class="wizard-unit">£</span>
        <input type="number" id="wizSalary" value="${Math.round(B.confirmedSalary||r)}">
        <span class="wizard-unit">per year</span>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function Wu(){const n=et.statePension,t=n.isReceiving?`<span style="color: var(--success);">Receiving £${Math.round(n.amount).toLocaleString()}/year</span>`:`<span style="color: var(--text-muted);">${n.yearsUntil} years until state pension</span>`;return`
    <div class="wizard-step">
      <div class="wizard-step-title">Other Taxable Income</div>
      <div class="wizard-step-desc">
        Enter any other taxable income you'll receive this tax year (annual amount).
      </div>

      <div class="wizard-input">
        <span class="wizard-unit">£</span>
        <input type="number" id="wizOther" value="${B.other}">
        <span class="wizard-unit">per year</span>
      </div>

      <div class="wizard-example">
        <strong>Include:</strong> Private pensions, rental income, side hustles, dividends above allowance.
      </div>

      <div class="wizard-info-box">
        <strong>State Pension:</strong> ${t}
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
          (Based on your settings - edit in Settings if needed)
        </p>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function Yu(){Ui();const n=cE({targetAnnualGross:B.confirmedSalary,brl:B.brl,pa:B.pa,other:B.other,statePension:et.statePension.amount,remainingMonths:et.remainingMonths,grossIncomeToDate:B.grossIncomeToDate});return B._isaCalc=n,n.brlExhausted?`
      <div class="wizard-step">
        <div class="wizard-step-title">BRL Already Exhausted</div>

        <div class="wizard-info-box" style="background: rgba(231, 76, 60, 0.2); border: 1px solid var(--danger);">
          <p style="color: var(--danger); font-weight: 500;">
            Your income to date (£${B.grossIncomeToDate.toLocaleString()}) has already exceeded the BRL (£${B.brl.toLocaleString()}).
          </p>
          <p style="margin-top: 8px;">
            You cannot be tax-efficient this tax year. Any pension income will be taxed at 40% or higher.
          </p>
        </div>

        <div class="wizard-buttons">
          <button class="wizard-btn secondary" data-action="back">Back</button>
          <button class="wizard-btn primary" data-action="next">Continue</button>
        </div>
      </div>
    `:n.targetAchievableAtBrl?`
      <div class="wizard-step">
        <div class="wizard-step-title">Good News!</div>

        <div class="wizard-info-box" style="background: rgba(46, 204, 113, 0.2); border: 1px solid var(--success);">
          <p style="color: var(--success); font-weight: 500;">
            Your target salary of £${Math.round(B.confirmedSalary).toLocaleString()} is achievable within the BRL.
          </p>
          <p style="margin-top: 8px;">
            No ISA/Savings allocation is needed for tax efficiency. All your income will be taxed at 20% or less.
          </p>
        </div>

        <div class="wizard-input" style="margin-top: 16px;">
          <span class="wizard-unit">ISA allocation (optional): £</span>
          <input type="number" id="wizISA" value="0">
        </div>

        <div class="wizard-buttons">
          <button class="wizard-btn secondary" data-action="back">Back</button>
          <button class="wizard-btn primary" data-action="next">Continue</button>
        </div>
      </div>
    `:`
    <div class="wizard-step">
      <div class="wizard-step-title">ISA/Savings Requirement</div>

      <div class="wizard-info-box" style="background: rgba(52, 152, 219, 0.2); border: 1px solid var(--primary);">
        <p>To be tax-efficient for the remaining <strong>${et.remainingMonths} months</strong>, you need:</p>
        <p style="font-size: 28px; color: var(--primary); margin: 12px 0;">
          £${Math.round(n.isaNeeded).toLocaleString()}
        </p>
        <p>from ISA/Savings</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
          This keeps your SIPP draw at the BRL (£${B.brl.toLocaleString()}) while reaching your target salary.
        </p>
      </div>

      <div class="wizard-step-desc" style="margin-top: 16px;">
        How much ISA/Savings can you allocate this tax year?
      </div>

      <div class="wizard-input">
        <span class="wizard-unit">£</span>
        <input type="number" id="wizISA" value="${B.isaSavingsAllocation||Math.round(n.isaNeeded)}">
      </div>

      <div class="wizard-example">
        <strong>Tip:</strong> This is money you'll withdraw tax-free from ISA or savings to supplement your SIPP income.
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function Gu(){Ui();const n=B._isaCalc,t=uE(B.isaSavingsAllocation,(n==null?void 0:n.isaNeeded)||0,(n==null?void 0:n.brlExhausted)||!1);if(t.sufficient&&!t.isBrlExhausted)return B.isTaxEfficient=!0,B.taxEfficiencyChoice="efficient",setTimeout(()=>{le++,pi()},0),`
      <div class="wizard-step">
        <div class="wizard-step-title">Setting Up Tax Efficiency...</div>
        <div class="wizard-info-box">
          <p>Your ISA allocation is sufficient for tax efficiency.</p>
        </div>
      </div>
    `;const e=t.shortfall>0?`You entered £${B.isaSavingsAllocation.toLocaleString()} but need £${Math.round(n.isaNeeded).toLocaleString()}.`:"";return`
    <div class="wizard-step">
      <div class="wizard-step-title">Tax Efficiency Choice</div>

      ${t.isBrlExhausted?`
        <div class="wizard-info-box" style="background: rgba(231, 76, 60, 0.2);">
          <p style="color: var(--danger);">Your prior income has exhausted the BRL. You cannot be tax-efficient this year.</p>
        </div>
      `:`
        <div class="wizard-info-box" style="background: rgba(243, 156, 18, 0.2);">
          <p style="color: var(--warning);">${e}</p>
        </div>
      `}

      <div class="wizard-step-desc" style="margin-top: 16px;">
        Choose how to proceed:
      </div>

      <div class="wizard-options">
        ${t.isBrlExhausted?"":`
          <label class="wizard-option">
            <input type="radio" name="taxChoice" value="increase" ${B.taxEfficiencyChoice==="increase"?"checked":""}>
            <div class="wizard-option-content">
              <strong>Increase ISA to £${Math.round(n.isaNeeded).toLocaleString()}</strong>
              <p>Provide enough ISA/Savings for tax efficiency</p>
            </div>
          </label>
        `}

        <label class="wizard-option">
          <input type="radio" name="taxChoice" value="reduced" ${B.taxEfficiencyChoice==="reduced"?"checked":""}>
          <div class="wizard-option-content">
            <strong>Reduce salary to BRL (£${B.brl.toLocaleString()})</strong>
            <p>Keep ISA/Savings to grow, accept lower income this year</p>
          </div>
        </label>

        <label class="wizard-option">
          <input type="radio" name="taxChoice" value="inefficient" ${B.taxEfficiencyChoice==="inefficient"?"checked":""}>
          <div class="wizard-option-content">
            <strong>Accept tax-inefficient year</strong>
            <p>Draw full SIPP to target, ISA stays untouched, pay 40% on excess</p>
          </div>
        </label>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="apply-choice">Continue</button>
      </div>
    </div>
  `}function Ku(){Ui();const n=hE({targetSalary:B.confirmedSalary,brl:B.brl,other:B.other,statePension:et.statePension.amount,isaSavingsAllocation:B.isaSavingsAllocation,remainingMonths:et.remainingMonths,grossIncomeToDate:B.grossIncomeToDate,isTaxEfficient:B.isTaxEfficient}),t=B.isTaxEfficient?"Tax-Efficient":"Tax-Inefficient",e=B.isTaxEfficient?"success":"warning";return`
    <div class="wizard-step">
      <div class="wizard-step-title">Confirm Tax Year Setup</div>

      <div class="wizard-summary">
        <div class="wizard-summary-row">
          <span>Tax Year:</span>
          <span>${et.taxYear}</span>
        </div>
        <div class="wizard-summary-row">
          <span>Starting Month:</span>
          <span>${Ll(et.selectedMonth)}</span>
        </div>
        <div class="wizard-summary-row">
          <span>Remaining Months:</span>
          <span>${et.remainingMonths}</span>
        </div>
        ${B.grossIncomeToDate>0?`
          <div class="wizard-summary-row">
            <span>Income to Date:</span>
            <span>£${B.grossIncomeToDate.toLocaleString()}</span>
          </div>
        `:""}
        <div class="wizard-summary-row">
          <span>Target Salary:</span>
          <span>£${Math.round(B.confirmedSalary).toLocaleString()}/year</span>
        </div>
        <div class="wizard-summary-row">
          <span>Tax Mode:</span>
          <span class="${e}">${t}</span>
        </div>
        <div class="wizard-summary-row">
          <span>ISA Allocation:</span>
          <span>£${B.isaSavingsAllocation.toLocaleString()}</span>
        </div>
      </div>

      <div class="wizard-info-box" style="margin-top: 16px;">
        <strong>Expected Monthly Income:</strong>
        <div style="margin-top: 8px;">
          <div>SIPP: £${Math.round(n.monthlySipp).toLocaleString()}</div>
          ${n.monthlyIsa>0?`<div>ISA: £${Math.round(n.monthlyIsa).toLocaleString()}</div>`:""}
          ${n.monthlyOther>0?`<div>Other: £${Math.round(n.monthlyOther).toLocaleString()}</div>`:""}
          ${n.monthlyStatePension>0?`<div>State Pension: £${Math.round(n.monthlyStatePension).toLocaleString()}</div>`:""}
          <div style="border-top: 1px solid var(--border); margin-top: 8px; padding-top: 8px;">
            <strong>Total: £${Math.round(n.monthlyTotal).toLocaleString()}/month</strong>
          </div>
        </div>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="finish">Confirm & Save</button>
      </div>
    </div>
  `}function vE(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function _E(){Fn.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>wE(t.dataset.action))}),window._updateWizardSalary=function(){const t=document.getElementById("wizCPI"),e=document.getElementById("wizSalary"),r=document.getElementById("cpiDisplay"),i=document.getElementById("suggestedSalaryDisplay");if(t&&e&&r&&i){const s=parseFloat(t.value)||0,a=s/100,l=et.baseSalary,u=Math.round(l*(1+a));r.textContent=s.toFixed(1),i.textContent=u.toLocaleString(),e.value=u,B.cpi=a,B.confirmedSalary=u}}}function wE(n){Ui();const t=et.isApril?6:7;switch(n){case"cancel":Cf(),Ai&&Ai({completed:!1,cancelled:!0});break;case"next":le<t&&(le++,pi());break;case"back":le>1&&(le--,pi());break;case"apply-choice":EE(),le++,pi();break;case"finish":IE();break}}function EE(){var t;const n=(t=document.querySelector('input[name="taxChoice"]:checked'))==null?void 0:t.value;switch(B.taxEfficiencyChoice=n,n){case"increase":B.isaSavingsAllocation=B._isaCalc.isaNeeded,B.isTaxEfficient=!0;break;case"reduced":B.confirmedSalary=B.brl,B.isaSavingsAllocation=0,B.isTaxEfficient=!0;break;case"inefficient":B.isaSavingsAllocation=0,B.isTaxEfficient=!1;break}}function Ui(){const n=document.getElementById("wizPA");n&&(B.pa=parseFloat(n.value)||12570);const t=document.getElementById("wizBRL");t&&(B.brl=parseFloat(t.value)||50270);const e=document.getElementById("wizHRL");e&&(B.hrl=parseFloat(e.value)||125140);const r=document.getElementById("wizCPI");r&&(B.cpi=(parseFloat(r.value)||4)/100);const i=document.getElementById("wizSalary");i&&(B.confirmedSalary=parseFloat(i.value)||3e4);const s=document.getElementById("wizOther");s&&(B.other=parseFloat(s.value)||0);const a=document.getElementById("wizISA");a&&(B.isaSavingsAllocation=parseFloat(a.value)||0);const l=document.getElementById("wizIncomeToDate");l&&(B.grossIncomeToDate=parseFloat(l.value)||0)}async function IE(){Ui();const n=fE({pa:B.pa,brl:B.brl,hrl:B.hrl,cpi:B.cpi,other:B.other,isaSavingsAllocation:B.isaSavingsAllocation,isTaxEfficient:B.isTaxEfficient,taxEfficiencyChoice:B.taxEfficiencyChoice,grossIncomeToDate:B.grossIncomeToDate,startMonth:parseInt(et.selectedMonth.split("-")[1]),confirmedSalary:B.confirmedSalary});await kl(et.taxYear,n),Cf(),Ai&&Ai({completed:!0,taxYear:et.taxYear,config:n,wizardInputs:B})}function Cf(){Fn&&(Fn.innerHTML="",Fn.style.display="none")}function Ll(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1).toLocaleString("default",{month:"long",year:"numeric"})}function bE(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-2,1).toLocaleString("default",{month:"long"})}function TE(){return`
    .wizard-summary {
      background: var(--card-alt);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
    }

    .wizard-summary-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
    }

    .wizard-summary-row:last-child {
      border-bottom: none;
    }

    .wizard-summary-row .success {
      color: var(--success);
      font-weight: 500;
    }

    .wizard-summary-row .warning {
      color: var(--warning);
      font-weight: 500;
    }

    .wizard-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 16px 0;
    }

    .wizard-option {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      background: var(--card-alt);
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .wizard-option:hover {
      border-color: var(--primary);
    }

    .wizard-option input[type="radio"] {
      margin-top: 4px;
    }

    .wizard-option-content strong {
      display: block;
      color: var(--text);
      margin-bottom: 4px;
    }

    .wizard-option-content p {
      color: var(--text-muted);
      font-size: 13px;
      margin: 0;
    }
  `}function AE(n={},t=null){const e=Nl(n,t),r=Af(e),i=xf(r);return{results:r,stats:i,config:e}}function SE(n={},t=null){const e=Nl(n,t),r=Sf(e),i=xf(r);return{results:r,stats:i,config:e}}function xE(n={}){const t=Nl(n),e={};for(const[r,i]of Object.entries(up))e[r]={...i,result:Kw(t,i)};return e}let Ee=null,Wo=null,dr=!1;function RE(n,t){console.log("initAuthScreen: initializing"),Ee=n,Wo=t,dr=!1,Aw(e=>{console.log("AuthScreen: auth state change received:",e?e.email:"null","processed:",dr),e&&Wo&&!dr?(console.log("AuthScreen: calling onAuthSuccessCallback"),dr=!0,Wo(e)):e?console.log("AuthScreen: skipping callback, already processed or no callback"):(dr=!1,console.log("AuthScreen: user signed out, reset authProcessed"))}),kf(),console.log("initAuthScreen: complete")}function kf(){if(Ee){if(!Tt()){Ee.innerHTML=`
      <div class="auth-screen">
        <div class="auth-screen-box">
          <div class="auth-screen-header">
            <h1>Pension Planner</h1>
            <p>Firebase not configured</p>
          </div>
          <div class="auth-screen-error">
            <p>This app requires Firebase authentication to save your data.</p>
            <p>Please contact the administrator to configure Firebase.</p>
          </div>
        </div>
      </div>
    `;return}Ee.innerHTML=`
    <div class="auth-screen">
      <div class="auth-screen-box">
        <div class="auth-screen-header">
          <h1>Pension Planner</h1>
          <p>A tool to help you plan and manage your SIPP pension drawdown</p>
        </div>

        <div class="auth-screen-tabs">
          <button class="auth-screen-tab active" data-tab="signin">Sign In</button>
          <button class="auth-screen-tab" data-tab="signup">Sign Up</button>
        </div>

        <div id="authScreenError" class="auth-screen-error" style="display: none;"></div>

        <!-- Sign In Form -->
        <form id="signinForm" class="auth-screen-form">
          <div class="auth-screen-field">
            <label>Email</label>
            <input type="email" id="signinEmail" placeholder="your@email.com" required>
          </div>
          <div class="auth-screen-field">
            <label>Password</label>
            <input type="password" id="signinPassword" placeholder="Enter password" required>
          </div>
          <button type="submit" class="auth-screen-btn primary">Sign In</button>
          <button type="button" class="auth-screen-btn secondary" id="forgotPasswordBtn">Forgot Password?</button>
        </form>

        <!-- Sign Up Form -->
        <form id="signupForm" class="auth-screen-form" style="display: none;">
          <div class="auth-screen-field">
            <label>Name</label>
            <input type="text" id="signupName" placeholder="Your name" required>
          </div>
          <div class="auth-screen-field">
            <label>Email</label>
            <input type="email" id="signupEmail" placeholder="your@email.com" required>
          </div>
          <div class="auth-screen-field">
            <label>Password</label>
            <input type="password" id="signupPassword" placeholder="Create password (6+ chars)" required minlength="6">
          </div>
          <button type="submit" class="auth-screen-btn primary">Create Account</button>
        </form>

        <div class="auth-screen-divider">
          <span>or</span>
        </div>

        <button class="auth-screen-btn google" id="googleSigninBtn">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
          </svg>
          Sign in with Google
        </button>

        <div class="auth-screen-footer">
          <p>Your data is stored securely in the cloud and synced across devices.</p>
        </div>
      </div>
    </div>
  `,PE()}}function PE(){const n=Ee.querySelectorAll(".auth-screen-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),s.classList.add("active");const a=document.getElementById("signinForm"),l=document.getElementById("signupForm");s.dataset.tab==="signin"?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block"),$i()})}),document.getElementById("signinForm").addEventListener("submit",CE),document.getElementById("signupForm").addEventListener("submit",kE),document.getElementById("forgotPasswordBtn").addEventListener("click",ME),document.getElementById("googleSigninBtn").addEventListener("click",DE)}function un(n){const t=document.getElementById("authScreenError");t&&(t.textContent=n,t.style.display="block")}function $i(){const n=document.getElementById("authScreenError");n&&(n.style.display="none")}async function CE(n){n.preventDefault(),$i();const t=document.getElementById("signinEmail").value.trim(),e=document.getElementById("signinPassword").value;if(!t||!e){un("Please enter email and password");return}try{await xw(t,e)}catch(r){console.error("Sign in error:",r),un(po(r.code))}}async function kE(n){n.preventDefault(),$i();const t=document.getElementById("signupName").value.trim(),e=document.getElementById("signupEmail").value.trim(),r=document.getElementById("signupPassword").value;if(!t||!e||!r){un("Please fill in all fields");return}if(r.length<6){un("Password must be at least 6 characters");return}try{await Sw(e,r,t)}catch(i){console.error("Sign up error:",i),un(po(i.code))}}async function ME(){$i();const n=document.getElementById("signinEmail").value.trim();if(!n){un("Please enter your email address first");return}try{await Pw(n),alert("Password reset email sent. Check your inbox.")}catch(t){console.error("Reset password error:",t),un(po(t.code))}}async function DE(){$i();try{await Rw()}catch(n){console.error("Google sign in error:",n),un(po(n.code))}}function po(n){return{"auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email","auth/weak-password":"Password is too weak","auth/operation-not-allowed":"Sign in method not enabled","auth/popup-closed-by-user":"Sign in cancelled","auth/popup-blocked":"Sign in popup was blocked","auth/too-many-requests":"Too many attempts. Please try again later.","auth/invalid-credential":"Invalid email or password"}[n]||"An error occurred. Please try again."}function Ea(){console.log("hideAuthScreen: hiding auth screen, element=",!!Ee),Ee&&(Ee.style.display="none",console.log("hideAuthScreen: set display to none"))}function Mf(){dr=!1,Ee&&(Ee.style.display="block",kf())}function NE(){return`
    .auth-screen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }

    .auth-screen-box {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 40px;
      max-width: 440px;
      width: 100%;
    }

    .auth-screen-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .auth-screen-header h1 {
      font-size: 28px;
      color: var(--primary);
      margin-bottom: 8px;
    }

    .auth-screen-header p {
      color: var(--text-muted);
      font-size: 14px;
    }

    .auth-screen-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 24px;
      background: var(--card-alt);
      padding: 4px;
      border-radius: 8px;
    }

    .auth-screen-tab {
      flex: 1;
      padding: 12px;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s;
    }

    .auth-screen-tab:hover {
      color: var(--text);
    }

    .auth-screen-tab.active {
      background: var(--primary);
      color: var(--bg);
    }

    .auth-screen-error {
      background: rgba(248, 81, 73, 0.15);
      border: 1px solid rgba(248, 81, 73, 0.3);
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
      color: var(--danger);
      font-size: 14px;
    }

    .auth-screen-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .auth-screen-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .auth-screen-field label {
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 500;
    }

    .auth-screen-field input {
      padding: 12px 14px;
      background: var(--card-alt);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 14px;
      width: 100%;
    }

    .auth-screen-field input:focus {
      outline: none;
      border-color: var(--primary);
    }

    .auth-screen-btn {
      padding: 14px 24px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }

    .auth-screen-btn.primary {
      background: var(--primary);
      color: var(--bg);
    }

    .auth-screen-btn.primary:hover {
      opacity: 0.9;
    }

    .auth-screen-btn.secondary {
      background: transparent;
      color: var(--text-muted);
      padding: 10px;
    }

    .auth-screen-btn.secondary:hover {
      color: var(--text);
    }

    .auth-screen-btn.google {
      background: white;
      color: #333;
      margin-top: 8px;
    }

    .auth-screen-btn.google:hover {
      background: #f5f5f5;
    }

    .auth-screen-divider {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 24px 0;
    }

    .auth-screen-divider::before,
    .auth-screen-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }

    .auth-screen-divider span {
      color: var(--text-muted);
      font-size: 12px;
    }

    .auth-screen-footer {
      margin-top: 24px;
      text-align: center;
    }

    .auth-screen-footer p {
      color: var(--text-muted);
      font-size: 12px;
    }

    @media (max-width: 480px) {
      .auth-screen-box {
        padding: 24px;
      }

      .auth-screen-header h1 {
        font-size: 24px;
      }
    }
  `}let mn=null,Ia=null,H={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35},ye="intro",Ct=1;function LE(){ye="intro",Ct=1,H={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35}}function ba(n,t){mn=n,Ia=t,LE(),Je()}function Je(){mn&&(ye==="intro"?VE():ye==="stress"?FE():ye==="decision"&&UE())}function VE(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Welcome to Pension Planner</div>
        <div class="wizard-subtitle">A tool to help you plan and manage your SIPP pension drawdown</div>

        <div class="wizard-progress">
          ${Vl(2,Ct)}
        </div>

        ${Ct===1?OE():BE()}
      </div>
    </div>
  `,Ol()}function OE(){return`
    <div class="wizard-step">
      <div class="wizard-step-title">What does this app do?</div>
      <div class="wizard-step-desc">
        This app helps you answer two important questions about your pension:
      </div>

      <div class="wizard-info-box">
        <div class="wizard-info-item">
          <strong>1. Stress Tester</strong>
          <p>"Can I afford to retire?" This tool runs 1,000 simulations using real historical market data to show you the range of possible outcomes for your pension.</p>
        </div>
        <div class="wizard-info-item">
          <strong>2. Decision Tool</strong>
          <p>"Where should I take money from this month?" Once you're retired, this tool helps you decide each month which fund to withdraw from to maximise tax efficiency.</p>
        </div>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="skip-all">Skip Setup</button>
        <button class="wizard-btn primary" data-action="next">Next</button>
      </div>
    </div>
  `}function BE(){return`
    <div class="wizard-step">
      <div class="wizard-step-title">Start with the Stress Tester</div>
      <div class="wizard-step-desc">
        Whether you're already retired or still planning, the Stress Tester is where you should start.
      </div>

      <div class="wizard-info-box">
        <p>The Stress Tester will help you understand:</p>
        <ul>
          <li>How much yearly income your pension could realistically provide</li>
          <li>How long your money might last under different market conditions</li>
          <li>What happens if markets crash early in your retirement</li>
          <li>Whether your current savings are on track</li>
        </ul>
      </div>

      <div class="wizard-example">
        <strong>Next:</strong> We'll set up your Stress Tester with some basic questions about your pension.
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="start-stress">Set Up Stress Tester</button>
      </div>
    </div>
  `}function FE(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Stress Tester Setup</div>
        <div class="wizard-subtitle">Let's set up your pension simulation in a few simple steps.</div>

        <div class="wizard-progress">
          ${Vl(6,Ct)}
        </div>

        ${zE(Ct)}
      </div>
    </div>
  `,Ol()}function zE(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            Think of this as your "salary" in retirement. This is the total amount before tax that you want to receive each year.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizBaseSalary" value="${H.baseSalary}">
            <span class="wizard-unit">per year</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you want £2,500 per month, enter £30,000 here.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="skip-stress">Skip</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 2:return`
        <div class="wizard-step">
          <div class="wizard-step-title">Do you have other pension income?</div>
          <div class="wizard-step-desc">
            Enter any other guaranteed pension income you'll receive (like a workplace defined benefit pension).
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizOther" value="${H.otherIncome}">
            <span class="wizard-unit">per year</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you have a company pension paying £5,000/year, enter £5,000.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 3:return`
        <div class="wizard-step">
          <div class="wizard-step-title">What about the State Pension?</div>
          <div class="wizard-step-desc">
            The full State Pension is currently about £12,000 per year. When do you expect to start receiving it?
          </div>

          <div class="wizard-input" style="margin-bottom: 12px;">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizStatePension" value="${H.statePension}">
            <span class="wizard-unit">per year</span>
          </div>
          <div class="wizard-input">
            <span class="wizard-unit">Starting in year</span>
            <input type="number" id="wizStatePensionYear" value="${H.statePensionYear}" style="max-width: 80px;">
            <span class="wizard-unit">of retirement</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you're retiring at 55 and get State Pension at 67, enter year 12.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 4:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How big are your pension funds?</div>
          <div class="wizard-step-desc">
            Enter the minimum amount you want to keep in each type of investment at the start of retirement.
          </div>

          <div class="wizard-grid">
            <div class="wizard-grid-item">
              <label>Stocks/Shares (Higher Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizEquityMin" value="${H.equityMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds (Medium Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizBondMin" value="${H.bondMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash (Low Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizCashTarget" value="${H.cashTarget}">
              </div>
            </div>
          </div>

          <div class="wizard-example">
            <strong>Tip:</strong> These are target minimums. The simulation draws from stocks/bonds first and keeps cash as an emergency buffer.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 5:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How long should your money last?</div>
          <div class="wizard-step-desc">
            How many years of retirement do you want to plan for?
          </div>

          <div class="wizard-input">
            <input type="number" id="wizDuration" value="${H.duration}" style="max-width: 100px;">
            <span class="wizard-unit">years</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you're 55 and want money until age 90, enter 35 years.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 6:return`
        <div class="wizard-step">
          <div class="wizard-step-title">One last thing: Tax thresholds</div>
          <div class="wizard-step-desc">
            Will the government raise tax thresholds with inflation, or keep them frozen?
          </div>

          <div class="wizard-input">
            <select id="wizTaxMode">
              <option value="inflates" ${H.taxMode==="inflates"?"selected":""}>Standard (rise with inflation)</option>
              <option value="frozen" ${H.taxMode==="frozen"?"selected":""}>Frozen (stay at current levels)</option>
            </select>
          </div>

          <div class="wizard-example">
            <strong>Tip:</strong> "Frozen" is more pessimistic - you pay more tax over time as your income grows but thresholds don't.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="finish-stress">Continue to Decision Tool</button>
          </div>
        </div>
      `;default:return""}}function UE(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Decision Tool Setup</div>
        <div class="wizard-subtitle">Now let's set up the tool you'll use each month once you're retired.</div>

        <div class="wizard-progress">
          ${Vl(4,Ct)}
        </div>

        ${$E(Ct)}
      </div>
    </div>
  `,Ol()}function $E(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            This is your target "salary" from your pension. The tool will calculate how much to withdraw each month.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizDBaseSalary" value="${H.decisionSalary}">
            <span class="wizard-unit">per year (before tax)</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you want about £2,000 per month after tax, you might need £30,000 gross.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="skip-decision">Skip</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 2:return`
        <div class="wizard-step">
          <div class="wizard-step-title">What are your fund size targets?</div>
          <div class="wizard-step-desc">
            Enter the minimum you want in each fund at the start of retirement. The tool uses these to decide when to enter "protection mode".
          </div>

          <div class="wizard-grid">
            <div class="wizard-grid-item">
              <label>Stocks/Shares</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDEquityMin" value="${H.decisionEquity}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDBondMin" value="${H.decisionBond}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDCashTarget" value="${H.decisionCash}">
              </div>
            </div>
          </div>

          <div class="wizard-example">
            <strong>Protection Mode:</strong> If your growth funds drop below these minimums, the tool recommends drawing from cash instead.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 3:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How long should your money last?</div>
          <div class="wizard-step-desc">
            The fund minimums will gradually reduce to zero over this period. This is your "depletion curve."
          </div>

          <div class="wizard-input">
            <input type="number" id="wizDDuration" value="${H.decisionDuration}" style="max-width: 100px;">
            <span class="wizard-unit">years</span>
          </div>

          <div class="wizard-example">
            <strong>Example:</strong> If you're 55 and planning to age 90, enter 35 years.
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="next">Next</button>
          </div>
        </div>
      `;case 4:return`
        <div class="wizard-step">
          <div class="wizard-step-title">You're all set!</div>
          <div class="wizard-step-desc">
            The Decision Tool will now help you track monthly withdrawals. Each month, enter your current fund values and it will tell you:
          </div>

          <ul class="wizard-list">
            <li>How much to withdraw from your SIPP</li>
            <li>Whether you need ISA top-up</li>
            <li>Which fund to take money from</li>
            <li>Whether to enter protection mode</li>
          </ul>

          <div class="wizard-example">
            <strong>Next Step:</strong> Go to "Tax Years" to set up your personal tax details (allowance, other income, state pension dates).
          </div>

          <div class="wizard-buttons">
            <button class="wizard-btn secondary" data-action="back">Back</button>
            <button class="wizard-btn primary" data-action="finish">Finish Setup</button>
          </div>
        </div>
      `;default:return""}}function Vl(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function Ol(){mn.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>qE(t.dataset.action))})}function qE(n){switch(Df(),n){case"skip-all":Yo();break;case"next":ye==="intro"?Ct<2&&(Ct++,Je()):ye==="stress"?Ct<6&&(Ct++,Je()):ye==="decision"&&Ct<4&&(Ct++,Je());break;case"back":Ct>1&&(Ct--,Je());break;case"start-stress":ye="stress",Ct=1,Je();break;case"skip-stress":ye="decision",Ct=1,H.decisionSalary=H.baseSalary,H.decisionEquity=H.equityMin,H.decisionBond=H.bondMin,H.decisionCash=H.cashTarget,H.decisionDuration=H.duration,Je();break;case"finish-stress":ye="decision",Ct=1,H.decisionSalary=H.baseSalary,H.decisionEquity=H.equityMin,H.decisionBond=H.bondMin,H.decisionCash=H.cashTarget,H.decisionDuration=H.duration,Je();break;case"skip-decision":Yo();break;case"finish":Yo();break}}function Df(){const n=document.getElementById("wizBaseSalary");n&&(H.baseSalary=parseFloat(n.value)||3e4);const t=document.getElementById("wizOther");t&&(H.otherIncome=parseFloat(t.value)||0);const e=document.getElementById("wizStatePension");e&&(H.statePension=parseFloat(e.value)||12e3);const r=document.getElementById("wizStatePensionYear");r&&(H.statePensionYear=parseInt(r.value)||12);const i=document.getElementById("wizEquityMin");i&&(H.equityMin=parseFloat(i.value)||25e4);const s=document.getElementById("wizBondMin");s&&(H.bondMin=parseFloat(s.value)||2e5);const a=document.getElementById("wizCashTarget");a&&(H.cashTarget=parseFloat(a.value)||5e4);const l=document.getElementById("wizDuration");l&&(H.duration=parseInt(l.value)||35);const u=document.getElementById("wizTaxMode");u&&(H.taxMode=u.value);const h=document.getElementById("wizDBaseSalary");h&&(H.decisionSalary=parseFloat(h.value)||3e4);const f=document.getElementById("wizDEquityMin");f&&(H.decisionEquity=parseFloat(f.value)||25e4);const m=document.getElementById("wizDBondMin");m&&(H.decisionBond=parseFloat(m.value)||2e5);const _=document.getElementById("wizDCashTarget");_&&(H.decisionCash=parseFloat(_.value)||5e4);const T=document.getElementById("wizDDuration");T&&(H.decisionDuration=parseInt(T.value)||35)}function Yo(){Df(),Ia&&Ia(H)}function jE(){mn&&(mn.style.display="none")}function HE(){return`
    .wizard-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 1001;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .wizard-box {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      max-width: 600px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
    }

    .wizard-title {
      font-size: 24px;
      font-weight: 500;
      color: var(--primary);
      margin-bottom: 8px;
    }

    .wizard-subtitle {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    .wizard-progress {
      display: flex;
      gap: 6px;
      margin-bottom: 24px;
    }

    .wizard-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--border);
    }

    .wizard-dot.active {
      background: var(--primary);
    }

    .wizard-dot.done {
      background: var(--success);
    }

    .wizard-step {
      margin-bottom: 24px;
    }

    .wizard-step-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text);
    }

    .wizard-step-desc {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
      line-height: 1.6;
    }

    .wizard-info-box {
      margin: 20px 0;
      padding: 16px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }

    .wizard-info-item {
      margin-bottom: 16px;
    }

    .wizard-info-item:last-child {
      margin-bottom: 0;
    }

    .wizard-info-item strong {
      color: var(--primary);
    }

    .wizard-info-item p {
      margin: 8px 0 0 0;
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.6;
    }

    .wizard-info-box ul {
      margin: 12px 0 0 0;
      padding-left: 20px;
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .wizard-list {
      margin: 16px 0;
      padding-left: 20px;
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .wizard-input {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .wizard-input input,
    .wizard-input select {
      flex: 1;
      max-width: 200px;
      padding: 12px 14px;
      background: var(--card-alt);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 14px;
    }

    .wizard-input input:focus,
    .wizard-input select:focus {
      outline: none;
      border-color: var(--primary);
    }

    .wizard-unit {
      color: var(--text-muted);
      font-size: 13px;
    }

    .wizard-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 16px;
    }

    .wizard-grid-item label {
      display: block;
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 4px;
    }

    .wizard-grid-item .wizard-input {
      margin-bottom: 0;
    }

    .wizard-grid-item .wizard-input input {
      max-width: none;
      width: 100%;
    }

    .wizard-example {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      padding: 10px 14px;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 8px;
    }

    .wizard-buttons {
      display: flex;
      gap: 12px;
      margin-top: 24px;
      justify-content: space-between;
    }

    .wizard-btn {
      padding: 14px 28px;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .wizard-btn.primary {
      background: linear-gradient(135deg, var(--primary) 0%, #5a9aba 100%);
      color: var(--bg);
    }

    .wizard-btn.primary:hover {
      opacity: 0.9;
    }

    .wizard-btn.secondary {
      background: var(--card-alt);
      color: var(--text);
      border: 1px solid var(--border);
    }

    .wizard-btn.secondary:hover {
      background: var(--border);
    }

    @media (max-width: 600px) {
      .wizard-box {
        padding: 20px;
      }

      .wizard-title {
        font-size: 20px;
      }

      .wizard-grid {
        grid-template-columns: 1fr;
      }

      .wizard-buttons {
        flex-direction: column-reverse;
      }

      .wizard-btn {
        width: 100%;
      }
    }
  `}function mo(){const t=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()==="#0d1117"||document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches;return{primary:"#f0c674",success:"#2ea043",warning:"#e1b12c",danger:"#f85149",muted:"#8b8b9b",grid:"rgba(255,255,255,0.1)",bg:t?"rgba(15,15,26,1)":"#ffffff",text:t?"#c9d1d9":"#1f2937",cardBg:t?"#21262d":"#ffffff",cone:"rgba(240,198,116,0.15)",coneMid:"rgba(240,198,116,0.2)",coneInner:"rgba(240,198,116,0.35)",coneBorder:"rgba(240,198,116,0.4)",trajectory:"rgba(46,160,67,0.25)",trajectoryFailed:"rgba(248,81,73,0.8)",trajectoryHover:"#5fdd7b",trajectoryFailedHover:"#ff6b6b",glidepath:"#7eb8da",zeroLine:"#f85149"}}const Wn=new Map;let ar=-1;function Qu(n,t,e,r,i,s){const a=i-e,l=s-r,u=a*a+l*l;if(u===0)return Math.sqrt((n-e)*(n-e)+(t-r)*(t-r));const h=Math.max(0,Math.min(1,((n-e)*a+(t-r)*l)/u)),f=e+h*a,m=r+h*l;return Math.sqrt((n-f)*(n-f)+(t-m)*(t-m))}function WE(n,t,e={}){const r=mo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=e.years||35,m={};for(let b=0;b<=f;b++)m[b]=[];t.forEach(b=>{b.hist.forEach(k=>{const D=Math.floor(k.year);m[D]!==void 0&&m[D].push(k.total)})});const _=[];for(let b=0;b<=f;b++){const k=m[b].sort((C,L)=>C-L);if(k.length===0)continue;const D=C=>k[Math.floor(k.length*C)]||0;_.push({year:b,p5:D(.05),p10:D(.1),p25:D(.25),p50:D(.5),p75:D(.75),p90:D(.9),p95:D(.95)})}if(_.length===0)return;const T=Math.max(..._.map(b=>b.p90))*1.15,S=b=>l.left+b/f*u,R=b=>a-l.bottom-b/T*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let b=0;b<=5;b++){const k=l.top+b/5*h;i.beginPath(),i.moveTo(l.left,k),i.lineTo(s-l.right,k),i.stroke()}i.fillStyle=r.cone,i.beginPath(),_.forEach((b,k)=>{const D=S(b.year);k===0?i.moveTo(D,R(b.p95)):i.lineTo(D,R(b.p95))});for(let b=_.length-1;b>=0;b--)i.lineTo(S(_[b].year),R(_[b].p5));i.closePath(),i.fill(),i.fillStyle=r.coneMid,i.beginPath(),_.forEach((b,k)=>{const D=S(b.year);k===0?i.moveTo(D,R(b.p90)):i.lineTo(D,R(b.p90))});for(let b=_.length-1;b>=0;b--)i.lineTo(S(_[b].year),R(_[b].p10));i.closePath(),i.fill(),i.fillStyle=r.coneInner,i.beginPath(),_.forEach((b,k)=>{const D=S(b.year);k===0?i.moveTo(D,R(b.p75)):i.lineTo(D,R(b.p75))});for(let b=_.length-1;b>=0;b--)i.lineTo(S(_[b].year),R(_[b].p25));i.closePath(),i.fill(),e.glide&&e.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=2,i.setLineDash([6,3]),i.beginPath(),e.glide.forEach((b,k)=>{const D=S(b.year),C=R(b.min);k===0?i.moveTo(D,C):i.lineTo(D,C)}),i.stroke(),i.setLineDash([])),i.strokeStyle=r.primary,i.lineWidth=3,i.beginPath(),_.forEach((b,k)=>{const D=S(b.year),C=R(b.p50);k===0?i.moveTo(D,C):i.lineTo(D,C)}),i.stroke(),i.strokeStyle="rgba(248,81,73,0.6)",i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),_.forEach((b,k)=>{const D=S(b.year);k===0?i.moveTo(D,R(b.p10)):i.lineTo(D,R(b.p10))}),i.stroke(),i.setLineDash([]),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,R(0)),i.lineTo(s-l.right,R(0)),i.stroke(),i.setLineDash([]),i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let b=0;b<=5;b++){const k=T*(1-b/5);i.fillText(ae(k),l.left-10,l.top+b/5*h+4)}i.textAlign="center";for(let b=0;b<=f;b+=5)i.fillText(`Yr ${b}`,S(b),a-l.bottom+20);Wn.set(n.id,{percentiles:_,xScale:S,yScale:R,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:T,type:"cone"}),XE(n)}function YE(n,t,e={}){const r=mo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=e.years||35,m=e.startValue||1e6,_=t.slice(0,100),T=_.filter(C=>C.failed),S=_.filter(C=>!C.failed);let R;if(T.length>0)R=m*2;else{const C=S.map(z=>z.final).sort((z,V)=>z-V),L=C[Math.floor(C.length*.5)]||m;R=Math.max(L*1.3,m*1.5)}const b=C=>l.left+C/f*u,k=C=>a-l.bottom-Math.min(C,R)/R*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let C=0;C<=5;C++){const L=l.top+C/5*h;i.beginPath(),i.moveTo(l.left,L),i.lineTo(s-l.right,L),i.stroke()}i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let C=0;C<=5;C++){const L=R*(1-C/5);i.fillText(ae(L),l.left-10,l.top+C/5*h+4)}i.textAlign="center";for(let C=0;C<=f;C+=5)i.fillText(`Yr ${C}`,b(C),a-l.bottom+20);const D=[];e.glide&&e.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=3,i.setLineDash([8,4]),i.beginPath(),e.glide.forEach((C,L)=>{const z=b(C.year),V=k(C.min);L===0?i.moveTo(z,V):i.lineTo(z,V)}),i.stroke(),i.setLineDash([])),S.forEach((C,L)=>{const z=C.hist.map(V=>({x:b(V.year),y:k(V.total)}));D.push({run:C,pts:z,failed:!1,idx:L}),i.strokeStyle=r.trajectory,i.lineWidth=.5,i.beginPath(),z.forEach((V,E)=>{E===0?i.moveTo(V.x,V.y):i.lineTo(V.x,V.y)}),i.stroke()}),T.forEach((C,L)=>{const z=C.hist.map(V=>({x:b(V.year),y:k(V.total)}));D.push({run:C,pts:z,failed:!0,idx:S.length+L}),i.strokeStyle=r.trajectoryFailed,i.lineWidth=2,i.beginPath(),z.forEach((V,E)=>{E===0?i.moveTo(V.x,V.y):i.lineTo(V.x,V.y)}),i.stroke()}),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,k(0)),i.lineTo(s-l.right,k(0)),i.stroke(),i.setLineDash([]),Wn.set(n.id,{results:_,paths:D,xScale:b,yScale:k,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:R,glide:e.glide,type:"trajectory"}),JE(n,r)}function GE(n,t,e={}){const r=mo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:30,right:20,bottom:55,left:60},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=t.map(C=>C.protMonths),m=f.length,_=Math.max(...f),T=Math.max(1,Math.ceil(_/15)),S={};f.forEach(C=>{const L=Math.floor(C/T)*T;S[L]=(S[L]||0)+1});const R=Object.keys(S).map(Number).sort((C,L)=>C-L),b=Math.max(...Object.values(S)),k=u/(R.length||1),D=[];i.strokeStyle=r.grid,i.lineWidth=1,i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="right";for(let C=0;C<=4;C++){const L=l.top+C/4*h;i.beginPath(),i.moveTo(l.left,L),i.lineTo(s-l.right,L),i.stroke();const z=Math.round(b*(1-C/4));i.fillText(`${z} runs`,l.left-5,L+4)}R.forEach((C,L)=>{const z=S[C],V=z/b*h,E=l.left+L*k+2,g=a-l.bottom-V,w=k-4;i.fillStyle=C===0?r.success:r.warning,i.fillRect(E,g,w,V),D.push({x:E,y:g,w,h:V,months:C,monthsEnd:C+T-1,count:z,pct:(z/m*100).toFixed(1)})}),i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="center",R.forEach((C,L)=>{if(L%2===0||R.length<12){const z=T>1?`${C}-${C+T-1}`:C.toString();i.fillText(z,l.left+L*k+k/2,a-l.bottom+15)}}),i.fillText("Protection Months",s/2,a-5),i.save(),i.translate(12,a/2),i.rotate(-Math.PI/2),i.textAlign="center",i.fillText("Number of Runs",0,0),i.restore(),Wn.set(n.id,{bars:D,totalRuns:m,type:"histogram"}),ZE(n)}function KE(n,t,e={}){const r=mo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:180,bottom:60,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=Object.keys(t),m=e.years||35;let _=0;f.forEach(b=>{const k=t[b].result;k&&k.hist&&k.hist.forEach(D=>{D.total>_&&(_=D.total)})}),_*=1.1;const T=b=>l.left+b/m*u,S=b=>l.top+h-b/_*h;QE(i,l,u,h,m,_,e.title||"Scenario Comparison",r);const R=["#6366f1","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#ec4899","#84cc16"];f.forEach((b,k)=>{const D=t[b].result;if(!D||!D.hist)return;i.beginPath(),i.strokeStyle=R[k%R.length],i.lineWidth=2.5,D.hist.forEach((L,z)=>{const V=T(L.year),E=S(L.total);z===0?i.moveTo(V,E):i.lineTo(V,E)}),i.stroke();const C=l.top+15+k*24;i.fillStyle=R[k%R.length],i.fillRect(s-l.right+15,C,20,4),i.font="11px system-ui, sans-serif",i.fillStyle=r.text,i.textAlign="left",i.fillText(t[b].name||b,s-l.right+40,C+5),D.final/1e3,i.fillStyle=r.muted,i.fillText(`${ae(D.final)}`,s-l.right+40,C+18)})}function QE(n,t,e,r,i,s,a,l){n.font="bold 14px system-ui, sans-serif",n.fillStyle=l.text,n.textAlign="center",n.fillText(a,t.left+e/2,t.top-20),n.strokeStyle=l.grid,n.lineWidth=1;for(let u=0;u<=5;u++){const h=t.top+r*u/5;n.beginPath(),n.moveTo(t.left,h),n.lineTo(t.left+e,h),n.stroke();const f=s*(5-u)/5;n.font="11px system-ui, sans-serif",n.fillStyle=l.muted,n.textAlign="right",n.fillText(ae(f),t.left-10,h+4)}for(let u=0;u<=i;u+=5){const h=t.left+u/i*e;n.beginPath(),n.moveTo(h,t.top),n.lineTo(h,t.top+r),n.stroke(),n.textAlign="center",n.fillText(`Y${u}`,h,t.top+r+20)}n.font="12px system-ui, sans-serif",n.textAlign="center",n.fillText("Years",t.left+e/2,t.top+r+45),n.save(),n.translate(20,t.top+r/2),n.rotate(-Math.PI/2),n.fillText("Fund Value",0,0),n.restore()}function ae(n){return n>=1e6?`£${(n/1e6).toFixed(1)}M`:n>=1e3?`£${(n/1e3).toFixed(0)}k`:`£${n.toFixed(0)}`}function XE(n,t){const e=n._coneHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Wn.get(n.id);if(!s||s.type!=="cone")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=(i.clientX-a.left)*l,{percentiles:h,padding:f,chartWidth:m,years:_}=s,T=(u-f.left)/m*_,S=Math.round(T);if(S<0||S>_){dn();return}const R=h.find(k=>k.year===S);if(!R){dn();return}const b=`
      <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
        <strong style="color:#f0c674;">Year ${S}</strong>
      </div>
      <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
        <span style="color:#8b8b9b;">95th percentile:</span><span>${ae(R.p95)}</span>
        <span style="color:#8b8b9b;">75th percentile:</span><span>${ae(R.p75)}</span>
        <span style="color:#8b8b9b;">Median (50th):</span><span style="color:#f0c674;font-weight:bold;">${ae(R.p50)}</span>
        <span style="color:#8b8b9b;">25th percentile:</span><span>${ae(R.p25)}</span>
        <span style="color:#8b8b9b;">10th percentile:</span><span style="color:#f85149;">${ae(R.p10)}</span>
        <span style="color:#8b8b9b;">5th percentile:</span><span>${ae(R.p5)}</span>
      </div>
    `;Bl(i.clientX,i.clientY,b)};n._coneHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",dn)}function JE(n,t){const e=n._trajHoverListener;e&&n.removeEventListener("mousemove",e);const r=n._trajLeaveListener;r&&n.removeEventListener("mouseleave",r);const i=a=>{const l=Wn.get(n.id);if(!l||l.type!=="trajectory")return;const u=n.getBoundingClientRect(),h=n.width/u.width,f=n.height/u.height,m=(a.clientX-u.left)*h,_=(a.clientY-u.top)*f,{paths:T,padding:S,chartWidth:R,chartHeight:b}=l;if(m<S.left||m>S.left+R||_<S.top||_>S.top+b){dn(),ar!==-1&&(ar=-1,Go(n,l,t,null));return}let k=null,D=12*h;T.filter(L=>L.failed).forEach(L=>{for(let z=0;z<L.pts.length-1;z++){const V=Qu(m,_,L.pts[z].x,L.pts[z].y,L.pts[z+1].x,L.pts[z+1].y);V<D&&(D=V,k=L)}}),k||T.filter(L=>!L.failed).forEach(L=>{for(let z=0;z<L.pts.length-1;z++){const V=Qu(m,_,L.pts[z].x,L.pts[z].y,L.pts[z+1].x,L.pts[z+1].y);V<D&&(D=V,k=L)}});const C=k?k.idx:-1;if(C!==ar&&(ar=C,Go(n,l,t,k)),k){const L=k.run,z=k.failed?"#f85149":"#2ea043",V=k.failed?"❌":"✅",E=k.failed?"FAILED":"SUCCESS";let g=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${z};">${V} ${E}</strong>
          <span style="float:right;color:#8b8b9b;font-size:11px;">Run #${k.idx+1}</span>
        </div>
        <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
      `;L.startYear&&(g+=`<span style="color:#8b8b9b;">Start year:</span><span>${L.startYear}</span>`),g+=`<span style="color:#8b8b9b;">Duration:</span><span>${L.years.toFixed(1)} years</span>`,g+=`<span style="color:#8b8b9b;">Final balance:</span><span>${ae(L.final)}</span>`,g+=`<span style="color:#8b8b9b;">Protection months:</span><span>${L.protMonths}</span>`,g+=`<span style="color:#8b8b9b;">Longest streak:</span><span>${L.maxConsec} months</span>`,L.hodlUsed>0&&(g+=`<span style="color:#8b8b9b;">HODL used:</span><span>${ae(L.hodlUsed)}</span>`),g+="</div>",k.failed&&L.failMonth&&(g+=`<div style="margin-top:8px;padding-top:8px;border-top:1px solid #555;color:#f0c674;">💀 Depleted at year ${(L.failMonth/12).toFixed(1)}</div>`),Bl(a.clientX,a.clientY,g)}else dn()},s=()=>{if(dn(),ar!==-1){ar=-1;const a=Wn.get(n.id);a&&Go(n,a,t,null)}};n._trajHoverListener=i,n._trajLeaveListener=s,n.addEventListener("mousemove",i),n.addEventListener("mouseleave",s)}function ZE(n,t){const e=n._histHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Wn.get(n.id);if(!s||s.type!=="histogram")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=n.height/a.height,h=(i.clientX-a.left)*l,f=(i.clientY-a.top)*u,{bars:m,totalRuns:_}=s;let T=null;if(m.forEach(S=>{h>=S.x&&h<=S.x+S.w&&f>=S.y&&f<=S.y+S.h&&(T=S)}),T){const S=T.months===0,R=S?"#2ea043":"#e1b12c",b=S?"🟢":"🟡",k=S?"No Protection":`${T.months}${T.monthsEnd>T.months?`-${T.monthsEnd}`:""} months`,D=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${R};">${b} ${k}</strong>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
          <span style="color:#8b8b9b;">Runs:</span><span>${T.count} of ${_}</span>
          <span style="color:#8b8b9b;">Percentage:</span><span>${T.pct}%</span>
        </div>
      `;Bl(i.clientX,i.clientY,D)}else dn()};n._histHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",dn)}function Go(n,t,e,r){const i=n.getContext("2d"),{width:s,height:a}=n,{paths:l,xScale:u,yScale:h,padding:f,chartWidth:m,chartHeight:_,years:T,maxValue:S,glide:R}=t;i.fillStyle="rgba(15,15,26,1)",i.fillRect(f.left,f.top,m,_),i.strokeStyle=e.grid,i.lineWidth=1;for(let b=0;b<=5;b++){const k=f.top+b/5*_;i.beginPath(),i.moveTo(f.left,k),i.lineTo(s-f.right,k),i.stroke()}R&&R.length>0&&(i.strokeStyle=e.glidepath,i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),R.forEach((b,k)=>{const D=u(b.year),C=h(b.min);k===0?i.moveTo(D,C):i.lineTo(D,C)}),i.stroke(),i.setLineDash([])),l.forEach(b=>{if(r&&b.idx===r.idx)return;const k=r?.15:b.failed?.8:.25;i.strokeStyle=b.failed?`rgba(248,81,73,${k})`:`rgba(46,160,67,${k})`,i.lineWidth=b.failed?2:.5,i.beginPath(),b.pts.forEach((D,C)=>{C===0?i.moveTo(D.x,D.y):i.lineTo(D.x,D.y)}),i.stroke()}),r&&(i.strokeStyle=r.failed?e.trajectoryFailedHover:e.trajectoryHover,i.lineWidth=4,i.shadowColor=r.failed?e.trajectoryFailedHover:e.trajectoryHover,i.shadowBlur=8,i.beginPath(),r.pts.forEach((b,k)=>{k===0?i.moveTo(b.x,b.y):i.lineTo(b.x,b.y)}),i.stroke(),i.shadowBlur=0),i.strokeStyle=e.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(f.left,h(0)),i.lineTo(s-f.right,h(0)),i.stroke(),i.setLineDash([])}function Bl(n,t,e){let r=document.getElementById("chartTooltip");r||(r=document.createElement("div"),r.id="chartTooltip",document.body.appendChild(r)),r.innerHTML=e,r.style.display="block",r.style.left=n+15+"px",r.style.top=t-10+"px"}function dn(){const n=document.getElementById("chartTooltip");n&&(n.style.display="none")}function tI(){return`
    /* Chart tooltip - PWA style */
    #chartTooltip {
      position: fixed;
      background: rgba(22,27,34,0.95);
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 13px;
      line-height: 1.5;
      color: #c9d1d9;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      pointer-events: none;
      z-index: 10000;
      display: none;
      max-width: 280px;
    }

    #chartTooltip strong {
      display: block;
      font-size: 14px;
    }

    /* Mobile-first chart containers */
    .chart-container {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .chart-container canvas {
      display: block;
      min-width: 600px;
      height: auto;
    }

    /* Scrollable wrapper for charts on mobile */
    .chart-scroll-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 0 -12px;
      padding: 0 12px;
    }

    /* Chart grid for side-by-side layout */
    .chart-grid {
      display: grid;
      gap: 16px;
    }

    @media (min-width: 1024px) {
      .chart-grid {
        grid-template-columns: 1fr 1fr;
      }
      .chart-container canvas {
        min-width: unset;
        width: 100%;
      }
    }

    @media (max-width: 600px) {
      .chart-container {
        padding: 8px;
        margin: 8px 0;
        border-radius: 6px;
      }

      .chart-container canvas {
        min-width: 500px;
      }

      #chartTooltip {
        font-size: 12px;
        padding: 10px 12px;
        max-width: 220px;
      }
    }

    /* Mobile scroll indicator */
    .chart-scroll-hint {
      display: none;
      text-align: center;
      color: var(--text-muted);
      font-size: 12px;
      padding: 4px;
    }

    @media (max-width: 768px) {
      .chart-scroll-hint {
        display: block;
      }
    }
  `}window._simEngine={runMonteCarlo:Af,runHistorical:Sf,simulate:fo};window._constants={EQUITY_RETURNS:mi,INFLATION:Aa};window._mathUtils={seededRng:Sa};let eI=null,nI=null;const Nf=document.createElement("style");Nf.textContent=oE()+NE()+HE()+TE()+tI();document.head.appendChild(Nf);const Fl=document.getElementById("globalLoadingOverlay"),rI=Fl.querySelector(".loading-text");function Br(n="Loading..."){rI.textContent=n,Fl.classList.add("active")}function Fr(){Fl.classList.remove("active")}document.getElementById("versionDisplay").textContent=`v${Zu}`;document.getElementById("entryMonth").value=hp();function iI(n){const t=parseFloat(n);return isNaN(t)?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function Lf(){document.querySelectorAll('input[type="number"]').forEach(t=>{t.value,t.addEventListener("focus",function(e){setTimeout(()=>{this.select()},0)}),t.addEventListener("click",function(e){!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&this.select()})})}function zl(){document.querySelectorAll('input[type="number"]').forEach(t=>{if(t.dataset.formatted)return;t.dataset.formatted="true";const e=t.closest(".input-with-unit")||t.parentElement,r=t.closest(".input-with-unit")!==null,i=document.createElement("span");i.className="number-format-overlay";const s=r?"34px":"14px";i.style.cssText=`
          position: absolute;
          left: ${s};
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: inherit;
          font-size: inherit;
          font-family: inherit;
          background: transparent;
          z-index: 1;
        `,getComputedStyle(e).position==="static"&&(e.style.position="relative");function a(){const l=parseFloat(t.value);!isNaN(l)&&l>=1e3&&document.activeElement!==t?(i.textContent=iI(l),i.style.display="block",t.style.color="transparent"):(i.style.display="none",t.style.color="")}t._updateOverlay=a,t.addEventListener("focus",()=>{i.style.display="none",t.style.color=""}),t.addEventListener("blur",a),t.addEventListener("input",()=>{document.activeElement===t&&(i.style.display="none",t.style.color="")}),e.appendChild(i),a()})}function go(){document.querySelectorAll('input[type="number"]').forEach(n=>{n._updateOverlay&&n._updateOverlay()})}setTimeout(()=>{Lf(),zl()},100);const sI=new MutationObserver(n=>{let t=!1;n.forEach(e=>{e.addedNodes.forEach(r=>{var i,s;r.nodeType===1&&((i=r.matches)!=null&&i.call(r,'input[type="number"]')||(s=r.querySelector)!=null&&s.call(r,'input[type="number"]'))&&(t=!0)})}),t&&setTimeout(()=>{Lf(),zl()},50)});sI.observe(document.body,{childList:!0,subtree:!0});let hr=null;async function Vf(n,t="decision"){Ea(),jE(),document.getElementById("mainApp").classList.remove("hidden"),document.getElementById("userEmail").textContent=n.email,await yo(),await vo(),oI(),t==="stress"&&(document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),document.querySelector('.tab[data-tab="stress"]').classList.add("active"),document.querySelectorAll(".tab-content").forEach(e=>e.classList.remove("active")),document.getElementById("stress-content").classList.add("active"))}async function oI(){try{const n=await vn(),t=await Or();document.getElementById("entryEquity").value=t.equityMin||25e4,document.getElementById("entryBond").value=t.bondMin||2e5,document.getElementById("entryCash").value=t.cashTarget||5e4,document.getElementById("dsEquityMin").value=t.equityMin||25e4,document.getElementById("dsBondMin").value=t.bondMin||2e5,document.getElementById("dsCashTarget").value=t.cashTarget||5e4,document.getElementById("dsDuration").value=t.duration||35,document.getElementById("dsBaseSalary").value=t.baseSalary||3e4,document.getElementById("dsStatePension").value=t.statePension||12e3,document.getElementById("dsStatePensionYear").value=t.statePensionYear||12,document.getElementById("dsProtectionFactor").value=t.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=t.recoveryBuffer||1e4,document.getElementById("dsConsecutiveLimit").value=t.consecutiveLimit||3,["mc","hist","scen"].forEach(e=>{const r=document.getElementById(e+"Equity"),i=document.getElementById(e+"Bond"),s=document.getElementById(e+"Cash"),a=document.getElementById(e+"Years");r&&(r.value=n.equityMin),i&&(i.value=n.bondMin),s&&(s.value=n.cashTarget),a&&(a.value=n.duration)}),document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,go(),console.log("All inputs initialized from stored settings")}catch(n){console.error("Error initializing inputs from settings:",n)}}async function Ta(n){console.log("Wizard completed with data:",n);try{await Rl({baseSalary:n.decisionSalary,equityMin:n.decisionEquity,bondMin:n.decisionBond,cashTarget:n.decisionCash,duration:n.decisionDuration,statePension:n.statePension,statePensionYear:n.statePensionYear}),await Dl({baseSalary:n.baseSalary,other:n.otherIncome,statePension:n.statePension,statePensionYear:n.statePensionYear,equityMin:n.equityMin,bondMin:n.bondMin,cashTarget:n.cashTarget,duration:n.duration,taxMode:n.taxMode}),document.getElementById("entryEquity").value=n.decisionEquity,document.getElementById("entryBond").value=n.decisionBond,document.getElementById("entryCash").value=n.decisionCash,document.getElementById("mcEquity").value=n.equityMin,document.getElementById("mcBond").value=n.bondMin,document.getElementById("mcCash").value=n.cashTarget,document.getElementById("mcYears").value=n.duration,go()}catch(e){console.error("Error saving wizard settings:",e)}const t=Fi();Vf(t,"stress")}RE(document.getElementById("authScreen"),async n=>{console.log("Auth success callback triggered for:",n.email);try{console.log("Checking for existing cloud data...");const t=await Vw();console.log("Has cloud data:",t),t?(console.log("Existing user - showing main app"),Vf(n)):(console.log("New user - showing setup wizard"),Ea(),document.getElementById("setupWizard").style.display="block",ba(document.getElementById("setupWizard"),Ta))}catch(t){console.error("Error in auth callback:",t),Ea(),document.getElementById("setupWizard").style.display="block",ba(document.getElementById("setupWizard"),Ta)}});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await _f(),document.getElementById("mainApp").classList.add("hidden"),Mf()}catch(n){console.error("Logout error:",n)}});const aI=60*60*1e3;let Ko=null;function Of(){Ko&&clearTimeout(Ko),be()&&(Ko=setTimeout(async()=>{if(be()){alert("You have been logged out due to inactivity (1 hour).");try{await _f(),document.getElementById("mainApp").classList.add("hidden"),Mf()}catch(n){console.error("Auto-logout error:",n)}}},aI))}const lI=["mousedown","mousemove","keydown","scroll","touchstart","click"];lI.forEach(n=>{document.addEventListener(n,()=>{Of()},{passive:!0})});Of();document.getElementById("resetBtn").addEventListener("click",async()=>{if(!(!confirm(`⚠️ WARNING: This will permanently delete ALL your data including:

• All saved settings
• All decision history
• All tax year configurations

This action cannot be undone.

Are you sure you want to reset and start over?`)||!confirm(`Are you ABSOLUTELY sure?

Type OK to confirm deletion of all your data.`)))try{console.log("Wiping all user data..."),await Lw(),console.log("Data wiped successfully"),Ow(),localStorage.clear(),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("setupWizard").style.display="block",ba(document.getElementById("setupWizard"),Ta),alert("All data has been deleted. Please complete the setup wizard to start fresh.")}catch(e){console.error("Reset error:",e),alert("Error resetting data: "+e.message)}});document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&await yo(),n.dataset.tab==="taxyears"&&await vo(),n.dataset.tab==="stress"&&await Ul()})});document.querySelectorAll(".sub-tab[data-stresstab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-stresstab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".stress-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`stress-${n.dataset.stresstab}`).classList.remove("hidden"),n.dataset.stresstab==="stresssettings"&&await Ul()})});document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`decision-${n.dataset.decisiontab}`).classList.remove("hidden"),n.dataset.decisiontab==="decisionsettings"&&await Ff()})});function cI(n){const[t,e]=n.split("-").map(Number);return e>=4?t%100+"/"+(t+1)%100:(t-1)%100+"/"+t%100}function uI(n){const[t,e]=n.split("-").map(Number);return Math.max(0,(e>=4?t:t-1)-2026)}function Qo(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function Xu(n,t,e){return n<=t?n:n<=e?t+(n-t)*.8:t+(e-t)*.8+(n-e)*.6}async function Ju(n,t,e,r){const i=await Or(),s=await Tf(),a=await ho(),l=cI(n),u=uI(n),[h,f]=n.split("-").map(Number);if(!a[l])throw new Error(`Tax year ${l} is not configured. Please add it in the Settings tab before calculating.`);const m=a[l],_=m.pa||12570,T=m.brl||50270,S=m.other||0,R=m.isTaxEfficient!==!1,b=m.isaSavingsAllocation||0,k=m.isaSavingsUsed||0,D=m.grossIncomeToDate||0,C=m.confirmedSalary||i.baseSalary,L=i.statePension||0,z=i.statePensionYear||12;let V=0;if(u>=z&&L>0){let Q=1;for(let dt=0;dt<=u;dt++){const Rt=String((26+dt)%100).padStart(2,"0")+"/"+String((27+dt)%100).padStart(2,"0");Q*=1+((a[Rt]||{}).cpi||.04)}V=L*Q}let E=1;for(let Q=0;Q<u;Q++){const dt=String((26+Q)%100).padStart(2,"0")+"/"+String((27+Q)%100).padStart(2,"0"),Rt=(a[dt]||{}).cpi||.04;E*=1+Rt}const g=Math.round(Qo(i.equityMin,u,i.duration,E,!0)),w=Math.round(Qo(i.bondMin,u,i.duration,E,!0)),v=Math.round(Qo(i.cashTarget,u,i.duration,E,!1)),I=t+e,A=g+w;let y=!1,pt=0;const X=s.filter(Q=>Q.date<n);for(let Q=X.length-1;Q>=0&&X[Q].source==="Cash";Q--)pt++;X.length&&X[X.length-1].inProtection&&(y=I<=A+(i.recoveryBuffer||1e4)),!y&&I<A&&pt+1>=(i.consecutiveLimit||3)&&(y=!0);const St=f>=4?16-f:4-f,ct=Math.max(1,St),Mt=C*E,gt=S+V;let it,ue,ut,q=0,vt=!1,ot=0;const Ft=Math.max(0,b-k)/ct;if(R){const Q=gt/12,dt=Math.max(0,T-D),Rt=Math.max(0,dt/ct-Q),tr=Mt/12,er=Math.min(tr-Q,Rt),Ye=Xu(Mt,_,T)/12,An=Math.min(Mt,T),Se=Xu(An,_,T)/12,te=Math.max(0,Ye-Se),oe=Math.min(te,Ft);if(ot=oe,y)it=er*(1-(i.protectionFactor||20)/100),ue=oe,ut="Protection";else{it=er,ue=oe,ut="Tax-Efficient";const nr=f>=4?h:h-1,xe=X.filter(Kt=>{const[he,Rn]=Kt.date.split("-").map(Number);return(Rn>=4?he:he-1)===nr});let Sn=0,xn=0;if(xe.forEach(Kt=>{xn+=Kt.sipp||0,Kt.inProtection&&Kt.stdSipp&&(Sn+=Kt.stdSipp-Kt.sipp),Kt.boostAmount>0&&(Sn-=Kt.boostAmount)}),Sn>0){const Kt=xn+it*ct+gt,he=T-Kt,Rn=I-A-(i.recoveryBuffer||1e4);if(he>0&&Rn>0){const Pt=he/ct,ji=Sn/ct,Pn=Rn/ct;q=Math.min(ji,Pt,Pn),q>50&&(it+=q,ut="Tax Boost")}}}}else{const Q=Mt/12,dt=gt/12,Rt=Math.max(0,Q-dt);if(ue=0,y){it=Rt*(1-(i.protectionFactor||20)/100),ut="Protection";const tr=f>=4?h:h-1,er=X.filter(Se=>{const[te,oe]=Se.date.split("-").map(Number);return(oe>=4?te:te-1)===tr});let Ye=0;er.forEach(Se=>{Ye+=Se.sipp||0});const An=Ye+it*ct+gt;if(An<T){const te=(T-An)/ct,oe=I-A-(i.recoveryBuffer||1e4);oe>0&&te>50&&(q=Math.min(te,oe/ct),q>50&&(it+=q,vt=!0,ut="Protection-Induced Efficiency"))}}else it=Rt,ut="Tax-Inefficient"}let Dt,zt,Yt=0,_n=0,wn=0,En="";if(!y&&I>=A+it){Dt="Growth";const Q=Math.max(0,t-g),dt=Math.max(0,e-w),Rt=Q+dt;Rt>0?(Yt=it*Q/Rt,_n=it*dt/Rt,zt="Healthy"):(Dt="Cash",wn=it,zt="At min")}else Dt="Cash",wn=it,zt=y?"Protection":"Below min",r<it&&(En="Cash low!");let de="";const je=t-g,In=e-w;if(je>5e3&&In<-5e3){const Q=Math.floor(Math.min(je,-In)/1e3)*1e3;Q>=5e3&&(de=`Move £${Q.toLocaleString()} Equity→Bond`)}else if(In>5e3&&je<-5e3){const Q=Math.floor(Math.min(In,-je)/1e3)*1e3;Q>=5e3&&(de=`Move £${Q.toLocaleString()} Bond→Equity`)}let zr="";const qi=v-r;if(qi>5e3&&Dt==="Growth"&&!y){const Q=I-A-it;if(Q>1e4){const dt=Math.floor(Math.min(qi*.3,Q*.5)/1e3)*1e3;dt>=5e3&&(zr=`Replenish Cash: Move £${dt.toLocaleString()} from growth funds`)}}const He=[];En&&He.push({message:En,severity:"danger",type:"low-cash"}),q>50&&He.push({message:`Tax Boost: +£${Math.round(q).toLocaleString()}/mo catch-up from protection shortfall`,severity:"success",type:"tax-boost"}),de&&He.push({message:de,severity:"warning",type:"rebalance"}),zr&&He.push({message:zr,severity:"info",type:"cash-replenish"});const Qn=it+S/12+V/12,Ae=Qn*12;let We=0;Ae>_&&(Ae<=T?We=(Ae-_)*.2:We=(T-_)*.2+(Ae-T)*.4);const Xn=Qn-We/12+ue,Ur=f>=4?h:h-1,$r=X.filter(Q=>{const[dt,Rt]=Q.date.split("-").map(Number);return(Rt>=4?dt:dt-1)===Ur});let wt=$r.reduce((Q,dt)=>Q+(dt.taxPaidMonthly||dt.monthlyTax||0),0);wt+=We/12;const xt=$r.length+1,Jn=wt/xt*12,bn=Mt/12;let Zn=0;bn*12>_&&(bn*12<=T?Zn=(bn*12-_)*.2:Zn=(T-_)*.2+(bn*12-T)*.4);const qr=Math.max(0,Zn/12-We/12),Tn=k+ot;return{date:n,taxYear:l,yearNumber:u,remainingMonths:ct,equity:t,bond:e,cash:r,isa:0,adjEquityMin:g,adjBondMin:w,adjCashTarget:v,pa:_,brl:T,other:S/12,statePension:V/12,sippDraw:it,isaDraw:ue,totalMonthlyNet:Xn,isTaxEfficientYear:R,yearlyIsaSavingsAllocation:b,cumulativeIsaSavingsUsed:Tn,isaSavingsUsedThisMonth:ot,taxPaidYTD:wt,taxProjectedAnnual:Jn,taxSavedMonthly:qr,taxSavedYTD:qr*xt,taxSavedProjectedAnnual:qr*12,taxEfficient:R&&!vt,inProtection:y,protectionReason:y?zt:null,consecutiveCashDraws:pt,protectionInducedTaxEfficiency:vt,boostAmount:q>50?q:0,boostEligible:q>50,source:Dt,drawFromEquity:Yt,drawFromBond:_n,drawFromCash:wn,rebalanceNeeded:de!=="",rebalanceActions:de?[de]:[],alerts:He,calculationDetails:{mode:ut,reason:`${zt} | ${ut}`,totalGrowth:I,minGrowth:A,consec:pt,stdSipp:it,inputs:{baseSalary:i.baseSalary,confirmedSalary:C,targetGross:Mt,cumInf:E,yearNum:u,taxYear:l,OTHER:S,STATE:V,PA:_,BRL:T,isTaxEfficientYear:R,yearlyIsaSavingsAllocation:b,grossIncomeToDate:D},taxInfo:{annualTaxable:Ae,headroomToBRL:T-Ae,annualTax:We,monthlyNet:Xn}}}}window.handleDecisionSubmit=async function(n){n.preventDefault();const t=document.getElementById("entryMonth").value,e=parseFloat(document.getElementById("entryEquity").value)||0,r=parseFloat(document.getElementById("entryBond").value)||0,i=parseFloat(document.getElementById("entryCash").value)||0,s=[];if(t||s.push("Month"),!e&&e!==0&&s.push("Equity Fund"),!r&&r!==0&&s.push("Bond Balance"),!i&&i!==0&&s.push("Cash Balance"),s.length>0){alert(`Please fill in the following fields:

• `+s.join(`
• `));return}try{if((await mE(t)).showWizard){const u=document.getElementById("taxYearWizard");u.style.display="block",window._pendingDecisionForm={dateStr:t,equity:e,bond:r,cash:i},pE(u,t,async h=>{if(u.style.display="none",h&&h.completed)try{hr=await Ju(t,e,r,i);const f=document.getElementById("decisionOutput");qu(hr,f),document.getElementById("saveBtn").disabled=!1}catch(f){console.error("Decision error after wizard:",f),alert("Error calculating decision: "+f.message)}});return}hr=await Ju(t,e,r,i);const l=document.getElementById("decisionOutput");qu(hr,l),document.getElementById("saveBtn").disabled=!1}catch(a){console.error("Decision error:",a),alert("Error calculating decision: "+a.message)}};window.saveCurrentDecision=async function(){if(!hr){alert("No decision to save");return}if(!be()){alert("Please sign in to save decisions");return}try{await Ww(hr),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0,await yo()}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};window.runMonteCarloUI=async function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("mcResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await vn(),setTimeout(()=>{try{const{results:t,stats:e}=AE(n);eI=t,Bf(e,t,"Monte Carlo (1000 runs)","mcResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("mcResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runHistoricalUI=async function(){const n={equityStart:parseFloat(document.getElementById("histEquity").value)||25e4,bondStart:parseFloat(document.getElementById("histBond").value)||2e5,cashStart:parseFloat(document.getElementById("histCash").value)||5e4,years:parseInt(document.getElementById("histYears").value)||35};document.getElementById("histResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await vn(),setTimeout(()=>{try{const{results:t,stats:e}=SE(n);nI=t,Bf(e,t,"Historical Analysis","histResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("histResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runScenariosUI=async function(){const n={equityStart:parseFloat(document.getElementById("scenEquity").value)||25e4,bondStart:parseFloat(document.getElementById("scenBond").value)||2e5,cashStart:parseFloat(document.getElementById("scenCash").value)||5e4,years:35};document.getElementById("scenResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',await vn(),setTimeout(()=>{try{const t=xE(n);fI(t,"scenResults")}catch(t){console.error("Scenario error:",t),document.getElementById("scenResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};let Xo=!1;window.runOptimisationUI=async function(n){if(Xo)return;Xo=!0;const t=document.getElementById("optimiseBtn"+n),e=document.getElementById("optimiseResults"+n);t&&(t.disabled=!0),t&&(t.textContent="Optimising...");let r,i,s,a;n==="MC"?(r=document.getElementById("mcEquity"),i=document.getElementById("mcBond"),s=document.getElementById("mcCash"),a=document.getElementById("mcYears")):(r=document.getElementById("histEquity"),i=document.getElementById("histBond"),s=document.getElementById("histCash"),a=document.getElementById("histYears"));const l=+r.value,u=+i.value,h=+s.value,f=+a.value,m=l+u+h;e.innerHTML='<div class="loading"><div class="spinner"></div>Testing allocations...</div>';const _=await vn(),T=JSON.parse(JSON.stringify(_));setTimeout(()=>{try{let S=null,R={equity:l,bond:u,cash:h,rate:0,avgProt:0,withProt:0,totalRuns:0};const b=[];for(let I=5;I<=30;I+=5)for(let A=20;A<=95-I;A+=5){const y=100-I-A;y>=0&&b.push({equity:Math.round(m*A/100),bond:Math.round(m*y/100),cash:Math.round(m*I/100)})}const{EQUITY_RETURNS:k,INFLATION:D}=window._constants,{simulate:C}=window._simEngine,{seededRng:L}=window._mathUtils,z=Object.keys(k).map(Number).sort((I,A)=>I-A),V=Math.max(...z),E=I=>{const A={equityStart:I.equity,bondStart:I.bond,cashStart:I.cash,years:f,equityMin:T.equityMin,bondMin:T.bondMin,cashTarget:T.cashTarget,duration:T.duration,baseSalary:T.baseSalary,other:T.other,statePension:T.statePension,statePensionYear:T.statePensionYear,pa:T.pa,brl:T.brl,hrl:T.hrl,taxMode:T.taxMode,protectionMult:T.protectionMult,consecutiveLimit:T.consecutiveLimit,disableProtection:T.disableProtection,hodlEnabled:T.hodlEnabled,hodlValue:T.hodlValue},y=[];if(n==="MC")for(let q=0;q<1e3;q++){const vt=L(q*12345),ot={equity:{},inflation:{}};for(let at=0;at<f;at++){const Ft=z[Math.floor(vt()*z.length)];ot.equity[at]=k[Ft],ot.inflation[at]=D[Ft]||.025}y.push(C(A,ot,q))}else z.forEach(q=>{if(q+f-1>V)return;const vt={equity:{},inflation:{}};for(let ot=0;ot<f;ot++)vt.equity[ot]=k[q+ot]||0,vt.inflation[ot]=D[q+ot]||.025;y.push(C(A,vt,q))});const pt=y.filter(q=>q.failed),X=y.filter(q=>!q.failed),St=(y.length-pt.length)/y.length*100,Mt=y.map(q=>q.protMonths).reduce((q,vt)=>q+vt,0)/y.length,gt=y.filter(q=>q.protMonths>0).length,it=X.map(q=>q.final).sort((q,vt)=>q-vt),ue=it.length>0?it[Math.floor(it.length*.5)]:0,ut=it.length>0?it[Math.floor(it.length*.9)]:0;return{equity:I.equity,bond:I.bond,cash:I.cash,rate:St,avgProt:Mt,withProt:gt,totalRuns:y.length,medianFinal:ue,p90Final:ut}},w=E({equity:l,bond:u,cash:h});R.avgProt=w.avgProt,R.withProt=w.withProt,R.totalRuns=w.totalRuns,R.rate=w.rate,R.medianFinal=w.medianFinal,R.p90Final=w.p90Final,b.forEach(I=>{const A=E(I);A.avgProt<=R.avgProt&&(!S||A.rate>S.rate)&&(S=A)});let v="";if(S&&S.rate>R.rate){const I=S.medianFinal-R.medianFinal,A=R.medianFinal>0?I/R.medianFinal*100:0;v+='<div class="card" style="margin-top:20px;border-color:var(--success);">',v+='<h3 style="color:var(--success);margin-top:0;">Better Allocation Found</h3>',v+='<p style="color:var(--text-muted);margin-bottom:16px;">A different fund split could improve your success rate without increasing protection usage:</p>',v+='<div class="grid-2" style="gap:20px;margin-bottom:20px;">',v+='<div style="padding:16px;background:rgba(0,0,0,0.2);border-radius:8px;">',v+='<div style="font-weight:500;margin-bottom:12px;color:var(--text-muted);">Your Current Split</div>',v+='<div style="font-size:24px;font-weight:600;color:var(--warning);">'+R.rate.toFixed(1)+"%</div>",v+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate</div>',v+='<div style="font-size:13px;">Equity: '+U(R.equity)+" ("+Math.round(R.equity/m*100)+"%)</div>",v+='<div style="font-size:13px;">Bonds: '+U(R.bond)+" ("+Math.round(R.bond/m*100)+"%)</div>",v+='<div style="font-size:13px;">Cash: '+U(R.cash)+" ("+Math.round(R.cash/m*100)+"%)</div>",v+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+R.avgProt.toFixed(0)+" mo | Median final: "+U(R.medianFinal)+"</div>",v+="</div>",v+='<div style="padding:16px;background:rgba(46,160,67,0.1);border-radius:8px;border:1px solid var(--success);">',v+='<div style="font-weight:500;margin-bottom:12px;color:var(--success);">Optimised Split</div>',v+='<div style="font-size:24px;font-weight:600;color:var(--success);">'+S.rate.toFixed(1)+"%</div>",v+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate (+'+(S.rate-R.rate).toFixed(1)+"%)</div>",v+='<div style="font-size:13px;">Equity: '+U(S.equity)+" ("+Math.round(S.equity/m*100)+"%)</div>",v+='<div style="font-size:13px;">Bonds: '+U(S.bond)+" ("+Math.round(S.bond/m*100)+"%)</div>",v+='<div style="font-size:13px;">Cash: '+U(S.cash)+" ("+Math.round(S.cash/m*100)+"%)</div>",v+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+S.avgProt.toFixed(0)+" mo | Median final: "+U(S.medianFinal)+"</div>",v+="</div>",v+="</div>",I<0?(v+='<div class="alert alert-warning" style="margin-bottom:16px;">',v+="<strong>Trade-off:</strong> The optimised allocation has a "+Math.abs(A).toFixed(0)+"% lower median final value. ",v+="This is because it likely has less equity exposure. You gain safety but may sacrifice some upside.",v+="</div>"):I>0&&(v+='<div class="alert alert-info" style="margin-bottom:16px;">',v+="<strong>Bonus:</strong> The optimised allocation also has a "+A.toFixed(0)+"% higher median final value!",v+="</div>"),v+='<div class="alert alert-info" style="margin-bottom:16px;">',v+="<strong>To apply this allocation:</strong> Click the button below to update your Settings with these new fund minimums.",v+="</div>",v+='<button onclick="applyOptimisedAllocationUI('+S.equity+","+S.bond+","+S.cash+')" style="width:100%;">Apply Optimised Allocation to Settings</button>',v+="</div>"}else v+='<div class="card" style="margin-top:20px;border-color:var(--primary);">',v+='<h3 style="color:var(--primary);margin-top:0;">Your Allocation is Already Optimal</h3>',v+='<p style="color:var(--text-muted);">We tested '+b.length+" different fund splits. Your current allocation achieves the best success rate ("+R.rate.toFixed(1)+"%) without increasing protection usage.</p>",v+='<p style="font-size:13px;color:var(--text-muted);">Your protection: '+R.avgProt.toFixed(0)+" months average</p>",v+="</div>";e.innerHTML=v}catch(S){console.error("Optimisation error:",S),e.innerHTML='<div class="alert alert-danger">Error: '+S.message+"</div>"}finally{Xo=!1,t&&(t.disabled=!1,t.textContent="Optimise Allocation")}},50)};window.applyOptimisedAllocationUI=async function(n,t,e){if(document.getElementById("ssEquityMin").value=n,document.getElementById("ssBondMin").value=t,document.getElementById("ssCashTarget").value=e,document.getElementById("dsEquityMin").value=n,document.getElementById("dsBondMin").value=t,document.getElementById("dsCashTarget").value=e,document.getElementById("mcEquity").value=n,document.getElementById("mcBond").value=t,document.getElementById("mcCash").value=e,document.getElementById("histEquity").value=n,document.getElementById("histBond").value=t,document.getElementById("histCash").value=e,document.getElementById("scenEquity").value=n,document.getElementById("scenBond").value=t,document.getElementById("scenCash").value=e,be())try{await Dl({equityMin:n,bondMin:t,cashTarget:e})}catch(r){console.error("Error saving optimised settings:",r)}alert("Settings updated! Run the test again to see the full results with your new allocation.")};const dI={1929:"Wall Street Crash / Great Depression",1930:"Great Depression",1931:"Great Depression",1932:"Great Depression",1937:"Recession of 1937",1968:"Late 1960s stagflation",1969:"Late 1960s recession",1973:"Oil Crisis / 1973-74 crash",1974:"1973-74 bear market",2e3:"Dot-com bubble burst",2001:"Dot-com bust / 9/11",2007:"Global Financial Crisis",2008:"Global Financial Crisis",2022:"Post-COVID inflation / rate hikes"};function hI(n){if(!n||n.length===0)return"";const t=n.filter(s=>s.failed).sort((s,a)=>s.years-a.years),e=n.filter(s=>s.protMonths>0).sort((s,a)=>a.protMonths-s.protMonths),r=t.length>0?t.slice(0,5):e.slice(0,5);if(r.length===0)return"";let i=`
        <details style="margin-top: 24px;">
          <summary style="cursor: pointer; font-weight: 600; color: var(--danger); margin-bottom: 10px;">
            ${t.length>0?"Worst Periods (Failed)":"Worst Periods (Most Protection)"}
          </summary>
          <div style="overflow-x: auto;">
            <table class="data-table" style="width: 100%; margin-top: 10px;">
              <thead>
                <tr>
                  <th>Start Year</th>
                  <th>Event</th>
                  <th>Years Survived</th>
                  <th>Protection Months</th>
                  <th>Final Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
      `;return r.forEach(s=>{const a=s.startYear||s.seed,l=dI[a]||"-",u=s.failed?"danger":"success";i+=`
          <tr>
            <td>${a}</td>
            <td style="font-size: 12px;">${l}</td>
            <td>${s.years.toFixed(1)}</td>
            <td>${s.protMonths}</td>
            <td>${U(s.final)}</td>
            <td style="color: var(--${u});">${s.failed?"FAILED":"OK"}</td>
          </tr>
        `}),i+=`
              </tbody>
            </table>
          </div>
        </details>
      `,i}function Bf(n,t,e,r,i){const s=n.successRate>=90?"success":n.successRate>=80?"warning":"danger",a=r.replace("Results",""),l=n.survival||{},u=n.finalValue||{},h=n.protection||{};let f=`
        <div class="card">
          <h2>${e}</h2>

          <!-- Primary Stats -->
          <div class="grid-4" style="margin-bottom: 24px;">
            <div class="stat-box ${s}">
              <div class="stat-value">${n.successRate.toFixed(1)}%</div>
              <div class="stat-label">Success Rate</div>
            </div>
            <div class="stat-box danger">
              <div class="stat-value">${n.failCount}</div>
              <div class="stat-label">Failures</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${(l.p10||n.p10Years||0).toFixed(1)}</div>
              <div class="stat-label">10th %ile Years</div>
            </div>
            <div class="stat-box success">
              <div class="stat-value">${U(u.p50||n.medianFinal||0)}</div>
              <div class="stat-label">Median Final</div>
            </div>
          </div>

          <!-- 7-Point Percentile Stats -->
          <details style="margin-bottom: 20px;">
            <summary style="cursor: pointer; font-weight: 600; color: var(--primary); margin-bottom: 10px;">
              Detailed Percentile Statistics
            </summary>
            <div class="grid-7" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-top: 10px;">
              ${["p5","p10","p25","p50","p75","p90","p95"].map(m=>`
                <div class="stat-box mini">
                  <div class="stat-value" style="font-size: 14px;">${U(u[m]||0)}</div>
                  <div class="stat-label" style="font-size: 10px;">${m.toUpperCase()}</div>
                </div>
              `).join("")}
            </div>
          </details>

          <!-- Protection Stats -->
          <div class="grid-5" style="margin-bottom: 24px;">
            <div class="stat-box">
              <div class="stat-value">${h.runsWithProtection||n.runsWithProtection||0}</div>
              <div class="stat-label">Runs w/ Protection</div>
            </div>
            <div class="stat-box warning">
              <div class="stat-value">${(h.avgMonths||n.avgProtMonths||0).toFixed(0)}</div>
              <div class="stat-label">Avg Protection Mo</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${(h.avgConsecutive||n.avgConsecutive||0).toFixed(1)}</div>
              <div class="stat-label">Avg Consecutive</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${h.maxConsecutive||n.maxConsecutive||0}</div>
              <div class="stat-label">Max Consecutive</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${U(u.avg||n.avgFinal||0)}</div>
              <div class="stat-label">Avg Final (success)</div>
            </div>
          </div>

          <!-- Charts -->
          <div class="chart-row">
            <div class="chart-container">
              <canvas id="${a}ConeChart" width="800" height="400"></canvas>
            </div>
            <div class="chart-container">
              <canvas id="${a}TrajChart" width="800" height="400"></canvas>
            </div>
          </div>

          <div class="chart-container" style="max-width: 600px;">
            <canvas id="${a}HistChart" width="600" height="250"></canvas>
          </div>

          <!-- Worst Periods Table (for historical only) -->
          ${r==="histResults"?hI(t):""}

          <!-- Result Summary -->
          <div class="alert ${s==="success"?"alert-success":s==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById(r).innerHTML=f,setTimeout(()=>{const m=document.getElementById(`${a}ConeChart`),_=document.getElementById(`${a}TrajChart`),T=document.getElementById(`${a}HistChart`);m&&t&&t.length>0&&WE(m,t,{years:i}),_&&t&&t.length>0&&YE(_,t,{years:i}),T&&t&&t.length>0&&GE(T,t,{})},50)}function fI(n,t){let e='<div class="card"><h2>Scenario Analysis</h2>';e+=`
        <div class="chart-container" style="margin-bottom: 24px;">
          <canvas id="scenCompChart" width="900" height="400"></canvas>
        </div>
      `,e+='<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">';for(const[r,i]of Object.entries(n)){const s=i.result,a=s.failed?"danger":"success";e+=`
          <div class="history-item" style="border-left: 4px solid ${i.color};">
            <div>
              <div class="history-date">${i.name}</div>
              <div class="history-details">
                Protection: ${s.protMonths} mo | Max streak: ${s.maxConsec} mo
                ${s.hodlUsed>0?` | HODL used: ${U(s.hodlUsed)}`:""}
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 24px; color: var(--${a});">${s.years.toFixed(1)} yrs</div>
              <div style="font-size: 12px; color: var(--${a});">${s.failed?"FAILED":"OK"}</div>
              <div style="font-size: 11px; color: var(--text-muted);">Final: ${U(s.final)}</div>
            </div>
          </div>
        `}e+="</div></div>",document.getElementById(t).innerHTML=e,setTimeout(()=>{const r=document.getElementById("scenCompChart");r&&n&&KE(r,n,{years:35,title:"Scenario Comparison"})},50)}async function Ul(){Br("Loading settings...");try{const n=await vn();document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,go()}catch(n){console.error("Error loading stress settings:",n)}finally{Fr()}}window.saveStressSettingsUI=async function(){if(!be()){alert("Please sign in to save settings");return}Br("Saving settings...");try{await Dl({baseSalary:+document.getElementById("ssBaseSalary").value,equityMin:+document.getElementById("ssEquityMin").value,bondMin:+document.getElementById("ssBondMin").value,cashTarget:+document.getElementById("ssCashTarget").value,duration:+document.getElementById("ssDuration").value,pa:+document.getElementById("ssPA").value,brl:+document.getElementById("ssBRL").value,hrl:+document.getElementById("ssHRL").value,taxMode:document.getElementById("ssTaxMode").value,other:+document.getElementById("ssOther").value,statePension:+document.getElementById("ssStatePension").value,statePensionYear:+document.getElementById("ssStatePensionYear").value,consecutiveLimit:+document.getElementById("ssConsecutiveLimit").value,protectionMult:+document.getElementById("ssProtectionMult").value,disableProtection:document.getElementById("ssDisableProtection").checked,hodlEnabled:document.getElementById("ssHodlEnabled").checked,hodlValue:+document.getElementById("ssHodlValue").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving stress settings:",n),alert("Error saving: "+n.message)}finally{Fr()}};window.resetStressSettingsUI=async function(){if(confirm("Reset all stress settings to defaults?")){Br("Resetting settings...");try{await rE(),await Ul(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{Fr()}}};async function Ff(){Br("Loading settings...");try{const n=await Or();document.getElementById("dsEquityMin").value=n.equityMin||25e4,document.getElementById("dsBondMin").value=n.bondMin||2e5,document.getElementById("dsCashTarget").value=n.cashTarget||5e4,document.getElementById("dsDuration").value=n.duration||35,document.getElementById("dsBaseSalary").value=n.baseSalary||3e4,document.getElementById("dsProtectionFactor").value=n.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=n.recoveryBuffer||15e3,document.getElementById("dsConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("entryEquity").value=n.equityMin||25e4,document.getElementById("entryBond").value=n.bondMin||2e5,document.getElementById("entryCash").value=n.cashTarget||5e4,go()}catch(n){console.error("Error loading decision settings:",n)}finally{Fr()}}window.saveDecisionSettingsUI=async function(){if(!be()){alert("Please sign in to save settings");return}Br("Saving settings...");try{await Rl({equityMin:+document.getElementById("dsEquityMin").value,bondMin:+document.getElementById("dsBondMin").value,cashTarget:+document.getElementById("dsCashTarget").value,duration:+document.getElementById("dsDuration").value,baseSalary:+document.getElementById("dsBaseSalary").value,statePension:+document.getElementById("dsStatePension").value,statePensionYear:+document.getElementById("dsStatePensionYear").value,protectionFactor:+document.getElementById("dsProtectionFactor").value,recoveryBuffer:+document.getElementById("dsRecoveryBuffer").value,consecutiveLimit:+document.getElementById("dsConsecutiveLimit").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving decision settings:",n),alert("Error saving: "+n.message)}finally{Fr()}};window.resetDecisionSettingsUI=async function(){if(confirm("Reset all decision settings to defaults?")){Br("Resetting settings...");try{await Rl({equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,baseSalary:3e4,protectionFactor:20,recoveryBuffer:15e3,consecutiveLimit:3}),await Ff(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{Fr()}}};window.showDrawdownScheduleUI=async function(){const n=parseFloat(document.getElementById("ddInflation").value)/100||.025,t=parseInt(document.getElementById("ddDuration").value)||35;try{const e=await vn();e.duration=t;const r=gp(e,t,n);let i='<div class="card"><h2>Projected SIPP Drawdown Schedule</h2>';i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>BRL</th><th>Other</th><th>State</th><th>SIPP Draw</th><th>Tax</th><th>Net</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${U(s.brl)}</td>
            <td>${U(s.other)}</td>
            <td>${U(s.statePension)}</td>
            <td style="color: var(--primary); font-weight: 600;">${U(s.sippDraw)}</td>
            <td style="color: var(--danger);">-${U(s.tax)}</td>
            <td style="color: var(--success);">${U(s.netIncome)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("drawdownResults").innerHTML=i}catch(e){console.error("Drawdown error:",e),document.getElementById("drawdownResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};window.showGlidepathUI=async function(){const n=parseFloat(document.getElementById("gpInflation").value)/100||.025,t=parseInt(document.getElementById("gpDuration").value)||35;try{const e=await vn();e.duration=t;const r=vp(e,n);let i='<div class="card"><h2>Fund Glidepath (Inflation-Adjusted Minimums)</h2>';i+='<div class="alert alert-info" style="margin-bottom: 20px;">',i+="<strong>Glidepath Logic:</strong> Equity & Bond minimums inflate with CPI but deplete linearly to £0. Cash inflates only (maintains real value).",i+="</div>",i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>Cum Inflation</th><th>Equity Min</th><th>Bond Min</th><th>Cash Target</th><th>Total Min</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${(s.cumulativeInflation*100-100).toFixed(1)}%</td>
            <td style="color: var(--success);">${U(s.equityMin)}</td>
            <td style="color: var(--info);">${U(s.bondMin)}</td>
            <td style="color: var(--warning);">${U(s.cashTarget)}</td>
            <td style="font-weight: 600;">${U(s.totalMin)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("glidepathResults").innerHTML=i}catch(e){console.error("Glidepath error:",e),document.getElementById("glidepathResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};async function yo(){const n=document.getElementById("historyList");n.innerHTML='<p class="loading">Loading history...</p>';const t=await Tf({sortDesc:!0,limit:50});if(t.length===0){n.innerHTML='<p class="loading">No history entries yet.</p>';return}let e="";for(const r of t){const i=r.inProtection?"protection":"";r.mode==="Tax-Efficient"||r.inProtection;let s=r.source;r.source==="Growth"&&(r.dEquity>0||r.dBond>0)?s=`Growth (E:${U(r.dEquity||0)} B:${U(r.dBond||0)})`:r.source==="Cash"&&(s=`Cash (${U(r.dCash||r.sipp||0)})`),e+=`
          <div class="history-item ${i}" style="margin-bottom:12px;padding:16px;background:var(--card-alt);border-radius:8px;border-left:4px solid ${r.inProtection?"var(--warning)":"var(--primary)"};">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
              <div>
                <div style="font-weight:600;color:var(--primary);">${r.date}</div>
                <div style="font-size:12px;color:var(--text-muted);">${r.taxYear} (Year ${r.yearNum||0})</div>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span style="padding:4px 8px;border-radius:4px;font-size:11px;background:${r.inProtection?"var(--warning)":r.mode==="Tax-Efficient"?"var(--success)":"var(--primary)"};color:#000;">${r.mode||"Standard"}${r.inProtection?" (Protection)":""}</span>
                <button class="secondary" style="padding:4px 8px;font-size:11px;" onclick="deleteHistoryEntry('${r.date}')">Delete</button>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;font-size:13px;">
              <div>
                <div style="color:var(--text-muted);font-size:11px;">Fund Balances</div>
                <div>Equity: ${U(r.equity||0)}</div>
                <div>Bond: ${U(r.bond||0)}</div>
                <div>Cash: ${U(r.cash||0)}</div>
                <div style="font-weight:500;">Total: ${U(r.total||0)}</div>
              </div>

              <div>
                <div style="color:var(--text-muted);font-size:11px;">Monthly Income</div>
                <div>SIPP: ${U(r.sipp||0)}</div>
                <div>ISA: ${U(r.isa||0)}</div>
                <div>Other: ${U(r.other||0)}</div>
                <div>State: ${U(r.state||0)}</div>
              </div>

              <div>
                <div style="color:var(--text-muted);font-size:11px;">Tax & Net</div>
                <div>Tax: ${U(r.monthlyTax||0)}</div>
                <div style="font-weight:500;color:var(--success);">Net: ${U(r.monthlyNet||0)}</div>
                ${r.boostAmount>0?`<div style="color:var(--success);">Boost: +${U(r.boostAmount)}</div>`:""}
              </div>

              <div>
                <div style="color:var(--text-muted);font-size:11px;">Withdrawal</div>
                <div>Source: ${s}</div>
                ${r.consecutiveDraws>0?`<div>Consecutive: ${r.consecutiveDraws}</div>`:""}
                ${r.reason?`<div style="font-size:11px;color:var(--text-muted);">${r.reason}</div>`:""}
              </div>
            </div>

            ${r.rebal?`<div style="margin-top:8px;padding:8px;background:var(--bg);border-radius:4px;font-size:12px;color:var(--warning);">Rebalance: ${r.rebal}</div>`:""}
          </div>
        `}n.innerHTML=e}window.deleteHistoryEntry=async function(n){if(confirm(`Delete entry for ${n}?`)){if(!be()){alert("Please sign in to delete entries");return}try{await jw(n),await yo()}catch(t){console.error("Delete error:",t),alert("Error deleting: "+t.message)}}};async function vo(){const n=document.getElementById("taxYearsList");n.innerHTML='<p class="loading">Loading tax years...</p>';const t=await ho(),e=await Or(),r=Object.keys(t).sort();if(r.length===0){n.innerHTML='<p class="loading">No tax years configured.</p>';return}const i=e.statePensionYear||12,s=e.statePension||0;let a='<table class="tax-years-table" style="width:100%;border-collapse:collapse;">';a+='<thead><tr style="border-bottom:1px solid var(--border);">',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">Year</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">PA</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">BRL</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">CPI %</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">Other</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">State Pension</th>',a+='<th style="padding:8px;"></th>',a+="</tr></thead><tbody>",r.forEach((u,h)=>{var T;const f=t[u];let m=0;if(h>=i&&s>0){let S=1;for(let R=0;R<=h;R++)S*=1+(((T=t[r[R]])==null?void 0:T.cpi)||.04);m=Math.round(s*S)}const _=h>=i?"£"+m.toLocaleString():'<span style="color:var(--text-muted);font-style:italic;">Yr '+(i-h)+"</span>";a+=`<tr style="border-bottom:1px solid var(--border);">
          <td style="padding:10px 8px;"><strong style="color:var(--primary);">${u}</strong></td>
          <td style="padding:10px 8px;">
            <div class="input-with-unit">
              <span class="unit">£</span>
              <input type="number" value="${f.pa||12570}" onchange="updateTaxYear('${u}','pa',this.value)">
            </div>
          </td>
          <td style="padding:10px 8px;">
            <div class="input-with-unit">
              <span class="unit">£</span>
              <input type="number" value="${f.brl||50270}" onchange="updateTaxYear('${u}','brl',this.value)">
            </div>
          </td>
          <td style="padding:10px 8px;">
            <input type="number" step="0.1" value="${((f.cpi||.04)*100).toFixed(1)}" onchange="updateTaxYear('${u}','cpi',this.value/100)" class="cpi-input" style="width:60px;">
          </td>
          <td style="padding:10px 8px;">
            <div class="input-with-unit">
              <span class="unit">£</span>
              <input type="number" value="${f.other||0}" onchange="updateTaxYear('${u}','other',this.value)">
            </div>
          </td>
          <td style="padding:10px 8px;color:var(--text);">${_}</td>
          <td style="padding:10px 8px;">
            <button class="small secondary" onclick="deleteTaxYear('${u}')" style="padding:4px 8px;font-size:11px;">Delete</button>
          </td>
        </tr>`}),a+="</tbody></table>";const l=Math.max(0,i-r.length);a+=`<p style="margin-top:16px;color:var(--text-muted);font-size:12px;">
        State pension: £${s.toLocaleString()} (today's money), starts in year ${i} (${l>0?l+" years remaining":"already started"})
      </p>`,n.innerHTML=a,zl()}window.updateTaxYear=async function(n,t,e){try{const r=await Cl(n);r[t]=parseFloat(e),await kl(n,r)}catch(r){console.error("Error updating tax year:",r),alert("Error saving: "+r.message)}};window.deleteTaxYear=async function(n){if(confirm("Delete tax year "+n+"?"))try{const t=await Kn();delete t.taxYears[n],await uo(t),await vo()}catch(t){console.error("Error deleting tax year:",t),alert("Error deleting: "+t.message)}};window.addTaxYear=async function(){if(!be()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await kl(n,{}),await vo()}catch(t){console.error("Save error:",t),alert("Error saving: "+t.message)}};console.log("Pension Planner v"+Zu+" loaded");
