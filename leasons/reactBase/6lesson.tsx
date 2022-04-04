/*
* 1. карирование + функция высшего порядка ( Возвращает или принимает функцию)
*
* Отложенное вызов функции
*
* add(1)(2)
* const add = (leftSide) => (rightSide) => leftSide + rightSide
*
* ОДНА ФУНКЦИЯ ОДИН ФАЙЛ В УТИЛЯХ
*
*  */

import React from "react";
import {preventDefault} from "../../src/utils/React/preventDefault";
import {stopPropagation} from "../../src/utils/React/stopPropagation";

// const withIdKey = withKey('id');
//
// function Feed(props : { blocks : IBlockProps[] }) {
//   return (
//     <div>
//       {props.blocks.map(withIdKey(Block))}
//     </div>
//   );
// }
//
// interface IBlockProps {
//     title: string;
//     id: string;
// }
//
// function Block(props : IBlockProps) {
//   return <div>{props.title}</div>;
// }
//
// function withKey(key ?: string) {
//   return <E, T extends React.ComponentType<E>>(component: T) =>
//     (props: E, index: number) =>
//       React.createElement(
//         component,
//         { ...props, key: key ? props[key as keyof E] : index },
//         []
//       );
// }


function Input({ value, onChange } : { onChange: (value: string) => void, value: string }) {
  return <input value={value} onChange={getValue(onChange)} />;
}

function Checkbox({ value, onChange } : { onChange: (value: boolean) => void, value: boolean }) {
  return <input type="checkbox" checked={value} onChange={getChecked(onChange)} />;
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => <E extends ((t: T[K]) => void)>(fn: E) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

//

function NotStandartLink(props : any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hi</a>
  );
}

// const preventAll
