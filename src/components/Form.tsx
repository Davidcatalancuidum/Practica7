import {Sub} from '../types';
import useNewSubForm from './useNewSubForm';

interface FormProps{
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch({ type: "clear" })
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const {name, value} = evt.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value,
            }
        })
    }

    const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch({
                type: "change_value",
                payload: {
                    inputName: "avatar",
                    inputValue: imageUrl,
                },
            });
        }
    };

    const handleClear = () => {
        dispatch({type:"clear"})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
                <select onChange={handleChange} value={inputValues.sexo} name="sexo">
                    <option value=''>-- seleccione --</option>
                    <option value='mujer'>mujer</option>
                    <option value='hombre'>hombre</option>
                </select>
                <input onChange={handleFileChange} type="file" name="avatar" accept="image/*" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <label>Aceptas los terminos y condiciones?</label>
                <input type="checkbox" name="check" onChange={handleChange}/>
                <button onClick={handleClear} type="button">Clear the form</button>
                <button type="submit">Save new sub!</button>
            </form>
        </div>
    )
}

export default Form