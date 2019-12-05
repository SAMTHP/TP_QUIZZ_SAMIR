import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  public questions: Question[] = [
    {
      "pays": "Afghanistan",
      "capitale": "Kaboul",
      "continent": "Asie"
    },
    {
      "pays": "Afrique du Sud",
      "capitale": "Pretoria",
      "continent": "Afrique"
    }
  ];
  

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.backRoot}/questions`);
  }

  buildNewQuiz(): Observable<Question[]> {
    this.getQuestions().subscribe(
      (questions: Question[]) => this.questions = questions
    )
    
    let questionShuffle = this.shuffle(this.questions);

    let questionsForQuizz;

    // /let questionShuffle = this.shuffle(questions);

    for(let i = 0; i < 4; i++){
      questionsForQuizz = questionShuffle[i]
    }

    return questionsForQuizz;
  }

  private shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
