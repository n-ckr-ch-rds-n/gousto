import {Dimensions} from "./dimensions";

export interface Box {
	id: string;
	name: string;
	dimensions: Dimensions;
	co2FootprintKg: number;
}
