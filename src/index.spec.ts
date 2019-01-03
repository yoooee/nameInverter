const invertName = (name: string): string => {
  if ((name == null) || (name.length <= 0)) {
    return "";
  } else {
    name = name.trim();
    const names: Array<string> = name.split(/\s+/);
    if (names.length == 1) {
      return name;
    }
    return `${names[1]}, ${names[0]}`;
  }
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

  it('given First Last, return Last First', () => {
    assertInverted('First Last', 'Last, First');
  });

  it('given a Simple name with spaces, return a Simple name without spaces', () => {
    assertInverted(' Name ', 'Name');
  });

  it('given First Last with extra spaces, return Last First', () => {
    assertInverted('   First   Last   ', 'Last, First');
  });

});
