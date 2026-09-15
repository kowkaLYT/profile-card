import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100022556854946",
        icon: FaFacebookF,
    },
    {
        name: "GitHub",
        url: "https://github.com/kowkaLYT",
        icon: FiGithub,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/dasha_fedorchenko_",
        icon: FaInstagram,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dasha-fedorchenko-3b294a290/",
        icon: FaLinkedinIn,
    },
];

function About() {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#FF5C8D]">
                ABOUT
            </h4>

            <p className="leading-relaxed text-[#E9D8C8]">
                Computer Science student passionate about frontend development.
                I enjoy building interactive and responsive web experiences
                with React and modern web technologies. Currently learning,
                building and growing as a developer.
            </p>

            <ul className="mt-2 flex gap-6">
                {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3442] transition-all duration-300 hover:bg-[#732553] hover:shadow-[0_0_18px_rgba(255,92,141,0.25)]"
                            >
                                <Icon className="h-5 w-5 text-[#E9D8C8] transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default About;