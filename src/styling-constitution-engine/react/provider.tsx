import React, { createContext, useContext, useMemo } from 'react';
import { Constitution } from '../core/types';
import { StyleEngine, createStyleEngine } from '../core/style-engine';
import { designConstitution } from '../core/constitution';

interface ConstitutionalContextType {
  engine: StyleEngine;
  strict: boolean;
}

const ConstitutionalContext = createContext<ConstitutionalContextType | null>(null);

interface ConstitutionalProviderProps {
  children: React.ReactNode;
  constitution?: Constitution;
  strict?: boolean;
}

export const ConstitutionalProvider: React.FC<ConstitutionalProviderProps> = ({
  children,
  constitution = designConstitution,
  strict = true,
}) => {
  const engine = useMemo(() => createStyleEngine(constitution, strict), [constitution, strict]);

  return (
    <ConstitutionalContext.Provider value={{ engine, strict }}>
      {children}
    </ConstitutionalContext.Provider>
  );
};

export const useConstitutionalContext = () => {
  const context = useContext(ConstitutionalContext);
  if (!context) {
    // Fallback if no provider is present (e.g. in tests or simple usage)
    // We create a default engine instance
    return {
      engine: createStyleEngine(designConstitution, true),
      strict: true
    };
  }
  return context;
};
