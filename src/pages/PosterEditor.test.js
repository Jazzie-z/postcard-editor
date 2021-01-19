
import DraggableText from "components/DraggableText/DraggableText";
import { mountWithTheme } from "../setupTests";
import PosterEditor from "./PosterEditor";

describe('PosterEditor', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = mountWithTheme(<PosterEditor />)
    })
    afterEach(()=>{
        wrapper.unmount()
    })
    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('adds new text block', () => {
        wrapper = mountWithTheme(<PosterEditor />);
        expect(wrapper.find('div').at(1).text()).toBe('')
        wrapper.find('div').at(5).simulate('click')
        expect(wrapper.find(DraggableText).text()).toBe('New Text...')
    })
    it('rotates the text block', () => {
        wrapper = mountWithTheme(<PosterEditor />);
        expect(wrapper.find('div').at(1).text()).toBe('')
        wrapper.find('div').at(5).simulate('click')
        wrapper.find(DraggableText).find('div').at(1).simulate('click')
        wrapper.find('div').at(10).simulate('click')
        expect(wrapper.find(DraggableText).props().rotate).toBe(90)
    })
    it('zooms in the text block', () => {
        wrapper = mountWithTheme(<PosterEditor />);
        expect(wrapper.find('div').at(1).text()).toBe('')
        wrapper.find('div').at(5).simulate('click')
        wrapper.find(DraggableText).find('div').at(1).simulate('click')
        wrapper.find('div').at(8).simulate('click')
        expect(wrapper.find(DraggableText).props().zoom).toBe(1)
    })
})