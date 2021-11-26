function Person(FirstName,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var person1 = new Person("Shivam","Jha","Amsterdam");
var person2 = new Person("Rishav","Jain","New York");
var person3 = new Person("Kush","Kumar","Patna");

console.log(person1.FirstName+" "+person1.LastName+"-"+person1.OfficeAddress);
console.log(person2.FirstName+" "+person2.LastName+"-"+person2.OfficeAddress);
console.log(person3.FirstName+" "+person3.LastName+"-"+person3.OfficeAddress);