import { Colors, Spacing } from '@/constants/theme';

describe('theme', () => {
  it('defines the same color keys for light and dark mode', () => {
    expect(Object.keys(Colors.light).sort()).toEqual(Object.keys(Colors.dark).sort());
  });

  it('increases spacing values monotonically', () => {
    expect(Spacing.one).toBeLessThan(Spacing.two);
    expect(Spacing.two).toBeLessThan(Spacing.three);
  });
});
