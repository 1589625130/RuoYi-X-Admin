import type { MapValueEnum } from '@/types';

// 性别枚举
export enum Sex {
  MALE = '0',
  FEMALE = '1',
}
export const SexMap: MapValueEnum<Sex> = new Map([
  [Sex.MALE, { text: '男' }],
  [Sex.FEMALE, { text: '女' }],
]);
