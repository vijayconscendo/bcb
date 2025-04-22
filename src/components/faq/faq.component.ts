import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input() items: AccordionItem[] = [
    {
      id: 'item1',
      title: 'Accordion Item #1',
      content: '<strong>This is the first item\'s accordion body.</strong> It is shown by default.',
      expanded: true
    },
    {
      id: 'item2',
      title: 'Accordion Item #2',
      content: '<strong>This is the second item\'s accordion body.</strong> It is hidden by default.',
      expanded: false
    },
    {
      id: 'item3',
      title: 'Accordion Item #3',
      content: '<strong>This is the third item\'s accordion body.</strong> It is hidden by default.',
      expanded: false
    }
  ];

  toggleItem(item: AccordionItem): void {
    // Close all items first if you want only one open at a time
    // this.items.forEach(i => i.expanded = false);
    
    // Toggle the clicked item
    item.expanded = !item.expanded;
  }
}
