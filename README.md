# ready-promise

Wait for the resource initialization is complete.

# Installation

```bash
$ npm install ready-promise --save
```

# Usage

```javascript
import readyPromise from 'ready-promise'

const isJsBridgeLoaded = () => window.jsBridge

readyPromise(isJsBridgeLoaded, {
  rate: 50,
  timeout: 1500
}).then(() => {
  console.log('jsBridge loaded')
}).catch(e => {
  console.log('jsBridge loaded error or timeout')
})
```

# API

readyPromise(watchFunc[, options])

- `watchFunc` (Function) 
  
  判断某个要监听的变量是否存在或符合条件，需自行实现，返回`true`或`false`。

- `options` 

  - `rate` (Number) 执行`watchFunc`的频率
  - `timeout` (Number) 判断超时最大时长限制
