// actions here

export const ActionTypes = {
  DELETE_MATCHES: 'DELETE_MATCH',
};

export function deleteMatch() {
  return {
    type: ActionTypes.DELETE_MATCH,
    payload: null,
  };
}
