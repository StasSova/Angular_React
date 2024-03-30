export class Product {
  public static ID: number = 0;
  public id: number;
  constructor(
    public name: string = 'product',
    public price: number = 0,
    public quantity: number = 0,
    public image: string = ''
  ) {
    this.id = ++Product.ID;
    image === ''
      ? (this.image =
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D')
      : (this.image = image);
  }
}
