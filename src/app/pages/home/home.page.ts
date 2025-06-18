import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, CommonModule, FormsModule],
  providers: [PokeapiService]
})
export class HomePage implements OnInit {
  public pokemons: any;
  constructor(
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit() {
    this.loadPokemons(20, 0);
  }

  loadPokemons(limit: number = 20, offset: number) {
    this.pokeapiService.getPokemons(limit, offset).subscribe((res: any) => {
      this.pokemons = res.results;
    });

    console.log(this.pokemons);
  }

}
