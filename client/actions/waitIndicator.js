export const releaseIndicator = () => {
    return {
      type: 'RELEASE_INDICATOR',
      indicating: true
    }
  }
  
  export const destroyIndicator = () => {
    return {
      type: 'DESTROY_INDICATOR',
      indicating: false
    }
  }
  