"use strict";(self.webpackChunkRecipes_Cookbook=self.webpackChunkRecipes_Cookbook||[]).push([[885],{1666:(L,v,s)=>{s.r(v),s.d(v,{RecipesModule:()=>J});var c=s(95),a=s(167),Z=s(6208),e=s(4946),R=s(8180),C=s(7398),_=s(1194);let A=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Please select a recipe"),e.qZA())}}),r})();var d=s(1150),I=s(6853),u=s(6814);function b(i,r){if(1&i&&(e.TgZ(0,"li",9),e._uU(1),e.qZA()),2&i){const n=r.$implicit;e.xp6(1),e.AsE(" ",n.name," - ",n.amount," ")}}let U=(()=>{var i;class r{constructor(t,o,p){this.recipeService=t,this.route=o,this.router=p}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.recipeInfo=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipeInfo.ingredients)}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(d.j),e.Y36(a.gz),e.Y36(a.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",3,"src","alt"],["appDropdown","",1,"btn-group"],[1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],["routerLink","edit",2,"cursor","pointer"],[1,"list-group-item"],["class","list-group-item",4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),e._uU(11," Manage Recipes "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return o.onAddToShoppingList()}),e._uU(16,"To Shopping List"),e.qZA()(),e.TgZ(17,"li")(18,"a",8),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return o.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",9),e.YNc(29,b,2,2,"li",10),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("src",o.recipeInfo.imagePath,e.LSH)("alt",o.recipeInfo.description),e.xp6(4),e.Oqu(o.recipeInfo.name),e.xp6(19),e.hij(" ",o.recipeInfo.description," "),e.xp6(4),e.Q6J("ngForOf",o.recipeInfo.ingredients))},dependencies:[a.rH,I.w,u.sg]}),r})();function S(i,r){if(1&i){const n=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._UZ(2,"input",19),e.qZA(),e.TgZ(3,"div",20),e._UZ(4,"input",21),e.qZA(),e.TgZ(5,"div",20)(6,"button",4),e.NdJ("click",function(){const p=e.CHM(n).index,m=e.oxw();return e.KtG(m.onDeleteIngredient(p))}),e._uU(7,"X"),e.qZA()()()}2&i&&e.Q6J("formGroupName",r.index)}let f=(()=>{var i;class r{get recipeControls(){return this.recipeForm.get("ingredients").controls}constructor(t,o,p){this.route=t,this.recipeService=o,this.router=p,this.editMode=!1}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.editMode=null!=t.id,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onDeleteIngredient(t){this.recipeForm.get("ingredients").removeAt(t)}onAddIngredient(){this.recipeForm.get("ingredients").push(new c.cw({name:new c.NI(null,c.kI.required),amount:new c.NI(null,[c.kI.required,c.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let t="",o="",p="",m=new c.Oe([]);if(this.editMode){const l=this.recipeService.getRecipe(this.id);if(t=l.name,o=l.imagePath,p=l.description,l.ingredients)for(let h of l.ingredients)m.push(new c.cw({name:new c.NI(h.name,c.kI.required),amount:new c.NI(h.amount,[c.kI.required,c.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new c.cw({name:new c.NI(t,c.kI.required),imagePath:new c.NI(o,c.kI.required),description:new c.NI(p,c.kI.required),ingredients:m})}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(a.gz),e.Y36(d.j),e.Y36(a.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",11),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",13),e.qZA()()(),e.TgZ(31,"div",0)(32,"div",14),e.YNc(33,S,8,1,"div",15),e._UZ(34,"hr"),e.TgZ(35,"div",0)(36,"div",1)(37,"button",16),e.NdJ("click",function(){return o.onAddIngredient()}),e._uU(38,"Add Ingredient"),e.qZA()()()()()()()()),2&t){const p=e.MAs(21);e.xp6(2),e.Q6J("formGroup",o.recipeForm),e.xp6(3),e.Q6J("disabled",!o.recipeForm.valid),e.xp6(19),e.Q6J("src",p.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",o.recipeControls)}},dependencies:[c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,u.sg]}),r})(),F=(()=>{var i;class r{constructor(t){this.recipeService=t}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(d.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:4,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],["alt","",1,"img-responsive",2,"max-height","50px",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&t&&(e.s9C("routerLink",o.index),e.xp6(3),e.Oqu(o.recipe.name),e.xp6(2),e.Oqu(o.recipe.description),e.xp6(2),e.Q6J("src",o.recipe.imagePath,e.LSH))},dependencies:[a.rH,a.Od]}),r})();function x(i,r){if(1&i&&e._UZ(0,"app-recipe-item",4),2&i){const t=r.index;e.Q6J("recipe",r.$implicit)("index",t)}}let q=(()=>{var i;class r{constructor(t){this.recipesService=t,this.recipes=[]}ngOnInit(){this.recipeSubscription=this.recipesService.recipesChanged.subscribe(t=>{this.recipes=t}),this.recipes=this.recipesService.getRecipes()}ngOnDestroy(){this.recipeSubscription.unsubscribe()}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(d.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],["routerLink","new",1,"btn","btn-success"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,x,1,2,"app-recipe-item",3),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",o.recipes))},dependencies:[a.rH,u.sg,F]}),r})(),w=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[a.lC,q]}),r})();var y=s(4993);const g=(i,r)=>{const n=(0,e.f3M)(d.j).getRecipes();return 0===n.length?(0,e.f3M)(y.Z).fetchRecipes():n},N=[{path:"",canActivate:[()=>{const i=(0,e.f3M)(_.e),r=(0,e.f3M)(a.F0);return i.user.pipe((0,R.q)(1),(0,C.U)(n=>!!n||r.createUrlTree(["/auth"])))}],resolve:[g],component:w,children:[{path:"",component:A},{path:"new",component:f},{path:":id",component:U,resolve:[g]},{path:":id/edit",component:f,resolve:[g]}]}];let k=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(N),a.Bz]}),r})(),J=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz,c.UX,k,Z.m]}),r})()}}]);