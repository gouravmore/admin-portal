import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SbUserMgmtComponent } from './sb-user-mgmt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { MatTableModule } from '@angular/material/table'  ;
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActiveInactiveUserDialogComponent } from './active-inactive-user-dialog/active-inactive-user-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [SbUserMgmtComponent, ListUserComponent, ActiveInactiveUserDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [SbUserMgmtComponent]
})
export class SbUserMgmtModule { }
