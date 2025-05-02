import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = ({
    setNavTitle,
    setAnimateAboutBGClass,
    setNavTitleColor,
    setNavBarColor,
    setNavMainMenuBtnColor,
    setNavSocialColor,
}) => {

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
            setNavTitle("04 Testimonial");
            setTimeout(() => {
            setAnimateAboutBGClass("animate-scale-in-bg");
            }, 30);
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
          id="testimonial"
          ref={ref}
         className="relative w-svw flex flex-col justify-start items-center"
        > 
            <TestimonialCard
                Name = "Dr. Judith J. Azcarraga"
                Education = "Ph.D. Computer Science"
                Position = "Associate Professor at De La Salle University"
                Testimonial = {`"Maui was my student in a basic programming course and in an elective course called Affective Computing. He was also an intern of our research laboratory who helped improve our government funded research project on healthcare chatbot system.\n
                                 When he was my student in the elective course, I invited him to be my intern because I found him very eager to learn, well motivated, hardworking and with a positive attitude towards work.  When he became our intern, I asked him and his fellow intern to study how a chatbot works and the tools in developing such. With a task that requires self-study of tools and platforms, Maui was able to learn those in a few days including our current system. Maui worked both on the front-end and back-end development of the application. His team stress tested our system and meticulously identified and corrected the bugs even before the end of their internship. I am very grateful to have Maui as my intern because his team has greatly improved our current healthcare chatbot system which made our application ready for deployment in schools. \n\nThank you Maui!"`}
                Dp = "/DrAzcarraga.jpg"
                hrefLink = "https://adric.dlsu.edu.ph/index.php/technology-education-entertainment-empathy-design-te3d-house/"
            />
            
        </section>
    )
}