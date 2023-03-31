class ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  quantity: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: string,
    discount: string,
    image: string,
    category: string,
    quantity: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.image = image;
    this.category = category;
    this.quantity = quantity;
  }
}

export default ProductModel;
