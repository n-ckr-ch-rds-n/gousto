import {BoxPicker} from "./box-picker";
import {expect} from "chai";
import {Dimensions} from "./dimensions";
import {Box} from "./box";
import boxes from "../data/boxes.json";
import {BoxSize} from "./box-size";

describe("Box picker", () => {
	let boxPicker: BoxPicker;
	let mockDimensions: Dimensions;
	let mockBoxes: Box[];

	beforeEach("Instantiate box picker", () => {
		boxPicker = new BoxPicker(boxes as Box[]);
	});

	it("Picks a box based on volume", () => {
		const smallVolume = 50;
		const mediumVolume = 90000;
		const largeVolume = 100000;
		const boxSizeByVolume: Record<number, BoxSize> = {
			[smallVolume]: BoxSize.Small,
			[mediumVolume]: BoxSize.Medium,
			[largeVolume]: BoxSize.Large,
		};
		for (const vol of Object.keys(boxSizeByVolume)) {
			const box = boxPicker.pickBox(parseInt(vol));
			expect(box.name).to.equal(
				boxSizeByVolume[parseInt(vol)],
				"Picked unexpected box"
			);
		}
	});
});
