import React from 'react'
import { CarouselButtonsContainer } from '../components/Carousel/CarouselButtons'
import { CarouselImage } from '../components/Carousel/CarouselImage'

import { IMAGES_URL } from '../data'
import {
	ContextCarousel,
	ContextCarouselImageContainer,
	ContextCarouselNextButton,
	ContextCarouselPreviousButton,
} from '../components/ContextCarousel/ContextCarousel'

export const ContextCarouselContainer: React.FC = () => {
	return (
		<ContextCarousel>
			<ContextCarouselImageContainer>
				{IMAGES_URL.map(url => (
					<CarouselImage alt='Cat 1' key={url} src={url} />
				))}
			</ContextCarouselImageContainer>
			<CarouselButtonsContainer>
				<ContextCarouselPreviousButton />
				<ContextCarouselNextButton />
			</CarouselButtonsContainer>
		</ContextCarousel>
	)
}
