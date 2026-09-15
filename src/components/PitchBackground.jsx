function PitchBackground() {
    return (
        <div className="pitch-bg">
            <div className="pitch-bg__glow pitch-bg__glow--blue" />
            <div className="pitch-bg__glow pitch-bg__glow--pink" />

            <svg
                className="pitch-bg__lines"
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M 40 720 L 40 500 L 240 500 L 240 360"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="1"
                    opacity="0.16"
                />

                <path
                    d="M 180 120 L 390 120 L 390 250"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="1"
                    opacity="0.14"
                />

                <path
                    d="M 1560 180 L 1560 390 L 1370 390 L 1370 520"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1"
                    opacity="0.16"
                />

                <circle
                    cx="240"
                    cy="360"
                    r="3"
                    fill="#ec4899"
                    opacity="0.55"
                />

                <circle
                    cx="1370"
                    cy="520"
                    r="3"
                    fill="#38bdf8"
                    opacity="0.55"
                />

                <circle
                    cx="390"
                    cy="250"
                    r="3"
                    fill="#ec4899"
                    opacity="0.45"
                />

                <path
                    id="ballPath"
                    d="M 90 790 Q 470 560 800 480 Q 1120 400 1510 110"
                    fill="none"
                    stroke="none"
                />

                <path
                    d="M 90 790 Q 470 560 800 480 Q 1120 400 1510 110"
                    fill="none"
                    stroke="#7dd3fc"
                    strokeWidth="1.5"
                    opacity="0.18"
                />

                <circle r="4" fill="#bae6fd">
                    <animateMotion dur="14s" repeatCount="indefinite">
                        <mpath href="#ballPath" />
                    </animateMotion>

                    <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur="14s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
}

export default PitchBackground;