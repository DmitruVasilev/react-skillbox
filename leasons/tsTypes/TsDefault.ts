// js types // typeof

const str = 'string'; // typeof str -> 'string'
const num = 2; // typeof num -> 'number'
const nan = NaN; // typeof nan -> 'number'
const obj = {}; // typeof obj -> 'object'
const arr = []; // typeof arr -> 'object'
const nul = null; // typeof nul -> 'object'
const sym = Symbol(); // typeof sym -> 'symbol'
const und = undefined; // typeof und -> 'undefined'
const _void = void 0; // typeof void -> 'undefined'
const bool = true; // typeof bool -> 'boolean'
const fn = () => ({}); // typeof fn -> 'function'

// 'some' + 2 -> 'some2'
// 'some' - 2 -> NaN
// '2' + 2 -> '22'
// '2' - 2 -> NaN


// Union type
const strOrNumber: string | number = '2';

// Type alias  ( переменная для типов )
type StrOrNumber = string | number

const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '2';
const strOrNumber4: StrOrNumber = '2';

// Array
const tsArray: number[] = [1,2,3];
const tsArrayGeneric: Array<number> = [1,2];

const tsArrayUnion: (number | string)[] = [1,2,3];
const tsArrayUnionGeneric: Array<number | string> = [1,2];

// Tuple - массив фиксированной длины, используется для useState

const myTuple: [number, string] = [1, '2'];


// Object
type MyObject = { a: number, b: string };
const myObject: MyObject = { a: 1, b: 'string' };

interface MyFirstInterface {
    readonly a: number; // только для чтения
    b: string;
    c?: number[]; // ? - some | undefined ( стараться не трогать его )
}

const myObject2: MyFirstInterface = { a: 1, b: 'string', c: [1] };

// Object.keys()

const ApiAnswer: ApiInterface = { key: 'as' , key1: 'es'};

interface ApiInterface {
    [N: string]: string; // N - ключ
}

enum Methods {
  add,
  sub
}

function calculate(method: Methods, left: number, rigft: number): number {
  switch (method){
  case Methods.add :
    return left + rigft;
  case Methods.sub :
    return left - rigft;
  }
}

const ArrowFn: TypeFn = () => 2;
const ArrowFn2: FnInterface = () => 2;

type TypeFn = () => number; // это предпочтительнее
// или же -
interface FnInterface {
  (a: number): void
}

// any
const some: any = '2'; // выключает типизацию, используется очень редко

// unknown
const some3: unknown = '2'; // используется если тип переменной пока не известен, далее переопределяется
// some3.concat()       - ошибка
if(typeof some3 === 'string'){
  some3.concat();
}

// never функция не должна завершиться
function neverFn(): never {
  throw new Error('error');
}

