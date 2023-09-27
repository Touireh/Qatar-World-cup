import "./css/style.css";
import "./Appp.scss";

import React from 'react';
import wc2022 from "./world-cup/world-cup-trophy-removebg-preview.png"
import img1 from './world-cup/flags/icons8-argentina-96 (1).png'
import img2 from './world-cup/flags/icons8-australia-96.png'
import img3 from './world-cup/flags/icons8-belgium-96.png'
import img4 from './world-cup/flags/icons8-brazil-96.png'
import img5 from './world-cup/flags/icons8-cameroon-96.png'
import img6 from './world-cup/flags/icons8-canada-96.png'
import img7 from './world-cup/flags/icons8-costa-rica-96.png'
import img8 from './world-cup/flags/icons8-croatia-96.png'
import img9 from './world-cup/flags/icons8-denmark-96.png'
import img32 from './world-cup/flags/icons8-ecuador-96.png'
import img10 from './world-cup/flags/icons8-england-96.png'
import img11 from './world-cup/flags/icons8-france-96.png'
import img12 from './world-cup/flags/icons8-germany-96.png'
import img13 from './world-cup/flags/icons8-ghana-96.png'
import img14 from './world-cup/flags/icons8-iran-96.png'
import img15 from './world-cup/flags/icons8-japan-96.png'
import img16 from './world-cup/flags/icons8-mexico-96.png'
import img17 from './world-cup/flags/icons8-morocco-96.png'
import img18 from './world-cup/flags/icons8-netherlands-96.png'
import img19 from './world-cup/flags/icons8-poland-96.png'
import img20 from './world-cup/flags/icons8-portugal-96.png'
import img21 from './world-cup/flags/icons8-qatar-96.png'
import img22 from './world-cup/flags/icons8-saudi-arabia-96.png'
import img23 from './world-cup/flags/icons8-senegal-96.png'
import img24 from './world-cup/flags/icons8-serbia-96.png'
import img25 from './world-cup/flags/icons8-south-korea-96.png'
import img26 from './world-cup/flags/icons8-spain-flag-96.png'
import img27 from './world-cup/flags/icons8-switzerland-96.png'
import img28 from './world-cup/flags/icons8-tunisia-96.png'
import img29 from './world-cup/flags/icons8-uruguay-96.png'
import img30 from './world-cup/flags/icons8-usa-96.png'
import img31 from './world-cup/flags/icons8-wales-96.png'

import i1 from './world-cup/players/mardona-removebg-preview (1).png'
import i2 from './world-cup/players/messi-removebg-preview (1).png'
import i3 from './world-cup/players/ronaldo-removebg-preview (2).png'
import i4 from './world-cup/players/neymar-removebg-preview.png'
import i5 from './world-cup/players/mbappe-removebg-preview.png'
import i6 from './world-cup/players/harry-kane-removebg-preview.png'
import i7 from './world-cup/players/ochoa-removebg-preview.png'
import i8 from './world-cup/players/manuel-neuer-removebg-preview.png'
import i9 from './world-cup/players/eriksen-removebg-preview.png'
import i10 from './world-cup/players/Xhaka_-removebg-preview.png'



const Apropos = () => {

    return (
        <div>
            
      <div>
        <div className="con">
          <div className="con__flags flagOne">
            <img className src={img1} alt="" />
            <img src={img2} alt="/" className='images' />
            <img className="images" src={img3} alt="/" />
            <img className="images" src={img4} alt="" />
            <img className="images" src={img5} alt="" />
            <img className="images" src={img6} alt="" />
            <img className="images" src={img7} alt="" />
            <img className="images" src={img8} alt="" />
            <img className="images" src={img9} alt="" />
            <img className="images" src={img10} alt="" />
            <img className="images" src={img11} alt="" />
            <img className="images" src={img12} alt="" />
            <img className="images" src={img13} alt="" />
            <img className="images" src={img14} alt="" />
            <img className="images" src={img15} alt="" />
            <img className="images" src={img16} alt="" />
            
          </div>
          <div className="con__card">
            <div className="card-overlay" />
            <div className="con__card-text">
              <h3>Qatar</h3>
              <h2>World Cup 2022</h2>
            </div>
            <div className="overlay-1" />
            <div className="hide-right" />
            <div className="hide-left" />
            <div className="con__card-cup">
              <div className="con__card-cup--overlay-cup" />
              <img src={wc2022} alt="" />
            </div>
            <div className="con__card-player con__card-player--maradona">
              <img src={i1}alt="" />
              <div className="overlay" />
            </div>
            <div className="con__card-player con__card-player--messi">
              <img src={i2} alt="" />
              <div className="player-overlay" />
            </div>
            <div className="con__card-player con__card-player--ronaldo">
              <img src={i3} alt="" />
              <div className="player-overlay" />
            </div>
            <div className="con__card-player con__card-player--neymar">
              <img src={i4} alt="" />
            </div>
            <div className="con__card-player con__card-player--mbappe">
              <img src={i5} alt="" />
            </div>
            <div className="con__card-player con__card-player--kane">
              <img src={i6} alt="" />
            </div>
            <div className="con__card-player con__card-player--ochoa">
              <img src={i7} alt="" />
            </div>
            <div className="con__card-player con__card-player--neuer">
              <img src={i8} alt="" />
            </div>
            <div className="con__card-player con__card-player--eriksen">
              <img src={i9} alt="" />
            </div>
            <div className="con__card-player con__card-player--xhaka">
              <img src={i10} alt="" />
            </div>
          </div>
          <div className="con__flags flagTwo">
          <img className="images" src={img17} alt="" />
            <img className="images" src={img18} alt="" />
            <img className="images" src={img19} alt="" />
            <img className="images" src={img20} alt="" />
            <img className="images" src={img21} alt="" />
            <img className="images" src={img22} alt="" />
            <img className="images" src={img23} alt="" />
            <img className="images" src={img24} alt="" />
            <img className="images" src={img25} alt="" />
            <img className="images" src={img26} alt="" />
            <img className="images" src={img27} alt="" />
            <img className="images" src={img28} alt="" />
            <img className="images" src={img29} alt="" />
            <img className="images" src={img30} alt="" />
            <img className="images" src={img31} alt="" />
            <img className="images" src={img32} alt="" />
          </div>
        </div>
      </div>

            </div>
    )
}
export default Apropos