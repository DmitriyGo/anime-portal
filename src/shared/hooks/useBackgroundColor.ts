import modifiColor from '../utils/colorModifier';

const useBackgroundColor = (
  color: string,
  hoverAmount: number,
  activeAmount: number,
) =>
  [
    color,
    modifiColor(color, hoverAmount),
    modifiColor(color, activeAmount),
  ] as const;

export default useBackgroundColor;
