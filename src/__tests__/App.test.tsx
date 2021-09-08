import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { act } from 'react-dom/test-utils'

test('receives message from API', async () => {
  render(<App />)
  const message = await waitFor(() => screen.getByTestId('message-container'))
  expect(message).toBeTruthy()
})

test('stops API when clicking toggle button', async () => {
  render(<App />)
  const toggleButton = screen.getByTestId('toggle-button')
  fireEvent.click(toggleButton)
  const messageNum = screen.getAllByTestId('message-container').length
  await waitFor(() => new Promise((r) => setTimeout(r, 4000)), { timeout: 4500 })
  expect(screen.getAllByTestId('message-container').length).toBe(messageNum)
}, 10000)

test('restarts API when clicking toggle button after stop', async () => {
  render(<App />)
  const toggleButton = screen.getByTestId('toggle-button')
  fireEvent.click(toggleButton)
  const messageNum = screen.getAllByTestId('message-container').length
  await waitFor(() => new Promise((r) => setTimeout(r, 4000)), { timeout: 4500 })
  fireEvent.click(toggleButton)
  expect(screen.getAllByTestId('message-container').length).not.toBe(messageNum)
}, 10000)

test('clears all messages when clicking clear button', async () => {
  render(<App />)
  const clearButton = screen.getByTestId('clear-button')
  fireEvent.click(clearButton)
  expect(screen.queryAllByTestId('message-container').length).toBe(0)
})

test('clears individual message when clicking clear button', async () => {
  render(<App />)
  const clearButton = screen.getByTestId('message-clear-button')
  fireEvent.click(clearButton)
  expect(screen.queryAllByTestId('message-container').length).toBe(0)
})
