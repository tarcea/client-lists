import React, { useState, FC, FormEvent } from 'react';
import './styles/AddList.css';
import './styles/EditTodo.css';

const AddList: FC<{ saveList: Function }> = ({ saveList }) => {
  const initialState: Omit<IList, '_id' | 'done'> = { name: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await saveList({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className='add-list__form'>
      <div>
        <input
          className='add-list'
          autoComplete='off'
          value={formData.name}
          placeholder='add a new list'
          onChange={handleChange}
          type='text'
          id='name'
          required
        />
      </div>
      <div>
        <button className='add-list--create'>Create List</button>
      </div>
    </form>
  );
};

export default AddList;
