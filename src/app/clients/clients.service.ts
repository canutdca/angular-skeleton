import { Injectable, ɵConsole } from '@angular/core'
import Client from '../_core/models/client.model'

@Injectable()
export class ClientsService {
	private clients: Client[] = [];

	add(clientName: string) {
		const lastClient = this.clients[this.clients.length-1]
		const lastId = !lastClient ? -1 : lastClient.id
		this.clients.push(new Client(lastId + 1, clientName))
	}

	clear() {
		this.clients = [];
	}

	get(): Client[] {
		return this.clients
	}

}
