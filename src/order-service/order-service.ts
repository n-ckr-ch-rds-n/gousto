import {Order} from "./order";
import {BoxPicker} from "../box-picker/box-picker";

export class OrderService {
	constructor(private boxPicker: BoxPicker) {}

	boxOrders(orders: Order[]): any {
		return orders.map((order) => ({
			id: order.id,
			box: this.boxPicker.pickBox(this.calculateVolume(order)),
		}));
	}

	calculateVolume(order: Order): number {
		return order.ingredients.reduce((acc, curr) => {
			return (acc += curr.volumeCm3);
		}, 0);
	}
}
