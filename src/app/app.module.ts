import { FetchDataService } from './services/fetchData/fetch-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { TrainingComponent } from './training/training.component';
//import { EquipmentComponent } from './equipment/equipment.component';
//import { ManagementComponent } from './management/management.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayresultsComponent } from './displayresults/displayresults.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ConsultingComponent,
    TrainingComponent,
   // EquipmentComponent,
    //ManagementComponent,
    AdminComponent,
	DisplayresultsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
