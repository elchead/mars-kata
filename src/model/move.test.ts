import { Rover, Board, Input } from './move';

describe('Board', () => {
	let sut: Rover;
	let board: Board;
	beforeEach(() => {
		sut = new Rover();
		board = new Board(sut);
	});
	it('when m pressed, then move', () => {
		const input = 'm';
		board.evaluate(input);
		expect(sut.counter).toBe(1);
	});
	it('when l pressed, then rotate to left', () => {
		const input = 'l';
		board.evaluate(input);
		expect(sut.direction).toBe('l');
	});
	it('when multiple input (lm), then rotate and move', () => {
		const input: Input[] = ['l', 'm'];
		board.evaluate(input);
		expect(sut.direction).toBe('l');
	});
	// it('when Lm pressed, position is ');

	test.todo('when direction input,');
	test.todo('');
});
