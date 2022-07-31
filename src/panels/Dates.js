import React, { useState } from 'react'
import { CardGrid, Div, Group, Panel, PanelHeader, PanelHeaderBack, Search } from '@vkontakte/vkui'
import DateCard from '../components/DateCard/DateCard'
import { sortData } from '../utils/sort';


const Dates = ({ id, dates, setActivePanel }) => {
  const [value, setValue] = useState('');
  const filteredDates = sortData(dates, 'title', value)

  function hadleSearch(e) {
    setValue(e.target.value)
  }

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel('home')} />}>Памятные даты</PanelHeader>
      <Group>
        <Search
          value={value}
          onChange={hadleSearch}
          after={null}
        />
        {
          dates.length
            ? filteredDates.length
              ? <CardGrid size="l">
                {filteredDates.map((date, i) =>
                  <DateCard
                    key={i}
                    header={date.title}
                    text={date.description}
                    date={date.date}
                  />)}
              </CardGrid>
              : <Div>Ничего не найдено</Div>
            : <Div>Загрузка...</Div>
        }
      </Group>
    </Panel>
  )
}

export default Dates