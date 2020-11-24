class User {
  constructor(name, age) {
    this.firstName = name;
    this.age = age;
  }

  getName() {
    return this.firstName;
  }

  getGreeting() {
    return `Hello ${this.firstName} | Your Age - ${this.age}`;
  }
}

class Student extends User {
  constructor(firstName, age, level) {
    super(firstName, age);
    this.level = level;
  }

  greetingStudent() {
    return `Hello Student ${this.firstName} | Your level - ${this.level}`;
  }
}

const user = new User("Maniruzzaman", 26);
console.log(user.getName());
console.log(user.getGreeting());

const student = new Student("Polash Rana", 25, "Beginner");
console.log(student.getGreeting());
console.log(student.greetingStudent());

/** JAVA Practise */

// public class Main                                           // Class in Java
// {
//     String name;
//     int age;
//     public Main() {}                                        // Constructor in JAVA
//     public Main(String name, int age) {                     // Constructor in JAVA
//         this.name = name;
//         this.age = age;
//     }
// 	public void generateName(){                             // Function/Methods in JAVA
// 	    System.out.println("Welcome Mr. "+this.name);
// 	}
// 	public static void main(String[] args) {
//         Main mainObj = new Main("Maniruzzaman", 26);        // Object Initialization in JAVA
//         mainObj.generateName();                             // Access Class Methods in JAVA
// 	}
// }
