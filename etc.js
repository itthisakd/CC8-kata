let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sum = (obj) => Object.values(obj).reduce((acc, curr) => acc + curr, 0)
console.log(sum(salaries))
