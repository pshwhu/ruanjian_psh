(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75d4dca4"],{"01ca":function(t,e,i){"use strict";i.d(e,"f",(function(){return a})),i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return o})),i.d(e,"g",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return u}));var n=i("b775");function a(t){return Object(n["a"])({url:"/iot/model/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/iot/model/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/iot/model",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/iot/model/import",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/iot/model",method:"put",data:t})}function c(t){return Object(n["a"])({url:"/iot/model/"+t,method:"delete"})}function u(t){return Object(n["a"])({url:"/iot/model/cache/"+t,method:"get"})}},"10f3":function(t,e,i){"use strict";i.d(e,"e",(function(){return a})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o})),i.d(e,"g",(function(){return l})),i.d(e,"f",(function(){return c})),i.d(e,"b",(function(){return u}));var n=i("b775");function a(t){return Object(n["a"])({url:"/iot/group/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/iot/group/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/iot/group/getDeviceIds/"+t,method:"get"})}function o(t){return Object(n["a"])({url:"/iot/group",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/iot/group",method:"put",data:t})}function c(t){return Object(n["a"])({url:"/iot/group/updateDeviceGroups",method:"put",data:t})}function u(t){return Object(n["a"])({url:"/iot/group/"+t,method:"delete"})}},"32d1":function(t,e,i){t.exports=i.p+"static/img/product.8957f07e.jpg"},"584f":function(t,e,i){"use strict";i.d(e,"l",(function(){return a})),i.d(e,"j",(function(){return r})),i.d(e,"k",(function(){return s})),i.d(e,"i",(function(){return o})),i.d(e,"e",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"f",(function(){return u})),i.d(e,"h",(function(){return d})),i.d(e,"g",(function(){return m})),i.d(e,"a",(function(){return p})),i.d(e,"m",(function(){return h})),i.d(e,"b",(function(){return v})),i.d(e,"d",(function(){return g}));var n=i("b775");function a(t){return Object(n["a"])({url:"/iot/device/unAuthlist",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/iot/device/listByGroup",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/iot/device/shortList",method:"get",params:t})}function o(){return Object(n["a"])({url:"/iot/device/all",method:"get"})}function l(t){return Object(n["a"])({url:"/iot/device/"+t,method:"get"})}function c(t){return Object(n["a"])({url:"/iot/device/synchronization/"+t,method:"get"})}function u(t){return Object(n["a"])({url:"/iot/device/getDeviceBySerialNumber/"+t,method:"get"})}function d(){return Object(n["a"])({url:"/iot/device/statistic",method:"get"})}function m(t){return Object(n["a"])({url:"/iot/device/runningStatus/"+t,method:"get"})}function p(t){return Object(n["a"])({url:"/iot/device",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/iot/device",method:"put",data:t})}function v(t){return Object(n["a"])({url:"/iot/device/"+t,method:"delete"})}function g(){return Object(n["a"])({url:"/iot/device/generator",method:"get"})}},8264:function(t,e,i){"use strict";i("e8bc")},c572:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"6px"}},[n("el-card",{staticStyle:{"margin-bottom":"6px"}},[n("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:t.queryParams,inline:!0,"label-width":"75px"}},[n("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入设备名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.deviceName,callback:function(e){t.$set(t.queryParams,"deviceName",e)},expression:"queryParams.deviceName"}})],1),n("el-form-item",{attrs:{label:"产品名称",prop:"productName"}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入产品名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.productName,callback:function(e){t.$set(t.queryParams,"productName",e)},expression:"queryParams.productName"}})],1),n("el-form-item",{attrs:{label:"设备状态",prop:"status"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择设备状态",clearable:"",size:"small"},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.dict.type.iot_device_status,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"我的分组"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择我的分组",clearable:"",size:"small"},model:{value:t.queryParams.groupId,callback:function(e){t.$set(t.queryParams,"groupId",e)},expression:"queryParams.groupId"}},t._l(t.myGroupList,(function(t){return n("el-option",{key:t.groupId,attrs:{label:t.groupName,value:t.groupId}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1),n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:add"],expression:"['iot:device:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.handleEditDevice(0)}}},[t._v("新增")])],1)],1)],1),n("el-card",{staticStyle:{"padding-bottom":"100px"}},[n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:30}},t._l(t.deviceList,(function(e,a){return n("el-col",{key:a,staticStyle:{"margin-bottom":"30px","text-align":"center"},attrs:{xs:24,sm:12,md:12,lg:8,xl:6}},[n("el-card",{staticClass:"card-item",attrs:{"body-style":{padding:"20px"},shadow:"always"}},[n("el-row",{attrs:{type:"flex",gutter:10,justify:"space-between"}},[n("el-col",{staticStyle:{"text-align":"left"},attrs:{span:20}},[n("el-link",{staticStyle:{"font-weight":"bold","font-size":"16px","line-height":"32px"},attrs:{type:"",underline:!1},on:{click:function(i){return t.handleEditDevice(e)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分享的设备",placement:"top-start"}},[1!=e.isOwner?n("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"share"}}):t._e()],1),1==e.isOwner?n("svg-icon",{attrs:{"icon-class":"device"}}):t._e(),t._v(" "+t._s(e.deviceName)+" "),n("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("Version "+t._s(e.firmwareVersion))])],1)],1),n("el-col",{attrs:{span:4}},[n("div",{staticStyle:{"font-size":"28px",color:"#ccc"}},[3==e.status&&e.rssi>="-55"?n("svg-icon",{attrs:{"icon-class":"wifi_4"}}):3==e.status&&e.rssi>="-70"&&e.rssi<"-55"?n("svg-icon",{attrs:{"icon-class":"wifi_3"}}):3==e.status&&e.rssi>="-85"&&e.rssi<"-70"?n("svg-icon",{attrs:{"icon-class":"wifi_2"}}):3==e.status&&e.rssi>="-100"&&e.rssi<"-85"?n("svg-icon",{attrs:{"icon-class":"wifi_1"}}):n("svg-icon",{attrs:{"icon-class":"wifi_0"}})],1)])],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:15}},[n("div",{staticStyle:{"text-align":"left","line-height":"40px","white-space":"nowrap"}},[n("dict-tag",{staticStyle:{display:"inline-block"},attrs:{options:t.dict.type.iot_device_status,value:e.status,size:"small"}}),n("span",{staticStyle:{display:"inline-block",margin:"0 10px"}},[1==e.isShadow?n("el-tag",{attrs:{type:"success",size:"small"}},[t._v("影子")]):n("el-tag",{attrs:{type:"info",size:"small"}},[t._v("影子")])],1),n("dict-tag",{staticStyle:{display:"inline-block"},attrs:{options:t.dict.type.iot_location_way,value:e.locationWay,size:"small"}})],1),n("el-descriptions",{staticStyle:{"white-space":"nowrap"},attrs:{column:1,size:"mini"}},[n("el-descriptions-item",{attrs:{label:"编号"}},[t._v(" "+t._s(e.serialNumber)+" ")]),n("el-descriptions-item",{attrs:{label:"产品"}},[t._v(" "+t._s(e.productName)+" ")]),n("el-descriptions-item",{attrs:{label:"激活时间"}},[t._v(" "+t._s(t.parseTime(e.activeTime,"{y}-{m}-{d}"))+" ")])],1)],1),n("el-col",{attrs:{span:9}},[n("div",{staticStyle:{"margin-top":"10px"}},[null!=e.imgUrl&&""!=e.imgUrl?n("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{lazy:"","preview-src-list":[t.baseUrl+e.imgUrl],src:t.baseUrl+e.imgUrl,fit:"cover"}}):n("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[i("32d1")],src:i("32d1"),fit:"cover"}})],1)])],1),n("el-descriptions",{staticStyle:{height:"82px","margin-top":"10px",overflow:"hidden"},attrs:{column:2,border:"",size:"mini"}},[t._l(e.readOnlyList,(function(e){return n("el-descriptions-item",{key:e.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("span",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden",height:"40px"}},[t._v(t._s(e.name))])]),n("el-link",{staticStyle:{"white-space":"nowrap"},attrs:{type:"primary",underline:!1}},[t._v(t._s(""==e.shadow?"0":e.shadow)+" "+t._s(null==e.unit?"":e.unit))])],2)})),t._l(e.boolList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-switch",{attrs:{"active-value":"1","inactive-value":"0",disabled:t.shadowUnEnable(e)},on:{change:function(n){return t.publishThingsModel(e,i)}},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}})],2)})),t._l(e.enumList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini",title:i.name,disabled:t.shadowUnEnable(e)},on:{change:function(n){return t.publishThingsModel(e,i)}},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}},t._l(i.enumList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1)],2)})),t._l(e.decimalList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-input",{attrs:{placeholder:"小数："+i.name,size:"mini",title:"小数："+i.name,disabled:t.shadowUnEnable(e)},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}},[n("el-button",{staticStyle:{"font-size":"16px",padding:"10px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(n){return t.publishThingsModel(e,i)}},slot:"append"})],1)],2)})),t._l(e.integerList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-input",{attrs:{placeholder:"整数："+i.name,title:"整数："+i.name,size:"mini",disabled:t.shadowUnEnable(e)},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}},[n("el-button",{staticStyle:{"font-size":"16px",padding:"10px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(n){return t.publishThingsModel(e,i)}},slot:"append"})],1)],2)})),t._l(e.arrayList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-input",{attrs:{placeholder:"数组："+i.name,title:"数组："+i.name,size:"mini",disabled:t.shadowUnEnable(e)},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}},[n("el-button",{staticStyle:{"font-size":"16px",padding:"10px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(n){return t.publishThingsModel(e,i)}},slot:"append"})],1)],2)})),t._l(e.stringList,(function(i){return n("el-descriptions-item",{key:i.id,attrs:{contentStyle:{height:"40px"}}},[n("template",{slot:"label"},[n("div",{staticStyle:{"white-space":"nowrap","text-overflow":"ellipsis","min-width":"48px",overflow:"hidden"},attrs:{title:i.name}},[t._v(t._s(i.name))])]),n("el-input",{attrs:{placeholder:"字符串："+i.name,title:"字符串："+i.name,size:"mini",disabled:t.shadowUnEnable(e)},model:{value:i.shadow,callback:function(e){t.$set(i,"shadow",e)},expression:"subItem.shadow"}},[n("el-button",{staticStyle:{"font-size":"16px",padding:"10px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(n){return t.publishThingsModel(e,i)}},slot:"append"})],1)],2)}))],2),n("el-button-group",{staticStyle:{"margin-top":"15px"}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:edit"],expression:"['iot:device:edit']"}],attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(i){return t.handleEditDevice(e)}}},[t._v("详情 ")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:remove"],expression:"['iot:device:remove']"}],attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(i){return t.handleDelete(e)}}},[t._v("删除")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:edit"],expression:"['iot:device:edit']"}],attrs:{type:"success",size:"mini",icon:"el-icon-odometer",disabled:3!=e.status},on:{click:function(i){return t.handleMonitor(e)}}},[t._v("实时监测")])],1)],1)],1)})),1),0==t.total?n("el-empty",{attrs:{description:"暂无数据，请添加设备"}}):t._e(),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize,pageSizes:[12,24,36,60]},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),n("el-dialog",{attrs:{title:"实时监测",visible:t.open,width:"800px"},on:{"update:visible":function(e){t.open=e}}},[n("div",{staticStyle:{"margin-top":"-50px"}},[n("el-divider")],1),n("el-form",{attrs:{inline:!0,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"监测间隔(ms)"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"取值范围500-10000毫秒",placement:"top"}},[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入监测间隔",type:"number",clearable:"",size:"small"},model:{value:t.monitorInterval,callback:function(e){t.monitorInterval=e},expression:"monitorInterval"}})],1)],1),n("el-form-item",{attrs:{label:"监测次数"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"取值方位1-300",placement:"top"}},[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入监测次数",type:"number",clearable:"",size:"small"},model:{value:t.monitorNumber,callback:function(e){t.monitorNumber=e},expression:"monitorNumber"}})],1)],1),n("el-form-item",[n("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"success",icon:"el-icon-refresh",size:"mini",disabled:3!=t.monitorDevice.status},on:{click:function(e){return t.updateMonitorParameters()}}},[t._v("更 新")])],1)],1),n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],attrs:{gutter:20,"element-loading-text":"正在接收设备数据，请耐心等待......","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},t._l(t.monitorThings,(function(t,e){return n("el-col",{key:e,staticStyle:{"margin-bottom":"20px"},attrs:{span:12}},[n("el-card",{attrs:{shadow:"hover","body-style":{paddingTop:"10px",marginBottom:"-20px"}}},[n("div",{ref:"monitor",refInFor:!0,staticStyle:{height:"210px",padding:"0"}})])],1)})),1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("关 闭")])],1)],1)],1)],1)},a=[],r=i("c7eb"),s=i("1da1"),o=i("ade3"),l=(i("a9e3"),i("b64b"),i("b0c0"),i("d3b7"),i("25f0"),i("fb6a"),i("4de4"),i("313e")),c=i("584f"),u=i("01ca"),d=i("10f3"),m={name:"Device",dicts:["iot_device_status","iot_is_enable","iot_location_way"],components:{},data:function(){return{monitorInterval:1e3,monitorNumber:30,monitorDevice:{},chart:[],dataList:[],monitorThings:[],loading:!0,chartLoading:!0,total:0,deviceList:[],myGroupList:[],title:"",open:!1,daterangeActiveTime:[],baseUrl:"/prod-api",queryParams:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({pageNum:1,pageSize:12,deviceName:null,productId:null,groupId:null},"groupId",null),"productName",null),"userId",null),"userName",null),"tenantId",null),"tenantName",null),"serialNumber",null),"status",null),"networkAddress",null),"activeTime",null)}},created:function(){var t=this.$route.query.productId;null!=t&&(this.queryParams.productId=Number(t),this.queryParams.groupId=null);var e=this.$route.query.groupId;null!=e&&(this.queryParams.groupId=Number(e),this.queryParams.productId=null),this.connectMqtt()},activated:function(){var t=this.$route.query.t;if(null!=t&&t!=this.uniqueId){this.uniqueId=t;var e=this.$route.query.pageNum;null!=e&&(this.queryParams.pageNum=Number(e));var i=this.$route.query.productId;null!=i&&(this.queryParams.productId=Number(i),this.queryParams.groupId=null);var n=this.$route.query.groupId;null!=n&&(this.queryParams.groupId=Number(n),this.queryParams.productId=null),this.getList()}},methods:{connectMqtt:function(){var t=this;return Object(s["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=t.$mqttTool.client){e.next=3;break}return e.next=3,t.$mqttTool.connect();case 3:t.mqttCallback(),t.getList();case 5:case"end":return e.stop()}}),e)})))()},publishThingsModel:function(t,e){var i=this;Object(u["b"])(t.productId).then((function(n){for(var a=JSON.parse(n.data),r=0,s=0;s<a.functions.length;s++)if(e.id==a.functions[s].id){r=2;break}if(0==r)for(var o=0;o<a.properties.length;o++)if(e.id==a.properties[o].id){r=1;break}0!=r&&i.mqttPublish(r,t,e)}))},mqttPublish:function(t,e,i){var n=this,a="",r="";if(1==t)3==e.status?a="/"+e.productId+"/"+e.serialNumber+"/property-online/get":e.isShadow&&(a="/"+e.productId+"/"+e.serialNumber+"/property-offline/post"),r='[{"id":"'+i.id+'","value":"'+i.shadow+'"}]';else if(2==t)3==e.status?a="/"+e.productId+"/"+e.serialNumber+"/function-online/get":e.isShadow&&(a="/"+e.productId+"/"+e.serialNumber+"/function-offline/post"),r='[{"id":"'+i.id+'","value":"'+i.shadow+'"}]';else if(3==t)a="/"+e.productId+"/"+e.serialNumber+"/ota/get",r='{"version":1.1}';else{if(4!=t)return;a="/"+e.productId+"/"+e.serialNumber+"/monitor/get",r='{"count":'+i.value+',"interval":'+this.monitorInterval+"}"}""!=a&&this.$mqttTool.publish(a,r,i.name).then((function(t){n.$modal.notifySuccess(t)})).catch((function(t){n.$modal.notifyError(t)}))},mqttCallback:function(){var t=this;this.$mqttTool.client.on("message",(function(e,i,n){var a=e.split("/"),r=(a[1],a[2]);if(i=JSON.parse(i.toString()),"status"==a[3]){console.log("接收到【设备状态】主题：",e),console.log("接收到【设备状态】内容：",i);for(var s=0;s<t.deviceList.length;s++)if(t.deviceList[s].serialNumber==r)return t.deviceList[s].status=i.status,t.deviceList[s].isShadow=i.isShadow,void(t.deviceList[s].rssi=i.rssi)}if("monitor"==a[3]){console.log("接收到【设备状态】主题：",e),console.log("接收到【设备状态】内容：",i),t.chartLoading=!1;for(var o=0;o<i.length;o++)for(var l=i[o].value,c=i[o].id,u=(i[o].remark,0);u<t.dataList.length;u++)if(c==t.dataList[u].id){t.dataList[u].length>50&&t.dataList[u].shift(),t.dataList[u].data.push([t.getTime(),l]),t.chart[u].setOption({series:[{data:t.dataList[u].data}]});break}}if("property"==a[3]||"function"==a[3]){console.log("接收到【物模型】主题：",e),console.log("接收到【物模型】内容：",i);for(var d=0;d<t.deviceList.length;d++)if(t.deviceList[d].serialNumber==r){for(var m=0;m<i.length;m++){for(var p=!1,h=0;h<t.deviceList[d].boolList.length&&!p;h++)if(t.deviceList[d].boolList[h].id==i[m].id){t.deviceList[d].boolList[h].shadow=i[m].value,p=!0;break}for(var v=0;v<t.deviceList[d].enumList.length&&!p;v++)if(t.deviceList[d].enumList[v].id==i[m].id){t.deviceList[d].enumList[v].shadow=i[m].value,p=!0;break}for(var g=0;g<t.deviceList[d].stringList.length&&!p;g++)if(t.deviceList[d].stringList[g].id==i[m].id){t.deviceList[d].stringList[g].shadow=i[m].value,p=!0;break}for(var f=0;f<t.deviceList[d].arrayList.length&&!p;f++)if(t.deviceList[d].arrayList[f].id==i[m].id){t.deviceList[d].arrayList[f].shadow=i[m].value,p=!0;break}for(var b=0;b<t.deviceList[d].integerList.length&&!p;b++)if(t.deviceList[d].integerList[b].id==i[m].id){t.deviceList[d].integerList[b].shadow=i[m].value,p=!0;break}for(var y=0;y<t.deviceList[d].decimalList.length&&!p;y++)if(t.deviceList[d].decimalList[y].id==i[m].id){t.deviceList[d].decimalList[y].shadow=i[m].value,p=!0;break}for(var L=0;L<t.deviceList[d].readOnlyList.length&&!p;L++)if(t.deviceList[d].readOnlyList[L].id==i[m].id){t.deviceList[d].readOnlyList[L].shadow=i[m].value,p=!0;break}}return}}}))},mqttSubscribe:function(t){for(var e=[],i=0;i<t.length;i++){var n="/"+t[i].productId+"/"+t[i].serialNumber+"/status/post",a="/"+t[i].productId+"/"+t[i].serialNumber+"/monitor/post",r="/"+t[i].productId+"/"+t[i].serialNumber+"/property/post",s="/"+t[i].productId+"/"+t[i].serialNumber+"/function/post";e.push(n),e.push(a),e.push(r),e.push(s)}this.$mqttTool.subscribe(e)},getGroupList:function(){var t=this;this.loading=!0;var e={pageSize:30,pageNum:1,userId:this.$store.state.user.userId};Object(d["e"])(e).then((function(e){t.myGroupList=e.rows}))},updateMonitorParameters:function(){for(var t=0;t<this.dataList.length;t++)this.dataList[t].data=[];(this.monitorInterval<500||this.monitorInterval>1e4)&&this.$modal.alertError("实时监测的间隔范围500-10000毫秒"),(0==this.monitorNumber||this.monitorNumber>300)&&this.$modal.alertError("实时监测数量范围1-300");var e={name:"更新实时监测"};e.value=this.monitorNumber,this.mqttPublish(4,this.monitorDevice,e),this.chartLoading=!0},handleMonitor:function(t){this.open=!0,this.monitorLoading=!0,this.monitorDevice=t,this.getCacheThingsModdel(t.productId);var e={name:"实时监测"};e.value=this.monitorNumber,this.mqttPublish(4,t,e)},stopMonitor:function(){this.dataList=[],this.chartLoading=!0;var t={name:"关闭实时监测",value:0};this.mqttPublish(4,this.monitorDevice,t)},getList:function(){var t=this;this.loading=!0,this.queryParams.params={},null!=this.daterangeActiveTime&&""!=this.daterangeActiveTime&&(this.queryParams.params["beginActiveTime"]=this.daterangeActiveTime[0],this.queryParams.params["endActiveTime"]=this.daterangeActiveTime[1]),this.getGroupList(),Object(c["k"])(this.queryParams).then((function(e){t.deviceList=e.rows,t.total=e.total;for(var i=0;i<t.deviceList.length;i++){for(var n=0;n<t.deviceList[i].boolList.length;n++)null==t.deviceList[i].boolList[n].shadow&&(t.deviceList[i].boolList[n].shadow="0");var a=t.deviceList[i].readOnlyList.length;0==a?t.getThingsCount(3,t.deviceList[i]):a>0&&a<3?t.getThingsCount(2,t.deviceList[i]):a>2&&a<5?t.getThingsCount(1,t.deviceList[i]):a>4&&a<7?t.getThingsCount(0,t.deviceList[i]):t.deviceList[i].readOnlyList=t.deviceList[i].readOnlyList.slice(0,6)}t.deviceList&&t.deviceList.length>0&&t.mqttSubscribe(t.deviceList),t.loading=!1}))},getThingsCount:function(t,e){var i=e.boolList.length,n=e.enumList.length,a=e.integerList.length,r=e.decimalList.length,s=e.stringList.length,o=e.arrayList.length;return i>=t?(e.boolList=e.boolList.slice(0,t),e.enumList=[],e.integerList=[],e.decimalList=[],e.stringList=[],void(e.arrayList=[])):(t-=i,n>=t?(e.enumList=e.enumList.slice(0,t),e.integerList=[],e.decimalList=[],e.stringList=[],void(e.arrayList=[])):(t-=n,a>=t?(e.integerList=e.integerList.slice(0,t),e.decimalList=[],e.stringList=[],void(e.arrayList=[])):(t-=a,r>=t?(e.decimalList=e.decimalList.slice(0,t),e.stringList=[],void(e.arrayList=[])):(t-=r,s>=t?(e.stringList=e.stringList.slice(0,t),void(e.arrayList=[])):(t-=s,void(o>=t&&(e.arrayList=e.arrayList.slice(0,t))))))))},cancel:function(){this.open=!1,this.stopMonitor()},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.daterangeActiveTime=[],this.queryParams.productId=null,this.queryParams.groupId=null,this.resetForm("queryForm"),this.handleQuery()},handleEditDevice:function(t){var e=0;0!=t&&(e=t.deviceId||this.ids),this.$router.push({path:"/iot/device-edit",query:{deviceId:e,pageNum:this.queryParams.pageNum}})},handleDelete:function(t){var e=this,i=t.deviceId||this.ids;this.$modal.confirm('是否确认删除设备编号为"'+i+'"的数据项？').then((function(){return Object(c["b"])(i)})).then((function(){e.getList(),e.$modal.msgSuccess("删除成功")})).catch((function(){}))},shadowUnEnable:function(t){return 3!=t.status&&0==t.isShadow},getCacheThingsModdel:function(t){var e=this;Object(u["b"])(t).then((function(t){var i=JSON.parse(t.data);e.monitorThings=i.properties.filter((function(t){return 1==t.isMonitor})),e.dataList=[];for(var n=0;n<e.monitorThings.length;n++)e.dataList.push({id:e.monitorThings[n].id,name:e.monitorThings[n].name,data:[]});e.$nextTick((function(){this.getMonitorChart()}))}))},getMonitorChart:function(){for(var t=["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],e=0;e<this.monitorThings.length;e++){var i;this.chart[e]=l["init"](this.$refs.monitor[e]),i={title:{left:"center",text:this.monitorThings[e].name+" 单位 "+(void 0!=this.monitorThings[e].datatype.unit?this.monitorThings[e].datatype.unit:"无")+"）",textStyle:{fontSize:14}},grid:{top:"40px",left:"20px",right:"20px",bottom:"10px",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{animation:!0}},xAxis:{type:"time",show:!1,splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!0}},series:[{name:this.monitorThings[e].name,type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:e>9?t[0]:t[e]},areaStyle:{},data:[]}]},i&&this.chart[e].setOption(i)}},getTime:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate(),a=t.getHours(),r=t.getMinutes(),s=t.getSeconds();return i=i<10?"0"+i:i,n=n<10?"0"+n:n,a=a<10?"0"+a:a,e+"-"+i+"-"+n+" "+a+":"+r+":"+s}}},p=m,h=(i("8264"),i("2877")),v=Object(h["a"])(p,n,a,!1,null,"c2c7d6fc",null);e["default"]=v.exports},e8bc:function(t,e,i){}}]);