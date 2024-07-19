import Image from "next/image";
function OneSkill({ imageSrc, name }) {
  return (
    <span className="flex items-center justify-center gap-2 container border-2 border-[#7c72c5] p-2.5 rounded-lg w-fit">
      <Image
        src={imageSrc}
        alt="logo"
        width={15}
        height={15}
        className="w-6 sm:w-7 h-full"
        unoptimized={true}
      />
      <p className=" text-gray-200 text-sm sm:text-lg font-medium">{name}</p>
    </span>
  );
}

export default OneSkill;
