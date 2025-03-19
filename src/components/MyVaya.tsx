"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { luxuryPalette, luxuryGradients } from "@/styles/luxury";
 // ✅ Fixed Import
import type { Savings } from "@/types"; // ✅ Fixed Import

const Dashboard = styled.div`
  background: ${luxuryPalette.cardBg};
  padding: 30px;
  border-radius: 16px;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid ${luxuryPalette.border};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  background: ${luxuryGradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SavingsText = styled.p`
  color: ${luxuryPalette.accent};
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProgressBarContainer = styled.div`
  margin: 30px 0;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  overflow: hidden;
  margin: 15px 0;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);

  & > div {
    height: 100%;
    background: ${luxuryGradients.gold};
    width: ${({ progress }) => Math.min(progress, 100)}%;
    transition: width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 30px;
  }
`;

const MilestoneText = styled.p`
  color: ${luxuryPalette.textMuted};
  font-size: 1em;
  margin-bottom: 20px;
`;

const ReferralText = styled.p`
  color: ${luxuryPalette.text};
  font-size: 1.1em;
  margin: 25px 0;
  font-weight: 500;
`;

const Button = styled.button`
  background: ${luxuryGradients.gold};
  border: none;
  padding: 12px 24px;
  color: #000;
  font-weight: 600;
  font-size: 1em;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
  }
`;

// ✅ Fixed: Use $visible instead of visible for styled-components
const Notification = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(44, 44, 44, 0.9);
  color: ${luxuryPalette.accent};
  padding: 12px 20px;
  border-radius: 30px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  transform: ${({ $visible }) => ($visible ? "translate(-50%, 0)" : "translate(-50%, 10px)")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
`;

const MyVaya: React.FC<{ savings: Savings }> = ({ savings }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [referralLink] = useState("https://vayatorch.com/referral"); // Replace with dynamic link later

  const { current, next } = savings.milestones;
  const progress = (savings.totalSaved / next) * 100;

  const handleShare = () => {
    navigator.clipboard.writeText(referralLink);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
  };

  return (
    <Dashboard>
      <Notification $visible={showNotification}>
        Referral link copied! Share with friends to earn your discount.
      </Notification>
      <Title>My VayaTorch</Title>
      <SavingsText>You saved ${savings.totalSaved} – Well done!</SavingsText>

      <ProgressBarContainer>
        <MilestoneText>Progress to next milestone</MilestoneText>
        <ProgressBar progress={progress}>
          <div />
        </ProgressBar>
        <MilestoneText>
          Next Milestone: ${next} – ${Math.round(next - savings.totalSaved)} to go!
        </MilestoneText>
      </ProgressBarContainer>

      <ReferralText>
        Refer a friend and get €25 off your next luxury holiday!
        {savings.referrals > 0 && ` You've already referred ${savings.referrals} friends.`}
      </ReferralText>

      <Button onClick={handleShare}>Share Holiday with Friends</Button>
    </Dashboard>
  );
};

export default MyVaya;

