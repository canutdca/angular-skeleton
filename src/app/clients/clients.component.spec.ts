import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ClientsComponent } from './clients.component'
import Client from '../_core/models/client.model'

describe('ClientsComponent', () => {
	let component: ClientsComponent
	let clients: Client[]
	let mockService: any

	beforeEach(() => {
		clients = [ new Client(1, '1'), new Client(2, '2') ]
		mockService = jasmine.createSpyObj(['get', 'add', 'clear'])
		component = new ClientsComponent(mockService)
	})

	// describe('add', () => {
	// 	it('should add "new client" client into de last cell', () => {
	// 		mockService.add.and.callThrough()
	// 		mockService.get.and.callThrough()

	// 		expect(component.clients[component.clients.length - 1].name).toBe('new client')
	// 	})
	// })
	// let fixture: ComponentFixture<ClientsComponent>

	// beforeEach(async(() => {
	//   TestBed.configureTestingModule({
	//     declarations: [ ClientsComponent ]
	//   })
	//   .compileComponents()
	// }))

	// beforeEach(() => {
	//   fixture = TestBed.createComponent(ClientsComponent)
	//   component = fixture.componentInstance
	//   fixture.detectChanges()
	// })

	// it('should create', () => {
	//   expect(component).toBeTruthy()
	// })
})
