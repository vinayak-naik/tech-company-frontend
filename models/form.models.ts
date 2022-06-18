export interface OptionsIF {
  key: string;
  value: string;
}
export interface FormIF {
  type?: string;
  label: string;
  name: string;
  options?: OptionsIF[];
}
