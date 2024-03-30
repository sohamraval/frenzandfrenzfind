import Clouds from "@/components/Clouds";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Navbar";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '../images/arrow.inline.svg';

export default function Airdrop() {


  return (
    <div>
      <div className="app-parent">
        <div className="min-h-screen pt-10 flex flex-col">
          <Clouds />
          <Nav activeTab={'airdrop'} />
          <MobileNav activeTab={'airdrop'} />
          <div className="pt-16 z-[2] px-5">
            <h2 className="font-krona text-[16px] md:text-[40px] leading-[24px] md:leading-[48px] teacking-[-0.32px] md:tracking-[-0.8px] text-white text-center mx-auto mb-10">Frequently Asked <br /> Questions</h2>
            <div className="max-w-[680px] w-full flex flex-col gap-6 mx-auto pb-[128px]">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is Fren Find?
                </AccordionSummary>
                <AccordionDetails>
                  Fren Find is a fun pre-launch game we created to reward true connoisseurs of degen history in a cool way. We're airdropping 10% of our supply to the top scorers.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What's the difference between the Airdrop and the Frenzdrop?
                </AccordionSummary>
                <AccordionDetails>
                  The Frenzdrop is for the top scores on the Fren Find game. The Airdrop is a separate drop for content creators and early depositors.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is the scale of Airdrop 1?
                </AccordionSummary>
                <AccordionDetails>
                  A substantial 40% of the $FRENZ supply is dedicated to Airdrop. Dive deeper into our tokenomics by visiting our Vision.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Who qualifies for Airdrop 1?
                </AccordionSummary>
                <AccordionDetails>
                  Airdrop  slated for April 2nd, welcomes participants who deposited to Solana before April 1st at 5pm ET, early access referrers, and those impacted by Risk on Solana.
                  <br /><br />
                  Airdrop , an engaging contest with 30,000,000 $FRENZ up for grabs, incentivizes creators to produce content. More views translate to more $FRENZ.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  How do I claim my airdrop?
                </AccordionSummary>
                <AccordionDetails>
                  Visit Frenzcion.com/airdrop and follow these steps:
                  <br /><br />
                  Follow us on Twitter. <br />
                  Join our Telegram group.<br />
                  Connect your wallet.<br />
                  Claim your airdrop.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What's the claim deadline for Airdrop 1?
                </AccordionSummary>
                <AccordionDetails>
                  Ensure your claim is made by April 1st, 2024.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What becomes of unclaimed $FRENZ from Airdrop 1?
                </AccordionSummary>
                <AccordionDetails>
                  Any $FRENZ not claimed will be redirected to bolster future community rewards.
                </AccordionDetails>
              </Accordion>
              {/* <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  How do I claim my airdrop?
                </AccordionSummary>
                <AccordionDetails>
                  Fren Find is a fun pre-launch game we created to reward true connoisseurs of degen history in a cool way. We're airdropping 10% of our supply to the top scorers.
                </AccordionDetails>
              </Accordion> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  How do I participate in the FrenzDrop?
                </AccordionSummary>
                <AccordionDetails>
                  Be one of the top 10 percent of scores on Fren Find and you'll qualify for the Frenzdrop.
                </AccordionDetails>
              </Accordion>

              {/*  */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What are all the ways to get the Frenzdrop (Airdrop)?
                </AccordionSummary>
                <AccordionDetails>
                  There are multiple ways you can participate in the Frenzdrop (Airdrop).
                  <br /><br />
                  Create content about Frenz. More views equals more $Frenz. Just make sure to tag every post with @Frenzcoin, and don’t forget to check your spot on the Airdrop leaderboard!<br /><br />
                  Play the Fren Find game. 10% of the Frenzdrop will be allocated to top scorers. Test yourself to see how degen you really are!<br /><br />
                  Win the Best Frenz challenges. These are ongoing challenges for you to share your creativity and rack up likes. Each winner will get an exclusive airdrop.<br /><br />
                  Vote for your NFT community in the FrenZone to Prove your group is the best! The top voted communities will win an airdrop for their community

                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is the BestFrenz Challenge?
                </AccordionSummary>
                <AccordionDetails>
                  BestFrenz Challenge is an ongoing game you can play with the Frenz community. Make sure you are following us on Twitter (X) @Frenzcoin so you can see when we post new challenges. BestFrenze challenges will be based around FRENZ culture, and will require you to create an image based on a specific topic each week. The post with the most likes at the end of challenge will win an exclusive airdrop of Frenz.
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  How do I play the BestFrenze Challenge?
                </AccordionSummary>
                <AccordionDetails>
                  Once a challenge is posted, you will have to create an image and post it on Twitter based around the topic. Your post must be tagged with #BestFrenz to be eligible to win. You can also tag us at @Frenzecoin, and accumulate even more views for the FRENZ Airdrop! The image you make for your post can be made in any way you like and we hope you go crazy with it : ) Use AI image generators, create a digital masterpiece by hand, or post stick figures drawn with mustard, you do you. That said, all BestFrenz posts Must be related to the current challenge and have an image in the post. Good luck!
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is the FrenZone and how do I play?
                </AccordionSummary>
                <AccordionDetails>
                  FrenZone is a leaderboard of NFT Communities that will compete to be in the top 25 spots. Think your community is the best? Prove it! Vote for your NFT community by logging into our FrenZone leaderboard with Twitter (X) and vote for your NFT Community with a Tweet. Every view your vote (Tweet) gets will contribute to your communities score and position on the leaderboard! The more votes and views you get, the higher up your community will climb. The most active members of the top 25 communities will be eligible to receive a Frenzdrop (Airdrop).
                </AccordionDetails>
              </Accordion>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
