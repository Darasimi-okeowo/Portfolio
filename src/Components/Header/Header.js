import React from "react";
import "./Header.css";
import image from "./image1.jpg";

const Header = () => {
  return (
    <div>
     <div className='header'>
            <div className='header--flex header--flex-2'>
                <div className='video-2'>
                    <img src={image} alt=''/>
                </div>
                <div className='welcome'>
                    <h1>A better way to communicate</h1>
                    <p>Unlike email, conversations in Slack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps</p>
                    <button>SEE ALL FEATURES</button>
                </div>
                
            </div>
            
        </div>
      <div className="body">
        <div className="body-heading">
          <h1>Over 750,000 companies use Slack to get work done</h1>
          <div className="stories">
            <p>See all customer stories</p>
            <span> </span>
          </div>
        </div>
        <div className="flex-2 customer">
          <div>
            <h2>
              “I help to bring product from the wild to the kitchen, and all
              across the dining room,” Koseba explains. “[With Slack] there’s no
              wasted time or wasted product because you’re able to communicate
              things right away.”
            </h2>
            <h4>Katina Connaughton</h4>
            <p>Head Farmer, SingleThread</p>
          </div>
          <img
            src="https://a.slack-edge.com/ce67d/marketing/img/stories/singlethread/customer-story.png"
            alt="customer"
          />
        </div>

        <div className="better-work">
          <h1>Choose a better way to work</h1>
          <div>
            <button>TRY FOR FREE</button>
            <button>CONTACT SALES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
