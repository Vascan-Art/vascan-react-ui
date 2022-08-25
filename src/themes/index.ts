const ButtonVariant = {
  primary:
    'bg-primary hover:bg-primary-dark text-white focus:outline-none focus:ring-2 focus:ring-primary-light',
  'primary-outline':
    'border-2 border-solid border-primary text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-light',
  secondary:
    'bg-grey-2 hover:bg-grey-1 text-white focus:outline-none focus:ring-2 focus:ring-grey-4',
  'secondary-outline':
    'border-2 border-solid border-grey-2 text-grey-1 hover:bg-grey-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-4',
  success:
    'bg-success hover:bg-success-dark text-white focus:outline-none focus:ring-2 focus:ring-success-light',
  'success-outline':
    'border-2 border-solid border-success text-success hover:bg-success hover:text-white focus:outline-none focus:ring-2 focus:ring-success-light',
  error:
    'bg-error hover:bg-error-dark text-white focus:outline-none focus:ring-2 focus:ring-error-light',
  'error-outline':
    'border-2 border-solid border-error text-error hover:bg-error hover:text-white focus:outline-none focus:ring-2 focus:ring-error-light',
  light:
    'bg-white hover:bg-grey-5 text-black focus:outline-none focus:ring-2 focus:ring-grey-5',
};

const FormSize = {
  sm: 'py-2 text-sm',
  md: 'py-4',
  lg: 'py-6 text-lg',
};

const ModalVariant = {
  primary:
    'w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
};

const AvatarVariant = {
  round: 'rounded-full',
  tile: '',
};

const LinkVariant = {
  primary: 'hover:text-primary',
  secondary: 'hover:text-black',
};

const InputVariant = {
  default: 'bg-grey-5 focus:outline-none focus:ring-2 focus:ring-primary-light',
  light: 'bg-white focus:outline-none focus:ring-2 focus:ring-primary-light',
};

const Disabled = 'cursor-not-allowed opacity-50';

const ButtonClasses =
  'px-4 capitalize flex items-center justify-center space-x-1';

const Container = 'xl:px-32';
export {
  Disabled,
  ButtonVariant,
  FormSize,
  ModalVariant,
  Container,
  ButtonClasses,
  AvatarVariant,
  LinkVariant,
  InputVariant,
};
