export class NameInverter {

  public invertName = (name: string): string => {
    if ((name == null) || (name.length <= 0))
      return "";
    else
      return this.formatName(this.removeHonorifics(this.splitNames(name)));
  }

  private splitNames = (name) => {
    return name.trim().split(/\s+/);
  }

  private isHonorific = (word) => {
    const regexp = RegExp('Mr\.|Mrs\.');
    return regexp.test(word);
  }

  private removeHonorifics = (names: Array<string>): Array<string> => {
    if ((names.length > 1) && (this.isHonorific(names[0])))
      names.shift();
    return names;
  }

  private formatMultiElementName = (names: Array<string>) => {
    const postNominal: string = this.getPostNominals(names);
    const firstName: string = names[0];
    const lastName: string = names[1];
    return `${lastName}, ${firstName} ${postNominal}`.trim();
  }

  private formatName = (names: Array<string>) => {
    if (names.length == 1) {
      return names[0];
    } else {
      return this.formatMultiElementName(names);
    }
  }

  private getPostNominals = (names: Array<string>): string => {
    let postNominalString: string = '';
    if (names.length > 2) {
      const postNominals: Array<string> = names.slice(2, names.length);
      postNominalString = postNominals.join(' ');
    }
    return postNominalString;
  }
}
