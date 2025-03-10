export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled} = props;
    return (
    <div className='input-area'>
        <input placeholder='TODOを入力' value={todoText} onChange={onChange} disabled={disabled}/>
        <button onClick={onClick} disabled={disabled}>追加</button>
    </div>
    ) 
}