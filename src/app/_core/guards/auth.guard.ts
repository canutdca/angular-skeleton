import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { LoggedGetter } from './../stores/logged-store/logged.getters'

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private loggedGetter: LoggedGetter) { }

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise((resolve) => {
			const asd$ = this.loggedGetter.user$
			console.log(asd$)
			if (asd$) resolve(true)
		})

		// TODO: unsubscribe
	}
}
