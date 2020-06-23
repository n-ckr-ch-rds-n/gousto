import {Thing} from "./thing";
import {expect} from "chai";

describe("Thing", () => {
    let thing: Thing;

    beforeEach(() => {
        thing = new Thing();
    })

    it("Speaks", () => {
        expect(thing.speak()).to.equal("Bloob", "Thing didn't speak correctly");
    })
})
