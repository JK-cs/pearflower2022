import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './GamePage.css'
import guideText from '../../../img/guideText.png'
import window from '../../../img/keyWindow.png'
import door from '../../../img/lockedDoor.png'
import character from '../../../img/gameCharacter.png'

function GamePage(props) {

    return (
        <div >
            <div className="background">
                <Header />
                <img src={guideText} className="guideText" alt="설명" />
                <img src={window} className="keyWindow" />
                <img src={door} className="door" />
                <img src={character} className="character" />
            </div>
        </div>
    )
}

export default GamePage;