export type IModal = {
  handleClose: any;
  value: string;
  children: any;
  label: string;
  isOpen: boolean;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
  type: 'text' | 'password' | 'email' | 'url' | 'number' | 'tel';
  children: string | JSX.Element | (JSX.Element | string)[];
  id: string;
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'success'
    | 'success-outline'
    | 'error'
    | 'error-outline';
};
