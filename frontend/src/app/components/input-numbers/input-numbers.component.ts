import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-input-numbers',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: 'input-numbers.component.html',
    styleUrls: ['input-numbers.component.scss']
})
export class InputNumbersComponent {
    numbersInput: string = '';

    constructor(private router: Router) {}

    onSubmit(): void {
        const numberArray = this.numbersInput
            .split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num));

        console.log('User submitter: ', numberArray);

        //HTTP Request needed here
    }

    onShowPrevious(): void {
        this.router.navigate(['/previous-trees']);
    }
}
