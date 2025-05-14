import localFont from 'next/font/local';

export const balbekPro = localFont({
  src: [
    {
      path: '../../public/fonts/BalbekProExtraBoldOblique.otf',
      weight: '800',
      style: 'italic',
    }
  ],
  variable: '--font-balbek',
});
