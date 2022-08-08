/* eslint-disable import/named */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Nunito',
    lineHeight: '26px',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
});
