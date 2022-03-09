"use strict";(self.webpackChunkangular_hr_material=self.webpackChunkangular_hr_material||[]).push([[422],{3422:(Z,f,e)=>{e.r(f),e.d(f,{SettingsModule:()=>C});var r=e(9808),p=e(9224),o=e(294),_=e(4466),c=e(9291),t=e(5e3),u=e(5245);const s=function(n){return{color:n}};let m=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ahr-icon"]],inputs:{icon:"icon",label:"label",color:"color"},decls:2,vars:5,consts:[["aria-hidden","false",3,"ngStyle"]],template:function(a,v){1&a&&(t.TgZ(0,"mat-icon",0),t._uU(1),t.qZA()),2&a&&(t.Q6J("ngStyle",t.VKq(3,s,v.color)),t.uIk("aria-label",v.label),t.xp6(1),t.Oqu(v.icon))},directives:[u.Hw,r.PC],styles:[""]}),n})(),h=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ahr-settings-list"]],decls:10,vars:2,consts:[[1,"container-section"],[1,"settings-section"],[1,"settings-list"],[1,"example-card"],[3,"icon","label"],[1,"settings-outlet"]],template:function(a,v){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-card",3),t.TgZ(4,"mat-card-title-group"),t.TgZ(5,"mat-card-title"),t._uU(6,"Job Roles"),t.qZA(),t._UZ(7,"ahr-icon",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t._UZ(9,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(7),t.Q6J("icon","delete")("label","Configure Job Roles"))},directives:[p.a8,p.C1,p.n5,m,c.lC],styles:[""]}),n})();var M=e(4608),S=e(9402);const d=[{path:"",component:(()=>{class n{constructor(a){this.router=a,this.pageTitle="Global Settings"}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ahr-settings-section"]],decls:8,vars:1,consts:[[1,"container-section"],[3,"title"],[1,"settings-section"],[1,"settings-list"],[1,"settings-outlet"]],template:function(a,v){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"app-section-toolbar",1),t.TgZ(2,"div",0),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t._UZ(5,"ahr-search-control"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("title",v.pageTitle))},directives:[M.N,S.Q,c.lC],styles:[".settings-section[_ngcontent-%COMP%]{padding:2rem;display:grid;grid-template-columns:20% 80%;grid-gap:2rem;gap:2rem}"]}),n})(),children:[{path:"global",component:h},{path:"job-role",component:h},{path:"picklist",component:h},{path:"department",component:h},{path:"branch",component:h},{path:"board-template",component:h}]}];let i=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,p.QW,o.I,_.m,i]]}),n})()},9402:(Z,f,e)=>{e.d(f,{Q:()=>S});var r=e(3075),p=e(1135),o=e(5e3),_=e(9917),c=e(7531),t=e(9808),u=e(5245),s=e(7423),m=e(7322);function h(g,d){1&g&&(o.TgZ(0,"mat-icon"),o._uU(1,"search"),o.qZA())}function M(g,d){if(1&g){const i=o.EpF();o.TgZ(0,"button",5),o.NdJ("click",function(){return o.CHM(i),o.oxw().onSearchClear()}),o.TgZ(1,"mat-icon"),o._uU(2,"close"),o.qZA(),o.qZA()}}let S=(()=>{class g{constructor(i){this._searchService=i,this.dataSet$=new p.X([]),this.formControl=new r.NI("")}ngOnInit(){this._buildFormModel(),this._setupSearchService(),this._onSearchInputChanged()}ngOnDestroy(){this.formControlSubscription.unsubscribe()}onSearchClear(){this.formControl.setValue("")}_setupSearchService(){this._searchService.setupControl(this.formControl)}_buildFormModel(){this.searchFormGroup=new r.cw({formControl:this.formControl})}_onSearchInputChanged(){this.formControlSubscription=this.formControl.valueChanges.subscribe(i=>{this.searchValue=i})}}return g.\u0275fac=function(i){return new(i||g)(o.Y36(_.o))},g.\u0275cmp=o.Xpm({type:g,selectors:[["ahr-search-control"]],inputs:{dataSet$:"dataSet$"},decls:5,vars:3,consts:[[1,"ahr-search-control",3,"formGroup"],["matInput","","type","text","placeholder","Search...","formControlName","formControl"],[1,"ahr-search-input-icons"],[4,"ngIf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(i,C){1&i&&(o.TgZ(0,"div",0),o._UZ(1,"input",1),o.TgZ(2,"div",2),o.YNc(3,h,2,0,"mat-icon",3),o.YNc(4,M,3,0,"button",4),o.qZA(),o.qZA()),2&i&&(o.Q6J("formGroup",C.searchFormGroup),o.xp6(3),o.Q6J("ngIf",!C.searchValue&&""===C.searchValue),o.xp6(1),o.Q6J("ngIf",C.searchValue&&C.searchValue.length>0))},directives:[r.JL,r.sg,c.Nt,r.Fj,r.JJ,r.u,t.O5,u.Hw,s.lW,m.R9],styles:[".ahr-search-control[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;background-color:#fff;border-radius:5px}.ahr-search-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;padding:.5rem 1rem;background:transparent}.ahr-search-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:.85rem}.ahr-search-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.ahr-search-control[_ngcontent-%COMP%]   .ahr-search-input-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px}.ahr-search-control[_ngcontent-%COMP%]:focus{outline:1px solid black}"]}),g})()},4608:(Z,f,e)=>{e.d(f,{N:()=>_});var r=e(5e3),p=e(4594);const o=["*"];let _=(()=>{class c{constructor(){this.title=""}ngOnInit(){}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-section-toolbar"]],inputs:{title:"title"},ngContentSelectors:o,decls:6,vars:1,consts:[["color","secondary"],[1,"col1"],[1,"col2"]],template:function(u,s){1&u&&(r.F$t(),r.TgZ(0,"mat-toolbar",0),r.TgZ(1,"div",1),r.TgZ(2,"h2"),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r.Hsn(5),r.qZA(),r.qZA()),2&u&&(r.xp6(3),r.Oqu(s.title))},directives:[p.Ye],styles:['mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:80px;padding-inline:32px;background-color:var(--primary-color-light)}mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Inter,"sans-serif";font-size:1rem;font-weight:600}mat-toolbar[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}'],changeDetection:0}),c})()},9917:(Z,f,e)=>{e.d(f,{o:()=>c});var r=e(1135),p=e(9841);const o={isMatchingSearches(t){return Object.values(this).filter(m=>{if("string"==typeof m&&m.toLowerCase().includes(t.toLowerCase()))return m}).length>0}};var _=e(5e3);let c=(()=>{class t{constructor(){this.dataSetFiltered$=new r.X([])}setupControl(s){this.searchFormControl=s}addListener(s){var m;if(void 0===this.searchFormControl)throw"SearchService: the formControl is undefined. \n\nMaybe you forgot to provide the FormControl instance through the .setupControl() method before performing a search with the .filter() method";return(0,p.a)([s,null===(m=this.searchFormControl)||void 0===m?void 0:m.valueChanges]).subscribe(([h,M])=>{let S=[...h];S=h.filter(d=>(Object.assign(d,o),d.isMatchingSearches(M))),this.dataSetFiltered$.next(S)}),this.dataSetFiltered$}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);