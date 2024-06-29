export class MoviesModel
{
  id
  title
  year
  actors
  Description

  constructor(id,title,year,actors,Description) {
    this.id=id
    this.title=title
    this.year=year
    this.Description=Description

    this.actors=actors
  }
}
