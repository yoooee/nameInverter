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
  const postNominal: string = getPostNominals(names);
  const firstName: string = names[0];
  const lastName: string = names[1];
  return `${lastName}, ${firstName} ${postNominal}`.trim();
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

const getPostNominals = (names: Array<string>): string => {
  let postNominalString: string = '';
  if (names.length > 2) {
    const postNominals: Array<string> = names.slice(2, names.length);
    postNominalString = postNominals.join(' ');
  }
  return postNominalString;
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
