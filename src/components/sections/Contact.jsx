import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com'

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
      setNavTitle("05 Contact");
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then((result) => {
      alert("Message Sent!");
      setFormData({name: "", email: "", message: ""});
    }).catch(() => {
      alert("Oops! Something went wrong. Please try again.")
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative h-svh w-dvw top-0 flex justify-center items-center bg-fixed"
    >
      <div className="relative h-[70%] w-[80%] flex flex-col pl-3 pr-3">
        <p className="font-sans font-bold text-3xl text-[#F0F0F0] pb-5">
          Send A Message
        </p>
        <form className="h-full w-full" onSubmit={handleSubmit}>
          <div className="h-[20%] w-full flex flex-col justify-center items-start">
            <p className="font-sans font-bold text-xl text-[#F0F0F0] pb-2">
            Name
            </p>
            <input 
              className="h-[50%] w-full rounded-xl bg-[#1A1A1A] text-md text-[#F0F0F0] pl-5 pr-5 border-[#F0F0F0] border-2 transition duration-300 focus:outline-none focus:border-yellow-600"
              type="name"
              id="name"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="h-[20%] w-full flex flex-col justify-center items-star">
            <p className="font-sans font-bold text-xl text-[#F0F0F0] pb-2">
              Email
            </p>
            <input 
              className="h-[50%] w-full rounded-xl bg-[#1A1A1A] text-md text-[#F0F0F0] pl-5 pr-5 border-[#F0F0F0] border-2 transition duration-300 focus:outline-none focus:border-yellow-600"
              type="email"
              id="email"
              name="email"
              required
              placeholder="An email for my response."
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="h-[50%] w-full flex flex-col justify-center items-star">
            <p className="font-sans font-bold text-xl text-[#F0F0F0] pb-2">
              Message
            </p>
            <textarea
              className="h-full w-full rounded-xl bg-[#1A1A1A] text-md text-justify text-wrap text-[#F0F0F0] p-5 border-[#F0F0F0] border-2 transition duration-300 focus:outline-none focus:border-yellow-600"
              type="message"
              id="message"
              name="message"
              required
              placeholder="..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <div className="h-[10%] w-full flex justify-center items-center mt-15">
            <button 
              type="submit"
              className="relative h-full w-[40%] bg-[#F0F0F0] rounded-full text-sm font-bold transition duration-300 hover:bg-yellow-600 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>  
      </div>
    </section>
  );
};
