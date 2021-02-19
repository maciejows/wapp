import { CustomDatePipe } from './custom-date.pipe';

describe('CutYearPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return "02-19"', () => {
    const input = "2021-02-18"
    const pipe = new CustomDatePipe();
    const result = pipe.transform(input);
    expect(result).toBe("02-18");
  });

  it('Should return "Today"', () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const pipe = new CustomDatePipe();
    
    const result = pipe.transform(`${year}-${month}-${day}`);
    expect(result).toBe("Today");
  });

});
