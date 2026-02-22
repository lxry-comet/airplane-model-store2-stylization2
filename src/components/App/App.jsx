import '../../App.css'
import planes from '../../json/planes.json'
import PlanesList from '../PlanesList/PlanesList.jsx'
import Section from '../Section/Section.jsx'

export default function App() {
	return (
		<>
			<Section title='Магазин моделей літаків'>
				<PlanesList items={planes} />
			</Section>
		</>
	)
}
