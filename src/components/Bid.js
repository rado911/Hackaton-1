import React, { useContext, useEffect, useState } from 'react';
import ArtContext from '../context/ArtContext';

const Bid = ({addBidder}) => {
    const [bidder, setBidder] = useState('');
    const [bid, setBid] = useState('');
    const [country, setCountry] = useState('');
    const {cow, setCow} = useContext(ArtContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBidder(bidder, bid, country);
    }


        
    return (
        <form style={{ alignContent:"center"}} onSubmit={handleSubmit} className="form">
            <h3 style={{alignSelf:'center'}}>Your bid</h3>
            <label style={{width:'70%', marginLeft:'42%'}}><input style={{border:'2px solid black'}} type="text" value={bidder} placeholder="Name" name="name" onChange={(e) => setBidder(e.target.value)} /></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input style={{border:'2px solid black'}}  type="email" name="email" placeholder="E-mail" /></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input style={{border:'2px solid black'}}  type="text" value={country} name="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)} /></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input style={{border:'2px solid black'}}  type="text" value={bid} name="bid" placeholder="Your Bid" onChange={(e) => setBid(e.target.value)} /> </label>
            
            <button style={{ width: '200px', marginTop:'1%' }} type="submit">Place your bid</button>
        </form>
    )
}

export default Bid;


