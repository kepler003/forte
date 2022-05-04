import React, { useEffect, useState } from 'react';
import Card from '../../features/Card/Card';
import ListItem from '../../features/ListItem/ListItem';
import cls from './InternList.module.css';

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
    <Card className={cls.card}>
      <h1 className='heading'>Participants</h1>
      <ul className={cls.list}>
        {interns.map(({ id, name }) => (
          <ListItem key={id} id={id} name={name} />
        ))}
      </ul>
    </Card>
  );
};

export default InternList;
