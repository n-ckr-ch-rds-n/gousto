import {Dimensions} from "./dimensions";
import {BoxSize} from "./box-size";

export interface Box {
	id: string;
	name: BoxSize;
	dimensions: Dimensions;
	co2FootprintKg: number;
}
