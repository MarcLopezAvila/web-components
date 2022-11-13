export const getNodeAttributes = (node: HTMLElement) => node.getAttributeNames()
  .reduce((acc, name) => ({ ...acc, [name]: node.getAttribute(name) }), {});
