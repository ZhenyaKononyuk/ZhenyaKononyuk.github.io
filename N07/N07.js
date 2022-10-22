"use strict"
var a=prompt('Введите любую строку:');
function Vowels(str){
     let count=0;
     const vowels=['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
     for(let char of str.toLowerCase()){ // перебирает поочередно все элементы массива
        if(vowels.includes(char)){ // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false .
            count+=1;
        }
     }
     return count;    
}
console.log(Vowels(a))