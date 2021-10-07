import {AiFillStar} from 'react-icons/ai'

import {
  Linked,
  ListItem,
  Image,
  DivCol,
  RName,
  Cuisine,
  RatingRow,
  RatingNum,
} from './styledComponents'

const RestaurantItem = props => {
  const {details} = props
  const {id, name, imageUrl, cuisine, userRating} = details

  return (
    <Linked to={`restaurants-list/${id}`}>
      <ListItem data-testid="restaurant-item">
        <Image src={imageUrl} alt="restaurant" />
        <DivCol>
          <RName>{name}</RName>
          <Cuisine>{cuisine}</Cuisine>
          <RatingRow>
            <AiFillStar color="orange" />
            <RatingNum>{userRating.rating}</RatingNum>
          </RatingRow>
        </DivCol>
      </ListItem>
    </Linked>
  )
}
export default RestaurantItem
