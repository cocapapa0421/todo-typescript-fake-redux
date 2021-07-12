import { ListenerT, UnSubscribeT, ActionT } from "./types/types";

function combineReducers<
  ReducerT extends Record<string, (...args: any) => any>
>(reducers: ReducerT) {
  return <K extends keyof ReducerT, ParamT extends Parameters<ReducerT[K]>>(
    state: ParamT[0],
    action: ParamT[1]
  ) => {
    return Object.entries(reducers).reduce<
      { [P in K]: ReturnType<ReducerT[P]> }
    >((obj, [reducerName, fn]) => {
      return {
        ...obj,
        [reducerName]: fn(state?.[reducerName], action),
      };
    }, {} as any);
  };
}

function createStore<
  ReducerT extends (...args: any) => any,
  ReturnT extends ReturnType<ReducerT>,
  K extends keyof ReturnT
>(reducer: ReducerT) {
  let state = reducer(undefined, {});
  let listeners: ListenerT[] = [];

  return {
    getState(): { [P in K]: ReturnT[P] } {
      return state;
    },
    setState(newState: any) {
      console.log(newState);
      state = newState;
    },
    dispatch(action: ActionT) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: ListenerT) {
      listeners.push(listener);

      const unsubscribe: UnSubscribeT = () => {
        listeners = listeners.filter((listener_) => listener_ !== listener);
      };

      return unsubscribe;
    },
  };
}

export { combineReducers, createStore };
