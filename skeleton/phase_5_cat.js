class Cat{
    constructor(name, owner, store){
        this.name = name;
        this.owner = owner;
        this.store = store;
    }
}

Cat.prototype.cuteStatement = function(){
    console.log(`${this.owner} loves ${this.name}`);
}

Cat.prototype.meow = function(that){
    console.log(`${this.name} meow ${that.name}`);
}

cat1 = new Cat("Oussama", "Everyone", "Cat store1");
// cat.cuteStatement();
cat2 = new Cat("Long", "Nobody", "Cat store2");
cat1.meow(cat2);
cat2.meow(cat1);