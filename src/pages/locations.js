import "../index.css";
import Maap from "../components/map";
import { useNavigate } from "react-router-dom";

export const Locations = () => {
  const navigation = useNavigate();
  return (
    <div className="locationWrapper">
      <div className="boxOne">
        <div>
          <h1 className="locationTitle">Locations</h1>
          <div id="p1">
            <p>
              Do you have a favourite place or location <br />
              for UFO spotting?{" "}
            </p>{" "}
          </div>
          <p>
            Feel free to share by clicking onto the <br />
            map!
          </p>{" "}
          <div id="p1cursive"></div>
          <p>
            {" "}
            Or check out the table{" "}
            <span class="inlineLink" onClick={() => navigation("/events")}>
              {" "}
              here{" "}
            </span>
            to see archived reports and user reports.{" "}
          </p>
        </div>
        <div className="mapMap">
          <Maap />
        </div>
      </div>
    </div>
  );
};
