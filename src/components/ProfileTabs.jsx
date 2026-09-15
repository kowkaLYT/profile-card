function ProfileTabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "about", label: "ABOUT" },
        { id: "experience", label: "EXPERIENCE" },
        { id: "contact", label: "CONTACT" },
    ];

    return (
        <div className="flex border-t border-slate-700/50 mt-6 -mx-5 -mb-5 bg-[#0F172A]">
            {tabs.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 py-3 text-xs font-bold tracking-wide transition-all ${activeTab === id
                            ? "text-[#FF5C8D] border-t-2 border-[#FF5C8D] bg-[#142030]"
                            : "text-slate-500 hover:text-[#E9D8C8]"
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default ProfileTabs;