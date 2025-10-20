import { defaultSvg } from "./svgs/default";
import { dotGrid } from "./svgs/dot-grid";

export const svgTypes = {
  default: defaultSvg,
  dotGrid
};

export type SvgType = keyof typeof svgTypes;