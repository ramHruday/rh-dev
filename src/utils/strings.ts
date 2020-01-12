export function toTitleCase(s: string): string {
  return s
    .toLowerCase()
    .split('_')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ');
}
