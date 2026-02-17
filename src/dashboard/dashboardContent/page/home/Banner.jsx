const Banner = () => {
  return (
    <div
      className="border-2 border-gray-200 rounded-lg bg-[#202C4B] p-8 mt-2 mb-5 
                  flex flex-col lg:flex-row 
                  items-start lg:items-center 
                  lg:justify-between 
                  text-white gap-4"
    >
      <div>
        <h3 className="text-3xl font-bold mb-2">Welcome Back, Mr. Herald</h3>
        <p>Have a Good day at work</p>
      </div>

      <div className="lg:text-right">
        <p>Updated Recently on 15 Jun 2024</p>
      </div>
    </div>
  );
};

export default Banner;
