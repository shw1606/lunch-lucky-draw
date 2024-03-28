import { Button, Card, Divider } from '@tremor/react';
import Image from 'next/image';
import Link from 'next/link';
import DuanJangImage from '@/assets/images/duanjangchigae.jpg';
import KimchiImage from '@/assets/images/kimchichigae.jpg';
import CouponModalHeader from '@/components/organisms/CouponModalHeader';
import MobileOnlyTemplate from '@/components/templates/MobileOnlyTemplate';
import ModalTemplate from '@/components/templates/ModalTemplate';

const MyCouponsPage = ({
  searchParams,
}: {
  searchParams: { coupon?: string };
}) => {
  const { coupon } = searchParams || {};

  return (
    <MobileOnlyTemplate className="min-h-screen">
      <h1 className="text-xl font-extrabold">내 쿠폰함</h1>
      <div className="mt-6 space-y-3">
        <Link href={'/my-coupons?coupon=1'}>
          <Card className="cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">연세 식당</h2>
                <p>3000원 할인</p>
                <p className="text-gray-400">~2024.03.28 까지 사용가능</p>
              </div>
              <button className="border-red-500 border text-red-500 px-2 py-2 rounded-lg">
                쿠폰 확인
              </button>
            </div>
          </Card>
        </Link>
        <Card className="opacity-50">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">연세 식당 2</h2>
              <p>2000원 할인</p>
            </div>
            <button className="border-red-500 border text-red-500 px-2 py-2 rounded-lg">
              기간 만료
            </button>
          </div>
        </Card>
      </div>
      {coupon === '1' && (
        <ModalTemplate>
          <CouponModalHeader />
          <div className="mt-4">
            <h2 className="text-lg font-bold">연세 식당</h2>
            <p>주소: 서울 서대문구 연세로 50</p>
            <p className="text-red-500 font-extrabold">3000원 할인</p>
            <p>~2024.03.28 까지 사용가능</p>
            <Divider />
            <h2 className="text-lg font-bold">대표 메뉴</h2>
            <div className="flex mt-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={DuanJangImage}
                  width={200}
                  height={200}
                  alt=""
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div className="ml-4">
                <h3>된장찌개</h3>
                <p>5000원</p>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={KimchiImage}
                  width={200}
                  height={200}
                  alt=""
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div className="ml-4">
                <h3>김치찌개</h3>
                <p>5000원</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex space-x-2">
                <Button color="green" className="flex-1">
                  네이버 지도로 보기
                </Button>
                <Button color="yellow" className="flex-1">
                  카카오맵으로 보기
                </Button>
              </div>
              <div className="mt-2">
                <Button color="red" className="w-full">
                  쿠폰 사용하기
                </Button>
              </div>
            </div>
          </div>
        </ModalTemplate>
      )}
    </MobileOnlyTemplate>
  );
};

export default MyCouponsPage;
