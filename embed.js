//For embedding the js
(function(){var actors={};actors.actor_1={node:document.getElementById("SVG-Circus-a7c03235-effb-899d-f57d-59052b462ee6").getElementById("actor_1"),type:"circle",cx:50,cy:50,dx:25,dy:5,opacity:1};actors.actor_2={node:document.getElementById("SVG-Circus-a7c03235-effb-899d-f57d-59052b462ee6").getElementById("actor_2"),type:"circle",cx:50,cy:50,dx:50,dy:5,opacity:1};var tricks={};tricks.trick_1=(function(t,a){a=(function(n){return n})(a)%1,a=a*1%1,a=0>a?1+a:a;var M=a*1*360*Math.PI/180,i=t._tMatrix,_=Math.cos(M),c=Math.sin(M),x=-Math.sin(M),s=Math.cos(M),h=-t.cx*Math.cos(M)+t.cy*Math.sin(M)+t.cx,n=-t.cx*Math.sin(M)-t.cy*Math.cos(M)+t.cy,r=i[0]*_+i[2]*c,o=i[1]*_+i[3]*c,y=i[0]*x+i[2]*s,f=i[1]*x+i[3]*s,d=i[0]*h+i[2]*n+i[4],e=i[1]*h+i[3]*n+i[5];t._tMatrix[0]=r,t._tMatrix[1]=o,t._tMatrix[2]=y,t._tMatrix[3]=f,t._tMatrix[4]=d,t._tMatrix[5]=e});tricks.trick_2=(function(t,a){a=(function(n){return n})(a)%1,a=a*1%1,a=0>a?1+a:a;var M=a*-1*360*Math.PI/180,i=t._tMatrix,_=Math.cos(M),c=Math.sin(M),x=-Math.sin(M),s=Math.cos(M),h=-t.cx*Math.cos(M)+t.cy*Math.sin(M)+t.cx,n=-t.cx*Math.sin(M)-t.cy*Math.cos(M)+t.cy,r=i[0]*_+i[2]*c,o=i[1]*_+i[3]*c,y=i[0]*x+i[2]*s,f=i[1]*x+i[3]*s,d=i[0]*h+i[2]*n+i[4],e=i[1]*h+i[3]*n+i[5];t._tMatrix[0]=r,t._tMatrix[1]=o,t._tMatrix[2]=y,t._tMatrix[3]=f,t._tMatrix[4]=d,t._tMatrix[5]=e});var scenarios={};scenarios.scenario_1={actors: ["actor_1"],tricks: [{trick: "trick_2",start:0,end:1}],startAfter:0,duration:1000,actorDelay:0,repeat:0,repeatDelay:0};scenarios.scenario_2={actors: ["actor_2"],tricks: [{trick: "trick_1",start:0,end:1}],startAfter:0,duration:1000,actorDelay:0,repeat:0,repeatDelay:0};var _reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,fnTick=function(t){var r,a,i,e,n,o,s,c,m,f,d,k,w;for(c in actors)actors[c]._tMatrix=[1,0,0,1,0,0];for(s in scenarios)for(o=scenarios[s],m=t-o.startAfter,r=0,a=o.actors.length;a>r;r++){if(i=actors[o.actors[r]],i&&i.node&&i._tMatrix)for(f=0,m>=0&&(d=o.duration+o.repeatDelay,o.repeat>0&&m>d*o.repeat&&(f=1),f+=m%d/o.duration),e=0,n=o.tricks.length;n>e;e++)k=o.tricks[e],w=(f-k.start)*(1/(k.end-k.start)),tricks[k.trick]&&tricks[k.trick](i,Math.max(0,Math.min(1,w)));m-=o.actorDelay}for(c in actors)i=actors[c],i&&i.node&&i._tMatrix&&i.node.setAttribute("transform","matrix("+i._tMatrix.join()+")");_reqAnimFrame(fnTick)};_reqAnimFrame(fnTick);})();
