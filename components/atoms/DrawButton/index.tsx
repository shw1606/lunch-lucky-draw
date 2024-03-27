'use client';

import { signIn, useSession } from 'next-auth/react';

const DrawButton = ({ onDraw }: { onDraw: () => void }) => {
  const { data: session } = useSession();
  const onClick = () => {
    if (!session?.user) {
      alert('로그인이 필요합니다.');
      signIn();
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
