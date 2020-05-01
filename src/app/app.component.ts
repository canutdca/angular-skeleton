import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import LoggedState from './_core/stores/logged-store/logged.state'
import * as actions from './_core/stores/logged-store/logged.actions'
import { LoggedGetter } from './_core/stores/logged-store/logged.getters'
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
	title = 'angular-skeleton'

	private sub: Subscription

	constructor(
		private store: Store<LoggedState>,
		private loggedGetter: LoggedGetter
	) {}

	ngOnInit() {
		this.store.dispatch(new actions.GetUser())
		this.sub = this.loggedGetter.user$.subscribe(user => console.log(user))
	}
}
