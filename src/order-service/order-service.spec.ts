import {OrderService} from "./order-service";
import {Order} from "./order";
import {expect} from "chai";
import {BoxPicker} from "../box-picker/box-picker";
import {Box} from "../box-picker/box";

describe("Order service", () => {
	let orderService: OrderService;
	let mockOrder: Order;
	let mockBoxPicker: BoxPicker;
	let mockBox: Box;

	beforeEach("Instantiate order service", () => {
		mockBoxPicker = {
			pickBox: (volume) => mockBox,
		} as BoxPicker;
		orderService = new OrderService(mockBoxPicker);
	});

	it("Calculates volumes of orders", () => {
		mockOrder = {
			id: 1,
			ingredients: [
				{
					name: "foobar",
					volumeCm3: 5,
				},
				{
					name: "barbaz",
					volumeCm3: 10,
				},
			],
		};
		const calculatedVolume = orderService.calculateVolume(mockOrder);
		expect(calculatedVolume).to.equal(15, "Volume incorrectly calculated");
	});
});
