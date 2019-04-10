import React, { Component } from 'react'
import { HeaderWrapper } from './style'
import { headerTitle } from './fixture'

class Header extends Component {

    renderHeaderView = (list) => {
        return <h4 key={list}>{list}</h4>
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