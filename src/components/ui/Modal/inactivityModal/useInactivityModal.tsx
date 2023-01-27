import { useEffect, useRef, useState } from 'react';
import { clearSessionStorage } from '../../../../utils/index';
import { useRouter } from 'next/router';
import { routes } from '../../../../routes/index';
import { useIdleTimer } from 'react-idle-timer';

export default function useInactivityModal() {
  const timeout = 180000;
  const [remaining, setRemaining] = useState(timeout);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);
  const [isIdle, setIsIdle] = useState(false);
  const intervalRef = useRef<number>();
  const router = useRouter();

  const onCloseModal = (): void => {
    reset();
    setIsOpen(false);
  };

  const closeProcess = (): void => {
    clearInterval(intervalRef.current);
    clearSessionStorage();
    router.push(routes.inactivityScreen);
  };

  const getOutToHome = (): void => {
    clearInterval(intervalRef.current);
    clearSessionStorage();
    router.push(routes.home);
  };

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  const { reset, pause, getRemainingTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const handleExit = async (exit?: boolean) => {
    pause();
    closeProcess();
  };

  useEffect(() => {
    setRemaining(getRemainingTime());
    setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);
    return () => {
      setRemaining(0);
    };
  }, []);

  useEffect(() => {
    if (remaining === 0 && isIdle) {
      setIsOpen(true);
      setTimer(30);
    }
  }, [remaining, isIdle]);

  useEffect(() => {
    if (timer === 0 && isOpen) {
      handleExit();
      return () => clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [setTimer, timer]);

  return {
    onCloseModal,
    closeProcess,
    getOutToHome,
    handleOnActive,
    handleOnIdle,
    reset,
    pause,
    getRemainingTime,
    handleExit,
    remaining,
    isOpen,
    timer,
    isIdle,
  };
}
