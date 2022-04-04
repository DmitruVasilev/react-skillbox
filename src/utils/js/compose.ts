// eslint-disable-next-line @typescript-eslint/ban-types
export function compose<U>(...fns: Function[]) {
  return <E,>(init: any): U =>
    fns.reduceRight((prevValue, fn) => fn(prevValue), init);
}
