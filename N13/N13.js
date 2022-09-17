function HashStorageFunc(){
    let privatex={};
    this.addValue=function(key,value) {
        privatex[key]=value;
    }
    this.getValue=function(key) {
        return privatex[key];
    }
    this.deleteValue(key){
        if(key in privatex){
            delete privatex[key];
            return true;
          } else return false;
      
    }
    this.getKeys=function(){
        return Object.keys(privatex);
    }     

}
let drinkStorage=new HashStorageFunc;

function information(){
    let name=prompt("'Введите название напитка: ");
    let recept=prompt("Рецепт приготовления: ");
    let alcoholic= confirm('Если напиток алкогольный нажмите "ОК" в противном случае нажмите "ОТМЕНА"');
    let info={a:alcoholic, r:recept};
    drinkStorage.addValue(name,info);
}
