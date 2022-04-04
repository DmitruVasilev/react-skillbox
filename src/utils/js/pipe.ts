export function pipe<U>(...fns: Function[]) {
  return <E,>(init: any): U =>
    fns.reduce((prevValue, fn) => fn(prevValue), init);
}
