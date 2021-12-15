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
	it('when l pressed, then rotate from North to West', () => {
		const input = 'l';
		board.evaluate(input);
		expect(sut.orientation).toBe('W');
	});
	it('when r pressed, then rotate from West to North', () => {
		sut = new Rover({ x: 0, y: 0 }, 'W');
		board = new Board(sut);
		board.evaluate('r');
		expect(sut.orientation).toBe('N');
	});

	it('when multiple input (lm), then rotate and move', () => {
		const input: Input[] = ['l', 'm'];
		board.evaluate(input);
		expect(sut.orientation).toBe('W');
		expect(sut.counter).toBe(1);
	});

	test.todo('positions');
	test.todo('edge case positions');
	test.todo('ui');
});
