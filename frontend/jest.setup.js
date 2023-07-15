import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { configure } from '@testing-library/react'

import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)
configure({ testIdAttribute: 'data-test' })
