import { Typography } from '../Typography'
import type { HeadingProps } from './Heading.types'

const getHeadingByTag = (props: HeadingProps) => {
  switch (props.tag) {
    case 'h1':
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'xl',
            tablet: 'xxl',
            desktop: 'xxxl',
          }}
        />
      )
    case 'h2':
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'lg',
            tablet: 'xl',
          }}
          fontWeight="bold"
        />
      )
    case 'h3':
    default:
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'lg',
          }}
          fontWeight="bold"
        />
      )
    case 'h4':
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'lg',
          }}
          fontWeight="bold"
        />
      )
    case 'h5':
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'md',
          }}
        />
      )
    case 'h6':
      return (
        <Typography
          {...props}
          fontSize={{
            mobile: 'xxs',
          }}
        />
      )
  }
}
export const Heading = ({ tag = 'h3', ...props }: HeadingProps): JSX.Element => {
  return getHeadingByTag({ tag, ...props })
}
