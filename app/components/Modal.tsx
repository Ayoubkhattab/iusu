"use client";
import { Children, Fragment } from "react";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  Transition,
} from "@headlessui/react";

type ModalType = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};
export default function Modal({ isOpen, closeModal, children }: ModalType) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => closeModal()}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-60"
          aria-hidden="true"
        ></div>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel>{children}</DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
