<template>
  <div class="landing">
    <!-- <div class="circle"></div> -->
    <div class="hero-header-item hero-logo" aria-hidden="true">
      <div class="hero-logo-circles">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-semi-5aec49dbe5d420f928cece7001b96267ee17a9d3577374b68b4fba47c547bd75.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-2f7737b286dff1537adff47b8201aa43e33cbe1e47bd528ca2189809917fe132.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-semi-d9d13d5529ae8f3c91dc80b182cf14fc629118bbdac8851b36e102dd15652557.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-235189ed438049f084ca873f6ed2055c4127ddef84a55fa464053f34c10157e6.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-semi-af7a94ccf4768a81e6692d808f00e33ac88d9110f842d02c5ab211577686301a.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-bf8ec5927e343b3a804448d37a799c9c346af320f30b3cdc019297938fe00300.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-semi-6b12059c6aea11bf60e8f3c89afdffb6b817913541a1ce72cbca29f733224984.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-8a75a5e7cc4f8426a47f5ebfe2459283d3554cfdcf8dc5f492fda0b26d2d6d79.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-semi-930c6662236ab84933e73083bc057b869b895bd36cef9e3e5254018fb61bc82a.svg">
        <img class="hero-logo-circle" src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-50996d0762fb6d9ee13d6a52404dd01327fc542cc729777d532c9b633103c835.svg">
      </div>
    </div>
    <div class="tips">
      <ul style="margin-left: -50px">
        <li>1. Base On Vue3</li>
        <li>2. Base On Typescript</li>
        <li>3. Easy to use</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.circle {
  width: 50px;
  height: 50px;
  background: green;
  border-radius: 50%;
}
.tips {
  display: flex;
  justify-content: center;
}
.landing {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  box-sizing: border-box;
  padding-top: 100px;
  min-height: 100vh;
  background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233);
  color: #efdab9;
}
.hero-logo {
  flex: 0 0 500px;
  height: 366px;
  background-repeat: no-repeat;
  // background-image: url(//github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-logo-112585a3112ec646fa9e426f835b1626094f57354fd7dd059a8f455881654ad2.svg),url(//github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-sides-8f3d2e2077a1fb786c0bed45cc8f9e5ead36d291c4485ff8f00d8d713a3a7499.svg);
  background-image: url(https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png);
  background-size: 100px 100px;
  background-position: center;
  -webkit-user-select: none;
  user-select: none
}

.hero-logo-circles {
  width: 366px;
  height: 366px;
  margin: auto;
  position: relative
}

.hero-logo-circle {
  position: absolute;
  left: 0;
  top: 0;
  animation: hero-logo-circle 1s linear infinite;
  will-change: transform
}

.hero-logo-circle:nth-child(1) {
  animation-duration: 30s
}

.hero-logo-circle:nth-child(2) {
  animation-duration: 40s
}

.hero-logo-circle:nth-child(3) {
  animation-duration: 50s
}

.hero-logo-circle:nth-child(4) {
  animation-duration: 60s
}

.hero-logo-circle:nth-child(5) {
  animation-duration: 70s
}

.hero-logo-circle:nth-child(6) {
  animation-duration: 80s
}

.hero-logo-circle:nth-child(7) {
  animation-duration: 90s
}

.hero-logo-circle:nth-child(8) {
  animation-duration: 100s
}

.hero-logo-circle:nth-child(9) {
  animation-duration: 110s
}

.hero-logo-circle:nth-child(10) {
  animation-duration: 120s
}

@keyframes hero-logo-circle {
  100% {
    transform: rotate(1turn)
  }
}
</style>