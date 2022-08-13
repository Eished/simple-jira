/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'
import { FC } from 'react'
import { Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd'
import { grid } from '../constants'
import { IQuote } from '../data'
import QuoteItem from './quote-item'

const getBackgroundColor = (isDraggingOver: boolean, isDraggingFrom: boolean) => {
  if (isDraggingOver) {
    return '#a7f5ff'
  }
  if (isDraggingFrom) {
    return '#e8e8e8'
  }
  return '#EBECF0'
}

interface WrapperProps {
  isDropDisabled: boolean
  isDraggingOver: boolean
  isDraggingFrom: boolean
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${(props: any) => getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: ${grid}px;
  border: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`

const scrollContainerHeight = 500

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: ${scrollContainerHeight}px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${scrollContainerHeight}px;
`

const Container = styled.div``

const InnerQuoteList = (quotes: IQuote[]) => {
  return quotes.map((quote, index) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {/* shouldRespectForceTouch={false} */}
      {(dragProvided, dragSnapshot) => (
        <QuoteItem
          key={quote.id}
          quote={quote}
          isDragging={dragSnapshot.isDragging}
          isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          provided={dragProvided}
        />
      )}
    </Draggable>
  ))
}

const InnerList = ({
  dropProvided,
  quotes,
  title,
}: {
  dropProvided: DroppableProvided
  quotes: IQuote[]
  title?: string
}) => {
  return (
    <Container>
      {title}
      <DropZone ref={dropProvided.innerRef}>
        {InnerQuoteList(quotes)}
        {dropProvided.placeholder}
      </DropZone>
    </Container>
  )
}

interface QuoteListProps {
  ignoreContainerClipping?: boolean
  internalScroll?: boolean
  scrollContainerStyle?: React.CSSProperties
  isDropDisabled: boolean
  isCombineEnabled?: boolean
  listId: string
  listType?: string
  style?: React.CSSProperties
  quotes: IQuote[]
  title?: string
}

const QuoteList: FC<QuoteListProps> = ({
  ignoreContainerClipping,
  internalScroll,
  scrollContainerStyle,
  isDropDisabled,
  isCombineEnabled,
  listId = 'LIST',
  listType,
  style,
  quotes,
  title,
}) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}>
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDropDisabled={isDropDisabled}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}>
          {internalScroll ? (
            <ScrollContainer style={scrollContainerStyle}>
              <InnerList quotes={quotes} title={title} dropProvided={dropProvided} />
            </ScrollContainer>
          ) : (
            <InnerList quotes={quotes} title={title} dropProvided={dropProvided} />
          )}
        </Wrapper>
      )}
    </Droppable>
  )
}

export default QuoteList
