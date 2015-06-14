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
    setTimeout(function(){ expect(result).to.be.eql(1) }, 300)
    setTimeout(debounced, 310)
    setTimeout(function(){ expect(result).to.be.eql(2) }, 450)
    setTimeout(done, 500)
  })

})