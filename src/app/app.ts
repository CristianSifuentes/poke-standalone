import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "@core/components";

const NG_COMPONENTS = [RouterOutlet];
const COMPONENTS = [Header];


@Component({
  selector: 'app-root',
  imports: [...NG_COMPONENTS, ...COMPONENTS],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('poke-standalone');
}
