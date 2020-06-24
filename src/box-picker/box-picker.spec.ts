import {BoxPicker} from "./box-picker";
import {expect} from "chai";

describe("Box picker", () => {
	let boxPicker: BoxPicker;

	beforeEach("Instantiate box picker", () => {
		boxPicker = new BoxPicker();
	});

	it("Picks a box based on volume", () => {
		const volume = 50;
		const box = boxPicker.pickBox(volume);
	});
});
