export interface Box {
	id: string;
	name: string;
	dimensions: {
		widthMm: number;
		heightMm: number;
		depthMm: number;
	};
	co2FootprintKg: number;
}
