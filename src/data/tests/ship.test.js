import Ship from "../ship";

it("should be sunk after 4 hits, but not three", () => {
    const instance = new Ship(4);

    instance.hit();
    instance.hit();
    instance.hit();
    expect(instance.isSunk()).toBe(false);
    instance.hit();
    expect(instance.isSunk()).toBe(true);
})