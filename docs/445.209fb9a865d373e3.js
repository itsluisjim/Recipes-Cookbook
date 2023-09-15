"use strict";(self.webpackChunkRecipes_Cookbook=self.webpackChunkRecipes_Cookbook||[]).push([[445],{2445:(_,m,d)=>{d.r(m),d.d(m,{ShoppingListModule:()=>C});var r=d(95),l=d(167),u=d(6208),t=d(4946),g=d(600),a=d(6814),h=d(2391);const S=["itemForm"];let f=(()=>{var i;class p{constructor(e){this.shoppingListService=e,this.editMode=!1}ngOnInit(){this.editingSub=this.shoppingListService.startedEditing.subscribe(e=>{this.editingItemIndex=e,this.editMode=!0,this.editedItem=this.shoppingListService.getIngredient(e),this.itemForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}ngOnDestroy(){this.editingSub.unsubscribe()}onSubmit(e){const o=e.value,s=new h.o(o.name,o.amount);e.valid&&(this.editMode?(this.shoppingListService.updateIngredient(this.editingItemIndex,s),this.editMode=!1):this.shoppingListService.addIngredient(s)),e.reset()}onClear(){this.itemForm.reset(),this.editMode=!1}onDelete(){this.shoppingListService.deleteIngredient(this.editingItemIndex),this.onClear()}}return(i=p).\u0275fac=function(e){return new(e||i)(t.Y36(g._))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-shopping-list-edit"]],viewQuery:function(e,o){if(1&e&&t.Gf(S,5),2&e){let s;t.iGM(s=t.CRH())&&(o.itemForm=s.first)}},decls:21,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["itemForm","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","pattern","^[1-9]+[0-9]*$","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-success","mr-5",3,"disabled"],["type","button",1,"btn","btn-danger","mr-5",3,"disabled","click"],["type","button",1,"btn","btn-primary","mr-5",3,"click"]],template:function(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(s);const L=t.MAs(3);return t.KtG(o.onSubmit(L))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return o.onDelete()}),t._uU(18,"Delete"),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return o.onClear()}),t._uU(20,"Clear"),t.qZA()()()()()()}if(2&e){const s=t.MAs(3);t.xp6(15),t.Q6J("disabled",!s.valid),t.xp6(1),t.hij(" ",o.editMode?"Update":"Add"," "),t.xp6(1),t.Q6J("disabled",!o.editMode)}},dependencies:[r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.c5,r.On,r.F],styles:[".mr-5[_ngcontent-%COMP%]{margin-right:5px}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),p})();function v(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const s=t.CHM(n).index,c=t.oxw();return t.KtG(c.onEditItem(s))}),t._uU(1),t.qZA()}if(2&i){const n=p.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}const b=[{path:"",component:(()=>{var i;class p{constructor(e){this.shoppingListService=e}ngOnInit(){this.ingredients=this.shoppingListService.getIngredients(),this.ingredientChangeSub=this.shoppingListService.ingredientsChanged.subscribe(e=>{this.ingredients=e})}ngOnDestroy(){this.ingredientChangeSub.unsubscribe()}onEditItem(e){this.shoppingListService.startedEditing.next(e)}}return(i=p).\u0275fac=function(e){return new(e||i)(t.Y36(g._))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-shopping-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-list-edit")(3,"hr"),t.TgZ(4,"h2"),t._uU(5,"Ingredients List"),t.qZA(),t.TgZ(6,"ul",2),t.YNc(7,v,2,2,"a",3),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",o.ingredients))},dependencies:[a.sg,f]}),p})()}];let C=(()=>{var i;class p{}return(i=p).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.m,r.u5,l.Bz.forChild(b)]}),p})()}}]);