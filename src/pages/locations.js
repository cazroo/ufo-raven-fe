import "../index.css";
import Maap from "../components/map";
import { useNavigate } from "react-router-dom";

export const Locations = () => {
  const navigation = useNavigate();
  return (
    <div className="locationWrapper">
      <div className="boxOne">
        <div>
          <div id="p1">
            <p>Do you have a favourite place or location for UFO spotting? </p>{" "}
          </div>
          <br />
          <br />

          <div id="p1cursive">
            {" "}
            <p>Feel free to share by clicking onto the map!</p>{" "}
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
        </div>
        <div className="mapMap">
          <Maap />
        </div>
      </div>
    </div>
  );
};
