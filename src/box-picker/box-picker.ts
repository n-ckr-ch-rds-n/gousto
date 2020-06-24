import {Box} from "./box";
import {Dimensions} from "./dimensions";

export class BoxPicker {
	sortedBoxes: Box[];

	constructor(private boxes: Box[]) {
		this.sortedBoxes = this.sortBoxes(this.boxes);
	}

	pickBox(volume: number): Box {
		return <Box>(
			this.sortedBoxes.find(
				(box) => this.calculateVolume(box.dimensions) >= volume
			)
		);
	}

	calculateVolume(dimensions: Dimensions): number {
		return dimensions.depthMm * dimensions.heightMm * dimensions.widthMm;
	}

	sortBoxes(boxes: Box[]): Box[] {
		return boxes.sort(
			(a, b) =>
				this.calculateVolume(a.dimensions) -
				this.calculateVolume(b.dimensions)
		);
	}
}
