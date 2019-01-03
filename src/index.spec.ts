const invertName = (name: string): string => {
  return "";
}

describe('nameInverter', () => {
  let subject;

  beforeEach(() => {
  });

  const assertInverted = (originalName: string, invertedName: string) => {
    expect(invertName(originalName)).toEqual(invertedName);
  }

  it('given Null, returns Empty string', () => {
    assertInverted(null, '');
  });

  it('given Empty string, returns Empty string', () => {
    assertInverted('', '');
  });

});
