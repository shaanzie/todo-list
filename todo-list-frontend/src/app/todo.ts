// Interface for the Todo class moved for modularity
export interface Todo {
  id: number;
  task: string;
  priority: 1 | 2 | 3;
}