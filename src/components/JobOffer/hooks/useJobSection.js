import { useLayoutEffect, useReducer } from 'react';
import { useSizeType } from '@/context/sizeTypeContext';

// 훅 기본값
const INITIAL = Object.freeze({
  cursor: 0,
  perPage: 4,
  length: 0,
  isNext: false,
  isPrev: false,
});

const ActionType = Object.freeze({
  NEXT: Symbol('NEXT'),
  PREV: Symbol('PREV'),
  SET_PER_PAGE: Symbol('SET_PER_PAGE'),
  SET_LENGTH: Symbol('SET_LENGTH'),
});

// 리듀서
const _reducer = (state, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PER_PAGE:
      return { ...state, perPage: payload };
    case ActionType.SET_LENGTH:
      return { ...state, length: payload };
    case ActionType.NEXT:
      return state.isNext ? { ...state, cursor: state.cursor + 1 } : state;
    case ActionType.PREV:
      return state.isPrev ? { ...state, cursor: state.cursor - 1 } : state;
    default:
      return state;
  }
};

// Middleware
function middleware(context) {
  context.isNext = context.cursor + context.perPage < context.length;
  context.isPrev = context.cursor > 0;
  return context;
}

const reducer = (state, action) => {
  return middleware(_reducer(state, action));
};

export default function useJobSection() {
  const [context, dispatch] = useReducer(reducer, INITIAL);
  // ! 화면 크기에 따라 per Page 변경
  const sizeType = useSizeType();

  useLayoutEffect(() => {
    dispatch({
      type: ActionType.SET_PER_PAGE,
      payload: sizeType === 'desktop' ? 4 : 3,
    });
    // 큰 화면 일 때 4개, 작은 화면 일 때 3개로 출력
  }, [sizeType]);

  return {
    context,
    dispatch,
    ActionType,
  };
}
