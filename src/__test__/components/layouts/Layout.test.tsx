import { render } from '@testing-library/react';
import Layout from '../../../components/layouts/layout';
import React from 'react'
describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <Layout className="none" navTitle="home">
        <h1>Hola</h1>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
