import classNames from 'classnames';
import { Cedarville_Cursive, Allan } from 'next/font/google';

const cedarvilleCursiveFont = Cedarville_Cursive({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cedarville',
});

const allanFont = Allan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alan',
});

const fontClass = classNames(
  cedarvilleCursiveFont.variable,
  allanFont.variable
);

export default fontClass;
