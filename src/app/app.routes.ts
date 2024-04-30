import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main.component';
const routes: Routes = [
  {
    path: '', component: AppMainComponent,
    children:[
      {
        path:'', loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
