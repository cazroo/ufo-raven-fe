import "./home.css";

export const Home = () => {
    return (
        <div>
          <div>
          <img className="animation" src="./homeAnimation.gif" alt="animation"></img>
            <h1 className="welcomeText">Welcome to <br/> Operation <br/> Raven</h1>
            <div className="tablebox">
                <div>
                </div>
                <div>
                    <h2 className="text1">is it a bird? is it a plane?</h2>
                </div>
                <div>
                  <h2 className="text2">or is it something else...</h2>
                </div>
              </div>
          </div>
        </div>  
    )
}