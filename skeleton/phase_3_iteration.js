Array.prototype.bubbleSort = function(){
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < this.length - 1; i ++){
            if(this[i] > this[i + 1]){
                let tmp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = tmp;
                isSorted = false;
            }
        }
    }
    return this;
}

String.prototype.substring = function(){
    array = [];
    let i = 0;
    while(i < this.length){
        let j = i + 1;
        while(j <= this.length){
            array.push(this.slice(i, j));
            j ++;
        }
        i ++;
    }
    return array;
}

// console.log([2,1,5,4,6,3].bubbleSort())
console.log("abcd".substring())