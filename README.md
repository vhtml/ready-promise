# ready-promise [![NPM version](https://badge.fury.io/js/ready-promise.svg)](http://badge.fury.io/js/ready-promise)

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

  - `rate` (Number) 单位ms，执行`watchFunc`的频率，默认`50`
  - `timeout` (Number) 单位ms，判断超时最大时长限制，默认`1500`
