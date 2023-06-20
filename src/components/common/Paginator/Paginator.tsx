import React, {useState} from 'react';
import s from './Paginator.module.css'
import classNames from 'classnames';
import {KeyboardEvent} from 'react';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
export const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}: PropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const lastPage = pages[pages.length - 1]
    const firstPage = pages[0]
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftBorder = (portionNumber - 1) * portionSize + 1
    const rightBorder = portionNumber * portionSize
    const onPrevClickHandler = () => setPortionNumber(portionNumber - 1)
    const onNextClickHandler = () => setPortionNumber(portionNumber + 1)
    const onKeyRightHandler = (e: KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (e.code === 'ArrowRight') onNextClickHandler()
    }
    const onKeyLeftHandler = (e: KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (e.code === 'ArrowLeft') onPrevClickHandler()
    }
    return <div className={s.selectPageBlock}>
        <button onKeyDown={onKeyLeftHandler} disabled={portionNumber === 1} onClick={onPrevClickHandler}>PREV</button>
        {portionNumber > 1 && <span className={classNames({[s.selectedPage]: lastPage === currentPage})}
                                    onClick={() => onPageChanged(firstPage)}>
      {firstPage}...
    </span>}
        {pages
            .filter(p => p >= leftBorder && p <= rightBorder)
            .map((p, i) => {
                    return <span
                        key={i}
                        className={classNames({
                            [s.selectedPage]: p === currentPage
                        })}
                        onClick={() => onPageChanged(p)}>{p}</span>;
                }
            )}
        {portionNumber !== portionCount && <span className={classNames({[s.selectedPage]: lastPage === currentPage})}
                                                 onClick={() => onPageChanged(lastPage)}>
      ...{lastPage}
    </span>}
        <button onKeyDown={onKeyRightHandler} disabled={portionNumber === portionCount}
                onClick={onNextClickHandler}>NEXT
        </button>
    </div>
}
