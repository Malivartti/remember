import React, { useState } from 'react'
import { CardGrid, Group, Panel, PanelHeader, PanelHeaderBack, Div, Search } from '@vkontakte/vkui'
import PersonCard from '../components/PersonCard/PersonCard'
import { sortData } from '../utils/sort';

const Persons = ({ id, people, setActivePanel }) => {
  const [value, setValue] = useState('');
  const filteredPeople = sortData(people, 'personName', value)

  function hadleSearch(e) {
    setValue(e.target.value)
  }

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel('home')} />}>Медаль "За оборону Ленинграда"</PanelHeader>
      <Group>
        <Search
          value={value}
          onChange={hadleSearch}
          after={null}
        />
        {
          people.length
            ? filteredPeople.length
              ? <CardGrid size="l">
                {filteredPeople.map((person, i) =>
                  <PersonCard
                    key={i}
                    header={person.personName}
                    text={person.story}
                    link={person.postLink}
                  />)}
              </CardGrid>
              : <Div>Ничего не найдено</Div>
            : <Div>Загрузка...</Div>
        }
      </Group>
    </Panel>
  )
}

export default Persons