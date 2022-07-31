import React from 'react'
import { Panel, Text, Button, Header, SplitLayout } from '@vkontakte/vkui'
import bg from '../img/bg.png'

const Welcome = ({ id, setActivePanel }) => {
  return (
    <Panel id={id}>
      <SplitLayout style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", minHeight: "100vh", marginTop: -50 }}>
        <img src={bg} alt="img" />
        <Header >Добро пожаловать!</Header>
        <Text style={{textAlign: "center", maxWidth: 400, marginBottom: 20}}>Сохраним историю о гражданских защитниках блокадного Ленинграда и памятных датах города</Text>
        <Button onClick={() => setActivePanel('home')}>Начать</Button>
      </SplitLayout>
    </Panel>
  )
}

export default Welcome