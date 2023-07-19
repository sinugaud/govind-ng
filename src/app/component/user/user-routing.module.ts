import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'changePassword',
    loadChildren: () => import ('./change-password/change-password.module').then(mod => mod.ChangePasswordModule)
  },
  {
    path: 'list',
    loadChildren: () => import ('./list/list.module').then(mod => mod.ListModule)
  },
  {
    path: 'detail',
    loadChildren: () => import ('./detail/detail.module').then(mod => mod.DetailModule)
  },
  {
    path: 'leave',
    loadChildren: () => import ('./employee-leave/employee-leave.module').then(mod => mod.EmployeeLeaveModule)
  },
  {
    path: 'leave/:id',
    loadChildren: () => import ('./employee-leave-add/employee-leave-add.module').then(mod => mod.EmployeeLeaveAddModule)
  },
  {
    path: 'register',
    loadChildren: () => import ('./registration/registration.module').then(mod => mod.RegistrationModuleModule)
  },
  {
    path: 'userFromList/:id',
    loadChildren: () => import ('./user-from-list/user-from-list.module').then(mod => mod.UserFromListModule)
  },
  {
    path: 'document',
    loadChildren: () => import ('./document/document.module').then(mod => mod.DocumentModule)
  },
  {
    path: 'addDocument',
    loadChildren: () => import ('./document-add/document-add.module').then(mod=>mod.DocumentAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
