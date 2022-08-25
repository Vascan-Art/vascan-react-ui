import classNames from 'classnames';
import React, { Fragment} from 'react';
import { IModal } from './Modal';
import { Dialog, Transition } from '@headlessui/react';
import { IconButton } from '../iconButton';
import { mdiClose } from '@mdi/js';

export const Modal: React.FC<IModal> = ({
  handleClose,
  label,
  className,
  children,
  isOpen = false,
}) => {
  const classes = classNames('relative z-10', className);
  const closeModal = () => {
    handleClose();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={classes} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <IconButton
                    path={mdiClose}
                    iconColor="error"
                    size="20"
                    className="absolute -top-12 right-0"
                    onClick={closeModal}
                  >
                    close
                  </IconButton>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    {label}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
