Array.prototype.myEach = function (callback) {


      for (let i = 0; i < this.length; i++) {
            callback(this[i])
      }

}

// Array.prototype.myMap = function (callback) {
//       arr = [];
//       for (let i = 0; i < this.length; i++) {
//             arr.push(callback(this[i]))
//       }
//       return arr
// }


Array.prototype.myReduce = function (callback, initialValue) {
      arr = this.slice(0)
      if (initialValue === undefined) {
            initialValue = this[0]
            arr = arr.slice(1)
      }
      arr.myEach(function (ele) {
            initialValue = callback(initialValue, ele)
      })
      return initialValue
}
function cb(acc, ele) {

    return  acc * ele 
}

function plusOne(number) {
     console.log(number + 1)
}
console.log([1, 2, 3].myReduce(cb, 10))
