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

                <div class="container shape-container" style="padding-bottom: 4rem;">
                    <div class="col px-0" style="margin-bottom: 20px;">
                        <div class="row justify-content-center" style="width: 90%;margin-left: 5%">
                            <h1 class="display-6 text-white text-center" style="width: 100%">
                              FIBOS 主网全节点区块数据备份
                            </h1>
                            <br>
                            <p class="lead  text-white">东哥每日定时备份，AWS S3 / 青云加速下载，助你快速同步</p>
                        </div>
                    </div>
                    <div class="card card-profile shadow">
                      <div class="px-4 table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">文件名</th>
                              <th scope="col">下载</th>
                              <th scope="col">大小</th>
                              <th scope="col">MD5 Checksum</th>
                            </tr>
                          </thead>
                          <tbody  style="min-height:200px;">

                            <!-- TODO 复制 & 添加数据的loading -->
                            <tr v-for="(item, index) in backups" :key="item.md5chksum" v-if="index < 5">
                              <td>{{item.name}}</td>
                              <td>
                                <a :href="item.s3url">AWS S3 </a>|<a :href="item.qingUrl">QingStor</a>
                              </td>
                              <td>{{item.size}}</td>
                              <td>{{item.md5chksum}}</td>
                            </tr>
                          </tbody>
                        </table>
                        <content-placeholders rounded v-if="loading" style="width: 100%">
                          <content-placeholders-text :lines="5" />
                        </content-placeholders>
                      </div>
                    </div>

                </div>

                <div class="container row-container">
                  <div class="row">

                      <!-- TODO 可参考其他的数据网站  -->
                      <div class="row-left">
                        <h3 style="padding-bottom:2rem;"><i class="fa fa-code" style="margin-top: -4px;margin-right: 12px;vertical-align: middle;font-size: 150%;color: #0098ef;"></i>如何使用</h3>
                        <p>备份数据同步压缩于节点 <code>liuqiangdong</code> 的 API Server，在 <strong>Ubuntu 16.04</strong> 系统下测试使用正常，其他操作系统未经测试。</p>
                        <p>请根据自己的网络情况，墙外服务器请选择 AWS S3，墙内服务器请选择 qingStor，选择最新的备份区块数据链接进行下载，再解压缩到你的数据存储目录，然后重新 启动 fibos server 即可。</p>
                        <p>除了 wget 下载外，AWS S3 下载也可以使用 <a href="https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/installing.html">AWS CLI</a>，如：<br><code>aws s3 cp s3://fibos.team/data-20181111.tar.gz</code>;</p>
                        <p>QingStor 下载也可以使用 <a href="https://docs.qingcloud.com/qingstor/developer_tools/qsctl.html">qsctl</a>，如：<br><code>qsctl cp qs://liuqiangdong/data-20181111.tar.gz</code>。</p>
                        <p>有任何问题，请 memo 留言转账 FO 至 <code>liuqiangdong</code>。祝你好运，FO bless you! </p>
                      </div>
                      <div class="row-right">
                        <pre>
                          <span># 进入自己的启动目录，将自己已损坏的数据目录删除</span>
                          <span>cd /fibos-starter</span>
                          <span>rm -rf liuqiangdong_Dir</span>
                          <span></span>
                          <!-- TODO 数据结构可以更改为 https://eosnode.tools/api/blocks?limit=1 一样的-->
                          <span># 根据你的网络情况，选择最新的 AWS S3 或青云备份数据 URL，进行下载</span>
                          <span>wget https://liuqiangdong.pek3b.qingstor.com/2018-backup.tar.gz</span>
                          <span></span>
                          <span># 解压缩会生成 liuqiangdong_Dir 目录，建议添加-S参数，可高效处理稀疏文件的解压，降低解压时间</span>
                          <span>tar xvzSf 2018-backup.tar.gz</span>
                          <span></span>
                          <span># 重新启动 fibos server</span>
                          <span>nohup fibos server.js &</span>
                          <span></span>
                          <span># 查看日志是否正确同步</span>
                          <span>tail -f nohup.log</span>
                          </pre>
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
      backups: [],
      loading: true
    };
  },
  mounted () {
    this.getBackups();
  },
  methods: {
    getBackups() {
      API.getBackups().then((data) => {
          this.backups = data
          this.loading = false
      })
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
pre {
  font-family: monospace;
  background-color: #fff;
  width: em(440);
  margin: 4em auto;
  padding: 0.5em;
  border-radius: .25em;
  box-shadow: .1em .1em .5em rgba(0,0,0,.2);
  line-height: 0;
  counter-reset: line;
  padding-bottom: 20px;
  span {
    display: block;
    line-height: 1.5rem;
    font-weight: 400;
    &:before {
      counter-increment: line;
      content: counter(line);
      display: inline-block;
      border-right: 1px solid #ddd;
      padding: 0 .5em;
      margin-right: 1em;
      color: #888;
      width: 2em;
    }
  }
}
p {
  color: #212529;
  font-weight: 300;
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
td {
  white-space: nowrap;
}
.row-left {
  padding-left: 15% !important;
  padding-right: 2%;
      -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
.row-right {
  padding-right: 15% !important;
      -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
.row-container {
  max-width: 100%;
  background-color: white;
  padding-top: 8rem;
  padding-bottom: 4rem;
}
@media (max-width: 1199.98px) {
  .row-left {
    padding-left: 8% !important;
    padding-right: 8%;
    flex: auto;
    max-width: 100%;
  }
  .row-right {
    padding-left: 8%!important;
    padding-right: 8%!important;
    flex: auto;
    max-width: 100%;
    justify-content: center;
  }
  .row-container {
    padding-bottom: 0rem;
    margin-bottom: -2rem;
  }
}
</style>
