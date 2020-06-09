import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './_core/core.module'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
