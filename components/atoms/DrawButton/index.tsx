'use client';

import { signIn, useSession } from 'next-auth/react';
import { useContext } from 'react';
import { NotificationContext } from '@/contexts/NotificationContext';

const DrawButton = ({ onDraw }: { onDraw: () => void }) => {
  const { data: session } = useSession();
  const { setContent, setIsOpen } = useContext(NotificationContext);
  const onClick = () => {
    if (!session?.user) {
      setContent?.({
        title: '로그인이 필요합니다',
        description: '로그인 후 이용해주세요.',
        confirmText: '로그인',
        onConfirm: () => {
          signIn();
        },
      });
      setIsOpen?.(true);
      return;
    }
    onDraw();
  };
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 rounded-full bg-red-500 text-white active:bg-red-800 font-extrabold"
    >
      돌리기!
    </button>
  );
};

export default DrawButton;
