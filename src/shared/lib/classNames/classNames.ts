type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, flag]) => Boolean(flag))
      .map(([className]) => className),
  ].join(' ');
};
