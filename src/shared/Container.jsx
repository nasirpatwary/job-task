
const Container = ({children, className=""}) => {
  return <div className={`${className} container mx-auto px-6`}>{children}</div>;
};

export default Container;
