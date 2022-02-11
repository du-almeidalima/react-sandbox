import React from 'react'
import styled from 'styled-components'

export const CarouselImageContainer: React.FC<{ currentIndex: number }> = ({
	children,
	currentIndex = 0,
}) => {
	const childrenArray = React.Children.toArray(children)

	return <>{childrenArray[currentIndex]}</>
}

const CarouselImageStyled = styled.img`
	max-height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: bottom left;
`

export const CarouselImage: React.FC<{ src: string; alt: string }> = ({
	src,
	alt,
}) => <CarouselImageStyled src={src} alt={alt} />
