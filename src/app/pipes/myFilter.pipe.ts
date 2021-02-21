import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "myCostumfilter",
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], fields: any[], searchText: string): any {
    if (!items) {
      return items;
    }
    if (!fields) {
      return items;
    }
    if (searchText == "") {
      return items;
    }
    let alunosAux = [];
    let itemsListaFinal: any[] = [];

    for (let i = 0; i < fields.length; i++) {
      alunosAux.push(
        items.filter((item) => {
          if (item && item[fields[i]] !== undefined) {
            return item[fields[i]].toLowerCase().includes(searchText);
          } else {
            return false;
          }
        })
      );
    }

    alunosAux.forEach(x => {
      if (x.length > 0) {

        itemsListaFinal = itemsListaFinal.concat(x);
      }

    });

    // console.log("itemsListaFinal", itemsListaFinal);
    // console.log("items", items);

    return itemsListaFinal;
  }
}
