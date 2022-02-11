import React from 'react'
import styled from 'styled-components'

const CarouselButtonsContainerStyled = styled.div`
	display: inline-flex;
	width: fit-content;
	gap: 0.5rem;
	place-self: center;
`

export const CarouselButtonsContainer: React.FC = ({ children }) => (
	<CarouselButtonsContainerStyled>{children}</CarouselButtonsContainerStyled>
)

const CarouselButtonStyled = styled.button`
	padding: 0.5rem 2rem;
	cursor: pointer;
	font-size: 1rem;
	text-align: center;
`

export const CarouselButton: React.FC<{ onClick: VoidFunction }> = ({
	children,
	onClick,
}) => {
	return (
		<CarouselButtonStyled onClick={onClick}>{children}</CarouselButtonStyled>
	)
}
