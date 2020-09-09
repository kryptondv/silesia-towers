import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/context';

const Checkbox = () => {
  const { handleChange, balcony } = useContext(GlobalContext);
  return (
    <div className="form-group form-group--checkbox">
      <input
        type="checkbox"
        checked={balcony}
        onChange={handleChange}
        name="balcony"
        id="balcony"
      />
      <label
        className="form-group__label form-group__label--checkbox"
        htmlFor="balcony"
      >
        Balkon
      </label>
    </div>
  );
}

export default Checkbox
