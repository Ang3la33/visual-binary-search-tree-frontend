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

    if (numberArray.length > 0) {
      console.log('Submitting numbers:', numberArray);
      console.log('Balanced Tree?', this.useBalancedTree);

      fetch(`http://localhost:8081/api/trees/process-numbers?balanced=${this.useBalancedTree}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(numberArray)
      })
        .then(response => response.json())
        .then(data => {
          this.bstService.treeData = data;
          this.showTree = true;
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Something went wrong while submitting the tree.');
        });
    } else {
      alert('Please enter valid numbers separated by commas.');
    }
  }

  onShowPrevious(): void {
    this.router.navigate(['/previous-trees']);
  }
}

