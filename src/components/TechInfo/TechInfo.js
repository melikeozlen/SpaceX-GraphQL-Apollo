import React from 'react';
import useTeckInfo from '../../hooks/useTechInfo';
import InfoTable from '../InfoTable';
const TechInfo = ({ name, rocket, engine, isEngine }) => {
    const tableContent = useTeckInfo({ name, rocket, engine, isEngine });
    return (
        <div className="container d-flex flex-column justify-content-around tech-info__container">
            <div
                className={`d-flex row
                     flex-md-row${isEngine ? '-reverse' : ''}
                 justify-content-between flex-column py-5`}
            >
                <div className="col col-md-4 d-flex justify-content-center">
                    <InfoTable header={tableContent.header}
                    data={tableContent.body} />
                </div>
                <img src={tableContent.img} alt={name} /> 
            </div>
        </div>
    );
};

export default TechInfo;
