import { useState } from 'react';

export default function useRatingModal() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onOpenModal = (): void => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      document.getElementById('modal')?.classList.add('hidden');
    }, 1000);
  };
  return {
    isOpen,
    onOpenModal,
  };
}
