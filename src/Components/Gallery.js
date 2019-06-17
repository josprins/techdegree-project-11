import React from 'react'

const Gallery = props => (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
)

export default Gallery