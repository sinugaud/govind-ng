import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'verify/:id',
    loadChildren: () => import('./email-verify/email-verify.module').then(mod => mod.EmailVerifyModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forget-password/forget-password.module').then(mod => mod.ForgetPasswordModule)
  },
  {
    path: 'newPassword/:id',
    loadChildren: () => import('./update-password/update-password.module').then(mod => mod.UpdatePasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
