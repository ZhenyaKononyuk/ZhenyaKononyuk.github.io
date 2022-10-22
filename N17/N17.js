"use strict"
var a=prompt('Введите любую строку:');
function Vowels1(str){
     let count=0;
     const vowels=['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
     let a=str.toLowerCase().split('');
     a.forEach(element => {
        if(vowels.includes(element)){
            count+=1;
        }
     });
     return count;    
};
function Vowels2(str){
    const vowels=['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
    let c=str.toLowerCase().split('').filter(element => vowels.includes(element)); 
    return c.length;
};   
alert("метод forEach= " + Vowels1(a)+'\n'+"метод filter= "+Vowels2(a));