import { add, sub } from ".";

describe("add", () => {

  it("should add the two numbers together", () => {
    expect(add(1, 2)).toBe(3)
  })

  it("should return 0 if num1 is 0", () => {
    expect(add(0, 2)).toBe(0);
  })

})

describe("sub", () => {

  it("should subtract the first number from the second number", () => {
    expect(sub(1, 2)).toBe(1);
  })
  
})