import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './GamePage.css'
import guideText from '../../../img/guideText.png'
import window from '../../../img/window.png'
import door from '../../../img/lockedDoor.png'
import character from '../../../img/gameCharacter.png'
import key from '../../../img/key.png'

function GamePage(props) {

    return (
        <div >
            <div className="background">
                <Header />
                <img src={guideText} className="guideText" alt="설명" />
                <img src={window} className="keyWindow" />
                <img src={door} className="door" />
                <img src={character} className="character" />
                <img src={key} className="key" />
            </div>
        </div>
    )
}

export default GamePage;