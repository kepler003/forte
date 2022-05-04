import classes from '../../../utils/classes';
import ButtonSecondary from '../../ui/ButtonSecondary/ButtonSecondary';
import cls from './ListItem.module.css';

const ListItem = ({ id, name, ...props }) => {
  return (
    <li className={cls.li} {...props}>
      <span className={classes(cls.label, 'text-l')}>{name}</span>
      <ButtonSecondary
        to={`/interns/${id}`}
        icon='edit'
        className={cls.editBtn}
      >
        Edit
      </ButtonSecondary>
    </li>
  );
};

export default ListItem;
