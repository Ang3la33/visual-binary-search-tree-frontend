import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BstService } from '../../services/bst.service';

@Component({
  selector: 'app-tree-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-visual.component.html',
  styleUrls: ['./tree-visual.component.scss']
})
export class TreeVisualComponent {
  constructor(public bstService: BstService) {}
}
