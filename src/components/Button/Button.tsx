import { rem } from 'polished';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';

import { animation, mixins, typography } from '../../constants/styles';
import { PropsWithClassName } from '../../types/common';

export type Props = PropsWithClassName<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FunctionComponent<Props> = ({ className, children, ...rest }) => (
  <button type="button" className={className} {...rest}>
    {children}
  </button>
);

export default styled(Button)`
  ${mixins.buttonReset}
  ${mixins.noUnderline}

  background-color: #ef0c57;
  border: solid 1px #ef0c57;
  border-radius: ${rem(typography.btnFontSize * 2)};
  box-shadow: none;
  color: #fff;
  display: inline-block;
  font-family: ${typography.fontFamilyBase};
  font-size: ${rem(typography.btnFontSize)};
  font-weight: ${typography.linkFontWeight};
  line-height: ${22 / typography.btnFontSize};
  padding: ${rem(8)} ${rem(24)};
  text-transform: uppercase;
  transition-duration: ${animation.duration}s;
  transition-property: transform, color, background-color;
`;
