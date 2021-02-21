export class CheckIfObjectContaisItem {


  public static itemExistsInObject(array: any[], item: any): boolean {

    if (JSON.stringify(array).toLowerCase().includes(JSON.stringify(item).toLowerCase())) {
      return true;
    }
    return false;
  }
}