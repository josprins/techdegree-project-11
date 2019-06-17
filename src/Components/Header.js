import React from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'

const Header = ({ onSearch }) => (
    <div>
        <SearchForm onSearch={onSearch}/>
        <Nav />
    </div>
)

export default Header