export enum StateTask {
  todo = 'TODO',
  inProcess = 'IN_PROCESS',
  done = 'DONE'
}

export interface ITask {
  state: StateTask
  title: string
  description: string
}
