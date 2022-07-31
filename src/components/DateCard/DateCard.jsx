import React from 'react'
import { Button, ContentCard } from '@vkontakte/vkui'
import { formatDate } from '../../utils/date'
import './DateCard.css'

const DateCard = ({ header, date, text, onClick }) => {
  return (
    <ContentCard
      subtitle={formatDate(date)}
      header={header}
      text={text}
      caption={onClick && <Button mode='outline' onClick={onClick}>Подробнее</Button>}
      className={onClick &&'dateCard'}
    />
  )
}

export default DateCard