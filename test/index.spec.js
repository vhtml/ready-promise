import readyPromise from '../src'
const { expect } = require('chai')

describe('readyPromise', () => {
  it('should resolve immediately', (done) => {
    let ret
    readyPromise(() => true).then(() => {
      ret = true
    })
    setTimeout(() => {
      expect(ret).to.equal(true)
      done()
    }, 0)
  })

  it('should reject for timeout after 1600ms', (done) => {
    let ret
    readyPromise(() => ret).catch((e) => {
      expect(ret).to.equal(undefined)
      done()
    })
    setTimeout(() => {
      ret = true
    }, 1600)
  })

  it('should resolve after 500ms', (done) => {
    let ret
    readyPromise(() => ret).then(() => {
      expect(ret).to.equal(true)
      done()
    })

    setTimeout(() => {
      ret = true
    }, 500)
  })

  it('should reject for timeout after 1100ms when set opions', (done) => {
    let ret
    readyPromise(() => ret, {
      rate: 100,
      timeout: 1000
    }).catch((e) => {
      expect(ret).to.equal(undefined)
      done()
    })
    setTimeout(() => {
      ret = true
    }, 1100)
  })
})
