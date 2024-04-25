"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { CgClose } from "react-icons/cg";

export const Dialog = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const handleDialogClose = () => router.back();
  return (
    <div
      role="dialog"
      className="relative z-30 bg-slate-100"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div
        role="button"
        className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={handleDialogClose}
      ></div>
      <div className="fixed flex-col inset-64 z-1 overflow-y-auto bg-white shadow-md rounded-lg">
        <div className="flex justify-end shadow-sm p-2 sticky top-0 z-10 bg-white">
          <button onClick={handleDialogClose} className="mb-1">
            <div className="place-items-start">
              <CgClose />
            </div>
          </button>
        </div>
        <div className="px-8 py-4">{children}</div>
      </div>
    </div>
  );
};
