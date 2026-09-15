import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function About() {
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

    return (
        <div className="flex flex-col gap-3 my-6">
            <h4 className="font-bold text-[#FF5C8D]">
                ABOUT
            </h4>

            <p className="text-[#E9D8C8] leading-relaxed">
                Computer Science student passionate about frontend development.
                I enjoy building interactive and responsive web experiences
                with React and modern web technologies. Currently learning,
                building and growing as a developer.
            </p>

            <ul className="flex gap-6 mt-2">
                {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3442] hover:bg-[#732553] transition-colors"
                            >
                                <Icon className="w-5 h-5 text-[#E9D8C8] group-hover:text-white transition-colors" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default About;