import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/infoToolTip.test.tsx
=======
import { InfoIco } from '../../../../components/ui/Tooltip/info';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/tooltip/infoToolTip.test.tsx
import React from 'react'
import { InfoIco } from '../components/ui/Tooltip/info';

describe('InfoIco', () => {
  test('should render "InfoIco" successfully', () => {
    const { baseElement } = render(<InfoIco />);
    expect(baseElement).toBeTruthy();
  });

});
