import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useValidator from '../../../hooks/useValidator';
import classes from '../../../utils/classes';
import Card from '../../features/Card/Card';
import Input from '../../ui/Input/Input';
import ButtonSecondary from '../../ui/ButtonSecondary/ButtonSecondary';
import Button from '../../ui/Button/Button';
import cls from './EditIntern.module.css';

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

  useEffect(() => {
    fetch(`http://localhost:3001/interns/${id}`, {
      headers: { 'Content-Type': 'application/json' },
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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const isInvalid =
      nameErrors.length ||
      emailErrors.length ||
      internshipStartErrors.length ||
      internshipEndErrors.length;

    if (isInvalid) return;

    fetch(`http://localhost:3001/interns/${id}`, {
      method: 'PUT',
      body: JSON.stringify(intern),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((err) => {
      console.log('Error while updating intern data');
      throw err;
    });
  };

  return (
    <>
      <div className={cls.nav}>
        <ButtonSecondary to='/' icon='arrowLeft'>
          Back to the list
        </ButtonSecondary>
      </div>
      <Card>
        <h1 className='heading'>Edit</h1>
        <form className={cls.form} onSubmit={onSubmitHandler}>
          <Input
            label='Full name *'
            type='text'
            name='name'
            boxClassName={cls.inputBox}
            value={intern.name || ''}
            onChange={onChangeHandler}
            error={nameErrors[0]}
          />
          <Input
            label='Email address *'
            type='email'
            name='email'
            boxClassName={cls.inputBox}
            value={intern.email || ''}
            onChange={onChangeHandler}
            error={emailErrors[0]}
          />
          <Input
            label='Internship start *'
            type='date'
            name='internshipStart'
            boxClassName={classes(cls.inputBox, cls.dateInputBox)}
            value={intern.internshipStart?.split('T')[0] || ''}
            onChange={onChangeHandler}
            error={internshipStartErrors[0]}
          />
          <Input
            label='Internship end *'
            type='date'
            name='internshipEnd'
            boxClassName={classes(cls.inputBox, cls.dateInputBox)}
            value={intern.internshipEnd?.split('T')[0] || ''}
            onChange={onChangeHandler}
            error={internshipEndErrors[0]}
          />
          <Button type='submit' className={cls.submitBtn}>
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default EditIntern;
