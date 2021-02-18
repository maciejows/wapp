export class Location {
    title: string;
    woeid: string;
    constructor(data: any){
        this.title = data['title']?? '';
        this.woeid = data['woeid']?? '';
    }

    static mapMultipleLocations(data: any): Location[] {
        let locations =  [];
        if (Symbol.iterator in Object(data)){
            locations = data.map((element: any) => new Location(element));
            return locations;
        } else {
            return [];
        }
    }
}