<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <img src="../assets/container/1.png"/>
      </div>
      <div class="dec">
        <ul>
          <li><span>2位</span>摄影大神导师</li>
          <li><span>4位</span>马蜂窝蜂首助教</li>
          <li>带你游学神秘巴山大峡谷</li>
          <li>进阶<span>摄影达人</span></li>
          <li><i></i></li>
        </ul>
      </div>
      <div class="apply">
        <p @click="goClassify">点击查看</p>
      </div>
    </div>
    <div class="loc">
      <img src="../assets/container/2.png"/>
    </div>
    <div class="right-img">
      <img src="../assets/container/3.png"/>
    </div>
  </div>
  
</template>
<script>

export default {
  name:'container',
  methods:{
    goClassify(){
      this.$router.push('/classify')
    }
  }
}
</script>

<style scoped> 
@keyframes move {
  from{background-position: 0% 0%;}
  to{background-position: 30% 0%;}
  
}
.container{
  width: 473px;
  height: 760px;
  background-image: url('../assets/container/4.jpg');
  background-size: 136% 100%;
  background-repeat: no-repeat;
  color: #534b4b;
  font-size: 16px;
  font-family: PingFangSC,STHeiti,Lucida Grande,Microsoft Yahei,Hiragino Sans GB,Hiragino Sans GB W3,SimSun,Arial;
  animation: move 3s infinite linear alternate;
  position: relative;
}
.wrapper{
  padding: 81px 27px 0px 27px;
  overflow: hidden;
  
}
.title img{
  width: 358px;
  height: 196px;
}
.dec{
  margin-left: 36px;
  margin-top: 36px;
}
.dec li{
  height: 60px;
  line-height: 60px;
  text-align: left;
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;

}
.dec li span{
  font-size: 24px;
  color: #aac811;
}
.dec i{
  display: inline-block;
  width: 18px;
  border: 1px solid #ffffff;
}
.apply{
  width: 240px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  background-color: #ffd74c;
  border-radius: 30px;
  text-align: center;
}
.loc{
  position: absolute;
  bottom: 16px;
  margin-left: 64px;
}
.loc img{
  width: 129px;
  height: 14px;
  }
  .right-img{
    position: absolute;
    right: 16px;
    bottom: 24px;
  }
  .right-img img{
    width: 14px;
    height: 421px;
  }
</style>