import { NgModule } from '@angular/core';
import { SbUserManagementComponent } from './sb-user-management.component';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from './user-list/user-list.component';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [SbUserManagementComponent, UserListComponent],
  imports: [
    ButtonModule,
    TabViewModule
  ],
  exports: [SbUserManagementComponent]
})
export class SbUserManagementModule { }
