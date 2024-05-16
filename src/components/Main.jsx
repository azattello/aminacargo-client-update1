import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';
import guide from '../assets/img/guide.png';
import track from '../assets/img/track.png';
import geo from '../assets/img/geo.png';
import handshake from '../assets/img/handshake.png';
import logo from '../assets/img/logo.jpg'

import Tab from './Tab'

const titlePage = "Главная"; 
const namecargo = "Amina Cargo"

const Main = () => {
    return (

            <div className="main">
                 <div className="title">
                        {titlePage}
                    </div>
                <header className="header">
                  
                    <div className="header__mini">
                    <div className="info__cargo">
                        <h1 className="namecargo">{namecargo}</h1>
                        <img src={logo} className="logo2" alt="" />

                    </div>

                   
                    </div>
                    
                      


                </header>
                <div className="section">

                        <div className="blocks__info">

                           
                            <Link to="/parcels">
                            <div className="block_info ">
                                <h3 className='text__block_info'>Отследить трек номер</h3>
                                <img className="iconMain" src={track} alt="" />
                            </div>
                            </Link>
                            


                            
                    </div>


                  

                    
                    


            
                    
                    
                </div>

               

                <div className="area"></div>
                
                <Tab/>
                

                  
                
            </div>

    )
}

export default Main;