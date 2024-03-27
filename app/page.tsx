import { RiArrowLeftSFill, RiArrowRightSFill } from '@remixicon/react';
import { auth } from '@/auth';
import DrawButton from '@/components/atoms/DrawButton';
import MobileOnlyTemplate from '@/components/templates/MobileOnlyTemplate';

const Home = async () => {
  const session = await auth();

  const onDraw = async () => {
    'use server';
    console.log('Draw!');
  };

  return (
    <MobileOnlyTemplate className="h-screen">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold">신촌 점메추</h1>
        <p className="text-lg mt-4">
          오늘 뭐 먹을지 고민이라면,
          <br /> 점심메뉴 추천과 함께 쿠폰을 받아보세요!
        </p>
        <div className="flex items-center mt-10">
          <RiArrowRightSFill className="w-12 h-12 inline-block" />
          <div className="min-w-52 text-2xl border-2 border-red-500 py-2 inline-block overflow-hidden">
            오늘의 식당은?!
          </div>
          <RiArrowLeftSFill className="w-12 h-12 inline-block" />
        </div>
        <div className="mt-8">
          <DrawButton onDraw={onDraw} />
        </div>
      </div>
    </MobileOnlyTemplate>
  );
};

export default Home;
