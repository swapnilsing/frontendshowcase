export const projects = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  subtitle: ['Landing', 'Dashboard', 'E‑commerce', 'Blog', 'Admin', 'Portfolio'][i % 6],
}));
