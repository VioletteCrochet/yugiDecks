import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { Card } from '../../types/card';

@Component({
  selector: 'app-cardlist',
  imports: [ReactiveFormsModule],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {

  cardService = inject(CardService)
  
  cards?: Card[]
  
  cardForm: FormGroup = new FormGroup({
    fname: new FormControl ('')
  }

  )

  onchange() {
    console.log(this.cardForm.value);
    
    if (this.cardForm.valid && this.cardForm.value != null) {
      console.log("form is valid and not null");
      
      this.cardService.getCards(this.cardForm.value).subscribe({
        next: (res) =>{
          console.log(res);
          
          this.cards = res
        }
      })
    }
  }
}
