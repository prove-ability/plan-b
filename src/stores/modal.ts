import { create } from "zustand";

type ModalContents = {
  title: string;
  content: string;
};

type ModalState = {
  modalContents: ModalContents | null;
};

type ModalActions = {
  showModal: (modalContents: ModalContents) => void;
};

type ModalStore = ModalState & ModalActions;

export const useModalStore = create<ModalStore>((set) => ({
  modalContents: null,
  showModal: (modalContents: ModalContents) => set({ modalContents }),
  closeModal: () => set({ modalContents: null }),
}));
