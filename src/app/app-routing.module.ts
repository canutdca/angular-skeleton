import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CLIENTS_SLUG, NOTFOUND_SLUG } from './_core/constants'


const routes: Routes = [
	{ path: CLIENTS_SLUG,	loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
	{ path: '',				redirectTo: CLIENTS_SLUG,	pathMatch: 'full' },
	{ path: NOTFOUND_SLUG,	redirectTo: CLIENTS_SLUG,	pathMatch: 'full' },
	{ path: '**',			redirectTo: CLIENTS_SLUG,	pathMatch: 'full' },

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

