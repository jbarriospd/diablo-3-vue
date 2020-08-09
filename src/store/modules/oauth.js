import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    // Creamos la función getToken, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
    getToken ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      // Pasos:
      //  1 - Hacer llamada HTTP para obtener el token
      //  2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
      //  3 - Si hay errror, limpiar el token de 'accessToken', mostrar log del error

      // Paso 1
      oauth.getToken()
        .then(({ data }) => {
          // Paso 2: Guardamos el valor del token llamando a nuestra mutación
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((err) => {
          // Paso 3: En caso de error limpiamos el token
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
