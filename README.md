# HTML-CSS-JS 原生练习
###根据自己做的练习和理解，对需求进行分析总结,希望一直持续下去...


###样式设置与切换
样式设置最好通过修改不同的类进行控制，浏览器渲染也有很好地优化

* [控制DIV颜色和尺寸](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/2.控制DIV颜色和尺寸.html)
* [改变文字大小](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/3.改变文字大小.html)——文字设置最好规定上下限


*************************************************************************************************************************************

###元素或状态切换

#####一对二 : 一个触发事件元素控制两个元素或状态之间来回切换
设置一个布尔值作为判断依据进行切换

* [模拟手机短信发送](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/4.模拟手机短信发送.html)


#####一对多 : 一个触发事件元素控制多个元素或状态顺序切换
设置一个数字型变量索引值，触发事件自增或自减，引用数组内不同元素

* [按钮控制图片切换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/5.图片切换.html)
* [控制多组不同数量照片同时轮换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/12.控制多组照片轮换.html)——每组照片都有对应索引值，每个索引值范围限制不同，点击同时改变，


#####多对多 : 一组触发事件元素控制一组元素或状态切换
通过对触发事件元素建立索引值，与所控制的元素进行匹配
清除触发事件元素active状态：
1.每次都先全部清空再添加当前触发元素active状态（数量过多效率不高）
2.清空上一次触发，把当前this保留至下次触发清除，添加当前this触发元素active状态

* [点击按钮出现对应的字](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/9.索引值及this的应用_点击按钮出现相应的字.html)
* [带缩略图的图片切换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/11.带缩略图的图片切换.html)
* [通过点击缩略图显示不同的图片](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/10.通过点击缩略图显示不同的图片.html)
* [通过点击缩略图显示不同的图片(变量提取，函数封装，代码复用)](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/15代码复用.通过点击缩略图显示不同的图片.html)
* [选择卡里套选择卡](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/18.选择卡里套选择卡.html)
* [排行榜](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/19.排行榜.html)
* [隔行变色，点击与滑入滑出相互关联](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/21.隔行变色.html)——也有一对二状态切换判断
* [百度文库评分](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/22.百度文库评分.html)——也有一对二状态切换判断，是否评分影响移出效果

********************************************************************************************************************

###上下文关联效果

#####自己影响自己的子级
事件函数内通过this对该对象内部元素的获取及后续操作

* [移动在不同的区域上会出现不同的内容](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/6.this的应用.html)
* [点击不同图片各自切换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/8.点击不同图片各自切换.html)
* [模拟qq下拉菜单](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/13.模拟qq下拉菜单.html)



###自己和自己的父级效果一致，事件冒泡

* [按钮移入移出下拉菜单](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/1.%E6%8C%89%E9%92%AEonmouseover.html)——鼠标移出按钮或菜单后，菜单才会消失，事件流






********************************************************************************************************************

###数据验证与处理


* [数据类型转换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/14.数据类型及转换实例.html)
* [QQ号检测](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/14.1数据类型及转换实例2.html)
* [商店价格结算](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/16.商店价格结算.html)
* [修改文本框的值](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/17.修改文本框的值.html)




********************************************************************************************************************

###绝对定位计算位置

* [自动生成10个li](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/7.自动生成10个li.html)
* [自动生成100个li](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/7.1自动生成100个li.html)










********************************************************************************************************************

###定时器——动画
注意判断上次动画是否完成，再执行本次动画，否则易出错。

#####定时器基本应用
注意及时关闭定时器clearInterval(timer)

* [延时菜单1](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/24.延时菜单1.html)
* [控制商品页面上下滚动](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/25.控制商品页面上下滚动.html)
* [自动轮转选项卡](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/26.自动轮转选项卡.html)——多组元素轮播控制在一个数组
* [广告自动轮转](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/27.广告自动轮转.html)
* [点击加分效果](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/30.点击加分效果.html)


#####两个方向来回运动
注意判断一个方向的运动是否完成

* [点击向下再点击向上](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/28.点击向下再点击向上.html)
* [抖动效果](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/29.抖函数.html)——本质在于偏移量，例如数组[20,-20,18,-18,16,-16......2,-2,0]
* [图片左右自动切换](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/30.点击加分效果.html)——利用另一张图片作为过渡，加载下一张图片，瞬间移动位置









********************************************************************************************************************
#####其它
* [百度音乐-全选操作](http://peng2014.github.io/HTML-CSS-JS/JS-Basic/23.百度音乐-全选操作.html)




<<<<<<< HEAD
=======

>>>>>>> origin/gh-pages
