import "../index.css"
import Maap from "../components/map"

export const Locations = () => {
  return (
      <div className="wrapper">
        <div>
          <h1 className="locationTitle">Locations</h1>
          <div>
            <p className="locationIntro">
              Welcome to the location page 
              <br/>
              <br/>
              <br/>
              Do you have a favourite place or location
              <br/>
              for UFO spotting?
              <br/> 
              Feel free to share by clicking onto the 
              <br/>
              map!
              <br/>
              <br/>
              <br/>
              Or check out the table below to see 
              <br/>
              archived reports and user reports.
            </p>
          </div>
              <div>
                <Maap/>
              </div>
          </div>
        </div>
  )
};
