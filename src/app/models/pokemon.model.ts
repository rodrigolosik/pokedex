export class Pokemon {
  constructor(
    public name: string,
    public id: number,
    public sprites: string[],
    public types: string[],
    public height: number,
    public weight: number,
  ) {}
}
