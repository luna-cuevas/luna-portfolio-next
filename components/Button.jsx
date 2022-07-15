const Button = ( {link, text, targetTo} ) => {
  return (
    <a target={ !targetTo ? '_blank' : targetTo } href={ link }>
      <button id="bn30"> { text } </button>
    </a>
  )
}

export default Button
