import { DraggableLocation } from 'react-beautiful-dnd'
import { IAuthorQuoteMap } from './data'

// a little function to help us with reordering the result
const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default reorder

interface ReorderQuoteMapProps {
  quoteMap: IAuthorQuoteMap
  source: DraggableLocation
  destination: DraggableLocation
}

export const reorderQuoteMap = ({ quoteMap, source, destination }: ReorderQuoteMapProps) => {
  const current = [...quoteMap[source.droppableId]]
  const next = [...quoteMap[destination.droppableId]]
  const target = current[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)
    const result = {
      ...quoteMap,
      [source.droppableId]: reordered,
    }
    return {
      quoteMap: result,
    }
  } else {
    // remove from original
    current.splice(source.index, 1)
    // insert into next
    next.splice(destination.index, 0, target)

    const result = {
      ...quoteMap,
      [source.droppableId]: current,
      [destination.droppableId]: next,
    }

    return {
      quoteMap: result,
    }
  }
}
