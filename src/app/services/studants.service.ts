export class StudantsService {

    static studentsGroup1 = [{ Name: 'Danilo Matos', Age: '37' }, { Name: 'Danilo matos', Age: '37' }, { Name: 'Juru', Age: '55', Street: 'Vibe Street' }, { Name: 'Baron', Age: '55' }];
    static studentsGroup2 = [{ Name: 'MOrna', Age: '65' }, { Name: 'Norma', Age: '57' }, { Name: 'Juruna', Age: '65' }];
    static studentsGroup3 = [{ Name: 'Peter', Age: '18' }, { Name: 'MOrna', Age: '65' }];

    static allStudents: any[] = [];

    public static getAllStudants(): any[] {
        this.allStudents.push(this.studentsGroup1);
        this.allStudents.push(this.studentsGroup2);
        this.allStudents.push(this.studentsGroup3);
        return this.allStudents;
    }    

}