import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'tree-visual.component.html',
  styleUrls: ['tree-visual.component.scss']
})
export class TreeVisualComponent {
  treeData: any;

  constructor() {
    this.treeData = history.state.treeData;
    console.log('Received tree data: ', this.treeData);
  }
}
