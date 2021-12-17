import each from 'jest-each';
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

	test.todo('edge case positions');
	test.todo('ui');
});

describe('move', () => {
	each([
		['N', { x: 1, y: 2 }],
		['S', { x: 1, y: 0 }],
		['E', { x: 2, y: 1 }],
		['W', { x: 0, y: 1 }]
	]).it('changes position when moving', (orientation, res) => {
		const sut = new Rover({ x: 1, y: 1 }, orientation);
		sut.move();
		expect(sut.position).toEqual(res);
	});
	// it("when")

	each([
		['N', { x: 0, y: 9 }, { x: 0, y: 0 }],
		['S', { x: 0, y: 0 }, { x: 0, y: 9 }],
		['E', { x: 9, y: 0 }, { x: 0, y: 0 }],
		['W', { x: 0, y: 0 }, { x: 9, y: 0 }]
	]).it('edge cases handled when moving', (orientation, initialPosition, res) => {
		const sut = new Rover(initialPosition, orientation);
		sut.move();
		expect(sut.position).toEqual(res);
	});
});
