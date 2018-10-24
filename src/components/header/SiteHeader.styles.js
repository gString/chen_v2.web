import styled, { injectGlobal } from 'styled-components';

import VARS from '../CSSvars';

export const Header = styled.header`
  background-color: ${VARS.COLORS.WHITE};
  height: 127px;
  padding: 30px 22px 2px 22px;
  margin-bottom: ${VARS.GAP};
  ${VARS.MIXIN.SMALL_FONT}
`;
