import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSortSelected: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSortSelected, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ]

  const selectedSorting = sortOrders.find(so => so.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSorting?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map(sort => (
          <MenuItem
            onClick={() => onSortSelected(sort.value)}
            key={sort.value}
            value={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
