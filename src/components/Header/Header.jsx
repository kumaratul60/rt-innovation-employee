const Header = ({ title }) => {
  return (
    <div className="bg-blue-500 flex flex-col h-[69px] md:h-auto sm:gap-10 justify-start p-4 w-full">
      <p className="w-auto font-sans text-2xl font-bold text-left text-white-A700">
        {title}
      </p>
    </div>
  );
};

export default Header;
