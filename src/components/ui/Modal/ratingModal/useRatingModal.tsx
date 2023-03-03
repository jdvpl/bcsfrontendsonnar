import { useState, useEffect } from 'react';

export default function useRatingModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenModal = (): void => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      document.getElementById('modal')?.classList.add('hidden');
    }, 1000);
  };
  useEffect(() => {
    document.getElementById('modal')?.classList.add('hidden');
    setTimeout(() => {
      document.getElementById('modal')?.classList.remove('hidden');
      setIsOpen(true);
    }, 5000);
  }, []);
  return {
    isOpen,
    onOpenModal,
    setIsOpen
  };
}
