"use client";

import { useModalStore } from "@/stores/modal";

export default function Modal() {
  const state = useModalStore((state) => state.modalContents);
  if (!state) return <></>;
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
