
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img_arr:[]
    },

    upImg: function () {
        var that = this;
        if (that.data.img_arr.length < 5) {
            console.log(that.data.img_arr.length+"===");
            wx.chooseImage({
                count:5,//默认可以一次性选择5张图片
                sizeType: ['original', 'compressed'],
                success: function (res) {
                    that.setData({
                        img_arr: that.data.img_arr.concat(res.tempFilePaths)
                })
                }
            })
        } else {
            wx.showToast({
                title:'最多上传5张图片'
            })
        }
    },

    preBigImg:function(e){
        var imgPath = e.target.dataset.img;
        console.log(imgPath+"====consult");
        wx.previewImage({
            current: imgPath, // 当前显示图片的http链接
            urls: this.data.img_arr // 需要预览的图片http链接列表
        })

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