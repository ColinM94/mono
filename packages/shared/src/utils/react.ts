import * as React from 'react';

export const mergeReducer = <T>(state: T, update: Partial<T>): T => {
  return { ...state, ...update };
};

/** Wrapper for lazy importing with non default imports.
 * @param loader - Import clause.
 */
export const lazily = <T extends object, U extends keyof T>(loader: (x?: string) => Promise<T>) =>
  new Proxy({} as unknown as T, {
    get: (_target, componentName: string | symbol) => {
      if (typeof componentName === 'string') {
        return React.lazy(() =>
          loader(componentName).then((x) => ({
            default: x[componentName as U] as any as React.ComponentType<any>,
          }))
        );
      }
    },
  });
