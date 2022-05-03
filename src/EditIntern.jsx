import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Input from './components/Input';

const EditIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState({});

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

  return (
    <div>
      <NavLink to='/'>Back to list </NavLink>
      <form>
        <Input label='Name' type='text' name='name' />
        <Input label='Email' type='email' name='email' />
        <Input label='Internship start' type='date' name='internshipStart' />
        <Input label='Internship end' type='date' name='internshipEnd' />
        <Input type='submit' />
      </form>
    </div>
  );
};

export default EditIntern;
