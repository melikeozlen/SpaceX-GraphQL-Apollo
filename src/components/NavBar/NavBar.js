import React, {useRef, useState} from 'react';
import useNavigation from '../../hooks/useNavigation';
import {gql, useQuery} from '@apollo/client';
import Loader from '../Loader';
import Error from '../Error';
import TopMenu from '../TopMenu';
import SideMenu from '../SideMenu';
const GET_NAV_ITEMS = gql`
{
  rockets {
    id
    name
  }
}


`;

const NavBar = () => {

    const {loading, error, data} = useQuery(GET_NAV_ITEMS);
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);

    if (loading) return <Loader/> ;
    if (error) return <Error error={error}/> ;

    return (
        <div ref={navRef} className="container-fluid"> 
            <div className="row ">
            <TopMenu
                isMenuOpen={isMenuOpen}
                isMobileView={isMobileView}
                toggleMenu={setIsMenuOpen}
                rockets={data.rockets}
            />
            <SideMenu
                isMenuOpen={isMenuOpen}
                isMobileView={isMobileView}
                rockets={data.rockets}
                toggleMenu={setIsMenuOpen}
            />
            </div>
        </div>
    )
};

export default NavBar;
