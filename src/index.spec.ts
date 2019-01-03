const invertName = (name: string): string => {
  if ((name != null) && (name.length > 0))
    return name;
  return "";
}

describe('nameInverter', () => {
  const assertInverted = (originalName: string, invertedName: string) => {
    expect(invertName(originalName)).toEqual(invertedName);
  }

  it('given Null, returns Empty string', () => {
    assertInverted(null, '');
  });

  it('given Empty string, returns Empty string', () => {
    assertInverted('', '');
  });

  it('given a Simple name, return a Simple name', () => {
    assertInverted('Name', 'Name');
  });

});
