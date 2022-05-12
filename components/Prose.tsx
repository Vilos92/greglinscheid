import {FC} from 'react';
import {styled} from 'twin.macro';

/*
 * Styles.
 */

const StyledProseDiv = styled.div`
  h1:not(:first-child) {
    margin-top: 32px;
  }

  code {
    color: #f8f8f2;
    background: #282a36;
    padding: 1px 2px 1px 2px;
    border-radius: 5px;
  }
`;

/*
 * Component.
 */

export const Prose: FC = ({children}) => <StyledProseDiv className='prose'>{children}</StyledProseDiv>;
