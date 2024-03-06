import React from 'react'

export const ContainerCards = ({title,children}) => {
  return (
    <div className="containerTitleAndCards">
        <h2 className='titleCards'>{title}</h2>
        <div className="containerCards">
            <div className="cards">
                {children}
            </div>
        </div>
    </div>
  )
}
