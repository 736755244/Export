<template>
  <div id="test">
    	<!-- 此处展示城镇列表 -->
      <h2>城镇</h2>
			<div class="fl">
				<p v-for="i in citylist" :key="i.CityID" >{{i.Name}}</p>
			</div>
      <!-- 此处展示村落列表 -->
      <h2>村落</h2>
			<div class="fl">
				<p v-for="i in countrylist" :key="i.CountyID" >{{i.Name}}</p>
			</div>
      <!-- 此处展示组别列表 -->
      <h2>组别</h2>
			<div class="fl">
				<p v-for="i in grouplist" :key="i.GroupID">{{i.Name}}</p>
			</div>
  </div>
</template>
<script>
    export default {
        data:function(){
            return{
                citylist:[],//城镇列表
                countrylist:[],//村级列表
                grouplist:[],//所有组别列表
            }
        },
        created () {	
          //关联本地数据库
          this.$db.transaction(function(tx){
          //创建城镇、村落、组别三张表结构
            tx.executeSql('CREATE TABLE IF NOT EXISTS City (CityID unique  primary key , Name)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS County (CountyID unique  primary key ,CityID, Name)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS GroupList (GroupID unique primary key ,CountryID, Name,IsChoose)');
            
            //如果表中数据为空，则插入数据
            tx.executeSql('SELECT COUNT(*) AS NUM FROM City',[],function(tx,mes){
              if(mes.rows[0].NUM==0){
                console.log("插入城镇数据");
                tx.executeSql("insert into City(CityID,Name)values(1,'城厢镇')");
                tx.executeSql("insert into City(CityID,Name)values(2,'浮桥镇')");
                tx.executeSql("insert into City(CityID,Name)values(3,'璜泾镇')");
                tx.executeSql("insert into City(CityID,Name)values(4,'科教新城')");
                tx.executeSql("insert into City(CityID,Name)values(5,'浏河镇')");
                tx.executeSql("insert into City(CityID,Name)values(6,'娄东街道')");
                tx.executeSql("insert into City(CityID,Name)values(7,'沙溪镇')");
                tx.executeSql("insert into City(CityID,Name)values(8,'双凤镇')");
              }
            },function(tx,err){
              console.log(err);
            });
            tx.executeSql('SELECT COUNT(*) AS NUM FROM County',[],function(tx,mes){
              console.log(mes.rows[0].NUM);
              if(mes.rows[0].NUM==0){
                console.log("插入村落数据");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(1,1,'永丰村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(2,1,'胜泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(3,1,'万丰村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(4,1,'电站村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(5,1,'东林村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(6,1,'伟阳社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(7,1,'新农村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(8,1,'太丰社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(9,2,'茜泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(10,2,'马北村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(11,2,'新邵村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(12,2,'牌楼社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(13,2,'丁泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(14,2,'七丫村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(15,2,'九曲社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(16,2,'绿化村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(17,2,'时思村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(18,2,'时思社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(19,2,'浪港村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(20,2,'老闸社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(21,2,'三市村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(22,2,'方桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(23,2,'浮桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(24,2,'建红社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(25,2,'浮南社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(26,3,'新华村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(27,3,'新联村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(28,3,'荣文村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(29,3,'永乐村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(30,3,'荡茜村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(31,3,'王秀村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(32,3,'孙桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(33,3,'孟河村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(34,3,'杨漕村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(35,3,'新海村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(36,3,'新明村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(37,3,'长洲村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(38,3,'雅鹿村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(39,4,'南郊社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(40,4,'新丰社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(41,5,'浏南村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(42,5,'东仓村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(43,5,'何桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(44,5,'新闸村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(45,5,'闸北村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(46,5,'万安村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(47,5,'张桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(48,5,'新塘村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(49,6,'朝阳社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(50,6,'太东社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(51,6,'洋沙社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(52,6,'东郊社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(53,6,'太胜社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(54,6,'华盛园社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(55,6,'香花桥社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(56,6,'珠江社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(57,6,'小桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(58,6,'花北社区')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(59,6,'岳南村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(60,6,'陆渡村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(61,6,'红庙村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(62,6,'横沥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(63,6,'洙泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(64,7,'涂松村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(65,7,'印北村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(66,7,'洪泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(67,7,'半泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(68,7,'中荷村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(69,7,'松南村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(70,7,'胜利村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(71,7,'泥桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(72,7,'虹桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(73,7,'泰西村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(74,7,'太星村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(75,7,'岳星村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(76,7,'新建村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(77,7,'岳镇村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(78,7,'塘桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(79,7,'项桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(80,7,'庄西村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(81,7,'凡山村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(82,7,'香塘村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(83,7,'渠泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(84,8,'凤中村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(85,8,'黄桥村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(86,8,'勤力村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(87,8,'庆丰村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(88,8,'泥泾村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(89,8,'维新村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(90,8,'新闯村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(91,8,'新湖村')");
                tx.executeSql("insert into County(CountyID,CityID,Name)values(92,8,'新卫村')");
              }
            },function(tx,err){
              console.log(err);
            });
            tx.executeSql('SELECT COUNT(*) AS NUM FROM GroupList',[],function(tx,mes){
              console.log(mes.rows[0].NUM);
              if(mes.rows[0].NUM==0){
                console.log("插入组别数据");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(1,1,'1号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(2,1,'2号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(3,1,'3号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(4,1,'4号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(5,1,'5号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(6,1,'6号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(7,1,'7号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(8,1,'拆迁剩余','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(9,2,'西薛家泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(10,2,'东薛家泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(11,2,'盛园小区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(12,3,'1号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(13,3,'2号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(14,3,'3号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(15,3,'4号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(16,3,'5号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(17,3,'6号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(18,3,'7号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(19,3,'8号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(20,4,'电站花苑','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(21,4,'拆迁剩余','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(22,5,'明星小区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(23,5,'东林佳苑','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(24,5,'拆迁剩余','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(25,6,'1号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(26,6,'2号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(27,6,'3号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(28,6,'4号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(29,6,'5号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(30,6,'6号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(31,6,'7号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(32,6,'伟阳小区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(33,6,'景园、逸园','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(34,6,'城北AB','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(35,6,'拆迁剩余','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(36,7,'1号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(37,7,'2号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(38,7,'3号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(39,7,'4号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(40,7,'5号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(41,7,'6号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(42,7,'7号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(43,7,'8号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(44,7,'9号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(45,7,'10号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(46,7,'11号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(47,7,'12号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(48,8,'1号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(49,8,'2号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(50,8,'3号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(51,8,'4号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(52,8,'5号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(53,8,'6号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(54,8,'7号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(55,8,'8号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(56,8,'9号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(57,8,'10号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(58,8,'11号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(59,8,'12号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(60,8,'13号','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(61,8,'花园港苑','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(62,9,'五里','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(63,9,'火箭','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(64,9,'高泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(65,9,'百家','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(66,9,'永新','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(67,9,'杜家','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(68,9,'长埝','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(69,9,'高浜','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(70,9,'寿安','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(71,9,'横港','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(72,9,'殷家桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(73,9,'中路庵','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(74,9,'高家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(75,9,'奚家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(76,10,'江红村','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(77,10,'马桥社区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(78,11,'邵家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(79,11,'西邵家桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(80,11,'大爿湾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(81,11,'新放村','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(82,11,'曹家村','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(83,11,'北王家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(84,11,'新学堂','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(85,11,'坤阳宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(86,11,'横杠村','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(87,11,'马头墙','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(88,11,'杨家夹宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(89,11,'傅家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(90,11,'鸳鸯村','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(91,11,'麻行','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(92,12,'牌楼','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(93,12,'项门','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(94,12,'金星','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(95,12,'新宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(96,12,'陆家湾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(97,12,'大泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(98,12,'万家','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(99,12,'花蒲2','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(100,12,'花蒲3','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(101,12,'花蒲4','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(102,12,'建生','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(103,12,'建新','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(104,12,'勇跃','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(105,12,'双沟','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(106,12,'横沟','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(107,12,'协东','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(108,12,'新跃','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(109,12,'前进','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(110,13,'凤星','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(111,13,'浦家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(112,13,'兆丰','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(113,13,'米场西','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(114,13,'丁泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(115,13,'立新','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(116,13,'草漕','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(117,13,'健心','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(118,14,'和平3组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(119,14,'和平4组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(120,14,'石孔2组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(121,14,'石孔4组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(122,14,'石孔5组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(123,14,'石孔6组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(124,14,'石孔8组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(125,14,'日新4组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(126,14,'和平14组','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(127,15,'李家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(128,15,'划船梢','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(129,15,'星惠','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(130,15,'王家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(131,15,'官泾口','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(132,15,'大王家泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(133,15,'顾陆家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(134,15,'朱家泾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(135,15,'陆家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(136,15,'宋家宅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(137,15,'卫星小区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(138,15,'新仓小区','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(139,16,'陆家湾','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(140,16,'黄浦桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(141,16,'八字桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(142,16,'毛家桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(143,16,'老洋桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(144,16,'邵家桥','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(145,16,'吴家厅','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(146,16,'绿化村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(147,16,'中沟村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(148,16,'洋泾村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(149,16,'严家泾村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(150,16,'油车村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(151,16,'河沼村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(152,16,'环池村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(153,16,'荷花村庄','c')");
                tx.executeSql("insert into GroupList(GroupID,CountryID,Name,IsChoose)values(154,17,'奚陆家村','c')");
              }
            },function(tx,err){
              console.log(err);
            });
          });			
        },
        beforeMount () {
          this.selcity();
          this.selcounty();
          this.selgroup();
        },
        methods: {
          selcity:function(){//查询城镇
            var that=this;//与this区别开
            that.citylist=[];
            this.$db.transaction(function(tx){
              tx.executeSql("select * from City",[],function(tx,res){
                  for(var i=0;i<res.rows.length;i++){
                    that.citylist.push(res.rows[i]);
                  }
                },function(tx,err){
                  console.log(err);
                }
              );
            });		
          },
          selcounty:function(){//查询乡村
            var that=this;//与this区别开
            that.countrylist=[];
            this.$db.transaction(function(tx){
              tx.executeSql("select * from County",[],function(tx,res){
                  for(var i=0;i<res.rows.length;i++){
                    that.countrylist.push(res.rows[i]);
                  }
                },function(tx,err){
                  console.log(err);
                }
              );
            });		
          },
          selgroup:function(){//查询组别
            var that=this;//与this区别开
            that.grouplist=[];
            this.$db.transaction(function(tx){
              tx.executeSql("select * from GroupList",[],function(tx,res){
                  for(var i=0;i<res.rows.length;i++){
                    that.grouplist.push(res.rows[i]);
                  }
                },function(tx,err){
                  console.log(err);
                }
              );
            });		
          }
        }
    }
</script>
<style>
  #test
  {
    text-align: left;
  }
  #test .fl{
    float:left;
    width:30%;
  }
</style>