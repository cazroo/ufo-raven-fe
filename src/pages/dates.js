import React from "react";
import { Fade } from "react-slideshow-image";
import "../components/css/report.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "http://www.mufoncms.com/files_jeud8334j/120409_submitter_file1__72BA6EEDAAB146B69723D2799C62F2D2.jpeg",
  "http://www.mufoncms.com/files_jeud8334j/120398_submitter_file1__FINAL202112092.jpg",
  "https://www.mufoncms.com/files_jeud8334j/120335_submitter_file1__Mufon1.jpg",
  "https://static.wikia.nocookie.net/muppet/images/6/6b/Geefle.jpg",
  "http://www.mufoncms.com/files_jeud8334j/120398_submitter_file2__FINAL20211209.jpg",
  "http://www.mufoncms.com/files_jeud8334j/120395_submitter_file5__41103199E0C3422CA51681A31740B999.jpeg",
  "http://www.mufoncms.com/files_jeud8334j/120398_submitter_file4__5.jpg",
  "http://www.mufoncms.com/files_jeud8334j/120395_submitter_file4__9A9FB4E4CE5E4282BAEDB5B4D98897EC.jpeg",
  "http://www.mufoncms.com/files_jeud8334j/120366_submitter_file3__20220115164210.jpg",
  "http://www.mufoncms.com/files_jeud8334j/120342_submitter_file1__IMG7708.JPG",
  "https://gray-wxix-prod.cdn.arcpublishing.com/resizer/oW0x95Z5UTTqXxBN7HPn1BNj9Xg=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/IDUH36F36VE4LEFBD5E6ZJMAKE.jpg",
  "https://www.mufoncms.com/files_jeud8334j/120305_submitter_file1__IMG58602.JPG",
];

const proprietes = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  // arrow: true
};

const Dates = () => {
  return (
    <div className="container-slide">
      <Fade {...proprietes}> 
        <div className="each-slide">
          <div>
            <img src={fadeImages[0]} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[1]} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[2]} alt="img3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[3]} alt="img4" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[4]} alt="img5" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[5]} alt="img6" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[6]} alt="img7" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[7]} alt="img8" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[8]} alt="img9" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[9]} alt="img10" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[10]} alt="img11" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={fadeImages[11]} alt="img12" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Dates;
