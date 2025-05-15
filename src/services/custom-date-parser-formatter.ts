import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  // Format from NgbDateStruct -> string (for input display)
  format(date: NgbDateStruct | null): string {
    return date ? `${this.pad(date.day)}-${this.pad(date.month)}-${date.year}` : '';
  }

  // Parse from string -> NgbDateStruct (from input to model)
  parse(value: string): NgbDateStruct | null {
    if (!value) return null;
    const parts = value.trim().split('-');
    if (parts.length !== 3) return null;

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

    return { day, month, year };
  }

  private pad(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }
}
