"use strict"
var a=prompt('Введите любую строку:');
function Vowels(str){
     let count=0;
     const vowels=['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
     for(let char of str.toLowerCase()){
        if(vowels.includes(char)){ 
            count+=1;
        }
     }
     return count;    
}
console.log(Vowels(a))