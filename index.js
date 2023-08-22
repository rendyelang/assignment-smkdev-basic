class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  calculateBMI() {
    const convertHeighToM = this.height / 100;
    return this.weight / (convertHeighToM * convertHeighToM);
  }
}

const udin = new Person("Udin", 78, 169);
const nanang = new Person("Nanang", 92, 195);

const resultUdin = udin.calculateBMI();
const resultNanang = nanang.calculateBMI();

const isUdinHigherThanNanang = resultUdin > resultNanang;

console.log(`BMI ${udin.name} (${resultUdin.toFixed(2)}) ${isUdinHigherThanNanang ? "lebih tinggi dari" : "tidak lebih tinggi dari"} ${nanang.name} (${resultNanang.toFixed(2)})`);

// Data 2
const udin2 = new Person("Udin2", 95, 188);
const nanang2 = new Person("Nanang2", 85, 176);

const resultUdin2 = udin2.calculateBMI();
const resultNanang2 = nanang2.calculateBMI();

const isUdinHigherThanNanang2 = resultUdin2 > resultNanang2;

console.log(`BMI ${udin2.name} (${resultUdin2.toFixed(2)}) ${isUdinHigherThanNanang2 ? "lebih tinggi dari" : "tidak lebih tinggi dari"} ${nanang2.name} (${resultNanang2.toFixed(2)})`);
