<!--<template>
  <div>
    {{pullLogger}}
  </div>
</template>-->
<template>
  <div>
    <el-card class="box-card" dis-hover>
      　 <p slot="title" style="padding-bottom: 20px; padding-top: 5px;">
      　　 监听程序日志
    </p>
      <el-button type="success" @click="openSocket" round>开启日志</el-button>
      <el-button type="danger" @click="closeSocket" round>关闭日志</el-button>
      <br><br>
      <div id="log-container" style="height: 600px; overflow-y: scroll; background: #333; color: #aaa; padding: 10px;">
        <div id="aa">{{pullFileLogger}}</div>
      </div>
      　　
    </el-card>
  </div>
</template>
<script>
  import SockJS from 'sockjs-client';
  import Stomp from 'stompjs';
  import $ from 'jquery';

  export default {
    name: "index",
    data() {
      return {
        //pullLogger: '',
        pullFileLogger: '正在连接websocket，请稍后~',
        stompClient: null
      }
    },
    created() {
      this.openSocket()
    },
    methods: {
      openSocket() {

        if (this.stompClient === null) {
          console.log('打开websocket连接')
          this.pullFileLogger = '通道连接成功,静默等待....';
          let _that = this;
          const socket = new SockJS('http://127.0.0.1:8888/websocket?token=kl');
          _that.stompClient = Stomp.over(socket);
          _that.stompClient.connect({token: "kl"}, function (frame) {
            _that.stompClient.subscribe('/topic/pullLogger', function (event) {
                _that.pullFileLogger = '';
                var content = JSON.parse(event.body);
                console.log("content:" + content);
                var leverhtml = '';
                var className = "<span style='color: #229379'>" + content.className + "</span>";
                switch (content.level) {
                  case 'INFO':
                    leverhtml = "<span style='color: #90ad2b'>" + content.level + "</span>";
                    break;
                  case 'DEBUG':
                    leverhtml = "<span style='color: #A8C023'>" + content.level + "</span>";
                    break;
                  case 'WARN':
                    leverhtml = "<span style='color: #ff9900'>" + content.level + "</span>";
                    break;
                  case 'ERROR':
                    leverhtml = "<span style='color: #e3270e'>" + content.level + "</span>";
                    break;
                }
                $("#log-container div").append("<p style='color: #18d035;font-size: 14px'>" + content.timestamp + " " + leverhtml + " --- [" + content.threadName + "] " + className + " ：" + content.body + "</p>");
                if (content.exception != "") {
                  $("#log-container div").append("<p style='color: #18d035;font-size: 14px'>" + content.exception + "</p>");
                }
                if (content.cause != "") {
                  $("#log-container div").append("<p style='color: #18d035;font-size: 14px'>" + content.cause + "</p>");
                }
                $("#log-container").scrollTop($("#log-container div").height() - $("#log-container").height());
              },
              {
                token: "kltoen"
              });
          });
        }
      },
      closeSocket() {
        if (this.stompClient != null) {
          this.stompClient.disconnect();
          this.stompClient = null;
          console.log("关闭websocket连接");
          this.pullFileLogger = 'websocket连接已关闭';
        }
      },
      //销毁页面之前,断开连接
      beforeDestroy: function () {
        //页面离开时断开连接，清楚定时器
        this.closeSocket();
      },
      mounted(){
        //调用初始化websocket方法
        this.openSocket();
      }
    }
  }
</script>

<style scoped>

</style>
