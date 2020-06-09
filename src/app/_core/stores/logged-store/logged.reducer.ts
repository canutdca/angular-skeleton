import { All } from './logged.actions'
import * as actions from './logged.constants'
import LoggedState from './logged.state'
import { User } from '../../models/user.model'
import { MetaReducer } from '@ngrx/store'
import { environment } from 'src/environments/environment'

export const initialState: LoggedState = {
	user: null
}

export function reducer(state = initialState, action: All): LoggedState {
	switch (action.type) {
		case actions.GET_CURRENT_USER: {
			return {
				user: new User('nombre', '', [])
			}
		}
	}
}

