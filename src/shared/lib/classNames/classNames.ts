type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, flag]) => Boolean(flag))
    .map(([className]) => className),
].join(' ');
