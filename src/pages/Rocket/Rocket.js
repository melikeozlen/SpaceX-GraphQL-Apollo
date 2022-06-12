import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Rocket from '../../components/Rocket';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const GET_ROCKETS = gql`
    query GetRockets($rocketId: ID!) {
        rocket(id: $rocketId) {
            description
            company
            name
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
            stages
            cost_per_launch
        }
    }
`;

const RocketPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_ROCKETS, {
        variables: { rocketId: id },
    });
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return <Rocket rocket={{...data.rocket, id:id}} />;

};

export default RocketPage;
