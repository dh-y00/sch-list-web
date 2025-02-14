export function makeMap(str: string, expectsLowerCase?: boolean): (val: string) => boolean {
  const map: { [key: string]: boolean } = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? (val: string) => map[val.toLowerCase()]
    : (val: string) => map[val];
}