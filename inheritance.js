class car{
    name = 'honda'
    model = 13
    price = 5000000
    constructor(color){
    this.color = color
    }
}
class child extends car{
    constructor(color,wheel){
        super()
        this.wheel = wheel
        this.color = color
        }
}
let obj = new child('red',4)
console.log(obj.name)
console.log(obj.color)
console.log(obj.wheel)
