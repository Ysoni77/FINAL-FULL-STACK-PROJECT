import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'services', component: ServicesComponent,
    children: [
      { path: 'students', component: StudentComponent },
      { path: 'add', component: AddStudentComponent },
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'student', component: StudentComponent },
  { path: 'add-student', component: AddStudentComponent },

  {
    path: 'update/:sid', component: UpdateStudentComponent,
    children: [
      { path: 'students', component: StudentComponent },
      { path: 'add', component: AddStudentComponent },
    ]
  },

  {
    path: 'delete/:sid', component: DeleteStudentComponent,
    children: [
      { path: 'students', component: StudentComponent },
      { path: 'add', component: AddStudentComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
