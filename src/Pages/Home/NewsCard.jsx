

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {image_url,title,details,_id}=news;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-3 mb-5">
                <h2 className="card-title text-3xl font-semibold ">{title}</h2>
                <figure><img className='' src={image_url}  /></figure>
                <div className="card-body">                   
                    
                    {
                        details.length>200
                        ? <p className='text-2xl text-justify'>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-700 font-semibold ml-3'>Read More....</Link></p> 
                        :<p>{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news:PropTypes.object,
};

export default NewsCard;