import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClientsComponent } from './clients.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [ClientsComponent],
  imports: [
	CommonModule,
	RouterModule.forChild([
		{ path: '', component: ClientsComponent }
	]),
  ]
})
export class ClientsModule { }
