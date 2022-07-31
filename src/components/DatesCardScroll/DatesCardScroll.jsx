import React, { useContext } from 'react'
import { Button, CardScroll, Div, Group, Header } from '@vkontakte/vkui'
import DateCard from '../DateCard/DateCard';
import { Context } from '../../context';

const DatesCardScroll = ({ dates, setCurrentDateCard }) => {
  const {setActivePanel, setActiveModal} = useContext(Context);

  function setCurrent(date, header, text) {
    setCurrentDateCard({header, text, date })
    setActiveModal('date')
  }
  
  return (
    <Group
      mode='plane'
      separator='hide'
      header={<Header onClick={() => setActivePanel('dates')}>Памятные даты <Button mode='tertiary'>Все {'->'}</Button></Header>}>
      {
        dates.length
          ? <CardScroll size="m">
            {dates.slice(0, 10).map((date, i) =>
              <DateCard
                key={i}
                header={date.title}
                text={date.description}
                date={date.date}
                onClick={() => setCurrent(date.date, date.title, date.description)}
              />)}
          </CardScroll>
          : <Div>Загрузка...</Div>
      }
    </Group>
  )
}

export default DatesCardScroll