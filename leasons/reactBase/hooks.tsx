/*
*  Хуки
*
*
*  */

import React, {useEffect, useState} from "react";

export function MyHooks({title} : {title: string}) {
  const [isMounted] = useIsMounted();

  useEffect(() => {
    console.log('---componentDidMount');
    console.log('---componentWillUpdate');
  });

  useEffect(() => {
    console.log('---componentDidMount');
    return () => {
      console.log('---componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    console.log('---componentWillReceiveProps');
  }, [title, isMounted]);

  return (
    <div>{title}</div>
  );
}

export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}
