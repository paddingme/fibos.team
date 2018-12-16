<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                                <div class="card-profile-image align-center">
                                    <a href="#">
                                        <img v-lazy="'img/theme/fibos.team.png'" class="rounded-circle" style="background-color: #fff;">
                                    </a>
                                </div>
                        </div>
                        <div class="text-center" style="margin-top: -2rem;">
                            <h3 class="display-3">FIBOS TEAM</h3>
                            <div class="h6 mt-3">FIBOS 超级节点竞选者</div>
                            <div class="font-weight-300 mt-2">北京 · 中国</div>
                        </div>

                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-10  justify-content-md-center">
                                    <p >FIBOS TEAM 是由全栈工程师 PaddingMe 于 2018 年 9 月 4 日发起，</p>
                                    <p>维护 FIBOS 主网安全与稳定，向公众传播 FIBOS 知识， </p>
                                    <p>为社区提供 FIBOS 衍生工具及服务是 FIBOS TEAM 义不容辞的使命。</p>

                                    <!-- 旨在维护稳定的 FIBOS 节点，向公众传播有关 FIBOS 知识，为社区做出贡献。 -->
                                    <table class="table col-lg-10 offset-md-1 " style="margin-top: 2rem">
                                        <tr>
                                            <td>节点账号</td> <td><code>liuqiangdong</code></td>
                                        </tr>
                                        <tr>
                                            <td>HTTP</td> <td>http://api.fibos.team</td>
                                        </tr>
                                        <tr>
                                            <td>HTTPS</td> <td>https://api.fibos.team</td>
                                        </tr>
                                        <tr>
                                            <td>P2P</td> <td>p2p.fibos.team:9876</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
