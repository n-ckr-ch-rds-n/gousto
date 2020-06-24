import {BoxPicker} from "./box-picker";
import {expect} from "chai";
import {Dimensions} from "./dimensions";
import {Box} from "./box";

describe("Box picker", () => {
	let boxPicker: BoxPicker;
	let mockDimensions: Dimensions;
	let mockBoxes: Box[];

	beforeEach("Instantiate box picker", () => {
		mockBoxes = [
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
		boxPicker = new BoxPicker();
	});

	it("Picks a box based on volume", () => {
		const volume = 50;
		const box = boxPicker.pickBox(volume);
		expect(box.name).to.equal("Small", "Picked unexpected box");
	});

	it("Calculates volumes based on dimensions", () => {
		mockDimensions = {
			widthMm: 10,
			heightMm: 10,
			depthMm: 10,
		};
		const volume = boxPicker.calculateVolume(mockDimensions);
		expect(volume).to.equal(1000, "Unexpected volume value");
	});

	it("Sorts boxes", () => {
		const expectedBoxes = [
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
		const sortedBoxes = boxPicker.sortBoxes(mockBoxes);
		expect(sortedBoxes).to.deep.equal(
			expectedBoxes,
			"Boxes sorted incorrectly"
		);
	});
});
