<template>
  <div id="app">
    <!-- <h1 @click="login">我是一个标题</h1> -->
    <!-- <cb-video :src="src" :btn-src="btnSrc" ref="videoName1" class="my-video">123123</cb-video> -->
    <!-- <div class="video-wr">
      <cb-video :cb-src="src" ref="videoName1" class="my-video">123123</cb-video>
      <cb-video :cb-src="src" ref="videoName2" class="my-video">123123</cb-video>
      <cb-video :cb-src="src" ref="videoName3" class="my-video">123123</cb-video>
    </div> -->
    <turntable :turntable-options="options" :can-start.sync="start" :lottery-id="lotteryId" @success="success" :prize-list="prizeList" @clickLottery="clickLottery" #layout="{ item }">
      <p>{{ item.name }}</p>
      <img :src="item.img" alt="">
    </turntable>
    <!-- <roll :bg="bg" :btn-bg="btnBg" :can-start.sync="start" :lottery-id="lotteryId" :roll-options="optionsRoll" @success="newsuccess" @clickLottery="clickLottery" /> -->
  </div>
</template>

<script>
// import Toast from './plugins/toast/Toast'
export default {
  name: 'App',
  data() {
    return {
      options: {
        interTime: 70,
        endTime: 300,
        startId: 0,
        interval: 20,
        sequence: [0, 1, 2, 5, 8, 7, 6, 3]
      },
      start: false,
      lotteryId: 1,
      bg: "/cdn_img/common/turntable/awards.png",
      btnBg: "/cdn_img/common/turntable/draw-btn.png",
      optionsRoll: {
        isBtn: false
      },
      prizeList: [
        {
          name: '配置唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        },
        {
          name: '唱吧麦克风',
          aa: 1,
          img: 'https://cbshowhot.cdn.changbaimg.com/cdn_img/yunying/super-member/icon6.f24280c.png'
        }
      ],
      btnSrc: 'https://aliimg.changba.com/fansSupportTaskImg/6ffb4bc1374e04985a920e3b967bed81.png',
      src: 'http://cbhd.changbaimg.com/sucai.mp4',
      index: 1
    }
  },
  mounted() {
    console.log(this.$refs.videoName1, '111');
    // this.$loading.show('数据加载中');
    // // console.log(this.$toast, 'toast');
    // setTimeout(() => {
    //   this.$loading.hide();
    // }, 1000)
    // console.log(this.$refs[`videoName${this.index}`].$el);
  },
  methods: {
    clickLottery() {
      console.log('点击了转盘抽奖按钮，开始抽奖...');
      this.lotteryId = 5;
      console.log('接口调用完毕，拿到lotteryId...');
      this.start = true;
      console.log('设置lotteryid完毕，开始动画效果...');
    },
    success() {
      console.log(1111)
    },
    newsuccess() {
      console.log(222)
    },
    login() {
      // this.$toast.show({
      //   type: 'success',
      //   duration: 5000,
      //   tips: '登录成功'
      // });
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.my-video {
  width: 750px;
}
</style>
