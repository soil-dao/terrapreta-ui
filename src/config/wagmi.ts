import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'PMA Membership Agreement',
  projectId: '2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e', // Using a placeholder, replace with actual project ID
  chains: [arbitrum], // Using Arbitrum One
  ssr: false,
});