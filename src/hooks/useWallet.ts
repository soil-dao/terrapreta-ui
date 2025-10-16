import { useAccount, useConnect, useDisconnect } from 'wagmi';

const useWallet = () => {
    const { address, isConnected } = useAccount();
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();

    // For backward compatibility, we'll return account as the address
    const account = isConnected ? address : null;

    // Legacy web3 object - we'll need to handle this differently in components
    // For now, returning null since we're migrating to Wagmi
    const web3 = null;

    const connectWallet = async () => {
        // Get the first available connector (usually MetaMask/Injected)
        const connector = connectors.find(c => c.id === 'metaMask') || connectors[0];
        if (connector) {
            connect({ connector });
        }
    };

    const disconnectWallet = async () => {
        disconnect();
    };

    return { account, web3, connectWallet, disconnectWallet, isConnected };
};

export default useWallet;