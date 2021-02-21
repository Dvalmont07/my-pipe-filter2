import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckIfObjectContaisItem } from 'src/app/generic-methods/checkIfObjectContaisItem';
import { StudantsService } from 'src/app/services/studants.service';
// import { CheckIfObjectContaisItem } from '../generic-methods/checkIfObjectContaisItem';
// import { StudantsService } from '../services/studants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  studentsFinalList: any[] = [];
  searchBox: string = "";

  title = "My Filter - Pipe";

  ngOnInit() {

    StudantsService.getAllStudants().forEach(students => {
      this.concatStudents(students);
    });
  }

  ngOnDestroy(): void { }

  private concatStudents(students: any) {
    for (let i = 0; i < students.length; i++) {
      if (!CheckIfObjectContaisItem.itemExistsInObject(this.studentsFinalList, students[i])) {
        this.studentsFinalList = this.studentsFinalList.concat(students[i]);
      }
    }
  }

  // private clearDuplicateItems(students: any, i: number) {

  // }
}


