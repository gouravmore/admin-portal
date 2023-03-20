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



@NgModule({
  declarations: [SbUserMgmtComponent],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  exports: [SbUserMgmtComponent]
})
export class SbUserMgmtModule { }
