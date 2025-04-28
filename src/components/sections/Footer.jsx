import { LinkedIn, GitHubLight } from "developer-icons";

export const Footer = ({}) => {

    return (
        <footer className="relative h-[30%] w-full flex justify-center items-center text-md text-white bg-[#1A1A1A]">
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="relative w-full flex flex-row justify-center items-center space-x-5 ">
                    <div className="relative bg-[#2e2e2e] p-2 rounded-2xl">
                        <a
                            href="https://www.linkedin.com/in/mauries-lopez/"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <LinkedIn className="size-10 duration-300 cursor-pointer filter grayscale" />
                        </a>
                    </div>
                    <div className="relative bg-[#2e2e2e] p-2 rounded-2xl">
                        <a
                            href="https://github.com/mauries-lopez"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <GitHubLight
                            className={`size-10 duration-300 cursor-pointer filter grayscale`}
                        />
                        </a>
                    </div>
                </div>
                <p className="relative w-full text-center text-wrap mt-10 pl-10 pr-10 font-sans text-[#F0F0F0]">
                    &copy; 2025 Mauries Lopez. All rights reserved. Designed and developed from scratch by Mauries Lopez.
                </p>
            </div>
        </footer>
    )
}