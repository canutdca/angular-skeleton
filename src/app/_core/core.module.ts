
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'
import { RouterModule } from '@angular/router'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AuthService } from './services/auth.service'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { LoggedGetter } from './stores/logged-store/logged.getters'
import { reducers, metaReducers } from './stores/app.store'

@NgModule({
	imports: [
		RouterModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	exports: [
		RouterModule,
		NavbarComponent
	],
	declarations: [ NavbarComponent ],
	providers: [
		AuthService,
		LoggedGetter
	]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {

  	// Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		super(parentModule)
  	}

}



