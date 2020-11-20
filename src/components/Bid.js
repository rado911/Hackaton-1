import React, { useEffect, useState } from 'react';

const Bid = ({addBidder}) => {
    const [bidder, setBidder] = useState('');
    const [bid, setBid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBidder(bidder, bid);
    }


        
    return (
        <form onSubmit={handleSubmit} className="form">
            <h3 style={{alignSelf:'center'}}>Your bid</h3>
            <label style={{width:'70%', marginLeft:'42%'}}><input type="text" value={bidder} placeholder="Name" name="name" onChange={(e) => setBidder(e.target.value)} /></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input type="email" name="email" placeholder="E-mail" /></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input type="text" name="adress" placeholder="Address"/></label>
            <label style={{width:'70%', marginLeft:'42%'}}><input type="text" value={bid} name="bid" placeholder="Your Bid" onChange={(e) => setBid(e.target.value)} /> </label>
            <div>
                <button><img alt="cow" style={{ width: '50px', height:'50px' }} src="https://cdn.pixabay.com/photo/2012/04/16/11/21/cow-35561_960_720.png"></img></button>
                <button><img alt="chicken" style={{ width: '50px', height:'50px' }} src="https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png"></img></button>
                <button><img alt="goat" style={{ width: '50px', height:'50px' }} src="https://cdn.pixabay.com/photo/2012/04/26/19/56/goat-42973_960_720.png"></img></button>
                <button><img alt="stone" style={{ width: '50px', height:'50px' }} src="https://cdn.pixabay.com/photo/2013/07/13/01/23/crystals-155644_960_720.png"></img></button>
            </div>
            <button style={{ width: '200px', marginTop:'1%' }} type="submit">Place your bid</button>
        </form>
    )
}

export default Bid;


