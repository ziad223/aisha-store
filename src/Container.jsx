

const Container= ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[80px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
