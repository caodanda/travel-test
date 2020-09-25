<template>
  <div class="detail">
    <div class="detailWrapper">
      <div class="title">
        <span></span>
        <img src="../assets/detail/t1.png"/>
      </div>
      <div class="teacher">
        <div class="TitleImg">
          <img src="../assets/detail/t3.png"/>
        </div>
        <div class="works" v-if="teacher.picture_display">
          <span class="left" @click="left('teaActiveNum')" v-if="teaActiveNum > 0"></span>
          <img :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" v-for='(item,index) in teacher.picture_display' :key="index" v-show="teaActiveNum == index">
          <span class="right" @click="right('teaActiveNum')" v-if="teaActiveNum < teacher.picture_display.length-1"></span>
        </div>
        <div class="author">
          <img :src="teacher.avatar"/>
          <span>{{teacher.name}}</span>
        </div>
      </div>
      <div class="assist">
        <div class="TitleImg">
          <img src="../assets/detail/t4.png"/>
        </div>
        <div class="works" v-if="assists.length && assActiveNum == 0" >
          <span class="left" @click="left('assNum')" v-if="assNum > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in assists[assActiveNum].picture_display" 
            :key="index" v-show="assNum == index">
          <span class="right" @click="right('assNum')" v-if="assNum < assists[0].picture_display.length-1"></span>
        </div>
        <div class="works" v-if="assists.length && assActiveNum == 1">
          <span class="left" @click="left('assNum2')" v-if="assNum2 > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in assists[assActiveNum].picture_display" 
            :key="index" 
            v-show="assNum2 == index">
          <span class="right" @click="right('assNum2')" v-if="assNum2 < assists[assActiveNum].picture_display.length-1"></span>
        </div>
        <div class="author" v-if="assists.length">
          <div class="assist-author"  v-for="(item,index) in assists" :key="index+'333s'" @click="assClick(index)">
            <div :class="{activeName:index == assActiveNum}">
              <img :src="assists[index].avatar"/>
              <span>{{assists[index].name}}</span>
            </div>
            
          </div>
        </div>
      </div>
      <div class="students">
        <div class="TitleImg">
          <img src="../assets/detail/t5.png"/>
        </div>
        <div class="works" v-if="students.length && stuActiveNum == 0">
          <span class="left" @click="left('stuNum')" v-if="stuNum > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in students[stuActiveNum].picture_display" :key="index " v-show="index == stuNum" >
          <span class="right" @click="right('stuNum')" 
            v-if="stuNum < students[stuActiveNum].picture_display.length-1">
          </span>
        </div>
        <div class="works" v-if="students.length && stuActiveNum == 1">
          <span class="left" @click="left('stuNum1')" v-if="stuNum1 > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in students[stuActiveNum].picture_display" :key="index" v-show="index == stuNum1" >
          <span class="right" @click="right('stuNum1')" 
            v-if="stuNum1 < students[stuActiveNum].picture_display.length-1">
          </span>
        </div>
        <div class="works" v-if="students.length && stuActiveNum == 2">
          <span class="left" @click="left('stuNum2')" v-if="stuNum2 > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in students[stuActiveNum].picture_display" :key="index" v-show="index == stuNum2" >
          <span class="right" @click="right('stuNum2')" 
            v-if="stuNum2 < students[stuActiveNum].picture_display.length-1">
          </span>
        </div>
        <div class="works" v-if="students.length && stuActiveNum == 3">
          <span class="left" @click="left('stuNum3')" v-if="stuNum3 > 0"></span>
          <img 
            :src="item + '?imageMogr2/auto-orient/thumbnail/!670x360r/gravity/Center/crop/!670x360/quality/90'" 
            v-for="(item,index) in students[stuActiveNum].picture_display" :key="index" v-show="index == stuNum3" >
          <span class="right" @click="right('stuNum3')" 
            v-if="stuNum3 < students[stuActiveNum].picture_display.length-1">
          </span>
        </div>

        <div class="author" v-if="students.length">
          <div class="students-author"
           v-for="(item,index) in students" :key="index" @click="stuClick(index)">
           <div :class="{activeName:index == stuActiveNum}">
              <img :src="students[index].avatar"/>
              <p>{{students[index].name}}</p>
           </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="changeBtn">
      <div class="change" @click="changeTitle">
        <img src="../assets/detail/c1.png"/>
        <span>主题切换</span>
      </div>
      <div class="share" @click="share">
        <img src="../assets/detail/c2.png"/>
        <span>分享作品</span>
      </div>
    </div>
    <div class="share-layer" v-if="show">
      <img src="../assets/detail/s1.png"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'detail',
  data(){
    return{
      titleImg:[
        require('../assets/detail/t1.png'),
        require('../assets/detail/t2.png'),
      ],
      show:false,
      teacher:{
      },
      assists:[],
      students:[],
      teaActiveNum:0,
      assActiveNum:0,
      assNum:0,
      assNum2:0,
      stuActiveNum:0,
      stuNum:0,
      stuNum1:0,
      stuNum2:0,
      stuNum3:0,
    }
  },
  mounted(){
    axios({
      url:'https://easy-mock.com/mock/5f58738ad5906660c22dae64/example/axiosmock',
    }).then(
      (res)=>{
        this.teacher = res.data.data.teacher;
        this.assists = res.data.data.assist;
        this.students = res.data.data.student;
         console.log(this.assists)
      },
      (err)=>{
        console.log(err)
      })
  },
  methods:{
    share(){
      this.show =true
    },
    assClick(index){
      this.assActiveNum = index;
      console.log(this.assActiveNum)
    },
    stuClick(index){
      this.stuActiveNum = index;
    },
    right(key){
      this[key]++;
    },
    left(key){
      this[key]--;
    },
    // 点击切换路由，不是点击更新信息
    changeTitle(){
      axios({
        url:'https://easy-mock.com/mock/5f58738ad5906660c22dae64/example/axios.mock2',
      }).then(
        (res)=>{
          this.teacher = res.data.data.teacher;
          this.assists = res.data.data.assist;
          this.students = res.data.data.student;
        },
        (err)=>{
          console.log(err);
        })
    }
  }
}
// 未做的点：1.点击第二页路由到第三页；3.点击博主name页面升高；4.点击【主题切换】更新路由
// 已经做需熟悉：2.轮播图；
</script>

<style scoped>
.detail{
  width: 473px;
  background:  url('../assets/classify/b1.jpg') fixed;
  color: #000;
  position: relative;
}

.detailWrapper{
  width: 430px;
  height: 1244px;
  margin: 0 auto;
  text-align: left;
}
.title{
  padding-top: 30px;
}
.title span{
  display: inline-block;
  height: 20px;
  border: #f6ba47 solid 3px;
}
.title img{
  width: 162px;
  height: 37px;
  margin-left: 4px;
}
.teacher,.assist,.students{
  width: 100%;
  height: 310px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}
.teacher{
  margin-top: 20px;
}
.TitleImg{
  width: 100%;
  height: 54px;
  line-height: 54px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.TitleImg img{
  width: 278px;
  height: 20px;
  margin-left: 70px;
}
.works{
  height: 200px;
  position: relative;
  overflow: hidden;
}
.works span{
  display: inline-block;
  width: 60px;
  height: 52px;
  position: absolute;
  top: 45%;
}
.works .left{
  background: url(../assets/detail/left.png) no-repeat ;
  background-size: 40px 36px;
  left: 0px;
}
.works .right{
  background: url(../assets/detail/right.png) no-repeat;
  background-size: 40px 36px;
  right: 0px;
}
.works img{
  width: 430px;
  height: 200px;
}
.author{
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #ffd74c;
  text-align: center;
  position: absolute;
}
.assist .author,.students .author{
  background-color: #ffffff;
}
.teacher .author,.assist .assist-author,.students .students-author{
  height: 56px;
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
}
.teacher .author,.assist .assist-author{
  line-height: 56px;
}
.author img{
  width: 34px;
  height: 34px;
  border-radius: 45px;
  vertical-align: middle;
  margin-right: 6px;
}
.author span,.author img{
  display: inline-block;
  vertical-align: middle;
}
.assist-author{
  width: 50%;
  display: inline-block;
  font-size: 16px;
}
.students-author{
  width: 25%;
  height: 100%;
  display: inline-block;
  font-size: 12px;
  border-right: 0.1px solid #eeeeee;
  
}
.students-author:last-child{
  border-right: none;
}
/* 设置点击后的样式 */
.author .activeName{
  background-color:#ffd74c ;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 96px;
  position: absolute;
  width: 100%;
  bottom: 0;
}
.author .activeName img,.assist .activeName span{
  margin-top: 24px;
}
.students-author img{
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
}
.students-author p{
  height: 12px;
}
.changeBtn{
  width: 100%;
  height: 76px;
  clear: both; 
  position: fixed;
  bottom: 0px;
}
.change,.share{
  float: left;
  height: 76px;
  line-height: 76px;
  text-align: center;
  font-weight: 600;
}
.change img,.share img{
  width: 22px;
  height: 20px;
  margin-right: 4px;
}
.change{
  width: 180px;
  background-color: #fff;
  border-top-left-radius: 15px;
  font-size: 16px;
}
.share{
  width: 293px;
  background-color: #ffd74c;
  border-top-right-radius: 15px;
  font-size: 22px;
}
.share-layer{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,.7);
  z-index: 999;
}
.share-layer img{
  position: absolute;
  top: 0px;
  right: 0px;
  width: 236px;
  height: 160px;
  margin: 10px 0px 0 180px ;
  
}
</style>