import {Link} from 'react-router-dom';

function Home () {

    return (
        <div className="home-div">
            <h1>About:</h1>
            <span>My wife and I recently had our first baby and the experience inspired my to create this app to help keep track of things in an organized way. We had started with a simple paper document that the hospital was making us fill out for the first few doctor visits, but the brain-fog of being a first time parent made it very difficult to update accurately, and on more than one occasion the paper was spilled on -we won't say what with!</span>
            <span>This app helps take your input for the Babies information, when you are feeding, and when the baby has bodily movements so it can graph the data on a chart</span>
            <h3>How to use:</h3>
            <p>Estimating the volume of a baby's movement:</p>
            <span>The volume estimation is a bit arbitrary in terms of a standard, so it's up to you to decide what small, medium, large, and huge really mean</span>
            <span>Diapers should often have a built in yelow line that turns blue when there is absorbed liquid which is the first way of measuring volume</span>
            <span>Additionally, you will measure based on the perceived weight and visual volume it contains</span>
            <p>Examples:</p>
            <span>If part of the line has turned blue and the diaper feels light (and may have some discoloration), but there is no visible detritus; that would be measured as Small.</span>
            <span>If most the line has turned blue and the diaper feels like it has some heft, there is both visible discoloration and detritus; that would be measured as Medium.</span>
            <span>If all of the line has turned blue and the diaper feels much heftier, there is both visible discoloration and significant detritus; that would be measured as Large.</span>
            <span>If all of the line has turned blue and the diaper is literally overflowing with detritus (a.k.a -the dreaded Blow Out); that would be measured as Huge.</span>
        <br/><br/>
        
        <Link to="/chart" replace>
        <button className='view-charts-button'>View The Charts</button>
        </Link>
        </div>
    )
  };
  
  export default Home;