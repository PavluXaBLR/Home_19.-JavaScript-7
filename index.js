/*1) let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"]; 
Вам необходимо изменить девиз, чтобы он стал "правильным" (На свое усмотрение)*/

let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"];

myLifeMotto.splice(1, 1, "еще" );
myLifeMotto.splice(3, 0, "очень" );
myLifeMotto.splice(7, 0, ",", "но", "делаю", "для", "его", "понимания", "и", "изучения", "все", ",", "что", "возможно", "." );

for (let str of myLifeMotto) {
    console.log(str);
}
console.log (myLifeMotto);



/*2) let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"] 
Перебрать массив. Имена, содержащие подстроку "а", добавить в новый массив "teamA"; подстроку "H" в новый массив "teamH"
регистр имеет значение*/

let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [];
let teamH = [];

harryPotterTeam.forEach((item) => {
    if (item.includes(`a`)) {
        teamA.push(item);
    }
    if (item.includes(`H`)) {
        teamH.push(item);
    }
});

/*for (let str of harryPotterTeam) {
    console.log(str);
    if (str.includes(`a`)) {
        teamA.push(str);
    }
    if (str.includes(`H`)) {
        teamH.push(str);
    }
}*/
console.log(teamA);
console.log(teamH);


/*3) let arr = [6, 3, "ten", 12, true, "4"]Получите и выведите в консоль сумму и произведение всех числовых
 значений данного массива*/


let arr = [6, 3, "ten", 12, true, "4"];

let sum = 0;
let multiplication = 1;

/*arr.forEach ((item) => {
    if (typeof item === `number`) {
    sum += item;
    }

})
arr.forEach ((item) => {
    if (typeof item === `number`) {
        multiplication *= item;
    }

})
*/
for (let num of arr) {
    if (typeof num === `number`) {
        sum += num;
    }
    if (typeof num === `number`) {
        multiplication *= num;
    }
}

console.log(sum);
console.log(multiplication);


/*4) let numArr = [1, 3, 5, 7, 9]
Получить новый массив с квадратами этих чисел*/

let numArr = [1, 3, 5, 7, 9];
let numArrNew = [];
numArr.forEach((item) => {
    numArrNew.push(item ** 2)
});

console.log(numArrNew);



/*5) [1, 2, 3, 4, 5] и ['Text', 'Audio', 'Video']. Объедините два массива в один*/

let num = [1, 2, 3, 4, 5];

let text = ['Text', 'Audio', 'Video'];

let numText = num.concat(text);

console.log(numText) ;

