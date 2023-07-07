interface CustomEvents {
  openmenu: CustomEvent<OpenMenuEvent>;
}
declare global {
  interface OpenMenuEvent {
    id: string;
  }
  interface Window {
    addEventListener<K extends keyof CustomEvents>(
      type: K,
      listener: (this: Window, ev: CustomEvents[K]) => void
    ): void;
    removeEventListener<K extends keyof CustomEvents>(
      type: K,
      listener: (this: Window, ev: CustomEvents[K]) => void
    ): void;
    dispatchEvent<K extends keyof CustomEvents>(ev: CustomEvents[K]): void;
  }
}
export {};
