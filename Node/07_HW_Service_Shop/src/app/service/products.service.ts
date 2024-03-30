import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  constructor() {
    this.products = [
      new Product(
        'Ноутбук HP Pavilion',
        1200,
        10,
        'https://www.hp.com/fr-fr/shop/Html/Merch/Images/7Q890EA-ABF_3_390x286.jpg'
      ),
      new Product(
        'Смартфон Samsung Galaxy',
        800,
        0,
        'https://cdn.auchan.fr/media/A0220240110000550647PRIMARY_2048x2048/B2CD/?format=rw&quality=75&width=1200&height=1200'
      ),
      new Product(
        'Планшет Apple iPad',
        500,
        15,
        'https://www.grosbill.com/images_produits/ca9e8df6-5d87-41fd-abb0-12fccf2836d1.jpg'
      ),
      new Product(
        'Наушники Sony WH-1000XM4',
        350,
        30,
        'https://fr.shopping.rakuten.com/photo/sony-wh-1000xm4-casque-a-reduction-de-bruit-bluetooth-noir-2219636935_L_NOPAD.jpg'
      ),
      new Product(
        'Фитнес-браслет Xiaomi Mi Band 6',
        40,
        0,
        'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/f/r/front_45__black.jpg/w_600'
      ),
      new Product(
        'Камера Canon EOS R6',
        2500,
        5,
        'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/6/4/64119b7f5d91e_42_4000.jpg/w_600'
      ),
      new Product(
        'Жесткий диск Seagate Barracuda',
        100,
        100,
        'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/g/p/gpieg930g-rege.jpg/w_600'
      ),
      new Product(
        'Принтер HP LaserJet Pro',
        200,
        25,
        'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/h/p/hp_laserjet_pro_m141w_c_wifi_7md74a_1_.jpg/w_600'
      ),
      new Product(
        'Монитор LG UltraGear',
        600,
        12,
        'https://content1.rozetka.com.ua/goods/images/big/129287058.jpg'
      ),
      new Product(
        'Клавиатура Logitech G Pro X',
        150,
        18,
        'https://content2.rozetka.com.ua/goods/images/big/361656555.jpg'
      ),
    ];
  }
  addProduct(product: Product) {
    const existingProductIndex = this.products.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      this.products[existingProductIndex].quantity++;
    } else {
      this.products.push({ ...product, quantity: 1 });
    }
  }

  removeProduct(product: Product) {
    const existingProductIndex = this.products.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      let prod = this.products[existingProductIndex];
      if (prod.quantity === 1) {
        this.removeProductCompletely(prod);
      } else {
        this.decreaseProductQuantity(prod);
      }
    }
  }

  removeProductCompletely(product: Product) {
    const existingProductIndex = this.products.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      this.products.splice(existingProductIndex, 1);
    }
  }

  decreaseProductQuantity(product: Product) {
    const existingProductIndex = this.products.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      let prod = this.products[existingProductIndex];
      if (prod.quantity >= 1) {
        prod.quantity--;
      }
    }
  }

  getProductQuantityById(prodId: number): number {
    const product = this.products.find((item) => item.id === prodId);
    return product ? product.quantity : -1;
  }

  editProduct(prodId: number, newProduct: Product) {
    const existingProductIndex = this.products.findIndex(
      (item) => item.id === prodId
    );
    if (existingProductIndex !== -1) {
      this.products[existingProductIndex] = { ...newProduct, id: prodId };
    }
  }
  getTotalCost(): number {
    return this.products.reduce(
      (total, product) => (total += product.price * product.quantity),
      0
    );
  }
}
