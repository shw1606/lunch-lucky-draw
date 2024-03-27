import { RiKakaoTalkFill, RiMailLine } from '@remixicon/react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="mx-auto max-w-[640px] p-4 sm:max-w-7xl sm:p-10 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex items-center mb-8">
          <div className="ml-4 font-bold text-lg leading-normal">
            오늘의 점메추
          </div>
        </div>
        <div className="sm:ml-12 sm:flex-grow">
          <div className="flex justify-center text-sm leading-loose space-x-6 sm:text-[16px] sm:justify-start">
            <a href="/agreements" target="_blank">
              이용약관
            </a>
            <a href="/privacy" target="_blank">
              개인정보 처리방침
            </a>
            <a href="/" target="_blank noopener noreferrer">
              문의하기
            </a>
          </div>
          <div className="mt-8 text-sm text-center sm:text-left">
            <p className=" text-gray-500">
              오늘의 점메추 <br />
              문의: shw4008@gmail.com | 대표: 서현우
            </p>
          </div>
        </div>
        <div className="flex mt-6 sm:mt-0">
          <a
            // className="text-2xl font-semibold"
            href="mailto:shw4008@gmail.com"
          >
            <RiMailLine className="inline-block w-8" />
          </a>
          <a
            // className="text-2xl font-semibold"
            href="/"
            target="_blank noopener noreferrer"
          >
            <RiKakaoTalkFill className="inline-block w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
