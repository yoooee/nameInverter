const invertName = (name: string): string => {
  return "";
}

describe('nameInverter', () => {
  let subject;

  beforeEach(() => {
  });

  it('given Null, returns Empty string', () => {
    expect(invertName(null)).toEqual('');
  });

  it('given Empty string, returns Empty string', () => {
    expect(invertName('')).toEqual('');
  });

});
