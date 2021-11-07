export const nameCutter = (name: string): string => {
  const cutLength = 9;

  return name.split('').length > cutLength ? name.slice(0, cutLength + 1) + "..." : name;
};
