   "use client"
import Image  from "next/image";
import Link from "next/link";
import { MdRocketLaunch } from "react-icons/md";
import { GiKnockedOutStars } from "react-icons/gi";
import { Button, TextField } from "@mui/material";

//javascript hooks
export default function Navbar(){
  return (
    <main>
      {/* Navbar */}
      <main>
        <div class="secondDiv">
            <div class="secondDivA">
                <button> <span class="buttonText">All</span> <span class="downarrowDiv"><Image src="/images/10077.svg" height={10} width={10} class="downarrow"/></span></button>
                <input type="text" placeholder="Search for Articles"></input>
            </div>
            
            <div class="secondDivB"><Image src="/10006.png" alt="" width={150} height={43}/></div>

            <div class="secondDivC">
                <a href=""><Image src="/10001.svg" alt="" width={22} height="{22}/></a>
                <a href=""><Image src="/10002.svg" alt="" width={33} height={23}/></a>
            </div>
        </div>


        <div class="thirdDiv">
            <a href="">Shop</a>
            <a href="">Mission</a>
            <a href="">Memberships</a>
            <a href="">Business Partnerships</a>
            <a href="">Foundation/Donate</a>
        </div>


        <div class="fourthDiv">
            <h3 class="fourthDivHA">One ocean, <br/>one mission</h3>
            <h3 class="fourthDivHB">Founded by two surfers on a mission <br/>
    to end the ocean plastic crisis</h3>
            <a href=""><button>Get Involved</button></a>
        </div>


        <div class="fifthDiv">
            <h3 class="fifthDivHA">A lot of people thought it was a crazy idea…</h3>
            <Image src="/10003.jpeg" alt="" width={1170} height={655.333}/>
            <h3 class="fifthDivHB">“When my friend and I first started this company, we were just two surfers trying to clean the ocean. We never <br/> imagined that our scrappy little startup would become a global cleanup operation that recovers millions of pounds <br/> of trash from the world’s oceans, rivers, and coastlines every year. <br/>
                <br/>

            But we did it like we’ve always done it… <strong>one pound of trash at a time.</strong>”</h3>
                <h3 class="fifthDivHC"><span>Alex Schulze</span><br/>
            Co-Founder + CEO</h3>
                <a href=""><button>Get Involved</button></a>
        </div>


        <div class="sixthDiv">
            <h3 class="sixthDivA">Why We clean</h3>
            <div class="gridImages">
                <Image src="/10051.png" alt="" height={370} width={562.23}/>
                <Image src="/10052.png" alt="" height={370} width={562.23}/>
                <Image src="/10053.png" alt="" height={370} width={562.23}/>
                <Image src="/10054.png" alt="" height={370} width={562.23}/>
            </div>
            <h3 class="sixthDivB">Our lives revolve around the ocean. It’s where we go to work, relax, appreciate nature, and experience the joy of <br/> being alive. <br/><br/>

    And to see those places littered with plastic, to see wildlife disappearing, to see people losing their income and way <br/> of life…it’s the driving force behind why we clean. <br/><br/>

    We do what we do to protect the people and places we love. Not just for ourselves, but for every generation that <br/> comes after us.</h3>
            <a href=""><button>Get Involved</button></a>
        </div>


        <div class="seventhDiv">
            <h3 class="seventhDivHA"><span>Beyond cleanups</span></h3>
            <div class="cardsA">
                <div class="stubborn">
                    <Image src="/10055.png" alt="" width={592.23} height={300}/>
                    <h3><a href="">Partnership Opportunities</a></h3>
                </div>
                <div>
                    <Image src="/10056.png" alt="" width={562.23} height={330}/>
                    <h3><a href="">Educational Resources</a></h3>
                </div>        
            </div>
        </div>


        <div class="eigthDiv">
            <h3 class="eigthDivHA">Business for good</h3>
            <h3 class="eigthDivHB">
                <span>4ocean exists for one reason: to protect and preserve our oceans. Our ocean-first philosophy is at the heart of every <br/>decision we make as individuals and as a company.</span>
            </h3>
            <Image src="/10057.png" alt="" width={95} height={210}/>

            <div class="eigthDivA">
                <div class="div1">
                    <h3 class="one">Public Benefit Corporation</h3>
                    <h3 class="two"><span>As a Public Benefit Corporation, we’re legally required to <br/> prioritize our social and environmental impact alongside shareholder value. <br/> <br/>

    We decided to file as a PBC to ensure we stay focused on our mission no matter what the future br/ings.</span></h3>
                </div>
                <div class="div2">
                    <h3  class="three">Certified B Corp</h3>
                    <h3  class="five"><span>4ocean is a Certified B Corp—just like Patagonia, Bombas, <br/> Tom’s, Ben & Jerry’s, and many of your other favorite do-good <br/> br/ands. <br/><br/>

    Recognized as the highest standard for social and <br/> environmental corporate responsibility, this certification means <br/> that our entire business—from our daily operations to our <br/> financials—has been audited by the third-party nonprofit <br/> accreditation firm B Lab to verify that our impact is real.</span></h3>
                </div>
                <div class="div3">
                    <h3  class="six">1% for the Planet</h3>
                    <h3  class="seven"><span>Saving the ocean and our planet will take more than what one person, company, or organization can do on their own, but only 3% of all philanthropy in the U.S. goes to environmental causes. <br/><br/>

    As members of 1% for the Planet, we’ve made a commitment to <br/> donate at least 1% of our gross sales to environmental <br/> organizations that have a proven track record of driving positive <br/> change for our oceans and our planet</span></h3>
                </div>
                <div class="div4">
                    <h3  class="eight">Ocean Positive Verified by SeaTrees</h3>
                    <h3  class="nine"><span>We calculate and offset our company’s entire carbon footprint <br/>every year by restoring blue-carbon ecosystems like kelp and <br/> mangrove forests through our partnership with SeaTrees by <br/> Sustainable Surf. <br/><br/>

    But we’ve never been the type to do the bare minimum. This <br/> certification means we’ve sequestered more carbon than our <br/> business emits to have a positive impact on the marine <br/>environment.</span></h3>
                </div>
            </div>
            <div class="eigthDivB">
                <div class="div5">
                    <h3 class="ten">GreenCircle Certified</h3>
                    <h3 class="eleven"><span>The entire 4ocean plastic supply chain has been audited and <br/>verified by the third-party organization GreenCircle Certified. <br/><br/>

    This meticulous documentation process sets a new standard <br/>for accuracy and accountability regarding products made from <br/>upcycled ocean materials. <br/><br/>

    The aim of 4ocean upcycling is to continue raising awareness <br/>about ocean plastic pollution, reduce the need for virgin <br/>plastics in the future, and continue funding their global ocean <br/>cleanup operation.</span></h3>
                </div>
            </div>
        </div>


        <div class="ninthDiv">
            <h3 class="ninthDivHA">100% of our profits go to our mission</h3>
            <div class="cow">

                <div class="cowA">
                    <div class="cowA1">
                        <Image src="/10058.png" alt="" width={517.5} height={333}/>
                    </div>
                    <div class="cowA2">
                        <h3 class="A1">Daily Cleanups</h3>
                        <h3 class="A2">4ocean is one of the only companies in the world that hires full<br/>-time captains and crews to recover plastic waste and other man-<br/>  made debr/is directly from the open ocean and environments<br/> where plastic is at high risk of entering the ocean. This includes<br/> select rivers as well as vulnerable coastal ecosystems like <br/>mangrove forests, coral reefs, estuaries, and beaches. Thanks to <br/> you, we’re out here seven days a week.</h3>
                    </div>
                </div>

                <div class="cowB">
                    <div class="cowB1">
                        <h3 class="A3">Captains + Crews</h3>
                        <h3 class="A4">We believe in taking care of the<br/> people who are taking care of the ocean. All of our captains and cleanup crews are full-time<br/> employees who receive a fair living wage. Thanks to you, we also <br/>cover all health insurance costs and provide additional benefits <br/>and bonus incentives.</h3>
                    </div>
                    <div class="cowB2">
                        <Image src="/10059.png" alt="" width={550} height={350}/>
                    </div>
                </div>

                <div class="cowC"> 
                    <div class="cowC1">
                        <Image src="/10060.png" alt="" width={550} height={350}/>
                    </div>
                    <div class="cowC2">
                        <h3 class="A5">Br/acelet Artisans</h3>
                        <h3 class="A6">Plastic pollution disproportionately impacts women and children <br/>in poor and marginalized communities. Every br/acelet you <br/>purchase helps support local artisans in Bali and Guatemala by <br/>providing the reliable source of income they need right now <br/>while creating new opportunities for growth, health, education, <br/>equality, and prosperity in the future.</h3>
                    </div>
                </div>

                <div class="cowD">
                    <div class="cowD1">
                        <h3 class="A7">Vessels + Equipment</h3>
                        <h3 class="A8">We purchase, own, and <br/>maintain all of the vessels, tools, and equipment our crews need to do their jobs. As we expand, our<br/> fleet grows bigger and maintenance costs rise. Thanks to you, our <br/>crews always have what they need to stay safe and effective.</h3>
                    </div>
                    <div class="cowD2">
                        <Image src="/10061.png" alt="" width={550} height={350}/>
                    </div>
                </div>


                <div class="cowF">
                    <div class="cowF1">
                        <h3 class="A11">Waste Management</h3>
                        <h3 class="A12">We always prioritize the most sustainable disposal methods for <br/>all of our recovered materials—even when it costs more. Thanks <br/>to you, we’re also able to set up or invest in local waste <br/>management infrastructure when operating in areas where none <br/>exists.</h3>
                    </div>
                    <div class="cowF2">
                        <Image src="/10063.png" alt="" width={550} height={350}/>
                    </div>
                </div>

                <div class="cowG">
                    <div class="cowG1">
                    <Image src="/10064.png" alt="" width={550} height={350}/>
                    </div>
                    <div class="cowG2">
                        <h3 class="A13">Education + Awareness</h3>
                        <h3 class="A14">We’re committed to sharing our knowledge, raising awareness, <br/>and inspiring action on behalf of our one shared ocean. Your <br/>purchases make it possible for us to share our mission with new <br/>audiences all around the world and inspire more people to join <br/>the clean ocean movement.</h3>
                    </div>
                </div>     
            </div>

            <div class="ninthDivB">
                    <a href=""><button>Get Involved</button></a>
            </div>
        </div>


        <div class="tenthDiv">
            <div class="tenthDivA">
                <h3 class="tenth1">
                    <span>Stay Connected</span>
                </h3>
                <h3 class="tenth2">
                    <span>Sign up for email and SMS alerts so you never miss an update about the clean <br/>ocean movement and new ways to support our mission!</span>
                </h3>
                <input type="text" placeholder="First name" class="tenth3"/>
                <input type="text" placeholder="Enter your email" class="tenth4"/>
                <a href="" class="tenth5"><button>Subscribe</button></a>
            </div>
        </div>


        <div class="top">
            <a href="" >Back to top</a>     
        </div>

        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore amet velit nihil enim? Doloremque quos ad saepe facilis tempore numquam pariatur! Beatae, similique. Sed quos quas at totam magnam.</p>
        </div>
        <div>
            <p>Explicabo commodi et aperiam aut deserunt necessitatibus similique nam quasi, cupiditate neque, totam tempora perspiciatis beatae molestiae eaque. Totam minima tempora quibusdam ullam architecto molestias quis numquam dicta corrupti ut.</p>
        </div>
        <div>
            <p>Minus vel quo est? Aliquam a ipsa dolorem aspernatur corporis ex repellat aut eos praesentium rerum consequatur odio odit, saepe commodi molestiae veniam dolorum consectetur. Consequuntur et eligendi dolores rem.</p>
        </div>

    
        


        {/* <footer>
            <div>
                <h2>Welcome to the crew.</h2>
                <p>We're glad you're here to help us clean the world's oceans, rivers, and coastlines.</p>
                <a href="">
                    <Image src="/facebook.png" alt="">
                </a>
                <a href="">
                    <Image src="/youtube.png" alt="">
                </a>
                <a href="">
                    <Image src="/instagram.png" alt="">
                </a>
                <a href="">
                    <Image src="/tiktok.png" alt="">
                </a>
                <a href="">
                    <Image src="/pinterest.png" alt="">
                </a>
                <a href="">
                    <Image src="/twitter.png" alt="">
                </a>
                <a href="">
                    <Image src="/linked.png" alt="">
                </a>
                <a href="">
                    <Image src="/dis.png" alt="">
                </a>
            </div>

            <div>
                <h3>LEARN + CREW</h3>
                <ul>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    <li>Shipping Policy</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <h3>JOIN THE CREW</h3>
                <ul>
                    <li>Wavemakers</li>
                    <li>Careers</li>
                    <li>Clean Ocean Club</li>
                    <li>Reviews</li>
                    <li>Become a Wholsesaler</li>
                </ul>
            </div>

            <div>
                <h3>Newsletter</h3>
                <p>Sign up for exclusive offers, original storie, events and more.</p>
                <input type="text" placeholder="Your email"/>
            </div> 
            <hr/>
            <p>&lt;&lt;&copy;&gt;&gt;2025 4ocean. Powered by Shopify</p>

        </footer> */}

    </main>
      
  );
}
