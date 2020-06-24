import {Ingredient} from "./ingredient";

export interface Order {
	id: number;
	ingredients: Ingredient[];
}
