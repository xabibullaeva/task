let num = +prompt("Enter num: ")
while(isNaN(num) || num == 0){
    a = +prompt("NaN Enter another number: ")
}
let box = ""
for(let i = 1; i <= num; i++){
    if (i == 1){
        box = box + ` ${i} qo'y `
    } else {
        box = box + ` ${i} qo'ylar `
   }
}
console.log(box);


nam = prompt("Ism: ")
year = +prompt("Hozir qaysi yil: ")
born = +prompt("Tug'ilgan yil: ")

function summ(year, born){
    return year - born
}
alert(`${nam} your age is ${summ(year, born)}.`)
console.log(`${nam} your age is ${summ(year, born)}.`)


