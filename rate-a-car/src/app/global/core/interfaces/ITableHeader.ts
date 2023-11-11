export interface ITableHeader<T> {
  id: number;
  label: string;
  property: keyof T;
  position: number;
  visible: boolean;
  sorted: boolean;
  width: number;
  draggable?: boolean;
}
