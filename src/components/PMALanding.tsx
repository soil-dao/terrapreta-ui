import React from 'react';
import '../styles/PMALanding.css';

interface PMALandingProps {
    onStart: () => void;
}

const PMALanding: React.FC<PMALandingProps> = ({ onStart }) => {
    return (
        <div className="pma-landing">
            <div className="pma-landing-container">
                <div className="logo-container">
                    <img 
                        src="https://www.soildao.io/wp-content/uploads/2024/07/Asset-1.png" 
                        alt="SoilDAO Logo" 
                        className="landing-logo"
                    />
                </div>
                
                <div className="content-container">
                    <div className="title-section">
                        <h2 className="pma-subtitle">PMA</h2>
                        <h1 className="pma-title">Member Agreement</h1>
                        <p className="pma-subtitle-text">(A Private Contract Membership Association)</p>
                    </div>
                    
                    <div className="description-section">
                        <p className="description-text">
                            A Private Membership Association (PMA) is a protected structure that allows us to operate privately, lawfully, and outside of corporate or government interference.
                        </p>
                        
                        <p className="description-text">
                            By signing the PMA, you become a member of the SoilDAO community—a sovereign network rooted in shared principles, trust, and stewardship.
                        </p>
                        
                        <p className="description-text">
                            This agreement gives you access to member-only content, events, tools, and regenerative opportunities while helping us maintain integrity, privacy, and alignment with Natural Law.
                        </p>
                    </div>
                    
                    <button className="start-button" onClick={onStart}>
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PMALanding;