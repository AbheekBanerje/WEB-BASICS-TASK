class Student {
  name: string;
  rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
  }
}

const s1 = new Student("Abheek", 101);
s1.display();