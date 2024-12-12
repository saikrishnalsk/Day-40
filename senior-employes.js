/**
 * Creating an  array of Names  of senior Employees
 */

const employees = [
    {
        name:"Sai",
        numOfYears:5
    },

    {
        name:"Krishna",
        numOfYears:3
    },
    {
        name:"Ramesh",
        numOfYears:7
    },
    {
        name:"Gopi",
        numOfYears:2
    },
    {
        name:"Nagarjuna",
        numOfYears:4
    }
]

const result = employees.filter(employees => employees.numOfYears>3);
console.log(result);
