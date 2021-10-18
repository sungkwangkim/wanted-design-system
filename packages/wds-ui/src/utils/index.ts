export function capitalize(name: any): string {
  if (typeof name !== 'string') {
    throw new Error('wds-ui: capitalize(name) expects a string argument.')
  }
  return name.charAt(0).toUpperCase() + name.slice(1)
}
