(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function qf(n){const e=(n.sippDraw||0)+(n.other||0)+(n.statePension||0),t=e*12,r=n.pa||12570,i=n.brl||50270;let s=0;t>r&&(t<=i?s=(t-r)*.2:s=(i-r)*.2+(t-i)*.4);const a=s/12,l=e-a+(n.isaDraw||0);return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget,source:n.source,dEquity:n.drawFromEquity||0,dBond:n.drawFromBond||0,dCash:n.drawFromCash||0,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,pa:r,brl:i,monthlyTax:a,monthlyNet:l,mode:n.taxEfficient?"Tax-Efficient":"Standard",inProtection:n.inProtection,reason:n.protectionReason||"",consecutiveDraws:n.consecutiveCashDraws||0,boostAmount:n.boostAmount,boostEligible:n.boostEligible||!1,rebal:n.rebalanceActions?n.rebalanceActions.join("; "):""}}const Di={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"},Cu="6.0.0",Je={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},ku={ASSUMED_CPI:.025,OTHER_INCOME_CAP:.04},Ge={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},lo={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},$r={1928:.4781,1929:-.172,1930:-.338,1931:-.527,1932:-.231,1933:.669,1934:.041,1935:.3879,1936:.2492,1937:-.3839,1938:.2846,1939:-.0278,1940:-.1278,1941:-.1552,1942:.0782,1943:.1382,1944:.1226,1945:.2665,1946:-.0818,1947:.0225,1948:-.0246,1949:.1279,1950:.1787,1951:.1463,1952:.0837,1953:-.0377,1954:.4399,1955:.2084,1956:.0262,1957:-.1278,1958:.3396,1959:.1612,1960:-.0912,1961:.1889,1962:-.1081,1963:.1715,1964:.1478,1965:.1058,1966:-.1858,1967:.1506,1968:.0457,1969:-.1524,1970:.0482,1971:.0627,1972:.1476,1973:-.1652,1974:-.2777,1975:.3815,1976:.1774,1977:-.1271,1978:-.0303,1979:.0414,1980:.1493,1981:-.0909,1982:.1976,1983:.2027,1984:-.0365,1985:.2778,1986:.2278,1987:.0227,1988:.1185,1989:.2697,1990:-.0456,1991:.2013,1992:.044,1993:.1372,1994:.0218,1995:.3345,1996:.2601,1997:.2264,1998:.1627,1999:.2516,2e3:-.0617,2001:-.0727,2002:-.1679,2003:.2525,2004:.0333,2005:-.0061,2006:.1618,2007:.0648,2008:-.3355,2009:.1882,2010:.1102,2011:.0556,2012:.0728,2013:.2665,2014:.0775,2015:-.023,2016:.1342,2017:.2511,2018:-.0583,2019:.2234,2020:.0726,2021:.1873,2022:-.0878,2023:.1399,2024:.1299},ra={1928:-.012,1929:.002,1930:-.06,1931:-.094,1932:-.103,1933:.005,1934:.021,1935:.03,1936:.014,1937:.028,1938:-.02,1939:-.014,1940:.01,1941:.099,1942:.09,1943:.03,1944:.023,1945:.023,1946:.186,1947:.087,1948:.03,1949:-.02,1950:.059,1951:.06,1952:.009,1953:.006,1954:-.007,1955:.004,1956:.03,1957:.028,1958:.017,1959:.015,1960:.014,1961:.007,1962:.013,1963:.017,1964:.01,1965:.019,1966:.034,1967:.028,1968:.046,1969:.062,1970:.055,1971:.033,1972:.034,1973:.087,1974:.124,1975:.069,1976:.048,1977:.067,1978:.09,1979:.133,1980:.125,1981:.089,1982:.038,1983:.038,1984:.04,1985:.038,1986:.011,1987:.044,1988:.044,1989:.046,1990:.061,1991:.03,1992:.029,1993:.027,1994:.026,1995:.025,1996:.034,1997:.017,1998:.016,1999:.027,2e3:.034,2001:.016,2002:.024,2003:.019,2004:.033,2005:.034,2006:.025,2007:.041,2008:.001,2009:.027,2010:.015,2011:.03,2012:.017,2013:.015,2014:.008,2015:.007,2016:.021,2017:.021,2018:.019,2019:.023,2020:.012,2021:.07,2022:.065,2023:.032,2024:.029},$f={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}};function jf(n,e,t,r=Je.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=e;if(n>Je.PA_TAPER_THRESHOLD){const f=(n-Je.PA_TAPER_THRESHOLD)*Je.PA_TAPER_RATE;i=Math.max(0,e-f)}const s=Math.max(0,n-i),a=Math.max(0,t-i),l=r-t;let u=0;const h=Math.min(s,a);if(u+=h*Je.BASIC_RATE,s>a){const f=Math.min(s-a,l);u+=f*Je.HIGHER_RATE}if(s>a+l){const f=s-a-l;u+=f*Je.ADDITIONAL_RATE}return u}function Hf(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Wf(n){const{baseSalary:e,cumulativeInflation:t,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:l=0,pa:u,brl:h,hrl:f,taxMode:y="inflates"}=n,E=y==="frozen"?u:u*t,b=y==="frozen"?h:h*t,S=y==="frozen"?f:f*t,P=e*t,I=Gf(i,r),k=l>=a?s*t:0,M=I+k,V=Math.max(0,b-M),B=Math.max(0,P-M),L=Math.min(V,B);return{pa:E,brl:b,hrl:S,targetGross:P,other:I,statePension:k,fixedIncome:M,annualSippDraw:L,monthlySippDraw:L/12,sippPlusfixedAtBRL:V+M===b}}function Gf(n,e,t=ku.OTHER_INCOME_CAP){let r=n;for(const i of e)r*=1+Math.min(i,t);return r}function Yf(n,e,t=.025){const r=[],i=[];for(let s=0;s<=e;s++){s>0&&i.push(t);const a=Math.pow(1+t,s),l=Wf({baseSalary:n.baseSalary,cumulativeInflation:a,yearlyInflation:[...i],other:n.other,statePension:n.statePension,statePensionYear:n.statePensionYear,yearNumber:s,pa:n.pa,brl:n.brl,hrl:n.hrl,taxMode:n.taxMode}),u=l.annualSippDraw+l.other+l.statePension,h=jf(u,l.pa,l.brl,l.hrl);r.push({year:s,brl:l.brl,other:l.other,statePension:l.statePension,sippDraw:l.annualSippDraw,totalTaxable:u,tax:h,netIncome:u-h})}return r}function $n(n,e,t,r,i){if(i){const s=Math.max(0,1-e/t);return n*r*s}return n*r}function Kf(n,e,t){const r=$n(n.equityMin,e,n.duration,t,!0),i=$n(n.bondMin,e,n.duration,t,!0),s=$n(n.cashTarget,e,n.duration,t,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function Qf(n,e=ku.ASSUMED_CPI){const t=[];for(let r=0;r<=n.duration;r++){const i=Math.pow(1+e,r),s=Kf(n,r,i);t.push({year:r,cumulativeInflation:i,equityMin:s.equity,bondMin:s.bond,cashTarget:s.cash,totalMin:s.total})}return t}function ia(n){let e=n;return function(){return e=Math.sin(e)*1e4,e-Math.floor(e)}}function Pr(n,e,t){const r=t(),i=t(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+e*s}function Mu(n){const e=JSON.stringify(n);let t=0;for(let r=0;r<e.length;r++){const i=e.charCodeAt(r);t=(t<<5)-t+i,t=t&t}return t.toString(16)}var hc={};/**
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
 */const Du=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let E=(l&15)<<2|h>>6,b=h&63;u||(b=64,a||(E=64)),r.push(t[f],t[y],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Du(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new Jf;const E=s<<2|l>>4;if(r.push(E),h!==64){const b=l<<4&240|h>>2;if(r.push(b),y!==64){const S=h<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zf=function(n){const e=Du(n);return Nu.encodeByteArray(e,!0)},Ki=function(n){return Zf(n).replace(/\./g,"")},Vu=function(n){try{return Nu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tp=()=>ep().__FIREBASE_DEFAULTS__,np=()=>{if(typeof process>"u"||typeof hc>"u")return;const n=hc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vu(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return tp()||np()||rp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lu=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ip=n=>{const e=Lu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ou=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},Bu=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function op(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ki(JSON.stringify(t)),Ki(JSON.stringify(a)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function lp(){var n;const e=(n=ms())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function up(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hp(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fp(){return!lp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const gp="FirebaseError";class Nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?yp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Nt(i,l,r)}}function yp(n,e){return n.replace(vp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vp=/\{\$([^}]+)}/g;function _p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(fc(s)&&fc(a)){if(!Qi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function fc(n){return n!==null&&typeof n=="object"}/**
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
 */function ei(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function kr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ep(n,e){const t=new wp(n,e);return t.subscribe.bind(t)}class wp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ip(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=co),i.error===void 0&&(i.error=co),i.complete===void 0&&(i.complete=co);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class wn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class Tp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ap(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bp(n){return n===mn?void 0:n}function Ap(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Rp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Pp=Q.INFO,xp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Cp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=xp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const kp=(n,e)=>e.some(t=>n instanceof t);let pc,mc;function Mp(){return pc||(pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dp(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fu=new WeakMap,Co=new WeakMap,Uu=new WeakMap,uo=new WeakMap,oa=new WeakMap;function Np(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Kt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fu.set(t,n)}).catch(()=>{}),oa.set(e,n),e}function Vp(n){if(Co.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Co.set(n,e)}let ko={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Co.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lp(n){ko=n(ko)}function Op(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ho(this),e,...t);return Uu.set(r,e.sort?e.sort():[e]),Kt(r)}:Dp().includes(n)?function(...e){return n.apply(ho(this),e),Kt(Fu.get(this))}:function(...e){return Kt(n.apply(ho(this),e))}}function Bp(n){return typeof n=="function"?Op(n):(n instanceof IDBTransaction&&Vp(n),kp(n,Mp())?new Proxy(n,ko):n)}function Kt(n){if(n instanceof IDBRequest)return Np(n);if(uo.has(n))return uo.get(n);const e=Bp(n);return e!==n&&(uo.set(n,e),oa.set(e,n)),e}const ho=n=>oa.get(n);function Fp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Kt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kt(a.result),u.oldVersion,u.newVersion,Kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Up=["get","getKey","getAll","getAllKeys","count"],zp=["put","add","delete","clear"],fo=new Map;function gc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=zp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Up.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return fo.set(e,s),s}Lp(n=>({...n,get:(e,t,r)=>gc(e,t)||n.get(e,t,r),has:(e,t)=>!!gc(e,t)||n.has(e,t)}));/**
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
 */class qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($p(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function $p(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",yc="0.10.13";/**
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
 */const xt=new sa("@firebase/app"),jp="@firebase/app-compat",Hp="@firebase/analytics-compat",Wp="@firebase/analytics",Gp="@firebase/app-check-compat",Yp="@firebase/app-check",Kp="@firebase/auth",Qp="@firebase/auth-compat",Xp="@firebase/database",Jp="@firebase/data-connect",Zp="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",rm="@firebase/installations-compat",im="@firebase/messaging",sm="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",lm="@firebase/remote-config",cm="@firebase/remote-config-compat",um="@firebase/storage",dm="@firebase/storage-compat",hm="@firebase/firestore",fm="@firebase/vertexai-preview",pm="@firebase/firestore-compat",mm="firebase",gm="10.14.1";/**
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
 */const Do="[DEFAULT]",ym={[Mo]:"fire-core",[jp]:"fire-core-compat",[Wp]:"fire-analytics",[Hp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Gp]:"fire-app-check-compat",[Kp]:"fire-auth",[Qp]:"fire-auth-compat",[Xp]:"fire-rtdb",[Jp]:"fire-data-connect",[Zp]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[rm]:"fire-iid-compat",[im]:"fire-fcm",[sm]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[lm]:"fire-rc",[cm]:"fire-rc-compat",[um]:"fire-gcs",[dm]:"fire-gcs-compat",[hm]:"fire-fst",[pm]:"fire-fst-compat",[fm]:"fire-vertex","fire-js":"fire-js",[mm]:"fire-js-all"};/**
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
 */const Xi=new Map,vm=new Map,No=new Map;function vc(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(No.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,n);for(const t of Xi.values())vc(t,n);for(const t of vm.values())vc(t,n);return!0}function aa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n.settings!==void 0}/**
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
 */const _m={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new Zr("app","Firebase",_m);/**
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
 */class Em{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=gm;function zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Do,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(t||(t=Ou()),!t)throw Qt.create("no-options");const s=Xi.get(i);if(s){if(Qi(t,s.options)&&Qi(r,s.config))return s;throw Qt.create("duplicate-app",{appName:i})}const a=new Sp(i);for(const u of No.values())a.addComponent(u);const l=new Em(t,r,a);return Xi.set(i,l),l}function qu(n=Do){const e=Xi.get(n);if(!e&&n===Do&&Ou())return zu();if(!e)throw Qt.create("no-app",{appName:n});return e}function Xt(n,e,t){var r;let i=(r=ym[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}Qn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wm="firebase-heartbeat-database",Im=1,jr="firebase-heartbeat-store";let po=null;function $u(){return po||(po=Fp(wm,Im,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),po}async function Tm(n){try{const t=(await $u()).transaction(jr),r=await t.objectStore(jr).get(ju(n));return await t.done,r}catch(e){if(e instanceof Nt)xt.warn(e.message);else{const t=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function _c(n,e){try{const r=(await $u()).transaction(jr,"readwrite");await r.objectStore(jr).put(e,ju(n)),await r.done}catch(t){if(t instanceof Nt)xt.warn(t.message);else{const r=Qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(r.message)}}}function ju(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bm=1024,Am=30*24*60*60*1e3;class Sm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ec();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Am}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:r,unsentEntries:i}=Rm(this._heartbeatsCache.heartbeats),s=Ki(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return xt.warn(t),""}}}function Ec(){return new Date().toISOString().substring(0,10)}function Rm(n,e=bm){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),wc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wc(n){return Ki(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xm(n){Qn(new wn("platform-logger",e=>new qp(e),"PRIVATE")),Qn(new wn("heartbeat",e=>new Sm(e),"PRIVATE")),Xt(Mo,yc,n),Xt(Mo,yc,"esm2017"),Xt("fire-js","")}xm("");var Cm="firebase",km="10.14.1";/**
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
 */Xt(Cm,km,"app");function la(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Hu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mm=Hu,Wu=new Zr("auth","Firebase",Hu());/**
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
 */const Ji=new sa("@firebase/auth");function Dm(n,...e){Ji.logLevel<=Q.WARN&&Ji.warn(`Auth (${sr}): ${n}`,...e)}function Fi(n,...e){Ji.logLevel<=Q.ERROR&&Ji.error(`Auth (${sr}): ${n}`,...e)}/**
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
 */function it(n,...e){throw ua(n,...e)}function at(n,...e){return ua(n,...e)}function ca(n,e,t){const r=Object.assign(Object.assign({},Mm()),{[e]:t});return new Zr("auth","Firebase",r).create(e,{appName:n.name})}function Rt(n){return ca(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(n,"argument-error"),ca(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ua(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wu.create(n,...e)}function H(n,e,...t){if(!n)throw ua(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function Ct(n,e){n||bt(e)}/**
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
 */function Vo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vm(){return Ic()==="http:"||Ic()==="https:"}function Ic(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Lm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vm()||up()||"connection"in navigator)?navigator.onLine:!0}function Om(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=ap()||dp()}get(){return Lm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function da(n,e){Ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fm=new ti(3e4,6e4);function Vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gt(n,e,t,r,i={}){return Yu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=ei(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return cp()||(h.referrerPolicy="no-referrer"),Gu.fetch()(Ku(n,n.config.apiHost,t,l),h)})}async function Yu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bm),e);try{const i=new zm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ni(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ni(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ni(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ca(n,f,h);it(n,f)}}catch(i){if(i instanceof Nt)throw i;it(n,"network-request-failed",{message:String(i)})}}async function ni(n,e,t,r,i={}){const s=await gt(n,e,t,r,i);return"mfaPendingCredential"in s&&it(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ku(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?da(n.config,i):`${n.config.apiScheme}://${i}`}function Um(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=at(n,e,r);return i.customData._tokenResponse=t,i}function Tc(n){return n!==void 0&&n.enterprise!==void 0}class qm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Um(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $m(n,e){return gt(n,"GET","/v2/recaptchaConfig",Vt(n,e))}/**
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
 */async function jm(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function Qu(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hm(n,e=!1){const t=ye(n),r=await t.getIdToken(e),i=ha(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lr(mo(i.auth_time)),issuedAtTime:Lr(mo(i.iat)),expirationTime:Lr(mo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mo(n){return Number(n)*1e3}function ha(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vu(t);return i?JSON.parse(i):(Fi("Failed to decode base64 JWT payload"),null)}catch(i){return Fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bc(n){const e=ha(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Nt&&Wm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Gm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Xn(n,Qu(t,{idToken:r}));H(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xu(s.providerUserInfo):[],l=Km(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function Ym(n){const e=ye(n);await Zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Km(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xu(n){return n.map(e=>{var{providerId:t}=e,r=la(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qm(n,e){const t=await Yu(n,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Ku(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Gu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xm(n,e){return gt(n,"POST","/v2/accounts:revokeToken",Vt(n,e))}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new jn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function zt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hm(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Xn(this,jm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,I=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=t.createdAt)!==null&&h!==void 0?h:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:V,isAnonymous:B,providerData:L,stsTokenManager:w}=t;H(C&&w,e,"internal-error");const m=jn.fromJSON(this.name,w);H(typeof C=="string",e,"internal-error"),zt(y,e.name),zt(E,e.name),H(typeof V=="boolean",e,"internal-error"),H(typeof B=="boolean",e,"internal-error"),zt(b,e.name),zt(S,e.name),zt(P,e.name),zt(I,e.name),zt(k,e.name),zt(M,e.name);const _=new At({uid:C,auth:e,email:E,emailVerified:V,displayName:y,isAnonymous:B,photoURL:S,phoneNumber:b,tenantId:P,stsTokenManager:m,createdAt:k,lastLoginAt:M});return L&&Array.isArray(L)&&(_.providerData=L.map(g=>Object.assign({},g))),I&&(_._redirectEventId=I),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new jn;i.updateFromServerResponse(t);const s=new At({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new jn;l.updateFromIdToken(r);const u=new At({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Ac=new Map;function St(n){Ct(n instanceof Function,"Expected a class definition");let e=Ac.get(n);return e?(Ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ac.set(n,e),e)}/**
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
 */class Ju{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ju.type="NONE";const Sc=Ju;/**
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
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Hn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ui("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hn(St(Sc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||St(Sc);const a=Ui(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const y=At._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Hn(s,e,r))}}/**
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
 */function Rc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(id(e))return"Blackberry";if(sd(e))return"Webos";if(ed(e))return"Safari";if((e.includes("chrome/")||td(e))&&!e.includes("edge/"))return"Chrome";if(rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zu(n=Ue()){return/firefox\//i.test(n)}function ed(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function td(n=Ue()){return/crios\//i.test(n)}function nd(n=Ue()){return/iemobile/i.test(n)}function rd(n=Ue()){return/android/i.test(n)}function id(n=Ue()){return/blackberry/i.test(n)}function sd(n=Ue()){return/webos/i.test(n)}function fa(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jm(n=Ue()){var e;return fa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zm(){return hp()&&document.documentMode===10}function od(n=Ue()){return fa(n)||rd(n)||sd(n)||id(n)||/windows phone/i.test(n)||nd(n)}/**
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
 */function ad(n,e=[]){let t;switch(n){case"Browser":t=Rc(Ue());break;case"Worker":t=`${Rc(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sr}/${r}`}/**
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
 */class eg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tg(n,e={}){return gt(n,"GET","/v2/passwordPolicy",Vt(n,e))}/**
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
 */const ng=6;class rg{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ng,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ig{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pc(this),this.idTokenSubscription=new Pc(this),this.beforeStateQueue=new eg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qu(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Om()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Rt(this));const t=e?ye(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tg(this),t=new rg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lt(n){return ye(n)}class Pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ep(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sg(n){gs=n}function ld(n){return gs.loadJS(n)}function og(){return gs.recaptchaEnterpriseScript}function ag(){return gs.gapiScript}function lg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const cg="recaptcha-enterprise",ug="NO_RECAPTCHA";class dg{constructor(e){this.type=cg,this.auth=Lt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{$m(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new qm(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Tc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ug)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Tc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=og();u.length!==0&&(u+=l),ld(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function xc(n,e,t,r=!1){const i=new dg(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function es(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function hg(n,e){const t=aa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Qi(s,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function fg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pg(n,e,t){const r=Lt(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cd(e),{host:a,port:l}=mg(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gg()}function cd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mg(n){const e=cd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Cc(a)}}}function Cc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function yg(n,e){return gt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vg(n,e){return ni(n,"POST","/v1/accounts:signInWithPassword",Vt(n,e))}async function _g(n,e){return gt(n,"POST","/v1/accounts:sendOobCode",Vt(n,e))}async function Eg(n,e){return _g(n,e)}/**
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
 */async function wg(n,e){return ni(n,"POST","/v1/accounts:signInWithEmailLink",Vt(n,e))}async function Ig(n,e){return ni(n,"POST","/v1/accounts:signInWithEmailLink",Vt(n,e))}/**
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
 */class Hr extends pa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Hr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Hr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return es(e,t,"signInWithPassword",vg);case"emailLink":return wg(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return es(e,r,"signUpPassword",yg);case"emailLink":return Ig(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wn(n,e){return ni(n,"POST","/v1/accounts:signInWithIdp",Vt(n,e))}/**
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
 */const Tg="http://localhost";class In extends pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=la(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new In(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Tg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ei(t)}return e}}/**
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
 */function bg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ag(n){const e=Cr(kr(n)).link,t=e?Cr(kr(e)).deep_link_id:null,r=Cr(kr(n)).deep_link_id;return(r?Cr(kr(r)).link:null)||r||t||e||n}class ma{constructor(e){var t,r,i,s,a,l;const u=Cr(kr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=bg((i=u.mode)!==null&&i!==void 0?i:null);H(h&&f&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Ag(e);try{return new ma(t)}catch{return null}}}/**
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
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,t){return Hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ma.parseLink(t);return H(r,"argument-error"),Hr._fromEmailAndCode(e,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ga{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ri extends ga{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends ri{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class jt extends ri{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class Ht extends ri{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Sg(n,e){return ni(n,"POST","/v1/accounts:signUp",Vt(n,e))}/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await At._fromIdTokenResponse(e,r,i),a=kc(r);return new Tn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=kc(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ts extends Nt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ts.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ts(e,t,r,i)}}function ud(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ts._fromErrorAndOperation(n,s,e,r):s})}async function Rg(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tn._forOperation(n,"link",r)}/**
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
 */async function Pg(n,e,t=!1){const{auth:r}=n;if(ot(r.app))return Promise.reject(Rt(r));const i="reauthenticate";try{const s=await Xn(n,ud(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=ha(s.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(n.uid===l,r,"user-mismatch"),Tn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
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
 */async function dd(n,e,t=!1){if(ot(n.app))return Promise.reject(Rt(n));const r="signIn",i=await ud(n,r,e),s=await Tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function xg(n,e){return dd(Lt(n),e)}/**
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
 */async function hd(n){const e=Lt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cg(n,e,t){const r=Lt(n);await es(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Eg)}async function kg(n,e,t){if(ot(n.app))return Promise.reject(Rt(n));const r=Lt(n),a=await es(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&hd(n),u}),l=await Tn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Mg(n,e,t){return ot(n.app)?Promise.reject(Rt(n)):xg(ye(n),or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hd(n),r})}/**
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
 */async function Dg(n,e){return gt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Ng(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ye(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Xn(r,Dg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Vg(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function Lg(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function Og(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function Bg(n){return ye(n).signOut()}const ns="__sak";/**
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
 */class fd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fg=1e3,Ug=10;class pd extends fd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Zm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ug):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pd.type="LOCAL";const zg=pd;/**
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
 */class md extends fd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}md.type="SESSION";const gd=md;/**
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
 */function qg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await qg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function ya(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $g{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=ya("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const E=y;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(E.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ut(){return window}function jg(n){ut().location.href=n}/**
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
 */function yd(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gg(){return yd()?self:null}/**
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
 */const vd="firebaseLocalStorageDb",Yg=1,rs="firebaseLocalStorage",_d="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vs(n,e){return n.transaction([rs],e?"readwrite":"readonly").objectStore(rs)}function Kg(){const n=indexedDB.deleteDatabase(vd);return new ii(n).toPromise()}function Oo(){const n=indexedDB.open(vd,Yg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(rs,{keyPath:_d})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(rs)?e(r):(r.close(),await Kg(),e(await Oo()))})})}async function Mc(n,e,t){const r=vs(n,!0).put({[_d]:e,value:t});return new ii(r).toPromise()}async function Qg(n,e){const t=vs(n,!1).get(e),r=await new ii(t).toPromise();return r===void 0?null:r.value}function Dc(n,e){const t=vs(n,!0).delete(e);return new ii(t).toPromise()}const Xg=800,Jg=3;class Ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(Gg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hg(),!this.activeServiceWorker)return;this.sender=new $g(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oo();return await Mc(e,ns,"1"),await Dc(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Qg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vs(i,!1).getAll();return new ii(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ed.type="LOCAL";const Zg=Ed;new ti(3e4,6e4);/**
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
 */function wd(n,e){return e?St(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class va extends pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ey(n){return dd(n.auth,new va(n),n.bypassAuthState)}function ty(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Pg(t,new va(n),n.bypassAuthState)}async function ny(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Rg(t,new va(n),n.bypassAuthState)}/**
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
 */class Id{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ey;case"linkViaPopup":case"linkViaRedirect":return ny;case"reauthViaPopup":case"reauthViaRedirect":return ty;default:it(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ry=new ti(2e3,1e4);async function iy(n,e,t){if(ot(n.app))return Promise.reject(at(n,"operation-not-supported-in-this-environment"));const r=Lt(n);Nm(n,e,ga);const i=wd(r,t);return new gn(r,"signInViaPopup",e,i).executeNotNull()}class gn extends Id{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ry.get())};e()}}gn.currentPopupAction=null;/**
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
 */const sy="pendingRedirect",zi=new Map;class oy extends Id{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await ay(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ay(n,e){const t=uy(e),r=cy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ly(n,e){zi.set(n._key(),e)}function cy(n){return St(n._redirectPersistence)}function uy(n){return Ui(sy,n.config.apiKey,n.name)}async function dy(n,e,t=!1){if(ot(n.app))return Promise.reject(Rt(n));const r=Lt(n),i=wd(r,e),a=await new oy(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const hy=10*60*1e3;class fy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!py(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Td(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(at(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nc(e))}saveEventToCache(e){this.cachedEventUids.add(Nc(e)),this.lastProcessedEventTime=Date.now()}}function Nc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Td({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function py(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Td(n);default:return!1}}/**
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
 */async function my(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
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
 */const gy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yy=/^https?/;async function vy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await my(n);for(const t of e)try{if(_y(t))return}catch{}it(n,"unauthorized-domain")}function _y(n){const e=Vo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!yy.test(t))return!1;if(gy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ey=new ti(3e4,6e4);function Vc(){const n=ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wy(n){return new Promise((e,t)=>{var r,i,s;function a(){Vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vc(),t(at(n,"network-request-failed"))},timeout:Ey.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)a();else{const l=lg("iframefcb");return ut()[l]=()=>{gapi.load?a():t(at(n,"network-request-failed"))},ld(`${ag()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw qi=null,e})}let qi=null;function Iy(n){return qi=qi||wy(n),qi}/**
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
 */const Ty=new ti(5e3,15e3),by="__/auth/iframe",Ay="emulator/auth/iframe",Sy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Py(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?da(e,Ay):`https://${n.config.authDomain}/${by}`,r={apiKey:e.apiKey,appName:n.name,v:sr},i=Ry.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ei(r).slice(1)}`}async function xy(n){const e=await Iy(n),t=ut().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Py(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=at(n,"network-request-failed"),l=ut().setTimeout(()=>{s(a)},Ty.get());function u(){ut().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Cy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ky=500,My=600,Dy="_blank",Ny="http://localhost";class Lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vy(n,e,t,r=ky,i=My){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Cy),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Ue().toLowerCase();t&&(l=td(h)?Dy:t),Zu(h)&&(e=e||Ny,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[b,S])=>`${E}${b}=${S},`,"");if(Jm(h)&&l!=="_self")return Ly(e||"",l),new Lc(null);const y=window.open(e||"",l,f);H(y,n,"popup-blocked");try{y.focus()}catch{}return new Lc(y)}function Ly(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Oy="__/auth/handler",By="emulator/auth/handler",Fy=encodeURIComponent("fac");async function Oc(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sr,eventId:i};if(e instanceof ga){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_p(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof ri){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Fy}=${encodeURIComponent(u)}`:"";return`${Uy(n)}?${ei(l).slice(1)}${h}`}function Uy({config:n}){return n.emulator?da(n,By):`https://${n.authDomain}/${Oy}`}/**
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
 */const go="webStorageSupport";class zy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gd,this._completeRedirectFn=dy,this._overrideRedirectResult=ly}async _openPopup(e,t,r,i){var s;Ct((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Oc(e,t,r,Vo(),i);return Vy(e,a,ya())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Oc(e,t,r,Vo(),i);return jg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ct(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xy(e),r=new fy(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(go,{type:go},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[go];a!==void 0&&t(!!a),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return od()||ed()||fa()}}const qy=zy;var Bc="@firebase/auth",Fc="1.7.9";/**
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
 */class $y{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hy(n){Qn(new wn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ad(n)},h=new ig(r,i,s,u);return fg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new wn("auth-internal",e=>{const t=Lt(e.getProvider("auth").getImmediate());return(r=>new $y(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Bc,Fc,jy(n)),Xt(Bc,Fc,"esm2017")}/**
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
 */const Wy=5*60,Gy=Bu("authIdTokenMaxAge")||Wy;let Uc=null;const Yy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gy)return;const i=t==null?void 0:t.token;Uc!==i&&(Uc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ky(n=qu()){const e=aa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hg(n,{popupRedirectResolver:qy,persistence:[Zg,zg,gd]}),r=Bu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Yy(s.toString());Lg(t,a,()=>a(t.currentUser)),Vg(t,l=>a(l))}}const i=Lu("auth");return i&&pg(t,`http://${i}`),t}function Qy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Qy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hy("Browser");var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,bd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(g,T,A){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return m.prototype[T].apply(g,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);var g=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)g[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)g[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],T=w.g[2];var A=w.g[3],v=m+(A^_&(T^A))+g[0]+3614090360&4294967295;m=_+(v<<7&4294967295|v>>>25),v=A+(T^m&(_^T))+g[1]+3905402710&4294967295,A=m+(v<<12&4294967295|v>>>20),v=T+(_^A&(m^_))+g[2]+606105819&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(m^T&(A^m))+g[3]+3250441966&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(A^_&(T^A))+g[4]+4118548399&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(T^m&(_^T))+g[5]+1200080426&4294967295,A=m+(v<<12&4294967295|v>>>20),v=T+(_^A&(m^_))+g[6]+2821735955&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(m^T&(A^m))+g[7]+4249261313&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(A^_&(T^A))+g[8]+1770035416&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(T^m&(_^T))+g[9]+2336552879&4294967295,A=m+(v<<12&4294967295|v>>>20),v=T+(_^A&(m^_))+g[10]+4294925233&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(m^T&(A^m))+g[11]+2304563134&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(A^_&(T^A))+g[12]+1804603682&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(T^m&(_^T))+g[13]+4254626195&4294967295,A=m+(v<<12&4294967295|v>>>20),v=T+(_^A&(m^_))+g[14]+2792965006&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(m^T&(A^m))+g[15]+1236535329&4294967295,_=T+(v<<22&4294967295|v>>>10),v=m+(T^A&(_^T))+g[1]+4129170786&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(m^_))+g[6]+3225465664&4294967295,A=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(A^m))+g[11]+643717713&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(T^A))+g[0]+3921069994&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^A&(_^T))+g[5]+3593408605&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(m^_))+g[10]+38016083&4294967295,A=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(A^m))+g[15]+3634488961&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(T^A))+g[4]+3889429448&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^A&(_^T))+g[9]+568446438&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(m^_))+g[14]+3275163606&4294967295,A=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(A^m))+g[3]+4107603335&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(T^A))+g[8]+1163531501&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(T^A&(_^T))+g[13]+2850285829&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(m^_))+g[2]+4243563512&4294967295,A=m+(v<<9&4294967295|v>>>23),v=T+(m^_&(A^m))+g[7]+1735328473&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(T^A))+g[12]+2368359562&4294967295,_=T+(v<<20&4294967295|v>>>12),v=m+(_^T^A)+g[5]+4294588738&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^T)+g[8]+2272392833&4294967295,A=m+(v<<11&4294967295|v>>>21),v=T+(A^m^_)+g[11]+1839030562&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^m)+g[14]+4259657740&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^A)+g[1]+2763975236&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^T)+g[4]+1272893353&4294967295,A=m+(v<<11&4294967295|v>>>21),v=T+(A^m^_)+g[7]+4139469664&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^m)+g[10]+3200236656&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^A)+g[13]+681279174&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^T)+g[0]+3936430074&4294967295,A=m+(v<<11&4294967295|v>>>21),v=T+(A^m^_)+g[3]+3572445317&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^m)+g[6]+76029189&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(_^T^A)+g[9]+3654602809&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^T)+g[12]+3873151461&4294967295,A=m+(v<<11&4294967295|v>>>21),v=T+(A^m^_)+g[15]+530742520&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^m)+g[2]+3299628645&4294967295,_=T+(v<<23&4294967295|v>>>9),v=m+(T^(_|~A))+g[0]+4096336452&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~T))+g[7]+1126891415&4294967295,A=m+(v<<10&4294967295|v>>>22),v=T+(m^(A|~_))+g[14]+2878612391&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~m))+g[5]+4237533241&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~A))+g[12]+1700485571&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~T))+g[3]+2399980690&4294967295,A=m+(v<<10&4294967295|v>>>22),v=T+(m^(A|~_))+g[10]+4293915773&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~m))+g[1]+2240044497&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~A))+g[8]+1873313359&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~T))+g[15]+4264355552&4294967295,A=m+(v<<10&4294967295|v>>>22),v=T+(m^(A|~_))+g[6]+2734768916&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~m))+g[13]+1309151649&4294967295,_=T+(v<<21&4294967295|v>>>11),v=m+(T^(_|~A))+g[4]+4149444226&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~T))+g[11]+3174756917&4294967295,A=m+(v<<10&4294967295|v>>>22),v=T+(m^(A|~_))+g[2]+718787259&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~m))+g[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,g=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<m;)if(g[T++]=w.charCodeAt(A++),T==this.blockSize){i(this,g),T=0;break}}else for(;A<m;)if(g[T++]=w[A++],T==this.blockSize){i(this,g),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var g=0;32>g;g+=8)w[_++]=this.g[m]>>>g&255;return w};function s(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],g=!0,T=w.length-1;0<=T;T--){var A=w[T]|0;g&&A==m||(_[T]=A,g=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return I(h(-w));for(var m=[],_=1,g=0;w>=_;g++)m[g]=w/_|0,_*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return I(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),g=y,T=0;T<w.length;T+=8){var A=Math.min(8,w.length-T),v=parseInt(w.substring(T,T+A),m);8>A?(A=h(Math.pow(m,A)),g=g.j(A).add(h(v))):(g=g.j(_),g=g.add(h(v)))}return g}var y=u(0),E=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-I(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var g=this.i(_);w+=(0<=g?g:4294967296+g)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(P(this))return"-"+I(this).toString(w);for(var m=h(Math.pow(w,6)),_=this,g="";;){var T=V(_,m).g;_=k(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=T,S(_))return A+g;for(;6>A.length;)A="0"+A;g=A+g}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=k(this,w),P(w)?-1:S(w)?0:1};function I(w){for(var m=w.g.length,_=[],g=0;g<m;g++)_[g]=~w.g[g];return new a(_,~w.h).add(E)}n.abs=function(){return P(this)?I(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],g=0,T=0;T<=m;T++){var A=g+(this.i(T)&65535)+(w.i(T)&65535),v=(A>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);g=v>>>16,A&=65535,v&=65535,_[T]=v<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function k(w,m){return w.add(I(m))}n.j=function(w){if(S(this)||S(w))return y;if(P(this))return P(w)?I(this).j(I(w)):I(I(this).j(w));if(P(w))return I(this.j(I(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],g=0;g<2*m;g++)_[g]=0;for(g=0;g<this.g.length;g++)for(var T=0;T<w.g.length;T++){var A=this.i(g)>>>16,v=this.i(g)&65535,Se=w.i(T)>>>16,ze=w.i(T)&65535;_[2*g+2*T]+=v*ze,M(_,2*g+2*T),_[2*g+2*T+1]+=A*ze,M(_,2*g+2*T+1),_[2*g+2*T+1]+=v*Se,M(_,2*g+2*T+1),_[2*g+2*T+2]+=A*Se,M(_,2*g+2*T+2)}for(g=0;g<m;g++)_[g]=_[2*g+1]<<16|_[2*g];for(g=m;g<2*m;g++)_[g]=0;return new a(_,0)};function M(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function C(w,m){this.g=w,this.h=m}function V(w,m){if(S(m))throw Error("division by zero");if(S(w))return new C(y,y);if(P(w))return m=V(I(w),m),new C(I(m.g),I(m.h));if(P(m))return m=V(w,I(m)),new C(I(m.g),m.h);if(30<w.g.length){if(P(w)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,g=m;0>=g.l(w);)_=B(_),g=B(g);var T=L(_,1),A=L(g,1);for(g=L(g,2),_=L(_,2);!S(g);){var v=A.add(g);0>=v.l(w)&&(T=T.add(_),A=v),g=L(g,1),_=L(_,1)}return m=k(w,T.j(m)),new C(T,m)}for(T=y;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),g=Math.ceil(Math.log(_)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),A=h(_),v=A.j(m);P(v)||0<v.l(w);)_-=g,A=h(_),v=A.j(m);S(A)&&(A=E),T=T.add(A),w=k(w,v)}return new C(T,w)}n.A=function(w){return V(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],g=0;g<m;g++)_[g]=this.i(g)&w.i(g);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],g=0;g<m;g++)_[g]=this.i(g)|w.i(g);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],g=0;g<m;g++)_[g]=this.i(g)^w.i(g);return new a(_,this.h^w.h)};function B(w){for(var m=w.g.length+1,_=[],g=0;g<m;g++)_[g]=w.i(g)<<1|w.i(g-1)>>>31;return new a(_,w.h)}function L(w,m){var _=m>>5;m%=32;for(var g=w.g.length-_,T=[],A=0;A<g;A++)T[A]=0<m?w.i(A+_)>>>m|w.i(A+_+1)<<32-m:w.i(A+_);return new a(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,vn=a}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ad,Mr,Sd,$i,Bo,Rd,Pd,xd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function y(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function E(o,c,d){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,E.apply(null,arguments)}function b(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,x){for(var O=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)O[ie-2]=arguments[ie];return c.prototype[R].apply(p,O)}}function P(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function I(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,x=p.length||0;o.length=R+x;for(let O=0;O<x;O++)o[R+O]=p[O]}else o.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function C(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var B=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function L(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function v(){var o=ue;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Se{constructor(){this.h=this.g=null}add(c,d){const p=ze.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ze=new k(()=>new yt,o=>o.reset());class yt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ce=!1,ue=new Se,Re=()=>{const o=l.Promise.resolve(void 0);nt=()=>{o.then(qe)}};var qe=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){A(d)}var c=ze;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ce=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function re(o,c){if($.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(B){e:{try{V(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ee[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&re.aa.h.call(this)}}S(re,$);var ee={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Ie(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++$e,this.da=this.fa=!1}function Pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vt(o){this.src=o,this.g={},this.h=0}vt.prototype.add=function(o,c,d,p,R){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var O=Cn(o,c,p,R);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new Ie(c,this.src,x,!!p,R),c.fa=d,o.push(c)),c};function cn(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=R)&&Array.prototype.splice.call(p,R,1),x&&(Pe(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Cn(o,c,d,p){for(var R=0;R<o.length;++R){var x=o[R];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return R}return-1}var _t="closure_lm_"+(1e6*Math.random()|0),kn={};function Et(o,c,d,p,R){if(Array.isArray(c)){for(var x=0;x<c.length;x++)Et(o,c[x],d,p,R);return null}return d=un(d),o&&o[we]?o.K(c,d,h(p)?!!p.capture:!1,R):Mn(o,c,d,!1,p,R)}function Mn(o,c,d,p,R,x){if(!c)throw Error("Invalid event type");var O=h(R)?!!R.capture:!!R,ie=he(o);if(ie||(o[_t]=ie=new vt(o)),d=ie.add(c,d,p,O,x),d.proxy)return d;if(p=mi(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ae||(R=O),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(je(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mi(){function o(d){return c.call(o.src,o.listener,d)}const c=gi;return o}function te(o,c,d,p,R){if(Array.isArray(c))for(var x=0;x<c.length;x++)te(o,c[x],d,p,R);else p=h(p)?!!p.capture:!!p,d=un(d),o&&o[we]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=Cn(x,d,p,R),-1<d&&(Pe(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=he(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Cn(c,d,p,R)),(d=-1<o?c[o]:null)&&Te(d))}function Te(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[we])cn(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(je(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=he(c))?(cn(d,o),d.h==0&&(d.src=null,c[_t]=null)):Pe(o)}}}function je(o){return o in kn?kn[o]:kn[o]="on"+o}function gi(o,c){if(o.da)o=!0;else{c=new re(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Te(o),o=d.call(p,c)}return o}function he(o){return o=o[_t],o instanceof vt?o:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function un(o){return typeof o=="function"?o:(o[Ot]||(o[Ot]=function(c){return o.handleEvent(c)}),o[Ot])}function pe(){Ee.call(this),this.i=new vt(this),this.M=this,this.F=null}S(pe,Ee),pe.prototype[we]=!0,pe.prototype.removeEventListener=function(o,c,d,p){te(this,o,c,d,p)};function xe(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new $(c,o);else if(c instanceof $)c.target=c.target||o;else{var R=c;c=new $(p,o),g(c,R)}if(R=!0,d)for(var x=d.length-1;0<=x;x--){var O=c.g=d[x];R=Dn(O,p,!0,c)&&R}if(O=c.g=o,R=Dn(O,p,!0,c)&&R,R=Dn(O,p,!1,c)&&R,d)for(x=0;x<d.length;x++)O=c.g=d[x],R=Dn(O,p,!1,c)&&R}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Pe(d[p]);delete o.g[c],o.h--}}this.F=null},pe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},pe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Dn(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,x=0;x<c.length;++x){var O=c[x];if(O&&!O.da&&O.capture==d){var ie=O.listener,Ce=O.ha||O.src;O.fa&&cn(o.i,O),R=ie.call(Ce,p)!==!1&&R}}return R&&!p.defaultPrevented}function yi(o,c,d){if(typeof o=="function")d&&(o=E(o,d));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function vl(o){o.g=yi(()=>{o.g=null,o.i&&(o.i=!1,vl(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class gf extends Ee{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(o){Ee.call(this),this.h=o,this.g={}}S(mr,Ee);var _l=[];function El(o){L(o.g,function(c,d){this.g.hasOwnProperty(d)&&Te(c)},o),o.g={}}mr.prototype.N=function(){mr.aa.N.call(this),El(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ws=l.JSON.stringify,yf=l.JSON.parse,vf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Gs(){}Gs.prototype.h=null;function wl(o){return o.h||(o.h=o.i())}function Il(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ys(){$.call(this,"d")}S(Ys,$);function Ks(){$.call(this,"c")}S(Ks,$);var dn={},Tl=null;function vi(){return Tl=Tl||new pe}dn.La="serverreachability";function bl(o){$.call(this,dn.La,o)}S(bl,$);function yr(o){const c=vi();xe(c,new bl(c))}dn.STAT_EVENT="statevent";function Al(o,c){$.call(this,dn.STAT_EVENT,o),this.stat=c}S(Al,$);function He(o){const c=vi();xe(c,new Al(c,o))}dn.Ma="timingevent";function Sl(o,c){$.call(this,dn.Ma,o),this.size=c}S(Sl,$);function vr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function _f(o,c,d,p,R,x){o.info(function(){if(o.g)if(x)for(var O="",ie=x.split("&"),Ce=0;Ce<ie.length;Ce++){var J=ie[Ce].split("=");if(1<J.length){var Ve=J[0];J=J[1];var Le=Ve.split("_");O=2<=Le.length&&Le[1]=="type"?O+(Ve+"="+J+"&"):O+(Ve+"=redacted&")}}else O=null;else O=x;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+O})}function Ef(o,c,d,p,R,x,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+x+" "+O})}function Nn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+If(o,d)+(p?" "+p:"")})}function wf(o,c){o.info(function(){return"TIMEOUT: "+c})}_r.prototype.info=function(){};function If(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var O=1;O<R.length;O++)R[O]=""}}}}return Ws(d)}catch{return c}}var _i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qs;function Ei(){}S(Ei,Gs),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},Qs=new Ei;function Bt(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new mr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var xl={},Xs={};function Js(o,c,d){o.L=1,o.v=bi(wt(c)),o.m=d,o.P=!0,Cl(o,null)}function Cl(o,c){o.F=Date.now(),wi(o),o.A=wt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),jl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Pl,o.g=lc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new gf(E(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(_l[0]=R.toString()),R=_l);for(var x=0;x<R.length;x++){var O=Et(d,R[x],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),yr(),_f(o.i,o.u,o.A,o.l,o.R,o.m)}Bt.prototype.ca=function(o){o=o.target;const c=this.M;c&&It(o)==3?c.j():this.Y(o)},Bt.prototype.Y=function(o){try{if(o==this.g)e:{const Le=It(this.g);var c=this.g.Ba();const On=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Xl(this.g)))){this.J||Le!=4||c==7||(c==8||0>=On?yr(3):yr(2)),Zs(this);var d=this.g.Z();this.X=d;t:if(kl(this)){var p=Xl(this.g);o="";var R=p.length,x=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Er(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Ef(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Ce=this.g;if((ie=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ie)){var J=ie;break t}}J=null}if(d=J)Nn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eo(this,d);else{this.o=!1,this.s=3,He(12),hn(this),Er(this);break e}}if(this.P){d=!0;let st;for(;!this.J&&this.C<O.length;)if(st=Tf(this,O),st==Xs){Le==4&&(this.s=4,He(14),d=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==xl){this.s=4,He(15),Nn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Nn(this.i,this.l,st,null),eo(this,st);if(kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||O.length!=0||this.h.h||(this.s=1,He(16),d=!1),this.o=this.o&&d,!d)Nn(this.i,this.l,O,"[Invalid Chunked Response]"),hn(this),Er(this);else if(0<O.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),oo(Ve),Ve.M=!0,He(11))}}else Nn(this.i,this.l,O,null),eo(this,O);Le==4&&hn(this),this.o&&!this.J&&(Le==4?ic(this.j,this):(this.o=!1,wi(this)))}else Uf(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),hn(this),Er(this)}}}catch{}finally{}};function kl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tf(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Xs:(d=Number(c.substring(d,p)),isNaN(d)?xl:(p+=1,p+d>c.length?Xs:(c=c.slice(p,p+d),o.C=p+d,c)))}Bt.prototype.cancel=function(){this.J=!0,hn(this)};function wi(o){o.S=Date.now()+o.I,Ml(o,o.I)}function Ml(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=vr(E(o.ba,o),c)}function Zs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wf(this.i,this.A),this.L!=2&&(yr(),He(17)),hn(this),this.s=2,Er(this)):Ml(this,this.S-o)};function Er(o){o.j.G==0||o.J||ic(o.j,o)}function hn(o){Zs(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,El(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function eo(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||to(d.h,o))){if(!o.K&&to(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ci(d),Pi(d);else break e;so(d),He(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=vr(E(d.Za,d),6e3));if(1>=Vl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pn(d,11)}else if((o.K||d.g==o)&&Ci(d),!M(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let J=R[c];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const Ve=J[3];Ve!=null&&(d.la=Ve,d.j.info("VER="+d.la));const Le=J[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const On=J[5];On!=null&&typeof On=="number"&&0<On&&(p=1.5*On,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const st=o.g;if(st){const Mi=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var x=p.h;x.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(no(x,x.h),x.h=null))}if(p.D){const ao=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(p.ya=ao,se(p.I,p.D,ao))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=ac(p,p.J?p.ia:null,p.W),O.K){Ll(p.h,O);var ie=O,Ce=p.L;Ce&&(ie.I=Ce),ie.B&&(Zs(ie),wi(ie)),p.g=O}else nc(p);0<d.i.length&&xi(d)}else J[0]!="stop"&&J[0]!="close"||pn(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?pn(d,7):io(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}yr(4)}catch{}}var bf=class{constructor(o,c){this.g=o,this.map=c}};function Dl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vl(o){return o.h?1:o.g?o.g.size:0}function to(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function no(o,c){o.g?o.g.add(c):o.h=c}function Ll(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Dl.prototype.cancel=function(){if(this.i=Ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ol(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return P(o.i)}function Af(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function Sf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Bl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Sf(o),p=Af(o),R=p.length,x=0;x<R;x++)c.call(void 0,p[x],d&&d[x],o)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var x=o[d].substring(0,p);R=o[d].substring(p+1)}else x=o[d];c(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof fn){this.h=o.h,Ii(this,o.j),this.o=o.o,this.g=o.g,Ti(this,o.s),this.l=o.l;var c=o.i,d=new Tr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ul(this,d),this.m=o.m}else o&&(c=String(o).match(Fl))?(this.h=!1,Ii(this,c[1]||"",!0),this.o=wr(c[2]||""),this.g=wr(c[3]||"",!0),Ti(this,c[4]),this.l=wr(c[5]||"",!0),Ul(this,c[6]||"",!0),this.m=wr(c[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}fn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Ir(c,zl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ir(c,zl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ir(d,d.charAt(0)=="/"?Cf:xf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ir(d,Mf)),o.join("")};function wt(o){return new fn(o)}function Ii(o,c,d){o.j=d?wr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ti(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ul(o,c,d){c instanceof Tr?(o.i=c,Df(o.i,o.h)):(d||(c=Ir(c,kf)),o.i=new Tr(c,o.h))}function se(o,c,d){o.i.set(c,d)}function bi(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function wr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ir(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Pf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Pf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zl=/[#\/\?@]/g,xf=/[#\?:]/g,Cf=/[#\?]/g,kf=/[#\?@]/g,Mf=/#/g;function Tr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ft(o){o.g||(o.g=new Map,o.h=0,o.i&&Rf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Tr.prototype,n.add=function(o,c){Ft(this),this.i=null,o=Vn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function ql(o,c){Ft(o),c=Vn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function $l(o,c){return Ft(o),c=Vn(o,c),o.g.has(c)}n.forEach=function(o,c){Ft(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){Ft(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let x=0;x<R.length;x++)d.push(c[p])}return d},n.V=function(o){Ft(this);let c=[];if(typeof o=="string")$l(this,o)&&(c=c.concat(this.g.get(Vn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Ft(this),this.i=null,o=Vn(this,o),$l(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function jl(o,c,d){ql(o,c),0<d.length&&(o.i=null,o.g.set(Vn(o,c),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var R=x;O[p]!==""&&(R+="="+encodeURIComponent(String(O[p]))),o.push(R)}}return this.i=o.join("&")};function Vn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Df(o,c){c&&!o.j&&(Ft(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(ql(this,p),jl(this,R,d))},o)),o.j=c}function Nf(o,c){const d=new _r;if(l.Image){const p=new Image;p.onload=b(Ut,d,"TestLoadImage: loaded",!0,c,p),p.onerror=b(Ut,d,"TestLoadImage: error",!1,c,p),p.onabort=b(Ut,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=b(Ut,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Vf(o,c){const d=new _r,p=new AbortController,R=setTimeout(()=>{p.abort(),Ut(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(R),x.ok?Ut(d,"TestPingServer: ok",!0,c):Ut(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Ut(d,"TestPingServer: error",!1,c)})}function Ut(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Lf(){this.g=new vf}function Of(o,c,d){const p=d||"";try{Bl(o,function(R,x){let O=R;h(R)&&(O=Ws(R)),c.push(p+x+"="+encodeURIComponent(O))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Ai(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Ai,Gs),Ai.prototype.g=function(){return new Si(this.l,this.j)},Ai.prototype.i=function(o){return function(){return o}}({});function Si(o,c){pe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Si,pe),n=Si.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?br(this):Ar(this),this.readyState==3&&Hl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,br(this))},n.Qa=function(o){this.g&&(this.response=o,br(this))},n.ga=function(){this.g&&br(this)};function br(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ar(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wl(o){let c="";return L(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function ro(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Wl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,c,d))}function de(o){pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(de,pe);var Bf=/^https?$/i,Ff=["POST","PUT"];n=de.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qs.g(),this.v=this.o?wl(this.o):wl(Qs),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Gl(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ff,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of d)this.g.setRequestHeader(x,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ql(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Gl(this,x)}};function Gl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Yl(o),Ri(o)}function Yl(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Kl(this):this.bb())},n.bb=function(){Kl(this)};function Kl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||It(o)!=4||o.Z()!=2)){if(o.u&&It(o)==4)yi(o.Ea,0,o);else if(xe(o,"readystatechange"),It(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var R=String(o.D).match(Fl)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Bf.test(R?R.toLowerCase():"")}d=p}if(d)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var x=2<It(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Yl(o)}}finally{Ri(o)}}}}function Ri(o,c){if(o.g){Ql(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xe(o,"ready");try{d.onreadystatechange=p}catch{}}}function Ql(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function It(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),yf(c)}};function Xl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Uf(o){const c={};o=(o.g&&2<=It(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=T(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[R]||[];c[R]=x,x.push(d)}w(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Jl(o){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,o),this.cb=Sr("retryDelaySeedMs",1e4,o),this.Wa=Sr("forwardChannelMaxRetries",2,o),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Dl(o&&o.concurrentRequestLimit),this.Da=new Lf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Jl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){He(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ac(this,null,this.W),xi(this)};function io(o){if(Zl(o),o.G==3){var c=o.U++,d=wt(o.I);if(se(d,"SID",o.K),se(d,"RID",c),se(d,"TYPE","terminate"),Rr(o,d),c=new Bt(o,o.j,c),c.L=2,c.v=bi(wt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=lc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),wi(c)}oc(o)}function Pi(o){o.g&&(oo(o),o.g.cancel(),o.g=null)}function Zl(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function xi(o){if(!Nl(o.h)&&!o.s){o.s=!0;var c=o.Ga;nt||Re(),ce||(nt(),ce=!0),ue.add(c,o),o.B=0}}function zf(o,c){return Vl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=vr(E(o.Ga,o,c),sc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Bt(this,this.j,o);let x=this.o;if(this.S&&(x?(x=m(x),g(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=tc(this,R,c),d=wt(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Rr(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Wl(x)))+"&"+c:this.m&&ro(d,this.m,x)),no(this.h,R),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",c),se(d,"SID","null"),R.T=!0,Js(R,d,null)):Js(R,d,c),this.G=2}}else this.G==3&&(o?ec(this,o):this.i.length==0||Nl(this.h)||ec(this))};function ec(o,c){var d;c?d=c.l:d=o.U++;const p=wt(o.I);se(p,"SID",o.K),se(p,"RID",d),se(p,"AID",o.T),Rr(o,p),o.m&&o.o&&ro(p,o.m,o.o),d=new Bt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=tc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),no(o.h,d),Js(d,p,c)}function Rr(o,c){o.H&&L(o.H,function(d,p){se(c,p,d)}),o.l&&Bl({},function(d,p){se(c,p,d)})}function tc(o,c,d){d=Math.min(o.i.length,d);var p=o.l?E(o.l.Na,o.l,o):null;e:{var R=o.i;let x=-1;for(;;){const O=["count="+d];x==-1?0<d?(x=R[0].g,O.push("ofs="+x)):x=0:O.push("ofs="+x);let ie=!0;for(let Ce=0;Ce<d;Ce++){let J=R[Ce].g;const Ve=R[Ce].map;if(J-=x,0>J)x=Math.max(0,R[Ce].g-100),ie=!1;else try{Of(Ve,O,"req"+J+"_")}catch{p&&p(Ve)}}if(ie){p=O.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function nc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;nt||Re(),ce||(nt(),ce=!0),ue.add(c,o),o.v=0}}function so(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=vr(E(o.Fa,o),sc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=vr(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),Pi(this),rc(this))};function oo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rc(o){o.g=new Bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=wt(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),Rr(o,c),o.m&&o.o&&ro(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=bi(wt(c)),d.m=null,d.P=!0,Cl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),so(this),He(19))};function Ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ic(o,c){var d=null;if(o.g==c){Ci(o),oo(o),o.g=null;var p=2}else if(to(o.h,c))d=c.D,Ll(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=vi(),xe(p,new Sl(p,d)),xi(o)}else nc(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&zf(o,c)||p==2&&so(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function sc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function pn(o,c){if(o.j.info("Error code "+c),c==2){var d=E(o.fb,o),p=o.Xa;const R=!p;p=new fn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ii(p,"https"),bi(p),R?Nf(p.toString(),d):Vf(p.toString(),d)}else He(2);o.G=0,o.l&&o.l.sa(c),oc(o),Zl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function oc(o){if(o.G=0,o.ka=[],o.l){const c=Ol(o.h);(c.length!=0||o.i.length!=0)&&(I(o.ka,c),I(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function ac(o,c,d){var p=d instanceof fn?wt(d):new fn(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ti(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var x=new fn(null);p&&Ii(x,p),c&&(x.g=c),R&&Ti(x,R),d&&(x.l=d),p=x}return d=o.D,c=o.ya,d&&c&&se(p,d,c),se(p,"VER",o.la),Rr(o,p),p}function lc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new de(new Ai({eb:d})):new de(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cc(){}n=cc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ki(){}ki.prototype.g=function(o,c){return new Xe(o,c)};function Xe(o,c){pe.call(this),this.g=new Jl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Ln(this)}S(Xe,pe),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){io(this.g)},Xe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ws(o),o=d);c.i.push(new bf(c.Ya++,o)),c.G==3&&xi(c)},Xe.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,Xe.aa.N.call(this)};function uc(o){Ys.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(uc,Ys);function dc(){Ks.call(this),this.status=1}S(dc,Ks);function Ln(o){this.g=o}S(Ln,cc),Ln.prototype.ua=function(){xe(this.g,"a")},Ln.prototype.ta=function(o){xe(this.g,new uc(o))},Ln.prototype.sa=function(o){xe(this.g,new dc)},Ln.prototype.ra=function(){xe(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,xd=function(){return new ki},Pd=function(){return vi()},Rd=dn,Bo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,$i=_i,Rl.COMPLETE="complete",Sd=Rl,Il.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Mr=Il,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Ad=de}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const qc="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let ar="10.14.0";/**
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
 */const bn=new sa("@firebase/firestore");function xr(){return bn.logLevel}function U(n,...e){if(bn.logLevel<=Q.DEBUG){const t=e.map(_a);bn.debug(`Firestore (${ar}): ${n}`,...t)}}function kt(n,...e){if(bn.logLevel<=Q.ERROR){const t=e.map(_a);bn.error(`Firestore (${ar}): ${n}`,...t)}}function Jn(n,...e){if(bn.logLevel<=Q.WARN){const t=e.map(_a);bn.warn(`Firestore (${ar}): ${n}`,...t)}}function _a(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+n;throw kt(e),new Error(e)}function ne(n,e){n||W()}function Y(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Be.UNAUTHENTICATED))}shutdown(){}}class Jy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zy{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new Cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Be(e)}}class e0{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class t0{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new e0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class r0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ne(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.R=t.token,new n0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function i0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=i0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function Zn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new _e(0,0))}static max(){return new G(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends Wr{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const s0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Wr{construct(e,t,r){return new Me(e,t,r)}static isValidIdentifier(e){return s0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(t)}static emptyPath(){return new Me([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(oe.fromString(e))}static fromName(e){return new q(oe.fromString(e).popFirst(5))}static empty(){return new q(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new oe(e.slice()))}}function o0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new tn(i,q.empty(),e)}function a0(n){return new tn(n.readTime,n.key,-1)}class tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tn(G.min(),q.empty(),-1)}static max(){return new tn(G.max(),q.empty(),-1)}}function l0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
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
 */const c0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==c0)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function d0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function oi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ea{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ea.oe=-1;function _s(n){return n==null}function is(n){return n===0&&1/n==-1/0}function h0(n){return typeof n=="number"&&Number.isInteger(n)&&!is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function $c(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ke(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jc(this.data.getIterator())}getIteratorFrom(e){return new jc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class jc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new De(Me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dd("Invalid base64 string: "+s):s}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const f0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(ne(!!n),typeof n=="string"){let e=0;const t=f0.exec(n);if(ne(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function An(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */function wa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ia(n){const e=n.mapValue.fields.__previous_value__;return wa(e)?Ia(e):e}function Gr(n){const e=nn(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class p0{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Yr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Oi={mapValue:{}};function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wa(n)?4:g0(n)?9007199254740991:m0(n)?10:11:W()}function pt(n,e){if(n===e)return!0;const t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gr(n).isEqual(Gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=nn(i.timestampValue),l=nn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return An(i.bytesValue).isEqual(An(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return fe(i.geoPointValue.latitude)===fe(s.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return fe(i.integerValue)===fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=fe(i.doubleValue),l=fe(s.doubleValue);return a===l?is(a)===is(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if($c(a)!==$c(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!pt(a[u],l[u])))return!1;return!0}(n,e);default:return W()}}function Kr(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function er(n,e){if(n===e)return 0;const t=Sn(n),r=Sn(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=fe(s.integerValue||s.doubleValue),u=fe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Hc(n.timestampValue,e.timestampValue);case 4:return Hc(Gr(n),Gr(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(s,a){const l=An(s),u=An(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Z(fe(s.latitude),fe(a.latitude));return l!==0?l:Z(fe(s.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const y=s.fields||{},E=a.fields||{},b=(l=y.value)===null||l===void 0?void 0:l.arrayValue,S=(u=E.value)===null||u===void 0?void 0:u.arrayValue,P=Z(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Wc(b,S)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Oi.mapValue&&a===Oi.mapValue)return 0;if(s===Oi.mapValue)return 1;if(a===Oi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const E=Z(u[y],f[y]);if(E!==0)return E;const b=er(l[u[y]],h[f[y]]);if(b!==0)return b}return Z(u.length,f.length)}(n.mapValue,e.mapValue);default:throw W()}}function Hc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=nn(n),r=nn(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function Wc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=er(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function tr(n){return Fo(n)}function Fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return An(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Fo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Fo(t.fields[a])}`;return i+"}"}(n.mapValue):W()}function Gc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Uo(n){return!!n&&"integerValue"in n}function Ta(n){return!!n&&"arrayValue"in n}function Yc(n){return!!n&&"nullValue"in n}function Kc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ji(n){return!!n&&"mapValue"in n}function m0(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function g0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(t)}setAll(e){let t=Me.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Or(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ji(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Pn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ye(Or(this.value))}}function Nd(n){const e=[];return Pn(n.fields,(t,r)=>{const i=new Me([t]);if(ji(r)){const s=Nd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ze(e)}/**
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
 */class Fe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Fe(e,0,G.min(),G.min(),G.min(),Ye.empty(),0)}static newFoundDocument(e,t,r,i){return new Fe(e,1,t,G.min(),r,i,0)}static newNoDocument(e,t){return new Fe(e,2,t,G.min(),G.min(),Ye.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,G.min(),G.min(),Ye.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ss{constructor(e,t){this.position=e,this.inclusive=t}}function Qc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=er(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function y0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vd{}class ge extends Vd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new _0(e,t,r):t==="array-contains"?new I0(e,r):t==="in"?new T0(e,r):t==="not-in"?new b0(e,r):t==="array-contains-any"?new A0(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new E0(e,r):new w0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(er(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lt extends Vd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new lt(e,t)}matches(e){return Ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ld(n){return n.op==="and"}function Od(n){return v0(n)&&Ld(n)}function v0(n){for(const e of n.filters)if(e instanceof lt)return!1;return!0}function zo(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+tr(n.value);if(Od(n))return n.filters.map(e=>zo(e)).join(",");{const e=n.filters.map(t=>zo(t)).join(",");return`${n.op}(${e})`}}function Bd(n,e){return n instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.field.isEqual(i.field)&&pt(r.value,i.value)}(n,e):n instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Bd(a,i.filters[l]),!0):!1}(n,e):void W()}function Fd(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(n):n instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(Fd).join(" ,")+"}"}(n):"Filter"}class _0 extends ge{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class E0 extends ge{constructor(e,t){super(e,"in",t),this.keys=Ud("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class w0 extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Ud("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ud(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class I0 extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ta(t)&&Kr(t.arrayValue,this.value)}}class T0 extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Kr(this.value.arrayValue,t)}}class b0 extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Kr(this.value.arrayValue,t)}}class A0 extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Kr(this.value.arrayValue,r))}}/**
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
 */class S0{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Jc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new S0(n,e,t,r,i,s,a)}function ba(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tr(r)).join(",")),e.ue=t}return e.ue}function Aa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!y0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xc(n.startAt,e.startAt)&&Xc(n.endAt,e.endAt)}function qo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class lr{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function R0(n,e,t,r,i,s,a,l){return new lr(n,e,t,r,i,s,a,l)}function Sa(n){return new lr(n)}function Zc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zd(n){return n.collectionGroup!==null}function Br(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new De(Me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Qr(s,r))}),t.has(Me.keyField().canonicalString())||e.ce.push(new Qr(Me.keyField(),r))}return e.ce}function dt(n){const e=Y(n);return e.le||(e.le=P0(e,Br(n))),e.le}function P0(n,e){if(n.limitType==="F")return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qr(i.field,s)});const t=n.endAt?new ss(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ss(n.startAt.position,n.startAt.inclusive):null;return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $o(n,e){const t=n.filters.concat([e]);return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function os(n,e,t){return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Es(n,e){return Aa(dt(n),dt(e))&&n.limitType===e.limitType}function qd(n){return`${ba(dt(n))}|lt:${n.limitType}`}function Fn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Fd(i)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>tr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>tr(i)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function ws(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Br(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Qc(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Br(r),i)||r.endAt&&!function(a,l,u){const h=Qc(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Br(r),i))}(n,e)}function x0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $d(n){return(e,t)=>{let r=!1;for(const i of Br(n)){const s=C0(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function C0(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?er(u,h):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class cr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Md(this.inner)}size(){return this.innerSize}}/**
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
 */const k0=new le(q.comparator);function Mt(){return k0}const jd=new le(q.comparator);function Dr(...n){let e=jd;for(const t of n)e=e.insert(t.key,t);return e}function Hd(n){let e=jd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yn(){return Fr()}function Wd(){return Fr()}function Fr(){return new cr(n=>n.toString(),(n,e)=>n.isEqual(e))}const M0=new le(q.comparator),D0=new De(q.comparator);function K(...n){let e=D0;for(const t of n)e=e.add(t);return e}const N0=new De(Z);function V0(){return N0}/**
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
 */function Ra(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function Gd(n){return{integerValue:""+n}}function L0(n,e){return h0(e)?Gd(e):Ra(n,e)}/**
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
 */class Is{constructor(){this._=void 0}}function O0(n,e,t){return n instanceof as?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wa(s)&&(s=Ia(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Xr?Kd(n,e):n instanceof Jr?Qd(n,e):function(i,s){const a=Yd(i,s),l=eu(a)+eu(i.Pe);return Uo(a)&&Uo(i.Pe)?Gd(l):Ra(i.serializer,l)}(n,e)}function B0(n,e,t){return n instanceof Xr?Kd(n,e):n instanceof Jr?Qd(n,e):t}function Yd(n,e){return n instanceof ls?function(r){return Uo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class as extends Is{}class Xr extends Is{constructor(e){super(),this.elements=e}}function Kd(n,e){const t=Xd(e);for(const r of n.elements)t.some(i=>pt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Jr extends Is{constructor(e){super(),this.elements=e}}function Qd(n,e){let t=Xd(e);for(const r of n.elements)t=t.filter(i=>!pt(i,r));return{arrayValue:{values:t}}}class ls extends Is{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function eu(n){return fe(n.integerValue||n.doubleValue)}function Xd(n){return Ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function F0(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xr&&i instanceof Xr||r instanceof Jr&&i instanceof Jr?Zn(r.elements,i.elements,pt):r instanceof ls&&i instanceof ls?pt(r.Pe,i.Pe):r instanceof as&&i instanceof as}(n.transform,e.transform)}class U0{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ts{}function Jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pa(n.key,et.none()):new ai(n.key,n.data,et.none());{const t=n.data,r=Ye.empty();let i=new De(Me.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new on(n.key,r,new Ze(i.toArray()),et.none())}}function z0(n,e,t){n instanceof ai?function(i,s,a){const l=i.value.clone(),u=nu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof on?function(i,s,a){if(!Hi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=nu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Zd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ur(n,e,t,r){return n instanceof ai?function(s,a,l,u){if(!Hi(s.precondition,a))return l;const h=s.value.clone(),f=ru(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof on?function(s,a,l,u){if(!Hi(s.precondition,a))return l;const h=ru(s.fieldTransforms,u,a),f=a.data;return f.setAll(Zd(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,l){return Hi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function q0(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Yd(r.transform,i||null);s!=null&&(t===null&&(t=Ye.empty()),t.set(r.field,s))}return t||null}function tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zn(r,i,(s,a)=>F0(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends Ts{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class on extends Ts{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function nu(n,e,t){const r=new Map;ne(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,B0(a,l,t[i]))}return r}function ru(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,O0(s,a,e))}return r}class Pa extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $0 extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class j0{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&z0(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Jd(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>tu(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>tu(t,r))}}class xa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ne(e.mutations.length===r.length);let i=function(){return M0}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new xa(e,t,r,i)}}/**
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
 */class H0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class W0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var me,X;function G0(n){switch(n){default:return W();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function eh(n){if(n===void 0)return kt("GRPC error has no .code"),D.UNKNOWN;switch(n){case me.OK:return D.OK;case me.CANCELLED:return D.CANCELLED;case me.UNKNOWN:return D.UNKNOWN;case me.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case me.INTERNAL:return D.INTERNAL;case me.UNAVAILABLE:return D.UNAVAILABLE;case me.UNAUTHENTICATED:return D.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case me.NOT_FOUND:return D.NOT_FOUND;case me.ALREADY_EXISTS:return D.ALREADY_EXISTS;case me.PERMISSION_DENIED:return D.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case me.ABORTED:return D.ABORTED;case me.OUT_OF_RANGE:return D.OUT_OF_RANGE;case me.UNIMPLEMENTED:return D.UNIMPLEMENTED;case me.DATA_LOSS:return D.DATA_LOSS;default:return W()}}(X=me||(me={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Y0(){return new TextEncoder}/**
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
 */const K0=new vn([4294967295,4294967295],0);function iu(n){const e=Y0().encode(n),t=new bd;return t.update(e),new Uint8Array(t.digest())}function su(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vn([t,r],0),new vn([i,s],0)]}class Ca{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nr(`Invalid padding: ${t}`);if(r<0)throw new Nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=vn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(vn.fromNumber(r)));return i.compare(K0)===1&&(i=new vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=iu(e),[r,i]=su(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ca(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=iu(e),[r,i]=su(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bs(G.min(),i,new le(Z),Mt(),K())}}class li{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new li(r,t,K(),K(),K())}}/**
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
 */class Wi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class th{constructor(e,t){this.targetId=e,this.me=t}}class nh{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ou{constructor(){this.fe=0,this.ge=lu(),this.pe=Ne.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new li(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=lu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Q0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mt(),this.qe=au(),this.Qe=new le(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(qo(s))if(r===0){const a=new q(s.path);this.Ue(t,a,Fe.newNoDocument(a,G.min()))}else ne(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=An(r).toUint8Array()}catch(u){if(u instanceof Dd)return Jn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ca(a,i,s)}catch(u){return Jn(u instanceof Nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&qo(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Fe.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=K();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new bs(e,t,this.Qe,this.ke,r);return this.ke=Mt(),this.qe=au(),this.Qe=new le(Z),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ou,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new De(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ou),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function au(){return new le(q.comparator)}function lu(){return new le(q.comparator)}const X0={asc:"ASCENDING",desc:"DESCENDING"},J0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Z0={and:"AND",or:"OR"};class ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jo(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tv(n,e){return cs(n,e.toTimestamp())}function ht(n){return ne(!!n),G.fromTimestamp(function(t){const r=nn(t);return new _e(r.seconds,r.nanos)}(n))}function ka(n,e){return Ho(n,e).canonicalString()}function Ho(n,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ih(n){const e=oe.fromString(n);return ne(ch(e)),e}function Wo(n,e){return ka(n.databaseId,e.path)}function yo(n,e){const t=ih(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(oh(t))}function sh(n,e){return ka(n.databaseId,e)}function nv(n){const e=ih(n);return e.length===4?oe.emptyPath():oh(e)}function Go(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function oh(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cu(n,e,t){return{name:Wo(n,e),fields:t.value.mapValue.fields}}function rv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ne(f===void 0||typeof f=="string"),Ne.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ne.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?D.UNKNOWN:eh(h.code);return new F(f,h.message||"")}(a);t=new nh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yo(n,r.document.name),s=ht(r.document.updateTime),a=r.document.createTime?ht(r.document.createTime):G.min(),l=new Ye({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Wi(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yo(n,r.document),s=r.readTime?ht(r.readTime):G.min(),a=Fe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Wi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yo(n,r.document),s=r.removedTargetIds||[];t=new Wi([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new W0(i,s),l=r.targetId;t=new th(l,a)}}return t}function iv(n,e){let t;if(e instanceof ai)t={update:cu(n,e.key,e.value)};else if(e instanceof Pa)t={delete:Wo(n,e.key)};else if(e instanceof on)t={update:cu(n,e.key,e.data),updateMask:fv(e.fieldMask)};else{if(!(e instanceof $0))return W();t={verify:Wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof as)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ls)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:tv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(n,e.precondition)),t}function sv(n,e){return n&&n.length>0?(ne(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?ht(i.updateTime):ht(s);return a.isEqual(G.min())&&(a=ht(s)),new U0(a,i.transformResults||[])}(t,e))):[]}function ov(n,e){return{documents:[sh(n,e.path)]}}function av(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sh(n,i);const s=function(h){if(h.length!==0)return lh(lt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Un(E.field),direction:uv(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=jo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function lv(n){let e=nv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ne(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const E=ah(y);return E instanceof lt&&Od(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(E=>function(S){return new Qr(zn(S.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(y){let E;return E=typeof y=="object"?y.value:y,_s(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(y){const E=!!y.before,b=y.values||[];return new ss(b,E)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const E=!y.before,b=y.values||[];return new ss(b,E)}(t.endAt)),R0(e,i,a,s,l,"F",u,h)}function cv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ah(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zn(t.unaryFilter.field);return ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zn(t.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(zn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(r=>ah(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function uv(n){return X0[n]}function dv(n){return J0[n]}function hv(n){return Z0[n]}function Un(n){return{fieldPath:n.canonicalString()}}function zn(n){return Me.fromServerFormat(n.fieldPath)}function lh(n){return n instanceof ge?function(t){if(t.op==="=="){if(Kc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(Yc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(Yc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:dv(t.op),value:t.value}}}(n):n instanceof lt?function(t){const r=t.getFilters().map(i=>lh(i));return r.length===1?r[0]:{compositeFilter:{op:hv(t.op),filters:r}}}(n):W()}function fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ch(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gt{constructor(e,t,r,i,s=G.min(),a=G.min(),l=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pv{constructor(e){this.ct=e}}function mv(n){const e=lv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?os(e,e.limit,"L"):e}/**
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
 */class gv{constructor(){this.un=new yv}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(tn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class yv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(oe.comparator)).toArray()}}/**
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
 */class nr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new nr(0)}static kn(){return new nr(-1)}}/**
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
 */class vv{constructor(){this.changes=new cr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _v{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ev{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ur(r.mutation,i,Ze.empty(),_e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const i=yn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Dr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Mt();const a=Fr(),l=function(){return Fr()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof on)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ur(f.mutation,h,f.mutation.getFieldMask(),_e.now())):a.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var y;return l.set(h,new _v(f,(y=a.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Fr();let i=new le((a,l)=>a-l),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ze.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(i.get(l.batchId)||K()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=Wd();f.forEach(E=>{if(!s.has(E)){const b=Jd(t.get(E),r.get(E));b!==null&&y.set(E,b),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(yn());let l=-1,u=s;return a.next(h=>N.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:l,changes:Hd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=Dr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Dr();return this.indexManager.getCollectionParents(e,s).next(l=>N.forEach(l,u=>{const h=function(y,E){return new lr(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((y,E)=>{a=a.insert(y,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Fe.newInvalidDocument(f)))});let l=Dr();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ur(f.mutation,h,Ze.empty(),_e.now()),ws(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class wv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ht(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:mv(i.bundledQuery),readTime:ht(i.readTime)}}(t)),N.resolve()}}/**
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
 */class Iv{constructor(){this.overlays=new le(q.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=yn(),s=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new le((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=yn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new H0(t,r));let s=this.Ir.get(t);s===void 0&&(s=K(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class Tv{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Ma{constructor(){this.Tr=new De(Ae.Er),this.dr=new De(Ae.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ae(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ae(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new oe([])),r=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new oe([])),r=new Ae(t,e),i=new Ae(t,e+1);let s=K();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ae(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class bv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new De(Ae.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new j0(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ae(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(Z);return t.forEach(i=>{const s=new Ae(i,0),a=new Ae(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Ae(new q(s),0);let l=new De(Z);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ne(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new Ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ae(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Av{constructor(e){this.Mr=e,this.docs=function(){return new le(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Mt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Mt();const a=t.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||l0(a0(f),r)<=0||(i.has(f.key)||ws(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Sv(this)}getSize(e){return N.resolve(this.size)}}class Sv extends vv{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Rv{constructor(e){this.persistence=e,this.Nr=new cr(t=>ba(t),Aa),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ma,this.targetCount=0,this.kr=nr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new nr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class Pv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ea(0),this.Kr=!1,this.Kr=!0,this.$r=new Tv,this.referenceDelegate=e(this),this.Ur=new Rv(this),this.indexManager=new gv,this.remoteDocumentCache=function(i){return new Av(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new pv(t),this.Gr=new wv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Iv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new bv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new xv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class xv extends u0{constructor(e){super(),this.currentSequenceNumber=e}}class Da{constructor(e){this.persistence=e,this.Jr=new Ma,this.Yr=null}static Zr(e){return new Da(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Na{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Na(e,t.fromCache,r,i)}}/**
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
 */class Cv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fp()?8:d0(Ue())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Cv;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(xr()<=Q.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(xr()<=Q.DEBUG&&U("QueryEngine","Query:",Fn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(xr()<=Q.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):N.resolve())}Yi(e,t){if(Zc(t))return N.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=os(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=K(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,os(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Zc(t)||i.isEqual(G.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?N.resolve(null):(xr()<=Q.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fn(t)),this.rs(e,a,t,o0(i,-1)).next(l=>l))})}ts(e,t){let r=new De($d(e));return t.forEach((i,s)=>{ws(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return xr()<=Q.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Fn(t)),this.Ji.getDocumentsMatchingQuery(e,t,tn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Mv{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new le(Z),this._s=new cr(s=>ba(s),Aa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ev(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Dv(n,e,t,r){return new Mv(n,e,t,r)}async function uh(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=K();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Nv(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,E=y.keys();let b=N.resolve();return E.forEach(S=>{b=b.next(()=>f.getEntry(u,S)).next(P=>{const I=h.docVersions.get(S);ne(I!==null),P.version.compareTo(I)<0&&(y.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function dh(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Vv(n,e){const t=Y(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,y)=>{const E=i.get(y);if(!E)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,y)));let b=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(Ne.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),i=i.insert(y,b),function(P,I,k){return P.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(E,b,f)&&l.push(t.Ur.updateTargetData(s,b))});let u=Mt(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Lv(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(y=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function Lv(n,e,t){let r=K(),i=K();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Mt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Ov(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bv(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Yo(n,e,t){const r=Y(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!oi(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function uu(n,e,t){const r=Y(n);let i=G.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const y=Y(u),E=y._s.get(f);return E!==void 0?N.resolve(y.os.get(E)):y.Ur.getTargetData(h,f)}(r,a,dt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:G.min(),t?s:K())).next(l=>(Fv(r,x0(e),l),{documents:l,Ts:s})))}function Fv(n,e,t){let r=n.us.get(e)||G.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class du{constructor(){this.activeTargetIds=V0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uv{constructor(){this.so=new du,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new du,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zv{_o(e){}shutdown(){}}/**
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
 */class hu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bi=null;function vo(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
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
 */const qv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $v{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Oe="WebChannelConnection";class jv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=vo(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(U("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Jn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=qv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=vo();return new Promise((a,l)=>{const u=new Ad;u.setWithCredentials(!0),u.listenOnce(Sd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $i.NO_ERROR:const f=u.getResponseJson();U(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case $i.TIMEOUT:U(Oe,`RPC '${e}' ${s} timed out`),l(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const y=u.getStatus();if(U(Oe,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const b=E==null?void 0:E.error;if(b&&b.status&&b.message){const S=function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(k)>=0?k:D.UNKNOWN}(b.status);l(new F(S,b.message))}else l(new F(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(D.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(Oe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);U(Oe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=vo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xd(),l=Pd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");U(Oe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let E=!1,b=!1;const S=new $v({Io:I=>{b?U(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(E||(U(Oe,`Opening RPC '${e}' stream ${i} transport.`),y.open(),E=!0),U(Oe,`RPC '${e}' stream ${i} sending:`,I),y.send(I))},To:()=>y.close()}),P=(I,k,M)=>{I.listen(k,C=>{try{M(C)}catch(V){setTimeout(()=>{throw V},0)}})};return P(y,Mr.EventType.OPEN,()=>{b||(U(Oe,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(y,Mr.EventType.CLOSE,()=>{b||(b=!0,U(Oe,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(y,Mr.EventType.ERROR,I=>{b||(b=!0,Jn(Oe,`RPC '${e}' stream ${i} transport errored:`,I),S.So(new F(D.UNAVAILABLE,"The operation could not be completed")))}),P(y,Mr.EventType.MESSAGE,I=>{var k;if(!b){const M=I.data[0];ne(!!M);const C=M,V=C.error||((k=C[0])===null||k===void 0?void 0:k.error);if(V){U(Oe,`RPC '${e}' stream ${i} received error:`,V);const B=V.status;let L=function(_){const g=me[_];if(g!==void 0)return eh(g)}(B),w=V.message;L===void 0&&(L=D.INTERNAL,w="Unknown error status: "+B+" with message "+V.message),b=!0,S.So(new F(L,w)),y.close()}else U(Oe,`RPC '${e}' stream ${i} received:`,M),S.bo(M)}}),P(l,Rd.STAT_EVENT,I=>{I.stat===Bo.PROXY?U(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Bo.NOPROXY&&U(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function _o(){return typeof document<"u"?document:null}/**
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
 */function As(n){return new ev(n,!0)}/**
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
 */class hh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class fh{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hv extends fh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=rv(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?ht(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Go(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=qo(u)?{documents:ov(s,u)}:{query:av(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=rh(s,a.resumeToken);const h=jo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=cs(s,a.snapshotVersion.toTimestamp());const h=jo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=cv(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Go(this.serializer),t.removeTarget=e,this.a_(t)}}class Wv extends fh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ne(!!e.streamToken),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=sv(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Go(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>iv(this.serializer,r))};this.a_(t)}}/**
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
 */class Gv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Ho(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(D.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ho(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Yv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kt(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Kv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{xn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await ci(h),h.q_.set("Unknown"),h.L_.delete(4),await Ss(h)}(this))})}),this.q_=new Yv(r,i)}}async function Ss(n){if(xn(n))for(const e of n.B_)await e(!0)}async function ci(n){for(const e of n.B_)await e(!1)}function ph(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ba(t)?Oa(t):ur(t).r_()&&La(t,e))}function Va(n,e){const t=Y(n),r=ur(t);t.N_.delete(e),r.r_()&&mh(t,e),t.N_.size===0&&(r.r_()?r.o_():xn(t)&&t.q_.set("Unknown"))}function La(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ur(n).A_(e)}function mh(n,e){n.Q_.xe(e),ur(n).R_(e)}function Oa(n){n.Q_=new Q0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ur(n).start(),n.q_.v_()}function Ba(n){return xn(n)&&!ur(n).n_()&&n.N_.size>0}function xn(n){return Y(n).L_.size===0}function gh(n){n.Q_=void 0}async function Qv(n){n.q_.set("Online")}async function Xv(n){n.N_.forEach((e,t)=>{La(n,e)})}async function Jv(n,e){gh(n),Ba(n)?(n.q_.M_(e),Oa(n)):n.q_.set("Unknown")}async function Zv(n,e,t){if(n.q_.set("Online"),e instanceof nh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await us(n,r)}else if(e instanceof Wi?n.Q_.Ke(e):e instanceof th?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await dh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),mh(s,u);const y=new Gt(f.target,u,h,f.sequenceNumber);La(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,e,t){if(!oi(e))throw e;n.L_.add(1),await ci(n),n.q_.set("Offline"),t||(t=()=>dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ss(n)})}function yh(n,e){return e().catch(t=>us(n,t,e))}async function Rs(n){const e=Y(n),t=rn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;e_(e);)try{const i=await Ov(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,t_(e,i)}catch(i){await us(e,i)}vh(e)&&_h(e)}function e_(n){return xn(n)&&n.O_.length<10}function t_(n,e){n.O_.push(e);const t=rn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function vh(n){return xn(n)&&!rn(n).n_()&&n.O_.length>0}function _h(n){rn(n).start()}async function n_(n){rn(n).p_()}async function r_(n){const e=rn(n);for(const t of n.O_)e.m_(t.mutations)}async function i_(n,e,t){const r=n.O_.shift(),i=xa.from(r,e,t);await yh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Rs(n)}async function s_(n,e){e&&rn(n).V_&&await async function(r,i){if(function(a){return G0(a)&&a!==D.ABORTED}(i.code)){const s=r.O_.shift();rn(r).s_(),await yh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rs(r)}}(n,e),vh(n)&&_h(n)}async function fu(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=xn(t);t.L_.add(3),await ci(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ss(t)}async function o_(n,e){const t=Y(n);e?(t.L_.delete(2),await Ss(t)):e||(t.L_.add(2),await ci(t),t.q_.set("Unknown"))}function ur(n){return n.K_||(n.K_=function(t,r,i){const s=Y(t);return s.w_(),new Hv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Qv.bind(null,n),Ro:Xv.bind(null,n),mo:Jv.bind(null,n),d_:Zv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ba(n)?Oa(n):n.q_.set("Unknown")):(await n.K_.stop(),gh(n))})),n.K_}function rn(n){return n.U_||(n.U_=function(t,r,i){const s=Y(t);return s.w_(),new Wv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:n_.bind(null,n),mo:s_.bind(null,n),f_:r_.bind(null,n),g_:i_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Rs(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Fa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Fa(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,e){if(kt("AsyncQueue",`${e}: ${n}`),oi(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Dr(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class pu{constructor(){this.W_=new le(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class rr{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new rr(e,t,Gn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Es(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class a_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class l_{constructor(){this.queries=mu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Y(t),s=i.queries;i.queries=mu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function mu(){return new cr(n=>qd(n),Es)}async function Eh(n,e){const t=Y(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new a_,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ua(a,`Initialization of query '${Fn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&za(t)}async function wh(n,e){const t=Y(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function c_(n,e){const t=Y(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&za(t)}function u_(n,e,t){const r=Y(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function za(n){n.Y_.forEach(e=>{e.next()})}var Ko,gu;(gu=Ko||(Ko={})).ea="default",gu.Cache="cache";class Ih{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ko.Cache}}/**
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
 */class Th{constructor(e){this.key=e}}class bh{constructor(e){this.key=e}}class d_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=$d(e),this.Ra=new Gn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new pu,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const E=i.get(f),b=ws(this.query,y)?y:null,S=!!E&&this.mutatedKeys.has(E.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let I=!1;E&&b?E.data.isEqual(b.data)?S!==P&&(r.track({type:3,doc:b}),I=!0):this.ga(E,b)||(r.track({type:2,doc:b}),I=!0,(u&&this.Aa(b,u)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!E&&b?(r.track({type:0,doc:b}),I=!0):E&&!b&&(r.track({type:1,doc:E}),I=!0,(u||h)&&(l=!0)),I&&(b?(a=a.add(b),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(b,S){const P=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return P(b)-P(S)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new rr(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new bh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Th(r))}),t}ba(e){this.Ta=e.Ts,this.da=K();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class h_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class f_{constructor(e){this.key=e,this.va=!1}}class p_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new cr(l=>qd(l),Es),this.Ma=new Map,this.xa=new Set,this.Oa=new le(q.comparator),this.Na=new Map,this.La=new Ma,this.Ba={},this.ka=new Map,this.qa=nr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function m_(n,e,t=!0){const r=Ch(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Ah(r,e,t,!0),i}async function g_(n,e){const t=Ch(n);await Ah(t,e,!0,!1)}async function Ah(n,e,t,r){const i=await Bv(n.localStore,dt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await y_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ph(n.remoteStore,i),l}async function y_(n,e,t,r,i){n.Ka=(y,E,b)=>async function(P,I,k,M){let C=I.view.ma(k);C.ns&&(C=await uu(P.localStore,I.query,!1).then(({documents:w})=>I.view.ma(w,C)));const V=M&&M.targetChanges.get(I.targetId),B=M&&M.targetMismatches.get(I.targetId)!=null,L=I.view.applyChanges(C,P.isPrimaryClient,V,B);return vu(P,I.targetId,L.wa),L.snapshot}(n,y,E,b);const s=await uu(n.localStore,e,!0),a=new d_(e,s.Ts),l=a.ma(s.documents),u=li.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);vu(n,t,h.wa);const f=new h_(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function v_(n,e,t){const r=Y(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Es(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Va(r.remoteStore,i.targetId),Qo(r,i.targetId)}).catch(si)):(Qo(r,i.targetId),await Yo(r.localStore,i.targetId,!0))}async function __(n,e){const t=Y(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Va(t.remoteStore,r.targetId))}async function E_(n,e,t){const r=R_(n);try{const i=await function(a,l){const u=Y(a),h=_e.now(),f=l.reduce((b,S)=>b.add(S.key),K());let y,E;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let S=Mt(),P=K();return u.cs.getEntries(b,f).next(I=>{S=I,S.forEach((k,M)=>{M.isValidDocument()||(P=P.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,S)).next(I=>{y=I;const k=[];for(const M of l){const C=q0(M,y.get(M.key).overlayedDocument);C!=null&&k.push(new on(M.key,C,Nd(C.value.mapValue),et.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,k,l)}).next(I=>{E=I;const k=I.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(b,I.batchId,k)})}).then(()=>({batchId:E.batchId,changes:Hd(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new le(Z)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await ui(r,i.changes),await Rs(r.remoteStore)}catch(i){const s=Ua(i,"Failed to persist write");t.reject(s)}}async function Sh(n,e){const t=Y(n);try{const r=await Vv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ne(a.va):i.removedDocuments.size>0&&(ne(a.va),a.va=!1))}),await ui(t,r,e)}catch(r){await si(r)}}function yu(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Y(a);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const E of y.j_)E.Z_(l)&&(h=!0)}),h&&za(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function w_(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new le(q.comparator);a=a.insert(s,Fe.newNoDocument(s,G.min()));const l=K().add(s),u=new bs(G.min(),new Map,new le(Z),a,l);await Sh(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),qa(r)}else await Yo(r.localStore,e,!1).then(()=>Qo(r,e,t)).catch(si)}async function I_(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await Nv(t.localStore,e);Ph(t,r,null),Rh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ui(t,i)}catch(i){await si(i)}}async function T_(n,e,t){const r=Y(n);try{const i=await function(a,l){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(ne(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ph(r,e,t),Rh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ui(r,i)}catch(i){await si(i)}}function Rh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ph(n,e,t){const r=Y(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||xh(n,r)})}function xh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Va(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),qa(n))}function vu(n,e,t){for(const r of t)r instanceof Th?(n.La.addReference(r.key,e),b_(n,r)):r instanceof bh?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||xh(n,r.key)):W()}function b_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),qa(n))}function qa(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(oe.fromString(e)),r=n.qa.next();n.Na.set(r,new f_(t)),n.Oa=n.Oa.insert(t,r),ph(n.remoteStore,new Gt(dt(Sa(t.path)),r,"TargetPurposeLimboResolution",Ea.oe))}}async function ui(n,e,t){const r=Y(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=Na.Wi(u.targetId,h);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>N.forEach(h,E=>N.forEach(E.$i,b=>f.persistence.referenceDelegate.addReference(y,E.targetId,b)).next(()=>N.forEach(E.Ui,b=>f.persistence.referenceDelegate.removeReference(y,E.targetId,b)))))}catch(y){if(!oi(y))throw y;U("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const E=y.targetId;if(!y.fromCache){const b=f.os.get(E),S=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(E,P)}}}(r.localStore,s))}async function A_(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await uh(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new F(D.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ui(t,r.hs)}}function S_(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return K().add(r.key);{let i=K();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Ch(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w_.bind(null,e),e.Ca.d_=c_.bind(null,e.eventManager),e.Ca.$a=u_.bind(null,e.eventManager),e}function R_(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T_.bind(null,e),e}class ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=As(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Dv(this.persistence,new kv,e.initialUser,this.serializer)}Ga(e){return new Pv(Da.Zr,this.serializer)}Wa(e){return new Uv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ds.provider={build:()=>new ds};class Xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A_.bind(null,this.syncEngine),await o_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new l_}()}createDatastore(e){const t=As(e.databaseInfo.databaseId),r=function(s){return new jv(s)}(e.databaseInfo);return function(s,a,l,u){return new Gv(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Kv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yu(this.syncEngine,t,0),function(){return hu.D()?new hu:new zv}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const y=new p_(i,s,a,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Y(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ci(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xo.provider={build:()=>new Xo};/**
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
 */class kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class P_{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ua(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Eo(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await x_(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>fu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>fu(e.remoteStore,i)),n._onlineComponents=e}async function x_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await Eo(n,new ds)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Eo(n,new ds);return n._offlineComponents}async function Mh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await _u(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await _u(n,new Xo))),n._onlineComponents}function C_(n){return Mh(n).then(e=>e.syncEngine)}async function Dh(n){const e=await Mh(n),t=e.eventManager;return t.onListen=m_.bind(null,e.syncEngine),t.onUnlisten=v_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=g_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=__.bind(null,e.syncEngine),t}function k_(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new kh({next:E=>{f.Za(),a.enqueueAndForget(()=>wh(s,y));const b=E.docs.has(l);!b&&E.fromCache?h.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&u&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),y=new Ih(Sa(l.path),f,{includeMetadataChanges:!0,_a:!0});return Eh(s,y)}(await Dh(n),n.asyncQueue,e,t,r)),r.promise}function M_(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new kh({next:E=>{f.Za(),a.enqueueAndForget(()=>wh(s,y)),E.fromCache&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),y=new Ih(l,f,{includeMetadataChanges:!0,_a:!0});return Eh(s,y)}(await Dh(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Nh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Eu=new Map;/**
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
 */function Vh(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function D_(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wu(n){if(!q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iu(n){if(q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ps(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function N_(n,e){if(e<=0)throw new F(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Tu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xy;switch(r.type){case"firstParty":return new t0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Eu.get(t);r&&(U("ComponentProvider","Removing Datastore"),Eu.delete(t),r.terminate())}(this),Promise.resolve()}}function V_(n,e,t,r={}){var i;const s=(n=Dt(n,xs))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Be.MOCK_USER;else{l=op(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Be(h)}n._authCredentials=new Jy(new Cd(l,u))}}/**
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
 */class an{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new an(this.firestore,e,this._query)}}class Qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class Jt extends an{constructor(e,t,r){super(e,t,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new q(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function L_(n,e,...t){if(n=ye(n),Vh("collection","path",e),n instanceof xs){const r=oe.fromString(e,...t);return Iu(r),new Jt(n,null,r)}{if(!(n instanceof Qe||n instanceof Jt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Iu(r),new Jt(n.firestore,null,r)}}function Yn(n,e,...t){if(n=ye(n),arguments.length===1&&(e=kd.newId()),Vh("doc","path",e),n instanceof xs){const r=oe.fromString(e,...t);return wu(r),new Qe(n,null,new q(r))}{if(!(n instanceof Qe||n instanceof Jt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return wu(r),new Qe(n.firestore,n instanceof Jt?n.converter:null,new q(r))}}/**
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
 */class bu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hh(this,"async_queue_retry"),this.Vu=()=>{const r=_o();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!oi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Fa.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class dr extends xs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new bu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bu(e),this._firestoreClient=void 0,await e}}}function O_(n,e){const t=typeof n=="object"?n:qu(),r=typeof n=="string"?n:"(default)",i=aa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ip("firestore");s&&V_(i,...s)}return i}function Cs(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||B_(n),n._firestoreClient}function B_(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new p0(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Nh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new P_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(Ne.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ks{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $a{constructor(e){this._methodName=e}}/**
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
 */class ja{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */class Ha{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const F_=/^__.*__$/;class U_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class Lh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new on(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Oh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Wa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return hs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Oh(this.Cu)&&F_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class z_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||As(e)}Qu(e,t,r,i=!1){return new Wa({Cu:e,methodName:t,qu:r,path:Me.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ms(n){const e=n._freezeSettings(),t=As(n._databaseId);return new z_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ga(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Ya("Data must be an object, but it was:",a,r);const l=Bh(r,a);let u,h;if(s.merge)u=new Ze(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const E=Jo(e,y,t);if(!a.contains(E))throw new F(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Uh(f,E)||f.push(E)}u=new Ze(f),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new U_(new Ye(l),u,h)}class Ds extends $a{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ds}}function q_(n,e,t,r){const i=n.Qu(1,e,t);Ya("Data must be an object, but it was:",i,r);const s=[],a=Ye.empty();Pn(r,(u,h)=>{const f=Ka(e,u,t);h=ye(h);const y=i.Nu(f);if(h instanceof Ds)s.push(f);else{const E=di(h,y);E!=null&&(s.push(f),a.set(f,E))}});const l=new Ze(s);return new Lh(a,l,i.fieldTransforms)}function $_(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Jo(e,r,t)],u=[i];if(s.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<s.length;E+=2)l.push(Jo(e,s[E])),u.push(s[E+1]);const h=[],f=Ye.empty();for(let E=l.length-1;E>=0;--E)if(!Uh(h,l[E])){const b=l[E];let S=u[E];S=ye(S);const P=a.Nu(b);if(S instanceof Ds)h.push(b);else{const I=di(S,P);I!=null&&(h.push(b),f.set(b,I))}}const y=new Ze(h);return new Lh(f,y,a.fieldTransforms)}function j_(n,e,t,r=!1){return di(t,n.Qu(r?4:3,e))}function di(n,e){if(Fh(n=ye(n)))return Ya("Unsupported field value:",e,n),Bh(n,e);if(n instanceof $a)return function(r,i){if(!Oh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=di(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return L0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:cs(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cs(i.serializer,s)}}if(r instanceof ja)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:rh(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ka(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ha)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ra(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ps(r)}`)}(n,e)}function Bh(n,e){const t={};return Md(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(n,(r,i)=>{const s=di(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Fh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof ja||n instanceof ir||n instanceof Qe||n instanceof $a||n instanceof Ha)}function Ya(n,e,t){if(!Fh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ps(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Jo(n,e,t){if((e=ye(e))instanceof ks)return e._internalPath;if(typeof e=="string")return Ka(n,e);throw hs("Field path arguments must be of type string or ",n,!1,void 0,t)}const H_=new RegExp("[~\\*/\\[\\]]");function Ka(n,e,t){if(e.search(H_)>=0)throw hs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ks(...e.split("."))._internalPath}catch{throw hs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hs(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new F(D.INVALID_ARGUMENT,l+n+u)}function Uh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class zh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ns("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class W_ extends zh{data(){return super.data()}}function Ns(n,e){return typeof e=="string"?Ka(n,e):e instanceof ks?e._internalPath:e._delegate._internalPath}/**
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
 */function G_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qa{}class Xa extends Qa{}function zr(n,e,...t){let r=[];e instanceof Qa&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Za).length,l=s.filter(u=>u instanceof Vs).length;if(a>1||a>0&&l>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Vs extends Xa{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vs(e,t,r)}_apply(e){const t=this._parse(e);return qh(e._query,t),new an(e.firestore,e.converter,$o(e._query,t))}_parse(e){const t=Ms(e.firestore);return function(s,a,l,u,h,f,y){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ru(y,f);const b=[];for(const S of y)b.push(Su(u,s,S));E={arrayValue:{values:b}}}else E=Su(u,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ru(y,f),E=j_(l,a,y,f==="in"||f==="not-in");return ge.create(h,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ja(n,e,t){const r=e,i=Ns("where",n);return Vs._create(i,r,t)}class Za extends Qa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Za(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)qh(a,u),a=$o(a,u)}(e._query,t),new an(e.firestore,e.converter,$o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class el extends Xa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new el(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qr(s,a)}(e._query,this._field,this._direction);return new an(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new lr(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Au(n,e="asc"){const t=e,r=Ns("orderBy",n);return el._create(r,t)}class tl extends Xa{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new tl(e,t,r)}_apply(e){return new an(e.firestore,e.converter,os(e._query,this._limit,this._limitType))}}function Y_(n){return N_("limit",n),tl._create("limit",n,"F")}function Su(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zd(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!q.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gc(n,new q(r))}if(t instanceof Qe)return Gc(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ps(t)}.`)}function Ru(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qh(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class K_{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>fe(a.doubleValue));return new Ha(s)}convertGeoPoint(e){return new ja(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const t=nn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);ne(ch(r));const i=new Yr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function nl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Vr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $h extends zh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gi extends $h{data(e={}){return super.data(e)}}class Q_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gi(this._firestore,this._userDataWriter,r.key,r,new Vr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:X_(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function X_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function jh(n){n=Dt(n,Qe);const e=Dt(n.firestore,dr);return k_(Cs(e),n._key).then(t=>Z_(e,n,t))}class Hh extends K_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,t)}}function Ls(n){n=Dt(n,an);const e=Dt(n.firestore,dr),t=Cs(e),r=new Hh(e);return G_(n._query),M_(t,n._query).then(i=>new Q_(e,r,n,i))}function rl(n,e,t){n=Dt(n,Qe);const r=Dt(n.firestore,dr),i=nl(n.converter,e,t);return il(r,[Ga(Ms(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,et.none())])}function J_(n,e){const t=Dt(n.firestore,dr),r=Yn(n),i=nl(n.converter,e);return il(t,[Ga(Ms(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then(()=>r)}function il(n,e){return function(r,i){const s=new Pt;return r.asyncQueue.enqueueAndForget(async()=>E_(await C_(r),i,s)),s.promise}(Cs(n),e)}function Z_(n,e,t){const r=t.docs.get(e._key),i=new Hh(n);return new $h(n,i,e._key,r,new Vr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class eE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ms(e)}set(e,t,r){this._verifyNotCommitted();const i=wo(e,this._firestore),s=nl(i.converter,t,r),a=Ga(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,et.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=wo(e,this._firestore);let a;return a=typeof(t=ye(t))=="string"||t instanceof ks?$_(this._dataReader,"WriteBatch.update",s._key,t,r,i):q_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,et.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=wo(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(t._key,et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wo(n,e){if((n=ye(n)).firestore!==e)throw new F(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function fs(n){return Cs(n=Dt(n,dr)),new eE(n,e=>il(n,e))}(function(e,t=!0){(function(i){ar=i})(sr),Qn(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new dr(new Zy(r.getProvider("auth-internal")),new r0(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xt(qc,"4.7.3",e),Xt(qc,"4.7.3","esm2017")})();const Wh={apiKey:"AIzaSyBdbve0H70D-Ch69WlaxEly7PVBFVRB5p0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:2d6f7173c8d7fab6fd9e85",measurementId:"G-80XX542QZE"};function ve(){return Wh.apiKey!=="YOUR_API_KEY"}let Io=null,tt=null,Ke=null;try{ve()?(Io=zu(Wh),tt=Ky(Io),Ke=O_(Io)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const tE=new Tt;let Wt=null,qr=[];function nE(){if(!ve()||!tt){console.warn("Firebase not configured - auth disabled");return}Og(tt,n=>{console.log("onAuthStateChanged fired:",n?n.email:"null"),Wt=n,console.log("Notifying",qr.length,"listeners"),qr.forEach(e=>e(n))})}function rE(n){return console.log("onAuthStateChange: adding listener, currentUser is:",Wt&&Wt.email),qr.push(n),Wt&&(console.log("onAuthStateChange: immediately calling listener with user"),n(Wt)),()=>{qr=qr.filter(e=>e!==n)}}function hi(){return Wt}function mt(){return Wt!==null}async function iE(n,e,t=null){if(!ve()||!tt)throw new Error("Firebase not configured");const r=await kg(tt,n,e);return t&&r.user&&await Ng(r.user,{displayName:t}),r}async function sE(n,e){if(!ve()||!tt)throw new Error("Firebase not configured");return Mg(tt,n,e)}async function oE(){if(!ve()||!tt)throw new Error("Firebase not configured");console.log("Initiating Google sign-in popup...");try{const n=await iy(tt,tE);return console.log("Google sign-in successful:",n.user.email),n}catch(n){throw console.error("signInWithPopup error:",n.code,n.message),n}}async function Gh(){if(!ve()||!tt)throw new Error("Firebase not configured");return Bg(tt)}async function aE(n){if(!ve()||!tt)throw new Error("Firebase not configured");return Cg(tt,n)}nE();function Os(n,e="settings"){const t=hi();return!t||!Ke?null:Yn(Ke,"users",t.uid,n,e)}function Bs(n){const e=hi();return!e||!Ke?null:L_(Ke,"users",e.uid,n)}async function Yh(){if(!ve())return null;const n=Os("decision");if(!n)return null;try{const e=await jh(n);return e.exists()?e.data():null}catch(e){return console.error("Error loading decision data:",e),null}}async function lE(n){if(!ve())return;const e=Os("decision");if(e)try{await rl(e,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(t){throw console.error("Error saving decision data:",t),t}}async function sl(n={}){if(!ve())return[];const e=Bs("history");if(!e)return[];try{let t=zr(e,Au("date",n.sortDesc?"desc":"asc"));n.taxYear&&(t=zr(e,Ja("taxYear","==",n.taxYear),Au("date",n.sortDesc?"desc":"asc"))),n.limit&&(t=zr(t,Y_(n.limit)));const r=await Ls(t),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(t){return console.error("Error loading decision history:",t),[]}}async function cE(n){if(!ve())return null;const e=Bs("history");if(!e)return null;try{const t=zr(e,Ja("date","==",n.date)),r=await Ls(t);if(!r.empty){const s=r.docs[0].id;return await rl(Yn(Ke,"users",hi().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await J_(e,{...n,createdAt:new Date().toISOString()})).id}catch(t){throw console.error("Error adding history record:",t),t}}async function uE(n){if(!ve())return;const e=Bs("history");if(e)try{const t=zr(e,Ja("date","==",n)),r=await Ls(t),i=fs(Ke);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(t){throw console.error("Error deleting history record:",t),t}}async function dE(){if(!ve())return;const n=Bs("history");if(n)try{const e=await Ls(n),t=500,r=[];let i=fs(Ke),s=0;e.forEach(a=>{i.delete(a.ref),s++,s>=t&&(r.push(i),i=fs(Ke),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(e){throw console.error("Error clearing history:",e),e}}async function hE(){if(!ve())return null;const n=Os("stress");if(!n)return null;try{const e=await jh(n);return e.exists()?e.data():null}catch(e){return console.error("Error loading stress data:",e),null}}async function Kh(n){if(!ve())return;const e=Os("stress");if(e)try{await rl(e,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(t){throw console.error("Error saving stress data:",t),t}}async function fE(){if(!ve())return;const n=hi();if(!(!n||!Ke))try{await dE();const e=fs(Ke);e.delete(Yn(Ke,"users",n.uid,"decision","settings")),e.delete(Yn(Ke,"users",n.uid,"stress","settings")),e.delete(Yn(Ke,"users",n.uid,"profile","settings")),await e.commit(),console.log("All user data wiped successfully")}catch(e){throw console.error("Error wiping user data:",e),e}}async function pE(){if(!ve())return!1;const n=await Yh(),e=await sl({limit:1});return n!==null||e.length>0}let We=null,_n=null;const Qh=5e3;function Yi(){return{settings:{equityMin:Ge.EQUITY_MIN,bondMin:Ge.BOND_MIN,cashTarget:Ge.CASH_TARGET,duration:Ge.DURATION_YEARS,baseSalary:Ge.BASE_SALARY,protectionFactor:Ge.PROTECTION_FACTOR,recoveryBuffer:Ge.RECOVERY_BUFFER,consecutiveLimit:Ge.CONSECUTIVE_LIMIT,startDate:null,statePension:12e3,statePensionYear:12},taxYears:{"25/26":{pa:12570,brl:50270,hrl:125140,cpi:.04,other:0}},history:[],lastModified:null,checksum:null}}function fi(){return ve()&&mt()}function mE(){We=null,_n=null}function Xh(){return We&&_n&&Date.now()-_n<Qh?We:Yi()}async function hr(){if(We&&_n&&Date.now()-_n<Qh)return We;if(!fi())return console.warn("Firebase not available - returning defaults"),Yi();try{const n=await Yh(),e=await sl();if(n){const t={settings:n.settings||Yi().settings,taxYears:n.taxYears||{},history:e||[],lastModified:n.lastModified,checksum:n.checksum};return We=t,_n=Date.now(),t}}catch(n){console.error("Error loading from Firebase:",n)}return Yi()}async function ol(n){if(!fi())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=gE(n),await lE({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),We=n,_n=Date.now()}catch(e){throw console.error("Error saving to Firebase:",e),new Error("Failed to save decision data")}}function gE(n){const e={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return Mu(e)}async function Fs(){return(await hr()).settings}async function al(n){const e=await hr();e.settings={...e.settings,...n},await ol(e)}function Jh(){return{pa:Je.PERSONAL_ALLOWANCE,brl:Je.BASIC_RATE_LIMIT,hrl:Je.HIGHER_RATE_LIMIT,cpi:.04,other:0}}function yE(n){const t=Xh().taxYears[n];return t||Jh()}async function vE(n){const t=(await hr()).taxYears[n];return t||Jh()}async function ll(n,e){const t=await hr();t.taxYears[n]={...yE(n),...e},await ol(t)}async function Zh(){return(await hr()).taxYears}function _E(n={}){let t=[...Xh().history];return n.taxYear&&(t=t.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(t=t.filter(r=>r.date>=n.startDate)),n.endDate&&(t=t.filter(r=>r.date<=n.endDate)),n.sortDesc?t.sort((r,i)=>i.date.localeCompare(r.date)):t.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(t=t.slice(0,n.limit)),t}async function ef(n={}){if(fi())try{return await sl(n)}catch(e){console.error("Error loading history from Firebase:",e)}return _E(n)}async function EE(n){if(!fi())throw new Error("Must be logged in to save history");if(await cE(n),We){const e=We.history.findIndex(t=>t.date===n.date);e>=0?We.history[e]=n:We.history.push(n),We.history.sort((t,r)=>t.date.localeCompare(r.date))}}async function wE(n){if(!fi())throw new Error("Must be logged in to delete history");await uE(n),We&&(We.history=We.history.filter(e=>e.date!==n))}async function IE(n){const e=qf(n);e.stdSipp=n.sippDraw-(n.boostAmount||0),await EE(e)}function Us(n,e,t=0){const r=ia(t);let i=n.equityStart,s=n.bondStart,a=n.cashStart,l=n.hodlEnabled?n.hodlStart!==void 0?n.hodlStart:n.hodlValue:0,u=0,h=null,f=0,y=0,E=0,b=0,S=!1,P=!1,I=null,k=0,M=-1;const C=[],V=[];let B=1;C.push({year:0,month:0,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let L=0;L<n.years*12;L++){const w=Math.floor(L/12),m=L%12,_=m>=3?w:w-1;if(_!==M&&(k=0,M=_),L>0&&L%12===0){const ee=e.inflation[w]||.025;V.push(ee),B*=1+ee}const g=e.equity[w]||0,T=e.inflation[w]||.025,A=w>0?e.inflation[w-1]||.025:T,v=$n(n.equityMin,w,n.duration,B,!0),Se=$n(n.bondMin,w,n.duration,B,!0),ze=$n(n.cashTarget,w,n.duration,B,!1),yt=bE(n,w,B,V),nt=yt;let ue=S?yt*n.protectionMult:yt;S&&(k+=nt-ue);const Re=TE(T,g,A,r),qe=Math.max(.005,T+.012);if(i*=1+Math.pow(1+g,1/12)-1,s*=1+Math.pow(1+Re,1/12)-1,a*=1+Math.pow(1+qe,1/12)-1,l>0){const $e=(r()-.5)*2*.06;let Ie=0;g<-.1?Ie=Math.min(.15,Math.abs(g)*.4):g<-.05&&(Ie=Math.abs(g)*.2);let Pe=.069+$e+Ie;Pe=Math.max(-.08,Math.min(.18,Pe)),l*=1+Math.pow(1+Pe,1/12)-1}const Ee=i+s,$=v+Se;S&&Ee>$+5e3&&(S=!1,b=0,y=Math.max(y,E),E=0),S&&(f++,E++);let ae=0;if(!S&&k>0&&Ee>$+15e3){let ee=m>=3?15-m:3-m;ee<1&&(ee=1);const we=Ee-$-15e3,$e=Math.min(k/ee,we/ee),Ie=nt*.5;ae=Math.min($e,Ie),ae>50&&(ue+=ae,k-=ae)}let re="Growth";if(!S&&Ee>=$+ue){const ee=Math.max(0,i-v),we=Math.max(0,s-Se),$e=ee+we;if($e>0){if(i-=ue*ee/$e,s-=ue*we/$e,b=0,re="Growth",a<ze){const Ie=Ee-$-ue;if(Ie>5e3){const Pe=Math.min((ze-a)*.3,Ie*.5);i-=Pe*ee/$e,s-=Pe*we/$e,a+=Pe}}}else a-=ue,re="Cash"}else if(a>=ue)a-=ue,b++,re="Cash",!n.disableProtection&&b>=n.consecutiveLimit&&(S=!0);else{const ee=ue-a;a=0,s>ee?(s-=ee,re="Bond"):i>ee?(i-=ee,re="Equity"):l>ee?(l-=ee,u+=ee,h===null&&(h=L),re="HODL"):(P=!0,I=L)}if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(m===0||L===n.years*12-1||P)&&C.push({year:w+m/12,month:L,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:ue,boostAmount:ae,source:re,inProtection:S,equityMin:v,bondMin:Se,cashMax:ze}),P)break}return y=Math.max(y,E),{failed:P,years:P?I/12:n.years,failMonth:I,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,finalHodl:l,protMonths:f,maxConsec:y,hodlUsed:u,hodlUsedMonth:h,hist:C,seed:t}}function TE(n,e,t,r){let i=.15,s=.3,a=.2,l=.1,u=.1,h=.15;const f=t!==void 0?t:n,y=f>.045,E=f>.07;if(y){const C=r()>.3?1:.5;E?(i=.15+.35*C,s=.3-.2*C,h=.15-.1*C,l=.1+.05*C):(i=.15+.2*C,s=.3-.1*C,h=.15-.05*C)}y&&r()<.15&&(i=.2,s=.25,h=.12);const b=n+.005+Pr(0,.03,r),S=.04-(n>.04?(n-.04)*.5:0)+Pr(0,.05,r),P=.03+n*.3+Pr(0,.08,r),I=n*.8+Pr(0,.15,r),k=Math.max(.005,n+.005),M=e*.5+Pr(0,.02,r);return i*b+s*S+a*P+l*I+u*k+h*M}function bE(n,e,t,r){n.taxMode==="frozen"?n.pa:n.pa*t;const i=n.taxMode==="frozen"?n.brl:n.brl*t,s=n.baseSalary*t;let a=n.other;for(const f of r)a*=1+Math.min(f,.04);const l=e>=n.statePensionYear?n.statePension*t:0,u=a+l;return Math.max(0,Math.min(i,s)-u)/12}function tf(n,e=1e3){const t=Object.keys($r).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<e;i++){const s=ia(i*12345),a={equity:{},inflation:{}};for(let l=0;l<n.years;l++){const u=t[Math.floor(s()*t.length)];a.equity[l]=$r[u],a.inflation[l]=ra[u]||.025}r.push(Us(n,a,i))}return r}function nf(n){const e=Object.keys($r).map(Number).sort((i,s)=>i-s),t=Math.max(...e),r=[];for(const i of e){if(i+n.years-1>t)continue;const s={equity:{},inflation:{}};for(let l=0;l<n.years;l++)s.equity[l]=$r[i+l]||0,s.inflation[l]=ra[i+l]||.025;const a=Us(n,s,i);a.startYear=i,r.push(a)}return r}function AE(n,e){const t={equity:{},inflation:{}};for(let r=0;r<n.years;r++)t.equity[r]=e.equity[r%e.equity.length],t.inflation[r]=e.inflation[r%e.inflation.length];return Us(n,t,999)}function SE(n){const e=n.filter(t=>t.failed).length;return(n.length-e)/n.length*100}function rf(n){const e=n.filter(l=>!l.failed),t=n.filter(l=>l.failed),r=n.map(l=>l.years).sort((l,u)=>l-u),i=e.map(l=>l.final).sort((l,u)=>l-u),s=n.map(l=>l.protMonths).sort((l,u)=>l-u),a=(l,u)=>l[Math.floor(l.length*u)]||0;return{total:n.length,successCount:e.length,failCount:t.length,successRate:SE(n),survival:{p5:a(r,.05),p10:a(r,.1),p25:a(r,.25),p50:a(r,.5),p75:a(r,.75),p90:a(r,.9),p95:a(r,.95),min:r[0],max:r[r.length-1]},finalValue:{p5:a(i,.05),p10:a(i,.1),p25:a(i,.25),p50:a(i,.5),p75:a(i,.75),p90:a(i,.9),p95:a(i,.95),min:i[0]||0,max:i[i.length-1]||0,avg:e.reduce((l,u)=>l+u.final,0)/(e.length||1)},minYears:r[0],p10Years:a(r,.1),medianYears:a(r,.5),medianFinal:a(i,.5),p10Final:a(i,.1),p90Final:a(i,.9),avgFinal:e.reduce((l,u)=>l+u.final,0)/(e.length||1),protection:{runsWithProtection:n.filter(l=>l.protMonths>0).length,pctWithProtection:n.filter(l=>l.protMonths>0).length/n.length*100,avgMonths:s.reduce((l,u)=>l+u,0)/n.length,maxMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,p50Months:a(s,.5),p90Months:a(s,.9),p95Months:a(s,.95)},runsWithProtection:n.filter(l=>l.protMonths>0).length,avgProtMonths:s.reduce((l,u)=>l+u,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,hodl:{runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,pctUsingHodl:n.filter(l=>l.hodlUsed>0).length/n.length*100,avgUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxUsed:Math.max(...n.map(l=>l.hodlUsed||0))},runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,avgHodlUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxHodlUsed:Math.max(...n.map(l=>l.hodlUsed||0)),failures:t.map(l=>({seed:l.seed,startYear:l.startYear,years:l.years,failMonth:l.failMonth,protMonths:l.protMonths}))}}let Yt=null,En=null;const sf=5e3;function Kn(){return{settings:{equityMin:Ge.EQUITY_MIN,bondMin:Ge.BOND_MIN,cashTarget:Ge.CASH_TARGET,duration:Ge.DURATION_YEARS,baseSalary:Ge.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:Je.PERSONAL_ALLOWANCE,brl:Je.BASIC_RATE_LIMIT,hrl:Je.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:lo.PROTECTION_MULTIPLIER,consecutiveLimit:Ge.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:lo.HODL_ENABLED,hodlValue:lo.HODL_VALUE},lastModified:null,checksum:null}}function cl(){return ve()&&mt()}function RE(){Yt=null,En=null}function PE(){return Yt&&En&&Date.now()-En<sf?Yt:Kn()}async function of(){if(Yt&&En&&Date.now()-En<sf)return Yt;if(!cl())return console.warn("Firebase not available - returning defaults"),Kn();try{const n=await hE();if(n){const e={settings:n.settings||Kn().settings,lastModified:n.lastModified,checksum:n.checksum};return Yt=kE(e),En=Date.now(),Yt}}catch(n){console.error("Error loading stress data from Firebase:",n)}return Kn()}async function xE(n){if(!cl())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=CE(n),await Kh({settings:n.settings,lastModified:n.lastModified,checksum:n.checksum}),Yt=n,En=Date.now()}catch(e){throw console.error("Error saving stress data to Firebase:",e),new Error("Failed to save stress data")}}function CE(n){return Mu(n.settings)}function kE(n){const e={...Kn()};return n.settings&&(e.settings={...e.settings,...n.settings},n.settings.pacwMin!==void 0&&n.settings.equityMin===void 0&&(e.settings.equityMin=n.settings.pacwMin),n.settings.cgtMin!==void 0&&n.settings.bondMin===void 0&&(e.settings.bondMin=n.settings.cgtMin),n.settings.csh2Target!==void 0&&n.settings.cashTarget===void 0&&(e.settings.cashTarget=n.settings.csh2Target),e.settings.hodlEnabled===void 0&&(e.settings.hodlEnabled=!1),e.settings.hodlValue===void 0&&(e.settings.hodlValue=25e3)),e.lastModified=n.lastModified,e.checksum=n.checksum,e}function ME(){return PE().settings}async function ln(){return(await of()).settings}async function ul(n){const e=await of();e.settings={...e.settings,...n},await xE(e)}async function DE(){if(!cl())throw new Error("Must be logged in to reset settings");const n=Kn();await Kh({settings:n.settings,lastModified:new Date().toISOString()}),RE()}function dl(n={},e=null){const t=e||ME();return{equityStart:n.equityStart??t.equityMin,bondStart:n.bondStart??t.bondMin,cashStart:n.cashStart??t.cashTarget,equityMin:t.equityMin,bondMin:t.bondMin,cashTarget:t.cashTarget,years:n.years??t.duration,duration:t.duration,baseSalary:t.baseSalary,other:t.other,statePension:t.statePension,statePensionYear:t.statePensionYear,pa:t.pa,brl:t.brl,hrl:t.hrl,taxMode:t.taxMode,protectionMult:t.protectionMult,consecutiveLimit:t.consecutiveLimit,disableProtection:t.disableProtection,hodlEnabled:t.hodlEnabled,hodlValue:t.hodlValue}}function z(n,e=null){const t=Math.abs(n),r=e!==null?e:t<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function NE(n,e){const t=VE(n);e.innerHTML=t}function VE(n){const e=n,t=e.calculationDetails||{};let r="";const i=e.taxEfficient?"success":"warning",s=e.taxEfficient?"Tax-Efficient Mode":"Standard Mode",a=e.taxEfficient?"✓":"!";if(r+=`<div class="decision-mode ${i}">
    <span class="mode-icon">${a}</span>
    <span class="mode-label">${s}</span>
    ${e.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,e.alerts&&e.alerts.length>0){r+='<div class="alerts">';for(const B of e.alerts){const L=LE(B.severity);r+=`<div class="alert ${L}">${B.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${z(e.sippDraw)}</span>`,r+="</div>",e.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${z(e.isaDraw)}</span>`,r+="</div>"),e.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${z(e.other)}</span>`,r+="</div>"),e.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${z(e.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const l=e.sippDraw+e.other+e.statePension,u=l*12,h=e.pa||12570,f=e.brl||50270;let y=0;u>h&&(u<=f?y=(u-h)*.2:y=(f-h)*.2+(u-f)*.4);const E=l-y/12+e.isaDraw;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${z(E)}</span>`,r+="</div>",e.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${z(e.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${e.source.toLowerCase()}">${e.source}</div>`,e.source==="Growth"&&(e.drawFromEquity>0||e.drawFromBond>0)&&(r+='<div class="source-breakdown">',e.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${z(e.drawFromEquity)}</div>`),e.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${z(e.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const b=e.equity+e.bond+e.cash,S=e.adjEquityMin+e.adjBondMin+e.adjCashTarget,P=b-S,I=S>0?P/S*100:0;r+='<div class="fund-grid">';const k=e.equity-e.adjEquityMin;r+=To("Equity",e.equity,e.adjEquityMin,k);const M=e.bond-e.adjBondMin;r+=To("Bond",e.bond,e.adjBondMin,M);const C=e.cash-e.adjCashTarget;r+=To("Cash",e.cash,e.adjCashTarget,C),r+="</div>";const V=P>=0?"healthy":"warning";if(r+=`<div class="overall-status ${V}">`,r+=`<span>Total Surplus: ${z(P)}</span>`,r+=`<span>(${I.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-grid">',r+=`<div class="tax-item"><span>Personal Allowance:</span><span>${z(e.pa)}</span></div>`,r+=`<div class="tax-item"><span>Basic Rate Limit:</span><span>${z(e.brl)}</span></div>`,t.taxInfo&&(r+=`<div class="tax-item"><span>Projected Annual Taxable:</span><span>${z(t.taxInfo.annualTaxable)}</span></div>`,r+=`<div class="tax-item"><span>Headroom to BRL:</span><span>${z(t.taxInfo.headroomToBRL)}</span></div>`,r+=`<div class="tax-item"><span>Estimated Annual Tax:</span><span>${z(t.taxInfo.annualTax)}</span></div>`),r+="</div>",r+="</div>",e.rebalanceNeeded&&e.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const B of e.rebalanceActions)r+=`<li>${B}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${t.reason||"Standard calculation based on your settings."}</p>`,!t.hasSufficientIsa&&t.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${z(t.totalIsaNeeded)} in your ISA (${e.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(t,null,2)+"</pre>",r+="</details>",r}function To(n,e,t,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${z(e)}</div>
    <div class="fund-min">Min: ${z(t)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${z(r)}</div>
  </div>`}function LE(n){switch(n){case Di.DANGER:return"alert-danger";case Di.WARNING:return"alert-warning";case Di.SUCCESS:return"alert-success";case Di.INFO:default:return"alert-info"}}function OE(){return`
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
  `}function BE(n={},e=null){const t=dl(n,e),r=tf(t),i=rf(r);return{results:r,stats:i,config:t}}function FE(n={},e=null){const t=dl(n,e),r=nf(t),i=rf(r);return{results:r,stats:i,config:t}}function UE(n={}){const e=dl(n),t={};for(const[r,i]of Object.entries($f))t[r]={...i,result:AE(e,i)};return t}let ft=null,bo=null,qn=!1;function zE(n,e){console.log("initAuthScreen: initializing"),ft=n,bo=e,qn=!1,rE(t=>{console.log("AuthScreen: auth state change received:",t?t.email:"null","processed:",qn),t&&bo&&!qn?(console.log("AuthScreen: calling onAuthSuccessCallback"),qn=!0,bo(t)):t?console.log("AuthScreen: skipping callback, already processed or no callback"):(qn=!1,console.log("AuthScreen: user signed out, reset authProcessed"))}),af(),console.log("initAuthScreen: complete")}function af(){if(ft){if(!ve()){ft.innerHTML=`
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
    `;return}ft.innerHTML=`
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
  `,qE()}}function qE(){const n=ft.querySelectorAll(".auth-screen-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),s.classList.add("active");const a=document.getElementById("signinForm"),l=document.getElementById("signupForm");s.dataset.tab==="signin"?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block"),pi()})}),document.getElementById("signinForm").addEventListener("submit",$E),document.getElementById("signupForm").addEventListener("submit",jE),document.getElementById("forgotPasswordBtn").addEventListener("click",HE),document.getElementById("googleSigninBtn").addEventListener("click",WE)}function Zt(n){const e=document.getElementById("authScreenError");e&&(e.textContent=n,e.style.display="block")}function pi(){const n=document.getElementById("authScreenError");n&&(n.style.display="none")}async function $E(n){n.preventDefault(),pi();const e=document.getElementById("signinEmail").value.trim(),t=document.getElementById("signinPassword").value;if(!e||!t){Zt("Please enter email and password");return}try{await sE(e,t)}catch(r){console.error("Sign in error:",r),Zt(zs(r.code))}}async function jE(n){n.preventDefault(),pi();const e=document.getElementById("signupName").value.trim(),t=document.getElementById("signupEmail").value.trim(),r=document.getElementById("signupPassword").value;if(!e||!t||!r){Zt("Please fill in all fields");return}if(r.length<6){Zt("Password must be at least 6 characters");return}try{await iE(t,r,e)}catch(i){console.error("Sign up error:",i),Zt(zs(i.code))}}async function HE(){pi();const n=document.getElementById("signinEmail").value.trim();if(!n){Zt("Please enter your email address first");return}try{await aE(n),alert("Password reset email sent. Check your inbox.")}catch(e){console.error("Reset password error:",e),Zt(zs(e.code))}}async function WE(){pi();try{await oE()}catch(n){console.error("Google sign in error:",n),Zt(zs(n.code))}}function zs(n){return{"auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email","auth/weak-password":"Password is too weak","auth/operation-not-allowed":"Sign in method not enabled","auth/popup-closed-by-user":"Sign in cancelled","auth/popup-blocked":"Sign in popup was blocked","auth/too-many-requests":"Too many attempts. Please try again later.","auth/invalid-credential":"Invalid email or password"}[n]||"An error occurred. Please try again."}function Zo(){console.log("hideAuthScreen: hiding auth screen, element=",!!ft),ft&&(ft.style.display="none",console.log("hideAuthScreen: set display to none"))}function lf(){qn=!1,ft&&(ft.style.display="block",af())}function GE(){return`
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
  `}let sn=null,ea=null,j={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35},ct="intro",be=1;function YE(){ct="intro",be=1,j={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35}}function ta(n,e){sn=n,ea=e,YE(),qt()}function qt(){sn&&(ct==="intro"?KE():ct==="stress"?JE():ct==="decision"&&ew())}function KE(){sn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Welcome to Pension Planner</div>
        <div class="wizard-subtitle">A tool to help you plan and manage your SIPP pension drawdown</div>

        <div class="wizard-progress">
          ${hl(2,be)}
        </div>

        ${be===1?QE():XE()}
      </div>
    </div>
  `,fl()}function QE(){return`
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
  `}function XE(){return`
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
  `}function JE(){sn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Stress Tester Setup</div>
        <div class="wizard-subtitle">Let's set up your pension simulation in a few simple steps.</div>

        <div class="wizard-progress">
          ${hl(6,be)}
        </div>

        ${ZE(be)}
      </div>
    </div>
  `,fl()}function ZE(n){switch(n){case 1:return`
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
      `;default:return""}}function ew(){sn.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Decision Tool Setup</div>
        <div class="wizard-subtitle">Now let's set up the tool you'll use each month once you're retired.</div>

        <div class="wizard-progress">
          ${hl(4,be)}
        </div>

        ${tw(be)}
      </div>
    </div>
  `,fl()}function tw(n){switch(n){case 1:return`
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
      `;default:return""}}function hl(n,e){let t="";for(let r=1;r<=n;r++){const i=r<e?"done":r===e?"active":"";t+=`<div class="wizard-dot ${i}"></div>`}return t}function fl(){sn.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",()=>nw(e.dataset.action))})}function nw(n){switch(cf(),n){case"skip-all":Ao();break;case"next":ct==="intro"?be<2&&(be++,qt()):ct==="stress"?be<6&&(be++,qt()):ct==="decision"&&be<4&&(be++,qt());break;case"back":be>1&&(be--,qt());break;case"start-stress":ct="stress",be=1,qt();break;case"skip-stress":ct="decision",be=1,j.decisionSalary=j.baseSalary,j.decisionEquity=j.equityMin,j.decisionBond=j.bondMin,j.decisionCash=j.cashTarget,j.decisionDuration=j.duration,qt();break;case"finish-stress":ct="decision",be=1,j.decisionSalary=j.baseSalary,j.decisionEquity=j.equityMin,j.decisionBond=j.bondMin,j.decisionCash=j.cashTarget,j.decisionDuration=j.duration,qt();break;case"skip-decision":Ao();break;case"finish":Ao();break}}function cf(){const n=document.getElementById("wizBaseSalary");n&&(j.baseSalary=parseFloat(n.value)||3e4);const e=document.getElementById("wizOther");e&&(j.otherIncome=parseFloat(e.value)||0);const t=document.getElementById("wizStatePension");t&&(j.statePension=parseFloat(t.value)||12e3);const r=document.getElementById("wizStatePensionYear");r&&(j.statePensionYear=parseInt(r.value)||12);const i=document.getElementById("wizEquityMin");i&&(j.equityMin=parseFloat(i.value)||25e4);const s=document.getElementById("wizBondMin");s&&(j.bondMin=parseFloat(s.value)||2e5);const a=document.getElementById("wizCashTarget");a&&(j.cashTarget=parseFloat(a.value)||5e4);const l=document.getElementById("wizDuration");l&&(j.duration=parseInt(l.value)||35);const u=document.getElementById("wizTaxMode");u&&(j.taxMode=u.value);const h=document.getElementById("wizDBaseSalary");h&&(j.decisionSalary=parseFloat(h.value)||3e4);const f=document.getElementById("wizDEquityMin");f&&(j.decisionEquity=parseFloat(f.value)||25e4);const y=document.getElementById("wizDBondMin");y&&(j.decisionBond=parseFloat(y.value)||2e5);const E=document.getElementById("wizDCashTarget");E&&(j.decisionCash=parseFloat(E.value)||5e4);const b=document.getElementById("wizDDuration");b&&(j.decisionDuration=parseInt(b.value)||35)}function Ao(){cf(),ea&&ea(j)}function rw(){sn&&(sn.style.display="none")}function iw(){return`
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
  `}function qs(){const e=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()==="#0d1117"||document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches;return{primary:"#f0c674",success:"#2ea043",warning:"#e1b12c",danger:"#f85149",muted:"#8b8b9b",grid:"rgba(255,255,255,0.1)",bg:e?"rgba(15,15,26,1)":"#ffffff",text:e?"#c9d1d9":"#1f2937",cardBg:e?"#21262d":"#ffffff",cone:"rgba(240,198,116,0.15)",coneMid:"rgba(240,198,116,0.2)",coneInner:"rgba(240,198,116,0.35)",coneBorder:"rgba(240,198,116,0.4)",trajectory:"rgba(46,160,67,0.25)",trajectoryFailed:"rgba(248,81,73,0.8)",trajectoryHover:"#5fdd7b",trajectoryFailedHover:"#ff6b6b",glidepath:"#7eb8da",zeroLine:"#f85149"}}const Rn=new Map;let Bn=-1;function Pu(n,e,t,r,i,s){const a=i-t,l=s-r,u=a*a+l*l;if(u===0)return Math.sqrt((n-t)*(n-t)+(e-r)*(e-r));const h=Math.max(0,Math.min(1,((n-t)*a+(e-r)*l)/u)),f=t+h*a,y=r+h*l;return Math.sqrt((n-f)*(n-f)+(e-y)*(e-y))}function sw(n,e,t={}){const r=qs(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=t.years||35,y={};for(let I=0;I<=f;I++)y[I]=[];e.forEach(I=>{I.hist.forEach(k=>{const M=Math.floor(k.year);y[M]!==void 0&&y[M].push(k.total)})});const E=[];for(let I=0;I<=f;I++){const k=y[I].sort((C,V)=>C-V);if(k.length===0)continue;const M=C=>k[Math.floor(k.length*C)]||0;E.push({year:I,p5:M(.05),p10:M(.1),p25:M(.25),p50:M(.5),p75:M(.75),p90:M(.9),p95:M(.95)})}if(E.length===0)return;const b=Math.max(...E.map(I=>I.p90))*1.15,S=I=>l.left+I/f*u,P=I=>a-l.bottom-I/b*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let I=0;I<=5;I++){const k=l.top+I/5*h;i.beginPath(),i.moveTo(l.left,k),i.lineTo(s-l.right,k),i.stroke()}i.fillStyle=r.cone,i.beginPath(),E.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,P(I.p95)):i.lineTo(M,P(I.p95))});for(let I=E.length-1;I>=0;I--)i.lineTo(S(E[I].year),P(E[I].p5));i.closePath(),i.fill(),i.fillStyle=r.coneMid,i.beginPath(),E.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,P(I.p90)):i.lineTo(M,P(I.p90))});for(let I=E.length-1;I>=0;I--)i.lineTo(S(E[I].year),P(E[I].p10));i.closePath(),i.fill(),i.fillStyle=r.coneInner,i.beginPath(),E.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,P(I.p75)):i.lineTo(M,P(I.p75))});for(let I=E.length-1;I>=0;I--)i.lineTo(S(E[I].year),P(E[I].p25));i.closePath(),i.fill(),t.glide&&t.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=2,i.setLineDash([6,3]),i.beginPath(),t.glide.forEach((I,k)=>{const M=S(I.year),C=P(I.min);k===0?i.moveTo(M,C):i.lineTo(M,C)}),i.stroke(),i.setLineDash([])),i.strokeStyle=r.primary,i.lineWidth=3,i.beginPath(),E.forEach((I,k)=>{const M=S(I.year),C=P(I.p50);k===0?i.moveTo(M,C):i.lineTo(M,C)}),i.stroke(),i.strokeStyle="rgba(248,81,73,0.6)",i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),E.forEach((I,k)=>{const M=S(I.year);k===0?i.moveTo(M,P(I.p10)):i.lineTo(M,P(I.p10))}),i.stroke(),i.setLineDash([]),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,P(0)),i.lineTo(s-l.right,P(0)),i.stroke(),i.setLineDash([]),i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let I=0;I<=5;I++){const k=b*(1-I/5);i.fillText(rt(k),l.left-10,l.top+I/5*h+4)}i.textAlign="center";for(let I=0;I<=f;I+=5)i.fillText(`Yr ${I}`,S(I),a-l.bottom+20);Rn.set(n.id,{percentiles:E,xScale:S,yScale:P,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:b,type:"cone"}),uw(n)}function ow(n,e,t={}){const r=qs(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:20,right:40,bottom:50,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=t.years||35,y=t.startValue||1e6,E=e.slice(0,100),b=E.filter(C=>C.failed),S=E.filter(C=>!C.failed);let P;if(b.length>0)P=y*2;else{const C=S.map(B=>B.final).sort((B,L)=>B-L),V=C[Math.floor(C.length*.5)]||y;P=Math.max(V*1.3,y*1.5)}const I=C=>l.left+C/f*u,k=C=>a-l.bottom-Math.min(C,P)/P*h;i.strokeStyle=r.grid,i.lineWidth=1;for(let C=0;C<=5;C++){const V=l.top+C/5*h;i.beginPath(),i.moveTo(l.left,V),i.lineTo(s-l.right,V),i.stroke()}i.fillStyle=r.muted,i.font="11px sans-serif",i.textAlign="right";for(let C=0;C<=5;C++){const V=P*(1-C/5);i.fillText(rt(V),l.left-10,l.top+C/5*h+4)}i.textAlign="center";for(let C=0;C<=f;C+=5)i.fillText(`Yr ${C}`,I(C),a-l.bottom+20);const M=[];t.glide&&t.glide.length>0&&(i.strokeStyle=r.glidepath,i.lineWidth=3,i.setLineDash([8,4]),i.beginPath(),t.glide.forEach((C,V)=>{const B=I(C.year),L=k(C.min);V===0?i.moveTo(B,L):i.lineTo(B,L)}),i.stroke(),i.setLineDash([])),S.forEach((C,V)=>{const B=C.hist.map(L=>({x:I(L.year),y:k(L.total)}));M.push({run:C,pts:B,failed:!1,idx:V}),i.strokeStyle=r.trajectory,i.lineWidth=.5,i.beginPath(),B.forEach((L,w)=>{w===0?i.moveTo(L.x,L.y):i.lineTo(L.x,L.y)}),i.stroke()}),b.forEach((C,V)=>{const B=C.hist.map(L=>({x:I(L.year),y:k(L.total)}));M.push({run:C,pts:B,failed:!0,idx:S.length+V}),i.strokeStyle=r.trajectoryFailed,i.lineWidth=2,i.beginPath(),B.forEach((L,w)=>{w===0?i.moveTo(L.x,L.y):i.lineTo(L.x,L.y)}),i.stroke()}),i.strokeStyle=r.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(l.left,k(0)),i.lineTo(s-l.right,k(0)),i.stroke(),i.setLineDash([]),Rn.set(n.id,{results:E,paths:M,xScale:I,yScale:k,padding:l,chartWidth:u,chartHeight:h,years:f,maxValue:P,glide:t.glide,type:"trajectory"}),dw(n,r)}function aw(n,e,t={}){const r=qs(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:30,right:20,bottom:55,left:60},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,s,a);const f=e.map(C=>C.protMonths),y=f.length,E=Math.max(...f),b=Math.max(1,Math.ceil(E/15)),S={};f.forEach(C=>{const V=Math.floor(C/b)*b;S[V]=(S[V]||0)+1});const P=Object.keys(S).map(Number).sort((C,V)=>C-V),I=Math.max(...Object.values(S)),k=u/(P.length||1),M=[];i.strokeStyle=r.grid,i.lineWidth=1,i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="right";for(let C=0;C<=4;C++){const V=l.top+C/4*h;i.beginPath(),i.moveTo(l.left,V),i.lineTo(s-l.right,V),i.stroke();const B=Math.round(I*(1-C/4));i.fillText(`${B} runs`,l.left-5,V+4)}P.forEach((C,V)=>{const B=S[C],L=B/I*h,w=l.left+V*k+2,m=a-l.bottom-L,_=k-4;i.fillStyle=C===0?r.success:r.warning,i.fillRect(w,m,_,L),M.push({x:w,y:m,w:_,h:L,months:C,monthsEnd:C+b-1,count:B,pct:(B/y*100).toFixed(1)})}),i.fillStyle=r.muted,i.font="10px sans-serif",i.textAlign="center",P.forEach((C,V)=>{if(V%2===0||P.length<12){const B=b>1?`${C}-${C+b-1}`:C.toString();i.fillText(B,l.left+V*k+k/2,a-l.bottom+15)}}),i.fillText("Protection Months",s/2,a-5),i.save(),i.translate(12,a/2),i.rotate(-Math.PI/2),i.textAlign="center",i.fillText("Number of Runs",0,0),i.restore(),Rn.set(n.id,{bars:M,totalRuns:y,type:"histogram"}),hw(n)}function lw(n,e,t={}){const r=qs(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:180,bottom:60,left:80},u=s-l.left-l.right,h=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=Object.keys(e),y=t.years||35;let E=0;f.forEach(I=>{const k=e[I].result;k&&k.hist&&k.hist.forEach(M=>{M.total>E&&(E=M.total)})}),E*=1.1;const b=I=>l.left+I/y*u,S=I=>l.top+h-I/E*h;cw(i,l,u,h,y,E,t.title||"Scenario Comparison",r);const P=["#6366f1","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#ec4899","#84cc16"];f.forEach((I,k)=>{const M=e[I].result;if(!M||!M.hist)return;i.beginPath(),i.strokeStyle=P[k%P.length],i.lineWidth=2.5,M.hist.forEach((V,B)=>{const L=b(V.year),w=S(V.total);B===0?i.moveTo(L,w):i.lineTo(L,w)}),i.stroke();const C=l.top+15+k*24;i.fillStyle=P[k%P.length],i.fillRect(s-l.right+15,C,20,4),i.font="11px system-ui, sans-serif",i.fillStyle=r.text,i.textAlign="left",i.fillText(e[I].name||I,s-l.right+40,C+5),M.final/1e3,i.fillStyle=r.muted,i.fillText(`${rt(M.final)}`,s-l.right+40,C+18)})}function cw(n,e,t,r,i,s,a,l){n.font="bold 14px system-ui, sans-serif",n.fillStyle=l.text,n.textAlign="center",n.fillText(a,e.left+t/2,e.top-20),n.strokeStyle=l.grid,n.lineWidth=1;for(let u=0;u<=5;u++){const h=e.top+r*u/5;n.beginPath(),n.moveTo(e.left,h),n.lineTo(e.left+t,h),n.stroke();const f=s*(5-u)/5;n.font="11px system-ui, sans-serif",n.fillStyle=l.muted,n.textAlign="right",n.fillText(rt(f),e.left-10,h+4)}for(let u=0;u<=i;u+=5){const h=e.left+u/i*t;n.beginPath(),n.moveTo(h,e.top),n.lineTo(h,e.top+r),n.stroke(),n.textAlign="center",n.fillText(`Y${u}`,h,e.top+r+20)}n.font="12px system-ui, sans-serif",n.textAlign="center",n.fillText("Years",e.left+t/2,e.top+r+45),n.save(),n.translate(20,e.top+r/2),n.rotate(-Math.PI/2),n.fillText("Fund Value",0,0),n.restore()}function rt(n){return n>=1e6?`£${(n/1e6).toFixed(1)}M`:n>=1e3?`£${(n/1e3).toFixed(0)}k`:`£${n.toFixed(0)}`}function uw(n,e){const t=n._coneHoverListener;t&&n.removeEventListener("mousemove",t);const r=i=>{const s=Rn.get(n.id);if(!s||s.type!=="cone")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=(i.clientX-a.left)*l,{percentiles:h,padding:f,chartWidth:y,years:E}=s,b=(u-f.left)/y*E,S=Math.round(b);if(S<0||S>E){en();return}const P=h.find(k=>k.year===S);if(!P){en();return}const I=`
      <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
        <strong style="color:#f0c674;">Year ${S}</strong>
      </div>
      <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
        <span style="color:#8b8b9b;">95th percentile:</span><span>${rt(P.p95)}</span>
        <span style="color:#8b8b9b;">75th percentile:</span><span>${rt(P.p75)}</span>
        <span style="color:#8b8b9b;">Median (50th):</span><span style="color:#f0c674;font-weight:bold;">${rt(P.p50)}</span>
        <span style="color:#8b8b9b;">25th percentile:</span><span>${rt(P.p25)}</span>
        <span style="color:#8b8b9b;">10th percentile:</span><span style="color:#f85149;">${rt(P.p10)}</span>
        <span style="color:#8b8b9b;">5th percentile:</span><span>${rt(P.p5)}</span>
      </div>
    `;pl(i.clientX,i.clientY,I)};n._coneHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",en)}function dw(n,e){const t=n._trajHoverListener;t&&n.removeEventListener("mousemove",t);const r=n._trajLeaveListener;r&&n.removeEventListener("mouseleave",r);const i=a=>{const l=Rn.get(n.id);if(!l||l.type!=="trajectory")return;const u=n.getBoundingClientRect(),h=n.width/u.width,f=n.height/u.height,y=(a.clientX-u.left)*h,E=(a.clientY-u.top)*f,{paths:b,padding:S,chartWidth:P,chartHeight:I}=l;if(y<S.left||y>S.left+P||E<S.top||E>S.top+I){en(),Bn!==-1&&(Bn=-1,So(n,l,e,null));return}let k=null,M=12*h;b.filter(V=>V.failed).forEach(V=>{for(let B=0;B<V.pts.length-1;B++){const L=Pu(y,E,V.pts[B].x,V.pts[B].y,V.pts[B+1].x,V.pts[B+1].y);L<M&&(M=L,k=V)}}),k||b.filter(V=>!V.failed).forEach(V=>{for(let B=0;B<V.pts.length-1;B++){const L=Pu(y,E,V.pts[B].x,V.pts[B].y,V.pts[B+1].x,V.pts[B+1].y);L<M&&(M=L,k=V)}});const C=k?k.idx:-1;if(C!==Bn&&(Bn=C,So(n,l,e,k)),k){const V=k.run,B=k.failed?"#f85149":"#2ea043",L=k.failed?"❌":"✅",w=k.failed?"FAILED":"SUCCESS";let m=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${B};">${L} ${w}</strong>
          <span style="float:right;color:#8b8b9b;font-size:11px;">Run #${k.idx+1}</span>
        </div>
        <div style="display:grid;grid-template-columns:auto auto;gap:4px 16px;">
      `;V.startYear&&(m+=`<span style="color:#8b8b9b;">Start year:</span><span>${V.startYear}</span>`),m+=`<span style="color:#8b8b9b;">Duration:</span><span>${V.years.toFixed(1)} years</span>`,m+=`<span style="color:#8b8b9b;">Final balance:</span><span>${rt(V.final)}</span>`,m+=`<span style="color:#8b8b9b;">Protection months:</span><span>${V.protMonths}</span>`,m+=`<span style="color:#8b8b9b;">Longest streak:</span><span>${V.maxConsec} months</span>`,V.hodlUsed>0&&(m+=`<span style="color:#8b8b9b;">HODL used:</span><span>${rt(V.hodlUsed)}</span>`),m+="</div>",k.failed&&V.failMonth&&(m+=`<div style="margin-top:8px;padding-top:8px;border-top:1px solid #555;color:#f0c674;">💀 Depleted at year ${(V.failMonth/12).toFixed(1)}</div>`),pl(a.clientX,a.clientY,m)}else en()},s=()=>{if(en(),Bn!==-1){Bn=-1;const a=Rn.get(n.id);a&&So(n,a,e,null)}};n._trajHoverListener=i,n._trajLeaveListener=s,n.addEventListener("mousemove",i),n.addEventListener("mouseleave",s)}function hw(n,e){const t=n._histHoverListener;t&&n.removeEventListener("mousemove",t);const r=i=>{const s=Rn.get(n.id);if(!s||s.type!=="histogram")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=n.height/a.height,h=(i.clientX-a.left)*l,f=(i.clientY-a.top)*u,{bars:y,totalRuns:E}=s;let b=null;if(y.forEach(S=>{h>=S.x&&h<=S.x+S.w&&f>=S.y&&f<=S.y+S.h&&(b=S)}),b){const S=b.months===0,P=S?"#2ea043":"#e1b12c",I=S?"🟢":"🟡",k=S?"No Protection":`${b.months}${b.monthsEnd>b.months?`-${b.monthsEnd}`:""} months`,M=`
        <div style="border-bottom:1px solid #555;padding-bottom:6px;margin-bottom:6px;">
          <strong style="color:${P};">${I} ${k}</strong>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
          <span style="color:#8b8b9b;">Runs:</span><span>${b.count} of ${E}</span>
          <span style="color:#8b8b9b;">Percentage:</span><span>${b.pct}%</span>
        </div>
      `;pl(i.clientX,i.clientY,M)}else en()};n._histHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",en)}function So(n,e,t,r){const i=n.getContext("2d"),{width:s,height:a}=n,{paths:l,xScale:u,yScale:h,padding:f,chartWidth:y,chartHeight:E,years:b,maxValue:S,glide:P}=e;i.fillStyle="rgba(15,15,26,1)",i.fillRect(f.left,f.top,y,E),i.strokeStyle=t.grid,i.lineWidth=1;for(let I=0;I<=5;I++){const k=f.top+I/5*E;i.beginPath(),i.moveTo(f.left,k),i.lineTo(s-f.right,k),i.stroke()}P&&P.length>0&&(i.strokeStyle=t.glidepath,i.lineWidth=1.5,i.setLineDash([4,2]),i.beginPath(),P.forEach((I,k)=>{const M=u(I.year),C=h(I.min);k===0?i.moveTo(M,C):i.lineTo(M,C)}),i.stroke(),i.setLineDash([])),l.forEach(I=>{if(r&&I.idx===r.idx)return;const k=r?.15:I.failed?.8:.25;i.strokeStyle=I.failed?`rgba(248,81,73,${k})`:`rgba(46,160,67,${k})`,i.lineWidth=I.failed?2:.5,i.beginPath(),I.pts.forEach((M,C)=>{C===0?i.moveTo(M.x,M.y):i.lineTo(M.x,M.y)}),i.stroke()}),r&&(i.strokeStyle=r.failed?t.trajectoryFailedHover:t.trajectoryHover,i.lineWidth=4,i.shadowColor=r.failed?t.trajectoryFailedHover:t.trajectoryHover,i.shadowBlur=8,i.beginPath(),r.pts.forEach((I,k)=>{k===0?i.moveTo(I.x,I.y):i.lineTo(I.x,I.y)}),i.stroke(),i.shadowBlur=0),i.strokeStyle=t.zeroLine,i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(f.left,h(0)),i.lineTo(s-f.right,h(0)),i.stroke(),i.setLineDash([])}function pl(n,e,t){let r=document.getElementById("chartTooltip");r||(r=document.createElement("div"),r.id="chartTooltip",document.body.appendChild(r)),r.innerHTML=t,r.style.display="block",r.style.left=n+15+"px",r.style.top=e-10+"px"}function en(){const n=document.getElementById("chartTooltip");n&&(n.style.display="none")}function fw(){return`
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
  `}window._simEngine={runMonteCarlo:tf,runHistorical:nf,simulate:Us};window._constants={EQUITY_RETURNS:$r,INFLATION:ra};window._mathUtils={seededRng:ia};let pw=null,mw=null;const uf=document.createElement("style");uf.textContent=OE()+GE()+iw()+fw();document.head.appendChild(uf);const ml=document.getElementById("globalLoadingOverlay"),gw=ml.querySelector(".loading-text");function fr(n="Loading..."){gw.textContent=n,ml.classList.add("active")}function pr(){ml.classList.remove("active")}document.getElementById("versionDisplay").textContent=`v${Cu}`;document.getElementById("entryMonth").value=Hf();function yw(n){const e=parseFloat(n);return isNaN(e)?"":e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function df(){document.querySelectorAll('input[type="number"]').forEach(e=>{e.value,e.addEventListener("focus",function(t){setTimeout(()=>{this.select()},0)}),e.addEventListener("click",function(t){!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&this.select()})})}function gl(){document.querySelectorAll('input[type="number"]').forEach(e=>{if(e.dataset.formatted)return;e.dataset.formatted="true";const t=e.closest(".input-with-unit")||e.parentElement,r=e.closest(".input-with-unit")!==null,i=document.createElement("span");i.className="number-format-overlay";const s=r?"34px":"14px";i.style.cssText=`
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
        `,getComputedStyle(t).position==="static"&&(t.style.position="relative");function a(){const l=parseFloat(e.value);!isNaN(l)&&l>=1e3&&document.activeElement!==e?(i.textContent=yw(l),i.style.display="block",e.style.color="transparent"):(i.style.display="none",e.style.color="")}e._updateOverlay=a,e.addEventListener("focus",()=>{i.style.display="none",e.style.color=""}),e.addEventListener("blur",a),e.addEventListener("input",()=>{document.activeElement===e&&(i.style.display="none",e.style.color="")}),t.appendChild(i),a()})}function $s(){document.querySelectorAll('input[type="number"]').forEach(n=>{n._updateOverlay&&n._updateOverlay()})}setTimeout(()=>{df(),gl()},100);const vw=new MutationObserver(n=>{let e=!1;n.forEach(t=>{t.addedNodes.forEach(r=>{var i,s;r.nodeType===1&&((i=r.matches)!=null&&i.call(r,'input[type="number"]')||(s=r.querySelector)!=null&&s.call(r,'input[type="number"]'))&&(e=!0)})}),e&&setTimeout(()=>{df(),gl()},50)});vw.observe(document.body,{childList:!0,subtree:!0});let ps=null;async function hf(n,e="decision"){Zo(),rw(),document.getElementById("mainApp").classList.remove("hidden"),document.getElementById("userEmail").textContent=n.email,await js(),await Hs(),_w(),e==="stress"&&(document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),document.querySelector('.tab[data-tab="stress"]').classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById("stress-content").classList.add("active"))}async function _w(){try{const n=await ln(),e=await Fs();document.getElementById("entryEquity").value=e.equityMin||25e4,document.getElementById("entryBond").value=e.bondMin||2e5,document.getElementById("entryCash").value=e.cashTarget||5e4,document.getElementById("dsEquityMin").value=e.equityMin||25e4,document.getElementById("dsBondMin").value=e.bondMin||2e5,document.getElementById("dsCashTarget").value=e.cashTarget||5e4,document.getElementById("dsDuration").value=e.duration||35,document.getElementById("dsBaseSalary").value=e.baseSalary||3e4,document.getElementById("dsStatePension").value=e.statePension||12e3,document.getElementById("dsStatePensionYear").value=e.statePensionYear||12,document.getElementById("dsProtectionFactor").value=e.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=e.recoveryBuffer||1e4,document.getElementById("dsConsecutiveLimit").value=e.consecutiveLimit||3,["mc","hist","scen"].forEach(t=>{const r=document.getElementById(t+"Equity"),i=document.getElementById(t+"Bond"),s=document.getElementById(t+"Cash"),a=document.getElementById(t+"Years");r&&(r.value=n.equityMin),i&&(i.value=n.bondMin),s&&(s.value=n.cashTarget),a&&(a.value=n.duration)}),document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,$s(),console.log("All inputs initialized from stored settings")}catch(n){console.error("Error initializing inputs from settings:",n)}}async function na(n){console.log("Wizard completed with data:",n);try{await al({baseSalary:n.decisionSalary,equityMin:n.decisionEquity,bondMin:n.decisionBond,cashTarget:n.decisionCash,duration:n.decisionDuration,statePension:n.statePension,statePensionYear:n.statePensionYear}),await ul({baseSalary:n.baseSalary,other:n.otherIncome,statePension:n.statePension,statePensionYear:n.statePensionYear,equityMin:n.equityMin,bondMin:n.bondMin,cashTarget:n.cashTarget,duration:n.duration,taxMode:n.taxMode});const t=new Date,r=t.getMonth()+1,i=t.getFullYear(),s=r>=4?i:i-1,a=String(s%100).padStart(2,"0")+"/"+String((s+1)%100).padStart(2,"0"),l={pa:12570,brl:50270,hrl:125140,cpi:.025,other:n.otherIncome||0};console.log("Wizard data received:",JSON.stringify(n)),console.log(`Creating tax year ${a} with:`,JSON.stringify(l)),console.log(`State pension ${n.statePension} starts in year ${n.statePensionYear} (stored in stress settings)`),await ll(a,l),console.log(`Tax year ${a} saved successfully`),document.getElementById("entryEquity").value=n.decisionEquity,document.getElementById("entryBond").value=n.decisionBond,document.getElementById("entryCash").value=n.decisionCash,document.getElementById("mcEquity").value=n.equityMin,document.getElementById("mcBond").value=n.bondMin,document.getElementById("mcCash").value=n.cashTarget,document.getElementById("mcYears").value=n.duration,$s()}catch(t){console.error("Error saving wizard settings:",t)}const e=hi();hf(e,"stress")}zE(document.getElementById("authScreen"),async n=>{console.log("Auth success callback triggered for:",n.email);try{console.log("Checking for existing cloud data...");const e=await pE();console.log("Has cloud data:",e),e?(console.log("Existing user - showing main app"),hf(n)):(console.log("New user - showing setup wizard"),Zo(),document.getElementById("setupWizard").style.display="block",ta(document.getElementById("setupWizard"),na))}catch(e){console.error("Error in auth callback:",e),Zo(),document.getElementById("setupWizard").style.display="block",ta(document.getElementById("setupWizard"),na)}});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await Gh(),document.getElementById("mainApp").classList.add("hidden"),lf()}catch(n){console.error("Logout error:",n)}});const Ew=60*60*1e3;let Ro=null;function ff(){Ro&&clearTimeout(Ro),mt()&&(Ro=setTimeout(async()=>{if(mt()){alert("You have been logged out due to inactivity (1 hour).");try{await Gh(),document.getElementById("mainApp").classList.add("hidden"),lf()}catch(n){console.error("Auto-logout error:",n)}}},Ew))}const ww=["mousedown","mousemove","keydown","scroll","touchstart","click"];ww.forEach(n=>{document.addEventListener(n,()=>{ff()},{passive:!0})});ff();document.getElementById("resetBtn").addEventListener("click",async()=>{if(!(!confirm(`⚠️ WARNING: This will permanently delete ALL your data including:

• All saved settings
• All decision history
• All tax year configurations

This action cannot be undone.

Are you sure you want to reset and start over?`)||!confirm(`Are you ABSOLUTELY sure?

Type OK to confirm deletion of all your data.`)))try{console.log("Wiping all user data..."),await fE(),console.log("Data wiped successfully"),mE(),localStorage.clear(),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("setupWizard").style.display="block",ta(document.getElementById("setupWizard"),na),alert("All data has been deleted. Please complete the setup wizard to start fresh.")}catch(t){console.error("Reset error:",t),alert("Error resetting data: "+t.message)}});document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(e=>e.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&await js(),n.dataset.tab==="taxyears"&&await Hs(),n.dataset.tab==="stress"&&await yl()})});document.querySelectorAll(".sub-tab[data-stresstab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-stresstab]").forEach(e=>e.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".stress-subtab").forEach(e=>e.classList.add("hidden")),document.getElementById(`stress-${n.dataset.stresstab}`).classList.remove("hidden"),n.dataset.stresstab==="stresssettings"&&await yl()})});document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(n=>{n.addEventListener("click",async()=>{document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(e=>e.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(e=>e.classList.add("hidden")),document.getElementById(`decision-${n.dataset.decisiontab}`).classList.remove("hidden"),n.dataset.decisiontab==="decisionsettings"&&await mf()})});function Iw(n){const[e,t]=n.split("-").map(Number);return t>=4?e%100+"/"+(e+1)%100:(e-1)%100+"/"+e%100}function Tw(n){const[e,t]=n.split("-").map(Number);return Math.max(0,(t>=4?e:e-1)-2026)}function Po(n,e,t,r,i){if(i){const s=Math.max(0,1-e/t);return n*r*s}return n*r}function xu(n,e,t){return n<=e?n:n<=t?e+(n-e)*.8:e+(t-e)*.8+(n-t)*.6}async function bw(n,e,t,r){const i=await Fs(),s=await ef(),a=await Zh(),l=Iw(n),u=Tw(n),[h,f]=n.split("-").map(Number);if(!a[l])throw new Error(`Tax year ${l} is not configured. Please add it in the Settings tab before calculating.`);const y=a[l],E=y.pa||12570,b=y.brl||50270,S=y.other||0,P=i.statePension||0,I=i.statePensionYear||12;let k=0;if(u>=I&&P>0){let te=1;for(let Te=0;Te<=u;Te++){const je=String((26+Te)%100).padStart(2,"0")+"/"+String((27+Te)%100).padStart(2,"0");te*=1+((a[je]||{}).cpi||.04)}k=P*te}let M=1;for(let te=0;te<u;te++){const Te=String((26+te)%100).padStart(2,"0")+"/"+String((27+te)%100).padStart(2,"0"),je=(a[Te]||{}).cpi||.04;M*=1+je}const C=Math.round(Po(i.equityMin,u,i.duration,M,!0)),V=Math.round(Po(i.bondMin,u,i.duration,M,!0)),B=Math.round(Po(i.cashTarget,u,i.duration,M,!1)),L=e+t,w=C+V;let m=!1,_=0;const g=s.filter(te=>te.date<n);for(let te=g.length-1;te>=0&&g[te].source==="Cash";te--)_++;g.length&&g[g.length-1].inProtection&&(m=L<=w+(i.recoveryBuffer||1e4)),!m&&L<w&&_+1>=(i.consecutiveLimit||3)&&(m=!0);const T=i.baseSalary*M,A=S+k,v=xu(T,E,b),Se=Math.min(T,b),ze=Math.max(0,Se-A),yt=xu(Math.min(A+ze,b),E,b),nt=Math.max(0,v-yt);let ce,ue,Re,qe=0;if(m)ce=ze/12*(1-(i.protectionFactor||20)/100),ue=nt/12,Re="Protection";else{ce=ze/12,ue=nt/12,Re="Standard";const te=f>=4?h:h-1,Te=g.filter(he=>{const[Ot,un]=he.date.split("-").map(Number);return(un>=4?Ot:Ot-1)===te});let je=0,gi=0;if(Te.forEach(he=>{gi+=he.sipp||0,he.inProtection&&he.stdSipp&&(je+=he.stdSipp-he.sipp),he.boostAmount>0&&(je-=he.boostAmount)}),je>0){let he=f>=4?16-f:4-f;he<1&&(he=1);const Ot=gi+ce*he+A*he/12,un=b-Ot,pe=L-w-(i.recoveryBuffer||1e4);if(un>0&&pe>0){const xe=un/he,Dn=je/he,yi=pe/he;qe=Math.min(Dn,xe,yi),qe>50&&(ce+=qe,Re="Tax Boost")}}}const Ee=(b-A)/12;let $,ae,re=0,ee=0,we=0,$e="";if(!m&&L>=w+ce){$="Growth";const te=Math.max(0,e-C),Te=Math.max(0,t-V),je=te+Te;je>0?(re=ce*te/je,ee=ce*Te/je,ae="Healthy"):($="Cash",we=ce,ae="At min")}else $="Cash",we=ce,ae=m?"Protection":"Below min",r<ce&&($e="Cash low!");let Ie="";const Pe=e-C,vt=t-V;if(Pe>5e3&&vt<-5e3){const te=Math.floor(Math.min(Pe,-vt)/1e3)*1e3;te>=5e3&&(Ie=`Move £${te.toLocaleString()} Equity→Bond`)}else if(vt>5e3&&Pe<-5e3){const te=Math.floor(Math.min(vt,-Pe)/1e3)*1e3;te>=5e3&&(Ie=`Move £${te.toLocaleString()} Bond→Equity`)}let cn="";const Cn=B-r;if(Cn>5e3&&$==="Growth"&&!m){const te=L-w-ce;if(te>1e4){const Te=Math.floor(Math.min(Cn*.3,te*.5)/1e3)*1e3;Te>=5e3&&(cn=`Replenish Cash: Move £${Te.toLocaleString()} from growth funds`)}}const _t=[];$e&&_t.push({message:$e,severity:"danger",type:"low-cash"}),qe>50&&_t.push({message:`Tax Boost: +£${Math.round(qe).toLocaleString()}/mo catch-up from protection shortfall`,severity:"success",type:"tax-boost"}),Ie&&_t.push({message:Ie,severity:"warning",type:"rebalance"}),cn&&_t.push({message:cn,severity:"info",type:"cash-replenish"});const kn=ce+S/12+k/12,Et=kn*12;let Mn=0;Et>E&&(Et<=b?Mn=(Et-E)*.2:Mn=(b-E)*.2+(Et-b)*.4);const mi=kn-Mn/12+ue;return{date:n,taxYear:l,yearNumber:u,equity:e,bond:t,cash:r,isa:0,adjEquityMin:C,adjBondMin:V,adjCashTarget:B,pa:E,brl:b,other:S/12,statePension:k/12,sippDraw:ce,isaDraw:ue,totalMonthlyNet:mi,taxEfficient:!m&&qe<=50,inProtection:m,protectionReason:m?ae:null,consecutiveCashDraws:_,boostAmount:qe>50?qe:0,boostEligible:qe>50,source:$,drawFromEquity:re,drawFromBond:ee,drawFromCash:we,rebalanceNeeded:Ie!=="",rebalanceActions:Ie?[Ie]:[],alerts:_t,calculationDetails:{mode:Re,reason:`${ae} | ${Re}`,totalGrowth:L,minGrowth:w,consec:_,stdSipp:Ee,inputs:{baseSalary:i.baseSalary,targetGross:i.baseSalary*M,cumInf:M,yearNum:u,taxYear:l,OTHER:S,STATE:k,PA:E,BRL:b},taxInfo:{annualTaxable:Et,headroomToBRL:b-Et,annualTax:Mn,monthlyNet:mi}}}}window.handleDecisionSubmit=async function(n){n.preventDefault();const e=document.getElementById("entryMonth").value,t=parseFloat(document.getElementById("entryEquity").value)||0,r=parseFloat(document.getElementById("entryBond").value)||0,i=parseFloat(document.getElementById("entryCash").value)||0,s=[];if(e||s.push("Month"),!t&&t!==0&&s.push("Equity Fund"),!r&&r!==0&&s.push("Bond Balance"),!i&&i!==0&&s.push("Cash Balance"),s.length>0){alert(`Please fill in the following fields:

• `+s.join(`
• `));return}try{ps=await bw(e,t,r,i);const a=document.getElementById("decisionOutput");NE(ps,a),document.getElementById("saveBtn").disabled=!1}catch(a){console.error("Decision error:",a),alert("Error calculating decision: "+a.message)}};window.saveCurrentDecision=async function(){if(!ps){alert("No decision to save");return}if(!mt()){alert("Please sign in to save decisions");return}try{await IE(ps),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0,await js()}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};window.runMonteCarloUI=async function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("mcResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await ln(),setTimeout(()=>{try{const{results:e,stats:t}=BE(n);pw=e,pf(t,e,"Monte Carlo (1000 runs)","mcResults",n.years)}catch(e){console.error("Simulation error:",e),document.getElementById("mcResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}},50)};window.runHistoricalUI=async function(){const n={equityStart:parseFloat(document.getElementById("histEquity").value)||25e4,bondStart:parseFloat(document.getElementById("histBond").value)||2e5,cashStart:parseFloat(document.getElementById("histCash").value)||5e4,years:parseInt(document.getElementById("histYears").value)||35};document.getElementById("histResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await ln(),setTimeout(()=>{try{const{results:e,stats:t}=FE(n);mw=e,pf(t,e,"Historical Analysis","histResults",n.years)}catch(e){console.error("Simulation error:",e),document.getElementById("histResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}},50)};window.runScenariosUI=async function(){const n={equityStart:parseFloat(document.getElementById("scenEquity").value)||25e4,bondStart:parseFloat(document.getElementById("scenBond").value)||2e5,cashStart:parseFloat(document.getElementById("scenCash").value)||5e4,years:35};document.getElementById("scenResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',await ln(),setTimeout(()=>{try{const e=UE(n);Rw(e,"scenResults")}catch(e){console.error("Scenario error:",e),document.getElementById("scenResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}},50)};let xo=!1;window.runOptimisationUI=async function(n){if(xo)return;xo=!0;const e=document.getElementById("optimiseBtn"+n),t=document.getElementById("optimiseResults"+n);e&&(e.disabled=!0),e&&(e.textContent="Optimising...");let r,i,s,a;n==="MC"?(r=document.getElementById("mcEquity"),i=document.getElementById("mcBond"),s=document.getElementById("mcCash"),a=document.getElementById("mcYears")):(r=document.getElementById("histEquity"),i=document.getElementById("histBond"),s=document.getElementById("histCash"),a=document.getElementById("histYears"));const l=+r.value,u=+i.value,h=+s.value,f=+a.value,y=l+u+h;t.innerHTML='<div class="loading"><div class="spinner"></div>Testing allocations...</div>';const E=await ln(),b=JSON.parse(JSON.stringify(E));setTimeout(()=>{try{let S=null,P={equity:l,bond:u,cash:h,rate:0,avgProt:0,withProt:0,totalRuns:0};const I=[];for(let T=5;T<=30;T+=5)for(let A=20;A<=95-T;A+=5){const v=100-T-A;v>=0&&I.push({equity:Math.round(y*A/100),bond:Math.round(y*v/100),cash:Math.round(y*T/100)})}const{EQUITY_RETURNS:k,INFLATION:M}=window._constants,{simulate:C}=window._simEngine,{seededRng:V}=window._mathUtils,B=Object.keys(k).map(Number).sort((T,A)=>T-A),L=Math.max(...B),w=T=>{const A={equityStart:T.equity,bondStart:T.bond,cashStart:T.cash,years:f,equityMin:b.equityMin,bondMin:b.bondMin,cashTarget:b.cashTarget,duration:b.duration,baseSalary:b.baseSalary,other:b.other,statePension:b.statePension,statePensionYear:b.statePensionYear,pa:b.pa,brl:b.brl,hrl:b.hrl,taxMode:b.taxMode,protectionMult:b.protectionMult,consecutiveLimit:b.consecutiveLimit,disableProtection:b.disableProtection,hodlEnabled:b.hodlEnabled,hodlValue:b.hodlValue},v=[];if(n==="MC")for(let $=0;$<1e3;$++){const ae=V($*12345),re={equity:{},inflation:{}};for(let ee=0;ee<f;ee++){const we=B[Math.floor(ae()*B.length)];re.equity[ee]=k[we],re.inflation[ee]=M[we]||.025}v.push(C(A,re,$))}else B.forEach($=>{if($+f-1>L)return;const ae={equity:{},inflation:{}};for(let re=0;re<f;re++)ae.equity[re]=k[$+re]||0,ae.inflation[re]=M[$+re]||.025;v.push(C(A,ae,$))});const Se=v.filter($=>$.failed),ze=v.filter($=>!$.failed),yt=(v.length-Se.length)/v.length*100,ce=v.map($=>$.protMonths).reduce(($,ae)=>$+ae,0)/v.length,ue=v.filter($=>$.protMonths>0).length,Re=ze.map($=>$.final).sort(($,ae)=>$-ae),qe=Re.length>0?Re[Math.floor(Re.length*.5)]:0,Ee=Re.length>0?Re[Math.floor(Re.length*.9)]:0;return{equity:T.equity,bond:T.bond,cash:T.cash,rate:yt,avgProt:ce,withProt:ue,totalRuns:v.length,medianFinal:qe,p90Final:Ee}},_=w({equity:l,bond:u,cash:h});P.avgProt=_.avgProt,P.withProt=_.withProt,P.totalRuns=_.totalRuns,P.rate=_.rate,P.medianFinal=_.medianFinal,P.p90Final=_.p90Final,I.forEach(T=>{const A=w(T);A.avgProt<=P.avgProt&&(!S||A.rate>S.rate)&&(S=A)});let g="";if(S&&S.rate>P.rate){const T=S.medianFinal-P.medianFinal,A=P.medianFinal>0?T/P.medianFinal*100:0;g+='<div class="card" style="margin-top:20px;border-color:var(--success);">',g+='<h3 style="color:var(--success);margin-top:0;">Better Allocation Found</h3>',g+='<p style="color:var(--text-muted);margin-bottom:16px;">A different fund split could improve your success rate without increasing protection usage:</p>',g+='<div class="grid-2" style="gap:20px;margin-bottom:20px;">',g+='<div style="padding:16px;background:rgba(0,0,0,0.2);border-radius:8px;">',g+='<div style="font-weight:500;margin-bottom:12px;color:var(--text-muted);">Your Current Split</div>',g+='<div style="font-size:24px;font-weight:600;color:var(--warning);">'+P.rate.toFixed(1)+"%</div>",g+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate</div>',g+='<div style="font-size:13px;">Equity: '+z(P.equity)+" ("+Math.round(P.equity/y*100)+"%)</div>",g+='<div style="font-size:13px;">Bonds: '+z(P.bond)+" ("+Math.round(P.bond/y*100)+"%)</div>",g+='<div style="font-size:13px;">Cash: '+z(P.cash)+" ("+Math.round(P.cash/y*100)+"%)</div>",g+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+P.avgProt.toFixed(0)+" mo | Median final: "+z(P.medianFinal)+"</div>",g+="</div>",g+='<div style="padding:16px;background:rgba(46,160,67,0.1);border-radius:8px;border:1px solid var(--success);">',g+='<div style="font-weight:500;margin-bottom:12px;color:var(--success);">Optimised Split</div>',g+='<div style="font-size:24px;font-weight:600;color:var(--success);">'+S.rate.toFixed(1)+"%</div>",g+='<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Success Rate (+'+(S.rate-P.rate).toFixed(1)+"%)</div>",g+='<div style="font-size:13px;">Equity: '+z(S.equity)+" ("+Math.round(S.equity/y*100)+"%)</div>",g+='<div style="font-size:13px;">Bonds: '+z(S.bond)+" ("+Math.round(S.bond/y*100)+"%)</div>",g+='<div style="font-size:13px;">Cash: '+z(S.cash)+" ("+Math.round(S.cash/y*100)+"%)</div>",g+='<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Avg protection: '+S.avgProt.toFixed(0)+" mo | Median final: "+z(S.medianFinal)+"</div>",g+="</div>",g+="</div>",T<0?(g+='<div class="alert alert-warning" style="margin-bottom:16px;">',g+="<strong>Trade-off:</strong> The optimised allocation has a "+Math.abs(A).toFixed(0)+"% lower median final value. ",g+="This is because it likely has less equity exposure. You gain safety but may sacrifice some upside.",g+="</div>"):T>0&&(g+='<div class="alert alert-info" style="margin-bottom:16px;">',g+="<strong>Bonus:</strong> The optimised allocation also has a "+A.toFixed(0)+"% higher median final value!",g+="</div>"),g+='<div class="alert alert-info" style="margin-bottom:16px;">',g+="<strong>To apply this allocation:</strong> Click the button below to update your Settings with these new fund minimums.",g+="</div>",g+='<button onclick="applyOptimisedAllocationUI('+S.equity+","+S.bond+","+S.cash+')" style="width:100%;">Apply Optimised Allocation to Settings</button>',g+="</div>"}else g+='<div class="card" style="margin-top:20px;border-color:var(--primary);">',g+='<h3 style="color:var(--primary);margin-top:0;">Your Allocation is Already Optimal</h3>',g+='<p style="color:var(--text-muted);">We tested '+I.length+" different fund splits. Your current allocation achieves the best success rate ("+P.rate.toFixed(1)+"%) without increasing protection usage.</p>",g+='<p style="font-size:13px;color:var(--text-muted);">Your protection: '+P.avgProt.toFixed(0)+" months average</p>",g+="</div>";t.innerHTML=g}catch(S){console.error("Optimisation error:",S),t.innerHTML='<div class="alert alert-danger">Error: '+S.message+"</div>"}finally{xo=!1,e&&(e.disabled=!1,e.textContent="Optimise Allocation")}},50)};window.applyOptimisedAllocationUI=async function(n,e,t){if(document.getElementById("ssEquityMin").value=n,document.getElementById("ssBondMin").value=e,document.getElementById("ssCashTarget").value=t,document.getElementById("dsEquityMin").value=n,document.getElementById("dsBondMin").value=e,document.getElementById("dsCashTarget").value=t,document.getElementById("mcEquity").value=n,document.getElementById("mcBond").value=e,document.getElementById("mcCash").value=t,document.getElementById("histEquity").value=n,document.getElementById("histBond").value=e,document.getElementById("histCash").value=t,document.getElementById("scenEquity").value=n,document.getElementById("scenBond").value=e,document.getElementById("scenCash").value=t,mt())try{await ul({equityMin:n,bondMin:e,cashTarget:t})}catch(r){console.error("Error saving optimised settings:",r)}alert("Settings updated! Run the test again to see the full results with your new allocation.")};const Aw={1929:"Wall Street Crash / Great Depression",1930:"Great Depression",1931:"Great Depression",1932:"Great Depression",1937:"Recession of 1937",1968:"Late 1960s stagflation",1969:"Late 1960s recession",1973:"Oil Crisis / 1973-74 crash",1974:"1973-74 bear market",2e3:"Dot-com bubble burst",2001:"Dot-com bust / 9/11",2007:"Global Financial Crisis",2008:"Global Financial Crisis",2022:"Post-COVID inflation / rate hikes"};function Sw(n){if(!n||n.length===0)return"";const e=n.filter(s=>s.failed).sort((s,a)=>s.years-a.years),t=n.filter(s=>s.protMonths>0).sort((s,a)=>a.protMonths-s.protMonths),r=e.length>0?e.slice(0,5):t.slice(0,5);if(r.length===0)return"";let i=`
        <details style="margin-top: 24px;">
          <summary style="cursor: pointer; font-weight: 600; color: var(--danger); margin-bottom: 10px;">
            ${e.length>0?"Worst Periods (Failed)":"Worst Periods (Most Protection)"}
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
      `;return r.forEach(s=>{const a=s.startYear||s.seed,l=Aw[a]||"-",u=s.failed?"danger":"success";i+=`
          <tr>
            <td>${a}</td>
            <td style="font-size: 12px;">${l}</td>
            <td>${s.years.toFixed(1)}</td>
            <td>${s.protMonths}</td>
            <td>${z(s.final)}</td>
            <td style="color: var(--${u});">${s.failed?"FAILED":"OK"}</td>
          </tr>
        `}),i+=`
              </tbody>
            </table>
          </div>
        </details>
      `,i}function pf(n,e,t,r,i){const s=n.successRate>=90?"success":n.successRate>=80?"warning":"danger",a=r.replace("Results",""),l=n.survival||{},u=n.finalValue||{},h=n.protection||{};let f=`
        <div class="card">
          <h2>${t}</h2>

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
              <div class="stat-value">${z(u.p50||n.medianFinal||0)}</div>
              <div class="stat-label">Median Final</div>
            </div>
          </div>

          <!-- 7-Point Percentile Stats -->
          <details style="margin-bottom: 20px;">
            <summary style="cursor: pointer; font-weight: 600; color: var(--primary); margin-bottom: 10px;">
              Detailed Percentile Statistics
            </summary>
            <div class="grid-7" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-top: 10px;">
              ${["p5","p10","p25","p50","p75","p90","p95"].map(y=>`
                <div class="stat-box mini">
                  <div class="stat-value" style="font-size: 14px;">${z(u[y]||0)}</div>
                  <div class="stat-label" style="font-size: 10px;">${y.toUpperCase()}</div>
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
              <div class="stat-value">${z(u.avg||n.avgFinal||0)}</div>
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
          ${r==="histResults"?Sw(e):""}

          <!-- Result Summary -->
          <div class="alert ${s==="success"?"alert-success":s==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById(r).innerHTML=f,setTimeout(()=>{const y=document.getElementById(`${a}ConeChart`),E=document.getElementById(`${a}TrajChart`),b=document.getElementById(`${a}HistChart`);y&&e&&e.length>0&&sw(y,e,{years:i}),E&&e&&e.length>0&&ow(E,e,{years:i}),b&&e&&e.length>0&&aw(b,e,{})},50)}function Rw(n,e){let t='<div class="card"><h2>Scenario Analysis</h2>';t+=`
        <div class="chart-container" style="margin-bottom: 24px;">
          <canvas id="scenCompChart" width="900" height="400"></canvas>
        </div>
      `,t+='<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">';for(const[r,i]of Object.entries(n)){const s=i.result,a=s.failed?"danger":"success";t+=`
          <div class="history-item" style="border-left: 4px solid ${i.color};">
            <div>
              <div class="history-date">${i.name}</div>
              <div class="history-details">
                Protection: ${s.protMonths} mo | Max streak: ${s.maxConsec} mo
                ${s.hodlUsed>0?` | HODL used: ${z(s.hodlUsed)}`:""}
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 24px; color: var(--${a});">${s.years.toFixed(1)} yrs</div>
              <div style="font-size: 12px; color: var(--${a});">${s.failed?"FAILED":"OK"}</div>
              <div style="font-size: 11px; color: var(--text-muted);">Final: ${z(s.final)}</div>
            </div>
          </div>
        `}t+="</div></div>",document.getElementById(e).innerHTML=t,setTimeout(()=>{const r=document.getElementById("scenCompChart");r&&n&&lw(r,n,{years:35,title:"Scenario Comparison"})},50)}async function yl(){fr("Loading settings...");try{const n=await ln();document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,$s()}catch(n){console.error("Error loading stress settings:",n)}finally{pr()}}window.saveStressSettingsUI=async function(){if(!mt()){alert("Please sign in to save settings");return}fr("Saving settings...");try{await ul({baseSalary:+document.getElementById("ssBaseSalary").value,equityMin:+document.getElementById("ssEquityMin").value,bondMin:+document.getElementById("ssBondMin").value,cashTarget:+document.getElementById("ssCashTarget").value,duration:+document.getElementById("ssDuration").value,pa:+document.getElementById("ssPA").value,brl:+document.getElementById("ssBRL").value,hrl:+document.getElementById("ssHRL").value,taxMode:document.getElementById("ssTaxMode").value,other:+document.getElementById("ssOther").value,statePension:+document.getElementById("ssStatePension").value,statePensionYear:+document.getElementById("ssStatePensionYear").value,consecutiveLimit:+document.getElementById("ssConsecutiveLimit").value,protectionMult:+document.getElementById("ssProtectionMult").value,disableProtection:document.getElementById("ssDisableProtection").checked,hodlEnabled:document.getElementById("ssHodlEnabled").checked,hodlValue:+document.getElementById("ssHodlValue").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving stress settings:",n),alert("Error saving: "+n.message)}finally{pr()}};window.resetStressSettingsUI=async function(){if(confirm("Reset all stress settings to defaults?")){fr("Resetting settings...");try{await DE(),await yl(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{pr()}}};async function mf(){fr("Loading settings...");try{const n=await Fs();document.getElementById("dsEquityMin").value=n.equityMin||25e4,document.getElementById("dsBondMin").value=n.bondMin||2e5,document.getElementById("dsCashTarget").value=n.cashTarget||5e4,document.getElementById("dsDuration").value=n.duration||35,document.getElementById("dsBaseSalary").value=n.baseSalary||3e4,document.getElementById("dsProtectionFactor").value=n.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=n.recoveryBuffer||15e3,document.getElementById("dsConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("entryEquity").value=n.equityMin||25e4,document.getElementById("entryBond").value=n.bondMin||2e5,document.getElementById("entryCash").value=n.cashTarget||5e4,$s()}catch(n){console.error("Error loading decision settings:",n)}finally{pr()}}window.saveDecisionSettingsUI=async function(){if(!mt()){alert("Please sign in to save settings");return}fr("Saving settings...");try{await al({equityMin:+document.getElementById("dsEquityMin").value,bondMin:+document.getElementById("dsBondMin").value,cashTarget:+document.getElementById("dsCashTarget").value,duration:+document.getElementById("dsDuration").value,baseSalary:+document.getElementById("dsBaseSalary").value,statePension:+document.getElementById("dsStatePension").value,statePensionYear:+document.getElementById("dsStatePensionYear").value,protectionFactor:+document.getElementById("dsProtectionFactor").value,recoveryBuffer:+document.getElementById("dsRecoveryBuffer").value,consecutiveLimit:+document.getElementById("dsConsecutiveLimit").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving decision settings:",n),alert("Error saving: "+n.message)}finally{pr()}};window.resetDecisionSettingsUI=async function(){if(confirm("Reset all decision settings to defaults?")){fr("Resetting settings...");try{await al({equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,baseSalary:3e4,protectionFactor:20,recoveryBuffer:15e3,consecutiveLimit:3}),await mf(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}finally{pr()}}};window.showDrawdownScheduleUI=async function(){const n=parseFloat(document.getElementById("ddInflation").value)/100||.025,e=parseInt(document.getElementById("ddDuration").value)||35;try{const t=await ln();t.duration=e;const r=Yf(t,e,n);let i='<div class="card"><h2>Projected SIPP Drawdown Schedule</h2>';i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>BRL</th><th>Other</th><th>State</th><th>SIPP Draw</th><th>Tax</th><th>Net</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${z(s.brl)}</td>
            <td>${z(s.other)}</td>
            <td>${z(s.statePension)}</td>
            <td style="color: var(--primary); font-weight: 600;">${z(s.sippDraw)}</td>
            <td style="color: var(--danger);">-${z(s.tax)}</td>
            <td style="color: var(--success);">${z(s.netIncome)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("drawdownResults").innerHTML=i}catch(t){console.error("Drawdown error:",t),document.getElementById("drawdownResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}};window.showGlidepathUI=async function(){const n=parseFloat(document.getElementById("gpInflation").value)/100||.025,e=parseInt(document.getElementById("gpDuration").value)||35;try{const t=await ln();t.duration=e;const r=Qf(t,n);let i='<div class="card"><h2>Fund Glidepath (Inflation-Adjusted Minimums)</h2>';i+='<div class="alert alert-info" style="margin-bottom: 20px;">',i+="<strong>Glidepath Logic:</strong> Equity & Bond minimums inflate with CPI but deplete linearly to £0. Cash inflates only (maintains real value).",i+="</div>",i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>Cum Inflation</th><th>Equity Min</th><th>Bond Min</th><th>Cash Target</th><th>Total Min</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${(s.cumulativeInflation*100-100).toFixed(1)}%</td>
            <td style="color: var(--success);">${z(s.equityMin)}</td>
            <td style="color: var(--info);">${z(s.bondMin)}</td>
            <td style="color: var(--warning);">${z(s.cashTarget)}</td>
            <td style="font-weight: 600;">${z(s.totalMin)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("glidepathResults").innerHTML=i}catch(t){console.error("Glidepath error:",t),document.getElementById("glidepathResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}};async function js(){const n=document.getElementById("historyList");n.innerHTML='<p class="loading">Loading history...</p>';const e=await ef({sortDesc:!0,limit:50});if(e.length===0){n.innerHTML='<p class="loading">No history entries yet.</p>';return}let t="";for(const r of e){const i=r.inProtection?"protection":"";r.mode==="Tax-Efficient"||r.inProtection;let s=r.source;r.source==="Growth"&&(r.dEquity>0||r.dBond>0)?s=`Growth (E:${z(r.dEquity||0)} B:${z(r.dBond||0)})`:r.source==="Cash"&&(s=`Cash (${z(r.dCash||r.sipp||0)})`),t+=`
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
                <div>Equity: ${z(r.equity||0)}</div>
                <div>Bond: ${z(r.bond||0)}</div>
                <div>Cash: ${z(r.cash||0)}</div>
                <div style="font-weight:500;">Total: ${z(r.total||0)}</div>
              </div>

              <div>
                <div style="color:var(--text-muted);font-size:11px;">Monthly Income</div>
                <div>SIPP: ${z(r.sipp||0)}</div>
                <div>ISA: ${z(r.isa||0)}</div>
                <div>Other: ${z(r.other||0)}</div>
                <div>State: ${z(r.state||0)}</div>
              </div>

              <div>
                <div style="color:var(--text-muted);font-size:11px;">Tax & Net</div>
                <div>Tax: ${z(r.monthlyTax||0)}</div>
                <div style="font-weight:500;color:var(--success);">Net: ${z(r.monthlyNet||0)}</div>
                ${r.boostAmount>0?`<div style="color:var(--success);">Boost: +${z(r.boostAmount)}</div>`:""}
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
        `}n.innerHTML=t}window.deleteHistoryEntry=async function(n){if(confirm(`Delete entry for ${n}?`)){if(!mt()){alert("Please sign in to delete entries");return}try{await wE(n),await js()}catch(e){console.error("Delete error:",e),alert("Error deleting: "+e.message)}}};async function Hs(){const n=document.getElementById("taxYearsList");n.innerHTML='<p class="loading">Loading tax years...</p>';const e=await Zh(),t=await Fs(),r=Object.keys(e).sort();if(r.length===0){n.innerHTML='<p class="loading">No tax years configured.</p>';return}const i=t.statePensionYear||12,s=t.statePension||0;let a='<table class="tax-years-table" style="width:100%;border-collapse:collapse;">';a+='<thead><tr style="border-bottom:1px solid var(--border);">',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">Year</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">PA</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">BRL</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">CPI %</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">Other</th>',a+='<th style="text-align:left;padding:8px;color:var(--text-muted);font-weight:500;">State Pension</th>',a+='<th style="padding:8px;"></th>',a+="</tr></thead><tbody>",r.forEach((u,h)=>{var b;const f=e[u];let y=0;if(h>=i&&s>0){let S=1;for(let P=0;P<=h;P++)S*=1+(((b=e[r[P]])==null?void 0:b.cpi)||.04);y=Math.round(s*S)}const E=h>=i?"£"+y.toLocaleString():'<span style="color:var(--text-muted);font-style:italic;">Yr '+(i-h)+"</span>";a+=`<tr style="border-bottom:1px solid var(--border);">
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
          <td style="padding:10px 8px;color:var(--text);">${E}</td>
          <td style="padding:10px 8px;">
            <button class="small secondary" onclick="deleteTaxYear('${u}')" style="padding:4px 8px;font-size:11px;">Delete</button>
          </td>
        </tr>`}),a+="</tbody></table>";const l=Math.max(0,i-r.length);a+=`<p style="margin-top:16px;color:var(--text-muted);font-size:12px;">
        State pension: £${s.toLocaleString()} (today's money), starts in year ${i} (${l>0?l+" years remaining":"already started"})
      </p>`,n.innerHTML=a,gl()}window.updateTaxYear=async function(n,e,t){try{const r=await vE(n);r[e]=parseFloat(t),await ll(n,r)}catch(r){console.error("Error updating tax year:",r),alert("Error saving: "+r.message)}};window.deleteTaxYear=async function(n){if(confirm("Delete tax year "+n+"?"))try{const e=await hr();delete e.taxYears[n],await ol(e),await Hs()}catch(e){console.error("Error deleting tax year:",e),alert("Error deleting: "+e.message)}};window.addTaxYear=async function(){if(!mt()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await ll(n,{}),await Hs()}catch(e){console.error("Save error:",e),alert("Error saving: "+e.message)}};console.log("Pension Planner v"+Cu+" loaded");
