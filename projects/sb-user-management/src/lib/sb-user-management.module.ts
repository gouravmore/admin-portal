import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SbUserManagementComponent } from './sb-user-management.component';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from './user-list/user-list.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [SbUserManagementComponent, UserListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    InputTextModule
  ],
  exports: [SbUserManagementComponent]
})
export class SbUserManagementModule { }
