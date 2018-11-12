<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="container shape-container">
                    <div class="col px-0" style="margin-bottom: 20px;">
                        <div class="row justify-content-center">
                            <h1 class="display-6 text-white">
                              FIBOS 区块数据备份
                            </h1>
                            <p class="lead  text-white">数据又炸了？别着急，东哥每日定时为你备份数据，AWS S3 加速下载，5秒 下载，1分钟恢复同步...</p>
                        </div>
                    </div>
                    <div class="card card-profile shadow">
                      <div class="px-4">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">文件名</th>
                              <th scope="col">大小</th>
                              <th scope="col">MD5 Checksum</th>
                              <th scope="col">下载</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in backups" :key="item.md5chksum">
                              <td>{{item.name}}</td>
                              <td>{{item.size}}</td>
                              <td>{{item.md5chksum || 'e2dfdda2f68f22f47512bb071ee3bbde'}}</td>
                              <td>
                                <a href="${item.s3url}">AWS S3</a>
                                <i class="ni ni-single-copy-04" style="margin-left: 10px;"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>2018-11-10_11_29_58-caoge.tar.gz</td>
                              <td>1.9 GB</td>
                              <td>e2dfdda2f68f22f47512bb071ee3bbde</td>
                              <td>
                                <a href="${item.s3url}">AWS S3</a>
                                <i class="ni ni-single-copy-04" style="margin-left: 10px;"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>2018-11-10_11_29_58-caoge.tar.gz</td>
                              <td>1.9 GB</td>
                              <td>e2dfdda2f68f22f47512bb071ee3bbde</td>
                              <td>
                                <a href="${item.s3url}">AWS S3</a>
                                <i class="ni ni-single-copy-04" style="margin-left: 10px;"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>2018-11-10_11_29_58-caoge.tar.gz</td>
                              <td>1.9 GB</td>
                              <td>e2dfdda2f68f22f47512bb071ee3bbde</td>
                              <td>
                                <a href="${item.s3url}">AWS S3</a>
                                <i class="ni ni-single-copy-04" style="margin-left: 10px;"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </section>


        </div>



    </div>
</template>

<script>
const API = require('../api')

export default {
  name: "backups",
  data() {
    return {
      backups: []
    };
  },
  mounted () {
    this.getBackups();
  },
  methods: {
    getBackups() {
      API.getBackups().then((data) => {
          this.backups = data
      })
    }
  },
  components: {}
};
</script>
