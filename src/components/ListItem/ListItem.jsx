import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import cls from './ListItem.module.css';

const ListItem = ({ id, name, ...props }) => {
  return (
    <li className={cls.li} {...props}>
      <span className={[cls.label, 'text-l'].join(' ')}>{name}</span>
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
