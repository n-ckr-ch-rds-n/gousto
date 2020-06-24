import {Box} from "./box";
import {Dimensions} from "./dimensions";

export class BoxPicker {
	private availableBoxes: Box[] = [
		{
			id: "PK-MED-01",
			name: "Medium",
			dimensions: {
				widthMm: 30,
				heightMm: 50,
				depthMm: 60,
			},
			co2FootprintKg: 200,
		},
		{
			id: "PK-SML-02",
			name: "Small",
			dimensions: {
				widthMm: 20,
				heightMm: 80,
				depthMm: 50,
			},
			co2FootprintKg: 100,
		},
		{
			id: "PK-LRG-03",
			name: "Large",
			dimensions: {
				widthMm: 20,
				heightMm: 100,
				depthMm: 50,
			},
			co2FootprintKg: 300,
		},
	];

	sortedBoxes: Box[];

	constructor() {
		this.sortedBoxes = this.sortBoxes(this.availableBoxes);
	}

	pickBox(volume: number): Box {
		return this.sortedBoxes.find(
			(box) => this.calculateVolume(box.dimensions) > volume
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
