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