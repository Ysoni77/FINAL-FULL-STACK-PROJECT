import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  constructor(private s1: StudentService) { }

  ngOnInit(): void {
  }

  deletedata(deleteform: { value: any; }) {
    return this.s1.deletedata1(deleteform.value).subscribe();
  }

}
