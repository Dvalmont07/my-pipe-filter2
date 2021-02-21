export class CheckIfObjectContaisItem {
  
    
    public static itemExistsInObject(array: any[], item: any):boolean{

        if(JSON.stringify(array).includes(JSON.stringify(item))){
          return true;
        }
        return false;
      }
  }