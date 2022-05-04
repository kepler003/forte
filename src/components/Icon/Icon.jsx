import cls from './Icon.module.css';

const Icon = ({ icon, color, className, ...props }) => {
  const classNames = [className, cls.box].join(' ');

  const SVGS = {
    arrowLeft: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L3.41421 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H3.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z'
          fill={color ? color : 'currentColor'}
        />
      </svg>
    ),
    alert: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 22C4.9 22 0 17.1 0 11C0 4.9 4.9 0 11 0C17.1 0 22 4.9 22 11C22 17.1 17.1 22 11 22ZM11 2C6 2 2 6 2 11C2 16 6 20 11 20C16 20 20 16 20 11C20 6 16 2 11 2ZM12 11V7C12 6.4 11.6 6 11 6C10.4 6 10 6.4 10 7V11C10 11.6 10.4 12 11 12C11.6 12 12 11.6 12 11ZM12 15C12 14.4 11.6 14 11 14C10.4 14 10 14.4 10 15C10 15.6 10.5 16 11 16C11.5 16 12 15.6 12 15Z'
          fill={color ? color : 'currentColor'}
        />
      </svg>
    ),
    edit: (
      <svg
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 20H11C10.4 20 10 19.6 10 19C10 18.4 10.4 18 11 18H20C20.6 18 21 18.4 21 19C21 19.6 20.6 20 20 20ZM2.20002 20L6.20002 19C6.40002 19 6.50002 18.9 6.70002 18.7L19.2 6.2C19.5 5.9 19.7 5.6 19.9 5.2C20 4.8 20.1 4.4 20.1 4C20.1 3.6 20 3.2 19.9 2.8C19.8 2.4 19.5 2.1 19.2 1.8C18.9 1.5 18.6 1.3 18.2 1.1C17.1 0.599998 15.7 0.899998 14.8 1.8L2.30002 14.3C2.20002 14.4 2.10002 14.6 2.00002 14.8L1.00002 18.8C0.900024 19.1 1.00002 19.5 1.30002 19.7C1.50002 19.9 1.70002 20 2.00002 20C2.10002 20 2.20002 20 2.20002 20ZM16.2 3.2C16.5 2.9 17 2.8 17.4 3C17.5 3.1 17.7 3.1 17.8 3.2C17.9 3.3 18 3.4 18 3.6C18.1 3.7 18.1 3.9 18.1 4C18.1 4.1 18.1 4.3 18 4.4C17.9 4.5 17.9 4.7 17.8 4.8L5.50002 17.1L3.40002 17.6L3.90002 15.5L16.2 3.2Z'
          fill={color ? color : 'currentColor'}
        />
      </svg>
    ),
    calendar: (
      <svg
        width='20'
        height='22'
        viewBox='0 0 20 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 0C6.55228 0 7 0.447715 7 1V2H13V1C13 0.447715 13.4477 0 14 0C14.5523 0 15 0.447715 15 1V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H5V1C5 0.447715 5.44772 0 6 0ZM5 4H3C2.44772 4 2 4.44772 2 5V8H18V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4ZM18 10H2V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V10Z'
          fill={color ? color : 'currentColor'}
        />
      </svg>
    ),
    loader: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 6C10.4 6 10 5.6 10 5V1C10 0.4 10.4 0 11 0C11.6 0 12 0.4 12 1V5C12 5.6 11.6 6 11 6ZM12 21V17C12 16.4 11.6 16 11 16C10.4 16 10 16.4 10 17V21C10 21.6 10.4 22 11 22C11.6 22 12 21.6 12 21ZM7.5 7.5C7.9 7.1 7.9 6.5 7.5 6.1L4.6 3.2C4.2 2.8 3.6 2.8 3.2 3.2C2.8 3.6 2.8 4.2 3.2 4.6L6 7.4C6.2 7.6 6.5 7.7 6.7 7.7C6.9 7.7 7.3 7.7 7.5 7.5ZM18.8 18.8C19.2 18.4 19.2 17.8 18.8 17.4L16 14.6C15.6 14.2 15 14.2 14.6 14.6C14.2 15 14.2 15.6 14.6 16L17.4 18.8C17.6 19 17.9 19.1 18.1 19.1C18.3 19.1 18.6 19 18.8 18.8ZM6 11C6 10.4 5.6 10 5 10H1C0.4 10 0 10.4 0 11C0 11.6 0.4 12 1 12H5C5.6 12 6 11.6 6 11ZM22 11C22 10.4 21.6 10 21 10H17C16.4 10 16 10.4 16 11C16 11.6 16.4 12 17 12H21C21.6 12 22 11.6 22 11ZM4.6 18.8L7.4 16C7.8 15.6 7.8 15 7.4 14.6C7 14.2 6.4 14.2 6 14.6L3.2 17.4C2.8 17.8 2.8 18.4 3.2 18.8C3.4 19 3.7 19.1 3.9 19.1C4.1 19.1 4.4 19 4.6 18.8ZM15.9 7.5L18.7 4.7C19.1 4.3 19.1 3.7 18.7 3.3C18.3 2.9 17.7 2.9 17.3 3.3L14.5 6.1C14.1 6.5 14.1 7.1 14.5 7.5C14.7 7.7 15 7.8 15.2 7.8C15.4 7.8 15.8 7.7 15.9 7.5Z'
          fill={color ? color : 'currentColor'}
        />
      </svg>
    ),
  };

  if (!(icon in SVGS)) {
    throw new Error(`Icon ${icon} was not found.`);
  }

  return (
    <span className={classNames} {...props}>
      {SVGS[icon]}
    </span>
  );
};

export default Icon;
