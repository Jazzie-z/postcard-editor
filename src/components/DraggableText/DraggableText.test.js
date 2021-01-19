import { mountWithTheme } from "../../setupTests"
import DraggableText from "./DraggableText";

describe('DraggableText', () => {
    let wrapper;
    it('renders div with editable content', () => {
        wrapper = mountWithTheme(<DraggableText />);
        expect(wrapper.find('div').length).toBe(2)
    })
})