import LuckyDrawer from '@/components/organisms/LuckyDrawer';
import MobileOnlyTemplate from '@/components/templates/MobileOnlyTemplate';
import { Coupon } from '@/lib/definitions';

const Home = async () => {
  const onDraw = async () => {
    'use server';
    const couponExample: Coupon = {
      restaurantName: '연세 식당',
      promotionContent: '3000원 할인',
    };

    return {
      coupon: couponExample,
      otherRestaurants: [
        '한술식당',
        '타코로코',
        '올모스트 다이',
        '두마리 찜닭',
        '포케 올데이',
        '청년 샐러드',
        '텐동미세기',
        '부엉이 돈가스',
        '평안도 식당',
        '김판석 초밥',
        '신촌 포가레',
        '친친 칼국수',
        couponExample.restaurantName,
      ],
    };
  };

  return (
    <MobileOnlyTemplate className="">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
        <h1 className="text-4xl font-bold">신촌 점메추</h1>
        <p className="text-lg mt-4">
          오늘 뭐 먹을지 고민이라면,
          <br /> 점심메뉴 추천과 함께 쿠폰을 받아보세요!
        </p>
        <LuckyDrawer onDraw={onDraw} />
      </div>
    </MobileOnlyTemplate>
  );
};

export default Home;
