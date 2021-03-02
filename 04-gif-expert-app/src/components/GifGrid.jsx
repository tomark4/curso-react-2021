import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';

const GifGrid = ({name}) => {
    const [imgs, setImgs] = useState([]);

    const getGifts = async () => {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=RVYdMal6qjVceRiZu8aU55VChVtkJ2Wo&q=sonic+hedgehog&limit=10`;
        try {
            const resp = await fetch(url)
            const {data} = await resp.json()
            const gifs = data.map( img => ({
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }));
            setImgs(gifs);
        } catch( err){
            console.log(err);
        }
    }

    useEffect(() => {
        getGifts()
    },[])

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {imgs.map( img => (
                    <GifGridItem
                    key={img.id}
                    {...img} />
                ))}
            </ul>
        </>
    )
}

GifGrid.propTypes = {
    name: PropTypes.string.isRequired
}

export default GifGrid
