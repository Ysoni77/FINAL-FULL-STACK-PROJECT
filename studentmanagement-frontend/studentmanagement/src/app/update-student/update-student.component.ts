import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private s1: StudentService) { }

  ngOnInit(): void {
  }

  updatedata(updateform: { value: any; }) {
    return this.s1.updatedata1(updateform.value).subscribe();
  }
}
