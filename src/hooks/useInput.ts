import { ChangeEvent, useState } from "react";

export const useInput = (init: string = "") => {
  const [value, setValue] = useState<string>(init);

  type THandle = (e: ChangeEvent<HTMLInputElement>) => void;

  const handleValue: THandle = e => {
    setValue(e.target.value);
  };

  const resetValue: THandle = e => {
    setValue(init);
  };

  return [value, handleValue, resetValue] as const;
};
