import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazy-image.component.html',
})
export class LazyimageComponent implements OnInit{
  @Input()
  public url!: string;

  @Input()
  public alt: string='';

  ngOnInit(): void {
    if (!this.url) throw Error('URL Property is required')
  }
}
