<template>
  <div class="classify-container" :class="[num == 1 ? leftImg : rightImg]">
    <div class="classify-wrapper">
      <div class="video-wrap">
        <video  :src="video[activeIndex]" 
        width="380" height="240" controls :poster="poster[activeIndex]" autoplay="autoplay">
        </video>
      </div>
      <div class="introduce">
        <div>
          <img src="../assets/classify/1.png">
        </div> 
        <p>{{text[activeIndex]}}</p>
      </div>
    </div>
    <div class="changeBtn">
      <div class="left" @click="change(1)" :class="{'changeLeft':num==2}">
        <img src="../assets/classify/c1.png"/>
        <p><span>10142</span>人已选择</p>
      </div>
      <div class="right" @click="change(2)">
        <img src="../assets/classify/c2.png"/>
        <p><span>4359</span>人已选择</p>
      </div>
    </div>
    <div class="selectedBtn">
      <div class="selectedLeft" v-show="num == 1" @click="getDetail">
        <img src="../assets/classify/c1.png"/>
        <p><span>10142</span>人已选择</p>
        <p class="enter">进入该主题班>></p>
      </div>
      <div class="selectedRight" v-show="num == 2" @click="getDetail">
        <img src="../assets/classify/c2.png"/>
        <p><span>4359</span>人已选择</p>
        <p class="enter">进入该主题班>></p>
      </div>
    </div>
  </div>   
</template>
<script>
const text1 ='进入喀斯特山林，在飞岩走壁的险峰，流鱼吐雾的洞穴，还有花间漂流的桃溪谷中，奇遇亿年光阴雕刻的褶皱异象，洞察老子《道德经》的“大象无形”，你准备好了吗？';
const text2 ='进入神秘巴国，时光开始倒流，你将和白虎后裔共唱薅草锣鼓，共跳巴人武舞，在石房子中露宿，在厥草桥上行走，捕捉巴人一举一动、一瓦一木的遗韵，你准备好了吗？';
export default {
  name:'classify',
  data(){
    return{
      leftImg:'leftImg',
      rightImg:'rightImg',
      num:1,
      text:[text1,text2],
      video:[require('../assets/classify/v1.mp4'),require('../assets/classify/v2.mp4')],
      poster:[require('../assets/classify/i1.jpg'),require('../assets/classify/i2.jpg')],
    }
  },
  computed:{
    activeIndex(){
      return this.num - 1
    }
  },
  methods:{
    change(activeIndex){
      this.num = activeIndex
    },
    getDetail(){
      this.$router.push('./detail')
    }
  }
}
</script>
<style scoped>
.classify-container{
  width: 473px;
  height: 760px;
  color: #333333;
  position: relative;
}
.leftImg{
  background-image: url('../assets/classify/b1.jpg');
  background-size: 473px 760px;
}
.rightImg{
  background-image: url('../assets/classify/b2.jpg');
  background-size: 473px 760px;
}
.classify-wrapper{
  width: 380px;
  margin: 0 auto;
  padding-top: 60px;
}
.video-wrap{
  width:380px ;
  height: 240px;
  padding: 10px 0;
  background-color:#333;
}
.introduce{
  width: 380px;
  height: 193px;
  text-align: center;
  background-color:#ffffff;
  border-radius: 15px;
  margin-top: 40px;
  font-size: 14px;
}
.introduce div{
  height: 53px;
  line-height: 53px;
  background-color: #eff1f4;
  border-radius: 15px;
  border-bottom-left-radius:0 ;
  border-bottom-right-radius:0 ;
}
.introduce img{
  width: 244px;
  height: 18px;
}
.introduce p{
  padding: 7.5px 17.6px 17.6px 17.6px;
  text-align: left;
}
.changeBtn{
  width: 473px;
  height: 74px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ffffff;
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  clear: both;
}
.left,.right{
  float: left;
  margin-top: 14px;
}
.changeBtn img{
  width: 80px;
  height: 19px;
}
.left{
  width: 270px;
}
.changeBtn .changeLeft{
  width: 200px;
}
.right{
  width: 200px;
}
.changeBtn span,.selectedBtn span{
  color: red;
}
/* 设置点击后的样式 */
.selectedBtn{
  font-size: 14px;
}
.selectedRight,.selectedLeft{
  position: absolute;
  bottom: 0px;
  width: 306px;
  height: 158px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ffd747;
}
.selectedRight{
  right: 0px;
}
.selectedLeft{
  left: 0px;
}
.selectedBtn img{
  width: 150x;
  height: 40px;
  margin-top: 34px;
}
@keyframes move {
  from{transform: translateX(0px);}
  to{transform: translateX(-6px);}
}
.selectedBtn .enter{
  width: 138px;
  height: 26px;
  line-height: 26px;
  border-radius: 30px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  animation: move 0.5s infinite alternate linear;
}
</style>