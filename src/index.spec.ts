const splitNames = (name) => {
  return name.trim().split(/\s+/);
}

const isHonorific = (word) => {
  const regexp = RegExp('Mr\.|Mrs\.');
  return regexp.test(word);
}

const invertName = (name: string): string => {
  if ((name == null) || (name.length <= 0)) {
    return "";
  } else {
    const names: Array<string> = splitNames(name);
    if ((names.length > 1) && (isHonorific(names[0]))) {
      names.shift();
    }

    if (names.length == 1) {
      return names[0];
    } else {
      let postNominal: string = '';
      if (names.length > 2) {
        postNominal = names[2];
      }
      return `${names[1]}, ${names[0]} ${postNominal}`.trim();
    }
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

  it('ignores Honorifics', () => {
    assertInverted('Mr. First Last', 'Last, First');
    assertInverted('Mrs. First Last', 'Last, First');
  });

  it('postNominals stay at end', () => {
    assertInverted('First Last Sr.', 'Last, First Sr.');
  });

});
