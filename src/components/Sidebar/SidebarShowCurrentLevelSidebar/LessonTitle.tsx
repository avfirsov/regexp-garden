import { useGame } from "@/utils/useGame/useGame";
import { FunctionComponent } from "react";
import { stringOrFCToFC } from "@/utils/stringOrFCToFC.tsx";

export const LessonTitle = () => {
  const { currentLevel } = useGame();
  const TitleDescription: FunctionComponent = stringOrFCToFC(
    currentLevel.titleDescription,
  );

  return (
    <>
      <div className="flex flex-col gap-3 items-start">
        {currentLevel.title && (
          <h2 className="text-xs text-ds-headingRed">{currentLevel.title}</h2>
        )}
        {currentLevel.titleToken && (
          <h3 className="bg-ds-headingRed bg-opacity-20 rounded-xl p-3">
            {currentLevel.titleToken}
          </h3>
        )}
        {currentLevel.titleDescription && (
          <span className="text-sm">
            <TitleDescription />
          </span>
        )}
      </div>
    </>
  );
};
