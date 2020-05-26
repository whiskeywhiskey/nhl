import { IQuestion } from './i-question';
import { IGameStats } from './i-game-stats';

export interface IGameplay {
    PlayerName: string;
    Score: number;
    ComputerScore?: number;
    TimeReset: number;
    PenaltyTime: number;
    ScoreStreak: number;
    Mode: string;
    Difficulty: string;
    Question: IQuestion;
    Stats: IGameStats;
    Period: number;
    QuestionsGuessed: number;
}
