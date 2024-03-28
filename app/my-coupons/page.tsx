import { Card } from '@tremor/react';
import MobileOnlyTemplate from '@/components/templates/MobileOnlyTemplate';

const MyCouponsPage = () => {
  return (
    <MobileOnlyTemplate className="min-h-screen">
      <h1 className="text-xl font-extrabold">내 쿠폰함</h1>
      <div className="mt-6 space-y-3">
        <Card>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold">타코로코</h2>
              <p>3000원 할인</p>
            </div>
            <button className="bg-red-500 text-white px-2 py-1 rounded-lg">
              사용하기
            </button>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold">신촌 포가레</h2>
              <p>2000원 할인</p>
            </div>
            <button className="bg-red-500 text-white px-2 py-1 rounded-lg">
              사용하기
            </button>
          </div>
        </Card>
      </div>
    </MobileOnlyTemplate>
  );
};

export default MyCouponsPage;
