import { atom, selector } from 'recoil';

// atom은 key와 default를 지정해야함
export const CartItemAtom = atom({
  key: 'CartItemAtom', // atom의 이름 (전역적으로 유일한 값)
  default: [],
});

// selector는 key와 get을 정의한다.
export const TotalQuantitySelector = selector({
  key: 'TotalQuantitySelector',
  get: ({ get }) => {
    const CartItem = get(CartItemAtom);
    return CartItem.length;
  },
});

// selector는 key와 get을 정의한다.
export const TotalPriceSelector = selector({
  key: 'TotalPriceSelector',
  get: ({ get }) => {
    const CartItem = get(CartItemAtom);
    return CartItem.reduce((sum, prev) => sum + prev.price, 0);
  },
});
