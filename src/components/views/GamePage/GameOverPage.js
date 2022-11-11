import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './GamePage.css'
import guideText from '../../../img/guideText.png'
import window from '../../../img/window.png'
import door from '../../../img/withKeyDoor.png'
import character from '../../../img/gameCharacter.png'

function GameOverPage(props) {

    return (
        <div >
            <div className="background">
                <Header />
                <img src={window} className="keyWindow" />
                <img src={door} className="door" />
                <img src={character} className="character" />
            </div>
        </div>
    )
}

export default GameOverPage;