function CardRight({ item }) {
  return (
    <div className="w-full flex justify-end">
      <div className="w-[100%] sm:w-[50%] h-full flex flex-row-reverse">
        <div
          className="w-full p-6 bg-[rgb(16,14,36)] border-2 border-blue-500 rounded-lg"
          style={{ boxShadow: "0px 0px 3px rgba(0,0,255,0.8)" }}
        >
          <h1 className="text-white text-lg sm:text-xl font-semibold mb-1">
            {item?.nameOfSchool}
          </h1>
          <p className="text-blue-400 text-xs sm:text-sm font-bold">
            {item?.place}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 font-semibold">
            {item?.date}
          </p>

          <p className="text-white text-xs sm:text-sm mt-2">
            {item?.description}
          </p>

          {item?.diplomas.length && (
            <div className="text-white text-xs sm:text-sm mt-4 flex items-center">
              <div className="w-0 h-0 border-[0.3rem] border-transparent border-l-blue-300"></div>
              <span className="text-blue-300 font-medium underline-blue-300 underline">
                {" "}
                Obtained diplomas:
              </span>
            </div>
          )}

          {item?.diplomas.length &&
            item?.diplomas.map((element, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-xs sm:text-sm font-medium "
                >
                  {element}
                </li>
              );
            })}
        </div>
        <div className="flex w-12 relative flex-row-reverse">
          <div className="w-0 h-0 border-[0.45rem] border-transparent border-r-blue-500 translate-y-12"></div>
          <div
            className=" w-14 h-14  border-[4px] border-blue-800 rounded-full absolute top-0 left-0 -translate-x-1/2 translate-y-1/2"
            style={{
              backgroundImage: `url(${item?.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <span className="w-24 h-14 absolute translate-y-1/2 right-full -translate-x-12 sm:flex sm:justify-center sm:items-center hidden text-blue-300  font-semibold">
            {item?.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardRight;
