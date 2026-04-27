// src/components/Modal.tsx
"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-md" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#0a0f1c] border border-zinc-800 p-6 shadow-2xl focus:outline-none"
          aria-label={title ?? "Modal"}
        >
          <div className="flex items-start justify-between mb-6 pb-4 border-b border-zinc-800">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <Dialog.Close aria-label="Close" className="p-1.5 rounded-md hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50">
              <X size={20} />
            </Dialog.Close>
          </div>

          <div className="text-gray-300">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
