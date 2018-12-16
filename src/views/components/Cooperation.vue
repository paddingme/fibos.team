<template>
    <section class="section section-lg section-nucleo-icons pb-250">
        <div class="container" @mouseleave="showIconsAnimation = true">
            <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                <div class="col-lg-8 text-center">
                    <h2 class="display-3">合作共赢</h2>
                    <p class="lead">
                        去中心化网络需要各 BP 开放式合作，<br>
                        FIBOS TEAM 愿与其他 BP 进行公开讨论，提供免费技术咨询和社区支持。 <br>
                        集结所有 BP 力量合作共赢，共同维护 FIBOS主网安全稳定。
                    </p>
                </div>
            </div>
            <div class="blur--hover">
                <a href="javascript:void(0)">
                    <div class="icons-container blur-item mt-5 on-screen">
                        <!-- Center -->
                        <img class="icon ni ni-diamond" src="/apple-touch-icon.png" alt="">
                        <!-- Right 1 -->
                        <img class="icon ni ni-diamond" src="https://fibos.io/imgs/favicon.ico" alt="">
                         <img class="icon ni ni-diamond" src="https://raw.githubusercontent.com/fibosRocks/logo/master/fibsorockskr.png" alt="">
                          <img class="icon ni ni-diamond" src="https://i.loli.net/2018/09/27/5bac9aff71ffe.png" alt="">
                           <img class="icon ni ni-diamond" src="https://raw.githubusercontent.com/wiki/hzaugiser/Fibos/fo.png" alt="">
                        <!-- <i class="icon icon-sm ni ni-album-2"></i>
                        <i class="icon icon-sm ni ni-app"></i>
                        <i class="icon icon-sm ni ni-atom"></i> -->
                        <!-- Right 2 --> <img class="icon ni ni-diamond" src="https://www.fibos123.com/public/images/logo_256.png" alt="">
                         <img class="icon ni ni-diamond" src="https://raw.githubusercontent.com/fibscan/logos/master/logo_256.png" alt="">
                         <img class="icon ni ni-diamond" src="https://raw.githubusercontent.com/lowwor/fibostoolkit/master/app/assets/img/ilovefibosWhite.png" alt="">

                        <!-- <i class="icon ni ni-bag-17"></i>
                        <i class="icon ni ni-bell-55"></i>
                        <i class="icon ni ni-credit-card"></i> -->
                        <!-- Left 1 -->
                         <img class="icon ni ni-diamond" src="https://fibos.io/imgs/favicon.ico" alt="">
                         <img class="icon ni ni-diamond" src="https://raw.githubusercontent.com/fangqiluxatu/bp/master/new.png" alt="">
                          <img class="icon ni ni-diamond" src="https://cdn.slowmist.com/smz/images/smz256.png" alt="">
                           <img class="icon ni ni-diamond" src="https://fibos.io/imgs/main5.png" alt="">


                        <!-- Left 2 -->


                           <img class="icon ni ni-diamond" src="https://fibos.io/imgs/docer5.png" alt="">
                        <!-- <i class="icon ni ni-calendar-grid-58"></i> -->
                        <!-- <i class="icon ni ni-camera-compact"></i>
                        <i class="icon ni ni-chart-bar-32"></i> -->
                    </div>
                    <span class="blur-hidden h5 text-success">FIBOS 节点英雄联盟</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      showIconsAnimation: false
    };
  },
  methods: {
    onScroll(evt) {
      console.log(evt);
    }
  }
};
</script>
<style>
</style>
