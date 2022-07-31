import React, { useContext } from 'react'
import { Button, CardScroll, Div, Group, Header } from '@vkontakte/vkui'
import PersonCard from '../PersonCard/PersonCard';
import { Context } from '../../context';

const PeopleCardScroll = ({ people }) => {
  const {setActivePanel} = useContext(Context)
  return (
    <Group
      mode='plane'
      separator='hide'
      header={<Header onClick={() => setActivePanel('people')}>Медаль "За оборону Ленинграда" <Button mode='tertiary'>Все {'->'}</Button></Header>}>
      {
        people.length
          ? <CardScroll size="m">
            {people.slice(0, 10).map((person, i) =>
              <PersonCard
                key={i}
                header={person.personName}
                text={person.story}
                link={person.postLink}
              />)}
          </CardScroll>
          : <Div>Загрузка...</Div>
      }
    </Group>
  )
}

export default PeopleCardScroll