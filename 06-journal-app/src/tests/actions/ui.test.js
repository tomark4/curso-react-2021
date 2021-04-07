import { removeError, setError, startLoading, stopLoading } from '../../actions/ui'
import { types } from '../../types/types'
describe('pruebas ui actions', () => {

  test('todas las acciones deben de funcionar', () => {
    const action = setError("hola")

    expect(action).toEqual({
      type: types.uiAddError,
      payload: "hola"
    })

    const removeErrorAction = removeError()
    const startLoadingAction = startLoading()
    const stopLoadingAction = stopLoading()


    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    })

    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    })

    expect(stopLoadingAction).toEqual({
      type: types.uiStopLoading,
    })
  })




})
