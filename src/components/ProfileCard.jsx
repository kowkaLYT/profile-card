import { useState } from "react";
import profileImg from "../assets/img-profile.png";
import ProfileTabs from "./ProfileTabs";
import About from "./About";
import Contacts from "./Contacts";
import Experience from "./Experience";

function ProfileCard() {
    const [activeTab, setActiveTab] = useState("about");

    const isCompactHeader =
        activeTab === "contact" || activeTab === "experience";

    return (
        <div className="w-full rounded-4xl bg-[#142030] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
            <div
                className={`flex items-center transition-all duration-500 ${isCompactHeader
                    ? "flex-row gap-4 mb-5"
                    : "flex-col text-center mb-6"
                    }`}
            >
                <img
                    src={profileImg}
                    alt="Daria Fedorchenko"
                    className={`shrink-0 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.18)] transition-all duration-500 ease-out ${isCompactHeader
                        ? "h-24 w-24"
                        : "h-32 w-32 mb-3"
                        }`}
                />

                <div
                    className={`transition-all duration-500 ${isCompactHeader
                        ? "text-left"
                        : "text-center"
                        }`}
                >
                    <h1 className="text-2xl font-bold tracking-tight text-[#FF5C8D]">
                        Daria Fedorchenko
                    </h1>

                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#8FAFC2]">
                        Frontend Developer
                    </h2>
                </div>
            </div>

            <div
                key={activeTab}
                className="min-h-60 tab-content"
            >
                {activeTab === "about" && <About />}
                {activeTab === "experience" && <Experience />}
                {activeTab === "contact" && <Contacts />}
            </div>

            <ProfileTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    );
}

export default ProfileCard;