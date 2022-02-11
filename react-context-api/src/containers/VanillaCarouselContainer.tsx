import React, { useState } from 'react'

import { Carousel } from '../components/Carousel/Carousel'
import {
	CarouselButton,
	CarouselButtonsContainer,
} from '../components/Carousel/CarouselButtons'
import {
	CarouselImage,
	CarouselImageContainer,
} from '../components/Carousel/CarouselImage'

import { IMAGES_URL } from '../data'

export const VanillaCarouselContainer: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const _handleNext = () => {
		if (currentIndex === IMAGES_URL.length - 1) {
			setCurrentIndex(0)
		} else {
			setCurrentIndex(prevState => prevState + 1)
		}
	}

	const _handlePrevious = () => {
		if (currentIndex === 0) {
			setCurrentIndex(IMAGES_URL.length - 1)
		} else {
			setCurrentIndex(prevState => prevState - 1)
		}
	}

	return (
		<Carousel>
			<CarouselImageContainer currentIndex={currentIndex}>
				{IMAGES_URL.map(url => (
					<CarouselImage alt='Cat 1' key={url} src={url} />
				))}
			</CarouselImageContainer>
			<CarouselButtonsContainer>
				<CarouselButton onClick={_handlePrevious}>
					<i className='iconoir-skip-prev-outline' />
				</CarouselButton>
				<CarouselButton onClick={_handleNext}>
					<i className='iconoir-skip-next-outline' />
				</CarouselButton>
			</CarouselButtonsContainer>
		</Carousel>
	)
}
