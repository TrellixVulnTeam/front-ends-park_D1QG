import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertInlineComponent } from 'src/app/features/alert-inline/alert-inline.component';
import { AlertModule } from 'src/app/features/alert/alert.module';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
  declarations: [LayoutComponent, AlertInlineComponent],
  imports: [ CommonModule, LayoutRoutingModule, AlertModule],
  providers: [],
})
export class LayoutModule {}
