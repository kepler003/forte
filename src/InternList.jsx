import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem/ListItem';

const InternList = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch('http://localhost:3001/interns');
      const interns = await response.json();
      setInterns(interns);
    };
    fetchInterns();
  }, []);

  return (
    <ul style={{ listStyle: 'none' }}>
      {interns.map(({ id, name }) => (
        <ListItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

export default InternList;
