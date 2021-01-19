import { renderWithTheme } from "../../setupTests"
import ButtonList from "./ButtonList"

describe('ButtonList', () => {
    it('renders all action buttons', () => {
        expect(renderWithTheme(<ButtonList />)).toMatchSnapshot()
    })
})