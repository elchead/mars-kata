interface Position {
	x: number;
	y: number;
}
type Direction = 'l' | 'r';

export type Input = 'm' | Direction;

export class Rover {
	// position: Position
	counter = 0;
	private _direction: Direction;

	move(): void {
		this.counter++;
	}

	rotate(direction: Direction): void {
		this._direction = direction;
	}

	get direction(): Direction {
		return this._direction;
	}
}

export class Board {
	rover: Rover;

	constructor(rover: Rover) {
		this.rover = rover;
	}

	evaluate(input: Input | Input[]): void {
		if (!Array.isArray(input)) {
			this.evaluateSingle(input);
		} else {
			for (const i of input) {
				this.evaluateSingle(i);
			}
		}
	}
	evaluateSingle(i: Input): void {
		switch (i) {
			case 'l':
			case 'r':
				this.rover.rotate(i);
				break;
			case 'm':
				this.rover.move();
		}
	}
}
