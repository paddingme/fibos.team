<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">支持我们请投票给 <code>liuqiangdong</code></h3>
                    <!-- <h4 class="mb-0 font-weight-light">发现 FIBOS 无处不在的价值</h4> -->
                </div>
                <!-- TODO -->
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" href="javascript:void(0)"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Twitter 还没开通，开通了也不会更新">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://weibo.com/fibos.team"
                       class="btn btn-neutral btn-icon-only  btn-round btn-lg btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-weixin"></i>
                    </a>
                    <a target="_blank" href="https://weibo.com/fibos.team"
                       class="btn btn-neutral btn-icon-only  btn-round btn-lg btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-weibo"></i>
                    </a>
                    <a target="_blank" href="https://github.com/fibos-team"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2018
                        <a href="https://fibos.team" target="_blank">FIBOS TEAM</a>.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <!-- <li class="nav-item">
                            <a href="/ownership_disclosure.html" class="nav-link" target="_blank">disclosure</a>
                        </li> -->
                        <li class="nav-item">
                            <a href="/producer.json"
                               class="nav-link" target="_blank">producer.json</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
