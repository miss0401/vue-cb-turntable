<template>
  <ul class="turntable-wrap">
    <li v-for="(item, index) in prizeList" :class="{ 'turntable-item': true, 'lottery-selected': options.sequence[selectedId] === index }" :key="index">
      <template v-if="index === 4">
        <div class="start-btn" @click="clickLottery">免费抽奖</div>
      </template>
      <div v-else>
        <slot name="layout" :item="item">
          <img :src="item.img" alt="">
          <p>{{ item.name }}</p>
        </slot>
      </div>
    </li>
  </ul>
</template>

<script>

const DEFAULT_OPTIONS = {
  interTime: 70,
  endTime: 300,
  startId: 0,
  interval: 20,
  sequence: [0, 1, 2, 5, 8, 7, 6, 3]
}

export default {
  name: 'Turntable',
  props: {
    turntableOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    prizeList: {
      type: Array,
      required: true
    },
    lotteryId: {
      type: Number,
      required: true
    },
    canStart: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      mutex: false,
      options: {},
      selectedId: -1,
      interTimeVal: 70
    }
  },
  watch: {
    canStart(val) {
      if (val) {
        this.startTurntable(this.lotteryId);
      }
    }
  },
  created() {
    this.options = Object.assign({}, DEFAULT_OPTIONS, this.turntableOptions);
    this.interTimeVal = this.options.interTime;
  },
  methods: {
    clickLottery() {
      this.$emit('clickLottery');
    },
    startTurntable(lotteryId, isInter) {
      // 页面刷新进来才会初始化startid
      if (!isInter && this.selectedId < 0) {
        this.selectedId = this.options.startId
      }
      if (lotteryId === 4 || !lotteryId) {
        throw new Error('您配置的中奖id不正确');
      }
      if (!isInter && this.mutex) {
        return;
      }
      this.mutex = true;
      const interId = setTimeout(() => {
        if (this.options.interTime >= this.options.endTime && this.options.sequence[this.selectedId] === lotteryId) {
          // 中奖提示
          this.$emit('success');
          clearTimeout(interId);
          this.mutex = false;
          this.$emit('update:canStart', false);
          this.options.interTime = this.interTimeVal;
          return;
        }
        // 如果当前是转到0
        this.selectedId++;
        if (this.selectedId >= this.options.sequence.length) {
          this.selectedId = 0;
        }
        this.options.interTime += this.options.interval;
        this.options.interId = setTimeout(this.startTurntable(lotteryId, 1), this.options.interTime);
      }, this.options.interTime)
    }
  }
}
</script>

<style scoped>
  .turntable-wrap {
    width: 9.333333rem;
    padding: .4rem 0;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
    background: #281d1b;
  }

  .turntable-wrap,
  .turntable-wrap .turntable-btn,
  .turntable-wrap .turntable-item {
    display: flex;
    justify-content: center;
  }

  .turntable-wrap .turntable-btn,
  .turntable-wrap .turntable-item {
    width: 2.666667rem;
    height: 2.666667rem;
    margin: .066667rem;
    border-radius: .266667rem;
    background: #eec587;
    flex-direction: column;
  }

  .turntable-wrap .turntable-btn img,
  .turntable-wrap .turntable-item img {
    display: block;
    width: 1.333333rem;
    margin: .133333rem auto;
  }

  .turntable-wrap .turntable-btn p,
  .turntable-wrap .turntable-item p {
    text-align: center;
    font-size: .32rem;
    color: #fff;
    line-height: 2;
  }

  .turntable-wrap .turntable-btn .lottery-btn,
  .turntable-wrap .turntable-item .lottery-btn {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    background: rgba(0, 0, 0, 0);
    font-size: .533333rem;
    color: #fff;
  }

  .start-btn {
    font-size: .453333rem;
    color: #fff;
    text-align: center;
  }

  .lottery-selected {
    border: .08rem solid #fff391;
    box-sizing: border-box;
  }
</style>
