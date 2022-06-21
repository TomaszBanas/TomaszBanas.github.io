import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Contact
{
  constructor(public label: string, public value: string, public url: string | null = null) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public data: Contact[] = [
      new Contact("Phone", "+48 504 087 005"),
      new Contact("Email", "banas.tomasz.contact@gmail.com"),
      new Contact("GitHub", "TomaszBanas", "https://github.com/TomaszBanas"),
      new Contact("LinkedIn", "banas-tomasz", "https://linkedin.com/in/banas-tomasz"),
      new Contact("Address", "Praska 34D/11 Kraków")
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public route(path: string): void {
    window.location.href = path;
  }

}
