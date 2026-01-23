(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Lf(n={}){return{date:n.date||null,taxYear:n.taxYear||null,yearNumber:n.yearNumber??0,monthInTaxYear:n.monthInTaxYear??0,remainingMonths:n.remainingMonths??12,equity:n.equity??0,bond:n.bond??0,cash:n.cash??0,isa:n.isa??0,adjEquityMin:n.adjEquityMin??0,adjBondMin:n.adjBondMin??0,adjCashTarget:n.adjCashTarget??0,pa:n.pa??0,brl:n.brl??0,hrl:n.hrl??0,other:n.other??0,statePension:n.statePension??0,sippDraw:n.sippDraw??0,isaDraw:n.isaDraw??0,totalMonthlyNet:n.totalMonthlyNet??0,taxEfficient:n.taxEfficient??!0,annualTaxableSoFar:n.annualTaxableSoFar??0,projectedAnnualTaxable:n.projectedAnnualTaxable??0,headroomToBRL:n.headroomToBRL??0,inProtection:n.inProtection??!1,protectionReason:n.protectionReason||null,consecutiveCashDraws:n.consecutiveCashDraws??0,boostAmount:n.boostAmount??0,boostEligible:n.boostEligible??!1,source:n.source||"Growth",drawFromEquity:n.drawFromEquity??0,drawFromBond:n.drawFromBond??0,drawFromCash:n.drawFromCash??0,rebalanceNeeded:n.rebalanceNeeded??!1,rebalanceActions:n.rebalanceActions||[],alerts:n.alerts||[],calculationDetails:n.calculationDetails||{}}}function Ff(n){return{date:n.date,taxYear:n.taxYear,yearNum:n.yearNumber,equity:n.equity,bond:n.bond,cash:n.cash,total:n.equity+n.bond+n.cash,source:n.source,sipp:n.sippDraw,isa:n.isaDraw,other:n.other,state:n.statePension,inProtection:n.inProtection,reason:n.protectionReason||"",boostAmount:n.boostAmount,rebal:n.rebalanceActions.join("; "),adjEquity:n.adjEquityMin,adjBond:n.adjBondMin,adjCash:n.adjCashTarget}}const Kt={INFO:"info",WARNING:"warning",DANGER:"danger",SUCCESS:"success"};function sn(n,t=Kt.INFO,e=null){return{message:n,severity:t,code:e}}const vu="6.0.0",Nt={PERSONAL_ALLOWANCE:12570,BASIC_RATE_LIMIT:50270,HIGHER_RATE_LIMIT:125140,BASIC_RATE:.2,HIGHER_RATE:.4,ADDITIONAL_RATE:.45,PA_TAPER_THRESHOLD:1e5,PA_TAPER_RATE:.5},Eu={ASSUMED_CPI:.025,OTHER_INCOME_CAP:.04},St={BASE_SALARY:3e4,EQUITY_MIN:25e4,BOND_MIN:2e5,CASH_TARGET:5e4,DURATION_YEARS:35,PROTECTION_FACTOR:20,RECOVERY_BUFFER:15e3,CONSECUTIVE_LIMIT:3},Js={PROTECTION_MULTIPLIER:.8,HODL_ENABLED:!1,HODL_VALUE:25e3},ki={1928:.4781,1929:-.172,1930:-.338,1931:-.527,1932:-.231,1933:.669,1934:.041,1935:.3879,1936:.2492,1937:-.3839,1938:.2846,1939:-.0278,1940:-.1278,1941:-.1552,1942:.0782,1943:.1382,1944:.1226,1945:.2665,1946:-.0818,1947:.0225,1948:-.0246,1949:.1279,1950:.1787,1951:.1463,1952:.0837,1953:-.0377,1954:.4399,1955:.2084,1956:.0262,1957:-.1278,1958:.3396,1959:.1612,1960:-.0912,1961:.1889,1962:-.1081,1963:.1715,1964:.1478,1965:.1058,1966:-.1858,1967:.1506,1968:.0457,1969:-.1524,1970:.0482,1971:.0627,1972:.1476,1973:-.1652,1974:-.2777,1975:.3815,1976:.1774,1977:-.1271,1978:-.0303,1979:.0414,1980:.1493,1981:-.0909,1982:.1976,1983:.2027,1984:-.0365,1985:.2778,1986:.2278,1987:.0227,1988:.1185,1989:.2697,1990:-.0456,1991:.2013,1992:.044,1993:.1372,1994:.0218,1995:.3345,1996:.2601,1997:.2264,1998:.1627,1999:.2516,2e3:-.0617,2001:-.0727,2002:-.1679,2003:.2525,2004:.0333,2005:-.0061,2006:.1618,2007:.0648,2008:-.3355,2009:.1882,2010:.1102,2011:.0556,2012:.0728,2013:.2665,2014:.0775,2015:-.023,2016:.1342,2017:.2511,2018:-.0583,2019:.2234,2020:.0726,2021:.1873,2022:-.0878,2023:.1399,2024:.1299},wu={1928:-.012,1929:.002,1930:-.06,1931:-.094,1932:-.103,1933:.005,1934:.021,1935:.03,1936:.014,1937:.028,1938:-.02,1939:-.014,1940:.01,1941:.099,1942:.09,1943:.03,1944:.023,1945:.023,1946:.186,1947:.087,1948:.03,1949:-.02,1950:.059,1951:.06,1952:.009,1953:.006,1954:-.007,1955:.004,1956:.03,1957:.028,1958:.017,1959:.015,1960:.014,1961:.007,1962:.013,1963:.017,1964:.01,1965:.019,1966:.034,1967:.028,1968:.046,1969:.062,1970:.055,1971:.033,1972:.034,1973:.087,1974:.124,1975:.069,1976:.048,1977:.067,1978:.09,1979:.133,1980:.125,1981:.089,1982:.038,1983:.038,1984:.04,1985:.038,1986:.011,1987:.044,1988:.044,1989:.046,1990:.061,1991:.03,1992:.029,1993:.027,1994:.026,1995:.025,1996:.034,1997:.017,1998:.016,1999:.027,2e3:.034,2001:.016,2002:.024,2003:.019,2004:.033,2005:.034,2006:.025,2007:.041,2008:.001,2009:.027,2010:.015,2011:.03,2012:.017,2013:.015,2014:.008,2015:.007,2016:.021,2017:.021,2018:.019,2019:.023,2020:.012,2021:.07,2022:.065,2023:.032,2024:.029},Bf={GREAT_DEPRESSION:{name:"Great Depression",equity:[-.17,-.34,-.53,-.23,.67,.04,.39,.25,-.38,.28],inflation:[0,-.06,-.09,-.1,.01,.02,.03,.01,.03,-.02],color:"#e74c3c"},STAGFLATION_70S:{name:"Stagflation 70s",equity:[-.17,-.28,.38,.18,-.13,-.03,.04,.15,-.09,.2],inflation:[.09,.12,.07,.05,.07,.09,.13,.13,.09,.04],color:"#e67e22"},LOST_DECADE_2000S:{name:"Lost Decade 2000s",equity:[-.06,-.07,-.17,.25,.03,-.01,.16,.06,-.34,.19],inflation:[.03,.02,.02,.02,.03,.03,.03,.04,0,.03],color:"#9b59b6"},CRISIS_2008:{name:"2008 Crisis",equity:[-.34,.19,.11,.06,.07,.27,.08,-.02,.13,.25],inflation:[0,.03,.02,.03,.02,.02,.01,.01,.02,.02],color:"#3498db"},SYNTHETIC_WORST:{name:"Synthetic Worst",equity:[-.4,.1,.1,.1,-.35,.1,.1,.1,.1,-.3],inflation:[.08,.05,.05,.05,.08,.05,.05,.05,.05,.08],color:"#1abc9c"}},Pn={START_MONTH:4,START_DAY:6};function Ho(n,t,e,r=Nt.HIGHER_RATE_LIMIT){if(n<=0)return 0;let i=t;if(n>Nt.PA_TAPER_THRESHOLD){const f=(n-Nt.PA_TAPER_THRESHOLD)*Nt.PA_TAPER_RATE;i=Math.max(0,t-f)}const s=Math.max(0,n-i),a=Math.max(0,e-i),l=r-e;let u=0;const d=Math.min(s,a);if(u+=d*Nt.BASIC_RATE,s>a){const f=Math.min(s-a,l);u+=f*Nt.HIGHER_RATE}if(s>a+l){const f=s-a-l;u+=f*Nt.ADDITIONAL_RATE}return u}function Zs(n,t,e,r=Nt.HIGHER_RATE_LIMIT){return n-Ho(n,t,e,r)}function Uf(n,t){return Math.max(0,t-n)}function zf(n){const t=typeof n=="string"?new Date(n):n,e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();if(r<Pn.START_MONTH||r===Pn.START_MONTH&&i<Pn.START_DAY){const s=e-1;return`${String(s).slice(-2)}/${String(e).slice(-2)}`}return`${String(e).slice(-2)}/${String(e+1).slice(-2)}`}function qf(n,t){const e=typeof n=="string"?new Date(n):n,r=typeof t=="string"?new Date(t):t,i=r.getFullYear()-e.getFullYear(),s=r.getMonth()-e.getMonth(),a=r.getDate()-e.getDate();return i*12+s+a/30}function $f(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function jf(n){const[t,e]=n.split("-").map(Number);return new Date(t,e-1,1)}function Wo(n){const e=(typeof n=="string"?new Date(n):n).getMonth()+1;return e>=Pn.START_MONTH?12-(e-Pn.START_MONTH):Pn.START_MONTH-e}function Hf(n){return 12-Wo(n)}function Wf(n,t){const e=qf(n,t);return Math.floor(e/12)}function Iu(n){const{baseSalary:t,cumulativeInflation:e,yearlyInflation:r=[],other:i=0,statePension:s=0,statePensionYear:a=12,yearNumber:l=0,pa:u,brl:d,hrl:f,taxMode:g="inflates"}=n,v=g==="frozen"?u:u*e,I=g==="frozen"?d:d*e,P=g==="frozen"?f:f*e,k=t*e,R=Gf(i,r),S=l>=a?s*e:0,x=R+S,O=Math.max(0,I-x),G=Math.max(0,k-x),j=Math.min(O,G);return{pa:v,brl:I,hrl:P,targetGross:k,other:R,statePension:S,fixedIncome:x,annualSippDraw:j,monthlySippDraw:j/12,sippPlusfixedAtBRL:O+x===I}}function Gf(n,t,e=Eu.OTHER_INCOME_CAP){let r=n;for(const i of t)r*=1+Math.min(i,e);return r}function Kf(n){const{equity:t,bond:e,cash:r,isaBalance:i=0,baseSalary:s,cumulativeInflation:a,yearlyInflation:l=[],other:u=0,statePension:d=0,statePensionYear:f=12,yearNumber:g=0,pa:v,brl:I,hrl:P,taxMode:k="inflates",currentDate:R,taxYearHistory:S=[],inProtection:x=!1,protectionFactor:D=20}=n,O=Iu({baseSalary:s,cumulativeInflation:a,yearlyInflation:l,other:u,statePension:d,statePensionYear:f,yearNumber:g,pa:v,brl:I,hrl:P,taxMode:k}),G=O.targetGross,j=Zs(G,O.pa,O.brl,O.hrl),E=j/12,m=O.monthlySippDraw,y=O.other/12,w=O.statePension/12,T=y+w,A=m+T,_=A*12,Ht=Zs(_,O.pa,O.brl,O.hrl)/12,Qt=Math.max(0,E-Ht),Bt=Wo(R),re=Qt*Bt,dt=i>=re;let pt;if(dt&&Qt>0)pt={mode:"tax-efficient",monthlySipp:x?m*(1-D/100):m,monthlyIsa:Qt,monthlyOther:y,monthlyState:w,reason:"ISA top-up keeps SIPP+Other at BRL for tax efficiency",taxBoostEligible:!x,isaUsedForTopUp:!0};else if(!dt&&Qt>0){const Dt=Math.max(0,G/12-T);pt={mode:"standard",monthlySipp:x?Dt*(1-D/100):Dt,monthlyIsa:0,monthlyOther:y,monthlyState:w,reason:`Insufficient ISA for ${Bt} months - drawing to target`,taxBoostEligible:!0,isaUsedForTopUp:!1,warning:`Need £${Math.round(re-i).toLocaleString()} more ISA for tax-efficient mode`}}else pt={mode:"tax-efficient",monthlySipp:x?m*(1-D/100):m,monthlyIsa:0,monthlyOther:y,monthlyState:w,reason:"Target income achieved within BRL",taxBoostEligible:!x,isaUsedForTopUp:!1};const vn=Yf({taxYearHistory:S,remainingMonths:Bt,brl:O.brl,currentMonthlySipp:pt.monthlySipp,monthlyFixedIncome:T,inProtection:x,growthSurplus:t+e-(n.adjEquityMin||0)-(n.adjBondMin||0)}),Wt=pt.monthlySipp+pt.monthlyIsa+pt.monthlyOther+pt.monthlyState,tt=(pt.monthlySipp+T)*12,Xt=Ho(tt,O.pa,O.brl,O.hrl);return{...pt,boostAmount:vn.boostAmount,boostReason:vn.reason,taxInfo:{pa:O.pa,brl:O.brl,hrl:O.hrl,annualTaxable:tt,annualTax:Xt,monthlyTax:Xt/12,effectiveRate:tt>0?Xt/tt:0,headroomToBRL:Uf(tt,O.brl)},monthlyGross:pt.monthlySipp+T,monthlyNet:Zs((pt.monthlySipp+T)*12,O.pa,O.brl,O.hrl)/12+pt.monthlyIsa,monthlyTotal:Wt,remainingMonths:Bt,isaBalance:i,isaNeededMonthly:Qt,totalIsaNeeded:re,hasSufficientIsa:dt,calculation:{targetGross:G,targetNet:j,monthlyTargetNet:E,monthlyGrossAtBRL:A,monthlyNetAtBRL:Ht}}}function Yf(n){const{taxYearHistory:t,remainingMonths:e,brl:r,currentMonthlySipp:i,monthlyFixedIncome:s,inProtection:a,growthSurplus:l}=n;if(a)return{boostAmount:0,reason:"In protection mode - no boost"};let u=0,d=0;for(const D of t)D.inProtection&&D.stdSipp&&(u+=D.stdSipp-(D.sipp||0)),D.boostAmount>0&&(d+=D.boostAmount);const f=Math.max(0,u-d);if(f<=0)return{boostAmount:0,reason:"No shortfall to recover"};const I=t.reduce((D,O)=>D+(O.sipp||0),0)*12/t.length+i*e*12/e+s*12,k=Math.max(0,r-I)/e,R=l/e,S=f/e,x=Math.min(S,k,R);return x<=0?{boostAmount:0,reason:"No headroom for boost"}:{boostAmount:x,reason:`Catching up £${Math.round(f).toLocaleString()} protection shortfall`}}function Qf(n,t,e=.025){const r=[],i=[];for(let s=0;s<=t;s++){s>0&&i.push(e);const a=Math.pow(1+e,s),l=Iu({baseSalary:n.baseSalary,cumulativeInflation:a,yearlyInflation:[...i],other:n.other,statePension:n.statePension,statePensionYear:n.statePensionYear,yearNumber:s,pa:n.pa,brl:n.brl,hrl:n.hrl,taxMode:n.taxMode}),u=l.annualSippDraw+l.other+l.statePension,d=Ho(u,l.pa,l.brl,l.hrl);r.push({year:s,brl:l.brl,other:l.other,statePension:l.statePension,sippDraw:l.annualSippDraw,totalTaxable:u,tax:d,netIncome:u-d})}return r}function Cn(n,t,e,r,i){if(i){const s=Math.max(0,1-t/e);return n*r*s}return n*r}function Tu(n,t,e){const r=Cn(n.equityMin,t,n.duration,e,!0),i=Cn(n.bondMin,t,n.duration,e,!0),s=Cn(n.cashTarget,t,n.duration,e,!1);return{equity:r,bond:i,cash:s,totalGrowth:r+i,total:r+i+s}}function Xf(n){return n.reduce((t,e)=>t*(1+e),1)}function Jf(n,t=Eu.ASSUMED_CPI){const e=[];for(let r=0;r<=n.duration;r++){const i=Math.pow(1+t,r),s=Tu(n,r,i);e.push({year:r,cumulativeInflation:i,equityMin:s.equity,bondMin:s.bond,cashTarget:s.cash,totalMin:s.total})}return e}function Zf(n){const{equity:t,bond:e,adjEquityMin:r,adjBondMin:i,priorHistory:s=[],consecutiveLimit:a=St.CONSECUTIVE_LIMIT,recoveryBuffer:l=St.RECOVERY_BUFFER,disableProtection:u=!1}=n;if(u)return{inProtection:!1,reason:"Protection disabled",consecutiveCashDraws:0,growthDeficit:0,canExitProtection:!1};const d=t+e,f=r+i,g=d-f,v=Math.max(0,-g);let I=0;for(let x=s.length-1;x>=0&&s[x].source==="Cash";x--)I++;const P=s[s.length-1],k=P?P.inProtection:!1;let R=!1,S="";return k?d>=f+l?(R=!1,S="Exiting protection - growth funds recovered"):(R=!0,S=`Continuing protection - need £${Math.round(f+l-d).toLocaleString()} more to exit`):v>0&&I+1>=a?(R=!0,S=`Entering protection - ${I+1} consecutive cash draws with growth below minimum`):v>0?S=`Growth below minimum but only ${I} consecutive cash draws (limit: ${a})`:S="Growth funds healthy",{inProtection:R,reason:S,consecutiveCashDraws:I,wasInProtection:k,totalGrowth:d,minGrowth:f,growthSurplus:g,growthDeficit:v,recoveryTarget:f+l,amountToRecover:R?Math.max(0,f+l-d):0,canExitProtection:k&&d>=f+l}}function tp(n){const{drawAmount:t,equity:e,bond:r,cash:i,adjEquityMin:s,adjBondMin:a,inProtection:l}=n,u=Math.max(0,e-s),d=Math.max(0,r-a),f=u+d;if(l)return{source:"Cash",fromEquity:0,fromBond:0,fromCash:Math.min(t,i),shortfall:Math.max(0,t-i),reason:"Protection mode - preserving growth funds"};if(f>=t){const I=u/f,P=d/f;return{source:"Growth",fromEquity:t*I,fromBond:t*P,fromCash:0,shortfall:0,reason:"Drawing proportionally from growth surplus"}}const g=f,v=Math.min(t-g,i);return{source:"Mixed",fromEquity:u,fromBond:d,fromCash:v,shortfall:Math.max(0,t-g-v),reason:"Insufficient growth surplus - using cash supplement"}}function ep(n){const{equity:t,bond:e,cash:r,adjEquityMin:i,adjBondMin:s,adjCashTarget:a,inProtection:l}=n,u=[],d=r-a;if(d<0?u.push({priority:"high",action:"Top up cash",amount:Math.abs(d),reason:`Cash £${Math.round(Math.abs(d)).toLocaleString()} below target`}):d>a*.5&&u.push({priority:"low",action:"Consider investing excess cash",amount:d-a*.25,reason:`Cash £${Math.round(d).toLocaleString()} above target`}),!l){const f=t-i,g=e-s;if(f+g>0){const I=i/(i+s),P=t/(t+e);Math.abs(P-I)>.1&&(P>I?u.push({priority:"medium",action:"Consider rebalancing equity to bonds",amount:(P-I)*(t+e),reason:`Equity ${Math.round(P*100)}% vs target ${Math.round(I*100)}%`}):u.push({priority:"medium",action:"Consider rebalancing bonds to equity",amount:(I-P)*(t+e),reason:`Equity ${Math.round(P*100)}% vs target ${Math.round(I*100)}%`}))}}return u}function bu(n){return function(){let t=n+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function fr(n,t,e){const r=e(),i=e(),s=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*i);return n+t*s}function Au(n){const t=JSON.stringify(n);let e=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e.toString(16)}var rc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},np=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,I=d&63;u||(I=64,a||(v=64)),r.push(e[f],e[g],e[v],e[I])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Su(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):np(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const g=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new rp;const v=s<<2|l>>4;if(r.push(v),d!==64){const I=l<<4&240|d>>2;if(r.push(I),g!==64){const P=d<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ip=function(n){const t=Su(n);return Ru.encodeByteArray(t,!0)},Mi=function(n){return ip(n).replace(/\./g,"")},Pu=function(n){try{return Ru.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const op=()=>sp().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof rc>"u")return;const n=rc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Pu(n[1]);return t&&JSON.parse(t)},Ji=()=>{try{return op()||ap()||lp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cu=n=>{var t,e;return(e=(t=Ji())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},cp=n=>{const t=Cu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},xu=()=>{var n;return(n=Ji())===null||n===void 0?void 0:n.config},ku=n=>{var t;return(t=Ji())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function hp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mi(JSON.stringify(e)),Mi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function fp(){var n;const t=(n=Ji())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _p(){return!fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ep(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=wp,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Ip(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ae(i,l,r)}}function Ip(n,t){return n.replace(Tp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Tp=/\{\$([^}]+)}/g;function bp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Di(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],a=t[i];if(ic(s)&&ic(a)){if(!Di(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ic(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function gr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Ap(n,t){const e=new Sp(n,t);return e.subscribe.bind(e)}class Sp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Rp(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=to),i.error===void 0&&(i.error=to),i.complete===void 0&&(i.complete=to);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function to(){}/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class hn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Pp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new up;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xp(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cp(n){return n===on?void 0:n}function xp(n){return n.instantiationMode==="EAGER"}/**
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
 */class kp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Pp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Mp={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Dp=Y.INFO,Np={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Vp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Np[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Go{constructor(t){this.name=t,this._logLevel=Dp,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Op=(n,t)=>t.some(e=>n instanceof e);let sc,oc;function Lp(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fp(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,_o=new WeakMap,Du=new WeakMap,eo=new WeakMap,Ko=new WeakMap;function Bp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(ze(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Mu.set(e,n)}).catch(()=>{}),Ko.set(t,n),t}function Up(n){if(_o.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});_o.set(n,t)}let vo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return _o.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Du.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ze(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function zp(n){vo=n(vo)}function qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(no(this),t,...e);return Du.set(r,t.sort?t.sort():[t]),ze(r)}:Fp().includes(n)?function(...t){return n.apply(no(this),t),ze(Mu.get(this))}:function(...t){return ze(n.apply(no(this),t))}}function $p(n){return typeof n=="function"?qp(n):(n instanceof IDBTransaction&&Up(n),Op(n,Lp())?new Proxy(n,vo):n)}function ze(n){if(n instanceof IDBRequest)return Bp(n);if(eo.has(n))return eo.get(n);const t=$p(n);return t!==n&&(eo.set(n,t),Ko.set(t,n)),t}const no=n=>Ko.get(n);function jp(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,t),l=ze(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ze(a.result),u.oldVersion,u.newVersion,ze(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Hp=["get","getKey","getAll","getAllKeys","count"],Wp=["put","add","delete","clear"],ro=new Map;function ac(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ro.get(t))return ro.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Wp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hp.includes(e)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&u.done]))[0]};return ro.set(t,s),s}zp(n=>({...n,get:(t,e,r)=>ac(t,e)||n.get(t,e,r),has:(t,e)=>!!ac(t,e)||n.has(t,e)}));/**
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
 */class Gp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Kp(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Kp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Eo="@firebase/app",lc="0.10.13";/**
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
 */const Ee=new Go("@firebase/app"),Yp="@firebase/app-compat",Qp="@firebase/analytics-compat",Xp="@firebase/analytics",Jp="@firebase/app-check-compat",Zp="@firebase/app-check",tm="@firebase/auth",em="@firebase/auth-compat",nm="@firebase/database",rm="@firebase/data-connect",im="@firebase/database-compat",sm="@firebase/functions",om="@firebase/functions-compat",am="@firebase/installations",lm="@firebase/installations-compat",cm="@firebase/messaging",um="@firebase/messaging-compat",hm="@firebase/performance",dm="@firebase/performance-compat",fm="@firebase/remote-config",pm="@firebase/remote-config-compat",mm="@firebase/storage",gm="@firebase/storage-compat",ym="@firebase/firestore",_m="@firebase/vertexai-preview",vm="@firebase/firestore-compat",Em="firebase",wm="10.14.1";/**
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
 */const wo="[DEFAULT]",Im={[Eo]:"fire-core",[Yp]:"fire-core-compat",[Xp]:"fire-analytics",[Qp]:"fire-analytics-compat",[Zp]:"fire-app-check",[Jp]:"fire-app-check-compat",[tm]:"fire-auth",[em]:"fire-auth-compat",[nm]:"fire-rtdb",[rm]:"fire-data-connect",[im]:"fire-rtdb-compat",[sm]:"fire-fn",[om]:"fire-fn-compat",[am]:"fire-iid",[lm]:"fire-iid-compat",[cm]:"fire-fcm",[um]:"fire-fcm-compat",[hm]:"fire-perf",[dm]:"fire-perf-compat",[fm]:"fire-rc",[pm]:"fire-rc-compat",[mm]:"fire-gcs",[gm]:"fire-gcs-compat",[ym]:"fire-fst",[vm]:"fire-fst-compat",[_m]:"fire-vertex","fire-js":"fire-js",[Em]:"fire-js-all"};/**
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
 */const Ni=new Map,Tm=new Map,Io=new Map;function cc(n,t){try{n.container.addComponent(t)}catch(e){Ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fn(n){const t=n.name;if(Io.has(t))return Ee.debug(`There were multiple attempts to register component ${t}.`),!1;Io.set(t,n);for(const e of Ni.values())cc(e,n);for(const e of Tm.values())cc(e,n);return!0}function Yo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function te(n){return n.settings!==void 0}/**
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
 */const bm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Fr("app","Firebase",bm);/**
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
 */class Am{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=wm;function Nu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:wo,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(e||(e=xu()),!e)throw qe.create("no-options");const s=Ni.get(i);if(s){if(Di(e,s.options)&&Di(r,s.config))return s;throw qe.create("duplicate-app",{appName:i})}const a=new kp(i);for(const u of Io.values())a.addComponent(u);const l=new Am(e,r,a);return Ni.set(i,l),l}function Vu(n=wo){const t=Ni.get(n);if(!t&&n===wo&&xu())return Nu();if(!t)throw qe.create("no-app",{appName:n});return t}function $e(n,t,e){var r;let i=(r=Im[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ee.warn(l.join(" "));return}Fn(new hn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Sm="firebase-heartbeat-database",Rm=1,Pr="firebase-heartbeat-store";let io=null;function Ou(){return io||(io=jp(Sm,Rm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Pr)}catch(e){console.warn(e)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),io}async function Pm(n){try{const e=(await Ou()).transaction(Pr),r=await e.objectStore(Pr).get(Lu(n));return await e.done,r}catch(t){if(t instanceof Ae)Ee.warn(t.message);else{const e=qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ee.warn(e.message)}}}async function uc(n,t){try{const r=(await Ou()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(t,Lu(n)),await r.done}catch(e){if(e instanceof Ae)Ee.warn(e.message);else{const r=qe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ee.warn(r.message)}}}function Lu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cm=1024,xm=30*24*60*60*1e3;class km{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=xm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hc(),{heartbeatsToSend:r,unsentEntries:i}=Mm(this._heartbeatsCache.heartbeats),s=Mi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ee.warn(e),""}}}function hc(){return new Date().toISOString().substring(0,10)}function Mm(n,t=Cm){const e=[];let r=n.slice();for(const i of n){const s=e.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),dc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),dc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vp()?Ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function dc(n){return Mi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Nm(n){Fn(new hn("platform-logger",t=>new Gp(t),"PRIVATE")),Fn(new hn("heartbeat",t=>new km(t),"PRIVATE")),$e(Eo,lc,n),$e(Eo,lc,"esm2017"),$e("fire-js","")}Nm("");var Vm="firebase",Om="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(Vm,Om,"app");function Qo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Fu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lm=Fu,Bu=new Fr("auth","Firebase",Fu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Go("@firebase/auth");function Fm(n,...t){Vi.logLevel<=Y.WARN&&Vi.warn(`Auth (${Gn}): ${n}`,...t)}function wi(n,...t){Vi.logLevel<=Y.ERROR&&Vi.error(`Auth (${Gn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,...t){throw Jo(n,...t)}function ee(n,...t){return Jo(n,...t)}function Xo(n,t,e){const r=Object.assign(Object.assign({},Lm()),{[t]:e});return new Fr("auth","Firebase",r).create(t,{appName:n.name})}function _e(n){return Xo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bm(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Yt(n,"argument-error"),Xo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jo(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Bu.create(n,...t)}function q(n,t,...e){if(!n)throw Jo(t,...e)}function me(n){const t="INTERNAL ASSERTION FAILED: "+n;throw wi(t),new Error(t)}function we(n,t){n||me(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Um(){return fc()==="http:"||fc()==="https:"}function fc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||mp()||"connection"in navigator)?navigator.onLine:!0}function qm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.shortDelay=t,this.longDelay=e,we(e>t,"Short delay should be less than long delay!"),this.isMobile=dp()||gp()}get(){return zm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,t){we(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Ur(3e4,6e4);function Se(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function ce(n,t,e,r,i={}){return zu(n,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=Br(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:t,headers:u},s);return pp()||(d.referrerPolicy="no-referrer"),Uu.fetch()(qu(n,n.config.apiHost,e,l),d)})}async function zu(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},$m),t);try{const i=new Wm(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw mi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw mi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw mi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Xo(n,f,d);Yt(n,f)}}catch(i){if(i instanceof Ae)throw i;Yt(n,"network-request-failed",{message:String(i)})}}async function zr(n,t,e,r,i={}){const s=await ce(n,t,e,r,i);return"mfaPendingCredential"in s&&Yt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qu(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Zo(n.config,i):`${n.config.apiScheme}://${i}`}function Hm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ee(this.auth,"network-request-failed")),jm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ee(n,t,r);return i.customData._tokenResponse=e,i}function pc(n){return n!==void 0&&n.enterprise!==void 0}class Gm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Hm(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Km(n,t){return ce(n,"GET","/v2/recaptchaConfig",Se(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(n,t){return ce(n,"POST","/v1/accounts:delete",t)}async function $u(n,t){return ce(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qm(n,t=!1){const e=ut(n),r=await e.getIdToken(t),i=ta(r);q(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wr(so(i.auth_time)),issuedAtTime:wr(so(i.iat)),expirationTime:wr(so(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function so(n){return Number(n)*1e3}function ta(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pu(e);return i?JSON.parse(i):(wi("Failed to decode base64 JWT payload"),null)}catch(i){return wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mc(n){const t=ta(n);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ae&&Xm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Bn(n,$u(e,{idToken:r}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ju(s.providerUserInfo):[],l=tg(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Zm(n){const t=ut(n);await Oi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function tg(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ju(n){return n.map(t=>{var{providerId:e}=t,r=Qo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(n,t){const e=await zu(n,{},async()=>{const r=Br({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=qu(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function ng(n,t){return ce(n,"POST","/v2/accounts:revokeToken",Se(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):mc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){q(t.length!==0,"internal-error");const e=mc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await eg(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,a=new xn;return r&&(q(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,t){q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ge{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Qo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Bn(this,this.stsTokenManager.getToken(this.auth,t));return q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Qm(this,t)}reload(){return Zm(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ge(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(_e(this.auth));const t=await this.getIdToken();return await Bn(this,Ym(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,a,l,u,d,f;const g=(r=e.displayName)!==null&&r!==void 0?r:void 0,v=(i=e.email)!==null&&i!==void 0?i:void 0,I=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=e.photoURL)!==null&&a!==void 0?a:void 0,k=(l=e.tenantId)!==null&&l!==void 0?l:void 0,R=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,S=(d=e.createdAt)!==null&&d!==void 0?d:void 0,x=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:D,emailVerified:O,isAnonymous:G,providerData:j,stsTokenManager:E}=e;q(D&&E,t,"internal-error");const m=xn.fromJSON(this.name,E);q(typeof D=="string",t,"internal-error"),Me(g,t.name),Me(v,t.name),q(typeof O=="boolean",t,"internal-error"),q(typeof G=="boolean",t,"internal-error"),Me(I,t.name),Me(P,t.name),Me(k,t.name),Me(R,t.name),Me(S,t.name),Me(x,t.name);const y=new ge({uid:D,auth:t,email:v,emailVerified:O,displayName:g,isAnonymous:G,photoURL:P,phoneNumber:I,tenantId:k,stsTokenManager:m,createdAt:S,lastLoginAt:x});return j&&Array.isArray(j)&&(y.providerData=j.map(w=>Object.assign({},w))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(t,e,r=!1){const i=new xn;i.updateFromServerResponse(e);const s=new ge({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Oi(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ju(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xn;l.updateFromIdToken(r);const u=new ge({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map;function ye(n){we(n instanceof Function,"Expected a class definition");let t=gc.get(n);return t?(we(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,gc.set(n,t),t)}/**
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
 */class Hu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hu.type="NONE";const yc=Hu;/**
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
 */function Ii(n,t,e){return`firebase:${n}:${t}:${e}`}class kn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ii(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ii("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ge._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new kn(ye(yc),t,r);const i=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ye(yc);const a=Ii(r,t.config.apiKey,t.name);let l=null;for(const d of e)try{const f=await d._get(a);if(f){const g=ge._fromJSON(t,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new kn(s,t,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new kn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xu(t))return"Blackberry";if(Ju(t))return"Webos";if(Gu(t))return"Safari";if((t.includes("chrome/")||Ku(t))&&!t.includes("edge/"))return"Chrome";if(Qu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wu(n=Ct()){return/firefox\//i.test(n)}function Gu(n=Ct()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ku(n=Ct()){return/crios\//i.test(n)}function Yu(n=Ct()){return/iemobile/i.test(n)}function Qu(n=Ct()){return/android/i.test(n)}function Xu(n=Ct()){return/blackberry/i.test(n)}function Ju(n=Ct()){return/webos/i.test(n)}function ea(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rg(n=Ct()){var t;return ea(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ig(){return yp()&&document.documentMode===10}function Zu(n=Ct()){return ea(n)||Qu(n)||Ju(n)||Xu(n)||/windows phone/i.test(n)||Yu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n,t=[]){let e;switch(n){case"Browser":e=_c(Ct());break;case"Worker":e=`${_c(Ct())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Gn}/${r}`}/**
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
 */class sg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function og(n,t={}){return ce(n,"GET","/v2/passwordPolicy",Se(n,t))}/**
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
 */const ag=6;class lg{constructor(t){var e,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:ag,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ye(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await $u(this,{idToken:t}),r=await ge._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(te(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Oi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=qm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(te(this.app))return Promise.reject(_e(this));const e=t?ut(t):null;return e&&q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(_e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return te(this.app)?Promise.reject(_e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await og(this),e=new lg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await ng(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ye(t)||this._popupRedirectResolver;q(e,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[ye(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Fm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Re(n){return ut(n)}class vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ap(e=>this.observer=e)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ug(n){Zi=n}function eh(n){return Zi.loadJS(n)}function hg(){return Zi.recaptchaEnterpriseScript}function dg(){return Zi.gapiScript}function fg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const pg="recaptcha-enterprise",mg="NO_RECAPTCHA";class gg{constructor(t){this.type=pg,this.auth=Re(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Km(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Gm(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;pc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(d=>{a(d)}).catch(()=>{a(mg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!e&&pc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hg();u.length!==0&&(u+=l),eh(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Ec(n,t,e,r=!1){const i=new gg(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Li(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ec(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ec(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,t){const e=Yo(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Di(s,t??{}))return i;Yt(i,"already-initialized")}return e.initialize({options:t})}function _g(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ye);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function vg(n,t,e){const r=Re(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=nh(t),{host:a,port:l}=Eg(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wg()}function nh(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Eg(n){const t=nh(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:wc(a)}}}function wc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function wg(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return me("not implemented")}_getIdTokenResponse(t){return me("not implemented")}_linkToIdToken(t,e){return me("not implemented")}_getReauthenticationResolver(t){return me("not implemented")}}async function Ig(n,t){return ce(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(n,t){return zr(n,"POST","/v1/accounts:signInWithPassword",Se(n,t))}async function bg(n,t){return ce(n,"POST","/v1/accounts:sendOobCode",Se(n,t))}async function Ag(n,t){return bg(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,t){return zr(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,t))}async function Rg(n,t){return zr(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends na{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Cr(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Cr(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(t,e,"signInWithPassword",Tg);case"emailLink":return Sg(t,{email:this._email,oobCode:this._password});default:Yt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(t,r,"signUpPassword",Ig);case"emailLink":return Rg(t,{idToken:e,email:this._email,oobCode:this._password});default:Yt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,t){return zr(n,"POST","/v1/accounts:signInWithIdp",Se(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class dn extends na{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Yt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Qo(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new dn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Mn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Mn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Mn(t,e)}buildRequest(){const t={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Br(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xg(n){const t=mr(gr(n)).link,e=t?mr(gr(t)).deep_link_id:null,r=mr(gr(n)).deep_link_id;return(r?mr(gr(r)).link:null)||r||e||t||n}class ra{constructor(t){var e,r,i,s,a,l;const u=mr(gr(t)),d=(e=u.apiKey)!==null&&e!==void 0?e:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Cg((i=u.mode)!==null&&i!==void 0?i:null);q(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const e=xg(t);try{return new ra(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.providerId=Kn.PROVIDER_ID}static credential(t,e){return Cr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=ra.parseLink(e);return q(r,"argument-error"),Cr._fromEmailAndCode(t,r.code,r.tenantId)}}Kn.PROVIDER_ID="password";Kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qr extends ia{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends qr{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ne.credentialFromTaggedObject(t)}static credentialFromError(t){return Ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ne.credential(t.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return dn._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return pe.credential(e,r)}catch{return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com";pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends qr{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ve.credential(t.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends qr{constructor(){super("twitter.com")}static credential(t,e){return dn._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Oe.credential(e,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,t){return zr(n,"POST","/v1/accounts:signUp",Se(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await ge._fromIdTokenResponse(t,r,i),a=Ic(r);return new fn({user:s,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Ic(r);return new fn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Ic(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Ae{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Fi(t,e,r,i)}}function rh(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(n,s,t,r):s})}async function Mg(n,t,e=!1){const r=await Bn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return fn._forOperation(n,"link",r)}/**
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
 */async function Dg(n,t,e=!1){const{auth:r}=n;if(te(r.app))return Promise.reject(_e(r));const i="reauthenticate";try{const s=await Bn(n,rh(r,i,t,n),e);q(s.idToken,r,"internal-error");const a=ta(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),fn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(n,t,e=!1){if(te(n.app))return Promise.reject(_e(n));const r="signIn",i=await rh(n,r,t),s=await fn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function Ng(n,t){return ih(Re(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(n){const t=Re(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Vg(n,t,e){const r=Re(n);await Li(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ag)}async function Og(n,t,e){if(te(n.app))return Promise.reject(_e(n));const r=Re(n),a=await Li(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sh(n),u}),l=await fn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Lg(n,t,e){return te(n.app)?Promise.reject(_e(n)):Ng(ut(n),Kn.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sh(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,t){return ce(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=ut(n),s={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await Bn(r,Fg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ug(n,t,e,r){return ut(n).onIdTokenChanged(t,e,r)}function zg(n,t,e){return ut(n).beforeAuthStateChanged(t,e)}function qg(n,t,e,r){return ut(n).onAuthStateChanged(t,e,r)}function $g(n){return ut(n).signOut()}const Bi="__sak";/**
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
 */class oh{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=1e3,Hg=10;class ah extends oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ig()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Hg):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ah.type="LOCAL";const Wg=ah;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}lh.type="SESSION";const ch=lh;/**
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
 */function Gg(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(e.origin,s)),u=await Gg(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Kg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=sa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return window}function Yg(n){ie().location.href=n}/**
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
 */function uh(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function Qg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Jg(){return uh()?self:null}/**
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
 */const hh="firebaseLocalStorageDb",Zg=1,Ui="firebaseLocalStorage",dh="fbase_key";class $r{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function es(n,t){return n.transaction([Ui],t?"readwrite":"readonly").objectStore(Ui)}function ty(){const n=indexedDB.deleteDatabase(hh);return new $r(n).toPromise()}function Ao(){const n=indexedDB.open(hh,Zg);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ui,{keyPath:dh})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ui)?t(r):(r.close(),await ty(),t(await Ao()))})})}async function Tc(n,t,e){const r=es(n,!0).put({[dh]:t,value:e});return new $r(r).toPromise()}async function ey(n,t){const e=es(n,!1).get(t),r=await new $r(e).toPromise();return r===void 0?null:r.value}function bc(n,t){const e=es(n,!0).delete(t);return new $r(e).toPromise()}const ny=800,ry=3;class fh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>ry)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Jg()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Qg(),!this.activeServiceWorker)return;this.sender=new Kg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ao();return await Tc(t,Bi,"1"),await bc(t,Bi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>ey(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>bc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=es(i,!1).getAll();return new $r(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fh.type="LOCAL";const iy=fh;new Ur(3e4,6e4);/**
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
 */function ph(n,t){return t?ye(t):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oa extends na{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Mn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sy(n){return ih(n.auth,new oa(n),n.bypassAuthState)}function oy(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Dg(e,new oa(n),n.bypassAuthState)}async function ay(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Mg(e,new oa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sy;case"linkViaPopup":case"linkViaRedirect":return ay;case"reauthViaPopup":case"reauthViaRedirect":return oy;default:Yt(this.auth,"internal-error")}}resolve(t){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Ur(2e3,1e4);async function cy(n,t,e){if(te(n.app))return Promise.reject(ee(n,"operation-not-supported-in-this-environment"));const r=Re(n);Bm(n,t,ia);const i=ph(r,e);return new an(r,"signInViaPopup",t,i).executeNotNull()}class an extends mh{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const t=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ly.get())};t()}}an.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="pendingRedirect",Ti=new Map;class hy extends mh{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ti.get(this.auth._key());if(!t){try{const r=await dy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ti.set(this.auth._key(),t)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,t){const e=my(t),r=py(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function fy(n,t){Ti.set(n._key(),t)}function py(n){return ye(n._redirectPersistence)}function my(n){return Ii(uy,n.config.apiKey,n.name)}async function gy(n,t,e=!1){if(te(n.app))return Promise.reject(_e(n));const r=Re(n),i=ph(r,t),a=await new hy(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=10*60*1e3;class _y{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vy(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!gh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ee(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ac(t))}saveEventToCache(t){this.cachedEventUids.add(Ac(t)),this.lastProcessedEventTime=Date.now()}}function Ac(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function gh({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(n,t={}){return ce(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iy=/^https?/;async function Ty(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ey(n);for(const e of t)try{if(by(e))return}catch{}Yt(n,"unauthorized-domain")}function by(n){const t=To(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Iy.test(e))return!1;if(wy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ay=new Ur(3e4,6e4);function Sc(){const n=ie().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Sy(n){return new Promise((t,e)=>{var r,i,s;function a(){Sc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sc(),e(ee(n,"network-request-failed"))},timeout:Ay.get()})}if(!((i=(r=ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ie().gapi)===null||s===void 0)&&s.load)a();else{const l=fg("iframefcb");return ie()[l]=()=>{gapi.load?a():e(ee(n,"network-request-failed"))},eh(`${dg()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw bi=null,t})}let bi=null;function Ry(n){return bi=bi||Sy(n),bi}/**
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
 */const Py=new Ur(5e3,15e3),Cy="__/auth/iframe",xy="emulator/auth/iframe",ky={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},My=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dy(n){const t=n.config;q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Zo(t,xy):`https://${n.config.authDomain}/${Cy}`,r={apiKey:t.apiKey,appName:n.name,v:Gn},i=My.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Br(r).slice(1)}`}async function Ny(n){const t=await Ry(n),e=ie().gapi;return q(e,n,"internal-error"),t.open({where:document.body,url:Dy(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ky,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ee(n,"network-request-failed"),l=ie().setTimeout(()=>{s(a)},Py.get());function u(){ie().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oy=500,Ly=600,Fy="_blank",By="http://localhost";class Rc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uy(n,t,e,r=Oy,i=Ly){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Vy),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ct().toLowerCase();e&&(l=Ku(d)?Fy:e),Wu(d)&&(t=t||By,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[I,P])=>`${v}${I}=${P},`,"");if(rg(d)&&l!=="_self")return zy(t||"",l),new Rc(null);const g=window.open(t||"",l,f);q(g,n,"popup-blocked");try{g.focus()}catch{}return new Rc(g)}function zy(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const qy="__/auth/handler",$y="emulator/auth/handler",jy=encodeURIComponent("fac");async function Pc(n,t,e,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Gn,eventId:i};if(t instanceof ia){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",bp(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof qr){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${jy}=${encodeURIComponent(u)}`:"";return`${Hy(n)}?${Br(l).slice(1)}${d}`}function Hy({config:n}){return n.emulator?Zo(n,$y):`https://${n.authDomain}/${qy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="webStorageSupport";class Wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ch,this._completeRedirectFn=gy,this._overrideRedirectResult=fy}async _openPopup(t,e,r,i){var s;we((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Pc(t,e,r,To(),i);return Uy(t,a,sa())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Pc(t,e,r,To(),i);return Yg(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(we(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Ny(t),r=new _y(t);return e.register("authEvent",i=>(q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(oo,{type:oo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oo];a!==void 0&&e(!!a),Yt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ty(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Zu()||Gu()||ea()}}const Gy=Wy;var Cc="@firebase/auth",xc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qy(n){Fn(new hn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(n)},d=new cg(r,i,s,u);return _g(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fn(new hn("auth-internal",t=>{const e=Re(t.getProvider("auth").getImmediate());return(r=>new Ky(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Cc,xc,Yy(n)),$e(Cc,xc,"esm2017")}/**
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
 */const Xy=5*60,Jy=ku("authIdTokenMaxAge")||Xy;let kc=null;const Zy=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Jy)return;const i=e==null?void 0:e.token;kc!==i&&(kc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t_(n=Vu()){const t=Yo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=yg(n,{popupRedirectResolver:Gy,persistence:[iy,Wg,ch]}),r=ku("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Zy(s.toString());zg(e,a,()=>a(e.currentUser)),Ug(e,l=>a(l))}}const i=Cu("auth");return i&&vg(e,`http://${i}`),e}function e_(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}ug({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ee("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",e_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qy("Browser");var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,yh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,T,A){for(var _=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)_[Mt-2]=arguments[Mt];return m.prototype[T].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)w[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;16>T;++T)w[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],T=E.g[2];var A=E.g[3],_=m+(A^y&(T^A))+w[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(T^m&(y^T))+w[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(y^A&(m^y))+w[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(m^T&(A^m))+w[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=m+(A^y&(T^A))+w[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(T^m&(y^T))+w[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(y^A&(m^y))+w[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(m^T&(A^m))+w[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=m+(A^y&(T^A))+w[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(T^m&(y^T))+w[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(y^A&(m^y))+w[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(m^T&(A^m))+w[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=m+(A^y&(T^A))+w[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(T^m&(y^T))+w[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(y^A&(m^y))+w[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(m^T&(A^m))+w[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=m+(T^A&(y^T))+w[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(m^y))+w[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^y&(A^m))+w[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(T^A))+w[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(y^T))+w[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(m^y))+w[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^y&(A^m))+w[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(T^A))+w[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(y^T))+w[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(m^y))+w[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^y&(A^m))+w[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(T^A))+w[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(y^T))+w[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(m^y))+w[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^y&(A^m))+w[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(T^A))+w[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=m+(y^T^A)+w[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^T)+w[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^y)+w[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^m)+w[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=m+(y^T^A)+w[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^T)+w[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^y)+w[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^m)+w[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=m+(y^T^A)+w[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^T)+w[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^y)+w[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^m)+w[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=m+(y^T^A)+w[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^T)+w[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^y)+w[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^m)+w[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=m+(T^(y|~A))+w[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~T))+w[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~y))+w[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~m))+w[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=m+(T^(y|~A))+w[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~T))+w[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~y))+w[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~m))+w[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=m+(T^(y|~A))+w[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~T))+w[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~y))+w[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~m))+w[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=m+(T^(y|~A))+w[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~T))+w[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~y))+w[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,w=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=y;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(w[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,w),T=0;break}}else for(;A<m;)if(w[T++]=E[A++],T==this.blockSize){i(this,w),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)E[y++]=this.g[m]>>>w&255;return E};function s(E,m){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],w=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;w&&A==m||(y[T]=A,w=!1)}this.g=y}var l={};function u(E){return-128<=E&&128>E?s(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return R(d(-E));for(var m=[],y=1,w=0;E>=y;w++)m[w]=E/y|0,y*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return R(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),w=g,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),_=parseInt(E.substring(T,T+A),m);8>A?(A=d(Math.pow(m,A)),w=w.j(A).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var g=u(0),v=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-R(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var m=d(Math.pow(E,6)),y=this,w="";;){var T=O(y,m).g;y=S(y,T.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,P(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=S(this,E),k(E)?-1:P(E)?0:1};function R(E){for(var m=E.g.length,y=[],w=0;w<m;w++)y[w]=~E.g[w];return new a(y,~E.h).add(v)}n.abs=function(){return k(this)?R(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0,T=0;T<=m;T++){var A=w+(this.i(T)&65535)+(E.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=_>>>16,A&=65535,_&=65535,y[T]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function S(E,m){return E.add(R(m))}n.j=function(E){if(P(this)||P(E))return g;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(I)&&0>E.l(I))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var A=this.i(w)>>>16,_=this.i(w)&65535,Mt=E.i(T)>>>16,Ht=E.i(T)&65535;y[2*w+2*T]+=_*Ht,x(y,2*w+2*T),y[2*w+2*T+1]+=A*Ht,x(y,2*w+2*T+1),y[2*w+2*T+1]+=_*Mt,x(y,2*w+2*T+1),y[2*w+2*T+2]+=A*Mt,x(y,2*w+2*T+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function x(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function D(E,m){this.g=E,this.h=m}function O(E,m){if(P(m))throw Error("division by zero");if(P(E))return new D(g,g);if(k(E))return m=O(R(E),m),new D(R(m.g),R(m.h));if(k(m))return m=O(E,R(m)),new D(R(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=m;0>=w.l(E);)y=G(y),w=G(w);var T=j(y,1),A=j(w,1);for(w=j(w,2),y=j(y,2);!P(w);){var _=A.add(w);0>=_.l(E)&&(T=T.add(y),A=_),w=j(w,1),y=j(y,1)}return m=S(E,T.j(m)),new D(T,m)}for(T=g;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=d(y),_=A.j(m);k(_)||0<_.l(E);)y-=w,A=d(y),_=A.j(m);P(A)&&(A=v),T=T.add(A),E=S(E,_)}return new D(T,E)}n.A=function(E){return O(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function G(E){for(var m=E.g.length+1,y=[],w=0;w<m;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function j(E,m){var y=m>>5;m%=32;for(var w=E.g.length-y,T=[],A=0;A<w;A++)T[A]=0<m?E.i(A+y)>>>m|E.i(A+y+1)<<32-m:E.i(A+y);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,cn=a}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _h,yr,vh,Ai,So,Eh,wh,Ih;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break t;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function I(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var V=Array(arguments.length-2),et=2;et<arguments.length;et++)V[et-2]=arguments[et];return c.prototype[b].apply(p,V)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function R(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let V=0;V<C;V++)o[b+V]=p[V]}else o.push(p)}}class S{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var G=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function j(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){l.setTimeout(()=>{throw o},0)}function _(){var o=dt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Mt{constructor(){this.h=this.g=null}add(c,h){const p=Ht.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ht=new S(()=>new Qt,o=>o.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,re=!1,dt=new Mt,pt=()=>{const o=l.Promise.resolve(void 0);Bt=()=>{o.then(vn)}};var vn=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=Ht;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}re=!1};function Wt(){this.s=this.s,this.C=this.C}Wt.prototype.s=!1,Wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Dt(o,c){if(tt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(G){t:{try{O(c.nodeName);var b=!0;break t}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Dt.aa.h.call(this)}}P(Dt,tt);var ue={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Jt(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Pe,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gt(o){this.src=o,this.g={},this.h=0}Gt.prototype.add=function(o,c,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var V=xs(o,c,p,b);return-1<V?(c=o[V],h||(c.fa=!1)):(c=new Jt(c,this.src,C,!!p,b),c.fa=h,o.push(c)),c};function Cs(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(Ut(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xs(o,c,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return b}return-1}var ks="closure_lm_"+(1e6*Math.random()|0),Ms={};function il(o,c,h,p,b){if(Array.isArray(c)){for(var C=0;C<c.length;C++)il(o,c[C],h,p,b);return null}return h=al(h),o&&o[nt]?o.K(c,h,d(p)?!!p.capture:!1,b):lf(o,c,h,!1,p,b)}function lf(o,c,h,p,b,C){if(!c)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,et=Ns(o);if(et||(o[ks]=et=new Gt(o)),h=et.add(c,h,p,V,C),h.proxy)return h;if(p=cf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Xt||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(ol(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function cf(){function o(h){return c.call(o.src,o.listener,h)}const c=uf;return o}function sl(o,c,h,p,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)sl(o,c[C],h,p,b);else p=d(p)?!!p.capture:!!p,h=al(h),o&&o[nt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=xs(C,h,p,b),-1<h&&(Ut(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ns(o))&&(c=o.g[c.toString()],o=-1,c&&(o=xs(c,h,p,b)),(h=-1<o?c[o]:null)&&Ds(h))}function Ds(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[nt])Cs(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(ol(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Ns(c))?(Cs(h,o),h.h==0&&(h.src=null,c[ks]=null)):Ut(o)}}}function ol(o){return o in Ms?Ms[o]:Ms[o]="on"+o}function uf(o,c){if(o.da)o=!0;else{c=new Dt(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Ds(o),o=h.call(p,c)}return o}function Ns(o){return o=o[ks],o instanceof Gt?o:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(o){return typeof o=="function"?o:(o[Vs]||(o[Vs]=function(c){return o.handleEvent(c)}),o[Vs])}function It(){Wt.call(this),this.i=new Gt(this),this.M=this,this.F=null}P(It,Wt),It.prototype[nt]=!0,It.prototype.removeEventListener=function(o,c,h,p){sl(this,o,c,h,p)};function xt(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new tt(c,o);else if(c instanceof tt)c.target=c.target||o;else{var b=c;c=new tt(p,o),w(c,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var V=c.g=h[C];b=Zr(V,p,!0,c)&&b}if(V=c.g=o,b=Zr(V,p,!0,c)&&b,b=Zr(V,p,!1,c)&&b,h)for(C=0;C<h.length;C++)V=c.g=h[C],b=Zr(V,p,!1,c)&&b}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Ut(h[p]);delete o.g[c],o.h--}}this.F=null},It.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},It.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Zr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,C=0;C<c.length;++C){var V=c[C];if(V&&!V.da&&V.capture==h){var et=V.listener,gt=V.ha||V.src;V.fa&&Cs(o.i,V),b=et.call(gt,p)!==!1&&b}}return b&&!p.defaultPrevented}function ll(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function cl(o){o.g=ll(()=>{o.g=null,o.i&&(o.i=!1,cl(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class hf extends Wt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:cl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tr(o){Wt.call(this),this.h=o,this.g={}}P(tr,Wt);var ul=[];function hl(o){j(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ds(c)},o),o.g={}}tr.prototype.N=function(){tr.aa.N.call(this),hl(this)},tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Os=l.JSON.stringify,df=l.JSON.parse,ff=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ls(){}Ls.prototype.h=null;function dl(o){return o.h||(o.h=o.i())}function fl(){}var er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fs(){tt.call(this,"d")}P(Fs,tt);function Bs(){tt.call(this,"c")}P(Bs,tt);var tn={},pl=null;function ti(){return pl=pl||new It}tn.La="serverreachability";function ml(o){tt.call(this,tn.La,o)}P(ml,tt);function nr(o){const c=ti();xt(c,new ml(c))}tn.STAT_EVENT="statevent";function gl(o,c){tt.call(this,tn.STAT_EVENT,o),this.stat=c}P(gl,tt);function kt(o){const c=ti();xt(c,new gl(c,o))}tn.Ma="timingevent";function yl(o,c){tt.call(this,tn.Ma,o),this.size=c}P(yl,tt);function rr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ir(){this.g=!0}ir.prototype.xa=function(){this.g=!1};function pf(o,c,h,p,b,C){o.info(function(){if(o.g)if(C)for(var V="",et=C.split("&"),gt=0;gt<et.length;gt++){var X=et[gt].split("=");if(1<X.length){var Tt=X[0];X=X[1];var bt=Tt.split("_");V=2<=bt.length&&bt[1]=="type"?V+(Tt+"="+X+"&"):V+(Tt+"=redacted&")}}else V=null;else V=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function mf(o,c,h,p,b,C,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+V})}function En(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+yf(o,h)+(p?" "+p:"")})}function gf(o,c){o.info(function(){return"TIMEOUT: "+c})}ir.prototype.info=function(){};function yf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return Os(h)}catch{return c}}var ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Us;function ni(){}P(ni,Ls),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},Us=new ni;function Ce(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var El={},zs={};function qs(o,c,h){o.L=1,o.v=oi(he(c)),o.m=h,o.P=!0,wl(o,null)}function wl(o,c){o.F=Date.now(),ri(o),o.A=he(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Vl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new vl,o.g=Zl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new hf(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ul[0]=b.toString()),b=ul);for(var C=0;C<b.length;C++){var V=il(h,b[C],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),nr(),pf(o.i,o.u,o.A,o.l,o.R,o.m)}Ce.prototype.ca=function(o){o=o.target;const c=this.M;c&&de(o)==3?c.j():this.Y(o)},Ce.prototype.Y=function(o){try{if(o==this.g)t:{const bt=de(this.g);var c=this.g.Ba();const Tn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||ql(this.g)))){this.J||bt!=4||c==7||(c==8||0>=Tn?nr(3):nr(2)),$s(this);var h=this.g.Z();this.X=h;e:if(Il(this)){var p=ql(this.g);o="";var b=p.length,C=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),sr(this);var V="";break e}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,mf(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,gt=this.g;if((et=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(et)){var X=et;break e}}X=null}if(h=X)En(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,js(this,h);else{this.o=!1,this.s=3,kt(12),en(this),sr(this);break t}}if(this.P){h=!0;let Zt;for(;!this.J&&this.C<V.length;)if(Zt=_f(this,V),Zt==zs){bt==4&&(this.s=4,kt(14),h=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==El){this.s=4,kt(15),En(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else En(this.i,this.l,Zt,null),js(this,Zt);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||V.length!=0||this.h.h||(this.s=1,kt(16),h=!1),this.o=this.o&&h,!h)En(this.i,this.l,V,"[Invalid Chunked Response]"),en(this),sr(this);else if(0<V.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Qs(Tt),Tt.M=!0,kt(11))}}else En(this.i,this.l,V,null),js(this,V);bt==4&&en(this),this.o&&!this.J&&(bt==4?Yl(this.j,this):(this.o=!1,ri(this)))}else Vf(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),en(this),sr(this)}}}catch{}finally{}};function Il(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function _f(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?zs:(h=Number(c.substring(h,p)),isNaN(h)?El:(p+=1,p+h>c.length?zs:(c=c.slice(p,p+h),o.C=p+h,c)))}Ce.prototype.cancel=function(){this.J=!0,en(this)};function ri(o){o.S=Date.now()+o.I,Tl(o,o.I)}function Tl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rr(v(o.ba,o),c)}function $s(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ce.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gf(this.i,this.A),this.L!=2&&(nr(),kt(17)),en(this),this.s=2,sr(this)):Tl(this,this.S-o)};function sr(o){o.j.G==0||o.J||Yl(o.j,o)}function en(o){$s(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,hl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function js(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Hs(h.h,o))){if(!o.K&&Hs(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)di(h),ui(h);else break t;Ys(h),kt(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=rr(v(h.Za,h),6e3));if(1>=Sl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else rn(h,11)}else if((o.K||h.g==o)&&di(h),!x(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let X=b[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Tt=X[3];Tt!=null&&(h.la=Tt,h.j.info("VER="+h.la));const bt=X[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const Tn=X[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(p=1.5*Tn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Zt=o.g;if(Zt){const pi=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var C=p.h;C.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ws(C,C.h),C.h=null))}if(p.D){const Xs=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xs&&(p.ya=Xs,rt(p.I,p.D,Xs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=o;if(p.qa=Jl(p,p.J?p.ia:null,p.W),V.K){Rl(p.h,V);var et=V,gt=p.L;gt&&(et.I=gt),et.B&&($s(et),ri(et)),p.g=V}else Gl(p);0<h.i.length&&hi(h)}else X[0]!="stop"&&X[0]!="close"||rn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?rn(h,7):Ks(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}nr(4)}catch{}}var vf=class{constructor(o,c){this.g=o,this.map=c}};function bl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Al(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Sl(o){return o.h?1:o.g?o.g.size:0}function Hs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ws(o,c){o.g?o.g.add(c):o.h=c}function Rl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}bl.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function Ef(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function wf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Cl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=wf(o),p=Ef(o),b=p.length,C=0;C<b;C++)c.call(void 0,p[C],h&&h[C],o)}var xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];c(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function nn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nn){this.h=o.h,ii(this,o.j),this.o=o.o,this.g=o.g,si(this,o.s),this.l=o.l;var c=o.i,h=new lr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),kl(this,h),this.m=o.m}else o&&(c=String(o).match(xl))?(this.h=!1,ii(this,c[1]||"",!0),this.o=or(c[2]||""),this.g=or(c[3]||"",!0),si(this,c[4]),this.l=or(c[5]||"",!0),kl(this,c[6]||"",!0),this.m=or(c[7]||"")):(this.h=!1,this.i=new lr(null,this.h))}nn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ar(c,Ml,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ar(c,Ml,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ar(h,h.charAt(0)=="/"?Af:bf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ar(h,Rf)),o.join("")};function he(o){return new nn(o)}function ii(o,c,h){o.j=h?or(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function si(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function kl(o,c,h){c instanceof lr?(o.i=c,Pf(o.i,o.h)):(h||(c=ar(c,Sf)),o.i=new lr(c,o.h))}function rt(o,c,h){o.i.set(c,h)}function oi(o){return rt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function or(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ar(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Tf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Tf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ml=/[#\/\?@]/g,bf=/[#\?:]/g,Af=/[#\?]/g,Sf=/[#\?@]/g,Rf=/#/g;function lr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function xe(o){o.g||(o.g=new Map,o.h=0,o.i&&If(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=lr.prototype,n.add=function(o,c){xe(this),this.i=null,o=wn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Dl(o,c){xe(o),c=wn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Nl(o,c){return xe(o),c=wn(o,c),o.g.has(c)}n.forEach=function(o,c){xe(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},n.na=function(){xe(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(c[p])}return h},n.V=function(o){xe(this);let c=[];if(typeof o=="string")Nl(this,o)&&(c=c.concat(this.g.get(wn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return xe(this),this.i=null,o=wn(this,o),Nl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Vl(o,c,h){Dl(o,c),0<h.length&&(o.i=null,o.g.set(wn(o,c),k(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var b=C;V[p]!==""&&(b+="="+encodeURIComponent(String(V[p]))),o.push(b)}}return this.i=o.join("&")};function wn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Pf(o,c){c&&!o.j&&(xe(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Dl(this,p),Vl(this,b,h))},o)),o.j=c}function Cf(o,c){const h=new ir;if(l.Image){const p=new Image;p.onload=I(ke,h,"TestLoadImage: loaded",!0,c,p),p.onerror=I(ke,h,"TestLoadImage: error",!1,c,p),p.onabort=I(ke,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(ke,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function xf(o,c){const h=new ir,p=new AbortController,b=setTimeout(()=>{p.abort(),ke(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?ke(h,"TestPingServer: ok",!0,c):ke(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),ke(h,"TestPingServer: error",!1,c)})}function ke(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function kf(){this.g=new ff}function Mf(o,c,h){const p=h||"";try{Cl(o,function(b,C){let V=b;d(b)&&(V=Os(b)),c.push(p+C+"="+encodeURIComponent(V))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function ai(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ai,Ls),ai.prototype.g=function(){return new li(this.l,this.j)},ai.prototype.i=function(o){return function(){return o}}({});function li(o,c){It.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(li,It),n=li.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ol(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ol(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?cr(this):ur(this),this.readyState==3&&Ol(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,cr(this))},n.Qa=function(o){this.g&&(this.response=o,cr(this))},n.ga=function(){this.g&&cr(this)};function cr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ur(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ll(o){let c="";return j(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Gs(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ll(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):rt(o,c,h))}function ot(o){It.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ot,It);var Df=/^https?$/i,Nf=["POST","PUT"];n=ot.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Us.g(),this.v=this.o?dl(this.o):dl(Us),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Fl(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Nf,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of h)this.g.setRequestHeader(C,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Fl(this,C)}};function Fl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Bl(o),ci(o)}function Bl(o){o.A||(o.A=!0,xt(o,"complete"),xt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xt(this,"complete"),xt(this,"abort"),ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ul(this):this.bb())},n.bb=function(){Ul(this)};function Ul(o){if(o.h&&typeof a<"u"&&(!o.v[1]||de(o)!=4||o.Z()!=2)){if(o.u&&de(o)==4)ll(o.Ea,0,o);else if(xt(o,"readystatechange"),de(o)==4){o.h=!1;try{const V=o.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=V===0){var b=String(o.D).match(xl)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Df.test(b?b.toLowerCase():"")}h=p}if(h)xt(o,"complete"),xt(o,"success");else{o.m=6;try{var C=2<de(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Bl(o)}}finally{ci(o)}}}}function ci(o,c){if(o.g){zl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xt(o,"ready");try{h.onreadystatechange=p}catch{}}}function zl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function de(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),df(c)}};function ql(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vf(o){const c={};o=(o.g&&2<=de(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(x(o[p]))continue;var h=T(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}E(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function $l(o){this.Aa=0,this.i=[],this.j=new ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hr("baseRetryDelayMs",5e3,o),this.cb=hr("retryDelaySeedMs",1e4,o),this.Wa=hr("forwardChannelMaxRetries",2,o),this.wa=hr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new bl(o&&o.concurrentRequestLimit),this.Da=new kf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$l.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){kt(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Jl(this,null,this.W),hi(this)};function Ks(o){if(jl(o),o.G==3){var c=o.U++,h=he(o.I);if(rt(h,"SID",o.K),rt(h,"RID",c),rt(h,"TYPE","terminate"),dr(o,h),c=new Ce(o,o.j,c),c.L=2,c.v=oi(he(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Zl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ri(c)}Xl(o)}function ui(o){o.g&&(Qs(o),o.g.cancel(),o.g=null)}function jl(o){ui(o),o.u&&(l.clearTimeout(o.u),o.u=null),di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function hi(o){if(!Al(o.h)&&!o.s){o.s=!0;var c=o.Ga;Bt||pt(),re||(Bt(),re=!0),dt.add(c,o),o.B=0}}function Of(o,c){return Sl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rr(v(o.Ga,o,c),Ql(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new Ce(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Wl(this,b,c),h=he(this.I),rt(h,"RID",o),rt(h,"CVER",22),this.D&&rt(h,"X-HTTP-Session-Id",this.D),dr(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(Ll(C)))+"&"+c:this.m&&Gs(h,this.m,C)),Ws(this.h,b),this.Ua&&rt(h,"TYPE","init"),this.P?(rt(h,"$req",c),rt(h,"SID","null"),b.T=!0,qs(b,h,null)):qs(b,h,c),this.G=2}}else this.G==3&&(o?Hl(this,o):this.i.length==0||Al(this.h)||Hl(this))};function Hl(o,c){var h;c?h=c.l:h=o.U++;const p=he(o.I);rt(p,"SID",o.K),rt(p,"RID",h),rt(p,"AID",o.T),dr(o,p),o.m&&o.o&&Gs(p,o.m,o.o),h=new Ce(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Wl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ws(o.h,h),qs(h,p,c)}function dr(o,c){o.H&&j(o.H,function(h,p){rt(c,p,h)}),o.l&&Cl({},function(h,p){rt(c,p,h)})}function Wl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;t:{var b=o.i;let C=-1;for(;;){const V=["count="+h];C==-1?0<h?(C=b[0].g,V.push("ofs="+C)):C=0:V.push("ofs="+C);let et=!0;for(let gt=0;gt<h;gt++){let X=b[gt].g;const Tt=b[gt].map;if(X-=C,0>X)C=Math.max(0,b[gt].g-100),et=!1;else try{Mf(Tt,V,"req"+X+"_")}catch{p&&p(Tt)}}if(et){p=V.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function Gl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Bt||pt(),re||(Bt(),re=!0),dt.add(c,o),o.v=0}}function Ys(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rr(v(o.Fa,o),Ql(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rr(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),ui(this),Kl(this))};function Qs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Kl(o){o.g=new Ce(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=he(o.qa);rt(c,"RID","rpc"),rt(c,"SID",o.K),rt(c,"AID",o.T),rt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&rt(c,"TO",o.ja),rt(c,"TYPE","xmlhttp"),dr(o,c),o.m&&o.o&&Gs(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=oi(he(c)),h.m=null,h.P=!0,wl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ui(this),Ys(this),kt(19))};function di(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Yl(o,c){var h=null;if(o.g==c){di(o),Qs(o),o.g=null;var p=2}else if(Hs(o.h,c))h=c.D,Rl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=ti(),xt(p,new yl(p,h)),hi(o)}else Gl(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&Of(o,c)||p==2&&Ys(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:rn(o,5);break;case 4:rn(o,10);break;case 3:rn(o,6);break;default:rn(o,2)}}}function Ql(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function rn(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const b=!p;p=new nn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ii(p,"https"),oi(p),b?Cf(p.toString(),h):xf(p.toString(),h)}else kt(2);o.G=0,o.l&&o.l.sa(c),Xl(o),jl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Xl(o){if(o.G=0,o.ka=[],o.l){const c=Pl(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ka,c),R(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Jl(o,c,h){var p=h instanceof nn?he(h):new nn(h);if(p.g!="")c&&(p.g=c+"."+p.g),si(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var C=new nn(null);p&&ii(C,p),c&&(C.g=c),b&&si(C,b),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&rt(p,h,c),rt(p,"VER",o.la),dr(o,p),p}function Zl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ot(new ai({eb:h})):new ot(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function tc(){}n=tc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fi(){}fi.prototype.g=function(o,c){return new zt(o,c)};function zt(o,c){It.call(this),this.g=new $l(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!x(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new In(this)}P(zt,It),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Ks(this.g)},zt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Os(o),o=h);c.i.push(new vf(c.Ya++,o)),c.G==3&&hi(c)},zt.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,zt.aa.N.call(this)};function ec(o){Fs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(ec,Fs);function nc(){Bs.call(this),this.status=1}P(nc,Bs);function In(o){this.g=o}P(In,tc),In.prototype.ua=function(){xt(this.g,"a")},In.prototype.ta=function(o){xt(this.g,new ec(o))},In.prototype.sa=function(o){xt(this.g,new nc)},In.prototype.ra=function(){xt(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Ih=function(){return new fi},wh=function(){return ti()},Eh=tn,So={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,Ai=ei,_l.COMPLETE="complete",vh=_l,fl.EventType=er,er.OPEN="a",er.CLOSE="b",er.ERROR="c",er.MESSAGE="d",It.prototype.listen=It.prototype.K,yr=fl,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,_h=ot}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});const Dc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Yn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Go("@firebase/firestore");function pr(){return pn.logLevel}function F(n,...t){if(pn.logLevel<=Y.DEBUG){const e=t.map(aa);pn.debug(`Firestore (${Yn}): ${n}`,...e)}}function Ie(n,...t){if(pn.logLevel<=Y.ERROR){const e=t.map(aa);pn.error(`Firestore (${Yn}): ${n}`,...e)}}function Un(n,...t){if(pn.logLevel<=Y.WARN){const e=t.map(aa);pn.warn(`Firestore (${Yn}): ${n}`,...e)}}function aa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+n;throw Ie(t),new Error(t)}function Z(n,t){n||$()}function W(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class n_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Rt.UNAUTHENTICATED))}shutdown(){}}class r_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class i_{constructor(t){this.t=t,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new ve;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ve,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ve)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Th(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new Rt(t)}}class s_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new s_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Z(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new a_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=c_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function J(n,t){return n<t?-1:n>t?1:0}function zn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ft.fromMillis(Date.now())}static fromDate(t){return ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ft(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new ft(0,0))}static max(){return new H(new ft(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class it extends xr{construct(t,e,r){return new it(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new it(e)}static emptyPath(){return new it([])}}const u_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends xr{construct(t,e,r){return new vt(t,e,r)}static isValidIdentifier(t){return u_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new L(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new L(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(it.fromString(t))}static fromName(t){return new B(it.fromString(t).popFirst(5))}static empty(){return new B(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new it(t.slice()))}}function h_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new ft(e+1,0):new ft(e,r));return new We(i,B.empty(),t)}function d_(n){return new We(n.readTime,n.key,-1)}class We{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new We(H.min(),B.empty(),-1)}static max(){return new We(H.max(),B.empty(),-1)}}function f_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==p_)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&e()},u=>r(u))}),a=!0,s===i&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(i=>i?N.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new N((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,e){return new N((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function g_(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Hr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class la{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}la.oe=-1;function ns(n){return n==null}function zi(n){return n===0&&1/n==-1/0}function y_(n){return typeof n=="number"&&Number.isInteger(n)&&!zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ah(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yi(this.root,t,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yi(this.root,t,this.comparator,!0)}}class yi{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new _t(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,i,s){return this}insert(t,e,r){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(t){return new Vc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Et(this.comparator);return e.data=t,e}}class Vc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new qt([])}unionWith(t){let e=new Et(vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return zn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sh("Invalid base64 string: "+s):s}}(t);return new wt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const __=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ge(n){if(Z(!!n),typeof n=="string"){let t=0;const e=__.exec(n);if(Z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mn(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ua(n){const t=n.mapValue.fields.__previous_value__;return ca(t)?ua(t):t}function kr(n){const t=Ge(n.mapValue.fields.__local_write_time__.timestampValue);return new ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t,e,r,i,s,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Mr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Mr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={mapValue:{}};function gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ca(n)?4:w_(n)?9007199254740991:E_(n)?10:11:$()}function le(n,t){if(n===t)return!0;const e=gn(n);if(e!==gn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return kr(n).isEqual(kr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ge(i.timestampValue),l=Ge(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return mn(i.bytesValue).isEqual(mn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=at(i.doubleValue),l=at(s.doubleValue);return a===l?zi(a)===zi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return zn(n.arrayValue.values||[],t.arrayValue.values||[],le);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Nc(a)!==Nc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!le(a[u],l[u])))return!1;return!0}(n,t);default:return $()}}function Dr(n,t){return(n.values||[]).find(e=>le(e,t))!==void 0}function qn(n,t){if(n===t)return 0;const e=gn(n),r=gn(t);if(e!==r)return J(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=at(s.integerValue||s.doubleValue),u=at(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Oc(n.timestampValue,t.timestampValue);case 4:return Oc(kr(n),kr(t));case 5:return J(n.stringValue,t.stringValue);case 6:return function(s,a){const l=mn(s),u=mn(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=J(l[d],u[d]);if(f!==0)return f}return J(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=J(at(s.latitude),at(a.latitude));return l!==0?l:J(at(s.longitude),at(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Lc(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,u,d,f;const g=s.fields||{},v=a.fields||{},I=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=v.value)===null||u===void 0?void 0:u.arrayValue,k=J(((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Lc(I,P)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===_i.mapValue&&a===_i.mapValue)return 0;if(s===_i.mapValue)return 1;if(a===_i.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=J(u[g],f[g]);if(v!==0)return v;const I=qn(l[u[g]],d[f[g]]);if(I!==0)return I}return J(u.length,f.length)}(n.mapValue,t.mapValue);default:throw $()}}function Oc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=Ge(n),r=Ge(t),i=J(e.seconds,r.seconds);return i!==0?i:J(e.nanos,r.nanos)}function Lc(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=qn(e[i],r[i]);if(s)return s}return J(e.length,r.length)}function $n(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return mn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ro(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ro(e.fields[a])}`;return i+"}"}(n.mapValue):$()}function Fc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Po(n){return!!n&&"integerValue"in n}function ha(n){return!!n&&"arrayValue"in n}function Bc(n){return!!n&&"nullValue"in n}function Uc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Si(n){return!!n&&"mapValue"in n}function E_(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return yn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ir(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ir(n.arrayValue.values[e]);return t}return Object.assign({},n)}function w_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Si(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ir(e)}setAll(t){let e=vt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=Ir(a):i.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Si(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return le(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){yn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Vt(Ir(this.value))}}function Rh(n){const t=[];return yn(n.fields,(e,r)=>{const i=new vt([e]);if(Si(r)){const s=Rh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new qt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r,i,s,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Pt(t,0,H.min(),H.min(),H.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,i){return new Pt(t,1,e,H.min(),r,i,0)}static newNoDocument(t,e){return new Pt(t,2,e,H.min(),H.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new Pt(t,3,e,H.min(),H.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qi{constructor(t,e){this.position=t,this.inclusive=e}}function zc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),e.key):r=qn(a,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!le(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function I_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ph{}class ct extends Ph{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new b_(t,e,r):e==="array-contains"?new R_(t,r):e==="in"?new P_(t,r):e==="not-in"?new C_(t,r):e==="array-contains-any"?new x_(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new A_(t,r):new S_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(qn(e,this.value)):e!==null&&gn(this.value)===gn(e)&&this.matchesComparison(qn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Ph{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ne(t,e)}matches(t){return Ch(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ch(n){return n.op==="and"}function xh(n){return T_(n)&&Ch(n)}function T_(n){for(const t of n.filters)if(t instanceof ne)return!1;return!0}function Co(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(xh(n))return n.filters.map(t=>Co(t)).join(",");{const t=n.filters.map(e=>Co(e)).join(",");return`${n.op}(${t})`}}function kh(n,t){return n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&le(r.value,i.value)}(n,t):n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&kh(a,i.filters[l]),!0):!1}(n,t):void $()}function Mh(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(n):n instanceof ne?function(e){return e.op.toString()+" {"+e.getFilters().map(Mh).join(" ,")+"}"}(n):"Filter"}class b_ extends ct{constructor(t,e,r){super(t,e,r),this.key=B.fromName(r.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class A_ extends ct{constructor(t,e){super(t,"in",e),this.keys=Dh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class S_ extends ct{constructor(t,e){super(t,"not-in",e),this.keys=Dh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>B.fromName(r.referenceValue))}class R_ extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ha(e)&&Dr(e.arrayValue,this.value)}}class P_ extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dr(this.value.arrayValue,e)}}class C_ extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Dr(this.value.arrayValue,e)}}class x_ extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ha(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Dr(this.value.arrayValue,r))}}/**
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
 */class k_{constructor(t,e=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function $c(n,t=null,e=[],r=[],i=null,s=null,a=null){return new k_(n,t,e,r,i,s,a)}function da(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Co(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ns(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$n(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$n(r)).join(",")),t.ue=e}return t.ue}function fa(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!I_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!kh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qc(n.startAt,t.startAt)&&qc(n.endAt,t.endAt)}function xo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function M_(n,t,e,r,i,s,a,l){return new Qn(n,t,e,r,i,s,a,l)}function pa(n){return new Qn(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nh(n){return n.collectionGroup!==null}function Tr(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Et(vt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Nr(s,r))}),e.has(vt.keyField().canonicalString())||t.ce.push(new Nr(vt.keyField(),r))}return t.ce}function se(n){const t=W(n);return t.le||(t.le=D_(t,Tr(n))),t.le}function D_(n,t){if(n.limitType==="F")return $c(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nr(i.field,s)});const e=n.endAt?new qi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qi(n.startAt.position,n.startAt.inclusive):null;return $c(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ko(n,t){const e=n.filters.concat([t]);return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function $i(n,t,e){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function rs(n,t){return fa(se(n),se(t))&&n.limitType===t.limitType}function Vh(n){return`${da(se(n))}|lt:${n.limitType}`}function bn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Mh(i)).join(", ")}]`),ns(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>$n(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>$n(i)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function is(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Tr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=zc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Tr(r),i)||r.endAt&&!function(a,l,u){const d=zc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Tr(r),i))}(n,t)}function N_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oh(n){return(t,e)=>{let r=!1;for(const i of Tr(n)){const s=V_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function V_(n,t,e){const r=n.field.isKeyField()?B.comparator(t.key,e.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?qn(u,d):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){yn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new st(B.comparator);function Te(){return O_}const Lh=new st(B.comparator);function _r(...n){let t=Lh;for(const e of n)t=t.insert(e.key,e);return t}function Fh(n){let t=Lh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ln(){return br()}function Bh(){return br()}function br(){return new Xn(n=>n.toString(),(n,t)=>n.isEqual(t))}const L_=new st(B.comparator),F_=new Et(B.comparator);function K(...n){let t=F_;for(const e of n)t=t.add(e);return t}const B_=new Et(J);function U_(){return B_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function Uh(n){return{integerValue:""+n}}function z_(n,t){return y_(t)?Uh(t):ma(n,t)}/**
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
 */class ss{constructor(){this._=void 0}}function q_(n,t,e){return n instanceof ji?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ca(s)&&(s=ua(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Vr?qh(n,t):n instanceof Or?$h(n,t):function(i,s){const a=zh(i,s),l=Hc(a)+Hc(i.Pe);return Po(a)&&Po(i.Pe)?Uh(l):ma(i.serializer,l)}(n,t)}function $_(n,t,e){return n instanceof Vr?qh(n,t):n instanceof Or?$h(n,t):e}function zh(n,t){return n instanceof Hi?function(r){return Po(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class ji extends ss{}class Vr extends ss{constructor(t){super(),this.elements=t}}function qh(n,t){const e=jh(t);for(const r of n.elements)e.some(i=>le(i,r))||e.push(r);return{arrayValue:{values:e}}}class Or extends ss{constructor(t){super(),this.elements=t}}function $h(n,t){let e=jh(t);for(const r of n.elements)e=e.filter(i=>!le(i,r));return{arrayValue:{values:e}}}class Hi extends ss{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Hc(n){return at(n.integerValue||n.doubleValue)}function jh(n){return ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function j_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Vr&&i instanceof Vr||r instanceof Or&&i instanceof Or?zn(r.elements,i.elements,le):r instanceof Hi&&i instanceof Hi?le(r.Pe,i.Pe):r instanceof ji&&i instanceof ji}(n.transform,t.transform)}class H_{constructor(t,e){this.version=t,this.transformResults=e}}class $t{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new $t}static exists(t){return new $t(void 0,t)}static updateTime(t){return new $t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ri(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class os{}function Hh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ga(n.key,$t.none()):new Wr(n.key,n.data,$t.none());{const e=n.data,r=Vt.empty();let i=new Et(vt.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Qe(n.key,r,new qt(i.toArray()),$t.none())}}function W_(n,t,e){n instanceof Wr?function(i,s,a){const l=i.value.clone(),u=Gc(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Qe?function(i,s,a){if(!Ri(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Gc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Wh(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ar(n,t,e,r){return n instanceof Wr?function(s,a,l,u){if(!Ri(s.precondition,a))return l;const d=s.value.clone(),f=Kc(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Qe?function(s,a,l,u){if(!Ri(s.precondition,a))return l;const d=Kc(s.fieldTransforms,u,a),f=a.data;return f.setAll(Wh(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(s,a,l){return Ri(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function G_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=zh(r.transform,i||null);s!=null&&(e===null&&(e=Vt.empty()),e.set(r.field,s))}return e||null}function Wc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zn(r,i,(s,a)=>j_(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Wr extends os{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qe extends os{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Gc(n,t,e){const r=new Map;Z(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,$_(a,l,e[i]))}return r}function Kc(n,t,e){const r=new Map;for(const i of n){const s=i.transform,a=e.data.field(i.field);r.set(i.field,q_(s,a,t))}return r}class ga extends os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K_ extends os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&W_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ar(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ar(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bh();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(i.key)?null:l;const u=Hh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&zn(this.mutations,t.mutations,(e,r)=>Wc(e,r))&&zn(this.baseMutations,t.baseMutations,(e,r)=>Wc(e,r))}}class ya{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Z(t.mutations.length===r.length);let i=function(){return L_}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ya(t,e,r,i)}}/**
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
 */class Q_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class X_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Q;function J_(n){switch(n){default:return $();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Gh(n){if(n===void 0)return Ie("GRPC error has no .code"),M.UNKNOWN;switch(n){case lt.OK:return M.OK;case lt.CANCELLED:return M.CANCELLED;case lt.UNKNOWN:return M.UNKNOWN;case lt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case lt.INTERNAL:return M.INTERNAL;case lt.UNAVAILABLE:return M.UNAVAILABLE;case lt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case lt.NOT_FOUND:return M.NOT_FOUND;case lt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case lt.ABORTED:return M.ABORTED;case lt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case lt.DATA_LOSS:return M.DATA_LOSS;default:return $()}}(Q=lt||(lt={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Z_(){return new TextEncoder}/**
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
 */const tv=new cn([4294967295,4294967295],0);function Yc(n){const t=Z_().encode(n),e=new yh;return e.update(t),new Uint8Array(e.digest())}function Qc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new cn([e,r],0),new cn([i,s],0)]}class _a{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new vr(`Invalid padding: ${e}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new vr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=cn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(cn.fromNumber(r)));return i.compare(tv)===1&&(i=new cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Yc(t),[r,i]=Qc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new _a(s,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Yc(t),[r,i]=Qc(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Gr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new as(H.min(),i,new st(J),Te(),K())}}class Gr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Gr(r,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Kh{constructor(t,e){this.targetId=t,this.me=e}}class Yh{constructor(t,e,r=wt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Xc{constructor(){this.fe=0,this.ge=Zc(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),r=K();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Gr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Zc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ev{constructor(t){this.Le=t,this.Be=new Map,this.ke=Te(),this.qe=Jc(),this.Qe=new st(J)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(xo(s))if(r===0){const a=new B(s.path);this.Ue(e,a,Pt.newNoDocument(a,H.min()))}else Z(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let a,l;try{a=mn(r).toUint8Array()}catch(u){if(u instanceof Sh)return Un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _a(a,i,s)}catch(u){return Un(u instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&xo(l.target)){const u=new B(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Pt.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let r=K();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new as(t,e,this.Qe,this.ke,r);return this.ke=Te(),this.qe=Jc(),this.Qe=new st(J),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Et(J),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Jc(){return new st(B.comparator)}function Zc(){return new st(B.comparator)}const nv={asc:"ASCENDING",desc:"DESCENDING"},rv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iv={and:"AND",or:"OR"};class sv{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mo(n,t){return n.useProto3Json||ns(t)?t:{value:t}}function Wi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ov(n,t){return Wi(n,t.toTimestamp())}function oe(n){return Z(!!n),H.fromTimestamp(function(e){const r=Ge(e);return new ft(r.seconds,r.nanos)}(n))}function va(n,t){return Do(n,t).canonicalString()}function Do(n,t){const e=function(i){return new it(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Xh(n){const t=it.fromString(n);return Z(nd(t)),t}function No(n,t){return va(n.databaseId,t.path)}function ao(n,t){const e=Xh(t);if(e.get(1)!==n.databaseId.projectId)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(Zh(e))}function Jh(n,t){return va(n.databaseId,t)}function av(n){const t=Xh(n);return t.length===4?it.emptyPath():Zh(t)}function Vo(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zh(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function tu(n,t,e){return{name:No(n,t),fields:e.value.mapValue.fields}}function lv(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?M.UNKNOWN:Gh(d.code);return new L(f,d.message||"")}(a);e=new Yh(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ao(n,r.document.name),s=oe(r.document.updateTime),a=r.document.createTime?oe(r.document.createTime):H.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=Pt.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];e=new Pi(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ao(n,r.document),s=r.readTime?oe(r.readTime):H.min(),a=Pt.newNoDocument(i,s),l=r.removedTargetIds||[];e=new Pi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ao(n,r.document),s=r.removedTargetIds||[];e=new Pi([],s,i,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new X_(i,s),l=r.targetId;e=new Kh(l,a)}}return e}function cv(n,t){let e;if(t instanceof Wr)e={update:tu(n,t.key,t.value)};else if(t instanceof ga)e={delete:No(n,t.key)};else if(t instanceof Qe)e={update:tu(n,t.key,t.data),updateMask:_v(t.fieldMask)};else{if(!(t instanceof K_))return $();e={verify:No(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof ji)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Or)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ov(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,t.precondition)),e}function uv(n,t){return n&&n.length>0?(Z(t!==void 0),n.map(e=>function(i,s){let a=i.updateTime?oe(i.updateTime):oe(s);return a.isEqual(H.min())&&(a=oe(s)),new H_(a,i.transformResults||[])}(e,t))):[]}function hv(n,t){return{documents:[Jh(n,t.path)]}}function dv(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Jh(n,i);const s=function(d){if(d.length!==0)return ed(ne.create(d,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:An(v.field),direction:mv(v.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Mo(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function fv(n){let t=av(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Z(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(g){const v=td(g);return v instanceof ne&&xh(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(v=>function(P){return new Nr(Sn(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,ns(v)?null:v}(e.limit));let u=null;e.startAt&&(u=function(g){const v=!!g.before,I=g.values||[];return new qi(I,v)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const v=!g.before,I=g.values||[];return new qi(I,v)}(e.endAt)),M_(t,i,a,s,l,"F",u,d)}function pv(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function td(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Sn(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Sn(e.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Sn(e.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(Sn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ne.create(e.compositeFilter.filters.map(r=>td(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function mv(n){return nv[n]}function gv(n){return rv[n]}function yv(n){return iv[n]}function An(n){return{fieldPath:n.canonicalString()}}function Sn(n){return vt.fromServerFormat(n.fieldPath)}function ed(n){return n instanceof ct?function(e){if(e.op==="=="){if(Uc(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NAN"}};if(Bc(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uc(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NAN"}};if(Bc(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(e.field),op:gv(e.op),value:e.value}}}(n):n instanceof ne?function(e){const r=e.getFilters().map(i=>ed(i));return r.length===1?r[0]:{compositeFilter:{op:yv(e.op),filters:r}}}(n):$()}function _v(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function nd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,r,i,s=H.min(),a=H.min(),l=wt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Be(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(t){this.ct=t}}function Ev(n){const t=fv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$i(t,t.limit,"L"):t}/**
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
 */class wv{constructor(){this.un=new Iv}addToCollectionParentIndex(t,e){return this.un.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(We.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(We.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class Iv{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Et(it.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Et(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new jn(0)}static kn(){return new jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.changes=new Xn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ar(r.mutation,i,qt.empty(),ft.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,e,r=K()){const i=ln();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let a=_r();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ln();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,K()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let s=Te();const a=br(),l=function(){return br()}();return e.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Qe)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ar(f.mutation,d,f.mutation.getFieldMask(),ft.now())):a.set(d.key,qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return l.set(d,new bv(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=br();let i=new st((a,l)=>a-l),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||qt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||K()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=Bh();f.forEach(v=>{if(!s.has(v)){const I=Hh(e.get(v),r.get(v));I!==null&&g.set(v,I),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Nh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):N.resolve(ln());let l=-1,u=s;return a.next(d=>N.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(t,d,s)).next(()=>this.computeViews(t,u,d,K())).next(f=>({batchId:l,changes:Fh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(r=>{let i=_r();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let a=_r();return this.indexManager.getCollectionParents(t,s).next(l=>N.forEach(l,u=>{const d=function(g,v){return new Qn(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(f=>{f.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Pt.newInvalidDocument(f)))});let l=_r();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Ar(f.mutation,d,qt.empty(),ft.now()),is(e,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return N.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:oe(i.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Ev(i.bundledQuery),readTime:oe(i.readTime)}}(e)),N.resolve()}}/**
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
 */class Rv{constructor(){this.overlays=new st(B.comparator),this.Ir=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ln();return N.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const i=ln(),s=e.length+1,a=new B(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new st((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=ln(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=ln(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return N.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Q_(e,r));let s=this.Ir.get(e);s===void 0&&(s=K(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
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
 */class Pv{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.Tr=new Et(mt.Er),this.dr=new Et(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new mt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new mt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new B(new it([])),r=new mt(e,t),i=new mt(e,t+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new B(new it([])),r=new mt(e,t),i=new mt(e,t+1);let s=K();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new mt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class mt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return B.comparator(t.key,e.key)||J(t.wr,e.wr)}static Ar(t,e){return J(t.wr,e.wr)||B.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Et(mt.Er)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Y_(s,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new mt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new mt(e,0),i=new mt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Et(J);return e.forEach(i=>{const s=new mt(i,0),a=new mt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new mt(new B(s),0);let l=new Et(J);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Z(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(e.mutations,i=>{const s=new mt(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new mt(e,0),i=this.br.firstAfterOrEqual(r);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(t){this.Mr=t,this.docs=function(){return new st(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(e))}getEntries(t,e){let r=Te();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Te();const a=e.path,l=new B(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||f_(d_(f),r)<=0||(i.has(f.key)||is(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(t,e,r,i){$()}Or(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new kv(this)}getSize(t){return N.resolve(this.size)}}class kv extends Tv{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t){this.persistence=t,this.Nr=new Xn(e=>da(e),fa),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ea,this.targetCount=0,this.kr=jn.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),N.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new jn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.Kn(e),N.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t,e){this.qr={},this.overlays={},this.Qr=new la(0),this.Kr=!1,this.Kr=!0,this.$r=new Pv,this.referenceDelegate=t(this),this.Ur=new Mv(this),this.indexManager=new wv,this.remoteDocumentCache=function(i){return new xv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new vv(e),this.Gr=new Sv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Cv(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){F("MemoryPersistence","Starting transaction:",t);const i=new Nv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Nv extends m_{constructor(t){super(),this.currentSequenceNumber=t}}class wa{constructor(t){this.persistence=t,this.Jr=new Ea,this.Yr=null}static Zr(t){return new wa(t)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),N.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return N.or([()=>N.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=K(),i=K();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ia(t,e.fromCache,r,i)}}/**
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
 */class Vv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ov{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _p()?8:g_(Ct())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Vv;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(pr()<=Y.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(pr()<=Y.DEBUG&&F("QueryEngine","Query:",bn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(pr()<=Y.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):N.resolve())}Yi(t,e){if(jc(e))return N.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=$i(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=K(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.ts(e,l);return this.ns(e,d,a,u.readTime)?this.Yi(t,$i(e,null,"F")):this.rs(t,d,e,u)}))})))}Zi(t,e,r,i){return jc(e)||i.isEqual(H.min())?N.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const a=this.ts(e,s);return this.ns(e,a,r,i)?N.resolve(null):(pr()<=Y.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bn(e)),this.rs(t,a,e,h_(i,-1)).next(l=>l))})}ts(t,e){let r=new Et(Oh(t));return e.forEach((i,s)=>{is(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return pr()<=Y.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",bn(e)),this.Ji.getDocumentsMatchingQuery(t,e,We.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new st(J),this._s=new Xn(s=>da(s),fa),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Av(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Fv(n,t,e,r){return new Lv(n,t,e,r)}async function rd(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=K();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function Bv(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,v=g.keys();let I=N.resolve();return v.forEach(P=>{I=I.next(()=>f.getEntry(u,P)).next(k=>{const R=d.docVersions.get(P);Z(R!==null),k.version.compareTo(R)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),f.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function id(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Uv(n,t){const e=W(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,g)));let I=v.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(g)!==null?I=I.withResumeToken(wt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(g,I),function(k,R,S){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,I,f)&&l.push(e.Ur.updateTargetData(s,I))});let u=Te(),d=K();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(zv(s,a,t.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(H.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(g=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(e.os=i,s))}function zv(n,t,e){let r=K(),i=K();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let a=Te();return e.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function qv(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function $v(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,N.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Be(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Oo(n,t,e){const r=W(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Hr(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function eu(n,t,e){const r=W(n);let i=H.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=W(u),v=g._s.get(f);return v!==void 0?N.resolve(g.os.get(v)):g.Ur.getTargetData(d,f)}(r,a,se(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:H.min(),e?s:K())).next(l=>(jv(r,N_(t),l),{documents:l,Ts:s})))}function jv(n,t,e){let r=n.us.get(t)||H.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class nu{constructor(){this.activeTargetIds=U_()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hv{constructor(){this.so=new nu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new nu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Wv{_o(t){}shutdown(){}}/**
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
 */class ru{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vi=null;function lo(){return vi===null?vi=function(){return 268435456+Math.round(2147483648*Math.random())}():vi++,"0x"+vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class Yv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,a){const l=lo(),u=this.xo(e,r.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(e,u,d,i).then(f=>(F("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw Un("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,s,a,l){return this.Mo(e,r,i,s,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,r){const i=Gv[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=lo();return new Promise((a,l)=>{const u=new _h;u.setWithCredentials(!0),u.listenOnce(vh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ai.NO_ERROR:const f=u.getResponseJson();F(At,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case Ai.TIMEOUT:F(At,`RPC '${t}' ${s} timed out`),l(new L(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const g=u.getStatus();if(F(At,`RPC '${t}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const I=v==null?void 0:v.error;if(I&&I.status&&I.message){const P=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(I.status);l(new L(P,I.message))}else l(new L(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(M.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(At,`RPC '${t}' ${s} completed.`)}});const d=JSON.stringify(i);F(At,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=lo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ih(),l=wh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(At,`Creating RPC '${t}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let v=!1,I=!1;const P=new Kv({Io:R=>{I?F(At,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(v||(F(At,`Opening RPC '${t}' stream ${i} transport.`),g.open(),v=!0),F(At,`RPC '${t}' stream ${i} sending:`,R),g.send(R))},To:()=>g.close()}),k=(R,S,x)=>{R.listen(S,D=>{try{x(D)}catch(O){setTimeout(()=>{throw O},0)}})};return k(g,yr.EventType.OPEN,()=>{I||(F(At,`RPC '${t}' stream ${i} transport opened.`),P.yo())}),k(g,yr.EventType.CLOSE,()=>{I||(I=!0,F(At,`RPC '${t}' stream ${i} transport closed`),P.So())}),k(g,yr.EventType.ERROR,R=>{I||(I=!0,Un(At,`RPC '${t}' stream ${i} transport errored:`,R),P.So(new L(M.UNAVAILABLE,"The operation could not be completed")))}),k(g,yr.EventType.MESSAGE,R=>{var S;if(!I){const x=R.data[0];Z(!!x);const D=x,O=D.error||((S=D[0])===null||S===void 0?void 0:S.error);if(O){F(At,`RPC '${t}' stream ${i} received error:`,O);const G=O.status;let j=function(y){const w=lt[y];if(w!==void 0)return Gh(w)}(G),E=O.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+G+" with message "+O.message),I=!0,P.So(new L(j,E)),g.close()}else F(At,`RPC '${t}' stream ${i} received:`,x),P.bo(x)}}),k(l,Eh.STAT_EVENT,R=>{R.stat===So.PROXY?F(At,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===So.NOPROXY&&F(At,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function co(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){return new sv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,r,i,s,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sd(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new L(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qv extends od{constructor(t,e,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=lv(this.serializer,t),r=function(s){if(!("targetChange"in s))return H.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?oe(a.readTime):H.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Vo(this.serializer),e.addTarget=function(s,a){let l;const u=a.target;if(l=xo(u)?{documents:hv(s,u)}:{query:dv(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qh(s,a.resumeToken);const d=Mo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Wi(s,a.snapshotVersion.toTimestamp());const d=Mo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=pv(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Vo(this.serializer),e.removeTarget=t,this.a_(e)}}class Xv extends od{constructor(t,e,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Z(!!t.streamToken),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=uv(t.writeResults,t.commitTime),r=oe(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Vo(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>cv(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,Do(e,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(M.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Do(e,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Zv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ie(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{_n(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=W(u);d.L_.add(4),await Kr(d),d.q_.set("Unknown"),d.L_.delete(4),await cs(d)}(this))})}),this.q_=new Zv(r,i)}}async function cs(n){if(_n(n))for(const t of n.B_)await t(!0)}async function Kr(n){for(const t of n.B_)await t(!1)}function ad(n,t){const e=W(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Sa(e)?Aa(e):Jn(e).r_()&&ba(e,t))}function Ta(n,t){const e=W(n),r=Jn(e);e.N_.delete(t),r.r_()&&ld(e,t),e.N_.size===0&&(r.r_()?r.o_():_n(e)&&e.q_.set("Unknown"))}function ba(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Jn(n).A_(t)}function ld(n,t){n.Q_.xe(t),Jn(n).R_(t)}function Aa(n){n.Q_=new ev({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.q_.v_()}function Sa(n){return _n(n)&&!Jn(n).n_()&&n.N_.size>0}function _n(n){return W(n).L_.size===0}function cd(n){n.Q_=void 0}async function e0(n){n.q_.set("Online")}async function n0(n){n.N_.forEach((t,e)=>{ba(n,t)})}async function r0(n,t){cd(n),Sa(n)?(n.q_.M_(t),Aa(n)):n.q_.set("Unknown")}async function i0(n,t,e){if(n.q_.set("Online"),t instanceof Yh&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Gi(n,r)}else if(t instanceof Pi?n.Q_.Ke(t):t instanceof Kh?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const r=await id(n.localStore);e.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),ld(s,u);const g=new Be(f.target,u,d,f.sequenceNumber);ba(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Gi(n,r)}}async function Gi(n,t,e){if(!Hr(t))throw t;n.L_.add(1),await Kr(n),n.q_.set("Offline"),e||(e=()=>id(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await cs(n)})}function ud(n,t){return t().catch(e=>Gi(n,e,t))}async function us(n){const t=W(n),e=Ke(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;s0(t);)try{const i=await qv(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,o0(t,i)}catch(i){await Gi(t,i)}hd(t)&&dd(t)}function s0(n){return _n(n)&&n.O_.length<10}function o0(n,t){n.O_.push(t);const e=Ke(n);e.r_()&&e.V_&&e.m_(t.mutations)}function hd(n){return _n(n)&&!Ke(n).n_()&&n.O_.length>0}function dd(n){Ke(n).start()}async function a0(n){Ke(n).p_()}async function l0(n){const t=Ke(n);for(const e of n.O_)t.m_(e.mutations)}async function c0(n,t,e){const r=n.O_.shift(),i=ya.from(r,t,e);await ud(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await us(n)}async function u0(n,t){t&&Ke(n).V_&&await async function(r,i){if(function(a){return J_(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();Ke(r).s_(),await ud(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await us(r)}}(n,t),hd(n)&&dd(n)}async function iu(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=_n(e);e.L_.add(3),await Kr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await cs(e)}async function h0(n,t){const e=W(n);t?(e.L_.delete(2),await cs(e)):t||(e.L_.add(2),await Kr(e),e.q_.set("Unknown"))}function Jn(n){return n.K_||(n.K_=function(e,r,i){const s=W(e);return s.w_(),new Qv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:e0.bind(null,n),Ro:n0.bind(null,n),mo:r0.bind(null,n),d_:i0.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Sa(n)?Aa(n):n.q_.set("Unknown")):(await n.K_.stop(),cd(n))})),n.K_}function Ke(n){return n.U_||(n.U_=function(e,r,i){const s=W(e);return s.w_(),new Xv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:a0.bind(null,n),mo:u0.bind(null,n),f_:l0.bind(null,n),g_:c0.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await us(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,l=new Ra(t,e,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pa(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),Hr(n))return new L(M.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||B.comparator(e.key,r.key):(e,r)=>B.comparator(e.key,r.key),this.keyedMap=_r(),this.sortedSet=new st(this.comparator)}static emptySet(t){return new Dn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Dn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.W_=new st(B.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):$():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Hn{constructor(t,e,r,i,s,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Hn(t,e,Dn.emptySet(e),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class f0{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=W(e),s=i.queries;i.queries=ou(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(M.ABORTED,"Firestore shutting down"))}}function ou(){return new Xn(n=>Vh(n),rs)}async function fd(n,t){const e=W(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new d0,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=Pa(a,`Initialization of query '${bn(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Ca(e)}async function pd(n,t){const e=W(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function p0(n,t){const e=W(n);let r=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Ca(e)}function m0(n,t,e){const r=W(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function Ca(n){n.Y_.forEach(t=>{t.next()})}var Lo,au;(au=Lo||(Lo={})).ea="default",au.Cache="cache";class md{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Hn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Hn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Lo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t){this.key=t}}class yd{constructor(t){this.key=t}}class g0{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Oh(t),this.Ra=new Dn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new su,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,g)=>{const v=i.get(f),I=is(this.query,g)?g:null,P=!!v&&this.mutatedKeys.has(v.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;v&&I?v.data.isEqual(I.data)?P!==k&&(r.track({type:3,doc:I}),R=!0):this.ga(v,I)||(r.track({type:2,doc:I}),R=!0,(u&&this.Aa(I,u)>0||d&&this.Aa(I,d)<0)&&(l=!0)):!v&&I?(r.track({type:0,doc:I}),R=!0):v&&!I&&(r.track({type:1,doc:v}),R=!0,(u||d)&&(l=!0)),R&&(I?(a=a.add(I),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(I,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return k(I)-k(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Hn(this.query,t.Ra,s,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new su,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new yd(r))}),this.da.forEach(r=>{t.has(r)||e.push(new gd(r))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Hn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class y0{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _0{constructor(t){this.key=t,this.va=!1}}class v0{constructor(t,e,r,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Xn(l=>Vh(l),rs),this.Ma=new Map,this.xa=new Set,this.Oa=new st(B.comparator),this.Na=new Map,this.La=new Ea,this.Ba={},this.ka=new Map,this.qa=jn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function E0(n,t,e=!0){const r=Td(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await _d(r,t,e,!0),i}async function w0(n,t){const e=Td(n);await _d(e,t,!0,!1)}async function _d(n,t,e,r){const i=await $v(n.localStore,se(t)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return r&&(l=await I0(n,t,s,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&ad(n.remoteStore,i),l}async function I0(n,t,e,r,i){n.Ka=(g,v,I)=>async function(k,R,S,x){let D=R.view.ma(S);D.ns&&(D=await eu(k.localStore,R.query,!1).then(({documents:E})=>R.view.ma(E,D)));const O=x&&x.targetChanges.get(R.targetId),G=x&&x.targetMismatches.get(R.targetId)!=null,j=R.view.applyChanges(D,k.isPrimaryClient,O,G);return cu(k,R.targetId,j.wa),j.snapshot}(n,g,v,I);const s=await eu(n.localStore,t,!0),a=new g0(t,s.Ts),l=a.ma(s.documents),u=Gr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);cu(n,e,d.wa);const f=new y0(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function T0(n,t,e){const r=W(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!rs(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ta(r.remoteStore,i.targetId),Fo(r,i.targetId)}).catch(jr)):(Fo(r,i.targetId),await Oo(r.localStore,i.targetId,!0))}async function b0(n,t){const e=W(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ta(e.remoteStore,r.targetId))}async function A0(n,t,e){const r=M0(n);try{const i=await function(a,l){const u=W(a),d=ft.now(),f=l.reduce((I,P)=>I.add(P.key),K());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Te(),k=K();return u.cs.getEntries(I,f).next(R=>{P=R,P.forEach((S,x)=>{x.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,P)).next(R=>{g=R;const S=[];for(const x of l){const D=G_(x,g.get(x.key).overlayedDocument);D!=null&&S.push(new Qe(x.key,D,Rh(D.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,S,l)}).next(R=>{v=R;const S=R.applyToLocalDocumentSet(g,k);return u.documentOverlayCache.saveOverlays(I,R.batchId,S)})}).then(()=>({batchId:v.batchId,changes:Fh(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new st(J)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,e),await Yr(r,i.changes),await us(r.remoteStore)}catch(i){const s=Pa(i,"Failed to persist write");e.reject(s)}}async function vd(n,t){const e=W(n);try{const r=await Uv(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Z(a.va):i.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await Yr(e,r,t)}catch(r){await jr(r)}}function lu(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&Ca(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function S0(n,t,e){const r=W(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let a=new st(B.comparator);a=a.insert(s,Pt.newNoDocument(s,H.min()));const l=K().add(s),u=new as(H.min(),new Map,new st(J),a,l);await vd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),xa(r)}else await Oo(r.localStore,t,!1).then(()=>Fo(r,t,e)).catch(jr)}async function R0(n,t){const e=W(n),r=t.batch.batchId;try{const i=await Bv(e.localStore,t);wd(e,r,null),Ed(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(e,i)}catch(i){await jr(i)}}async function P0(n,t,e){const r=W(n);try{const i=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Z(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);wd(r,t,e),Ed(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yr(r,i)}catch(i){await jr(i)}}function Ed(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function wd(n,t,e){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Fo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Id(n,r)})}function Id(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Ta(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),xa(n))}function cu(n,t,e){for(const r of e)r instanceof gd?(n.La.addReference(r.key,t),C0(n,r)):r instanceof yd?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Id(n,r.key)):$()}function C0(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+e),n.xa.add(r),xa(n))}function xa(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new B(it.fromString(t)),r=n.qa.next();n.Na.set(r,new _0(e)),n.Oa=n.Oa.insert(e,r),ad(n.remoteStore,new Be(se(pa(e.path)),r,"TargetPurposeLimboResolution",la.oe))}}async function Yr(n,t,e){const r=W(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(d=>{var f;if((d||e)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Ia.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(d,v=>N.forEach(v.$i,I=>f.persistence.referenceDelegate.addReference(g,v.targetId,I)).next(()=>N.forEach(v.Ui,I=>f.persistence.referenceDelegate.removeReference(g,v.targetId,I)))))}catch(g){if(!Hr(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const I=f.os.get(v),P=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(v,k)}}}(r.localStore,s))}async function x0(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await rd(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(M.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yr(e,r.hs)}}function k0(n,t){const e=W(n),r=e.Na.get(t);if(r&&r.va)return K().add(r.key);{let i=K();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Td(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=vd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=k0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=S0.bind(null,t),t.Ca.d_=p0.bind(null,t.eventManager),t.Ca.$a=m0.bind(null,t.eventManager),t}function M0(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=R0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=P0.bind(null,t),t}class Ki{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ls(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Fv(this.persistence,new Ov,t.initialUser,this.serializer)}Ga(t){return new Dv(wa.Zr,this.serializer)}Wa(t){return new Hv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ki.provider={build:()=>new Ki};class Bo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x0.bind(null,this.syncEngine),await h0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new f0}()}createDatastore(t){const e=ls(t.databaseInfo.databaseId),r=function(s){return new Yv(s)}(t.databaseInfo);return function(s,a,l,u){return new Jv(s,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,a,l){return new t0(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>lu(this.syncEngine,e,0),function(){return ru.D()?new ru:new Wv}())}createSyncEngine(t,e){return function(i,s,a,l,u,d,f){const g=new v0(i,s,a,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=W(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Kr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Bo.provider={build:()=>new Bo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ie("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=bh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Pa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function uo(n,t){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rd(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function uu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await N0(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>iu(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>iu(t.remoteStore,i)),n._onlineComponents=t}async function N0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await uo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Un("Error using user provided cache. Falling back to memory cache: "+e),await uo(n,new Ki)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await uo(n,new Ki);return n._offlineComponents}async function Ad(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await uu(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await uu(n,new Bo))),n._onlineComponents}function V0(n){return Ad(n).then(t=>t.syncEngine)}async function Sd(n){const t=await Ad(n),e=t.eventManager;return e.onListen=E0.bind(null,t.syncEngine),e.onUnlisten=T0.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=w0.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=b0.bind(null,t.syncEngine),e}function O0(n,t,e={}){const r=new ve;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new bd({next:v=>{f.Za(),a.enqueueAndForget(()=>pd(s,g));const I=v.docs.has(l);!I&&v.fromCache?d.reject(new L(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&v.fromCache&&u&&u.source==="server"?d.reject(new L(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new md(pa(l.path),f,{includeMetadataChanges:!0,_a:!0});return fd(s,g)}(await Sd(n),n.asyncQueue,t,e,r)),r.promise}function L0(n,t,e={}){const r=new ve;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new bd({next:v=>{f.Za(),a.enqueueAndForget(()=>pd(s,g)),v.fromCache&&u.source==="server"?d.reject(new L(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new md(l,f,{includeMetadataChanges:!0,_a:!0});return fd(s,g)}(await Sd(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Rd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,t,e){if(!e)throw new L(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function F0(n,t,e,r){if(t===!0&&r===!0)throw new L(M.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function du(n){if(!B.isDocumentKey(n))throw new L(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fu(n){if(B.isDocumentKey(n))throw new L(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function be(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hs(n);throw new L(M.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function B0(n,t){if(t<=0)throw new L(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}F0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ds{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n_;switch(r.type){case"firstParty":return new o_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=hu.get(e);r&&(F("ComponentProvider","Removing Datastore"),hu.delete(e),r.terminate())}(this),Promise.resolve()}}function U0(n,t,e,r={}){var i;const s=(n=be(n,ds))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Rt.MOCK_USER;else{l=hp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Rt(d)}n._authCredentials=new r_(new Th(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xe(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new je(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class je extends Xe{constructor(t,e,r){super(t,e,pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new B(t))}withConverter(t){return new je(this.firestore,t,this._path)}}function z0(n,t,...e){if(n=ut(n),Pd("collection","path",t),n instanceof ds){const r=it.fromString(t,...e);return fu(r),new je(n,null,r)}{if(!(n instanceof Ft||n instanceof je))throw new L(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return fu(r),new je(n.firestore,null,r)}}function Nn(n,t,...e){if(n=ut(n),arguments.length===1&&(t=bh.newId()),Pd("doc","path",t),n instanceof ds){const r=it.fromString(t,...e);return du(r),new Ft(n,null,new B(r))}{if(!(n instanceof Ft||n instanceof je))throw new L(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return du(r),new Ft(n.firestore,n instanceof je?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sd(this,"async_queue_retry"),this.Vu=()=>{const r=co();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=co();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=co();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ve;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Hr(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ie("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ra.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Zn extends ds{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new mu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mu(t),this._firestoreClient=void 0,await t}}}function q0(n,t){const e=typeof n=="object"?n:Vu(),r=typeof n=="string"?n:"(default)",i=Yo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cp("firestore");s&&U0(i,...s)}return i}function fs(n){if(n._terminated)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$0(n),n._firestoreClient}function $0(n){var t,e,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new v_(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new D0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wn(wt.fromBase64String(t))}catch(e){throw new L(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}/**
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
 */class Da{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=/^__.*__$/;class H0{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wr(t,this.data,e,this.fieldTransforms)}}class Cd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Qe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function xd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Na{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Na(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Yi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(xd(this.Cu)&&j0.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class W0{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ls(t)}Qu(t,e,r,i=!1){return new Na({Cu:t,methodName:e,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ms(n){const t=n._freezeSettings(),e=ls(n._databaseId);return new W0(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Va(n,t,e,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);Oa("Data must be an object, but it was:",a,r);const l=kd(r,a);let u,d;if(s.merge)u=new qt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const v=Uo(t,g,e);if(!a.contains(v))throw new L(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Dd(f,v)||f.push(v)}u=new qt(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new H0(new Vt(l),u,d)}class gs extends ka{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gs}}function G0(n,t,e,r){const i=n.Qu(1,t,e);Oa("Data must be an object, but it was:",i,r);const s=[],a=Vt.empty();yn(r,(u,d)=>{const f=La(t,u,e);d=ut(d);const g=i.Nu(f);if(d instanceof gs)s.push(f);else{const v=Qr(d,g);v!=null&&(s.push(f),a.set(f,v))}});const l=new qt(s);return new Cd(a,l,i.fieldTransforms)}function K0(n,t,e,r,i,s){const a=n.Qu(1,t,e),l=[Uo(t,r,e)],u=[i];if(s.length%2!=0)throw new L(M.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(Uo(t,s[v])),u.push(s[v+1]);const d=[],f=Vt.empty();for(let v=l.length-1;v>=0;--v)if(!Dd(d,l[v])){const I=l[v];let P=u[v];P=ut(P);const k=a.Nu(I);if(P instanceof gs)d.push(I);else{const R=Qr(P,k);R!=null&&(d.push(I),f.set(I,R))}}const g=new qt(d);return new Cd(f,g,a.fieldTransforms)}function Y0(n,t,e,r=!1){return Qr(e,n.Qu(r?4:3,t))}function Qr(n,t){if(Md(n=ut(n)))return Oa("Unsupported field value:",t,n),kd(n,t);if(n instanceof ka)return function(r,i){if(!xd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Qr(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ft.fromDate(r);return{timestampValue:Wi(i.serializer,s)}}if(r instanceof ft){const s=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wi(i.serializer,s)}}if(r instanceof Ma)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:Qh(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:va(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Da)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ma(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${hs(r)}`)}(n,t)}function kd(n,t){const e={};return Ah(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yn(n,(r,i)=>{const s=Qr(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof Ma||n instanceof Wn||n instanceof Ft||n instanceof ka||n instanceof Da)}function Oa(n,t,e){if(!Md(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=hs(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Uo(n,t,e){if((t=ut(t))instanceof ps)return t._internalPath;if(typeof t=="string")return La(n,t);throw Yi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Q0=new RegExp("[~\\*/\\[\\]]");function La(n,t,e){if(t.search(Q0)>=0)throw Yi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ps(...t.split("."))._internalPath}catch{throw Yi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Yi(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(M.INVALID_ARGUMENT,l+n+u)}function Dd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new X0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ys("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class X0 extends Nd{data(){return super.data()}}function ys(n,t){return typeof t=="string"?La(n,t):t instanceof ps?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fa{}class Ba extends Fa{}function Sr(n,t,...e){let r=[];t instanceof Fa&&r.push(t),r=r.concat(e),function(s){const a=s.filter(u=>u instanceof za).length,l=s.filter(u=>u instanceof _s).length;if(a>1||a>0&&l>0)throw new L(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class _s extends Ba{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new _s(t,e,r)}_apply(t){const e=this._parse(t);return Vd(t._query,e),new Xe(t.firestore,t.converter,ko(t._query,e))}_parse(t){const e=ms(t.firestore);return function(s,a,l,u,d,f,g){let v;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_u(g,f);const I=[];for(const P of g)I.push(yu(u,s,P));v={arrayValue:{values:I}}}else v=yu(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_u(g,f),v=Y0(l,a,g,f==="in"||f==="not-in");return ct.create(d,f,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ua(n,t,e){const r=t,i=ys("where",n);return _s._create(i,r,e)}class za extends Fa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new za(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Vd(a,u),a=ko(a,u)}(t._query,e),new Xe(t.firestore,t.converter,ko(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qa extends Ba{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qa(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nr(s,a)}(t._query,this._field,this._direction);return new Xe(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Qn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function gu(n,t="asc"){const e=t,r=ys("orderBy",n);return qa._create(r,e)}class $a extends Ba{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new $a(t,e,r)}_apply(t){return new Xe(t.firestore,t.converter,$i(t._query,this._limit,this._limitType))}}function Z0(n){return B0("limit",n),$a._create("limit",n,"F")}function yu(n,t,e){if(typeof(e=ut(e))=="string"){if(e==="")throw new L(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nh(t)&&e.indexOf("/")!==-1)throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(it.fromString(e));if(!B.isDocumentKey(r))throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fc(n,new B(r))}if(e instanceof Ft)return Fc(n,e._key);throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hs(e)}.`)}function _u(n,t){if(!Array.isArray(n)||n.length===0)throw new L(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vd(n,t){const e=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class tE{convertValue(t,e="none"){switch(gn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(mn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return yn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>at(a.doubleValue));return new Da(s)}convertGeoPoint(t){return new Ma(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ua(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(kr(t));default:return null}}convertTimestamp(t){const e=Ge(t);return new ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=it.fromString(t);Z(nd(r));const i=new Mr(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(e)||Ie(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Od extends Nd{constructor(t,e,r,i,s,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ys("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ci extends Od{data(t={}){return super.data(t)}}class eE{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Er(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ci(this._firestore,this._userDataWriter,r.key,r,new Er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Ci(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Er(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ci(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Er(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:nE(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){n=be(n,Ft);const t=be(n.firestore,Zn);return O0(fs(t),n._key).then(e=>iE(t,n,e))}class Fd extends tE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function vs(n){n=be(n,Xe);const t=be(n.firestore,Zn),e=fs(t),r=new Fd(t);return J0(n._query),L0(e,n._query).then(i=>new eE(t,r,n,i))}function Ha(n,t,e){n=be(n,Ft);const r=be(n.firestore,Zn),i=ja(n.converter,t,e);return Wa(r,[Va(ms(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,$t.none())])}function rE(n,t){const e=be(n.firestore,Zn),r=Nn(n),i=ja(n.converter,t);return Wa(e,[Va(ms(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function Wa(n,t){return function(r,i){const s=new ve;return r.asyncQueue.enqueueAndForget(async()=>A0(await V0(r),i,s)),s.promise}(fs(n),t)}function iE(n,t,e){const r=e.docs.get(t._key),i=new Fd(n);return new Od(n,i,t._key,r,new Er(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ms(t)}set(t,e,r){this._verifyNotCommitted();const i=ho(t,this._firestore),s=ja(i.converter,e,r),a=Va(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,$t.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=ho(t,this._firestore);let a;return a=typeof(e=ut(e))=="string"||e instanceof ps?K0(this._dataReader,"WriteBatch.update",s._key,e,r,i):G0(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,$t.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ho(t,this._firestore);return this._mutations=this._mutations.concat(new ga(e._key,$t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ho(n,t){if((n=ut(n)).firestore!==t)throw new L(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){return fs(n=be(n,Zn)),new sE(n,t=>Wa(n,t))}(function(t,e=!0){(function(i){Yn=i})(Gn),Fn(new hn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Zn(new i_(r.getProvider("auth-internal")),new l_(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),$e(Dc,"4.7.3",t),$e(Dc,"4.7.3","esm2017")})();const Bd={apiKey:"AIzaSyBdbve0H70D-Ch69WlaxEly7PVBFVRB5p0",authDomain:"pensiontools-4b237.firebaseapp.com",projectId:"pensiontools-4b237",storageBucket:"pensiontools-4b237.firebasestorage.app",messagingSenderId:"760877353696",appId:"1:760877353696:web:2d6f7173c8d7fab6fd9e85",measurementId:"G-80XX542QZE"};function ht(){return Bd.apiKey!=="YOUR_API_KEY"}let fo=null,jt=null,Ot=null;try{ht()?(fo=Nu(Bd),jt=t_(fo),Ot=q0(fo)):console.warn("Firebase not configured. Login required to save data.")}catch(n){console.error("Firebase initialization error:",n)}const oE=new pe;let Le=null,Rr=[];function aE(){if(!ht()||!jt){console.warn("Firebase not configured - auth disabled");return}qg(jt,n=>{console.log("onAuthStateChanged fired:",n?n.email:"null"),Le=n,console.log("Notifying",Rr.length,"listeners"),Rr.forEach(t=>t(n))})}function lE(n){return console.log("onAuthStateChange: adding listener, currentUser is:",Le&&Le.email),Rr.push(n),Le&&(console.log("onAuthStateChange: immediately calling listener with user"),n(Le)),()=>{Rr=Rr.filter(t=>t!==n)}}function Xr(){return Le}function Je(){return Le!==null}async function cE(n,t,e=null){if(!ht()||!jt)throw new Error("Firebase not configured");const r=await Og(jt,n,t);return e&&r.user&&await Bg(r.user,{displayName:e}),r}async function uE(n,t){if(!ht()||!jt)throw new Error("Firebase not configured");return Lg(jt,n,t)}async function hE(){if(!ht()||!jt)throw new Error("Firebase not configured");console.log("Initiating Google sign-in popup...");try{const n=await cy(jt,oE);return console.log("Google sign-in successful:",n.user.email),n}catch(n){throw console.error("signInWithPopup error:",n.code,n.message),n}}async function dE(){if(!ht()||!jt)throw new Error("Firebase not configured");return $g(jt)}async function fE(n){if(!ht()||!jt)throw new Error("Firebase not configured");return Vg(jt,n)}aE();function Es(n,t="settings"){const e=Xr();return!e||!Ot?null:Nn(Ot,"users",e.uid,n,t)}function ws(n){const t=Xr();return!t||!Ot?null:z0(Ot,"users",t.uid,n)}async function Ud(){if(!ht())return null;const n=Es("decision");if(!n)return null;try{const t=await Ld(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading decision data:",t),null}}async function pE(n){if(!ht())return;const t=Es("decision");if(t)try{await Ha(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving decision data:",e),e}}async function zd(n={}){if(!ht())return[];const t=ws("history");if(!t)return[];try{let e=Sr(t,gu("date",n.sortDesc?"desc":"asc"));n.taxYear&&(e=Sr(t,Ua("taxYear","==",n.taxYear),gu("date",n.sortDesc?"desc":"asc"))),n.limit&&(e=Sr(e,Z0(n.limit)));const r=await vs(e),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(e){return console.error("Error loading decision history:",e),[]}}async function mE(n){if(!ht())return null;const t=ws("history");if(!t)return null;try{const e=Sr(t,Ua("date","==",n.date)),r=await vs(e);if(!r.empty){const s=r.docs[0].id;return await Ha(Nn(Ot,"users",Xr().uid,"history",s),{...n,updatedAt:new Date().toISOString()}),s}return(await rE(t,{...n,createdAt:new Date().toISOString()})).id}catch(e){throw console.error("Error adding history record:",e),e}}async function gE(n){if(!ht())return;const t=ws("history");if(t)try{const e=Sr(t,Ua("date","==",n)),r=await vs(e),i=Qi(Ot);r.forEach(s=>{i.delete(s.ref)}),await i.commit()}catch(e){throw console.error("Error deleting history record:",e),e}}async function yE(){if(!ht())return;const n=ws("history");if(n)try{const t=await vs(n),e=500,r=[];let i=Qi(Ot),s=0;t.forEach(a=>{i.delete(a.ref),s++,s>=e&&(r.push(i),i=Qi(Ot),s=0)}),s>0&&r.push(i),await Promise.all(r.map(a=>a.commit()))}catch(t){throw console.error("Error clearing history:",t),t}}async function _E(){if(!ht())return null;const n=Es("stress");if(!n)return null;try{const t=await Ld(n);return t.exists()?t.data():null}catch(t){return console.error("Error loading stress data:",t),null}}async function qd(n){if(!ht())return;const t=Es("stress");if(t)try{await Ha(t,{...n,lastModified:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error saving stress data:",e),e}}async function vE(){if(!ht())return;const n=Xr();if(!(!n||!Ot))try{await yE();const t=Qi(Ot);t.delete(Nn(Ot,"users",n.uid,"decision","settings")),t.delete(Nn(Ot,"users",n.uid,"stress","settings")),t.delete(Nn(Ot,"users",n.uid,"profile","settings")),await t.commit(),console.log("All user data wiped successfully")}catch(t){throw console.error("Error wiping user data:",t),t}}async function EE(){if(!ht())return!1;const n=await Ud(),t=await zd({limit:1});return n!==null||t.length>0}let Lt=null,Vn=null;const $d=5e3;function xi(){return{settings:{equityMin:St.EQUITY_MIN,bondMin:St.BOND_MIN,cashTarget:St.CASH_TARGET,duration:St.DURATION_YEARS,baseSalary:St.BASE_SALARY,protectionFactor:St.PROTECTION_FACTOR,recoveryBuffer:St.RECOVERY_BUFFER,consecutiveLimit:St.CONSECUTIVE_LIMIT,startDate:null},taxYears:{},history:[],lastModified:null,checksum:null}}function Is(){return ht()&&Je()}function Ts(){return Lt&&Vn&&Date.now()-Vn<$d?Lt:xi()}async function Ga(){if(Lt&&Vn&&Date.now()-Vn<$d)return Lt;if(!Is())return console.warn("Firebase not available - returning defaults"),xi();try{const n=await Ud(),t=await zd();if(n){const e={settings:n.settings||xi().settings,taxYears:n.taxYears||{},history:t||[],lastModified:n.lastModified,checksum:n.checksum};return Lt=e,Vn=Date.now(),e}}catch(n){console.error("Error loading from Firebase:",n)}return xi()}async function jd(n){if(!Is())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=wE(n),await pE({settings:n.settings,taxYears:n.taxYears,lastModified:n.lastModified,checksum:n.checksum}),Lt=n,Vn=Date.now()}catch(t){throw console.error("Error saving to Firebase:",t),new Error("Failed to save decision data")}}function wE(n){const t={settings:n.settings,taxYears:n.taxYears,historyCount:n.history.length,lastHistoryDate:n.history.length>0?n.history[n.history.length-1].date:null};return Au(t)}function IE(){return Ts().settings}async function TE(){return(await Ga()).settings}async function Ka(n){const t=await Ga();t.settings={...t.settings,...n},await jd(t)}function Ya(n){const e=Ts().taxYears[n];return e||{pa:Nt.PERSONAL_ALLOWANCE,brl:Nt.BASIC_RATE_LIMIT,hrl:Nt.HIGHER_RATE_LIMIT,cpi:.025,other:0,statePension:0,isaBalance:0,isaMonthlyDraw:0}}async function bE(n,t){const e=await Ga();e.taxYears[n]={...Ya(n),...t},await jd(e)}function AE(){return Ts().taxYears}function Hd(n={}){let e=[...Ts().history];return n.taxYear&&(e=e.filter(r=>r.taxYear===n.taxYear)),n.startDate&&(e=e.filter(r=>r.date>=n.startDate)),n.endDate&&(e=e.filter(r=>r.date<=n.endDate)),n.sortDesc?e.sort((r,i)=>i.date.localeCompare(r.date)):e.sort((r,i)=>r.date.localeCompare(i.date)),n.limit&&(e=e.slice(0,n.limit)),e}async function SE(n){if(!Is())throw new Error("Must be logged in to save history");if(await mE(n),Lt){const t=Lt.history.findIndex(e=>e.date===n.date);t>=0?Lt.history[t]=n:Lt.history.push(n),Lt.history.sort((e,r)=>e.date.localeCompare(r.date))}}async function RE(n){if(!Is())throw new Error("Must be logged in to delete history");await gE(n),Lt&&(Lt.history=Lt.history.filter(t=>t.date!==n))}function PE(n){return Hd({taxYear:n})}function CE(n){const{date:t,equity:e,bond:r,cash:i,isaBalance:s=0}=n,a=IE(),l=typeof t=="string"?jf(t):t,u=zf(l),d=Ya(u),f=PE(u),g=a.startDate||(f.length>0?f[0].date:t),v=Wf(g,l),I=f.map(j=>d.cpi);for(let j=0;j<v;j++)I[j]||I.unshift(d.cpi);const P=Xf(I),k=Tu(a,v,P),R=Zf({equity:e,bond:r,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,priorHistory:f,consecutiveLimit:a.consecutiveLimit,recoveryBuffer:a.recoveryBuffer}),S=Kf({equity:e,bond:r,cash:i,isaBalance:s,baseSalary:a.baseSalary,cumulativeInflation:P,yearlyInflation:I,other:d.other,statePension:d.statePension,statePensionYear:a.statePensionYear||12,yearNumber:v,pa:d.pa,brl:d.brl,hrl:d.hrl,taxMode:a.taxMode||"inflates",currentDate:l,taxYearHistory:f,inProtection:R.inProtection,protectionFactor:a.protectionFactor,adjEquityMin:k.equity,adjBondMin:k.bond}),x=tp({drawAmount:S.monthlySipp+S.boostAmount,equity:e,bond:r,cash:i,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,inProtection:R.inProtection}),D=ep({equity:e,bond:r,cash:i,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,inProtection:R.inProtection}),O=xE({recommendation:S,protectionStatus:R,glidepaths:k,funds:{equity:e,bond:r,cash:i},withdrawalSource:x});return Lf({date:typeof t=="string"?t:t.toISOString().slice(0,7),taxYear:u,yearNumber:v,monthInTaxYear:Hf(l),remainingMonths:Wo(l),equity:e,bond:r,cash:i,isa:s,adjEquityMin:k.equity,adjBondMin:k.bond,adjCashTarget:k.cash,pa:S.taxInfo.pa,brl:S.taxInfo.brl,hrl:S.taxInfo.hrl,other:S.monthlyOther,statePension:S.monthlyState,sippDraw:S.monthlySipp+S.boostAmount,isaDraw:S.monthlyIsa,totalMonthlyNet:S.monthlyNet,taxEfficient:S.mode==="tax-efficient",annualTaxableSoFar:S.taxInfo.annualTaxable,headroomToBRL:S.taxInfo.headroomToBRL,inProtection:R.inProtection,protectionReason:R.reason,consecutiveCashDraws:R.consecutiveCashDraws,boostAmount:S.boostAmount,boostEligible:S.taxBoostEligible,source:x.source,drawFromEquity:x.fromEquity,drawFromBond:x.fromBond,drawFromCash:x.fromCash,rebalanceNeeded:D.length>0,rebalanceActions:D.map(j=>j.action),alerts:O,calculationDetails:{mode:S.mode,reason:S.reason,isaNeededMonthly:S.isaNeededMonthly,totalIsaNeeded:S.totalIsaNeeded,hasSufficientIsa:S.hasSufficientIsa,cumulativeInflation:P,yearlyInflation:I,glidepaths:k,protectionStatus:R,taxInfo:S.taxInfo}})}function xE(n){const{recommendation:t,protectionStatus:e,glidepaths:r,funds:i,withdrawalSource:s}=n,a=[];e.inProtection&&a.push(sn(`Protection Mode Active: ${e.reason}`,Kt.WARNING,"protection-active")),e.canExitProtection&&a.push(sn("Exiting protection mode - growth funds recovered",Kt.SUCCESS,"protection-exit")),t.warning&&a.push(sn(t.warning,Kt.WARNING,"insufficient-isa")),t.boostAmount>0&&a.push(sn(`Tax Boost: +£${Math.round(t.boostAmount).toLocaleString()}/mo (${t.boostReason})`,Kt.INFO,"tax-boost")),t.isaUsedForTopUp&&t.monthlyIsa>0&&a.push(sn(`Using £${Math.round(t.monthlyIsa).toLocaleString()} ISA top-up to stay tax-efficient`,Kt.INFO,"isa-topup"));const l=i.cash-r.cash;return l<0&&a.push(sn(`Cash £${Math.round(Math.abs(l)).toLocaleString()} below target - consider topping up`,Kt.DANGER,"low-cash")),s.shortfall>0&&a.push(sn(`Withdrawal shortfall: £${Math.round(s.shortfall).toLocaleString()} could not be covered`,Kt.DANGER,"shortfall")),a}function kE(n){const t=Ff(n);t.stdSipp=n.sippDraw-(n.boostAmount||0),SE(t)}function Qa(n,t,e=0){const r=bu(e);let i=n.equityStart,s=n.bondStart,a=n.cashStart,l=n.hodlEnabled?n.hodlStart!==void 0?n.hodlStart:n.hodlValue:0,u=0,d=null,f=0,g=0,v=0,I=0,P=!1,k=!1,R=null,S=0,x=-1;const D=[],O=[];let G=1,j=.025;D.push({year:0,month:0,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:0,source:"None",inProtection:!1,equityMin:n.equityMin,bondMin:n.bondMin,cashMax:n.cashTarget});for(let E=0;E<n.years*12;E++){const m=Math.floor(E/12),y=E%12,w=y>=3?m:m-1;if(w!==x&&(S=0,x=w),E>0&&E%12===0){const nt=t.inflation[m]||.025;O.push(nt),G*=1+nt}const T=t.equity[m]||0,A=t.inflation[m]||.025,_=Cn(n.equityMin,m,n.duration,G,!0),Mt=Cn(n.bondMin,m,n.duration,G,!0),Ht=Cn(n.cashTarget,m,n.duration,G,!1),Qt=DE(n,m,G,O),Bt=Qt;let dt=P?Qt*n.protectionMult:Qt;P&&(S+=Bt-dt);const pt=Math.pow(1+T,1/12)-1,vn=ME(A,T,j,r)/12,Wt=Math.pow(1+Math.max(.005,A+.012),1/12)-1;if(i*=1+pt,s*=1+vn,a*=1+Wt,l>0){const Jt=(r()-.5)*2*.06;let Ut=0;T<-.1?Ut=Math.min(.15,Math.abs(T)*.4):T<-.05&&(Ut=Math.abs(T)*.2);let Gt=.069+Jt+Ut;Gt=Math.max(-.08,Math.min(.18,Gt)),l*=1+Math.pow(1+Gt,1/12)-1}j=A;const tt=i+s,Xt=_+Mt;P&&tt>Xt+5e3&&(P=!1,I=0,g=Math.max(g,v),v=0),P&&(f++,v++);let Dt=0;if(!P&&S>0&&tt>Xt+15e3){let nt=y>=3?15-y:3-y;nt<1&&(nt=1);const Pe=tt-Xt-15e3,Jt=Math.min(S/nt,Pe/nt),Ut=Bt*.5;Dt=Math.min(Jt,Ut),Dt>50&&(dt+=Dt,S-=Dt)}let ue="Growth";if(!P&&tt>=Xt+dt){const nt=Math.max(0,i-_),Pe=Math.max(0,s-Mt),Jt=nt+Pe;if(Jt>0){if(i-=dt*nt/Jt,s-=dt*Pe/Jt,I=0,ue="Growth",a<Ht){const Ut=tt-Xt-dt;if(Ut>5e3){const Gt=Math.min((Ht-a)*.3,Ut*.5);i-=Gt*nt/Jt,s-=Gt*Pe/Jt,a+=Gt}}}else a-=dt,ue="Cash"}else if(a>=dt)a-=dt,I++,ue="Cash",!n.disableProtection&&I>=n.consecutiveLimit&&(P=!0);else{const nt=dt-a;a=0,s>nt?(s-=nt,ue="Bond"):i>nt?(i-=nt,ue="Equity"):l>nt?(l-=nt,u+=nt,d===null&&(d=E),ue="HODL"):(k=!0,R=E)}if(i=Math.max(0,i),s=Math.max(0,s),a=Math.max(0,a),(y===0||E===n.years*12-1||k)&&D.push({year:m+y/12,month:E,equity:i,bond:s,cash:a,hodl:l,total:i+s+a,draw:dt,boostAmount:Dt,source:ue,inProtection:P,equityMin:_,bondMin:Mt,cashMax:Ht}),k)break}return g=Math.max(g,v),{failed:k,years:k?R/12:n.years,failMonth:R,final:i+s+a,finalEquity:i,finalBond:s,finalCash:a,finalHodl:l,protMonths:f,maxConsec:g,hodlUsed:u,hodlUsedMonth:d,hist:D,seed:e}}function ME(n,t,e,r){let i=.15,s=.3,a=.2,l=.1,u=.1,d=.15;const f=e!==void 0?e:n,g=f>.045,v=f>.07;if(g){const D=r()>.3?1:.5;v?(i=.15+.35*D,s=.3-.2*D,d=.15-.1*D,l=.1+.05*D):(i=.15+.2*D,s=.3-.1*D,d=.15-.05*D)}g&&r()<.15&&(i=.2,s=.25,d=.12);const I=n+.005+fr(0,.03,r),P=.04-(n>.04?(n-.04)*.5:0)+fr(0,.05,r),k=.03+n*.3+fr(0,.08,r),R=n*.8+fr(0,.15,r),S=Math.max(.005,n+.005),x=t*.5+fr(0,.02,r);return i*I+s*P+a*k+l*R+u*S+d*x}function DE(n,t,e,r){n.taxMode==="frozen"?n.pa:n.pa*e;const i=n.taxMode==="frozen"?n.brl:n.brl*e,s=n.baseSalary*e;let a=n.other;for(const f of r)a*=1+Math.min(f,.04);const l=t>=n.statePensionYear?n.statePension*e:0,u=a+l;return Math.max(0,Math.min(i,s)-u)/12}function NE(n,t=1e3){const e=Object.keys(ki).map(Number).sort((i,s)=>i-s),r=[];for(let i=0;i<t;i++){const s=bu(i*12345),a={equity:{},inflation:{}};for(let l=0;l<n.years;l++){const u=e[Math.floor(s()*e.length)];a.equity[l]=ki[u],a.inflation[l]=wu[u]||.025}r.push(Qa(n,a,i))}return r}function VE(n){const t=Object.keys(ki).map(Number).sort((i,s)=>i-s),e=Math.max(...t),r=[];for(const i of t){if(i+n.years-1>e)continue;const s={equity:{},inflation:{}};for(let l=0;l<n.years;l++)s.equity[l]=ki[i+l]||0,s.inflation[l]=wu[i+l]||.025;const a=Qa(n,s,i);a.startYear=i,r.push(a)}return r}function OE(n,t){const e={equity:{},inflation:{}};for(let r=0;r<n.years;r++)e.equity[r]=t.equity[r%t.equity.length],e.inflation[r]=t.inflation[r%t.inflation.length];return Qa(n,e,999)}function LE(n){const t=n.filter(e=>e.failed).length;return(n.length-t)/n.length*100}function Wd(n){const t=n.filter(l=>!l.failed),e=n.filter(l=>l.failed),r=n.map(l=>l.years).sort((l,u)=>l-u),i=t.map(l=>l.final).sort((l,u)=>l-u),s=n.map(l=>l.protMonths).sort((l,u)=>l-u),a=(l,u)=>l[Math.floor(l.length*u)]||0;return{total:n.length,successCount:t.length,failCount:e.length,successRate:LE(n),survival:{p5:a(r,.05),p10:a(r,.1),p25:a(r,.25),p50:a(r,.5),p75:a(r,.75),p90:a(r,.9),p95:a(r,.95),min:r[0],max:r[r.length-1]},finalValue:{p5:a(i,.05),p10:a(i,.1),p25:a(i,.25),p50:a(i,.5),p75:a(i,.75),p90:a(i,.9),p95:a(i,.95),min:i[0]||0,max:i[i.length-1]||0,avg:t.reduce((l,u)=>l+u.final,0)/(t.length||1)},minYears:r[0],p10Years:a(r,.1),medianYears:a(r,.5),medianFinal:a(i,.5),p10Final:a(i,.1),p90Final:a(i,.9),avgFinal:t.reduce((l,u)=>l+u.final,0)/(t.length||1),protection:{runsWithProtection:n.filter(l=>l.protMonths>0).length,pctWithProtection:n.filter(l=>l.protMonths>0).length/n.length*100,avgMonths:s.reduce((l,u)=>l+u,0)/n.length,maxMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,p50Months:a(s,.5),p90Months:a(s,.9),p95Months:a(s,.95)},runsWithProtection:n.filter(l=>l.protMonths>0).length,avgProtMonths:s.reduce((l,u)=>l+u,0)/n.length,maxProtMonths:Math.max(...s),maxConsecutive:Math.max(...n.map(l=>l.maxConsec)),avgConsecutive:n.reduce((l,u)=>l+u.maxConsec,0)/n.length,hodl:{runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,pctUsingHodl:n.filter(l=>l.hodlUsed>0).length/n.length*100,avgUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxUsed:Math.max(...n.map(l=>l.hodlUsed||0))},runsUsingHodl:n.filter(l=>l.hodlUsed>0).length,avgHodlUsed:n.filter(l=>l.hodlUsed>0).length>0?n.filter(l=>l.hodlUsed>0).reduce((l,u)=>l+u.hodlUsed,0)/n.filter(l=>l.hodlUsed>0).length:0,maxHodlUsed:Math.max(...n.map(l=>l.hodlUsed||0)),failures:e.map(l=>({seed:l.seed,startYear:l.startYear,years:l.years,failMonth:l.failMonth,protMonths:l.protMonths}))}}let Ue=null,un=null;const Gd=5e3;function On(){return{settings:{equityMin:St.EQUITY_MIN,bondMin:St.BOND_MIN,cashTarget:St.CASH_TARGET,duration:St.DURATION_YEARS,baseSalary:St.BASE_SALARY,other:0,statePension:12e3,statePensionYear:12,pa:Nt.PERSONAL_ALLOWANCE,brl:Nt.BASIC_RATE_LIMIT,hrl:Nt.HIGHER_RATE_LIMIT,taxMode:"inflates",protectionMult:Js.PROTECTION_MULTIPLIER,consecutiveLimit:St.CONSECUTIVE_LIMIT,disableProtection:!1,hodlEnabled:Js.HODL_ENABLED,hodlValue:Js.HODL_VALUE},lastModified:null,checksum:null}}function Xa(){return ht()&&Je()}function FE(){Ue=null,un=null}function BE(){return Ue&&un&&Date.now()-un<Gd?Ue:On()}async function Kd(){if(Ue&&un&&Date.now()-un<Gd)return Ue;if(!Xa())return console.warn("Firebase not available - returning defaults"),On();try{const n=await _E();if(n){const t={settings:n.settings||On().settings,lastModified:n.lastModified,checksum:n.checksum};return Ue=qE(t),un=Date.now(),Ue}}catch(n){console.error("Error loading stress data from Firebase:",n)}return On()}async function UE(n){if(!Xa())throw new Error("Must be logged in to save data");try{n.lastModified=new Date().toISOString(),n.checksum=zE(n),await qd({settings:n.settings,lastModified:n.lastModified,checksum:n.checksum}),Ue=n,un=Date.now()}catch(t){throw console.error("Error saving stress data to Firebase:",t),new Error("Failed to save stress data")}}function zE(n){return Au(n.settings)}function qE(n){const t={...On()};return n.settings&&(t.settings={...t.settings,...n.settings},n.settings.pacwMin!==void 0&&n.settings.equityMin===void 0&&(t.settings.equityMin=n.settings.pacwMin),n.settings.cgtMin!==void 0&&n.settings.bondMin===void 0&&(t.settings.bondMin=n.settings.cgtMin),n.settings.csh2Target!==void 0&&n.settings.cashTarget===void 0&&(t.settings.cashTarget=n.settings.csh2Target),t.settings.hodlEnabled===void 0&&(t.settings.hodlEnabled=!1),t.settings.hodlValue===void 0&&(t.settings.hodlValue=25e3)),t.lastModified=n.lastModified,t.checksum=n.checksum,t}function $E(){return BE().settings}async function Ze(){return(await Kd()).settings}async function Ja(n){const t=await Kd();t.settings={...t.settings,...n},await UE(t)}async function jE(){if(!Xa())throw new Error("Must be logged in to reset settings");const n=On();await qd({settings:n.settings,lastModified:new Date().toISOString()}),FE()}function Za(n={},t=null){const e=t||$E();return{equityStart:n.equityStart??e.equityMin,bondStart:n.bondStart??e.bondMin,cashStart:n.cashStart??e.cashTarget,equityMin:e.equityMin,bondMin:e.bondMin,cashTarget:e.cashTarget,years:n.years??e.duration,duration:e.duration,baseSalary:e.baseSalary,other:e.other,statePension:e.statePension,statePensionYear:e.statePensionYear,pa:e.pa,brl:e.brl,hrl:e.hrl,taxMode:e.taxMode,protectionMult:e.protectionMult,consecutiveLimit:e.consecutiveLimit,disableProtection:e.disableProtection,hodlEnabled:e.hodlEnabled,hodlValue:e.hodlValue}}function U(n,t=null){const e=Math.abs(n),r=t!==null?t:e<100,i=Math.abs(n).toLocaleString("en-GB",{minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0});return n<0?`-£${i}`:`£${i}`}function Yd(n,t){const e=HE(n);t.innerHTML=e}function HE(n){const t=n,e=t.calculationDetails||{};let r="";const i=t.taxEfficient?"success":"warning",s=t.taxEfficient?"Tax-Efficient Mode":"Standard Mode",a=t.taxEfficient?"✓":"!";if(r+=`<div class="decision-mode ${i}">
    <span class="mode-icon">${a}</span>
    <span class="mode-label">${s}</span>
    ${t.inProtection?'<span class="protection-badge">PROTECTION</span>':""}
  </div>`,t.alerts&&t.alerts.length>0){r+='<div class="alerts">';for(const R of t.alerts){const S=WE(R.severity);r+=`<div class="alert ${S}">${R.message}</div>`}r+="</div>"}r+='<div class="recommendation-card">',r+="<h3>Monthly Recommendation</h3>",r+='<div class="draw-row primary">',r+='<span class="label">SIPP Withdrawal</span>',r+=`<span class="value">${U(t.sippDraw)}</span>`,r+="</div>",t.isaDraw>0&&(r+='<div class="draw-row">',r+='<span class="label">ISA Top-up</span>',r+=`<span class="value">${U(t.isaDraw)}</span>`,r+="</div>"),t.other>0&&(r+='<div class="draw-row muted">',r+='<span class="label">Other Pension</span>',r+=`<span class="value">${U(t.other)}</span>`,r+="</div>"),t.statePension>0&&(r+='<div class="draw-row muted">',r+='<span class="label">State Pension</span>',r+=`<span class="value">${U(t.statePension)}</span>`,r+="</div>"),r+='<div class="divider"></div>';const l=t.sippDraw+t.isaDraw+t.other+t.statePension;r+='<div class="draw-row total">',r+='<span class="label">Total Monthly Income</span>',r+=`<span class="value">${U(l)}</span>`,r+="</div>",t.boostAmount>0&&(r+='<div class="boost-indicator">',r+='<span class="boost-label">Includes Tax Boost:</span>',r+=`<span class="boost-value">+${U(t.boostAmount)}</span>`,r+="</div>"),r+="</div>",r+='<div class="source-card">',r+="<h4>Withdraw From</h4>",r+=`<div class="source-label ${t.source.toLowerCase()}">${t.source}</div>`,t.source==="Growth"&&(t.drawFromEquity>0||t.drawFromBond>0)&&(r+='<div class="source-breakdown">',t.drawFromEquity>0&&(r+=`<div class="source-item">Equity: ${U(t.drawFromEquity)}</div>`),t.drawFromBond>0&&(r+=`<div class="source-item">Bond: ${U(t.drawFromBond)}</div>`),r+="</div>"),r+="</div>",r+='<div class="fund-status">',r+="<h4>Fund Status</h4>";const u=t.equity+t.bond+t.cash,d=t.adjEquityMin+t.adjBondMin+t.adjCashTarget,f=u-d,g=d>0?f/d*100:0;r+='<div class="fund-grid">';const v=t.equity-t.adjEquityMin;r+=po("Equity",t.equity,t.adjEquityMin,v);const I=t.bond-t.adjBondMin;r+=po("Bond",t.bond,t.adjBondMin,I);const P=t.cash-t.adjCashTarget;r+=po("Cash",t.cash,t.adjCashTarget,P),r+="</div>";const k=f>=0?"healthy":"warning";if(r+=`<div class="overall-status ${k}">`,r+=`<span>Total Surplus: ${U(f)}</span>`,r+=`<span>(${g.toFixed(1)}% above target)</span>`,r+="</div>",r+="</div>",r+='<div class="tax-info">',r+="<h4>Tax Summary</h4>",r+='<div class="tax-grid">',r+=`<div class="tax-item"><span>Personal Allowance:</span><span>${U(t.pa)}</span></div>`,r+=`<div class="tax-item"><span>Basic Rate Limit:</span><span>${U(t.brl)}</span></div>`,e.taxInfo&&(r+=`<div class="tax-item"><span>Projected Annual Taxable:</span><span>${U(e.taxInfo.annualTaxable)}</span></div>`,r+=`<div class="tax-item"><span>Headroom to BRL:</span><span>${U(e.taxInfo.headroomToBRL)}</span></div>`,r+=`<div class="tax-item"><span>Estimated Annual Tax:</span><span>${U(e.taxInfo.annualTax)}</span></div>`),r+="</div>",r+="</div>",t.rebalanceNeeded&&t.rebalanceActions.length>0){r+='<div class="rebalance-card">',r+="<h4>Rebalancing Suggestions</h4>",r+="<ul>";for(const R of t.rebalanceActions)r+=`<li>${R}</li>`;r+="</ul>",r+="</div>"}return r+='<div class="mode-explanation">',r+="<h4>Why This Recommendation?</h4>",r+=`<p>${e.reason||"Standard calculation based on your settings."}</p>`,!e.hasSufficientIsa&&e.isaNeededMonthly>0&&(r+=`<p class="isa-warning">To enable tax-efficient mode, you need ${U(e.totalIsaNeeded)} in your ISA (${t.remainingMonths} months remaining in tax year).</p>`),r+="</div>",r+='<details class="debug-section">',r+="<summary>Calculation Details</summary>",r+="<pre>"+JSON.stringify(e,null,2)+"</pre>",r+="</details>",r}function po(n,t,e,r){return`<div class="fund-cell ${r>=0?"healthy":"deficit"}">
    <div class="fund-name">${n}</div>
    <div class="fund-current">${U(t)}</div>
    <div class="fund-min">Min: ${U(e)}</div>
    <div class="fund-surplus">${r>=0?"+":""}${U(r)}</div>
  </div>`}function WE(n){switch(n){case Kt.DANGER:return"alert-danger";case Kt.WARNING:return"alert-warning";case Kt.SUCCESS:return"alert-success";case Kt.INFO:default:return"alert-info"}}function GE(){return`
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
  `}const KE={currentDecision:null,hasUnsavedChanges:!1,activeTab:"decision"};function YE(n){try{const t=CE(n);KE.currentDecision=t;const e=document.getElementById("decisionOutput");return e&&Yd(t,e),t}catch(t){return console.error("Decision calculation error:",t),XE("Failed to calculate decision: "+t.message),null}}function Qd(n={},t=null){const e=Za(n,t),r=NE(e),i=Wd(r);return{results:r,stats:i,config:e}}function Xd(n={},t=null){const e=Za(n,t),r=VE(e),i=Wd(r);return{results:r,stats:i,config:e}}function QE(n={}){const t=Za(n),e={};for(const[r,i]of Object.entries(Bf))e[r]={...i,result:OE(t,i)};return e}function XE(n){console.error(n),alert(n)}let ae=null,mo=null,Rn=!1;function JE(n,t){console.log("initAuthScreen: initializing"),ae=n,mo=t,Rn=!1,lE(e=>{console.log("AuthScreen: auth state change received:",e?e.email:"null","processed:",Rn),e&&mo&&!Rn?(console.log("AuthScreen: calling onAuthSuccessCallback"),Rn=!0,mo(e)):e?console.log("AuthScreen: skipping callback, already processed or no callback"):(Rn=!1,console.log("AuthScreen: user signed out, reset authProcessed"))}),Jd(),console.log("initAuthScreen: complete")}function Jd(){if(ae){if(!ht()){ae.innerHTML=`
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
    `;return}ae.innerHTML=`
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
  `,ZE()}}function ZE(){const n=ae.querySelectorAll(".auth-screen-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("active")),s.classList.add("active");const a=document.getElementById("signinForm"),l=document.getElementById("signupForm");s.dataset.tab==="signin"?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block"),Jr()})}),document.getElementById("signinForm").addEventListener("submit",tw),document.getElementById("signupForm").addEventListener("submit",ew),document.getElementById("forgotPasswordBtn").addEventListener("click",nw),document.getElementById("googleSigninBtn").addEventListener("click",rw)}function He(n){const t=document.getElementById("authScreenError");t&&(t.textContent=n,t.style.display="block")}function Jr(){const n=document.getElementById("authScreenError");n&&(n.style.display="none")}async function tw(n){n.preventDefault(),Jr();const t=document.getElementById("signinEmail").value.trim(),e=document.getElementById("signinPassword").value;if(!t||!e){He("Please enter email and password");return}try{await uE(t,e)}catch(r){console.error("Sign in error:",r),He(bs(r.code))}}async function ew(n){n.preventDefault(),Jr();const t=document.getElementById("signupName").value.trim(),e=document.getElementById("signupEmail").value.trim(),r=document.getElementById("signupPassword").value;if(!t||!e||!r){He("Please fill in all fields");return}if(r.length<6){He("Password must be at least 6 characters");return}try{await cE(e,r,t)}catch(i){console.error("Sign up error:",i),He(bs(i.code))}}async function nw(){Jr();const n=document.getElementById("signinEmail").value.trim();if(!n){He("Please enter your email address first");return}try{await fE(n),alert("Password reset email sent. Check your inbox.")}catch(t){console.error("Reset password error:",t),He(bs(t.code))}}async function rw(){Jr();try{await hE()}catch(n){console.error("Google sign in error:",n),He(bs(n.code))}}function bs(n){return{"auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email","auth/weak-password":"Password is too weak","auth/operation-not-allowed":"Sign in method not enabled","auth/popup-closed-by-user":"Sign in cancelled","auth/popup-blocked":"Sign in popup was blocked","auth/too-many-requests":"Too many attempts. Please try again later.","auth/invalid-credential":"Invalid email or password"}[n]||"An error occurred. Please try again."}function zo(){console.log("hideAuthScreen: hiding auth screen, element=",!!ae),ae&&(ae.style.display="none",console.log("hideAuthScreen: set display to none"))}function iw(){Rn=!1,ae&&(ae.style.display="block",Jd())}function sw(){return`
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
  `}let Ye=null,qo=null,z={introDone:!1,baseSalary:3e4,otherIncome:0,statePension:12e3,statePensionYear:12,equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,taxMode:"inflates",decisionSalary:3e4,decisionEquity:25e4,decisionBond:2e5,decisionCash:5e4,decisionDuration:35},fe="intro",yt=1;function $o(n,t){Ye=n,qo=t,De()}function De(){Ye&&(fe==="intro"?ow():fe==="stress"?cw():fe==="decision"&&hw())}function ow(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Welcome to Pension Planner</div>
        <div class="wizard-subtitle">A tool to help you plan and manage your SIPP pension drawdown</div>

        <div class="wizard-progress">
          ${tl(2,yt)}
        </div>

        ${yt===1?aw():lw()}
      </div>
    </div>
  `,el()}function aw(){return`
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
  `}function lw(){return`
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
  `}function cw(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Stress Tester Setup</div>
        <div class="wizard-subtitle">Let's set up your pension simulation in a few simple steps.</div>

        <div class="wizard-progress">
          ${tl(6,yt)}
        </div>

        ${uw(yt)}
      </div>
    </div>
  `,el()}function uw(n){switch(n){case 1:return`
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
      `;default:return""}}function hw(){Ye.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-box">
        <div class="wizard-title">Decision Tool Setup</div>
        <div class="wizard-subtitle">Now let's set up the tool you'll use each month once you're retired.</div>

        <div class="wizard-progress">
          ${tl(4,yt)}
        </div>

        ${dw(yt)}
      </div>
    </div>
  `,el()}function dw(n){switch(n){case 1:return`
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
      `;default:return""}}function tl(n,t){let e="";for(let r=1;r<=n;r++){const i=r<t?"done":r===t?"active":"";e+=`<div class="wizard-dot ${i}"></div>`}return e}function el(){Ye.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",()=>fw(t.dataset.action))})}function fw(n){switch(Zd(),n){case"skip-all":go();break;case"next":fe==="intro"?yt<2&&(yt++,De()):fe==="stress"?yt<6&&(yt++,De()):fe==="decision"&&yt<4&&(yt++,De());break;case"back":yt>1&&(yt--,De());break;case"start-stress":fe="stress",yt=1,De();break;case"skip-stress":fe="decision",yt=1,z.decisionSalary=z.baseSalary,z.decisionEquity=z.equityMin,z.decisionBond=z.bondMin,z.decisionCash=z.cashTarget,z.decisionDuration=z.duration,De();break;case"finish-stress":fe="decision",yt=1,z.decisionSalary=z.baseSalary,z.decisionEquity=z.equityMin,z.decisionBond=z.bondMin,z.decisionCash=z.cashTarget,z.decisionDuration=z.duration,De();break;case"skip-decision":go();break;case"finish":go();break}}function Zd(){const n=document.getElementById("wizBaseSalary");n&&(z.baseSalary=parseFloat(n.value)||3e4);const t=document.getElementById("wizOther");t&&(z.otherIncome=parseFloat(t.value)||0);const e=document.getElementById("wizStatePension");e&&(z.statePension=parseFloat(e.value)||12e3);const r=document.getElementById("wizStatePensionYear");r&&(z.statePensionYear=parseInt(r.value)||12);const i=document.getElementById("wizEquityMin");i&&(z.equityMin=parseFloat(i.value)||25e4);const s=document.getElementById("wizBondMin");s&&(z.bondMin=parseFloat(s.value)||2e5);const a=document.getElementById("wizCashTarget");a&&(z.cashTarget=parseFloat(a.value)||5e4);const l=document.getElementById("wizDuration");l&&(z.duration=parseInt(l.value)||35);const u=document.getElementById("wizTaxMode");u&&(z.taxMode=u.value);const d=document.getElementById("wizDBaseSalary");d&&(z.decisionSalary=parseFloat(d.value)||3e4);const f=document.getElementById("wizDEquityMin");f&&(z.decisionEquity=parseFloat(f.value)||25e4);const g=document.getElementById("wizDBondMin");g&&(z.decisionBond=parseFloat(g.value)||2e5);const v=document.getElementById("wizDCashTarget");v&&(z.decisionCash=parseFloat(v.value)||5e4);const I=document.getElementById("wizDDuration");I&&(z.decisionDuration=parseInt(I.value)||35)}function go(){Zd(),qo&&qo(z)}function pw(){Ye&&(Ye.style.display="none")}function mw(){return`
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
  `}function As(){const t=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()==="#0d1117"||document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches;return{primary:"#6366f1",success:"#22c55e",warning:"#f59e0b",danger:"#ef4444",muted:t?"#8b949e":"#6b7280",grid:t?"#30363d":"#e5e7eb",bg:t?"#161b22":"#ffffff",text:t?"#c9d1d9":"#1f2937",cardBg:t?"#21262d":"#ffffff",cone:t?"rgba(99, 102, 241, 0.25)":"rgba(99, 102, 241, 0.15)",coneBorder:"rgba(99, 102, 241, 0.4)",trajectory:t?"rgba(99, 102, 241, 0.4)":"rgba(99, 102, 241, 0.3)",trajectoryFailed:t?"rgba(239, 68, 68, 0.5)":"rgba(239, 68, 68, 0.4)",trajectoryHover:"#6366f1",trajectoryFailedHover:"#ef4444"}}const Lr=new Map;function gw(n,t,e={}){const r=As(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:30,bottom:60,left:80},u=s-l.left-l.right,d=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=e.years||35,g={};for(let S=0;S<=f;S++)g[S]=[];t.forEach(S=>{S.hist.forEach(x=>{const D=Math.floor(x.year);g[D]!==void 0&&g[D].push(x.total)})});const v=[];for(let S=0;S<=f;S++){const x=g[S].sort((O,G)=>O-G);if(x.length===0)continue;const D=O=>x[Math.floor(x.length*O)]||0;v.push({year:S,p5:D(.05),p10:D(.1),p25:D(.25),p50:D(.5),p75:D(.75),p90:D(.9),p95:D(.95)})}if(v.length===0)return;const I=Math.max(...v.map(S=>S.p95))*1.1,P=S=>l.left+S/f*u,k=S=>l.top+d-S/I*d;Ss(i,l,u,d,f,I,e.title||"Cone of Uncertainty",r),[{upper:"p95",lower:"p5",color:r.cone},{upper:"p90",lower:"p10",color:r.cone.replace("0.25","0.35").replace("0.15","0.25")},{upper:"p75",lower:"p25",color:r.cone.replace("0.25","0.45").replace("0.15","0.35")}].forEach(S=>{i.beginPath(),i.fillStyle=S.color,v.forEach((x,D)=>{const O=P(x.year),G=k(x[S.upper]);D===0?i.moveTo(O,G):i.lineTo(O,G)});for(let x=v.length-1;x>=0;x--){const D=v[x];i.lineTo(P(D.year),k(D[S.lower]))}i.closePath(),i.fill()}),i.beginPath(),i.strokeStyle=r.primary,i.lineWidth=3,v.forEach((S,x)=>{const D=P(S.year),O=k(S.p50);x===0?i.moveTo(D,O):i.lineTo(D,O)}),i.stroke(),Ew(i,s-l.right-160,l.top+10,r),Lr.set(n.id,{percentiles:v,xScale:P,yScale:k,padding:l,chartWidth:u,chartHeight:d,years:f,maxValue:I,type:"cone"}),ww(n)}function yw(n,t,e={}){const r=As(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:30,bottom:60,left:80},u=s-l.left-l.right,d=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=e.years||35,g=5e6,v=g,I=R=>l.left+R/f*u,P=R=>l.top+d-Math.min(R,g)/v*d;Ss(i,l,u,d,f,v,e.title||"Sample Trajectories",r);const k=t.slice(0,100);k.filter(R=>R.failed).forEach(R=>{i.beginPath(),i.strokeStyle=r.trajectoryFailed,i.lineWidth=1.5,R.hist.forEach((S,x)=>{const D=I(S.year),O=P(S.total);x===0?i.moveTo(D,O):i.lineTo(D,O)}),i.stroke()}),k.filter(R=>!R.failed).forEach(R=>{i.beginPath(),i.strokeStyle=r.trajectory,i.lineWidth=1.5,R.hist.forEach((S,x)=>{const D=I(S.year),O=P(S.total);x===0?i.moveTo(D,O):i.lineTo(D,O)}),i.stroke()}),i.font="12px system-ui, sans-serif",i.fillStyle=r.trajectory.replace("0.4","1").replace("0.3","1"),i.fillRect(s-l.right-130,l.top+10,20,4),i.fillStyle=r.text,i.textAlign="left",i.fillText("Successful",s-l.right-105,l.top+16),i.fillStyle=r.trajectoryFailed.replace("0.5","1").replace("0.4","1"),i.fillRect(s-l.right-130,l.top+30,20,4),i.fillStyle=r.text,i.fillText("Failed",s-l.right-105,l.top+36),Lr.set(n.id,{results:k,xScale:I,yScale:P,padding:l,chartWidth:u,chartHeight:d,years:f,maxValue:v,type:"trajectory"}),Iw(n,r)}function _w(n,t,e={}){const r=As(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:30,bottom:60,left:60},u=s-l.left-l.right,d=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=t.map(x=>x.protMonths),g=Math.max(...f),v=Math.max(1,Math.ceil(g/20)),I={};for(let x=0;x<=g;x+=v)I[x]=0;f.forEach(x=>{const D=Math.floor(x/v)*v;I[D]=(I[D]||0)+1});const P=Object.keys(I).map(Number).sort((x,D)=>x-D),k=Math.max(...Object.values(I));i.font="bold 14px system-ui, sans-serif",i.fillStyle=r.text,i.textAlign="center",i.fillText(e.title||"Protection Months Distribution",s/2,l.top-20),i.strokeStyle=r.grid,i.lineWidth=1,i.beginPath(),i.moveTo(l.left,l.top),i.lineTo(l.left,l.top+d),i.lineTo(l.left+u,l.top+d),i.stroke();const R=u/P.length*.8,S=u/P.length*.2;P.forEach((x,D)=>{const G=I[x]/k*d,j=l.left+D*(R+S)+S/2,E=l.top+d-G,m=x/g;x===0?i.fillStyle=r.success:m<.3?i.fillStyle=r.warning:i.fillStyle=r.danger,i.fillRect(j,E,R,G),(D%3===0||D===P.length-1)&&(i.font="10px system-ui, sans-serif",i.fillStyle=r.muted,i.textAlign="center",i.fillText(x.toString(),j+R/2,l.top+d+15))}),i.textAlign="right",i.fillStyle=r.muted;for(let x=0;x<=4;x++){const D=Math.round(k*x/4),O=l.top+d-d*x/4;i.fillText(D.toString(),l.left-10,O+4)}i.font="12px system-ui, sans-serif",i.textAlign="center",i.fillText("Protection Months",s/2,a-10),i.save(),i.translate(15,a/2),i.rotate(-Math.PI/2),i.fillText("Number of Runs",0,0),i.restore()}function vw(n,t,e={}){const r=As(),i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:180,bottom:60,left:80},u=s-l.left-l.right,d=a-l.top-l.bottom;i.fillStyle=r.bg,i.fillRect(0,0,s,a);const f=Object.keys(t),g=e.years||35;let v=0;f.forEach(R=>{const S=t[R].result;S&&S.hist&&S.hist.forEach(x=>{x.total>v&&(v=x.total)})}),v*=1.1;const I=R=>l.left+R/g*u,P=R=>l.top+d-R/v*d;Ss(i,l,u,d,g,v,e.title||"Scenario Comparison",r);const k=["#6366f1","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#ec4899","#84cc16"];f.forEach((R,S)=>{const x=t[R].result;if(!x||!x.hist)return;i.beginPath(),i.strokeStyle=k[S%k.length],i.lineWidth=2.5,x.hist.forEach((G,j)=>{const E=I(G.year),m=P(G.total);j===0?i.moveTo(E,m):i.lineTo(E,m)}),i.stroke();const D=l.top+15+S*24;i.fillStyle=k[S%k.length],i.fillRect(s-l.right+15,D,20,4),i.font="11px system-ui, sans-serif",i.fillStyle=r.text,i.textAlign="left",i.fillText(t[R].name||R,s-l.right+40,D+5);const O=x.final/1e3;i.fillStyle=r.muted,i.fillText(`£${O.toFixed(0)}k`,s-l.right+40,D+18)})}function Ss(n,t,e,r,i,s,a,l){n.font="bold 14px system-ui, sans-serif",n.fillStyle=l.text,n.textAlign="center",n.fillText(a,t.left+e/2,t.top-20),n.strokeStyle=l.grid,n.lineWidth=1;for(let u=0;u<=5;u++){const d=t.top+r*u/5;n.beginPath(),n.moveTo(t.left,d),n.lineTo(t.left+e,d),n.stroke();const f=s*(5-u)/5;n.font="11px system-ui, sans-serif",n.fillStyle=l.muted,n.textAlign="right",n.fillText(Fe(f),t.left-10,d+4)}for(let u=0;u<=i;u+=5){const d=t.left+u/i*e;n.beginPath(),n.moveTo(d,t.top),n.lineTo(d,t.top+r),n.stroke(),n.textAlign="center",n.fillText(`Y${u}`,d,t.top+r+20)}n.font="12px system-ui, sans-serif",n.textAlign="center",n.fillText("Years",t.left+e/2,t.top+r+45),n.save(),n.translate(20,t.top+r/2),n.rotate(-Math.PI/2),n.fillText("Fund Value",0,0),n.restore()}function Ew(n,t,e,r){const i=[{label:"Median (50th)",color:r.primary,type:"line"},{label:"25th-75th %ile",color:r.cone.replace("0.25","0.45").replace("0.15","0.35"),type:"band"},{label:"10th-90th %ile",color:r.cone.replace("0.25","0.35").replace("0.15","0.25"),type:"band"},{label:"5th-95th %ile",color:r.cone,type:"band"}];n.font="11px system-ui, sans-serif",i.forEach((s,a)=>{const l=e+a*20;s.type==="line"?(n.strokeStyle=s.color,n.lineWidth=3,n.beginPath(),n.moveTo(t,l),n.lineTo(t+25,l),n.stroke()):(n.fillStyle=s.color,n.fillRect(t,l-7,25,14)),n.fillStyle=r.text,n.textAlign="left",n.fillText(s.label,t+30,l+4)})}function Fe(n){return n>=1e6?`£${(n/1e6).toFixed(1)}M`:n>=1e3?`£${(n/1e3).toFixed(0)}k`:`£${n.toFixed(0)}`}function ww(n,t){const e=n._coneHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Lr.get(n.id);if(!s||s.type!=="cone")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=(i.clientX-a.left)*l;(i.clientY-a.top)*l;const{percentiles:d,xScale:f,yScale:g,padding:v,chartWidth:I,years:P}=s,k=(u-v.left)/I*P,R=Math.round(k);if(R<0||R>P){Ln();return}const S=d.find(x=>x.year===R);if(!S){Ln();return}tf(i.clientX,i.clientY,`
      <strong>Year ${R}</strong><br>
      95th: ${Fe(S.p95)}<br>
      75th: ${Fe(S.p75)}<br>
      50th: ${Fe(S.p50)}<br>
      25th: ${Fe(S.p25)}<br>
      5th: ${Fe(S.p5)}
    `)};n._coneHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",Ln)}function Iw(n,t){const e=n._trajHoverListener;e&&n.removeEventListener("mousemove",e);const r=i=>{const s=Lr.get(n.id);if(!s||s.type!=="trajectory")return;const a=n.getBoundingClientRect(),l=n.width/a.width,u=n.height/a.height,d=(i.clientX-a.left)*l,f=(i.clientY-a.top)*u,{results:g,xScale:v,yScale:I,padding:P,chartWidth:k,chartHeight:R}=s;if(d<P.left||d>P.left+k||f<P.top||f>P.top+R){Ln(),Ei(n,s,t,null);return}let S=null,x=1/0;if(g.forEach(D=>{D.hist.forEach(O=>{const G=v(O.year),j=I(O.total),E=Math.sqrt(Math.pow(d-G,2)+Math.pow(f-j,2));E<x&&E<30&&(x=E,S=D)})}),S){const D=S.failed?"FAILED":"Survived",O=S.failed?"#ef4444":"#22c55e";tf(i.clientX,i.clientY,`
        <strong style="color: ${O}">${D}</strong><br>
        Years: ${S.years.toFixed(1)}<br>
        Final Value: ${Fe(S.final)}<br>
        Protection Months: ${S.protMonths}<br>
        Max Consecutive: ${S.maxConsec}<br>
        ${S.hodlUsed>0?`HODL Used: ${Fe(S.hodlUsed)}`:""}
        ${S.startYear?`<br>Start Year: ${S.startYear}`:""}
      `),Ei(n,s,t,S)}else Ln(),Ei(n,s,t,null)};n._trajHoverListener=r,n.addEventListener("mousemove",r),n.addEventListener("mouseleave",()=>{Ln();const i=Lr.get(n.id);i&&Ei(n,i,t,null)})}function Ei(n,t,e,r){const i=n.getContext("2d"),{width:s,height:a}=n,l={top:50,right:30,bottom:60,left:80},u=s-l.left-l.right,d=a-l.top-l.bottom;i.fillStyle=e.bg,i.fillRect(0,0,s,a),Ss(i,l,u,d,t.years,t.maxValue,"Sample Trajectories",e);const{results:f,xScale:g,yScale:v}=t;f.forEach(I=>{I!==r&&(i.beginPath(),i.strokeStyle=I.failed?e.trajectoryFailed:e.trajectory,i.lineWidth=1.5,I.hist.forEach((P,k)=>{const R=g(P.year),S=v(P.total);k===0?i.moveTo(R,S):i.lineTo(R,S)}),i.stroke())}),r&&(i.beginPath(),i.strokeStyle=r.failed?e.trajectoryFailedHover:e.trajectoryHover,i.lineWidth=4,r.hist.forEach((I,P)=>{const k=g(I.year),R=v(I.total);P===0?i.moveTo(k,R):i.lineTo(k,R)}),i.stroke(),i.fillStyle=r.failed?e.trajectoryFailedHover:e.trajectoryHover,r.hist.forEach(I=>{const P=g(I.year),k=v(I.total);i.beginPath(),i.arc(P,k,4,0,Math.PI*2),i.fill()})),i.font="12px system-ui, sans-serif",i.fillStyle=e.trajectory.replace("0.4","1").replace("0.3","1"),i.fillRect(s-l.right-130,l.top+10,20,4),i.fillStyle=e.text,i.textAlign="left",i.fillText("Successful",s-l.right-105,l.top+16),i.fillStyle=e.trajectoryFailed.replace("0.5","1").replace("0.4","1"),i.fillRect(s-l.right-130,l.top+30,20,4),i.fillStyle=e.text,i.fillText("Failed",s-l.right-105,l.top+36)}function tf(n,t,e){let r=document.getElementById("chartTooltip");r||(r=document.createElement("div"),r.id="chartTooltip",document.body.appendChild(r)),r.innerHTML=e,r.style.display="block",r.style.left=n+15+"px",r.style.top=t+15+"px"}function Ln(){const n=document.getElementById("chartTooltip");n&&(n.style.display="none")}function Tw(){return`
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
    }

    #chartTooltip {
      position: fixed;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 13px;
      line-height: 1.5;
      color: var(--text);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      z-index: 10000;
      display: none;
      max-width: 250px;
    }

    #chartTooltip strong {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
    }
  `}let bw=null,Aw=null;const ef=document.createElement("style");ef.textContent=GE()+sw()+mw()+Tw();document.head.appendChild(ef);document.getElementById("versionDisplay").textContent=`v${vu}`;document.getElementById("entryMonth").value=$f();function Sw(n){const t=parseFloat(n);return isNaN(t)?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function nf(){document.querySelectorAll('input[type="number"]').forEach(t=>{t.value,t.addEventListener("focus",function(e){setTimeout(()=>{this.select()},0)}),t.addEventListener("click",function(e){!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&this.select()})})}function rf(){document.querySelectorAll('input[type="number"]').forEach(t=>{if(t.dataset.formatted)return;t.dataset.formatted="true";const e=t.closest(".input-with-unit")||t.parentElement,r=t.closest(".input-with-unit")!==null,i=document.createElement("span");i.className="number-format-overlay";const s=r?"34px":"14px";i.style.cssText=`
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
        `,getComputedStyle(e).position==="static"&&(e.style.position="relative");function a(){const l=parseFloat(t.value);!isNaN(l)&&l>=1e3&&document.activeElement!==t?(i.textContent=Sw(l),i.style.display="block",t.style.color="transparent"):(i.style.display="none",t.style.color="")}t._updateOverlay=a,t.addEventListener("focus",()=>{i.style.display="none",t.style.color=""}),t.addEventListener("blur",a),t.addEventListener("input",()=>{document.activeElement===t&&(i.style.display="none",t.style.color="")}),e.appendChild(i),a()})}function Rs(){document.querySelectorAll('input[type="number"]').forEach(n=>{n._updateOverlay&&n._updateOverlay()})}setTimeout(()=>{nf(),rf()},100);const Rw=new MutationObserver(n=>{let t=!1;n.forEach(e=>{e.addedNodes.forEach(r=>{var i,s;r.nodeType===1&&((i=r.matches)!=null&&i.call(r,'input[type="number"]')||(s=r.querySelector)!=null&&s.call(r,'input[type="number"]'))&&(t=!0)})}),t&&setTimeout(()=>{nf(),rf()},50)});Rw.observe(document.body,{childList:!0,subtree:!0});let Xi=null;function sf(n,t="decision"){zo(),pw(),document.getElementById("mainApp").classList.remove("hidden"),document.getElementById("userEmail").textContent=n.email,nl(),rl(),t==="stress"&&(document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),document.querySelector('.tab[data-tab="stress"]').classList.add("active"),document.querySelectorAll(".tab-content").forEach(e=>e.classList.remove("active")),document.getElementById("stress-content").classList.add("active"),Ps())}async function jo(n){console.log("Wizard completed with data:",n);try{await Ka({baseSalary:n.decisionSalary,equityMin:n.decisionEquity,bondMin:n.decisionBond,cashTarget:n.decisionCash,duration:n.decisionDuration}),await Ja({baseSalary:n.baseSalary,other:n.otherIncome,statePension:n.statePension,statePensionYear:n.statePensionYear,equityMin:n.equityMin,bondMin:n.bondMin,cashTarget:n.cashTarget,duration:n.duration,taxMode:n.taxMode}),document.getElementById("entryEquity").value=n.decisionEquity,document.getElementById("entryBond").value=n.decisionBond,document.getElementById("entryCash").value=n.decisionCash,document.getElementById("mcEquity").value=n.equityMin,document.getElementById("mcBond").value=n.bondMin,document.getElementById("mcCash").value=n.cashTarget,document.getElementById("mcYears").value=n.duration,Rs()}catch(e){console.error("Error saving wizard settings:",e)}const t=Xr();sf(t,"stress")}JE(document.getElementById("authScreen"),async n=>{console.log("Auth success callback triggered for:",n.email);try{console.log("Checking for existing cloud data...");const t=await EE();console.log("Has cloud data:",t),t?(console.log("Existing user - showing main app"),sf(n)):(console.log("New user - showing setup wizard"),zo(),document.getElementById("setupWizard").style.display="block",$o(document.getElementById("setupWizard"),jo))}catch(t){console.error("Error in auth callback:",t),zo(),document.getElementById("setupWizard").style.display="block",$o(document.getElementById("setupWizard"),jo)}});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await dE(),document.getElementById("mainApp").classList.add("hidden"),iw()}catch(n){console.error("Logout error:",n)}});document.getElementById("resetBtn").addEventListener("click",async()=>{if(!(!confirm(`⚠️ WARNING: This will permanently delete ALL your data including:

• All saved settings
• All decision history
• All tax year configurations

This action cannot be undone.

Are you sure you want to reset and start over?`)||!confirm(`Are you ABSOLUTELY sure?

Type OK to confirm deletion of all your data.`)))try{console.log("Wiping all user data..."),await vE(),console.log("Data wiped successfully"),localStorage.clear(),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("setupWizard").style.display="block",$o(document.getElementById("setupWizard"),jo),alert("All data has been deleted. Please complete the setup wizard to start fresh.")}catch(e){console.error("Reset error:",e),alert("Error resetting data: "+e.message)}});document.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.getElementById(`${n.dataset.tab}-content`).classList.add("active"),n.dataset.tab==="history"&&nl(),n.dataset.tab==="taxyears"&&rl(),n.dataset.tab==="stress"&&Ps()})});document.querySelectorAll(".sub-tab[data-stresstab]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".sub-tab[data-stresstab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".stress-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`stress-${n.dataset.stresstab}`).classList.remove("hidden"),n.dataset.stresstab==="stresssettings"&&Ps(),["montecarlo","historical","scenarios"].includes(n.dataset.stresstab)&&Pw(n.dataset.stresstab)})});document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".sub-tab[data-decisiontab]").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".decision-subtab").forEach(t=>t.classList.add("hidden")),document.getElementById(`decision-${n.dataset.decisiontab}`).classList.remove("hidden"),n.dataset.decisiontab==="decisionsettings"&&af()})});window.handleDecisionSubmit=function(n){n.preventDefault();const t={date:document.getElementById("entryMonth").value,equity:parseFloat(document.getElementById("entryEquity").value)||0,bond:parseFloat(document.getElementById("entryBond").value)||0,cash:parseFloat(document.getElementById("entryCash").value)||0,isaBalance:parseFloat(document.getElementById("entryISA").value)||0};try{Xi=YE(t);const e=document.getElementById("decisionOutput");Yd(Xi,e),document.getElementById("saveBtn").disabled=!1}catch(e){console.error("Decision error:",e),alert("Error calculating decision: "+e.message)}};window.saveCurrentDecision=async function(){if(!Xi){alert("No decision to save");return}if(!Je()){alert("Please sign in to save decisions");return}try{await kE(Xi),alert("Decision saved to history"),document.getElementById("saveBtn").disabled=!0}catch(n){console.error("Save error:",n),alert("Error saving: "+n.message)}};async function Pw(n){const t=await Ze(),r={montecarlo:"mc",historical:"hist",scenarios:"scen"}[n]||n,i=document.getElementById(r+"Equity"),s=document.getElementById(r+"Bond"),a=document.getElementById(r+"Cash"),l=document.getElementById(r+"Years");i&&(i.value=t.equityMin),s&&(s.value=t.bondMin),a&&(a.value=t.cashTarget),l&&(l.value=t.duration),Rs()}window.runMonteCarloUI=async function(){const n={equityStart:parseFloat(document.getElementById("mcEquity").value)||25e4,bondStart:parseFloat(document.getElementById("mcBond").value)||2e5,cashStart:parseFloat(document.getElementById("mcCash").value)||5e4,years:parseInt(document.getElementById("mcYears").value)||35};document.getElementById("mcResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await Ze(),setTimeout(()=>{try{const{results:t,stats:e}=Qd(n);bw=t,of(e,t,"Monte Carlo (1000 runs)","mcResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("mcResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runHistoricalUI=async function(){const n={equityStart:parseFloat(document.getElementById("histEquity").value)||25e4,bondStart:parseFloat(document.getElementById("histBond").value)||2e5,cashStart:parseFloat(document.getElementById("histCash").value)||5e4,years:parseInt(document.getElementById("histYears").value)||35};document.getElementById("histResults").innerHTML='<div class="loading"><div class="spinner"></div>Running simulation...</div>',await Ze(),setTimeout(()=>{try{const{results:t,stats:e}=Xd(n);Aw=t,of(e,t,"Historical Analysis","histResults",n.years)}catch(t){console.error("Simulation error:",t),document.getElementById("histResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};window.runScenariosUI=async function(){const n={equityStart:parseFloat(document.getElementById("scenEquity").value)||25e4,bondStart:parseFloat(document.getElementById("scenBond").value)||2e5,cashStart:parseFloat(document.getElementById("scenCash").value)||5e4,years:35};document.getElementById("scenResults").innerHTML='<div class="loading"><div class="spinner"></div>Running scenarios...</div>',await Ze(),setTimeout(()=>{try{const t=QE(n);Mw(t,"scenResults")}catch(t){console.error("Scenario error:",t),document.getElementById("scenResults").innerHTML=`<div class="alert alert-danger">Error: ${t.message}</div>`}},50)};let yo=!1;window.runOptimisationUI=async function(n){if(yo)return;yo=!0;const t=document.getElementById("optimiseBtn"+n),e=document.getElementById("optimiseResults"+n);t&&(t.disabled=!0),t&&(t.textContent="Optimising...");let r,i,s,a;n==="MC"?(r=document.getElementById("mcEquity"),i=document.getElementById("mcBond"),s=document.getElementById("mcCash"),a=document.getElementById("mcYears")):(r=document.getElementById("histEquity"),i=document.getElementById("histBond"),s=document.getElementById("histCash"),a=document.getElementById("histYears"));const l=+r.value,u=+i.value,d=+s.value,f=+a.value,g=l+u+d;e.innerHTML='<div class="loading"><div class="spinner"></div>Testing allocations...</div>';const v=await Ze();setTimeout(()=>{try{const I=[];for(let S=5;S<=30;S+=5)for(let x=20;x<=95-S;x+=5){const D=100-S-x;D>=0&&I.push({equity:Math.round(g*x/100),bond:Math.round(g*D/100),cash:Math.round(g*S/100)})}const P=S=>{const x={equityStart:S.equity,bondStart:S.bond,cashStart:S.cash,years:f};let D;return n==="MC"?D=Qd(x,v):D=Xd(x,v),{...S,rate:D.stats.successRate,avgProt:D.stats.avgProtMonths,medianFinal:D.stats.medianFinal}},k=P({equity:l,bond:u,cash:d});let R=null;I.forEach(S=>{const x=P(S);x.avgProt<=k.avgProt&&(!R||x.rate>R.rate)&&(R=x)}),Cw(n,k,R,g,I.length,e)}catch(I){console.error("Optimisation error:",I),e.innerHTML=`<div class="alert alert-danger">Error: ${I.message}</div>`}finally{yo=!1,t&&(t.disabled=!1,t.textContent="Optimise Allocation")}},50)};function Cw(n,t,e,r,i,s){let a="";if(e&&e.rate>t.rate){const l=e.medianFinal-t.medianFinal,u=t.medianFinal>0?l/t.medianFinal*100:0;a=`
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

            ${l<0?`
              <div class="alert alert-warning" style="margin-bottom: 16px;">
                <strong>Trade-off:</strong> The optimised allocation has a ${Math.abs(u).toFixed(0)}% lower median final value.
                This is because it likely has less equity exposure. You gain safety but may sacrifice some upside.
              </div>
            `:l>0?`
              <div class="alert alert-info" style="margin-bottom: 16px;">
                <strong>Bonus:</strong> The optimised allocation also has a ${u.toFixed(0)}% higher median final value!
              </div>
            `:""}

            <div class="alert alert-info" style="margin-bottom: 16px;">
              <strong>To apply this allocation:</strong> Click the button below to update your Settings with these new fund minimums.
            </div>

            <button onclick="applyOptimisedAllocationUI(${e.equity}, ${e.bond}, ${e.cash})" style="width: 100%;">
              Apply Optimised Allocation to Settings
            </button>
          </div>
        `}else a=`
          <div class="card" style="margin-top: 20px; border-color: var(--primary);">
            <h3 style="color: var(--primary); margin-top: 0;">Your Allocation is Already Optimal</h3>
            <p style="color: var(--text-muted);">
              Based on testing ${i} different allocations, your current fund split appears to be optimal
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
        `;s.innerHTML=a}window.applyOptimisedAllocationUI=async function(n,t,e){if(document.getElementById("ssEquityMin").value=n,document.getElementById("ssBondMin").value=t,document.getElementById("ssCashTarget").value=e,document.getElementById("dsEquityMin").value=n,document.getElementById("dsBondMin").value=t,document.getElementById("dsCashTarget").value=e,document.getElementById("mcEquity").value=n,document.getElementById("mcBond").value=t,document.getElementById("mcCash").value=e,document.getElementById("histEquity").value=n,document.getElementById("histBond").value=t,document.getElementById("histCash").value=e,document.getElementById("scenEquity").value=n,document.getElementById("scenBond").value=t,document.getElementById("scenCash").value=e,Je())try{await Ja({equityMin:n,bondMin:t,cashTarget:e})}catch(r){console.error("Error saving optimised settings:",r)}alert("Settings updated! Run the test again to see the full results with your new allocation.")};const xw={1929:"Wall Street Crash / Great Depression",1930:"Great Depression",1931:"Great Depression",1932:"Great Depression",1937:"Recession of 1937",1968:"Late 1960s stagflation",1969:"Late 1960s recession",1973:"Oil Crisis / 1973-74 crash",1974:"1973-74 bear market",2e3:"Dot-com bubble burst",2001:"Dot-com bust / 9/11",2007:"Global Financial Crisis",2008:"Global Financial Crisis",2022:"Post-COVID inflation / rate hikes"};function kw(n){if(!n||n.length===0)return"";const t=n.filter(s=>s.failed).sort((s,a)=>s.years-a.years),e=n.filter(s=>s.protMonths>0).sort((s,a)=>a.protMonths-s.protMonths),r=t.length>0?t.slice(0,5):e.slice(0,5);if(r.length===0)return"";let i=`
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
      `;return r.forEach(s=>{const a=s.startYear||s.seed,l=xw[a]||"-",u=s.failed?"danger":"success";i+=`
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
      `,i}function of(n,t,e,r,i){const s=n.successRate>=90?"success":n.successRate>=80?"warning":"danger",a=r.replace("Results",""),l=n.survival||{},u=n.finalValue||{},d=n.protection||{};let f=`
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
          <div class="grid-5" style="margin-bottom: 24px;">
            <div class="stat-box">
              <div class="stat-value">${d.runsWithProtection||n.runsWithProtection||0}</div>
              <div class="stat-label">Runs w/ Protection</div>
            </div>
            <div class="stat-box warning">
              <div class="stat-value">${(d.avgMonths||n.avgProtMonths||0).toFixed(0)}</div>
              <div class="stat-label">Avg Protection Mo</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${(d.avgConsecutive||n.avgConsecutive||0).toFixed(1)}</div>
              <div class="stat-label">Avg Consecutive</div>
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
          ${r==="histResults"?kw(t):""}

          <!-- Result Summary -->
          <div class="alert ${s==="success"?"alert-success":s==="warning"?"alert-warning":"alert-danger"}" style="margin-top: 24px;">
            ${n.successRate>=90?"Excellent! Very high probability of success.":n.successRate>=80?"Good but some downside risk. Consider adjustments.":"Warning: Significant risk of depletion."}
          </div>
        </div>
      `;document.getElementById(r).innerHTML=f,setTimeout(()=>{const g=document.getElementById(`${a}ConeChart`),v=document.getElementById(`${a}TrajChart`),I=document.getElementById(`${a}HistChart`);g&&t&&t.length>0&&gw(g,t,{years:i,title:"Cone of Uncertainty (5th-95th Percentile)"}),v&&t&&t.length>0&&yw(v,t,{years:i,title:"Sample Trajectories (100 runs)"}),I&&t&&t.length>0&&_w(I,t,{title:"Protection Months Distribution"})},50)}function Mw(n,t){let e='<div class="card"><h2>Scenario Analysis</h2>';e+=`
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
        `}e+="</div></div>",document.getElementById(t).innerHTML=e,setTimeout(()=>{const r=document.getElementById("scenCompChart");r&&n&&vw(r,n,{years:35,title:"Scenario Comparison"})},50)}async function Ps(){try{const n=await Ze();document.getElementById("ssBaseSalary").value=n.baseSalary,document.getElementById("ssEquityMin").value=n.equityMin,document.getElementById("ssBondMin").value=n.bondMin,document.getElementById("ssCashTarget").value=n.cashTarget,document.getElementById("ssDuration").value=n.duration,document.getElementById("ssPA").value=n.pa,document.getElementById("ssBRL").value=n.brl,document.getElementById("ssHRL").value=n.hrl,document.getElementById("ssTaxMode").value=n.taxMode||"inflates",document.getElementById("ssOther").value=n.other||0,document.getElementById("ssStatePension").value=n.statePension||12e3,document.getElementById("ssStatePensionYear").value=n.statePensionYear||12,document.getElementById("ssConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("ssProtectionMult").value=n.protectionMult||.8,document.getElementById("ssDisableProtection").checked=n.disableProtection||!1,document.getElementById("ssHodlEnabled").checked=n.hodlEnabled||!1,document.getElementById("ssHodlValue").value=n.hodlValue||25e3,Rs()}catch(n){console.error("Error loading stress settings:",n)}}window.saveStressSettingsUI=async function(){if(!Je()){alert("Please sign in to save settings");return}try{await Ja({baseSalary:+document.getElementById("ssBaseSalary").value,equityMin:+document.getElementById("ssEquityMin").value,bondMin:+document.getElementById("ssBondMin").value,cashTarget:+document.getElementById("ssCashTarget").value,duration:+document.getElementById("ssDuration").value,pa:+document.getElementById("ssPA").value,brl:+document.getElementById("ssBRL").value,hrl:+document.getElementById("ssHRL").value,taxMode:document.getElementById("ssTaxMode").value,other:+document.getElementById("ssOther").value,statePension:+document.getElementById("ssStatePension").value,statePensionYear:+document.getElementById("ssStatePensionYear").value,consecutiveLimit:+document.getElementById("ssConsecutiveLimit").value,protectionMult:+document.getElementById("ssProtectionMult").value,disableProtection:document.getElementById("ssDisableProtection").checked,hodlEnabled:document.getElementById("ssHodlEnabled").checked,hodlValue:+document.getElementById("ssHodlValue").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving stress settings:",n),alert("Error saving: "+n.message)}};window.resetStressSettingsUI=async function(){if(confirm("Reset all stress settings to defaults?"))try{await jE(),await Ps(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}};async function af(){try{const n=await TE();document.getElementById("dsEquityMin").value=n.equityMin||25e4,document.getElementById("dsBondMin").value=n.bondMin||2e5,document.getElementById("dsCashTarget").value=n.cashTarget||5e4,document.getElementById("dsDuration").value=n.duration||35,document.getElementById("dsBaseSalary").value=n.baseSalary||3e4,document.getElementById("dsProtectionFactor").value=n.protectionFactor||20,document.getElementById("dsRecoveryBuffer").value=n.recoveryBuffer||15e3,document.getElementById("dsConsecutiveLimit").value=n.consecutiveLimit||3,document.getElementById("entryEquity").value=n.equityMin||25e4,document.getElementById("entryBond").value=n.bondMin||2e5,document.getElementById("entryCash").value=n.cashTarget||5e4,Rs()}catch(n){console.error("Error loading decision settings:",n)}}window.saveDecisionSettingsUI=async function(){if(!Je()){alert("Please sign in to save settings");return}try{await Ka({equityMin:+document.getElementById("dsEquityMin").value,bondMin:+document.getElementById("dsBondMin").value,cashTarget:+document.getElementById("dsCashTarget").value,duration:+document.getElementById("dsDuration").value,baseSalary:+document.getElementById("dsBaseSalary").value,protectionFactor:+document.getElementById("dsProtectionFactor").value,recoveryBuffer:+document.getElementById("dsRecoveryBuffer").value,consecutiveLimit:+document.getElementById("dsConsecutiveLimit").value}),alert("Settings saved successfully")}catch(n){console.error("Error saving decision settings:",n),alert("Error saving: "+n.message)}};window.resetDecisionSettingsUI=async function(){if(confirm("Reset all decision settings to defaults?"))try{await Ka({equityMin:25e4,bondMin:2e5,cashTarget:5e4,duration:35,baseSalary:3e4,protectionFactor:20,recoveryBuffer:15e3,consecutiveLimit:3}),await af(),alert("Settings reset to defaults")}catch(n){console.error("Error resetting settings:",n),alert("Error resetting: "+n.message)}};window.showDrawdownScheduleUI=async function(){const n=parseFloat(document.getElementById("ddInflation").value)/100||.025,t=parseInt(document.getElementById("ddDuration").value)||35;try{const e=await Ze();e.duration=t;const r=Qf(e,t,n);let i='<div class="card"><h2>Projected SIPP Drawdown Schedule</h2>';i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>BRL</th><th>Other</th><th>State</th><th>SIPP Draw</th><th>Tax</th><th>Net</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${U(s.brl)}</td>
            <td>${U(s.other)}</td>
            <td>${U(s.statePension)}</td>
            <td style="color: var(--primary); font-weight: 600;">${U(s.sippDraw)}</td>
            <td style="color: var(--danger);">-${U(s.tax)}</td>
            <td style="color: var(--success);">${U(s.netIncome)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("drawdownResults").innerHTML=i}catch(e){console.error("Drawdown error:",e),document.getElementById("drawdownResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};window.showGlidepathUI=async function(){const n=parseFloat(document.getElementById("gpInflation").value)/100||.025,t=parseInt(document.getElementById("gpDuration").value)||35;try{const e=await Ze();e.duration=t;const r=Jf(e,n);let i='<div class="card"><h2>Fund Glidepath (Inflation-Adjusted Minimums)</h2>';i+='<div class="alert alert-info" style="margin-bottom: 20px;">',i+="<strong>Glidepath Logic:</strong> Equity & Bond minimums inflate with CPI but deplete linearly to £0. Cash inflates only (maintains real value).",i+="</div>",i+='<div style="overflow-x: auto;"><table>',i+="<thead><tr><th>Year</th><th>Cum Inflation</th><th>Equity Min</th><th>Bond Min</th><th>Cash Target</th><th>Total Min</th></tr></thead>",i+="<tbody>";for(const s of r)i+=`<tr>
            <td>${s.year}</td>
            <td>${(s.cumulativeInflation*100-100).toFixed(1)}%</td>
            <td style="color: var(--success);">${U(s.equityMin)}</td>
            <td style="color: var(--info);">${U(s.bondMin)}</td>
            <td style="color: var(--warning);">${U(s.cashTarget)}</td>
            <td style="font-weight: 600;">${U(s.totalMin)}</td>
          </tr>`;i+="</tbody></table></div></div>",document.getElementById("glidepathResults").innerHTML=i}catch(e){console.error("Glidepath error:",e),document.getElementById("glidepathResults").innerHTML=`<div class="alert alert-danger">Error: ${e.message}</div>`}};function nl(){const n=Hd({sortDesc:!0,limit:50}),t=document.getElementById("historyList");if(n.length===0){t.innerHTML='<p class="loading">No history entries yet.</p>';return}let e="";for(const r of n){const i=r.inProtection?"protection":"";e+=`
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
        `}t.innerHTML=e}window.deleteHistoryEntry=async function(n){if(confirm(`Delete entry for ${n}?`)){if(!Je()){alert("Please sign in to delete entries");return}try{await RE(n),nl()}catch(t){console.error("Delete error:",t),alert("Error deleting: "+t.message)}}};function rl(){const n=AE(),t=document.getElementById("taxYearsList"),e=Object.keys(n).sort().reverse();if(e.length===0){t.innerHTML='<p class="loading">No tax years configured.</p>';return}let r="<table><thead><tr><th>Tax Year</th><th>PA</th><th>BRL</th><th>Other</th><th>State Pension</th><th>Actions</th></tr></thead><tbody>";for(const i of e){const s=n[i];r+=`
          <tr>
            <td><strong>${i}</strong></td>
            <td>${U(s.pa||12570)}</td>
            <td>${U(s.brl||50270)}</td>
            <td>${U(s.other||0)}</td>
            <td>${U(s.statePension||0)}</td>
            <td><button class="secondary" style="padding: 6px 12px; font-size: 12px;" onclick="editTaxYear('${i}')">Edit</button></td>
          </tr>
        `}r+="</tbody></table>",t.innerHTML=r}window.addTaxYear=async function(){if(!Je()){alert("Please sign in to add tax years");return}const n=prompt("Enter tax year (e.g., 25/26):");if(!n||!/^\d{2}\/\d{2}$/.test(n)){alert("Invalid format. Use YY/YY (e.g., 25/26)");return}try{await bE(n,{}),rl()}catch(t){console.error("Save error:",t),alert("Error saving: "+t.message)}};window.editTaxYear=function(n){Ya(n),alert("Edit functionality: Would open form for "+n)};console.log("Pension Planner v"+vu+" loaded");
