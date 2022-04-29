export const mergeStyle = (...styles: any[]) =>
  styles.reduce((p, c) => ({ ...(p || {}), ...(c || {}) }), {});
