import { combineReducers } from 'redux'

const iconsReducer = () => {
    // 아무것도 바꾸지 않기 때문에 어떠한 argument도 없음
    return [
      { id: '0', desc: '없다', image: '00' },
      { id: '1', desc: '있다', image: '01' },
    ]
  }

const selectedIconReducer = (selectedIcon = null, action) => {
    if (action.type === 'ICON_SELECTED') {
        return action.payload
    }
    
    return selectedIcon
} 

export default combineReducers({
    icons: iconsReducer,
    selectedIcon: selectedIconReducer,
  })

