import { Component, OnInit } from '@angular/core';
import { BstService} from '../../services/bst.service';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@Component({
  selector: 'app-tree-visual',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './tree-visual.component.html',
  styleUrls: ['./tree-visual.component.scss']
})
export class TreeVisualComponent implements OnInit {
  treeData: any = null;

  constructor(private bstService: BstService) {}

  ngOnInit(): void {
    this.treeData = this.bstService.treeData;
    console.log("TreeVisualComponent initialized. Tree data:", this.treeData);
  }
}

