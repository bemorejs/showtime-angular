export interface SelectItem {
  icon: string;
  label?: string;
  value: string | number;
}

export const FOO: SelectItem[] = [
  {
    icon: 'home',
    label: 'home',
    value: 'domcek',
  },
  {
    icon: 'person',
    label: 'person',
    value: 'clovek',
  }
];