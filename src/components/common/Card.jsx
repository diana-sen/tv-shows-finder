import '../../styles/card.css'

const Card = ({ image, name, rating }) => {
  return (
    <section className='card bg-secondary text-light'>
      <img loading='lazy' src={image?.medium} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name}</h5>
        <p className='card-text'>{rating?.average}</p>
      </div>
    </section>
  )
}
export default Card
