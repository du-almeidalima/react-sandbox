import './App.css'
import styled from 'styled-components'
import { VanillaCarouselContainer } from './containers/VanillaCarouselContainer'
import { ContextCarouselContainer } from './containers/ContextCarouselContainer'

const Container = styled.main`
	height: 100vh;
	width: 100vw;
	display: flex;
	gap: 2rem;
	justify-content: center;
	align-items: center;
`

function App() {
	return (
		<Container>
			<div>
				<h2 style={{ textAlign: 'center' }}>Vanilla Carousel</h2>
				<VanillaCarouselContainer />
			</div>

			<div>
				<h2 style={{ textAlign: 'center' }}>Context Carousel</h2>
				<ContextCarouselContainer />
			</div>
		</Container>
	)
}

export default App
