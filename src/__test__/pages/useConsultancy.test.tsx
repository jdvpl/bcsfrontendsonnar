import React from 'react';
import { analyticsId } from '../../../next.config';
import useConsultancy from '../../pages/asesoria/useConsultancy';

describe('useConsultancy when onValidateOTP fetch is successfully', () => {
  let actualStep: any;
  let setActualStep: any;
  let router: any;
  let setActiveIndex: any;
  let activeIndex: any;
  let setItemActive: any;
  let isMobile: any;
  let itemActive: any;
  beforeEach(() => {
    setActualStep = jest.fn().mockImplementation(() => { });
    setActiveIndex = jest.fn();
    router = { push: jest.fn() };
    activeIndex = jest.fn();
    setItemActive = jest.fn();
    actualStep = 0;
    isMobile = false;
    itemActive = 0;
    jest.resetAllMocks();
    const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
      useConsultancy({
        actualStep,
        setActualStep,
        router,
        setActiveIndex,
        activeIndex,
        setItemActive,
        isMobile,
        itemActive,
      });
    nextStep();
  });
  it('setActualStep should call 1 time when nextStep is called', async () => {
    expect(setActualStep.mock.calls.length).toBe(1);
  });
  it('setActualStep should call 1 time when nextStep is called with 1', async () => {
    expect(setActualStep.mock.lastCall[0]).toBe(1);
  });
});

describe('useConsultancy when onValidateOTP fetch is successfully', () => {
  let actualStep: any;
  let setActualStep: any;
  let router: any;
  let setActiveIndex: any;
  let activeIndex: any;
  let setItemActive: any;
  let isMobile: any;
  let itemActive: any;
  beforeEach(() => {
    setActualStep = jest.fn().mockImplementation(() => { });
    setActiveIndex = jest.fn();
    router = { push: jest.fn() };
    activeIndex = jest.fn();
    setItemActive = jest.fn();
    actualStep = 0;
    isMobile = false;
    itemActive = 0;
    jest.resetAllMocks();
    const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
      useConsultancy({
        actualStep,
        setActualStep,
        router,
        setActiveIndex,
        activeIndex,
        setItemActive,
        isMobile,
        itemActive,
      });
    onCloseModal();
  });
  it('setActiveIndex should call 1 time when onCloseModal is called', async () => {
    expect(setActiveIndex.mock.calls.length).toBe(1);
  });
  it('setItemActive should call 1 time when onCloseModal is called with 1', async () => {
    expect(setItemActive.mock.calls.length).toBe(1);
  });
});

describe('useConsultancy when onValidateOTP fetch is successfully', () => {
  let actualStep: any;
  let setActualStep: any;
  let router: any;
  let setActiveIndex: any;
  let activeIndex: any;
  let setItemActive: any;
  let isMobile: any;
  let itemActive: any;

  beforeEach(() => {
    setActualStep = jest.fn().mockImplementation(() => { });
    setActiveIndex = jest.fn();
    router = { push: jest.fn() };
    activeIndex = jest.fn();
    setItemActive = jest.fn();
    actualStep = 0;
    isMobile = false;
    itemActive = 0;

    jest.resetAllMocks();
    const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
      useConsultancy({
        actualStep,
        setActualStep,
        router,
        setActiveIndex,
        activeIndex,
        setItemActive,
        isMobile,
        itemActive,
      });

    openModal('test', 1);
  });
  it('setActiveIndex should call 1 time when openModal is called', async () => {
    expect(setActiveIndex.mock.calls.length).toBe(1);
  });
  it('setItemActive should call 1 time when openModal is called with 1', async () => {
    expect(setItemActive.mock.calls.length).toBe(1);
  });
});

describe('useConsultancy when onValidateOTP fetch is successfully', () => {
  let actualStep: any;
  let setActualStep: any;
  let router: any;
  let setActiveIndex: any;
  let activeIndex: any;
  let setItemActive: any;
  let isMobile: any;
  let itemActive: any;

  beforeEach(() => {
    setActualStep = jest.fn().mockImplementation(() => { });
    setActiveIndex = jest.fn();
    router = { push: jest.fn() };
    activeIndex = jest.fn();
    setItemActive = jest.fn();
    actualStep = 3;
    isMobile = false;
    itemActive = 0;

    jest.resetAllMocks();
    const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
      useConsultancy({
        actualStep,
        setActualStep,
        router,
        setActiveIndex,
        activeIndex,
        setItemActive,
        isMobile,
        itemActive,
      });

    prevStep();
  });
  it('setActualStep should call 1 time when prevStep is called', async () => {
    expect(setActualStep.mock.calls.length).toBe(1);
  });
});

describe('useConsultancy when onValidateOTP fetch is successfully', () => {
  let actualStep: any;
  let setActualStep: any;
  let router: any;
  let setActiveIndex: any;
  let activeIndex: any;
  let setItemActive: any;
  let isMobile: any;
  let itemActive: any;

  beforeEach(() => {
    setActualStep = jest.fn().mockImplementation(() => { });
    setActiveIndex = jest.fn();
    router = { push: jest.fn() };
    activeIndex = jest.fn();
    setItemActive = jest.fn();
    actualStep = 0;
    isMobile = false;
    itemActive = 0;

    jest.resetAllMocks();
    const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
      useConsultancy({
        actualStep,
        setActualStep,
        router,
        setActiveIndex,
        activeIndex,
        setItemActive,
        isMobile,
        itemActive,
      });

    prevStep();
  });
  it('router.push should call 1 time when prevStep is called', async () => {
    expect(router.push.mock.calls.length).toBe(1);
  });
  it('should increment the actualStep value when calling nextStep', () => {
    const actualStep = 1;
    const setActualStep = jest.fn();
    const router = { push: jest.fn() };
    const setActiveIndex = jest.fn();
    const activeIndex = 0;
    const setItemActive = jest.fn();
    const isMobile = false;
    const itemActive = '';

    const { nextStep } = useConsultancy({
      actualStep,
      setActualStep,
      router,
      setActiveIndex,
      activeIndex,
      setItemActive,
      isMobile,
      itemActive,
    });

    nextStep();

    expect(setActualStep).toHaveBeenCalledWith(2);
  });

  it('should return the correct nextStep function', () => {
    let mockActualStep;
    let mockSetActualStep;
    let mockRouter;
    let mockSetActiveIndex;
    let mockActiveIndex;
    let mockSetItemActive;
    let mockIsMobile;
    let mockItemActive;
    let result;
    mockActualStep = 1;
    mockSetActualStep = jest.fn();
    mockRouter = {
      push: jest.fn(),
    };
    mockSetActiveIndex = jest.fn();
    mockActiveIndex = 0;
    mockSetItemActive = jest.fn();
    mockIsMobile = false;
    mockItemActive = '';

    result = useConsultancy({
      actualStep: mockActualStep,
      setActualStep: mockSetActualStep,
      router: mockRouter,
      setActiveIndex: mockSetActiveIndex,
      activeIndex: mockActiveIndex,
      setItemActive: mockSetItemActive,
      isMobile: mockIsMobile,
      itemActive: mockItemActive,
    });
    expect(typeof result.nextStep).toBe('function');
  });

});