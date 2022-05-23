import {FC} from 'react';
import tw from 'twin.macro';

/*
 * Styles.
 */

const StyledColumnDiv = tw.div`
  flex
  flex-col
  items-center
`;

/*
 * Component.
 */

export const MainColumn: FC = ({children}) => <StyledColumnDiv>{children}</StyledColumnDiv>;
