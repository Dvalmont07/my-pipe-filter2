import { Component, OnInit } from '@angular/core';
import { CheckIfObjectContaisItem } from '../generic-methods/checkIfObjectContaisItem';
import { StudantsService } from '../services/studants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  studentsFinalList: any[] = [];
  searchBox: string = "";

  title = "My Filter - Pipe";

  ngOnInit() {

    StudantsService.getAllStudants().forEach(students => {
      this.concatStudents(students);
    });
  }

  private concatStudents(students: any) {
    for (let i = 0; i < students.length; i++) {
      this.clearDuplicateItems(students, i);
    }
  }

  private clearDuplicateItems(students: any, i: number) {
    if (!CheckIfObjectContaisItem.itemExistsInObject(this.studentsFinalList, students[i])) {
      this.studentsFinalList = this.studentsFinalList.concat(students[i]);
    }
  }
}


