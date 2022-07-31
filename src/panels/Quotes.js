import React from 'react'
import { CardGrid, Group, Panel, PanelHeader, PanelHeaderBack, Div } from '@vkontakte/vkui'
import QuoteCard from '../components/QuoteCard/QuoteCard'

const Quotes = ({ id, quotes, setActivePanel }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel('home')} />}>Цитаты о городе</PanelHeader>
      <Group>
        {quotes
          ? <CardGrid size="l">
            {quotes.map((quote, i) =>
              <QuoteCard
                key={i}
                text={quote}
              />)}
          </CardGrid>
          : <Div>Загрузка...</Div>
        }
      </Group>
    </Panel>
  )
}

export default Quotes