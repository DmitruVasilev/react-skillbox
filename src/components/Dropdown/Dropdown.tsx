import React from 'react';

import { useIsMounted } from "../../../leasons/reactBase/hooks";

import styles from './dropdown.css';

interface IDropdownProps {
  children: React.ReactNode;
  button: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const NOOP = () => ({});

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isMounted] = useIsMounted();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => {
    if(isMounted){
      isDropdownOpen ? onOpen() : onClose();
    }
  }, [isDropdownOpen]);

  const handleOpen = () => {
    if(isOpen === undefined){
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
