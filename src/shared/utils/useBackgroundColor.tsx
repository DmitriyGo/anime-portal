import colorModifier from './colorModifier';

const useBackgroundColor = (
  color: string,
  hoverAmount: number,
  activeAmount: number,
) =>
  [
    color,
    colorModifier(color, hoverAmount),
    colorModifier(color, activeAmount),
  ] as const;
export default useBackgroundColor;
