import React, { Fragment } from 'react';
import LaunchesFeed from '../../components/LaunchesFeed';
import {gql, useQuery} from '@apollo/client';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const GET_LAUNCHES = gql`
{
  launchesPast(limit: 15) {
    mission_name
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
    }
    id
  }
}

`;

const PastLaunches = () => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    if (loading) return <Loader />;
    if (error) return <Error />;
    const launches = data.launchesPast.filter(launch => launch.links.article_link && launch.links.flickr_images.length);
    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5">
               <LaunchesFeed launches={launches} />
            </h1>
        </Fragment>
    );
};

export default PastLaunches;
