import React, { Component } from 'react'
import { HeaderWrapper } from './style'
import { headerTitle } from './fixture'

class Header extends Component {

    renderHeaderView = (list) => {
        return <h1 key={list}>{list}</h1>
    }
    render() {
        const HeaderView = headerTitle.map(this.renderHeaderView)

        return (
            <HeaderWrapper>
                {HeaderView}
            </HeaderWrapper>
        )
    }
}

export default Header
export { Header }