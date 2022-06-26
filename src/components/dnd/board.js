/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './column'
import reorder, { reorderQuoteMap } from './reorder'

const ParentContainer = styled.div`
  /* height: ${({ height }) => height}; */
  /* overflow-x: hidden;
  overflow-y: auto; */
`

const Container = styled.div`
  background-color: #4c9aff;
  /* min-height: 100vh; */
  /* like display:flex but will allow bleeding over the window width */
  /* min-width: 100vw; */
  display: inline-flex;
`

const Board = ({ isCombineEnabled = false, initial, containerHeight = '', withScrollableColumns = '' }) => {
  const [ordered, setOrdered] = useState(Object.keys(initial))
  const [columns, setColumns] = useState(initial)

  const onDragEnd = (result) => {
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
        <Container ref={provided.innerRef} {...provided.droppableProps}>
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
        </Container>
      )}
    </Droppable>
  )

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {containerHeight ? <ParentContainer height={containerHeight}>{board}</ParentContainer> : board}
      </DragDropContext>
    </React.Fragment>
  )
}

export default Board
