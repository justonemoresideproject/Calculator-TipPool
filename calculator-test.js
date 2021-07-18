
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount: 1000, years: 5, rate: 5})).toContain(18.87)
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount: 1000, years: 5, rate: 5})).toBeCloseTo(18.87, 2)
});

/// etc
