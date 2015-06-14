module.exports = function debounce(fn){
  var wait = 100, pending

  return function(){
    var ctx = this, args = arguments
    pending && clearTimeout(pending)
    pending = setTimeout(function(){ fn.apply(ctx, args) }, wait)
  }
}