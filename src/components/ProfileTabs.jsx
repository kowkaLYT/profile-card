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
                    type="button"
                    onClick={() => setActiveTab(id)}
                    className={`relative flex-1 py-3 text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${activeTab === id
                            ? "text-[#FF5C8D] bg-[#142030]"
                            : "text-slate-500 hover:text-[#E9D8C8] hover:bg-[#142030]/50"
                        }`}
                >
                    {label}

                    {activeTab === id && (
                        <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF5C8D]" />
                    )}
                </button>
            ))}
        </div>
    );
}

export default ProfileTabs;