import {
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

function Contacts() {
    const contactList = [
        {
            icon: FaMapMarkerAlt,
            text: "Chesterfield, England, United Kingdom",
            href: "https://www.google.com/maps/search/?api=1&query=Chesterfield",
        },
        {
            icon: FaEnvelope,
            text: "dashafedorchenko4@gmail.com",
            href: "mailto:dashafedorchenko4@gmail.com",
        },
        {
            icon: FaCode,
            text: "JavaScript · React · Next.js",
        },
    ];

    return (
        <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5C8D]">
                CONTACT
            </h4>

            <div className="space-y-4">
                {contactList.map((item) => {
                    const Icon = item.icon;
                    const isExternal = item.href?.startsWith("http");

                    if (!item.href) {
                        return (
                            <div
                                key={item.text}
                                className="flex items-center gap-4 p-1"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E3442]">
                                    <Icon className="h-4 w-4 text-[#8FAFC2]" />
                                </div>

                                <p className="text-sm leading-snug text-[#E9D8C8]">
                                    {item.text}
                                </p>
                            </div>
                        );
                    }

                    return (
                        <a
                            key={item.text}
                            href={item.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={
                                isExternal
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="group flex items-center gap-4 rounded-xl p-1 transition-all duration-300 hover:bg-[#1E3442]/50"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E3442] transition-all duration-300 group-hover:bg-[#732553]">
                                <Icon className="h-4 w-4 text-[#8FAFC2] transition-colors duration-300 group-hover:text-white" />
                            </div>

                            <p className="text-sm leading-snug text-[#E9D8C8] transition-colors duration-300 group-hover:text-white">
                                {item.text}
                            </p>
                        </a>
                    );
                })}
            </div>

            <a
                href="mailto:dashafedorchenko4@gmail.com?subject=Let's%20work%20together"
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#732553] to-[#FF5C8D] px-4 py-3 text-xs font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,92,141,0.25)] active:scale-95"
            >
                WORK TOGETHER
            </a>
        </div>
    );
}

export default Contacts;