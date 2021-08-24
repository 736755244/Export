<template>
  <div id="app">
    <download-excel class="button" :data="json_data" :fields="json_fields" name="UserInfo"></download-excel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        json_fields: {
          "User_Name": "name", //常规字段
          "City": "info.city", //支持嵌套属性
          "phone": {
            field: "phone.landline",
            callback: value => {//自定义回调函数
              return `Landline Phone - ${value}`;//拼接返回值
            }
          },
            "remark": {
                field: "info.remark",
                callback: value => {
                    return `Reamrk-  ${value}`;
                }
            }
        },
        json_data: [
          {
            name: "张三",
            info:{
                city: "New York",
                country: "EN",
                remark:"测试1"
            },
            phone: {
              mobile: "1",
              landline: "11"
            }
          },
          {
            name: "李四",
            info:{
                city: "BeiJing",
                country: "CN",
                remark:"测试2"
            },
            phone: {
              mobile: "2",
              landline: "22"
            }
          },
           {
            name: "王二",
            info:{
                city: "Nanjing",
                country: "CN",
                remark:"测试3"
            },
            phone: {
              mobile: "3",
              landline: "33"
            }
          }
        ],
        json_meta: [
          [{
            " key ": " charset ",
            " value ": " utf- 8 "
          }]
        ]
      };
    }
  }
</script>
