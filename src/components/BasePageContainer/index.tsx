import type { PageContainerProps } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BasePageContainer: FC<PageContainerProps> = (props) => {
  return cloneElement(<PageContainer header={{ title: '', breadcrumb: {} }} className="px-4" />, props);
};
