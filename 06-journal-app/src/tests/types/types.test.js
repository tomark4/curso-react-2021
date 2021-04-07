describe('Pruebas en archivo types', () => {
  const types = {

    // auth  types
    login: '[Auth] LOGIN',
    logout: '[Auth] LOGOUT',

    // ui types
    uiAddError:'[ui] add error',
    uiRemoveError:'[ui] delete error',
    uiStartLoading: '[ui] start loading',
    uiStopLoading: '[ui] stop loading',

    // notes
    notesAddNew: '[notes] add note',
    notesActive: '[notes] active note',
    notesLoad: '[notes] load note',
    notesUpdated: '[notes] update note',
    notesFileUrl: '[notes] upload file',
    notesDelete: '[notes] delete note',
    notesLogoutCleaning: '[notes] logout cleanig'

  }

  test('debe de retonar el objecto types', () => {
    const typesObj = types;

    expect(types).toEqual(typesObj)
  })
})
