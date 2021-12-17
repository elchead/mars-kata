interface Position {
	x: number;
	y: number;
}
type Direction = 'l' | 'r';
export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Input = 'm' | Direction;

export class Rover {
	position: Position;
	counter = 0;
	private _orientation: Orientation;

	constructor(position: Position = { x: 0, y: 0 }, orientation: Orientation = 'N') {
		this.position = position;
		this._orientation = orientation;
	}

	move(): Position {
		switch (this.orientation) {
			case 'N':
				this.position.y = (this.position.y + 1 + 10) % 10;
				break;
			case 'S':
				this.position.y = (this.position.y - 1 + 10) % 10;
				break;
			case 'E':
				this.position.x = (this.position.x + 1 + 10) % 10;
				break;
			case 'W':
				this.position.x = (this.position.x - 1 + 10) % 10;
				break;
		}
		this.counter++;
		return this.position;
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

	evaluate(input: Input | Input[]): Rover {
		if (!Array.isArray(input)) {
			this.evaluateSingle(input);
		} else {
			for (const i of input) {
				this.evaluateSingle(i);
			}
		}
		return this.rover;
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
