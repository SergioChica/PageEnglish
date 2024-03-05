import React from 'react'
import { Main } from '../Layouts/Main/Main'

import { Cards } from '../Cards/Cards'


import flagColombian from '../../assets/colombia.jpg'


export const Home = () => {
    
  return (
    <>
    <Main>
        <div className="containerMain">
            <section className='sectionOne'>
                <div className="titleAndText">
                <h2 className='titleMain'>Acerca de colombia</h2>
                <p className='textMain'>Colombia es un país del extremo norte de Sudamérica. Su paisaje cuenta con bosques tropicales, las montañas de los Andes y varias plantaciones de café.</p>
                </div>
                <img src={flagColombian} alt="" className='imgMain' />
            </section>
            <section className='sectionTwo'>
            <div className="containerTitleAndCards">
                <h2 className='titleCards'>Lugares por visitar</h2>
                <div className="containerCards">
                <div className="cards">
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                    <Cards img={flagColombian} title='example' text='hola' location='B.limonar' />
                </div>
            </div>
            </div>
            </section>
        </div>
    </Main>
    </>
  )
}
