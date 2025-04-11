import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BstService } from "../../services/bst.service";

@Component({
    selector: 'app-input-numbers',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: 'input-numbers.component.html',
    styleUrls: ['input-numbers.component.scss']
})
export class InputNumbersComponent {
    numbersInput: string = '';

    constructor(private router: Router, private bstService: BstService) {}

    onSubmit(): void {
        const numberArray = this.numbersInput
            .split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num));

        this.bstService.processNumbers(numberArray).subscribe({
            next: (response) => {
                console.log('Tree created: ', response);
                this.router.navigate(['/tree-visual'], {
                    state: {treeData: response}
                });
            },
            error: (err) => {
                console.error('Error processing numbers: ', err)
            }
        });
    }

    onShowPrevious(): void {
        this.router.navigate(['/previous-trees']);
    }
}
