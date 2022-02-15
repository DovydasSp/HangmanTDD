import { CreateGameController } from "../controller/implementation/CreateGameController";
import { useEffect, useState } from "react";
import { ViewGame } from "../controller/model/ViewGame";

export default function useCreateGame(
  createGameController: CreateGameController
): ViewGame | undefined {
  const [game, setGame] = useState<ViewGame | undefined>(undefined);

  useEffect(() => {
    const subscription = createGameController
      .createNewGame()
      .subscribe((game) => setGame(game));
    return () => {
      subscription.unsubscribe();
    };
  });

  return game;
}
