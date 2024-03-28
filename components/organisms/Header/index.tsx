import Link from 'next/link';
import HeaderProfileMenu from '@/components/molecules/HeaderProfileMenu';
import TopWIPBanner from '@/components/organisms/TopWIPBanner';

const navigation = [{ name: '내 쿠폰함', href: '/my-coupons' }];

const Header = async () => {
  return (
    <header className="w-full bg-white shadow-sm sticky -top-12 z-10 sm:-top-14">
      <TopWIPBanner />
      <div className="relative mx-auto max-w-[640px] px-4 h-[64px] flex justify-between items-center sm:max-w-7xl sm:px-10">
        <Link href="/" className="font-extrabold text-lg">
          오늘의 점메추
        </Link>
        <div className="flex items-center">
          <div className="hidden sm:flex items-center font-medium">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div className="text-gray-700 hover:font-bold mx-4 py-2">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <HeaderProfileMenu
            menuNavigationsWhenLoggedIn={[
              {
                name: '내 쿠폰함',
                href: '/my-coupons',
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
