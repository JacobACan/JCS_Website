export enum ArrowType {
  Right = 'right',
  Left = 'left',
  Up = 'up',
  Down = 'down',
}
interface Props {
  type: ArrowType
  handleClick: () => void
}
import RightArrow from './media/RightArrow.png'

const Arrow = ({ type, handleClick }: Props) => {
  return (
    <button onClick={handleClick} className={`arrow-${type}`}>
      <img className="arrow" src={RightArrow} alt={`Arrow ${type}`} />
    </button>
  )
}

export default Arrow
