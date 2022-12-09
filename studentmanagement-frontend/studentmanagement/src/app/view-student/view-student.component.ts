import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class StudentComponent implements OnInit {
  data: any;
  constructor(private s1: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    let response = this.s1.viewrecord();
    response.subscribe((data1) => this.data = data1)
  }

  updateStudent(id: number) {

    this.router.navigate(['update', id]);
  }

  deleteStudent(id: number) {
    this.router.navigate(['delete', id]);
  }
}
