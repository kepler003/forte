import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

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
        <label>Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='text' name='email' />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default EditIntern;
