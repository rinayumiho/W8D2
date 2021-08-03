function range(start, end) {
      if (start > end) {
            return []
      }
      return [start].concat(range(start + 1, end))
}

// console.log(range(1, 10))

function sumRec(arr) {
      if (arr.length === 0) {
            return 0
      }

      return arr.pop() + sumRec(arr)
}

// console.log(sumRec([2,4,5]))

function exponent(base, exp) {
      if (exp === 0) {
            return 1
      }

      return base * exponent(base, exp - 1)
}

// console.log(exponent(3, 2))

function exponent2(base, exp) {
      if (exp === 0) {
            return 1
      }
      if (exp % 2 === 0) {
            return exponent2(base, exp/2) ** 2
      }
      return base * (exponent2(base, (exp-1)/2)**2) 
}

// console.log(exponent2(4, 2))

function fib(n) {
      if (n === 1) {
            return [0]
      }

      if (n === 2) {
            return [0, 1]
      }

      arr = fib(n - 1);
      l = arr.length;
      arr.push(arr[l - 1] + arr[l - 2]);
      return arr
}

// console.log(fib(5))

function deepDup(arr) {
      return helperDeepDup(arr, 0)
}

function helperDeepDup(arr, index) {
      if (index === arr.length) {
            return []
      }
      return [arr[index]].concat(helperDeepDup(arr, index + 1))
}
arr = [1,2,3,4]
console.log(deepDup(arr))
console.log(arr)