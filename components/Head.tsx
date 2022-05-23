import NextHead from 'next/head';
import {FC} from 'react';

/*
 * Types.
 */

interface HeadProps {
  title?: string;
}

/*
 * Component.
 */

export const Head: FC<HeadProps> = ({title}) => {
  const subtitle = title ? ` | ${title}` : '';

  return (
    <NextHead>
      <title>Greg Linscheid{subtitle}</title>
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};
