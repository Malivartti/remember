import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import PeopleCardScroll from '../components/PeopleCardScroll/PeopleCardScroll';
import DatesCardScroll from '../components/DatesCardScroll/DatesCardScroll';
import QuotesCardScroll from '../components/QuotesCardScroll/QuotesCardScroll';

const Home = ({ id, quotes, people, dates, setCurrentDateCard }) => {
	return (
		<Panel id={id}>
			<PanelHeader>Помни</PanelHeader>
			<QuotesCardScroll quotes={quotes} />
			<PeopleCardScroll people={people} />
			<DatesCardScroll dates={dates} setCurrentDateCard={setCurrentDateCard}/>
		</Panel>
	)
}


export default Home;
