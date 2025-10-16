import React, { useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { config } from './config/wagmi';
import Navbar from './components/Navbar';
import PMALanding from './components/PMALanding';
import PMAMembershipAgreement from './components/PMAMembershipAgreement';
import './styles/App.css';

const queryClient = new QueryClient();

const customTheme: Theme = {
    blurs: {
        modalOverlay: 'blur(0px)',
    },
    colors: {
        accentColor: '#8b5a3c',
        accentColorForeground: '#ffffff',
        actionButtonBorder: 'rgba(139, 90, 60, 0.2)',
        actionButtonBorderMobile: 'rgba(139, 90, 60, 0.2)',
        actionButtonSecondaryBackground: '#f8f6f0',
        closeButton: '#8b5a3c',
        closeButtonBackground: 'rgba(139, 90, 60, 0.1)',
        connectButtonBackground: '#8b5a3c',
        connectButtonBackgroundError: '#dc2626',
        connectButtonInnerBackground: 'linear-gradient(135deg, #8b5a3c 0%, #a0673f 100%)',
        connectButtonText: '#ffffff',
        connectButtonTextError: '#ffffff',
        connectionIndicator: '#4a5d23',
        downloadBottomCardBackground: 'linear-gradient(135deg, #f8f6f0 0%, #f0ede3 100%)',
        downloadTopCardBackground: 'linear-gradient(135deg, #f8f6f0 0%, #f0ede3 100%)',
        error: '#dc2626',
        generalBorder: 'rgba(74, 93, 35, 0.2)',
        generalBorderDim: 'rgba(74, 93, 35, 0.1)',
        menuItemBackground: 'rgba(139, 90, 60, 0.05)',
        modalBackdrop: 'rgba(45, 55, 72, 0.4)',
        modalBackground: '#ffffff',
        modalBorder: 'rgba(74, 93, 35, 0.2)',
        modalText: '#2d3748',
        modalTextDim: 'rgba(45, 55, 72, 0.6)',
        modalTextSecondary: '#4a5d23',
        profileAction: 'rgba(139, 90, 60, 0.05)',
        profileActionHover: 'rgba(139, 90, 60, 0.1)',
        profileForeground: '#ffffff',
        selectedOptionBorder: '#8b5a3c',
        standby: '#4a5d23',
    },
    fonts: {
        body: 'Inter, Segoe UI, Helvetica Neue, Arial, sans-serif',
    },
    radii: {
        actionButton: '6px',
        connectButton: '6px',
        menuButton: '6px',
        modal: '12px',
        modalMobile: '12px',
    },
    shadows: {
        connectButton: '0 2px 8px rgba(139, 90, 60, 0.3)',
        dialog: '0 8px 32px rgba(45, 55, 72, 0.2)',
        profileDetailsAction: '0 2px 6px rgba(139, 90, 60, 0.15)',
        selectedOption: '0 2px 8px rgba(139, 90, 60, 0.2)',
        selectedWallet: '0 4px 12px rgba(139, 90, 60, 0.3)',
        walletLogo: '0 2px 6px rgba(139, 90, 60, 0.15)',
    },
};

const App: React.FC = () => {
    const [showAgreement, setShowAgreement] = useState(false);
    
    const handleStart = () => {
        setShowAgreement(true);
    };
    
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={customTheme}>
                    <div className="App">
                        <Navbar />
                        {!showAgreement ? (
                            <PMALanding onStart={handleStart} />
                        ) : (
                            <PMAMembershipAgreement />
                        )}
                    </div>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default App;