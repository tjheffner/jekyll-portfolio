describe('triangle', function() {
  it("will say it is a triangle for inputs: (3, 4, 5)", function() {
    expect(triangle(3, 4, 5)).to.equal("right");
  });

  it("will say it is not a triangle for inputs: (4, 5, 10)", function() {
    expect(triangle(4, 5, 10)).to.equal("impossible");
  });

  it("will say it is a scalene triangle for inputs: (4, 5, 7)", function() {
    expect(triangle(4, 5, 7)).to.equal("scalene");
  });

  it("will say it is a isosceles triangle for inputs: (4, 4, 5)", function() {
    expect(triangle(4, 4, 5)).to.equal("isosceles");
  });

  it("will say it is a equilateral triangle for inputs: (3, 3, 3)", function() {
    expect(triangle(3, 3, 3)).to.equal("equilateral");
  });

  it("will accept negative inputs as positive values", function() {
    expect(triangle(-3, 3, 3)).to.equal("equilateral");
  });

  it("will say it is a right triangle for inputs (3, 4, 5)", function() {
    expect(triangle(3, 4, 5)).to.equal("right");
  });

});
