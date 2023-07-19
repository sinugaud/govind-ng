import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./component/user/user.component";
import {AccessGuard} from "./component/accessguard/AccessGuard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./component/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'user',
    component: UserComponent, canActivate: [AccessGuard],
    loadChildren: () => import('./component/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: "set",
    loadChildren: () => import('./component/auth/auth.module').then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
