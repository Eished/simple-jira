/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'flowbite-react'
import React, { useMemo } from 'react'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import { GenericObject } from 'type/Common'

interface ReactTableCardProps {
  title?: string
  data: GenericObject[]
  searchBar?: boolean
  striped?: boolean
  hoverable?: boolean
}

interface RowProps {
  value: unknown
}

export const ReactTableCard: React.FC<ReactTableCardProps> = ({
  title,
  data,
  searchBar = true,
  striped = true,
  hoverable = true,
}) => {
  const colHeader = (headerItem: string) => {
    if (headerItem === 'name') {
      return {
        Header: headerItem,
        accessor: headerItem,
        Cell: (props: RowProps) => {
          return (
            <span title={props.value as string}>
              <b>{props.value as string}</b>
            </span>
          )
        },
      }
    } else if (headerItem === 'edit') {
      return {
        Header: '',
        accessor: headerItem,
        Cell: (props: RowProps) => {
          return (
            <a
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="#"
              title={props.value as string}>
              {props.value as string}
            </a>
          )
        },
      }
    } else {
      return {
        Header: headerItem,
        accessor: headerItem,
        Cell: (props: RowProps) => {
          return <span title={props.value as string}>{props.value as string}</span>
        },
      }
    }
  }

  const memoColumns = useMemo(() => {
    const headers = Object.keys(data[0]).map(colHeader)
    // push columns
    return headers
  }, [data])

  const memoData = useMemo(() => data, [data])

  const memoTitle = useMemo(() => title, [title])

  // const defaultSort = () => {
  //   const headers = Object.keys(data[0]).map(colHeader)
  //   return headers.filter((col) => (col.Header === 'name' ? { id: 'total', desc: true } : { id: 'sum', desc: true }))
  // }

  const tableInstance = useTable(
    {
      columns: memoColumns,
      data: memoData,
      // initialState: {
      //   sortBy: [defaultSort()],
      // },
      disableSortRemove: true,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance

  return (
    <div>
      {memoTitle && (
        <div>
          <h3>{memoTitle}</h3>
        </div>
      )}
      {searchBar && (
        <div>
          <h3>searchBar</h3>
          <input type="text" value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)} />
        </div>
      )}

      <Table striped={striped} hoverable={hoverable} {...getTableProps()}>
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Table.HeadCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? column.isSortedDesc ? <h5>asc sort</h5> : <h5>desc sort</h5> : ''}
                </Table.HeadCell>
              ))}
            </tr>
          ))}
        </thead>
        <Table.Body className="divide-y" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Table.Cell
                      className="whitespace-nowrap font-medium text-gray-900 dark:text-white max-w-[150px] overflow-hidden text-ellipsis"
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Table.Cell>
                  )
                })}
              </Table.Row>
            )
          })}
          {/* {pageSize - page.length > 0 && <tr style={{ height: (pageSize - page.length) * 32 }}></tr>} */}
        </Table.Body>
      </Table>

      <div className="w-full flex items-center justify-center space-x-4 mt-8">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
