import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../src/components/hero-section/hero-section';

export default createBoard({
    name: 'HeroSection',
    Board: () => <HeroSection />,
});
