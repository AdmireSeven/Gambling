// pages/one/one.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    rank: "",
    score: "",
    sumscore:0,
    diceimg: [],
    resultList: []
  },
  /**
   * button 点击开始
   */
  begin: function () {
    this.setData({
      img: "/assets/playDice.gif",
      diceimg: [],
      rank: "",
      score: ""
    })
    setTimeout(() => {
      this.setData({
        img: "",
      })
      var list = [];
      var listsrc = [];
      var one = 0; //统计投掷结果
      var two = 0;
      var three = 0;
      var four = 0;
      var five = 0;
      var six = 0;
      var sumscore = this.data.sumscore
      for (var i = 0; i < 6; i++) {
        var t = 0 + Math.ceil(Math.random() * 6);
        list.push(t);
        if (t == 1) one++;
        if (t == 2) two++;
        if (t == 3) three++;
        if (t == 4) four++;
        if (t == 5) five++;
        if (t == 6) six++;
      }
      this.setData({
        resultList: list
      })
      for (var i = 0; i < 6; i++) {
        var dicesrc = "/assets/dice" + this.data.resultList[i] + ".png"
        listsrc.push(dicesrc)
      }
      this.setData({
        diceimg: listsrc,
      })
      var flag = 0;
      if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
        this.setData({
          rank: "对堂",
          score: "+300",
          sumscore:sumscore + 300
        })
        flag = 1
      } else {
        if (four == 1) {
          this.setData({
            rank: "一秀",
            score: "+10",
            sumscore:sumscore + 10
          })
          flag = 1
        }
        if (four == 2) {
          this.setData({
            rank: "二举",
            score: "+50",
            sumscore:sumscore + 50
          })
          flag = 1
        }
        if (four == 3) {
          this.setData({
            rank: "三红",
            score: "+200",
            sumscore:sumscore + 200
          })
          flag = 1
        }
        if (four == 4) {
          if (one == 2) {
            this.setData({
              rank: "状元插金花",
              score: "+1000",
              sumscore:sumscore + 1000
            })
            flag = 1
          } else {
            this.setData({
              rank: "状元",
              score: "+500",
              sumscore:sumscore + 500
            })
            flag = 1
          }
        }
        if (four == 6) {
          this.setData({
            rank: "六杯红",
            score: "+500",
            sumscore:sumscore + 500
          })
          flag = 1
        }
        if (three == 4) {
          this.setData({
            rank: "四进",
            score: "+100",
            sumscore:sumscore + 100
          })
          flag = 1
        }
        if (three == 5) {
          this.setData({
            rank: "五王",
            score: "+500",
            sumscore:sumscore + 500
          })
          flag = 1
        }
        if (six == 6) {
          this.setData({
            rank: "六杯黑",
            score: "+500",
            sumscore:sumscore + 500
          })
          flag = 1
        }
      }
      if (flag == 0) {
        this.setData({
          rank: "再接再厉哦",
          score: "+0"
        })
      }
      this.setData({
        sumscore:this.data.sumscore
      })
      // console.log(this.data.resultList)
      console.log("输出投掷结果:", this.data.rank)
      console.log(this.data.sumscore)
      // rank=this.data.rank
      // score=this.data.score
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})