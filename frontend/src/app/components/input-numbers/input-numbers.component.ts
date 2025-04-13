declare global {
  interface Window { treeData: any }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeVisualComponent } from '../tree-visual/tree-visual.component';
import { BstService } from '../../services/bst.service';

@Component({
    selector: 'app-input-numbers',
    standalone: true,
    imports: [CommonModule, FormsModule, TreeVisualComponent],
    templateUrl: './input-numbers.component.html',
    styleUrls: ['./input-numbers.component.scss']
})
export class InputNumbersComponent {
    numbersInput: string = '';
    showTree: boolean = false;

    constructor(private bstService: BstService, private router: Router) {}

  onSubmit(): void {
    const numberArray = this.numbersInput
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    if (numberArray.length > 0) {
      fetch('http://localhost:8081/api/trees/process-numbers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(numberArray)
      })
        .then(response => response.json())
        .then(data => {
          this.bstService.treeData = data;
          this.showTree = true;
          console.log('Tree data saved to service:', data);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Something went wrong.');
        });
    }
  }

  onShowPrevious(): void {
        this.router.navigate(['/previous-trees']);
    }
}
