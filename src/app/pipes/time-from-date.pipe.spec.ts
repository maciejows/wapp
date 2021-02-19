import { TimeFromDatePipe } from './time-from-date.pipe';

describe('TimeFromDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TimeFromDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should get time', () => {
    const input = "2021-02-19T09:20:17.429746Z";
    const pipe = new TimeFromDatePipe();
    const result = pipe.transform(input);
    expect(result).toBe("09:20:17");
  });

  it('Should get time if "." not present', () => {
    const input = "2021-02-19T09:20:17Z";
    const pipe = new TimeFromDatePipe();
    const result = pipe.transform(input);
    expect(result).toBe("09:20:17");
  });

  it('Should get string till "." if "T" not present', () => {
    const input = "2021-02-1909:20:17.429746Z";
    const pipe = new TimeFromDatePipe();
    const result = pipe.transform(input);
    expect(result).toBe("2021-02-1909:20:17");
  });

});
