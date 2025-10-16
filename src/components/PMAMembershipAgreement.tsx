import React, { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import '../styles/PMAMembershipAgreement.css';

const PMAMembershipAgreement: React.FC = () => {
    const [hasRead, setHasRead] = useState(false);
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const { writeContract, data: hash, isPending, error } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });

    // You'll need to replace this with your actual contract address
    const CONTRACT_ADDRESS = "0x742d35Cc6632C0532c718e7b07F4dC694C8E9DD6" as const; // Placeholder address
    
    // ABI for the join function
    const CONTRACT_ABI = [
        {
            "inputs": [],
            "name": "join",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ] as const;

    const handleSign = async () => {
        if (!hasRead) {
            alert('Please read and agree to the terms first');
            return;
        }

        if (!isConnected) {
            // Open the wallet connection modal instead of just showing an alert
            if (openConnectModal) {
                openConnectModal();
            } else {
                alert('Please connect your wallet first');
            }
            return;
        }

        try {
            writeContract({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'join',
            });
        } catch (error: any) {
            console.error('Error joining:', error);
            alert('Failed to join. Please try again.');
        }
    };

    // Handle transaction success
    React.useEffect(() => {
        if (isConfirmed) {
            alert('Successfully joined as a steward! Your membership NFT has been minted.');
        }
    }, [isConfirmed]);

    // Handle transaction error
    React.useEffect(() => {
        if (error) {
            console.error('Transaction error:', error);
            if (error.message.includes('AlreadyJoined')) {
                alert('You have already joined as a steward.');
            } else {
                alert('Failed to join. Please try again.');
            }
        }
    }, [error]);

    return (
        <div className="pma-container">
            <div className="pma-content">
                <h1>SoilDAO PMA Member Agreement</h1>
                
                <div className="agreement-text">
                    <p>I hereby accept the terms of Membership in the SoilDAO PMA (hereinafter Association), a private venue, original and exclusive jurisdiction Membership association. I agree with the following Declaration of Purpose and accept the terms expressed therein and in the Memorandum of Understanding:</p>

                    <h2>ARTICLE I. DECLARATION OF PURPOSE</h2>

                    <p>This Association of Members, forming a body politic, hereby declares that our mission is to become better stewards of Earth as a society living in peace under inherent law, to provide mutual benefits to all Members and to protect our Members' rights to enter into private agreement through our inherent right to freedom.</p>

                    <p>As Members, we affirm jurisdiction under inherent law as God's law. We regard the Constitution of the United States of America and the Declaration of Independence as conscious documents devised by men to protect our God granted unalienable rights, regardless of our Member's nationality or geolocation. This Agreement is entered to maintain and protect all birth rights, constitutional guarantees and freedom of choice over our lives and bodies for every Member of our Association.</p>

                    <p>We declare the basic right of all of our Members to elect delegates and officers from our number who could be expected to facilitate the actual governance of natural resources, the stewardship of land and assets, exchange of gifts and services among private Members and the management of Trust accounts.</p>

                    <p>We proclaim the freedom to choose and engage in private agreements that govern all activities necessary for the accomplishment of our purpose:</p>
                    <ul>
                        <li>To maintain and regenerate the health of our planet's topsoil,</li>
                        <li>To foster interdependence and become better Stewards of Earth and our Communities,</li>
                        <li>To establish sanctuaries for protecting and regenerating Earth's natural habitats,</li>
                    </ul>

                    <p>The Association is an auxiliary of The Temple of Soil, a faith-based organization, and will accept any natural man or woman who acts in accordance with the principles and policies of the association. The Association will provide a medium through which its individual Members may associate and interact for actuating and bringing to fruition the purposes herein declared.</p>

                    <h2>ARTICLE II. MEMORANDUM OF UNDERSTANDING</h2>

                    <p>This Agreement is between Members of the Association in private relationship. I have freely chosen to engage in this Association as a Natural Person, making my legal status in this Agreement a private Member of the Association.</p>

                    <p>The Association seeks to operate as a Decentralized Autonomous Organization and may utilize new technologies and digital assets to facilitate voting, governance and the exchange of resources and energy between its Members. I understand that any tokens created by the Association are for the sole purpose of facilitating the activities of the organization and only intended for private use between other Members of the association. Further, I understand that any such digital assets shall not be securities and shall have no par value in any statutory jurisdiction.</p>

                    <p>I acknowledge that the Association exists under Divine Jurisdiction as an auxiliary of the Temple of Soil and operates in the private domain, outside the reach of statutory authority or regulation by any Federal, State, or local agency or entity.</p>

                    <p>By entering into this private agreement, I agree that any concerns, misunderstandings, or perceived harms arising from participation in Association activities will be handled peacefully through private, binding mediation, rather than public legal channels. I voluntarily waive the right to initiate or participate in any statutory action or complaint process related to the Association or its Members.</p>

                    <p>All records, communications, and internal processes of the Association are private and protected under our ecclesiastical and trust-based framework. These will not be disclosed to external parties without the Member's written consent and only in alignment with the Association's privacy policies.</p>

                    <p>As a condition of membership, I agree to uphold confidentiality regarding any practices, methods, or frameworks shared within the Association. These are offered in trust for the benefit of our mission, and may not be reproduced, commercialized, or misrepresented outside the Association without written approval. This does not restrict Members from participating in aligned missions or organizations, so long as private information is not used unlawfully or without consent.</p>

                    <p>Violation of this agreement may result in termination of membership and a requirement to resolve any resulting harm through private mediation. All members agree that any claim, concern, or dispute shall be handled exclusively in private, with no recourse to statutory courts or third-party adjudication outside the terms of this agreement.</p>

                    <p>Any Member found to willfully misuse private information or cause harm to the Association may be subject to expulsion and required to make remedy as determined by private mediation, including but not limited to restitution of damages.</p>

                    <p>I agree to join the Association, a private Membership association under common law, whose Members seek to become better Stewards of Earth and to help each other achieve mutual benefits of living in harmony with Earth.</p>

                    <p>I enter into this agreement of my own free will, in the private capacity as a man/woman, without any pressure or coercion. I affirm that I do not represent any Local, State or Federal agency, governmental agency, non governmental agency or organization whose purpose is to regulate and approve products or services, or to carry out any mission of enforcement, entrapment or investigation to enforce a legal code, act or statute where no man or woman has been harmed. I understand that this will be considered a trespass on privacy and property and I will become immediately liable to pay compensation under this agreement, in the amount of $1,000,000.00 plus $100 per minute the trespass continues.</p>

                    <p>I have read and understood this document, and my questions have been answered fully to my satisfaction. I understand that I can withdraw from this agreement and terminate my membership in this association at any time, and that my membership can and will be revoked if I engage in abusive, violent, menacing, destructive or harassing behavior towards any other member of The Association. I agree to abide by these terms for a period of 7 years thereafter. This agreement supersedes any previous agreement.</p>

                    <p>I understand that the Membership donation entitles me to receive those benefits declared by the Association to be "general benefits" free of further charge. I agree I may be asked to contribute additional donations for any additional benefits that I may be offered by the Association.</p>

                    <p>I consent to receive email, sms and/or phone communications from SoilDAO and its members, and understand the Association will follow best practices in providing members with the means to opt-out of newsletters and notifications.</p>

                    <p>I hereby affirm and accept that I enter into this Agreement as a living man or woman, of sound mind and body, with full awareness and of my own free will. I have carefully read and understood the plain language of the foregoing Agreement.</p>

                    <p>I recognize this as a trust-based, sacred agreement in the private domain, and I commit to honoring its terms in good faith throughout my Membership and for a period of seven (7) years following any withdrawal or termination.</p>

                    <p>I accept this Agreement not only on my own behalf, but also with responsibility for any actions taken by those I may direct, represent, or assign in relation to my participation.</p>

                    <p><strong>SoilDAO PMA reserves the right to change this agreement without notice at any time.</strong></p>
                </div>

                <div className="agreement-actions">
                    <div className="checkbox-container">
                        <label>
                            <input
                                type="checkbox"
                                checked={hasRead}
                                onChange={(e) => setHasRead(e.target.checked)}
                            />
                            <span>I've read and agree to the terms</span>
                        </label>
                    </div>

                    <button
                        className={`sign-button ${!hasRead || (isConnected && (isPending || isConfirming)) ? 'disabled' : ''}`}
                        onClick={handleSign}
                        disabled={!hasRead || (isConnected && (isPending || isConfirming))}
                    >
                        {isPending ? 'Preparing...' : isConfirming ? 'Confirming...' : 
                         !isConnected ? 'Connect Wallet to Sign' : 'Sign'}
                    </button>

                    {!isConnected && (
                        <p className="wallet-notice">Please connect your wallet to sign the agreement</p>
                    )}

                    {hash && (
                        <div className="transaction-info">
                            <p>Transaction Hash: {hash}</p>
                            {isConfirming && <p>Waiting for confirmation...</p>}
                            {isConfirmed && <p>Transaction confirmed!</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PMAMembershipAgreement;