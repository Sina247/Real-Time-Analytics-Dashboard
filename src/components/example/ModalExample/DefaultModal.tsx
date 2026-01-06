"use client";

import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { useModal } from "@/hooks/useModal";
import ComponentCard from "../../common/ComponentCard";

export default function DefaultModal() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div>
      <ComponentCard title="Default Modal">
        <Button size="sm" onClick={openModal}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-150 p-5 lg:p-10">
          <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">Modal Heading</h4>

          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque euismod est quis mauris lacinia pharetra. Sed a ligulaac odio condimentum aliquet a nec nulla. Aliquam bibendum ex sitamet ipsum rutrum feugiat ultrices enim quam.</p>

          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque euismod est quis mauris lacinia pharetra. Sed a ligulaac odio.</p>

          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>Close</Button>

            <Button size="sm" onClick={handleSave}>Save Changes</Button>
          </div>
        </Modal>
      </ComponentCard>
    </div>
  );
}
