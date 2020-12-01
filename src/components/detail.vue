<template>
  <div class="detail" :class ='{classActive:theme_id == 2}'>
    <div class="detailWrapper">
      <div class="title">
        <span></span>
        <img v-if="theme_id == 1" src="../assets/detail/t1.png"/>
        <img v-if="theme_id == 2" src="../assets/detail/t2.png"/>
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
      <div class="change">
        <img src="../assets/detail/c1.png"/>
        <span>点击分享</span>
      </div>
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
      theme_id:1
    }
  },
  mounted(){
    this.theme_id = this.$route.query.id
    if(this.theme_id == 1){
      axios({
      url:'https://mock.yonyoucloud.com/mock/16373/travel-test',
    }).then(
      (res)=>{
        this.teacher = res.data.data.teacher;
        this.assists = res.data.data.assist;
        this.students = res.data.data.student;
      },
      (err)=>{
        console.log(err)
      })
    }else{
      axios({
        url:'https://mock.yonyoucloud.com/mock/16376/travel-test1',
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
    // changeTitle(){
    //   if(this.theme_id == 1){
    //     this.theme_id =2
    //   }else{
    //     this.theme_id =1
    //   }
    // }
  }
}
</script>

<style scoped>
.detail{
  width: 20rem;
  background:  url('../assets/classify/b1.jpg') fixed no-repeat;
  color: #000;
  position: relative;
}
.classActive{
  background:  url('../assets/classify/b2.jpg') fixed no-repeat;
}
.detailWrapper{
  width: 20rem;
  height: 60rem;
  margin: 0 auto;
  text-align: left;
}
.title{
  padding-top: 1.5rem;
}
.title span{
  display: inline-block;
  height: 1rem;
  border: #f6ba47 solid 0.15rem;
}
.title img{
  width: 7.8rem;
  height: 1.8rem;
  margin-left: 4px;
}
.teacher,.assist,.students{
  width: 100%;
  height: 15rem;
  margin-bottom: 1.93rem;
  position: relative;
  overflow: hidden;
}
.teacher{
  margin-top: 1rem;
}
.TitleImg{
  width: 100%;
  height: 2.6rem;
  line-height: 2.6rem;
  background-color: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.TitleImg img{
  width: 13.4rem;
  height: 1rem;
  margin-left: 3.4rem;
}
.works{
  height: 9.7rem;
  position: relative;
  overflow: hidden;
}
.works span{
  display: inline-block;
  width: 2.9rem;
  height: 2.5rem;
  position: absolute;
  top: 45%;
}
.works .left{
  background: url(../assets/detail/left.png) no-repeat ;
  background-size: 1.9rem 1.73rem;
  left: 0px;
}
.works .right{
  background: url(../assets/detail/right.png) no-repeat;
  background-size: 1.9rem 1.73rem;
  right: 0px;
}
.works img{
  width: 20.8rem;
  height: 9.7rem;
}
.author{
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: #ffd74c;
  text-align: center;
  position: absolute;
}
.assist .author,.students .author{
  background-color: #ffffff;
}
.teacher .author,.assist .assist-author,.students .students-author{
  height: 2.7rem;
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
}
.teacher .author,.assist .assist-author{
  line-height: 2.7rem;
}
.author img{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2.1rem;
  vertical-align: middle;
  margin-right: 0.3rem;
}
.author span,.author img{
  display: inline-block;
  vertical-align: middle;
}
.assist-author{
  width: 50%;
  display: inline-block;
  font-size: 0.8rem;
}
.students-author{
  width: 25%;
  height: 100%;
  display: inline-block;
  font-size: 0.6rem;
  border-right: 0.1px solid #eeeeee;
  
}
.students-author:last-child{
  border-right: none;
}
/* 设置点击后的样式 */
.author .activeName{
  background-color:#ffd74c ;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 4.6rem;
  position: absolute;
  width: 100%;
  bottom: 0;
}
.author .activeName img,.assist .activeName span{
  margin-top: 1.2rem;
}
.students-author img{
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.2rem;
}
.students-author p{
  height: 0.6rem;
}
.changeBtn{
  width: 100%;
  height: 3.7rem;
  clear: both; 
  position: fixed;
  bottom: 0px;
}
.change,.share{
  float: left;
  height: 3.7rem;
  line-height: 3.7rem;
  text-align: center;
  font-weight: 600;
}
.change img,.share img{
  width: 1.1rem;
  height: 1rem;
  margin-right: 0.2rem;
}
.change{
  width: 20rem;
  background-color: #fff;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  font-size: 0.8rem;
}
.share{
  width: 14.2rem;
  background-color: #ffd74c;
  border-top-right-radius: 0.7rem;
  font-size: 1.1rem;
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
  width: 11.4rem;
  height: 7.7rem;
  margin: 0.5rem 0px 0 8.7rem ;
  
}
</style>