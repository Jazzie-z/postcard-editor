import { mountWithTheme } from "../../setupTests"
import Thumbnail from "./Thumbnail";

describe('Thumbnail', () => {
    let wrapper;
    it('renders properly', () => {
        wrapper = mountWithTheme(<Thumbnail img={'image_1'} />);
        expect(wrapper.find('img').props().src).toBe('image_1')
    })
    it('renders with default values', () => {
        wrapper = mountWithTheme(<Thumbnail />);
        expect(wrapper.find('img').props().src).toBe('')
    })
})