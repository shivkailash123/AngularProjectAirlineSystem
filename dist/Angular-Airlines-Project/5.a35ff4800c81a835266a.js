(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{xDfr:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",(function(){return $e}));var i=n("ofXK"),c=n("tyNb"),a=n("fXoL"),s=n("UxCD"),o=n("XiUz"),l=n("Wp6s"),r=n("/t3+"),d=n("3Pt+"),b=n("kmnG"),u=n("qFsG"),m=n("bTqV");let h=(()=>{class e{constructor(e,t){this.service=e,this.router=t,this.passenger={id:0,name:"",checkedIn:!1,wheelchairRequired:!1,infants:!1,ancillaryServices:"",seatNo:"",specialMeal:"",inflightShop:"",passport:"",address:"",dob:"",fid:0},this.status=!1}ngOnInit(){this.service.getAllPassengers().subscribe(e=>{console.log(e.length),this.passenger.id=e.length+1}),this.passenger.fid=this.service.currentFid}onFormSubmit(){this.service.addPassengerDetails(this.passenger).subscribe(e=>{alert("added successfull"),this.status=!0})}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(c.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-addpassenger"]],decls:20,vars:3,consts:[["fxLayoutAlign","center center","fxFlexFill","",1,"main-div"],["fxLayoutAlign","center center","color","primary"],["fxLayoutAlign","stretch","fxLayout","column",1,"passenger-form",3,"ngSubmit"],["appearance","outline"],["matInput","","placeholder","Name","name","name",3,"ngModel","ngModelChange"],["matInput","","placeholder","Passport","name","passport",3,"ngModel","ngModelChange"],["matInput","","placeholder","Address","name","address",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Rb(1,"mat-card"),a.Rb(2,"mat-toolbar",1),a.Ac(3,"Update"),a.Qb(),a.Rb(4,"form",2),a.Zb("ngSubmit",(function(){return t.onFormSubmit()})),a.Rb(5,"mat-form-field",3),a.Rb(6,"mat-label"),a.Ac(7,"Name"),a.Qb(),a.Rb(8,"input",4),a.Zb("ngModelChange",(function(e){return t.passenger.name=e})),a.Qb(),a.Qb(),a.Rb(9,"mat-form-field",3),a.Rb(10,"mat-label"),a.Ac(11,"Passport"),a.Qb(),a.Rb(12,"input",5),a.Zb("ngModelChange",(function(e){return t.passenger.passport=e})),a.Qb(),a.Qb(),a.Rb(13,"mat-form-field",3),a.Rb(14,"mat-label"),a.Ac(15,"Address"),a.Qb(),a.Rb(16,"input",6),a.Zb("ngModelChange",(function(e){return t.passenger.address=e})),a.Qb(),a.Qb(),a.Rb(17,"button",7),a.Ac(18,"Add"),a.Qb(),a.Mb(19,"br"),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.Ab(8),a.ic("ngModel",t.passenger.name),a.Ab(4),a.ic("ngModel",t.passenger.passport),a.Ab(4),a.ic("ngModel",t.passenger.address))},directives:[o.a,o.c,l.a,r.a,d.n,d.i,d.j,o.b,b.b,b.e,u.a,d.a,d.h,d.k,m.a],styles:[".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:0}.passenger-form[_ngcontent-%COMP%]{padding:20px}"]}),e})();var f=n("0EQZ"),g=n("NPJ3"),p=n("0IaG"),v=n("+0xr"),R=n("znSr"),A=n("d3UM"),C=n("FKr1");function Q(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",1),a.Rb(1,"mat-card"),a.Rb(2,"mat-toolbar",2),a.Ac(3,"Update"),a.Qb(),a.Rb(4,"form",3),a.Zb("ngSubmit",(function(){return a.rc(e),a.dc().onFormSubmit()})),a.Rb(5,"mat-form-field",4),a.Rb(6,"mat-label"),a.Ac(7,"Name"),a.Qb(),a.Rb(8,"input",5),a.Zb("ngModelChange",(function(t){return a.rc(e),a.dc().passenger.name=t})),a.Qb(),a.Qb(),a.Rb(9,"mat-form-field",4),a.Rb(10,"mat-label"),a.Ac(11,"Passport"),a.Qb(),a.Rb(12,"input",6),a.Zb("ngModelChange",(function(t){return a.rc(e),a.dc().passenger.passport=t})),a.Qb(),a.Qb(),a.Rb(13,"mat-form-field",4),a.Rb(14,"mat-label"),a.Ac(15,"Address"),a.Qb(),a.Rb(16,"input",7),a.Zb("ngModelChange",(function(t){return a.rc(e),a.dc().passenger.address=t})),a.Qb(),a.Qb(),a.Rb(17,"button",8),a.Ac(18,"Update"),a.Qb(),a.Mb(19,"br"),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(8),a.ic("ngModel",e.passenger.name),a.Ab(4),a.ic("ngModel",e.passenger.passport),a.Ab(4),a.ic("ngModel",e.passenger.address)}}let D=(()=>{class e{constructor(e,t){this.service=e,this.router=t,this.passenger={id:0,name:"",checkedIn:!1,wheelchairRequired:!1,infants:!1,ancillaryServices:"",seatNo:"",specialMeal:"",inflightShop:"",passport:"",address:"",dob:"",fid:0},this.status=!1}ngOnInit(){this.service.getPassengerById().subscribe(e=>{this.passenger=e[0],console.log(this.passenger)})}onFormSubmit(){this.service.updatePassengerDetails(this.passenger).subscribe(e=>{alert("update successfull"),this.status=!0})}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(c.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-passenger"]],decls:1,vars:1,consts:[["fxLayoutAlign","center center","fxFlexFill","","class","main-div",4,"ngIf"],["fxLayoutAlign","center center","fxFlexFill","",1,"main-div"],["fxLayoutAlign","center center","color","primary"],["fxLayoutAlign","stretch","fxLayout","column",1,"passenger-form",3,"ngSubmit"],["appearance","outline"],["matInput","","placeholder","Name","name","name",3,"ngModel","ngModelChange"],["matInput","","placeholder","Passport","name","passport",3,"ngModel","ngModelChange"],["matInput","","placeholder","Address","name","address",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary"]],template:function(e,t){1&e&&a.zc(0,Q,20,3,"div",0),2&e&&a.ic("ngIf",!t.status)},directives:[i.k,o.a,o.c,l.a,r.a,d.n,d.i,d.j,o.b,b.b,b.e,u.a,d.a,d.h,d.k,m.a],styles:[".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:0}.passenger-form[_ngcontent-%COMP%]{padding:20px}"]}),e})();function S(e,t){if(1&e&&(a.Rb(0,"mat-option",20),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.ic("value",e.value),a.Ab(1),a.Cc(" ",e.viewValue," ")}}function y(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1,"ID "),a.Qb())}function M(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.id," ")}}function w(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Name "),a.Qb())}function k(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.name," ")}}function P(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Ancillary "),a.Qb())}function z(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.ancillaryServices," ")}}function x(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Seat Number "),a.Qb())}function O(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.seatNo," ")}}function L(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Passport "),a.Qb())}function I(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.passport," ")}}function F(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Address "),a.Qb())}function Z(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.address," ")}}function _(e,t){1&e&&(a.Rb(0,"th",21),a.Ac(1," Date Of Birth "),a.Qb())}function $(e,t){if(1&e&&(a.Rb(0,"td",22),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.dob," ")}}function T(e,t){1&e&&a.Mb(0,"tr",23)}const H=function(e,t){return{hovered:e,highlighted:t}};function B(e,t){if(1&e){const e=a.Sb();a.Rb(0,"tr",24),a.Zb("click",(function(){a.rc(e);const n=t.$implicit;return a.dc(2).selection.toggle(n)}))("mouseover",(function(){return t.$implicit.hovered=!0}))("mouseout",(function(){return t.$implicit.hovered=!1})),a.Qb()}if(2&e){const e=t.$implicit,n=a.dc(2);a.ic("ngClass",a.nc(1,H,e.hovered,n.selection.isSelected(e)))}}function N(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",2),a.Rb(1,"mat-form-field",3),a.Rb(2,"mat-label"),a.Ac(3,"Filter Missing records"),a.Qb(),a.Rb(4,"mat-select",4),a.Zb("selectionChange",(function(t){return a.rc(e),a.dc().onFilterChange(t)})),a.zc(5,S,2,2,"mat-option",5),a.Qb(),a.Qb(),a.Rb(6,"table",6),a.Pb(7,7),a.zc(8,y,2,0,"th",8),a.zc(9,M,2,1,"td",9),a.Ob(),a.Pb(10,10),a.zc(11,w,2,0,"th",8),a.zc(12,k,2,1,"td",9),a.Ob(),a.Pb(13,11),a.zc(14,P,2,0,"th",8),a.zc(15,z,2,1,"td",9),a.Ob(),a.Pb(16,12),a.zc(17,x,2,0,"th",8),a.zc(18,O,2,1,"td",9),a.Ob(),a.Pb(19,13),a.zc(20,L,2,0,"th",8),a.zc(21,I,2,1,"td",9),a.Ob(),a.Pb(22,14),a.zc(23,F,2,0,"th",8),a.zc(24,Z,2,1,"td",9),a.Ob(),a.Pb(25,15),a.zc(26,_,2,0,"th",8),a.zc(27,$,2,1,"td",9),a.Ob(),a.zc(28,T,1,0,"tr",16),a.zc(29,B,1,4,"tr",17),a.Qb(),a.Rb(30,"div",18),a.Rb(31,"button",19),a.Zb("click",(function(){return a.rc(e),a.dc().selectPassenger()})),a.Ac(32,"Update Passenger"),a.Qb(),a.Rb(33,"button",19),a.Zb("click",(function(){return a.rc(e),a.dc().addPassenger()})),a.Ac(34,"Add Passenger"),a.Qb(),a.Mb(35,"br"),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(5),a.ic("ngForOf",e.records),a.Ab(1),a.ic("dataSource",e.dataSource),a.Ab(22),a.ic("matHeaderRowDef",e.displayedColumns),a.Ab(1),a.ic("matRowDefColumns",e.displayedColumns)}}function j(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-addpassenger"),a.Rb(2,"button",25),a.Zb("click",(function(){return a.rc(e),a.dc().backToPassengerList()})),a.Ac(3,"Back To passenger List"),a.Qb(),a.Qb()}}function E(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-passenger"),a.Rb(2,"button",25),a.Zb("click",(function(){return a.rc(e),a.dc().backToPassengerList()})),a.Ac(3,"Back To passenger List"),a.Qb(),a.Qb()}}let U=(()=>{class e{constructor(e,t,n){this.service=e,this.dialog=t,this.router=n,this.selected1=!1,this.records=[{value:"all",viewValue:"No Filter"},{value:"passport",viewValue:"Passport"},{value:"address",viewValue:"Address"},{value:"dob",viewValue:"Date Of Birth"}],this.displayedColumns=["id","name","ancillary","seatNumber","passport","address","dob"],this.passengerList=[],this.data1=[],this.selection=new f.c(!1,[])}ngOnInit(){this.selected=!1,this.selected1=!1,this.service.getPassengersByFlight().subscribe(e=>{console.log(this.passengerList),this.data1=e,this.dataSource=new v.k(e)},e=>{console.log(e)})}onFilterChange(e){"passport"===e.value&&(this.dataSource=new v.k(this.data1.filter(e=>""===e.passport))),"address"===e.value&&(this.dataSource=new v.k(this.data1.filter(e=>""===e.address))),"dob"===e.value&&(this.dataSource=new v.k(this.data1.filter(e=>""===e.dob))),"all"===e.value&&(this.dataSource=new v.k(this.data1))}selectPassenger(){0===this.selection.selected.length?this.openDialog():(this.selected=!0,console.log(this.selection.selected[0].id),this.service.setpassengerId(this.selection.selected[0].id))}addPassenger(){this.selected1=!0}openDialog(){this.dialog.open(g.a)}backToPassengerList(){this.selected=!1,this.selected1=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(p.a),a.Lb(c.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-pasengersperflight"]],decls:5,vars:3,consts:[["fxLayout","column","fxLayoutAlign","center center","class","main-div",4,"ngIf"],[4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["appearance","fill"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","ancillary"],["matColumnDef","seatNumber"],["matColumnDef","passport"],["matColumnDef","address"],["matColumnDef","dob"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click","mouseover","mouseout",4,"matRowDef","matRowDefColumns"],[1,"button-div"],["mat-raised-button","","color","primary",2,"margin-left","5px",3,"click"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click","mouseover","mouseout"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(a.zc(0,N,36,4,"div",0),a.Mb(1,"br"),a.Mb(2,"br"),a.zc(3,j,4,0,"div",1),a.zc(4,E,4,0,"div",1)),2&e&&(a.ic("ngIf",!t.selected&&!t.selected1),a.Ab(3),a.ic("ngIf",t.selected1&&!t.selected),a.Ab(1),a.ic("ngIf",t.selected&&!t.selected1))},directives:[i.k,o.b,o.a,b.b,b.e,A.a,i.j,v.j,v.c,v.e,v.b,v.g,v.i,m.a,C.f,v.d,v.a,v.f,v.h,i.i,R.a,h,D],styles:["table[_ngcontent-%COMP%]{width:90%;margin-top:50px}.mat-row.hovered[_ngcontent-%COMP%]{background:#eee}.mat-row.highlighted[_ngcontent-%COMP%]{background:#999}.button-div[_ngcontent-%COMP%]{padding:10%}.example-action-buttons[_ngcontent-%COMP%]{padding-bottom:20px}.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{flex-basis:0}.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}"]}),e})();function V(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Ancillary Services "),a.Qb())}function J(e,t){if(1&e&&(a.Rb(0,"td",14),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e," ")}}function q(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Delete "),a.Qb())}function G(e,t){if(1&e){const e=a.Sb();a.Rb(0,"td",14,15),a.Rb(2,"button",12),a.Zb("click",(function(){a.rc(e);const n=t.$implicit;return a.dc(2).delete(n)})),a.Ac(3,"Delete"),a.Qb(),a.Qb()}}function X(e,t){1&e&&a.Mb(0,"tr",16)}function K(e,t){1&e&&a.Mb(0,"tr",17)}function W(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",1),a.Rb(1,"table",2),a.Pb(2,3),a.zc(3,V,2,0,"th",4),a.zc(4,J,2,1,"td",5),a.Ob(),a.Pb(5,6),a.zc(6,q,2,0,"th",4),a.zc(7,G,4,0,"td",5),a.Ob(),a.zc(8,X,1,0,"tr",7),a.zc(9,K,1,0,"tr",8),a.Qb(),a.Rb(10,"div",9),a.Mb(11,"input",10,11),a.Rb(13,"button",12),a.Zb("click",(function(){a.rc(e);const t=a.pc(12);return a.dc().add(t.value)})),a.Ac(14,"Add/Update"),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(1),a.ic("dataSource",e.dataSource),a.Ab(7),a.ic("matHeaderRowDef",e.displayedColumns),a.Ab(1),a.ic("matRowDefColumns",e.displayedColumns)}}let Y=(()=>{class e{constructor(e,t){this.service=e,this.dialog=t,this.displayedColumns=["ancillaryServices","delete"],this.dataSource=[]}ngOnInit(){this.selected=!1,this.service.getServices().subscribe(e=>{this.data1=e[0].ancillaryServices,this.dataSource=this.data1,this.finalData=e[0]},()=>{console.log("Error while fetching flight list")})}delete(e){this.finalData.ancillaryServices=this.data1.filter(t=>t!==e),this.dataSource=this.finalData.ancillaryServices,this.service.updateService(this.finalData).subscribe(e=>{},()=>{console.log("Error while fetching flight list")})}add(e){this.finalData.ancillaryServices.push(e),this.dataSource=this.finalData.ancillaryServices,this.service.updateService(this.finalData).subscribe(e=>{this.ngOnInit()},()=>{console.log("Error while fetching flight list")})}openDialog(){this.dialog.open(g.a)}backToFlight(){this.selected=!1,this.selected1=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(p.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-ancillary"]],decls:1,vars:1,consts:[["fxLayout","column","fxLayoutAlign","center center","class","main-div",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","ancillaryServices"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"button-div"],["type","text"],["ancillary",""],["mat-raised-button","","color","primary",3,"click"],["mat-header-cell",""],["mat-cell",""],["element",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&a.zc(0,W,15,3,"div",0),2&e&&a.ic("ngIf",!t.selected&&!t.selected1)},directives:[i.k,o.b,o.a,v.j,v.c,v.e,v.b,v.g,v.i,m.a,v.d,v.a,v.f,v.h],styles:["table[_ngcontent-%COMP%]{width:90%;margin-top:50px}.mat-row.hovered[_ngcontent-%COMP%]{background:#eee}.mat-row.highlighted[_ngcontent-%COMP%]{background:#999}.button-div[_ngcontent-%COMP%]{padding:10%}"]}),e})();function ee(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Shopping items "),a.Qb())}function te(e,t){if(1&e&&(a.Rb(0,"td",14),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e," ")}}function ne(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Delete "),a.Qb())}function ie(e,t){if(1&e){const e=a.Sb();a.Rb(0,"td",14,15),a.Rb(2,"button",16),a.Zb("click",(function(){a.rc(e);const n=t.$implicit;return a.dc(2).delete(n)})),a.Ac(3,"Delete"),a.Qb(),a.Qb()}}function ce(e,t){1&e&&a.Mb(0,"tr",17)}function ae(e,t){1&e&&a.Mb(0,"tr",18)}function se(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",1),a.Rb(1,"table",2),a.Pb(2,3),a.zc(3,ee,2,0,"th",4),a.zc(4,te,2,1,"td",5),a.Ob(),a.Pb(5,6),a.zc(6,ne,2,0,"th",4),a.zc(7,ie,4,0,"td",5),a.Ob(),a.zc(8,ce,1,0,"tr",7),a.zc(9,ae,1,0,"tr",8),a.Qb(),a.Rb(10,"div",9),a.Mb(11,"input",10,11),a.Rb(13,"button",12),a.Zb("click",(function(){a.rc(e);const t=a.pc(12);return a.dc().add(t.value)})),a.Ac(14,"Add/Update"),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(1),a.ic("dataSource",e.dataSource),a.Ab(7),a.ic("matHeaderRowDef",e.displayedColumns),a.Ab(1),a.ic("matRowDefColumns",e.displayedColumns)}}let oe=(()=>{class e{constructor(e,t){this.service=e,this.dialog=t,this.displayedColumns=["inflightShop","delete"],this.dataSource=[]}ngOnInit(){this.selected=!1,this.service.getServices().subscribe(e=>{this.data1=e[0].inflightShop,this.dataSource=this.data1,this.finalData=e[0]},()=>{console.log("Error while fetching")})}delete(e){this.finalData.inflightShop=this.data1.filter(t=>t!==e),this.dataSource=this.finalData.inflightShop,this.service.updateService(this.finalData).subscribe(e=>{},()=>{console.log("Error while fetching")})}add(e){this.finalData.inflightShop.push(e),this.dataSource=this.finalData.inflightShop,this.service.updateService(this.finalData).subscribe(e=>{this.ngOnInit()},()=>{console.log("Error while fetching")})}openDialog(){this.dialog.open(g.a)}backToFlight(){this.selected=!1,this.selected1=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(p.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-items"]],decls:1,vars:1,consts:[["fxLayout","column","fxLayoutAlign","center center","class","main-div",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","inflightShop"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"button-div",2,"margin-top","5px"],["type","text"],["item",""],["mat-raised-button","","color","primary",2,"margin-left","5px",3,"click"],["mat-header-cell",""],["mat-cell",""],["element",""],["mat-raised-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&a.zc(0,se,15,3,"div",0),2&e&&a.ic("ngIf",!t.selected&&!t.selected1)},directives:[i.k,o.b,o.a,v.j,v.c,v.e,v.b,v.g,v.i,m.a,v.d,v.a,v.f,v.h],styles:[""]}),e})();function le(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Special Meals"),a.Qb())}function re(e,t){if(1&e&&(a.Rb(0,"td",14),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e," ")}}function de(e,t){1&e&&(a.Rb(0,"th",13),a.Ac(1,"Delete "),a.Qb())}function be(e,t){if(1&e){const e=a.Sb();a.Rb(0,"td",14,15),a.Rb(2,"button",16),a.Zb("click",(function(){a.rc(e);const n=t.$implicit;return a.dc(2).delete(n)})),a.Ac(3,"Delete"),a.Qb(),a.Qb()}}function ue(e,t){1&e&&a.Mb(0,"tr",17)}function me(e,t){1&e&&a.Mb(0,"tr",18)}function he(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",1),a.Rb(1,"table",2),a.Pb(2,3),a.zc(3,le,2,0,"th",4),a.zc(4,re,2,1,"td",5),a.Ob(),a.Pb(5,6),a.zc(6,de,2,0,"th",4),a.zc(7,be,4,0,"td",5),a.Ob(),a.zc(8,ue,1,0,"tr",7),a.zc(9,me,1,0,"tr",8),a.Qb(),a.Rb(10,"div",9),a.Mb(11,"input",10,11),a.Rb(13,"button",12),a.Zb("click",(function(){a.rc(e);const t=a.pc(12);return a.dc().add(t.value)})),a.Ac(14,"Add/Update"),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(1),a.ic("dataSource",e.dataSource),a.Ab(7),a.ic("matHeaderRowDef",e.displayedColumns),a.Ab(1),a.ic("matRowDefColumns",e.displayedColumns)}}let fe=(()=>{class e{constructor(e,t){this.service=e,this.dialog=t,this.displayedColumns=["specialMeal","delete"],this.dataSource=[]}ngOnInit(){this.selected=!1,this.service.getServices().subscribe(e=>{this.data1=e[0].specialMeal,this.dataSource=this.data1,this.finalData=e[0]},()=>{console.log("Error while fetching")})}delete(e){this.finalData.specialMeal=this.data1.filter(t=>t!==e),this.dataSource=this.finalData.specialMeal,this.service.updateService(this.finalData).subscribe(e=>{},()=>{console.log("Error while fetching")})}add(e){this.finalData.specialMeal.push(e),this.dataSource=this.finalData.specialMeal,this.service.updateService(this.finalData).subscribe(e=>{this.ngOnInit()},()=>{console.log("Error while fetching")})}openDialog(){this.dialog.open(g.a)}backToFlight(){this.selected=!1,this.selected1=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(p.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-meals"]],decls:1,vars:1,consts:[["fxLayout","column","fxLayoutAlign","center center","class","main-div",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","specialMeal"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"button-div"],["type","text",2,"margin-top","5px"],["meal",""],["mat-raised-button","","color","primary",2,"margin-top","5px",3,"click"],["mat-header-cell",""],["mat-cell",""],["element",""],["mat-raised-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&a.zc(0,he,15,3,"div",0),2&e&&a.ic("ngIf",!t.selected&&!t.selected1)},directives:[i.k,o.b,o.a,v.j,v.c,v.e,v.b,v.g,v.i,m.a,v.d,v.a,v.f,v.h],styles:[""]}),e})();function ge(e,t){1&e&&(a.Rb(0,"th",16),a.Ac(1,"ID "),a.Qb())}function pe(e,t){if(1&e&&(a.Rb(0,"td",17),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.id," ")}}function ve(e,t){1&e&&(a.Rb(0,"th",16),a.Ac(1," Date "),a.Qb())}function Re(e,t){if(1&e&&(a.Rb(0,"td",17),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.scheduleDate," ")}}function Ae(e,t){1&e&&(a.Rb(0,"th",16),a.Ac(1," Time "),a.Qb())}function Ce(e,t){if(1&e&&(a.Rb(0,"td",17),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.time," ")}}function Qe(e,t){1&e&&(a.Rb(0,"th",16),a.Ac(1," Source "),a.Qb())}function De(e,t){if(1&e&&(a.Rb(0,"td",17),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.source," ")}}function Se(e,t){1&e&&(a.Rb(0,"th",16),a.Ac(1," Destination "),a.Qb())}function ye(e,t){if(1&e&&(a.Rb(0,"td",17),a.Ac(1),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.Cc(" ",e.destination," ")}}function Me(e,t){1&e&&a.Mb(0,"tr",18)}const we=function(e,t){return{hovered:e,highlighted:t}};function ke(e,t){if(1&e){const e=a.Sb();a.Rb(0,"tr",19),a.Zb("click",(function(){a.rc(e);const n=t.$implicit;return a.dc(2).selection.toggle(n)}))("mouseover",(function(){return t.$implicit.hovered=!0}))("mouseout",(function(){return t.$implicit.hovered=!1})),a.Qb()}if(2&e){const e=t.$implicit,n=a.dc(2);a.ic("ngClass",a.nc(1,we,e.hovered,n.selection.isSelected(e)))}}function Pe(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",2),a.Rb(1,"table",3),a.Pb(2,4),a.zc(3,ge,2,0,"th",5),a.zc(4,pe,2,1,"td",6),a.Ob(),a.Pb(5,7),a.zc(6,ve,2,0,"th",5),a.zc(7,Re,2,1,"td",6),a.Ob(),a.Pb(8,8),a.zc(9,Ae,2,0,"th",5),a.zc(10,Ce,2,1,"td",6),a.Ob(),a.Pb(11,9),a.zc(12,Qe,2,0,"th",5),a.zc(13,De,2,1,"td",6),a.Ob(),a.Pb(14,10),a.zc(15,Se,2,0,"th",5),a.zc(16,ye,2,1,"td",6),a.Ob(),a.zc(17,Me,1,0,"tr",11),a.zc(18,ke,1,4,"tr",12),a.Qb(),a.Rb(19,"table",13),a.Rb(20,"div",14),a.Rb(21,"tr"),a.Rb(22,"td"),a.Rb(23,"button",15),a.Zb("click",(function(){return a.rc(e),a.dc().selectFlight()})),a.Ac(24,"Manage Passengers"),a.Qb(),a.Qb(),a.Rb(25,"td"),a.Rb(26,"button",15),a.Zb("click",(function(){return a.rc(e),a.dc().manageServices()})),a.Ac(27,"Manage Ancillary Services"),a.Qb(),a.Qb(),a.Qb(),a.Rb(28,"tr"),a.Rb(29,"td"),a.Rb(30,"button",15),a.Zb("click",(function(){return a.rc(e),a.dc().manageItems()})),a.Ac(31,"Manage Shopping Items"),a.Qb(),a.Qb(),a.Rb(32,"td"),a.Rb(33,"button",15),a.Zb("click",(function(){return a.rc(e),a.dc().manageMeals()})),a.Ac(34,"Manage Special Meals"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()}if(2&e){const e=a.dc();a.Ab(1),a.ic("dataSource",e.dataSource),a.Ab(16),a.ic("matHeaderRowDef",e.displayedColumns),a.Ab(1),a.ic("matRowDefColumns",e.displayedColumns)}}function ze(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-pasengersperflight"),a.Rb(2,"button",20),a.Zb("click",(function(){return a.rc(e),a.dc().backToFlight()})),a.Ac(3,"Back To DashBoard"),a.Qb(),a.Qb()}}function xe(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-ancillary"),a.Rb(2,"button",20),a.Zb("click",(function(){return a.rc(e),a.dc().backToFlight()})),a.Ac(3,"Back To DashBoard"),a.Qb(),a.Qb()}}function Oe(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-items"),a.Rb(2,"button",20),a.Zb("click",(function(){return a.rc(e),a.dc().backToFlight()})),a.Ac(3,"Back To DashBoard"),a.Qb(),a.Qb()}}function Le(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Mb(1,"app-meals"),a.Rb(2,"button",20),a.Zb("click",(function(){return a.rc(e),a.dc().backToFlight()})),a.Ac(3,"Back To DashBoard"),a.Qb(),a.Qb()}}const Ie=[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.dialog=t,this.displayedColumns=["id","scheduleDate","time","source","destination"],this.flightList=[],this.selection=new f.c(!1,[])}ngOnInit(){this.selected=!1,this.service.getFlights().subscribe(e=>{this.flightList=e,console.log(this.flightList),this.dataSource=this.flightList,console.log(this.selection.selected)},()=>{console.log("Error while fetching flight list")})}selectFlight(){0===this.selection.selected.length?this.openDialog():(this.selected=!0,this.service.setCurrentFlight(this.selection.selected[0].id))}manageServices(){0===this.selection.selected.length?this.openDialog():(this.selected1=!0,this.service.setCurrentFlight(this.selection.selected[0].id))}manageItems(){0===this.selection.selected.length?this.openDialog():(this.selected2=!0,this.service.setCurrentFlight(this.selection.selected[0].id))}manageMeals(){0===this.selection.selected.length?this.openDialog():(this.selected3=!0,this.service.setCurrentFlight(this.selection.selected[0].id))}openDialog(){this.dialog.open(g.a)}backToFlight(){this.selected=!1,this.selected1=!1,this.selected2=!1,this.selected3=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a),a.Lb(p.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-admindashboard"]],decls:5,vars:5,consts:[["fxLayout","column","fxLayoutAlign","center center","class","main-div",4,"ngIf"],[4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","scheduleDate"],["matColumnDef","time"],["matColumnDef","source"],["matColumnDef","destination"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click","mouseover","mouseout",4,"matRowDef","matRowDefColumns"],[1,"center"],[1,"button-div"],["mat-raised-button","","color","primary",2,"margin-left","5px",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click","mouseover","mouseout"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(a.zc(0,Pe,35,3,"div",0),a.zc(1,ze,4,0,"div",1),a.zc(2,xe,4,0,"div",1),a.zc(3,Oe,4,0,"div",1),a.zc(4,Le,4,0,"div",1)),2&e&&(a.ic("ngIf",!(t.selected||t.selected1||t.selected2||t.selected3)),a.Ab(1),a.ic("ngIf",t.selected&&!t.selected1&&!t.selected2&&!t.selected3),a.Ab(1),a.ic("ngIf",t.selected1&&!t.selected&&!t.selected2&&!t.selected3),a.Ab(1),a.ic("ngIf",t.selected2&&!t.selected1&&!t.selected&&!t.selected3),a.Ab(1),a.ic("ngIf",!t.selected2&&!t.selected1&&!t.selected&&t.selected3))},directives:[i.k,o.b,o.a,v.j,v.c,v.e,v.b,v.g,v.i,m.a,v.d,v.a,v.f,v.h,i.i,R.a,U,Y,oe,fe],styles:["table[_ngcontent-%COMP%]{width:90%;margin-top:50px}.mat-row.hovered[_ngcontent-%COMP%]{background:#eee}.mat-row.highlighted[_ngcontent-%COMP%]{background:#999}.button-div[_ngcontent-%COMP%]{padding:10%}table.center[_ngcontent-%COMP%]{margin-left:50%;margin-right:50%}"]}),e})(),children:[{path:"passengers",component:U},{path:"passenger",component:D},{path:"addpassenger",component:h},{path:"ancillary",component:Y},{path:"items",component:oe}]}];let Fe=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[c.b.forChild(Ie)],c.b]}),e})();var Ze=n("HxxB"),_e=n("YUcS");let $e=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[i.c,Ze.a,Fe,_e.a,d.e,d.l]]}),e})()}}]);