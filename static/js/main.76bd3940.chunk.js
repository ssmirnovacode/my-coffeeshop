(this["webpackJsonpmy-coffeeshop"]=this["webpackJsonpmy-coffeeshop"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),i=c(26),s=c.n(i),o=(c(46),c(8)),d=c(9),l=c(15),u=c(14),j=(c(47),c(20)),b=(c(48),c(3)),m="/my-coffeeshop",O=c(17),h=c.n(O),f=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).toggleMenu=function(){document.querySelector(".nav_menu_sidebar").classList.contains("active")?document.querySelector(".nav_menu_sidebar").classList.remove("active"):document.querySelector(".nav_menu_sidebar").classList.add("active")},n.animatedScroll=function(){},n.toggleMenu=n.toggleMenu.bind(Object(j.a)(n)),n.animatedScroll=n.animatedScroll.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"nav_burger",onClick:this.toggleMenu,children:"\u2261"}),Object(n.jsxs)("ul",{className:"nav_menu",children:[Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"".concat(m,"/"),children:Object(n.jsx)("span",{children:"MY COFFEESHOP"})})}),Object(n.jsx)("li",{onClick:function(){return h()(500)},children:"OUR BEVERAGES"}),Object(n.jsx)("li",{onClick:function(){return h()(1e3)},children:"CHOOSE YOUR DRINK"}),Object(n.jsx)("li",{onClick:function(){return h()(1900)},children:"GIFTSET"}),Object(n.jsx)("li",{onClick:function(){return h()(2600)},children:"OUR PASTRY"})]}),Object(n.jsxs)("ul",{className:"nav_menu_sidebar",children:[Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"".concat(m,"/"),onClick:this.toggleMenu,children:Object(n.jsx)("span",{children:"MY COFFEESHOP"})})}),Object(n.jsx)("li",{onClick:function(){h()(500),e.toggleMenu()},children:"OUR BEVERAGES"}),Object(n.jsx)("li",{onClick:function(){h()(1500),e.toggleMenu()},children:"CHOOSE YOUR DRINK"}),Object(n.jsx)("li",{onClick:function(){h()(2800),e.toggleMenu()},children:"GIFTSET"}),Object(n.jsx)("li",{onClick:function(){h()(3500),e.toggleMenu()},children:"OUR PASTRY"})]})]})}}]),c}(r.Component),p=c.p+"static/media/shopping-cart-solid.f0d47d21.svg",v=c(7),x=c(5),g=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=0;this.props.cart.forEach((function(t){e+=t.price*t.qty})),console.log(this.props.location);var t="/my-coffeeshop/cart"!==this.props.location.pathname&&"/my-coffeeshop/order"!==this.props.location.pathname&&"/my-coffeeshop/thank-you"!==this.props.location.pathname&&"/my-coffeeshop/item-detail"!==this.props.location.pathname.substring(0,26)?Object(n.jsx)(f,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.b,{className:"homelink",to:"".concat(m,"/"),children:Object(n.jsx)("span",{children:"MY COFFEESHOP"})}),Object(n.jsxs)(b.b,{className:"homeicon",to:"".concat(m,"/"),children:[Object(n.jsx)("i",{className:"fa fa-home","aria-hidden":"true"})," "]})]}),c="/my-coffeeshop/cart"!==this.props.location.pathname&&"/my-coffeeshop/order"!==this.props.location.pathname&&"/my-coffeeshop/thank-you"!==this.props.location.pathname?Object(n.jsx)("div",{className:"cart",children:Object(n.jsxs)(b.b,{to:"".concat(m,"/cart"),children:[Object(n.jsx)("img",{className:"cart_image",src:p,alt:"cart"}),Object(n.jsxs)("div",{className:"cart__total",children:["Total: ",e," $"]})]})}):null;return Object(n.jsxs)("div",{className:"home_container",id:"home",children:[Object(n.jsx)("div",{className:"left block",children:Object(n.jsxs)("div",{className:"moto",children:["YOUR ",Object(n.jsx)("span",{children:"PERSONALIZED"})," COFFEE"]})}),Object(n.jsx)("div",{className:"home-image"}),Object(n.jsxs)("div",{className:"right block",children:[c,Object(n.jsx)("div",{className:"navigation",children:t}),Object(n.jsx)("div",{className:"up",onClick:function(){return h()(document.querySelector("#home"))},children:" \u2191 "})]})]})}}]),c}(r.Component),_=Object(x.e)(Object(v.b)((function(e){return{cart:e.cart}}))(g)),E=(c(53),c(54),function(e){var t=e.item,c=t.title,r=t.image,a=t.text;return Object(n.jsxs)("div",{className:"beverage-item_container",children:[Object(n.jsx)("div",{className:"beverage-item beverage-item_img",children:Object(n.jsx)("img",{src:r,alt:c})}),Object(n.jsx)("div",{className:"beverage-item beverage-item_title",children:c}),Object(n.jsx)("div",{className:"beverage-item beverage-item_text",children:a})]})}),y=(c(55),function(e){var t=e.small,c=e.big;e.id;return Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsx)("div",{className:"heading_small",children:t}),Object(n.jsx)("div",{className:"heading_big",children:c})]})}),N="https://my-json-server.typicode.com/ssmirnovacode/db.json-my-coffeeshop/",T=c(23),C=c.n(T),R=c(31),I=function(){function e(){Object(o.a)(this,e)}return Object(d.a)(e,[{key:"getMenuItems",value:function(){var e=Object(R.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Cound not fetch ".concat(t,", status: ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postMenuItems",value:function(){var e=Object(R.a)(C.a.mark((function e(t,c){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOrderNumber();case 2:return n=e.sent,r={id:n,order:c},e.next=6,fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Cound not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"getOrderNumber",value:function(){var e=Object(R.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMenuItems(N+"orders");case 2:return t=e.sent,c=t.length+1,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),S=(c(57),function(){return Object(n.jsx)("div",{className:"loader",children:"Loading..."})}),k=(c(58),function(){return Object(n.jsx)("div",{className:"error"})}),D=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.beveragesRequested(),(new I).getMenuItems(N+"beverages").then((function(t){return e.props.beveragesLoaded(t)})).catch((function(){return e.props.beveragesError()}))}},{key:"render",value:function(){var e=this.props,t=e.beverages,c=e.loading,r=e.error;return c?Object(n.jsx)(S,{}):r?Object(n.jsx)(k,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(y,{small:"Your Personalized Coffee",big:"COFFEE BUILD YOUR BASE",id:"beverages"}),Object(n.jsx)("div",{className:"beverages_container",children:t.map((function(e){return Object(n.jsx)(E,{item:e},e.id)}))})]})}}]),c}(r.Component),M={beveragesLoaded:function(e){return{type:"BEVERAGES_LOADED",payload:e}},beveragesRequested:function(){return{type:"BEVERAGES_REQUESTED"}},beveragesError:function(){return{type:"BEVERAGES_ERROR"}}},A=Object(v.b)((function(e){return{beverages:e.beverages,loading:e.loading,error:e.error}}),M)(D),L=(c(59),c(60),function(e,t,c){var n=c.target.getAttribute("data-id"),r=document.querySelectorAll(e),a=document.querySelectorAll(t);r.forEach((function(e){e.getAttribute("data-id")===n&&e.classList.add("hidden")})),a.forEach((function(e){if(e.getAttribute("data-id")===n){e.classList.remove("hidden"),e.addEventListener("click",(function(){r.forEach((function(e){e.classList.remove("hidden")})),a.forEach((function(e){e.classList.add("hidden")}))}));var t=document.createElement("div");t.innerHTML="Added to cart",t.classList.add("message"),e.parentNode.appendChild(t),setTimeout((function(){t.remove()}),1500)}}))}),w=function(e){var t=e.item,c=e.addToCart,r=t.image,a=t.price,i=t.title,s=t.content,o=t.id;return Object(n.jsxs)("div",{className:"menu-item_container",children:[Object(n.jsx)("div",{className:"menu-item_img",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:Object(n.jsx)("img",{src:r,alt:i})})}),Object(n.jsxs)("div",{className:"menu-item_price",children:[a," $"]}),Object(n.jsx)("div",{className:"menu-item_title",children:i}),Object(n.jsx)("div",{className:"menu-item_content",children:s}),Object(n.jsx)("button",{className:"menu-item_btn","data-id":o,onClick:function(e){c(),L(".menu-item_btn",".menu-item_btn_viewcart",e)},children:"ADD TO CART"}),Object(n.jsx)(b.b,{to:"".concat(m,"/cart"),className:"menu-item_btn_viewcart hidden","data-id":o,children:"VIEW CART"}),Object(n.jsx)("div",{className:"menu-item_details",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:"Details"})}),Object(n.jsx)("br",{})]})},F=function(e){return{type:"ADD_TO_CART",payload:e}},q=new I,U=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).showMore=function(){q.getMenuItems(N+"menuItems").then((function(e){return n.props.menuItemsLoaded(e)})).catch((function(){return n.props.menuItemsError()})).finally((function(){return document.querySelector(".menu_more").remove()}))},n.showMore=n.showMore.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.menuItemsRequested(),q.getMenuItems(N+"menuItems").then((function(e){return e.filter((function(e,t){return t<4}))})).then((function(t){return e.props.menuItemsLoaded(t)})).catch((function(){return e.props.menuItemsError()}))}},{key:"render",value:function(){var e=this,t=this.props,c=t.menuItems,r=t.loading,a=t.error;return r?Object(n.jsx)(S,{}):a?Object(n.jsx)(k,{}):Object(n.jsxs)("section",{className:"menu",children:[Object(n.jsx)(y,{small:"Choose Your Drink",big:"ORDER ONLINE AND SKIP THE LINE",id:"menu"}),Object(n.jsxs)("div",{className:"menu_container",children:[Object(n.jsx)("div",{className:"bg-menu"}),c.map((function(t,c){return Object(n.jsx)(w,{item:t,addToCart:function(){return e.props.addToCart(t)}},c)}))]}),Object(n.jsx)("div",{className:"menu_more",onClick:this.showMore,children:"View more"})]})}}]),c}(r.Component),B={menuItemsLoaded:function(e){return{type:"MENU_ITEMS_LOADED",payload:e}},menuItemsRequested:function(){return{type:"MENU_ITEMS_REQUESTED"}},menuItemsError:function(){return{type:"MENU_ITEMS_ERROR"}},addToCart:F},G=Object(v.b)((function(e){return{menuItems:e.menuItems,loading:e.loading,error:e.error}}),B)(U),Y=(c(61),c(62),function(e){var t=e.item,c=e.addToCart,r=t.title,a=t.image,i=t.price,s=t.content,o=t.id;return Object(n.jsxs)("div",{className:"giftset_item",children:[Object(n.jsx)("div",{className:"giftset_img",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:Object(n.jsx)("img",{src:a,alt:r})})}),Object(n.jsxs)("div",{className:"giftset_content",children:[Object(n.jsxs)("div",{className:"giftset_price",children:[i," $"]}),Object(n.jsx)("div",{className:"giftset_title",children:r}),Object(n.jsx)("div",{className:"giftset_text",children:s}),Object(n.jsx)("button",{className:"giftset_btn","data-id":o,onClick:function(e){c(),L(".giftset_btn",".giftset_btn_viewcart",e)},children:"ADD TO CART"}),Object(n.jsx)(b.b,{to:"".concat(m,"/cart"),className:"giftset_btn_viewcart hidden","data-id":o,children:"VIEW CART"}),Object(n.jsx)("div",{className:"giftset_details",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:"Details"})}),Object(n.jsx)("br",{})]})]})}),P=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).activateTab=n.activateTab.bind(Object(j.a)(n)),n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.giftsetRequested(),(new I).getMenuItems(N+"giftset").then((function(t){return e.props.giftsetLoaded(t)})).catch((function(){return e.props.giftsetError()}))}},{key:"activateTab",value:function(e){e.target.parentNode.childNodes.forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active")}},{key:"render",value:function(){var e=this,t=this.props,c=t.giftset,r=t.loading,a=t.error;return r?Object(n.jsx)(S,{}):a?Object(n.jsx)(k,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(y,{small:"Best Gift For Best Friend",big:"GIFTSET",id:"giftset"}),Object(n.jsxs)("div",{className:"giftset_container",children:[Object(n.jsx)("div",{className:"bg-giftset"}),c.items.map((function(t){return t.id===c.activeItemId?Object(n.jsx)(Y,{item:t,addToCart:function(){return e.props.addToCart(t)}},t.id):null})),Object(n.jsx)("div",{className:"giftset_tabs",children:c.items.map((function(t,r){return c.activeItemId===t.id?Object(n.jsx)("div",{className:"giftset_tabs_item active",onClick:function(c){e.props.giftsetTabClick(t.id),e.showContent(c)},children:r+1},t.id):Object(n.jsx)("div",{className:"giftset_tabs_item",onClick:function(c){e.props.giftsetTabClick(t.id),e.activateTab(c)},children:r+1},t.id)}))})]})]})}}]),c}(r.Component),Q={giftsetLoaded:function(e){return{type:"GIFTSET_LOADED",payload:e}},giftsetRequested:function(){return{type:"GIFTSET_REQUESTED"}},giftsetError:function(){return{type:"GIFTSET_ERROR"}},giftsetTabClick:function(e){return{type:"GIFTSET_TAB_CLICK",payload:e}},addToCart:F},V=Object(v.b)((function(e){return{giftset:e.giftset,loading:e.loading,error:e.error}}),Q)(P),H=(c(63),c(64),function(e){var t=e.item,c=e.addToCart,r=t.title,a=t.image,i=t.price,s=t.content,o=t.id;return Object(n.jsxs)("div",{className:"combo-item_container",children:[Object(n.jsx)("div",{className:"combo-item_img",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:Object(n.jsx)("img",{src:a,alt:r})})}),Object(n.jsx)("div",{className:"combo-item_title",children:r}),Object(n.jsxs)("div",{className:"combo-item_price",children:[i," $",Object(n.jsx)("span",{children:"6.00 $"})]}),"  ",Object(n.jsx)("div",{className:"combo-item_content",children:s}),Object(n.jsx)("button",{className:"combo-item_btn","data-id":o,onClick:function(e){c(),L(".combo-item_btn",".combo-item_btn_viewcart",e)},children:"ADD TO CART"}),Object(n.jsx)(b.b,{to:"".concat(m,"/cart"),className:"combo-item_btn_viewcart hidden","data-id":o,children:"VIEW CART"}),Object(n.jsx)("div",{className:"combo-item_details",children:Object(n.jsx)(b.b,{to:"".concat(m,"/item-detail/").concat(o),children:"Details"})}),Object(n.jsx)("br",{})]})}),$=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.combosRequested(),(new I).getMenuItems(N+"combos").then((function(t){return e.props.combosLoaded(t)})).catch((function(){return e.props.combosError}))}},{key:"render",value:function(){var e=this,t=this.props,c=t.combos,r=t.loading,a=t.error;return r?Object(n.jsx)(S,{}):a?Object(n.jsx)(k,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(y,{small:"Our artesan pastry",big:"ORGANIC INGREDIENTS ONLY",id:"combo"}),Object(n.jsxs)("div",{className:"combo_container",children:[Object(n.jsx)("div",{className:"bg-combo"}),c.map((function(t){return Object(n.jsx)(H,{item:t,addToCart:function(){return e.props.addToCart(t)}},t.id)}))]})]})}}]),c}(r.Component),W={combosLoaded:function(e){return{type:"COMBOS_LOADED",payload:e}},combosRequested:function(){return{type:"COMBOS_REQUESTED"}},combosError:function(){return{type:"COMBOS_ERROR"}},addToCart:F},K=Object(v.b)((function(e){return{combos:e.combos,loading:e.loading,error:e.error}}),W)($),J=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(G,{}),Object(n.jsx)(V,{}),Object(n.jsx)(K,{})]})},z=(c(65),function(){return Object(n.jsxs)("footer",{className:"footer_container",children:[Object(n.jsxs)("address",{children:["Avda Europa, 15,",Object(n.jsx)("br",{}),"43400, Barcelona",Object(n.jsx)("br",{}),"SPAIN"]}),Object(n.jsxs)("div",{className:"footer_contact",children:[Object(n.jsx)("span",{children:"Contact us:"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"mailto:contact@mycoffeeshop.com",children:"contact@mycoffeeshop.com"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Tel:"})," +34 111 222 333"]})]})}),Z=c(18),X=(c(66),{addToCart:F}),ee=Object(v.b)((function(e){return{menuItems:e.menuItems,combos:e.combos,giftset:e.giftset}}),X)((function(e){var t=e.itemId,c=[].concat(Object(Z.a)(e.menuItems),Object(Z.a)(e.combos),Object(Z.a)(e.giftset.items)).filter((function(e){return e.id===t}))[0],r=c.id,a=c.image,i=c.title,s=c.price,o=c.content;return Object(n.jsxs)("div",{className:"item-detail_container",children:[Object(n.jsx)("div",{className:"item-detail_img",children:Object(n.jsx)("img",{src:a,alt:i})}),Object(n.jsxs)("div",{className:"item-detail_content",children:[Object(n.jsx)("div",{className:"item-detail_title",children:i}),Object(n.jsxs)("div",{className:"item-detail_price",children:[s," $"]}),Object(n.jsx)("div",{className:"item-detail_text",children:o})]}),Object(n.jsx)("button",{className:"item-detail_btn","data-id":r,onClick:function(t){e.addToCart(c),L(".item-detail_btn",".item-detail_btn_viewcart",t)},children:"ADD TO CART"}),Object(n.jsx)(b.b,{to:"".concat(m,"/cart"),className:"item-detail_btn_viewcart hidden","data-id":r,children:"VIEW CART"}),Object(n.jsx)(b.b,{to:"".concat(m,"/"),className:"item-detail_back",children:"Back"}),Object(n.jsx)("br",{})]})})),te=(c(67),{deleteFromCart:function(e){return{type:"DELETE_FROM_CART",payload:e}},plusQty:function(e){return{type:"PLUS_QTY",payload:e}},minusQty:function(e){return{type:"MINUS_QTY",payload:e}}}),ce=Object(v.b)((function(e){return{cart:e.cart}}),te)((function(e){var t=0;e.cart.forEach((function(e){t+=e.price*e.qty}));var c=0!==t?Object(n.jsx)(b.b,{className:"cart_btn",to:"".concat(m,"/order"),children:"Order ONLINE"}):null;return Object(n.jsxs)("div",{className:"cart_container",children:[Object(n.jsx)("div",{className:"cart_title",children:"Items in your cart:"}),Object(n.jsx)("div",{className:"cart_list",children:e.cart.map((function(t){return Object(n.jsxs)("div",{className:"cart_item",children:[Object(n.jsx)("div",{className:"cart_item_title",children:t.title}),Object(n.jsxs)("div",{className:"cart_item_price",children:["Price: ",t.price," $"]}),Object(n.jsx)("div",{onClick:function(){return e.deleteFromCart(t.id)},className:"cart_item_delete",children:Object(n.jsx)("i",{className:"fa fa-trash-o"})}),Object(n.jsx)("div",{className:"cart_item_img",children:Object(n.jsx)("img",{src:t.image,alt:t.title})}),Object(n.jsxs)("div",{className:"cart_item_qty",children:["Quantity: ",Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"minus",onClick:function(){return e.minusQty(t.id)},children:"  -  "}),t.qty,Object(n.jsx)("button",{className:"plus",onClick:function(){return e.plusQty(t.id)},children:" + "})]})]},t.id)}))}),Object(n.jsxs)("div",{className:"cart_total",children:["Total: ",t," $"]}),c,Object(n.jsx)("div",{className:"cart_continue",children:Object(n.jsx)(b.b,{to:"".concat(m,"/"),children:"Continue shopping"})})]})})),ne=(c(68),c(40)),re=function(e){var t=document.createElement("div");t.classList.add("fail"),t.innerHTML="Cart is empty",document.querySelector(e).parentNode.appendChild(t),setTimeout((function(){t.remove()}),1500)},ae={clearCart:function(){return{type:"CLEAR_CART"}},orderSubmitted:function(e){return{type:"ORDER_SUBMITTED",payload:e}},orderError:function(){return{type:"ORDER_ERROR"}}},ie=Object(v.b)((function(e){return{cart:e.cart,order:e.order}}),ae)((function(e){var t=Object(ne.a)({initialValues:{firstname:"",tel:""},onSubmit:function(t,c){var n=c.resetForm;if(e.cart.length>0){t.items=e.cart.map((function(e){return{id:e.id,title:e.title,qty:e.qty}}));var r=new I;r.postMenuItems("https://my-json-server.typicode.com/ssmirnovacode/db.json-my-coffeeshop/orders",t).then((function(t){return e.orderSubmitted(t)})).then((function(e){return console.log(e)})).catch((function(){return e.orderError()})).finally((function(){n(),e.clearCart(),e.history.push("".concat(m,"/thank-you"))}))}else re(".order_back")}});return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(ce,{}),Object(n.jsxs)("div",{className:"order_container",children:[Object(n.jsx)("div",{className:"order_title",children:"Please fill in your data"}),Object(n.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(n.jsx)("div",{className:"order_form-field",children:Object(n.jsxs)("label",{children:["Name:",Object(n.jsx)("input",{required:!0,type:"text",id:"firstname",name:"firstname",placeholder:"Your Name",onChange:t.handleChange,value:t.values.firstname})]})}),Object(n.jsx)("div",{className:"order_form-field",children:Object(n.jsxs)("label",{children:["Phone number:",Object(n.jsx)("input",{required:!0,type:"text",id:"tel",name:"tel",placeholder:"Your phone number",onChange:t.handleChange,value:t.values.tel})]})}),Object(n.jsx)("p",{className:"order_instructions",children:"When your order is ready we will send you an SMS notification so you can pick up your order in our shop. No need to wait in the queue! Go straight to the register, pay for your order and pick it up."}),Object(n.jsx)("button",{className:"order_btn",type:"submit",children:"ORDER NOW"})]}),Object(n.jsx)("div",{className:"order_back",children:Object(n.jsx)(b.b,{to:"".concat(m,"/"),children:"Back to the store"})})]})]})})),se=(c(69),Object(v.b)((function(e){return{order:e.order}}))((function(e){var t=e.order.order.firstname;return setTimeout((function(){return e.history.push("".concat(m,"/"))}),5e3),Object(n.jsxs)("div",{className:"thank-you_container",children:[Object(n.jsxs)("div",{className:"thank-you_title",children:["Thank you for your order, ",Object(n.jsx)("span",{children:t}),"!"]}),Object(n.jsxs)("p",{className:"thank-you_text",children:["Your order # ",Object(n.jsx)("span",{children:e.order.id})," has been submitted successfully. When it\xb4s ready to be picked up, we will notify you by SMS. Remember, you can skip the line and go straight to the register to pay and pick up your coffee."]}),Object(n.jsx)(b.b,{className:"thank-you_back",to:"".concat(m,"/"),children:"Back to the store"})]})}))),oe=(c(70),function(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"app_container",children:[Object(n.jsx)(_,{}),Object(n.jsx)(x.a,{path:"".concat(m,"/"),exact:!0,component:J}),Object(n.jsx)(x.a,{path:"".concat(m,"/cart"),component:ce}),Object(n.jsx)(x.a,{path:"".concat(m,"/item-detail/:id"),render:function(e){var t=e.match.params.id;return Object(n.jsx)(ee,{itemId:+t})}}),Object(n.jsx)(x.a,{path:"".concat(m,"/order"),component:ie}),Object(n.jsx)(x.a,{path:"".concat(m,"/thank-you"),component:se}),Object(n.jsx)(z,{})]})})}),de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},le=c(28),ue=c(2),je={beverages:[],combos:[],menuItems:[],giftset:{items:[],activeItemId:7},loading:!0,error:!1,cart:[],order:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BEVERAGES_LOADED":return Object(ue.a)(Object(ue.a)({},e),{},{beverages:t.payload,loading:!1});case"BEVERAGES_REQUESTED":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});case"BEVERAGES_ERROR":return Object(ue.a)(Object(ue.a)({},e),{},{error:!0});case"MENU_ITEMS_LOADED":return Object(ue.a)(Object(ue.a)({},e),{},{menuItems:t.payload,loading:!1});case"MENU_ITEMS_REQUESTED":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});case"MENU_ITEMS_ERROR":return Object(ue.a)(Object(ue.a)({},e),{},{error:!0});case"GIFTSET_LOADED":return Object(ue.a)(Object(ue.a)({},e),{},{giftset:{items:t.payload,activeItemId:e.giftset.activeItemId},loading:!1});case"GIFTSET_REQUESTED":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});case"GIFTSET_ERROR":return Object(ue.a)(Object(ue.a)({},e),{},{error:!0});case"GIFTSET_TAB_CLICK":return Object(ue.a)(Object(ue.a)({},e),{},{giftset:Object(ue.a)(Object(ue.a)({},e.giftset),{},{activeItemId:t.payload})});case"COMBOS_LOADED":return Object(ue.a)(Object(ue.a)({},e),{},{combos:t.payload,loading:!1});case"COMBOS_REQUESTED":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});case"COMBOS_ERROR":return Object(ue.a)(Object(ue.a)({},e),{},{error:!0});case"ADD_TO_CART":var c=t.payload;if(c.qty=1,e.cart.filter((function(e){return e.id===c.id}))[0]){var n=e.cart.findIndex((function(e){return e.id===c.id})),r=e.cart[n];return r.qty++,Object(ue.a)(Object(ue.a)({},e),{},{cart:[].concat(Object(Z.a)(e.cart.slice(0,n)),[r],Object(Z.a)(e.cart.slice(n+1)))})}return Object(ue.a)(Object(ue.a)({},e),{},{cart:[].concat(Object(Z.a)(e.cart),[c])});case"PLUS_QTY":return Object(ue.a)(Object(ue.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload?Object(ue.a)(Object(ue.a)({},e),{},{qty:e.qty+1}):e}))});case"MINUS_QTY":return Object(ue.a)(Object(ue.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload?Object(ue.a)(Object(ue.a)({},e),{},{qty:1!==e.qty?e.qty-1:1}):e}))});case"DELETE_FROM_CART":var a=t.payload,i=e.cart.findIndex((function(e){return e.id===a}));return Object(ue.a)(Object(ue.a)({},e),{},{cart:[].concat(Object(Z.a)(e.cart.slice(0,i)),Object(Z.a)(e.cart.slice(i+1)))});case"CLEAR_CART":return Object(ue.a)(Object(ue.a)({},e),{},{cart:[]});case"ORDER_SUBMITTED":return Object(ue.a)(Object(ue.a)({},e),{},{order:t.payload});case"ORDER_ERROR":return Object(ue.a)(Object(ue.a)({},e),{},{error:!0});default:return e}},me=Object(le.b)(be);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v.a,{store:me,children:Object(n.jsx)(oe,{})})}),document.getElementById("root")),de()}},[[71,1,2]]]);
//# sourceMappingURL=main.76bd3940.chunk.js.map