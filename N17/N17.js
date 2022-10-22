"use strict"
var a=prompt('Введите любую строку:');
function Vowels(str){
     let count=0;
     const vowels=['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
     let a=str.toLowerCase().split('');
     a.forEach(element => {
        if(vowels.includes(element)){
            count+=1;
        }
     });
     return count;    
}
console.log(Vowels(a))