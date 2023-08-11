import React, { useState } from 'react';
import DropDown from './components/DropDown';
import PrimaryButton from '@/components/UI/PrimaryButton';
import PageContainer from '@/components/UI/PageContainer';
import Link from 'next/link';
import Footer from './components/Footer';
import { useRouter } from 'next/router';
import Logo from './../../../assets/logo.png';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
import { BiSolidUserCircle } from 'react-icons/bi';

const RootLayout = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div>
      {/* header */}
      <div className='flex justify-between items-center  md:w-[85%] md:mx-auto md:py-6 py-4 px-4'>
        {/* logo and categories */}
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              height={100}
              width={100}
              className='w-[120px]'
            />
          </Link>

          <DropDown />
        </div>

        {/* pc builder button and login */}

        <div className='flex justify-between'>
          {session?.user ? (
            <div className='relative inline-block '>
              <BiSolidUserCircle
                size={50}
                onClick={() => setShowDropDown(!showDropDown)}
                className='cursor-pointer text-primary mr-4'
              />

              {showDropDown && (
                <div className='origin-top-right absolute right-0 md:left-0 mt-2 min-w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                  {/* Dropdown content */}
                  <div className='py-2 px-3 text-left'>
                    <h1 className='text-primary font-semibold'>
                      {session?.user?.name.split(' ')[0]}
                    </h1>

                    <button
                      onClick={() => signOut()}
                      className='text-red-500 font-semibold rounded-md '
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <PrimaryButton
              customClass='px-4 py-2 bg-green-500 mr-4'
              clickHandler={() => signIn('google')}
            >
              Login
            </PrimaryButton>
          )}

          <Link href={`${router.basePath}/pc-builder`}>
            <PrimaryButton customClass='px-4 py-2 bg-red-500 mr-4 '>
              PC Builder
            </PrimaryButton>
          </Link>
        </div>
      </div>

      {/* content */}

      <PageContainer>{children}</PageContainer>

      {/* footer */}
      <div className=' md:mx-auto md:py-6 py-4'>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
