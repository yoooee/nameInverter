import { NameInverter } from './index';

describe('nameInverter', () => {
  let nameInverter: NameInverter;

  beforeEach(() => {
    nameInverter = new NameInverter();
  });

  const assertInverted = (originalName: string, invertedName: string) => {
    expect(nameInverter.invertName(originalName)).toEqual(invertedName);
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
