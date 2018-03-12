import { createI18nPromise } from '../../common/i18n/i18nFactory'

export const appInitialDataLoaded = 'app/initialData/Loaded'

export const fetchInitialData = () => async dispatch => {
  const i18n = await createI18nPromise('en')

  dispatch({type: appInitialDataLoaded, i18n})
}
