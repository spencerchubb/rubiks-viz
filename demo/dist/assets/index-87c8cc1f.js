(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function gt(i){const e=i.layers,t=i.gl,s=i.perspectiveMatrix;let n=J(e,1.01,.02),r=J(e,1,0),c=J(e,1.5,.02);const o=Array(R(e));for(let a=0;a<R(e);a++){let h={positionBuffer:t.createBuffer(),noGapPositionBuffer:t.createBuffer(),hintPositionBuffer:t.createBuffer(),indexBuffer:t.createBuffer(),cart2d:[],positions:null},l=new Float32Array(12),u=new Float32Array(12),d=new Float32Array(12);for(let y=0;y<12;y++){let T=a*12+y;l[y]=n[T],u[y]=r[T],d[y]=c[T]}t.bindBuffer(t.ARRAY_BUFFER,h.positionBuffer),t.bufferData(t.ARRAY_BUFFER,l,t.STATIC_DRAW),h.positions=l,t.bindBuffer(t.ARRAY_BUFFER,h.noGapPositionBuffer),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,h.hintPositionBuffer),t.bufferData(t.ARRAY_BUFFER,d,t.STATIC_DRAW);const f=Array(16);X(f,0,s,[u[0],u[1],u[2],1]),X(f,4,s,[u[3],u[4],u[5],1]),X(f,8,s,[u[6],u[7],u[8],1]),X(f,12,s,[u[9],u[10],u[11],1]),h.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];const x=[0,1,2,0,2,3];t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,h.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(x),t.STATIC_DRAW),o[a]=h}return o}function X(i,e,t,s){let n=s[0],r=s[1],c=s[2],o=s[3];i[e+0]=n*t[0]+r*t[4]+c*t[8]+o*t[12],i[e+1]=n*t[1]+r*t[5]+c*t[9]+o*t[13],i[e+2]=n*t[2]+r*t[6]+c*t[10]+o*t[14],i[e+3]=n*t[3]+r*t[7]+c*t[11]+o*t[15]}const At=12,Rt=4,Q=3;function J(i,e,t){const s=m(i)*At,n=Array(6*s);return St(n,0*s,i,1,e,t),vt(n,1*s,i,0,e,t),Pt(n,2*s,i,1,-e,t),Et(n,3*s,i,0,-e,t),Ot(n,4*s,i,2,-e,t),_t(n,5*s,i,2,e,t),n}function St(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=0;l<t;l++)for(let u=0;u<t;u++){const d=-1+1/t+u*2/t,f=-1+1/t+l*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=-b(t);a<=b(t);a++)for(let h=-b(t);h<=b(t);h++)c[o]=[2*h/t,2*a/t,n],o++;v(i,e,t,c,s,r)}function vt(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=0;l<t;l++)for(let u=t-1;u>=0;u--){const d=-1+1/t+l*2/t,f=-1+1/t+u*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=-b(t);a<=b(t);a++)for(let h=b(t);h>=-b(t);h--)c[o]=[2*a/t,2*h/t,n],o++;v(i,e,t,c,s,r)}function Pt(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=0;l<t;l++)for(let u=t-1;u>=0;u--){const d=-1+1/t+u*2/t,f=-1+1/t+l*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=-b(t);a<=b(t);a++)for(let h=b(t);h>=-b(t);h--)c[o]=[2*h/t,2*a/t,n],o++;v(i,e,t,c,s,r)}function Et(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=0;l<t;l++)for(let u=0;u<t;u++){const d=-1+1/t+l*2/t,f=-1+1/t+u*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=-b(t);a<=b(t);a++)for(let h=-b(t);h<=b(t);h++)c[o]=[2*a/t,2*h/t,n],o++;v(i,e,t,c,s,r)}function Ot(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=0;l<t;l++)for(let u=t-1;u>=0;u--){const d=-1+1/t+u*2/t,f=-1+1/t+l*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=-b(t);a<=b(t);a++)for(let h=b(t);h>=-b(t);h--)c[o]=[2*h/t,2*a/t,n],o++;v(i,e,t,c,s,r)}function _t(i,e,t,s,n,r){if(G(t)){let a=Array(m(t)),h=0;for(let l=t-1;l>=0;l--)for(let u=t-1;u>=0;u--){const d=-1+1/t+u*2/t,f=-1+1/t+l*2/t;a[h]=[d,f,n],h++}v(i,e,t,a,s,r);return}let c=Array(m(t)),o=0;for(let a=b(t);a>=-b(t);a--)for(let h=b(t);h>=-b(t);h--)c[o]=[2*h/t,2*a/t,n],o++;v(i,e,t,c,s,r)}function v(i,e,t,s,n,r){for(let c=0;c<m(t);c++){const o=s[c];Lt(i,e+c*At,t,o[0],o[1],o[2],n,r)}}function Lt(i,e,t,s,n,r,c,o){const a=1/t-o,h=[[s-a,n-a,r],[s+a,n-a,r],[s+a,n+a,r],[s-a,n+a,r]];for(let l=0;l<Rt;l++){const u=h[l];i[e+l*Q]=u[(c+0)%Q],i[e+l*Q+1]=u[(c+1)%Q],i[e+l*Q+2]=u[(c+2)%Q]}}const Dt=[1,1,1,1],Ft=[1,1,0,1],Mt=[0,1,0,1],Bt=[0,0,1,1],Ct=[1,.5,0,1],Ut=[1,0,0,1],Kt=[0,0,0,1],ht=[Dt,Mt,Ft,Bt,Ct,Ut];function ut(i){return(i<0||i>=ht.length)&&console.error("Invalid face: "+i),ht[i]}function q(i){return Math.floor(Math.random()*i)}function wt(i){let e=i.length;for(;e!=0;){let t=q(e);e--;let s=i[t];i[t]=i[e],i[e]=s}return i}const w=0,I=1,Y=2,H=3,N=4,z=5,It=[[w,H,N],[w,z,H],[w,N,I],[w,I,z],[Y,I,N],[Y,z,I],[Y,N,H],[Y,H,z]],Yt=[[w,H],[w,N],[w,z],[w,I],[I,N],[I,z],[Y,I],[Y,N],[Y,z],[Y,H],[H,N],[H,z]];function Ht(i){let e=lt(12,2),t=lt(8,3),s=tt(8),n=tt(12);for(;ft(s)!==ft(n);)s=tt(8);const r=Array(54);for(let k=0;k<6;k++){const O=i.center(k);r[O]=k}let c=i.corners(0,0),o=i.corners(1,0),a=i.corners(2,0),h=i.corners(3,0),l=i.corners(4,0),u=i.corners(5,0);const d=(k,O,W,L,D,F,M,B,C)=>{const g=(P,U)=>It[s[P]][(t[P]+U)%3];r[k.topLeft]=g(O,F),r[k.topRight]=g(W,M),r[k.bottomLeft]=g(L,B),r[k.bottomRight]=g(D,C)};d(c,0,1,2,3,0,0,0,0),d(o,2,3,4,5,2,1,1,2),d(a,4,5,6,7,0,0,0,0),d(h,6,7,0,1,2,1,1,2),d(l,0,2,6,4,2,1,1,2),d(u,3,1,5,7,2,1,1,2);let f=i.edges(0,0,0),x=i.edges(1,0,0),y=i.edges(2,0,0),T=i.edges(3,0,0),E=i.edges(4,0,0),j=i.edges(5,0,0);const S=(k,O,W,L,D,F,M,B,C)=>{const g=(P,U)=>Yt[n[P]][(e[P]+U)%2];r[k.top]=g(O,F),r[k.left]=g(W,M),r[k.right]=g(L,B),r[k.bottom]=g(D,C)};return S(f,0,1,2,3,0,0,0,0),S(x,3,4,5,6,1,0,0,1),S(y,6,7,8,9,0,0,0,0),S(T,9,10,11,0,1,0,0,1),S(E,1,10,4,7,1,1,1,1),S(j,2,5,11,8,1,1,1,1),r}function lt(i,e){const t=Array(i);for(let s=0;s<i;s++)t[s]=q(e);for(;!Nt(t,e);){const s=q(i);t[s]=q(e)}return t}function Nt(i,e){let t=0;for(let s=0;s<i.length;s++)t+=i[s];return t%e===0}function tt(i){const e=Array(i);for(let t=0;t<i;t++)e[t]=t;return wt(e),e}function ft(i){const e=[...i];let t=!1;for(;;)if(e[0]===0){const s=e.findIndex((n,r)=>n!==r);if(s===-1)return t;e[0]=e[s],e[s]=0,t=!t}else{const s=e[0];e[0]=e[s],e[s]=s,t=!t}}let K;function et(i,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];K.bindBuffer(K.ARRAY_BUFFER,i.buffer),K.bufferData(K.ARRAY_BUFFER,new Float32Array(t),K.STATIC_DRAW)}function m(i){return i*i}function b(i){return Math.floor(i/2)}function G(i){return i%2==0}function R(i){return i*i*6}class zt{constructor(e,t){K=e,this.animationQueue=[],this.gl=e,this.perspectiveMatrix=t}setColors(e){for(let t=0;t<R(this.layers);t++)et(this.stickers[t],e[t])}solve(){const e=Array(R(this.layers));for(let t=0;t<R(this.layers);t++){const s=this.stickerToFace(t);this.stickers[t].face=s,e[t]=ut(s)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=Ht(this);this.setCubeState(e)}naiveScramble(){let e=m(this.layers)*10;for(let t=0;t<e;t++){let s=Math.floor(Math.random()*3),n=Math.floor(Math.random()*this.layers),r=Math.floor(Math.random()*1)==0;this._matchTurn(s,n,r)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(R(e)),this.underStickers=Array(R(e));for(let t=0;t<R(e);t++){const s=this.stickerToFace(t);this.stickers[t]={face:s,buffer:K.createBuffer()},this.underStickers[t]={face:s,buffer:K.createBuffer()},et(this.underStickers[t],Kt)}this.affectedStickers=Array(R(e)).fill(!1),this.buffers=gt(this),this.solve()}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<R(this.layers);t++){const s=ut(e[t]);this.stickers[t].face=e[t],et(this.stickers[t],s)}}resetAffectedStickers(){const e=Array(R(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,s){let n=t?-1:1,r=[0,0,0];r[e]=n,this.animationQueue.push({axis:r,stickers:s,stickersToAnimate:this.affectedStickers})}turn(e,t,s){this.resetAffectedStickers(),this.pushAnimation(e,s,[...this.stickers]),this._matchTurn(e,t,s)}sliceTurn(e,t){const s=Array(R(this.layers));this.affectedStickers=s.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let n=1;n<this.layers-1;n++)this._matchTurn(e,n,t)}wideTurn(e,t,s){this.resetAffectedStickers(),this.pushAnimation(e,s,[...this.stickers]),this._matchTurn(e,t,s);for(let n=1;n<this.layers-1;n++)this._matchTurn(e,n,s)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let s=0;s<this.layers;s++)this._matchTurn(e,s,t)}_matchTurn(e,t,s){e==0?(this._turnXAxis(t,s),t==0?this._turnOuter(5,s):t==this.layers-1&&this._turnOuter(4,!s)):e==1?(this._turnYAxis(t,s),t==0?this._turnOuter(0,s):t==this.layers-1&&this._turnOuter(2,!s)):e==2?(this._turnZAxis(t,s),t==0?this._turnOuter(1,s):t==this.layers-1&&this._turnOuter(3,!s)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let s=1;s<=this.layers;s++)this._cycle(t,0*m(this.layers)+m(this.layers)-s-e*this.layers,3*m(this.layers)+m(this.layers)-s-e*this.layers,2*m(this.layers)+m(this.layers)-s-e*this.layers,1*m(this.layers)+m(this.layers)-s-e*this.layers)}_turnYAxis(e,t){for(let s=0;s<this.layers;s++)this._cycle(t,1*m(this.layers)+s*this.layers+e,4*m(this.layers)+s*this.layers+e,3*m(this.layers)+(this.layers-s-1)*this.layers+(this.layers-1)-e,5*m(this.layers)+s*this.layers+e)}_turnZAxis(e,t){for(let s=0;s<this.layers;s++)this._cycle(t,0*m(this.layers)+(s+1)*this.layers-1-e,5*m(this.layers)+s+this.layers*e,2*m(this.layers)+(this.layers-s-1)*this.layers+e,4*m(this.layers)+m(this.layers)-(s+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let s=this.center(e);this.affectedStickers[s]=!0}for(let s=0;s<Math.floor(this.layers/2);s++){const{topLeft:n,topRight:r,bottomLeft:c,bottomRight:o}=this.corners(e,s);this._cycle(t,n,r,o,c);let a=this.layers-2*(s+1);for(let h=0;h<a;h++){const{top:l,left:u,bottom:d,right:f}=this.edges(e,s,h);this._cycle(t,l,f,d,u)}}}_cycle(e,t,s,n,r){this.affectedStickers[t]=!0,this.affectedStickers[s]=!0,this.affectedStickers[n]=!0,this.affectedStickers[r]=!0,e?this._cycleHelper(t,s,n,r):this._cycleHelper(r,n,s,t)}_cycleHelper(e,t,s,n){let r=this.stickers[n];this.stickers[n]=this.stickers[s],this.stickers[s]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=r}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let s=0;s<t.length;s++)this.stepAlgorithm(t[s],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let s=t.length-1;s>=0;s--)this.stepAlgorithm(t[s],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*m(this.layers)<=e&&e<(t+1)*m(this.layers)}stickerToFace(e){return Math.floor(e/m(this.layers))}center(e){return e*m(this.layers)+Math.floor(m(this.layers)/2)}corners(e,t){const s=e*m(this.layers);return{topLeft:s+(this.layers+1)*t,topRight:s+(this.layers-1)*(this.layers-t),bottomRight:s+(this.layers+1)*(this.layers-t-1),bottomLeft:s+(this.layers-1)*(t+1)}}edges(e,t,s){const n=this.corners(e,t);let r=this.layers-2*(t+1);return{top:n.topLeft+this.layers*(s+1),left:n.topLeft+(r-s),right:n.topRight+s+1,bottom:n.bottomLeft+this.layers*(r-s)}}}function dt(i,e){return i/e*2-1}function mt(i,e){return 1-i/e*2}function it(i,e,t,s){return i<t?(s-e)/(t-i):(e-s)/(i-t)}function V(i,e,t,s,n,r){return Math.abs(.5*(i*(s-r)+t*(r-e)+n*(e-s)))}function jt(i,e){return i.layers-1-e%i.layers}function st(i,e){return i.layers-1-Math.floor(e/i.layers)}function Wt(i,e){return e%i.layers}function nt(i,e){return i.layers-1-Math.floor((e-m(i.layers))/i.layers)}class Qt{onPointerDown(e,t,s,n){const r=n.buffers;this.numOfPointerMoves=0;const c=dt(e,s.clientWidth),o=mt(t,s.clientHeight);this.xOnDown=c,this.yOnDown=o,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(c,o,n,r);function a(y,T,E){return{x:r[y].cart2d[T],y:r[y].cart2d[E]}}if(this.stickerOnDown!==-1)return;const h=a(0,0,1),l=a(n.layers*(n.layers-1),6,7),u=a(n.layers-1,2,3),d=a(m(n.layers)-1,4,5),f=a(n.layers*(n.layers+1)-1,0,1),x=a(m(n.layers)*2-1,2,3);o>h.y&&c>h.x&&c<l.x?n.cubeRotate(0,!0):c<h.x&&o>u.y&&o<h.y?n.cubeRotate(2,!1):c>l.x&&o>d.y&&o<l.y?n.cubeRotate(2,!0):c<f.x&&o>f.y&&o<u.y?n.cubeRotate(1,!0):c>x.x&&o>x.y&&o<d.y?n.cubeRotate(1,!1):o<f.y&&c>f.x&&c<x.x&&n.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t){if(this.numOfPointerMoves<2)return;let s,n;if(this.stickerOnDown!==-1&&(s=it(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),n=it(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),s<0)){const a=s;s=n,n=a}const r=dt(this.xOnMove,e.clientWidth),c=mt(this.yOnMove,e.clientHeight),o=it(r,c,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?r===this.xOnDown?t.turn(0,st(t,this.stickerOnDown),c>this.yOnDown):o>s?t.turn(0,st(t,this.stickerOnDown),r>this.xOnDown):o<n?t.turn(0,st(t,this.stickerOnDown),r<this.xOnDown):t.turn(2,jt(t,this.stickerOnDown),r>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(r===this.xOnDown?t.turn(0,nt(t,this.stickerOnDown),c>this.yOnDown):o>s?t.turn(0,nt(t,this.stickerOnDown),r>this.xOnDown):o<n?t.turn(0,nt(t,this.stickerOnDown),r<this.xOnDown):t.turn(1,Wt(t,this.stickerOnDown),r<this.xOnDown))}_coordinatesToSticker(e,t,s,n){const r=c=>{if(!n[c].cart2d){console.error("cart2d is undefined");return}const o=n[c].cart2d,a=V(o[0],o[1],o[2],o[3],o[4],o[5])+V(o[0],o[1],o[4],o[5],o[6],o[7]),h=V(e,t,o[0],o[1],o[2],o[3])+V(e,t,o[2],o[3],o[4],o[5])+V(e,t,o[4],o[5],o[6],o[7])+V(e,t,o[6],o[7],o[0],o[1]),l=1e-5;if(Math.abs(a-h)<l)return[c,o]};for(let c=0;c<2*m(s.layers);c++){const o=r(c);if(o)return o}return[-1,void 0]}}function $(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Vt(i,e,t,s,n){const r=1/Math.tan(e/2);if(i[0]=r/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=r,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,n!=null&&n!==1/0){const c=1/(s-n);i[10]=(n+s)*c,i[14]=2*n*s*c}else i[10]=-1,i[14]=-2*s;return i}function Z(i,e,t,s){let n=s[0],r=s[1],c=s[2],o=1/Math.hypot(n,r,c);n*=o,r*=o,c*=o;let a=Math.sin(t),h=Math.cos(t),l=1-h,u=e[0],d=e[1],f=e[2],x=e[3],y=e[4],T=e[5],E=e[6],j=e[7],S=e[8],k=e[9],O=e[10],W=e[11],L=n*n*l+h,D=r*n*l+c*a,F=c*n*l-r*a,M=n*r*l-c*a,B=r*r*l+h,C=c*r*l+n*a,g=n*c*l+r*a,P=r*c*l-n*a,U=c*c*l+h;return i[0]=u*L+y*D+S*F,i[1]=d*L+T*D+k*F,i[2]=f*L+E*D+O*F,i[3]=x*L+j*D+W*F,i[4]=u*M+y*B+S*C,i[5]=d*M+T*B+k*C,i[6]=f*M+E*B+O*C,i[7]=x*M+j*B+W*C,i[8]=u*g+y*P+S*U,i[9]=d*g+T*P+k*U,i[10]=f*g+E*P+O*U,i[11]=x*g+j*P+W*U,e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function Gt(i,e){let t=e[0],s=e[1],n=e[2];return i[12]+=i[0]*t+i[4]*s+i[7]*n,i[13]+=i[1]*t+i[5]*s+i[8]*n,i[14]+=i[2]*t+i[5]*s+i[9]*n,i[15]+=i[3]*t+i[6]*s+i[10]*n,i}function pt(){let i;return e=>(i||(i=e()),i)}const Xt=100,qt=15;class $t{constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-Xt*(this.position-this.target),s=-qt*this._velocity;this._acceleration=t+s,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}let A,p,_,at=[],yt=Date.now()*.001,Zt=3,bt=!1;function Jt(){bt||(bt=!0,requestAnimationFrame(kt))}function te(i){p||(A=document.createElement("canvas"),A.style.position="fixed",A.style.display="block",A.style.top="0",A.style.left="0",A.style.width="100vw",A.style.height="100%",A.style.zIndex="-1",document.body.appendChild(A),p=A.getContext("webgl"),_=ee(),document.addEventListener("keydown",d=>{r.cube.matchKeyToTurn(d)}));let e=ie(i),t=new zt(p,e),s=new $t,n=new Qt;t.setNumOfLayers(Zt),t.solve();let r={div:i,gl:p,cube:t,spring:s,dragEnabled:!0};const c=(d,f)=>{n.onPointerDown(d,f,r.div,r.cube)},o=(d,f)=>{n.onPointerMove(d,f)},a=()=>{n.onPointerUp(r.div,r.cube)},h=d=>{const f=d.target.getBoundingClientRect(),x=d.touches[0].pageX-f.left,y=d.touches[0].pageY-f.top;return{x,y}},l=()=>{i.addEventListener("pointerdown",d=>c(d.offsetX,d.offsetY)),i.addEventListener("pointermove",d=>o(d.offsetX,d.offsetY)),i.addEventListener("pointerup",()=>a())},u=()=>{i.addEventListener("touchstart",d=>{const{x:f,y:x}=h(d);c(f,x)}),i.addEventListener("touchmove",d=>{const{x:f,y:x}=h(d);o(f,x)}),i.addEventListener("touchend",()=>{a()})};return window.PointerEvent?l():u(),at.push(r),Jt(),r}function ee(){const t=se(p,`
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    uniform mat4 uRotateMatrix;

    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        originalPos = aVertexPosition;
        rotatedPos = uRotateMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `,`
    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;

    void main(void) {
        gl_FragColor = vColor;

        // low precision float variable
        lowp float max = 1.05;

        // if it is a normal sticker rather than a hint sticker, it should not be discarded
        if (originalPos.x < max && originalPos.x > -max && originalPos.y < max && originalPos.y > -max && originalPos.z < max && originalPos.z > -max) {
            return;
        }

        // if it starts on the right or left, and stays on its side, it should not be discarded
        if (originalPos.x > max && rotatedPos.x > max) return;
        if (originalPos.x < -max && rotatedPos.x < -max) return;

        if (rotatedPos.y < max && rotatedPos.z < max) return;
        discard;
    }
    `);return p.useProgram(t),{attribLocations:{vertexPosition:p.getAttribLocation(t,"aVertexPosition"),vertexColor:p.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:p.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:p.getUniformLocation(t,"uRotateMatrix")}}}function ie(i){let e=$();return Vt(e,50*Math.PI/180,i.clientWidth/i.clientHeight,.1,100),Gt(e,[0,0,-5]),Z(e,e,45*Math.PI/180,[1,0,0]),Z(e,e,0,[0,-1,0]),e}function rt(i,e,t){t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function ot(i,e,t){t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function ct(i){i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0)}function se(i,e,t){const s=xt(i,i.VERTEX_SHADER,e),n=xt(i,i.FRAGMENT_SHADER,t),r=i.createProgram();return i.attachShader(r,s),i.attachShader(r,n),i.linkProgram(r),i.getProgramParameter(r,i.LINK_STATUS)?r:(alert("Unable to initialize the shader program: "+i.getProgramInfoLog(r)),null)}function xt(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),i.getShaderParameter(s,i.COMPILE_STATUS)?s:(alert("An error occurred compiling the shaders: "+i.getShaderInfoLog(s)),i.deleteShader(s),null)}function ne(){const i=A.clientWidth,e=A.clientHeight,t=A.width!==i||A.height!==e;return t&&(A.width=i,A.height=e),t}function kt(i){i*=.001;const e=i-yt;yt=i,ne(),p.enable(p.DEPTH_TEST),p.enable(p.SCISSOR_TEST),p.depthFunc(p.LEQUAL),p.clear(p.COLOR_BUFFER_BIT|p.DEPTH_BUFFER_BIT);for(let t=0;t<at.length;t++){const{cube:s,div:n,spring:r}=at[t],c=n.getBoundingClientRect();if(c.bottom<0||c.top>A.clientHeight||c.right<0||c.left>A.clientWidth)continue;const o=c.right-c.left,a=c.bottom-c.top,h=c.left,l=A.clientHeight-c.bottom;p.viewport(h,l,o,a),p.scissor(h,l,o,a),s.animationQueue[0]&&(r.target=s.animationQueue.length*90,r.update(e),r.position>=90&&(s.affectedStickers=Array(R(s.layers)).fill(!1),r.position=0,s.animationQueue.shift()));const u=s.animationQueue[0];let d=re(s),f=pt(),x=pt();for(let y=0;y<R(s.layers);y++){let T=s.buffers[y];const E=u&&u.stickersToAnimate[y]?f(()=>Z($(),s.perspectiveMatrix,r.position*Math.PI/180,u.axis)):s.perspectiveMatrix;p.uniformMatrix4fv(_.uniformLocations.transformMatrix,!1,E);const j=u&&u.stickersToAnimate[y]?x(()=>{const S=$();return Z(S,S,r.position*Math.PI/180,u.axis)}):$();p.uniformMatrix4fv(_.uniformLocations.rotateMatrix,!1,j),p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,T.indexBuffer),rt(T.noGapPositionBuffer,_,p),ot(s.underStickers[y].buffer,_,p),ct(p),rt(T.positionBuffer,_,p),ot(d[y].buffer,_,p),ct(p),rt(T.hintPositionBuffer,_,p),ot(d[y].buffer,_,p),ct(p)}}requestAnimationFrame(kt)}function re(i){return i.animationQueue[0]?i.animationQueue[0].stickers:i.stickers}const oe=document.querySelector("#scenesContainer");Tt(3);for(let i=1;i<10;i++)Tt(i);function Tt(i){let e=document.createElement("div");e.style.width="320px",e.style.height="320px",e.style.minWidth="320px",e.style.minHeight="320px",e.style.borderRadius="8px",e.style.boxShadow="rgb(0 0 0 / 20%) 0 4px 12px",e.style.border="solid 1px lightgray",e.style.touchAction="none",oe.appendChild(e),te(e).cube.setNumOfLayers(i)}
