const splitNames = (name) => {
  return name.trim().split(/\s+/);
}

const isHonorific = (word) => {
  const regexp = RegExp('Mr\.|Mrs\.');
  return regexp.test(word);
}


const removeHonorifics = (names: Array<string>): Array<string> => {
  if ((names.length > 1) && (isHonorific(names[0])))
    names.shift();
  return names;
}

const formatMultiElementName = (names: Array<string>) => {
  let postNominal: string = '';
  if (names.length > 2) {
    let postNominals: Array<string>;
    postNominals = names.slice(2, names.length);
    postNominal = postNominals.join(' ');
  }
  return `${names[1]}, ${names[0]} ${postNominal}`.trim();
}

const formatName = (names: Array<string>) => {
  if (names.length == 1) {
    return names[0];
  } else {
    return formatMultiElementName(names);
  }
}

const invertName = (name: string): string => {
  if ((name == null) || (name.length <= 0))
    return "";
  else
    return formatName(removeHonorifics(splitNames(name)));
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
    assertInverted('First Last BS. Phd.', 'Last, First BS. Phd.');
  });

  it('integration', () => {
    assertInverted('   Robert     Martin    III   esq.    ', 'Martin, Robert III esq.');
  });

});
