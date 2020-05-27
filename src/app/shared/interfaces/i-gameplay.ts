import { IQuestion } from './i-question';
import { IGameStats } from './i-game-stats';
import { IGameOptions } from './i-game-options';

export interface IGameplay {
    PlayerName: string;
    Score: number;
    ComputerScore: number;
    ScoreStreak: number;
    GameOptions?: IGameOptions;
    Question?: IQuestion;
    Stats: IGameStats;
    Period: number;
    QuestionsGuessed: number;
    Time: number;
}
