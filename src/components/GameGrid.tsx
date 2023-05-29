import { SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing={10}
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {isLoading && skeletons.map(e => <GameCardSkeleton key={e} />)}
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
