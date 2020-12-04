<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <img src="../assets/container/1.png"/>
      </div>
      <div class="dec">
        <ul>
          <li><span>2位</span>摄影大神导师</li>
          <li><span>4位</span>喔喔窝蜂首助教</li>
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
  width: 20rem;
  height: 35.6rem;
  background-image: url('../assets/container/4.jpg');
  background-size: cover;;
  background-repeat: no-repeat;
  color: #534b4b;
  font-size: 16px;
  font-family: PingFangSC,STHeiti,Lucida Grande,Microsoft Yahei,Hiragino Sans GB,Hiragino Sans GB W3,SimSun,Arial;
  animation: move 3s infinite linear alternate;
  position: relative;
}
.wrapper{
  padding: 4rem 1.3rem 0  1.3rem;
  overflow: hidden;
  
}
.title img{
  width: 18rem;
  height: 9.5rem;
}
.dec{
  margin-left: 1.74rem;
  margin-top: 1.74rem;
}
.dec li{
  height: 3rem;
  line-height: 3rem;
  text-align: left;
  font-weight: 700;
  color: #ffffff;
  font-size: 1rem;

}
.dec li span{
  font-size: 1.2rem;
  color: #aac811;
}
.dec i{
  display: inline-block;
  width: 0.9rem;
  border: 1px solid #ffffff;
}
.apply{
  width: 11.6rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 1rem;
  line-height: 2.5rem;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  background-color: #ffd74c;
  border-radius: 1.5rem;
  text-align: center;
}
.loc{
  position: absolute;
  bottom: 0.5rem;
  margin-left: 3rem;
}
.loc img{
  width: 6.3rem;
  height: 0.7rem;
  }
  .right-img{
    position: absolute;
    right: 0.8rem;
    bottom: 1.2rem;
  }
  .right-img img{
    width: 0.7rem;
    height: 20.4rem;
  }
</style>