import classes from '../../../utils/classes';
import cls from './Card.module.css';

const Card = ({ className, ...props }) => {
  return <div className={classes(className, cls.card)} {...props} />;
};

export default Card;
