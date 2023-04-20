import { render, screen } from '@testing-library/react';
import React from 'react'
import Typography from '../../../../components/ui/Typography';
import '@testing-library/jest-dom';

describe('Typography', () => {
  test('should render "Typography" successfully', () => {
    const { baseElement } = render(<Typography variant='h2' typeFont='Bold' componentHTML='h2'>Hola mundo</Typography>);
    expect(baseElement).toBeTruthy();
  });
  test('should render "Typography" successfully as H1', () => {
    render(<Typography data-testid="typographyTest" variant='h1' typeFont='Bold' componentHTML='h1'>Hola mundo</Typography>);
    const element = screen.getByTestId('typographyTest')
    expect(element.tagName).toMatch('H1');
  });
  test('should render "Typography" successfully as a P', () => {
    render(<Typography data-testid="typographyTest" variant='bodyM1' typeFont='Bold' componentHTML='p'>Hola mundo</Typography>);
    const element = screen.getByTestId('typographyTest')
    expect(element.tagName).toMatch('P');
  });
  it('renders the children correctly', () => {
    render(<Typography variant='bodyM3' componentHTML='p' data-testid="typographyTest">Example text</Typography>);
    expect(screen.getByTestId('typographyTest')).toHaveTextContent('Example text');
  });
  it('renders P correctly', () => {
    const { getByTestId } = render(<Typography data-testid="typographyTest" variant='bodyM1' componentHTML='p'>Example text</Typography>);
    const element = getByTestId("typographyTest").tagName
    expect(element).toMatch('P');
  });
  it('renders P caption correctly', () => {
    const { getByTestId } = render(<Typography variant='caption1' componentHTML='span' data-testid="typographyTest">Example text</Typography>);
    const element = getByTestId("typographyTest").tagName
    expect(element).toMatch('SPAN');
  });
  it('renders P caption correctly', () => {
    const { getByTestId } = render(<Typography data-testid="typographyTest" variant='caption2' componentHTML='p'>Example text</Typography>);
    const element = getByTestId("typographyTest").tagName
    expect(element).toMatch('P');
  });
  it('renders UL correctly', () => {
    const { getByTestId } = render(<Typography data-testid="typographyTest" variant='bodyM3' componentHTML='ul'>Example text</Typography>);
    const element = getByTestId("typographyTest").tagName
    expect(element).toMatch('UL');
  });

  it('applies the correct variant class', () => {
    render(<Typography data-testid="typographyTest" variant="h1" componentHTML='h2'>Example text</Typography>);
    expect(screen.getByTestId('typographyTest')).toHaveClass('text-[32px] leading-[36px]');
  });

  it('applies the correct font class', () => {
    render(<Typography variant="bodyM1" typeFont="Bold" componentHTML='h2' data-testid="typographyTest">Example text</Typography>);
    expect(screen.getByTestId('typographyTest')).toHaveClass('font-montserratSemiBold');
  });

  it('applies additional classnames correctly', () => {
    render(<Typography className="additional-class" variant='bodyM3' componentHTML='h2' data-testid="typographyTest">Example text</Typography>);
    expect(screen.getByTestId('typographyTest')).toHaveClass('additional-class');
  });

});
