import {Link} from 'react-router-dom';

function Home () {

    return (
        <div className="home-div">
          <div className="span-left">
            <h1><i class="fa-solid fa-circle-info"></i> About:</h1>
            <span>My wife and I recently had our first baby and the experience inspired me to create this app to help keep track of things in an organized way. We had started with a simple paper document, but the brain-fog of being a first time parent made it very difficult to update accurately. This app helps take your input for the Babies information, when you are feeding, and when the baby has bodily movements so it can graph the data on a chart.</span>
            <h2>How to use:</h2>
            <h5>Estimating the volume of a baby's movement:</h5>
            <span>The volume estimation is a bit arbitrary in terms of a standard, so it's up to you to decide what Small, Medium, Large, and Very Large really mean. Diapers should often have a built in yelow line that turns blue when there is absorbed liquid, which is the first way of measuring volume. Additionally, you will measure based on the perceived weight and visual volume it contains.</span>
            <h3>Examples:</h3>
            <ul>
              <li>If part of the line has turned blue and the diaper feels light (and may have some discoloration), but there is no visible detritus; that would be measured as Small.</li>
              <li>If most the line has turned blue and the diaper feels like it has some heft, there is both visible discoloration and detritus; that would be measured as Medium.</li>
              <li>If all of the line has turned blue and the diaper feels much heftier, there is both visible discoloration and significant detritus; that would be measured as Large.</li>
              <li>If all of the line has turned blue and the diaper is literally overflowing with detritus (a.k.a -the dreaded Blow Out); that would be measured as Very Large.</li>
            </ul>
            </div>
        <br/><br/>
        <div className='chart-buttons'>
        <Link to="/charts" replace>
        <button className='link-button'><i class="fa-solid fa-chart-column"></i> View Charts</button>
        </Link>
        <Link to="/notes" replace>
        <button className='link-button'><i class="fa-solid fa-clipboard"></i> View Notes</button>
        </Link>
        <Link to="/baby" replace>
        <button className='link-button'><i class="fa-solid fa-child-reaching"></i> View Baby</button>
        </Link>
        </div>
        </div>
    )
  };
  
  export default Home;