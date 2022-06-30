import { SysMenuPostTreeSelect } from '@/services/swagger/SysMenuService';
import { getParentIds } from '@/utils';
import type { ActionType } from '@ant-design/pro-components';
import { useQuery } from 'react-query';
import { atom } from 'recoil';

const key = 'systemRole';
const queryKey = [key, 'menuTree'];
export const tableActionsAtom = atom<ActionType>({ key: `${key}TableActions` });

export const useQueryMenuTree = (params: API.SysMenuQuery = {}) =>
  useQuery(queryKey, async () => {
    const data = await SysMenuPostTreeSelect(params);
    console.log(data);
    return {
      treeData: data,
      parentIds: getParentIds(data),
    };
  });
