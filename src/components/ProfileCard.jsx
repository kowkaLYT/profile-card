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
        <div className="w-110 bg-[#142030] rounded-4xl p-5 text-white overflow-hidden">
            <div
                className={`flex items-center transition-all duration-300 ${isCompactHeader
                        ? "flex-row gap-4 mb-5"
                        : "flex-col text-center mb-6"
                    }`}
            >
                <img
                    src={profileImg}
                    alt="Daria Fedorchenko"
                    className={`rounded-full transition-all duration-300 shrink-0 ${isCompactHeader
                            ? "w-24 h-24"
                            : "w-32 h-32 mb-3"
                        }`}
                />

                <div
                    className={
                        isCompactHeader ? "text-left" : "text-center"
                    }
                >
                    <h1 className="text-2xl font-bold tracking-tight text-[#FF5C8D]">
                        Daria Fedorchenko
                    </h1>

                    <h2 className="text-base font-medium text-[#E9D8C8]">
                        Frontend Developer
                    </h2>
                </div>
            </div>

            <div className="min-h-55">
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