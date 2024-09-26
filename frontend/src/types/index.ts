import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ITailwindColor } from '@/components/ui/loader/loaders';

export type INextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode;
  requiresAuth?: boolean;
};

export type IAppPropsWithLayout = AppProps & {
  Component: INextPageWithLayout;
};

interface IImage {
  thumbnail: string;
  original: string;
}

interface ISeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: IImage;
  twitterHandle: string;
  twitterCardType: string;
  metaTags: string;
  canonicalUrl: string;
  keywords: string[];
  author: string;
  ogImageAlt: string;
  faviconUrl: string;
  appleIconUrl: string;
  manifestUrl: string;
}

export interface ISite {
  title: string;
  defaultTitle: string;
  subtitle: string;
  logo: IImage;
}

export interface IMaintenance {
  isUnderMaintenance: boolean;
  start?: string;
  until?: string;
  image?: IImage;
}

export interface ISettings {
  seo?: ISeo;
  site: ISite;
  maintenance: IMaintenance;
}

export interface ISettingsProviderProps {
  initialValues?: ISettings;
  [key: string]: unknown;
}

export interface ISeoProps {
  title: string;
  description: string;
  url: string;
}

export type IEnvTypes = 'development' | 'production' | 'test';

export interface IEnvironmentVariables {
  NODE_ENV: IEnvTypes;
  NEXT_PUBLIC_WEBSITE_URL: string;
}

export type ILoaderType =
  | 'ThreeDots'
  | 'Circles'
  | 'Puff'
  | 'Rings'
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'CirclesWithBar'
  | 'ColorRing'
  | 'Comment'
  | 'DNA'
  | 'Discuss'
  | 'FallingLines'
  | 'FidgetSpinner'
  | 'Grid'
  | 'Hearts'
  | 'Hourglass'
  | 'InfinitySpin'
  | 'LineWave'
  | 'MagnifyingGlass'
  | 'MutatingDots'
  | 'Oval'
  | 'ProgressBar'
  | 'Radio'
  | 'RevolvingDot'
  | 'RotatingLines'
  | 'RotatingSquare'
  | 'RotatingTriangles'
  | 'TailSpin'
  | 'ThreeCircles'
  | 'Triangle'
  | 'Vortex'
  | 'Watch';

type IStyle = Record<string, string>;
export interface ILoaderProps {
  type?: ILoaderType;
  height?: string;
  width?: string;
  ariaLabel?: string;
  wrapperStyle?: IStyle;
  wrapperClass?: string;
  visible?: boolean;
  color?: ITailwindColor;
}
