import {ListItemText, Count, ListItemContainer} from './styledComponents'

const ListItem = props => {
  const {listItemDetails} = props
  const {name, count} = listItemDetails

  return (
    <ListItemContainer>
      <ListItemText>{name} : </ListItemText>
      <Count>{count}</Count>
    </ListItemContainer>
  )
}

export default ListItem
