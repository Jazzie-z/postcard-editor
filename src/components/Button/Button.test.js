import { mountWithTheme, renderWithTheme } from "../../setupTests"
import Button from "./Button"

describe('button', () => {
    let wrapper
    it('renders button with title', () => {
        let text = 'sample'
        wrapper = renderWithTheme(<Button title={text} />)
        expect(wrapper.text()).toBe(text)
    })
    it('executes callback on click', () => {
        let mockFn = jest.fn()
        wrapper = mountWithTheme(<Button onClick={mockFn} />)
        wrapper.simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })
})