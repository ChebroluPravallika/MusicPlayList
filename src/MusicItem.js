import {AiOutlineDelete} from 'react-icons/ai'
import './App.css'

const MusicItem = props => {
  const {each, onDeleteItem} = props
  const {id} = each
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img src={each.imageUrl} alt="track" className="image" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{color: 'white', margin: '0px'}}>{each.name}</p>
            <p style={{color: ' #3b82f6', marginTop: '10px'}}>{each.genre}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: '25px',
        }}
      >
        <p className="duration">{each.duration}</p>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          testid="delete"
        >
          <AiOutlineDelete color="white" className="deleteIcon" />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
