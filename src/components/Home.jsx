import { Link } from "react-scroll";
export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <img
        className=" w-full h-full object-cover dark:brightness-50"
        src="./img/large-tastfull-roti-o.jpg"
        alt="rotio-enak"
      ></img>
      <div className="flex-1 flex flex-col  max-w-[58.5rem] justify-center items-center lg:items-end  absolute top-60 md:top-96 md:right-10">
        <img
          className="w-[13rem] mb-5"
          src="./img/logobranding.png"
          alt="logo-rotio"
        />
        <h1 className="mb-[1.25rem] text-center md:text-right text-[1.875rem] text-[#FECD08] font-[500]">
          Dedikasi dalam Menyajikan Roti Berkualitas
        </h1>
        <p className="text-center dark:text-white md:text-right text-[1.5rem]">
          Kami memastikan kelezatan Roti anda hingga gigitan terakhir, disajikan
          dalam keadaan hangat dan langsung dari oven
        </p>
      </div>

      <Link
        className="w-16 h-10 absolute bottom-10 left-[45%] cursor-pointer hover:shadow-sm"
        spy={true}
        smooth={true}
        duration={500}
        to="test"
      >
        <img className="w-full" src="./arrow.svg" alt="" />
      </Link>
    </div>
  );
}
