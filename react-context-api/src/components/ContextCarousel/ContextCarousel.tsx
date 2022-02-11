import React, { useContext, useState } from 'react'
import { Carousel } from '../Carousel/Carousel'
import { CarouselImageContainer } from '../Carousel/CarouselImage'
import { IMAGES_URL } from '../../data'
import { CarouselButton } from '../Carousel/CarouselButtons'

type CarrouselContext = {
	currentIndex: number
	nextImage: VoidFunction
	previousImage: VoidFunction
}

export const CarouselContext = React.createContext<CarrouselContext>({
	currentIndex: 0,
	nextImage: () => null,
	previousImage: () => null,
})

// ==== ContextCarousel ====
export const ContextCarousel: React.FC = ({ children }) => {
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
		<CarouselContext.Provider
			value={{
				currentIndex,
				nextImage: _handleNext,
				previousImage: _handlePrevious,
			}}
		>
			<Carousel>{children}</Carousel>
		</CarouselContext.Provider>
	)
}

// ==== ContextCarouselContainer ====
export const ContextCarouselImageContainer: React.FC = ({ children }) => {
	const { currentIndex } = useContext(CarouselContext)

	return (
		<CarouselImageContainer currentIndex={currentIndex}>
			{children}
		</CarouselImageContainer>
	)
}

// ==== ContextCarouselButtons ====
export const ContextCarouselNextButton = () => {
	const { nextImage } = useContext(CarouselContext)

	return (
		<CarouselButton onClick={nextImage}>
			<i className='iconoir-skip-next-outline' />
		</CarouselButton>
	)
}

export const ContextCarouselPreviousButton = () => {
	const { previousImage } = useContext(CarouselContext)

	return (
		<CarouselButton onClick={previousImage}>
			<i className='iconoir-skip-prev-outline' />
		</CarouselButton>
	)
}
