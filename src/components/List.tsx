import {Sub} from '../types';

interface Props {
    subs: Array<Sub>
    onDeleteSub: (nick: string) => void
}



const List = ({ subs, onDeleteSub }: Props) => {
    const renderList = () => {
        return subs.map(sub => {
            return (
                <li key={sub.nick} style={{ position: 'relative', padding: '10px', borderBottom: '1px solid #ccc' }}>
                    <button 
                        onClick={() => onDeleteSub(sub.nick)} 
                        style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        border: 'none',
                        background: 'transparent',
                        color: 'red',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '5px'
                        }}
                    >
                        ✕
                    </button>
                    <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                    <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                    <p>{sub.sexo}</p>
                    <p>{sub.description?.substring(0, 100)}</p>
                    <p>{sub.check=='false' ? '❌ Terminos y condiciones no aceptados ❌' : '✅ Terminos y condiciones aceptados ✅'}</p>
                </li>
            )
        })
    }

    return (
      <ul>
        {renderList()}
      </ul>
    )
}

  export default List