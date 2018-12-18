<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/" title="Backups Page">
                            <img v-lazy="'1.png'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/about" title="About Page">
                            <img v-lazy="'2.png'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">支持我们请投票给 <code>liuqiangdong</code></h3>
                    <blockquote class="mb-0 font-weight-light">为东哥打尻，新主页很漂亮!</blockquote>
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
blockquote {
  /* background: #f9f9f9; */
  border-left: 4px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.1em 10px;
  quotes: "\201C" "\201D" "\2018" "\2019";
}
/* blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
} */
blockquote p {
  display: inline;
}
</style>
