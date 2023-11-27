const RegisterShape = () => {
  return (
    <div className="flex-col hidden gap-40 lg:flex">
      <div className="flex items-center justify-between">
        <svg
          className="-ml-20 w-28"
          tabIndex=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 580 580"
          role="img"
          aria-label="Circle"
        >
          <defs>
            <linearGradient
              id="gradient-orange-pink-horizontal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#f7bc28"></stop>
              <stop offset="100%" stopColor="#f93d66"></stop>
            </linearGradient>
          </defs>
          <path
            d="M290 0C129.8 0 0 129.8 0 290s129.8 290 290 290 290-129.8 290-290S450.2 0 290 0zm195.1 485.1c-25.4 25.4-54.9 45.3-87.7 59.2-34 14.4-70.2 21.7-107.4 21.7s-73.4-7.3-107.4-21.7c-32.9-13.9-62.4-33.8-87.7-59.2-25.3-25.4-45.3-54.9-59.2-87.7C21.3 363.4 14 327.3 14 290s7.3-73.4 21.7-107.4c13.9-32.9 33.8-62.4 59.2-87.7 25.4-25.3 54.9-45.3 87.7-59.2C216.6 21.3 252.7 14 290 14s73.4 7.3 107.4 21.7c32.9 13.9 62.4 33.8 87.7 59.2 25.4 25.4 45.3 54.9 59.2 87.7 14.4 34 21.7 70.2 21.7 107.4s-7.3 73.4-21.7 107.4c-13.9 32.9-33.8 62.4-59.2 87.7z"
            fill="url(#gradient-orange-pink-horizontal)"
          ></path>
        </svg>
        <img
          className="w-20 -rotate-45"
          src="/assets/images/shape/shape5.png"
          alt=""
        />
      </div>

      <div className="flex items-center gap-4">
        <img
          className="w-20 -ml-10"
          src="/assets/images/shape/shape6.png"
          alt=""
        />
        <h1 className="text-5xl tracking-wide font-extralight dark:text-white">
          Great to have you back!
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <svg
          className="w-20 rotate-45"
          tabIndex=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 50"
          role="img"
          aria-label="Pentagon"
        >
          <defs>
            <linearGradient
              id="gradient-purple-pink-horizontal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6d47d9"></stop>
              <stop offset="100%" stopColor="#f93d66"></stop>
            </linearGradient>
          </defs>
          <path
            d="M51.2,18l-24-17.6c-0.7-0.5-1.7-0.5-2.4,0L0.8,18c-0.7,0.5-1,1.4-0.7,2.2l9.2,28.4c0.3,0.8,1,1.4,1.9,1.4h29.7	c0.9,0,1.6-0.6,1.9-1.4l9.2-28.4C52.2,19.4,51.9,18.5,51.2,18z M39.4,46H12.6L4.3,20.3L26,4.5l21.7,15.8L39.4,46z"
            fill="url(#gradient-purple-pink-horizontal)"
          ></path>
        </svg>
        <img
          className="w-20 rotate-90"
          src="/assets/images/shape/shape4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterShape;
