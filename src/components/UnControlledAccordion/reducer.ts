export type ActionType = {
  type: string
}

export const TOGGLE_COLLAPSED: string = 'TOGGLE_COLLAPSED'

export const reducer = (state: boolean, action: ActionType) => {
  //инструкции, как преобразовать стейт
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return !state
    default:
      throw new Error('Bad action type') //возвращаем ошибку, чтобы отследить баги
  }
  return state //возвращаем неизмененный стейт, исли не нашлась инстуркция
}
