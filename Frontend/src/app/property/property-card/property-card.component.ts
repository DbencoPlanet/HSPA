import {Component, Input} from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-card',
  //template: ``,
  templateUrl: 'property-card.component.html',
  //styles:['h1 {font-weight: normal;}']
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property : IPropertyBase;
  @Input() hideIcons: boolean;

}
