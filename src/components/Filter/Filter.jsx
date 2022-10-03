import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <>
      <label htmlFor="filter">Find a contact by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
};
