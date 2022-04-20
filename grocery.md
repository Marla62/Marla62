1. vue的hash和history有什么区别？

hash兼容到IE8.history只到IE10. 但如今移动时代，兼容IE可以不考虑。

hash本身是做页面定位的，滚动到页面指定DOM元素。hash模式的路由改变了这种约定。

hash传参基于URL，肯定就不能传输复杂的数据。但是history可以将参数存储到某个位置，用来处理hash的传参问题。

history模式URL改变会对服务器发起请求，需要在服务层做异常URL的catch。