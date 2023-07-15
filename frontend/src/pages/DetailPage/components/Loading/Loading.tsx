import { memo } from 'react'

import { Skeleton } from '@/components'

import { StyledDetailPage, StyledDetailPageBadges } from '../../DetailPage.styled'
export const Loading = memo((): JSX.Element => {
  const elements = new Array(4).fill(0)

  return (
    <StyledDetailPage>
      <aside>
        <Skeleton height="500px" />
      </aside>
      <section>
        <Skeleton height="31px" width="450px" />
        <StyledDetailPageBadges>
          {elements?.map((_, index) => {
            return (
              <div key={`skeleton-${index}`}>
                <Skeleton height="32px" width="70px" />
              </div>
            )
          })}
        </StyledDetailPageBadges>
      </section>
    </StyledDetailPage>
  )
})
