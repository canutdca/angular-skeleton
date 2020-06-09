import { Injectable } from '@angular/core'
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store'
import LoggedState from './logged.state'

const getEntityState = createFeatureSelector<LoggedState>('loggedState')

const getUser = createSelector(
  getEntityState,
  (state: LoggedState) => state.user
)

@Injectable()
export class LoggedGetter {
	constructor(private store: Store<LoggedState>) {}

	user$ = this.store.pipe(select(getUser))
}