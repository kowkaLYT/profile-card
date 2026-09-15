import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contacts() {
    const contactList = [
        {
            icon: FaMapMarkerAlt,
            text: "Sheffield City Centre, England, United Kingdom",
        },
        {
            icon: FaPhoneAlt,
            text: "07350915927",
        },
        {
            icon: FaEnvelope,
            text: "dashafedorchenko4@gmail.com",
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

                    return (
                        <div
                            key={item.text}
                            className="flex items-center gap-4"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E3442]">
                                <Icon className="h-4 w-4 text-[#8FAFC2]" />
                            </div>

                            <p className="text-sm leading-snug text-[#E9D8C8]">
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>

            <button className="mt-2 w-full rounded-xl bg-linear-to-r from-[#732553] to-[#FF5C8D] px-4 py-3 text-xs font-bold tracking-wider text-white shadow-lg transition-all hover:brightness-110 active:scale-95">
                WORK TOGETHER
            </button>
        </div>
    );
}

export default Contacts;