import Image from "next/image";
function OneSkill({ imageSrc, name }) {
  return (
    <span className="flex items-center justify-center gap-2 container border-2 border-[#7c72c5] p-1.5 rounded-lg w-fit">
      <Image
        src={imageSrc}
        alt="logo"
        width={10}
        height={10}
        className="w-5 sm:w-6 h-full"
        unoptimized={true}
      />
      <p className=" text-gray-200 text-sm sm:text-md font-medium">{name}</p>
    </span>
  );
}

export default OneSkill;
