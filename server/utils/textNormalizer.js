export const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/%/g, " percent")
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};