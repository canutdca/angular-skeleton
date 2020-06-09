import { Component, OnInit } from '@angular/core'
import { ClientsService } from './clients.service'
import Client from '../_core/models/client.model'

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
	styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

	clients: Client[]
	newClientName: string

	constructor(private service: ClientsService) { }

	ngOnInit(): void {
	}

	private sync(): void {
		this.clients = this.service.get()
	}

	add(): void {
		this.service.add(this.newClientName)
		this.sync()
	}

	clear(): void {
		this.service.clear()
		this.sync()
	}
}
