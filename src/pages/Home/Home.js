import React from 'react';
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import MainHeader from './../../components/MainHeader';
// style
import './style.scss';
import { gql, useQuery } from '@apollo/client';
const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_COMPANY_INFO);
    if (loading) return <Loader />;
    if (error) return <Error />;
    
    return (
     <div className="home__container d-flex align-items-center text-center">
       <MainHeader name={data.company.name} description={data.company.summary} />
    </div>
    );
};

export default Home;
