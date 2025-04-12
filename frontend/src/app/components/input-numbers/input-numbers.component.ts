import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BstService } from "../../services/bst.service";
import {TreeVisualComponent} from "../tree-visual/tree-visual.component";

@Component({
    selector: 'app-input-numbers',
    standalone: true,
    imports: [CommonModule, FormsModule, TreeVisualComponent],
    templateUrl: 'input-numbers.component.html',
    styleUrls: ['input-numbers.component.scss']
})
export class InputNumbersComponent {
    numbersInput: string = '';
    showTree: boolean = false;

    constructor(private router: Router, private bstService: BstService) {}

    onSubmit(): void {
        const numberArray = this.numbersInput
            .split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num));

        if (numberArray.length > 0) {
            this.bstService.createTree(numberArray).subscribe({
                next: (response) => {
                    console.log('Tree created successfully:', response);
                    this.bstService.treeData = response;
                    this.showTree = true;
                },
                error: (error) => {
                    console.error('Error creating tree:', error);
                    alert('Error creating tree.');
                }
            });
        }
    }

    onShowPrevious(): void {
        this.router.navigate(['/previous-trees']);
    }
}
