(this["webpackJsonpstop-watch"]=this["webpackJsonpstop-watch"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},8:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(1),o=n.n(s),u=(n(8),0),l=!1;function i(e){function t(e){return("00"+e).slice(-2)}var n=e%100,a=(e=(e-n)/100)%60,c=(e=(e-a)/60)%60;return t((e-c)/60)+":"+t(c)+":"+t(a)+":"+t(n)}function m(e){switch(e){case"start":l||(a=setInterval((function(){o.a.render(i(u),document.getElementById("time")),u++}),10));break;case"pause":l&&clearInterval(a);break;case"reset":u=0}}function d(){m("start"),l=!0}function b(){m("pause"),l=!1}function p(){m("reset"),o.a.render(i(u),document.getElementById("time"))}var E=function(){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"stopwatch"},r.a.createElement("div",{className:"number-box"},r.a.createElement("h1",{id:"time"},"00:00:00:00")),r.a.createElement("div",{className:"button-align"},r.a.createElement("button",{className:"start button",onClick:d},"Start"),r.a.createElement("button",{className:"pause button",onClick:b},"Pause"),r.a.createElement("button",{className:"reset button",onClick:p},"Reset"))))};o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.fd8b7ad8.chunk.js.map