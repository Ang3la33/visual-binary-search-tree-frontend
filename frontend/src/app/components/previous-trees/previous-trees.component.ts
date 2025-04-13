import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-trees',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './previous-trees.component.html',
  styleUrls: ['./previous-trees.component.scss']
})
export class PreviousTreesComponent implements OnInit {
  trees: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/trees/previous-trees')
      .subscribe({
        next: data => {
          this.trees = data.map(tree => {
            const parsed = tree.treeJson ? JSON.parse(tree.treeJson) : null;

            // Replace 'value' with 'root'
            function replaceValueKey(node: any): any {
              if (!node) return null;

              const { value, left, right } = node;
              return {
                root: value,
                left: replaceValueKey(left),
                right: replaceValueKey(right)
              };
            }

            return {
              ...tree,
              parsedTree: replaceValueKey(parsed)
            };
          });
        },
        error: err => {
          console.error('Error fetching previous trees:', err);
        }
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

