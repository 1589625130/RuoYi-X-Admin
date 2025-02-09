import type { ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';

export type ValueEnumMap<K> = Map<
  K,
  { text: string; status?: 'Default' | 'Error' | 'Success' | 'Processing' | 'Warning' }
>;

export type ProItem<T = any, ValueType = 'text'> = ProDescriptionsItemProps<T, ValueType> & ProColumns<T, ValueType>;
