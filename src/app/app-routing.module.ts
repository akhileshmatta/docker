import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { TrainingComponent } from './training/training.component';
//import { EquipmentComponent } from './equipment/equipment.component';
//import { ManagementComponent } from './management/management.component';
import { DisplayresultsComponent } from './displayresults/displayresults.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'training', component: TrainingComponent },
  //{ path: 'equipment', component: EquipmentComponent },
  //{ path: 'management', component: ManagementComponent },
  { path: 'admin', component: AdminComponent },
  {path: 'displayresults', component: DisplayresultsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
