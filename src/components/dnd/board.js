/* eslint-disable react/prop-types */
import { colors } from '@atlaskit/theme'
import styled from '@emotion/styled'
import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './column'
import reorder, { reorderQuoteMap } from './reorder'

const ParentContainer = styled.div`
  /* height: ${({ height }) => height}; */
  /* overflow-x: hidden;
  overflow-y: auto; */
`

const Container = styled.div`
  background-color: ${colors.B100};
  /* min-height: 100vh; */
  /* like display:flex but will allow bleeding over the window width */
  /* min-width: 100vw; */
  display: inline-flex;
`

class Board extends Component {
  /* eslint-disable react/sort-comp */
  static defaultProps = {
    isCombineEnabled: false,
  }

  state = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
  }

  boardRef

  onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === 'COLUMN') {
        const shallow = [...this.state.ordered]
        shallow.splice(result.source.index, 1)
        this.setState({ ordered: shallow })
        return
      }

      const column = this.state.columns[result.source.droppableId]
      const withQuoteRemoved = [...column]
      withQuoteRemoved.splice(result.source.index, 1)
      const columns = {
        ...this.state.columns,
        [result.source.droppableId]: withQuoteRemoved,
      }
      this.setState({ columns })
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
      const ordered = reorder(this.state.ordered, source.index, destination.index)

      this.setState({
        ordered,
      })

      return
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    })

    this.setState({
      columns: data.quoteMap,
    })
  }

  render() {
    const columns = this.state.columns
    const ordered = this.state.ordered
    const { containerHeight } = this.props

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={this.props.isCombineEnabled}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
                isScrollable={this.props.withScrollableColumns}
                isCombineEnabled={this.props.isCombineEnabled}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    )

    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {containerHeight ? <ParentContainer height={containerHeight}>{board}</ParentContainer> : board}
        </DragDropContext>
      </React.Fragment>
    )
  }
}

export { Board }
