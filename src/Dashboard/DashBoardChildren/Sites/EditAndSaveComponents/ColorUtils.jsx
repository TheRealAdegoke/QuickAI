export const rgbaToHex = ({ r, g, b }) => {
  const toHex = (x) => x.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const hexToRgba = (hex) => {
  if (hex.length === 4) {
    hex = hex.replace(/#([a-f\d])([a-f\d])([a-f\d])/i, (m, r, g, b) => {
      return `#${r}${r}${g}${g}${b}${b}`;
    });
  }

  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b, a: 1 };
};
