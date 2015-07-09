var expect = require('chai').expect
  , debounce = require('./')

describe('debounce', function() {

  it('should debounce fn', function(done) {
    var fn = function(){ result++ }
      , result = 0
      , debounced = debounce(fn)

    debounced()    
    debounced()    
    debounced()    

    setTimeout(debounced, 50)
    setTimeout(debounced, 100)
    setTimeout(debounced, 150)
    setTimeout(function(){ expect(result).to.be.eql(0) }, 200)
    setTimeout(function(){ expect(result).to.be.eql(1) }, 400)
    setTimeout(debounced, 410)
    setTimeout(function(){ expect(result).to.be.eql(2) }, 590)
    setTimeout(done, 600)
  })

  it('should debounce fn after custom time', function(done) {
    var fn = function(){ result++ }
      , result = 0
      , debounced = debounce(200)(fn)

    debounced()    
    debounced()    
    debounced()    

    setTimeout(debounced, 100)
    setTimeout(debounced, 200)
    setTimeout(debounced, 300)
    setTimeout(function(){ expect(result).to.be.eql(0) }, 400)
    setTimeout(function(){ expect(result).to.be.eql(1) }, 800)
    setTimeout(debounced, 820)
    setTimeout(function(){ expect(result).to.be.eql(2) }, 1180)
    setTimeout(done, 1200)
  })

})