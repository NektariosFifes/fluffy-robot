// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { createContext, useMemo, useReducer } from 'react';
import { WorkBenchReducer } from './reducers';
import ScenarioEditor from './components/ScenarioEditor';
import ScenarioVisualizer from './components/ScenarioVisualizer';
import { defaultEditorState } from './constants';
import SideBar from './components/SideBar';

export const WorkBenchContext: any = createContext<>({
  state: defaultEditorState,
  dispatch: () => null,
});
function ScenarioWorkbench(): JSX.Element {
  const [state, dispatch] = useReducer(WorkBenchReducer, defaultEditorState);

  const ScenarioEditorMemo = useMemo(() => {
    console.log('memo');
    return ScenarioEditor;
  }, []);

  const ScenarioVisualizerMemo = useMemo(() => {
    return ScenarioVisualizer;
  }, []);
  return (
    <WorkBenchContext.Provider value={{ state, dispatch }}>
      <SideBar />
      <ScenarioEditorMemo />
      <ScenarioVisualizerMemo />
    </WorkBenchContext.Provider>
  );
}

export default ScenarioWorkbench;
