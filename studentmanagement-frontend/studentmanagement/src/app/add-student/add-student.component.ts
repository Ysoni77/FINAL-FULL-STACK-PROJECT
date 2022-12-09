import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private s1: StudentService) { }

  ngOnInit(): void {
  }

  adddata(addform: { value: any; }) {
    return this.s1.addata1(addform.value).subscribe();
  }
}
