(this["webpackJsonpmy-coffeeshop"]=this["webpackJsonpmy-coffeeshop"]||[]).push([[0],Array(24).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(10),i=c.n(s),o=(c(24),c(3)),l=c(4),d=c(7),j=c(6),u=(c(25),c(8)),b=(c(26),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).toggleMenu=function(){document.querySelector(".nav_menu_sidebar").classList.contains("active")?document.querySelector(".nav_menu_sidebar").classList.remove("active"):document.querySelector(".nav_menu_sidebar").classList.add("active")},n.toggleMenu=n.toggleMenu.bind(Object(u.a)(n)),n}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"nav_burger",onClick:this.toggleMenu,children:"\u2630"}),Object(n.jsxs)("ul",{className:"nav_menu",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("span",{children:"MY COFFEESHOP"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#beverages",children:"OUR BEVERAGES"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#menu",children:"CHOOSE YOUR DRINK"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#giftset",children:"GIFTSET"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#combo",children:"OUR COMBOS"})})]}),Object(n.jsxs)("ul",{className:"nav_menu_sidebar",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("span",{children:"MY COFFEESHOP"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#beverages",children:"OUR BEVERAGES"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#menu",children:"CHOOSE YOUR DRINK"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#giftset",children:"GIFTSET"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#combo",children:"OUR COMBOS"})})]})]})}}]),c}(r.Component)),m=c.p+"static/media/shopping-cart-solid.f0d47d21.svg",O=c(5),h=function(e){return{type:"ADD_TO_CART",payload:e}},f=function(e){return{type:"DELETE_FROM_CART",payload:e}},g=function(){return{type:"TOGGLE_CART"}},p=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=0;return this.props.cart.items.forEach((function(t){e+=t.price*t.qty})),Object(n.jsxs)("div",{className:"home_container",children:[Object(n.jsx)("div",{className:"left block",children:Object(n.jsxs)("div",{className:"moto",children:["YOUR ",Object(n.jsx)("span",{children:"PERSONALIZED"})," COFFEE"]})}),Object(n.jsx)("div",{className:"home-image"}),Object(n.jsxs)("div",{className:"right block",children:[Object(n.jsxs)("div",{className:"cart",children:[Object(n.jsx)("img",{className:"cart_image",src:m,alt:"cart",onClick:this.props.toggleCart}),Object(n.jsxs)("div",{className:"cart_total",children:["Total: ",e," $"]})]}),Object(n.jsx)("div",{className:"navigation",children:Object(n.jsx)(b,{})})]})]})}}]),c}(r.Component),v={toggleCart:g},x=Object(O.b)((function(e){return{cart:e.cart}}),v)(p),_=(c(33),c(34),function(e){var t=e.item,c=t.title,r=t.image,a=t.text;return Object(n.jsxs)("div",{className:"beverage-item_container",children:[Object(n.jsx)("div",{className:"beverage-item beverage-item_img",children:Object(n.jsx)("img",{src:r,alt:c})}),Object(n.jsx)("div",{className:"beverage-item beverage-item_title",children:c}),Object(n.jsx)("div",{className:"beverage-item beverage-item_text",children:a})]})}),E=(c(35),function(e){var t=e.small,c=e.big,r=e.id;return Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsx)("a",{name:r}),Object(n.jsx)("div",{className:"heading_small",children:t}),Object(n.jsx)("div",{className:"heading_big",children:c})]})}),N="https://my-json-server.typicode.com/ssmirnovacode/db.json-my-coffeeshop",C=c(16),y=c.n(C),R=c(18),T=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getMenuItems",value:function(){var e=Object(R.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Cound not fetch ".concat(t,", status: ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),M=(c(37),function(){return Object(n.jsx)("div",{className:"loader",children:"Loading..."})}),D=(c(38),function(){return Object(n.jsx)("div",{className:"error"})}),S=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.beveragesRequested(),(new T).getMenuItems(N+"beverages").then((function(t){return e.props.beveragesLoaded(t)})).catch((function(){return e.props.beveragesError()}))}},{key:"render",value:function(){var e=this.props,t=e.beverages,c=e.loading,r=e.error;return c?Object(n.jsx)(M,{}):r?Object(n.jsx)(D,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(E,{small:"Your Personalized Coffee",big:"COFFEE BUILD YOUR BASE",id:"beverages"}),Object(n.jsx)("div",{className:"beverages_container",children:t.map((function(e){return Object(n.jsx)(_,{item:e},e.id)}))})]})}}]),c}(r.Component),I={beveragesLoaded:function(e){return{type:"BEVERAGES_LOADED",payload:e}},beveragesRequested:function(){return{type:"BEVERAGES_REQUESTED"}},beveragesError:function(){return{type:"BEVERAGES_ERROR"}}},k=Object(O.b)((function(e){return{beverages:e.beverages,loading:e.loading,error:e.error}}),I)(S),A=(c(39),c(40),function(e){var t=e.item,c=e.toggleModal,r=e.addToCart,a=t.image,s=t.price,i=t.title,o=t.content;return Object(n.jsxs)("div",{className:"menu-item_container",children:[Object(n.jsx)("div",{className:"menu-item_img",children:Object(n.jsx)("img",{src:a,alt:i})}),Object(n.jsxs)("div",{className:"menu-item_price",children:[s," $"]}),Object(n.jsx)("div",{className:"menu-item_title",children:i}),Object(n.jsx)("div",{className:"menu-item_content",children:o}),Object(n.jsx)("button",{className:"menu-item_btn",onClick:function(){return r()},children:"ADD To CART"}),Object(n.jsx)("div",{className:"menu-item_details",onClick:function(){return c(t)},children:"Details"})]})}),L=function(e){return{type:"TOGGLE_MODAL",payload:e}},F=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.menuItemsRequested(),(new T).getMenuItems(N+"menuItems").then((function(t){return e.props.menuItemsLoaded(t)})).catch((function(){return e.props.menuItemsError()}))}},{key:"render",value:function(){var e=this,t=this.props,c=t.menuItems,r=t.loading,a=t.error;return r?Object(n.jsx)(M,{}):a?Object(n.jsx)(D,{}):Object(n.jsxs)("section",{className:"stripe-left",children:[Object(n.jsx)(E,{small:"Choose Your Favorite",big:"ORDER YOUR DRINK ONLINE",id:"menu"}),Object(n.jsxs)("div",{className:"menu_container",children:[Object(n.jsx)("div",{className:"bg-menu"}),c.map((function(t){return Object(n.jsx)(A,{item:t,toggleModal:e.props.toggleModal,addToCart:function(){return e.props.addToCart(t)},deleteFromCart:function(){return f(t.id)}},t.id)}))]})]})}}]),c}(r.Component),w={menuItemsLoaded:function(e){return{type:"MENU_ITEMS_LOADED",payload:e}},menuItemsRequested:function(){return{type:"MENU_ITEMS_REQUESTED"}},menuItemsError:function(){return{type:"MENU_ITEMS_ERROR"}},toggleModal:L,addToCart:h,deleteFromCart:f},G=Object(O.b)((function(e){return{menuItems:e.menuItems,loading:e.loading,error:e.error}}),w)(F),B=(c(41),c(42),function(e){var t=e.item,c=e.toggleModal,r=e.addToCart,a=t.title,s=t.image,i=t.price,o=t.content;return Object(n.jsxs)("div",{className:"giftset_item",children:[Object(n.jsx)("div",{className:"giftset_img",children:Object(n.jsx)("img",{src:s,alt:a})}),Object(n.jsxs)("div",{className:"giftset_content",children:[Object(n.jsxs)("div",{className:"giftset_price",children:[i," $"]}),Object(n.jsx)("div",{className:"giftset_title",children:a}),Object(n.jsx)("div",{className:"giftset_text",children:o}),Object(n.jsx)("button",{className:"giftset_btn",onClick:function(){return r()},children:"ADD To CART"}),Object(n.jsx)("div",{className:"giftset_details",onClick:function(){return c(t)},children:"Details"})]})]})}),U=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={activeItem:{id:7,price:"6.00",title:"Chai with espresso",image:"https://d.radikal.ru/d16/2101/11/a47b4e47661d.png",content:"Two packs of tea and a mug. Two packs of tea and a mug.Two packs of tea and a mug."}},n.showContent=n.showContent.bind(Object(u.a)(n)),n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.giftsetRequested(),(new T).getMenuItems(N+"giftset").then((function(t){return e.props.giftsetLoaded(t)})).catch((function(){return e.props.giftsetError()}))}},{key:"showContent",value:function(e,t){var c=this.props.giftset.filter((function(e){return e.id===t}))[0];this.setState({activeItem:c}),e.target.parentNode.childNodes.forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active")}},{key:"render",value:function(){var e=this,t=this.props,c=(t.giftset,t.loading),r=t.error;return c?Object(n.jsx)(M,{}):r?Object(n.jsx)(D,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(E,{small:"Best Gift For Best Friend",big:"GIFTSET",id:"giftset"}),Object(n.jsxs)("div",{className:"giftset_container",children:[Object(n.jsx)("div",{className:"bg-giftset"}),Object(n.jsx)(B,{item:this.state.activeItem,toggleModal:this.props.toggleModal,addToCart:function(){return e.props.addToCart(e.state.activeItem)}}),Object(n.jsx)("div",{className:"giftset_tabs",children:this.props.giftset.map((function(t,c){return t.id===e.state.activeItem.id?Object(n.jsx)("div",{className:"giftset_tabs_item active",onClick:function(c,n){return e.showContent(c,t.id)},children:c},t.id):Object(n.jsx)("div",{className:"giftset_tabs_item",onClick:function(c,n){return e.showContent(c,t.id)},children:c},t.id)}))})]})]})}}]),c}(r.Component),q={giftsetLoaded:function(e){return{type:"GIFTSET_LOADED",payload:e}},giftsetRequested:function(){return{type:"GIFTSET_REQUESTED"}},giftsetError:function(){return{type:"GIFTSET_ERROR"}},toggleModal:L,addToCart:h},Y=Object(O.b)((function(e){return{giftset:e.giftset,loading:e.loading,error:e.error,modal:e.modal}}),q)(U),P=(c(43),c(44),function(e){var t=e.item,c=e.toggleModal,r=e.addToCart,a=t.title,s=t.image,i=t.price,o=t.content;return Object(n.jsxs)("div",{className:"combo-item_container",children:[Object(n.jsx)("div",{className:"combo-item_img",children:Object(n.jsx)("img",{src:s,alt:a})}),Object(n.jsxs)("div",{className:"combo-item_price",children:[i," $",Object(n.jsx)("span",{children:"6.00 $"})]}),"  ",Object(n.jsx)("div",{className:"combo-item_title",children:a}),Object(n.jsx)("div",{className:"combo-item_content",children:o}),Object(n.jsx)("button",{className:"combo-item_btn",onClick:function(){return r()},children:"ADD To CART"}),Object(n.jsx)("div",{className:"combo-item_details",onClick:function(){return c(t)},children:"Details"})]})}),Q=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.props.combosRequested(),(new T).getMenuItems(N+"combos").then((function(t){return e.props.combosLoaded(t)})).catch((function(){return e.props.combosError}))}},{key:"render",value:function(){var e=this,t=this.props,c=t.combos,r=t.loading,a=t.error;return r?Object(n.jsx)(M,{}):a?Object(n.jsx)(D,{}):Object(n.jsxs)("section",{children:[Object(n.jsx)(E,{small:"Your Personalized Coffee",big:"OUR COMBOS",id:"combo"}),Object(n.jsxs)("div",{className:"combo_container",children:[Object(n.jsx)("div",{className:"bg-combo"}),c.map((function(t){return Object(n.jsx)(P,{item:t,toggleModal:e.props.toggleModal,addToCart:function(){return e.props.addToCart(t)}},t.id)}))]})]})}}]),c}(r.Component),V={combosLoaded:function(e){return{type:"COMBOS_LOADED",payload:e}},combosRequested:function(){return{type:"COMBOS_REQUESTED"}},combosError:function(){return{type:"COMBOS_ERROR"}},toggleModal:L,addToCart:h},$=Object(O.b)((function(e){return{combos:e.combos,loading:e.loading,error:e.error,modal:e.modal}}),V)(Q),H=(c(45),function(){return Object(n.jsxs)("footer",{className:"footer_container",children:[Object(n.jsxs)("address",{children:["Avda Barcelona, 155,",Object(n.jsx)("br",{}),"195112, Barcelona",Object(n.jsx)("br",{}),"SPAIN"]}),Object(n.jsxs)("div",{className:"footer_contact",children:[Object(n.jsx)("span",{children:"Contact us:"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"mailto:admin@mycoffeeshop.com",children:"admin@mycoffeeshop.com"})]})]})}),K=(c(46),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this;if(this.props.modal.shown){var t=this.props.modal.item,c=t.title,r=t.price,a=t.image,s=t.content;return document.body.style.overflow="hidden",Object(n.jsx)("div",{className:"modal_container",onClick:function(t){if(t.target.classList.contains("modal_container"))return e.props.toggleModal()},children:Object(n.jsx)("div",{className:"modal_dialog",children:Object(n.jsxs)("div",{className:"modal_content",children:[Object(n.jsx)("div",{className:"modal_close",onClick:function(){return e.props.toggleModal()},children:"\xd7"}),Object(n.jsx)("div",{className:"modal_img",children:Object(n.jsx)("img",{src:a,alt:c})}),Object(n.jsx)("div",{className:"modal_title",children:c}),Object(n.jsxs)("div",{className:"modal_price",children:[r," $"]}),Object(n.jsx)("div",{className:"modal_text",children:s}),Object(n.jsx)("button",{className:"modal_btn",onClick:function(){return e.props.addToCart(e.props.modal.item)},children:"ADD To CART"})]})})})}return document.body.style.overflow="",Object(n.jsx)("div",{className:"hidden"})}}]),c}(r.Component)),z={toggleModal:L,addToCart:h},J=Object(O.b)((function(e){return{modal:e.modal}}),z)(K),Z=(c(47),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=0;return this.props.cart.items.forEach((function(e){t+=e.price*e.qty})),this.props.cart.visible?Object(n.jsx)("div",{className:"modal_container",onClick:function(t){if(t.target.classList.contains("modal_container"))return e.props.toggleCart()},children:Object(n.jsx)("div",{className:"modal_dialog",children:Object(n.jsxs)("div",{className:"modal_content",children:[Object(n.jsx)("div",{className:"modal_close",onClick:function(){return e.props.toggleCart()},children:"\xd7"})," ",Object(n.jsx)("div",{className:"modal_title",children:"Items in your cart:"}),Object(n.jsx)("div",{className:"modal_cart_list",children:this.props.cart.items.map((function(t){return Object(n.jsxs)("div",{className:"modal_cart_item",children:[Object(n.jsx)("div",{className:"modal_cart_item_title",children:t.title}),Object(n.jsxs)("div",{className:"modal_cart_item_price",children:["Price: ",t.price," $"]}),Object(n.jsxs)("div",{onClick:function(){return e.props.deleteFromCart(t.id)},className:"modal_cart_item_delete",children:[" ",Object(n.jsx)("i",{className:"fa fa-trash-o"})]}),Object(n.jsx)("div",{className:"modal_cart_item_img",children:Object(n.jsx)("img",{src:t.image,alt:t.title})}),Object(n.jsxs)("div",{className:"modal_cart_item_qty",children:["Quantity: ",t.qty]})]},t.id)}))}),Object(n.jsxs)("div",{className:"modal_cart_total",children:["Total: ",t," $"]}),Object(n.jsx)("button",{className:"modal_btn",children:"Order now"}),Object(n.jsx)("div",{className:"modal_cart_continue",onClick:function(){return e.props.toggleCart()},children:"Continue shopping"})]})})}):(document.body.style.overflow="",null)}}]),c}(r.Component)),W={toggleCart:g,deleteFromCart:f},X=Object(O.b)((function(e){return{cart:e.cart}}),W)(Z),ee=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(X,{}),Object(n.jsx)(k,{}),Object(n.jsx)(G,{}),Object(n.jsx)(Y,{}),Object(n.jsx)($,{}),Object(n.jsx)(J,{}),Object(n.jsx)(H,{})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},ce=c(11),ne=c(9),re=c(2),ae={beverages:[],combos:[],menuItems:[],giftset:[],loading:!0,error:!1,modal:{shown:!1,item:null},cart:{items:[],visible:!1}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BEVERAGES_LOADED":return Object(re.a)(Object(re.a)({},e),{},{beverages:t.payload,loading:!1});case"BEVERAGES_REQUESTED":return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case"BEVERAGES_ERROR":return Object(re.a)(Object(re.a)({},e),{},{error:!0});case"MENU_ITEMS_LOADED":return Object(re.a)(Object(re.a)({},e),{},{menuItems:t.payload,loading:!1});case"MENU_ITEMS_REQUESTED":return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case"MENU_ITEMS_ERROR":return Object(re.a)(Object(re.a)({},e),{},{error:!0});case"GIFTSET_LOADED":return Object(re.a)(Object(re.a)({},e),{},{giftset:t.payload,loading:!1});case"GIFTSET_REQUESTED":return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case"GIFTSET_ERROR":return Object(re.a)(Object(re.a)({},e),{},{error:!0});case"COMBOS_LOADED":return Object(re.a)(Object(re.a)({},e),{},{combos:t.payload,loading:!1});case"COMBOS_REQUESTED":return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case"COMBOS_ERROR":return Object(re.a)(Object(re.a)({},e),{},{error:!0});case"TOGGLE_MODAL":return Object(re.a)(Object(re.a)({},e),{},{modal:{shown:!e.modal.shown,item:t.payload}});case"TOGGLE_CART":return Object(re.a)(Object(re.a)({},e),{},{cart:{visible:!e.cart.visible,items:e.cart.items}});case"ADD_TO_CART":var c=t.payload;if(c.qty=1,e.cart.items.filter((function(e){return e.id===c.id}))[0]){var n=e.cart.items.findIndex((function(e){return e.id===c.id})),r=e.cart.items[n];return r.qty++,Object(re.a)(Object(re.a)({},e),{},{cart:Object(re.a)({items:[].concat(Object(ne.a)(e.cart.items.slice(0,n)),[r],Object(ne.a)(e.cart.items.slice(n+1)))},e.cart)})}return Object(re.a)(Object(re.a)({},e),{},{cart:Object(re.a)({items:e.cart.items.push(c)},e.cart)});case"DELETE_FROM_CART":var a=t.payload,s=e.cart.items.findIndex((function(e){return e.id===a}));return Object(re.a)(Object(re.a)({},e),{},{cart:{items:[].concat(Object(ne.a)(e.cart.items.slice(0,s)),Object(ne.a)(e.cart.items.slice(s+1))),visible:e.cart.visible}});default:return e}},ie=Object(ce.b)(se);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O.a,{store:ie,children:Object(n.jsx)(ee,{})})}),document.getElementById("root")),te()}]),[[48,1,2]]]);
//# sourceMappingURL=main.3feed77f.chunk.js.map