'use client';

import { RiArrowLeftSFill, RiArrowRightSFill } from '@remixicon/react';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import DrawButton from '@/components/atoms/DrawButton';
import { NotificationContext } from '@/contexts/NotificationContext';
import { Coupon } from '@/lib/definitions';

interface LuckyDrawerProps {
  onDraw: () => Promise<{ coupon: Coupon; otherRestaurants: string[] }>;
}

const LuckyDrawer = ({ onDraw }: LuckyDrawerProps) => {
  const [restaurants, setRestaurants] = useState<string[]>(['오늘의 식당은?!']);
  const { setContent, setIsOpen } = useContext(NotificationContext);

  const onClick = () => {
    onDraw().then((result) => {
      const { coupon, otherRestaurants } = result;
      setRestaurants([...restaurants, ...otherRestaurants]);
      setTimeout(() => {
        setContent?.({
          title: '쿠폰 당첨',
          description: `${coupon.restaurantName} ${coupon.promotionContent} 쿠폰에 당첨되셨습니다!`,
          confirmText: '쿠폰함에서 확인',
          onConfirm: () => {
            window.location.href = '/my-coupons';
          },
        });
        setIsOpen?.(true);
      }, 2500);
    });
  };

  return (
    <>
      <div className="flex items-center mt-10">
        <RiArrowRightSFill className="w-12 h-12 inline-block" />
        <div
          className={`min-w-52 h-12 text-2xl border-2 border-red-500 py-2 inline-block overflow-hidden relative `}
        >
          <div
            className={clsx(
              `w-full flex flex-col absolute transition-all duration-[2s] ease-in-out`
            )}
            style={{ top: `${-1 * (restaurants.length - 1) * 48}px` }}
          >
            {restaurants.map((restaurant) => (
              <div
                className="h-12 flex justify-center items-center"
                key={restaurant}
              >
                {restaurant}
              </div>
            ))}
          </div>
        </div>
        <RiArrowLeftSFill className="w-12 h-12 inline-block" />
      </div>
      <div className="mt-8">
        <DrawButton onDraw={onClick} />
      </div>
    </>
  );
};

export default LuckyDrawer;
