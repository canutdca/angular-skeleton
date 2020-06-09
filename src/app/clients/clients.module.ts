import { NgModule } from '@angular/core'
import { ClientsComponent } from './clients.component'
import { RouterModule } from '@angular/router'
import { ClientsService } from './clients.service'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
  declarations: [ClientsComponent],
  imports: [
	SharedModule,
	RouterModule.forChild([
		{ path: '', component: ClientsComponent }
	]),
  ],
  providers: [
	  ClientsService
  ]
})
export class ClientsModule { }
