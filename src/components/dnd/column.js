/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import { borderRadius, grid } from './constants'
import QuoteList from './primatives/quote-list'

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) => (isDragging ? '#E3FCEF' : '#EBECF0')};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: '#E3FCEF';
  }
`

const Column = ({ title, quotes, index, isScrollable, isCombineEnabled }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header isDragging={snapshot.isDragging}>
            <h4
              className="relative pt-2 pb-1 px-2 flex-grow focus:outline-2 outline-offset-2 outline-blue-100"
              isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}>
              {title}
            </h4>
          </Header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            style={{
              backgroundColor: snapshot.isDragging ? '#E3FCEF' : null,
            }}
            quotes={quotes}
            internalScroll={isScrollable}
            isCombineEnabled={Boolean(isCombineEnabled)}
          />
        </Container>
      )}
    </Draggable>
  )
}

export default Column
