import { SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const GameGrid = () => {
  const { data, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing={10}
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {isLoading &&
          skeletons.map(e => (
            <GameCardContainer key={e}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
