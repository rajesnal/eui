import { ReactElement, ReactNode, SFC } from 'react';

declare module '@elastic/eui' {
  export type ToolTipPositions = 
    | 'top'
    | 'right'
    | 'bottom'
    | 'left';

  export interface EuiToolTipProps {
    children: ReactElement<any>;
    className?: string;
    content: ReactNode;
    title?: ReactNode;
    id?: string;
    position?: ToolTipPositions;
  }
  export const EuiToolTip: SFC<EuiToolTipProps>;

  export interface EuiIconTipProps {
    color?: string;
    type?: string;
    size?: string;
    'aria-label'?: string;
  }
  export const EuiIconTip: SFC<EuiIconTipProps>;
}
