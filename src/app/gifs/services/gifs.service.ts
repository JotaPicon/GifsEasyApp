import { SearchResponse, Gif } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[]=[];
  private apiKey: string = 'OC5qO2eUdU6jIEplhw53AejqH1FoEQEC'
  private serviceUrl: string='https://api.giphy.com/v1/gifs'
  public gifList :Gif[]=[]

  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }

  get tagHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag= tag.toLowerCase();

    if ( this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldtag)=>oldtag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory=this.tagHistory.splice(0,10)
    this.saveLocalStorage();
  }
  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this.tagHistory));
  }

  loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0 )return;
    this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag:string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params= new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 20)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( resp =>{

      this.gifList=resp.data
      console.log(resp.data) ;
    });


  }
  deleteTag(tag: string) { this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
  }

}
