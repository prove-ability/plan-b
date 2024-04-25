"use client";

import { useModalStore } from "@/stores/modal";
import { useEffect, useRef } from "react";

export default function Modal() {
  const state = useModalStore((state) => state.modalContents);
  const modelEl = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!state) return;
    modelEl.current?.showModal();
  }, [state]);
  if (!state) return null;
  return (
    <dialog id="modal" className="modal" ref={modelEl}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{state.title}</h3>
        {state.content}
        {/* <p className="py-4">Press ESC key or click outside to close</p> */}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
