<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <el-button size="small" type="success" @click="GetCityList()">导出乡镇数据</el-button>
    <el-button size="small" type="success" @click="GetCountryList()">导出行政村数据</el-button>
    <el-button size="small" type="success" @click="GetGroupList()">导出组别数据</el-button>
  </div>
</template>
<script>
    const { export_json_to_excel } = require('../vendor/Export2Excel.js')
    
    export default {
        data:function(){
            return{
                ExportList:[]
            }
        },
    methods: {
        //格式化
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        },
        //获取城镇数据
      	GetCityList:function(){
          var that=this;//与this区别开
          that.ExportList=[];
          this.$db.transaction(function(tx){
            tx.executeSql("select * from City",[],function(tx,res){
                for(var i=0;i<res.rows.length;i++){
                    that.ExportList.push(res.rows[i]);
                }
                that.getExcel_city(that.ExportList);
              },function(tx,err){
                console.log(err);
              }
            );
          });		
        },
        //导出城镇方法
        getExcel_city(res) {
            require.ensure([], () => {
                const tHeader = ['编码', '名称']
                const filterVal = ['CityID', 'Name']
                const list = res
                const data = this.formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '城镇列表')
            })
        },
        //获取乡村数据
      	GetCountryList:function(){
          var that=this;//与this区别开
          that.ExportList=[];
          this.$db.transaction(function(tx){
            tx.executeSql("select * from County",[],function(tx,res){
                for(var i=0;i<res.rows.length;i++){
                    that.ExportList.push(res.rows[i]);
                }
                that.getExcel_county(that.ExportList);
              },function(tx,err){
                console.log(err);
              }
            );
          });		
        },
        //导出乡村方法
        getExcel_county(res) {
            require.ensure([], () => {
                const tHeader = ['城镇编码','乡村编码', '名称']
                const filterVal = ['CityID','CountyID', 'Name']
                const list = res
                const data = this.formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '行政村列表')
            })
        },
        //获取组别数据
      	GetGroupList:function(){
          var that=this;//与this区别开
          that.ExportList=[];
          this.$db.transaction(function(tx){
            tx.executeSql("select * from GroupList",[],function(tx,res){
                for(var i=0;i<res.rows.length;i++){
                    that.ExportList.push(res.rows[i]);
                }
                console.log(that.ExportList);
                that.getExcel_group(that.ExportList);
              },function(tx,err){
                console.log(err);
              }
            );
          });		
        },
        //导出组别方法
        getExcel_group(res) {
            require.ensure([], () => {
                const tHeader = ['城镇编码','乡村编码', '名称']
                const filterVal = ['CountryID','GroupID', 'Name']
                const list = res
                const data = this.formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '组别列表')
            })
        }
    },
    watch: {
    },
    filters: {
    }
  }
</script>
