import './Thanks.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const emojiData ={
  unsatisfied: <BsFillEmojiFrownFill></BsFillEmojiFrownFill>,
  neutral: <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>,
  satisfied: <BsFillEmojiSmileFill></BsFillEmojiSmileFill>,
  very_satisfied: <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>,
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opnião é muito importante, em breve voce recebera um cupom de 10% de desconto para sua proxima compra</p>
      <p>Para concluir sua avaliação clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo de sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export { Thanks }
