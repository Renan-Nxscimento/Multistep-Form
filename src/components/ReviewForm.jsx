import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input 
          type="radio" 
          value='unsatisfied' 
          name='review' 
          required
          checked={data.review === 'unsatisfied'} 
          onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill></BsFillEmojiFrownFill>
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input 
          type="radio" 
          value='neutral' 
          name='review' 
          required
          checked={data.review === 'neutral'} 
          onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>
          <p>Poderia ser melhor</p>
        </label>
        <label className='radio-container'>
          <input 
          type="radio" 
          value='satisfied' 
          name='review' 
          required
          checked={data.review === 'satisfied'} 
          onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiSmileFill></BsFillEmojiSmileFill>
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input 
          type="radio" 
          value='very-satisfied'
          name='review' 
          required
          checked={data.review === 'very-satisfied'} 
          onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea 
        name="comment" 
        id="comment" 
        placeholder='Conte como foi a sua experiência'
        value={data.comment || ''} 
        onChange={(e) => updateFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export { ReviewForm }
