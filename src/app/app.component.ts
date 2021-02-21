import { Component, OnInit } from '@angular/core';
import { CheckIfObjectContaisItem } from './generic-methods/checkIfObjectContaisItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  studentsGroup1 = [{ Name: 'Danilo', Age: '37' }, { Name: 'Danilo', Age: '37' }, { Name: 'Juru', Age: '55', Street: 'Vibe Street' }, { Name: 'Baron', Age: '55' }];
  studentsGroup2 = [{ Name: 'MOrna', Age: '65' }, { Name: 'Norma', Age: '57' }, { Name: 'Juruna', Age: '65' }];
  studentsGroup3 = [{ Name: 'Peter', Age: '18' }, { Name: 'MOrna', Age: '65' }];

  allStudents: any[] = [];
  studentsFinalList: any[] = [];
  searchBox: string = "";

  title = "My Filter Pipe";

  ngOnInit() {
  
    this.setUpStudantsList();

    this.allStudents.forEach(students => {

      this.concatStudents(students);
    });
  }

  private setUpStudantsList() {
    this.allStudents.push(this.studentsGroup1);
    this.allStudents.push(this.studentsGroup2);
    this.allStudents.push(this.studentsGroup3);
  }

  private concatStudents(students: any) {
    for (let i = 0; i < students.length; i++) {

      this.clearDuplicateItems(students, i);
    }
  }

  private clearDuplicateItems(students: any, i: number) {
    if (! CheckIfObjectContaisItem.itemExistsInObject(this.studentsFinalList, students[i])) {
      this.studentsFinalList = this.studentsFinalList.concat(students[i]);
    }
  } 
}


