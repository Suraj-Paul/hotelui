(this.webpackJsonpthirdapp=this.webpackJsonpthirdapp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=a(7),s=a(1),m=a(3),i=a(4),u=a(6),d=a(5),p=(a(38),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleCity=function(t){var a=t.target.value.split(",");console.log(a);var n=a[0],l=a[1];sessionStorage.setItem("CityName",l),fetch("".concat("https://developerfunnel.herokuapp.com/hotels?city=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({hotels:t})}));var r="http://api.openweathermap.org/data/2.5/forecast/daily?q=".concat(l,"&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29");fetch("".concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(e){sessionStorage.setItem("currentWeather",e.list[0].temp.day)}))},e.renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:"".concat(e.city,",").concat(e.city_name)},e.city_name)}))},e.renderHotel=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name,"|",e.city_name)}))},e.handleRestaurent=function(t){e.props.hid(Number(t.target.value))},e.state={location:"",hotels:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"imageContainer"},l.a.createElement("div",{id:"logo"},l.a.createElement("b",null,"D!")),l.a.createElement("div",{className:"heading"},"Plan Your Trip"),l.a.createElement("div",{className:"locationSelector"},l.a.createElement("select",{className:"locationDropDown",onChange:this.handleCity},l.a.createElement("option",null,"----SELECT YOUR CITY-----"),this.renderCity(this.state.location)),l.a.createElement("select",{className:"reataurantsinput",onChange:this.handleRestaurent},l.a.createElement("option",null,"----SELECT YOUR HOTEL-----"),this.renderHotel(this.state.hotels)))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({location:t})}))}}]),a}(n.Component)),h=(a(39),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"quickSearchContainer"},l.a.createElement("p",{className:"quickSearchHeding"},"Quick Search"),l.a.createElement("p",{className:"quickSearchSubHeding"},"Discover Trip By Type"),l.a.createElement("br",null),function(e){var t=e.tripData;if(t)return t.map((function(e){return l.a.createElement(o.b,{to:"/list/".concat(e.trip)},l.a.createElement("div",{className:"tileContainer"},l.a.createElement("div",{className:"tileComponent1"},l.a.createElement("img",{src:e.image})),l.a.createElement("div",{className:"tileComponent2"},l.a.createElement("div",{className:"componentHeading"},e.name),l.a.createElement("div",{className:"componentSubHeading"},"Start your trip in ",e.name," style"))))}))}(e)))}),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={tripType:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{tripData:this.state.tripType}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/booking",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({tripType:t})}))}}]),a}(n.Component),v=function(e){return l.a.createElement("div",null,l.a.createElement(p,{hid:function(t){!function(t){e.history.push("/details/".concat(t))}(t)}}),l.a.createElement(E,null))},f=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement("a",{className:"navbar-brand",href:"#"},"Developer Funnel")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/viewBooking"},"Booking")))))))},b=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"\xa9 Developer Funnel")))},g=a(8),N=a.n(g),y=(a(62),function(e){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"main-heading"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return l.a.createElement("div",{className:"item",id:e.id},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5"},l.a.createElement("img",{className:"Image",src:e.thumb})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"hotel_name"},l.a.createElement(o.b,{to:"/details/".concat(e._id)},e.name)),l.a.createElement("div",{className:"city_name"},e.city_name),l.a.createElement("div",{className:"address-text"},e.locality),l.a.createElement("div",{className:"address-text"},e.address))),l.a.createElement("hr",null),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-3"},l.a.createElement("div",{class:"CUISINES-COST-FOR-TWO"},"Room Type"),l.a.createElement("div",{class:"CUISINES-COST-FOR-TWO"},"COST FOR Night")),l.a.createElement("div",{class:"col-sm-9"},l.a.createElement("div",{class:"Bakery-700"},e.type[0].name,",",e.type[1].name,",",e.type[2].name),l.a.createElement("div",{class:"Bakery-700"},"Rs ",e.cost))),l.a.createElement("hr",null),l.a.createElement("hr",null))})):l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("p",null,"No Data Found "))):l.a.createElement("div",null,l.a.createElement("img",{src:"/images/loader.gif"}))}(e)))))}),O="https://developerfunnel.herokuapp.com/hotellist",k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).roomFilter=function(t){var a,n=t.target.value,l=sessionStorage.getItem("tripid");a=""==n?"".concat(O,"/").concat(l):"".concat(O,"/").concat(l,"?roomtype=").concat(t.target.value),N.a.get(a).then((function(t){e.props.roomperType(t.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Room Type"),l.a.createElement("div",{onChange:this.roomFilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"room"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"room"}),"Deluxe Room"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"room"}),"Premium Room"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"room"}),"Travel Room"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"room"}),"Semi Deluxe Room")))}}]),a}(n.Component),C="https://developerfunnel.herokuapp.com/hotellist",j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).costFilter=function(t){var a,n=t.target.value.split(","),l=Number(n[0]),r=Number(n[1]),c=sessionStorage.getItem("tripid");a=" "==t.target.value||""==t.target.value?"".concat(C,"/").concat(c):"".concat(C,"/").concat(c,"?hcost=").concat(r,"&lcost=").concat(l),N.a.get(a).then((function(t){e.props.roomperCost(t.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Cost Filter"),l.a.createElement("div",{onChange:this.costFilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"room"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1000,3000",name:"room"}),"Rs 1000-3000"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3001,6000",name:"room"}),"Rs 3001-6000"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"6001,12000",name:"room"}),"Rs 6001-12000"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"12001,18000",name:"room"}),"Rs 12001-18000")))}}]),a}(n.Component),S=(a(63),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Weather of Your city is ",sessionStorage.getItem("currentWeather")," \xb0C. Some Suggestion For You"),l.a.createElement("div",{className:"row"},function(e){var t=e.sudata;if(t)return t.map((function(e){return l.a.createElement("div",{className:"card col-md-2"},l.a.createElement("h3",null,l.a.createElement(o.b,{to:"/details/".concat(e._id)},e.name)),l.a.createElement("img",{className:"card-img-top",src:e.thumb}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.locality),l.a.createElement("p",{className:"card-text"},l.a.createElement("p",null,"Cost: ",e.cost))))}))}(e)),l.a.createElement("hr",null))}),T=" https://developerfunnel.herokuapp.com/hotels?city=",w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={suggestion:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{sudata:this.state.suggestion}))}},{key:"componentDidMount",value:function(){var e,t=this,a=sessionStorage.getItem("currentWeather");a=Number(a),e="".concat(T,a>30?"6":"5"),console.log("surl",e),N.a.get("".concat(e)).then((function(e){t.setState({suggestion:e.data})}))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={hotellist:""},e}return Object(i.a)(a,[{key:"setDataPerFilter",value:function(e){this.setState({hotellist:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(k,{roomperType:function(t){e.setDataPerFilter(t)}}),l.a.createElement(j,{roomperCost:function(t){e.setDataPerFilter(t)}})),l.a.createElement("div",{className:"col-md-10"},l.a.createElement(w,null),l.a.createElement(y,{listData:this.state.hotellist}))))}},{key:"componentDidMount",value:function(){var e=this,t=parseInt(this.props.match.params.id);sessionStorage.setItem("tripid",t),N.a.get("".concat("https://developerfunnel.herokuapp.com/hotellist","/").concat(t)).then((function(t){e.setState({hotellist:t.data})}))}}]),a}(n.Component),D=a(14),_=a.n(D),P=a(17),R=a(16),F=(a(65),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={hotel:{type:[{name:""},{name:""},{name:""}]},tripid:sessionStorage.getItem("tripid")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.hotel;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,e.name)),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("img",{className:"img-responsive",src:e.thumb,style:{width:1500,height:400}})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,e.name),l.a.createElement("h3",null,e.locality),l.a.createElement("h3",null,e.address)))),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(R.d,null,l.a.createElement(R.b,null,l.a.createElement(R.a,null,"OverView"),l.a.createElement(R.a,null,"Contact")),l.a.createElement(R.c,null,l.a.createElement("h2",null,"About The Place"),l.a.createElement("br",null),l.a.createElement("h3",null,"Type"),l.a.createElement("h4",null,e.type[0].name," | ",e.type[1].name," | ",e.type[2].name),l.a.createElement("h3",null,"Cost Per Night : Rs. ",e.cost)),l.a.createElement(R.c,null,l.a.createElement("h2",null,"Contact Us"),l.a.createElement("h4",null,"Phone : 84467856565"),l.a.createElement("div",null,e.locality)),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/list/".concat(this.state.tripid),className:"btn btn-danger btn-lg"},"Back"),"\xa0",l.a.createElement(o.b,{to:"/booking/".concat(this.props.match.params.id),className:"btn btn-success btn-lg"},"Place Order"),l.a.createElement("br",null)))))}},{key:"componentDidMount",value:function(){var e=Object(P.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("".concat("https://developerfunnel.herokuapp.com/hotelsdetails","/").concat(t));case 3:a=e.sent,this.setState({hotel:a.data[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component)),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChangeName=function(t){e.setState({name:t.target.value})},e.handleChangePhone=function(t){e.setState({phone:t.target.value})},e.handleChangeAddress=function(t){e.setState({address:t.target.value})},e.handleChangePerson=function(t){e.setState({person:t.target.value})},e.handleSubmit=function(){var t={order_id:e.state.order_id,hotel_name:e.state.hotel_name,name:e.state.name,phone:e.state.phone,address:e.state.address,person:e.state.person};fetch("https://developerfunnel.herokuapp.com/placeBook",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(e.props.history.push('/viewBooking?message="success"'))},e.state={order_id:Math.floor(1e4*Math.random()),hotel_name:"",name:"",phone:"",address:"",person:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(P.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("".concat("https://developerfunnel.herokuapp.com/hotelsdetails","/").concat(t));case 3:a=e.sent,this.setState({hotel_name:a.data[0].name});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",null,"Place Your Order")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Order_id"),l.a.createElement("input",{type:"text",name:"order_id",value:this.state.order_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Hotel Name"),l.a.createElement("input",{type:"text",name:"hotel_name",value:this.state.hotel_name,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,className:"form-control",onChange:this.handleChangeName,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChangePhone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"text",name:"address",value:this.state.address,className:"form-control",onChange:this.handleChangeAddress})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Person"),l.a.createElement("select",{type:"text",name:"address",value:this.state.person,className:"form-control",onChange:this.handleChangePerson},l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three"),l.a.createElement("option",{value:"4"},"Four"))),l.a.createElement(o.b,{to:"/",className:"btn btn-danger"},"Back"),"\xa0",l.a.createElement("button",{className:"btn btn-success",onClick:this.handleSubmit},"Submit"))))}}]),a}(n.Component),B=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h3",null,"Booking List")),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"OrderId"),l.a.createElement("th",null,"Hotel"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"No.Person"))),l.a.createElement("tbody",null,function(e){var t=e.bookdata;if(t)return t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.hotel),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.person))}))}(e))))},H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={booking:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(B,{bookdata:this.state.booking}))}},{key:"componentDidMount",value:function(){var e=Object(P.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat("https://developerfunnel.herokuapp.com/allBooking"));case 2:t=e.sent,this.setState({booking:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component),A=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(s.a,{exact:!0,path:"/",component:v}),l.a.createElement(s.a,{exact:!0,path:"/list/:id",component:x}),l.a.createElement(s.a,{exact:!0,path:"/details/:id",component:F}),l.a.createElement(s.a,{exact:!0,path:"/booking/:id",component:I}),l.a.createElement(s.a,{exact:!0,path:"/viewBooking",component:H}),l.a.createElement(b,null)))};c.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b7ebe087.chunk.js.map