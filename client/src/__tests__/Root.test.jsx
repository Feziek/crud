import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { MainRoute } from '@routes/MainRoute.jsx'

describe('MainRoute component', () => {
  beforeEach(() => {
    cleanup()
    render(<MainRoute />)
  })

  test('It should work w/o errors', () => {
    expect(screen.findByTestId('client')).toBeTruthy()
  })
})
