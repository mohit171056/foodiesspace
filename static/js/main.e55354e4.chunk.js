(this["webpackJsonpsmall-shopping-cart"]=this["webpackJsonpsmall-shopping-cart"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c.n(n),i=c(28),r=c.n(i),a=(c(37),c(16)),o=c(17),d=c(14),j=c(3);function l(e){return Object(j.jsxs)("header",{className:"block row center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("h1",{children:"Small Shopping Cart"})})}),Object(j.jsx)("span",{}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("a",{href:"#/cart",children:["Cart"," ",e.countCartItems?Object(j.jsx)("button",{className:"badge",children:e.countCartItems}):""]})," ",Object(j.jsx)("a",{href:"/signin",children:" SignIn"})]})]})}function m(e){var t=e.product,c=e.onAdd;return Object(j.jsxs)("div",{id:t.num,children:[Object(j.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(j.jsx)("h3",{children:t.name}),Object(j.jsxs)("div",{children:["\u20b9",t.price]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})})]})}c(39);function u(e){var t=e.products,c=e.onAdd;return Object(j.jsx)("div",{className:"mainarea",children:Object(j.jsxs)("main",{className:"block col-2 cards",children:[Object(j.jsx)("h2",{children:"Products"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"dropdown",children:[Object(j.jsx)("button",{class:"dropbtn",children:"Dropdown"}),Object(j.jsx)("div",{class:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("a",{href:"#"+e.id,children:e.name})}))})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"column",children:t.map((function(e){return Object(j.jsx)(m,{product:e,onAdd:c},e.id)}))})]})})}var h=c(30),b=c(31),p=(c(42),b.a.initializeApp({apiKey:"AIzaSyDNU3BYZFRURyRql296no2hvxOjpRk3QX8",authDomain:"foodiesspace.firebaseapp.com",projectId:"foodiesspace",storageBucket:"foodiesspace.appspot.com",messagingSenderId:"711227145368",appId:"1:711227145368:web:02c7cf87b2fb0e0df524ed"}).database().ref());function O(e){var t=Object(n.useRef)(),c=Object(h.useReactToPrint)({content:function(){return t.current},documentTitle:"emp-data",onAfterPrint:function(){return s.map((function(e){return p.child("foodiedb").push(e,(function(e){e?alert(e):alert("Date entered")}))}))}}),s=e.cartItems,i=e.onAdd,r=e.onRemove,a=s.reduce((function(e,t){return e+t.qty*t.price}),0),o=.14*a,d=a>2e3?0:20,l=a+o+d;return Object(j.jsxs)("aside",{className:"block col-1",children:[Object(j.jsxs)("h2",{children:["Cart Items",(new Date).toLocaleString()+""]}),Object(j.jsxs)("div",{ref:t,children:[0===s.length&&Object(j.jsx)("div",{children:"Cart is empty"}),s.map((function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:e.name}),Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsx)("button",{onClick:function(){return r(e)},className:"remove",children:"-"})," ",Object(j.jsx)("button",{onClick:function(){return i(e)},className:"add",children:"+"})]}),Object(j.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x \u20b9",e.price.toFixed(2)]})]},e.num)})),0!==s.length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:"Items Price"}),Object(j.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",a.toFixed(2)]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:"Tax Price"}),Object(j.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",o.toFixed(2)]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(j.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",d.toFixed(2)]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("strong",{children:"Total Price"})}),Object(j.jsx)("div",{className:"col-1 text-right",children:Object(j.jsxs)("strong",{children:["\u20b9",l.toFixed(2)]})})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{onClick:c,children:"Print this"})})]})]})]})}var x={products:[{num:"Atul",name:"MacBook",price:1400,image:"https://picsum.photos/id/180/2400/1600"},{num:"Honey",name:"Old Car",price:2400,image:"https://picsum.photos/id/111/4400/2656"},{num:"Local",name:"W Shoes",price:1e3,image:"https://picsum.photos/id/21/3008/2008"},{num:"4",name:"W Shoes",price:4e3,image:"https://picsum.photos/id/21/3008/2008"},{num:"5",name:"MacBook",price:1400,image:"https://picsum.photos/id/180/2400/1600"},{num:"6",name:"Old Car",price:2400,image:"https://picsum.photos/id/111/4400/2656"},{num:"7",name:"W Shoes",price:1e3,image:"https://picsum.photos/id/21/3008/2008"},{num:"8",name:"W Shoes",price:4e3,image:"https://picsum.photos/id/21/3008/2008"}]};var f=function(){var e=new Date,t=e.getDate()+"-"+parseInt(e.getMonth()+1)+"-"+e.getFullYear(),c=x.products,s=Object(n.useState)([]),i=Object(d.a)(s,2),r=i[0],m=i[1],h=function(e){var c=r.find((function(t){return t.num===e.num}));m(c?r.map((function(n){return n.num===e.num?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty+1,date:t}):n})):[].concat(Object(a.a)(r),[Object(o.a)(Object(o.a)({},e),{},{qty:1,date:t})]))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{countCartItems:r.length}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(u,{products:c,onAdd:h}),Object(j.jsx)(O,{cartItems:r,onAdd:h,onRemove:function(e){var c=r.find((function(t){return t.num===e.num}));1===c.qty?m(r.filter((function(t){return t.num!==e.num}))):m(r.map((function(n){return n.num===e.num?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty-1,date:t}):n})))}})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.e55354e4.chunk.js.map