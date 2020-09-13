import { PasswordComponent } from './home/password/password.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './home/extract/extract.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'extract',
    component: ExtractComponent
  },
  {
    path: 'forgot-password',
    component: PasswordComponent
  },
  {
    path: 'update-password/:isUpdate',
    component: PasswordComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
