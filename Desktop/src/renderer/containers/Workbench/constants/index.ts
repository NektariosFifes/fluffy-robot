import * as types from '../types';

export const ACTIONS_IDS = {
  checkScenarioSyntax: 0,
  visualizeScenarioFile: 1,
  visualizationStatus: 6,
  executeOperation: 2,
  executeScenario: 3,
  cancelExecution: 4,
  setCurrentScenarioFile: 5,
};

export const defaultEditorState: types.DefaultWorkBenchStateType = {
  currentScenario: {},
  visualizationRequested: false,
  scenarioUpdated: false,
  pendingRequestExecutions: [],
  applicationActionsHistory: [],
};
