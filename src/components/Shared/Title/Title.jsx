const Title = ({ title, subTitle }) => {
  return (
    <div className="mb-10 text-center">
      <h4 className="text-2xl font-semibold dark:dark:text-light-100 ">
        {title}
      </h4>
      <p className="dark:text-dark-100">{subTitle}</p>
    </div>
  );
};

export default Title;
