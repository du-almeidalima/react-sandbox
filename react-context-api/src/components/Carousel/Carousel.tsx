import React from 'react'
import styled from 'styled-components'

const CarouselStyled = styled.div`
	width: 500px;
	height: 400px;
	display: grid;
	grid-template-rows: 4fr 1fr;
	gap: 3rem;
`

export const Carousel: React.FC = ({ children }) => {
	return <CarouselStyled>{children}</CarouselStyled>
}
