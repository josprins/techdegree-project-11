import React from 'react'
import Gallery from './Gallery'

const Container = props => {

    const results = props.data
    let pictures = results.map(pic =>
        <Gallery 
                title={pic.title}
                key={pic.id} 
                url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
            />
    )

    return(
        <ul className="Container">
            {pictures}
        </ul>
    )
}

export default Container