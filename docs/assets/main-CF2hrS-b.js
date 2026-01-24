(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function gp(n){const t=(n.sippDraw||0)+(n.other||0)+(n.statePension||0),e=t*12,r=n.pa||12570,i=n.brl||50270,s=n.hrl||125140;let a=0;e>r&&(e<=i?a=(e-r)*.2:e<=s?a=(i-r)*.2+(e-i)*.4:a=(i-r)*.2+(s-i)*.4+(e-s)*.45);const l=a/12,u=t-l+(n.isaDraw||0);return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget,source:n.source,dEquity:n.drawFromEquity||0,dBond:n.drawFromBond||0,dCash:n.drawFromCash||0,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,pa:r,brl:i,monthlyTax:l,monthlyNet:u,mode:n.taxEfficient?"Tax-Efficient":"Standard",inProtection:n.inProtection,reason:n.protectionReason||"",consecutiveDraws:n.consecutiveCashDraws||0,boostAmount:n.boostAmount,boostEligible:n.boostEligible||!1,rebal:n.rebalanceActions?n.rebalanceActions.join("; "):"",yearlyIsaSavingsAllocation:n.yearlyIsaSavingsAllocation||0,isaSavingsUsedThisMonth:n.isaDraw||0,cumulativeIsaSavingsUsed:n.cumulativeIsaSavingsUsed||0,taxPaidMonthly:l,taxPaidYTD:n.taxPaidYTD||l,taxProjectedAnnual:n.taxProjectedAnnual||a,taxSavedMonthly:n.taxSavedMonthly||0,taxSavedYTD:n.taxSavedYTD||0,taxSavedProjectedAnnual:n.taxSavedProjectedAnnual||0,isTaxEfficientYear:n.isTaxEfficientYear??!0,protectionInducedTaxEfficiency:n.protectionInducedTaxEfficiency||!1,remainingMonths:n.remainingMonths||12}}const us={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"},nd="6.0.0",ne={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},rd={ASSUMED_CPI:.025,OTHER_INCOME_CAP:.04},Qt={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},Oo={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},vi={1928:.4781,1929:-.172,1930:-.338,1931:-.527,1932:-.231,1933:.669,1934:.041,1935:.3879,1936:.2492,1937:-.3839,1938:.2846,1939:-.0278,1940:-.1278,1941:-.1552,1942:.0782,1943:.1382,1944:.1226,1945:.2665,1946:-.0818,1947:.0225,1948:-.0246,1949:.1279,1950:.1787,1951:.1463,1952:.0837,1953:-.0377,1954:.4399,1955:.2084,1956:.0262,1957:-.1278,1958:.3396,1959:.1612,1960:-.0912,1961:.1889,1962:-.1081,1963:.1715,1964:.1478,1965:.1058,1966:-.1858,1967:.1506,1968:.0457,1969:-.1524,1970:.0482,1971:.0627,1972:.1476,1973:-.1652,1974:-.2777,1975:.3815,1976:.1774,1977:-.1271,1978:-.0303,1979:.0414,1980:.1493,1981:-.0909,1982:.1976,1983:.2027,1984:-.0365,1985:.2778,1986:.2278,1987:.0227,1988:.1185,1989:.2697,1990:-.0456,1991:.2013,1992:.044,1993:.1372,1994:.0218,1995:.3345,1996:.2601,1997:.2264,1998:.1627,1999:.2516,2e3:-.0617,2001:-.0727,2002:-.1679,2003:.2525,2004:.0333,2005:-.0061,2006:.1618,2007:.0648,2008:-.3355,2009:.1882,2010:.1102,2011:.0556,2012:.0728,2013:.2665,2014:.0775,2015:-.023,2016:.1342,2017:.2511,2018:-.0583,2019:.2234,2020:.0726,2021:.1873,2022:-.0878,2023:.1399,2024:.1299},ka={1928:-.012,1929:.002,1930:-.06,1931:-.094,1932:-.103,1933:.005,1934:.021,1935:.03,1936:.014,1937:.028,1938:-.02,1939:-.014,1940:.01,1941:.099,1942:.09,1943:.03,1944:.023,1945:.023,1946:.186,1947:.087,1948:.03,1949:-.02,1950:.059,1951:.06,1952:.009,1953:.006,1954:-.007,1955:.004,1956:.03,1957:.028,1958:.017,1959:.015,1960:.014,1961:.007,1962:.013,1963:.017,1964:.01,1965:.019,1966:.034,1967:.028,1968:.046,1969:.062,1970:.055,1971:.033,1972:.034,1973:.087,1974:.124,1975:.069,1976:.048,1977:.067,1978:.09,1979:.133,1980:.125,1981:.089,1982:.038,1983:.038,1984:.04,1985:.038,1986:.011,1987:.044,1988:.044,1989:.046,1990:.061,1991:.03,1992:.029,1993:.027,1994:.026,1995:.025,1996:.034,1997:.017,1998:.016,1999:.027,2e3:.034,2001:.016,2002:.024,2003:.019,2004:.033,2005:.034,2006:.025,2007:.041,2008:.001,2009:.027,2010:.015,2011:.03,2012:.017,2013:.015,2014:.008,2015:.007,2016:.021,2017:.021,2018:.019,2019:.023,2020:.012,2021:.07,2022:.065,2023:.032,2024:.029},yp={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}},yr={START_MONTH:4,START_DAY:6};function vp(n,t,e,r=ne.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=t;if(n>ne.PA_TAPER_THRESHOLD){const f=(n-ne.PA_TAPER_THRESHOLD)*ne.PA_TAPER_RATE;i=Math.max(0,t-f)}const s=Math.max(0,n-i),a=Math.max(0,e-i),l=r-e;let u=0;const h=Math.min(s,a);if(u+=h*ne.BASIC_RATE,s>a){const f=Math.min(s-a,l);u+=f*ne.HIGHER_RATE}if(s>a+l){const f=s-a-l;u+=f*ne.ADDITIONAL_RATE}return u}function id(n){const t=typeof n=="string"?new Date(n):n,e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();if(r<yr.START_MONTH||r===yr.START_MONTH&&i<yr.START_DAY){const s=e-1;return`${String(s).slice(-2)}/${String(e).slice(-2)}`}return`${String(e).slice(-2)}/${String(e+1).slice(-2)}`}function _p(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function sd(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,15)}function wp(n){const e=(typeof n=="string"?new Date(n):n).getMonth()+1;return e>=yr.START_MONTH?12-(e-yr.START_MONTH):yr.START_MONTH-e}function Ep(n){const{baseSalary:t,cumulativeInflation:e,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:l=0,pa:u,brl:h,hrl:f,taxMode:m="inflates"}=n,v=m==="frozen"?u:u*e,T=m==="frozen"?h:h*e,S=m==="frozen"?f:f*e,x=t*e,I=bp(i,r),k=l>=a?s*e:0,M=I+k,N=Math.max(0,T-M),F=Math.max(0,x-M),V=Math.min(N,F);return{pa:v,brl:T,hrl:S,targetGross:x,other:I,statePension:k,fixedIncome:M,annualSippDraw:V,monthlySippDraw:V/12,sippPlusfixedAtBRL:N+M===T}}function bp(n,t,e=rd.OTHER_INCOME_CAP){let r=n;for(const i of t)r*=1+Math.min(i,e);return r}function Tp(n,t,e=.025){const r=[],i=[];for(let s=0;s<=t;s++){s>0&&i.push(e);const a=Math.pow(1+e,s),l=Ep({baseSalary:n.baseSalary,cumulativeInflation:a,yearlyInflation:[...i],other:n.other,statePension:n.statePension,statePensionYear:n.statePensionYear,yearNumber:s,pa:n.pa,brl:n.brl,hrl:n.hrl,taxMode:n.taxMode}),u=l.annualSippDraw+l.other+l.statePension,h=vp(u,l.pa,l.brl,l.hrl);r.push({year:s,brl:l.brl,other:l.other,statePension:l.statePension,sippDraw:l.annualSippDraw,totalTaxable:u,tax:h,netIncome:u-h})}return r}function vr(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function Ip(n,t,e){const r=vr(n.equityMin,t,n.duration,e,!0),i=vr(n.bondMin,t,n.duration,e,!0),s=vr(n.cashTarget,t,n.duration,e,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function Sp(n,t=rd.ASSUMED_CPI){const e=[];for(let r=0;r<=n.duration;r++){const i=Math.pow(1+t,r),s=Ip(n,r,i);e.push({year:r,cumulativeInflation:i,equityMin:s.equity,bondMin:s.bond,cashTarget:s.cash,totalMin:s.total})}return e}function Ma(n){let t=n;return function(){return t=Math.sin(t)*1e4,t-Math.floor(t)}}function ni(n,t,e){const r=e(),i=e(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+t*s}function od(n){const t=JSON.stringify(n);let e=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e.toString(16)}var Cc={};/**
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
 */const ad=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ap=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,T=h&63;u||(T=64,a||(v=64)),r.push(e[f],e[m],e[v],e[T])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ad(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ap(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const m=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new xp;const v=s<<2|l>>4;if(r.push(v),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const S=h<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(n){const t=ad(n);return ld.encodeByteArray(t,!0)},As=function(n){return Pp(n).replace(/\./g,"")},cd=function(n){try{return ld.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>Rp().__FIREBASE_DEFAULTS__,kp=()=>{if(typeof process>"u"||typeof Cc>"u")return;const n=Cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&cd(n[1]);return t&&JSON.parse(t)},Ws=()=>{try{return Cp()||kp()||Mp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ud=n=>{var t,e;return(e=(t=Ws())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dp=n=>{const t=ud(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},dd=()=>{var n;return(n=Ws())===null||n===void 0?void 0:n.config},hd=n=>{var t;return(t=Ws())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Lp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[As(JSON.stringify(e)),As(JSON.stringify(a)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function Op(){var n;const t=(n=Ws())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Up(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $p(){return!Op()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qp(){try{return typeof indexedDB=="object"}catch{return!1}}function jp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Hp="FirebaseError";class Ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Hp,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Wp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ue(i,l,r)}}function Wp(n,t){return n.replace(Yp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Yp=/\{\$([^}]+)}/g;function Gp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function xs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],a=t[i];if(kc(s)&&kc(a)){if(!xs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function kc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ii(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function si(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Kp(n,t){const e=new Qp(n,t);return e.subscribe.bind(e)}class Qp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Xp(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Bo(){}/**
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
 */function Tt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Jp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Np;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tm(t))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Dn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dn){return this.instances.has(t)}getOptions(t=Dn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dn){return this.component?this.component.multipleInstances?t:Dn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zp(n){return n===Dn?void 0:n}function tm(n){return n.instantiationMode==="EAGER"}/**
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
 */class em{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Jp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(tt||(tt={}));const nm={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},rm=tt.INFO,im={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},sm=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=im[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=rm,this._logHandler=sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const om=(n,t)=>t.some(e=>n instanceof e);let Mc,Dc;function am(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lm(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,ia=new WeakMap,pd=new WeakMap,Fo=new WeakMap,Na=new WeakMap;function cm(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(on(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&fd.set(e,n)}).catch(()=>{}),Na.set(t,n),t}function um(n){if(ia.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ia.set(n,t)}let sa={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ia.get(n);if(t==="objectStoreNames")return n.objectStoreNames||pd.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return on(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function dm(n){sa=n(sa)}function hm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(zo(this),t,...e);return pd.set(r,t.sort?t.sort():[t]),on(r)}:lm().includes(n)?function(...t){return n.apply(zo(this),t),on(fd.get(this))}:function(...t){return on(n.apply(zo(this),t))}}function fm(n){return typeof n=="function"?hm(n):(n instanceof IDBTransaction&&um(n),om(n,am())?new Proxy(n,sa):n)}function on(n){if(n instanceof IDBRequest)return cm(n);if(Fo.has(n))return Fo.get(n);const t=fm(n);return t!==n&&(Fo.set(n,t),Na.set(t,n)),t}const zo=n=>Na.get(n);function pm(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,t),l=on(a);return r&&a.addEventListener("upgradeneeded",u=>{r(on(a.result),u.oldVersion,u.newVersion,on(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const mm=["get","getKey","getAll","getAllKeys","count"],gm=["put","add","delete","clear"],Uo=new Map;function Nc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Uo.get(t))return Uo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=gm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mm.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),i&&u.done]))[0]};return Uo.set(t,s),s}dm(n=>({...n,get:(t,e,r)=>Nc(t,e)||n.get(t,e,r),has:(t,e)=>!!Nc(t,e)||n.has(t,e)}));/**
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
 */class ym{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function vm(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oa="@firebase/app",Lc="0.10.13";/**
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
 */const Ve=new Da("@firebase/app"),_m="@firebase/app-compat",wm="@firebase/analytics-compat",Em="@firebase/analytics",bm="@firebase/app-check-compat",Tm="@firebase/app-check",Im="@firebase/auth",Sm="@firebase/auth-compat",Am="@firebase/database",xm="@firebase/data-connect",Pm="@firebase/database-compat",Rm="@firebase/functions",Cm="@firebase/functions-compat",km="@firebase/installations",Mm="@firebase/installations-compat",Dm="@firebase/messaging",Nm="@firebase/messaging-compat",Lm="@firebase/performance",Vm="@firebase/performance-compat",Om="@firebase/remote-config",Bm="@firebase/remote-config-compat",Fm="@firebase/storage",zm="@firebase/storage-compat",Um="@firebase/firestore",$m="@firebase/vertexai-preview",qm="@firebase/firestore-compat",jm="firebase",Hm="10.14.1";/**
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
 */const aa="[DEFAULT]",Wm={[oa]:"fire-core",[_m]:"fire-core-compat",[Em]:"fire-analytics",[wm]:"fire-analytics-compat",[Tm]:"fire-app-check",[bm]:"fire-app-check-compat",[Im]:"fire-auth",[Sm]:"fire-auth-compat",[Am]:"fire-rtdb",[xm]:"fire-data-connect",[Pm]:"fire-rtdb-compat",[Rm]:"fire-fn",[Cm]:"fire-fn-compat",[km]:"fire-iid",[Mm]:"fire-iid-compat",[Dm]:"fire-fcm",[Nm]:"fire-fcm-compat",[Lm]:"fire-perf",[Vm]:"fire-perf-compat",[Om]:"fire-rc",[Bm]:"fire-rc-compat",[Fm]:"fire-gcs",[zm]:"fire-gcs-compat",[Um]:"fire-fst",[qm]:"fire-fst-compat",[$m]:"fire-vertex","fire-js":"fire-js",[jm]:"fire-js-all"};/**
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
 */const Ps=new Map,Ym=new Map,la=new Map;function Vc(n,t){try{n.container.addComponent(t)}catch(e){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Sr(n){const t=n.name;if(la.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;la.set(t,n);for(const e of Ps.values())Vc(e,n);for(const e of Ym.values())Vc(e,n);return!0}function La(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function pe(n){return n.settings!==void 0}/**
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
 */const Gm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Ri("app","Firebase",Gm);/**
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
 */class Km{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=Hm;function md(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(e||(e=dd()),!e)throw an.create("no-options");const s=Ps.get(i);if(s){if(xs(e,s.options)&&xs(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const a=new em(i);for(const u of la.values())a.addComponent(u);const l=new Km(e,r,a);return Ps.set(i,l),l}function gd(n=aa){const t=Ps.get(n);if(!t&&n===aa&&dd())return md();if(!t)throw an.create("no-app",{appName:n});return t}function ln(n,t,e){var r;let i=(r=Wm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(l.join(" "));return}Sr(new $n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Qm="firebase-heartbeat-database",Xm=1,_i="firebase-heartbeat-store";let $o=null;function yd(){return $o||($o=pm(Qm,Xm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_i)}catch(e){console.warn(e)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),$o}async function Jm(n){try{const e=(await yd()).transaction(_i),r=await e.objectStore(_i).get(vd(n));return await e.done,r}catch(t){if(t instanceof Ue)Ve.warn(t.message);else{const e=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ve.warn(e.message)}}}async function Oc(n,t){try{const r=(await yd()).transaction(_i,"readwrite");await r.objectStore(_i).put(t,vd(n)),await r.done}catch(e){if(e instanceof Ue)Ve.warn(e.message);else{const r=an.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ve.warn(r.message)}}}function vd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zm=1024,tg=30*24*60*60*1e3;class eg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=tg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ve.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bc(),{heartbeatsToSend:r,unsentEntries:i}=ng(this._heartbeatsCache.heartbeats),s=As(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ve.warn(e),""}}}function Bc(){return new Date().toISOString().substring(0,10)}function ng(n,t=Zm){const e=[];let r=n.slice();for(const i of n){const s=e.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Fc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Fc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qp()?jp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Jm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Fc(n){return As(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ig(n){Sr(new $n("platform-logger",t=>new ym(t),"PRIVATE")),Sr(new $n("heartbeat",t=>new eg(t),"PRIVATE")),ln(oa,Lc,n),ln(oa,Lc,"esm2017"),ln("fire-js","")}ig("");var sg="firebase",og="10.14.1";/**
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
 */ln(sg,og,"app");function Va(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ag=_d,wd=new Ri("auth","Firebase",_d());/**
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
 */const Rs=new Da("@firebase/auth");function lg(n,...t){Rs.logLevel<=tt.WARN&&Rs.warn(`Auth (${Nr}): ${n}`,...t)}function gs(n,...t){Rs.logLevel<=tt.ERROR&&Rs.error(`Auth (${Nr}): ${n}`,...t)}/**
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
 */function ce(n,...t){throw Ba(n,...t)}function me(n,...t){return Ba(n,...t)}function Oa(n,t,e){const r=Object.assign(Object.assign({},ag()),{[t]:e});return new Ri("auth","Firebase",r).create(t,{appName:n.name})}function Ne(n){return Oa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cg(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ce(n,"argument-error"),Oa(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ba(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return wd.create(n,...t)}function W(n,t,...e){if(!n)throw Ba(t,...e)}function ke(n){const t="INTERNAL ASSERTION FAILED: "+n;throw gs(t),new Error(t)}function Oe(n,t){n||ke(t)}/**
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
 */function ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ug(){return zc()==="http:"||zc()==="https:"}function zc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ug()||Fp()||"connection"in navigator)?navigator.onLine:!0}function hg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ki{constructor(t,e){this.shortDelay=t,this.longDelay=e,Oe(e>t,"Short delay should be less than long delay!"),this.isMobile=Vp()||zp()}get(){return dg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(n,t){Oe(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Ed{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pg=new ki(3e4,6e4);function $e(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ie(n,t,e,r,i={}){return bd(n,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=Ci(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:t,headers:u},s);return Bp()||(h.referrerPolicy="no-referrer"),Ed.fetch()(Td(n,n.config.apiHost,e,l),h)})}async function bd(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fg),t);try{const i=new gg(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ds(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Oa(n,f,h);ce(n,f)}}catch(i){if(i instanceof Ue)throw i;ce(n,"network-request-failed",{message:String(i)})}}async function Mi(n,t,e,r,i={}){const s=await Ie(n,t,e,r,i);return"mfaPendingCredential"in s&&ce(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Td(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Fa(n.config,i):`${n.config.apiScheme}://${i}`}function mg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),pg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=me(n,t,r);return i.customData._tokenResponse=e,i}function Uc(n){return n!==void 0&&n.enterprise!==void 0}class yg{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return mg(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function vg(n,t){return Ie(n,"GET","/v2/recaptchaConfig",$e(n,t))}/**
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
 */async function _g(n,t){return Ie(n,"POST","/v1/accounts:delete",t)}async function Id(n,t){return Ie(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function ui(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wg(n,t=!1){const e=Tt(n),r=await e.getIdToken(t),i=za(r);W(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ui(qo(i.auth_time)),issuedAtTime:ui(qo(i.iat)),expirationTime:ui(qo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qo(n){return Number(n)*1e3}function za(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=cd(e);return i?JSON.parse(i):(gs("Failed to decode base64 JWT payload"),null)}catch(i){return gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $c(n){const t=za(n);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ar(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ue&&Eg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Eg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ua{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cs(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Ar(n,Id(e,{idToken:r}));W(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Sd(s.providerUserInfo):[],l=Ig(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Tg(n){const t=Tt(n);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ig(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Sd(n){return n.map(t=>{var{providerId:e}=t,r=Va(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Sg(n,t){const e=await bd(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Td(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ed.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Ag(n,t){return Ie(n,"POST","/v2/accounts:revokeToken",$e(n,t))}/**
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
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$c(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){W(t.length!==0,"internal-error");const e=$c(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sg(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,a=new _r;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function Xe(n,t){W(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Me{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Va(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return W(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return wg(this,t)}reload(){return Tg(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Me(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(Ne(this.auth));const t=await this.getIdToken();return await Ar(this,_g(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,a,l,u,h,f;const m=(r=e.displayName)!==null&&r!==void 0?r:void 0,v=(i=e.email)!==null&&i!==void 0?i:void 0,T=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=e.photoURL)!==null&&a!==void 0?a:void 0,x=(l=e.tenantId)!==null&&l!==void 0?l:void 0,I=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=e.createdAt)!==null&&h!==void 0?h:void 0,M=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:N,isAnonymous:F,providerData:V,stsTokenManager:b}=e;W(R&&b,t,"internal-error");const g=_r.fromJSON(this.name,b);W(typeof R=="string",t,"internal-error"),Xe(m,t.name),Xe(v,t.name),W(typeof N=="boolean",t,"internal-error"),W(typeof F=="boolean",t,"internal-error"),Xe(T,t.name),Xe(S,t.name),Xe(x,t.name),Xe(I,t.name),Xe(k,t.name),Xe(M,t.name);const w=new Me({uid:R,auth:t,email:v,emailVerified:N,displayName:m,isAnonymous:F,photoURL:S,phoneNumber:T,tenantId:x,stsTokenManager:g,createdAt:k,lastLoginAt:M});return V&&Array.isArray(V)&&(w.providerData=V.map(_=>Object.assign({},_))),I&&(w._redirectEventId=I),w}static async _fromIdTokenResponse(t,e,r=!1){const i=new _r;i.updateFromServerResponse(e);const s=new Me({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cs(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _r;l.updateFromIdToken(r);const u=new Me({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ua(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const qc=new Map;function De(n){Oe(n instanceof Function,"Expected a class definition");let t=qc.get(n);return t?(Oe(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,qc.set(n,t),t)}/**
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
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ad.type="NONE";const jc=Ad;/**
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
 */function ys(n,t,e){return`firebase:${n}:${t}:${e}`}class wr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Me._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new wr(De(jc),t,r);const i=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||De(jc);const a=ys(r,t.config.apiKey,t.name);let l=null;for(const h of e)try{const f=await h._get(a);if(f){const m=Me._fromJSON(t,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wr(s,t,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new wr(s,t,r))}}/**
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
 */function Hc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Md(t))return"Blackberry";if(Dd(t))return"Webos";if(Pd(t))return"Safari";if((t.includes("chrome/")||Rd(t))&&!t.includes("edge/"))return"Chrome";if(kd(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xd(n=Wt()){return/firefox\//i.test(n)}function Pd(n=Wt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rd(n=Wt()){return/crios\//i.test(n)}function Cd(n=Wt()){return/iemobile/i.test(n)}function kd(n=Wt()){return/android/i.test(n)}function Md(n=Wt()){return/blackberry/i.test(n)}function Dd(n=Wt()){return/webos/i.test(n)}function Ua(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xg(n=Wt()){var t;return Ua(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pg(){return Up()&&document.documentMode===10}function Nd(n=Wt()){return Ua(n)||kd(n)||Dd(n)||Md(n)||/windows phone/i.test(n)||Cd(n)}/**
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
 */function Ld(n,t=[]){let e;switch(n){case"Browser":e=Hc(Wt());break;case"Worker":e=`${Hc(Wt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Nr}/${r}`}/**
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
 */class Rg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cg(n,t={}){return Ie(n,"GET","/v2/passwordPolicy",$e(n,t))}/**
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
 */const kg=6;class Mg{constructor(t){var e,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:kg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Dg{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new Rg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=De(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Id(this,{idToken:t}),r=await Me._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(pe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Cs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pe(this.app))return Promise.reject(Ne(this));const e=t?Tt(t):null;return e&&W(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pe(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(De(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Cg(this),e=new Mg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ri("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ag(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&De(t)||this._popupRedirectResolver;W(e,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[De(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&lg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qe(n){return Tt(n)}class Wc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Kp(e=>this.observer=e)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ng(n){Ys=n}function Vd(n){return Ys.loadJS(n)}function Lg(){return Ys.recaptchaEnterpriseScript}function Vg(){return Ys.gapiScript}function Og(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Bg="recaptcha-enterprise",Fg="NO_RECAPTCHA";class zg{constructor(t){this.type=Bg,this.auth=qe(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{vg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new yg(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Uc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(Fg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!e&&Uc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Lg();u.length!==0&&(u+=l),Vd(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Yc(n,t,e,r=!1){const i=new zg(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ks(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Yc(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function Ug(n,t){const e=La(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(xs(s,t??{}))return i;ce(i,"already-initialized")}return e.initialize({options:t})}function $g(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(De);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function qg(n,t,e){const r=qe(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Od(t),{host:a,port:l}=jg(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Hg()}function Od(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function jg(n){const t=Od(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Gc(a)}}}function Gc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Hg(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $a{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ke("not implemented")}_getIdTokenResponse(t){return ke("not implemented")}_linkToIdToken(t,e){return ke("not implemented")}_getReauthenticationResolver(t){return ke("not implemented")}}async function Wg(n,t){return Ie(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Yg(n,t){return Mi(n,"POST","/v1/accounts:signInWithPassword",$e(n,t))}async function Gg(n,t){return Ie(n,"POST","/v1/accounts:sendOobCode",$e(n,t))}async function Kg(n,t){return Gg(n,t)}/**
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
 */async function Qg(n,t){return Mi(n,"POST","/v1/accounts:signInWithEmailLink",$e(n,t))}async function Xg(n,t){return Mi(n,"POST","/v1/accounts:signInWithEmailLink",$e(n,t))}/**
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
 */class wi extends $a{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new wi(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new wi(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ks(t,e,"signInWithPassword",Yg);case"emailLink":return Qg(t,{email:this._email,oobCode:this._password});default:ce(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ks(t,r,"signUpPassword",Wg);case"emailLink":return Xg(t,{idToken:e,email:this._email,oobCode:this._password});default:ce(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Er(n,t){return Mi(n,"POST","/v1/accounts:signInWithIdp",$e(n,t))}/**
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
 */const Jg="http://localhost";class qn extends $a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ce("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Va(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new qn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Er(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Er(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Er(t,e)}buildRequest(){const t={requestUri:Jg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ci(e)}return t}}/**
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
 */function Zg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ty(n){const t=ii(si(n)).link,e=t?ii(si(t)).deep_link_id:null,r=ii(si(n)).deep_link_id;return(r?ii(si(r)).link:null)||r||e||t||n}class qa{constructor(t){var e,r,i,s,a,l;const u=ii(si(t)),h=(e=u.apiKey)!==null&&e!==void 0?e:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Zg((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const e=ty(t);try{return new qa(e)}catch{return null}}}/**
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
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(t,e){return wi._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=qa.parseLink(e);return W(r,"argument-error"),wi._fromEmailAndCode(t,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ja{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends ja{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends Di{constructor(){super("facebook.com")}static credential(t){return qn._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ze.credential(t.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class Ce extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return qn._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ce.credential(e,r)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
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
 */class tn extends Di{constructor(){super("github.com")}static credential(t){return qn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class en extends Di{constructor(){super("twitter.com")}static credential(t,e){return qn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return en.credential(e,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */async function ey(n,t){return Mi(n,"POST","/v1/accounts:signUp",$e(n,t))}/**
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
 */class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await Me._fromIdTokenResponse(t,r,i),a=Kc(r);return new jn({user:s,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Kc(r);return new jn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ms extends Ue{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ms(t,e,r,i)}}function Bd(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ms._fromErrorAndOperation(n,s,t,r):s})}async function ny(n,t,e=!1){const r=await Ar(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return jn._forOperation(n,"link",r)}/**
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
 */async function ry(n,t,e=!1){const{auth:r}=n;if(pe(r.app))return Promise.reject(Ne(r));const i="reauthenticate";try{const s=await Ar(n,Bd(r,i,t,n),e);W(s.idToken,r,"internal-error");const a=za(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),jn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ce(r,"user-mismatch"),s}}/**
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
 */async function Fd(n,t,e=!1){if(pe(n.app))return Promise.reject(Ne(n));const r="signIn",i=await Bd(n,r,t),s=await jn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function iy(n,t){return Fd(qe(n),t)}/**
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
 */async function zd(n){const t=qe(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function sy(n,t,e){const r=qe(n);await ks(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Kg)}async function oy(n,t,e){if(pe(n.app))return Promise.reject(Ne(n));const r=qe(n),a=await ks(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ey).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zd(n),u}),l=await jn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ay(n,t,e){return pe(n.app)?Promise.reject(Ne(n)):iy(Tt(n),Lr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zd(n),r})}/**
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
 */async function ly(n,t){return Ie(n,"POST","/v1/accounts:update",t)}/**
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
 */async function cy(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=Tt(n),s={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await Ar(r,ly(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function uy(n,t,e,r){return Tt(n).onIdTokenChanged(t,e,r)}function dy(n,t,e){return Tt(n).beforeAuthStateChanged(t,e)}function hy(n,t,e,r){return Tt(n).onAuthStateChanged(t,e,r)}function fy(n){return Tt(n).signOut()}const Ds="__sak";/**
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
 */class Ud{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const py=1e3,my=10;class $d extends Ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Pg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,my):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}$d.type="LOCAL";const gy=$d;/**
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
 */class qd extends Ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}qd.type="SESSION";const jd=qd;/**
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
 */function yy(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Gs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(e.origin,s)),u=await yy(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
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
 */function Ha(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class vy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Ha("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ve(){return window}function _y(n){ve().location.href=n}/**
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
 */function Hd(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ey(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function by(){return Hd()?self:null}/**
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
 */const Wd="firebaseLocalStorageDb",Ty=1,Ns="firebaseLocalStorage",Yd="fbase_key";class Ni{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ks(n,t){return n.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function Iy(){const n=indexedDB.deleteDatabase(Wd);return new Ni(n).toPromise()}function da(){const n=indexedDB.open(Wd,Ty);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ns,{keyPath:Yd})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await Iy(),t(await da()))})})}async function Qc(n,t,e){const r=Ks(n,!0).put({[Yd]:t,value:e});return new Ni(r).toPromise()}async function Sy(n,t){const e=Ks(n,!1).get(t),r=await new Ni(e).toPromise();return r===void 0?null:r.value}function Xc(n,t){const e=Ks(n,!0).delete(t);return new Ni(e).toPromise()}const Ay=800,xy=3;class Gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await da(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>xy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(by()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ey()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await da();return await Qc(t,Ds,"1"),await Xc(t,Ds),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Sy(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Xc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ks(i,!1).getAll();return new Ni(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gd.type="LOCAL";const Py=Gd;new ki(3e4,6e4);/**
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
 */function Kd(n,t){return t?De(t):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wa extends $a{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Er(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Er(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Er(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ry(n){return Fd(n.auth,new Wa(n),n.bypassAuthState)}function Cy(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),ry(e,new Wa(n),n.bypassAuthState)}async function ky(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),ny(e,new Wa(n),n.bypassAuthState)}/**
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
 */class Qd{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ry;case"linkViaPopup":case"linkViaRedirect":return ky;case"reauthViaPopup":case"reauthViaRedirect":return Cy;default:ce(this.auth,"internal-error")}}resolve(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const My=new ki(2e3,1e4);async function Dy(n,t,e){if(pe(n.app))return Promise.reject(me(n,"operation-not-supported-in-this-environment"));const r=qe(n);cg(n,t,ja);const i=Kd(r,e);return new Vn(r,"signInViaPopup",t,i).executeNotNull()}class Vn extends Qd{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const t=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,My.get())};t()}}Vn.currentPopupAction=null;/**
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
 */const Ny="pendingRedirect",vs=new Map;class Ly extends Qd{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=vs.get(this.auth._key());if(!t){try{const r=await Vy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}vs.set(this.auth._key(),t)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vy(n,t){const e=Fy(t),r=By(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Oy(n,t){vs.set(n._key(),t)}function By(n){return De(n._redirectPersistence)}function Fy(n){return ys(Ny,n.config.apiKey,n.name)}async function zy(n,t,e=!1){if(pe(n.app))return Promise.reject(Ne(n));const r=qe(n),i=Kd(r,t),a=await new Ly(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Uy=10*60*1e3;class $y{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qy(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Xd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(me(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Uy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jc(t))}saveEventToCache(t){this.cachedEventUids.add(Jc(t)),this.lastProcessedEventTime=Date.now()}}function Jc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Xd({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xd(n);default:return!1}}/**
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
 */async function jy(n,t={}){return Ie(n,"GET","/v1/projects",t)}/**
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
 */const Hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wy=/^https?/;async function Yy(n){if(n.config.emulator)return;const{authorizedDomains:t}=await jy(n);for(const e of t)try{if(Gy(e))return}catch{}ce(n,"unauthorized-domain")}function Gy(n){const t=ca(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Wy.test(e))return!1;if(Hy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ky=new ki(3e4,6e4);function Zc(){const n=ve().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Qy(n){return new Promise((t,e)=>{var r,i,s;function a(){Zc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zc(),e(me(n,"network-request-failed"))},timeout:Ky.get()})}if(!((i=(r=ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ve().gapi)===null||s===void 0)&&s.load)a();else{const l=Og("iframefcb");return ve()[l]=()=>{gapi.load?a():e(me(n,"network-request-failed"))},Vd(`${Vg()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw _s=null,t})}let _s=null;function Xy(n){return _s=_s||Qy(n),_s}/**
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
 */const Jy=new ki(5e3,15e3),Zy="__/auth/iframe",tv="emulator/auth/iframe",ev={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rv(n){const t=n.config;W(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Fa(t,tv):`https://${n.config.authDomain}/${Zy}`,r={apiKey:t.apiKey,appName:n.name,v:Nr},i=nv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Ci(r).slice(1)}`}async function iv(n){const t=await Xy(n),e=ve().gapi;return W(e,n,"internal-error"),t.open({where:document.body,url:rv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ev,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=me(n,"network-request-failed"),l=ve().setTimeout(()=>{s(a)},Jy.get());function u(){ve().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ov=500,av=600,lv="_blank",cv="http://localhost";class tu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uv(n,t,e,r=ov,i=av){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},sv),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Wt().toLowerCase();e&&(l=Rd(h)?lv:e),xd(h)&&(t=t||cv,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[T,S])=>`${v}${T}=${S},`,"");if(xg(h)&&l!=="_self")return dv(t||"",l),new tu(null);const m=window.open(t||"",l,f);W(m,n,"popup-blocked");try{m.focus()}catch{}return new tu(m)}function dv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const hv="__/auth/handler",fv="emulator/auth/handler",pv=encodeURIComponent("fac");async function eu(n,t,e,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Nr,eventId:i};if(t instanceof ja){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Gp(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(t instanceof Di){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${pv}=${encodeURIComponent(u)}`:"";return`${mv(n)}?${Ci(l).slice(1)}${h}`}function mv({config:n}){return n.emulator?Fa(n,fv):`https://${n.authDomain}/${hv}`}/**
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
 */const jo="webStorageSupport";class gv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jd,this._completeRedirectFn=zy,this._overrideRedirectResult=Oy}async _openPopup(t,e,r,i){var s;Oe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await eu(t,e,r,ca(),i);return uv(t,a,Ha())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await eu(t,e,r,ca(),i);return _y(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await iv(t),r=new $y(t);return e.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(jo,{type:jo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jo];a!==void 0&&e(!!a),ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yy(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Nd()||Pd()||Ua()}}const yv=gv;var nu="@firebase/auth",ru="1.7.9";/**
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
 */class vv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _v(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wv(n){Sr(new $n("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ld(n)},h=new Dg(r,i,s,u);return $g(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Sr(new $n("auth-internal",t=>{const e=qe(t.getProvider("auth").getImmediate());return(r=>new vv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(nu,ru,_v(n)),ln(nu,ru,"esm2017")}/**
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
 */const Ev=5*60,bv=hd("authIdTokenMaxAge")||Ev;let iu=null;const Tv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>bv)return;const i=e==null?void 0:e.token;iu!==i&&(iu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iv(n=gd()){const t=La(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Ug(n,{popupRedirectResolver:yv,persistence:[Py,gy,jd]}),r=hd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Tv(s.toString());dy(e,a,()=>a(e.currentUser)),uy(e,l=>a(l))}}const i=ud("auth");return i&&qg(e,`http://${i}`),e}function Sv(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Ng({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=me("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Sv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wv("Browser");var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bn,Jd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,g){function w(){}w.prototype=g.prototype,b.D=g.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(_,E,A){for(var y=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)y[pt-2]=arguments[pt];return g.prototype[E].apply(_,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,w){w||(w=0);var _=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)_[E]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(E=0;16>E;++E)_[E]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=b.g[0],w=b.g[1],E=b.g[2];var A=b.g[3],y=g+(A^w&(E^A))+_[0]+3614090360&4294967295;g=w+(y<<7&4294967295|y>>>25),y=A+(E^g&(w^E))+_[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(w^A&(g^w))+_[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(g^E&(A^g))+_[3]+3250441966&4294967295,w=E+(y<<22&4294967295|y>>>10),y=g+(A^w&(E^A))+_[4]+4118548399&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(E^g&(w^E))+_[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(w^A&(g^w))+_[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(g^E&(A^g))+_[7]+4249261313&4294967295,w=E+(y<<22&4294967295|y>>>10),y=g+(A^w&(E^A))+_[8]+1770035416&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(E^g&(w^E))+_[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(w^A&(g^w))+_[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(g^E&(A^g))+_[11]+2304563134&4294967295,w=E+(y<<22&4294967295|y>>>10),y=g+(A^w&(E^A))+_[12]+1804603682&4294967295,g=w+(y<<7&4294967295|y>>>25),y=A+(E^g&(w^E))+_[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(w^A&(g^w))+_[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(g^E&(A^g))+_[15]+1236535329&4294967295,w=E+(y<<22&4294967295|y>>>10),y=g+(E^A&(w^E))+_[1]+4129170786&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(g^w))+_[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^w&(A^g))+_[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(E^A))+_[0]+3921069994&4294967295,w=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(w^E))+_[5]+3593408605&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(g^w))+_[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^w&(A^g))+_[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(E^A))+_[4]+3889429448&4294967295,w=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(w^E))+_[9]+568446438&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(g^w))+_[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^w&(A^g))+_[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(E^A))+_[8]+1163531501&4294967295,w=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(w^E))+_[13]+2850285829&4294967295,g=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(g^w))+_[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^w&(A^g))+_[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^g&(E^A))+_[12]+2368359562&4294967295,w=E+(y<<20&4294967295|y>>>12),y=g+(w^E^A)+_[5]+4294588738&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^E)+_[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^w)+_[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^g)+_[14]+4259657740&4294967295,w=E+(y<<23&4294967295|y>>>9),y=g+(w^E^A)+_[1]+2763975236&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^E)+_[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^w)+_[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^g)+_[10]+3200236656&4294967295,w=E+(y<<23&4294967295|y>>>9),y=g+(w^E^A)+_[13]+681279174&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^E)+_[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^w)+_[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^g)+_[6]+76029189&4294967295,w=E+(y<<23&4294967295|y>>>9),y=g+(w^E^A)+_[9]+3654602809&4294967295,g=w+(y<<4&4294967295|y>>>28),y=A+(g^w^E)+_[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^w)+_[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^g)+_[2]+3299628645&4294967295,w=E+(y<<23&4294967295|y>>>9),y=g+(E^(w|~A))+_[0]+4096336452&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~E))+_[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~w))+_[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~g))+_[5]+4237533241&4294967295,w=E+(y<<21&4294967295|y>>>11),y=g+(E^(w|~A))+_[12]+1700485571&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~E))+_[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~w))+_[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~g))+_[1]+2240044497&4294967295,w=E+(y<<21&4294967295|y>>>11),y=g+(E^(w|~A))+_[8]+1873313359&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~E))+_[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~w))+_[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~g))+_[13]+1309151649&4294967295,w=E+(y<<21&4294967295|y>>>11),y=g+(E^(w|~A))+_[4]+4149444226&4294967295,g=w+(y<<6&4294967295|y>>>26),y=A+(w^(g|~E))+_[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~w))+_[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~g))+_[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var w=g-this.blockSize,_=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=w;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<g;)if(_[E++]=b.charCodeAt(A++),E==this.blockSize){i(this,_),E=0;break}}else for(;A<g;)if(_[E++]=b[A++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var w=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=w&255,w/=256;for(this.u(b),b=Array(16),g=w=0;4>g;++g)for(var _=0;32>_;_+=8)b[w++]=this.g[g]>>>_&255;return b};function s(b,g){var w=l;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=g(b)}function a(b,g){this.h=g;for(var w=[],_=!0,E=b.length-1;0<=E;E--){var A=b[E]|0;_&&A==g||(w[E]=A,_=!1)}this.g=w}var l={};function u(b){return-128<=b&&128>b?s(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return I(h(-b));for(var g=[],w=1,_=0;b>=w;_++)g[_]=b/w|0,w*=4294967296;return new a(g,0)}function f(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return I(f(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),_=m,E=0;E<b.length;E+=8){var A=Math.min(8,b.length-E),y=parseInt(b.substring(E,E+A),g);8>A?(A=h(Math.pow(g,A)),_=_.j(A).add(h(y))):(_=_.j(w),_=_.add(h(y)))}return _}var m=u(0),v=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-I(this).m();for(var b=0,g=1,w=0;w<this.g.length;w++){var _=this.i(w);b+=(0<=_?_:4294967296+_)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(x(this))return"-"+I(this).toString(b);for(var g=h(Math.pow(b,6)),w=this,_="";;){var E=N(w,g).g;w=k(w,E.j(g));var A=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=E,S(w))return A+_;for(;6>A.length;)A="0"+A;_=A+_}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=k(this,b),x(b)?-1:S(b)?0:1};function I(b){for(var g=b.g.length,w=[],_=0;_<g;_++)w[_]=~b.g[_];return new a(w,~b.h).add(v)}n.abs=function(){return x(this)?I(this):this},n.add=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],_=0,E=0;E<=g;E++){var A=_+(this.i(E)&65535)+(b.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);_=y>>>16,A&=65535,y&=65535,w[E]=y<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function k(b,g){return b.add(I(g))}n.j=function(b){if(S(this)||S(b))return m;if(x(this))return x(b)?I(this).j(I(b)):I(I(this).j(b));if(x(b))return I(this.j(I(b)));if(0>this.l(T)&&0>b.l(T))return h(this.m()*b.m());for(var g=this.g.length+b.g.length,w=[],_=0;_<2*g;_++)w[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<b.g.length;E++){var A=this.i(_)>>>16,y=this.i(_)&65535,pt=b.i(E)>>>16,X=b.i(E)&65535;w[2*_+2*E]+=y*X,M(w,2*_+2*E),w[2*_+2*E+1]+=A*X,M(w,2*_+2*E+1),w[2*_+2*E+1]+=y*pt,M(w,2*_+2*E+1),w[2*_+2*E+2]+=A*pt,M(w,2*_+2*E+2)}for(_=0;_<g;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=g;_<2*g;_++)w[_]=0;return new a(w,0)};function M(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function R(b,g){this.g=b,this.h=g}function N(b,g){if(S(g))throw Error("division by zero");if(S(b))return new R(m,m);if(x(b))return g=N(I(b),g),new R(I(g.g),I(g.h));if(x(g))return g=N(b,I(g)),new R(I(g.g),g.h);if(30<b.g.length){if(x(b)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var w=v,_=g;0>=_.l(b);)w=F(w),_=F(_);var E=V(w,1),A=V(_,1);for(_=V(_,2),w=V(w,2);!S(_);){var y=A.add(_);0>=y.l(b)&&(E=E.add(w),A=y),_=V(_,1),w=V(w,1)}return g=k(b,E.j(g)),new R(E,g)}for(E=m;0<=b.l(g);){for(w=Math.max(1,Math.floor(b.m()/g.m())),_=Math.ceil(Math.log(w)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),A=h(w),y=A.j(g);x(y)||0<y.l(b);)w-=_,A=h(w),y=A.j(g);S(A)&&(A=v),E=E.add(A),b=k(b,y)}return new R(E,b)}n.A=function(b){return N(this,b).h},n.and=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],_=0;_<g;_++)w[_]=this.i(_)&b.i(_);return new a(w,this.h&b.h)},n.or=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],_=0;_<g;_++)w[_]=this.i(_)|b.i(_);return new a(w,this.h|b.h)},n.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],_=0;_<g;_++)w[_]=this.i(_)^b.i(_);return new a(w,this.h^b.h)};function F(b){for(var g=b.g.length+1,w=[],_=0;_<g;_++)w[_]=b.i(_)<<1|b.i(_-1)>>>31;return new a(w,b.h)}function V(b,g){var w=g>>5;g%=32;for(var _=b.g.length-w,E=[],A=0;A<_;A++)E[A]=0<g?b.i(A+w)>>>g|b.i(A+w+1)<<32-g:b.i(A+w);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Bn=a}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zd,oi,th,ws,ha,eh,nh,rh;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function i(o,c){if(c)t:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in d))break t;d=d[P]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,P={next:function(){if(!p&&d<o.length){var C=d++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function v(o,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function T(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,P,C){for(var O=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)O[lt-2]=arguments[lt];return c.prototype[P].apply(p,O)}}function x(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function I(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=o.length||0,C=p.length||0;o.length=P+C;for(let O=0;O<C;O++)o[P+O]=p[O]}else o.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function R(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function N(o){return N[" "](o),o}N[" "]=function(){};var F=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function V(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function b(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)o[d]=p[d];for(let C=0;C<w.length;C++)d=w[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function E(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=gt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class pt{constructor(){this.h=this.g=null}add(c,d){const p=X.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var X=new k(()=>new At,o=>o.reset());class At{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,Mt=!1,gt=new pt,it=()=>{const o=l.Promise.resolve(void 0);ct=()=>{o.then(ue)}};var ue=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var c=X;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Mt=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function ot(o,c){if($.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(F){t:{try{N(c.nodeName);var P=!0;break t}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:at[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ot.aa.h.call(this)}}S(ot,$);var at={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function zt(o,c,d,p,P){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++Dt,this.da=this.fa=!1}function Yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _n(o){this.src=o,this.g={},this.h=0}_n.prototype.add=function(o,c,d,p,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var O=En(o,c,p,P);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new zt(c,this.src,C,!!p,P),c.fa=d,o.push(c)),c};function wn(o,c){var d=c.type;if(d in o.g){var p=o.g[d],P=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=P)&&Array.prototype.splice.call(p,P,1),C&&(Yt(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function En(o,c,d,p){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==c&&C.capture==!!d&&C.ha==p)return P}return-1}var de="closure_lm_"+(1e6*Math.random()|0),je={};function bn(o,c,d,p,P){if(Array.isArray(c)){for(var C=0;C<c.length;C++)bn(o,c[C],d,p,P);return null}return d=Hr(d),o&&o[Ft]?o.K(c,d,h(p)?!!p.capture:!1,P):qr(o,c,d,!1,p,P)}function qr(o,c,d,p,P,C){if(!c)throw Error("Invalid event type");var O=h(P)?!!P.capture:!!P,lt=tr(o);if(lt||(o[de]=lt=new _n(o)),d=lt.add(c,d,p,O,C),d.proxy)return d;if(p=Gi(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)vt||(P=O),P===void 0&&(P=!1),o.addEventListener(c.toString(),p,P);else if(o.attachEvent)o.attachEvent(Se(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Gi(){function o(d){return c.call(o.src,o.listener,d)}const c=We;return o}function He(o,c,d,p,P){if(Array.isArray(c))for(var C=0;C<c.length;C++)He(o,c[C],d,p,P);else p=h(p)?!!p.capture:!!p,d=Hr(d),o&&o[Ft]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],d=En(C,d,p,P),-1<d&&(Yt(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=tr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=En(c,d,p,P)),(d=-1<o?c[o]:null)&&Zn(d))}function Zn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ft])wn(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Se(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=tr(c))?(wn(d,o),d.h==0&&(d.src=null,c[de]=null)):Yt(o)}}}function Se(o){return o in je?je[o]:je[o]="on"+o}function We(o,c){if(o.da)o=!0;else{c=new ot(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Zn(o),o=d.call(p,c)}return o}function tr(o){return o=o[de],o instanceof _n?o:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(o){return typeof o=="function"?o:(o[jr]||(o[jr]=function(c){return o.handleEvent(c)}),o[jr])}function wt(){ut.call(this),this.i=new _n(this),this.M=this,this.F=null}S(wt,ut),wt.prototype[Ft]=!0,wt.prototype.removeEventListener=function(o,c,d,p){He(this,o,c,d,p)};function xt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new $(c,o);else if(c instanceof $)c.target=c.target||o;else{var P=c;c=new $(p,o),_(c,P)}if(P=!0,d)for(var C=d.length-1;0<=C;C--){var O=c.g=d[C];P=er(O,p,!0,c)&&P}if(O=c.g=o,P=er(O,p,!0,c)&&P,P=er(O,p,!1,c)&&P,d)for(C=0;C<d.length;C++)O=c.g=d[C],P=er(O,p,!1,c)&&P}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Yt(d[p]);delete o.g[c],o.h--}}this.F=null},wt.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},wt.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function er(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,C=0;C<c.length;++C){var O=c[C];if(O&&!O.da&&O.capture==d){var lt=O.listener,Nt=O.ha||O.src;O.fa&&wn(o.i,O),P=lt.call(Nt,p)!==!1&&P}}return P&&!p.defaultPrevented}function Tn(o,c,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function nr(o){o.g=Tn(()=>{o.g=null,o.i&&(o.i=!1,nr(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Wr extends ut{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:nr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(o){ut.call(this),this.h=o,this.g={}}S(In,ut);var J=[];function dt(o){V(o.g,function(c,d){this.g.hasOwnProperty(d)&&Zn(c)},o),o.g={}}In.prototype.N=function(){In.aa.N.call(this),dt(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pt=l.JSON.stringify,rr=l.JSON.parse,ir=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ye(){}Ye.prototype.h=null;function Sn(o){return o.h||(o.h=o.i())}function Ae(){}var te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oe(){$.call(this,"d")}S(oe,$);function sr(){$.call(this,"c")}S(sr,$);var xe={},An=null;function xn(){return An=An||new wt}xe.La="serverreachability";function Kt(o){$.call(this,xe.La,o)}S(Kt,$);function he(o){const c=xn();xt(c,new Kt(c))}xe.STAT_EVENT="statevent";function Pn(o,c){$.call(this,xe.STAT_EVENT,o),this.stat=c}S(Pn,$);function Rt(o){const c=xn();xt(c,new Pn(c,o))}xe.Ma="timingevent";function Ki(o,c){$.call(this,xe.Ma,o),this.size=c}S(Ki,$);function Rn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Yr(){this.g=!0}Yr.prototype.xa=function(){this.g=!1};function Yf(o,c,d,p,P,C){o.info(function(){if(o.g)if(C)for(var O="",lt=C.split("&"),Nt=0;Nt<lt.length;Nt++){var nt=lt[Nt].split("=");if(1<nt.length){var Ut=nt[0];nt=nt[1];var $t=Ut.split("_");O=2<=$t.length&&$t[1]=="type"?O+(Ut+"="+nt+"&"):O+(Ut+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+O})}function Gf(o,c,d,p,P,C,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+C+" "+O})}function or(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qf(o,d)+(p?" "+p:"")})}function Kf(o,c){o.info(function(){return"TIMEOUT: "+c})}Yr.prototype.info=function(){};function Qf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<P.length;O++)P[O]=""}}}}return Pt(d)}catch{return c}}var Qi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function Xi(){}S(Xi,Ye),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},So=new Xi;function Ge(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Yl={},Ao={};function xo(o,c,d){o.L=1,o.v=es(Pe(c)),o.m=d,o.P=!0,Gl(o,null)}function Gl(o,c){o.F=Date.now(),Ji(o),o.A=Pe(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),lc(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Wl,o.g=Ac(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Wr(v(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(J[0]=P.toString()),P=J);for(var C=0;C<P.length;C++){var O=bn(d,P[C],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),he(),Yf(o.i,o.u,o.A,o.l,o.R,o.m)}Ge.prototype.ca=function(o){o=o.target;const c=this.M;c&&Re(o)==3?c.j():this.Y(o)},Ge.prototype.Y=function(o){try{if(o==this.g)t:{const $t=Re(this.g);var c=this.g.Ba();const cr=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||mc(this.g)))){this.J||$t!=4||c==7||(c==8||0>=cr?he(3):he(2)),Po(this);var d=this.g.Z();this.X=d;e:if(Kl(this)){var p=mc(this.g);o="";var P=p.length,C=Re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Gr(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==P-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Gf(this.i,this.u,this.A,this.l,this.R,$t,d),this.o){if(this.T&&!this.K){e:{if(this.g){var lt,Nt=this.g;if((lt=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(lt)){var nt=lt;break e}}nt=null}if(d=nt)or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,d);else{this.o=!1,this.s=3,Rt(12),Cn(this),Gr(this);break t}}if(this.P){d=!0;let fe;for(;!this.J&&this.C<O.length;)if(fe=Xf(this,O),fe==Ao){$t==4&&(this.s=4,Rt(14),d=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==Yl){this.s=4,Rt(15),or(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else or(this.i,this.l,fe,null),Ro(this,fe);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||O.length!=0||this.h.h||(this.s=1,Rt(16),d=!1),this.o=this.o&&d,!d)or(this.i,this.l,O,"[Invalid Chunked Response]"),Cn(this),Gr(this);else if(0<O.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Lo(Ut),Ut.M=!0,Rt(11))}}else or(this.i,this.l,O,null),Ro(this,O);$t==4&&Cn(this),this.o&&!this.J&&($t==4?bc(this.j,this):(this.o=!1,Ji(this)))}else pp(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Cn(this),Gr(this)}}}catch{}finally{}};function Kl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Xf(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Ao:(d=Number(c.substring(d,p)),isNaN(d)?Yl:(p+=1,p+d>c.length?Ao:(c=c.slice(p,p+d),o.C=p+d,c)))}Ge.prototype.cancel=function(){this.J=!0,Cn(this)};function Ji(o){o.S=Date.now()+o.I,Ql(o,o.I)}function Ql(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rn(v(o.ba,o),c)}function Po(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ge.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kf(this.i,this.A),this.L!=2&&(he(),Rt(17)),Cn(this),this.s=2,Gr(this)):Ql(this,this.S-o)};function Gr(o){o.j.G==0||o.J||bc(o.j,o)}function Cn(o){Po(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,dt(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ro(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Co(d.h,o))){if(!o.K&&Co(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)as(d),ss(d);else break t;No(d),Rt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rn(v(d.Za,d),6e3));if(1>=Zl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mn(d,11)}else if((o.K||d.g==o)&&as(d),!M(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let nt=P[c];if(d.T=nt[0],nt=nt[1],d.G==2)if(nt[0]=="c"){d.K=nt[1],d.ia=nt[2];const Ut=nt[3];Ut!=null&&(d.la=Ut,d.j.info("VER="+d.la));const $t=nt[4];$t!=null&&(d.Aa=$t,d.j.info("SVER="+d.Aa));const cr=nt[5];cr!=null&&typeof cr=="number"&&0<cr&&(p=1.5*cr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const fe=o.g;if(fe){const cs=fe.g?fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cs){var C=p.h;C.g||cs.indexOf("spdy")==-1&&cs.indexOf("quic")==-1&&cs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ko(C,C.h),C.h=null))}if(p.D){const Vo=fe.g?fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Vo&&(p.ya=Vo,ht(p.I,p.D,Vo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Sc(p,p.J?p.ia:null,p.W),O.K){tc(p.h,O);var lt=O,Nt=p.L;Nt&&(lt.I=Nt),lt.B&&(Po(lt),Ji(lt)),p.g=O}else wc(p);0<d.i.length&&os(d)}else nt[0]!="stop"&&nt[0]!="close"||Mn(d,7);else d.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?Mn(d,7):Do(d):nt[0]!="noop"&&d.l&&d.l.ta(nt),d.v=0)}}he(4)}catch{}}var Jf=class{constructor(o,c){this.g=o,this.map=c}};function Xl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Zl(o){return o.h?1:o.g?o.g.size:0}function Co(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ko(o,c){o.g?o.g.add(c):o.h=c}function tc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Xl.prototype.cancel=function(){if(this.i=ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ec(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return x(o.i)}function Zf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function tp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function nc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=tp(o),p=Zf(o),P=p.length,C=0;C<P;C++)c.call(void 0,p[C],d&&d[C],o)}var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ep(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),P=null;if(0<=p){var C=o[d].substring(0,p);P=o[d].substring(p+1)}else C=o[d];c(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function kn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof kn){this.h=o.h,Zi(this,o.j),this.o=o.o,this.g=o.g,ts(this,o.s),this.l=o.l;var c=o.i,d=new Xr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ic(this,d),this.m=o.m}else o&&(c=String(o).match(rc))?(this.h=!1,Zi(this,c[1]||"",!0),this.o=Kr(c[2]||""),this.g=Kr(c[3]||"",!0),ts(this,c[4]),this.l=Kr(c[5]||"",!0),ic(this,c[6]||"",!0),this.m=Kr(c[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}kn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Qr(c,sc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Qr(c,sc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Qr(d,d.charAt(0)=="/"?ip:rp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Qr(d,op)),o.join("")};function Pe(o){return new kn(o)}function Zi(o,c,d){o.j=d?Kr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ts(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ic(o,c,d){c instanceof Xr?(o.i=c,ap(o.i,o.h)):(d||(c=Qr(c,sp)),o.i=new Xr(c,o.h))}function ht(o,c,d){o.i.set(c,d)}function es(o){return ht(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Kr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,np),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function np(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var sc=/[#\/\?@]/g,rp=/[#\?:]/g,ip=/[#\?]/g,sp=/[#\?@]/g,op=/#/g;function Xr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ke(o){o.g||(o.g=new Map,o.h=0,o.i&&ep(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Xr.prototype,n.add=function(o,c){Ke(this),this.i=null,o=ar(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function oc(o,c){Ke(o),c=ar(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ac(o,c){return Ke(o),c=ar(o,c),o.g.has(c)}n.forEach=function(o,c){Ke(this),this.g.forEach(function(d,p){d.forEach(function(P){o.call(c,P,p,this)},this)},this)},n.na=function(){Ke(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=o[p];for(let C=0;C<P.length;C++)d.push(c[p])}return d},n.V=function(o){Ke(this);let c=[];if(typeof o=="string")ac(this,o)&&(c=c.concat(this.g.get(ar(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Ke(this),this.i=null,o=ar(this,o),ac(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function lc(o,c,d){oc(o,c),0<d.length&&(o.i=null,o.g.set(ar(o,c),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const C=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var P=C;O[p]!==""&&(P+="="+encodeURIComponent(String(O[p]))),o.push(P)}}return this.i=o.join("&")};function ar(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function ap(o,c){c&&!o.j&&(Ke(o),o.i=null,o.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(oc(this,p),lc(this,P,d))},o)),o.j=c}function lp(o,c){const d=new Yr;if(l.Image){const p=new Image;p.onload=T(Qe,d,"TestLoadImage: loaded",!0,c,p),p.onerror=T(Qe,d,"TestLoadImage: error",!1,c,p),p.onabort=T(Qe,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=T(Qe,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function cp(o,c){const d=new Yr,p=new AbortController,P=setTimeout(()=>{p.abort(),Qe(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(P),C.ok?Qe(d,"TestPingServer: ok",!0,c):Qe(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Qe(d,"TestPingServer: error",!1,c)})}function Qe(o,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function up(){this.g=new ir}function dp(o,c,d){const p=d||"";try{nc(o,function(P,C){let O=P;h(P)&&(O=Pt(P)),c.push(p+C+"="+encodeURIComponent(O))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function ns(o){this.l=o.Ub||null,this.j=o.eb||!1}S(ns,Ye),ns.prototype.g=function(){return new rs(this.l,this.j)},ns.prototype.i=function(o){return function(){return o}}({});function rs(o,c){wt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(rs,wt),n=rs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function cc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Jr(this):Zr(this),this.readyState==3&&cc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Qa=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Zr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uc(o){let c="";return V(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Mo(o,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=uc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ht(o,c,d))}function yt(o){wt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(yt,wt);var hp=/^https?$/i,fp=["POST","PUT"];n=yt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?Sn(this.o):Sn(So),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){dc(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fp,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of d)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){dc(this,C)}};function dc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,hc(o),is(o)}function hc(o){o.A||(o.A=!0,xt(o,"complete"),xt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xt(this,"complete"),xt(this,"abort"),is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),is(this,!0)),yt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fc(this):this.bb())},n.bb=function(){fc(this)};function fc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Re(o)!=4||o.Z()!=2)){if(o.u&&Re(o)==4)Tn(o.Ea,0,o);else if(xt(o,"readystatechange"),Re(o)==4){o.h=!1;try{const O=o.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var P=String(o.D).match(rc)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!hp.test(P?P.toLowerCase():"")}d=p}if(d)xt(o,"complete"),xt(o,"success");else{o.m=6;try{var C=2<Re(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",hc(o)}}finally{is(o)}}}}function is(o,c){if(o.g){pc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xt(o,"ready");try{d.onreadystatechange=p}catch{}}}function pc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Re(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Re(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),rr(c)}};function mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function pp(o){const c={};o=(o.g&&2<=Re(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=E(o[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=c[P]||[];c[P]=C,C.push(d)}b(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function gc(o){this.Aa=0,this.i=[],this.j=new Yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,o),this.cb=ti("retryDelaySeedMs",1e4,o),this.Wa=ti("forwardChannelMaxRetries",2,o),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Xl(o&&o.concurrentRequestLimit),this.Da=new up,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=gc.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Rt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Sc(this,null,this.W),os(this)};function Do(o){if(yc(o),o.G==3){var c=o.U++,d=Pe(o.I);if(ht(d,"SID",o.K),ht(d,"RID",c),ht(d,"TYPE","terminate"),ei(o,d),c=new Ge(o,o.j,c),c.L=2,c.v=es(Pe(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ac(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ji(c)}Ic(o)}function ss(o){o.g&&(Lo(o),o.g.cancel(),o.g=null)}function yc(o){ss(o),o.u&&(l.clearTimeout(o.u),o.u=null),as(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function os(o){if(!Jl(o.h)&&!o.s){o.s=!0;var c=o.Ga;ct||it(),Mt||(ct(),Mt=!0),gt.add(c,o),o.B=0}}function mp(o,c){return Zl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rn(v(o.Ga,o,c),Tc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Ge(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),_(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=_c(this,P,c),d=Pe(this.I),ht(d,"RID",o),ht(d,"CVER",22),this.D&&ht(d,"X-HTTP-Session-Id",this.D),ei(this,d),C&&(this.O?c="headers="+encodeURIComponent(String(uc(C)))+"&"+c:this.m&&Mo(d,this.m,C)),ko(this.h,P),this.Ua&&ht(d,"TYPE","init"),this.P?(ht(d,"$req",c),ht(d,"SID","null"),P.T=!0,xo(P,d,null)):xo(P,d,c),this.G=2}}else this.G==3&&(o?vc(this,o):this.i.length==0||Jl(this.h)||vc(this))};function vc(o,c){var d;c?d=c.l:d=o.U++;const p=Pe(o.I);ht(p,"SID",o.K),ht(p,"RID",d),ht(p,"AID",o.T),ei(o,p),o.m&&o.o&&Mo(p,o.m,o.o),d=new Ge(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=_c(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ko(o.h,d),xo(d,p,c)}function ei(o,c){o.H&&V(o.H,function(d,p){ht(c,p,d)}),o.l&&nc({},function(d,p){ht(c,p,d)})}function _c(o,c,d){d=Math.min(o.i.length,d);var p=o.l?v(o.l.Na,o.l,o):null;t:{var P=o.i;let C=-1;for(;;){const O=["count="+d];C==-1?0<d?(C=P[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let lt=!0;for(let Nt=0;Nt<d;Nt++){let nt=P[Nt].g;const Ut=P[Nt].map;if(nt-=C,0>nt)C=Math.max(0,P[Nt].g-100),lt=!1;else try{dp(Ut,O,"req"+nt+"_")}catch{p&&p(Ut)}}if(lt){p=O.join("&");break t}}}return o=o.i.splice(0,d),c.D=o,p}function wc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ct||it(),Mt||(ct(),Mt=!0),gt.add(c,o),o.v=0}}function No(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rn(v(o.Fa,o),Tc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ec(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),ss(this),Ec(this))};function Lo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ec(o){o.g=new Ge(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Pe(o.qa);ht(c,"RID","rpc"),ht(c,"SID",o.K),ht(c,"AID",o.T),ht(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ht(c,"TO",o.ja),ht(c,"TYPE","xmlhttp"),ei(o,c),o.m&&o.o&&Mo(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=es(Pe(c)),d.m=null,d.P=!0,Gl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ss(this),No(this),Rt(19))};function as(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function bc(o,c){var d=null;if(o.g==c){as(o),Lo(o),o.g=null;var p=2}else if(Co(o.h,c))d=c.D,tc(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;p=xn(),xt(p,new Ki(p,d)),os(o)}else wc(o);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&mp(o,c)||p==2&&No(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),P){case 1:Mn(o,5);break;case 4:Mn(o,10);break;case 3:Mn(o,6);break;default:Mn(o,2)}}}function Tc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Mn(o,c){if(o.j.info("Error code "+c),c==2){var d=v(o.fb,o),p=o.Xa;const P=!p;p=new kn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zi(p,"https"),es(p),P?lp(p.toString(),d):cp(p.toString(),d)}else Rt(2);o.G=0,o.l&&o.l.sa(c),Ic(o),yc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Ic(o){if(o.G=0,o.ka=[],o.l){const c=ec(o.h);(c.length!=0||o.i.length!=0)&&(I(o.ka,c),I(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Sc(o,c,d){var p=d instanceof kn?Pe(d):new kn(d);if(p.g!="")c&&(p.g=c+"."+p.g),ts(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var C=new kn(null);p&&Zi(C,p),c&&(C.g=c),P&&ts(C,P),d&&(C.l=d),p=C}return d=o.D,c=o.ya,d&&c&&ht(p,d,c),ht(p,"VER",o.la),ei(o,p),p}function Ac(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new yt(new ns({eb:d})):new yt(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xc(){}n=xc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ls(){}ls.prototype.g=function(o,c){return new ee(o,c)};function ee(o,c){wt.call(this),this.g=new gc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new lr(this)}S(ee,wt),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){Do(this.g)},ee.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Pt(o),o=d);c.i.push(new Jf(c.Ya++,o)),c.G==3&&os(c)},ee.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,ee.aa.N.call(this)};function Pc(o){oe.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const d in c){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Pc,oe);function Rc(){sr.call(this),this.status=1}S(Rc,sr);function lr(o){this.g=o}S(lr,xc),lr.prototype.ua=function(){xt(this.g,"a")},lr.prototype.ta=function(o){xt(this.g,new Pc(o))},lr.prototype.sa=function(o){xt(this.g,new Rc)},lr.prototype.ra=function(){xt(this.g,"b")},ls.prototype.createWebChannel=ls.prototype.g,ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,rh=function(){return new ls},nh=function(){return xn()},eh=xe,ha={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,ws=Qi,Hl.COMPLETE="complete",th=Hl,Ae.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",wt.prototype.listen=wt.prototype.K,oi=Ae,yt.prototype.listenOnce=yt.prototype.L,yt.prototype.getLastError=yt.prototype.Ka,yt.prototype.getLastErrorCode=yt.prototype.Ba,yt.prototype.getStatus=yt.prototype.Z,yt.prototype.getResponseJson=yt.prototype.Oa,yt.prototype.getResponseText=yt.prototype.oa,yt.prototype.send=yt.prototype.ea,yt.prototype.setWithCredentials=yt.prototype.Ha,Zd=yt}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const ou="@firebase/firestore";/**
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
 */let Vr="10.14.0";/**
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
 */const Hn=new Da("@firebase/firestore");function ri(){return Hn.logLevel}function U(n,...t){if(Hn.logLevel<=tt.DEBUG){const e=t.map(Ya);Hn.debug(`Firestore (${Vr}): ${n}`,...e)}}function Be(n,...t){if(Hn.logLevel<=tt.ERROR){const e=t.map(Ya);Hn.error(`Firestore (${Vr}): ${n}`,...e)}}function xr(n,...t){if(Hn.logLevel<=tt.WARN){const e=t.map(Ya);Hn.warn(`Firestore (${Vr}): ${n}`,...e)}}function Ya(n){if(typeof n=="string")return n;try{/**
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
 */function Y(n="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+n;throw Be(t),new Error(t)}function st(n,t){n||Y()}function K(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ih{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Av{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(jt.UNAUTHENTICATED))}shutdown(){}}class xv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Pv{constructor(t){this.t=t,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){st(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new Le;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Le,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Le)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new ih(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string"),new jt(t)}}class Rv{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Cv{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Rv(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){st(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(st(typeof e.token=="string"),this.R=e.token,new kv(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dv(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class sh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Dv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function rt(n,t){return n<t?-1:n>t?1:0}function Pr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class St{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new St(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new St(0,0))}static max(){return new G(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(t,e,r){e===void 0?e=0:e>t.length&&Y(),r===void 0?r=t.length-e:r>t.length-e&&Y(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends Ei{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const Nv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Ei{construct(t,e,r){return new Vt(t,e,r)}static isValidIdentifier(t){return Nv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vt(e)}static emptyPath(){return new Vt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(ft.fromString(t))}static fromName(t){return new q(ft.fromString(t).popFirst(5))}static empty(){return new q(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new ft(t.slice()))}}function Lv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new hn(i,q.empty(),t)}function Vv(n){return new hn(n.readTime,n.key,-1)}class hn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new hn(G.min(),q.empty(),-1)}static max(){return new hn(G.max(),q.empty(),-1)}}function Ov(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:rt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Bv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Li(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Bv)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof L?e:L.resolve(e)}catch(e){return L.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):L.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):L.reject(e)}static resolve(t){return new L((e,r)=>{e(t)})}static reject(t){return new L((e,r)=>{r(t)})}static waitFor(t){return new L((e,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&e()},u=>r(u))}),a=!0,s===i&&e()})}static or(t){let e=L.resolve(!1);for(const r of t)e=e.next(i=>i?L.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new L((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,e){return new L((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function zv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Vi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ga{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ga.oe=-1;function Qs(n){return n==null}function Ls(n){return n===0&&1/n==-1/0}function Uv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function au(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Kn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function oh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fs(this.root,t,this.comparator,!1)}getReverseIterator(){return new fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fs(this.root,t,this.comparator,!0)}}class fs{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Lt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lu(this.data.getIterator())}getIteratorFrom(t){return new lu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ot(this.comparator);return e.data=t,e}}class lu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class re{constructor(t){this.fields=t,t.sort(Vt.comparator)}static empty(){return new re([])}unionWith(t){let e=new Ot(Vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new re(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ah("Invalid base64 string: "+s):s}}(t);return new Bt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(st(!!n),typeof n=="string"){let t=0;const e=$v.exec(n);if(st(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wn(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */function Ka(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Qa(n){const t=n.mapValue.fields.__previous_value__;return Ka(t)?Qa(t):t}function bi(n){const t=fn(n.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
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
 */class qv{constructor(t,e,r,i,s,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ti{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ti&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ps={mapValue:{}};function Yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ka(n)?4:Hv(n)?9007199254740991:jv(n)?10:11:Y()}function be(n,t){if(n===t)return!0;const e=Yn(n);if(e!==Yn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return bi(n).isEqual(bi(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=fn(i.timestampValue),l=fn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Wn(i.bytesValue).isEqual(Wn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=_t(i.doubleValue),l=_t(s.doubleValue);return a===l?Ls(a)===Ls(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Pr(n.arrayValue.values||[],t.arrayValue.values||[],be);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(au(a)!==au(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!be(a[u],l[u])))return!1;return!0}(n,t);default:return Y()}}function Ii(n,t){return(n.values||[]).find(e=>be(e,t))!==void 0}function Rr(n,t){if(n===t)return 0;const e=Yn(n),r=Yn(t);if(e!==r)return rt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=_t(s.integerValue||s.doubleValue),u=_t(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return cu(n.timestampValue,t.timestampValue);case 4:return cu(bi(n),bi(t));case 5:return rt(n.stringValue,t.stringValue);case 6:return function(s,a){const l=Wn(s),u=Wn(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=rt(l[h],u[h]);if(f!==0)return f}return rt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=rt(_t(s.latitude),_t(a.latitude));return l!==0?l:rt(_t(s.longitude),_t(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return uu(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},v=a.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=v.value)===null||u===void 0?void 0:u.arrayValue,x=rt(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:uu(T,S)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===ps.mapValue&&a===ps.mapValue)return 0;if(s===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const v=rt(u[m],f[m]);if(v!==0)return v;const T=Rr(l[u[m]],h[f[m]]);if(T!==0)return T}return rt(u.length,f.length)}(n.mapValue,t.mapValue);default:throw Y()}}function cu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return rt(n,t);const e=fn(n),r=fn(t),i=rt(e.seconds,r.seconds);return i!==0?i:rt(e.nanos,r.nanos)}function uu(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=Rr(e[i],r[i]);if(s)return s}return rt(e.length,r.length)}function Cr(n){return fa(n)}function fa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=fn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Wn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=fa(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${fa(e.fields[a])}`;return i+"}"}(n.mapValue):Y()}function du(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function pa(n){return!!n&&"integerValue"in n}function Xa(n){return!!n&&"arrayValue"in n}function hu(n){return!!n&&"nullValue"in n}function fu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Es(n){return!!n&&"mapValue"in n}function jv(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function di(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Kn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=di(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=di(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Hv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xt{constructor(t){this.value=t}static empty(){return new Xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=di(e)}setAll(t){let e=Vt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=di(a):i.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return be(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Kn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Xt(di(this.value))}}function lh(n){const t=[];return Kn(n.fields,(e,r)=>{const i=new Vt([e]);if(Es(r)){const s=lh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new re(t)}/**
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
 */class Vs{constructor(t,e){this.position=t,this.inclusive=e}}function pu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],a=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=Rr(a,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!be(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Si{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wv(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ch{}class bt extends ch{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Gv(t,e,r):e==="array-contains"?new Xv(t,r):e==="in"?new Jv(t,r):e==="not-in"?new Zv(t,r):e==="array-contains-any"?new t0(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Kv(t,r):new Qv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Rr(e,this.value)):e!==null&&Yn(this.value)===Yn(e)&&this.matchesComparison(Rr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends ch{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ge(t,e)}matches(t){return uh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uh(n){return n.op==="and"}function dh(n){return Yv(n)&&uh(n)}function Yv(n){for(const t of n.filters)if(t instanceof ge)return!1;return!0}function ma(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(dh(n))return n.filters.map(t=>ma(t)).join(",");{const t=n.filters.map(e=>ma(e)).join(",");return`${n.op}(${t})`}}function hh(n,t){return n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&be(r.value,i.value)}(n,t):n instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&hh(a,i.filters[l]),!0):!1}(n,t):void Y()}function fh(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Cr(e.value)}`}(n):n instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(fh).join(" ,")+"}"}(n):"Filter"}class Gv extends bt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Kv extends bt{constructor(t,e){super(t,"in",e),this.keys=ph("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qv extends bt{constructor(t,e){super(t,"not-in",e),this.keys=ph("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ph(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class Xv extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xa(e)&&Ii(e.arrayValue,this.value)}}class Jv extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ii(this.value.arrayValue,e)}}class Zv extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ii(this.value.arrayValue,e)}}class t0 extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xa(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class e0{constructor(t,e=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function gu(n,t=null,e=[],r=[],i=null,s=null,a=null){return new e0(n,t,e,r,i,s,a)}function Ja(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ma(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Cr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Cr(r)).join(",")),t.ue=e}return t.ue}function Za(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wv(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!hh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mu(n.startAt,t.startAt)&&mu(n.endAt,t.endAt)}function ga(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Or{constructor(t,e=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function n0(n,t,e,r,i,s,a,l){return new Or(n,t,e,r,i,s,a,l)}function tl(n){return new Or(n)}function yu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mh(n){return n.collectionGroup!==null}function hi(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ot(Vt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Si(s,r))}),e.has(Vt.keyField().canonicalString())||t.ce.push(new Si(Vt.keyField(),r))}return t.ce}function _e(n){const t=K(n);return t.le||(t.le=r0(t,hi(n))),t.le}function r0(n,t){if(n.limitType==="F")return gu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Si(i.field,s)});const e=n.endAt?new Vs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vs(n.startAt.position,n.startAt.inclusive):null;return gu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ya(n,t){const e=n.filters.concat([t]);return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Os(n,t,e){return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xs(n,t){return Za(_e(n),_e(t))&&n.limitType===t.limitType}function gh(n){return`${Ja(_e(n))}|lt:${n.limitType}`}function dr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>fh(i)).join(", ")}]`),Qs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Cr(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Cr(i)).join(",")),`Target(${r})`}(_e(n))}; limitType=${n.limitType})`}function Js(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of hi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=pu(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,hi(r),i)||r.endAt&&!function(a,l,u){const h=pu(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,hi(r),i))}(n,t)}function i0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yh(n){return(t,e)=>{let r=!1;for(const i of hi(n)){const s=s0(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function s0(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Rr(u,h):Y()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Br{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Kn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return oh(this.inner)}size(){return this.innerSize}}/**
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
 */const o0=new mt(q.comparator);function Fe(){return o0}const vh=new mt(q.comparator);function ai(...n){let t=vh;for(const e of n)t=t.insert(e.key,e);return t}function _h(n){let t=vh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function On(){return fi()}function wh(){return fi()}function fi(){return new Br(n=>n.toString(),(n,t)=>n.isEqual(t))}const a0=new mt(q.comparator),l0=new Ot(q.comparator);function Z(...n){let t=l0;for(const e of n)t=t.add(e);return t}const c0=new Ot(rt);function u0(){return c0}/**
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
 */function el(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(t)?"-0":t}}function Eh(n){return{integerValue:""+n}}function d0(n,t){return Uv(t)?Eh(t):el(n,t)}/**
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
 */class Zs{constructor(){this._=void 0}}function h0(n,t,e){return n instanceof Bs?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ka(s)&&(s=Qa(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Ai?Th(n,t):n instanceof xi?Ih(n,t):function(i,s){const a=bh(i,s),l=vu(a)+vu(i.Pe);return pa(a)&&pa(i.Pe)?Eh(l):el(i.serializer,l)}(n,t)}function f0(n,t,e){return n instanceof Ai?Th(n,t):n instanceof xi?Ih(n,t):e}function bh(n,t){return n instanceof Fs?function(r){return pa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Bs extends Zs{}class Ai extends Zs{constructor(t){super(),this.elements=t}}function Th(n,t){const e=Sh(t);for(const r of n.elements)e.some(i=>be(i,r))||e.push(r);return{arrayValue:{values:e}}}class xi extends Zs{constructor(t){super(),this.elements=t}}function Ih(n,t){let e=Sh(t);for(const r of n.elements)e=e.filter(i=>!be(i,r));return{arrayValue:{values:e}}}class Fs extends Zs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function vu(n){return _t(n.integerValue||n.doubleValue)}function Sh(n){return Xa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function p0(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ai&&i instanceof Ai||r instanceof xi&&i instanceof xi?Pr(r.elements,i.elements,be):r instanceof Fs&&i instanceof Fs?be(r.Pe,i.Pe):r instanceof Bs&&i instanceof Bs}(n.transform,t.transform)}class m0{constructor(t,e){this.version=t,this.transformResults=e}}class ie{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ie}static exists(t){return new ie(void 0,t)}static updateTime(t){return new ie(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class to{}function Ah(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new nl(n.key,ie.none()):new Oi(n.key,n.data,ie.none());{const e=n.data,r=Xt.empty();let i=new Ot(Vt.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new gn(n.key,r,new re(i.toArray()),ie.none())}}function g0(n,t,e){n instanceof Oi?function(i,s,a){const l=i.value.clone(),u=wu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof gn?function(i,s,a){if(!bs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=wu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(xh(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pi(n,t,e,r){return n instanceof Oi?function(s,a,l,u){if(!bs(s.precondition,a))return l;const h=s.value.clone(),f=Eu(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof gn?function(s,a,l,u){if(!bs(s.precondition,a))return l;const h=Eu(s.fieldTransforms,u,a),f=a.data;return f.setAll(xh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,t,e,r):function(s,a,l){return bs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function y0(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=bh(r.transform,i||null);s!=null&&(e===null&&(e=Xt.empty()),e.set(r.field,s))}return e||null}function _u(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pr(r,i,(s,a)=>p0(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Oi extends to{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gn extends to{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function wu(n,t,e){const r=new Map;st(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,f0(a,l,e[i]))}return r}function Eu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,a=e.data.field(i.field);r.set(i.field,h0(s,a,t))}return r}class nl extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v0 extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _0{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&g0(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=pi(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=pi(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wh();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(i.key)?null:l;const u=Ah(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Pr(this.mutations,t.mutations,(e,r)=>_u(e,r))&&Pr(this.baseMutations,t.baseMutations,(e,r)=>_u(e,r))}}class rl{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){st(t.mutations.length===r.length);let i=function(){return a0}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new rl(t,e,r,i)}}/**
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
 */class w0{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class E0{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Et,et;function b0(n){switch(n){default:return Y();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Ph(n){if(n===void 0)return Be("GRPC error has no .code"),D.UNKNOWN;switch(n){case Et.OK:return D.OK;case Et.CANCELLED:return D.CANCELLED;case Et.UNKNOWN:return D.UNKNOWN;case Et.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Et.INTERNAL:return D.INTERNAL;case Et.UNAVAILABLE:return D.UNAVAILABLE;case Et.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Et.NOT_FOUND:return D.NOT_FOUND;case Et.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Et.ABORTED:return D.ABORTED;case Et.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Et.DATA_LOSS:return D.DATA_LOSS;default:return Y()}}(et=Et||(Et={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function T0(){return new TextEncoder}/**
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
 */const I0=new Bn([4294967295,4294967295],0);function bu(n){const t=T0().encode(n),e=new Jd;return e.update(t),new Uint8Array(e.digest())}function Tu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Bn([e,r],0),new Bn([i,s],0)]}class il{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new li(`Invalid padding: ${e}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new li(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Bn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Bn.fromNumber(r)));return i.compare(I0)===1&&(i=new Bn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=bu(t),[r,i]=Tu(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new il(s,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=bu(t),[r,i]=Tu(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eo{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Bi.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new eo(G.min(),i,new mt(rt),Fe(),Z())}}class Bi{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Bi(r,e,Z(),Z(),Z())}}/**
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
 */class Ts{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Rh{constructor(t,e){this.targetId=t,this.me=e}}class Ch{constructor(t,e,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Iu{constructor(){this.fe=0,this.ge=Au(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Z(),e=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Bi(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Au()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,st(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class S0{constructor(t){this.Le=t,this.Be=new Map,this.ke=Fe(),this.qe=Su(),this.Qe=new mt(rt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:Y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(ga(s))if(r===0){const a=new q(s.path);this.Ue(e,a,Ht.newNoDocument(a,G.min()))}else st(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let a,l;try{a=Wn(r).toUint8Array()}catch(u){if(u instanceof ah)return xr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new il(a,i,s)}catch(u){return xr(u instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ga(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ht.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new eo(t,e,this.Qe,this.ke,r);return this.ke=Fe(),this.qe=Su(),this.Qe=new mt(rt),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Iu,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ot(rt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Iu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Su(){return new mt(q.comparator)}function Au(){return new mt(q.comparator)}const A0={asc:"ASCENDING",desc:"DESCENDING"},x0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P0={and:"AND",or:"OR"};class R0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function va(n,t){return n.useProto3Json||Qs(t)?t:{value:t}}function zs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function C0(n,t){return zs(n,t.toTimestamp())}function we(n){return st(!!n),G.fromTimestamp(function(e){const r=fn(e);return new St(r.seconds,r.nanos)}(n))}function sl(n,t){return _a(n,t).canonicalString()}function _a(n,t){const e=function(i){return new ft(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Mh(n){const t=ft.fromString(n);return st(Oh(t)),t}function wa(n,t){return sl(n.databaseId,t.path)}function Ho(n,t){const e=Mh(t);if(e.get(1)!==n.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Nh(e))}function Dh(n,t){return sl(n.databaseId,t)}function k0(n){const t=Mh(n);return t.length===4?ft.emptyPath():Nh(t)}function Ea(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return st(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xu(n,t,e){return{name:wa(n,t),fields:e.value.mapValue.fields}}function M0(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(st(f===void 0||typeof f=="string"),Bt.fromBase64String(f||"")):(st(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Bt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Ph(h.code);return new z(f,h.message||"")}(a);e=new Ch(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ho(n,r.document.name),s=we(r.document.updateTime),a=r.document.createTime?we(r.document.createTime):G.min(),l=new Xt({mapValue:{fields:r.document.fields}}),u=Ht.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];e=new Ts(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ho(n,r.document),s=r.readTime?we(r.readTime):G.min(),a=Ht.newNoDocument(i,s),l=r.removedTargetIds||[];e=new Ts([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ho(n,r.document),s=r.removedTargetIds||[];e=new Ts([],s,i,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new E0(i,s),l=r.targetId;e=new Rh(l,a)}}return e}function D0(n,t){let e;if(t instanceof Oi)e={update:xu(n,t.key,t.value)};else if(t instanceof nl)e={delete:wa(n,t.key)};else if(t instanceof gn)e={update:xu(n,t.key,t.data),updateMask:$0(t.fieldMask)};else{if(!(t instanceof v0))return Y();e={verify:wa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ai)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:C0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,t.precondition)),e}function N0(n,t){return n&&n.length>0?(st(t!==void 0),n.map(e=>function(i,s){let a=i.updateTime?we(i.updateTime):we(s);return a.isEqual(G.min())&&(a=we(s)),new m0(a,i.transformResults||[])}(e,t))):[]}function L0(n,t){return{documents:[Dh(n,t.path)]}}function V0(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Dh(n,i);const s=function(h){if(h.length!==0)return Vh(ge.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:hr(v.field),direction:F0(v.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=va(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:i}}function O0(n){let t=k0(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){st(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(m){const v=Lh(m);return v instanceof ge&&dh(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(v=>function(S){return new Si(fr(S.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,Qs(v)?null:v}(e.limit));let u=null;e.startAt&&(u=function(m){const v=!!m.before,T=m.values||[];return new Vs(T,v)}(e.startAt));let h=null;return e.endAt&&(h=function(m){const v=!m.before,T=m.values||[];return new Vs(T,v)}(e.endAt)),n0(t,i,a,s,l,"F",u,h)}function B0(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Lh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=fr(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fr(e.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fr(e.unaryFilter.field);return bt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fr(e.unaryFilter.field);return bt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(fr(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(r=>Lh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(n):Y()}function F0(n){return A0[n]}function z0(n){return x0[n]}function U0(n){return P0[n]}function hr(n){return{fieldPath:n.canonicalString()}}function fr(n){return Vt.fromServerFormat(n.fieldPath)}function Vh(n){return n instanceof bt?function(e){if(e.op==="=="){if(fu(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NAN"}};if(hu(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fu(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NOT_NAN"}};if(hu(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(e.field),op:z0(e.op),value:e.value}}}(n):n instanceof ge?function(e){const r=e.getFilters().map(i=>Vh(i));return r.length===1?r[0]:{compositeFilter:{op:U0(e.op),filters:r}}}(n):Y()}function $0(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Oh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class q0{constructor(t){this.ct=t}}function j0(n){const t=O0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class H0{constructor(){this.un=new W0}addToCollectionParentIndex(t,e){return this.un.add(e),L.resolve()}getCollectionParents(t,e){return L.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return L.resolve()}deleteFieldIndex(t,e){return L.resolve()}deleteAllFieldIndexes(t){return L.resolve()}createTargetIndexes(t,e){return L.resolve()}getDocumentsMatchingTarget(t,e){return L.resolve(null)}getIndexType(t,e){return L.resolve(0)}getFieldIndexes(t,e){return L.resolve([])}getNextCollectionGroupToUpdate(t){return L.resolve(null)}getMinOffset(t,e){return L.resolve(hn.min())}getMinOffsetFromCollectionGroup(t,e){return L.resolve(hn.min())}updateCollectionGroup(t,e,r){return L.resolve()}updateIndexEntries(t,e){return L.resolve()}}class W0{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Ot(ft.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Ot(ft.comparator)).toArray()}}/**
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
 */class kr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new kr(0)}static kn(){return new kr(-1)}}/**
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
 */class Y0{constructor(){this.changes=new Br(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?L.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class G0{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class K0{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&pi(r.mutation,i,re.empty(),St.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const i=On();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let a=ai();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=On();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let s=Fe();const a=fi(),l=function(){return fi()}();return e.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gn)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),pi(f.mutation,h,f.mutation.getFieldMask(),St.now())):a.set(h.key,re.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var m;return l.set(h,new G0(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const r=fi();let i=new mt((a,l)=>a-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=r.get(u)||re.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=wh();f.forEach(v=>{if(!s.has(v)){const T=Ah(e.get(v),r.get(v));T!==null&&m.set(v,T),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):mh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):L.resolve(On());let l=-1,u=s;return a.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(t,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,Z())).next(f=>({batchId:l,changes:_h(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let i=ai();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let a=ai();return this.indexManager.getCollectionParents(t,s).next(l=>L.forEach(l,u=>{const h=function(m,v){return new Or(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(f=>{f.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ht.newInvalidDocument(f)))});let l=ai();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&pi(f.mutation,h,re.empty(),St.now()),Js(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Q0{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return L.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:we(i.createTime)}}(e)),L.resolve()}getNamedQuery(t,e){return L.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:j0(i.bundledQuery),readTime:we(i.readTime)}}(e)),L.resolve()}}/**
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
 */class X0{constructor(){this.overlays=new mt(q.comparator),this.Ir=new Map}getOverlay(t,e){return L.resolve(this.overlays.get(e))}getOverlays(t,e){const r=On();return L.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),L.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(t,e,r){const i=On(),s=e.length+1,a=new q(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new mt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=On(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=On(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new w0(e,r));let s=this.Ir.get(e);s===void 0&&(s=Z(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
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
 */class J0{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(t){return L.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,L.resolve()}}/**
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
 */class ol{constructor(){this.Tr=new Ot(kt.Er),this.dr=new Ot(kt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new kt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new q(new ft([])),r=new kt(e,t),i=new kt(e,t+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new q(new ft([])),r=new kt(e,t),i=new kt(e,t+1);let s=Z();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new kt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return q.comparator(t.key,e.key)||rt(t.wr,e.wr)}static Ar(t,e){return rt(t.wr,e.wr)||q.comparator(t.key,e.key)}}/**
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
 */class Z0{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ot(kt.Er)}checkEmpty(t){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _0(s,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new kt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(t,e){return L.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),i=new kt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ot(rt);return e.forEach(i=>{const s=new kt(i,0),a=new kt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new kt(new q(s),0);let l=new Ot(rt);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),L.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){st(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(e.mutations,i=>{const s=new kt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new kt(e,0),i=this.br.firstAfterOrEqual(r);return L.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,L.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class t_{constructor(t){this.Mr=t,this.docs=function(){return new mt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return L.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(e))}getEntries(t,e){let r=Fe();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Fe();const a=e.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ov(Vv(f),r)<=0||(i.has(f.key)||Js(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(t,e,r,i){Y()}Or(t,e){return L.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new e_(this)}getSize(t){return L.resolve(this.size)}}class e_ extends Y0{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),L.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class n_{constructor(t){this.persistence=t,this.Nr=new Br(e=>Ja(e),Za),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ol,this.targetCount=0,this.kr=kr.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),L.resolve()}getLastRemoteSnapshotVersion(t){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return L.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),L.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new kr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,L.resolve()}updateTargetData(t,e){return this.Kn(e),L.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,L.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(t){return L.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return L.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),L.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),L.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),L.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return L.resolve(r)}containsKey(t,e){return L.resolve(this.Br.containsKey(e))}}/**
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
 */class r_{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ga(0),this.Kr=!1,this.Kr=!0,this.$r=new J0,this.referenceDelegate=t(this),this.Ur=new n_(this),this.indexManager=new H0,this.remoteDocumentCache=function(i){return new t_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new q0(e),this.Gr=new Q0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new X0,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Z0(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const i=new i_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class i_ extends Fv{constructor(t){super(),this.currentSequenceNumber=t}}class al{constructor(t){this.persistence=t,this.Jr=new ol,this.Yr=null}static Zr(t){return new al(t)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),L.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),L.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return L.or([()=>L.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ll{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=Z(),i=Z();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ll(t,e.fromCache,r,i)}}/**
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
 */class s_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class o_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $p()?8:zv(Wt())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new s_;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(ri()<=tt.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",dr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(ri()<=tt.DEBUG&&U("QueryEngine","Query:",dr(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ri()<=tt.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",dr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_e(e))):L.resolve())}Yi(t,e){if(yu(e))return L.resolve(null);let r=_e(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Os(e,null,"F"),r=_e(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=Z(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Os(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,r,i){return yu(e)||i.isEqual(G.min())?L.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const a=this.ts(e,s);return this.ns(e,a,r,i)?L.resolve(null):(ri()<=tt.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dr(e)),this.rs(t,a,e,Lv(i,-1)).next(l=>l))})}ts(t,e){let r=new Ot(yh(t));return e.forEach((i,s)=>{Js(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return ri()<=tt.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",dr(e)),this.Ji.getDocumentsMatchingQuery(t,e,hn.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class a_{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new mt(rt),this._s=new Br(s=>Ja(s),Za),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new K0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function l_(n,t,e,r){return new a_(n,t,e,r)}async function Bh(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Z();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function c_(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,v=m.keys();let T=L.resolve();return v.forEach(S=>{T=T.next(()=>f.getEntry(u,S)).next(x=>{const I=h.docVersions.get(S);st(I!==null),x.version.compareTo(I)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Fh(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function u_(n,t){const e=K(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((f,m)=>{const v=i.get(m);if(!v)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,m)));let T=v.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?T=T.withResumeToken(Bt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(x,I,k){return x.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(v,T,f)&&l.push(e.Ur.updateTargetData(s,T))});let u=Fe(),h=Z();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(d_(s,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(m=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.os=i,s))}function d_(n,t,e){let r=Z(),i=Z();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let a=Fe();return e.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function h_(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function f_(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,L.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new rn(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ba(n,t,e){const r=K(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Vi(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Pu(n,t,e){const r=K(n);let i=G.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=K(u),v=m._s.get(f);return v!==void 0?L.resolve(m.os.get(v)):m.Ur.getTargetData(h,f)}(r,a,_e(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:G.min(),e?s:Z())).next(l=>(p_(r,i0(t),l),{documents:l,Ts:s})))}function p_(n,t,e){let r=n.us.get(t)||G.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class Ru{constructor(){this.activeTargetIds=u0()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class m_{constructor(){this.so=new Ru,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ru,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class g_{_o(t){}shutdown(){}}/**
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
 */class Cu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ms=null;function Wo(){return ms===null?ms=function(){return 268435456+Math.round(2147483648*Math.random())}():ms++,"0x"+ms.toString(16)}/**
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
 */const y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class v_{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const qt="WebChannelConnection";class __ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,a){const l=Wo(),u=this.xo(e,r.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,u,h,i).then(f=>(U("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw xr("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,s,a,l){return this.Mo(e,r,i,s,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,r){const i=y_[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=Wo();return new Promise((a,l)=>{const u=new Zd;u.setWithCredentials(!0),u.listenOnce(th.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ws.NO_ERROR:const f=u.getResponseJson();U(qt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case ws.TIMEOUT:U(qt,`RPC '${t}' ${s} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const m=u.getStatus();if(U(qt,`RPC '${t}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v==null?void 0:v.error;if(T&&T.status&&T.message){const S=function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(k)>=0?k:D.UNKNOWN}(T.status);l(new z(S,T.message))}else l(new z(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U(qt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);U(qt,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",h,r,15)})}Bo(t,e,r){const i=Wo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rh(),l=nh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=s.join("");U(qt,`Creating RPC '${t}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let v=!1,T=!1;const S=new v_({Io:I=>{T?U(qt,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(v||(U(qt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),v=!0),U(qt,`RPC '${t}' stream ${i} sending:`,I),m.send(I))},To:()=>m.close()}),x=(I,k,M)=>{I.listen(k,R=>{try{M(R)}catch(N){setTimeout(()=>{throw N},0)}})};return x(m,oi.EventType.OPEN,()=>{T||(U(qt,`RPC '${t}' stream ${i} transport opened.`),S.yo())}),x(m,oi.EventType.CLOSE,()=>{T||(T=!0,U(qt,`RPC '${t}' stream ${i} transport closed`),S.So())}),x(m,oi.EventType.ERROR,I=>{T||(T=!0,xr(qt,`RPC '${t}' stream ${i} transport errored:`,I),S.So(new z(D.UNAVAILABLE,"The operation could not be completed")))}),x(m,oi.EventType.MESSAGE,I=>{var k;if(!T){const M=I.data[0];st(!!M);const R=M,N=R.error||((k=R[0])===null||k===void 0?void 0:k.error);if(N){U(qt,`RPC '${t}' stream ${i} received error:`,N);const F=N.status;let V=function(w){const _=Et[w];if(_!==void 0)return Ph(_)}(F),b=N.message;V===void 0&&(V=D.INTERNAL,b="Unknown error status: "+F+" with message "+N.message),T=!0,S.So(new z(V,b)),m.close()}else U(qt,`RPC '${t}' stream ${i} received:`,M),S.bo(M)}}),x(l,eh.STAT_EVENT,I=>{I.stat===ha.PROXY?U(qt,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===ha.NOPROXY&&U(qt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Yo(){return typeof document<"u"?document:null}/**
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
 */function no(n){return new R0(n,!0)}/**
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
 */class zh{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Uh{constructor(t,e,r,i,s,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zh(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Be(e.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w_ extends Uh{constructor(t,e,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=M0(this.serializer,t),r=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?we(a.readTime):G.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ea(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=ga(u)?{documents:L0(s,u)}:{query:V0(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=kh(s,a.resumeToken);const h=va(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=zs(s,a.snapshotVersion.toTimestamp());const h=va(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=B0(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ea(this.serializer),e.removeTarget=t,this.a_(e)}}class E_ extends Uh{constructor(t,e,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return st(!!t.streamToken),this.lastStreamToken=t.streamToken,st(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){st(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=N0(t.writeResults,t.commitTime),r=we(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Ea(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>D0(this.serializer,r))};this.a_(e)}}/**
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
 */class b_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,_a(e,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(D.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,_a(e,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class T_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Be(e),this.D_=!1):U("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class I_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=K(u);h.L_.add(4),await Fi(h),h.q_.set("Unknown"),h.L_.delete(4),await ro(h)}(this))})}),this.q_=new T_(r,i)}}async function ro(n){if(Qn(n))for(const t of n.B_)await t(!0)}async function Fi(n){for(const t of n.B_)await t(!1)}function $h(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),hl(e)?dl(e):Fr(e).r_()&&ul(e,t))}function cl(n,t){const e=K(n),r=Fr(e);e.N_.delete(t),r.r_()&&qh(e,t),e.N_.size===0&&(r.r_()?r.o_():Qn(e)&&e.q_.set("Unknown"))}function ul(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fr(n).A_(t)}function qh(n,t){n.Q_.xe(t),Fr(n).R_(t)}function dl(n){n.Q_=new S0({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.q_.v_()}function hl(n){return Qn(n)&&!Fr(n).n_()&&n.N_.size>0}function Qn(n){return K(n).L_.size===0}function jh(n){n.Q_=void 0}async function S_(n){n.q_.set("Online")}async function A_(n){n.N_.forEach((t,e)=>{ul(n,t)})}async function x_(n,t){jh(n),hl(n)?(n.q_.M_(t),dl(n)):n.q_.set("Unknown")}async function P_(n,t,e){if(n.q_.set("Online"),t instanceof Ch&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Us(n,r)}else if(t instanceof Ts?n.Q_.Ke(t):t instanceof Rh?n.Q_.He(t):n.Q_.We(t),!e.isEqual(G.min()))try{const r=await Fh(n.localStore);e.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Bt.EMPTY_BYTE_STRING,f.snapshotVersion)),qh(s,u);const m=new rn(f.target,u,h,f.sequenceNumber);ul(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Us(n,r)}}async function Us(n,t,e){if(!Vi(t))throw t;n.L_.add(1),await Fi(n),n.q_.set("Offline"),e||(e=()=>Fh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ro(n)})}function Hh(n,t){return t().catch(e=>Us(n,e,t))}async function io(n){const t=K(n),e=pn(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;R_(t);)try{const i=await h_(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,C_(t,i)}catch(i){await Us(t,i)}Wh(t)&&Yh(t)}function R_(n){return Qn(n)&&n.O_.length<10}function C_(n,t){n.O_.push(t);const e=pn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Wh(n){return Qn(n)&&!pn(n).n_()&&n.O_.length>0}function Yh(n){pn(n).start()}async function k_(n){pn(n).p_()}async function M_(n){const t=pn(n);for(const e of n.O_)t.m_(e.mutations)}async function D_(n,t,e){const r=n.O_.shift(),i=rl.from(r,t,e);await Hh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await io(n)}async function N_(n,t){t&&pn(n).V_&&await async function(r,i){if(function(a){return b0(a)&&a!==D.ABORTED}(i.code)){const s=r.O_.shift();pn(r).s_(),await Hh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await io(r)}}(n,t),Wh(n)&&Yh(n)}async function ku(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Qn(e);e.L_.add(3),await Fi(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ro(e)}async function L_(n,t){const e=K(n);t?(e.L_.delete(2),await ro(e)):t||(e.L_.add(2),await Fi(e),e.q_.set("Unknown"))}function Fr(n){return n.K_||(n.K_=function(e,r,i){const s=K(e);return s.w_(),new w_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:S_.bind(null,n),Ro:A_.bind(null,n),mo:x_.bind(null,n),d_:P_.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),hl(n)?dl(n):n.q_.set("Unknown")):(await n.K_.stop(),jh(n))})),n.K_}function pn(n){return n.U_||(n.U_=function(e,r,i){const s=K(e);return s.w_(),new E_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:k_.bind(null,n),mo:N_.bind(null,n),f_:M_.bind(null,n),g_:D_.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await io(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class fl{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,l=new fl(t,e,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pl(n,t){if(Be("AsyncQueue",`${t}: ${n}`),Vi(n))return new z(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class br{constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=ai(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new br(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof br)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new br;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Mu{constructor(){this.W_=new mt(q.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Y():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Mr{constructor(t,e,r,i,s,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Mr(t,e,br.emptySet(e),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class V_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class O_{constructor(){this.queries=Du(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=K(e),s=i.queries;i.queries=Du(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(D.ABORTED,"Firestore shutting down"))}}function Du(){return new Br(n=>gh(n),Xs)}async function Gh(n,t){const e=K(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new V_,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=pl(a,`Initialization of query '${dr(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&ml(e)}async function Kh(n,t){const e=K(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function B_(n,t){const e=K(n);let r=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&ml(e)}function F_(n,t,e){const r=K(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function ml(n){n.Y_.forEach(t=>{t.next()})}var Ta,Nu;(Nu=Ta||(Ta={})).ea="default",Nu.Cache="cache";class Qh{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Mr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Mr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ta.Cache}}/**
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
 */class Xh{constructor(t){this.key=t}}class Jh{constructor(t){this.key=t}}class z_{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=yh(t),this.Ra=new br(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Mu,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,m)=>{const v=i.get(f),T=Js(this.query,m)?m:null,S=!!v&&this.mutatedKeys.has(v.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let I=!1;v&&T?v.data.isEqual(T.data)?S!==x&&(r.track({type:3,doc:T}),I=!0):this.ga(v,T)||(r.track({type:2,doc:T}),I=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!v&&T?(r.track({type:0,doc:T}),I=!0):v&&!T&&(r.track({type:1,doc:v}),I=!0,(u||h)&&(l=!0)),I&&(T?(a=a.add(T),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,m)=>function(T,S){const x=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return x(T)-x(S)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Mr(this.query,t.Ra,s,a,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Jh(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Xh(r))}),e}ba(t){this.Ta=t.Ts,this.da=Z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Mr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class U_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class $_{constructor(t){this.key=t,this.va=!1}}class q_{constructor(t,e,r,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Br(l=>gh(l),Xs),this.Ma=new Map,this.xa=new Set,this.Oa=new mt(q.comparator),this.Na=new Map,this.La=new ol,this.Ba={},this.ka=new Map,this.qa=kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function j_(n,t,e=!0){const r=sf(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zh(r,t,e,!0),i}async function H_(n,t){const e=sf(n);await Zh(e,t,!0,!1)}async function Zh(n,t,e,r){const i=await f_(n.localStore,_e(t)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return r&&(l=await W_(n,t,s,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&$h(n.remoteStore,i),l}async function W_(n,t,e,r,i){n.Ka=(m,v,T)=>async function(x,I,k,M){let R=I.view.ma(k);R.ns&&(R=await Pu(x.localStore,I.query,!1).then(({documents:b})=>I.view.ma(b,R)));const N=M&&M.targetChanges.get(I.targetId),F=M&&M.targetMismatches.get(I.targetId)!=null,V=I.view.applyChanges(R,x.isPrimaryClient,N,F);return Vu(x,I.targetId,V.wa),V.snapshot}(n,m,v,T);const s=await Pu(n.localStore,t,!0),a=new z_(t,s.Ts),l=a.ma(s.documents),u=Bi.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Vu(n,e,h.wa);const f=new U_(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Y_(n,t,e){const r=K(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Xs(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ba(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&cl(r.remoteStore,i.targetId),Ia(r,i.targetId)}).catch(Li)):(Ia(r,i.targetId),await ba(r.localStore,i.targetId,!0))}async function G_(n,t){const e=K(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),cl(e.remoteStore,r.targetId))}async function K_(n,t,e){const r=nw(n);try{const i=await function(a,l){const u=K(a),h=St.now(),f=l.reduce((T,S)=>T.add(S.key),Z());let m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Fe(),x=Z();return u.cs.getEntries(T,f).next(I=>{S=I,S.forEach((k,M)=>{M.isValidDocument()||(x=x.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,S)).next(I=>{m=I;const k=[];for(const M of l){const R=y0(M,m.get(M.key).overlayedDocument);R!=null&&k.push(new gn(M.key,R,lh(R.value.mapValue),ie.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,k,l)}).next(I=>{v=I;const k=I.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(T,I.batchId,k)})}).then(()=>({batchId:v.batchId,changes:_h(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new mt(rt)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,e),await zi(r,i.changes),await io(r.remoteStore)}catch(i){const s=pl(i,"Failed to persist write");e.reject(s)}}async function tf(n,t){const e=K(n);try{const r=await u_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(st(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?st(a.va):i.removedDocuments.size>0&&(st(a.va),a.va=!1))}),await zi(e,r,t)}catch(r){await Li(r)}}function Lu(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=K(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const v of m.j_)v.Z_(l)&&(h=!0)}),h&&ml(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Q_(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let a=new mt(q.comparator);a=a.insert(s,Ht.newNoDocument(s,G.min()));const l=Z().add(s),u=new eo(G.min(),new Map,new mt(rt),a,l);await tf(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),gl(r)}else await ba(r.localStore,t,!1).then(()=>Ia(r,t,e)).catch(Li)}async function X_(n,t){const e=K(n),r=t.batch.batchId;try{const i=await c_(e.localStore,t);nf(e,r,null),ef(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zi(e,i)}catch(i){await Li(i)}}async function J_(n,t,e){const r=K(n);try{const i=await function(a,l){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(st(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,t);nf(r,t,e),ef(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zi(r,i)}catch(i){await Li(i)}}function ef(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function nf(n,t,e){const r=K(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Ia(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||rf(n,r)})}function rf(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(cl(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),gl(n))}function Vu(n,t,e){for(const r of e)r instanceof Xh?(n.La.addReference(r.key,t),Z_(n,r)):r instanceof Jh?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||rf(n,r.key)):Y()}function Z_(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+e),n.xa.add(r),gl(n))}function gl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new q(ft.fromString(t)),r=n.qa.next();n.Na.set(r,new $_(e)),n.Oa=n.Oa.insert(e,r),$h(n.remoteStore,new rn(_e(tl(e.path)),r,"TargetPurposeLimboResolution",Ga.oe))}}async function zi(n,t,e){const r=K(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(h=>{var f;if((h||e)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=ll.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,v=>L.forEach(v.$i,T=>f.persistence.referenceDelegate.addReference(m,v.targetId,T)).next(()=>L.forEach(v.Ui,T=>f.persistence.referenceDelegate.removeReference(m,v.targetId,T)))))}catch(m){if(!Vi(m))throw m;U("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const T=f.os.get(v),S=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(v,x)}}}(r.localStore,s))}async function tw(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Bh(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(D.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zi(e,r.hs)}}function ew(n,t){const e=K(n),r=e.Na.get(t);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function sf(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ew.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Q_.bind(null,t),t.Ca.d_=B_.bind(null,t.eventManager),t.Ca.$a=F_.bind(null,t.eventManager),t}function nw(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=X_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=J_.bind(null,t),t}class $s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=no(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return l_(this.persistence,new o_,t.initialUser,this.serializer)}Ga(t){return new r_(al.Zr,this.serializer)}Wa(t){return new m_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$s.provider={build:()=>new $s};class Sa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tw.bind(null,this.syncEngine),await L_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new O_}()}createDatastore(t){const e=no(t.databaseInfo.databaseId),r=function(s){return new __(s)}(t.databaseInfo);return function(s,a,l,u){return new b_(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,a,l){return new I_(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Lu(this.syncEngine,e,0),function(){return Cu.D()?new Cu:new g_}())}createSyncEngine(t,e){return function(i,s,a,l,u,h,f){const m=new q_(i,s,a,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=K(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Fi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Sa.provider={build:()=>new Sa};/**
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
 */class of{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Be("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class rw{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=pl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Go(n,t){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ou(n,t){n.asyncQueue.verifyOperationInProgress();const e=await iw(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ku(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ku(t.remoteStore,i)),n._onlineComponents=t}async function iw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;xr("Error using user provided cache. Falling back to memory cache: "+e),await Go(n,new $s)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Go(n,new $s);return n._offlineComponents}async function af(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Ou(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Ou(n,new Sa))),n._onlineComponents}function sw(n){return af(n).then(t=>t.syncEngine)}async function lf(n){const t=await af(n),e=t.eventManager;return e.onListen=j_.bind(null,t.syncEngine),e.onUnlisten=Y_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=H_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=G_.bind(null,t.syncEngine),e}function ow(n,t,e={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new of({next:v=>{f.Za(),a.enqueueAndForget(()=>Kh(s,m));const T=v.docs.has(l);!T&&v.fromCache?h.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&u&&u.source==="server"?h.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Qh(tl(l.path),f,{includeMetadataChanges:!0,_a:!0});return Gh(s,m)}(await lf(n),n.asyncQueue,t,e,r)),r.promise}function aw(n,t,e={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new of({next:v=>{f.Za(),a.enqueueAndForget(()=>Kh(s,m)),v.fromCache&&u.source==="server"?h.reject(new z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Qh(l,f,{includeMetadataChanges:!0,_a:!0});return Gh(s,m)}(await lf(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function cf(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Bu=new Map;/**
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
 */function uf(n,t,e){if(!e)throw new z(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function lw(n,t,e,r){if(t===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fu(n){if(!q.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zu(n){if(q.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function so(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Y()}function ze(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=so(n);throw new z(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function cw(n,t){if(t<=0)throw new z(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Uu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oo{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Av;switch(r.type){case"firstParty":return new Cv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Bu.get(e);r&&(U("ComponentProvider","Removing Datastore"),Bu.delete(e),r.terminate())}(this),Promise.resolve()}}function uw(n,t,e,r={}){var i;const s=(n=ze(n,oo))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=jt.MOCK_USER;else{l=Lp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new jt(h)}n._authCredentials=new xv(new ih(l,u))}}/**
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
 */class yn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new yn(this.firestore,t,this._query)}}class Zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}}class cn extends yn{constructor(t,e,r){super(t,e,tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new q(t))}withConverter(t){return new cn(this.firestore,t,this._path)}}function dw(n,t,...e){if(n=Tt(n),uf("collection","path",t),n instanceof oo){const r=ft.fromString(t,...e);return zu(r),new cn(n,null,r)}{if(!(n instanceof Zt||n instanceof cn))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return zu(r),new cn(n.firestore,null,r)}}function Tr(n,t,...e){if(n=Tt(n),arguments.length===1&&(t=sh.newId()),uf("doc","path",t),n instanceof oo){const r=ft.fromString(t,...e);return Fu(r),new Zt(n,null,new q(r))}{if(!(n instanceof Zt||n instanceof cn))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Fu(r),new Zt(n.firestore,n instanceof cn?n.converter:null,new q(r))}}/**
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
 */class $u{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zh(this,"async_queue_retry"),this.Vu=()=>{const r=Yo();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Yo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Yo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Le;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Vi(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=fl.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class zr extends oo{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new $u,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $u(t),this._firestoreClient=void 0,await t}}}function hw(n,t){const e=typeof n=="object"?n:gd(),r=typeof n=="string"?n:"(default)",i=La(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Dp("firestore");s&&uw(i,...s)}return i}function ao(n){if(n._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fw(n),n._firestoreClient}function fw(n){var t,e,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new qv(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new rw(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Dr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dr(Bt.fromBase64String(t))}catch(e){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Dr(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class lo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class yl{constructor(t){this._methodName=t}}/**
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
 */class vl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
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
 */class _l{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const pw=/^__.*__$/;class mw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new gn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Oi(t,this.data,e,this.fieldTransforms)}}class df{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new gn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class wl{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new wl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return qs(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(hf(this.Cu)&&pw.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class gw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||no(t)}Qu(t,e,r,i=!1){return new wl({Cu:t,methodName:e,qu:r,path:Vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function co(n){const t=n._freezeSettings(),e=no(n._databaseId);return new gw(n._databaseId,!!t.ignoreUndefinedProperties,e)}function El(n,t,e,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);bl("Data must be an object, but it was:",a,r);const l=ff(r,a);let u,h;if(s.merge)u=new re(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const v=Aa(t,m,e);if(!a.contains(v))throw new z(D.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);mf(f,v)||f.push(v)}u=new re(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new mw(new Xt(l),u,h)}class uo extends yl{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof uo}}function yw(n,t,e,r){const i=n.Qu(1,t,e);bl("Data must be an object, but it was:",i,r);const s=[],a=Xt.empty();Kn(r,(u,h)=>{const f=Tl(t,u,e);h=Tt(h);const m=i.Nu(f);if(h instanceof uo)s.push(f);else{const v=Ui(h,m);v!=null&&(s.push(f),a.set(f,v))}});const l=new re(s);return new df(a,l,i.fieldTransforms)}function vw(n,t,e,r,i,s){const a=n.Qu(1,t,e),l=[Aa(t,r,e)],u=[i];if(s.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(Aa(t,s[v])),u.push(s[v+1]);const h=[],f=Xt.empty();for(let v=l.length-1;v>=0;--v)if(!mf(h,l[v])){const T=l[v];let S=u[v];S=Tt(S);const x=a.Nu(T);if(S instanceof uo)h.push(T);else{const I=Ui(S,x);I!=null&&(h.push(T),f.set(T,I))}}const m=new re(h);return new df(f,m,a.fieldTransforms)}function _w(n,t,e,r=!1){return Ui(e,n.Qu(r?4:3,t))}function Ui(n,t){if(pf(n=Tt(n)))return bl("Unsupported field value:",t,n),ff(n,t);if(n instanceof yl)return function(r,i){if(!hf(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Ui(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=St.fromDate(r);return{timestampValue:zs(i.serializer,s)}}if(r instanceof St){const s=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(i.serializer,s)}}if(r instanceof vl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dr)return{bytesValue:kh(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _l)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return el(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${so(r)}`)}(n,t)}function ff(n,t){const e={};return oh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kn(n,(r,i)=>{const s=Ui(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function pf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof vl||n instanceof Dr||n instanceof Zt||n instanceof yl||n instanceof _l)}function bl(n,t,e){if(!pf(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=so(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Aa(n,t,e){if((t=Tt(t))instanceof lo)return t._internalPath;if(typeof t=="string")return Tl(n,t);throw qs("Field path arguments must be of type string or ",n,!1,void 0,e)}const ww=new RegExp("[~\\*/\\[\\]]");function Tl(n,t,e){if(t.search(ww)>=0)throw qs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new lo(...t.split("."))._internalPath}catch{throw qs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function qs(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new z(D.INVALID_ARGUMENT,l+n+u)}function mf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class gf{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ew(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ho("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ew extends gf{data(){return super.data()}}function ho(n,t){return typeof t=="string"?Tl(n,t):t instanceof lo?t._internalPath:t._delegate._internalPath}/**
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
 */function bw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}class Sl extends Il{}function mi(n,t,...e){let r=[];t instanceof Il&&r.push(t),r=r.concat(e),function(s){const a=s.filter(u=>u instanceof xl).length,l=s.filter(u=>u instanceof fo).length;if(a>1||a>0&&l>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class fo extends Sl{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new fo(t,e,r)}_apply(t){const e=this._parse(t);return yf(t._query,e),new yn(t.firestore,t.converter,ya(t._query,e))}_parse(t){const e=co(t.firestore);return function(s,a,l,u,h,f,m){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hu(m,f);const T=[];for(const S of m)T.push(ju(u,s,S));v={arrayValue:{values:T}}}else v=ju(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hu(m,f),v=_w(l,a,m,f==="in"||f==="not-in");return bt.create(h,f,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Al(n,t,e){const r=t,i=ho("where",n);return fo._create(i,r,e)}class xl extends Il{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xl(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ge.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)yf(a,u),a=ya(a,u)}(t._query,e),new yn(t.firestore,t.converter,ya(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pl extends Sl{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Pl(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Si(s,a)}(t._query,this._field,this._direction);return new yn(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Or(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function qu(n,t="asc"){const e=t,r=ho("orderBy",n);return Pl._create(r,e)}class Rl extends Sl{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Rl(t,e,r)}_apply(t){return new yn(t.firestore,t.converter,Os(t._query,this._limit,this._limitType))}}function Tw(n){return cw("limit",n),Rl._create("limit",n,"F")}function ju(n,t,e){if(typeof(e=Tt(e))=="string"){if(e==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mh(t)&&e.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!q.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return du(n,new q(r))}if(e instanceof Zt)return du(n,e._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(e)}.`)}function Hu(n,t){if(!Array.isArray(n)||n.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yf(n,t){const e=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Iw{convertValue(t,e="none"){switch(Yn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Y()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Kn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>_t(a.doubleValue));return new _l(s)}convertGeoPoint(t){return new vl(_t(t.latitude),_t(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Qa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(bi(t));default:return null}}convertTimestamp(t){const e=fn(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);st(Oh(r));const i=new Ti(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(e)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function Cl(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class ci{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vf extends gf{constructor(t,e,r,i,s,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ho("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Is extends vf{data(t={}){return super.data(t)}}class Sw{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ci(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Is(this._firestore,this._userDataWriter,r.key,r,new ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Is(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ci(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Is(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ci(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Aw(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Aw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function _f(n){n=ze(n,Zt);const t=ze(n.firestore,zr);return ow(ao(t),n._key).then(e=>Pw(t,n,e))}class wf extends Iw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function po(n){n=ze(n,yn);const t=ze(n.firestore,zr),e=ao(t),r=new wf(t);return bw(n._query),aw(e,n._query).then(i=>new Sw(t,r,n,i))}function kl(n,t,e){n=ze(n,Zt);const r=ze(n.firestore,zr),i=Cl(n.converter,t,e);return Ml(r,[El(co(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,ie.none())])}function xw(n,t){const e=ze(n.firestore,zr),r=Tr(n),i=Cl(n.converter,t);return Ml(e,[El(co(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ie.exists(!1))]).then(()=>r)}function Ml(n,t){return function(r,i){const s=new Le;return r.asyncQueue.enqueueAndForget(async()=>K_(await sw(r),i,s)),s.promise}(ao(n),t)}function Pw(n,t,e){const r=e.docs.get(t._key),i=new wf(n);return new vf(n,i,t._key,r,new ci(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class Rw{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=co(t)}set(t,e,r){this._verifyNotCommitted();const i=Ko(t,this._firestore),s=Cl(i.converter,e,r),a=El(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ie.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=Ko(t,this._firestore);let a;return a=typeof(e=Tt(e))=="string"||e instanceof lo?vw(this._dataReader,"WriteBatch.update",s._key,e,r,i):yw(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ie.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ko(t,this._firestore);return this._mutations=this._mutations.concat(new nl(e._key,ie.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ko(n,t){if((n=Tt(n)).firestore!==t)throw new z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function js(n){return ao(n=ze(n,zr)),new Rw(n,t=>Ml(n,t))}(function(t,e=!0){(function(i){Vr=i})(Nr),Sr(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new zr(new Pv(r.getProvider("auth-internal")),new Mv(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ln(ou,"4.7.3",t),ln(ou,"4.7.3","esm2017")})();const Ef={apiKey:"AIzaSyBdbve0H70D-Ch69WlaxEly7PVBFVRB5p0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:2d6f7173c8d7fab6fd9e85",measurementId:"G-80XX542QZE"};function It(){return Ef.apiKey!=="YOUR_API_KEY"}let Qo=null,se=null,Jt=null;try{It()?(Qo=md(Ef),se=Iv(Qo),Jt=hw(Qo)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const Cw=new Ce;let nn=null,gi=[];function kw(){if(!It()||!se){console.warn("Firebase not configured - auth disabled");return}hy(se,n=>{console.log("onAuthStateChanged fired:",n?n.email:"null"),nn=n,console.log("Notifying",gi.length,"listeners"),gi.forEach(t=>t(n))})}function Mw(n){return console.log("onAuthStateChange: adding listener, currentUser is:",nn&&nn.email),gi.push(n),nn&&(console.log("onAuthStateChange: immediately calling listener with user"),n(nn)),()=>{gi=gi.filter(t=>t!==n)}}function $i(){return nn}function Te(){return nn!==null}async function Dw(n,t,e=null){if(!It()||!se)throw new Error("Firebase not configured");const r=await oy(se,n,t);return e&&r.user&&await cy(r.user,{displayName:e}),r}async function Nw(n,t){if(!It()||!se)throw new Error("Firebase not configured");return ay(se,n,t)}async function Lw(){if(!It()||!se)throw new Error("Firebase not configured");console.log("Initiating Google sign-in popup...");try{const n=await Dy(se,Cw);return console.log("Google sign-in successful:",n.user.email),n}catch(n){throw console.error("signInWithPopup error:",n.code,n.message),n}}async function bf(){if(!It()||!se)throw new Error("Firebase not configured");return fy(se)}async function Vw(n){if(!It()||!se)throw new Error("Firebase not configured");return sy(se,n)}kw();function mo(n,t="settings"){const e=$i();return!e||!Jt?null:Tr(Jt,"users",e.uid,n,t)}function go(n){const t=$i();return!t||!Jt?null:dw(Jt,"users",t.uid,n)}async function Tf(){if(!It())return null;const n=mo("decision");if(!n)return null;try{const t=await _f(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading decision data:",t),null}}async function Ow(n){if(!It())return;const t=mo("decision");if(t)try{await kl(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving decision data:",e),e}}async function Dl(n={}){if(!It())return[];const t=go("history");if(!t)return[];try{let e=mi(t,qu("date",n.sortDesc?"desc":"asc"));n.taxYear&&(e=mi(t,Al("taxYear","==",n.taxYear),qu("date",n.sortDesc?"desc":"asc"))),n.limit&&(e=mi(e,Tw(n.limit)));const r=await po(e),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){return console.error("Error loading decision history:",e),[]}}async function Bw(n){if(!It())return null;const t=go("history");if(!t)return null;try{const e=mi(t,Al("date","==",n.date)),r=await po(e);if(!r.empty){const s=r.docs[0].id;return await kl(Tr(Jt,"users",$i().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await xw(t,{...n,createdAt:new Date().toISOString()})).id}catch(e){throw console.error("Error adding history record:",e),e}}async function Fw(n){if(!It())return;const t=go("history");if(t)try{const e=mi(t,Al("date","==",n)),r=await po(e),i=js(Jt);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(e){throw console.error("Error deleting history record:",e),e}}async function zw(){if(!It())return;const n=go("history");if(n)try{const t=await po(n),e=500,r=[];let i=js(Jt),s=0;t.forEach(a=>{i.delete(a.ref),s++,s>=e&&(r.push(i),i=js(Jt),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(t){throw console.error("Error clearing history:",t),t}}async function Uw(){if(!It())return null;const n=mo("stress");if(!n)return null;try{const t=await _f(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading stress data:",t),null}}async function If(n){if(!It())return;const t=mo("stress");if(t)try{await kl(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving stress data:",e),e}}async function $w(){if(!It())return;const n=$i();if(!(!n||!Jt))try{await zw();const t=js(Jt);t.delete(Tr(Jt,"users",n.uid,"decision","settings")),t.delete(Tr(Jt,"users",n.uid,"stress","settings")),t.delete(Tr(Jt,"users",n.uid,"profile","settings")),await t.commit(),console.log("All user data wiped successfully")}catch(t){throw console.error("Error wiping user data:",t),t}}async function qw(){if(!It())return!1;const n=await Tf(),t=await Dl({limit:1});return n!==null||t.length>0}let Gt=null,Fn=null;const Sf=5e3;function Ss(){return{settings:{equityMin:Qt.EQUITY_MIN,bondMin:Qt.BOND_MIN,cashTarget:Qt.CASH_TARGET,duration:Qt.DURATION_YEARS,baseSalary:Qt.BASE_SALARY,protectionFactor:Qt.PROTECTION_FACTOR,recoveryBuffer:Qt.RECOVERY_BUFFER,consecutiveLimit:Qt.CONSECUTIVE_LIMIT,startDate:null,statePension:12e3,statePensionYear:12},taxYears:{},history:[],lastModified:null,checksum:null}}function qi(){return It()&&Te()}function jw(){Gt=null,Fn=null}function Af(){return Gt&&Fn&&Date.now()-Fn<Sf?Gt:Ss()}async function Xn(){if(Gt&&Fn&&Date.now()-Fn<Sf)return Gt;if(!qi())return console.warn("Firebase not available - returning defaults"),Ss();try{const n=await Tf(),t=await Dl();if(n){const e={settings:n.settings||Ss().settings,taxYears:n.taxYears||{},history:t||[],lastModified:n.lastModified,checksum:n.checksum};return Gt=e,Fn=Date.now(),e}}catch(n){console.error("Error loading from Firebase:",n)}return Ss()}async function yo(n){if(!qi())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=Hw(n),await Ow({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),Gt=n,Fn=Date.now()}catch(t){throw console.error("Error saving to Firebase:",t),new Error("Failed to save decision data")}}function Hw(n){const t={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return od(t)}async function Jn(){return(await Xn()).settings}async function Nl(n){const t=await Xn();t.settings={...t.settings,...n},await yo(t)}function Ll(){return{pa:ne.PERSONAL_ALLOWANCE,brl:ne.BASIC_RATE_LIMIT,hrl:ne.HIGHER_RATE_LIMIT,cpi:.04,other:0,isaSavingsAllocation:0,isaSavingsUsed:0,isTaxEfficient:!0,taxEfficiencyChoice:null,grossIncomeToDate:0,startMonth:4,yearSetupComplete:!1,confirmedSalary:null}}function Ww(n){const e=Af().taxYears[n];return e||Ll()}async function vo(n){const e=(await Xn()).taxYears[n];return e||Ll()}async function _o(n,t){const e=await Xn();e.taxYears[n]={...Ww(n),...t},await yo(e)}async function Yw(n,t){const e=await Xn(),r=e.taxYears[n]||Ll();r.isaSavingsUsed=(r.isaSavingsUsed||0)+t,e.taxYears[n]=r,await yo(e)}async function Gw(n){return(await vo(n)).yearSetupComplete===!0}async function ji(){return(await Xn()).taxYears}function Kw(n={}){let e=[...Af().history];return n.taxYear&&(e=e.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(e=e.filter(r=>r.date>=n.startDate)),n.endDate&&(e=e.filter(r=>r.date<=n.endDate)),n.sortDesc?e.sort((r,i)=>i.date.localeCompare(r.date)):e.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(e=e.slice(0,n.limit)),e}async function xf(n={}){if(qi())try{return await Dl(n)}catch(t){console.error("Error loading history from Firebase:",t)}return Kw(n)}async function Qw(n){if(!qi())throw new Error("Must be logged in to save history");if(await Bw(n),Gt){const t=Gt.history.findIndex(e=>e.date===n.date);t>=0?Gt.history[t]=n:Gt.history.push(n),Gt.history.sort((e,r)=>e.date.localeCompare(r.date))}}async function Xw(n){if(!qi())throw new Error("Must be logged in to delete history");await Fw(n),Gt&&(Gt.history=Gt.history.filter(t=>t.date!==n))}async function Jw(n){const t=await Jn(),e=await ji(),r=t.statePension||0,i=t.statePensionYear||12,s=Object.keys(e).sort(),a=s.indexOf(n),l=a>=0?a:s.length,u=Math.max(0,i-l),h=l>=i;let f=0;if(h){let m=1;for(let v=0;v<l;v++){const T=s[v],S=e[T],x=(S==null?void 0:S.cpi)||.025;m*=1+x}f=r*m}return{amount:f,yearsUntil:u,isReceiving:h}}async function Zw(n){const t=gp(n);t.stdSipp=n.sippDraw-(n.boostAmount||0),await Qw(t),n.isaDraw&&n.isaDraw>0&&n.taxYear&&await Yw(n.taxYear,n.isaDraw)}function wo(n,t,e=0){const r=Ma(e);let i=n.equityStart,s=n.bondStart,a=n.cashStart,l=n.hodlEnabled?n.hodlStart!==void 0?n.hodlStart:n.hodlValue:0,u=0,h=null,f=0,m=0,v=0,T=0,S=!1,x=!1,I=null,k=0,M=-1;const R=[],N=[];let F=1;R.push({year:0,month:0,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let V=0;V<n.years*12;V++){const b=Math.floor(V/12),g=V%12,w=g>=3?b:b-1;if(w!==M&&(k=0,M=w),V>0&&V%12===0){const at=t.inflation[b]||.025;N.push(at),F*=1+at}const _=t.equity[b]||0,E=t.inflation[b]||.025,A=b>0?t.inflation[b-1]||.025:E,y=vr(n.equityMin,b,n.duration,F,!0),pt=vr(n.bondMin,b,n.duration,F,!0),X=vr(n.cashTarget,b,n.duration,F,!1),At=eE(n,b,F,N),ct=At;let gt=S?At*n.protectionMult:At;S&&(k+=ct-gt);const it=tE(E,_,A,r),ue=Math.max(.005,E+.012);if(i*=1+Math.pow(1+_,1/12)-1,s*=1+Math.pow(1+it,1/12)-1,a*=1+Math.pow(1+ue,1/12)-1,l>0){const Dt=(r()-.5)*2*.06;let zt=0;_<-.1?zt=Math.min(.15,Math.abs(_)*.4):_<-.05&&(zt=Math.abs(_)*.2);let Yt=.069+Dt+zt;Yt=Math.max(-.08,Math.min(.18,Yt)),l*=1+Math.pow(1+Yt,1/12)-1}const ut=i+s,$=y+pt;S&&ut>$+5e3&&(S=!1,T=0,m=Math.max(m,v),v=0),S&&(f++,v++);let vt=0;if(!S&&k>0&&ut>$+15e3){let at=g>=3?15-g:3-g;at<1&&(at=1);const Ft=ut-$-15e3,Dt=Math.min(k/at,Ft/at),zt=ct*.5;vt=Math.min(Dt,zt),vt>50&&(gt+=vt,k-=vt)}let ot="Growth";if(!S&&ut>=$+gt){const at=Math.max(0,i-y),Ft=Math.max(0,s-pt),Dt=at+Ft;if(Dt>0){if(i-=gt*at/Dt,s-=gt*Ft/Dt,T=0,ot="Growth",a<X){const zt=ut-$-gt;if(zt>5e3){const Yt=Math.min((X-a)*.3,zt*.5);i-=Yt*at/Dt,s-=Yt*Ft/Dt,a+=Yt}}}else a-=gt,ot="Cash"}else if(a>=gt)a-=gt,T++,ot="Cash",!n.disableProtection&&T>=n.consecutiveLimit&&(S=!0);else{const at=gt-a;a=0,s>at?(s-=at,ot="Bond"):i>at?(i-=at,ot="Equity"):l>at?(l-=at,u+=at,h===null&&(h=V),ot="HODL"):(x=!0,I=V)}if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(g===0||V===n.years*12-1||x)&&R.push({year:b+g/12,month:V,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:gt,boostAmount:vt,source:ot,inProtection:S,equityMin:y,bondMin:pt,cashMax:X}),x)break}return m=Math.max(m,v),{failed:x,years:x?I/12:n.years,failMonth:I,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,finalHodl:l,protMonths:f,maxConsec:m,hodlUsed:u,hodlUsedMonth:h,hist:R,seed:e}}function tE(n,t,e,r){let i=.15,s=.3,a=.2,l=.1,u=.1,h=.15;const f=e!==void 0?e:n,m=f>.045,v=f>.07;if(m){const R=r()>.3?1:.5;v?(i=.15+.35*R,s=.3-.2*R,h=.15-.1*R,l=.1+.05*R):(i=.15+.2*R,s=.3-.1*R,h=.15-.05*R)}m&&r()<.15&&(i=.2,s=.25,h=.12);const T=n+.005+ni(0,.03,r),S=.04-(n>.04?(n-.04)*.5:0)+ni(0,.05,r),x=.03+n*.3+ni(0,.08,r),I=n*.8+ni(0,.15,r),k=Math.max(.005,n+.005),M=t*.5+ni(0,.02,r);return i*T+s*S+a*x+l*I+u*k+h*M}function eE(n,t,e,r){n.taxMode==="frozen"?n.pa:n.pa*e;const i=n.taxMode==="frozen"?n.brl:n.brl*e,s=n.baseSalary*e;let a=n.other;for(const f of r)a*=1+Math.min(f,.04);const l=t>=n.statePensionYear?n.statePension*e:0,u=a+l;return Math.max(0,Math.min(i,s)-u)/12}function Pf(n,t=1e3){const e=Object.keys(vi).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<t;i++){const s=Ma(i*12345),a={equity:{},inflation:{}};for(let l=0;l<n.years;l++){const u=e[Math.floor(s()*e.length)];a.equity[l]=vi[u],a.inflation[l]=ka[u]||.025}r.push(wo(n,a,i))}return r}function Rf(n){const t=Object.keys(vi).map(Number).sort((i,s)=>i-s),e=Math.max(...t),r=[];for(const i of t){if(i+n.years-1>e)continue;const s={equity:{},inflation:{}};for(let l=0;l<n.years;l++)s.equity[l]=vi[i+l]||0,s.inflation[l]=ka[i+l]||.025;const a=wo(n,s,i);a.startYear=i,r.push(a)}return r}function nE(n,t){const e={equity:{},inflation:{}};for(let r=0;r<n.years;r++)e.equity[r]=t.equity[r%t.equity.length],e.inflation[r]=t.inflation[r%t.inflation.length];return wo(n,e,999)}function rE(n){const t=n.filter(e=>e.failed).length;return(n.length-t)/n.length*100}function Cf(n){const t=n.filter(l=>!l.failed),e=n.filter(l=>l.failed),r=n.map(l=>l.years).sort((l,u)=>l-u),i=t.map(l=>l.final).sort((l,u)=>l-u),s=n.map(l=>l.protMonths).sort((l,u)=>l-u),a=(l,u)=>l[Math.floor(l.length*u)]||0;return{total:n.length,successCount:t.length,failCount:e.length,successRate:rE(n),survival:{p5:a(r,.05),p10:a(r,.1),p25:a(r,.25),p50:a(r,.5),p75:a(r,.75),p90:a(r,.9),p95:a(r,.95),min:r[0],max:r[r.length-1]},finalValue:{p5:a(i,.05),p10:a(i,.1),p25:a(i,.25),p50:a(i,.5),p75:a(i,.75),p90:a(i,.9),p95:a(i,.95),min:i[0]||0,max:i[i.length-1]||0,avg:t.reduce((l,u)=>l+u.final,0)/(t.length||1)},minYears:r[0],p10Years:a(r,.1),medianYears:a(r,.5),medianFinal:a(i,.5),p10Final:a(i,.1),p90Final:a(i,.9),avgFinal:t.reduce((l,u)=>l+u.final,0)/(t.length||1),protection:{runsWithProtection:n.filter(l=>l.protMonths>0).length,pctWithProtection:n.filter(l=>l.protMonths>0).length/n.length*100,avgMonths:s.reduce((l,u)=>l+u,0)/n.length,maxMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,p50Months:a(s,.5),p90Months:a(s,.9),p95Months:a(s,.95)},runsWithProtection:n.filter(l=>l.protMonths>0).length,avgProtMonths:s.reduce((l,u)=>l+u,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,hodl:{runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,pctUsingHodl:n.filter(l=>l.hodlUsed>0).length/n.length*100,avgUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxUsed:Math.max(...n.map(l=>l.hodlUsed||0))},runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,avgHodlUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxHodlUsed:Math.max(...n.map(l=>l.hodlUsed||0)),failures:e.map(l=>({seed:l.seed,startYear:l.startYear,years:l.years,failMonth:l.failMonth,protMonths:l.protMonths}))}}let sn=null,zn=null;const kf=5e3;function Ir(){return{settings:{equityMin:Qt.EQUITY_MIN,bondMin:Qt.BOND_MIN,cashTarget:Qt.CASH_TARGET,duration:Qt.DURATION_YEARS,baseSalary:Qt.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:ne.PERSONAL_ALLOWANCE,brl:ne.BASIC_RATE_LIMIT,hrl:ne.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:Oo.PROTECTION_MULTIPLIER,consecutiveLimit:Qt.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:Oo.HODL_ENABLED,hodlValue:Oo.HODL_VALUE},lastModified:null,checksum:null}}function Vl(){return It()&&Te()}function iE(){sn=null,zn=null}function sE(){return sn&&zn&&Date.now()-zn<kf?sn:Ir()}async function Mf(){if(sn&&zn&&Date.now()-zn<kf)return sn;if(!Vl())return console.warn("Firebase not available - returning defaults"),Ir();try{const n=await Uw();if(n){const t={settings:n.settings||Ir().settings,lastModified:n.lastModified,checksum:n.checksum};return sn=lE(t),zn=Date.now(),sn}}catch(n){console.error("Error loading stress data from Firebase:",n)}return Ir()}async function oE(n){if(!Vl())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=aE(n),await If({settings:n.settings,lastModified:n.lastModified,checksum:n.checksum}),sn=n,zn=Date.now()}catch(t){throw console.error("Error saving stress data to Firebase:",t),new Error("Failed to save stress data")}}function aE(n){return od(n.settings)}function lE(n){const t={...Ir()};return n.settings&&(t.settings={...t.settings,...n.settings},n.settings.pacwMin!==void 0&&n.settings.equityMin===void 0&&(t.settings.equityMin=n.settings.pacwMin),n.settings.cgtMin!==void 0&&n.settings.bondMin===void 0&&(t.settings.bondMin=n.settings.cgtMin),n.settings.csh2Target!==void 0&&n.settings.cashTarget===void 0&&(t.settings.cashTarget=n.settings.csh2Target),t.settings.hodlEnabled===void 0&&(t.settings.hodlEnabled=!1),t.settings.hodlValue===void 0&&(t.settings.hodlValue=25e3)),t.lastModified=n.lastModified,t.checksum=n.checksum,t}function cE(){return sE().settings}async function vn(){return(await Mf()).settings}async function Ol(n){const t=await Mf();t.settings={...t.settings,...n},await oE(t)}async function uE(){if(!Vl())throw new Error("Must be logged in to reset settings");const n=Ir();await If({settings:n.settings,lastModified:new Date().toISOString()}),iE()}function Bl(n={},t=null){const e=t||cE();return{equityStart:n.equityStart??e.equityMin,bondStart:n.bondStart??e.bondMin,cashStart:n.cashStart??e.cashTarget,equityMin:e.equityMin,bondMin:e.bondMin,cashTarget:e.cashTarget,years:n.years??e.duration,duration:e.duration,baseSalary:e.baseSalary,other:e.other,statePension:e.statePension,statePensionYear:e.statePensionYear,pa:e.pa,brl:e.brl,hrl:e.hrl,taxMode:e.taxMode,protectionMult:e.protectionMult,consecutiveLimit:e.consecutiveLimit,disableProtection:e.disableProtection,hodlEnabled:e.hodlEnabled,hodlValue:e.hodlValue}}function H(n,t=null){const e=Math.abs(n),r=t!==null?t:e<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function Wu(n,t){const e=dE(n);t.innerHTML=e}function dE(n){var _,E,A,y,pt;const t=n,e=t.calculationDetails||{};let r="";const i=t.isTaxEfficientYear??t.taxEfficient,s=t.protectionInducedTaxEfficiency||!1;let a,l,u;if(s?(a="info",l="Protection-Induced Tax Efficiency",u="↑"):i?(a="success",l="Tax-Efficient Year",u="✓"):(a="warning",l="Tax-Inefficient Year",u="!"),r+=`<div class="decision-mode ${a}">
    <span class="mode-icon">${u}</span>
    <span class="mode-label">${l}</span>
    ${t.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,i&&t.yearlyIsaSavingsAllocation>0){const X=t.cumulativeIsaSavingsUsed||0,At=t.yearlyIsaSavingsAllocation,ct=Math.max(0,At-X),Mt=At>0?X/At*100:0;r+=`<div class="isa-progress-card">
      <h4>ISA/Savings Allocation</h4>
      <div class="isa-progress-bar">
        <div class="isa-progress-fill" style="width: ${Math.min(Mt,100)}%"></div>
      </div>
      <div class="isa-progress-stats">
        <span>Used: ${H(X)} of ${H(At)}</span>
        <span>Remaining: ${H(ct)}</span>
      </div>
    </div>`}if(t.alerts&&t.alerts.length>0){r+='<div class="alerts">';for(const X of t.alerts){const At=hE(X.severity);r+=`<div class="alert ${At}">${X.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${H(t.sippDraw)}</span>`,r+="</div>",t.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${H(t.isaDraw)}</span>`,r+="</div>"),t.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${H(t.other)}</span>`,r+="</div>"),t.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${H(t.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const h=t.sippDraw+t.other+t.statePension,f=h*12,m=t.pa||12570,v=t.brl||50270;let T=0;f>m&&(f<=v?T=(f-m)*.2:T=(v-m)*.2+(f-v)*.4);const S=h-T/12+t.isaDraw;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${H(S)}</span>`,r+="</div>",t.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${H(t.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${t.source.toLowerCase()}">${t.source}</div>`,t.source==="Growth"&&(t.drawFromEquity>0||t.drawFromBond>0)&&(r+='<div class="source-breakdown">',t.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${H(t.drawFromEquity)}</div>`),t.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${H(t.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const x=t.equity+t.bond+t.cash,I=t.adjEquityMin+t.adjBondMin+t.adjCashTarget,k=x-I,M=I>0?k/I*100:0;r+='<div class="fund-grid">';const R=t.equity-t.adjEquityMin;r+=Xo("Equity",t.equity,t.adjEquityMin,R);const N=t.bond-t.adjBondMin;r+=Xo("Bond",t.bond,t.adjBondMin,N);const F=t.cash-t.adjCashTarget;r+=Xo("Cash",t.cash,t.adjCashTarget,F),r+="</div>";const V=k>=0?"healthy":"warning";r+=`<div class="overall-status ${V}">`,r+=`<span>Total Surplus: ${H(k)}</span>`,r+=`<span>(${M.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-thresholds">',r+=`<div class="tax-threshold-item"><span class="label">PA:</span><span>${H(t.pa)}</span></div>`,r+=`<div class="tax-threshold-item"><span class="label">BRL:</span><span>${H(t.brl)}</span></div>`,e.taxInfo&&(r+=`<div class="tax-threshold-item"><span class="label">Headroom:</span><span class="${e.taxInfo.headroomToBRL>0?"success":"warning"}">${H(e.taxInfo.headroomToBRL)}</span></div>`),r+="</div>",r+='<div class="tax-comparison">',r+='<div class="tax-comparison-header">',r+="<div></div><div>Monthly</div><div>YTD</div><div>Projected</div>",r+="</div>";const b=((_=e.taxInfo)==null?void 0:_.monthlyTax)||T/12,g=t.taxPaidYTD||b,w=t.taxProjectedAnnual||((E=e.taxInfo)==null?void 0:E.annualTax)||T;if(r+='<div class="tax-comparison-row">',r+='<div class="label">Tax Paid</div>',r+=`<div>${H(b)}</div>`,r+=`<div>${H(g)}</div>`,r+=`<div>${H(w)}</div>`,r+="</div>",i||((A=e.taxInfo)==null?void 0:A.taxSavedAnnual)>0){const X=t.taxSavedMonthly||((y=e.taxInfo)==null?void 0:y.taxSavedMonthly)||0,At=t.taxSavedYTD||X,ct=t.taxSavedProjectedAnnual||((pt=e.taxInfo)==null?void 0:pt.taxSavedAnnual)||0;ct>0&&(r+='<div class="tax-comparison-row saved">',r+='<div class="label">Tax Saved</div>',r+=`<div class="success">-${H(X)}</div>`,r+=`<div class="success">-${H(At)}</div>`,r+=`<div class="success">-${H(ct)}</div>`,r+="</div>")}if(r+="</div>",e.taxInfo&&typeof e.taxInfo.effectiveRate=="number"&&!isNaN(e.taxInfo.effectiveRate)){const X=e.taxInfo.effectiveRate*100;r+=`<div class="effective-rate">
      <span>Effective Tax Rate:</span>
      <span class="${X<=20?"success":X<=40?"warning":"danger"}">${X.toFixed(1)}%</span>
    </div>`}else if(e.taxInfo&&e.taxInfo.annualTaxable>0&&e.taxInfo.annualTax>=0){const X=e.taxInfo.annualTax/e.taxInfo.annualTaxable*100;r+=`<div class="effective-rate">
      <span>Effective Tax Rate:</span>
      <span class="${X<=20?"success":X<=40?"warning":"danger"}">${X.toFixed(1)}%</span>
    </div>`}if(r+="</div>",t.rebalanceNeeded&&t.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const X of t.rebalanceActions)r+=`<li>${X}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${e.reason||"Standard calculation based on your settings."}</p>`,!e.hasSufficientIsa&&e.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${H(e.totalIsaNeeded)} in your ISA (${t.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(e,null,2)+"</pre>",r+="</details>",r}function Xo(n,t,e,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${H(t)}</div>
    <div class="fund-min">Min: ${H(e)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${H(r)}</div>
  </div>`}function hE(n){switch(n){case us.DANGER:return"alert-danger";case us.WARNING:return"alert-warning";case us.SUCCESS:return"alert-success";case us.INFO:default:return"alert-info"}}function fE(){return`
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
  `}async function pE(n){const t=sd(n),e=id(t),r=t.getMonth()+1;return await Gw(e)?{showWizard:!1,taxYear:e,isApril:r===4,reason:"Year setup already complete"}:{showWizard:!0,taxYear:e,isApril:r===4,reason:`Tax year ${e} has not been set up`}}function mE(n,t){return n*(1+t)}function gE(n){const{targetAnnualGross:t,brl:e,pa:r=12570,remainingMonths:i,grossIncomeToDate:s=0}=n,a=S=>S<=r?0:S<=e?(S-r)*.2:(e-r)*.2+(S-e)*.4,l=Math.max(0,e-s);if(l<=0)return{isaNeeded:0,brlExhausted:!0,remainingBrlHeadroom:0,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!1,reason:"BRL already exhausted by prior income"};if(t<=e)return{isaNeeded:0,brlExhausted:!1,remainingBrlHeadroom:l,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!0,targetAchievableAtBrl:!0,reason:"Target achievable at BRL without ISA"};const u=a(t),h=t-u,f=a(e),m=e-f,v=Math.max(0,h-m),T=v/12*i;return{isaNeeded:T,isaNeededAnnual:v,brlExhausted:!1,remainingBrlHeadroom:l,maxTaxEfficientSalary:e,reducedSalaryOption:e,canBeTaxEfficient:!0,targetAchievableAtBrl:!1,netAtTarget:h,netAtBrl:m,taxAtTarget:u,taxAtBrl:f,reason:`Need £${Math.round(T).toLocaleString()} ISA/Savings for tax efficiency`}}function yE(n,t,e){return e?{sufficient:!1,isBrlExhausted:!0,options:[{key:"reduced",label:"Reduce salary to BRL",description:"Accept lower income to stay tax-efficient"},{key:"inefficient",label:"Accept tax-inefficient year",description:"Draw full SIPP, pay 40% on excess"}]}:n>=t?{sufficient:!0,isBrlExhausted:!1,options:[]}:{sufficient:!1,isBrlExhausted:!1,shortfall:t-n,options:[{key:"increase",label:`Increase ISA to £${Math.round(t).toLocaleString()}`,description:"Provide enough ISA for tax efficiency"},{key:"reduced",label:"Reduce salary to BRL",description:"Keep ISA to grow, accept lower income"},{key:"inefficient",label:"Accept tax-inefficient year",description:"Draw full SIPP, ISA stays untouched"}]}}async function vE(n){const t=sd(n),e=id(t),i=t.getMonth()+1===4,s=wp(t),a=await Jn(),l=await vo(e),u=await ji(),h=Object.keys(u).sort(),f=h.indexOf(e)-1,m=f>=0?u[h[f]]:null,v=await Jw(e),T=(m==null?void 0:m.cpi)||.025,S=mE(a.baseSalary,T);return{taxYear:e,selectedMonth:n,isApril:i,remainingMonths:s,baseSalary:a.baseSalary,suggestedSalary:S,defaults:{pa:(m==null?void 0:m.pa)||l.pa,brl:(m==null?void 0:m.brl)||l.brl,hrl:(m==null?void 0:m.hrl)||l.hrl,cpi:T,other:(m==null?void 0:m.other)||0},statePension:v,existingConfig:l.yearSetupComplete?l:null}}function Df(n){const{targetSalary:t,brl:e,pa:r=12570,other:i=0,statePension:s=0,isaSavingsAllocation:a=0,remainingMonths:l,grossIncomeToDate:u=0,isTaxEfficient:h=!0}=n,f=A=>A<=r?0:A<=e?(A-r)*.2:(e-r)*.2+(A-e)*.4,m=i/12,v=s/12,T=m+v;let S,x;if(!h)S=t/12-T,x=0;else{const A=Math.max(0,e-u),y=Math.max(0,A/l-T);S=Math.min(t/12-T,y),x=a/l}const I=(S+T)*12,M=f(I)/12,R=S+T,N=R>0?M/R:0,F=S*N,V=m*N,b=v*N,g=S-F,w=m-V,_=v-b,E=g+w+_+x;return{sipp:{gross:S,tax:F,net:g},other:{gross:m,tax:V,net:w},statePension:{gross:v,tax:b,net:_},isa:{gross:x,tax:0,net:x},totalGross:S+m+v+x,totalTax:M,totalNet:E,mode:h?"tax-efficient":"tax-inefficient",monthlySipp:S,monthlyIsa:x,monthlyOther:m,monthlyStatePension:v,monthlyTotal:E}}function _E(n){var x,I,k,M,R,N,F,V,b,g,w;const{pa:t,brl:e,hrl:r,cpi:i,other:s,isaSavingsAllocation:a,isTaxEfficient:l,taxEfficiencyChoice:u,grossIncomeToDate:h,startMonth:f,confirmedSalary:m,remainingMonths:v,statePension:T,monthlyBreakdown:S}=n;return{pa:t,brl:e,hrl:r,cpi:i,other:s,isaSavingsAllocation:l?a:0,isaSavingsUsed:0,isTaxEfficient:l,taxEfficiencyChoice:u,grossIncomeToDate:h||0,startMonth:f||4,remainingMonths:v||12,yearSetupComplete:!0,confirmedSalary:m,statePension:T||0,expectedMonthly:S?{sipp:{gross:((x=S.sipp)==null?void 0:x.gross)||0,tax:((I=S.sipp)==null?void 0:I.tax)||0,net:((k=S.sipp)==null?void 0:k.net)||0},other:{gross:((M=S.other)==null?void 0:M.gross)||0,tax:((R=S.other)==null?void 0:R.tax)||0,net:((N=S.other)==null?void 0:N.net)||0},statePension:{gross:((F=S.statePension)==null?void 0:F.gross)||0,tax:((V=S.statePension)==null?void 0:V.tax)||0,net:((b=S.statePension)==null?void 0:b.net)||0},isa:{gross:((g=S.isa)==null?void 0:g.gross)||0,tax:0,net:((w=S.isa)==null?void 0:w.net)||0},totalGross:S.totalGross||0,totalTax:S.totalTax||0,totalNet:S.totalNet||0}:null}}let Un=null,Pi=null,le=1,Q=null,B={};async function wE(n,t,e){Un=n,Pi=e,le=1,B={},Q=await vE(t),B={pa:Q.defaults.pa,brl:Q.defaults.brl,hrl:Q.defaults.hrl,cpi:Q.defaults.cpi,other:Q.defaults.other,grossIncomeToDate:0,confirmedSalary:Q.suggestedSalary,isaSavingsAllocation:0,isTaxEfficient:!0,taxEfficiencyChoice:null},yi()}async function EE(n){return await pE(n)}function yi(){if(!Un||!Q)return;const n=Q.isApril?6:7;Un.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Tax Year ${Q.taxYear} Setup</div>
        <div class="wizard-subtitle">
          ${Q.isApril?"Setting up for the full tax year":`Starting in ${Fl(Q.selectedMonth)} - ${Q.remainingMonths} months remaining`}
        </div>

        <div class="wizard-progress">
          ${IE(n,le)}
        </div>

        ${bE()}
      </div>
    </div>
  `,SE()}function bE(){if(Q.isApril,Q.isApril)switch(le){case 1:return Yu();case 2:return Gu();case 3:return Ku();case 4:return Qu();case 5:return Xu();case 6:return Ju();default:return""}else switch(le){case 1:return Yu();case 2:return TE();case 3:return Gu();case 4:return Ku();case 5:return Qu();case 6:return Xu();case 7:return Ju();default:return""}}function Yu(){return`
    <div class="wizard-step">
      <div class="wizard-step-title">Tax Thresholds for ${Q.taxYear}</div>
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
  `}function TE(){const n=Fl(Q.selectedMonth),t=RE(Q.selectedMonth);return`
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
  `}function Gu(){const n=B.cpi!==void 0?B.cpi:Q.defaults.cpi,t=(n*100).toFixed(1),e=Q.baseSalary,r=Math.round(e*(1+n));return`
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
  `}function Ku(){const n=Q.statePension,t=n.isReceiving?`<span style="color: var(--success);">Receiving £${Math.round(n.amount).toLocaleString()}/year</span>`:`<span style="color: var(--text-muted);">${n.yearsUntil} years until state pension</span>`;return`
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
  `}function Qu(){Hi();const n=gE({targetAnnualGross:B.confirmedSalary,brl:B.brl,pa:B.pa,other:B.other,statePension:Q.statePension.amount,remainingMonths:Q.remainingMonths,grossIncomeToDate:B.grossIncomeToDate});return B._isaCalc=n,n.brlExhausted?`
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
        <p>To be tax-efficient for the remaining <strong>${Q.remainingMonths} months</strong>, you need:</p>
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
  `}function Xu(){Hi();const n=B._isaCalc,t=yE(B.isaSavingsAllocation,(n==null?void 0:n.isaNeeded)||0,(n==null?void 0:n.brlExhausted)||!1);if(t.sufficient&&!t.isBrlExhausted)return B.isTaxEfficient=!0,B.taxEfficiencyChoice="efficient",setTimeout(()=>{le++,yi()},0),`
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
  `}function Ju(){Hi();const n=Df({targetSalary:B.confirmedSalary,brl:B.brl,pa:B.pa,other:B.other,statePension:Q.statePension.amount,isaSavingsAllocation:B.isaSavingsAllocation,remainingMonths:Q.remainingMonths,grossIncomeToDate:B.grossIncomeToDate,isTaxEfficient:B.isTaxEfficient}),t=B.isTaxEfficient?"Tax-Efficient":"Tax-Inefficient",e=B.isTaxEfficient?"success":"warning",r=i=>`£${Math.round(i).toLocaleString()}`;return`
    <div class="wizard-step">
      <div class="wizard-step-title">Confirm Tax Year Setup</div>

      <div class="wizard-summary">
        <div class="wizard-summary-row">
          <span>Tax Year:</span>
          <span>${Q.taxYear}</span>
        </div>
        <div class="wizard-summary-row">
          <span>Starting Month:</span>
          <span>${Fl(Q.selectedMonth)}</span>
        </div>
        <div class="wizard-summary-row">
          <span>Remaining Months:</span>
          <span>${Q.remainingMonths}</span>
        </div>
        ${B.grossIncomeToDate>0?`
          <div class="wizard-summary-row">
            <span>Income to Date:</span>
            <span>${r(B.grossIncomeToDate)}</span>
          </div>
        `:""}
        <div class="wizard-summary-row">
          <span>Target Salary:</span>
          <span>${r(B.confirmedSalary)}/year</span>
        </div>
        <div class="wizard-summary-row">
          <span>Tax Mode:</span>
          <span class="${e}">${t}</span>
        </div>
        <div class="wizard-summary-row">
          <span>ISA Allocation:</span>
          <span>${r(B.isaSavingsAllocation)}</span>
        </div>
      </div>

      <div class="wizard-info-box" style="margin-top: 16px;">
        <strong>Expected Monthly Take-Home:</strong>
        <table style="width: 100%; margin-top: 12px; font-size: 13px;">
          <thead>
            <tr style="text-align: left; color: var(--text-muted);">
              <th style="padding: 4px 0;">Source</th>
              <th style="padding: 4px 0; text-align: right;">Gross</th>
              <th style="padding: 4px 0; text-align: right;">Tax</th>
              <th style="padding: 4px 0; text-align: right;">Net</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 4px 0;">SIPP</td>
              <td style="padding: 4px 0; text-align: right;">${r(n.sipp.gross)}</td>
              <td style="padding: 4px 0; text-align: right; color: var(--danger);">-${r(n.sipp.tax)}</td>
              <td style="padding: 4px 0; text-align: right;">${r(n.sipp.net)}</td>
            </tr>
            ${n.other.gross>0?`
              <tr>
                <td style="padding: 4px 0;">Other</td>
                <td style="padding: 4px 0; text-align: right;">${r(n.other.gross)}</td>
                <td style="padding: 4px 0; text-align: right; color: var(--danger);">-${r(n.other.tax)}</td>
                <td style="padding: 4px 0; text-align: right;">${r(n.other.net)}</td>
              </tr>
            `:""}
            ${n.statePension.gross>0?`
              <tr>
                <td style="padding: 4px 0;">State Pension</td>
                <td style="padding: 4px 0; text-align: right;">${r(n.statePension.gross)}</td>
                <td style="padding: 4px 0; text-align: right; color: var(--danger);">-${r(n.statePension.tax)}</td>
                <td style="padding: 4px 0; text-align: right;">${r(n.statePension.net)}</td>
              </tr>
            `:""}
            ${n.isa.net>0?`
              <tr>
                <td style="padding: 4px 0;">ISA <span style="color: var(--success);">(tax-free)</span></td>
                <td style="padding: 4px 0; text-align: right;">${r(n.isa.gross)}</td>
                <td style="padding: 4px 0; text-align: right; color: var(--success);">£0</td>
                <td style="padding: 4px 0; text-align: right;">${r(n.isa.net)}</td>
              </tr>
            `:""}
          </tbody>
          <tfoot>
            <tr style="border-top: 1px solid var(--border); font-weight: bold;">
              <td style="padding: 8px 0;">Total</td>
              <td style="padding: 8px 0; text-align: right;">${r(n.totalGross)}</td>
              <td style="padding: 8px 0; text-align: right; color: var(--danger);">-${r(n.totalTax)}</td>
              <td style="padding: 8px 0; text-align: right; color: var(--success);">${r(n.totalNet)}</td>
            </tr>
          </tfoot>
        </table>
        <p style="margin-top: 12px; font-size: 14px; color: var(--text);">
          <strong>You'll receive ${r(n.totalNet)}/month</strong> in your bank
        </p>
      </div>

      <div class="wizard-buttons">
        <button class="wizard-btn secondary" data-action="back">Back</button>
        <button class="wizard-btn primary" data-action="finish">Confirm & Save</button>
      </div>
    </div>
  `}function IE(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function SE(){Un.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>AE(t.dataset.action))}),window._updateWizardSalary=function(){const t=document.getElementById("wizCPI"),e=document.getElementById("wizSalary"),r=document.getElementById("cpiDisplay"),i=document.getElementById("suggestedSalaryDisplay");if(t&&e&&r&&i){const s=parseFloat(t.value)||0,a=s/100,l=Q.baseSalary,u=Math.round(l*(1+a));r.textContent=s.toFixed(1),i.textContent=u.toLocaleString(),e.value=u,B.cpi=a,B.confirmedSalary=u}}}function AE(n){Hi();const t=Q.isApril?6:7;switch(n){case"cancel":Nf(),Pi&&Pi({completed:!1,cancelled:!0});break;case"next":le<t&&(le++,yi());break;case"back":le>1&&(le--,yi());break;case"apply-choice":xE(),le++,yi();break;case"finish":PE();break}}function xE(){var t;const n=(t=document.querySelector('input[name="taxChoice"]:checked'))==null?void 0:t.value;switch(B.taxEfficiencyChoice=n,n){case"increase":B.isaSavingsAllocation=B._isaCalc.isaNeeded,B.isTaxEfficient=!0;break;case"reduced":B.confirmedSalary=B.brl,B.isaSavingsAllocation=0,B.isTaxEfficient=!0;break;case"inefficient":B.isaSavingsAllocation=0,B.isTaxEfficient=!1;break}}function Hi(){const n=document.getElementById("wizPA");n&&(B.pa=parseFloat(n.value)||12570);const t=document.getElementById("wizBRL");t&&(B.brl=parseFloat(t.value)||50270);const e=document.getElementById("wizHRL");e&&(B.hrl=parseFloat(e.value)||125140);const r=document.getElementById("wizCPI");r&&(B.cpi=(parseFloat(r.value)||4)/100);const i=document.getElementById("wizSalary");i&&(B.confirmedSalary=parseFloat(i.value)||3e4);const s=document.getElementById("wizOther");s&&(B.other=parseFloat(s.value)||0);const a=document.getElementById("wizISA");a&&(B.isaSavingsAllocation=parseFloat(a.value)||0);const l=document.getElementById("wizIncomeToDate");l&&(B.grossIncomeToDate=parseFloat(l.value)||0)}async function PE(){Hi();const n=Df({targetSalary:B.confirmedSalary,brl:B.brl,pa:B.pa,other:B.other,statePension:Q.statePension.amount,isaSavingsAllocation:B.isaSavingsAllocation,remainingMonths:Q.remainingMonths,grossIncomeToDate:B.grossIncomeToDate,isTaxEfficient:B.isTaxEfficient}),t=_E({pa:B.pa,brl:B.brl,hrl:B.hrl,cpi:B.cpi,other:B.other,isaSavingsAllocation:B.isaSavingsAllocation,isTaxEfficient:B.isTaxEfficient,taxEfficiencyChoice:B.taxEfficiencyChoice,grossIncomeToDate:B.grossIncomeToDate,startMonth:parseInt(Q.selectedMonth.split("-")[1]),confirmedSalary:B.confirmedSalary,remainingMonths:Q.remainingMonths,statePension:Q.statePension.amount,monthlyBreakdown:n});console.log(`Tax Year Wizard: Saving config for ${Q.taxYear}`,t);try{await _o(Q.taxYear,t),console.log(`Tax Year Wizard: Successfully saved config for ${Q.taxYear}`)}catch(e){console.error(`Tax Year Wizard: Failed to save config for ${Q.taxYear}`,e),alert(`Error saving tax year configuration: ${e.message}`);return}Nf(),Pi&&Pi({completed:!0,taxYear:Q.taxYear,config:t,wizardInputs:B})}function Nf(){Un&&(Un.innerHTML="",Un.style.display="none")}function Fl(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1).toLocaleString("default",{month:"long",year:"numeric"})}function RE(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-2,1).toLocaleString("default",{month:"long"})}function CE(){return`
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
  `}function kE(n={},t=null){const e=Bl(n,t),r=Pf(e),i=Cf(r);return{results:r,stats:i,config:e}}function ME(n={},t=null){const e=Bl(n,t),r=Rf(e),i=Cf(r);return{results:r,stats:i,config:e}}function DE(n={}){const t=Bl(n),e={};for(const[r,i]of Object.entries(yp))e[r]={...i,result:nE(t,i)};return e}let Ee=null,Jo=null,pr=!1;function NE(n,t){console.log("initAuthScreen: initializing"),Ee=n,Jo=t,pr=!1,Mw(e=>{console.log("AuthScreen: auth state change received:",e?e.email:"null","processed:",pr),e&&Jo&&!pr?(console.log("AuthScreen: calling onAuthSuccessCallback"),pr=!0,Jo(e)):e?console.log("AuthScreen: skipping callback, already processed or no callback"):(pr=!1,console.log("AuthScreen: user signed out, reset authProcessed"))}),Lf(),console.log("initAuthScreen: complete")}function Lf(){if(Ee){if(!It()){Ee.innerHTML=`
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
  `,LE()}}function LE(){const n=Ee.querySelectorAll(".auth-screen-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),s.classList.add("active");const a=document.getElementById("signinForm"),l=document.getElementById("signupForm");s.dataset.tab==="signin"?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block"),Wi()})}),document.getElementById("signinForm").addEventListener("submit",VE),document.getElementById("signupForm").addEventListener("submit",OE),document.getElementById("forgotPasswordBtn").addEventListener("click",BE),document.getElementById("googleSigninBtn").addEventListener("click",FE)}function un(n){const t=document.getElementById("authScreenError");t&&(t.textContent=n,t.style.display="block")}function Wi(){const n=document.getElementById("authScreenError");n&&(n.style.display="none")}async function VE(n){n.preventDefault(),Wi();const t=document.getElementById("signinEmail").value.trim(),e=document.getElementById("signinPassword").value;if(!t||!e){un("Please enter email and password");return}try{await Nw(t,e)}catch(r){console.error("Sign in error:",r),un(Eo(r.code))}}async function OE(n){n.preventDefault(),Wi();const t=document.getElementById("signupName").value.trim(),e=document.getElementById("signupEmail").value.trim(),r=document.getElementById("signupPassword").value;if(!t||!e||!r){un("Please fill in all fields");return}if(r.length<6){un("Password must be at least 6 characters");return}try{await Dw(e,r,t)}catch(i){console.error("Sign up error:",i),un(Eo(i.code))}}async function BE(){Wi();const n=document.getElementById("signinEmail").value.trim();if(!n){un("Please enter your email address first");return}try{await Vw(n),alert("Password reset email sent. Check your inbox.")}catch(t){console.error("Reset password error:",t),un(Eo(t.code))}}async function FE(){Wi();try{await Lw()}catch(n){console.error("Google sign in error:",n),un(Eo(n.code))}}function Eo(n){return{"auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email","auth/weak-password":"Password is too weak","auth/operation-not-allowed":"Sign in method not enabled","auth/popup-closed-by-user":"Sign in cancelled","auth/popup-blocked":"Sign in popup was blocked","auth/too-many-requests":"Too many attempts. Please try again later.","auth/invalid-credential":"Invalid email or password"}[n]||"An error occurred. Please try again."}function xa(){console.log("hideAuthScreen: hiding auth screen, element=",!!Ee),Ee&&(Ee.style.display="none",console.log("hideAuthScreen: set display to none"))}function Vf(){pr=!1,Ee&&(Ee.style.display="block",Lf())}function zE(){return`
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
  `}let mn=null,Pa=null,j={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35},ye="intro",Ct=1;function UE(){ye="intro",Ct=1,j={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35}}function Ra(n,t){mn=n,Pa=t,UE(),Je()}function Je(){mn&&(ye==="intro"?$E():ye==="stress"?HE():ye==="decision"&&YE())}function $E(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Welcome to Pension Planner</div>
        <div class="wizard-subtitle">A tool to help you plan and manage your SIPP pension drawdown</div>

        <div class="wizard-progress">
          ${zl(2,Ct)}
        </div>

        ${Ct===1?qE():jE()}
      </div>
    </div>
  `,Ul()}function qE(){return`
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
  `}function jE(){return`
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
  `}function HE(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Stress Tester Setup</div>
        <div class="wizard-subtitle">Let's set up your pension simulation in a few simple steps.</div>

        <div class="wizard-progress">
          ${zl(6,Ct)}
        </div>

        ${WE(Ct)}
      </div>
    </div>
  `,Ul()}function WE(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            Think of this as your "salary" in retirement. This is the total amount before tax that you want to receive each year.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizBaseSalary" value="${j.baseSalary}">
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
            <input type="number" id="wizOther" value="${j.otherIncome}">
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
            <input type="number" id="wizStatePension" value="${j.statePension}">
            <span class="wizard-unit">per year</span>
          </div>
          <div class="wizard-input">
            <span class="wizard-unit">Starting in year</span>
            <input type="number" id="wizStatePensionYear" value="${j.statePensionYear}" style="max-width: 80px;">
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
                <input type="number" id="wizEquityMin" value="${j.equityMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds (Medium Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizBondMin" value="${j.bondMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash (Low Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizCashTarget" value="${j.cashTarget}">
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
            <input type="number" id="wizDuration" value="${j.duration}" style="max-width: 100px;">
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
              <option value="inflates" ${j.taxMode==="inflates"?"selected":""}>Standard (rise with inflation)</option>
              <option value="frozen" ${j.taxMode==="frozen"?"selected":""}>Frozen (stay at current levels)</option>
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
      `;default:return""}}function YE(){mn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Decision Tool Setup</div>
        <div class="wizard-subtitle">Now let's set up the tool you'll use each month once you're retired.</div>

        <div class="wizard-progress">
          ${zl(4,Ct)}
        </div>

        ${GE(Ct)}
      </div>
    </div>
  `,Ul()}function GE(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            This is your target "salary" from your pension. The tool will calculate how much to withdraw each month.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizDBaseSalary" value="${j.decisionSalary}">
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
                <input type="number" id="wizDEquityMin" value="${j.decisionEquity}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDBondMin" value="${j.decisionBond}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDCashTarget" value="${j.decisionCash}">
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
            <input type="number" id="wizDDuration" value="${j.decisionDuration}" style="max-width: 100px;">
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
      `;default:return""}}function zl(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function Ul(){mn.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>KE(t.dataset.action))})}function KE(n){switch(Of(),n){case"skip-all":Zo();break;case"next":ye==="intro"?Ct<2&&(Ct++,Je()):ye==="stress"?Ct<6&&(Ct++,Je()):ye==="decision"&&Ct<4&&(Ct++,Je());break;case"back":Ct>1&&(Ct--,Je());break;case"start-stress":ye="stress",Ct=1,Je();break;case"skip-stress":ye="decision",Ct=1,j.decisionSalary=j.baseSalary,j.decisionEquity=j.equityMin,j.decisionBond=j.bondMin,j.decisionCash=j.cashTarget,j.decisionDuration=j.duration,Je();break;case"finish-stress":ye="decision",Ct=1,j.decisionSalary=j.baseSalary,j.decisionEquity=j.equityMin,j.decisionBond=j.bondMin,j.decisionCash=j.cashTarget,j.decisionDuration=j.duration,Je();break;case"skip-decision":Zo();break;case"finish":Zo();break}}function Of(){const n=document.getElementById("wizBaseSalary");n&&(j.baseSalary=parseFloat(n.value)||3e4);const t=document.getElementById("wizOther");t&&(j.otherIncome=parseFloat(t.value)||0);const e=document.getElementById("wizStatePension");e&&(j.statePension=parseFloat(e.value)||12e3);const r=document.getElementById("wizStatePensionYear");r&&(j.statePensionYear=parseInt(r.value)||12);const i=document.getElementById("wizEquityMin");i&&(j.equityMin=parseFloat(i.value)||25e4);const s=document.getElementById("wizBondMin");s&&(j.bondMin=parseFloat(s.value)||2e5);const a=document.getElementById("wizCashTarget");a&&(j.cashTarget=parseFloat(a.value)||5e4);const l=document.getElementById("wizDuration");l&&(j.duration=parseInt(l.value)||35);const u=document.getElementById("wizTaxMode");u&&(j.taxMode=u.value);const h=document.getElementById("wizDBaseSalary");h&&(j.decisionSalary=parseFloat(h.value)||3e4);const f=document.getElementById("wizDEquityMin");f&&(j.decisionEquity=parseFloat(f.value)||25e4);const m=document.getElementById("wizDBondMin");m&&(j.decisionBond=parseFloat(m.value)||2e5);const v=document.getElementById("wizDCashTarget");v&&(j.decisionCash=parseFloat(v.value)||5e4);const T=document.getElementById("wizDDuration");T&&(j.decisionDuration=parseInt(T.value)||35)}function Zo(){Of(),Pa&&Pa(j)}function QE(){mn&&(mn.style.display="none")}function XE(){return`
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
  `}function bo(){const t=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()==="#0d1117"||document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches;return{primary:"#f0c674",success:"#2ea043",warning:"#e1b12c",danger:"#f85149",muted:"#8b8b9b",grid:"rgba(255,255,255,0.1)",bg:t?"rgba(15,15,26,1)":"#ffffff",text:t?"#c9d1d9":"#1f2937",cardBg:t?"#21262d":"#ffffff",cone:"rgba(240,198,116,0.15)",coneMid:"rgba(240,198,116,0.2)",coneInner:"rgba(240,198,116,0.35)",coneBorder:"rgba(240,198,116,0.4)",trajectory:"rgba(46,160,67,0.25)",trajectoryFailed:"rgba(248,81,73,0.8)",trajectoryHover:"#5fdd7b",trajectoryFailedHover:"#ff6b6b",glidepath:"#7eb8da",zeroLine:"#f85149"}}const Gn=new Map;let ur=-1;function Zu(n,t,e,r,i,s){const a=i-e,l=s-r,u=a*a+l*l;if(u===0)return Math.sqrt((n-e)*(n-e)+(t-r)*(t-r));const h=Math.max(0,Math.min(1,((n-e)*a+(t-r)*l)/u)),f=e+h*a,m=r+h*l;return Math.sqrt((n-f)*(n-f)+(t-m)*(t-m))}function JE(n,t,e={}){const r=bo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=e.years||35,m={};for(let I=0;I<=f;I++)m[I]=[];t.forEach(I=>{I.hist.forEach(k=>{const M=Math.floor(k.year);m[M]!==void 0&&m[M].push(k.total)})});const v=[];for(let I=0;I<=f;I++){const k=m[I].sort((R,N)=>R-N);if(k.length===0)continue;const M=R=>k[Math.floor(k.length*R)]||0;v.push({year:I,p5:M(.05),p10:M(.1),p25:M(.25),p50:M(.5),p75:M(.75),p90:M(.9),p95:M(.95)})}if(v.length===0)return;const T=Math.max(...v.map(I=>I.p90))*1.15,S=I=>l.left+I/f*u,x=I=>a-l.bottom-I/T*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let I=0;I<=5;I++){const k=l.top+I/5*h;i.beginPath(),i.moveTo(l.left,k),i.lineTo(s-l.right,k),i.stroke()}i.fillStyle=r.cone,i.beginPath(),v.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,x(I.p95)):i.lineTo(M,x(I.p95))});for(let I=v.length-1;I>=0;I--)i.lineTo(S(v[I].year),x(v[I].p5));i.closePath(),i.fill(),i.fillStyle=r.coneMid,i.beginPath(),v.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,x(I.p90)):i.lineTo(M,x(I.p90))});for(let I=v.length-1;I>=0;I--)i.lineTo(S(v[I].year),x(v[I].p10));i.closePath(),i.fill(),i.fillStyle=r.coneInner,i.beginPath(),v.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,x(I.p75)):i.lineTo(M,x(I.p75))});for(let I=v.length-1;I>=0;I--)i.lineTo(S(v[I].year),x(v[I].p25));i.closePath(),i.fill(),e.glide&&e.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=2,i.setLineDash([6,3]),i.beginPath(),e.glide.forEach((I,k)=>{const M=S(I.year),R=x(I.min);k===0?i.moveTo(M,R):i.lineTo(M,R)}),i.stroke(),i.setLineDash([])),i.strokeStyle=r.primary,i.lineWidth=3,i.beginPath(),v.forEach((I,k)=>{const M=S(I.year),R=x(I.p50);k===0?i.moveTo(M,R):i.lineTo(M,R)}),i.stroke(),i.strokeStyle="rgba(248,81,73,0.6)",i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),v.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,x(I.p10)):i.lineTo(M,x(I.p10))}),i.stroke(),i.setLineDash([]),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,x(0)),i.lineTo(s-l.right,x(0)),i.stroke(),i.setLineDash([]),i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let I=0;I<=5;I++){const k=T*(1-I/5);i.fillText(ae(k),l.left-10,l.top+I/5*h+4)}i.textAlign="center";for(let I=0;I<=f;I+=5)i.fillText(`Yr ${I}`,S(I),a-l.bottom+20);Gn.set(n.id,{percentiles:v,xScale:S,yScale:x,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:T,type:"cone"}),rb(n)}function ZE(n,t,e={}){const r=bo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=e.years||35,m=e.startValue||1e6,v=t.slice(0,100),T=v.filter(R=>R.failed),S=v.filter(R=>!R.failed);let x;if(T.length>0)x=m*2;else{const R=S.map(F=>F.final).sort((F,V)=>F-V),N=R[Math.floor(R.length*.5)]||m;x=Math.max(N*1.3,m*1.5)}const I=R=>l.left+R/f*u,k=R=>a-l.bottom-Math.min(R,x)/x*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let R=0;R<=5;R++){const N=l.top+R/5*h;i.beginPath(),i.moveTo(l.left,N),i.lineTo(s-l.right,N),i.stroke()}i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let R=0;R<=5;R++){const N=x*(1-R/5);i.fillText(ae(N),l.left-10,l.top+R/5*h+4)}i.textAlign="center";for(let R=0;R<=f;R+=5)i.fillText(`Yr ${R}`,I(R),a-l.bottom+20);const M=[];e.glide&&e.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=3,i.setLineDash([8,4]),i.beginPath(),e.glide.forEach((R,N)=>{const F=I(R.year),V=k(R.min);N===0?i.moveTo(F,V):i.lineTo(F,V)}),i.stroke(),i.setLineDash([])),S.forEach((R,N)=>{const F=R.hist.map(V=>({x:I(V.year),y:k(V.total)}));M.push({run:R,pts:F,failed:!1,idx:N}),i.strokeStyle=r.trajectory,i.lineWidth=.5,i.beginPath(),F.forEach((V,b)=>{b===0?i.moveTo(V.x,V.y):i.lineTo(V.x,V.y)}),i.stroke()}),T.forEach((R,N)=>{const F=R.hist.map(V=>({x:I(V.year),y:k(V.total)}));M.push({run:R,pts:F,failed:!0,idx:S.length+N}),i.strokeStyle=r.trajectoryFailed,i.lineWidth=2,i.beginPath(),F.forEach((V,b)=>{b===0?i.moveTo(V.x,V.y):i.lineTo(V.x,V.y)}),i.stroke()}),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,k(0)),i.lineTo(s-l.right,k(0)),i.stroke(),i.setLineDash([]),Gn.set(n.id,{results:v,paths:M,xScale:I,yScale:k,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:x,glide:e.glide,type:"trajectory"}),ib(n,r)}function tb(n,t,e={}){const r=bo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:30,right:20,bottom:55,left:60},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=t.map(R=>R.protMonths),m=f.length,v=Math.max(...f),T=Math.max(1,Math.ceil(v/15)),S={};f.forEach(R=>{const N=Math.floor(R/T)*T;S[N]=(S[N]||0)+1});const x=Object.keys(S).map(Number).sort((R,N)=>R-N),I=Math.max(...Object.values(S)),k=u/(x.length||1),M=[];i.strokeStyle=r.grid,i.lineWidth=1,i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="right";for(let R=0;R<=4;R++){const N=l.top+R/4*h;i.beginPath(),i.moveTo(l.left,N),i.lineTo(s-l.right,N),i.stroke();const F=Math.round(I*(1-R/4));i.fillText(`${F} runs`,l.left-5,N+4)}x.forEach((R,N)=>{const F=S[R],V=F/I*h,b=l.left+N*k+2,g=a-l.bottom-V,w=k-4;i.fillStyle=R===0?r.success:r.warning,i.fillRect(b,g,w,V),M.push({x:b,y:g,w,h:V,months:R,monthsEnd:R+T-1,count:F,pct:(F/m*100).toFixed(1)})}),i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="center",x.forEach((R,N)=>{if(N%2===0||x.length<12){const F=T>1?`${R}-${R+T-1}`:R.toString();i.fillText(F,l.left+N*k+k/2,a-l.bottom+15)}}),i.fillText("Protection Months",s/2,a-5),i.save(),i.translate(12,a/2),i.rotate(-Math.PI/2),i.textAlign="center",i.fillText("Number of Runs",0,0),i.restore(),Gn.set(n.id,{bars:M,totalRuns:m,type:"histogram"}),sb(n)}function eb(n,t,e={}){const r=bo(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:180,bottom:60,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=Object.keys(t),m=e.years||35;let v=0;f.forEach(I=>{const k=t[I].result;k&&k.hist&&k.hist.forEach(M=>{M.total>v&&(v=M.total)})}),v*=1.1;const T=I=>l.left+I/m*u,S=I=>l.top+h-I/v*h;nb(i,l,u,h,m,v,e.title||"Scenario Comparison",r);const x=["#6366f1","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#ec4899","#84cc16"];f.forEach((I,k)=>{const M=t[I].result;if(!M||!M.hist)return;i.beginPath(),i.strokeStyle=x[k%x.length],i.lineWidth=2.5,M.hist.forEach((N,F)=>{const V=T(N.year),b=S(N.total);F===0?i.moveTo(V,b):i.lineTo(V,b)}),i.stroke();const R=l.top+15+k*24;i.fillStyle=x[k%x.length],i.fillRect(s-l.right+15,R,20,4),i.font="11px system-ui, sans-serif",i.fillStyle=r.text,i.textAlign="left",i.fillText(t[I].name||I,s-l.right+40,R+5),M.final/1e3,i.fillStyle=r.muted,i.fillText(`${ae(M.final)}`,s-l.right+40,R+18)})}function nb(n,t,e,r,i,s,a,l){n.font="bold 14px system-ui, sans-serif",n.fillStyle=l.text,n.textAlign="center",n.fillText(a,t.left+e/2,t.top-20),n.strokeStyle=l.grid,n.lineWidth=1;for(let u=0;u<=5;u++){const h=t.top+r*u/5;n.beginPath(),n.moveTo(t.left,h),n.lineTo(t.left+e,h),n.stroke();const f=s*(5-u)/5;n.font="11px system-ui, sans-serif",n.fillStyle=l.muted,n.textAlign="right",n.fillText(ae(f),t.left-10,h+4)}for(let u=0;u<=i;u+=5){const h=t.left+u/i*e;n.beginPath(),n.moveTo(h,t.top),n.lineTo(h,t.top+r),n.stroke(),n.textAlign="center",n.fillText(`Y${u}`,h,t.top+r+20)}n.font="12px system-ui, sans-serif",n.textAlign="center",n.fillText("Years",t.left+e/2,t.top+r+45),n.save(),n.translate(20,t.top+r/2),n.rotate(-Math.PI/2),n.fillText("Fund Value",0,0),n.restore()}function ae(n){return n>=1e6?`£${(n/1e6).toFixed(1)}M`:n>=1e3?`£${(n/1e3).toFixed(0)}k`:`£${n.toFixed(0)}`}function rb(n,t){const e=n._coneHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Gn.get(n.id);if(!s||s.type!=="cone")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=(i.clientX-a.left)*l,{percentiles:h,padding:f,chartWidth:m,years:v}=s,T=(u-f.left)/m*v,S=Math.round(T);if(S<0||S>v){dn();return}const x=h.find(k=>k.year===S);if(!x){dn();return}const I=`
      <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
        <strong style="color:#f0c674;">Year ${S}</strong>
      </div>
      <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
        <span style="color:#8b8b9b;">95th percentile:</span><span>${ae(x.p95)}</span>
        <span style="color:#8b8b9b;">75th percentile:</span><span>${ae(x.p75)}</span>
        <span style="color:#8b8b9b;">Median (50th):</span><span style="color:#f0c674;font-weight:bold;">${ae(x.p50)}</span>
        <span style="color:#8b8b9b;">25th percentile:</span><span>${ae(x.p25)}</span>
        <span style="color:#8b8b9b;">10th percentile:</span><span style="color:#f85149;">${ae(x.p10)}</span>
        <span style="color:#8b8b9b;">5th percentile:</span><span>${ae(x.p5)}</span>
      </div>
    `;$l(i.clientX,i.clientY,I)};n._coneHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",dn)}function ib(n,t){const e=n._trajHoverListener;e&&n.removeEventListener("mousemove",e);const r=n._trajLeaveListener;r&&n.removeEventListener("mouseleave",r);const i=a=>{const l=Gn.get(n.id);if(!l||l.type!=="trajectory")return;const u=n.getBoundingClientRect(),h=n.width/u.width,f=n.height/u.height,m=(a.clientX-u.left)*h,v=(a.clientY-u.top)*f,{paths:T,padding:S,chartWidth:x,chartHeight:I}=l;if(m<S.left||m>S.left+x||v<S.top||v>S.top+I){dn(),ur!==-1&&(ur=-1,ta(n,l,t,null));return}let k=null,M=12*h;T.filter(N=>N.failed).forEach(N=>{for(let F=0;F<N.pts.length-1;F++){const V=Zu(m,v,N.pts[F].x,N.pts[F].y,N.pts[F+1].x,N.pts[F+1].y);V<M&&(M=V,k=N)}}),k||T.filter(N=>!N.failed).forEach(N=>{for(let F=0;F<N.pts.length-1;F++){const V=Zu(m,v,N.pts[F].x,N.pts[F].y,N.pts[F+1].x,N.pts[F+1].y);V<M&&(M=V,k=N)}});const R=k?k.idx:-1;if(R!==ur&&(ur=R,ta(n,l,t,k)),k){const N=k.run,F=k.failed?"#f85149":"#2ea043",V=k.failed?"❌":"✅",b=k.failed?"FAILED":"SUCCESS";let g=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${F};">${V} ${b}</strong>
          <span style="float:right;color:#8b8b9b;font-size:11px;">Run #${k.idx+1}</span>
        </div>
        <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
      `;N.startYear&&(g+=`<span style="color:#8b8b9b;">Start year:</span><span>${N.startYear}</span>`),g+=`<span style="color:#8b8b9b;">Duration:</span><span>${N.years.toFixed(1)} years</span>`,g+=`<span style="color:#8b8b9b;">Final balance:</span><span>${ae(N.final)}</span>`,g+=`<span style="color:#8b8b9b;">Protection months:</span><span>${N.protMonths}</span>`,g+=`<span style="color:#8b8b9b;">Longest streak:</span><span>${N.maxConsec} months</span>`,N.hodlUsed>0&&(g+=`<span style="color:#8b8b9b;">HODL used:</span><span>${ae(N.hodlUsed)}</span>`),g+="</div>",k.failed&&N.failMonth&&(g+=`<div style="margin-top:8px;padding-top:8px;border-top:1px solid #555;color:#f0c674;">💀 Depleted at year ${(N.failMonth/12).toFixed(1)}</div>`),$l(a.clientX,a.clientY,g)}else dn()},s=()=>{if(dn(),ur!==-1){ur=-1;const a=Gn.get(n.id);a&&ta(n,a,t,null)}};n._trajHoverListener=i,n._trajLeaveListener=s,n.addEventListener("mousemove",i),n.addEventListener("mouseleave",s)}function sb(n,t){const e=n._histHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Gn.get(n.id);if(!s||s.type!=="histogram")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=n.height/a.height,h=(i.clientX-a.left)*l,f=(i.clientY-a.top)*u,{bars:m,totalRuns:v}=s;let T=null;if(m.forEach(S=>{h>=S.x&&h<=S.x+S.w&&f>=S.y&&f<=S.y+S.h&&(T=S)}),T){const S=T.months===0,x=S?"#2ea043":"#e1b12c",I=S?"🟢":"🟡",k=S?"No Protection":`${T.months}${T.monthsEnd>T.months?`-${T.monthsEnd}`:""} months`,M=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${x};">${I} ${k}</strong>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
          <span style="color:#8b8b9b;">Runs:</span><span>${T.count} of ${v}</span>
          <span style="color:#8b8b9b;">Percentage:</span><span>${T.pct}%</span>
        </div>
      `;$l(i.clientX,i.clientY,M)}else dn()};n._histHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",dn)}function ta(n,t,e,r){const i=n.getContext("2d"),{width:s,height:a}=n,{paths:l,xScale:u,yScale:h,padding:f,chartWidth:m,chartHeight:v,years:T,maxValue:S,glide:x}=t;i.fillStyle="rgba(15,15,26,1)",i.fillRect(f.left,f.top,m,v),i.strokeStyle=e.grid,i.lineWidth=1;for(let I=0;I<=5;I++){const k=f.top+I/5*v;i.beginPath(),i.moveTo(f.left,k),i.lineTo(s-f.right,k),i.stroke()}x&&x.length>0&&(i.strokeStyle=e.glidepath,i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),x.forEach((I,k)=>{const M=u(I.year),R=h(I.min);k===0?i.moveTo(M,R):i.lineTo(M,R)}),i.stroke(),i.setLineDash([])),l.forEach(I=>{if(r&&I.idx===r.idx)return;const k=r?.15:I.failed?.8:.25;i.strokeStyle=I.failed?`rgba(248,81,73,${k})`:`rgba(46,160,67,${k})`,i.lineWidth=I.failed?2:.5,i.beginPath(),I.pts.forEach((M,R)=>{R===0?i.moveTo(M.x,M.y):i.lineTo(M.x,M.y)}),i.stroke()}),r&&(i.strokeStyle=r.failed?e.trajectoryFailedHover:e.trajectoryHover,i.lineWidth=4,i.shadowColor=r.failed?e.trajectoryFailedHover:e.trajectoryHover,i.shadowBlur=8,i.beginPath(),r.pts.forEach((I,k)=>{k===0?i.moveTo(I.x,I.y):i.lineTo(I.x,I.y)}),i.stroke(),i.shadowBlur=0),i.strokeStyle=e.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(f.left,h(0)),i.lineTo(s-f.right,h(0)),i.stroke(),i.setLineDash([])}function $l(n,t,e){let r=document.getElementById("chartTooltip");r||(r=document.createElement("div"),r.id="chartTooltip",document.body.appendChild(r)),r.innerHTML=e,r.style.display="block",r.style.left=n+15+"px",r.style.top=t-10+"px"}function dn(){const n=document.getElementById("chartTooltip");n&&(n.style.display="none")}function ob(){return`
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
  `}window._simEngine={runMonteCarlo:Pf,runHistorical:Rf,simulate:wo};window._constants={EQUITY_RETURNS:vi,INFLATION:ka};window._mathUtils={seededRng:Ma};let ab=null,lb=null;const Bf=document.createElement("style");Bf.textContent=fE()+zE()+XE()+CE()+ob();document.head.appendChild(Bf);const ql=document.getElementById("globalLoadingOverlay"),cb=ql.querySelector(".loading-text");function Ur(n="Loading..."){cb.textContent=n,ql.classList.add("active")}function $r(){ql.classList.remove("active")}document.getElementById("versionDisplay").textContent=`v${nd}`;document.getElementById("entryMonth").value=_p();function ub(n){const t=parseFloat(n);return isNaN(t)?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function Ff(){document.querySelectorAll('input[type="number"]').forEach(t=>{t.value,t.addEventListener("focus",function(e){setTimeout(()=>{this.select()},0)}),t.addEventListener("click",function(e){!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&this.select()})})}function zf(){document.querySelectorAll('input[type="number"]').forEach(t=>{if(t.dataset.formatted)return;t.dataset.formatted="true";const e=t.closest(".input-with-unit")||t.parentElement,r=t.closest(".input-with-unit")!==null,i=document.createElement("span");i.className="number-format-overlay";const s=r?"34px":"14px";i.style.cssText=`
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
        `,getComputedStyle(e).position==="static"&&(e.style.position="relative");function a(){const l=parseFloat(t.value);!isNaN(l)&&l>=1e3&&document.activeElement!==t?(i.textContent=ub(l),i.style.display="block",t.style.color="transparent"):(i.style.display="none",t.style.color="")}t._updateOverlay=a,t.addEventListener("focus",()=>{i.style.display="none",t.style.color=""}),t.addEventListener("blur",a),t.addEventListener("input",()=>{document.activeElement===t&&(i.style.display="none",t.style.color="")}),e.appendChild(i),a()})}function To(){document.querySelectorAll('input[type="number"]').forEach(n=>{n._updateOverlay&&n._updateOverlay()})}setTimeout(()=>{Ff(),zf()},100);const db=new MutationObserver(n=>{let t=!1;n.forEach(e=>{e.addedNodes.forEach(r=>{var i,s;r.nodeType===1&&((i=r.matches)!=null&&i.call(r,'input[type="number"]')||(s=r.querySelector)!=null&&s.call(r,'input[type="number"]'))&&(t=!0)})}),t&&setTimeout(()=>{Ff(),zf()},50)});db.observe(document.body,{childList:!0,subtree:!0});let mr=null;async function Uf(n,t="decision"){xa(),QE(),document.getElementById("mainApp").classList.remove("hidden"),document.getElementById("userEmail").textContent=n.email,await Io(),await Yi(),hb(),t==="stress"&&(document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),document.querySelector('.tab[data-tab="stress"]').classList.add("active"),document.querySelectorAll(".tab-content").forEach(e=>e.classList.remove("active")),document.getElementById("stress-content").classList.add("active"))}async function hb(){try{const n=await vn(),t=await Jn();document.getElementById("entryEquity").value=t.equityMin||25e4,document.getElementById("entryBond").value=t.bondMin||2e5,document.getElementById("entryCash").value=t.cashTarget||5e4,document.getElementById("dsEquityMin").value=t.equityMin||25e4,document.getElementById("dsBondMin").value=t.bondMin||2e5,document.getElementById("dsCashTarget").value=t.cashTarget||5e4,document.getElementById("dsDuration").value=t.duration||35,document.getElementById("dsBaseSalary").value=t.baseSalary||3e4,document.getElementById("dsStatePension").value=t.statePension||12e3,document.getElementById("dsStatePensionYear").value=t.statePensionYear||12,document.getElementById("dsProtectionFactor").value=t.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=t.recoveryBuffer||1e4,document.getElementById("dsConsecutiveLimit").value=t.consecutiveLimit||3,["mc","hist","scen"].forEach(e=>{const r=document.getElementById(e+"Equity"),i=document.getElementById(e+"Bond"),s=document.getElementById(e+"Cash"),a=document.getElementById(e+"Years");r&&(r.value=n.equityMin),i&&(i.value=n.bondMin),s&&(s.value=n.cashTarget),a&&(a.value=n.duration)}),document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,To(),console.log("All inputs initialized from stored settings")}catch(n){console.error("Error initializing inputs from settings:",n)}}async function Ca(n){console.log("Wizard completed with data:",n);try{await Nl({baseSalary:n.decisionSalary,equityMin:n.decisionEquity,bondMin:n.decisionBond,cashTarget:n.decisionCash,duration:n.decisionDuration,statePension:n.statePension,statePensionYear:n.statePensionYear}),await Ol({baseSalary:n.baseSalary,other:n.otherIncome,statePension:n.statePension,statePensionYear:n.statePensionYear,equityMin:n.equityMin,bondMin:n.bondMin,cashTarget:n.cashTarget,duration:n.duration,taxMode:n.taxMode}),document.getElementById("entryEquity").value=n.decisionEquity,document.getElementById("entryBond").value=n.decisionBond,document.getElementById("entryCash").value=n.decisionCash,document.getElementById("mcEquity").value=n.equityMin,document.getElementById("mcBond").value=n.bondMin,document.getElementById("mcCash").value=n.cashTarget,document.getElementById("mcYears").value=n.duration,To()}catch(e){console.error("Error saving wizard settings:",e)}const t=$i();Uf(t,"stress")}NE(document.getElementById("authScreen"),async n=>{console.log("Auth success callback triggered for:",n.email);try{console.log("Checking for existing cloud data...");const t=await qw();console.log("Has cloud data:",t),t?(console.log("Existing user - showing main app"),Uf(n)):(console.log("New user - showing setup wizard"),xa(),document.getElementById("setupWizard").style.display="block",Ra(document.getElementById("setupWizard"),Ca))}catch(t){console.error("Error in auth callback:",t),xa(),document.getElementById("setupWizard").style.display="block",Ra(document.getElementById("setupWizard"),Ca)}});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await bf(),document.getElementById("mainApp").classList.add("hidden"),Vf()}catch(n){console.error("Logout error:",n)}});const fb=60*60*1e3;let ea=null;function $f(){ea&&clearTimeout(ea),Te()&&(ea=setTimeout(async()=>{if(Te()){alert("You have been logged out due to inactivity (1 hour).");try{await bf(),document.getElementById("mainApp").classList.add("hidden"),Vf()}catch(n){console.error("Auto-logout error:",n)}}},fb))}const pb=["mousedown","mousemove","keydown","scroll","touchstart","click"];pb.forEach(n=>{document.addEventListener(n,()=>{$f()},{passive:!0})});$f();document.getElementById("resetBtn").addEventListener("click",async()=>{if(!(!confirm(`⚠️ WARNING: This will permanently delete ALL your data including:

• All saved settings
• All decision history
• All tax year configurations

This action cannot be undone.

Are you sure you want to reset and start over?`)||!confirm(`Are you ABSOLUTELY sure?

Type OK to confirm deletion of all your data.`)))try{console.log("Wiping all user data..."),await $w(),console.log("Data wiped successfully"),jw(),localStorage.clear(),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("setupWizard").style.display="block",Ra(document.getElementById("setupWizard"),Ca),alert("All data has been deleted. Please complete the setup wizard to start fresh.")}catch(e){console.error("Reset error:",e),alert("Error resetting data: "+e.message)}});document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&await Io(),n.dataset.tab==="taxyears"&&await Yi(),n.dataset.tab==="stress"&&await jl()})});document.querySelectorAll(".sub-tab[data-stresstab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-stresstab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".stress-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`stress-${n.dataset.stresstab}`).classList.remove("hidden"),n.dataset.stresstab==="stresssettings"&&await jl()})});document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`decision-${n.dataset.decisiontab}`).classList.remove("hidden"),n.dataset.decisiontab==="decisionsettings"&&await jf()})});function mb(n){const[t,e]=n.split("-").map(Number);return e>=4?t%100+"/"+(t+1)%100:(t-1)%100+"/"+t%100}function gb(n){const[t,e]=n.split("-").map(Number);return Math.max(0,(e>=4?t:t-1)-2026)}function na(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function td(n,t,e){return n<=t?n:n<=e?t+(n-t)*.8:t+(e-t)*.8+(n-e)*.6}async function ed(n,t,e,r){const i=await Jn(),s=await xf(),a=await ji(),l=mb(n),u=gb(n),[h,f]=n.split("-").map(Number);if(!a[l])throw new Error(`Tax year ${l} is not configured. Please add it in the Settings tab before calculating.`);const m=a[l],v=m.pa||12570,T=m.brl||50270,S=m.other||0,x=m.isTaxEfficient!==!1,I=m.isaSavingsAllocation||0,k=m.isaSavingsUsed||0,M=m.grossIncomeToDate||0,R=m.confirmedSalary||i.baseSalary,N=i.statePension||0,F=i.statePensionYear||12;let V=0;if(u>=F&&N>0){let J=1;for(let dt=0;dt<=u;dt++){const Pt=String((26+dt)%100).padStart(2,"0")+"/"+String((27+dt)%100).padStart(2,"0");J*=1+((a[Pt]||{}).cpi||.04)}V=N*J}let b=1;for(let J=0;J<u;J++){const dt=String((26+J)%100).padStart(2,"0")+"/"+String((27+J)%100).padStart(2,"0"),Pt=(a[dt]||{}).cpi||.04;b*=1+Pt}const g=Math.round(na(i.equityMin,u,i.duration,b,!0)),w=Math.round(na(i.bondMin,u,i.duration,b,!0)),_=Math.round(na(i.cashTarget,u,i.duration,b,!1)),E=t+e,A=g+w;let y=!1,pt=0;const X=s.filter(J=>J.date<n);for(let J=X.length-1;J>=0&&X[J].source==="Cash";J--)pt++;X.length&&X[X.length-1].inProtection&&(y=E<=A+(i.recoveryBuffer||1e4)),!y&&E<A&&pt+1>=(i.consecutiveLimit||3)&&(y=!0);const At=f>=4?16-f:4-f,ct=Math.max(1,At),Mt=R*b,gt=S+V;let it,ue,ut,$=0,vt=!1,ot=0;const Ft=Math.max(0,I-k)/ct;if(x){const J=gt/12,dt=Math.max(0,T-M),Pt=Math.max(0,dt/ct-J),rr=Mt/12,ir=Math.min(rr-J,Pt),Ye=td(Mt,v,T)/12,Sn=Math.min(Mt,T),Ae=td(Sn,v,T)/12,te=Math.max(0,Ye-Ae),oe=Math.min(te,Ft);if(ot=oe,y)it=ir*(1-(i.protectionFactor||20)/100),ue=oe,ut="Protection";else{it=ir,ue=oe,ut="Tax-Efficient";const sr=f>=4?h:h-1,xe=X.filter(Kt=>{const[he,Pn]=Kt.date.split("-").map(Number);return(Pn>=4?he:he-1)===sr});let An=0,xn=0;if(xe.forEach(Kt=>{xn+=Kt.sipp||0,Kt.inProtection&&Kt.stdSipp&&(An+=Kt.stdSipp-Kt.sipp),Kt.boostAmount>0&&(An-=Kt.boostAmount)}),An>0){const Kt=xn+it*ct+gt,he=T-Kt,Pn=E-A-(i.recoveryBuffer||1e4);if(he>0&&Pn>0){const Rt=he/ct,Ki=An/ct,Rn=Pn/ct;$=Math.min(Ki,Rt,Rn),$>50&&(it+=$,ut="Tax Boost")}}}}else{const J=Mt/12,dt=gt/12,Pt=Math.max(0,J-dt);if(ue=0,y){it=Pt*(1-(i.protectionFactor||20)/100),ut="Protection";const rr=f>=4?h:h-1,ir=X.filter(Ae=>{const[te,oe]=Ae.date.split("-").map(Number);return(oe>=4?te:te-1)===rr});let Ye=0;ir.forEach(Ae=>{Ye+=Ae.sipp||0});const Sn=Ye+it*ct+gt;if(Sn<T){const te=(T-Sn)/ct,oe=E-A-(i.recoveryBuffer||1e4);oe>0&&te>50&&($=Math.min(te,oe/ct),$>50&&(it+=$,vt=!0,ut="Protection-Induced Efficiency"))}}else it=Pt,ut="Tax-Inefficient"}let Dt,zt,Yt=0,_n=0,wn=0,En="";if(!y&&E>=A+it){Dt="Growth";const J=Math.max(0,t-g),dt=Math.max(0,e-w),Pt=J+dt;Pt>0?(Yt=it*J/Pt,_n=it*dt/Pt,zt="Healthy"):(Dt="Cash",wn=it,zt="At min")}else Dt="Cash",wn=it,zt=y?"Protection":"Below min",r<it&&(En="Cash low!");let de="";const je=t-g,bn=e-w;if(je>5e3&&bn<-5e3){const J=Math.floor(Math.min(je,-bn)/1e3)*1e3;J>=5e3&&(de=`Move £${J.toLocaleString()} Equity→Bond`)}else if(bn>5e3&&je<-5e3){const J=Math.floor(Math.min(bn,-je)/1e3)*1e3;J>=5e3&&(de=`Move £${J.toLocaleString()} Bond→Equity`)}let qr="";const Gi=_-r;if(Gi>5e3&&Dt==="Growth"&&!y){const J=E-A-it;if(J>1e4){const dt=Math.floor(Math.min(Gi*.3,J*.5)/1e3)*1e3;dt>=5e3&&(qr=`Replenish Cash: Move £${dt.toLocaleString()} from growth funds`)}}const He=[];En&&He.push({message:En,severity:"danger",type:"low-cash"}),$>50&&He.push({message:`Tax Boost: +£${Math.round($).toLocaleString()}/mo catch-up from protection shortfall`,severity:"success",type:"tax-boost"}),de&&He.push({message:de,severity:"warning",type:"rebalance"}),qr&&He.push({message:qr,severity:"info",type:"cash-replenish"});const Zn=it+S/12+V/12,Se=Zn*12;let We=0;Se>v&&(Se<=T?We=(Se-v)*.2:We=(T-v)*.2+(Se-T)*.4);const tr=Zn-We/12+ue,jr=f>=4?h:h-1,Hr=X.filter(J=>{const[dt,Pt]=J.date.split("-").map(Number);return(Pt>=4?dt:dt-1)===jr});let wt=Hr.reduce((J,dt)=>J+(dt.taxPaidMonthly||dt.monthlyTax||0),0);wt+=We/12;const xt=Hr.length+1,er=wt/xt*12,Tn=Mt/12;let nr=0;Tn*12>v&&(Tn*12<=T?nr=(Tn*12-v)*.2:nr=(T-v)*.2+(Tn*12-T)*.4);const Wr=Math.max(0,nr/12-We/12),In=k+ot;return{date:n,taxYear:l,yearNumber:u,remainingMonths:ct,equity:t,bond:e,cash:r,isa:0,adjEquityMin:g,adjBondMin:w,adjCashTarget:_,pa:v,brl:T,other:S/12,statePension:V/12,sippDraw:it,isaDraw:ue,totalMonthlyNet:tr,isTaxEfficientYear:x,yearlyIsaSavingsAllocation:I,cumulativeIsaSavingsUsed:In,isaSavingsUsedThisMonth:ot,taxPaidYTD:wt,taxProjectedAnnual:er,taxSavedMonthly:Wr,taxSavedYTD:Wr*xt,taxSavedProjectedAnnual:Wr*12,taxEfficient:x&&!vt,inProtection:y,protectionReason:y?zt:null,consecutiveCashDraws:pt,protectionInducedTaxEfficiency:vt,boostAmount:$>50?$:0,boostEligible:$>50,source:Dt,drawFromEquity:Yt,drawFromBond:_n,drawFromCash:wn,rebalanceNeeded:de!=="",rebalanceActions:de?[de]:[],alerts:He,calculationDetails:{mode:ut,reason:`${zt} | ${ut}`,totalGrowth:E,minGrowth:A,consec:pt,stdSipp:it,inputs:{baseSalary:i.baseSalary,confirmedSalary:R,targetGross:Mt,cumInf:b,yearNum:u,taxYear:l,OTHER:S,STATE:V,PA:v,BRL:T,isTaxEfficientYear:x,yearlyIsaSavingsAllocation:I,grossIncomeToDate:M},taxInfo:{annualTaxable:Se,headroomToBRL:T-Se,annualTax:We,monthlyNet:tr}}}}window.handleDecisionSubmit=async function(n){n.preventDefault();const t=document.getElementById("entryMonth").value,e=parseFloat(document.getElementById("entryEquity").value)||0,r=parseFloat(document.getElementById("entryBond").value)||0,i=parseFloat(document.getElementById("entryCash").value)||0,s=[];if(t||s.push("Month"),!e&&e!==0&&s.push("Equity Fund"),!r&&r!==0&&s.push("Bond Balance"),!i&&i!==0&&s.push("Cash Balance"),s.length>0){alert(`Please fill in the following fields:

• `+s.join(`
• `));return}try{if((await EE(t)).showWizard){const u=document.getElementById("taxYearWizard");u.style.display="block",window._pendingDecisionForm={dateStr:t,equity:e,bond:r,cash:i},wE(u,t,async h=>{if(u.style.display="none",h&&h.completed)try{mr=await ed(t,e,r,i);const f=document.getElementById("decisionOutput");Wu(mr,f),document.getElementById("saveBtn").disabled=!1}catch(f){console.error("Decision error after wizard:",f),alert("Error calculating decision: "+f.message)}});return}mr=await ed(t,e,r,i);const l=document.getElementById("decisionOutput");Wu(mr,l),document.getElementById("saveBtn").disabled=!1}catch(a){console.error("Decision error:",a),alert("Error calculating decision: "+a.message)}};window.saveCurrentDecision=async function(){if(!mr){alert("No decision to save");return}if(!Te()){alert("Please sign in to save decisions");return}try{await Zw(mr),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0,await Io()}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};window.runMonteCarloUI=async function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("mcResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await vn(),setTimeout(()=>{try{const{results:t,stats:e}=kE(n);ab=t,qf(e,t,"Monte Carlo (1000 runs)","mcResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("mcResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runHistoricalUI=async function(){const n={equityStart:parseFloat(document.getElementById("histEquity").value)||25e4,bondStart:parseFloat(document.getElementById("histBond").value)||2e5,cashStart:parseFloat(document.getElementById("histCash").value)||5e4,years:parseInt(document.getElementById("histYears").value)||35};document.getElementById("histResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await vn(),setTimeout(()=>{try{const{results:t,stats:e}=ME(n);lb=t,qf(e,t,"Historical Analysis","histResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("histResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runScenariosUI=async function(){const n={equityStart:parseFloat(document.getElementById("scenEquity").value)||25e4,bondStart:parseFloat(document.getElementById("scenBond").value)||2e5,cashStart:parseFloat(document.getElementById("scenCash").value)||5e4,years:35};document.getElementById("scenResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',await vn(),setTimeout(()=>{try{const t=DE(n);_b(t,"scenResults")}catch(t){console.error("Scenario error:",t),document.getElementById("scenResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};let ra=!1;window.runOptimisationUI=async function(n){if(ra)return;ra=!0;const t=document.getElementById("optimiseBtn"+n),e=document.getElementById("optimiseResults"+n);t&&(t.disabled=!0),t&&(t.textContent="Optimising...");let r,i,s,a;n==="MC"?(r=document.getElementById("mcEquity"),i=document.getElementById("mcBond"),s=document.getElementById("mcCash"),a=document.getElementById("mcYears")):(r=document.getElementById("histEquity"),i=document.getElementById("histBond"),s=document.getElementById("histCash"),a=document.getElementById("histYears"));const l=+r.value,u=+i.value,h=+s.value,f=+a.value,m=l+u+h;e.innerHTML='<div class="loading"><div class="spinner"></div>Testing allocations...</div>';const v=await vn(),T=JSON.parse(JSON.stringify(v));setTimeout(()=>{try{let S=null,x={equity:l,bond:u,cash:h,rate:0,avgProt:0,withProt:0,totalRuns:0};const I=[];for(let E=5;E<=30;E+=5)for(let A=20;A<=95-E;A+=5){const y=100-E-A;y>=0&&I.push({equity:Math.round(m*A/100),bond:Math.round(m*y/100),cash:Math.round(m*E/100)})}const{EQUITY_RETURNS:k,INFLATION:M}=window._constants,{simulate:R}=window._simEngine,{seededRng:N}=window._mathUtils,F=Object.keys(k).map(Number).sort((E,A)=>E-A),V=Math.max(...F),b=E=>{const A={equityStart:E.equity,bondStart:E.bond,cashStart:E.cash,years:f,equityMin:T.equityMin,bondMin:T.bondMin,cashTarget:T.cashTarget,duration:T.duration,baseSalary:T.baseSalary,other:T.other,statePension:T.statePension,statePensionYear:T.statePensionYear,pa:T.pa,brl:T.brl,hrl:T.hrl,taxMode:T.taxMode,protectionMult:T.protectionMult,consecutiveLimit:T.consecutiveLimit,disableProtection:T.disableProtection,hodlEnabled:T.hodlEnabled,hodlValue:T.hodlValue},y=[];if(n==="MC")for(let $=0;$<1e3;$++){const vt=N($*12345),ot={equity:{},inflation:{}};for(let at=0;at<f;at++){const Ft=F[Math.floor(vt()*F.length)];ot.equity[at]=k[Ft],ot.inflation[at]=M[Ft]||.025}y.push(R(A,ot,$))}else F.forEach($=>{if($+f-1>V)return;const vt={equity:{},inflation:{}};for(let ot=0;ot<f;ot++)vt.equity[ot]=k[$+ot]||0,vt.inflation[ot]=M[$+ot]||.025;y.push(R(A,vt,$))});const pt=y.filter($=>$.failed),X=y.filter($=>!$.failed),At=(y.length-pt.length)/y.length*100,Mt=y.map($=>$.protMonths).reduce(($,vt)=>$+vt,0)/y.length,gt=y.filter($=>$.protMonths>0).length,it=X.map($=>$.final).sort(($,vt)=>$-vt),ue=it.length>0?it[Math.floor(it.length*.5)]:0,ut=it.length>0?it[Math.floor(it.length*.9)]:0;return{equity:E.equity,bond:E.bond,cash:E.cash,rate:At,avgProt:Mt,withProt:gt,totalRuns:y.length,medianFinal:ue,p90Final:ut}},w=b({equity:l,bond:u,cash:h});x.avgProt=w.avgProt,x.withProt=w.withProt,x.totalRuns=w.totalRuns,x.rate=w.rate,x.medianFinal=w.medianFinal,x.p90Final=w.p90Final,I.forEach(E=>{const A=b(E);A.avgProt<=x.avgProt&&(!S||A.rate>S.rate)&&(S=A)});let _="";if(S&&S.rate>x.rate){const E=S.medianFinal-x.medianFinal,A=x.medianFinal>0?E/x.medianFinal*100:0;_+='<div class="card" style="margin-top:20px;border-color:var(--success);">',_+='<h3 style="color:var(--success);margin-top:0;">Better Allocation Found</h3>',_+='<p style="color:var(--text-muted);margin-bottom:16px;">A different fund split could improve your success rate without increasing protection usage:</p>',_+='<div class="grid-2" style="gap:20px;margin-bottom:20px;">',_+='<div style="padding:16px;background:rgba(0,0,0,0.2);border-radius:8px;">',_+='<div style="font-weight:500;margin-bottom:12px;color:var(--text-muted);">Your Current Split</div>',_+='<div style="font-size:24px;font-weight:600;color:var(--warning);">'+x.rate.toFixed(1)+"%</div>",_+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate</div>',_+='<div style="font-size:13px;">Equity: '+H(x.equity)+" ("+Math.round(x.equity/m*100)+"%)</div>",_+='<div style="font-size:13px;">Bonds: '+H(x.bond)+" ("+Math.round(x.bond/m*100)+"%)</div>",_+='<div style="font-size:13px;">Cash: '+H(x.cash)+" ("+Math.round(x.cash/m*100)+"%)</div>",_+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+x.avgProt.toFixed(0)+" mo | Median final: "+H(x.medianFinal)+"</div>",_+="</div>",_+='<div style="padding:16px;background:rgba(46,160,67,0.1);border-radius:8px;border:1px solid var(--success);">',_+='<div style="font-weight:500;margin-bottom:12px;color:var(--success);">Optimised Split</div>',_+='<div style="font-size:24px;font-weight:600;color:var(--success);">'+S.rate.toFixed(1)+"%</div>",_+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate (+'+(S.rate-x.rate).toFixed(1)+"%)</div>",_+='<div style="font-size:13px;">Equity: '+H(S.equity)+" ("+Math.round(S.equity/m*100)+"%)</div>",_+='<div style="font-size:13px;">Bonds: '+H(S.bond)+" ("+Math.round(S.bond/m*100)+"%)</div>",_+='<div style="font-size:13px;">Cash: '+H(S.cash)+" ("+Math.round(S.cash/m*100)+"%)</div>",_+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+S.avgProt.toFixed(0)+" mo | Median final: "+H(S.medianFinal)+"</div>",_+="</div>",_+="</div>",E<0?(_+='<div class="alert alert-warning" style="margin-bottom:16px;">',_+="<strong>Trade-off:</strong> The optimised allocation has a "+Math.abs(A).toFixed(0)+"% lower median final value. ",_+="This is because it likely has less equity exposure. You gain safety but may sacrifice some upside.",_+="</div>"):E>0&&(_+='<div class="alert alert-info" style="margin-bottom:16px;">',_+="<strong>Bonus:</strong> The optimised allocation also has a "+A.toFixed(0)+"% higher median final value!",_+="</div>"),_+='<div class="alert alert-info" style="margin-bottom:16px;">',_+="<strong>To apply this allocation:</strong> Click the button below to update your Settings with these new fund minimums.",_+="</div>",_+='<button onclick="applyOptimisedAllocationUI('+S.equity+","+S.bond+","+S.cash+')" style="width:100%;">Apply Optimised Allocation to Settings</button>',_+="</div>"}else _+='<div class="card" style="margin-top:20px;border-color:var(--primary);">',_+='<h3 style="color:var(--primary);margin-top:0;">Your Allocation is Already Optimal</h3>',_+='<p style="color:var(--text-muted);">We tested '+I.length+" different fund splits. Your current allocation achieves the best success rate ("+x.rate.toFixed(1)+"%) without increasing protection usage.</p>",_+='<p style="font-size:13px;color:var(--text-muted);">Your protection: '+x.avgProt.toFixed(0)+" months average</p>",_+="</div>";e.innerHTML=_}catch(S){console.error("Optimisation error:",S),e.innerHTML='<div class="alert alert-danger">Error: '+S.message+"</div>"}finally{ra=!1,t&&(t.disabled=!1,t.textContent="Optimise Allocation")}},50)};window.applyOptimisedAllocationUI=async function(n,t,e){if(document.getElementById("ssEquityMin").value=n,document.getElementById("ssBondMin").value=t,document.getElementById("ssCashTarget").value=e,document.getElementById("dsEquityMin").value=n,document.getElementById("dsBondMin").value=t,document.getElementById("dsCashTarget").value=e,document.getElementById("mcEquity").value=n,document.getElementById("mcBond").value=t,document.getElementById("mcCash").value=e,document.getElementById("histEquity").value=n,document.getElementById("histBond").value=t,document.getElementById("histCash").value=e,document.getElementById("scenEquity").value=n,document.getElementById("scenBond").value=t,document.getElementById("scenCash").value=e,Te())try{await Ol({equityMin:n,bondMin:t,cashTarget:e})}catch(r){console.error("Error saving optimised settings:",r)}alert("Settings updated! Run the test again to see the full results with your new allocation.")};const yb={1929:"Wall Street Crash / Great Depression",1930:"Great Depression",1931:"Great Depression",1932:"Great Depression",1937:"Recession of 1937",1968:"Late 1960s stagflation",1969:"Late 1960s recession",1973:"Oil Crisis / 1973-74 crash",1974:"1973-74 bear market",2e3:"Dot-com bubble burst",2001:"Dot-com bust / 9/11",2007:"Global Financial Crisis",2008:"Global Financial Crisis",2022:"Post-COVID inflation / rate hikes"};function vb(n){if(!n||n.length===0)return"";const t=n.filter(s=>s.failed).sort((s,a)=>s.years-a.years),e=n.filter(s=>s.protMonths>0).sort((s,a)=>a.protMonths-s.protMonths),r=t.length>0?t.slice(0,5):e.slice(0,5);if(r.length===0)return"";let i=`
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
      `;return r.forEach(s=>{const a=s.startYear||s.seed,l=yb[a]||"-",u=s.failed?"danger":"success";i+=`
          <tr>
            <td>${a}</td>
            <td style="font-size: 12px;">${l}</td>
            <td>${s.years.toFixed(1)}</td>
            <td>${s.protMonths}</td>
            <td>${H(s.final)}</td>
            <td style="color: var(--${u});">${s.failed?"FAILED":"OK"}</td>
          </tr>
        `}),i+=`
              </tbody>
            </table>
          </div>
        </details>
      `,i}function qf(n,t,e,r,i){const s=n.successRate>=90?"success":n.successRate>=80?"warning":"danger",a=r.replace("Results",""),l=n.survival||{},u=n.finalValue||{},h=n.protection||{};let f=`
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
              <div class="stat-value">${H(u.p50||n.medianFinal||0)}</div>
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
                  <div class="stat-value" style="font-size: 14px;">${H(u[m]||0)}</div>
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
              <div class="stat-value">${H(u.avg||n.avgFinal||0)}</div>
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
          ${r==="histResults"?vb(t):""}

          <!-- Result Summary -->
          <div class="alert ${s==="success"?"alert-success":s==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById(r).innerHTML=f,setTimeout(()=>{const m=document.getElementById(`${a}ConeChart`),v=document.getElementById(`${a}TrajChart`),T=document.getElementById(`${a}HistChart`);m&&t&&t.length>0&&JE(m,t,{years:i}),v&&t&&t.length>0&&ZE(v,t,{years:i}),T&&t&&t.length>0&&tb(T,t,{})},50)}function _b(n,t){let e='<div class="card"><h2>Scenario Analysis</h2>';e+=`
        <div class="chart-container" style="margin-bottom: 24px;">
          <canvas id="scenCompChart" width="900" height="400"></canvas>
        </div>
      `,e+='<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">';for(const[r,i]of Object.entries(n)){const s=i.result,a=s.failed?"danger":"success";e+=`
          <div class="history-item" style="border-left: 4px solid ${i.color};">
            <div>
              <div class="history-date">${i.name}</div>
              <div class="history-details">
                Protection: ${s.protMonths} mo | Max streak: ${s.maxConsec} mo
                ${s.hodlUsed>0?` | HODL used: ${H(s.hodlUsed)}`:""}
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 24px; color: var(--${a});">${s.years.toFixed(1)} yrs</div>
              <div style="font-size: 12px; color: var(--${a});">${s.failed?"FAILED":"OK"}</div>
              <div style="font-size: 11px; color: var(--text-muted);">Final: ${H(s.final)}</div>
            </div>
          </div>
        `}e+="</div></div>",document.getElementById(t).innerHTML=e,setTimeout(()=>{const r=document.getElementById("scenCompChart");r&&n&&eb(r,n,{years:35,title:"Scenario Comparison"})},50)}async function jl(){Ur("Loading settings...");try{const n=await vn();document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,To()}catch(n){console.error("Error loading stress settings:",n)}finally{$r()}}window.saveStressSettingsUI=async function(){if(!Te()){alert("Please sign in to save settings");return}Ur("Saving settings...");try{await Ol({baseSalary:+document.getElementById("ssBaseSalary").value,equityMin:+document.getElementById("ssEquityMin").value,bondMin:+document.getElementById("ssBondMin").value,cashTarget:+document.getElementById("ssCashTarget").value,duration:+document.getElementById("ssDuration").value,pa:+document.getElementById("ssPA").value,brl:+document.getElementById("ssBRL").value,hrl:+document.getElementById("ssHRL").value,taxMode:document.getElementById("ssTaxMode").value,other:+document.getElementById("ssOther").value,statePension:+document.getElementById("ssStatePension").value,statePensionYear:+document.getElementById("ssStatePensionYear").value,consecutiveLimit:+document.getElementById("ssConsecutiveLimit").value,protectionMult:+document.getElementById("ssProtectionMult").value,disableProtection:document.getElementById("ssDisableProtection").checked,hodlEnabled:document.getElementById("ssHodlEnabled").checked,hodlValue:+document.getElementById("ssHodlValue").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving stress settings:",n),alert("Error saving: "+n.message)}finally{$r()}};window.resetStressSettingsUI=async function(){if(confirm("Reset all stress settings to defaults?")){Ur("Resetting settings...");try{await uE(),await jl(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{$r()}}};async function jf(){Ur("Loading settings...");try{const n=await Jn();document.getElementById("dsEquityMin").value=n.equityMin||25e4,document.getElementById("dsBondMin").value=n.bondMin||2e5,document.getElementById("dsCashTarget").value=n.cashTarget||5e4,document.getElementById("dsDuration").value=n.duration||35,document.getElementById("dsBaseSalary").value=n.baseSalary||3e4,document.getElementById("dsProtectionFactor").value=n.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=n.recoveryBuffer||15e3,document.getElementById("dsConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("entryEquity").value=n.equityMin||25e4,document.getElementById("entryBond").value=n.bondMin||2e5,document.getElementById("entryCash").value=n.cashTarget||5e4,To()}catch(n){console.error("Error loading decision settings:",n)}finally{$r()}}window.saveDecisionSettingsUI=async function(){if(!Te()){alert("Please sign in to save settings");return}Ur("Saving settings...");try{await Nl({equityMin:+document.getElementById("dsEquityMin").value,bondMin:+document.getElementById("dsBondMin").value,cashTarget:+document.getElementById("dsCashTarget").value,duration:+document.getElementById("dsDuration").value,baseSalary:+document.getElementById("dsBaseSalary").value,statePension:+document.getElementById("dsStatePension").value,statePensionYear:+document.getElementById("dsStatePensionYear").value,protectionFactor:+document.getElementById("dsProtectionFactor").value,recoveryBuffer:+document.getElementById("dsRecoveryBuffer").value,consecutiveLimit:+document.getElementById("dsConsecutiveLimit").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving decision settings:",n),alert("Error saving: "+n.message)}finally{$r()}};window.resetDecisionSettingsUI=async function(){if(confirm("Reset all decision settings to defaults?")){Ur("Resetting settings...");try{await Nl({equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,baseSalary:3e4,protectionFactor:20,recoveryBuffer:15e3,consecutiveLimit:3}),await jf(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{$r()}}};window.showDrawdownScheduleUI=async function(){const n=parseFloat(document.getElementById("ddInflation").value)/100||.025,t=parseInt(document.getElementById("ddDuration").value)||35;try{const e=await vn();e.duration=t;const r=Tp(e,t,n);let i='<div class="card"><h2>Projected SIPP Drawdown Schedule</h2>';i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>BRL</th><th>Other</th><th>State</th><th>SIPP Draw</th><th>Tax</th><th>Net</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${H(s.brl)}</td>
            <td>${H(s.other)}</td>
            <td>${H(s.statePension)}</td>
            <td style="color: var(--primary); font-weight: 600;">${H(s.sippDraw)}</td>
            <td style="color: var(--danger);">-${H(s.tax)}</td>
            <td style="color: var(--success);">${H(s.netIncome)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("drawdownResults").innerHTML=i}catch(e){console.error("Drawdown error:",e),document.getElementById("drawdownResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};window.showGlidepathUI=async function(){const n=parseFloat(document.getElementById("gpInflation").value)/100||.025,t=parseInt(document.getElementById("gpDuration").value)||35;try{const e=await vn();e.duration=t;const r=Sp(e,n);let i='<div class="card"><h2>Fund Glidepath (Inflation-Adjusted Minimums)</h2>';i+='<div class="alert alert-info" style="margin-bottom: 20px;">',i+="<strong>Glidepath Logic:</strong> Equity & Bond minimums inflate with CPI but deplete linearly to £0. Cash inflates only (maintains real value).",i+="</div>",i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>Cum Inflation</th><th>Equity Min</th><th>Bond Min</th><th>Cash Target</th><th>Total Min</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${(s.cumulativeInflation*100-100).toFixed(1)}%</td>
            <td style="color: var(--success);">${H(s.equityMin)}</td>
            <td style="color: var(--info);">${H(s.bondMin)}</td>
            <td style="color: var(--warning);">${H(s.cashTarget)}</td>
            <td style="font-weight: 600;">${H(s.totalMin)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("glidepathResults").innerHTML=i}catch(e){console.error("Glidepath error:",e),document.getElementById("glidepathResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};let Ln=null,Nn=[];async function Io(){const n=document.getElementById("historyTabs"),t=document.getElementById("historyDetail");if(!n||!t)return;if(n.innerHTML='<span class="loading">Loading...</span>',Nn=await xf({sortDesc:!1,limit:500}),Nn.length===0){n.innerHTML="",t.innerHTML=`
          <div class="no-history-message">
            <h3>No History Entries</h3>
            <p>Save decisions from the Decision Tool to build your history.</p>
          </div>
        `;return}let e="";Nn.forEach(r=>{const i=r.date===Ln,s=["history-tab"];i&&s.push("active"),r.inProtection&&s.push("protection");const a=Hs(r.date);e+=`<button class="${s.join(" ")}" onclick="selectHistoryEntry('${r.date}')">${a}</button>`}),n.innerHTML=e,(!Ln||!Nn.find(r=>r.date===Ln))&&(Ln=Nn[Nn.length-1].date),Hf(Ln),setTimeout(()=>{const r=n.querySelector(".history-tab.active");r&&r.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},100)}function Hs(n){const[t,e]=n.split("-").map(Number);return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e-1]} ${t}`}function Hf(n){const t=document.getElementById("historyDetail"),e=Nn.find(h=>h.date===n);if(!e){t.innerHTML='<div class="no-history-message"><h3>Entry not found</h3></div>';return}const r=h=>h!=null?"£"+Math.round(h).toLocaleString():"—",i=e.isTaxEfficientYear!==!1&&e.mode==="Tax-Efficient",s=e.inProtection?"warning":i?"efficient":"inefficient",a=e.inProtection?`Protection${e.protectionInducedTaxEfficiency?" (Tax-Efficient)":""}`:i?"Tax-Efficient":"Standard";let l=e.source||"Unknown";e.source==="Growth"&&(e.dEquity>0||e.dBond>0)?l=`Growth (Equity: ${r(e.dEquity||0)}, Bond: ${r(e.dBond||0)})`:e.source==="Cash"&&(l=`Cash (${r(e.dCash||e.sipp||0)})`);let u=`
        <!-- Header with date and mode -->
        <div class="history-detail-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div>
              <h3 style="margin:0;">${Hs(e.date)}</h3>
              <div style="color:var(--text-muted);font-size:13px;">Tax Year ${e.taxYear} • Year ${e.yearNum||0}</div>
            </div>
            <span class="tax-mode-badge ${s}">${a}</span>
          </div>

          ${e.inProtection&&e.reason?`
            <div style="padding:12px;background:rgba(243,156,18,0.1);border-radius:8px;margin-bottom:16px;">
              <strong style="color:var(--warning);">Protection Reason:</strong>
              <span style="color:var(--text);">${e.reason}</span>
            </div>
          `:""}
        </div>

        <!-- Fund Balances -->
        <div class="history-detail-card">
          <h3>Fund Balances</h3>
          <div class="history-grid">
            <div class="history-field">
              <label>Equity</label>
              <span class="value">${r(e.equity)}</span>
            </div>
            <div class="history-field">
              <label>Bond</label>
              <span class="value">${r(e.bond)}</span>
            </div>
            <div class="history-field">
              <label>Cash</label>
              <span class="value">${r(e.cash)}</span>
            </div>
            <div class="history-field">
              <label>Total</label>
              <span class="value" style="color:var(--primary);">${r(e.total)}</span>
            </div>
          </div>

          <!-- Glidepath targets -->
          ${e.adjEquity||e.adjBond||e.adjCash?`
            <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">GLIDEPATH TARGETS</div>
              <div class="history-grid">
                <div class="history-field">
                  <label>Equity Min</label>
                  <span class="value">${r(e.adjEquity)}</span>
                </div>
                <div class="history-field">
                  <label>Bond Min</label>
                  <span class="value">${r(e.adjBond)}</span>
                </div>
                <div class="history-field">
                  <label>Cash Target</label>
                  <span class="value">${r(e.adjCash)}</span>
                </div>
                <div class="history-field">
                  <label>Surplus</label>
                  <span class="value ${(e.total||0)-(e.adjEquity||0)-(e.adjBond||0)-(e.adjCash||0)>=0?"success":"danger"}">
                    ${r((e.total||0)-(e.adjEquity||0)-(e.adjBond||0)-(e.adjCash||0))}
                  </span>
                </div>
              </div>
            </div>
          `:""}
        </div>

        <!-- Monthly Recommendation -->
        <div class="history-detail-card">
          <h3>Monthly Recommendation</h3>
          <div class="history-grid">
            <div class="history-field">
              <label>SIPP Withdrawal</label>
              <span class="value" style="color:var(--primary);">${r(e.sipp)}</span>
            </div>
            <div class="history-field">
              <label>ISA Top-up</label>
              <span class="value">${r(e.isa)}</span>
            </div>
            <div class="history-field">
              <label>Other Income</label>
              <span class="value">${r(e.other)}</span>
            </div>
            <div class="history-field">
              <label>State Pension</label>
              <span class="value">${r(e.state)}</span>
            </div>
          </div>

          <div style="margin-top:16px;padding:16px;background:var(--card-alt);border-radius:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-weight:500;">Total Monthly Income</span>
              <span style="font-size:20px;font-weight:600;color:var(--success);">${r(e.monthlyNet)}</span>
            </div>
          </div>

          ${e.boostAmount>0?`
            <div style="margin-top:12px;padding:12px;background:rgba(46,204,113,0.1);border-radius:8px;">
              <strong style="color:var(--success);">Tax Boost:</strong>
              <span style="color:var(--success);">+${r(e.boostAmount)}</span>
              <span style="color:var(--text-muted);font-size:12px;">(Catch-up from protection periods)</span>
            </div>
          `:""}
        </div>

        <!-- ISA/Savings Allocation -->
        ${e.yearlyIsaSavingsAllocation>0?`
          <div class="history-detail-card">
            <h3>ISA/Savings Allocation</h3>
            <div class="history-grid">
              <div class="history-field">
                <label>Year Allocation</label>
                <span class="value">${r(e.yearlyIsaSavingsAllocation)}</span>
              </div>
              <div class="history-field">
                <label>Used This Month</label>
                <span class="value">${r(e.isaSavingsUsedThisMonth||e.isa)}</span>
              </div>
              <div class="history-field">
                <label>Cumulative Used</label>
                <span class="value">${r(e.cumulativeIsaSavingsUsed)}</span>
              </div>
              <div class="history-field">
                <label>Remaining</label>
                <span class="value ${(e.yearlyIsaSavingsAllocation||0)-(e.cumulativeIsaSavingsUsed||0)>0?"success":"warning"}">
                  ${r((e.yearlyIsaSavingsAllocation||0)-(e.cumulativeIsaSavingsUsed||0))}
                </span>
              </div>
            </div>
          </div>
        `:""}

        <!-- Tax Summary -->
        <div class="history-detail-card">
          <h3>Tax Summary</h3>
          <div class="history-grid">
            <div class="history-field">
              <label>Personal Allowance</label>
              <span class="value">${r(e.pa)}</span>
            </div>
            <div class="history-field">
              <label>Basic Rate Limit</label>
              <span class="value">${r(e.brl)}</span>
            </div>
          </div>

          <table class="monthly-breakdown-table" style="margin-top:16px;">
            <thead>
              <tr>
                <th></th>
                <th>Monthly</th>
                <th>YTD</th>
                <th>Projected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="source-name">Tax Paid</td>
                <td>${r(e.taxPaidMonthly||e.monthlyTax)}</td>
                <td>${r(e.taxPaidYTD)}</td>
                <td>${r(e.taxProjectedAnnual)}</td>
              </tr>
              ${e.taxSavedMonthly>0||e.taxSavedProjectedAnnual>0?`
                <tr>
                  <td class="source-name">Tax Saved</td>
                  <td class="net-col">-${r(e.taxSavedMonthly)}</td>
                  <td class="net-col">-${r(e.taxSavedYTD)}</td>
                  <td class="net-col">-${r(e.taxSavedProjectedAnnual)}</td>
                </tr>
              `:""}
            </tbody>
          </table>
        </div>

        <!-- Withdrawal Details -->
        <div class="history-detail-card">
          <h3>Withdrawal Details</h3>
          <div class="history-grid">
            <div class="history-field">
              <label>Source</label>
              <span class="value">${l}</span>
            </div>
            ${e.consecutiveDraws>0?`
              <div class="history-field">
                <label>Consecutive Cash Draws</label>
                <span class="value warning">${e.consecutiveDraws}</span>
              </div>
            `:""}
            <div class="history-field">
              <label>Remaining Months</label>
              <span class="value">${e.remainingMonths||12}</span>
            </div>
          </div>
        </div>

        <!-- Rebalancing -->
        ${e.rebal?`
          <div class="history-detail-card">
            <h3>Rebalancing Suggestions</h3>
            <div style="padding:12px;background:rgba(243,156,18,0.1);border-radius:8px;">
              ${e.rebal}
            </div>
          </div>
        `:""}

        <!-- Actions -->
        <div class="history-actions">
          <button class="btn secondary" onclick="deleteHistoryEntry('${e.date}')">Delete Entry</button>
        </div>
      `;t.innerHTML=u,document.querySelectorAll(".history-tab").forEach(h=>{h.classList.toggle("active",h.textContent===Hs(n))})}window.selectHistoryEntry=function(n){Ln=n,Hf(n);const e=document.getElementById("historyTabs").querySelector(".history-tab.active");e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})};window.scrollHistoryTabs=function(n){const t=document.getElementById("historyTabs"),e=200;n==="left"?t.scrollLeft-=e:t.scrollLeft+=e};window.deleteHistoryEntry=async function(n){const t=Hs(n);if(confirm(`Delete entry for ${t}?`)){if(!Te()){alert("Please sign in to delete entries");return}try{await Xw(n),Ln=null,await Io()}catch(e){console.error("Delete error:",e),alert("Error deleting: "+e.message)}}};let gr=null;async function Yi(){const n=document.getElementById("taxYearTabs"),t=document.getElementById("taxYearDetail");if(!n||!t)return;n.innerHTML='<span class="loading">Loading...</span>';const e=await ji(),r=await Jn(),i=Object.keys(e).sort(),s=wb(),a=Eb(i,s,40);let l="";if(a.forEach(h=>{const f=e[h],m=f&&f.yearSetupComplete,v=h===gr,T=["tax-year-tab"];v&&T.push("active"),m||T.push("not-setup"),l+=`<button class="${T.join(" ")}" onclick="selectTaxYear('${h}')">${h}</button>`}),n.innerHTML=l,!gr){const h=i.filter(f=>{var m;return(m=e[f])==null?void 0:m.yearSetupComplete});gr=h.length>0?h[h.length-1]:s}await Wf(gr,e,r);const u=n.querySelector(".tax-year-tab.active");u&&u.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}function wb(){const n=new Date,t=n.getFullYear(),e=n.getMonth()+1;return e<4||e===4&&n.getDate()<6?`${String(t-1).slice(-2)}/${String(t).slice(-2)}`:`${String(t).slice(-2)}/${String(t+1).slice(-2)}`}function Eb(n,t,e){const r=new Set(n),[i]=t.split("/").map(Number),s=i<50?2e3+i:1900+i;for(let a=0;a<e&&r.size<e;a++){const l=s+a,u=l+1;r.add(`${String(l).slice(-2)}/${String(u).slice(-2)}`)}return Array.from(r).sort()}async function Wf(n,t,e){var v,T,S,x,I,k,M,R,N,F,V,b,g,w,_;const r=document.getElementById("taxYearDetail"),i=t[n];if(!i||!i.yearSetupComplete){r.innerHTML=`
          <div class="not-configured-message">
            <h3>Tax Year ${n} Not Configured</h3>
            <p>This tax year hasn't been set up yet. Use the Decision Tool to calculate a decision for a month in this tax year to trigger the setup wizard.</p>
            <button class="btn primary" onclick="triggerWizardForYear('${n}')">Set Up ${n}</button>
          </div>
        `;return}const s=e.statePensionYear||12,a=e.statePension||0,l=Object.keys(t).sort(),u=l.indexOf(n);let h=0;if(u>=s&&a>0){let E=1;for(let A=0;A<=u;A++)E*=1+(((v=t[l[A]])==null?void 0:v.cpi)||.04);h=Math.round(a*E)}const f=E=>E!=null?"£"+Math.round(E).toLocaleString():"—";let m=`
        <!-- Tax Thresholds -->
        <div class="tax-year-detail-card">
          <h3>Tax Thresholds</h3>
          <div class="tax-year-grid">
            <div class="tax-year-field">
              <label>Personal Allowance</label>
              <input type="number" value="${i.pa||12570}" onchange="updateTaxYear('${n}','pa',this.value)">
            </div>
            <div class="tax-year-field">
              <label>Basic Rate Limit</label>
              <input type="number" value="${i.brl||50270}" onchange="updateTaxYear('${n}','brl',this.value)">
            </div>
            <div class="tax-year-field">
              <label>Higher Rate Limit</label>
              <input type="number" value="${i.hrl||125140}" onchange="updateTaxYear('${n}','hrl',this.value)">
            </div>
            <div class="tax-year-field">
              <label>CPI (Previous Year)</label>
              <input type="number" step="0.1" value="${((i.cpi||.04)*100).toFixed(1)}" onchange="updateTaxYear('${n}','cpi',this.value/100)">
            </div>
          </div>
        </div>

        <!-- Income Configuration -->
        <div class="tax-year-detail-card">
          <h3>Income Configuration</h3>
          <div class="tax-year-grid">
            <div class="tax-year-field">
              <label>Target Annual Salary</label>
              <span class="value">${f(i.confirmedSalary)}</span>
            </div>
            <div class="tax-year-field">
              <label>Other Taxable Income (Annual)</label>
              <input type="number" value="${i.other||0}" onchange="updateTaxYear('${n}','other',this.value)">
            </div>
            <div class="tax-year-field">
              <label>State Pension (Annual)</label>
              <span class="value">${u>=s?f(h):`Starts in year ${s} (${s-u} years)`}</span>
            </div>
            <div class="tax-year-field">
              <label>Income Before Pension Start</label>
              <span class="value">${f(i.grossIncomeToDate)}</span>
            </div>
          </div>
        </div>

        <!-- Tax Efficiency -->
        <div class="tax-year-detail-card">
          <h3>Tax Efficiency</h3>
          <div class="tax-year-grid">
            <div class="tax-year-field">
              <label>Mode</label>
              <span class="tax-mode-badge ${i.isTaxEfficient?"efficient":"inefficient"}">
                ${i.isTaxEfficient?"Tax-Efficient":"Tax-Inefficient"}
              </span>
            </div>
            <div class="tax-year-field">
              <label>ISA/Savings Allocation</label>
              <span class="value">${f(i.isaSavingsAllocation)}</span>
            </div>
            <div class="tax-year-field">
              <label>ISA/Savings Used</label>
              <span class="value">${f(i.isaSavingsUsed||0)}</span>
            </div>
            <div class="tax-year-field">
              <label>Start Month</label>
              <span class="value">${bb(i.startMonth||4)}</span>
            </div>
            <div class="tax-year-field">
              <label>Remaining Months (at setup)</label>
              <span class="value">${i.remainingMonths||12}</span>
            </div>
          </div>
        </div>
      `;if(i.expectedMonthly){const E=i.expectedMonthly;m+=`
          <div class="tax-year-detail-card">
            <h3>Expected Monthly Breakdown</h3>
            <table class="monthly-breakdown-table">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Gross</th>
                  <th>Tax</th>
                  <th>Net</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="source-name">SIPP</td>
                  <td>${f((T=E.sipp)==null?void 0:T.gross)}</td>
                  <td class="tax-col">-${f((S=E.sipp)==null?void 0:S.tax)}</td>
                  <td class="net-col">${f((x=E.sipp)==null?void 0:x.net)}</td>
                </tr>
                ${((I=E.other)==null?void 0:I.gross)>0?`
                <tr>
                  <td class="source-name">Other Income</td>
                  <td>${f((k=E.other)==null?void 0:k.gross)}</td>
                  <td class="tax-col">-${f((M=E.other)==null?void 0:M.tax)}</td>
                  <td class="net-col">${f((R=E.other)==null?void 0:R.net)}</td>
                </tr>
                `:""}
                ${((N=E.statePension)==null?void 0:N.gross)>0?`
                <tr>
                  <td class="source-name">State Pension</td>
                  <td>${f((F=E.statePension)==null?void 0:F.gross)}</td>
                  <td class="tax-col">-${f((V=E.statePension)==null?void 0:V.tax)}</td>
                  <td class="net-col">${f((b=E.statePension)==null?void 0:b.net)}</td>
                </tr>
                `:""}
                ${((g=E.isa)==null?void 0:g.net)>0?`
                <tr>
                  <td class="source-name">ISA <span style="color:var(--success);font-size:11px;">(tax-free)</span></td>
                  <td>${f((w=E.isa)==null?void 0:w.gross)}</td>
                  <td style="color:var(--success);">£0</td>
                  <td class="net-col">${f((_=E.isa)==null?void 0:_.net)}</td>
                </tr>
                `:""}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${f(E.totalGross)}</strong></td>
                  <td class="tax-col"><strong>-${f(E.totalTax)}</strong></td>
                  <td class="net-col"><strong>${f(E.totalNet)}</strong></td>
                </tr>
              </tfoot>
            </table>
            <p style="margin-top:16px;font-size:14px;color:var(--text);">
              <strong>Monthly take-home: ${f(E.totalNet)}</strong>
            </p>
          </div>
        `}m+=`
        <div class="tax-year-actions">
          <button class="btn secondary" onclick="deleteTaxYear('${n}')">Delete Year</button>
          <button class="btn secondary" onclick="reconfigureTaxYear('${n}')">Reconfigure via Wizard</button>
        </div>
      `,r.innerHTML=m,document.querySelectorAll(".tax-year-tab").forEach(E=>{E.classList.toggle("active",E.textContent===n)})}window.selectTaxYear=async function(n){gr=n;const t=await ji(),e=await Jn();await Wf(n,t,e);const i=document.getElementById("taxYearTabs").querySelector(`.tax-year-tab[onclick="selectTaxYear('${n}')"]`);i&&i.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})};window.scrollTaxYearTabs=function(n){const t=document.getElementById("taxYearTabs"),e=200;n==="left"?t.scrollLeft-=e:t.scrollLeft+=e};function bb(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][(n-1)%12]||"April"}window.triggerWizardForYear=async function(n){const[t]=n.split("/").map(Number),e=t<50?2e3+t:1900+t,r=`${e}-04`,i=document.getElementById("selectedMonth");i&&(i.value=r),document.querySelectorAll(".tab").forEach(s=>s.classList.remove("active")),document.querySelector('.tab[data-tab="decision"]').classList.add("active"),document.querySelectorAll(".tab-content").forEach(s=>s.classList.remove("active")),document.getElementById("decision-content").classList.add("active"),document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(s=>s.classList.remove("active")),document.querySelector('.sub-tab[data-decisiontab="entry"]').classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(s=>s.classList.add("hidden")),document.getElementById("decision-entry").classList.remove("hidden"),alert(`Please click "Calculate" with April ${e} selected to set up tax year ${n}`)};window.reconfigureTaxYear=async function(n){if(confirm(`This will allow you to reconfigure tax year ${n}. The setup wizard will be triggered when you next calculate a decision for this year. Continue?`))try{const t=await vo(n);t.yearSetupComplete=!1,await _o(n,t),await Yi(),alert(`Tax year ${n} has been marked for reconfiguration. Calculate a decision for this year to run the wizard again.`)}catch(t){console.error("Error:",t),alert("Error: "+t.message)}};window.updateTaxYear=async function(n,t,e){try{const r=await vo(n);r[t]=parseFloat(e),await _o(n,r)}catch(r){console.error("Error updating tax year:",r),alert("Error saving: "+r.message)}};window.deleteTaxYear=async function(n){if(confirm("Delete tax year "+n+"? This will remove all configuration for this year."))try{const t=await Xn();delete t.taxYears[n],await yo(t),gr=null,await Yi()}catch(t){console.error("Error deleting tax year:",t),alert("Error deleting: "+t.message)}};window.addTaxYear=async function(){if(!Te()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await _o(n,{}),await Yi()}catch(t){console.error("Save error:",t),alert("Error saving: "+t.message)}};console.log("Pension Planner v"+nd+" loaded");
