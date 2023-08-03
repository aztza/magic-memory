import React from "react"
import './App.css';
import FlipBox from "./FlipBox"

const images = [
  { src: "./image/helmet-1.png",check: false },
  { src: "./image/potion-1.png",check: false },
  { src: "./image/ring-1.png",check: false },
  { src: "./image/scroll-1.png",check: false },
  { src: "./image/shield-1.png",check: false },
  { src: "./image/sword-1.png",check: false },
]

function App() {
  const [imgList, setImgList] = React.useState([]);
  const [firstImg, setFirstImg] = React.useState(null);
  const [secondImg, setSecondImg] = React.useState(null);
  const [time, setTime] = React.useState(0);

  function shaffleCards(){
    const shaffleArray = [...images, ...images]
                         .sort(() => Math.random() - 0.5)
                         .map(arr => ({...arr, id: Math.random()}));
    setImgList(shaffleArray);
    setTime(0)
  } 
  function handleClick(value){
    firstImg ? setSecondImg(value) : setFirstImg(value)
  }

  React.useEffect(() => {
    if(firstImg && secondImg){
      if(!(firstImg.id === secondImg.id)){
        if(firstImg.src === secondImg.src){
          setImgList(prevImgList => (
            prevImgList.map(
              img => img.src === firstImg.src ? 
                {...img,check: true}: {...img}
            )
          ))
          reset()
        }else{
          setTimeout(()=>reset(),500)
        }
      }
    }
  },[firstImg, secondImg])

  function reset(){
    setFirstImg()
    setSecondImg()
    setTime(prevSetTime => prevSetTime + 1)
  }

  React.useEffect(() => {
    shaffleCards()
  },[])

  return (
    <div className="App">
      <h1 className="header">Magic Match</h1>
      <button className="new--game" onClick={shaffleCards}>New Game</button>
      <FlipBox handleClick={handleClick}
              images={imgList}
              firstImg={firstImg}
              secondImg={secondImg}
      />
      <footer className="footer">
        <span>Time : {time}</span>
      </footer>
    </div>
  );
}

export default App;
