import React from 'react'
import { useState } from 'react'
import { Main } from '../Layouts/Main/Main'
import { Header } from '../Layouts/Header/Header'
import { Footer } from '../Layouts/Footer/Footer'


import { ContainerCards } from '../ContainerCards/ContainerCards'
import { Cards } from '../Cards/Cards'
import { Capitals } from '../Capitals/Capitals'

import bogota1 from '../../assets/bogota1.jpg'
import bogota2 from '../../assets/bogota2.jpg'
import bogota3 from '../../assets/bogota3.jpg'

import salto from '../../assets/salto.jpg'
import cocora from '../../assets/cocora.jpg'
import oro from '../../assets/oro.jpg'
import cristales from '../../assets/cristales.jpg'
import perdida from '../../assets/perdida.jpg'
import guatape from '../../assets/guatape.jpg'

import medellin1 from '../../assets/medellin1.jpg'
import medellin2 from '../../assets/medellin2.jpg'
import medellin3 from '../../assets/medellin3.jpg'
import barranquilla1 from '../../assets/barranquilla1.jpg'
import barranquilla2 from '../../assets/barranquilla2.jpg'
import barranquilla3 from '../../assets/barranquilla3.jpg'
import cali1 from '../../assets/cali1.jpg'
import cali2 from '../../assets/cali2.jpg'
import cali3 from '../../assets/cali3.jpg'

import fernando from '../../assets/fernando.jpg'
import eco from '../../assets/eco.jpg'
import hilton from '../../assets/hilton.jpg'
import plaza from '../../assets/plaza.jpg'

import chato from '../../assets/chato.jpeg'
import leo from '../../assets/leo.jpg'
import limonar from '../../assets/limonar.jpg'
import salvo from '../../assets/salvo.jpg'
import oda from '../../assets/oda.jpg'
import xo from '../../assets/xo.jpg'

import { FaInstagram } from "react-icons/fa";
import { TbWorldPin } from "react-icons/tb";

export const Home = () => {
    
  const [showContainer, setShowContainer] = useState()

  const toggleContenedor = () => {
    setShowContainer(!showContainer);
  };

  const goEnglish = () => {
    window.location.href = '/HomeEnglish';
  };
    
  return (
    <>
    <Header>
        <div className="containerHeader">
            <h2>TurismCOL</h2>
            <h2>Explora colombia</h2>
            <div className="lenguageAndLogin">
            <div className="containerLenguage">
                <TbWorldPin onClick={toggleContenedor} />
            <div className="barSeparet"></div>
            <p className="lenguage">ES</p>
            </div>
            <p className='login'>Iniciar sesion</p>
            </div>
        </div>
    </Header>
    <Main>
        {showContainer && (
        <div  className="changeLenguaje">
            <div className="containerLenguaje">
            <button id='español'>Español</button>
            <button id='ingles' onClick={goEnglish}>Ingles</button>
            </div>
            <button id='close' onClick={toggleContenedor}>X</button>
        </div>
        )}
        <div className="containerMain">
            <section className='sectionOne'>
                <div className="titleAndText">
                <h2 className='titleMain'>Acerca de colombia</h2>
                <p className='textMain'>Colombia es un país del extremo norte de Sudamérica. Su paisaje cuenta con bosques tropicales, las montañas de los Andes y varias plantaciones de café. En Bogotá, su capital a gran altura, el distrito Zona Rosa es famoso por sus restaurantes y tiendas. Cartagena, en la costa del Caribe, tiene una Ciudad Antigua colonial amurallada, un castillo del siglo XVI y arrecifes de coral cercanos.</p>
                </div>
                <div className="titleAndSlidersCapital">
                    <h2 className='titleMain'>Capital</h2>
                    <div className="containerSliders">
                    <Capitals id='containerSliderAndTextCapital' title='Bogota' img1={bogota1} img2={bogota2} img3={bogota3} link='https://es.wikipedia.org/wiki/Bogot%C3%A1' />
                    </div>
                </div>
            </section>
            <section className='sectionTwo'>
                <ContainerCards title='Lugares por visitar'>
                    <Cards img={salto} title='Salto De Tequendama' text='El salto del Tequendama es una cascada natural de Colombia ubicada en la zona rural del municipio de Soacha.' location='Soacha, Cundinamarca' />
                    
                    <Cards img={cocora} title='Parque De Cocora' text='El valle de Cocora es un paisaje natural localizado en la cordillera central de los Andes colombianos.' location=' Salento, Quindío' />
                    
                    <Cards img={oro} title='Museo Del Oro' text='El Museo del Oro del Banco de la República de Colombia es una institución pública la cual su fin es la adquisición, conservación y exposición de piezas de orfebrería y alfarería de culturas indígenas' location='Bogotá, Cundinamarca' />
                    
                    <Cards img={cristales} title='Caño Cristales' text='Caño Cristales es un río de Colombia que está ubicado en la sierra de la Macarena, en el municipio del mismo nombre, en el departamento del Meta.' location='Serranía de la Macarena' />
                    
                    <Cards img={perdida} title='Ciudad Perdida' text='Ciudad Perdida, también conocida como Teyuna o Buritaca-200, es uno de los principales sitios arqueológicos de Colombia.​' location='Sierra Nevada de Santa Marta, Magdalena' />
                    
                    <Cards img={guatape} title='Guatapé' text='Guatapé es un municipio turístico de los Andes al noroeste de Colombia y al este de Medellín. Es famoso por sus casas decoradas con bajorrelieves de colores. Está situado cerca del embalse artificial de Peñol-Guatapé, un centro de deportes acuáticos muy concurrido.' location='Peñol Guatapé' />
                </ContainerCards>
            </section>
            <section className='sectionThree'>
                <div className="titleAndSliders">
                    <h2 className='titleMain'>Ciudades Principales</h2>
                    <div className="containerSliders">
                    <Capitals title='Medellin' img1={medellin1} img2={medellin2} img3={medellin3} link='https://es.wikipedia.org/wiki/Medell%C3%ADn' />
                    <Capitals title='Barranquilla' img1={barranquilla1} img2={barranquilla2} img3={barranquilla3} link='https://es.wikipedia.org/wiki/Barranquilla' />
                    <Capitals title='Cali' img1={cali1} img2={cali2} img3={cali3} link='https://es.wikipedia.org/wiki/Cali' />
                    </div>
                </div>
            </section>
            <section className='sectionFour'>
                <ContainerCards title='Hoteles'>
                    <Cards img={salto} title='La Casa Museo Salto de Tequendama' text='La Casa Museo Salto de Tequendama Biodiversidad y Cultura es un museo y mansión en San Antonio del Tequendama, Colombia.' location='Soacha, Cundinamarca' />
                    
                    <Cards img={fernando} title='Hotel San Fernando Plaza' text='El Hotel San Fernando Plaza ofrece alojamiento de lujo en Medellín, en el exclusivo distrito financiero y comercial de El Poblado, y cuenta con piscina climatizada al aire libre, instalaciones de spa y centro de fitness. Hay un restaurante y un bar.' location='El Poblado, Medellín' />
                    
                    <Cards img={eco} title='EcoHub Hotel Medellin' text='EcoHub Hotel Medellin está en Medellín, a 17 min a pie de Parque El Poblado, y dispone de alojamiento con centro de fitness, parking privado gratis, terraza y restaurante. El hotel, que tiene bar, está cerca de varios lugares de interés destacados, a unos 13 min a pie de Parque Lleras y a 1,7 km de Parque lineal La Presidenta. El alojamiento ofrece recepción 24 horas, traslado para ir o volver del aeropuerto, servicio de habitaciones y wifi gratis en todo el alojamiento.' location='El Poblado, Medellín' />
                    
                    <Cards img={hilton} title='El Hampton by Hilton Cali' text='El Hampton by Hilton Cali ofrece un centro de fitness, recepción las 24 horas y WiFi gratuita en todas las instalaciones y se encuentra a 200 metros de la zona financiera de Cali y a 600 metros del Museo La Tertulia.' location='Cali, Museo Le Tertulia' />
                    
                    <Cards img={plaza} title='Torre de Cali Plaza Hotel' text='El establecimiento Torre de Cali Plaza Hotel, situado en el barrio de Versalles, es el 3er edificio más alto de Colombia. El aeropuerto internacional Alfonso Bonilla Aragón se encuentra a 16 km. El hotel ofrece WiFi y aparcamiento gratuitos. El centro de conferencias Valle del Pacífico se halla a 30 minutos en coche.' location='1,5 km del centro de la ciudad' />
                    
                    <Cards img={guatape} title='1714 Hotel Boutique Guatapé' text='G1714 Hotel Boutique Guatapé está en Guatapé, a 6,1 km de Piedra del Peñol, y dispone de alojamiento con jardín, parking privado gratis, terraza y restaurante. El hotel tiene piscina al aire libre, servicio de habitaciones y wifi gratis en todo el alojamiento.' location='6,1 km de Piedra del Peñol' />
                </ContainerCards>
            </section>
            <section className='sectionFour'>
                <ContainerCards title='Restaurantes'>
                    <Cards img={chato} title='El chato' text='El Chato es un bistró contemporáneo colombiano que rinde homenaje a los productores. La cocina, dirigida por el chef Álvaro Clavijo, aplica técnicas globales para resaltar los ingredientes locales.' location='Bogotá, Colombia' />
                    
                    <Cards img={limonar} title='Parrilla El Limonar' text='Parrilla limonar se diferencia por tener los mejroes cortes de carne al mejor precio es por eso que es la mejor carne a la parrilla en Armenia.' location='Armenia, Quindío' />
                    
                    <Cards img={leo} title='Leo' text='Leo y La Sala de Laura. Bajo la visión de la chef Leonor Espinosa y la sommelier Laura Hernández, fusiona la filosofía culinaria y la propuesta líquida para crear una travesía sensorial que redefine la narrativa de la gastronomía colombiana, celebrando su exuberante biodiversidad.' location='Bogotá' />
                    
                    <Cards img={salvo} title='Salvo Patria' text='Un grito de libertad, respeto y autenticidad se fusionan para adornar las calles de uno de los barrios más tradicionales de Bogotá' location='bogota, colombia' />
                    
                    <Cards img={oda} title='Oda' text='las hierbas y los licores de La Guajira y El Amazonas protagonizan nuestra carta de bar bajo el concepto de recetario, coctelería inspirada en la diversidad de los dos polos de Colombia.' location=' Bogotá, Colombia' />
                    
                    <Cards img={xo} title='X.O.' text='Como resultado de la exploración, investigación y conceptualización del panorama culinario del país, se valora la complejidad de la cadena productiva apoyando directamente aquellas personas quienes trabajan la tierra junto a sus familias y comunidades.' location='Medellín, Antioquia' />
                </ContainerCards>
            </section>
        </div>
    </Main>
    <Footer>    
        <h2>&copy; 2024 SergioChica </h2>
        <FaInstagram href='https://www.instagram.com/sergiochica._/' />
    </Footer>   
    </>
  )
}
