import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BstService } from '../../services/bst.service';
import { TreeVisualComponent } from '../tree-visual/tree-visual.component';

@Component({
  selector: 'app-input-numbers',
  standalone: true,
  imports: [CommonModule, FormsModule, TreeVisualComponent],
  templateUrl: './input-numbers.component.html',
  styleUrls: ['./input-numbers.component.scss']
})
export class InputNumbersComponent {
  numbersInput: string = '';
  useBalancedTree: boolean = false;
  showTree: boolean = false;

  constructor(private router: Router, public bstService: BstService) {}

  onSubmit(): void {
    const numberArray = this.numbersInput
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    console.log("Use balanced tree:", this.useBalancedTree);

    fetch(`http://localhost:8081/api/trees/process-numbers?balanced=${this.useBalancedTree}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(numberArray)
    })
      .then(response => response.json())
      .then(data => {
        this.bstService.treeData = data;
        this.showTree = true;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  onShowPrevious(): void {
    this.router.navigate(['/previous-trees']);
  }
}
