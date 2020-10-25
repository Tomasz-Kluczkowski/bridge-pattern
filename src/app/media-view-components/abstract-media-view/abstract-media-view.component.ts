import {Component, Input} from '@angular/core';
import {MediaResource} from '../../../media-resources/MediaResource';

@Component({
  selector: 'app-abstract-media-view',
  templateUrl: './abstract-media-view.component.html',
  styleUrls: ['./abstract-media-view.component.css']
})
export class AbstractMediaViewComponent {
    @Input()
    mediaResources: Array<MediaResource>;
}
