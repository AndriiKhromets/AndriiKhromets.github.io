const countTotalSalary = function (employees){
    let num = Object.values(employees);
    let total = 0;
    for(salary of num){
        total += salary;
    }
    return total;
}

console.log(countTotalSalary({})); 

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); 

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); 