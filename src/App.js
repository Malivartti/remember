import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, ModalRoot, ContentCard, ModalPage } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { getPeople, getDates } from './api'

import Home from './panels/Home';
import Persons from './panels/Persons';
import Dates from './panels/Dates';
import quotesList from './data/quotes';
import Quotes from './panels/Quotes';
import Welcome from './panels/Welcome';
import { Context } from './context';
import { formatDate } from './utils/date';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('welcome');
	const [people, setPeople] = useState([]);
	const [dates, setDates] = useState([]);
	const quotes = quotesList
	const [platform, setPlatform] = useState('')
	const [currentDateCard, setCurrentDateCard] = useState({})

	const [activeModal, setActiveModal] = useState(null);
	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
			<ModalPage id="date">
				{currentDateCard.header &&
					<ContentCard
						subtitle={formatDate(currentDateCard.date)}
						header={currentDateCard.header}
						text={currentDateCard.text}
					/>
				}

			</ModalPage>
		</ModalRoot>
	)

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
			if (type === "VKWebAppGetLaunchParamsResult") {
				setPlatform(data.vk_platform)
			}
		});
	}, []);

	useEffect(async () => {
		try {
			const people = await getPeople();
			setPeople(people)
		} catch (e) {
		}
	}, [])

	useEffect(async () => {
		try {
			const dates = await getDates();
			setDates(dates)
		} catch (e) {

		}
	}, [])

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<Context.Provider value={{ setActivePanel, setActiveModal, platform }}>
						<SplitLayout modal={modal}>
							<SplitCol>
								<View activePanel={activePanel}>
									<Welcome id='welcome' setActivePanel={setActivePanel} />
									<Home id='home' quotes={quotes} people={people} dates={dates} setCurrentDateCard={setCurrentDateCard} />
									<Persons id='people' people={people} setActivePanel={setActivePanel} />
									<Dates id="dates" dates={dates} setActivePanel={setActivePanel} />
									<Quotes id="quotes" quotes={quotes} setActivePanel={setActivePanel} />
								</View>
							</SplitCol>
						</SplitLayout>
					</Context.Provider>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
