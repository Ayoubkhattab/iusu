"use client";
import { Fragment } from "react";

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
};
export default function Modal({ isOpen, closeModal }: ModalType) {
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
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <DialogPanel>
          <DialogTitle>Deactivate account</DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          {/* 
          <button onClick={() => closeModal()}>Deactivate</button>
          <button onClick={() => closeModal()}>Cancel</button> */}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
}
