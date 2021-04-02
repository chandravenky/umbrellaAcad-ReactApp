import React from 'react';
import Card from './Card'

const CardList = ({ siblings }) => {

    return (
        <div>
            {
                siblings.map((user, i) => {
                return (<Card 
                            key = {i} 
                            number = {siblings[i].Number} 
                            nickname = {siblings[i].Nickname} 
                            fullname = {siblings[i].FullName} 
                            email = {siblings[i].Email}/>
                        )
            })
            }
      </div>
    )
}

export default CardList;