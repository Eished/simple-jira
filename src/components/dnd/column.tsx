import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import { borderRadius, grid } from './constants'
import { IQuote } from './data'
import QuoteList from './primatives/quote-list'

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h4<{ isDragging: boolean }>``

const Header = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) => (isDragging ? '#E3FCEF' : '#EBECF0')};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e3fcef;
  }
`

interface IColumn {
  title: string
  quotes: IQuote[]
  index: number
  isScrollable?: boolean
  isCombineEnabled?: boolean
}

const Column: React.FC<IColumn> = ({ title, quotes, index, isScrollable, isCombineEnabled }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header isDragging={snapshot.isDragging}>
            <Title
              className="relative pt-2 pb-1 px-2 flex-grow font-medium"
              isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}>
              {title}
            </Title>
          </Header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            isDropDisabled={false}
            style={{
              backgroundColor: snapshot.isDragging ? '#E3FCEF' : undefined,
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
