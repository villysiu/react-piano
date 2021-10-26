const Error = (props) => {
  console.log(props)
  
  return (
      (props.errors.length !== 0) ? (
        <h4>
            {props.errors.map((e, idx) => <li key={idx}>{e}</li> ) }
        </h4>
      ) : (
        null
    )
  )
}
export default Error