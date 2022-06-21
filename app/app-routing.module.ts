import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: "About",
    component: AboutComponent
  },
  {
    path: "Projects",
    component: ProjectsComponent
  },
  {
    path: "Contact",
    component: ContactComponent
  },
  {
    path: "CV",
    component: CvComponent
  },
  {
    path: "**",
    redirectTo: "About"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
