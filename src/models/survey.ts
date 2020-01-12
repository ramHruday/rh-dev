export interface IQuestionAndAnswer {
  question: string;
  response: string[];
}

// dummy qa data
export const DUMMY_QA: IQuestionAndAnswer[] = [
  {
    question: 'Blincyto is the best treatment option at 1st relapse in adult ALL Patients– Agrees with the objective?',
    response: ['Nuetral', 'ans2', 'ans3'],
  },
  {
    question: 'Please select one of the following options:',
    response: ['HCP requests meeting with Amgen Corporate', 'ans2', 'ans3'],
  },
  {
    question: 'question3',
    response: ['ans1', 'ans2', 'ans3'],
  },
];
