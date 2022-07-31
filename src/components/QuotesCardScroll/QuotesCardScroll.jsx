import React, { useContext } from 'react'
import { Button, CardScroll, Div, Group, Header } from '@vkontakte/vkui'
import QuoteCard from '../QuoteCard/QuoteCard'
import { Context } from '../../context';

const QuotesCardScroll = ({ quotes }) => {
  const { setActivePanel } = useContext(Context);

  return (
    <Group
      mode='plane'
      separator='hide'
      header={
        <Header onClick={() => setActivePanel('quotes')}
        >Цитаты о городе
          <Button mode='tertiary'>
            Все {'->'}
          </Button>
        </Header>} >
      {
        quotes.length
          ? <CardScroll size="m">
            {quotes.slice(0, 10).map((quote, i) =>
              <QuoteCard
                key={i}
                text={quote}
              />)}
          </CardScroll>
          : <Div>Загрузка...</Div>
      }
    </Group>
  )
}

export default QuotesCardScroll