import { useRecoilValue } from 'recoil';
import {
  CartItemAtom,
  TotalQuantitySelector,
  TotalPriceSelector,
} from '../recoil/CartItemAtom';
import styled from 'styled-components';
import CartItem from './../component/CartItem/CartItem';

function Cart() {
  // 전역 상태 관리소의 값을 불러온다
  const cartItem = useRecoilValue(CartItemAtom);
  // 파생데이터인 셀렉터를 이용
  const TotalQuantity = useRecoilValue(TotalQuantitySelector);
  // 파생데이터 셀렉터 사용
  const TotalPrice = useRecoilValue(TotalPriceSelector);

  return (
    <>
      <Heading>장바구니</Heading>

      <ItemWrapper>
        {cartItem.length ? (
          cartItem.map((e) => <CartItem data={e} key={e.id} />)
        ) : (
          <NoItems>상품이 없습니다</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>총 갯수</span>
          <Heading>{`${TotalQuantity}개`}</Heading>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>총 가격</span>
          <Heading>{`${TotalPrice}원`}</Heading>
        </ColumnWrapper>
      </TotalPriceWrapper>
    </>
  );
}
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;
const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
`;
const TotalPriceWrapper = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--line-gray);
  & span {
    text-align: right;
  }
`;
const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;

export default Cart;
