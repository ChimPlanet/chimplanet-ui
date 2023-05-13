import React, { createContext, useContext } from "react";

export interface HeaderContextState {
  CategoryOverlayComponent?: React.FC<{ close?(): void }>;
  SearchTabComponent?: React.FC<{
    desktop: boolean;
    activeHeaderTab(): void;
    afterSearch(): void;
  }>;
  alternativeComponent?: JSX.Element;
  activeMobileMenu?(): void;
  hideMenuBar?(): boolean;
}

const headerContext = createContext<HeaderContextState | null>(null);

export const useHeader = () => {
  const state = useContext(headerContext);

  if (!state) {
    throw new Error("Error no Header Provider");
  }
  return state;
};

export const wrapHeaderContext = (Component: React.FC) => {
  const wrapping: React.FC<HeaderContextState> = (props) => (
    <headerContext.Provider value={props}>
      <Component />
    </headerContext.Provider>
  );

  wrapping.displayName = Component.displayName;

  return wrapping;
};
