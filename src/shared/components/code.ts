export const insertMaskCode = (code: string) => {
  return code.replace(/(\d{5})(\d)/, "$1-$2");
};
