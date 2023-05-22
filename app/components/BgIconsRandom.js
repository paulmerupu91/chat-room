import React from 'react'

function BgIconsRandom() {

    const ChatEmpty = ( {size, distance} ) => {
        return(    
        <svg style={{width: size, height: size, top: distance, left: distance}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-left position-absolute" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        </svg>
        )
    }

    const ChatDots = ( {size, distance} ) => {
        return(
        <svg style={{width: size, height: size, top: distance, left: distance}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-left-dots position-absolute" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        )
    }

    const ChatLines = ( {size, distance} ) => {
        return(
        <svg style={{width: size, height: size, top: distance, left: distance}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-left-text position-absolute" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        )
    }

    const randomSizeOne = Math.random();
    const randomSizeTwo = Math.random();
    const randomSizeThree = Math.random();
    const randomSizeFour = Math.random();
    const randomDistanceOne = Math.random();
    const randomDistanceTwo = Math.random();
    const randomDistanceThree = Math.random();
    const randomDistanceFour = Math.random();

  return (
    <div className="random-chat-icons text-primary position-relative h-100 w-100" style={{zIndex: -1, rotate: `${(randomDistanceOne*30) - 15}deg` }}>

        <ChatEmpty size={`${randomSizeOne * 20}vw`} distance={`${randomDistanceOne * 20}vw`} />
        <ChatDots size={`${randomSizeTwo * 30}vw`} distance={`${randomDistanceTwo * 40}vw`} />
        <ChatLines size={`${randomSizeThree * 40}vw`} distance={`${randomDistanceThree * 50}vw`} />
        <ChatDots size={`${randomSizeFour * 50}vw`} distance={`${randomDistanceFour * 30}vw`} />

    </div>
  )
}

export default BgIconsRandom