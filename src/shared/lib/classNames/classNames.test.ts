import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass cls1 cls2';
    expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass cls1 cls2 hover scroll';
    expect(classNames('someClass', { hover: true, scroll: true }, ['cls1', 'cls2'])).toBe(expected);
  });

  test('with false mod', () => {
    const expected = 'someClass cls1 cls2 hover scroll';
    expect(classNames('someClass', { hover: true, active: false, scroll: true }, ['cls1', 'cls2'])).toBe(expected);
  });

  test('with undefined mod', () => {
    const expected = 'someClass cls1 cls2 hover scroll';
    expect(classNames('someClass', { hover: true, active: undefined, scroll: true }, ['cls1', 'cls2'])).toBe(expected);
  });
});
