# 阅读记录

从package.json开始看

     cross-env NODE_ENV=development 
    concurrently \"bisheng start -c ./site/bisheng.config.js\"

antd-tools run clean

## cross-env

是命令行工具,解决多平台参数的形式差异

windows: set NODE_ENV=production
linux: export NODE_ENV=production

## concurrently

concurrently 可以并行多个任务
假如是个SSR项目,需要启动前端和服务器两个项目
此时使用 "dev": "concurrently \"npm run dev-client\" \"npm run dev-server\""
也可以使用下面这个
"npm-run-all --parallel dev-client dev-server
