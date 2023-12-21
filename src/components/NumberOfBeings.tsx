import React, { ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  numberOfBeings: string;
  onChangeNumberOfBeings: (value: string) => void;
  validate: (value: string) => Array<string>;
};


const NumberOfBeings: React.FC<Props> = ({numberOfBeings, onChangeNumberOfBeings, validate}: Props) => {

  const errorMessage = validate(numberOfBeings);
  const isErrorMessageDefined = validate(numberOfBeings) !== undefined ? errorMessage : [];

  return (
    <>
      <input
        id='numberOfBeings'
        data-testid="numberOfBeings"
        type='number'
        value={numberOfBeings}
        onChange={(e) => onChangeNumberOfBeings(e.target.value)}
        min="1000000000" // Set the minimum value
      />
      { isErrorMessageDefined.length !== 0 &&
        <ErrorMessage errorMessage={isErrorMessageDefined}/>
      }
    </>
  );
};

export default NumberOfBeings;
