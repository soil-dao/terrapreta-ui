# SoilDAO PMA Membership Agreement Component

## Setup Instructions

1. **Update Contract Address**: In `src/components/PMAMembershipAgreement.tsx`, replace `YOUR_CONTRACT_ADDRESS_HERE` with your actual smart contract address:

```typescript
const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"; // Your actual contract address
```

2. **Contract Requirements**: Make sure your smart contract has the `join()` function with the following signature:

```solidity
/// @notice Join as a steward and mint your membership NFT
function join() external whenNotPaused {
    if (active[msg.sender]) revert AlreadyJoined(msg.sender);
    uint256 tokenId = uint256(uint160(msg.sender));
    active[msg.sender] = true;
    _safeMint(msg.sender, tokenId);
    emit StewardJoined(msg.sender, tokenId);
}
```

3. **Install Dependencies**: Make sure you have the required dependencies:

```bash
npm install web3 @types/react @types/react-dom
```

## Features

- **Complete Agreement Text**: Displays the full SoilDAO PMA Member Agreement
- **Scrollable Content**: Agreement text is contained in a scrollable area for better UX
- **Checkbox Validation**: Users must check "I've read and agree" before signing
- **Wallet Integration**: Automatically detects connected wallet
- **Smart Contract Integration**: Calls the `join()` function when user signs
- **Error Handling**: Handles cases like already joined members and transaction failures
- **Responsive Design**: Works on both desktop and mobile devices

## Usage

The component is automatically included in the main App component and will:

1. Display the complete membership agreement text
2. Show a checkbox for user to confirm they've read and agree
3. Display a "Sign" button that:
   - Is disabled until checkbox is checked and wallet is connected
   - Shows loading state while transaction is processing
   - Calls the smart contract's `join()` function
   - Provides feedback on success/failure

## Styling

The component uses custom CSS for styling. Key features:
- Earth-tone color scheme (greens and browns)
- Professional document styling
- Smooth animations and hover effects
- Mobile-responsive design

## Error Handling

The component handles several error scenarios:
- User not connected to wallet
- User hasn't agreed to terms
- Already joined as steward (AlreadyJoined error)
- General transaction failures
- Network issues

## Security Notes

- Always verify the contract address before deployment
- Ensure the contract has proper access controls and pause functionality
- Test thoroughly on testnets before mainnet deployment
- Consider adding additional validation for gas estimation