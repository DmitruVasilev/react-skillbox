import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2,15);

const assignId = assoc('id', generateRandomString());

const generateId = <O extends object>(obj: O) => assignId(obj);

