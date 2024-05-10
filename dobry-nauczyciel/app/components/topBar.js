import React, { useState } from 'react';
import NavBar from "./navBar";
export default function TopBar({router}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className='topBar'>
                <h1 className="head">Dobry Nauczyciel.</h1>
                <div className={`buttonContainer ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
                    <div className="buttonLines" />
                    <div className="buttonLines" />
                    <div className="buttonLines" />
                </div>
            </div>
            <NavBar router={router} expanded={isClicked}/>
        </div>
    )
}
