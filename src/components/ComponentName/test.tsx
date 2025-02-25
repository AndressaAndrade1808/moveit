import { render, screen } from '@testing-library/react'

import ComponentName from '.'

describe('<ComponentName />', () => {
  it('should render the heading', () => {
    const { container } = render(<ComponentName />)

    expect(screen.getByRole('heading', { name: /ComponentName/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
