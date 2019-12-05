import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuizzService } from '../quizz.service'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  public questions: Question[];
  public iQuestion: number = 0;
  public currentQuestion: number;
  public answer: string;
  public found: boolean;
  public hasNext: boolean;
  public startGame: boolean;
  
  // Questions pour tester la vue
  questionsTests = [
    {
      num: 1,
      label: 'Quelle est la capitale de France ?',
      goodAnswer: 'Paris',
      propositions: [
        'Paris',
        'Madrid',
        'Londre',
        'Rabat'
      ]
    },
    {
      num: 2,
      label: 'Quelle est la capitale d\'Espagne ?',
      goodAnswer: 'Madrid',
      propositions: [
        'Paris',
        'Madrid',
        'Londre',
        'Rabat'
      ]
    },
    {
      num: 3,
      label: 'Quelle est la capitale d\'Angleterre ?',
      goodAnswer: 'Londre',
      propositions: [
        'Paris',
        'Madrid',
        'Londre',
        'Rabat'
      ]
    },
    {
      num: 4,
      label: 'Quelle est la capitale du Maroc ?',
      goodAnswer: 'Rabat',
      propositions: [
        'Paris',
        'Madrid',
        'Londre',
        'Rabat'
      ]
    },
  ]

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {

  }

  /**
   * Allow to start a new game
   */
  newGame() {
    this.startGame = true;
    console.log("Game start")
    this.currentQuestion = 1;
  }

  /**
   * Allow to load next question
   */
  loadNextQuestion(numQuestion: number) {

  }

  /**
   * Allow to start a treatment if the time is up
   */
  timeSpent() {

  }

  /**
   * Allow give an answer
   * @param answer 
   */
  answerGiven(answer: string) {

  }

  /**
   * Allow to show the good answer
   */
  showAnswer() {

  }

}
