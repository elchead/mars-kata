interface Position {
	x: number;
	y: number;
}
type Input = 'm' | 'L' | 'R';
export class Rover {
	// position: Position
	counter = 0;
	move(): void {
		this.counter++;
	}
}

export class Board {
	rover: Rover;

	constructor(rover: Rover) {
		this.rover = rover;
	}

	evaluate(input: Input): void {
		if (input === 'm') {
			this.rover.move();
		}
	}
}
