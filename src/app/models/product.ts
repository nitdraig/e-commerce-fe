export class Product {
  _id: number;
  title: string;
  price: number;
  description: string;

  constructor(_id: number, title: string, description: string, price: number) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
