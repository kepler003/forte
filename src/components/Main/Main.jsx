import cls from './Main.module.css';

const Main = ({ className, ...props }) => {
  return <main className={[className, cls.main].join(' ')} {...props} />;
};

export default Main;
