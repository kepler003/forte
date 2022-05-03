import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useValidator from './hooks/useValidator';
import Input from './components/Input';

const EditIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState({});
  const nameErrors = useValidator(intern.name);
  const emailErrors = useValidator(intern.email, {
    type: 'email',
  });
  const internshipStartErrors = useValidator(intern.internshipStart);
  const internshipEndErrors = useValidator(intern.internshipEnd, {
    type: 'date',
    min: intern.internshipStart,
  });

  // Load intern from db
  useEffect(() => {
    fetch(`http://localhost:3001/interns/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((intern) => setIntern(intern))
      .catch((err) => {
        console.log('Error while fetching intern data');
        throw err;
      });
  }, [id]);

  const onChangeHandler = (e) => {
    const name = e.target.getAttribute('name');
    let value = e.target.value;

    if (name === 'internshipStart' || name === 'internshipEnd') {
      value = value
        ? new Date(value).toISOString().replace(':00.000Z', '+00Z')
        : '';
    }

    setIntern((prevIntern) => ({
      ...prevIntern,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavLink to='/'>Back to list </NavLink>
      <form>
        <Input
          label='Name'
          type='text'
          name='name'
          value={intern.name || ''}
          onChange={onChangeHandler}
          error={nameErrors[0]}
        />
        <Input
          label='Email'
          type='email'
          name='email'
          value={intern.email || ''}
          onChange={onChangeHandler}
          error={emailErrors[0]}
        />
        <Input
          label='Internship start'
          type='date'
          name='internshipStart'
          value={intern.internshipStart?.split('T')[0] || ''}
          onChange={onChangeHandler}
          error={internshipStartErrors[0]}
        />
        <Input
          label='Internship end'
          type='date'
          name='internshipEnd'
          value={intern.internshipEnd?.split('T')[0] || ''}
          onChange={onChangeHandler}
          error={internshipEndErrors[0]}
        />
        <Input type='submit' />
      </form>
    </div>
  );
};

export default EditIntern;
