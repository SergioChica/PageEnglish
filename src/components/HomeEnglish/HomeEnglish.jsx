import React from 'react'
import { useState } from 'react'
import { Main } from '../Layouts/Main/Main'
import { Header } from '../Layouts/Header/Header'
import { Footer } from '../Layouts/Footer/Footer'

import { ContainerCards } from '../ContainerCards/ContainerCards'
import { Capitals } from '../Capitals/Capitals'
import { Cards } from '../Cards/Cards'

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

export const HomeEnglish = () => {
    
  const [showContainer, setShowContainer] = useState()

  const toggleContenedor = () => {
    setShowContainer(!showContainer);
  };

  const goEspanish = () => {
    window.location.href = '/';
  };
    
  return (
    <>
    <Header>
        <div className="containerHeader">
            <h2>TurismCOL</h2>
            <h2>Explor colombian</h2>
            <div className="lenguageAndLogin">
            <div className="containerLenguage">
                <TbWorldPin onClick={toggleContenedor} />
            <div className="barSeparet"></div>
            <p className="lenguage">ES</p>
            </div>
            <p className='login'>Login</p>
            </div>
        </div>
    </Header>
    <Main>
        {showContainer && (
        <div  className="changeLenguaje">
            <div className="containerLenguaje">
            <button id='español' onClick={goEspanish}>Spanish</button>
            <button id='ingles'>English</button>
            </div>
            <button id='close' onClick={toggleContenedor}>X</button>
        </div>
        )}
        <div className="containerMain">
            <section className='sectionOne'>
                <div className="titleAndText">
                <h2 className='titleMain'>About Colombia</h2>
                <p className='textMain'>Colombia is a country in the northernmost part of South America. Its landscape features tropical forests, the Andes mountains, and several coffee plantations. In Bogotá, its high-altitude capital, the Zona Rosa district is famous for its restaurants and shops. Cartagena, on the Caribbean coast, boasts a walled colonial Old City, a 16th-century castle, and nearby coral reefs.</p>
                </div>
                <div className="titleAndSlidersCapital">
                    <h2 className='titleMain'>Capital</h2>
                    <div className="containerSliders">
                    <Capitals id='containerSliderAndTextCapital' title='Bogota' img1={bogota1} img2={bogota2} img3={bogota3} link='https://es.wikipedia.org/wiki/Bogot%C3%A1' text='Visit its history' />
                    </div>
                </div>
            </section>
            <section className='sectionTwo'>
                <ContainerCards title='Places to visit'>
                    <Cards img={salto} title='Salto De Tequendama' text='The Tequendama Falls is a natural waterfall in Colombia located in the rural area of the municipality of Soacha.' location='Soacha, Cundinamarca' />
                    
                    <Cards img={cocora} title='Parque De Cocora' text='The Cocora Valley is a natural landscape located in the Central Andean Range of the Colombian Andes.' location=' Salento, Quindío' />
                    
                    <Cards img={oro} title='Museo Del Oro' text='El Museo del Oro del Banco de la República de Colombia es una institución pública la cual su fin es la adquisición, conservación y exposición de piezas de orfebrería y alfarería de culturas indígenas' location='Bogotá, Cundinamarca' />
                    
                    <Cards img={cristales} title='Caño Cristales' text='The Gold Museum of the Banco de la República of Colombia is a public institution whose purpose is the acquisition, conservation, and exhibition of goldsmithing and pottery pieces from indigenous cultures.' location='Serranía de la Macarena' />
                    
                    <Cards img={perdida} title='Ciudad Perdida' text='Ciudad Perdida, also known as Teyuna or Buritaca-200, is one of the main archaeological sites in Colombia.' location='Sierra Nevada de Santa Marta, Magdalena' />
                    
                    <Cards img={guatape} title='Guatapé' text='Guatapé is a tourist municipality in the Andes northwest of Colombia and east of Medellín. It is famous for its houses decorated with colorful bas-reliefs. It is located near the artificial reservoir of Peñol-Guatapé, a popular water sports center.' location='Peñol Guatapé' />
                </ContainerCards>
            </section>
            <section className='sectionThree'>
                <div className="titleAndSliders">
                    <h2 className='titleMain'>Principal Cities</h2>
                    <div className="containerSliders">
                    <Capitals title='Medellin' img1={medellin1} img2={medellin2} img3={medellin3} link='https://es.wikipedia.org/wiki/Medell%C3%ADn' text='Visit its history' />
                    <Capitals title='Barranquilla' img1={barranquilla1} img2={barranquilla2} img3={barranquilla3} link='https://es.wikipedia.org/wiki/Barranquilla' text='Visit its history' />
                    <Capitals title='Cali' img1={cali1} img2={cali2} img3={cali3} link='https://es.wikipedia.org/wiki/Cali' text='Visit its history' />
                    </div>
                </div>
            </section>
            <section className='sectionFour'>
                <ContainerCards title='Hoteles'>
                    <Cards img={salto} title='La Casa Museo Salto de Tequendama' text='The Salto de Tequendama Biodiversity and Culture Museum House is a museum and mansion in San Antonio del Tequendama, Colombia.' location='Soacha, Cundinamarca' />
                    
                    <Cards img={fernando} title='Hotel San Fernando Plaza' text='The San Fernando Plaza Hotel offers luxury accommodation in Medellín, in the exclusive financial and commercial district of El Poblado, featuring a heated outdoor pool, spa facilities, and fitness center. There is a restaurant and a bar.' location='El Poblado, Medellín' />
                    
                    <Cards img={eco} title='EcoHub Hotel Medellin' text='EcoHub Hotel Medellin is located in Medellín, a 17-minute walk from El Poblado Park, and offers accommodation with a fitness center, free private parking, a terrace, and a restaurant. The hotel, which has a bar, is close to several popular attractions, about a 13-minute walk from Lleras Park and 1.7 km from La Presidenta Linear Park. The property offers 24-hour reception, airport shuttle service, room service, and free WiFi throughout the accommodation.' location='El Poblado, Medellín' />
                    
                    <Cards img={hilton} title='El Hampton by Hilton Cali' text='The Hampton by Hilton Cali offers a fitness center, 24-hour reception, and free WiFi throughout the property, and is located 200 meters from the financial district of Cali and 600 meters from the La Tertulia Museum.' location='Cali, Museo Le Tertulia' />
                    
                    <Cards img={plaza} title='Torre de Cali Plaza Hotel' text='The Torre de Cali Plaza Hotel, located in the Versalles neighborhood, is the 3rd tallest building in Colombia. The Alfonso Bonilla Aragón International Airport is 16 km away. The hotel offers free WiFi and parking. The Valle del Pacífico Conference Center is a 30-minute drive away.' location='1,5 km From the city center' />
                    
                    <Cards img={guatape} title='1714 Hotel Boutique Guatapé' text='G1714 Hotel Boutique Guatapé is located in Guatapé, 6.1 km from Piedra del Peñol, and offers accommodation with a garden, free private parking, terrace, and restaurant. The hotel features an outdoor pool, room service, and free WiFi throughout the property.' location='6,1 km From Piedra del Peñol' />
                </ContainerCards>
            </section>
            <section className='sectionFour'>
                <ContainerCards title='Restaurantes'>
                    <Cards img={chato} title='El chato' text='El Chato is a contemporary Colombian bistro that pays homage to producers. The kitchen, led by chef Álvaro Clavijo, applies global techniques to highlight local ingredients.' location='Bogotá, Colombia' />
                    
                    <Cards img={limonar} title='Parrilla El Limonar' text='Parrilla Limonar stands out for having the best cuts of meat at the best price, which is why it is the best grilled meat in Armenia.' location='Armenia, Quindío' />
                    
                    <Cards img={leo} title='Leo' text='Leo and Lauras Room Under the vision of chef Leonor Espinosa and sommelier Laura Hernandez it merges culinary philosophy and liquid proposal to create a sensory journey that redefines the narrative of Colombian gastronomy celebrating its lush biodiversity' location='Bogotá' />
                    
                    <Cards img={salvo} title='Salvo Patria' text='A cry for freedom, respect, and authenticity merge to adorn the streets of one of the most traditional neighborhoods of Bogotá.' location='bogota, colombia' />
                    
                    <Cards img={oda} title='Oda' text='The herbs and liquors from La Guajira and El Amazonas take center stage on our bar menu under the concept of a recipe book, cocktail making inspired by the diversity of the two poles of Colombia.' location=' Bogotá, Colombia' />
                    
                    <Cards img={xo} title='X.O.' text='As a result of exploring, researching, and conceptualizing the countrys culinary landscape the complexity of the production chain is appreciated by directly supporting those who work the land alongside their families and communities' location='Medellín, Antioquia' />
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
