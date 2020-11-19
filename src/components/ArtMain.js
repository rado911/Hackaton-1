import React, { useContext, useState } from 'react';
import ArtContext from '../context/ArtContext';
import './ArtMain.css';
import {v1 as uuid} from 'uuid'
import Bid from './Bid'

function ArtMain(props) {
    const [name, setName] = useState([
        {name: 'radovan', bid: '4 cows', id: 25}
    ]);

    const addBidder = (bidder, bid) => {
        setName([...name,{name :bidder, bid , id: uuid()}]);
    }
    const { art } = useContext(ArtContext);

    const priceGenerator = () => {
        const cow = Math.floor((Math.random() * 10) + 1);
        return (cow)
    }


    return (
        <div className="artPiece">
            <h1>Name of artpiece</h1>
            <div className="image">
                Image here
            </div>
            <div className="price">
                <h3>Price</h3>
                <img alt="cow" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/16/11/21/cow-35561_960_720.png" />
                <h4> X {priceGenerator()}</h4>
                <img alt="chicken" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png" />
                <h4> X {priceGenerator() * 5}</h4>
                <img alt="goat" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/26/19/56/goat-42973_960_720.png" />
                <h4> X {priceGenerator() * 2}</h4>
                <img alt="stone" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2013/07/13/01/23/crystals-155644_960_720.png" />
                <h4> X {priceGenerator() / 2}</h4>
            </div>
            <div className="bids">
                <ul>
                    {name.map(e => <li style={{listStyle:"none"}} key={e.id}>{e.name} bids {e.bid} </li>)}
                    </ul>   
            </div>
        <Bid addBidder={addBidder}/>
        </div>
    )
}

export default ArtMain;