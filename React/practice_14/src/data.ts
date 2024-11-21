export interface goodsItem {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export const data: goodsItem[] = [
  {
    id: 1,
    title: "Samsung Galaxy S8",
    price: 399.99,
    img: "https://www.course-api.com/images/cart/phone-1.png",
    amount: 1,
  },
  {
    id: 2,
    title: "Google Pixel ",
    price: 499.99,
    img: "https://www.course-api.com/images/cart/phone-2.png",
    amount: 1,
  },

  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://www.course-api.com/images/cart/phone-3.png",
    amount: 1,
  },
  {
    id: 4,
    title: "Samung Galaxy S7",
    price: 599.99,
    img: "https://www.course-api.com/images/cart/phone-4.png",
    amount: 1,
  },
];
