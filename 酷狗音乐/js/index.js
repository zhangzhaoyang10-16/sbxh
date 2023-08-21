var app = new Vue({
  el: "#player",
  data: {
    query: {},
    //歌曲数组
    musicList: [],
    //歌曲地址
    musicUrl: "",
    //歌曲封面
    musicCover: "",
    //歌曲评论
    hotComment: [],
    //动画播放状态
    isPlaying: false,
    //遮罩层的显示状态
    isShow: false,
    //mv地址
    MvUrl: "",
  },
  methods: {
    serachMusic: function () {
      var that = this;
      //歌曲搜索接口
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
        function (response) {
          console.log(response);
          that.musicList = response.data.result.songs;
        }
        // function (err) {}
      );
    },
    playMusic: function (musicId) {
      var that = this;
      //获取歌曲地址
      // console.log(musicId);
      axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
        function (response) {
          console.log(response.data.data[0].url);
          that.musicUrl = response.data.data[0].url;
        },
        function (err) { }
      );
      //歌曲详情获取
      // axios
      //   .get(
      //     "正确的获取歌曲详情的API URL?id=" +
      //     musicId
      //   )
      //   .then(
      //     function (response) {
      //       // console.log(response.data.songs[0].al.picUrl);
      //       if (response.data.songs && response.data.songs[0] && response.data.songs[0].al) {
      //         that.musicCover = response.data.songs[0].al.picUrl;
      //       }
      //     },
      //     function (err) { }
      //   );
      //歌曲评论的获取
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
        function (response) {
          console.log(response);
          console.log(musicId);
          console.log(response.data.hotComments);
          that.hotComment = response.data.hotComments;
          // console.log(that.hotComment[0].nickname);
        },
        function (err) {
          console.log(404);
        }
      );
    },
    play: function () {
      // console.log('play');
      this.isPlaying = true;
    },
    pause: function () {
      // console.log('pause');
      this.isPlaying = false;
    },
    //播放mv
    playMv: function (mvid) {
      var that = this;
      axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
        function (response) {
          // console.log(response);
          that.MvUrl = response.data.data.url;
          that.isShow = true;
        },
        function (err) { }
      );
    },
    //隐藏
    hide: function () {
      this.isShow = false;
    },
  },
});