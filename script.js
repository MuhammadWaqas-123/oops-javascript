class student{
   constructor(){
      console.log('constructor function')
   }
   hello(){
    console.log('prototype function')
 }
 static func(){
    console.log('static function')
 }
}
const obj = new student()
obj.hello()
student.func()

