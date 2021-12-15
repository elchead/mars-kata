interface Position {
	x: number;
	y: number;
}
type Direction = 'l' | 'r';
type Orientation = 'N' | 'S' | 'E' | 'W';
export type Input = 'm' | Direction;

export class Rover {
	position: Position;
	counter = 0;
	private _orientation: Orientation;

	constructor(position: Position = { x: 0, y: 0 }, orientation: Orientation = 'N') {
		this.position = position;
		this._orientation = orientation;
	}

	move(): void {
		this.counter++;
	}

	rotate(direction: Direction): void {
		const orientations: Orientation[] = ['N', 'E', 'S', 'W'];
		const currentIdx = orientations.indexOf(this._orientation);
		let newIdx;
		if (direction === 'r') {
			newIdx = (currentIdx + 1 + orientations.length) % orientations.length;
		} else if (direction === 'l') {
			newIdx = (currentIdx - 1 + orientations.length) % orientations.length;
		}
		this._orientation = orientations[newIdx];
	}

	get orientation(): Orientation {
		return this._orientation;
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
