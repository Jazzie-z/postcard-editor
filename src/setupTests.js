import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

configure({ adapter: new Adapter() });

const wrapChildWithThemeProvider = children => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const shallowWithTheme = children =>
    shallow(wrapChildWithThemeProvider(children));
const mountWithTheme = children =>
    mount(wrapChildWithThemeProvider(children));
const renderWithTheme = children =>
    render(wrapChildWithThemeProvider(children));

export { shallowWithTheme, mountWithTheme, renderWithTheme };