import { render } from '@testing-library/react';
import AnimationComponent from '../components/commons/Animation';

describe('<AnimationComponent/>', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <AnimationComponent show='' loaded={true} valid={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
