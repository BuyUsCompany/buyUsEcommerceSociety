import { useState } from 'react'
import './cardInfo.css'

interface ICardInfoProps {
  local: string
}

export default function CardInfo(props : ICardInfoProps) {
  const [moreDetails, setMoreDetails] = useState(false)

  function showDetails(){
    return setMoreDetails(!moreDetails)
  }

  return (
    <div className='card-info'>
      <span>Local: {props.local}</span>
      <div className='address'>
        <span>Bairro Santa Mata</span>
        <span>Rua desconhecida</span>
      </div>
      <span className='free-time'>Horarios Disponíveis: 10</span>
      <button type='button' onClick={showDetails}>Mais Detalhes</button>

      {moreDetails ? 
      <div className='more-details'>
        <span>Horarios Disponíveis</span>
        <span>10:00 - 11:00</span>
        <span>11:00 - 12:00</span>
        <span>13:00 - 14:00</span>
        <span>17:00 - 18:00</span>
        <button>Quero marcar</button>
      </div>
      : ''}
    </div>
  )
}