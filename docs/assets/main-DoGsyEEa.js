(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Cf(n={}){return{date:n.date||null,taxYear:n.taxYear||null,yearNumber:n.yearNumber??0,monthInTaxYear:n.monthInTaxYear??0,remainingMonths:n.remainingMonths??12,equity:n.equity??0,bond:n.bond??0,cash:n.cash??0,isa:n.isa??0,adjEquityMin:n.adjEquityMin??0,adjBondMin:n.adjBondMin??0,adjCashTarget:n.adjCashTarget??0,pa:n.pa??0,brl:n.brl??0,hrl:n.hrl??0,other:n.other??0,statePension:n.statePension??0,sippDraw:n.sippDraw??0,isaDraw:n.isaDraw??0,totalMonthlyNet:n.totalMonthlyNet??0,taxEfficient:n.taxEfficient??!0,annualTaxableSoFar:n.annualTaxableSoFar??0,projectedAnnualTaxable:n.projectedAnnualTaxable??0,headroomToBRL:n.headroomToBRL??0,inProtection:n.inProtection??!1,protectionReason:n.protectionReason||null,consecutiveCashDraws:n.consecutiveCashDraws??0,boostAmount:n.boostAmount??0,boostEligible:n.boostEligible??!1,source:n.source||"Growth",drawFromEquity:n.drawFromEquity??0,drawFromBond:n.drawFromBond??0,drawFromCash:n.drawFromCash??0,rebalanceNeeded:n.rebalanceNeeded??!1,rebalanceActions:n.rebalanceActions||[],alerts:n.alerts||[],calculationDetails:n.calculationDetails||{}}}function xf(n){return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,source:n.source,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,inProtection:n.inProtection,reason:n.protectionReason||"",boostAmount:n.boostAmount,rebal:n.rebalanceActions.join("; "),adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget}}const Yt={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"};function rn(n,t=Yt.INFO,e=null){return{message:n,severity:t,code:e}}const pu="6.0.0",Vt={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},mu={ASSUMED_CPI:.025,OTHER_INCOME_CAP:.04},Rt={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},Hs={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},Ri={1928:.4781,1929:-.172,1930:-.338,1931:-.527,1932:-.231,1933:.669,1934:.041,1935:.3879,1936:.2492,1937:-.3839,1938:.2846,1939:-.0278,1940:-.1278,1941:-.1552,1942:.0782,1943:.1382,1944:.1226,1945:.2665,1946:-.0818,1947:.0225,1948:-.0246,1949:.1279,1950:.1787,1951:.1463,1952:.0837,1953:-.0377,1954:.4399,1955:.2084,1956:.0262,1957:-.1278,1958:.3396,1959:.1612,1960:-.0912,1961:.1889,1962:-.1081,1963:.1715,1964:.1478,1965:.1058,1966:-.1858,1967:.1506,1968:.0457,1969:-.1524,1970:.0482,1971:.0627,1972:.1476,1973:-.1652,1974:-.2777,1975:.3815,1976:.1774,1977:-.1271,1978:-.0303,1979:.0414,1980:.1493,1981:-.0909,1982:.1976,1983:.2027,1984:-.0365,1985:.2778,1986:.2278,1987:.0227,1988:.1185,1989:.2697,1990:-.0456,1991:.2013,1992:.044,1993:.1372,1994:.0218,1995:.3345,1996:.2601,1997:.2264,1998:.1627,1999:.2516,2e3:-.0617,2001:-.0727,2002:-.1679,2003:.2525,2004:.0333,2005:-.0061,2006:.1618,2007:.0648,2008:-.3355,2009:.1882,2010:.1102,2011:.0556,2012:.0728,2013:.2665,2014:.0775,2015:-.023,2016:.1342,2017:.2511,2018:-.0583,2019:.2234,2020:.0726,2021:.1873,2022:-.0878,2023:.1399,2024:.1299},gu={1928:-.012,1929:.002,1930:-.06,1931:-.094,1932:-.103,1933:.005,1934:.021,1935:.03,1936:.014,1937:.028,1938:-.02,1939:-.014,1940:.01,1941:.099,1942:.09,1943:.03,1944:.023,1945:.023,1946:.186,1947:.087,1948:.03,1949:-.02,1950:.059,1951:.06,1952:.009,1953:.006,1954:-.007,1955:.004,1956:.03,1957:.028,1958:.017,1959:.015,1960:.014,1961:.007,1962:.013,1963:.017,1964:.01,1965:.019,1966:.034,1967:.028,1968:.046,1969:.062,1970:.055,1971:.033,1972:.034,1973:.087,1974:.124,1975:.069,1976:.048,1977:.067,1978:.09,1979:.133,1980:.125,1981:.089,1982:.038,1983:.038,1984:.04,1985:.038,1986:.011,1987:.044,1988:.044,1989:.046,1990:.061,1991:.03,1992:.029,1993:.027,1994:.026,1995:.025,1996:.034,1997:.017,1998:.016,1999:.027,2e3:.034,2001:.016,2002:.024,2003:.019,2004:.033,2005:.034,2006:.025,2007:.041,2008:.001,2009:.027,2010:.015,2011:.03,2012:.017,2013:.015,2014:.008,2015:.007,2016:.021,2017:.021,2018:.019,2019:.023,2020:.012,2021:.07,2022:.065,2023:.032,2024:.029},kf={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}},Rn={START_MONTH:4,START_DAY:6};function Fo(n,t,e,r=Vt.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=t;if(n>Vt.PA_TAPER_THRESHOLD){const f=(n-Vt.PA_TAPER_THRESHOLD)*Vt.PA_TAPER_RATE;i=Math.max(0,t-f)}const s=Math.max(0,n-i),a=Math.max(0,e-i),l=r-e;let u=0;const d=Math.min(s,a);if(u+=d*Vt.BASIC_RATE,s>a){const f=Math.min(s-a,l);u+=f*Vt.HIGHER_RATE}if(s>a+l){const f=s-a-l;u+=f*Vt.ADDITIONAL_RATE}return u}function Ws(n,t,e,r=Vt.HIGHER_RATE_LIMIT){return n-Fo(n,t,e,r)}function Mf(n,t){return Math.max(0,t-n)}function Df(n){const t=typeof n=="string"?new Date(n):n,e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();if(r<Rn.START_MONTH||r===Rn.START_MONTH&&i<Rn.START_DAY){const s=e-1;return`${String(s).slice(-2)}/${String(e).slice(-2)}`}return`${String(e).slice(-2)}/${String(e+1).slice(-2)}`}function Nf(n,t){const e=typeof n=="string"?new Date(n):n,r=typeof t=="string"?new Date(t):t,i=r.getFullYear()-e.getFullYear(),s=r.getMonth()-e.getMonth(),a=r.getDate()-e.getDate();return i*12+s+a/30}function Vf(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Of(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1)}function Bo(n){const e=(typeof n=="string"?new Date(n):n).getMonth()+1;return e>=Rn.START_MONTH?12-(e-Rn.START_MONTH):Rn.START_MONTH-e}function Lf(n){return 12-Bo(n)}function Ff(n,t){const e=Nf(n,t);return Math.floor(e/12)}function yu(n){const{baseSalary:t,cumulativeInflation:e,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:l=0,pa:u,brl:d,hrl:f,taxMode:g="inflates"}=n,v=g==="frozen"?u:u*e,T=g==="frozen"?d:d*e,R=g==="frozen"?f:f*e,x=t*e,P=Bf(i,r),S=l>=a?s*e:0,M=P+S,O=Math.max(0,T-M),G=Math.max(0,x-M),W=Math.min(O,G);return{pa:v,brl:T,hrl:R,targetGross:x,other:P,statePension:S,fixedIncome:M,annualSippDraw:W,monthlySippDraw:W/12,sippPlusfixedAtBRL:O+M===T}}function Bf(n,t,e=mu.OTHER_INCOME_CAP){let r=n;for(const i of t)r*=1+Math.min(i,e);return r}function Uf(n){const{equity:t,bond:e,cash:r,isaBalance:i=0,baseSalary:s,cumulativeInflation:a,yearlyInflation:l=[],other:u=0,statePension:d=0,statePensionYear:f=12,yearNumber:g=0,pa:v,brl:T,hrl:R,taxMode:x="inflates",currentDate:P,taxYearHistory:S=[],inProtection:M=!1,protectionFactor:N=20}=n,O=yu({baseSalary:s,cumulativeInflation:a,yearlyInflation:l,other:u,statePension:d,statePensionYear:f,yearNumber:g,pa:v,brl:T,hrl:R,taxMode:x}),G=O.targetGross,W=Ws(G,O.pa,O.brl,O.hrl),E=W/12,m=O.monthlySippDraw,y=O.other/12,w=O.statePension/12,I=y+w,A=m+I,_=A*12,Wt=Ws(_,O.pa,O.brl,O.hrl)/12,Jt=Math.max(0,E-Wt),Ut=Bo(P),ie=Jt*Ut,ft=i>=ie;let mt;if(ft&&Jt>0)mt={mode:"tax-efficient",monthlySipp:M?m*(1-N/100):m,monthlyIsa:Jt,monthlyOther:y,monthlyState:w,reason:"ISA top-up keeps SIPP+Other at BRL for tax efficiency",taxBoostEligible:!M,isaUsedForTopUp:!0};else if(!ft&&Jt>0){const Nt=Math.max(0,G/12-I);mt={mode:"standard",monthlySipp:M?Nt*(1-N/100):Nt,monthlyIsa:0,monthlyOther:y,monthlyState:w,reason:`Insufficient ISA for ${Ut} months - drawing to target`,taxBoostEligible:!0,isaUsedForTopUp:!1,warning:`Need £${Math.round(ie-i).toLocaleString()} more ISA for tax-efficient mode`}}else mt={mode:"tax-efficient",monthlySipp:M?m*(1-N/100):m,monthlyIsa:0,monthlyOther:y,monthlyState:w,reason:"Target income achieved within BRL",taxBoostEligible:!M,isaUsedForTopUp:!1};const _n=zf({taxYearHistory:S,remainingMonths:Ut,brl:O.brl,currentMonthlySipp:mt.monthlySipp,monthlyFixedIncome:I,inProtection:M,growthSurplus:t+e-(n.adjEquityMin||0)-(n.adjBondMin||0)}),Gt=mt.monthlySipp+mt.monthlyIsa+mt.monthlyOther+mt.monthlyState,tt=(mt.monthlySipp+I)*12,Xt=Fo(tt,O.pa,O.brl,O.hrl);return{...mt,boostAmount:_n.boostAmount,boostReason:_n.reason,taxInfo:{pa:O.pa,brl:O.brl,hrl:O.hrl,annualTaxable:tt,annualTax:Xt,monthlyTax:Xt/12,effectiveRate:tt>0?Xt/tt:0,headroomToBRL:Mf(tt,O.brl)},monthlyGross:mt.monthlySipp+I,monthlyNet:Ws((mt.monthlySipp+I)*12,O.pa,O.brl,O.hrl)/12+mt.monthlyIsa,monthlyTotal:Gt,remainingMonths:Ut,isaBalance:i,isaNeededMonthly:Jt,totalIsaNeeded:ie,hasSufficientIsa:ft,calculation:{targetGross:G,targetNet:W,monthlyTargetNet:E,monthlyGrossAtBRL:A,monthlyNetAtBRL:Wt}}}function zf(n){const{taxYearHistory:t,remainingMonths:e,brl:r,currentMonthlySipp:i,monthlyFixedIncome:s,inProtection:a,growthSurplus:l}=n;if(a)return{boostAmount:0,reason:"In protection mode - no boost"};let u=0,d=0;for(const N of t)N.inProtection&&N.stdSipp&&(u+=N.stdSipp-(N.sipp||0)),N.boostAmount>0&&(d+=N.boostAmount);const f=Math.max(0,u-d);if(f<=0)return{boostAmount:0,reason:"No shortfall to recover"};const T=t.reduce((N,O)=>N+(O.sipp||0),0)*12/t.length+i*e*12/e+s*12,x=Math.max(0,r-T)/e,P=l/e,S=f/e,M=Math.min(S,x,P);return M<=0?{boostAmount:0,reason:"No headroom for boost"}:{boostAmount:M,reason:`Catching up £${Math.round(f).toLocaleString()} protection shortfall`}}function qf(n,t,e=.025){const r=[],i=[];for(let s=0;s<=t;s++){s>0&&i.push(e);const a=Math.pow(1+e,s),l=yu({baseSalary:n.baseSalary,cumulativeInflation:a,yearlyInflation:[...i],other:n.other,statePension:n.statePension,statePensionYear:n.statePensionYear,yearNumber:s,pa:n.pa,brl:n.brl,hrl:n.hrl,taxMode:n.taxMode}),u=l.annualSippDraw+l.other+l.statePension,d=Fo(u,l.pa,l.brl,l.hrl);r.push({year:s,brl:l.brl,other:l.other,statePension:l.statePension,sippDraw:l.annualSippDraw,totalTaxable:u,tax:d,netIncome:u-d})}return r}function Pn(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function _u(n,t,e){const r=Pn(n.equityMin,t,n.duration,e,!0),i=Pn(n.bondMin,t,n.duration,e,!0),s=Pn(n.cashTarget,t,n.duration,e,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function $f(n){return n.reduce((t,e)=>t*(1+e),1)}function jf(n,t=mu.ASSUMED_CPI){const e=[];for(let r=0;r<=n.duration;r++){const i=Math.pow(1+t,r),s=_u(n,r,i);e.push({year:r,cumulativeInflation:i,equityMin:s.equity,bondMin:s.bond,cashTarget:s.cash,totalMin:s.total})}return e}function Hf(n){const{equity:t,bond:e,adjEquityMin:r,adjBondMin:i,priorHistory:s=[],consecutiveLimit:a=Rt.CONSECUTIVE_LIMIT,recoveryBuffer:l=Rt.RECOVERY_BUFFER,disableProtection:u=!1}=n;if(u)return{inProtection:!1,reason:"Protection disabled",consecutiveCashDraws:0,growthDeficit:0,canExitProtection:!1};const d=t+e,f=r+i,g=d-f,v=Math.max(0,-g);let T=0;for(let M=s.length-1;M>=0&&s[M].source==="Cash";M--)T++;const R=s[s.length-1],x=R?R.inProtection:!1;let P=!1,S="";return x?d>=f+l?(P=!1,S="Exiting protection - growth funds recovered"):(P=!0,S=`Continuing protection - need £${Math.round(f+l-d).toLocaleString()} more to exit`):v>0&&T+1>=a?(P=!0,S=`Entering protection - ${T+1} consecutive cash draws with growth below minimum`):v>0?S=`Growth below minimum but only ${T} consecutive cash draws (limit: ${a})`:S="Growth funds healthy",{inProtection:P,reason:S,consecutiveCashDraws:T,wasInProtection:x,totalGrowth:d,minGrowth:f,growthSurplus:g,growthDeficit:v,recoveryTarget:f+l,amountToRecover:P?Math.max(0,f+l-d):0,canExitProtection:x&&d>=f+l}}function Wf(n){const{drawAmount:t,equity:e,bond:r,cash:i,adjEquityMin:s,adjBondMin:a,inProtection:l}=n,u=Math.max(0,e-s),d=Math.max(0,r-a),f=u+d;if(l)return{source:"Cash",fromEquity:0,fromBond:0,fromCash:Math.min(t,i),shortfall:Math.max(0,t-i),reason:"Protection mode - preserving growth funds"};if(f>=t){const T=u/f,R=d/f;return{source:"Growth",fromEquity:t*T,fromBond:t*R,fromCash:0,shortfall:0,reason:"Drawing proportionally from growth surplus"}}const g=f,v=Math.min(t-g,i);return{source:"Mixed",fromEquity:u,fromBond:d,fromCash:v,shortfall:Math.max(0,t-g-v),reason:"Insufficient growth surplus - using cash supplement"}}function Gf(n){const{equity:t,bond:e,cash:r,adjEquityMin:i,adjBondMin:s,adjCashTarget:a,inProtection:l}=n,u=[],d=r-a;if(d<0?u.push({priority:"high",action:"Top up cash",amount:Math.abs(d),reason:`Cash £${Math.round(Math.abs(d)).toLocaleString()} below target`}):d>a*.5&&u.push({priority:"low",action:"Consider investing excess cash",amount:d-a*.25,reason:`Cash £${Math.round(d).toLocaleString()} above target`}),!l){const f=t-i,g=e-s;if(f+g>0){const T=i/(i+s),R=t/(t+e);Math.abs(R-T)>.1&&(R>T?u.push({priority:"medium",action:"Consider rebalancing equity to bonds",amount:(R-T)*(t+e),reason:`Equity ${Math.round(R*100)}% vs target ${Math.round(T*100)}%`}):u.push({priority:"medium",action:"Consider rebalancing bonds to equity",amount:(T-R)*(t+e),reason:`Equity ${Math.round(R*100)}% vs target ${Math.round(T*100)}%`}))}}return u}function vu(n){return function(){let t=n+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function hr(n,t,e){const r=e(),i=e(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+t*s}function Eu(n){const t=JSON.stringify(n);let e=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e.toString(16)}var Xl={};/**
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
 */const wu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Kf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,T=d&63;u||(T=64,a||(v=64)),r.push(e[f],e[g],e[v],e[T])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(wu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Kf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const g=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new Yf;const v=s<<2|l>>4;if(r.push(v),d!==64){const T=l<<4&240|d>>2;if(r.push(T),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qf=function(n){const t=wu(n);return Iu.encodeByteArray(t,!0)},Pi=function(n){return Qf(n).replace(/\./g,"")},Tu=function(n){try{return Iu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xf=()=>Jf().__FIREBASE_DEFAULTS__,Zf=()=>{if(typeof process>"u"||typeof Xl>"u")return;const n=Xl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Tu(n[1]);return t&&JSON.parse(t)},Ki=()=>{try{return Xf()||Zf()||tp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bu=n=>{var t,e;return(e=(t=Ki())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ep=n=>{const t=bu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Au=()=>{var n;return(n=Ki())===null||n===void 0?void 0:n.config},Su=n=>{var t;return(t=Ki())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function rp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pi(JSON.stringify(e)),Pi(JSON.stringify(a)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function sp(){var n;const t=(n=Ki())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function op(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ap(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cp(){const n=xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function up(){return!sp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hp(){try{return typeof indexedDB=="object"}catch{return!1}}function dp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const fp="FirebaseError";class Se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=fp,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?pp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Se(i,l,r)}}function pp(n,t){return n.replace(mp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const mp=/\{\$([^}]+)}/g;function gp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ci(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],a=t[i];if(Zl(s)&&Zl(a)){if(!Ci(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Zl(n){return n!==null&&typeof n=="object"}/**
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
 */function Or(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function pr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function yp(n,t){const e=new _p(n,t);return e.subscribe.bind(e)}class _p{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");vp(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Gs),i.error===void 0&&(i.error=Gs),i.complete===void 0&&(i.complete=Gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Gs(){}/**
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
 */function ht(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class Ep{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new np;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ip(t))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sn){return this.instances.has(t)}getOptions(t=sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sn){return this.component?this.component.multipleInstances?t:sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wp(n){return n===sn?void 0:n}function Ip(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ep(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const bp={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Ap=Y.INFO,Sp={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Rp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Sp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uo{constructor(t){this.name=t,this._logLevel=Ap,this._logHandler=Rp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Pp=(n,t)=>t.some(e=>n instanceof e);let tc,ec;function Cp(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xp(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,uo=new WeakMap,Pu=new WeakMap,Ks=new WeakMap,zo=new WeakMap;function kp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(ze(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ru.set(e,n)}).catch(()=>{}),zo.set(t,n),t}function Mp(n){if(uo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});uo.set(n,t)}let ho={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return uo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Pu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ze(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Dp(n){ho=n(ho)}function Np(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ys(this),t,...e);return Pu.set(r,t.sort?t.sort():[t]),ze(r)}:xp().includes(n)?function(...t){return n.apply(Ys(this),t),ze(Ru.get(this))}:function(...t){return ze(n.apply(Ys(this),t))}}function Vp(n){return typeof n=="function"?Np(n):(n instanceof IDBTransaction&&Mp(n),Pp(n,Cp())?new Proxy(n,ho):n)}function ze(n){if(n instanceof IDBRequest)return kp(n);if(Ks.has(n))return Ks.get(n);const t=Vp(n);return t!==n&&(Ks.set(n,t),zo.set(t,n)),t}const Ys=n=>zo.get(n);function Op(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,t),l=ze(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ze(a.result),u.oldVersion,u.newVersion,ze(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Lp=["get","getKey","getAll","getAllKeys","count"],Fp=["put","add","delete","clear"],Qs=new Map;function nc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Qs.get(t))return Qs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Fp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lp.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&u.done]))[0]};return Qs.set(t,s),s}Dp(n=>({...n,get:(t,e,r)=>nc(t,e)||n.get(t,e,r),has:(t,e)=>!!nc(t,e)||n.has(t,e)}));/**
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
 */class Bp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Up(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Up(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fo="@firebase/app",rc="0.10.13";/**
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
 */const we=new Uo("@firebase/app"),zp="@firebase/app-compat",qp="@firebase/analytics-compat",$p="@firebase/analytics",jp="@firebase/app-check-compat",Hp="@firebase/app-check",Wp="@firebase/auth",Gp="@firebase/auth-compat",Kp="@firebase/database",Yp="@firebase/data-connect",Qp="@firebase/database-compat",Jp="@firebase/functions",Xp="@firebase/functions-compat",Zp="@firebase/installations",tm="@firebase/installations-compat",em="@firebase/messaging",nm="@firebase/messaging-compat",rm="@firebase/performance",im="@firebase/performance-compat",sm="@firebase/remote-config",om="@firebase/remote-config-compat",am="@firebase/storage",lm="@firebase/storage-compat",cm="@firebase/firestore",um="@firebase/vertexai-preview",hm="@firebase/firestore-compat",dm="firebase",fm="10.14.1";/**
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
 */const po="[DEFAULT]",pm={[fo]:"fire-core",[zp]:"fire-core-compat",[$p]:"fire-analytics",[qp]:"fire-analytics-compat",[Hp]:"fire-app-check",[jp]:"fire-app-check-compat",[Wp]:"fire-auth",[Gp]:"fire-auth-compat",[Kp]:"fire-rtdb",[Yp]:"fire-data-connect",[Qp]:"fire-rtdb-compat",[Jp]:"fire-fn",[Xp]:"fire-fn-compat",[Zp]:"fire-iid",[tm]:"fire-iid-compat",[em]:"fire-fcm",[nm]:"fire-fcm-compat",[rm]:"fire-perf",[im]:"fire-perf-compat",[sm]:"fire-rc",[om]:"fire-rc-compat",[am]:"fire-gcs",[lm]:"fire-gcs-compat",[cm]:"fire-fst",[hm]:"fire-fst-compat",[um]:"fire-vertex","fire-js":"fire-js",[dm]:"fire-js-all"};/**
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
 */const xi=new Map,mm=new Map,mo=new Map;function ic(n,t){try{n.container.addComponent(t)}catch(e){we.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function On(n){const t=n.name;if(mo.has(t))return we.debug(`There were multiple attempts to register component ${t}.`),!1;mo.set(t,n);for(const e of xi.values())ic(e,n);for(const e of mm.values())ic(e,n);return!0}function qo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ee(n){return n.settings!==void 0}/**
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
 */const gm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Vr("app","Firebase",gm);/**
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
 */class ym{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=fm;function Cu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:po,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(e||(e=Au()),!e)throw qe.create("no-options");const s=xi.get(i);if(s){if(Ci(e,s.options)&&Ci(r,s.config))return s;throw qe.create("duplicate-app",{appName:i})}const a=new Tp(i);for(const u of mo.values())a.addComponent(u);const l=new ym(e,r,a);return xi.set(i,l),l}function xu(n=po){const t=xi.get(n);if(!t&&n===po&&Au())return Cu();if(!t)throw qe.create("no-app",{appName:n});return t}function $e(n,t,e){var r;let i=(r=pm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),we.warn(l.join(" "));return}On(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const _m="firebase-heartbeat-database",vm=1,Sr="firebase-heartbeat-store";let Js=null;function ku(){return Js||(Js=Op(_m,vm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Sr)}catch(e){console.warn(e)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),Js}async function Em(n){try{const e=(await ku()).transaction(Sr),r=await e.objectStore(Sr).get(Mu(n));return await e.done,r}catch(t){if(t instanceof Se)we.warn(t.message);else{const e=qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});we.warn(e.message)}}}async function sc(n,t){try{const r=(await ku()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(t,Mu(n)),await r.done}catch(e){if(e instanceof Se)we.warn(e.message);else{const r=qe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});we.warn(r.message)}}}function Mu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wm=1024,Im=30*24*60*60*1e3;class Tm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Am(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Im}),this._storage.overwrite(this._heartbeatsCache))}catch(r){we.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oc(),{heartbeatsToSend:r,unsentEntries:i}=bm(this._heartbeatsCache.heartbeats),s=Pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return we.warn(e),""}}}function oc(){return new Date().toISOString().substring(0,10)}function bm(n,t=wm){const e=[];let r=n.slice();for(const i of n){const s=e.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ac(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ac(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Am{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hp()?dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Em(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ac(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Sm(n){On(new un("platform-logger",t=>new Bp(t),"PRIVATE")),On(new un("heartbeat",t=>new Tm(t),"PRIVATE")),$e(fo,rc,n),$e(fo,rc,"esm2017"),$e("fire-js","")}Sm("");var Rm="firebase",Pm="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(Rm,Pm,"app");function $o(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cm=Du,Nu=new Vr("auth","Firebase",Du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Uo("@firebase/auth");function xm(n,...t){ki.logLevel<=Y.WARN&&ki.warn(`Auth (${Hn}): ${n}`,...t)}function yi(n,...t){ki.logLevel<=Y.ERROR&&ki.error(`Auth (${Hn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,...t){throw Ho(n,...t)}function ne(n,...t){return Ho(n,...t)}function jo(n,t,e){const r=Object.assign(Object.assign({},Cm()),{[t]:e});return new Vr("auth","Firebase",r).create(t,{appName:n.name})}function ve(n){return jo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function km(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qt(n,"argument-error"),jo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ho(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Nu.create(n,...t)}function q(n,t,...e){if(!n)throw Ho(t,...e)}function ge(n){const t="INTERNAL ASSERTION FAILED: "+n;throw yi(t),new Error(t)}function Ie(n,t){n||ge(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mm(){return lc()==="http:"||lc()==="https:"}function lc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||ap()||"connection"in navigator)?navigator.onLine:!0}function Nm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ie(e>t,"Short delay should be less than long delay!"),this.isMobile=ip()||lp()}get(){return Dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,t){Ie(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Lr(3e4,6e4);function Re(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function ue(n,t,e,r,i={}){return Ou(n,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=Or(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:t,headers:u},s);return op()||(d.referrerPolicy="no-referrer"),Vu.fetch()(Lu(n,n.config.apiHost,e,l),d)})}async function Ou(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vm),t);try{const i=new Fm(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw di(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw di(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw di(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw jo(n,f,d);Qt(n,f)}}catch(i){if(i instanceof Se)throw i;Qt(n,"network-request-failed",{message:String(i)})}}async function Fr(n,t,e,r,i={}){const s=await ue(n,t,e,r,i);return"mfaPendingCredential"in s&&Qt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Lu(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Wo(n.config,i):`${n.config.apiScheme}://${i}`}function Lm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),Om.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function di(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ne(n,t,r);return i.customData._tokenResponse=e,i}function cc(n){return n!==void 0&&n.enterprise!==void 0}class Bm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Lm(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Um(n,t){return ue(n,"GET","/v2/recaptchaConfig",Re(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(n,t){return ue(n,"POST","/v1/accounts:delete",t)}async function Fu(n,t){return ue(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qm(n,t=!1){const e=ht(n),r=await e.getIdToken(t),i=Go(r);q(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vr(Xs(i.auth_time)),issuedAtTime:vr(Xs(i.iat)),expirationTime:vr(Xs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xs(n){return Number(n)*1e3}function Go(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tu(e);return i?JSON.parse(i):(yi("Failed to decode base64 JWT payload"),null)}catch(i){return yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uc(n){const t=Go(n);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Se&&$m(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $m({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Ln(n,Fu(e,{idToken:r}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Bu(s.providerUserInfo):[],l=Wm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Hm(n){const t=ht(n);await Mi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wm(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Bu(n){return n.map(t=>{var{providerId:e}=t,r=$o(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,t){const e=await Ou(n,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Lu(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Vu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Km(n,t){return ue(n,"POST","/v2/accounts:revokeToken",Re(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){q(t.length!==0,"internal-error");const e=uc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gm(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,a=new Cn;return r&&(q(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,t){q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ye{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=$o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ln(this,this.stsTokenManager.getToken(this.auth,t));return q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return qm(this,t)}reload(){return Hm(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Mi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ee(this.auth.app))return Promise.reject(ve(this.auth));const t=await this.getIdToken();return await Ln(this,zm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,a,l,u,d,f;const g=(r=e.displayName)!==null&&r!==void 0?r:void 0,v=(i=e.email)!==null&&i!==void 0?i:void 0,T=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=e.photoURL)!==null&&a!==void 0?a:void 0,x=(l=e.tenantId)!==null&&l!==void 0?l:void 0,P=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,S=(d=e.createdAt)!==null&&d!==void 0?d:void 0,M=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:G,providerData:W,stsTokenManager:E}=e;q(N&&E,t,"internal-error");const m=Cn.fromJSON(this.name,E);q(typeof N=="string",t,"internal-error"),De(g,t.name),De(v,t.name),q(typeof O=="boolean",t,"internal-error"),q(typeof G=="boolean",t,"internal-error"),De(T,t.name),De(R,t.name),De(x,t.name),De(P,t.name),De(S,t.name),De(M,t.name);const y=new ye({uid:N,auth:t,email:v,emailVerified:O,displayName:g,isAnonymous:G,photoURL:R,phoneNumber:T,tenantId:x,stsTokenManager:m,createdAt:S,lastLoginAt:M});return W&&Array.isArray(W)&&(y.providerData=W.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(t,e,r=!1){const i=new Cn;i.updateFromServerResponse(e);const s=new ye({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Mi(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Bu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Cn;l.updateFromIdToken(r);const u=new ye({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;function _e(n){Ie(n instanceof Function,"Expected a class definition");let t=hc.get(n);return t?(Ie(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,hc.set(n,t),t)}/**
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
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Uu.type="NONE";const dc=Uu;/**
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
 */function _i(n,t,e){return`firebase:${n}:${t}:${e}`}class xn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_i(this.userKey,i.apiKey,s),this.fullPersistenceKey=_i("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ye._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new xn(_e(dc),t,r);const i=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||_e(dc);const a=_i(r,t.config.apiKey,t.name);let l=null;for(const d of e)try{const f=await d._get(a);if(f){const g=ye._fromJSON(t,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xn(s,t,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new xn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ju(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wu(t))return"Blackberry";if(Gu(t))return"Webos";if(qu(t))return"Safari";if((t.includes("chrome/")||$u(t))&&!t.includes("edge/"))return"Chrome";if(Hu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zu(n=xt()){return/firefox\//i.test(n)}function qu(n=xt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $u(n=xt()){return/crios\//i.test(n)}function ju(n=xt()){return/iemobile/i.test(n)}function Hu(n=xt()){return/android/i.test(n)}function Wu(n=xt()){return/blackberry/i.test(n)}function Gu(n=xt()){return/webos/i.test(n)}function Ko(n=xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ym(n=xt()){var t;return Ko(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Qm(){return cp()&&document.documentMode===10}function Ku(n=xt()){return Ko(n)||Hu(n)||Gu(n)||Wu(n)||/windows phone/i.test(n)||ju(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,t=[]){let e;switch(n){case"Browser":e=fc(xt());break;case"Worker":e=`${fc(xt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Hn}/${r}`}/**
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
 */class Jm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Xm(n,t={}){return ue(n,"GET","/v2/passwordPolicy",Re(n,t))}/**
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
 */const Zm=6;class tg{constructor(t){var e,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Zm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pc(this),this.idTokenSubscription=new pc(this),this.beforeStateQueue=new Jm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_e(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Fu(this,{idToken:t}),r=await ye._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(ee(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Mi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Nm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ee(this.app))return Promise.reject(ve(this));const e=t?ht(t):null;return e&&q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ee(this.app)?Promise.reject(ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ee(this.app)?Promise.reject(ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Xm(this),e=new tg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Km(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_e(t)||this._popupRedirectResolver;q(e,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[_e(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&xm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pe(n){return ht(n)}class pc{constructor(t){this.auth=t,this.observer=null,this.addObserver=yp(e=>this.observer=e)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ng(n){Yi=n}function Qu(n){return Yi.loadJS(n)}function rg(){return Yi.recaptchaEnterpriseScript}function ig(){return Yi.gapiScript}function sg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const og="recaptcha-enterprise",ag="NO_RECAPTCHA";class lg{constructor(t){this.type=og,this.auth=Pe(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Um(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Bm(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;cc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(d=>{a(d)}).catch(()=>{a(ag)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!e&&cc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=rg();u.length!==0&&(u+=l),Qu(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function mc(n,t,e,r=!1){const i=new lg(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Di(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await mc(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,t){const e=qo(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Ci(s,t??{}))return i;Qt(i,"already-initialized")}return e.initialize({options:t})}function ug(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(_e);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function hg(n,t,e){const r=Pe(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Ju(t),{host:a,port:l}=dg(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fg()}function Ju(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function dg(n){const t=Ju(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gc(a)}}}function gc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function fg(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ge("not implemented")}_getIdTokenResponse(t){return ge("not implemented")}_linkToIdToken(t,e){return ge("not implemented")}_getReauthenticationResolver(t){return ge("not implemented")}}async function pg(n,t){return ue(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,t){return Fr(n,"POST","/v1/accounts:signInWithPassword",Re(n,t))}async function gg(n,t){return ue(n,"POST","/v1/accounts:sendOobCode",Re(n,t))}async function yg(n,t){return gg(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,t){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,t))}async function vg(n,t){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Yo{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Rr(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Rr(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Di(t,e,"signInWithPassword",mg);case"emailLink":return _g(t,{email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Di(t,r,"signUpPassword",pg);case"emailLink":return vg(t,{idToken:e,email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,t){return Fr(n,"POST","/v1/accounts:signInWithIdp",Re(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="http://localhost";class hn extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Qt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=$o(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new hn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return kn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,kn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,kn(t,e)}buildRequest(){const t={requestUri:Eg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Or(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ig(n){const t=fr(pr(n)).link,e=t?fr(pr(t)).deep_link_id:null,r=fr(pr(n)).deep_link_id;return(r?fr(pr(r)).link:null)||r||e||t||n}class Qo{constructor(t){var e,r,i,s,a,l;const u=fr(pr(t)),d=(e=u.apiKey)!==null&&e!==void 0?e:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=wg((i=u.mode)!==null&&i!==void 0?i:null);q(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const e=Ig(t);try{return new Qo(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.providerId=Wn.PROVIDER_ID}static credential(t,e){return Rr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Qo.parseLink(e);return q(r,"argument-error"),Rr._fromEmailAndCode(t,r.code,r.tenantId)}}Wn.PROVIDER_ID="password";Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Br extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Br{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ve.credential(t.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return hn._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return me.credential(e,r)}catch{return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com";me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Br{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Oe.credential(t.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Br{constructor(){super("twitter.com")}static credential(t,e){return hn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Le.credential(e,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(n,t){return Fr(n,"POST","/v1/accounts:signUp",Re(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await ye._fromIdTokenResponse(t,r,i),a=yc(r);return new dn({user:s,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=yc(r);return new dn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function yc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Se{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ni(t,e,r,i)}}function Xu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(n,s,t,r):s})}async function bg(n,t,e=!1){const r=await Ln(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return dn._forOperation(n,"link",r)}/**
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
 */async function Ag(n,t,e=!1){const{auth:r}=n;if(ee(r.app))return Promise.reject(ve(r));const i="reauthenticate";try{const s=await Ln(n,Xu(r,i,t,n),e);q(s.idToken,r,"internal-error");const a=Go(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),dn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(n,t,e=!1){if(ee(n.app))return Promise.reject(ve(n));const r="signIn",i=await Xu(n,r,t),s=await dn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function Sg(n,t){return Zu(Pe(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(n){const t=Pe(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Rg(n,t,e){const r=Pe(n);await Di(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yg)}async function Pg(n,t,e){if(ee(n.app))return Promise.reject(ve(n));const r=Pe(n),a=await Di(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&th(n),u}),l=await dn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Cg(n,t,e){return ee(n.app)?Promise.reject(ve(n)):Sg(ht(n),Wn.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&th(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(n,t){return ue(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=ht(n),s={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await Ln(r,xg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Mg(n,t,e,r){return ht(n).onIdTokenChanged(t,e,r)}function Dg(n,t,e){return ht(n).beforeAuthStateChanged(t,e)}function Ng(n,t,e,r){return ht(n).onAuthStateChanged(t,e,r)}function Vg(n){return ht(n).signOut()}const Vi="__sak";/**
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
 */class eh{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=1e3,Lg=10;class nh extends eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ku(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Qm()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Lg):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}nh.type="LOCAL";const Fg=nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}rh.type="SESSION";const ih=rh;/**
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
 */function Bg(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Qi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Qi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(e.origin,s)),u=await Bg(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Ug{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Xo("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function zg(n){se().location.href=n}/**
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
 */function sh(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function qg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $g(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jg(){return sh()?self:null}/**
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
 */const oh="firebaseLocalStorageDb",Hg=1,Oi="firebaseLocalStorage",ah="fbase_key";class Ur{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ji(n,t){return n.transaction([Oi],t?"readwrite":"readonly").objectStore(Oi)}function Wg(){const n=indexedDB.deleteDatabase(oh);return new Ur(n).toPromise()}function _o(){const n=indexedDB.open(oh,Hg);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oi,{keyPath:ah})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oi)?t(r):(r.close(),await Wg(),t(await _o()))})})}async function _c(n,t,e){const r=Ji(n,!0).put({[ah]:t,value:e});return new Ur(r).toPromise()}async function Gg(n,t){const e=Ji(n,!1).get(t),r=await new Ur(e).toPromise();return r===void 0?null:r.value}function vc(n,t){const e=Ji(n,!0).delete(t);return new Ur(e).toPromise()}const Kg=800,Yg=3;class lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qi._getInstance(jg()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await qg(),!this.activeServiceWorker)return;this.sender=new Ug(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _o();return await _c(t,Vi,"1"),await vc(t,Vi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>_c(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Gg(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>vc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ji(i,!1).getAll();return new Ur(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lh.type="LOCAL";const Qg=lh;new Lr(3e4,6e4);/**
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
 */function ch(n,t){return t?_e(t):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zo extends Yo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return kn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Jg(n){return Zu(n.auth,new Zo(n),n.bypassAuthState)}function Xg(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Ag(e,new Zo(n),n.bypassAuthState)}async function Zg(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),bg(e,new Zo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Jg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:Qt(this.auth,"internal-error")}}resolve(t){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Lr(2e3,1e4);async function ey(n,t,e){if(ee(n.app))return Promise.reject(ne(n,"operation-not-supported-in-this-environment"));const r=Pe(n);km(n,t,Jo);const i=ch(r,e);return new on(r,"signInViaPopup",t,i).executeNotNull()}class on extends uh{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const t=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ty.get())};t()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="pendingRedirect",vi=new Map;class ry extends uh{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=vi.get(this.auth._key());if(!t){try{const r=await iy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}vi.set(this.auth._key(),t)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iy(n,t){const e=ay(t),r=oy(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function sy(n,t){vi.set(n._key(),t)}function oy(n){return _e(n._redirectPersistence)}function ay(n){return _i(ny,n.config.apiKey,n.name)}async function ly(n,t,e=!1){if(ee(n.app))return Promise.reject(ve(n));const r=Pe(n),i=ch(r,t),a=await new ry(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=10*60*1e3;class uy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hy(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!hh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ne(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(t))}saveEventToCache(t){this.cachedEventUids.add(Ec(t)),this.lastProcessedEventTime=Date.now()}}function Ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function hh({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(n,t={}){return ue(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,py=/^https?/;async function my(n){if(n.config.emulator)return;const{authorizedDomains:t}=await dy(n);for(const e of t)try{if(gy(e))return}catch{}Qt(n,"unauthorized-domain")}function gy(n){const t=go(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!py.test(e))return!1;if(fy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yy=new Lr(3e4,6e4);function wc(){const n=se().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function _y(n){return new Promise((t,e)=>{var r,i,s;function a(){wc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wc(),e(ne(n,"network-request-failed"))},timeout:yy.get()})}if(!((i=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=se().gapi)===null||s===void 0)&&s.load)a();else{const l=sg("iframefcb");return se()[l]=()=>{gapi.load?a():e(ne(n,"network-request-failed"))},Qu(`${ig()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw Ei=null,t})}let Ei=null;function vy(n){return Ei=Ei||_y(n),Ei}/**
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
 */const Ey=new Lr(5e3,15e3),wy="__/auth/iframe",Iy="emulator/auth/iframe",Ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},by=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ay(n){const t=n.config;q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Wo(t,Iy):`https://${n.config.authDomain}/${wy}`,r={apiKey:t.apiKey,appName:n.name,v:Hn},i=by.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Or(r).slice(1)}`}async function Sy(n){const t=await vy(n),e=se().gapi;return q(e,n,"internal-error"),t.open({where:document.body,url:Ay(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ty,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ne(n,"network-request-failed"),l=se().setTimeout(()=>{s(a)},Ey.get());function u(){se().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Ry={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Py=500,Cy=600,xy="_blank",ky="http://localhost";class Ic{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function My(n,t,e,r=Py,i=Cy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ry),{width:r.toString(),height:i.toString(),top:s,left:a}),d=xt().toLowerCase();e&&(l=$u(d)?xy:e),zu(d)&&(t=t||ky,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[T,R])=>`${v}${T}=${R},`,"");if(Ym(d)&&l!=="_self")return Dy(t||"",l),new Ic(null);const g=window.open(t||"",l,f);q(g,n,"popup-blocked");try{g.focus()}catch{}return new Ic(g)}function Dy(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Ny="__/auth/handler",Vy="emulator/auth/handler",Oy=encodeURIComponent("fac");async function Tc(n,t,e,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Hn,eventId:i};if(t instanceof Jo){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",gp(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof Br){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${Oy}=${encodeURIComponent(u)}`:"";return`${Ly(n)}?${Or(l).slice(1)}${d}`}function Ly({config:n}){return n.emulator?Wo(n,Vy):`https://${n.authDomain}/${Ny}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class Fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ih,this._completeRedirectFn=ly,this._overrideRedirectResult=sy}async _openPopup(t,e,r,i){var s;Ie((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Tc(t,e,r,go(),i);return My(t,a,Xo())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Tc(t,e,r,go(),i);return zg(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Ie(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Sy(t),r=new uy(t);return e.register("authEvent",i=>(q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Zs,{type:Zs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zs];a!==void 0&&e(!!a),Qt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=my(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ku()||qu()||Ko()}}const By=Fy;var bc="@firebase/auth",Ac="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qy(n){On(new un("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yu(n)},d=new eg(r,i,s,u);return ug(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),On(new un("auth-internal",t=>{const e=Pe(t.getProvider("auth").getImmediate());return(r=>new Uy(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(bc,Ac,zy(n)),$e(bc,Ac,"esm2017")}/**
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
 */const $y=5*60,jy=Su("authIdTokenMaxAge")||$y;let Sc=null;const Hy=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>jy)return;const i=e==null?void 0:e.token;Sc!==i&&(Sc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wy(n=xu()){const t=qo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=cg(n,{popupRedirectResolver:By,persistence:[Qg,Fg,ih]}),r=Su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Hy(s.toString());Dg(e,a,()=>a(e.currentUser)),Mg(e,l=>a(l))}}const i=bu("auth");return i&&hg(e,`http://${i}`),e}function Gy(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}ng({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ne("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Gy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qy("Browser");var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,dh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,I,A){for(var _=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)_[Dt-2]=arguments[Dt];return m.prototype[I].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)w[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],I=E.g[2];var A=E.g[3],_=m+(A^y&(I^A))+w[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+w[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+w[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+w[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+w[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+w[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+w[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+w[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+w[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+w[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+w[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+w[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+w[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+w[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+w[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+w[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(I^A&(y^I))+w[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+w[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+w[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+w[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+w[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+w[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+w[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+w[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+w[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+w[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+w[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+w[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+w[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+w[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+w[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+w[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(y^I^A)+w[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+w[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+w[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+w[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+w[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+w[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+w[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+w[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+w[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+w[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+w[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+w[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+w[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+w[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+w[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+w[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(I^(y|~A))+w[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+w[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+w[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+w[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+w[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+w[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+w[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+w[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+w[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+w[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+w[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+w[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+w[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+w[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+w[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,w=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=y;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(w[I++]=E.charCodeAt(A++),I==this.blockSize){i(this,w),I=0;break}}else for(;A<m;)if(w[I++]=E[A++],I==this.blockSize){i(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)E[y++]=this.g[m]>>>w&255;return E};function s(E,m){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],w=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;w&&A==m||(y[I]=A,w=!1)}this.g=y}var l={};function u(E){return-128<=E&&128>E?s(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return P(d(-E));for(var m=[],y=1,w=0;E>=y;w++)m[w]=E/y|0,y*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),w=g,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),_=parseInt(E.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),w=w.j(A).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var g=u(0),v=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(x(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),y=this,w="";;){var I=O(y,m).g;y=S(y,I.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=I,R(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=S(this,E),x(E)?-1:R(E)?0:1};function P(E){for(var m=E.g.length,y=[],w=0;w<m;w++)y[w]=~E.g[w];return new a(y,~E.h).add(v)}n.abs=function(){return x(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0,I=0;I<=m;I++){var A=w+(this.i(I)&65535)+(E.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);w=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function S(E,m){return E.add(P(m))}n.j=function(E){if(R(this)||R(E))return g;if(x(this))return x(E)?P(this).j(P(E)):P(P(this).j(E));if(x(E))return P(this.j(P(E)));if(0>this.l(T)&&0>E.l(T))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<E.g.length;I++){var A=this.i(w)>>>16,_=this.i(w)&65535,Dt=E.i(I)>>>16,Wt=E.i(I)&65535;y[2*w+2*I]+=_*Wt,M(y,2*w+2*I),y[2*w+2*I+1]+=A*Wt,M(y,2*w+2*I+1),y[2*w+2*I+1]+=_*Dt,M(y,2*w+2*I+1),y[2*w+2*I+2]+=A*Dt,M(y,2*w+2*I+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function M(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function N(E,m){this.g=E,this.h=m}function O(E,m){if(R(m))throw Error("division by zero");if(R(E))return new N(g,g);if(x(E))return m=O(P(E),m),new N(P(m.g),P(m.h));if(x(m))return m=O(E,P(m)),new N(P(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=m;0>=w.l(E);)y=G(y),w=G(w);var I=W(y,1),A=W(w,1);for(w=W(w,2),y=W(y,2);!R(w);){var _=A.add(w);0>=_.l(E)&&(I=I.add(y),A=_),w=W(w,1),y=W(y,1)}return m=S(E,I.j(m)),new N(I,m)}for(I=g;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=d(y),_=A.j(m);x(_)||0<_.l(E);)y-=w,A=d(y),_=A.j(m);R(A)&&(A=v),I=I.add(A),E=S(E,_)}return new N(I,E)}n.A=function(E){return O(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function G(E){for(var m=E.g.length+1,y=[],w=0;w<m;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function W(E,m){var y=m>>5;m%=32;for(var w=E.g.length-y,I=[],A=0;A<w;A++)I[A]=0<m?E.i(A+y)>>>m|E.i(A+y+1)<<32-m:E.i(A+y);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,ln=a}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fh,mr,ph,wi,vo,mh,gh,yh;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break t;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function T(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var V=Array(arguments.length-2),et=2;et<arguments.length;et++)V[et-2]=arguments[et];return c.prototype[b].apply(p,V)}}function x(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function P(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let V=0;V<C;V++)o[b+V]=p[V]}else o.push(p)}}class S{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function N(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var G=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function W(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){l.setTimeout(()=>{throw o},0)}function _(){var o=ft;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Dt{constructor(){this.h=this.g=null}add(c,h){const p=Wt.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Wt=new S(()=>new Jt,o=>o.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,ie=!1,ft=new Dt,mt=()=>{const o=l.Promise.resolve(void 0);Ut=()=>{o.then(_n)}};var _n=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=Wt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ie=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Nt(o,c){if(tt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(G){t:{try{O(c.nodeName);var b=!0;break t}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:he[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Nt.aa.h.call(this)}}R(Nt,tt);var he={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),Ce=0;function Zt(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Ce,this.da=this.fa=!1}function zt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kt(o){this.src=o,this.g={},this.h=0}Kt.prototype.add=function(o,c,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var V=Ts(o,c,p,b);return-1<V?(c=o[V],h||(c.fa=!1)):(c=new Zt(c,this.src,C,!!p,b),c.fa=h,o.push(c)),c};function Is(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(zt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ts(o,c,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return b}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),As={};function Za(o,c,h,p,b){if(Array.isArray(c)){for(var C=0;C<c.length;C++)Za(o,c[C],h,p,b);return null}return h=nl(h),o&&o[nt]?o.K(c,h,d(p)?!!p.capture:!1,b):Zd(o,c,h,!1,p,b)}function Zd(o,c,h,p,b,C){if(!c)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,et=Rs(o);if(et||(o[bs]=et=new Kt(o)),h=et.add(c,h,p,V,C),h.proxy)return h;if(p=tf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Xt||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(el(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function tf(){function o(h){return c.call(o.src,o.listener,h)}const c=ef;return o}function tl(o,c,h,p,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)tl(o,c[C],h,p,b);else p=d(p)?!!p.capture:!!p,h=nl(h),o&&o[nt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=Ts(C,h,p,b),-1<h&&(zt(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Rs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ts(c,h,p,b)),(h=-1<o?c[o]:null)&&Ss(h))}function Ss(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[nt])Is(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(el(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Rs(c))?(Is(h,o),h.h==0&&(h.src=null,c[bs]=null)):zt(o)}}}function el(o){return o in As?As[o]:As[o]="on"+o}function ef(o,c){if(o.da)o=!0;else{c=new Nt(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Ss(o),o=h.call(p,c)}return o}function Rs(o){return o=o[bs],o instanceof Kt?o:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function nl(o){return typeof o=="function"?o:(o[Ps]||(o[Ps]=function(c){return o.handleEvent(c)}),o[Ps])}function Tt(){Gt.call(this),this.i=new Kt(this),this.M=this,this.F=null}R(Tt,Gt),Tt.prototype[nt]=!0,Tt.prototype.removeEventListener=function(o,c,h,p){tl(this,o,c,h,p)};function kt(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new tt(c,o);else if(c instanceof tt)c.target=c.target||o;else{var b=c;c=new tt(p,o),w(c,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var V=c.g=h[C];b=Qr(V,p,!0,c)&&b}if(V=c.g=o,b=Qr(V,p,!0,c)&&b,b=Qr(V,p,!1,c)&&b,h)for(C=0;C<h.length;C++)V=c.g=h[C],b=Qr(V,p,!1,c)&&b}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)zt(h[p]);delete o.g[c],o.h--}}this.F=null},Tt.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Tt.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Qr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,C=0;C<c.length;++C){var V=c[C];if(V&&!V.da&&V.capture==h){var et=V.listener,yt=V.ha||V.src;V.fa&&Is(o.i,V),b=et.call(yt,p)!==!1&&b}}return b&&!p.defaultPrevented}function rl(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function il(o){o.g=rl(()=>{o.g=null,o.i&&(o.i=!1,il(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class nf extends Gt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:il(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){Gt.call(this),this.h=o,this.g={}}R(Xn,Gt);var sl=[];function ol(o){W(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ss(c)},o),o.g={}}Xn.prototype.N=function(){Xn.aa.N.call(this),ol(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=l.JSON.stringify,rf=l.JSON.parse,sf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function xs(){}xs.prototype.h=null;function al(o){return o.h||(o.h=o.i())}function ll(){}var Zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ks(){tt.call(this,"d")}R(ks,tt);function Ms(){tt.call(this,"c")}R(Ms,tt);var Ze={},cl=null;function Jr(){return cl=cl||new Tt}Ze.La="serverreachability";function ul(o){tt.call(this,Ze.La,o)}R(ul,tt);function tr(o){const c=Jr();kt(c,new ul(c))}Ze.STAT_EVENT="statevent";function hl(o,c){tt.call(this,Ze.STAT_EVENT,o),this.stat=c}R(hl,tt);function Mt(o){const c=Jr();kt(c,new hl(c,o))}Ze.Ma="timingevent";function dl(o,c){tt.call(this,Ze.Ma,o),this.size=c}R(dl,tt);function er(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function of(o,c,h,p,b,C){o.info(function(){if(o.g)if(C)for(var V="",et=C.split("&"),yt=0;yt<et.length;yt++){var J=et[yt].split("=");if(1<J.length){var bt=J[0];J=J[1];var At=bt.split("_");V=2<=At.length&&At[1]=="type"?V+(bt+"="+J+"&"):V+(bt+"=redacted&")}}else V=null;else V=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function af(o,c,h,p,b,C,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+V})}function vn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+cf(o,h)+(p?" "+p:"")})}function lf(o,c){o.info(function(){return"TIMEOUT: "+c})}nr.prototype.info=function(){};function cf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return Cs(h)}catch{return c}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ds;function Zr(){}R(Zr,xs),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Ds=new Zr;function xe(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var ml={},Ns={};function Vs(o,c,h){o.L=1,o.v=ri(de(c)),o.m=h,o.P=!0,gl(o,null)}function gl(o,c){o.F=Date.now(),ti(o),o.A=de(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),xl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new pl,o.g=Kl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new nf(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(sl[0]=b.toString()),b=sl);for(var C=0;C<b.length;C++){var V=Za(h,b[C],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),tr(),of(o.i,o.u,o.A,o.l,o.R,o.m)}xe.prototype.ca=function(o){o=o.target;const c=this.M;c&&fe(o)==3?c.j():this.Y(o)},xe.prototype.Y=function(o){try{if(o==this.g)t:{const At=fe(this.g);var c=this.g.Ba();const In=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||At!=4||c==7||(c==8||0>=In?tr(3):tr(2)),Os(this);var h=this.g.Z();this.X=h;e:if(yl(this)){var p=Ll(this.g);o="";var b=p.length,C=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),rr(this);var V="";break e}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,af(this.i,this.u,this.A,this.l,this.R,At,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,yt=this.g;if((et=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(et)){var J=et;break e}}J=null}if(h=J)vn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,h);else{this.o=!1,this.s=3,Mt(12),tn(this),rr(this);break t}}if(this.P){h=!0;let te;for(;!this.J&&this.C<V.length;)if(te=uf(this,V),te==Ns){At==4&&(this.s=4,Mt(14),h=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(te==ml){this.s=4,Mt(15),vn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else vn(this.i,this.l,te,null),Ls(this,te);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||V.length!=0||this.h.h||(this.s=1,Mt(16),h=!1),this.o=this.o&&h,!h)vn(this.i,this.l,V,"[Invalid Chunked Response]"),tn(this),rr(this);else if(0<V.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),$s(bt),bt.M=!0,Mt(11))}}else vn(this.i,this.l,V,null),Ls(this,V);At==4&&tn(this),this.o&&!this.J&&(At==4?jl(this.j,this):(this.o=!1,ti(this)))}else Rf(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),tn(this),rr(this)}}}catch{}finally{}};function yl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uf(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Ns:(h=Number(c.substring(h,p)),isNaN(h)?ml:(p+=1,p+h>c.length?Ns:(c=c.slice(p,p+h),o.C=p+h,c)))}xe.prototype.cancel=function(){this.J=!0,tn(this)};function ti(o){o.S=Date.now()+o.I,_l(o,o.I)}function _l(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=er(v(o.ba,o),c)}function Os(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lf(this.i,this.A),this.L!=2&&(tr(),Mt(17)),tn(this),this.s=2,rr(this)):_l(this,this.S-o)};function rr(o){o.j.G==0||o.J||jl(o.j,o)}function tn(o){Os(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ol(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ls(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Fs(h.h,o))){if(!o.K&&Fs(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ci(h),ai(h);else break t;qs(h),Mt(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=er(v(h.Za,h),6e3));if(1>=wl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else nn(h,11)}else if((o.K||h.g==o)&&ci(h),!M(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let J=b[c];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const bt=J[3];bt!=null&&(h.la=bt,h.j.info("VER="+h.la));const At=J[4];At!=null&&(h.Aa=At,h.j.info("SVER="+h.Aa));const In=J[5];In!=null&&typeof In=="number"&&0<In&&(p=1.5*In,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const te=o.g;if(te){const hi=te.g?te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var C=p.h;C.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Bs(C,C.h),C.h=null))}if(p.D){const js=te.g?te.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(p.ya=js,rt(p.I,p.D,js))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=o;if(p.qa=Gl(p,p.J?p.ia:null,p.W),V.K){Il(p.h,V);var et=V,yt=p.L;yt&&(et.I=yt),et.B&&(Os(et),ti(et)),p.g=V}else ql(p);0<h.i.length&&li(h)}else J[0]!="stop"&&J[0]!="close"||nn(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?nn(h,7):zs(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}tr(4)}catch{}}var hf=class{constructor(o,c){this.g=o,this.map=c}};function vl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function El(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wl(o){return o.h?1:o.g?o.g.size:0}function Fs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Bs(o,c){o.g?o.g.add(c):o.h=c}function Il(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}vl.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return x(o.i)}function df(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function ff(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function bl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=ff(o),p=df(o),b=p.length,C=0;C<b;C++)c.call(void 0,p[C],h&&h[C],o)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];c(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function en(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof en){this.h=o.h,ei(this,o.j),this.o=o.o,this.g=o.g,ni(this,o.s),this.l=o.l;var c=o.i,h=new or;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Sl(this,h),this.m=o.m}else o&&(c=String(o).match(Al))?(this.h=!1,ei(this,c[1]||"",!0),this.o=ir(c[2]||""),this.g=ir(c[3]||"",!0),ni(this,c[4]),this.l=ir(c[5]||"",!0),Sl(this,c[6]||"",!0),this.m=ir(c[7]||"")):(this.h=!1,this.i=new or(null,this.h))}en.prototype.toString=function(){var o=[],c=this.j;c&&o.push(sr(c,Rl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(sr(c,Rl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(sr(h,h.charAt(0)=="/"?yf:gf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",sr(h,vf)),o.join("")};function de(o){return new en(o)}function ei(o,c,h){o.j=h?ir(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ni(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Sl(o,c,h){c instanceof or?(o.i=c,Ef(o.i,o.h)):(h||(c=sr(c,_f)),o.i=new or(c,o.h))}function rt(o,c,h){o.i.set(c,h)}function ri(o){return rt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ir(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function sr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,mf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rl=/[#\/\?@]/g,gf=/[#\?:]/g,yf=/[#\?]/g,_f=/[#\?@]/g,vf=/#/g;function or(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ke(o){o.g||(o.g=new Map,o.h=0,o.i&&pf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=or.prototype,n.add=function(o,c){ke(this),this.i=null,o=En(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Pl(o,c){ke(o),c=En(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Cl(o,c){return ke(o),c=En(o,c),o.g.has(c)}n.forEach=function(o,c){ke(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},n.na=function(){ke(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(c[p])}return h},n.V=function(o){ke(this);let c=[];if(typeof o=="string")Cl(this,o)&&(c=c.concat(this.g.get(En(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return ke(this),this.i=null,o=En(this,o),Cl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function xl(o,c,h){Pl(o,c),0<h.length&&(o.i=null,o.g.set(En(o,c),x(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var b=C;V[p]!==""&&(b+="="+encodeURIComponent(String(V[p]))),o.push(b)}}return this.i=o.join("&")};function En(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ef(o,c){c&&!o.j&&(ke(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Pl(this,p),xl(this,b,h))},o)),o.j=c}function wf(o,c){const h=new nr;if(l.Image){const p=new Image;p.onload=T(Me,h,"TestLoadImage: loaded",!0,c,p),p.onerror=T(Me,h,"TestLoadImage: error",!1,c,p),p.onabort=T(Me,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=T(Me,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function If(o,c){const h=new nr,p=new AbortController,b=setTimeout(()=>{p.abort(),Me(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?Me(h,"TestPingServer: ok",!0,c):Me(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Me(h,"TestPingServer: error",!1,c)})}function Me(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Tf(){this.g=new sf}function bf(o,c,h){const p=h||"";try{bl(o,function(b,C){let V=b;d(b)&&(V=Cs(b)),c.push(p+C+"="+encodeURIComponent(V))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function ii(o){this.l=o.Ub||null,this.j=o.eb||!1}R(ii,xs),ii.prototype.g=function(){return new si(this.l,this.j)},ii.prototype.i=function(o){return function(){return o}}({});function si(o,c){Tt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(si,Tt),n=si.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,lr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ar(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ar(this):lr(this),this.readyState==3&&kl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ar(this))},n.Qa=function(o){this.g&&(this.response=o,ar(this))},n.ga=function(){this.g&&ar(this)};function ar(o){o.readyState=4,o.l=null,o.j=null,o.v=null,lr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function lr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ml(o){let c="";return W(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Us(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ml(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):rt(o,c,h))}function at(o){Tt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(at,Tt);var Af=/^https?$/i,Sf=["POST","PUT"];n=at.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ds.g(),this.v=this.o?al(this.o):al(Ds),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Dl(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sf,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of h)this.g.setRequestHeader(C,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ol(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Dl(this,C)}};function Dl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Nl(o),oi(o)}function Nl(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,kt(this,"complete"),kt(this,"abort"),oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Vl(this):this.bb())},n.bb=function(){Vl(this)};function Vl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||fe(o)!=4||o.Z()!=2)){if(o.u&&fe(o)==4)rl(o.Ea,0,o);else if(kt(o,"readystatechange"),fe(o)==4){o.h=!1;try{const V=o.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=V===0){var b=String(o.D).match(Al)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Af.test(b?b.toLowerCase():"")}h=p}if(h)kt(o,"complete"),kt(o,"success");else{o.m=6;try{var C=2<fe(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Nl(o)}}finally{oi(o)}}}}function oi(o,c){if(o.g){Ol(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||kt(o,"ready");try{h.onreadystatechange=p}catch{}}}function Ol(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function fe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),rf(c)}};function Ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Rf(o){const c={};o=(o.g&&2<=fe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var h=I(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}E(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Fl(o){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,o),this.cb=cr("retryDelaySeedMs",1e4,o),this.Wa=cr("forwardChannelMaxRetries",2,o),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new vl(o&&o.concurrentRequestLimit),this.Da=new Tf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fl.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){Mt(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Gl(this,null,this.W),li(this)};function zs(o){if(Bl(o),o.G==3){var c=o.U++,h=de(o.I);if(rt(h,"SID",o.K),rt(h,"RID",c),rt(h,"TYPE","terminate"),ur(o,h),c=new xe(o,o.j,c),c.L=2,c.v=ri(de(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Kl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ti(c)}Wl(o)}function ai(o){o.g&&($s(o),o.g.cancel(),o.g=null)}function Bl(o){ai(o),o.u&&(l.clearTimeout(o.u),o.u=null),ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function li(o){if(!El(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ut||mt(),ie||(Ut(),ie=!0),ft.add(c,o),o.B=0}}function Pf(o,c){return wl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=er(v(o.Ga,o,c),Hl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new xe(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=zl(this,b,c),h=de(this.I),rt(h,"RID",o),rt(h,"CVER",22),this.D&&rt(h,"X-HTTP-Session-Id",this.D),ur(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(Ml(C)))+"&"+c:this.m&&Us(h,this.m,C)),Bs(this.h,b),this.Ua&&rt(h,"TYPE","init"),this.P?(rt(h,"$req",c),rt(h,"SID","null"),b.T=!0,Vs(b,h,null)):Vs(b,h,c),this.G=2}}else this.G==3&&(o?Ul(this,o):this.i.length==0||El(this.h)||Ul(this))};function Ul(o,c){var h;c?h=c.l:h=o.U++;const p=de(o.I);rt(p,"SID",o.K),rt(p,"RID",h),rt(p,"AID",o.T),ur(o,p),o.m&&o.o&&Us(p,o.m,o.o),h=new xe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=zl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bs(o.h,h),Vs(h,p,c)}function ur(o,c){o.H&&W(o.H,function(h,p){rt(c,p,h)}),o.l&&bl({},function(h,p){rt(c,p,h)})}function zl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;t:{var b=o.i;let C=-1;for(;;){const V=["count="+h];C==-1?0<h?(C=b[0].g,V.push("ofs="+C)):C=0:V.push("ofs="+C);let et=!0;for(let yt=0;yt<h;yt++){let J=b[yt].g;const bt=b[yt].map;if(J-=C,0>J)C=Math.max(0,b[yt].g-100),et=!1;else try{bf(bt,V,"req"+J+"_")}catch{p&&p(bt)}}if(et){p=V.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function ql(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ut||mt(),ie||(Ut(),ie=!0),ft.add(c,o),o.v=0}}function qs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=er(v(o.Fa,o),Hl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=er(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),ai(this),$l(this))};function $s(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function $l(o){o.g=new xe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=de(o.qa);rt(c,"RID","rpc"),rt(c,"SID",o.K),rt(c,"AID",o.T),rt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&rt(c,"TO",o.ja),rt(c,"TYPE","xmlhttp"),ur(o,c),o.m&&o.o&&Us(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ri(de(c)),h.m=null,h.P=!0,gl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ai(this),qs(this),Mt(19))};function ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function jl(o,c){var h=null;if(o.g==c){ci(o),$s(o),o.g=null;var p=2}else if(Fs(o.h,c))h=c.D,Il(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=Jr(),kt(p,new dl(p,h)),li(o)}else ql(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&Pf(o,c)||p==2&&qs(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:nn(o,5);break;case 4:nn(o,10);break;case 3:nn(o,6);break;default:nn(o,2)}}}function Hl(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function nn(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const b=!p;p=new en(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ei(p,"https"),ri(p),b?wf(p.toString(),h):If(p.toString(),h)}else Mt(2);o.G=0,o.l&&o.l.sa(c),Wl(o),Bl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Wl(o){if(o.G=0,o.ka=[],o.l){const c=Tl(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Gl(o,c,h){var p=h instanceof en?de(h):new en(h);if(p.g!="")c&&(p.g=c+"."+p.g),ni(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var C=new en(null);p&&ei(C,p),c&&(C.g=c),b&&ni(C,b),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&rt(p,h,c),rt(p,"VER",o.la),ur(o,p),p}function Kl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new ii({eb:h})):new at(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yl(){}n=Yl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ui(){}ui.prototype.g=function(o,c){return new qt(o,c)};function qt(o,c){Tt.call(this),this.g=new Fl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new wn(this)}R(qt,Tt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){zs(this.g)},qt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Cs(o),o=h);c.i.push(new hf(c.Ya++,o)),c.G==3&&li(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,qt.aa.N.call(this)};function Ql(o){ks.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}R(Ql,ks);function Jl(){Ms.call(this),this.status=1}R(Jl,Ms);function wn(o){this.g=o}R(wn,Yl),wn.prototype.ua=function(){kt(this.g,"a")},wn.prototype.ta=function(o){kt(this.g,new Ql(o))},wn.prototype.sa=function(o){kt(this.g,new Jl)},wn.prototype.ra=function(){kt(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,yh=function(){return new ui},gh=function(){return Jr()},mh=Ze,vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,wi=Xr,fl.COMPLETE="complete",ph=fl,ll.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,mr=ll,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,fh=at}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const Pc="@firebase/firestore";/**
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
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let Gn="10.14.0";/**
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
 */const fn=new Uo("@firebase/firestore");function dr(){return fn.logLevel}function F(n,...t){if(fn.logLevel<=Y.DEBUG){const e=t.map(ta);fn.debug(`Firestore (${Gn}): ${n}`,...e)}}function Te(n,...t){if(fn.logLevel<=Y.ERROR){const e=t.map(ta);fn.error(`Firestore (${Gn}): ${n}`,...e)}}function Fn(n,...t){if(fn.logLevel<=Y.WARN){const e=t.map(ta);fn.warn(`Firestore (${Gn}): ${n}`,...e)}}function ta(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+n;throw Te(t),new Error(t)}function Z(n,t){n||$()}function H(n,t){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class _h{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ky{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Pt.UNAUTHENTICATED))}shutdown(){}}class Yy{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Qy{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ee,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new _h(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new Pt(t)}}class Jy{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xy{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Jy(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Z(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new Zy(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class vh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=e_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Bn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class pt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return pt.fromMillis(Date.now())}static fromDate(t){return pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new pt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(t){this.timestamp=t}static fromTimestamp(t){return new j(t)}static min(){return new j(new pt(0,0))}static max(){return new j(new pt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class st extends Pr{construct(t,e,r){return new st(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new st(e)}static emptyPath(){return new st([])}}const n_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Pr{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return n_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(st.fromString(t))}static fromName(t){return new B(st.fromString(t).popFirst(5))}static empty(){return new B(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new st(t.slice()))}}function r_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new pt(e+1,0):new pt(e,r));return new We(i,B.empty(),t)}function i_(n){return new We(n.readTime,n.key,-1)}class We{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new We(j.min(),B.empty(),-1)}static max(){return new We(j.max(),B.empty(),-1)}}function s_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function zr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==o_)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&e()},u=>r(u))}),a=!0,s===i&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(i=>i?D.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new D((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,e){return new D((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function l_(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function qr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ea{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ea.oe=-1;function Xi(n){return n==null}function Li(n){return n===0&&1/n==-1/0}function c_(n){return typeof n=="number"&&Number.isInteger(n)&&!Li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Eh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ot{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pi(this.root,t,this.comparator,!0)}}class pi{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=s??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new vt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,i,s){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xc(this.data.getIterator())}getIteratorFrom(t){return new xc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof wt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new wt(this.comparator);return e.data=t,e}}class xc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new $t([])}unionWith(t){let e=new wt(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class wh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wh("Invalid base64 string: "+s):s}}(t);return new It(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new It(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}It.EMPTY_BYTE_STRING=new It("");const u_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ge(n){if(Z(!!n),typeof n=="string"){let t=0;const e=u_.exec(n);if(Z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pn(n){return typeof n=="string"?It.fromBase64String(n):It.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ra(n){const t=n.mapValue.fields.__previous_value__;return na(t)?ra(t):t}function Cr(n){const t=Ge(n.mapValue.fields.__local_write_time__.timestampValue);return new pt(t.seconds,t.nanos)}/**
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
 */class h_{constructor(t,e,r,i,s,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class xr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi={mapValue:{}};function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?na(n)?4:f_(n)?9007199254740991:d_(n)?10:11:$()}function ce(n,t){if(n===t)return!0;const e=mn(n);if(e!==mn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Cr(n).isEqual(Cr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ge(i.timestampValue),l=Ge(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return pn(i.bytesValue).isEqual(pn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return lt(i.geoPointValue.latitude)===lt(s.geoPointValue.latitude)&&lt(i.geoPointValue.longitude)===lt(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return lt(i.integerValue)===lt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=lt(i.doubleValue),l=lt(s.doubleValue);return a===l?Li(a)===Li(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Bn(n.arrayValue.values||[],t.arrayValue.values||[],ce);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Cc(a)!==Cc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ce(a[u],l[u])))return!1;return!0}(n,t);default:return $()}}function kr(n,t){return(n.values||[]).find(e=>ce(e,t))!==void 0}function Un(n,t){if(n===t)return 0;const e=mn(n),r=mn(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=lt(s.integerValue||s.doubleValue),u=lt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return kc(n.timestampValue,t.timestampValue);case 4:return kc(Cr(n),Cr(t));case 5:return X(n.stringValue,t.stringValue);case 6:return function(s,a){const l=pn(s),u=pn(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=X(l[d],u[d]);if(f!==0)return f}return X(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=X(lt(s.latitude),lt(a.latitude));return l!==0?l:X(lt(s.longitude),lt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Mc(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,d,f;const g=s.fields||{},v=a.fields||{},T=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,x=X(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Mc(T,R)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===mi.mapValue&&a===mi.mapValue)return 0;if(s===mi.mapValue)return 1;if(a===mi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=X(u[g],f[g]);if(v!==0)return v;const T=Un(l[u[g]],d[f[g]]);if(T!==0)return T}return X(u.length,f.length)}(n.mapValue,t.mapValue);default:throw $()}}function kc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=Ge(n),r=Ge(t),i=X(e.seconds,r.seconds);return i!==0?i:X(e.nanos,r.nanos)}function Mc(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=Un(e[i],r[i]);if(s)return s}return X(e.length,r.length)}function zn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Eo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Eo(e.fields[a])}`;return i+"}"}(n.mapValue):$()}function Dc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function wo(n){return!!n&&"integerValue"in n}function ia(n){return!!n&&"arrayValue"in n}function Nc(n){return!!n&&"nullValue"in n}function Vc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ii(n){return!!n&&"mapValue"in n}function d_(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return gn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Er(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Er(n.arrayValue.values[e]);return t}return Object.assign({},n)}function f_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ii(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Er(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=Er(a):i.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Ii(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ce(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Ii(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){gn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ot(Er(this.value))}}function Ih(n){const t=[];return gn(n.fields,(e,r)=>{const i=new Et([e]);if(Ii(r)){const s=Ih(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new $t(t)}/**
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
 */class Ct{constructor(t,e,r,i,s,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Ct(t,0,j.min(),j.min(),j.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,i){return new Ct(t,1,e,j.min(),r,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,j.min(),j.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,j.min(),j.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fi{constructor(t,e){this.position=t,this.inclusive=e}}function Oc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),e.key):r=Un(a,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ce(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function p_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Th{}class ut extends Th{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new g_(t,e,r):e==="array-contains"?new v_(t,r):e==="in"?new E_(t,r):e==="not-in"?new w_(t,r):e==="array-contains-any"?new I_(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new y_(t,r):new __(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Un(e,this.value)):e!==null&&mn(this.value)===mn(e)&&this.matchesComparison(Un(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Th{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new re(t,e)}matches(t){return bh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bh(n){return n.op==="and"}function Ah(n){return m_(n)&&bh(n)}function m_(n){for(const t of n.filters)if(t instanceof re)return!1;return!0}function Io(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+zn(n.value);if(Ah(n))return n.filters.map(t=>Io(t)).join(",");{const t=n.filters.map(e=>Io(e)).join(",");return`${n.op}(${t})`}}function Sh(n,t){return n instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&ce(r.value,i.value)}(n,t):n instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Sh(a,i.filters[l]),!0):!1}(n,t):void $()}function Rh(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${zn(e.value)}`}(n):n instanceof re?function(e){return e.op.toString()+" {"+e.getFilters().map(Rh).join(" ,")+"}"}(n):"Filter"}class g_ extends ut{constructor(t,e,r){super(t,e,r),this.key=B.fromName(r.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class y_ extends ut{constructor(t,e){super(t,"in",e),this.keys=Ph("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class __ extends ut{constructor(t,e){super(t,"not-in",e),this.keys=Ph("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ph(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>B.fromName(r.referenceValue))}class v_ extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ia(e)&&kr(e.arrayValue,this.value)}}class E_ extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&kr(this.value.arrayValue,e)}}class w_ extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!kr(this.value.arrayValue,e)}}class I_ extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ia(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>kr(this.value.arrayValue,r))}}/**
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
 */class T_{constructor(t,e=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Fc(n,t=null,e=[],r=[],i=null,s=null,a=null){return new T_(n,t,e,r,i,s,a)}function sa(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Io(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>zn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>zn(r)).join(",")),t.ue=e}return t.ue}function oa(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!p_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Sh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Lc(n.startAt,t.startAt)&&Lc(n.endAt,t.endAt)}function To(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Kn{constructor(t,e=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function b_(n,t,e,r,i,s,a,l){return new Kn(n,t,e,r,i,s,a,l)}function aa(n){return new Kn(n)}function Bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ch(n){return n.collectionGroup!==null}function wr(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new wt(Et.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Mr(s,r))}),e.has(Et.keyField().canonicalString())||t.ce.push(new Mr(Et.keyField(),r))}return t.ce}function oe(n){const t=H(n);return t.le||(t.le=A_(t,wr(n))),t.le}function A_(n,t){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mr(i.field,s)});const e=n.endAt?new Fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fi(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function bo(n,t){const e=n.filters.concat([t]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Bi(n,t,e){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zi(n,t){return oa(oe(n),oe(t))&&n.limitType===t.limitType}function xh(n){return`${sa(oe(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Rh(i)).join(", ")}]`),Xi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>zn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>zn(i)).join(",")),`Target(${r})`}(oe(n))}; limitType=${n.limitType})`}function ts(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of wr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Oc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,wr(r),i)||r.endAt&&!function(a,l,u){const d=Oc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,wr(r),i))}(n,t)}function S_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kh(n){return(t,e)=>{let r=!1;for(const i of wr(n)){const s=R_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function R_(n,t,e){const r=n.field.isKeyField()?B.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Un(u,d):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Yn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){gn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Eh(this.inner)}size(){return this.innerSize}}/**
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
 */const P_=new ot(B.comparator);function be(){return P_}const Mh=new ot(B.comparator);function gr(...n){let t=Mh;for(const e of n)t=t.insert(e.key,e);return t}function Dh(n){let t=Mh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function an(){return Ir()}function Nh(){return Ir()}function Ir(){return new Yn(n=>n.toString(),(n,t)=>n.isEqual(t))}const C_=new ot(B.comparator),x_=new wt(B.comparator);function K(...n){let t=x_;for(const e of n)t=t.add(e);return t}const k_=new wt(X);function M_(){return k_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(t)?"-0":t}}function Vh(n){return{integerValue:""+n}}function D_(n,t){return c_(t)?Vh(t):la(n,t)}/**
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
 */class es{constructor(){this._=void 0}}function N_(n,t,e){return n instanceof Ui?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&na(s)&&(s=ra(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Dr?Lh(n,t):n instanceof Nr?Fh(n,t):function(i,s){const a=Oh(i,s),l=Uc(a)+Uc(i.Pe);return wo(a)&&wo(i.Pe)?Vh(l):la(i.serializer,l)}(n,t)}function V_(n,t,e){return n instanceof Dr?Lh(n,t):n instanceof Nr?Fh(n,t):e}function Oh(n,t){return n instanceof zi?function(r){return wo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ui extends es{}class Dr extends es{constructor(t){super(),this.elements=t}}function Lh(n,t){const e=Bh(t);for(const r of n.elements)e.some(i=>ce(i,r))||e.push(r);return{arrayValue:{values:e}}}class Nr extends es{constructor(t){super(),this.elements=t}}function Fh(n,t){let e=Bh(t);for(const r of n.elements)e=e.filter(i=>!ce(i,r));return{arrayValue:{values:e}}}class zi extends es{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Uc(n){return lt(n.integerValue||n.doubleValue)}function Bh(n){return ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function O_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Dr&&i instanceof Dr||r instanceof Nr&&i instanceof Nr?Bn(r.elements,i.elements,ce):r instanceof zi&&i instanceof zi?ce(r.Pe,i.Pe):r instanceof Ui&&i instanceof Ui}(n.transform,t.transform)}class L_{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ti(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ns{}function Uh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ca(n.key,jt.none()):new $r(n.key,n.data,jt.none());{const e=n.data,r=Ot.empty();let i=new wt(Et.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Qe(n.key,r,new $t(i.toArray()),jt.none())}}function F_(n,t,e){n instanceof $r?function(i,s,a){const l=i.value.clone(),u=qc(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Qe?function(i,s,a){if(!Ti(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=qc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(zh(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Tr(n,t,e,r){return n instanceof $r?function(s,a,l,u){if(!Ti(s.precondition,a))return l;const d=s.value.clone(),f=$c(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Qe?function(s,a,l,u){if(!Ti(s.precondition,a))return l;const d=$c(s.fieldTransforms,u,a),f=a.data;return f.setAll(zh(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(s,a,l){return Ti(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function B_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Oh(r.transform,i||null);s!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,s))}return e||null}function zc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,a)=>O_(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $r extends ns{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qe extends ns{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function qc(n,t,e){const r=new Map;Z(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,V_(a,l,e[i]))}return r}function $c(n,t,e){const r=new Map;for(const i of n){const s=i.transform,a=e.data.field(i.field);r.set(i.field,N_(s,a,t))}return r}class ca extends ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U_ extends ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class z_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&F_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Tr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Tr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Nh();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(i.key)?null:l;const u=Uh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,(e,r)=>zc(e,r))&&Bn(this.baseMutations,t.baseMutations,(e,r)=>zc(e,r))}}class ua{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Z(t.mutations.length===r.length);let i=function(){return C_}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ua(t,e,r,i)}}/**
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
 */class q_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class $_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ct,Q;function j_(n){switch(n){default:return $();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function qh(n){if(n===void 0)return Te("GRPC error has no .code"),k.UNKNOWN;switch(n){case ct.OK:return k.OK;case ct.CANCELLED:return k.CANCELLED;case ct.UNKNOWN:return k.UNKNOWN;case ct.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ct.INTERNAL:return k.INTERNAL;case ct.UNAVAILABLE:return k.UNAVAILABLE;case ct.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ct.NOT_FOUND:return k.NOT_FOUND;case ct.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ct.ABORTED:return k.ABORTED;case ct.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ct.DATA_LOSS:return k.DATA_LOSS;default:return $()}}(Q=ct||(ct={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function H_(){return new TextEncoder}/**
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
 */const W_=new ln([4294967295,4294967295],0);function jc(n){const t=H_().encode(n),e=new dh;return e.update(t),new Uint8Array(e.digest())}function Hc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ln([e,r],0),new ln([i,s],0)]}class ha{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new yr(`Invalid padding: ${e}`);if(r<0)throw new yr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new yr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ln.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ln.fromNumber(r)));return i.compare(W_)===1&&(i=new ln([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=jc(t),[r,i]=Hc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new ha(s,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=jc(t),[r,i]=Hc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rs{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,jr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new rs(j.min(),i,new ot(X),be(),K())}}class jr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jr(r,e,K(),K(),K())}}/**
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
 */class bi{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class $h{constructor(t,e){this.targetId=t,this.me=e}}class jh{constructor(t,e,r=It.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Wc{constructor(){this.fe=0,this.ge=Kc(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),r=K();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:$()}}),new jr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Kc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class G_{constructor(t){this.Le=t,this.Be=new Map,this.ke=be(),this.qe=Gc(),this.Qe=new ot(X)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(To(s))if(r===0){const a=new B(s.path);this.Ue(e,a,Ct.newNoDocument(a,j.min()))}else Z(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let a,l;try{a=pn(r).toUint8Array()}catch(u){if(u instanceof wh)return Fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ha(a,i,s)}catch(u){return Fn(u instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&To(l.target)){const u=new B(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ct.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let r=K();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new rs(t,e,this.Qe,this.ke,r);return this.ke=be(),this.qe=Gc(),this.Qe=new ot(X),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Wc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new wt(X),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Wc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Gc(){return new ot(B.comparator)}function Kc(){return new ot(B.comparator)}const K_={asc:"ASCENDING",desc:"DESCENDING"},Y_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Q_={and:"AND",or:"OR"};class J_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ao(n,t){return n.useProto3Json||Xi(t)?t:{value:t}}function qi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function X_(n,t){return qi(n,t.toTimestamp())}function ae(n){return Z(!!n),j.fromTimestamp(function(e){const r=Ge(e);return new pt(r.seconds,r.nanos)}(n))}function da(n,t){return So(n,t).canonicalString()}function So(n,t){const e=function(i){return new st(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Wh(n){const t=st.fromString(n);return Z(Jh(t)),t}function Ro(n,t){return da(n.databaseId,t.path)}function to(n,t){const e=Wh(t);if(e.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(Kh(e))}function Gh(n,t){return da(n.databaseId,t)}function Z_(n){const t=Wh(n);return t.length===4?st.emptyPath():Kh(t)}function Po(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kh(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yc(n,t,e){return{name:Ro(n,t),fields:e.value.mapValue.fields}}function tv(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string"),It.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array),It.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?k.UNKNOWN:qh(d.code);return new L(f,d.message||"")}(a);e=new jh(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=to(n,r.document.name),s=ae(r.document.updateTime),a=r.document.createTime?ae(r.document.createTime):j.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];e=new bi(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=to(n,r.document),s=r.readTime?ae(r.readTime):j.min(),a=Ct.newNoDocument(i,s),l=r.removedTargetIds||[];e=new bi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=to(n,r.document),s=r.removedTargetIds||[];e=new bi([],s,i,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new $_(i,s),l=r.targetId;e=new $h(l,a)}}return e}function ev(n,t){let e;if(t instanceof $r)e={update:Yc(n,t.key,t.value)};else if(t instanceof ca)e={delete:Ro(n,t.key)};else if(t instanceof Qe)e={update:Yc(n,t.key,t.data),updateMask:uv(t.fieldMask)};else{if(!(t instanceof U_))return $();e={verify:Ro(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:X_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,t.precondition)),e}function nv(n,t){return n&&n.length>0?(Z(t!==void 0),n.map(e=>function(i,s){let a=i.updateTime?ae(i.updateTime):ae(s);return a.isEqual(j.min())&&(a=ae(s)),new L_(a,i.transformResults||[])}(e,t))):[]}function rv(n,t){return{documents:[Gh(n,t.path)]}}function iv(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gh(n,i);const s=function(d){if(d.length!==0)return Qh(re.create(d,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:bn(v.field),direction:av(v.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ao(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function sv(n){let t=Z_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Z(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(g){const v=Yh(g);return v instanceof re&&Ah(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(v=>function(R){return new Mr(An(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,Xi(v)?null:v}(e.limit));let u=null;e.startAt&&(u=function(g){const v=!!g.before,T=g.values||[];return new Fi(T,v)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const v=!g.before,T=g.values||[];return new Fi(T,v)}(e.endAt)),b_(t,i,a,s,l,"F",u,d)}function ov(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Yh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=An(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=An(e.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=An(e.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return ut.create(An(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return re.create(e.compositeFilter.filters.map(r=>Yh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function av(n){return K_[n]}function lv(n){return Y_[n]}function cv(n){return Q_[n]}function bn(n){return{fieldPath:n.canonicalString()}}function An(n){return Et.fromServerFormat(n.fieldPath)}function Qh(n){return n instanceof ut?function(e){if(e.op==="=="){if(Vc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(Nc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(Nc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:lv(e.op),value:e.value}}}(n):n instanceof re?function(e){const r=e.getFilters().map(i=>Qh(i));return r.length===1?r[0]:{compositeFilter:{op:cv(e.op),filters:r}}}(n):$()}function uv(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Be{constructor(t,e,r,i,s=j.min(),a=j.min(),l=It.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Be(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class hv{constructor(t){this.ct=t}}function dv(n){const t=sv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bi(t,t.limit,"L"):t}/**
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
 */class fv{constructor(){this.un=new pv}addToCollectionParentIndex(t,e){return this.un.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(We.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(We.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class pv{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new wt(st.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new wt(st.comparator)).toArray()}}/**
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
 */class qn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qn(0)}static kn(){return new qn(-1)}}/**
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
 */class mv{constructor(){this.changes=new Yn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class gv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class yv{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Tr(r.mutation,i,$t.empty(),pt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,e,r=K()){const i=an();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let a=gr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=an();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,K()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let s=be();const a=Ir(),l=function(){return Ir()}();return e.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Qe)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Tr(f.mutation,d,f.mutation.getFieldMask(),pt.now())):a.set(d.key,$t.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return l.set(d,new gv(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Ir();let i=new ot((a,l)=>a-l),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||$t.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||K()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=Nh();f.forEach(v=>{if(!s.has(v)){const T=Uh(e.get(v),r.get(v));T!==null&&g.set(v,T),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ch(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):D.resolve(an());let l=-1,u=s;return a.next(d=>D.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(t,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(t,d,s)).next(()=>this.computeViews(t,u,d,K())).next(f=>({batchId:l,changes:Dh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(r=>{let i=gr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let a=gr();return this.indexManager.getCollectionParents(t,s).next(l=>D.forEach(l,u=>{const d=function(g,v){return new Kn(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(f=>{f.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ct.newInvalidDocument(f)))});let l=gr();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Tr(f.mutation,d,$t.empty(),pt.now()),ts(e,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return D.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ae(i.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:dv(i.bundledQuery),readTime:ae(i.readTime)}}(e)),D.resolve()}}/**
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
 */class vv{constructor(){this.overlays=new ot(B.comparator),this.Ir=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=an();return D.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const i=an(),s=e.length+1,a=new B(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new ot((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=an(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=an(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return D.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new q_(e,r));let s=this.Ir.get(e);s===void 0&&(s=K(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
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
 */class Ev{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
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
 */class fa{constructor(){this.Tr=new wt(gt.Er),this.dr=new wt(gt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new gt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new gt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new B(new st([])),r=new gt(e,t),i=new gt(e,t+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new B(new st([])),r=new gt(e,t),i=new gt(e,t+1);let s=K();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new gt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class gt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return B.comparator(t.key,e.key)||X(t.wr,e.wr)}static Ar(t,e){return X(t.wr,e.wr)||B.comparator(t.key,e.key)}}/**
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
 */class wv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new wt(gt.Er)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new z_(s,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new gt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new gt(e,0),i=new gt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new wt(X);return e.forEach(i=>{const s=new gt(i,0),a=new gt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new gt(new B(s),0);let l=new wt(X);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Z(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(e.mutations,i=>{const s=new gt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new gt(e,0),i=this.br.firstAfterOrEqual(r);return D.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Iv{constructor(t){this.Mr=t,this.docs=function(){return new ot(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=be();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=be();const a=e.path,l=new B(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||s_(i_(f),r)<=0||(i.has(f.key)||ts(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(t,e,r,i){$()}Or(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Tv(this)}getSize(t){return D.resolve(this.size)}}class Tv extends mv{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class bv{constructor(t){this.persistence=t,this.Nr=new Yn(e=>sa(e),oa),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Lr=0,this.Br=new fa,this.targetCount=0,this.kr=qn.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),D.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.Kn(e),D.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.Br.containsKey(e))}}/**
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
 */class Av{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ea(0),this.Kr=!1,this.Kr=!0,this.$r=new Ev,this.referenceDelegate=t(this),this.Ur=new bv(this),this.indexManager=new fv,this.remoteDocumentCache=function(i){return new Iv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hv(e),this.Gr=new _v(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new wv(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){F("MemoryPersistence","Starting transaction:",t);const i=new Sv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Sv extends a_{constructor(t){super(),this.currentSequenceNumber=t}}class pa{constructor(t){this.persistence=t,this.Jr=new fa,this.Yr=null}static Zr(t){return new pa(t)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),D.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,j.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return D.or([()=>D.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ma{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=K(),i=K();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ma(t,e.fromCache,r,i)}}/**
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
 */class Rv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Pv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return up()?8:l_(xt())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Rv;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(dr()<=Y.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Tn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(dr()<=Y.DEBUG&&F("QueryEngine","Query:",Tn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(dr()<=Y.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Tn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oe(e))):D.resolve())}Yi(t,e){if(Bc(e))return D.resolve(null);let r=oe(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Bi(e,null,"F"),r=oe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=K(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.ts(e,l);return this.ns(e,d,a,u.readTime)?this.Yi(t,Bi(e,null,"F")):this.rs(t,d,e,u)}))})))}Zi(t,e,r,i){return Bc(e)||i.isEqual(j.min())?D.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const a=this.ts(e,s);return this.ns(e,a,r,i)?D.resolve(null):(dr()<=Y.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(e)),this.rs(t,a,e,r_(i,-1)).next(l=>l))})}ts(t,e){let r=new wt(kh(t));return e.forEach((i,s)=>{ts(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return dr()<=Y.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Tn(e)),this.Ji.getDocumentsMatchingQuery(t,e,We.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new ot(X),this._s=new Yn(s=>sa(s),oa),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function xv(n,t,e,r){return new Cv(n,t,e,r)}async function Xh(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=K();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function kv(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,v=g.keys();let T=D.resolve();return v.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(x=>{const P=d.docVersions.get(R);Z(P!==null),x.version.compareTo(P)<0&&(g.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Zh(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Mv(n,t){const e=H(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,g)));let T=v.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(g)!==null?T=T.withResumeToken(It.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(g,T),function(x,P,S){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,T,f)&&l.push(e.Ur.updateTargetData(s,T))});let u=be(),d=K();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Dv(s,a,t.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(j.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(g=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(e.os=i,s))}function Dv(n,t,e){let r=K(),i=K();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let a=be();return e.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(j.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Nv(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Vv(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,D.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Be(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Co(n,t,e){const r=H(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!qr(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Qc(n,t,e){const r=H(n);let i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=H(u),v=g._s.get(f);return v!==void 0?D.resolve(g.os.get(v)):g.Ur.getTargetData(d,f)}(r,a,oe(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:j.min(),e?s:K())).next(l=>(Ov(r,S_(t),l),{documents:l,Ts:s})))}function Ov(n,t,e){let r=n.us.get(t)||j.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class Jc{constructor(){this.activeTargetIds=M_()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lv{constructor(){this.so=new Jc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Jc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Fv{_o(t){}shutdown(){}}/**
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
 */class Xc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gi=null;function eo(){return gi===null?gi=function(){return 268435456+Math.round(2147483648*Math.random())}():gi++,"0x"+gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Uv{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const St="WebChannelConnection";class zv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,a){const l=eo(),u=this.xo(e,r.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(e,u,d,i).then(f=>(F("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw Fn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,s,a,l){return this.Mo(e,r,i,s,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,r){const i=Bv[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=eo();return new Promise((a,l)=>{const u=new fh;u.setWithCredentials(!0),u.listenOnce(ph.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wi.NO_ERROR:const f=u.getResponseJson();F(St,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case wi.TIMEOUT:F(St,`RPC '${t}' ${s} timed out`),l(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case wi.HTTP_ERROR:const g=u.getStatus();if(F(St,`RPC '${t}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v==null?void 0:v.error;if(T&&T.status&&T.message){const R=function(P){const S=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(S)>=0?S:k.UNKNOWN}(T.status);l(new L(R,T.message))}else l(new L(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(k.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(St,`RPC '${t}' ${s} completed.`)}});const d=JSON.stringify(i);F(St,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=eo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yh(),l=gh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(St,`Creating RPC '${t}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let v=!1,T=!1;const R=new Uv({Io:P=>{T?F(St,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(v||(F(St,`Opening RPC '${t}' stream ${i} transport.`),g.open(),v=!0),F(St,`RPC '${t}' stream ${i} sending:`,P),g.send(P))},To:()=>g.close()}),x=(P,S,M)=>{P.listen(S,N=>{try{M(N)}catch(O){setTimeout(()=>{throw O},0)}})};return x(g,mr.EventType.OPEN,()=>{T||(F(St,`RPC '${t}' stream ${i} transport opened.`),R.yo())}),x(g,mr.EventType.CLOSE,()=>{T||(T=!0,F(St,`RPC '${t}' stream ${i} transport closed`),R.So())}),x(g,mr.EventType.ERROR,P=>{T||(T=!0,Fn(St,`RPC '${t}' stream ${i} transport errored:`,P),R.So(new L(k.UNAVAILABLE,"The operation could not be completed")))}),x(g,mr.EventType.MESSAGE,P=>{var S;if(!T){const M=P.data[0];Z(!!M);const N=M,O=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(O){F(St,`RPC '${t}' stream ${i} received error:`,O);const G=O.status;let W=function(y){const w=ct[y];if(w!==void 0)return qh(w)}(G),E=O.message;W===void 0&&(W=k.INTERNAL,E="Unknown error status: "+G+" with message "+O.message),T=!0,R.So(new L(W,E)),g.close()}else F(St,`RPC '${t}' stream ${i} received:`,M),R.bo(M)}}),x(l,mh.STAT_EVENT,P=>{P.stat===vo.PROXY?F(St,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===vo.NOPROXY&&F(St,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function no(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n){return new J_(n,!0)}/**
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
 */class td{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ed{constructor(t,e,r,i,s,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new td(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(Te(e.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qv extends ed{constructor(t,e,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=tv(this.serializer,t),r=function(s){if(!("targetChange"in s))return j.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?ae(a.readTime):j.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Po(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=To(u)?{documents:rv(s,u)}:{query:iv(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Hh(s,a.resumeToken);const d=Ao(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){l.readTime=qi(s,a.snapshotVersion.toTimestamp());const d=Ao(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=ov(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Po(this.serializer),e.removeTarget=t,this.a_(e)}}class $v extends ed{constructor(t,e,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Z(!!t.streamToken),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=nv(t.writeResults,t.commitTime),r=ae(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Po(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ev(this.serializer,r))};this.a_(e)}}/**
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
 */class jv extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,So(e,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(k.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,So(e,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Hv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Te(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Wv{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{yn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=H(u);d.L_.add(4),await Hr(d),d.q_.set("Unknown"),d.L_.delete(4),await ss(d)}(this))})}),this.q_=new Hv(r,i)}}async function ss(n){if(yn(n))for(const t of n.B_)await t(!0)}async function Hr(n){for(const t of n.B_)await t(!1)}function nd(n,t){const e=H(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),va(e)?_a(e):Qn(e).r_()&&ya(e,t))}function ga(n,t){const e=H(n),r=Qn(e);e.N_.delete(t),r.r_()&&rd(e,t),e.N_.size===0&&(r.r_()?r.o_():yn(e)&&e.q_.set("Unknown"))}function ya(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Qn(n).A_(t)}function rd(n,t){n.Q_.xe(t),Qn(n).R_(t)}function _a(n){n.Q_=new G_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Qn(n).start(),n.q_.v_()}function va(n){return yn(n)&&!Qn(n).n_()&&n.N_.size>0}function yn(n){return H(n).L_.size===0}function id(n){n.Q_=void 0}async function Gv(n){n.q_.set("Online")}async function Kv(n){n.N_.forEach((t,e)=>{ya(n,t)})}async function Yv(n,t){id(n),va(n)?(n.q_.M_(t),_a(n)):n.q_.set("Unknown")}async function Qv(n,t,e){if(n.q_.set("Online"),t instanceof jh&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $i(n,r)}else if(t instanceof bi?n.Q_.Ke(t):t instanceof $h?n.Q_.He(t):n.Q_.We(t),!e.isEqual(j.min()))try{const r=await Zh(n.localStore);e.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(It.EMPTY_BYTE_STRING,f.snapshotVersion)),rd(s,u);const g=new Be(f.target,u,d,f.sequenceNumber);ya(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await $i(n,r)}}async function $i(n,t,e){if(!qr(t))throw t;n.L_.add(1),await Hr(n),n.q_.set("Offline"),e||(e=()=>Zh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ss(n)})}function sd(n,t){return t().catch(e=>$i(n,e,t))}async function os(n){const t=H(n),e=Ke(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Jv(t);)try{const i=await Nv(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,Xv(t,i)}catch(i){await $i(t,i)}od(t)&&ad(t)}function Jv(n){return yn(n)&&n.O_.length<10}function Xv(n,t){n.O_.push(t);const e=Ke(n);e.r_()&&e.V_&&e.m_(t.mutations)}function od(n){return yn(n)&&!Ke(n).n_()&&n.O_.length>0}function ad(n){Ke(n).start()}async function Zv(n){Ke(n).p_()}async function t0(n){const t=Ke(n);for(const e of n.O_)t.m_(e.mutations)}async function e0(n,t,e){const r=n.O_.shift(),i=ua.from(r,t,e);await sd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await os(n)}async function n0(n,t){t&&Ke(n).V_&&await async function(r,i){if(function(a){return j_(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();Ke(r).s_(),await sd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await os(r)}}(n,t),od(n)&&ad(n)}async function Zc(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=yn(e);e.L_.add(3),await Hr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ss(e)}async function r0(n,t){const e=H(n);t?(e.L_.delete(2),await ss(e)):t||(e.L_.add(2),await Hr(e),e.q_.set("Unknown"))}function Qn(n){return n.K_||(n.K_=function(e,r,i){const s=H(e);return s.w_(),new qv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Gv.bind(null,n),Ro:Kv.bind(null,n),mo:Yv.bind(null,n),d_:Qv.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),va(n)?_a(n):n.q_.set("Unknown")):(await n.K_.stop(),id(n))})),n.K_}function Ke(n){return n.U_||(n.U_=function(e,r,i){const s=H(e);return s.w_(),new $v(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zv.bind(null,n),mo:n0.bind(null,n),f_:t0.bind(null,n),g_:e0.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await os(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ea{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,l=new Ea(t,e,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(n,t){if(Te("AsyncQueue",`${t}: ${n}`),qr(n))return new L(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Mn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||B.comparator(e.key,r.key):(e,r)=>B.comparator(e.key,r.key),this.keyedMap=gr(),this.sortedSet=new ot(this.comparator)}static emptySet(t){return new Mn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class tu{constructor(){this.W_=new ot(B.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):$():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class $n{constructor(t,e,r,i,s,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new $n(t,e,Mn.emptySet(e),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class i0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class s0{constructor(){this.queries=eu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=H(e),s=i.queries;i.queries=eu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function eu(){return new Yn(n=>xh(n),Zi)}async function ld(n,t){const e=H(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new i0,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=wa(a,`Initialization of query '${Tn(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Ia(e)}async function cd(n,t){const e=H(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function o0(n,t){const e=H(n);let r=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Ia(e)}function a0(n,t,e){const r=H(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function Ia(n){n.Y_.forEach(t=>{t.next()})}var xo,nu;(nu=xo||(xo={})).ea="default",nu.Cache="cache";class ud{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new $n(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=$n.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==xo.Cache}}/**
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
 */class hd{constructor(t){this.key=t}}class dd{constructor(t){this.key=t}}class l0{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=kh(t),this.Ra=new Mn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new tu,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,g)=>{const v=i.get(f),T=ts(this.query,g)?g:null,R=!!v&&this.mutatedKeys.has(v.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;v&&T?v.data.isEqual(T.data)?R!==x&&(r.track({type:3,doc:T}),P=!0):this.ga(v,T)||(r.track({type:2,doc:T}),P=!0,(u&&this.Aa(T,u)>0||d&&this.Aa(T,d)<0)&&(l=!0)):!v&&T?(r.track({type:0,doc:T}),P=!0):v&&!T&&(r.track({type:1,doc:v}),P=!0,(u||d)&&(l=!0)),P&&(T?(a=a.add(T),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(T,R){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return x(T)-x(R)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new $n(this.query,t.Ra,s,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new dd(r))}),this.da.forEach(r=>{t.has(r)||e.push(new hd(r))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return $n.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class c0{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class u0{constructor(t){this.key=t,this.va=!1}}class h0{constructor(t,e,r,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Yn(l=>xh(l),Zi),this.Ma=new Map,this.xa=new Set,this.Oa=new ot(B.comparator),this.Na=new Map,this.La=new fa,this.Ba={},this.ka=new Map,this.qa=qn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function d0(n,t,e=!0){const r=_d(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fd(r,t,e,!0),i}async function f0(n,t){const e=_d(n);await fd(e,t,!0,!1)}async function fd(n,t,e,r){const i=await Vv(n.localStore,oe(t)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return r&&(l=await p0(n,t,s,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&nd(n.remoteStore,i),l}async function p0(n,t,e,r,i){n.Ka=(g,v,T)=>async function(x,P,S,M){let N=P.view.ma(S);N.ns&&(N=await Qc(x.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,N)));const O=M&&M.targetChanges.get(P.targetId),G=M&&M.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(N,x.isPrimaryClient,O,G);return iu(x,P.targetId,W.wa),W.snapshot}(n,g,v,T);const s=await Qc(n.localStore,t,!0),a=new l0(t,s.Ts),l=a.ma(s.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);iu(n,e,d.wa);const f=new c0(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function m0(n,t,e){const r=H(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Zi(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Co(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ga(r.remoteStore,i.targetId),ko(r,i.targetId)}).catch(zr)):(ko(r,i.targetId),await Co(r.localStore,i.targetId,!0))}async function g0(n,t){const e=H(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ga(e.remoteStore,r.targetId))}async function y0(n,t,e){const r=b0(n);try{const i=await function(a,l){const u=H(a),d=pt.now(),f=l.reduce((T,R)=>T.add(R.key),K());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=be(),x=K();return u.cs.getEntries(T,f).next(P=>{R=P,R.forEach((S,M)=>{M.isValidDocument()||(x=x.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(P=>{g=P;const S=[];for(const M of l){const N=B_(M,g.get(M.key).overlayedDocument);N!=null&&S.push(new Qe(M.key,N,Ih(N.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,S,l)}).next(P=>{v=P;const S=P.applyToLocalDocumentSet(g,x);return u.documentOverlayCache.saveOverlays(T,P.batchId,S)})}).then(()=>({batchId:v.batchId,changes:Dh(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ot(X)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,e),await Wr(r,i.changes),await os(r.remoteStore)}catch(i){const s=wa(i,"Failed to persist write");e.reject(s)}}async function pd(n,t){const e=H(n);try{const r=await Mv(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Z(a.va):i.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await Wr(e,r,t)}catch(r){await zr(r)}}function ru(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=H(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&Ia(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _0(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let a=new ot(B.comparator);a=a.insert(s,Ct.newNoDocument(s,j.min()));const l=K().add(s),u=new rs(j.min(),new Map,new ot(X),a,l);await pd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),Ta(r)}else await Co(r.localStore,t,!1).then(()=>ko(r,t,e)).catch(zr)}async function v0(n,t){const e=H(n),r=t.batch.batchId;try{const i=await kv(e.localStore,t);gd(e,r,null),md(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(e,i)}catch(i){await zr(i)}}async function E0(n,t,e){const r=H(n);try{const i=await function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Z(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);gd(r,t,e),md(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Wr(r,i)}catch(i){await zr(i)}}function md(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function gd(n,t,e){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function ko(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||yd(n,r)})}function yd(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ga(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ta(n))}function iu(n,t,e){for(const r of e)r instanceof hd?(n.La.addReference(r.key,t),w0(n,r)):r instanceof dd?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||yd(n,r.key)):$()}function w0(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ta(n))}function Ta(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new B(st.fromString(t)),r=n.qa.next();n.Na.set(r,new u0(e)),n.Oa=n.Oa.insert(e,r),nd(n.remoteStore,new Be(oe(aa(e.path)),r,"TargetPurposeLimboResolution",ea.oe))}}async function Wr(n,t,e){const r=H(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(d=>{var f;if((d||e)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=ma.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=H(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(d,v=>D.forEach(v.$i,T=>f.persistence.referenceDelegate.addReference(g,v.targetId,T)).next(()=>D.forEach(v.Ui,T=>f.persistence.referenceDelegate.removeReference(g,v.targetId,T)))))}catch(g){if(!qr(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const T=f.os.get(v),R=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(v,x)}}}(r.localStore,s))}async function I0(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Xh(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(k.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Wr(e,r.hs)}}function T0(n,t){const e=H(n),r=e.Na.get(t);if(r&&r.va)return K().add(r.key);{let i=K();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function _d(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=pd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=T0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_0.bind(null,t),t.Ca.d_=o0.bind(null,t.eventManager),t.Ca.$a=a0.bind(null,t.eventManager),t}function b0(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=v0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=E0.bind(null,t),t}class ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=is(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return xv(this.persistence,new Pv,t.initialUser,this.serializer)}Ga(t){return new Av(pa.Zr,this.serializer)}Wa(t){return new Lv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ji.provider={build:()=>new ji};class Mo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I0.bind(null,this.syncEngine),await r0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new s0}()}createDatastore(t){const e=is(t.databaseInfo.databaseId),r=function(s){return new zv(s)}(t.databaseInfo);return function(s,a,l,u){return new jv(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,a,l){return new Wv(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>ru(this.syncEngine,e,0),function(){return Xc.D()?new Xc:new Fv}())}createSyncEngine(t,e){return function(i,s,a,l,u,d,f){const g=new h0(i,s,a,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=H(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Hr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Mo.provider={build:()=>new Mo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Te("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class A0{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=vh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=wa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ro(n,t){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function su(n,t){n.asyncQueue.verifyOperationInProgress();const e=await S0(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Zc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zc(t.remoteStore,i)),n._onlineComponents=t}async function S0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Fn("Error using user provided cache. Falling back to memory cache: "+e),await ro(n,new ji)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ro(n,new ji);return n._offlineComponents}async function Ed(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await su(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await su(n,new Mo))),n._onlineComponents}function R0(n){return Ed(n).then(t=>t.syncEngine)}async function wd(n){const t=await Ed(n),e=t.eventManager;return e.onListen=d0.bind(null,t.syncEngine),e.onUnlisten=m0.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=f0.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=g0.bind(null,t.syncEngine),e}function P0(n,t,e={}){const r=new Ee;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new vd({next:v=>{f.Za(),a.enqueueAndForget(()=>cd(s,g));const T=v.docs.has(l);!T&&v.fromCache?d.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&u&&u.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new ud(aa(l.path),f,{includeMetadataChanges:!0,_a:!0});return ld(s,g)}(await wd(n),n.asyncQueue,t,e,r)),r.promise}function C0(n,t,e={}){const r=new Ee;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new vd({next:v=>{f.Za(),a.enqueueAndForget(()=>cd(s,g)),v.fromCache&&u.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new ud(l,f,{includeMetadataChanges:!0,_a:!0});return ld(s,g)}(await wd(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Id(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new Map;/**
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
 */function Td(n,t,e){if(!e)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function x0(n,t,e,r){if(t===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function au(n){if(!B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lu(n){if(B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function as(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function Ae(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=as(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function k0(n,t){if(t<=0)throw new L(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}x0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Id((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ls{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ky;switch(r.type){case"firstParty":return new Xy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ou.get(e);r&&(F("ComponentProvider","Removing Datastore"),ou.delete(e),r.terminate())}(this),Promise.resolve()}}function M0(n,t,e,r={}){var i;const s=(n=Ae(n,ls))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Pt.MOCK_USER;else{l=rp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pt(d)}n._authCredentials=new Yy(new _h(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Je(this.firestore,t,this._query)}}class Bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new je(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class je extends Je{constructor(t,e,r){super(t,e,aa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new B(t))}withConverter(t){return new je(this.firestore,t,this._path)}}function D0(n,t,...e){if(n=ht(n),Td("collection","path",t),n instanceof ls){const r=st.fromString(t,...e);return lu(r),new je(n,null,r)}{if(!(n instanceof Bt||n instanceof je))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return lu(r),new je(n.firestore,null,r)}}function Dn(n,t,...e){if(n=ht(n),arguments.length===1&&(t=vh.newId()),Td("doc","path",t),n instanceof ls){const r=st.fromString(t,...e);return au(r),new Bt(n,null,new B(r))}{if(!(n instanceof Bt||n instanceof je))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return au(r),new Bt(n.firestore,n instanceof je?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new td(this,"async_queue_retry"),this.Vu=()=>{const r=no();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=no();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=no();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ee;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!qr(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Te("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ea.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Jn extends ls{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new uu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new uu(t),this._firestoreClient=void 0,await t}}}function N0(n,t){const e=typeof n=="object"?n:xu(),r=typeof n=="string"?n:"(default)",i=qo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ep("firestore");s&&M0(i,...s)}return i}function cs(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||V0(n),n._firestoreClient}function V0(n){var t,e,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new h_(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Id(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new A0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jn(It.fromBase64String(t))}catch(e){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new jn(It.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this._methodName=t}}/**
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
 */class Aa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */class Sa{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const O0=/^__.*__$/;class L0{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qe(t,this.data,this.fieldMask,e,this.fieldTransforms):new $r(t,this.data,e,this.fieldTransforms)}}class bd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Qe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ad(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Ra{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ra(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Hi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ad(this.Cu)&&O0.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class F0{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||is(t)}Qu(t,e,r,i=!1){return new Ra({Cu:t,methodName:e,qu:r,path:Et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hs(n){const t=n._freezeSettings(),e=is(n._databaseId);return new F0(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Pa(n,t,e,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);Ca("Data must be an object, but it was:",a,r);const l=Sd(r,a);let u,d;if(s.merge)u=new $t(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const v=Do(t,g,e);if(!a.contains(v))throw new L(k.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Pd(f,v)||f.push(v)}u=new $t(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new L0(new Ot(l),u,d)}class ds extends ba{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ds}}function B0(n,t,e,r){const i=n.Qu(1,t,e);Ca("Data must be an object, but it was:",i,r);const s=[],a=Ot.empty();gn(r,(u,d)=>{const f=xa(t,u,e);d=ht(d);const g=i.Nu(f);if(d instanceof ds)s.push(f);else{const v=Gr(d,g);v!=null&&(s.push(f),a.set(f,v))}});const l=new $t(s);return new bd(a,l,i.fieldTransforms)}function U0(n,t,e,r,i,s){const a=n.Qu(1,t,e),l=[Do(t,r,e)],u=[i];if(s.length%2!=0)throw new L(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(Do(t,s[v])),u.push(s[v+1]);const d=[],f=Ot.empty();for(let v=l.length-1;v>=0;--v)if(!Pd(d,l[v])){const T=l[v];let R=u[v];R=ht(R);const x=a.Nu(T);if(R instanceof ds)d.push(T);else{const P=Gr(R,x);P!=null&&(d.push(T),f.set(T,P))}}const g=new $t(d);return new bd(f,g,a.fieldTransforms)}function z0(n,t,e,r=!1){return Gr(e,n.Qu(r?4:3,t))}function Gr(n,t){if(Rd(n=ht(n)))return Ca("Unsupported field value:",t,n),Sd(n,t);if(n instanceof ba)return function(r,i){if(!Ad(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Gr(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return D_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pt.fromDate(r);return{timestampValue:qi(i.serializer,s)}}if(r instanceof pt){const s=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(i.serializer,s)}}if(r instanceof Aa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jn)return{bytesValue:Hh(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:da(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sa)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return la(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${as(r)}`)}(n,t)}function Sd(n,t){const e={};return Eh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):gn(n,(r,i)=>{const s=Gr(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Rd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof Aa||n instanceof jn||n instanceof Bt||n instanceof ba||n instanceof Sa)}function Ca(n,t,e){if(!Rd(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=as(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Do(n,t,e){if((t=ht(t))instanceof us)return t._internalPath;if(typeof t=="string")return xa(n,t);throw Hi("Field path arguments must be of type string or ",n,!1,void 0,e)}const q0=new RegExp("[~\\*/\\[\\]]");function xa(n,t,e){if(t.search(q0)>=0)throw Hi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new us(...t.split("."))._internalPath}catch{throw Hi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Hi(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(k.INVALID_ARGUMENT,l+n+u)}function Pd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $0 extends Cd{data(){return super.data()}}function fs(n,t){return typeof t=="string"?xa(n,t):t instanceof us?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ka{}class Ma extends ka{}function br(n,t,...e){let r=[];t instanceof ka&&r.push(t),r=r.concat(e),function(s){const a=s.filter(u=>u instanceof Na).length,l=s.filter(u=>u instanceof ps).length;if(a>1||a>0&&l>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ps extends Ma{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ps(t,e,r)}_apply(t){const e=this._parse(t);return xd(t._query,e),new Je(t.firestore,t.converter,bo(t._query,e))}_parse(t){const e=hs(t.firestore);return function(s,a,l,u,d,f,g){let v;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fu(g,f);const T=[];for(const R of g)T.push(du(u,s,R));v={arrayValue:{values:T}}}else v=du(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fu(g,f),v=z0(l,a,g,f==="in"||f==="not-in");return ut.create(d,f,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Da(n,t,e){const r=t,i=fs("where",n);return ps._create(i,r,e)}class Na extends ka{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Na(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:re.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)xd(a,u),a=bo(a,u)}(t._query,e),new Je(t.firestore,t.converter,bo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Va extends Ma{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Va(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mr(s,a)}(t._query,this._field,this._direction);return new Je(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Kn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function hu(n,t="asc"){const e=t,r=fs("orderBy",n);return Va._create(r,e)}class Oa extends Ma{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Oa(t,e,r)}_apply(t){return new Je(t.firestore,t.converter,Bi(t._query,this._limit,this._limitType))}}function H0(n){return k0("limit",n),Oa._create("limit",n,"F")}function du(n,t,e){if(typeof(e=ht(e))=="string"){if(e==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ch(t)&&e.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(st.fromString(e));if(!B.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dc(n,new B(r))}if(e instanceof Bt)return Dc(n,e._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${as(e)}.`)}function fu(n,t){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xd(n,t){const e=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class W0{convertValue(t,e="none"){switch(mn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return gn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>lt(a.doubleValue));return new Sa(s)}convertGeoPoint(t){return new Aa(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ra(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Cr(t));default:return null}}convertTimestamp(t){const e=Ge(t);return new pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=st.fromString(t);Z(Jh(r));const i=new xr(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(e)||Te(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kd extends Cd{constructor(t,e,r,i,s,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(fs("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ai extends kd{data(t={}){return super.data(t)}}class G0{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new _r(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ai(this._firestore,this._userDataWriter,r.key,r,new _r(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Ai(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _r(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ai(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _r(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:K0(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function K0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){n=Ae(n,Bt);const t=Ae(n.firestore,Jn);return P0(cs(t),n._key).then(e=>Q0(t,n,e))}class Dd extends W0{constructor(t){super(),this.firestore=t}convertBytes(t){return new jn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function ms(n){n=Ae(n,Je);const t=Ae(n.firestore,Jn),e=cs(t),r=new Dd(t);return j0(n._query),C0(e,n._query).then(i=>new G0(t,r,n,i))}function Fa(n,t,e){n=Ae(n,Bt);const r=Ae(n.firestore,Jn),i=La(n.converter,t,e);return Ba(r,[Pa(hs(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,jt.none())])}function Y0(n,t){const e=Ae(n.firestore,Jn),r=Dn(n),i=La(n.converter,t);return Ba(e,[Pa(hs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Ba(n,t){return function(r,i){const s=new Ee;return r.asyncQueue.enqueueAndForget(async()=>y0(await R0(r),i,s)),s.promise}(cs(n),t)}function Q0(n,t,e){const r=e.docs.get(t._key),i=new Dd(n);return new kd(n,i,t._key,r,new _r(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=hs(t)}set(t,e,r){this._verifyNotCommitted();const i=io(t,this._firestore),s=La(i.converter,e,r),a=Pa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,jt.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=io(t,this._firestore);let a;return a=typeof(e=ht(e))=="string"||e instanceof us?U0(this._dataReader,"WriteBatch.update",s._key,e,r,i):B0(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,jt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=io(t,this._firestore);return this._mutations=this._mutations.concat(new ca(e._key,jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function io(n,t){if((n=ht(n)).firestore!==t)throw new L(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){return cs(n=Ae(n,Jn)),new J0(n,t=>Ba(n,t))}(function(t,e=!0){(function(i){Gn=i})(Hn),On(new un("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Jn(new Qy(r.getProvider("auth-internal")),new t_(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),$e(Pc,"4.7.3",t),$e(Pc,"4.7.3","esm2017")})();const Nd={apiKey:"AIzaSyBdbve0H70D-Ch69WlaxEly7PVBFVRB5p0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:2d6f7173c8d7fab6fd9e85",measurementId:"G-80XX542QZE"};function dt(){return Nd.apiKey!=="YOUR_API_KEY"}let so=null,Ht=null,Lt=null;try{dt()?(so=Cu(Nd),Ht=Wy(so),Lt=N0(so)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const X0=new me;let Fe=null,Ar=[];function Z0(){if(!dt()||!Ht){console.warn("Firebase not configured - auth disabled");return}Ng(Ht,n=>{console.log("onAuthStateChanged fired:",n?n.email:"null"),Fe=n,console.log("Notifying",Ar.length,"listeners"),Ar.forEach(t=>t(n))})}function tE(n){return console.log("onAuthStateChange: adding listener, currentUser is:",Fe&&Fe.email),Ar.push(n),Fe&&(console.log("onAuthStateChange: immediately calling listener with user"),n(Fe)),()=>{Ar=Ar.filter(t=>t!==n)}}function Kr(){return Fe}function Xe(){return Fe!==null}async function eE(n,t,e=null){if(!dt()||!Ht)throw new Error("Firebase not configured");const r=await Pg(Ht,n,t);return e&&r.user&&await kg(r.user,{displayName:e}),r}async function nE(n,t){if(!dt()||!Ht)throw new Error("Firebase not configured");return Cg(Ht,n,t)}async function rE(){if(!dt()||!Ht)throw new Error("Firebase not configured");console.log("Initiating Google sign-in popup...");try{const n=await ey(Ht,X0);return console.log("Google sign-in successful:",n.user.email),n}catch(n){throw console.error("signInWithPopup error:",n.code,n.message),n}}async function iE(){if(!dt()||!Ht)throw new Error("Firebase not configured");return Vg(Ht)}async function sE(n){if(!dt()||!Ht)throw new Error("Firebase not configured");return Rg(Ht,n)}Z0();function gs(n,t="settings"){const e=Kr();return!e||!Lt?null:Dn(Lt,"users",e.uid,n,t)}function ys(n){const t=Kr();return!t||!Lt?null:D0(Lt,"users",t.uid,n)}async function Vd(){if(!dt())return null;const n=gs("decision");if(!n)return null;try{const t=await Md(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading decision data:",t),null}}async function oE(n){if(!dt())return;const t=gs("decision");if(t)try{await Fa(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving decision data:",e),e}}async function Od(n={}){if(!dt())return[];const t=ys("history");if(!t)return[];try{let e=br(t,hu("date",n.sortDesc?"desc":"asc"));n.taxYear&&(e=br(t,Da("taxYear","==",n.taxYear),hu("date",n.sortDesc?"desc":"asc"))),n.limit&&(e=br(e,H0(n.limit)));const r=await ms(e),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){return console.error("Error loading decision history:",e),[]}}async function aE(n){if(!dt())return null;const t=ys("history");if(!t)return null;try{const e=br(t,Da("date","==",n.date)),r=await ms(e);if(!r.empty){const s=r.docs[0].id;return await Fa(Dn(Lt,"users",Kr().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await Y0(t,{...n,createdAt:new Date().toISOString()})).id}catch(e){throw console.error("Error adding history record:",e),e}}async function lE(n){if(!dt())return;const t=ys("history");if(t)try{const e=br(t,Da("date","==",n)),r=await ms(e),i=Wi(Lt);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(e){throw console.error("Error deleting history record:",e),e}}async function cE(){if(!dt())return;const n=ys("history");if(n)try{const t=await ms(n),e=500,r=[];let i=Wi(Lt),s=0;t.forEach(a=>{i.delete(a.ref),s++,s>=e&&(r.push(i),i=Wi(Lt),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(t){throw console.error("Error clearing history:",t),t}}async function uE(){if(!dt())return null;const n=gs("stress");if(!n)return null;try{const t=await Md(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading stress data:",t),null}}async function Ld(n){if(!dt())return;const t=gs("stress");if(t)try{await Fa(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving stress data:",e),e}}async function hE(){if(!dt())return;const n=Kr();if(!(!n||!Lt))try{await cE();const t=Wi(Lt);t.delete(Dn(Lt,"users",n.uid,"decision","settings")),t.delete(Dn(Lt,"users",n.uid,"stress","settings")),t.delete(Dn(Lt,"users",n.uid,"profile","settings")),await t.commit(),console.log("All user data wiped successfully")}catch(t){throw console.error("Error wiping user data:",t),t}}async function dE(){if(!dt())return!1;const n=await Vd(),t=await Od({limit:1});return n!==null||t.length>0}let Ft=null,Nn=null;const Fd=5e3;function Si(){return{settings:{equityMin:Rt.EQUITY_MIN,bondMin:Rt.BOND_MIN,cashTarget:Rt.CASH_TARGET,duration:Rt.DURATION_YEARS,baseSalary:Rt.BASE_SALARY,protectionFactor:Rt.PROTECTION_FACTOR,recoveryBuffer:Rt.RECOVERY_BUFFER,consecutiveLimit:Rt.CONSECUTIVE_LIMIT,startDate:null},taxYears:{},history:[],lastModified:null,checksum:null}}function _s(){return dt()&&Xe()}function vs(){return Ft&&Nn&&Date.now()-Nn<Fd?Ft:Si()}async function Ua(){if(Ft&&Nn&&Date.now()-Nn<Fd)return Ft;if(!_s())return console.warn("Firebase not available - returning defaults"),Si();try{const n=await Vd(),t=await Od();if(n){const e={settings:n.settings||Si().settings,taxYears:n.taxYears||{},history:t||[],lastModified:n.lastModified,checksum:n.checksum};return Ft=e,Nn=Date.now(),e}}catch(n){console.error("Error loading from Firebase:",n)}return Si()}async function Bd(n){if(!_s())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=fE(n),await oE({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),Ft=n,Nn=Date.now()}catch(t){throw console.error("Error saving to Firebase:",t),new Error("Failed to save decision data")}}function fE(n){const t={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return Eu(t)}function pE(){return vs().settings}async function mE(){return(await Ua()).settings}async function za(n){const t=await Ua();t.settings={...t.settings,...n},await Bd(t)}function qa(n){const e=vs().taxYears[n];return e||{pa:Vt.PERSONAL_ALLOWANCE,brl:Vt.BASIC_RATE_LIMIT,hrl:Vt.HIGHER_RATE_LIMIT,cpi:.025,other:0,statePension:0,isaBalance:0,isaMonthlyDraw:0}}async function gE(n,t){const e=await Ua();e.taxYears[n]={...qa(n),...t},await Bd(e)}function yE(){return vs().taxYears}function Ud(n={}){let e=[...vs().history];return n.taxYear&&(e=e.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(e=e.filter(r=>r.date>=n.startDate)),n.endDate&&(e=e.filter(r=>r.date<=n.endDate)),n.sortDesc?e.sort((r,i)=>i.date.localeCompare(r.date)):e.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(e=e.slice(0,n.limit)),e}async function _E(n){if(!_s())throw new Error("Must be logged in to save history");if(await aE(n),Ft){const t=Ft.history.findIndex(e=>e.date===n.date);t>=0?Ft.history[t]=n:Ft.history.push(n),Ft.history.sort((e,r)=>e.date.localeCompare(r.date))}}async function vE(n){if(!_s())throw new Error("Must be logged in to delete history");await lE(n),Ft&&(Ft.history=Ft.history.filter(t=>t.date!==n))}function EE(n){return Ud({taxYear:n})}function wE(n){const{date:t,equity:e,bond:r,cash:i,isaBalance:s=0}=n,a=pE(),l=typeof t=="string"?Of(t):t,u=Df(l),d=qa(u),f=EE(u),g=a.startDate||(f.length>0?f[0].date:t),v=Ff(g,l),T=f.map(W=>d.cpi);for(let W=0;W<v;W++)T[W]||T.unshift(d.cpi);const R=$f(T),x=_u(a,v,R),P=Hf({equity:e,bond:r,adjEquityMin:x.equity,adjBondMin:x.bond,adjCashTarget:x.cash,priorHistory:f,consecutiveLimit:a.consecutiveLimit,recoveryBuffer:a.recoveryBuffer}),S=Uf({equity:e,bond:r,cash:i,isaBalance:s,baseSalary:a.baseSalary,cumulativeInflation:R,yearlyInflation:T,other:d.other,statePension:d.statePension,statePensionYear:a.statePensionYear||12,yearNumber:v,pa:d.pa,brl:d.brl,hrl:d.hrl,taxMode:a.taxMode||"inflates",currentDate:l,taxYearHistory:f,inProtection:P.inProtection,protectionFactor:a.protectionFactor,adjEquityMin:x.equity,adjBondMin:x.bond}),M=Wf({drawAmount:S.monthlySipp+S.boostAmount,equity:e,bond:r,cash:i,adjEquityMin:x.equity,adjBondMin:x.bond,adjCashTarget:x.cash,inProtection:P.inProtection}),N=Gf({equity:e,bond:r,cash:i,adjEquityMin:x.equity,adjBondMin:x.bond,adjCashTarget:x.cash,inProtection:P.inProtection}),O=IE({recommendation:S,protectionStatus:P,glidepaths:x,funds:{equity:e,bond:r,cash:i},withdrawalSource:M});return Cf({date:typeof t=="string"?t:t.toISOString().slice(0,7),taxYear:u,yearNumber:v,monthInTaxYear:Lf(l),remainingMonths:Bo(l),equity:e,bond:r,cash:i,isa:s,adjEquityMin:x.equity,adjBondMin:x.bond,adjCashTarget:x.cash,pa:S.taxInfo.pa,brl:S.taxInfo.brl,hrl:S.taxInfo.hrl,other:S.monthlyOther,statePension:S.monthlyState,sippDraw:S.monthlySipp+S.boostAmount,isaDraw:S.monthlyIsa,totalMonthlyNet:S.monthlyNet,taxEfficient:S.mode==="tax-efficient",annualTaxableSoFar:S.taxInfo.annualTaxable,headroomToBRL:S.taxInfo.headroomToBRL,inProtection:P.inProtection,protectionReason:P.reason,consecutiveCashDraws:P.consecutiveCashDraws,boostAmount:S.boostAmount,boostEligible:S.taxBoostEligible,source:M.source,drawFromEquity:M.fromEquity,drawFromBond:M.fromBond,drawFromCash:M.fromCash,rebalanceNeeded:N.length>0,rebalanceActions:N.map(W=>W.action),alerts:O,calculationDetails:{mode:S.mode,reason:S.reason,isaNeededMonthly:S.isaNeededMonthly,totalIsaNeeded:S.totalIsaNeeded,hasSufficientIsa:S.hasSufficientIsa,cumulativeInflation:R,yearlyInflation:T,glidepaths:x,protectionStatus:P,taxInfo:S.taxInfo}})}function IE(n){const{recommendation:t,protectionStatus:e,glidepaths:r,funds:i,withdrawalSource:s}=n,a=[];e.inProtection&&a.push(rn(`Protection Mode Active: ${e.reason}`,Yt.WARNING,"protection-active")),e.canExitProtection&&a.push(rn("Exiting protection mode - growth funds recovered",Yt.SUCCESS,"protection-exit")),t.warning&&a.push(rn(t.warning,Yt.WARNING,"insufficient-isa")),t.boostAmount>0&&a.push(rn(`Tax Boost: +£${Math.round(t.boostAmount).toLocaleString()}/mo (${t.boostReason})`,Yt.INFO,"tax-boost")),t.isaUsedForTopUp&&t.monthlyIsa>0&&a.push(rn(`Using £${Math.round(t.monthlyIsa).toLocaleString()} ISA top-up to stay tax-efficient`,Yt.INFO,"isa-topup"));const l=i.cash-r.cash;return l<0&&a.push(rn(`Cash £${Math.round(Math.abs(l)).toLocaleString()} below target - consider topping up`,Yt.DANGER,"low-cash")),s.shortfall>0&&a.push(rn(`Withdrawal shortfall: £${Math.round(s.shortfall).toLocaleString()} could not be covered`,Yt.DANGER,"shortfall")),a}function TE(n){const t=xf(n);t.stdSipp=n.sippDraw-(n.boostAmount||0),_E(t)}function $a(n,t,e=0){const r=vu(e);let i=n.equityStart,s=n.bondStart,a=n.cashStart,l=n.hodlEnabled?n.hodlStart!==void 0?n.hodlStart:n.hodlValue:0,u=0,d=null,f=0,g=0,v=0,T=0,R=!1,x=!1,P=null,S=0,M=-1;const N=[],O=[];let G=1,W=.025;N.push({year:0,month:0,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let E=0;E<n.years*12;E++){const m=Math.floor(E/12),y=E%12,w=y>=3?m:m-1;if(w!==M&&(S=0,M=w),E>0&&E%12===0){const nt=t.inflation[m]||.025;O.push(nt),G*=1+nt}const I=t.equity[m]||0,A=t.inflation[m]||.025,_=Pn(n.equityMin,m,n.duration,G,!0),Dt=Pn(n.bondMin,m,n.duration,G,!0),Wt=Pn(n.cashTarget,m,n.duration,G,!1),Jt=AE(n,m,G,O),Ut=Jt;let ft=R?Jt*n.protectionMult:Jt;R&&(S+=Ut-ft);const mt=Math.pow(1+I,1/12)-1,_n=bE(A,I,W,r)/12,Gt=Math.pow(1+Math.max(.005,A+.012),1/12)-1;if(i*=1+mt,s*=1+_n,a*=1+Gt,l>0){const Zt=(r()-.5)*2*.06;let zt=0;I<-.1?zt=Math.min(.15,Math.abs(I)*.4):I<-.05&&(zt=Math.abs(I)*.2);let Kt=.069+Zt+zt;Kt=Math.max(-.08,Math.min(.18,Kt)),l*=1+Math.pow(1+Kt,1/12)-1}W=A;const tt=i+s,Xt=_+Dt;R&&tt>Xt+5e3&&(R=!1,T=0,g=Math.max(g,v),v=0),R&&(f++,v++);let Nt=0;if(!R&&S>0&&tt>Xt+15e3){let nt=y>=3?15-y:3-y;nt<1&&(nt=1);const Ce=tt-Xt-15e3,Zt=Math.min(S/nt,Ce/nt),zt=Ut*.5;Nt=Math.min(Zt,zt),Nt>50&&(ft+=Nt,S-=Nt)}let he="Growth";if(!R&&tt>=Xt+ft){const nt=Math.max(0,i-_),Ce=Math.max(0,s-Dt),Zt=nt+Ce;if(Zt>0){if(i-=ft*nt/Zt,s-=ft*Ce/Zt,T=0,he="Growth",a<Wt){const zt=tt-Xt-ft;if(zt>5e3){const Kt=Math.min((Wt-a)*.3,zt*.5);i-=Kt*nt/Zt,s-=Kt*Ce/Zt,a+=Kt}}}else a-=ft,he="Cash"}else if(a>=ft)a-=ft,T++,he="Cash",!n.disableProtection&&T>=n.consecutiveLimit&&(R=!0);else{const nt=ft-a;a=0,s>nt?(s-=nt,he="Bond"):i>nt?(i-=nt,he="Equity"):l>nt?(l-=nt,u+=nt,d===null&&(d=E),he="HODL"):(x=!0,P=E)}if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(y===0||E===n.years*12-1||x)&&N.push({year:m+y/12,month:E,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:ft,boostAmount:Nt,source:he,inProtection:R,equityMin:_,bondMin:Dt,cashMax:Wt}),x)break}return g=Math.max(g,v),{failed:x,years:x?P/12:n.years,failMonth:P,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,finalHodl:l,protMonths:f,maxConsec:g,hodlUsed:u,hodlUsedMonth:d,hist:N,seed:e}}function bE(n,t,e,r){let i=.15,s=.3,a=.2,l=.1,u=.1,d=.15;const f=e!==void 0?e:n,g=f>.045,v=f>.07;if(g){const N=r()>.3?1:.5;v?(i=.15+.35*N,s=.3-.2*N,d=.15-.1*N,l=.1+.05*N):(i=.15+.2*N,s=.3-.1*N,d=.15-.05*N)}g&&r()<.15&&(i=.2,s=.25,d=.12);const T=n+.005+hr(0,.03,r),R=.04-(n>.04?(n-.04)*.5:0)+hr(0,.05,r),x=.03+n*.3+hr(0,.08,r),P=n*.8+hr(0,.15,r),S=Math.max(.005,n+.005),M=t*.5+hr(0,.02,r);return i*T+s*R+a*x+l*P+u*S+d*M}function AE(n,t,e,r){n.taxMode==="frozen"?n.pa:n.pa*e;const i=n.taxMode==="frozen"?n.brl:n.brl*e,s=n.baseSalary*e;let a=n.other;for(const f of r)a*=1+Math.min(f,.04);const l=t>=n.statePensionYear?n.statePension*e:0,u=a+l;return Math.max(0,Math.min(i,s)-u)/12}function SE(n,t=1e3){const e=Object.keys(Ri).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<t;i++){const s=vu(i*12345),a={equity:{},inflation:{}};for(let l=0;l<n.years;l++){const u=e[Math.floor(s()*e.length)];a.equity[l]=Ri[u],a.inflation[l]=gu[u]||.025}r.push($a(n,a,i))}return r}function RE(n){const t=Object.keys(Ri).map(Number).sort((i,s)=>i-s),e=Math.max(...t),r=[];for(const i of t){if(i+n.years-1>e)continue;const s={equity:{},inflation:{}};for(let l=0;l<n.years;l++)s.equity[l]=Ri[i+l]||0,s.inflation[l]=gu[i+l]||.025;const a=$a(n,s,i);a.startYear=i,r.push(a)}return r}function PE(n,t){const e={equity:{},inflation:{}};for(let r=0;r<n.years;r++)e.equity[r]=t.equity[r%t.equity.length],e.inflation[r]=t.inflation[r%t.inflation.length];return $a(n,e,999)}function CE(n){const t=n.filter(e=>e.failed).length;return(n.length-t)/n.length*100}function zd(n){const t=n.filter(l=>!l.failed),e=n.filter(l=>l.failed),r=n.map(l=>l.years).sort((l,u)=>l-u),i=t.map(l=>l.final).sort((l,u)=>l-u),s=n.map(l=>l.protMonths).sort((l,u)=>l-u),a=(l,u)=>l[Math.floor(l.length*u)]||0;return{total:n.length,successCount:t.length,failCount:e.length,successRate:CE(n),survival:{p5:a(r,.05),p10:a(r,.1),p25:a(r,.25),p50:a(r,.5),p75:a(r,.75),p90:a(r,.9),p95:a(r,.95),min:r[0],max:r[r.length-1]},finalValue:{p5:a(i,.05),p10:a(i,.1),p25:a(i,.25),p50:a(i,.5),p75:a(i,.75),p90:a(i,.9),p95:a(i,.95),min:i[0]||0,max:i[i.length-1]||0,avg:t.reduce((l,u)=>l+u.final,0)/(t.length||1)},minYears:r[0],p10Years:a(r,.1),medianYears:a(r,.5),medianFinal:a(i,.5),p10Final:a(i,.1),p90Final:a(i,.9),avgFinal:t.reduce((l,u)=>l+u.final,0)/(t.length||1),protection:{runsWithProtection:n.filter(l=>l.protMonths>0).length,pctWithProtection:n.filter(l=>l.protMonths>0).length/n.length*100,avgMonths:s.reduce((l,u)=>l+u,0)/n.length,maxMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),p50Months:a(s,.5),p90Months:a(s,.9),p95Months:a(s,.95)},runsWithProtection:n.filter(l=>l.protMonths>0).length,avgProtMonths:s.reduce((l,u)=>l+u,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),hodl:{runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,pctUsingHodl:n.filter(l=>l.hodlUsed>0).length/n.length*100,avgUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxUsed:Math.max(...n.map(l=>l.hodlUsed||0))},runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,avgHodlUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxHodlUsed:Math.max(...n.map(l=>l.hodlUsed||0)),failures:e.map(l=>({seed:l.seed,startYear:l.startYear,years:l.years,failMonth:l.failMonth,protMonths:l.protMonths}))}}let Ue=null,cn=null;const qd=5e3;function Vn(){return{settings:{equityMin:Rt.EQUITY_MIN,bondMin:Rt.BOND_MIN,cashTarget:Rt.CASH_TARGET,duration:Rt.DURATION_YEARS,baseSalary:Rt.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:Vt.PERSONAL_ALLOWANCE,brl:Vt.BASIC_RATE_LIMIT,hrl:Vt.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:Hs.PROTECTION_MULTIPLIER,consecutiveLimit:Rt.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:Hs.HODL_ENABLED,hodlValue:Hs.HODL_VALUE},lastModified:null,checksum:null}}function ja(){return dt()&&Xe()}function xE(){Ue=null,cn=null}function kE(){return Ue&&cn&&Date.now()-cn<qd?Ue:Vn()}async function $d(){if(Ue&&cn&&Date.now()-cn<qd)return Ue;if(!ja())return console.warn("Firebase not available - returning defaults"),Vn();try{const n=await uE();if(n){const t={settings:n.settings||Vn().settings,lastModified:n.lastModified,checksum:n.checksum};return Ue=NE(t),cn=Date.now(),Ue}}catch(n){console.error("Error loading stress data from Firebase:",n)}return Vn()}async function ME(n){if(!ja())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=DE(n),await Ld({settings:n.settings,lastModified:n.lastModified,checksum:n.checksum}),Ue=n,cn=Date.now()}catch(t){throw console.error("Error saving stress data to Firebase:",t),new Error("Failed to save stress data")}}function DE(n){return Eu(n.settings)}function NE(n){const t={...Vn()};return n.settings&&(t.settings={...t.settings,...n.settings},n.settings.pacwMin!==void 0&&n.settings.equityMin===void 0&&(t.settings.equityMin=n.settings.pacwMin),n.settings.cgtMin!==void 0&&n.settings.bondMin===void 0&&(t.settings.bondMin=n.settings.cgtMin),n.settings.csh2Target!==void 0&&n.settings.cashTarget===void 0&&(t.settings.cashTarget=n.settings.csh2Target),t.settings.hodlEnabled===void 0&&(t.settings.hodlEnabled=!1),t.settings.hodlValue===void 0&&(t.settings.hodlValue=25e3)),t.lastModified=n.lastModified,t.checksum=n.checksum,t}function VE(){return kE().settings}async function Es(){return(await $d()).settings}async function Ha(n){const t=await $d();t.settings={...t.settings,...n},await ME(t)}async function OE(){if(!ja())throw new Error("Must be logged in to reset settings");const n=Vn();await Ld({settings:n.settings,lastModified:new Date().toISOString()}),xE()}function Wa(n={}){const t=VE();return{equityStart:n.equityStart??t.equityMin,bondStart:n.bondStart??t.bondMin,cashStart:n.cashStart??t.cashTarget,equityMin:t.equityMin,bondMin:t.bondMin,cashTarget:t.cashTarget,years:n.years??t.duration,duration:t.duration,baseSalary:t.baseSalary,other:t.other,statePension:t.statePension,statePensionYear:t.statePensionYear,pa:t.pa,brl:t.brl,hrl:t.hrl,taxMode:t.taxMode,protectionMult:t.protectionMult,consecutiveLimit:t.consecutiveLimit,disableProtection:t.disableProtection,hodlEnabled:t.hodlEnabled,hodlValue:t.hodlValue}}function U(n,t=null){const e=Math.abs(n),r=t!==null?t:e<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function jd(n,t){const e=LE(n);t.innerHTML=e}function LE(n){const t=n,e=t.calculationDetails||{};let r="";const i=t.taxEfficient?"success":"warning",s=t.taxEfficient?"Tax-Efficient Mode":"Standard Mode",a=t.taxEfficient?"✓":"!";if(r+=`<div class="decision-mode ${i}">
    <span class="mode-icon">${a}</span>
    <span class="mode-label">${s}</span>
    ${t.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,t.alerts&&t.alerts.length>0){r+='<div class="alerts">';for(const P of t.alerts){const S=FE(P.severity);r+=`<div class="alert ${S}">${P.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${U(t.sippDraw)}</span>`,r+="</div>",t.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${U(t.isaDraw)}</span>`,r+="</div>"),t.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${U(t.other)}</span>`,r+="</div>"),t.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${U(t.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const l=t.sippDraw+t.isaDraw+t.other+t.statePension;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${U(l)}</span>`,r+="</div>",t.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${U(t.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${t.source.toLowerCase()}">${t.source}</div>`,t.source==="Growth"&&(t.drawFromEquity>0||t.drawFromBond>0)&&(r+='<div class="source-breakdown">',t.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${U(t.drawFromEquity)}</div>`),t.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${U(t.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const u=t.equity+t.bond+t.cash,d=t.adjEquityMin+t.adjBondMin+t.adjCashTarget,f=u-d,g=d>0?f/d*100:0;r+='<div class="fund-grid">';const v=t.equity-t.adjEquityMin;r+=oo("Equity",t.equity,t.adjEquityMin,v);const T=t.bond-t.adjBondMin;r+=oo("Bond",t.bond,t.adjBondMin,T);const R=t.cash-t.adjCashTarget;r+=oo("Cash",t.cash,t.adjCashTarget,R),r+="</div>";const x=f>=0?"healthy":"warning";if(r+=`<div class="overall-status ${x}">`,r+=`<span>Total Surplus: ${U(f)}</span>`,r+=`<span>(${g.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-grid">',r+=`<div class="tax-item"><span>Personal Allowance:</span><span>${U(t.pa)}</span></div>`,r+=`<div class="tax-item"><span>Basic Rate Limit:</span><span>${U(t.brl)}</span></div>`,e.taxInfo&&(r+=`<div class="tax-item"><span>Projected Annual Taxable:</span><span>${U(e.taxInfo.annualTaxable)}</span></div>`,r+=`<div class="tax-item"><span>Headroom to BRL:</span><span>${U(e.taxInfo.headroomToBRL)}</span></div>`,r+=`<div class="tax-item"><span>Estimated Annual Tax:</span><span>${U(e.taxInfo.annualTax)}</span></div>`),r+="</div>",r+="</div>",t.rebalanceNeeded&&t.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const P of t.rebalanceActions)r+=`<li>${P}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${e.reason||"Standard calculation based on your settings."}</p>`,!e.hasSufficientIsa&&e.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${U(e.totalIsaNeeded)} in your ISA (${t.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(e,null,2)+"</pre>",r+="</details>",r}function oo(n,t,e,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${U(t)}</div>
    <div class="fund-min">Min: ${U(e)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${U(r)}</div>
  </div>`}function FE(n){switch(n){case Yt.DANGER:return"alert-danger";case Yt.WARNING:return"alert-warning";case Yt.SUCCESS:return"alert-success";case Yt.INFO:default:return"alert-info"}}function BE(){return`
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
  `}const UE={currentDecision:null,hasUnsavedChanges:!1,activeTab:"decision"};function zE(n){try{const t=wE(n);UE.currentDecision=t;const e=document.getElementById("decisionOutput");return e&&jd(t,e),t}catch(t){return console.error("Decision calculation error:",t),$E("Failed to calculate decision: "+t.message),null}}function Hd(n={}){const t=Wa(n),e=SE(t),r=zd(e);return{results:e,stats:r,config:t}}function Wd(n={}){const t=Wa(n),e=RE(t),r=zd(e);return{results:e,stats:r,config:t}}function qE(n={}){const t=Wa(n),e={};for(const[r,i]of Object.entries(kf))e[r]={...i,result:PE(t,i)};return e}function $E(n){console.error(n),alert(n)}let le=null,ao=null,Sn=!1;function jE(n,t){console.log("initAuthScreen: initializing"),le=n,ao=t,Sn=!1,tE(e=>{console.log("AuthScreen: auth state change received:",e?e.email:"null","processed:",Sn),e&&ao&&!Sn?(console.log("AuthScreen: calling onAuthSuccessCallback"),Sn=!0,ao(e)):e?console.log("AuthScreen: skipping callback, already processed or no callback"):(Sn=!1,console.log("AuthScreen: user signed out, reset authProcessed"))}),Gd(),console.log("initAuthScreen: complete")}function Gd(){if(le){if(!dt()){le.innerHTML=`
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
    `;return}le.innerHTML=`
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
  `,HE()}}function HE(){const n=le.querySelectorAll(".auth-screen-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),s.classList.add("active");const a=document.getElementById("signinForm"),l=document.getElementById("signupForm");s.dataset.tab==="signin"?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block"),Yr()})}),document.getElementById("signinForm").addEventListener("submit",WE),document.getElementById("signupForm").addEventListener("submit",GE),document.getElementById("forgotPasswordBtn").addEventListener("click",KE),document.getElementById("googleSigninBtn").addEventListener("click",YE)}function He(n){const t=document.getElementById("authScreenError");t&&(t.textContent=n,t.style.display="block")}function Yr(){const n=document.getElementById("authScreenError");n&&(n.style.display="none")}async function WE(n){n.preventDefault(),Yr();const t=document.getElementById("signinEmail").value.trim(),e=document.getElementById("signinPassword").value;if(!t||!e){He("Please enter email and password");return}try{await nE(t,e)}catch(r){console.error("Sign in error:",r),He(ws(r.code))}}async function GE(n){n.preventDefault(),Yr();const t=document.getElementById("signupName").value.trim(),e=document.getElementById("signupEmail").value.trim(),r=document.getElementById("signupPassword").value;if(!t||!e||!r){He("Please fill in all fields");return}if(r.length<6){He("Password must be at least 6 characters");return}try{await eE(e,r,t)}catch(i){console.error("Sign up error:",i),He(ws(i.code))}}async function KE(){Yr();const n=document.getElementById("signinEmail").value.trim();if(!n){He("Please enter your email address first");return}try{await sE(n),alert("Password reset email sent. Check your inbox.")}catch(t){console.error("Reset password error:",t),He(ws(t.code))}}async function YE(){Yr();try{await rE()}catch(n){console.error("Google sign in error:",n),He(ws(n.code))}}function ws(n){return{"auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email","auth/weak-password":"Password is too weak","auth/operation-not-allowed":"Sign in method not enabled","auth/popup-closed-by-user":"Sign in cancelled","auth/popup-blocked":"Sign in popup was blocked","auth/too-many-requests":"Too many attempts. Please try again later.","auth/invalid-credential":"Invalid email or password"}[n]||"An error occurred. Please try again."}function No(){console.log("hideAuthScreen: hiding auth screen, element=",!!le),le&&(le.style.display="none",console.log("hideAuthScreen: set display to none"))}function QE(){Sn=!1,le&&(le.style.display="block",Gd())}function JE(){return`
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
  `}let Ye=null,Vo=null,z={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35},pe="intro",_t=1;function Oo(n,t){Ye=n,Vo=t,Ne()}function Ne(){Ye&&(pe==="intro"?XE():pe==="stress"?ew():pe==="decision"&&rw())}function XE(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Welcome to Pension Planner</div>
        <div class="wizard-subtitle">A tool to help you plan and manage your SIPP pension drawdown</div>

        <div class="wizard-progress">
          ${Ga(2,_t)}
        </div>

        ${_t===1?ZE():tw()}
      </div>
    </div>
  `,Ka()}function ZE(){return`
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
  `}function tw(){return`
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
  `}function ew(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Stress Tester Setup</div>
        <div class="wizard-subtitle">Let's set up your pension simulation in a few simple steps.</div>

        <div class="wizard-progress">
          ${Ga(6,_t)}
        </div>

        ${nw(_t)}
      </div>
    </div>
  `,Ka()}function nw(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            Think of this as your "salary" in retirement. This is the total amount before tax that you want to receive each year.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizBaseSalary" value="${z.baseSalary}">
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
            <input type="number" id="wizOther" value="${z.otherIncome}">
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
            <input type="number" id="wizStatePension" value="${z.statePension}">
            <span class="wizard-unit">per year</span>
          </div>
          <div class="wizard-input">
            <span class="wizard-unit">Starting in year</span>
            <input type="number" id="wizStatePensionYear" value="${z.statePensionYear}" style="max-width: 80px;">
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
                <input type="number" id="wizEquityMin" value="${z.equityMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds (Medium Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizBondMin" value="${z.bondMin}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash (Low Risk)</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizCashTarget" value="${z.cashTarget}">
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
            <input type="number" id="wizDuration" value="${z.duration}" style="max-width: 100px;">
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
              <option value="inflates" ${z.taxMode==="inflates"?"selected":""}>Standard (rise with inflation)</option>
              <option value="frozen" ${z.taxMode==="frozen"?"selected":""}>Frozen (stay at current levels)</option>
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
      `;default:return""}}function rw(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Decision Tool Setup</div>
        <div class="wizard-subtitle">Now let's set up the tool you'll use each month once you're retired.</div>

        <div class="wizard-progress">
          ${Ga(4,_t)}
        </div>

        ${iw(_t)}
      </div>
    </div>
  `,Ka()}function iw(n){switch(n){case 1:return`
        <div class="wizard-step">
          <div class="wizard-step-title">How much money do you want each year?</div>
          <div class="wizard-step-desc">
            This is your target "salary" from your pension. The tool will calculate how much to withdraw each month.
          </div>

          <div class="wizard-input">
            <span class="wizard-unit">£</span>
            <input type="number" id="wizDBaseSalary" value="${z.decisionSalary}">
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
                <input type="number" id="wizDEquityMin" value="${z.decisionEquity}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Bonds</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDBondMin" value="${z.decisionBond}">
              </div>
            </div>
            <div class="wizard-grid-item">
              <label>Cash</label>
              <div class="wizard-input">
                <span class="wizard-unit">£</span>
                <input type="number" id="wizDCashTarget" value="${z.decisionCash}">
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
            <input type="number" id="wizDDuration" value="${z.decisionDuration}" style="max-width: 100px;">
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
      `;default:return""}}function Ga(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function Ka(){Ye.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>sw(t.dataset.action))})}function sw(n){switch(Kd(),n){case"skip-all":lo();break;case"next":pe==="intro"?_t<2&&(_t++,Ne()):pe==="stress"?_t<6&&(_t++,Ne()):pe==="decision"&&_t<4&&(_t++,Ne());break;case"back":_t>1&&(_t--,Ne());break;case"start-stress":pe="stress",_t=1,Ne();break;case"skip-stress":pe="decision",_t=1,z.decisionSalary=z.baseSalary,z.decisionEquity=z.equityMin,z.decisionBond=z.bondMin,z.decisionCash=z.cashTarget,z.decisionDuration=z.duration,Ne();break;case"finish-stress":pe="decision",_t=1,z.decisionSalary=z.baseSalary,z.decisionEquity=z.equityMin,z.decisionBond=z.bondMin,z.decisionCash=z.cashTarget,z.decisionDuration=z.duration,Ne();break;case"skip-decision":lo();break;case"finish":lo();break}}function Kd(){const n=document.getElementById("wizBaseSalary");n&&(z.baseSalary=parseFloat(n.value)||3e4);const t=document.getElementById("wizOther");t&&(z.otherIncome=parseFloat(t.value)||0);const e=document.getElementById("wizStatePension");e&&(z.statePension=parseFloat(e.value)||12e3);const r=document.getElementById("wizStatePensionYear");r&&(z.statePensionYear=parseInt(r.value)||12);const i=document.getElementById("wizEquityMin");i&&(z.equityMin=parseFloat(i.value)||25e4);const s=document.getElementById("wizBondMin");s&&(z.bondMin=parseFloat(s.value)||2e5);const a=document.getElementById("wizCashTarget");a&&(z.cashTarget=parseFloat(a.value)||5e4);const l=document.getElementById("wizDuration");l&&(z.duration=parseInt(l.value)||35);const u=document.getElementById("wizTaxMode");u&&(z.taxMode=u.value);const d=document.getElementById("wizDBaseSalary");d&&(z.decisionSalary=parseFloat(d.value)||3e4);const f=document.getElementById("wizDEquityMin");f&&(z.decisionEquity=parseFloat(f.value)||25e4);const g=document.getElementById("wizDBondMin");g&&(z.decisionBond=parseFloat(g.value)||2e5);const v=document.getElementById("wizDCashTarget");v&&(z.decisionCash=parseFloat(v.value)||5e4);const T=document.getElementById("wizDDuration");T&&(z.decisionDuration=parseInt(T.value)||35)}function lo(){Kd(),Vo&&Vo(z)}function ow(){Ye&&(Ye.style.display="none")}function aw(){return`
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
  `}const it={primary:"#6366f1",success:"#22c55e",warning:"#f59e0b",danger:"#ef4444",muted:"#6b7280",grid:"#e5e7eb",bg:"#ffffff",text:"#1f2937",trajectory:"rgba(99, 102, 241, 0.2)",trajectoryFailed:"rgba(239, 68, 68, 0.3)"};function lw(n,t,e={}){const r=n.getContext("2d"),{width:i,height:s}=n,a={top:40,right:30,bottom:60,left:80},l=i-a.left-a.right,u=s-a.top-a.bottom;r.fillStyle=it.bg,r.fillRect(0,0,i,s);const d=e.years||35,f={};for(let S=0;S<=d;S++)f[S]=[];t.forEach(S=>{S.hist.forEach(M=>{const N=Math.floor(M.year);f[N]!==void 0&&f[N].push(M.total)})});const g=[];for(let S=0;S<=d;S++){const M=f[S].sort((O,G)=>O-G);if(M.length===0)continue;const N=O=>M[Math.floor(M.length*O)]||0;g.push({year:S,p5:N(.05),p10:N(.1),p25:N(.25),p50:N(.5),p75:N(.75),p90:N(.9),p95:N(.95)})}if(g.length===0)return;const v=Math.max(...g.map(S=>S.p95))*1.1,T=0,R=S=>a.left+S/d*l,x=S=>a.top+u-(S-T)/(v-T)*u;Ya(r,a,l,u,d,v,e.title||"Fund Value Over Time"),[{upper:"p95",lower:"p5",color:"rgba(99, 102, 241, 0.08)"},{upper:"p90",lower:"p10",color:"rgba(99, 102, 241, 0.12)"},{upper:"p75",lower:"p25",color:"rgba(99, 102, 241, 0.18)"}].forEach(S=>{r.beginPath(),r.fillStyle=S.color,g.forEach((M,N)=>{const O=R(M.year),G=x(M[S.upper]);N===0?r.moveTo(O,G):r.lineTo(O,G)});for(let M=g.length-1;M>=0;M--){const N=g[M],O=R(N.year),G=x(N[S.lower]);r.lineTo(O,G)}r.closePath(),r.fill()}),r.beginPath(),r.strokeStyle=it.primary,r.lineWidth=3,g.forEach((S,M)=>{const N=R(S.year),O=x(S.p50);M===0?r.moveTo(N,O):r.lineTo(N,O)}),r.stroke(),dw(r,i-a.right-150,a.top+20)}function cw(n,t,e={}){const r=n.getContext("2d"),{width:i,height:s}=n,a={top:40,right:30,bottom:60,left:80},l=i-a.left-a.right,u=s-a.top-a.bottom;r.fillStyle=it.bg,r.fillRect(0,0,i,s);const d=e.years||35;let f=0;t.forEach(R=>{R.hist.forEach(x=>{x.total>f&&(f=x.total)})}),f*=1.1;const g=R=>a.left+R/d*l,v=R=>a.top+u-R/f*u;Ya(r,a,l,u,d,f,e.title||"Sample Trajectories");const T=t.slice(0,100);T.filter(R=>R.failed).forEach(R=>{r.beginPath(),r.strokeStyle=it.trajectoryFailed,r.lineWidth=1,R.hist.forEach((x,P)=>{const S=g(x.year),M=v(x.total);P===0?r.moveTo(S,M):r.lineTo(S,M)}),r.stroke()}),T.filter(R=>!R.failed).forEach(R=>{r.beginPath(),r.strokeStyle=it.trajectory,r.lineWidth=1,R.hist.forEach((x,P)=>{const S=g(x.year),M=v(x.total);P===0?r.moveTo(S,M):r.lineTo(S,M)}),r.stroke()}),r.font="12px system-ui, sans-serif",r.fillStyle=it.trajectory.replace("0.2","1"),r.fillRect(i-a.right-120,a.top+10,15,3),r.fillStyle=it.text,r.fillText("Successful",i-a.right-100,a.top+15),r.fillStyle=it.trajectoryFailed.replace("0.3","1"),r.fillRect(i-a.right-120,a.top+30,15,3),r.fillStyle=it.text,r.fillText("Failed",i-a.right-100,a.top+35)}function uw(n,t,e={}){const r=n.getContext("2d"),{width:i,height:s}=n,a={top:40,right:30,bottom:60,left:60},l=i-a.left-a.right,u=s-a.top-a.bottom;r.fillStyle=it.bg,r.fillRect(0,0,i,s);const d=t.map(S=>S.protMonths),f=Math.max(...d),g=Math.max(1,Math.ceil(f/20)),v={};for(let S=0;S<=f;S+=g)v[S]=0;d.forEach(S=>{const M=Math.floor(S/g)*g;v[M]=(v[M]||0)+1});const T=Object.keys(v).map(Number).sort((S,M)=>S-M),R=Math.max(...Object.values(v));r.font="bold 14px system-ui, sans-serif",r.fillStyle=it.text,r.textAlign="center",r.fillText(e.title||"Protection Months Distribution",i/2,a.top-15),r.strokeStyle=it.grid,r.lineWidth=1,r.beginPath(),r.moveTo(a.left,a.top),r.lineTo(a.left,a.top+u),r.lineTo(a.left+l,a.top+u),r.stroke();const x=l/T.length*.8,P=l/T.length*.2;T.forEach((S,M)=>{const O=v[S]/R*u,G=a.left+M*(x+P)+P/2,W=a.top+u-O,E=S/f;S===0?r.fillStyle=it.success:E<.3?r.fillStyle=it.warning:r.fillStyle=it.danger,r.fillRect(G,W,x,O),(M%3===0||M===T.length-1)&&(r.font="10px system-ui, sans-serif",r.fillStyle=it.muted,r.textAlign="center",r.fillText(S.toString(),G+x/2,a.top+u+15))}),r.textAlign="right",r.fillStyle=it.muted;for(let S=0;S<=4;S++){const M=Math.round(R*S/4),N=a.top+u-u*S/4;r.fillText(M.toString(),a.left-10,N+4)}r.font="12px system-ui, sans-serif",r.textAlign="center",r.fillText("Protection Months",i/2,s-10),r.save(),r.translate(15,s/2),r.rotate(-Math.PI/2),r.fillText("Number of Runs",0,0),r.restore()}function hw(n,t,e={}){const r=n.getContext("2d"),{width:i,height:s}=n,a={top:40,right:150,bottom:60,left:80},l=i-a.left-a.right,u=s-a.top-a.bottom;r.fillStyle=it.bg,r.fillRect(0,0,i,s);const d=Object.keys(t),f=e.years||35;let g=0;d.forEach(x=>{const P=t[x].result;P&&P.hist&&P.hist.forEach(S=>{S.total>g&&(g=S.total)})}),g*=1.1;const v=x=>a.left+x/f*l,T=x=>a.top+u-x/g*u;Ya(r,a,l,u,f,g,e.title||"Scenario Comparison");const R=["#6366f1","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#ec4899","#84cc16"];d.forEach((x,P)=>{const S=t[x].result;if(!S||!S.hist)return;r.beginPath(),r.strokeStyle=R[P%R.length],r.lineWidth=2,S.hist.forEach((O,G)=>{const W=v(O.year),E=T(O.total);G===0?r.moveTo(W,E):r.lineTo(W,E)}),r.stroke();const M=a.top+20+P*22;r.fillStyle=R[P%R.length],r.fillRect(i-a.right+20,M,20,3),r.font="11px system-ui, sans-serif",r.fillStyle=it.text,r.textAlign="left",r.fillText(t[x].name||x,i-a.right+45,M+4);const N=S.final/1e3;r.fillStyle=it.muted,r.fillText(`£${N.toFixed(0)}k`,i-a.right+45,M+16)})}function Ya(n,t,e,r,i,s,a){n.font="bold 14px system-ui, sans-serif",n.fillStyle=it.text,n.textAlign="center",n.fillText(a,t.left+e/2,t.top-15),n.strokeStyle=it.grid,n.lineWidth=1;for(let l=0;l<=5;l++){const u=t.top+r*l/5;n.beginPath(),n.moveTo(t.left,u),n.lineTo(t.left+e,u),n.stroke();const d=s*(5-l)/5;n.font="11px system-ui, sans-serif",n.fillStyle=it.muted,n.textAlign="right",n.fillText(fw(d),t.left-10,u+4)}for(let l=0;l<=i;l+=5){const u=t.left+l/i*e;n.beginPath(),n.moveTo(u,t.top),n.lineTo(u,t.top+r),n.stroke(),n.textAlign="center",n.fillText(`Y${l}`,u,t.top+r+20)}n.font="12px system-ui, sans-serif",n.textAlign="center",n.fillText("Years",t.left+e/2,t.top+r+45),n.save(),n.translate(20,t.top+r/2),n.rotate(-Math.PI/2),n.fillText("Fund Value",0,0),n.restore()}function dw(n,t,e){const r=[{label:"Median (50th)",color:it.primary,type:"line"},{label:"25th-75th %ile",color:"rgba(99, 102, 241, 0.18)",type:"band"},{label:"10th-90th %ile",color:"rgba(99, 102, 241, 0.12)",type:"band"},{label:"5th-95th %ile",color:"rgba(99, 102, 241, 0.08)",type:"band"}];n.font="11px system-ui, sans-serif",r.forEach((i,s)=>{const a=e+s*18;i.type==="line"?(n.strokeStyle=i.color,n.lineWidth=3,n.beginPath(),n.moveTo(t,a),n.lineTo(t+20,a),n.stroke()):(n.fillStyle=i.color,n.fillRect(t,a-6,20,12)),n.fillStyle=it.text,n.textAlign="left",n.fillText(i.label,t+25,a+4)})}function fw(n){return n>=1e6?`£${(n/1e6).toFixed(1)}M`:n>=1e3?`£${(n/1e3).toFixed(0)}k`:`£${n.toFixed(0)}`}function pw(){return`
    .chart-container {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
    }

    .chart-container canvas {
      display: block;
      width: 100%;
      height: auto;
      max-height: 400px;
    }

    .chart-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      .chart-row {
        grid-template-columns: 1fr;
      }
    }
  `}let mw=null,gw=null;const Yd=document.createElement("style");Yd.textContent=BE()+JE()+aw()+pw();document.head.appendChild(Yd);document.getElementById("versionDisplay").textContent=`v${pu}`;document.getElementById("entryMonth").value=Vf();let Gi=null;function Qd(n){No(),ow(),document.getElementById("mainApp").classList.remove("hidden"),document.getElementById("userEmail").textContent=n.email,Ja(),Xa()}async function Lo(n){console.log("Wizard completed with data:",n);try{await za({baseSalary:n.decisionSalary,equityMin:n.decisionEquity,bondMin:n.decisionBond,cashTarget:n.decisionCash,duration:n.decisionDuration}),await Ha({baseSalary:n.baseSalary,other:n.otherIncome,statePension:n.statePension,statePensionYear:n.statePensionYear,equityMin:n.equityMin,bondMin:n.bondMin,cashTarget:n.cashTarget,duration:n.duration,taxMode:n.taxMode}),document.getElementById("entryEquity").value=n.decisionEquity,document.getElementById("entryBond").value=n.decisionBond,document.getElementById("entryCash").value=n.decisionCash,document.getElementById("mcEquity").value=n.equityMin,document.getElementById("mcBond").value=n.bondMin,document.getElementById("mcCash").value=n.cashTarget,document.getElementById("mcYears").value=n.duration}catch(e){console.error("Error saving wizard settings:",e)}const t=Kr();Qd(t)}jE(document.getElementById("authScreen"),async n=>{console.log("Auth success callback triggered for:",n.email);try{console.log("Checking for existing cloud data...");const t=await dE();console.log("Has cloud data:",t),t?(console.log("Existing user - showing main app"),Qd(n)):(console.log("New user - showing setup wizard"),No(),document.getElementById("setupWizard").style.display="block",Oo(document.getElementById("setupWizard"),Lo))}catch(t){console.error("Error in auth callback:",t),No(),document.getElementById("setupWizard").style.display="block",Oo(document.getElementById("setupWizard"),Lo)}});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await iE(),document.getElementById("mainApp").classList.add("hidden"),QE()}catch(n){console.error("Logout error:",n)}});document.getElementById("resetBtn").addEventListener("click",async()=>{if(!(!confirm(`⚠️ WARNING: This will permanently delete ALL your data including:

• All saved settings
• All decision history
• All tax year configurations

This action cannot be undone.

Are you sure you want to reset and start over?`)||!confirm(`Are you ABSOLUTELY sure?

Type OK to confirm deletion of all your data.`)))try{console.log("Wiping all user data..."),await hE(),console.log("Data wiped successfully"),localStorage.clear(),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("setupWizard").style.display="block",Oo(document.getElementById("setupWizard"),Lo),alert("All data has been deleted. Please complete the setup wizard to start fresh.")}catch(e){console.error("Reset error:",e),alert("Error resetting data: "+e.message)}});document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&Ja(),n.dataset.tab==="taxyears"&&Xa(),n.dataset.tab==="stress"&&Qa()})});document.querySelectorAll(".sub-tab[data-stresstab]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".sub-tab[data-stresstab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".stress-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`stress-${n.dataset.stresstab}`).classList.remove("hidden"),n.dataset.stresstab==="stresssettings"&&Qa(),["montecarlo","historical","scenarios"].includes(n.dataset.stresstab)&&yw(n.dataset.stresstab)})});document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`decision-${n.dataset.decisiontab}`).classList.remove("hidden"),n.dataset.decisiontab==="decisionsettings"&&Xd()})});window.handleDecisionSubmit=function(n){n.preventDefault();const t={date:document.getElementById("entryMonth").value,equity:parseFloat(document.getElementById("entryEquity").value)||0,bond:parseFloat(document.getElementById("entryBond").value)||0,cash:parseFloat(document.getElementById("entryCash").value)||0,isaBalance:parseFloat(document.getElementById("entryISA").value)||0};try{Gi=zE(t);const e=document.getElementById("decisionOutput");jd(Gi,e),document.getElementById("saveBtn").disabled=!1}catch(e){console.error("Decision error:",e),alert("Error calculating decision: "+e.message)}};window.saveCurrentDecision=async function(){if(!Gi){alert("No decision to save");return}if(!Xe()){alert("Please sign in to save decisions");return}try{await TE(Gi),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};async function yw(n){const t=await Es(),r={montecarlo:"mc",historical:"hist",scenarios:"scen"}[n]||n,i=document.getElementById(r+"Equity"),s=document.getElementById(r+"Bond"),a=document.getElementById(r+"Cash"),l=document.getElementById(r+"Years");i&&(i.value=t.equityMin),s&&(s.value=t.bondMin),a&&(a.value=t.cashTarget),l&&(l.value=t.duration)}window.runMonteCarloUI=function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("mcResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',setTimeout(()=>{try{const{results:t,stats:e}=Hd(n);mw=t,Jd(e,t,"Monte Carlo (1000 runs)","mcResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("mcResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runHistoricalUI=function(){const n={equityStart:parseFloat(document.getElementById("histEquity").value)||25e4,bondStart:parseFloat(document.getElementById("histBond").value)||2e5,cashStart:parseFloat(document.getElementById("histCash").value)||5e4,years:parseInt(document.getElementById("histYears").value)||35};document.getElementById("histResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',setTimeout(()=>{try{const{results:t,stats:e}=Wd(n);gw=t,Jd(e,t,"Historical Analysis","histResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("histResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runScenariosUI=function(){const n={equityStart:parseFloat(document.getElementById("scenEquity").value)||25e4,bondStart:parseFloat(document.getElementById("scenBond").value)||2e5,cashStart:parseFloat(document.getElementById("scenCash").value)||5e4,years:35};document.getElementById("scenResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',setTimeout(()=>{try{const t=qE(n);ww(t,"scenResults")}catch(t){console.error("Scenario error:",t),document.getElementById("scenResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};let co=!1;window.runOptimisationUI=function(n){if(co)return;co=!0;const t=document.getElementById("optimiseBtn"+n),e=document.getElementById("optimiseResults"+n);t&&(t.disabled=!0),t&&(t.textContent="Optimising...");let r,i,s,a;n==="MC"?(r=document.getElementById("mcEquity"),i=document.getElementById("mcBond"),s=document.getElementById("mcCash"),a=document.getElementById("mcYears")):(r=document.getElementById("histEquity"),i=document.getElementById("histBond"),s=document.getElementById("histCash"),a=document.getElementById("histYears"));const l=+r.value,u=+i.value,d=+s.value,f=+a.value,g=l+u+d;e.innerHTML='<div class="loading"><div class="spinner"></div>Testing allocations...</div>',setTimeout(()=>{try{const v=[];for(let P=5;P<=30;P+=5)for(let S=20;S<=95-P;S+=5){const M=100-P-S;M>=0&&v.push({equity:Math.round(g*S/100),bond:Math.round(g*M/100),cash:Math.round(g*P/100)})}const T=P=>{const S={equityStart:P.equity,bondStart:P.bond,cashStart:P.cash,years:f};let M;return n==="MC"?M=Hd(S):M=Wd(S),{...P,rate:M.stats.successRate,avgProt:M.stats.avgProtMonths,medianFinal:M.stats.medianFinal}},R=T({equity:l,bond:u,cash:d});let x=null;v.forEach(P=>{const S=T(P);S.avgProt<=R.avgProt&&(!x||S.rate>x.rate)&&(x=S)}),_w(n,R,x,g,e)}catch(v){console.error("Optimisation error:",v),e.innerHTML=`<div class="alert alert-danger">Error: ${v.message}</div>`}finally{co=!1,t&&(t.disabled=!1,t.textContent="Optimise Allocation")}},50)};function _w(n,t,e,r,i){let s="";if(e&&e.rate>t.rate){const a=e.medianFinal-t.medianFinal,l=t.medianFinal>0?a/t.medianFinal*100:0;s=`
          <div class="card" style="margin-top: 20px; border-color: var(--success);">
            <h3 style="color: var(--success); margin-top: 0;">Better Allocation Found</h3>
            <p style="color: var(--text-muted); margin-bottom: 16px;">A different fund split could improve your success rate without increasing protection usage:</p>

            <div class="grid-2" style="gap: 20px; margin-bottom: 20px;">
              <!-- Original -->
              <div style="padding: 16px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Your Current Split</div>
                <div style="font-size: 24px; font-weight: 600; color: var(--warning);">${t.rate.toFixed(1)}%</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Success Rate</div>
                <div style="font-size: 13px;">Equity: ${U(t.equity)} (${Math.round(t.equity/r*100)}%)</div>
                <div style="font-size: 13px;">Bonds: ${U(t.bond)} (${Math.round(t.bond/r*100)}%)</div>
                <div style="font-size: 13px;">Cash: ${U(t.cash)} (${Math.round(t.cash/r*100)}%)</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
                  Avg protection: ${t.avgProt.toFixed(0)} mo | Median final: ${U(t.medianFinal)}
                </div>
              </div>

              <!-- Optimised -->
              <div style="padding: 16px; background: rgba(46,160,67,0.1); border-radius: 8px; border: 1px solid var(--success);">
                <div style="font-weight: 500; margin-bottom: 12px; color: var(--success);">Optimised Split</div>
                <div style="font-size: 24px; font-weight: 600; color: var(--success);">${e.rate.toFixed(1)}%</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Success Rate (+${(e.rate-t.rate).toFixed(1)}%)</div>
                <div style="font-size: 13px;">Equity: ${U(e.equity)} (${Math.round(e.equity/r*100)}%)</div>
                <div style="font-size: 13px;">Bonds: ${U(e.bond)} (${Math.round(e.bond/r*100)}%)</div>
                <div style="font-size: 13px;">Cash: ${U(e.cash)} (${Math.round(e.cash/r*100)}%)</div>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
                  Avg protection: ${e.avgProt.toFixed(0)} mo | Median final: ${U(e.medianFinal)}
                </div>
              </div>
            </div>

            ${a<0?`
              <div class="alert alert-warning" style="margin-bottom: 16px;">
                <strong>Trade-off:</strong> The optimised allocation has a ${Math.abs(l).toFixed(0)}% lower median final value.
                This is because it likely has less equity exposure. You gain safety but may sacrifice some upside.
              </div>
            `:a>0?`
              <div class="alert alert-info" style="margin-bottom: 16px;">
                <strong>Bonus:</strong> The optimised allocation also has a ${l.toFixed(0)}% higher median final value!
              </div>
            `:""}

            <div class="alert alert-info" style="margin-bottom: 16px;">
              <strong>To apply this allocation:</strong> Click the button below to update your Settings with these new fund minimums.
            </div>

            <button onclick="applyOptimisedAllocationUI(${e.equity}, ${e.bond}, ${e.cash})" style="width: 100%;">
              Apply Optimised Allocation to Settings
            </button>
          </div>
        `}else s=`
          <div class="card" style="margin-top: 20px; border-color: var(--primary);">
            <h3 style="color: var(--primary); margin-top: 0;">Your Allocation is Already Optimal</h3>
            <p style="color: var(--text-muted);">
              Based on testing ${Math.round(100*5/5)} different allocations, your current fund split appears to be optimal
              for maximising success rate while minimising protection usage.
            </p>
            <div style="padding: 16px; background: var(--card-alt); border-radius: 8px; margin-top: 16px;">
              <div style="font-size: 24px; font-weight: 600; color: var(--success);">${t.rate.toFixed(1)}%</div>
              <div style="font-size: 12px; color: var(--text-muted);">Success Rate</div>
              <div style="font-size: 13px; margin-top: 8px;">
                Equity: ${U(t.equity)} | Bonds: ${U(t.bond)} | Cash: ${U(t.cash)}
              </div>
            </div>
          </div>
        `;i.innerHTML=s}window.applyOptimisedAllocationUI=async function(n,t,e){if(document.getElementById("ssEquityMin").value=n,document.getElementById("ssBondMin").value=t,document.getElementById("ssCashTarget").value=e,document.getElementById("dsEquityMin").value=n,document.getElementById("dsBondMin").value=t,document.getElementById("dsCashTarget").value=e,document.getElementById("mcEquity").value=n,document.getElementById("mcBond").value=t,document.getElementById("mcCash").value=e,document.getElementById("histEquity").value=n,document.getElementById("histBond").value=t,document.getElementById("histCash").value=e,document.getElementById("scenEquity").value=n,document.getElementById("scenBond").value=t,document.getElementById("scenCash").value=e,Xe())try{await Ha({equityMin:n,bondMin:t,cashTarget:e})}catch(r){console.error("Error saving optimised settings:",r)}alert("Settings updated! Run the test again to see the full results with your new allocation.")};const vw={1929:"Wall Street Crash / Great Depression",1930:"Great Depression",1931:"Great Depression",1932:"Great Depression",1937:"Recession of 1937",1968:"Late 1960s stagflation",1969:"Late 1960s recession",1973:"Oil Crisis / 1973-74 crash",1974:"1973-74 bear market",2e3:"Dot-com bubble burst",2001:"Dot-com bust / 9/11",2007:"Global Financial Crisis",2008:"Global Financial Crisis",2022:"Post-COVID inflation / rate hikes"};function Ew(n){if(!n||n.length===0)return"";const t=n.filter(s=>s.failed).sort((s,a)=>s.years-a.years),e=n.filter(s=>s.protMonths>0).sort((s,a)=>a.protMonths-s.protMonths),r=t.length>0?t.slice(0,5):e.slice(0,5);if(r.length===0)return"";let i=`
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
      `;return r.forEach(s=>{const a=s.startYear||s.seed,l=vw[a]||"-",u=s.failed?"danger":"success";i+=`
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
      `,i}function Jd(n,t,e,r,i){const s=n.successRate>=90?"success":n.successRate>=80?"warning":"danger",a=r.replace("Results",""),l=n.survival||{},u=n.finalValue||{},d=n.protection||{};let f=`
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
              ${["p5","p10","p25","p50","p75","p90","p95"].map(g=>`
                <div class="stat-box mini">
                  <div class="stat-value" style="font-size: 14px;">${U(u[g]||0)}</div>
                  <div class="stat-label" style="font-size: 10px;">${g.toUpperCase()}</div>
                </div>
              `).join("")}
            </div>
          </details>

          <!-- Protection Stats -->
          <div class="grid-4" style="margin-bottom: 24px;">
            <div class="stat-box">
              <div class="stat-value">${d.runsWithProtection||n.runsWithProtection||0}</div>
              <div class="stat-label">Runs w/ Protection</div>
            </div>
            <div class="stat-box warning">
              <div class="stat-value">${(d.avgMonths||n.avgProtMonths||0).toFixed(0)}</div>
              <div class="stat-label">Avg Protection Mo</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${d.maxConsecutive||n.maxConsecutive||0}</div>
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
          ${r==="histResults"?Ew(t):""}

          <!-- Result Summary -->
          <div class="alert ${s==="success"?"alert-success":s==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById(r).innerHTML=f,setTimeout(()=>{const g=document.getElementById(`${a}ConeChart`),v=document.getElementById(`${a}TrajChart`),T=document.getElementById(`${a}HistChart`);g&&t&&t.length>0&&lw(g,t,{years:i,title:"Cone of Uncertainty (5th-95th Percentile)"}),v&&t&&t.length>0&&cw(v,t,{years:i,title:"Sample Trajectories (100 runs)"}),T&&t&&t.length>0&&uw(T,t,{title:"Protection Months Distribution"})},50)}function ww(n,t){let e='<div class="card"><h2>Scenario Analysis</h2>';e+=`
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
        `}e+="</div></div>",document.getElementById(t).innerHTML=e,setTimeout(()=>{const r=document.getElementById("scenCompChart");r&&n&&hw(r,n,{years:35,title:"Scenario Comparison"})},50)}async function Qa(){try{const n=await Es();document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3}catch(n){console.error("Error loading stress settings:",n)}}window.saveStressSettingsUI=async function(){if(!Xe()){alert("Please sign in to save settings");return}try{await Ha({baseSalary:+document.getElementById("ssBaseSalary").value,equityMin:+document.getElementById("ssEquityMin").value,bondMin:+document.getElementById("ssBondMin").value,cashTarget:+document.getElementById("ssCashTarget").value,duration:+document.getElementById("ssDuration").value,pa:+document.getElementById("ssPA").value,brl:+document.getElementById("ssBRL").value,hrl:+document.getElementById("ssHRL").value,taxMode:document.getElementById("ssTaxMode").value,other:+document.getElementById("ssOther").value,statePension:+document.getElementById("ssStatePension").value,statePensionYear:+document.getElementById("ssStatePensionYear").value,consecutiveLimit:+document.getElementById("ssConsecutiveLimit").value,protectionMult:+document.getElementById("ssProtectionMult").value,disableProtection:document.getElementById("ssDisableProtection").checked,hodlEnabled:document.getElementById("ssHodlEnabled").checked,hodlValue:+document.getElementById("ssHodlValue").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving stress settings:",n),alert("Error saving: "+n.message)}};window.resetStressSettingsUI=async function(){if(confirm("Reset all stress settings to defaults?"))try{await OE(),await Qa(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}};async function Xd(){try{const n=await mE();document.getElementById("dsEquityMin").value=n.equityMin||25e4,document.getElementById("dsBondMin").value=n.bondMin||2e5,document.getElementById("dsCashTarget").value=n.cashTarget||5e4,document.getElementById("dsDuration").value=n.duration||35,document.getElementById("dsBaseSalary").value=n.baseSalary||3e4,document.getElementById("dsProtectionFactor").value=n.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=n.recoveryBuffer||15e3,document.getElementById("dsConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("entryEquity").value=n.equityMin||25e4,document.getElementById("entryBond").value=n.bondMin||2e5,document.getElementById("entryCash").value=n.cashTarget||5e4}catch(n){console.error("Error loading decision settings:",n)}}window.saveDecisionSettingsUI=async function(){if(!Xe()){alert("Please sign in to save settings");return}try{await za({equityMin:+document.getElementById("dsEquityMin").value,bondMin:+document.getElementById("dsBondMin").value,cashTarget:+document.getElementById("dsCashTarget").value,duration:+document.getElementById("dsDuration").value,baseSalary:+document.getElementById("dsBaseSalary").value,protectionFactor:+document.getElementById("dsProtectionFactor").value,recoveryBuffer:+document.getElementById("dsRecoveryBuffer").value,consecutiveLimit:+document.getElementById("dsConsecutiveLimit").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving decision settings:",n),alert("Error saving: "+n.message)}};window.resetDecisionSettingsUI=async function(){if(confirm("Reset all decision settings to defaults?"))try{await za({equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,baseSalary:3e4,protectionFactor:20,recoveryBuffer:15e3,consecutiveLimit:3}),await Xd(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}};window.showDrawdownScheduleUI=async function(){const n=parseFloat(document.getElementById("ddInflation").value)/100||.025,t=parseInt(document.getElementById("ddDuration").value)||35;try{const e=await Es();e.duration=t;const r=qf(e,t,n);let i='<div class="card"><h2>Projected SIPP Drawdown Schedule</h2>';i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>BRL</th><th>Other</th><th>State</th><th>SIPP Draw</th><th>Tax</th><th>Net</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${U(s.brl)}</td>
            <td>${U(s.other)}</td>
            <td>${U(s.statePension)}</td>
            <td style="color: var(--primary); font-weight: 600;">${U(s.sippDraw)}</td>
            <td style="color: var(--danger);">-${U(s.tax)}</td>
            <td style="color: var(--success);">${U(s.netIncome)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("drawdownResults").innerHTML=i}catch(e){console.error("Drawdown error:",e),document.getElementById("drawdownResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};window.showGlidepathUI=async function(){const n=parseFloat(document.getElementById("gpInflation").value)/100||.025,t=parseInt(document.getElementById("gpDuration").value)||35;try{const e=await Es();e.duration=t;const r=jf(e,n);let i='<div class="card"><h2>Fund Glidepath (Inflation-Adjusted Minimums)</h2>';i+='<div class="alert alert-info" style="margin-bottom: 20px;">',i+="<strong>Glidepath Logic:</strong> Equity & Bond minimums inflate with CPI but deplete linearly to £0. Cash inflates only (maintains real value).",i+="</div>",i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>Cum Inflation</th><th>Equity Min</th><th>Bond Min</th><th>Cash Target</th><th>Total Min</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${(s.cumulativeInflation*100-100).toFixed(1)}%</td>
            <td style="color: var(--success);">${U(s.equityMin)}</td>
            <td style="color: var(--info);">${U(s.bondMin)}</td>
            <td style="color: var(--warning);">${U(s.cashTarget)}</td>
            <td style="font-weight: 600;">${U(s.totalMin)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("glidepathResults").innerHTML=i}catch(e){console.error("Glidepath error:",e),document.getElementById("glidepathResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};function Ja(){const n=Ud({sortDesc:!0,limit:50}),t=document.getElementById("historyList");if(n.length===0){t.innerHTML='<p class="loading">No history entries yet.</p>';return}let e="";for(const r of n){const i=r.inProtection?"protection":"";e+=`
          <div class="history-item ${i}">
            <div>
              <div class="history-date">${r.date} (${r.taxYear})</div>
              <div class="history-details">
                SIPP: ${U(r.sipp||0)} |
                Source: ${r.source} |
                Total: ${U(r.total||0)}
                ${r.inProtection?" | PROTECTION":""}
              </div>
            </div>
            <div>
              <button class="secondary" style="padding: 8px 12px; font-size: 12px;" onclick="deleteHistoryEntry('${r.date}')">Delete</button>
            </div>
          </div>
        `}t.innerHTML=e}window.deleteHistoryEntry=async function(n){if(confirm(`Delete entry for ${n}?`)){if(!Xe()){alert("Please sign in to delete entries");return}try{await vE(n),Ja()}catch(t){console.error("Delete error:",t),alert("Error deleting: "+t.message)}}};function Xa(){const n=yE(),t=document.getElementById("taxYearsList"),e=Object.keys(n).sort().reverse();if(e.length===0){t.innerHTML='<p class="loading">No tax years configured.</p>';return}let r="<table><thead><tr><th>Tax Year</th><th>PA</th><th>BRL</th><th>Other</th><th>State Pension</th><th>Actions</th></tr></thead><tbody>";for(const i of e){const s=n[i];r+=`
          <tr>
            <td><strong>${i}</strong></td>
            <td>${U(s.pa||12570)}</td>
            <td>${U(s.brl||50270)}</td>
            <td>${U(s.other||0)}</td>
            <td>${U(s.statePension||0)}</td>
            <td><button class="secondary" style="padding: 6px 12px; font-size: 12px;" onclick="editTaxYear('${i}')">Edit</button></td>
          </tr>
        `}r+="</tbody></table>",t.innerHTML=r}window.addTaxYear=async function(){if(!Xe()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await gE(n,{}),Xa()}catch(t){console.error("Save error:",t),alert("Error saving: "+t.message)}};window.editTaxYear=function(n){qa(n),alert("Edit functionality: Would open form for "+n)};console.log("Pension Planner v"+pu+" loaded");
