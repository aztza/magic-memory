export default function FlipBox({images, firstImg, secondImg, handleClick, disable}){

    const image = images.map(
        img => (
            <div key={img.id} 
                className=
                {(firstImg === img || secondImg === img || img.check) ? 
                    "flipped card" : "card"
                }
                onClick={()=>{handleClick(img)}}
                >
                <img src={img.src} alt="front" className="front"/>
                <img src="./image/cover.png" alt="back" className="back"/>
            </div>
        )
    )

    return(
        <div className="flipBoxContainer">
            {image}
        </div>
    )
}