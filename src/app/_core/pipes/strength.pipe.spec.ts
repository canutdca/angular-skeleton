import { StrengthPipe } from "./strength.pipe"

describe('strength test', () => {
	it('should display weak if strength is 9', () => {
		let pipe = new StrengthPipe()

		expect(pipe.transform(9)).toBe("9 (weak)")
	})

	it('should display weak if strength is 10', () => {
		let pipe = new StrengthPipe()

		expect(pipe.transform(10)).toBe("10 (strong)")
	})


	it('should display weak if strength is 19', () => {
		let pipe = new StrengthPipe()

		expect(pipe.transform(19)).toBe("19 (strong)")
	})

	it('should display weak if strength is 20', () => {
		let pipe = new StrengthPipe()

		expect(pipe.transform(20)).toBe("20 (unbelievable)")
	})
})