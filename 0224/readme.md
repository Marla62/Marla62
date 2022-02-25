目标：
    了解工具链中的每个工具
为什么使用npm构建，而不是CDN？
    npm将强依赖的资源捆绑到一起，同时原本很多行命令做的事情 简化成1行命令来替代，同时也隐藏了复杂度。
    -D 表示本地的开发依赖 比如 prettier 
    -yarn.lock 表示打包时的锁定依赖版本，不至于下次安装会因为版本不同而产生问题。

能通过编辑器插件完成的事情，为什么还要写道package.json中？
    便于团队协作，并不是所有人都安装了插件。但所有人会安装npm包。

面向开发者编程是在做什么?
    编写高质量的代码，并且不减慢他们的开发速度。

package.json做了什么？
    - 记录了项目中的包依赖
    - browserslist适配列表

browserslist配置项是什么意思？
它定义了一套浏览器兼容配置标准，使得众多前端开发工具（Autoprefixer, Babel, Stylelint...）之间可以共享同一套配置。

browserslist的默认配置？
Browserslist 将采用默认配置：> 0.5%, last 2 versions, Firefox ESR, not dead

什么是Parcel？
    一个js打包器，0配置, 自动解析已有内容使用对应loader。

什么时候适合使用Parcel？
快速的跑一个HTML页面出来。
可以接受没有SourceMap、TreeShaking的情况。

为什么没有TreeShaking、SourceMap？
TODO
 
引入转译工具-Babel
不像C++那样编译到二进制。只是将es2021到es2015,以兼容更低的宿主。
编译JSX内容


如果不了解命令行工具，可以继续听他的关于命令行的大师课。

