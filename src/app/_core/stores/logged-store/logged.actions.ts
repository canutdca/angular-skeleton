import { Action } from '@ngrx/store'
import * as actions from './logged.constants'

export class GetUser implements Action {
	readonly type: string = actions.GET_CURRENT_USER
}

export type All = GetUser
