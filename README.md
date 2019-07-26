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
  
  To determine whether a variable to be monitored exists or meets the conditions, you need to implement it yourself, returning `true` or `false`.

- `options` 

  - `rate` (Number) Unit `ms`, the frequency of executing `watchFunc`, default `50`.
  - `timeout` (Number) Unit `ms`, judge the timeout maximum duration limit, the default `1500`.
