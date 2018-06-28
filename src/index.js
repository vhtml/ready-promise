const readyPromise = (watchFunc, {
  rate = 50,
  timeout = 1500
} = {}) => {
  if (typeof watchFunc !== 'function') {
    throw new Error('The first argument should be a function')
  }

  let rateTimer, overTimer

  const _clearTimer = () => {
    clearInterval(rateTimer)
    clearTimeout(overTimer)
  }

  return new Promise((resolve, reject) => {
    if (watchFunc()) {
      resolve()
      return
    }

    rateTimer = setInterval(() => {
      if (watchFunc()) {
        _clearTimer()
        resolve()
      }
    }, rate)

    overTimer = setTimeout(() => {
      _clearTimer()
      reject(new Error('timeout'))
    }, timeout)
  })
}

export default readyPromise
