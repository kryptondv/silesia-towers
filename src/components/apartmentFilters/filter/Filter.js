import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/context';

const SelectFilter = ({
  tag,
  label,
  name,
  value,
  children,
  type,
  addClass,
  min,
  max,
}) => {
  const { handleChange } = useContext(GlobalContext);
  const Element = tag;

  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={name}>
        {label}
      </label>
      <Element
        className={`form-group__form-control ${addClass}`}
        onChange={handleChange}
        value={value}
        name={name}
        id={name}
        type={type}
        min={min}
        max={max}
      >
        {children}
      </Element>
    </div>
  );
};

export default SelectFilter;
