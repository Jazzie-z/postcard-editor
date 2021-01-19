import { mountWithTheme } from "../../setupTests"
import PosterViewer from "./PosterViewer";


describe('PosterViewer', () => {
    let wrapper;
    it('renders posterViewer along with thumbnail', () => {
        wrapper = mountWithTheme(<PosterViewer texts={[]} />);
        expect(wrapper.find('img').length).toBe(3)
    })
    it('changes image onClick of thumnail', () => {
        wrapper = mountWithTheme(<PosterViewer texts={[]} />);
        expect(wrapper.find('img').at(0).props().src).toBe('image_1.png')
        wrapper.find('img').at(2).simulate('click')
        expect(wrapper.find('img').at(0).props().src).toBe('image_2.png')
    })
})