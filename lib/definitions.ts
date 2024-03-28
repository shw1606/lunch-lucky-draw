export interface User {
  id: string;
  email?: string;
  name: string;
}

export interface ArrayItemQueryRows {
  name: string;
}

export interface Menu {
  name: string;
  price: number;
  discountedPrice: number;
}

export interface Coupon {
  restaurantName: string;
  menus?: Menu[];
  promotionContent: string;
}
