vue-cb-turntable
======================

Build Setup
----------------------

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

How To Use
----------------------
## 入口文件或相应vue文件引入
```bash
import Vue from 'vue'
import Turntable from 'vue-cb-turntable'

Vue.use(Turntable)
````
## template写法

```script
 <template>
  <div id="app">
    <turntable :turntable-options="options" :can-start.sync="start" :lottery-id="lotteryId" @success="success" :prize-list="prizeList" @clickLottery="clickLottery" #layout="{ item }">
      <p>{{ item.name }}</p>
      <img :src="item.img" alt="">
    </turntable>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        interTime: 70, // 转盘初始速度,可选参数
        endTime: 300, // 转盘结束时间,控制转盘转几圈,可选参数
        startId: 0, // 转盘开始转的第一个元素id,可选参数
        interval: 20, // 转盘间隔速度,可选参数
        sequence: [0, 1, 2, 5, 8, 7, 6, 3] // 转盘抽奖顺序(直观表现为转盘转的方向),可选参数
      },
      start: false,
      lotteryId: 1,
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
      ]
    }
  },
  methods: {
    clickLottery() {
      console.log('点击了转盘抽奖按钮，开始抽奖...');
      this.lotteryId = 5;
      console.log('接口调用完毕，拿到lotteryId...');
      this.start = true; // 设置开始动画效果的开关
      console.log('设置lotteryid完毕，开始动画效果...');
    },
    success() {
      console.log(1111)
    }
  }
}
</script>
```

##参数解释

|参数名   |    默认值    |     用途     |
|------     | -----------   | ---------   |
|turntable-options  |  {}             | 转盘初始化的几个参数
|can-start |  false          | 转盘开始转的参数值
|lotteryId  | 无             | 必填，中奖id
|success | 无             |抽奖成功回调,自行定义,可选参数
|clickLottery | 无        |必填，点击抽奖按钮的事件，一般是去调用接口然后将start置为true
|prizeList | 无      |必填，奖品循环列表，如需重定义奖品格子布局 需用插槽自己重新书写

#layout 具名插槽 如果抽奖格中还包含奖品的其他信息例如 价值等等，可以修改每个格子的布局  并且获取到子组件作用域的 item

样式修改请直接覆盖class

具体🌰请自行下载  欢迎对小渣渣的code进行review～



