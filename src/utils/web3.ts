import Web3 from 'web3';

let web3: Web3 | null = null;

export const initWeb3 = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum as any);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.error("No Ethereum provider found. Install MetaMask.");
    }
};

export const getAccounts = async () => {
    if (web3) {
        const accounts = await web3.eth.getAccounts();
        return accounts;
    }
    throw new Error("Web3 is not initialized");
};

export const getNetworkId = async () => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        return networkId;
    }
    throw new Error("Web3 is not initialized");
};