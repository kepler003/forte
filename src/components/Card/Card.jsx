import cls from './Card.module.css';

const Card = ({ className, ...props }) => {
  return <div className={[className, cls.card].join(' ')} {...props} />;
};

export default Card;
