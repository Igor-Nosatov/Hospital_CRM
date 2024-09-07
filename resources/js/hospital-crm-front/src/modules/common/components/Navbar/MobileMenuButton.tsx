import React from 'react';

interface MobileMenuButtonProps {
    isMobileMenuOpen: boolean;
    onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isMobileMenuOpen, onClick }) => {
    return (
        <button
            className="menu_btn ms-4"
            onClick={onClick}
            style={{
                backgroundColor: "#fff",
                border: "none",
                cursor: "pointer",
                margin: "0",
                outline: "none",
                height: "55px",
                width: "55px",
                marginTop: "24px",
                borderRadius: "10px",
                boxShadow: isMobileMenuOpen
                    ? "rgba(9, 30, 66, 0.35) 0px 6px 12px -2px, rgba(9, 30, 66, 0.15) 0px 0px 0px 4px" // Increased shadow when menu is open
                    : "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                transition: "box-shadow 0.3s ease-in-out"
            }}
        >
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M587 3776 c-49 -18 -64 -32 -89 -80 -37 -73 -13 -153 62 -203 l33
                    -23 1967 0 1967 0 33 23 c48 32 72 69 77 119 7 58 -23 118 -74 149 l-38 24
                    -1950 2 c-1613 2 -1956 0 -1988 -11z"/>
                    <path d="M575 2706 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 24 -7
                    160 -10 393 -8 l356 3 35 27 c94 71 82 214 -22 269 -32 18 -63 19 -390 19
                    -272 -1 -362 -4 -385 -14z"/>
                    <path d="M1954 2701 c-116 -53 -116 -224 0 -280 43 -21 44 -21 1314 -19 1266
                    3 1271 3 1298 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -32 21 -1299
                    23 -1223 3 -1274 2 -1313 -16z"/>
                    <path d="M560 1628 c-48 -33 -72 -70 -77 -120 -7 -58 23 -118 74 -149 l38 -24
                    1965 0 1965 0 38 24 c51 31 81 91 74 149 -5 50 -29 87 -77 120 l-33 22 -1967
                    0 -1967 0 -33 -22z"/>
                </g>
            </svg>
        </button>
    );
};

export default MobileMenuButton;
