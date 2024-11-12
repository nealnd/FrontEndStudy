export class GroceryItem {
  name: string;
  isBought: boolean;

  constructor(name: string, isBought: boolean = false) {
    this.name = name;
    this.isBought = isBought;
  }
}
