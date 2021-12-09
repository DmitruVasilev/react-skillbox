const myArray: Array<number> = [1,2,3];

interface MyArray<T> { // как аргументы у функций (<number>)
  [N: number]: T;

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
}

function identity<T>(arg: T): T{ // Данная функция может работать с любым типом, какой принял, такой и отдал
  return arg;
}

function getLen<T extends Array<any>>(arr: T): number{ // extends ограничивает типом
  return arr.length;
}

interface IValueWithType<T>{
  type: string;
  value: T
}

function withType<U>(arg: U): IValueWithType<U>{ // extends ограничивает типом
  return {
    type: typeof arg,
    value: arg
  };
}

// Встроенные generics
const myArray2: Array<number> = [1,2,3];

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}
// Omit выбрасывает ключи
const omittedObj: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  type: 'asd'
};
// Pick забирает ключи
const picked: Pick<IExample<string>, 'isEmpty'> = {
  isEmpty: false
};
// Partial принимает один аргумент (интерфейс) Делает всё что в интерфейсе не обязательным( применять редко )
const partial: Partial<IExample<object>> = {

};
