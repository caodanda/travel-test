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
      this.$router.push({
        path:'/detail',
        query:{
          id:this.num
        }})
    },
  }
}
</script>
<style scoped>
.classify-container{
  width: 20rem;
  height: 35.6rem;
  color: #333333;
  position: relative;
}
.leftImg{
  background:url('../assets/classify/b1.jpg')  no-repeat;
  background-size: 22.9rem 36.7rem;
}
.rightImg{
  background:url('../assets/classify/b2.jpg') no-repeat;
  background-size: 22.9rem 36.7rem;
}
.classify-wrapper{
  width: 18.4rem;
  margin: 0 auto;
  padding-top: 2.9rem;
}
.video-wrap{
  width:18.4rem ;
  height: 11.6rem;
  padding: 0.5rem 0;
  background-color:#333;
}
.introduce{
  width: 18.4rem;
  height: 9.3rem;
  text-align: center;
  background-color:#ffffff;
  border-radius: 0.7rem;
  margin-top:1.93rem;
  font-size: 0.7rem;
}
.introduce div{
  height: 2.6rem;
  line-height: 2.6rem;
  background-color: #eff1f4;
  border-radius: 0.7rem;
  border-bottom-left-radius:0 ;
  border-bottom-right-radius:0 ;
}
.introduce img{
  width: 11.8rem;
  height: 0.9rem;
}
.introduce p{
  padding: 0.4rem 0.9rem 0.9rem 0.9rem;
  text-align: left;
}
.changeBtn{
  width: 20rem;
  height: 3.4rem;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  background-color: #ffffff;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0px;
  display: flex;
}
.left,.right{
  margin-top: 0.7rem;
  flex: 1;
}
.changeBtn img{
  width: 3.9rem;
  height: 0.9rem;
}
.left{
  padding-left: 4.9rem;
}
.changeBtn .changeLeft{
  text-align: left;
  padding-left: 1rem;
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
  width: 14rem;
  height: 7.1rem;
  border-top-left-radius: 0.72rem;
  border-top-right-radius: 0.72rem;
  background-color: #ffd747;
}
.selectedRight{
  right: 0px;
}
.selectedLeft{
  left: 0px;
}
.selectedBtn img{
  width: 7.3rem;
  height: 1.9rem;
  margin-top: 1.65rem;
}
@keyframes move {
  from{transform: translateX(0px);}
  to{transform: translateX(-0.28rem);}
}
.selectedBtn .enter{
  width: 6.7rem;
  height: 1.26rem;
  line-height: 1.26rem;
  border-radius: 1.5rem;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 0.5rem;
  animation: move 0.5s infinite alternate linear;
}
</style>