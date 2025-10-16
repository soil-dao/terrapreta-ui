import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletConnect: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '20px'
        }}>
            <ConnectButton />
        </div>
    );
};

export default WalletConnect;