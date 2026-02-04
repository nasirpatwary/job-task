
const Container = ({children, className="", ref}) => {
  return <div ref={ref} className={`${className} container mx-auto px-6`}>{children}</div>;
};

export default Container;
