import { Location } from './Location';

describe('Location data model', () => {
  it('create an instance with data beeing "{}"', () => {
    const location = new Location({});
    expect(location).toBeTruthy();
    expect(location.title).toBe("");
    expect(location.woeid).toBe("");
  });

  it('create an instance with data beeing "undefined"', () => {
    const location = new Location(undefined);
    expect(location).toBeTruthy();
    expect(location.title).toBe("");
    expect(location.woeid).toBe("");
  });

  it('create an instance with title = "Warsaw" and woeid = "123456"', () => {
    const mockData = {title: "Warsaw", woeid: "123456"};
    const location = new Location(mockData);
    expect(location).toBeTruthy();
    expect(location.title).toEqual("Warsaw");
    expect(location.woeid).toEqual("123456");
  });

  it('mapMultipleLocations should map any array to truthy Location objects', ()=> {
    let mockData = [{}, {}, {}];
    let locations = Location.mapMultipleLocations(mockData);
    locations.forEach((el) => expect(el).toBeInstanceOf(Location));
  });

});
