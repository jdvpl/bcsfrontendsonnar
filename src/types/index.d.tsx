export {};

declare global {
  interface Window {
    cv: any;
    makeVDDocumentWidget: (...args: any) => void;
    destroyVDDocumentWidget: () => void;
    destroyVDAliveWidget: () => void;
    makeVDAliveWidget: () => void;
  }
}
