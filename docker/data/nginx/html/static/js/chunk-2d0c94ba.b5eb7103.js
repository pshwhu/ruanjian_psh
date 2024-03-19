(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c94ba"],{5911:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("el-row",[t("el-col",{staticClass:"card-box",attrs:{span:24}},[t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("基本信息")])]),t("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[t("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[t("tbody",[t("tr",[t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("Redis版本")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.redis_version))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("运行模式")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s("standalone"==e.cache.info.redis_mode?"单机":"集群"))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("端口")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.tcp_port))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("客户端数")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.connected_clients))]):e._e()])]),t("tr",[t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("运行时间(天)")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.uptime_in_days))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("使用内存")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.used_memory_human))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("使用CPU")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(parseFloat(e.cache.info.used_cpu_user_children).toFixed(2)))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("内存配置")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.maxmemory_human))]):e._e()])]),t("tr",[t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("AOF是否开启")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s("0"==e.cache.info.aof_enabled?"否":"是"))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("RDB是否成功")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.rdb_last_bgsave_status))]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("Key数量")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.dbSize?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.dbSize)+" ")]):e._e()]),t("td",{staticClass:"el-table__cell is-leaf"},[t("div",{staticClass:"cell"},[e._v("网络入口/出口")])]),t("td",{staticClass:"el-table__cell is-leaf"},[e.cache.info?t("div",{staticClass:"cell"},[e._v(e._s(e.cache.info.instantaneous_input_kbps)+"kps/"+e._s(e.cache.info.instantaneous_output_kbps)+"kps")]):e._e()])])])])])])],1),t("el-col",{staticClass:"card-box",attrs:{span:12}},[t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("命令统计")])]),t("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[t("div",{ref:"commandstats",staticStyle:{height:"420px"}})])])],1),t("el-col",{staticClass:"card-box",attrs:{span:12}},[t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("内存信息")])]),t("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[t("div",{ref:"usedmemory",staticStyle:{height:"420px"}})])])],1)],1)],1)},l=[],c=t("b775");function i(){return Object(c["a"])({url:"/monitor/cache",method:"get"})}var _=t("313e"),d={name:"Server",data:function(){return{commandstats:null,usedmemory:null,cache:[]}},created:function(){this.getList(),this.openLoading()},methods:{getList:function(){var e=this;i().then((function(a){e.cache=a.data,e.$modal.closeLoading(),e.commandstats=_["init"](e.$refs.commandstats,"macarons"),e.commandstats.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"命令",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:a.data.commandStats,animationEasing:"cubicInOut",animationDuration:1e3}]}),e.usedmemory=_["init"](e.$refs.usedmemory,"macarons"),e.usedmemory.setOption({tooltip:{formatter:"{b} <br/>{a} : "+e.cache.info.used_memory_human},series:[{name:"峰值",type:"gauge",min:0,max:1e3,detail:{formatter:e.cache.info.used_memory_human},data:[{value:parseFloat(e.cache.info.used_memory_human),name:"内存消耗"}]}]})}))},openLoading:function(){this.$modal.loading("正在加载缓存监控数据，请稍候！")}}},n=d,o=t("2877"),r=Object(o["a"])(n,s,l,!1,null,null,null);a["default"]=r.exports}}]);