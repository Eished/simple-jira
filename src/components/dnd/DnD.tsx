import { Button, Card } from 'flowbite-react'
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd'
import { GenericObject } from 'type/Common'

// fake data generator
const getItems = (count: number, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }))

const reorder = (list: Iterable<unknown> | ArrayLike<unknown>, startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: Iterable<unknown> | ArrayLike<unknown>,
  destination: Iterable<unknown> | ArrayLike<unknown>,
  droppableSource: { index: number; droppableId: string | number },
  droppableDestination: { index: number; droppableId: string | number }
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: GenericObject = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
// const grid = 8

// const getItemStyle = (isDragging: any, draggableStyle: any) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: 'none',
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'grey',

//   // styles we need to apply on draggables
//   ...draggableStyle,
// })
// const getListStyle = (isDraggingOver: any) => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250,
// })

const getListStyle = (isDraggingOver: boolean) => {
  return `bg-gray-100 border border-gray-200 w-96 rounded-md m-2 ${
    isDraggingOver ? 'bg-blue-100 dark:bg-gray-600' : ''
  } dark:bg-gray-900 dark:border-gray-700`
}

const QuoteApp = () => {
  const [state, setState] = useState([getItems(10), getItems(5, 10), getItems(3, 15), getItems(2, 20)])

  function onDragEnd(result: DropResult) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index) as { id: string; content: string }[]
      const newState = [...state]
      newState[sInd] = items
      setState(newState)
    } else {
      const result = move(state[sInd], state[dInd], source, destination)
      const newState = [...state]
      newState[sInd] = result[sInd]
      newState[dInd] = result[dInd]

      setState(newState.filter((group) => group.length))
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-evenly m-2">
        <Button
          type="button"
          onClick={() => {
            setState([...state, []])
          }}>
          Add new group
        </Button>
        <Button
          type="button"
          onClick={() => {
            setState([...state, getItems(1)])
          }}>
          Add new item
        </Button>
      </div>
      <div className="flex">
        <DragDropContext onDragEnd={(result: DropResult, provided: ResponderProvided) => onDragEnd(result)}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  className={getListStyle(snapshot.isDraggingOver)}
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {el.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          className="max-w-sm m-4"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="">
                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{item.content}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{item.id}</p>
                            <Button
                              type="button"
                              onClick={() => {
                                const newState = [...state]
                                newState[ind].splice(index, 1)
                                setState(newState.filter((group) => group.length))
                              }}>
                              delete
                            </Button>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}

export { QuoteApp }
