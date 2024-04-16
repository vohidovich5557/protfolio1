import React from "react";

export const useTogglle = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const togglle = () => setIsOpen(!isOpen);
  return { close, isOpen, open, togglle };
};
