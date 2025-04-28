import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Contact = ({ setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      // Recolor (default)
      setNavTitleColor("text-[#F0F0F0]");
      setNavBarColor("#1A1A1A");
      setNavMainMenuBtnColor("bg-[#F0F0F0]");
      setNavSocialColor("");
      setNavTitle("04 Contact");
    }
  }, [
    inView,
    setNavTitle,
    setAnimateAboutBGClass,
    setNavBarColor,
    setNavMainMenuBtnColor,
    setNavSocialColor,
    setNavTitleColor,
  ]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative h-svh w-dvw top-0 flex justify-center items-center bg-fixed"
      style={{ backgroundImage: "url(/mainMenuBG_Invert_minimal.png)" }}
    >
      <div className="relative h-[70%] w-full bg-yellow-500 flex flex-col m-5">
        <div className="h-[20%] w-full bg-red-300 flex flex-col justify-center items-start">
          <p className="font-sans font-bold text-3xl">
            Name
          </p>
          <input className="h-full w-full rounded-full bg-orange-500 text-xl pl-5 pr-5"/>
        </div>
      </div>

    </section>
  );
};
