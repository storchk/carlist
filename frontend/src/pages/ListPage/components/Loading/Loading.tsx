import { memo } from 'react'
import { StyledCarList, StyledLoadMoreArea, StyledListPagePageHeader } from '../../ListPage.styled'
import { Skeleton } from '@/components'
export const Loading = memo((): JSX.Element => {
  const elements = new Array(6).fill(0)

  return (
    <>
      <StyledListPagePageHeader>
        <Skeleton height="31px" width="60px" />
        <Skeleton height="21px" width="70px" />
      </StyledListPagePageHeader>

      <StyledCarList>
        {elements?.map((_, index) => {
          return (
            <li key={`skeleton-${index}`}>
              <Skeleton height="500px" />
            </li>
          )
        })}
      </StyledCarList>
      <StyledLoadMoreArea>
        <Skeleton height="50px" width="120px" />
      </StyledLoadMoreArea>
    </>
  )
})