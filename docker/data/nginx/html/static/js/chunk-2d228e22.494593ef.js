(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228e22"],{daa0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"6px"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticStyle:{"margin-bottom":"6px"}},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"客户端ID",prop:"clientId"}},[a("el-input",{attrs:{placeholder:"请输入客户端ID",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.clientId,callback:function(t){e.$set(e.queryParams,"clientId",t)},expression:"queryParams.clientId"}})],1),a("el-form-item",{attrs:{label:"授权平台",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择平台",clearable:"",size:"small"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.dict.type.oauth_platform,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")]),a("el-tag",{staticStyle:{"margin-left":"15px"},attrs:{type:"danger"}},[e._v("该功能暂不可用,后面版本发布")])],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:clientDetails:add"],expression:"['iot:clientDetails:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),a("el-card",{staticStyle:{"padding-bottom":"100px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.clientDetailsList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"客户端ID",align:"center",prop:"clientId"}}),a("el-table-column",{attrs:{label:"资源",align:"center",prop:"resourceIds"}}),a("el-table-column",{attrs:{label:"权限范围",align:"center",prop:"scope"}}),a("el-table-column",{attrs:{label:"授权平台",align:"center",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.oauth_platform,value:t.row.type}})]}}])}),a("el-table-column",{attrs:{label:"自动授权",align:"center",prop:"autoapprove"},scopedSlots:e._u([{key:"default",fn:function(t){return["true"==t.row.autoapprove?a("span",[e._v("自动授权")]):e._e(),"false"==t.row.autoapprove?a("span",[e._v("用户验证")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"授权模式",align:"center",prop:"authorizedGrantTypes"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(e.formatGrantTypesDisplay(t.row.authorizedGrantTypes))}})]}}])}),a("el-table-column",{attrs:{label:"回调地址",align:"center",prop:"webServerRedirectUri","min-width":"130"}}),a("el-table-column",{attrs:{label:"权限",align:"center",prop:"authorities"}}),a("el-table-column",{attrs:{label:"Token有效期",align:"center",prop:"accessTokenValidity"}}),a("el-table-column",{attrs:{label:"Token刷新时间",align:"center",prop:"refreshTokenValidity"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:clientDetails:edit"],expression:"['iot:clientDetails:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:clientDetails:remove"],expression:"['iot:clientDetails:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete",disabled:""},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"授权平台",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择授权平台"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.dict.type.oauth_platform,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1),a("el-form-item",{attrs:{label:"客户端ID",prop:"clientId"}},[a("el-input",{attrs:{placeholder:"请输入客户端ID"},model:{value:e.form.clientId,callback:function(t){e.$set(e.form,"clientId",t)},expression:"form.clientId"}})],1),a("el-form-item",{attrs:{label:"资源集合",prop:"resourceIds"}},[a("el-input",{attrs:{placeholder:"请输入资源"},model:{value:e.form.resourceIds,callback:function(t){e.$set(e.form,"resourceIds",t)},expression:"form.resourceIds"}})],1),a("el-form-item",{attrs:{label:"授权模式",prop:"authorizedGrantTypes"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入授权模式"},model:{value:e.form.authorizedGrantTypes,callback:function(t){e.$set(e.form,"authorizedGrantTypes",t)},expression:"form.authorizedGrantTypes"}})],1),a("el-form-item",{attrs:{label:"秘钥",prop:"clientSecret"}},[a("el-input",{attrs:{placeholder:"请输入客户端秘钥"},model:{value:e.form.clientSecret,callback:function(t){e.$set(e.form,"clientSecret",t)},expression:"form.clientSecret"}})],1),a("el-form-item",{attrs:{label:"回调地址",prop:"webServerRedirectUri"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入回调地址"},model:{value:e.form.webServerRedirectUri,callback:function(t){e.$set(e.form,"webServerRedirectUri",t)},expression:"form.webServerRedirectUri"}})],1),a("el-form-item",{attrs:{label:"权限",prop:"authorities"}},[a("el-input",{attrs:{placeholder:"请输入权限"},model:{value:e.form.authorities,callback:function(t){e.$set(e.form,"authorities",t)},expression:"form.authorities"}})],1),a("el-form-item",{attrs:{label:"Token有效期",prop:"accessTokenValidity"}},[a("el-input",{attrs:{placeholder:"请输入Token有效时间"},model:{value:e.form.accessTokenValidity,callback:function(t){e.$set(e.form,"accessTokenValidity",t)},expression:"form.accessTokenValidity"}})],1),a("el-form-item",{attrs:{label:"Token刷新时间",prop:"refreshTokenValidity"}},[a("el-input",{attrs:{placeholder:"请输入Token刷新有效时间"},model:{value:e.form.refreshTokenValidity,callback:function(t){e.$set(e.form,"refreshTokenValidity",t)},expression:"form.refreshTokenValidity"}})],1),a("el-form-item",{attrs:{label:"预留信息",prop:"additionalInformation"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.additionalInformation,callback:function(t){e.$set(e.form,"additionalInformation",t)},expression:"form.additionalInformation"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",disabled:""},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},r=[],i=a("5530"),n=(a("d81d"),a("b775"));function o(e){return Object(n["a"])({url:"/iot/clientDetails/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/iot/clientDetails/"+e,method:"get"})}function c(e){return Object(n["a"])({url:"/iot/clientDetails",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/iot/clientDetails",method:"put",data:e})}function p(e){return Object(n["a"])({url:"/iot/clientDetails/"+e,method:"delete"})}var d={name:"ClientDetails",dicts:["oauth_platform"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,clientDetailsList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,clientId:null,authorizedGrantTypes:null,autoapprove:null,type:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.clientDetailsList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={clientId:null,resourceIds:null,clientSecret:null,scope:null,authorizedGrantTypes:null,webServerRedirectUri:null,authorities:null,accessTokenValidity:null,refreshTokenValidity:null,additionalInformation:null,autoapprove:null,type:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.clientId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加云云对接"},handleUpdate:function(e){var t=this;this.reset();var a=e.clientId||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改云云对接"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.clientId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.clientId||this.ids;this.$modal.confirm('是否确认删除云云对接编号为"'+a+'"的数据项？').then((function(){return p(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/clientDetails/export",Object(i["a"])({},this.queryParams),"clientDetails_".concat((new Date).getTime(),".xlsx"))},formatGrantTypesDisplay:function(e){for(var t=e.split(","),a="",l=0;l<t.length;l++)a=a+"<div style='background-color:#eee;margin:0 auto;margin-bottom:5px;width:86px;border-radius:5px;padding:3px;'>"+this.convertGrantType(t[l])+"</div>";return a},convertGrantType:function(e){return"client_credentials"==e?"客户端模式":"password"==e?"密码模式":"authorization_code"==e?"授权码模式":"implicit"==e?"简化模式":"refresh_token"==e?"刷新Token":""}}},m=d,f=a("2877"),h=Object(f["a"])(m,l,r,!1,null,null,null);t["default"]=h.exports}}]);