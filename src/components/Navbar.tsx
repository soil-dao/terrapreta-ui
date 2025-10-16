import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img 
                    src="https://www.soildao.io/wp-content/uploads/2024/07/Asset-1.png" 
                    alt="SoilDAO Logo" 
                    className="navbar-logo"
                />
            </div>
            <div>
                <ConnectButton />
            </div>
        </nav>
    );
};

export default Navbar;