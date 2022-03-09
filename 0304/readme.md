line-height 百分比 纯数字 em单位区别？
em根据包裹盒的font-size计算，会出现行高低于字体大小导致重叠。
百分比也会基于包裹盒的font-size计算
纯数字基于字体实际大小进行计算。
结论就是 为了最好的展示效果，纯数字的行高是最好的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>line-height</title>
    <style>
        .green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}

    </style>
</head>
<body>
    <div class="box green">
        <h1>Avoid unexpected results by using unitless line-height.</h1>
         length and percentage line-heights have poor inheritance behavior ...
       </div>
       
       <div class="box red">
        <h1>Avoid unexpected results by using unitless line-height.</h1>
         length and percentage line-heights have poor inheritance behavior ...
       </div>
       
       <!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px  -->
       <!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = 16.5px,  probably not what you want -->
       
</body>
</html>
```

浏览器插件：
[参考]:(!https://mp.weixin.qq.com/s/kip-EQsugPwiP_fUXqjviQ)
提高效率：adBlock 过滤广告 / 1password自动填充密码 / Xhost
目标：自己开发插件，提升团队开发效率。
难点：
  多线程postmessage通信，生命周期不一致问题；
  涉及数据序列化传输，大小有限制；
  通过主线程协调各线程间状态，性能瓶颈
  每个popup对应每个background逻辑，没有框架，缺少成熟的代码组织方式
eg: XSwitch 可以将当前页面的某个请求重定向到用户输入的地址，比如将某个环境下当前页面的 js 重定向到本地 webpack-dev-server 提供的 js，实现线上调试功能。

DOM转图片的两种形式：
svg处理层叠问题：根据绘制顺序，先绘制的在下面，后绘制的在上，在遍历时，通过加入占位符，后续填充的方式实现层叠。
canvas完全根据绘制顺序，先绘制的在下，后绘制的覆盖在之上。所以先要分析DOM层级关系


