export class Page<T> {
  public readonly items: Array<T>;
  public readonly count: number;

  public constructor(items: Array<T>, count: number) {
    this.items = items;
    this.count = count;
  }

  public static createDefault<T>(): Page<T> {
    return new Page<T>([], 0);
  }
}
