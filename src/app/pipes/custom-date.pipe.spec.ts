import { CustomDatePipe } from './custom-date.pipe';

describe('CutYearPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
