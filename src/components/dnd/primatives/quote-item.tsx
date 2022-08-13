/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'
import { FC } from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'
import { borderRadius, grid } from '../constants'
import { IQuote } from '../data'

const getBackgroundColor = (
  isDragging: boolean,
  isGroupedOver: boolean,
  authorColors: {
    soft: string
    hard: string
  }
) => {
  if (isDragging) {
    return authorColors.soft
  }

  if (isGroupedOver) {
    return '#EBECF0'
  }

  return '#FFFFFF'
}

const Container = styled.a<{
  isDragging: boolean
  isGroupedOver: boolean
  colors: {
    soft: string
    hard: string
  }
}>`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props: any) => (props.isDragging ? props.colors.hard : 'transparent')};
  background-color: ${(props: any) => getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px #A5ADBA` : 'none')};
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: #091e42;

  &:hover,
  &:active {
    color: #091e42;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props: any) => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${grid}px;
  flex-shrink: 0;
  flex-grow: 0;
`

const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
`

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`

const Author = styled.small<{
  colors: {
    soft: string
    hard: string
  }
}>`
  flex-grow: 0;
  margin: 0;
  background-color: ${(props: any) => props.colors.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`

const QuoteId = styled.small`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  text-align: right;
`

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
interface QuoteItemProps {
  quote: IQuote
  isDragging: boolean
  isGroupedOver: boolean
  provided: DraggableProvided
}

const QuoteItem: FC<QuoteItemProps> = ({ quote, isDragging, isGroupedOver, provided }) => {
  return (
    <Container
      href={quote.author.url}
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      colors={quote.author.colors}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
      <Avatar src={quote.author.avatarUrl} alt={quote.author.name} />
      <Content>
        <BlockQuote>{quote.content}</BlockQuote>
        <Footer>
          <Author colors={quote.author.colors}>{quote.author.name}</Author>
          <QuoteId>id:{quote.id}</QuoteId>
        </Footer>
      </Content>
    </Container>
  )
}

export default QuoteItem
