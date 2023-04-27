(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Et(e){return e.split(" ").map(t=>t.endsWith("2")?t.slice(0,-1)+" "+t.slice(0,-1):t).join(" ")}const Lt=[1,1,1,1],Pt=[1,1,0,1],wt=[0,1,0,1],Mt=[0,0,1,1],Ot=[1,.5,0,1],Dt=[1,0,0,1],Ft=[0,0,0,1],ft=[Lt,wt,Pt,Mt,Ot,Dt];function dt(e){return(e<0||e>=ft.length)&&console.error("Invalid face: "+e),ft[e]}const tt={};function kt(e){const t=e.layers,n=e.gl,r=e.perspectiveMatrix,i=`${t}-${r}`;if(tt[i])return tt[i];let s=et(t,1.01,.02),o=et(t,1,0),l=et(t,1.5,.02);const h=Array(E(t));for(let a=0;a<E(t);a++){let f={positionBuffer:n.createBuffer(),noGapPositionBuffer:n.createBuffer(),hintPositionBuffer:n.createBuffer(),indexBuffer:n.createBuffer(),cart2d:[],positions:null},d=new Float32Array(12),y=new Float32Array(12),p=new Float32Array(12);for(let R=0;R<12;R++){let S=a*12+R;d[R]=s[S],y[R]=o[S],p[R]=l[S]}n.bindBuffer(n.ARRAY_BUFFER,f.positionBuffer),n.bufferData(n.ARRAY_BUFFER,d,n.STATIC_DRAW),f.positions=d,n.bindBuffer(n.ARRAY_BUFFER,f.noGapPositionBuffer),n.bufferData(n.ARRAY_BUFFER,y,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,f.hintPositionBuffer),n.bufferData(n.ARRAY_BUFFER,p,n.STATIC_DRAW);const u=Array(16);q(u,0,r,[y[0],y[1],y[2],1]),q(u,4,r,[y[3],y[4],y[5],1]),q(u,8,r,[y[6],y[7],y[8],1]),q(u,12,r,[y[9],y[10],y[11],1]),f.cart2d=[u[0]/u[3],u[1]/u[3],u[4]/u[7],u[5]/u[7],u[8]/u[11],u[9]/u[11],u[12]/u[15],u[13]/u[15]];const x=[0,1,2,0,2,3];n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,f.indexBuffer),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(x),n.STATIC_DRAW),h[a]=f}return tt[i]=h,h}function q(e,t,n,r){let i=r[0],s=r[1],o=r[2],l=r[3];e[t+0]=i*n[0]+s*n[4]+o*n[8]+l*n[12],e[t+1]=i*n[1]+s*n[5]+o*n[9]+l*n[13],e[t+2]=i*n[2]+s*n[6]+o*n[10]+l*n[14],e[t+3]=i*n[3]+s*n[7]+o*n[11]+l*n[15]}const At=12,Bt=4,V=3;function et(e,t,n){const r=c(e)*At,i=Array(6*r);return Ct(i,0*r,e,1,t,n),_t(i,1*r,e,0,t,n),Kt(i,2*r,e,1,-t,n),Ut(i,3*r,e,0,-t,n),It(i,4*r,e,2,-t,n),Yt(i,5*r,e,2,t,n),i}function Ct(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=0;f<n;f++)for(let d=0;d<n;d++){const y=-1+1/n+d*2/n,p=-1+1/n+f*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=-T(n);h<=T(n);h++)for(let a=-T(n);a<=T(n);a++)o[l]=[2*a/n,2*h/n,i],l++;L(e,t,n,o,r,s)}function _t(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=0;f<n;f++)for(let d=n-1;d>=0;d--){const y=-1+1/n+f*2/n,p=-1+1/n+d*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=-T(n);h<=T(n);h++)for(let a=T(n);a>=-T(n);a--)o[l]=[2*h/n,2*a/n,i],l++;L(e,t,n,o,r,s)}function Kt(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=0;f<n;f++)for(let d=n-1;d>=0;d--){const y=-1+1/n+d*2/n,p=-1+1/n+f*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=-T(n);h<=T(n);h++)for(let a=T(n);a>=-T(n);a--)o[l]=[2*a/n,2*h/n,i],l++;L(e,t,n,o,r,s)}function Ut(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=0;f<n;f++)for(let d=0;d<n;d++){const y=-1+1/n+f*2/n,p=-1+1/n+d*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=-T(n);h<=T(n);h++)for(let a=-T(n);a<=T(n);a++)o[l]=[2*h/n,2*a/n,i],l++;L(e,t,n,o,r,s)}function It(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=0;f<n;f++)for(let d=n-1;d>=0;d--){const y=-1+1/n+d*2/n,p=-1+1/n+f*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=-T(n);h<=T(n);h++)for(let a=T(n);a>=-T(n);a--)o[l]=[2*a/n,2*h/n,i],l++;L(e,t,n,o,r,s)}function Yt(e,t,n,r,i,s){if(X(n)){let h=Array(c(n)),a=0;for(let f=n-1;f>=0;f--)for(let d=n-1;d>=0;d--){const y=-1+1/n+d*2/n,p=-1+1/n+f*2/n;h[a]=[y,p,i],a++}L(e,t,n,h,r,s);return}let o=Array(c(n)),l=0;for(let h=T(n);h>=-T(n);h--)for(let a=T(n);a>=-T(n);a--)o[l]=[2*a/n,2*h/n,i],l++;L(e,t,n,o,r,s)}function L(e,t,n,r,i,s){for(let o=0;o<c(n);o++){const l=r[o];Nt(e,t+o*At,n,l[0],l[1],l[2],i,s)}}function Nt(e,t,n,r,i,s,o,l){const h=1/n-l,a=[[r-h,i-h,s],[r+h,i-h,s],[r+h,i+h,s],[r-h,i+h,s]];for(let f=0;f<Bt;f++){const d=a[f];e[t+f*V]=d[(o+0)%V],e[t+f*V+1]=d[(o+1)%V],e[t+f*V+2]=d[(o+2)%V]}}function Ht(){const e=localStorage.getItem("keyBindings");return e?JSON.parse(e):{...jt}}const jt={KeyN:"x",KeyB:"x'",Semicolon:"y",KeyA:"y'",KeyP:"z",KeyQ:"z'",KeyJ:"U",KeyF:"U'",KeyS:"D",KeyL:"D'",KeyH:"F",KeyG:"F'",KeyW:"B",KeyO:"B'",KeyD:"L",KeyE:"L'",KeyI:"R",KeyK:"R'",BracketLeft:"M",Quote:"M'",KeyC:"E",Comma:"E'",KeyY:"S",KeyT:"S'",KeyU:"r",KeyM:"r'",KeyV:"l",KeyR:"l'"};function zt(e,t,n){if(!t)return;const r=Wt(e);t in r?r[t](n):console.log("Invalid move: "+t)}function Wt(e){return{x:t=>e.cubeRotate(0,t),"x'":t=>e.cubeRotate(0,!t),x2:t=>{e.cubeRotate(0,t),e.cubeRotate(0,t)},"x2'":t=>{e.cubeRotate(0,t),e.cubeRotate(0,t)},y:t=>e.cubeRotate(1,t),"y'":t=>e.cubeRotate(1,!t),y2:t=>{e.cubeRotate(1,t),e.cubeRotate(1,t)},"y2'":t=>{e.cubeRotate(1,t),e.cubeRotate(1,t)},z:t=>e.cubeRotate(2,t),"z'":t=>e.cubeRotate(2,!t),z2:t=>{e.cubeRotate(2,t),e.cubeRotate(2,t)},"z2'":t=>{e.cubeRotate(2,t),e.cubeRotate(2,t)},U:t=>e.turn(1,0,t),"U'":t=>e.turn(1,0,!t),U2:t=>{e.turn(1,0,t),e.turn(1,0,t)},"U2'":t=>{e.turn(1,0,t),e.turn(1,0,t)},u:t=>{e.wideTurn(1,0,1,t)},Uw:t=>{e.wideTurn(1,0,1,t)},"u'":t=>{e.wideTurn(1,0,1,!t)},"Uw'":t=>{e.wideTurn(1,0,1,!t)},u2:t=>{e.wideTurn(1,0,1,t),e.wideTurn(1,0,1,t)},"u2'":t=>{e.wideTurn(1,0,1,!t),e.wideTurn(1,0,1,!t)},Uw2:t=>{e.wideTurn(1,0,1,t),e.wideTurn(1,0,1,t)},"Uw2'":t=>{e.wideTurn(1,0,1,!t),e.wideTurn(1,0,1,!t)},D:t=>e.turn(1,e.layers-1,!t),"D'":t=>e.turn(1,e.layers-1,t),D2:t=>{e.turn(1,e.layers-1,!t),e.turn(1,e.layers-1,!t)},"D2'":t=>{e.turn(1,e.layers-1,t),e.turn(1,e.layers-1,t)},d:t=>{e.wideTurn(1,e.layers-1,e.layers-2,!t)},"d'":t=>{e.wideTurn(1,e.layers-1,e.layers-2,t)},d2:t=>{e.wideTurn(1,e.layers-1,e.layers-2,!t),e.wideTurn(1,e.layers-1,e.layers-2,!t)},Dw2:t=>{e.wideTurn(1,e.layers-1,e.layers-2,!t),e.wideTurn(1,e.layers-1,e.layers-2,!t)},"d2'":t=>{e.wideTurn(1,e.layers-1,e.layers-2,t),e.wideTurn(1,e.layers-1,e.layers-2,t)},"Dw2'":t=>{e.wideTurn(1,e.layers-1,e.layers-2,t),e.wideTurn(1,e.layers-1,e.layers-2,t)},F:t=>e.turn(2,0,t),"F'":t=>e.turn(2,0,!t),F2:t=>{e.turn(2,0,t),e.turn(2,0,t)},"F2'":t=>{e.turn(2,0,!t),e.turn(2,0,!t)},f:t=>{e.wideTurn(2,0,1,t)},"f'":t=>{e.wideTurn(2,0,1,!t)},f2:t=>{e.wideTurn(2,0,1,t),e.wideTurn(2,0,1,t)},Fw2:t=>{e.wideTurn(2,0,1,t),e.wideTurn(2,0,1,t)},"f2'":t=>{e.wideTurn(2,0,1,!t),e.wideTurn(2,0,1,!t)},"Fw2'":t=>{e.wideTurn(2,0,1,!t),e.wideTurn(2,0,1,!t)},B:t=>e.turn(2,e.layers-1,!t),"B'":t=>e.turn(2,e.layers-1,t),B2:t=>{e.turn(2,e.layers-1,!t),e.turn(2,e.layers-1,!t)},"B2'":t=>{e.turn(2,e.layers-1,t),e.turn(2,e.layers-1,t)},b:t=>{e.wideTurn(2,e.layers-1,e.layers-2,!t)},"b'":t=>{e.wideTurn(2,e.layers-1,e.layers-2,t)},b2:t=>{e.wideTurn(2,e.layers-1,e.layers-2,!t),e.wideTurn(2,e.layers-1,e.layers-2,!t)},Bw2:t=>{e.wideTurn(2,e.layers-1,e.layers-2,!t),e.wideTurn(2,e.layers-1,e.layers-2,!t)},"b2'":t=>{e.wideTurn(2,e.layers-1,e.layers-2,t),e.wideTurn(2,e.layers-1,e.layers-2,t)},"Bw2'":t=>{e.wideTurn(2,e.layers-1,e.layers-2,t),e.wideTurn(2,e.layers-1,e.layers-2,t)},L:t=>e.turn(0,e.layers-1,!t),"L'":t=>e.turn(0,e.layers-1,t),L2:t=>{e.turn(0,e.layers-1,!t),e.turn(0,e.layers-1,!t)},"L2'":t=>{e.turn(0,e.layers-1,t),e.turn(0,e.layers-1,t)},l:t=>{e.wideTurn(0,e.layers-1,e.layers-2,!t)},Lw:t=>{e.wideTurn(0,e.layers-1,e.layers-2,!t)},"l'":t=>{e.wideTurn(0,e.layers-1,e.layers-2,t)},"Lw'":t=>{e.wideTurn(0,e.layers-1,e.layers-2,t)},l2:t=>{e.wideTurn(0,e.layers-1,e.layers-2,!t),e.wideTurn(0,e.layers-1,e.layers-2,!t)},Lw2:t=>{e.wideTurn(0,e.layers-1,e.layers-2,!t),e.wideTurn(0,e.layers-1,e.layers-2,!t)},"l2'":t=>{e.wideTurn(0,e.layers-1,e.layers-2,t),e.wideTurn(0,e.layers-1,e.layers-2,t)},"Lw2'":t=>{e.wideTurn(0,e.layers-1,e.layers-2,t),e.wideTurn(0,e.layers-1,e.layers-2,t)},R:t=>e.turn(0,0,t),"R'":t=>e.turn(0,0,!t),R2:t=>{e.turn(0,0,t),e.turn(0,0,t)},"R2'":t=>{e.turn(0,0,!t),e.turn(0,0,!t)},r:t=>{e.wideTurn(0,0,1,t)},Rw:t=>{e.wideTurn(0,0,1,t)},"r'":t=>{e.wideTurn(0,0,1,!t)},"Rw'":t=>{e.wideTurn(0,0,1,!t)},r2:t=>{e.wideTurn(0,0,1,t),e.wideTurn(0,0,1,t)},Rw2:t=>{e.wideTurn(0,0,1,t),e.wideTurn(0,0,1,t)},"r2'":t=>{e.wideTurn(0,0,1,!t),e.wideTurn(0,0,1,!t)},"Rw2'":t=>{e.wideTurn(0,0,1,!t),e.wideTurn(0,0,1,!t)},M:t=>e.sliceTurn(0,!t),"M'":t=>e.sliceTurn(0,t),M2:t=>{e.sliceTurn(0,!t),e.sliceTurn(0,!t)},"M2'":t=>{e.sliceTurn(0,t),e.sliceTurn(0,t)},E:t=>e.sliceTurn(1,!t),"E'":t=>e.sliceTurn(1,t),E2:t=>{e.sliceTurn(1,!t),e.sliceTurn(1,!t)},"E2'":t=>{e.sliceTurn(1,t),e.sliceTurn(1,t)},S:t=>e.sliceTurn(2,t),"S'":t=>e.sliceTurn(2,!t),S2:t=>{e.sliceTurn(2,t),e.sliceTurn(2,t)},"S2'":t=>{e.sliceTurn(2,t),e.sliceTurn(2,t)},"2L":t=>e.turn(0,1,t),"2L'":t=>e.turn(0,1,!t),"2L2":t=>{e.turn(0,e.layers-2,t),e.turn(0,e.layers-2,t)},"2L2'":t=>{e.turn(0,e.layers-2,t),e.turn(0,e.layers-2,t)},"2R":t=>e.turn(0,1,!t),"2R'":t=>e.turn(0,1,t),"2R2":t=>{e.turn(0,1,t),e.turn(0,1,t)},"2R2'":t=>{e.turn(0,1,t),e.turn(0,1,t)},"3Lw":t=>{e.turn(0,e.layers-1,!t),e.turn(0,e.layers-2,!t),e.turn(0,e.layers-3,!t)},"3Lw'":t=>{e.turn(0,e.layers-1,t),e.turn(0,e.layers-2,t),e.turn(0,e.layers-3,t)},"3Lw2":t=>{e.turn(0,e.layers-1,!t),e.turn(0,e.layers-2,!t),e.turn(0,e.layers-3,!t),e.turn(0,e.layers-1,!t),e.turn(0,e.layers-2,!t),e.turn(0,e.layers-3,!t)},"3Lw2'":t=>{e.turn(0,e.layers-1,t),e.turn(0,e.layers-2,t),e.turn(0,e.layers-3,t),e.turn(0,e.layers-1,t),e.turn(0,e.layers-2,t),e.turn(0,e.layers-3,t)},"3Rw":t=>{e.turn(0,0,t),e.turn(0,1,t),e.turn(0,2,t)},"3Rw'":t=>{e.turn(0,0,!t),e.turn(0,1,!t),e.turn(0,2,!t)},"3Rw2":t=>{e.turn(0,0,t),e.turn(0,1,t),e.turn(0,2,t),e.turn(0,0,t),e.turn(0,1,t),e.turn(0,2,t)},"3Rw2'":t=>{e.turn(0,0,!t),e.turn(0,1,!t),e.turn(0,2,!t),e.turn(0,0,!t),e.turn(0,1,!t),e.turn(0,2,!t)}}}function $(e){return Math.floor(Math.random()*e)}function Qt(e){let t=e.length;for(;t!=0;){let n=$(t);t--;let r=e[n];e[n]=e[t],e[t]=r}return e}const I=0,Y=1,N=2,H=3,j=4,z=5,Vt=[[I,H,j],[I,z,H],[I,j,Y],[I,Y,z],[N,Y,j],[N,z,Y],[N,j,H],[N,H,z]],Gt=[[I,H],[I,j],[I,z],[I,Y],[Y,j],[Y,z],[N,Y],[N,j],[N,z],[N,H],[H,j],[H,z]];function Xt(e){let t=yt(12,2),n=yt(8,3),r=nt(8),i=nt(12);for(;ct(r)!==ct(i);)r=nt(8);const s=Array(54);for(let A=0;A<6;A++){const M=e.center(A);s[M]=A}let o=e.corners(0,0),l=e.corners(1,0),h=e.corners(2,0),a=e.corners(3,0),f=e.corners(4,0),d=e.corners(5,0);const y=(A,M,Q,O,D,F,k,B,C)=>{const g=(P,_)=>Vt[r[P]][(n[P]+_)%3];s[A.topLeft]=g(M,F),s[A.topRight]=g(Q,k),s[A.bottomLeft]=g(O,B),s[A.bottomRight]=g(D,C)};y(o,0,1,2,3,0,0,0,0),y(l,2,3,4,5,2,1,1,2),y(h,4,5,6,7,0,0,0,0),y(a,6,7,0,1,2,1,1,2),y(f,0,2,6,4,2,1,1,2),y(d,3,1,5,7,2,1,1,2);let p=e.edges(0,0,0),u=e.edges(1,0,0),x=e.edges(2,0,0),R=e.edges(3,0,0),S=e.edges(4,0,0),W=e.edges(5,0,0);const v=(A,M,Q,O,D,F,k,B,C)=>{const g=(P,_)=>Gt[i[P]][(t[P]+_)%2];s[A.top]=g(M,F),s[A.left]=g(Q,k),s[A.right]=g(O,B),s[A.bottom]=g(D,C)};return v(p,0,1,2,3,0,0,0,0),v(u,3,4,5,6,1,0,0,1),v(x,6,7,8,9,0,0,0,0),v(R,9,10,11,0,1,0,0,1),v(S,1,10,4,7,1,1,1,1),v(W,2,5,11,8,1,1,1,1),s}function yt(e,t){const n=Array(e);for(let r=0;r<e;r++)n[r]=$(t);for(;!qt(n,t);){const r=$(e);n[r]=$(t)}return n}function qt(e,t){let n=0;for(let r=0;r<e.length;r++)n+=e[r];return n%t===0}function nt(e){const t=Array(e);for(let n=0;n<e;n++)t[n]=n;return Qt(t),t}function ct(e){const t=[...e];let n=!1;for(;;)if(t[0]===0){const r=t.findIndex((i,s)=>i!==s);if(r===-1)return n;t[0]=t[r],t[r]=0,n=!n}else{const r=t[0];t[0]=t[r],t[r]=r,n=!n}}let U;function rt(e,t){const n=[t[0],t[1],t[2],t[3],t[0],t[1],t[2],t[3],t[0],t[1],t[2],t[3],t[0],t[1],t[2],t[3]];U.bindBuffer(U.ARRAY_BUFFER,e.buffer),U.bufferData(U.ARRAY_BUFFER,new Float32Array(n),U.STATIC_DRAW)}function c(e){return e*e}function T(e){return Math.floor(e/2)}function X(e){return e%2==0}function E(e){return e*e*6}class $t{constructor(t,n){U=t,this.animationQueue=[],this.gl=t,this.perspectiveMatrix=n,this.keyBindings=Ht()}solve(){for(let t=0;t<E(this.layers);t++){const n=this.stickerToFace(t);this.stickers[t].face=n;const r=dt(n);rt(this.stickers[t],r)}}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const t=Xt(this);this.setCubeState(t)}naiveScramble(){let t=c(this.layers)*10;for(let n=0;n<t;n++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this.matchTurn(r,i,s)}}setNumOfLayers(t){this.layers=t,this.stickers=Array(E(t)),this.underStickers=Array(E(t));for(let n=0;n<E(t);n++){const r=this.stickerToFace(n);this.stickers[n]={face:r,buffer:U.createBuffer()},this.underStickers[n]={face:r,buffer:U.createBuffer()},rt(this.underStickers[n],Ft)}this.affectedStickers=Array(E(t)).fill(!1),this.buffers=kt(this),this.solve()}setCubeState(t){for(let n=0;n<E(this.layers);n++){const r=dt(t[n]);this.stickers[n].face=t[n],rt(this.stickers[n],r)}}resetAffectedStickers(){const t=Array(E(this.layers));this.affectedStickers=t.fill(this.layers===1)}pushAnimation(t,n,r){let i=n?-1:1,s=[0,0,0];s[t]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(t,n,r){this.resetAffectedStickers(),this.pushAnimation(t,r,[...this.stickers]),this.matchTurn(t,n,r)}sliceTurn(t,n){const r=Array(E(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(t,n,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this.matchTurn(t,i,n)}wideTurn(t,n,r,i){this.resetAffectedStickers(),this.pushAnimation(t,i,[...this.stickers]),this.matchTurn(t,n,i),this.matchTurn(t,r,i)}cubeRotate(t,n){this.resetAffectedStickers(),this.pushAnimation(t,n,[...this.stickers]);for(let r=0;r<this.layers;r++)this.matchTurn(t,r,n)}matchTurn(t,n,r){t==0?(this.turnXAxis(n,r),n==0?this.turnOuter(5,r):n==this.layers-1&&this.turnOuter(4,!r)):t==1?(this.turnYAxis(n,r),n==0?this.turnOuter(0,r):n==this.layers-1&&this.turnOuter(2,!r)):t==2?(this.turnZAxis(n,r),n==0?this.turnOuter(1,r):n==this.layers-1&&this.turnOuter(3,!r)):console.error(`Axis ${t} not recognized`)}turnXAxis(t,n){for(let r=1;r<=this.layers;r++)this.cycle(n,0*c(this.layers)+c(this.layers)-r-t*this.layers,3*c(this.layers)+c(this.layers)-r-t*this.layers,2*c(this.layers)+c(this.layers)-r-t*this.layers,1*c(this.layers)+c(this.layers)-r-t*this.layers)}turnYAxis(t,n){for(let r=0;r<this.layers;r++)this.cycle(n,1*c(this.layers)+r*this.layers+t,4*c(this.layers)+r*this.layers+t,3*c(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-t,5*c(this.layers)+r*this.layers+t)}turnZAxis(t,n){for(let r=0;r<this.layers;r++)this.cycle(n,0*c(this.layers)+(r+1)*this.layers-1-t,5*c(this.layers)+r+this.layers*t,2*c(this.layers)+(this.layers-r-1)*this.layers+t,4*c(this.layers)+c(this.layers)-(r+1)-t*this.layers)}turnOuter(t,n){if(this.layers%2!=0){let r=this.center(t);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:l}=this.corners(t,r);this.cycle(n,i,s,l,o);let h=this.layers-2*(r+1);for(let a=0;a<h;a++){const{top:f,left:d,bottom:y,right:p}=this.edges(t,r,a);this.cycle(n,f,p,y,d)}}}cycle(t,n,r,i,s){this.affectedStickers[n]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,t?this.cycleHelper(n,r,i,s):this.cycleHelper(s,i,r,n)}cycleHelper(t,n,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[n],this.stickers[n]=this.stickers[t],this.stickers[t]=s}matchKeyToTurn(t){if(!this.disableTurn&&!t.ctrlKey)return this.matchKeyCodeToTurn(t.code)}matchKeyCodeToTurn(t){const n=this.keyBindings[t];this.performMove(n,!0)}performMove(t,n){zt(this,t,n)}performAlg(t){if(!t)return console.log("Empty alg. Skipping."),0;let n=t.split(" ");for(let r=0;r<n.length;r++)this.performMove(n[r],!0),this.animationQueue=[];return n.length}performAlgWithAnimation(t,n){t=Et(t);const r=800;let i=t.split(" "),s=0;return setInterval(()=>{if(s>=i.length){n();return}this.performMove(i[s],!0),s++},r)}stickerIsOnFace(t,n){return n*c(this.layers)<=t&&t<(n+1)*c(this.layers)}stickerToFace(t){return Math.floor(t/c(this.layers))}center(t){return t*c(this.layers)+Math.floor(c(this.layers)/2)}corners(t,n){const r=t*c(this.layers);return{topLeft:r+(this.layers+1)*n,topRight:r+(this.layers-1)*(this.layers-n),bottomRight:r+(this.layers+1)*(this.layers-n-1),bottomLeft:r+(this.layers-1)*(n+1)}}edges(t,n,r){const i=this.corners(t,n);let s=this.layers-2*(n+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function ut(e,t){return e/t*2-1}function pt(e,t){return 1-e/t*2}function it(e,t,n,r){return e<n?(r-t)/(n-e):(t-r)/(e-n)}function G(e,t,n,r,i,s){return Math.abs(.5*(e*(r-s)+n*(s-t)+i*(t-r)))}function Jt(e,t){return e.layers-1-t%e.layers}function st(e,t){return e.layers-1-Math.floor(t/e.layers)}function Zt(e,t){return t%e.layers}function ot(e,t){return e.layers-1-Math.floor((t-c(e.layers))/e.layers)}class bt{onPointerDown(t,n,r,i){const s=i.buffers;this.numOfPointerMoves=0;const o=ut(t,r.clientWidth),l=pt(n,r.clientHeight);this.xOnDown=o,this.yOnDown=l,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,l,i,s);function h(x,R,S){return{x:s[x].cart2d[R],y:s[x].cart2d[S]}}if(this.stickerOnDown!==-1)return;const a=h(0,0,1),f=h(i.layers*(i.layers-1),6,7),d=h(i.layers-1,2,3),y=h(c(i.layers)-1,4,5),p=h(i.layers*(i.layers+1)-1,0,1),u=h(c(i.layers)*2-1,2,3);l>a.y&&o>a.x&&o<f.x?i.cubeRotate(0,!0):o<a.x&&l>d.y&&l<a.y?i.cubeRotate(2,!1):o>f.x&&l>y.y&&l<f.y?i.cubeRotate(2,!0):o<p.x&&l>p.y&&l<d.y?i.cubeRotate(1,!0):o>u.x&&l>u.y&&l<y.y?i.cubeRotate(1,!1):l<p.y&&o>p.x&&o<u.x&&i.cubeRotate(0,!1)}onPointerMove(t,n){this.numOfPointerMoves++,this.xOnMove=t,this.yOnMove=n}onPointerUp(t,n){if(this.numOfPointerMoves<2)return;let r,i;if(this.stickerOnDown!==-1&&(r=it(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),i=it(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),r<0)){const h=r;r=i,i=h}const s=ut(this.xOnMove,t.clientWidth),o=pt(this.yOnMove,t.clientHeight),l=it(s,o,this.xOnDown,this.yOnDown);n.stickerIsOnFace(this.stickerOnDown,0)?s===this.xOnDown?n.turn(0,st(n,this.stickerOnDown),o>this.yOnDown):l>r?n.turn(0,st(n,this.stickerOnDown),s>this.xOnDown):l<i?n.turn(0,st(n,this.stickerOnDown),s<this.xOnDown):n.turn(2,Jt(n,this.stickerOnDown),s>this.xOnDown):n.stickerIsOnFace(this.stickerOnDown,1)&&(s===this.xOnDown?n.turn(0,ot(n,this.stickerOnDown),o>this.yOnDown):l>r?n.turn(0,ot(n,this.stickerOnDown),s>this.xOnDown):l<i?n.turn(0,ot(n,this.stickerOnDown),s<this.xOnDown):n.turn(1,Zt(n,this.stickerOnDown),s<this.xOnDown))}_coordinatesToSticker(t,n,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const l=i[o].cart2d,h=G(l[0],l[1],l[2],l[3],l[4],l[5])+G(l[0],l[1],l[4],l[5],l[6],l[7]),a=G(t,n,l[0],l[1],l[2],l[3])+G(t,n,l[2],l[3],l[4],l[5])+G(t,n,l[4],l[5],l[6],l[7])+G(t,n,l[6],l[7],l[0],l[1]),f=1e-5;if(Math.abs(h-a)<f)return[o,l]};for(let o=0;o<2*c(r.layers);o++){const l=s(o);if(l)return l}return[-1,void 0]}}function J(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function te(e,t,n,r,i){const s=1/Math.tan(t/2);if(e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){const o=1/(r-i);e[10]=(i+r)*o,e[14]=2*i*r*o}else e[10]=-1,e[14]=-2*r;return e}function Z(e,t,n,r){let i=r[0],s=r[1],o=r[2],l=1/Math.hypot(i,s,o);i*=l,s*=l,o*=l;let h=Math.sin(n),a=Math.cos(n),f=1-a,d=t[0],y=t[1],p=t[2],u=t[3],x=t[4],R=t[5],S=t[6],W=t[7],v=t[8],A=t[9],M=t[10],Q=t[11],O=i*i*f+a,D=s*i*f+o*h,F=o*i*f-s*h,k=i*s*f-o*h,B=s*s*f+a,C=o*s*f+i*h,g=i*o*f+s*h,P=s*o*f-i*h,_=o*o*f+a;return e[0]=d*O+x*D+v*F,e[1]=y*O+R*D+A*F,e[2]=p*O+S*D+M*F,e[3]=u*O+W*D+Q*F,e[4]=d*k+x*B+v*C,e[5]=y*k+R*B+A*C,e[6]=p*k+S*B+M*C,e[7]=u*k+W*B+Q*C,e[8]=d*g+x*P+v*_,e[9]=y*g+R*P+A*_,e[10]=p*g+S*P+M*_,e[11]=u*g+W*P+Q*_,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}function ee(e,t){let n=t[0],r=t[1],i=t[2];return e[12]+=e[0]*n+e[4]*r+e[7]*i,e[13]+=e[1]*n+e[5]*r+e[8]*i,e[14]+=e[2]*n+e[5]*r+e[9]*i,e[15]+=e[3]*n+e[6]*r+e[10]*i,e}function mt(){let e;return t=>(e||(e=t()),e)}const ne=100,re=15;class ie{constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(t){const n=-ne*(this.position-this.target),r=-re*this._velocity;this._acceleration=n+r,this._velocity+=this._acceleration*t,this.position+=this._velocity*t}}let w=se(),m=oe(w),K=le(m);function se(){const e=document.createElement("canvas");return e.style.position="fixed",e.style.display="block",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.zIndex="-1",document.body.appendChild(e),document.addEventListener("keydown",t=>{b.forEach(n=>{n.enableKey(t)&&n.cube.matchKeyToTurn(t)})}),e}function oe(e){return e.getContext("webgl")}function le(e){const r=ye(e,`
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
    `);return e.useProgram(r),{attribLocations:{vertexPosition:e.getAttribLocation(r,"aVertexPosition"),vertexColor:e.getAttribLocation(r,"aVertexColor")},uniformLocations:{transformMatrix:e.getUniformLocation(r,"uTransformMatrix"),rotateMatrix:e.getUniformLocation(r,"uRotateMatrix")}}}let b=[],gt=[],Tt=Date.now()*.001,xt=!1;function ae(){xt||(xt=!0,requestAnimationFrame(St))}function he(e,t=3){let n=fe(e),r=new $t(m,n);r.setNumOfLayers(t);let i=new ie,s=new bt,o={cube:r,dragEnabled:!0,enableKey:h=>!0},l={cube:r,div:e,spring:i};return de(e,s,o),b.push(o),gt.push(l),ae(),o}function fe(e){let t=J();return te(t,50*Math.PI/180,e.clientWidth/e.clientHeight,.1,100),ee(t,[0,0,-5]),Z(t,t,45*Math.PI/180,[1,0,0]),Z(t,t,0,[0,-1,0]),t}function de(e,t,n){const r=(a,f)=>{n.dragEnabled&&t.onPointerDown(a,f,e,n.cube)},i=(a,f)=>{n.dragEnabled&&t.onPointerMove(a,f)},s=()=>{n.dragEnabled&&t.onPointerUp(e,n.cube)},o=a=>{const f=a.target.getBoundingClientRect(),d=a.touches[0].pageX-f.left,y=a.touches[0].pageY-f.top;return{x:d,y}},l=()=>{e.addEventListener("pointerdown",a=>r(a.offsetX,a.offsetY)),e.addEventListener("pointermove",a=>i(a.offsetX,a.offsetY)),e.addEventListener("pointerup",()=>s())},h=()=>{e.addEventListener("touchstart",a=>{const{x:f,y:d}=o(a);r(f,d)}),e.addEventListener("touchmove",a=>{const{x:f,y:d}=o(a);i(f,d)}),e.addEventListener("touchend",()=>{s()})};window.PointerEvent?l():h(),e.style.touchAction="none"}function lt(e,t,n){n.bindBuffer(n.ARRAY_BUFFER,e),n.vertexAttribPointer(t.attribLocations.vertexPosition,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(t.attribLocations.vertexPosition)}function at(e,t,n){n.bindBuffer(n.ARRAY_BUFFER,e),n.vertexAttribPointer(t.attribLocations.vertexColor,4,n.FLOAT,!1,0,0),n.enableVertexAttribArray(t.attribLocations.vertexColor)}function ht(e){e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}function ye(e,t,n){const r=Rt(e,e.VERTEX_SHADER,t),i=Rt(e,e.FRAGMENT_SHADER,n),s=e.createProgram();return e.attachShader(s,r),e.attachShader(s,i),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),null)}function Rt(e,t,n){const r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)}function ce(){const e=w.clientWidth,t=w.clientHeight,n=w.width!==e||w.height!==t;return n&&(w.width=e,w.height=t),n}function St(e){e*=.001;const t=e-Tt;Tt=e,ce(),m.enable(m.DEPTH_TEST),m.enable(m.SCISSOR_TEST),m.depthFunc(m.LEQUAL),m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT);for(let n=0;n<b.length;n++){const{cube:r,div:i,spring:s}=gt[n],o=i.getBoundingClientRect();if(o.bottom<0||o.top>w.clientHeight||o.right<0||o.left>w.clientWidth)continue;const l=o.right-o.left,h=o.bottom-o.top,a=o.left,f=w.clientHeight-o.bottom;m.viewport(a,f,l,h),m.scissor(a,f,l,h),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(t),s.position>=90&&(r.affectedStickers=Array(E(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const d=r.animationQueue[0];let y=ue(r),p=mt(),u=mt();for(let x=0;x<E(r.layers);x++){let R=r.buffers[x];const S=d&&d.stickersToAnimate[x]?p(()=>Z(J(),r.perspectiveMatrix,s.position*Math.PI/180,d.axis)):r.perspectiveMatrix;m.uniformMatrix4fv(K.uniformLocations.transformMatrix,!1,S);const W=d&&d.stickersToAnimate[x]?u(()=>{const v=J();return Z(v,v,s.position*Math.PI/180,d.axis)}):J();m.uniformMatrix4fv(K.uniformLocations.rotateMatrix,!1,W),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,R.indexBuffer),lt(R.positionBuffer,K,m),at(y[x].buffer,K,m),ht(m),lt(R.noGapPositionBuffer,K,m),at(r.underStickers[x].buffer,K,m),ht(m),lt(R.hintPositionBuffer,K,m),at(y[x].buffer,K,m),ht(m)}}requestAnimationFrame(St)}function ue(e){return e.animationQueue[0]?e.animationQueue[0].stickers:e.stickers}const pe=document.querySelector("#scenesContainer");vt(3);for(let e=1;e<10;e++)vt(e);function vt(e){let t=document.createElement("div");t.style.width="320px",t.style.height="320px",t.style.minWidth="320px",t.style.minHeight="320px",t.style.borderRadius="8px",t.style.boxShadow="rgb(255 255 255 / 20%) 0 4px 12px",pe.appendChild(t);const n=he(t,e);return n.enableKey=r=>!1,t.addEventListener("click",()=>{b.forEach(r=>r.enableKey=i=>!1),n.enableKey=r=>!0}),n}