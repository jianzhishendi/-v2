import{S as H,i as O,s as z,k,a as J,e as L,M as K,l as v,h,c as X,n as m,G as q,b as P,t as D,d as Z,f as G,E as N,o as x,g as $,v as tt,m as M,w as et,p as B,x as st,y as nt,q as ot,r as rt,A}from"../../../../chunks/index-18ac2d2b.js";import{Y as at}from"../../../../chunks/runtime.esm-670b0a78.js";import{A as C}from"../../../../chunks/env-e4f9f4f1.js";import{o as lt,w as it,c as ut}from"../../../../chunks/outfits-19878b28.js";import{b as ct}from"../../../../chunks/stores-e2e154ba.js";import{W as pt}from"../../../../chunks/WishListResult-75c21096.js";function ft(i){let r,e,a;return e=new pt({props:{preview:!0,list:i[3]}}),{c(){r=k("div"),tt(e.$$.fragment),this.h()},l(s){r=v(s,"DIV",{class:!0,style:!0});var n=M(r);et(e.$$.fragment,n),n.forEach(h),this.h()},h(){m(r,"class","wish-result svelte-pi90lv"),B(r,"background-image","url('"+i[5]["splash-background.webp"]+"')")},m(s,n){P(s,r,n),st(e,r,null),a=!0},p(s,n){const l={};n&8&&(l.list=s[3]),e.$set(l),(!a||n&32)&&B(r,"background-image","url('"+s[5]["splash-background.webp"]+"')")},i(s){a||(G(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){s&&h(r),nt(e)}}}function mt(i){let r,e,a;return{c(){r=k("div"),e=k("h1"),a=ot("You're going to unresolved page, redirecting to index ..."),this.h()},l(s){r=v(s,"DIV",{class:!0});var n=M(r);e=v(n,"H1",{});var l=M(e);a=rt(l,"You're going to unresolved page, redirecting to index ..."),l.forEach(h),n.forEach(h),this.h()},h(){m(r,"class","error svelte-pi90lv")},m(s,n){P(s,r,n),q(r,e),q(e,a)},p:A,i:A,o:A,d(s){s&&h(r)}}}function ht(i){let r,e,a,s,n,l,u,c,d;document.title=r=`\r
		`+i[4]("wish.result.title",{values:{item:i[0]}})+" | "+i[4]("title",{default:C})+`\r
	`;const T=[mt,ft],_=[];function W(t,o){return t[2]?0:1}return l=W(i),u=_[l]=T[l](i),{c(){e=k("meta"),a=k("meta"),s=k("meta"),n=J(),u.c(),c=L(),this.h()},l(t){const o=K('[data-svelte="svelte-1r36ult"]',document.head);e=v(o,"META",{name:!0,content:!0}),a=v(o,"META",{property:!0,content:!0}),s=v(o,"META",{property:!0,content:!0}),o.forEach(h),n=X(t),u.l(t),c=L(),this.h()},h(){m(e,"name","title"),m(e,"content",i[1]),m(a,"property","og:title"),m(a,"content",i[1]),m(s,"property","twitter:title"),m(s,"content",i[1])},m(t,o){q(document.head,e),q(document.head,a),q(document.head,s),P(t,n,o),_[l].m(t,o),P(t,c,o),d=!0},p(t,[o]){(!d||o&17)&&r!==(r=`\r
		`+t[4]("wish.result.title",{values:{item:t[0]}})+" | "+t[4]("title",{default:C})+`\r
	`)&&(document.title=r),(!d||o&2)&&m(e,"content",t[1]),(!d||o&2)&&m(a,"content",t[1]),(!d||o&2)&&m(s,"content",t[1]);let g=l;l=W(t),l===g?_[l].p(t,o):($(),D(_[g],1,1,()=>{_[g]=null}),Z(),u=_[l],u?u.p(t,o):(u=_[l]=T[l](t),u.c()),G(u,1),u.m(c.parentNode,c))},i(t){d||(G(u),d=!0)},o(t){D(u),d=!1},d(t){h(e),h(a),h(s),t&&h(n),_[l].d(t),t&&h(c)}}}function dt(i,r,e){let a,s;N(i,at,t=>e(4,a=t)),N(i,ct,t=>e(5,s=t));let n="No Name",l=C,u,c=[];const d=(t,o)=>o?t===4?2:10:t===4?5:25,T=t=>{let o=[];return t.split("|").forEach(I=>{let[p,f,y,w,b,j,E]=I.split("/");E=E==="undefined"?null:E,j=j==="1",f=parseInt(f,10),w=w!=="0";let Y=d(f,j);b=b!=="undefined"?b:!1;const R=y==="weapon"?it:ut,{weaponType:Q,wishBoxPosition:U,vision:V}=R.data.find(S=>S.rarity===f).list.find(S=>S.name===p),F=lt.find(({name:S})=>S===E)?.wishBoxPosition||null;o.push({type:y,weaponType:Q,vision:V,wishBoxPosition:U,name:p,rarity:f,isNew:w,stelaFortuna:j,fateType:b,fateQty:Y,outfit:E,outfitOffset:F})}),o},_=()=>{const t=["qiqi","keqing","diluc","mona","jean"],o=c.filter(({rarity:p})=>p===5);if(c.filter(({rarity:p,name:f,type:y})=>{const w=p===5&&!t.includes(f)&&y==="character";return w&&e(0,n=a(`${f}.name`)),w}).length>1){e(1,l=`Wow, I just got ${n} plus its Constelation only in 10 pull, Genshin Impact.`);return}if(o.length===2){e(0,n=o.map(({name:p})=>a(p)).join(" and ")),e(1,l=`Wow, I just got ${n} when pulling on Wish Simulator for Genshin Impact`);return}if(o.length>2){e(0,n=o.map(({name:p})=>a(p)).join(", ")),e(1,l=`Wow, I just got ${n} when pulling on Wish Simulator for Genshin Impact`);return}if(c.filter(({rarity:p,name:f,type:y},w)=>{const b=p===4;return w===0&&e(0,n=a(y==="weapon"?f:`${f}.name`)),b}).length>1){e(1,l="Cool, I just got multiple 4star items when pulling on Wish Simulator for Genshin Impact");return}e(1,l=`Yeay, I just got ${n} Genshin Impact.`)};return x(()=>{try{const t=new URL(window.location.href),g=new URLSearchParams(t.search).get("a");if(g){let I=atob(g);e(3,c=T(I)),_();return}throw new Error("No data to show")}catch{e(2,u=!0),window.location.replace("/")}}),[n,l,u,c,a,s]}class vt extends H{constructor(r){super(),O(this,r,dt,ht,z,{})}}export{vt as default};