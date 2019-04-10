import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
`
const OverViewSectionWrapper = styled.div``

const ColumnWrapper = styled.div`
    display: flex;
    h4 {
        display: flex;
        flex: 0 0 30%;
        align-items: center;
    }
    div {
        padding-left: 25px;
    }
    >p {
        display: flex;
        align-items: center;
        padding-left: 25px;
    }
`

export {
    HeaderWrapper,
    OverViewSectionWrapper,
    ColumnWrapper
}