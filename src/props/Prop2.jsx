import React from 'react';
import '../style/style.css';
import ReadMoreReact from 'read-more-react';

const Materi2 = (props) => {
    return(
        <div className="wrraper2">
            
            <div className="content2">
                <div className="gambarpaket">
                    <img src={props.img2} className="imagesliderr"/>
                </div>
                <p className="tgl">{props.ctgl}</p>
                <p className="des1"><ReadMoreReact text={props.cdes1} min="20" ideal="40" max="80" ReadMoreText={props.cdes1}/></p>
                <p className="des2"><ReadMoreReact text={props.cdes1} min="20" ideal="40" max="80" ReadMoreText={props.cdes1}/></p>
            </div>
        </div>
    )
}
export default Materi2;