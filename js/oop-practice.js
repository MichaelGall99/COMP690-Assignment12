// STEP 1
// Using ES5.................................
function Cat() {
    //TBD
}
const Dog = function() {
    //TBD
}
console.log('step 1....')

// STEP 2
// Using ES5 (same for ES6)..................
console.log('step 2....')
const cat1 = new Cat()	
const dog1 = new Dog()

// STEP 3
// Using ES5.................................
function Animal_ES5_A() {
    console.log(`The Animal (ES5_A) has been created!`)
}
console.log('step 3....')
const animal_1_ES5 = new Animal_ES5_A()

// Using ES6.................................
class Animal_ES6_A {
	constructor() {
		console.log(`The Animal (ES6_A) has been created!`)
	}
}
const animal_1_ES6 = new Animal_ES6_A()

// STEP 4
// Using ES5.................................
function Animal_ES5_B(msg) {
    console.log(msg)
}
console.log('step 4....')
const animal_2_ES5 = new Animal_ES5_B(`The Animal (ES5_B) has been created!`)

// Using ES6.................................
class Animal_ES6_B {
	constructor(msg) {
		console.log(msg)
	}
}
const animal_2_ES6 = new Animal_ES6_B(`The Animal (ES6_B) has been created!`)

// STEP 5
// Using ES5.................................
function Animal_ES5_C(type, breed, color, ht, len) {
    this._type = type
	this._breed = breed
	this._color = color
	this._height = ht
    this._length = len
	console.log(`The new ${this._color} ${this._breed} ${this._type} that is ${this._height} tall and ${this._length} long has been created!`)
}
console.log('step 5....')
const sweetie = new Animal_ES5_C('dog', 'mixed', 'tan', '28 inches', '46 inches')

// Using ES5.................................
class Animal_ES6_C {
    constructor(type, breed, color, ht, len) {
        this._type = type
        this._breed = breed
        this._color = color
        this._height = ht
        this._length = len
        console.log(`The new ${this._color} ${this._breed} ${this._type} that is ${this._height} tall and ${this._length} long has been created!`)
    }
}
const smokey = new Animal_ES6_C('cat', 'ragdoll', 'white & gray', '15 inches', '21 inches')


// STEP 6
console.log('step 6....')
for (const property in sweetie) {
    console.log(`${property}: ${sweetie[property]}`);
}


// STEP 7
// Using ES5.................................
function Animal_ES5_D(type, breed, color, ht, len) {
    this._type = type
	this._breed = breed
	this._color = color
	this._height = ht
    this._length = len
	console.log(`The new ${this._color} ${this._breed} ${this._type} that is ${this._height} tall and ${this._length} long has been created!`)

    this.speak = function() {                               // Public Method
        if (this._type === 'dog') {
            return `The ${this._color} dog is barking!`
        } else if (this._type === 'cat') {
            return `The ${this._color} cat is meowing!`
        }
    }
}

console.log('step 7....')
const shultz = new Animal_ES5_D('dog', 'german shepard', 'black and tan', '35 inches', '50 inches')
console.log(shultz.speak())

const shadow = new Animal_ES5_D('cat', 'bombay', 'black', '13 inches', '19 inches')
console.log(shadow.speak())

// Using ES6.................................
class Animal_ES6_D {
    constructor(type, breed, color, ht, len) {
        this._type = type
        this._breed = breed
        this._color = color
        this._height = ht
        this._length = len
        console.log(`The new ${this._color} ${this._breed} ${this._type} that is ${this._height} tall and ${this._length} long has been created!`)
    }

    speak = function() {                                    // Public Method
        if (this._type === 'dog') {
            return `The ${this._color} dog is barking!`
        } else if (this._type === 'cat') {
            return `The ${this._color} cat is meowing!`
        }
    }
}

const jessie = new Animal_ES6_D('dog', 'golden retriever', 'blonde', '34 inches', '48 inches')
console.log(shultz.speak())

const link = new Animal_ES6_D('cat', 'chartreux', 'gray', '16 inches', '23 inches')
console.log(shadow.speak())


// STEP 8
// Using ES5.................................
function Animal_ES5_E(type, breed, color, ht, len) {
    let _type = type
	let _breed = breed
	let _color = color
	let _height = ht
    let _length = len
	console.log(`The new ${_color} ${_breed} ${_type} that is ${_height} tall and ${_length} long has been created!`)

    let checkType = function() {                            // Private Method
        if (_type === 'dog') {
            return `dog`
        } else {
            return `cat`
        }
    }
    
    this.speak = function() {                               // Privileged Public Method
        return `The ${checkType()} has made a noise!`
    }
}
console.log('step 8....')
const bailey = new Animal_ES5_E('dog', 'pitbull mix', 'tan', '34 inches', '48 inches')
console.log(bailey.speak())

const velvet = new Animal_ES5_E('cat', 'bombay', 'black', '12 inches', '16 inches')
console.log(velvet.speak())

// Using ES6.................................
class Animal_ES6_E {
    constructor(type, breed, color, ht, len) {
        let _type = type
        let _breed = breed
        let _color = color
        let _height = ht
        let _length = len
        console.log(`The new ${_color} ${_breed} ${_type} that is ${_height} tall and ${_length} long has been created!`)
    }

    checkType = function() {                            // Private Method by default (unless I export it)
        if (this._type === 'dog') {
            return `dog`
        } else {
            return `cat`
        }
	}

    speak = function() {                                    // Privileged Public Method
        return `The ${this.checkType()} has made a noise!`
    }
}

const bigboy = new Animal_ES6_E('dog', 'german shepard', 'white and black', '39 inches', '52 inches')
console.log(bigboy.speak())

const snowflake = new Animal_ES6_E('cat', 'chartreux', 'white and tan', '17 inches', '24 inches')
console.log(snowflake.speak())


// STEP 9
// Using ES5.................................
const findWords_ES5 = function(para, searchWord) {
    let count = 0
    let strArray = para.split(' ')

    for (i in strArray ) {
        //console.log(`inside findWords_ES5:  current word = ${strArray[i]}`)
        if (strArray[i].trim().toLowerCase() === searchWord.toLowerCase()) {
            count++
        }
    }
    return count
}

console.log('step 9....')
let para = 'the young gray fox outran the brown old fox'
findWords_ES5.prototype = new String()
console.log(`ES5: The word \'fox\' was found ${findWords_ES5(para, 'fox')} times in the following paragraph: ${para}`)
alert(`ES5: The word \'fox\' was found ${findWords_ES5(para, 'fox')} times in the following paragraph: ${para}`)


// Using ES6.................................
class stringTools_ES6 extends String { 
    constructor(para, searchWord) { 
        super(para, searchWord)
    } 

    findWords_ES6(para, searchWord) {
        let count = 0
        let strArray = para.split(' ')
    
        for (i in strArray ) {
            //console.log(`inside findWords_ES6:  current word = ${strArray[i]}`)
            if (strArray[i].trim().toLowerCase() === searchWord.toLowerCase()) {
                count++
            }
        }
        return count
    }
} 

const myStringTools = new stringTools_ES6()
console.log(`ES6: The word \'fox\' was found ${myStringTools.findWords_ES6(para, 'fox')} times in the following paragraph: ${para}`)
alert(`ES6: The word \'fox\' was found ${myStringTools.findWords_ES6(para, 'fox')} times in the following paragraph: ${para}`)

