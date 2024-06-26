import { db } from '../_lib/prisma'
import RestaurantItem from './restaurant-item'

const RestaurantList = async () => {
  // TODO: Pegar os restaurantes com mais pedidos
  const restaurants = await db.restaurant.findMany({})

  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default RestaurantList
