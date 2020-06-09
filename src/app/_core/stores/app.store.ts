import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store'
import * as loggedReducer from './logged-store/logged.reducer'
import LoggedState from './logged-store/logged.state'
import { environment } from 'src/environments/environment'

class AppState {
	loggedState: LoggedState
}

export const reducers: ActionReducerMap<AppState> = {
	loggedState: loggedReducer.reducer
}

function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
	return function(state: AppState, action: any): AppState {
		return reducer(state, action)
	}
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? [logger]
	: []