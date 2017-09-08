import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	SidenavComponent,
  	SidenavContainerComponent
  ],
  exports: [
  	SidenavComponent,
  	SidenavContainerComponent
  ]
})
export class SidenavModule { }
