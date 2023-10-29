import React, { ChangeEvent } from "react";

type Props = {
  numberOfBeings: string;
  onChangeNumberOfBeings: (value: string) => void;
};


const NumberOfBeings: React.FC<Props> = ({numberOfBeings, onChangeNumberOfBeings}: Props) => {
  return (
    <input
      id='numberOfBeings'
      data-testid="numberOfBeings"
      type='number'
      value={numberOfBeings}
      onChange={(e) => onChangeNumberOfBeings(e.target.value)}
    />
  );
};

export default NumberOfBeings;
