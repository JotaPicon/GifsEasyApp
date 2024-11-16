import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
  <h5>Buscar Gifs:</h5>
  <input
  type="text"
  class="form-control"
  placeholder="palabras cortas..."
  (keyup.enter)="searchTag()"
  #txtTagInput >
  <p></p>
  `
})

export class searchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput! : ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

searchTag(){
  const newTag = this.tagInput.nativeElement.value;

  this.gifsService.searchTag(newTag);

  this.tagInput.nativeElement.value = '';
}
}
