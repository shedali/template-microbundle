


if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  it("it should work", () => {
    expect(true).toBe(true);
  });
}
