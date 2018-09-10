import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class MyCustomMaterialModule { }
