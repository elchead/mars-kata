import { Rover, Board } from './move';

describe('when m pressed, then move', () => {
	it('sh', () => {
		const input = 'm';
		const sut = new Rover();
		// const sut = jest.fn();
		const board = new Board(sut);
		board.evaluate(input);
		expect(sut.counter).toBe(1);
	});
});
