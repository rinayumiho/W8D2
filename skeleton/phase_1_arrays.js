Array.prototype.uniq = function() {
    array = [];
    for(let i = 0; i < this.length; i ++){
        if(!array.includes(this[i])){
            array.push(this[i]);
        }
    }
    return array;
}

Array.prototype.twoSum = function() {
    array = [];
    for(let i = 0; i < this.length; i ++){
        for(let j = i + 1; j < this.length; j ++){
            if(this[i] + this[j] === 0){
                array.push([i, j])
            }
        }
    }
    return array;
}

Array.prototype.transpose = function() {
    array = [];
    for(let i = 0; i < this[0].length; i ++){
        let array2 = []
        for(let j = 0; j < this.length; j ++){
            array2.push(this[j][i])
        }
        array.push(array2)
    }
    return array;
}

console.log([1,2,2,3,3,3].uniq())

console.log([1,-2,2,-3,-3,3].twoSum())
x = [[1,2,3],[4,5,6]]

console.log(x.transpose())
console.log(x)