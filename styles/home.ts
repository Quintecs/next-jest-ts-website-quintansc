import { Button, Grid } from "@mui/material";
import Image from "next/image";
import styled, { keyframes } from "styled-components"

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

// ─── Hero ────────────────────────────────────────────────────────────────────

const HeroSection = styled(Grid)`
  display: flex;
  align-items: center;
  min-height: 88vh;
  padding: 0 60px;
  gap: 40px;
  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 48px 24px 32px;
    min-height: auto;
  }
`

const HeroContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }
`

const AvailableBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 187, 131, 0.1);
  border: 1px solid rgba(16, 187, 131, 0.3);
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #10BB83;
  margin-bottom: 24px;
  width: fit-content;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10BB83;
    animation: ${pulseAnimation} 2s infinite;
  }
`

const HeroGreeting = styled.span`
  font-size: 18px;
  color: #a0a0a8;
  margin-bottom: 4px;
  display: block;
`

const HeroName = styled.h1`
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 12px;
  background: linear-gradient(135deg, #ffffff 0%, #c0c0c8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const HeroRole = styled.h2`
  font-size: clamp(20px, 2.5vw, 30px);
  font-weight: 400;
  color: #10BB83;
  margin: 0 0 20px;
  letter-spacing: 0.02em;
`

const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #a0a0a8;
  max-width: 480px;
  margin: 0 0 36px;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`

const HeroCTAs = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

const PrimaryButton = styled(Button)`
  && {
    background: #10BB83;
    color: #0d1210;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 28px;
    border-radius: 8px;
    text-transform: none;
    letter-spacing: 0.02em;

    &:hover {
      background: #0ea872;
      box-shadow: 0 0 20px rgba(16, 187, 131, 0.35);
    }
  }
`

const SecondaryButton = styled(Button)`
  && {
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    padding: 12px 28px;
    border-radius: 8px;
    text-transform: none;

    &:hover {
      border-color: rgba(255, 255, 255, 0.45);
      background: rgba(255, 255, 255, 0.05);
    }
  }
`

const HeroImageWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    border-radius: 16px;
    filter: drop-shadow(0 0 60px rgba(16, 187, 131, 0.15));
  }

  @media (max-width: 800px) {
    justify-content: center;
    width: 100%;

    img {
      width: 100%;
      max-width: 340px;
      height: auto;
    }
  }
`

const ScrollHint = styled(Button)`
  && {
    border-left: 2px solid #10BB83;
    color: #a0a0a8;
    background: transparent;
    text-transform: none;
    font-size: 13px;
    padding: 8px 16px;

    &:hover {
      color: #ffffff;
      background: transparent;
    }
  }
`

// ─── Stats bar ───────────────────────────────────────────────────────────────

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1D1D1F;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 28px 60px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    padding: 28px 24px;
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const StatNumber = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #10BB83;
  line-height: 1;
`

const StatLabel = styled.span`
  font-size: 13px;
  color: #a0a0a8;
  margin-top: 6px;
  text-align: center;
`

const StatDivider = styled.div`
  width: 1px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 600px) {
    width: 48px;
    height: 1px;
  }
`

// ─── Section layout ──────────────────────────────────────────────────────────

const SectionWrapper = styled.section`
  width: 100%;
  padding: 72px 60px;

  @media (max-width: 800px) {
    padding: 56px 24px;
  }
`

const SectionTag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #10BB83;
  margin-bottom: 12px;
`

const SectionTitle = styled.h2`
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 700;
  margin: 0 0 12px;
  color: #ffffff;
`

const SectionSubtitle = styled.p`
  font-size: 15px;
  color: #a0a0a8;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 0 48px;
`

const SkillsGrid = styled(Grid)`
  gap: 24px;

  @media (max-width: 800px) {
    gap: 16px;
  }
`

// ─── Contact CTA ─────────────────────────────────────────────────────────────

const ContactSection = styled.section`
  position: relative;
  width: 100%;
  padding: 96px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, transparent 0%, rgba(16, 187, 131, 0.06) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  h2 {
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 700;
    margin: 0 0 16px;
  }

  p {
    font-size: 15px;
    color: #a0a0a8;
    line-height: 1.7;
    max-width: 520px;
    margin: 0 0 36px;
  }

  @media (max-width: 800px) {
    padding: 72px 24px;
  }
`

const ContactGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10BB83, transparent);
`

const AboutWrapper = styled.div`
  padding: 0 60px;
  width: 100%;

  @media (max-width: 800px) {
    padding: 0 24px;
  }
`

// ─── Legacy stubs (kept so old imports don't break) ──────────────────────────

const InfosContainer = styled.section``
const ImageConteiner = styled.div``
const TextImageContainer = styled.div``
const ButtonTextImageContainer = styled(Button)``
const BtnSeeMore = styled(Button)``
const TitleH2 = styled.h1``
const TitleH3 = styled.h3``
const TitleP = styled.a``
const GridInfos = styled(Grid)``
const GridHeadPageContent = styled(Grid)``
const ImageGrid = styled(Grid)``
const ContactContainerImage = styled(Image)``
const ContactContainer = styled(Grid)``

export {
  // Hero
  HeroSection, HeroContent, AvailableBadge, HeroGreeting,
  HeroName, HeroRole, HeroDescription, HeroCTAs,
  PrimaryButton, SecondaryButton, HeroImageWrapper, ScrollHint,
  // Stats
  StatsBar, StatItem, StatNumber, StatLabel, StatDivider,
  // Sections
  SectionWrapper, SectionTag, SectionTitle, SectionSubtitle, SkillsGrid,
  // Contact
  ContactSection, ContactGlow,
  // About
  AboutWrapper,
  // Legacy
  BtnSeeMore, TitleH2, GridHeadPageContent,
  InfosContainer, ImageConteiner,
  TextImageContainer, ButtonTextImageContainer, ImageGrid, ContactContainer, ContactContainerImage,
  GridInfos, TitleH3, TitleP
}
