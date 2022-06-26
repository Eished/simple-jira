import React, { useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import Column from './column'
import { IAuthorQuoteMap } from './data'
import reorder, { reorderQuoteMap } from './reorder'

interface BoardProps {
  isCombineEnabled?: boolean
  initial: IAuthorQuoteMap
  containerHeight?: number
  withScrollableColumns?: boolean
}

const Board: React.FC<BoardProps> = ({ isCombineEnabled = false, initial, containerHeight, withScrollableColumns }) => {
  const [ordered, setOrdered] = useState(Object.keys(initial))
  const [columns, setColumns] = useState(initial)

  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      if (result.type === 'COLUMN') {
        const shallow = [...ordered]
        shallow.splice(result.source.index, 1)
        setOrdered(shallow)
        return
      }

      const column = columns[result.source.droppableId]
      const withQuoteRemoved = [...column]
      withQuoteRemoved.splice(result.source.index, 1)
      const newColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      }
      setColumns(newColumns)
      return
    }

    // dropped nowhere
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const newUrdered = reorder(ordered, source.index, destination.index)
      setOrdered(newUrdered)
      return
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    })

    setColumns(data.quoteMap)
  }

  const board = (
    <Droppable
      droppableId="board"
      type="COLUMN"
      direction="horizontal"
      ignoreContainerClipping={Boolean(containerHeight)}
      isCombineEnabled={isCombineEnabled}>
      {(provided) => (
        <div
          className="inline-flex bg-sky-300 rounded-lg p-2 dark:bg-gray-800"
          ref={provided.innerRef}
          {...provided.droppableProps}>
          {ordered.map((key, index) => (
            <Column
              key={key}
              index={index}
              title={key}
              quotes={columns[key]}
              isScrollable={withScrollableColumns}
              isCombineEnabled={isCombineEnabled}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {containerHeight ? <div style={{ height: containerHeight }}>{board}</div> : board}
      </DragDropContext>
    </React.Fragment>
  )
}

export default Board
