export type IButton = {
  className?: string;
  children: string | JSX.Element | (JSX.Element | string)[];
  size?: 'lg' | 'md' | 'sm';
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'success'
    | 'success-outline'
    | 'error'
    | 'error-outline'
    | 'light';
  disabled?: boolean;
};
