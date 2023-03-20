import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';



@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    GridModule, PagerModule
  ],
  exports: [
    UserManagementComponent
  ]
})
export class UserManagementModule { }
