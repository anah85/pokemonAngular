import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    TopbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
