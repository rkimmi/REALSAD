const waitIndicator = (state = false, action) => {
    switch (action.type) {
        case 'RELEASE_INDICATOR':
            return  true
        case 'DESTROY_INDICATOR':
            return false
        default:
            return state
    }
}

export default waitIndicator
  