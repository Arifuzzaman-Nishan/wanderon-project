import React from 'react';

const ExploreDetails = ({ item }) => {
    const { pic, title } = item;
    console.log('nishan');
    return (
        <div className="col-md-2 col-4 mb-4">
            <div style={{ width: '4rem', cursor: 'pointer' }} className="text-center">
                <img className="img-fluid" src={pic} alt="" />
                {/* <div className="explore-text-style">{title}</div> */}
                <small className="explore-text-style">{title}</small>
            </div>
        </div>
    );
};

export default ExploreDetails;
