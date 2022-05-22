import {FC} from 'react';
import tw, {styled} from 'twin.macro';

/*
 * Styles.
 */

const StyledProseDiv = styled.div`
  & * {
    ${tw`text-white`}
  }

  h1:not(:first-child) {
    margin-top: 32px;
  }

  code {
    color: #f8f8f2;
    background: #282a36;

    ${tw`
      rounded-md p-1 font-mono
    `}
  }
`;

/*
 * Component.
 */

export const Prose: FC = ({children}) => <StyledProseDiv className='prose'>{children}</StyledProseDiv>;
