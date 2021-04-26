/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useCallback,
  useState, 
} from 'react';

export type UseRequestStateType = {
  loading: boolean;
  error: boolean;
  success: boolean;
  data?: any;
  call: (args?: any) => void;
  reset: () => void;
}

type StateType = {
  loading: boolean;
  error: boolean;
  success: boolean;
  data?: any;
}

const initialState: StateType = {
  loading: false,
  error: false,
  success: false, 
};

export const useRequestState = (givenRequest: (...args: any[]) => Promise<any>): UseRequestStateType => {
  const [ state, setState ] = useState<StateType>(initialState);
  const call = useCallback(
    (...args) => {
      setState({
        loading: true,
        error: false,
        success: false, 
      });
      return givenRequest(...args)
        .then((result) => {
          setState({
            loading: false,
            error: false,
            data: result,
            success: true,
          });
          return result;
        })
        .catch(() => {
          setState({
            loading: false,
            error: true,
            success: false, 
          });
        });
    },
    [givenRequest]
  );
  const reset = useCallback(() => setState(initialState), []);

  return {
    ...state,
    call,
    reset, 
  };
};
