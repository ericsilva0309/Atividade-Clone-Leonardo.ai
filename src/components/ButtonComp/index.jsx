export const ButtonComp = ({nome, funcao}) => {

  return (
    <div>
      <button onClick={funcao}>
        {nome}
      </button>
    </div>
  )
}