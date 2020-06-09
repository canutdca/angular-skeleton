import { ClientsService } from "./clients.service"

describe('clients service', () => {
	let service: ClientsService

	beforeEach(() => {
		service = new ClientsService()
	})

	it('should 1 client', () => {
		service.add('client')

		expect(service.get().length).toBe(1)
	})


	it('should empty clients', () => {
		service.add('client')
		service.clear()

		expect(service.get().length).toBe(0)
	})
})