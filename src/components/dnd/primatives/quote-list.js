/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { grid } from '../constants'
import QuoteItem from './quote-item'

const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return '#FFEBE6'
  }
  if (isDraggingFrom) {
    return '#E6FCFF'
  }
  return '#EBECF0'
}

const Wrapper = styled.div`
  background-color: ${(props) => getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
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

const scrollContainerHeight = 250

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

/* stylelint-disable block-no-empty */
const Container = styled.div``
/* stylelint-enable */

const InnerQuoteList = ({ quotes }) => {
  return quotes.map((quote, index) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index} shouldRespectForceTouch={false}>
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

const InnerList = ({ dropProvided, quotes, title }) => {
  return (
    <Container>
      {title}
      <DropZone ref={dropProvided.innerRef}>
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </DropZone>
    </Container>
  )
}

const QuoteList = ({
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
