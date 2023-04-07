import modifyColor from './colorModifier';

const useBackgroundColor = (
  color: string,
  hoverAmount: number,
  activeAmount: number,
) =>
  [
    color,
    modifyColor(color, hoverAmount),
    modifyColor(color, activeAmount),
  ] as const;
export default useBackgroundColor;
