// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CompletedChallenges from '.'

describe('<CompletedChallenges />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CompletedChallenges />)

    // expect(
    //   screen.getByRole('heading', { name: /CompletedChallenges/i })
    // ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
