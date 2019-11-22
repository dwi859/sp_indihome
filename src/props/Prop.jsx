import React from 'react';
import '../style/style.css';
import ReadMoreReact from 'read-more-react';

const Materi = (props) => {
    return(
        <div className="wrraper">
            <div className="content1">
                <div className="gambarpaket">
                    <img src={props.img} className="imagesliderr"/>
                </div>
                <p className="tgl">{props.tgl}</p>
                <p className="des1"><ReadMoreReact text={props.des1} min="20" ideal="40" max="80" ReadMoreText={props.des1}/></p>
                <p className="des2"><ReadMoreReact text={props.des2} min="20" ideal="40" max="80" ReadMoreText={props.des2}/></p>
            </div>
            
        </div>
    )
}
export default Materi;

