import React from 'react'
import s from './Paginator.module.css';
import classNames from 'classnames';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PropsType) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={s.selectPageBlock}>
        {pages.map((p, i) => {
                return <span
                    key={i}
                    className={classNames({
                        [s.selectedPage]: p === currentPage
                    })}
                    onClick={() => onPageChanged(p)}>{p}</span>;
            }
        )}
    </div>
}

