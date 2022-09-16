"use strict"
    
    var family=prompt('Введите фамилию:');
     while(!family){
         family=prompt('Введите фамилию:');}

    var name=prompt('Введите имя:');
     while(!name){name=prompt('Введите имя:');}

     var patronymic=prompt('Введите отчество:');
      while(!patronymic){patronymic=prompt('Введите отчество:');}

     var ageStr=prompt('Введите возраст:');
     
     var age=parseInt(ageStr);
     var floor=confirm('Если вы мужского пола, нажмите "ОК", если женского, нажмите "ОТМЕНА"');
     if(floor) var floor1='мужской';
      else var floor1='женский';
     if( (age>=60) && (floor))
            var pension='да';
     else if((age>=55) && (!floor))
            var pension='да';
     else
            var pension='нет';


      alert( 'ваше ФИО:' +' '+family+' '+name+' '+patronymic+'\n'+'ваш возраст в годах:'+' '+age+'\n'+'ваш возраст в днях:'+' '+age*365+'\n'+'через 5 лет вам будет:'+' '+(age+5)+'\n'+'ваш пол:' +' '+floor1+'\n'+'вы на пенсии:'+' '+pension);