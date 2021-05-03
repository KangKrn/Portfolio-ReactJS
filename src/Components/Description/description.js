import React from 'react';
import Image from 'react-bootstrap/Image';
import '../Description/description.scss';
import react from '../../Resources/reactLogo.png';
import mui from '../../Resources/materialUILogo.png';
import bstrap from '../../Resources/bootstrapLogo.png';

function Description() {
    return(
        <div className="descContainer">
            <div className="textLines">
                <div>Made with</div>
                <div><Image src={react}/></div>
                <div>and</div>
                <div><Image src={mui}/> & <Image src={bstrap}/></div>
                <div>Coded by</div>
                <div>Kang Wie Shen</div>
            </div>
        </div>
    );
    
}
export default Description;