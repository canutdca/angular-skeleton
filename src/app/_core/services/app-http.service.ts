import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class AppHttpService {

	private readonly root: string = 'api'

	constructor(private http: HttpClient) { }

	private readonly options: {} = { withCredentials: true }

	get<T>(route: string, query = null): Observable<T> {
		const queryString = query ? this._toQueryString(query) : ''
		return this.http.get<T>(route + queryString, this.options)
	}

	put(route, message = null): Observable<any> {
		return this.http.put(route, message, this.options)
	}

	post(route: string, message): Observable<any> {
		return this.http.post(route, message, this.options)
	}

	delete(route, query = null): Observable<any> {
		const queryString = query ? this._toQueryString(query) : ''
		return this.http.delete(route + queryString, this.options)
	}

	private _toQueryString(object = {}, isPropId = false) {
		let query = '?'
		for (const prop in object) {
			if (!object.hasOwnProperty(prop)) continue
			query += (isPropId ? 'id' : prop) + '=' + object[prop] + '&'
		}
		return query
	}
}
