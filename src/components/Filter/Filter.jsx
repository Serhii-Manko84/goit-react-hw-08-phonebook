import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/filterSlice';
import css from '../Filter/Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const changeFilter = event => {
    dispatch(getFilterValue(event.target.value));
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        name="name"
        className={css.input}
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}
