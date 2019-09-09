const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}
const mapDispatchToProps = dispatch => {
  return {
    todolistadd: () => dispatch({ type: 'TODOLIST_ADD' }),
  }
}

export {
	mapStateToProps,
	mapDispatchToProps
}