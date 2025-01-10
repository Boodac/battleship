import Ship from "../ship";

const instance = new Ship(4);

if("should exist", () => {
    expect(instance).toBeTruthy();
})

it("should be sunk after 4 hits, but not three", () => {
    instance.hit();
    instance.hit();
    instance.hit();
    expect(instance.isSunk()).toBe(false);
    instance.hit();
    expect(instance.isSunk()).toBe(true);
})