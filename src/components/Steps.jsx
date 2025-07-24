import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import "./steps.css"

const Steps = ({currentStep}) => {
  return (
    <div className='steps'>
      <div className="step active">
        <AiOutlineUser></AiOutlineUser>
        <p>Usuário</p>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <AiOutlineStar></AiOutlineStar>
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <FiSend></FiSend>
        <p>Enviar</p>
      </div>
    </div>
  )
}

export default Steps
