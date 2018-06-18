import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    config: {
        dark: false
    },
    user: {
        name: '',
        id: 0,
        run_token: '',
        token: '',
        token_exp: ''
    },
    editor: {
        config: {
            tabSize: 4,
            indentUnit: 4,
            lineNumbers: true,
            indentWithTabs: true,
            smartIndent: true,
            line: true,
            mode: 'text/x-csrc',
            theme: 'blackboard'
        },
        buffer: {
            content: '',
            createat: '',
            description: '',
            filename: '',
            id: 0,
            lang: '',
            likes: 0,
            public: true,
            title: '',
            updateat: '',
            username: ''
        }
    },
    codes: {
        public: [],
        top: []
    }
}

const mutations = {
    updateEditorTheme(state, t) {
        import(`codemirror/theme/${t}.css`)
        state.editor.config.theme = t
        localStorage.setItem('editorTheme', t)
    },
    updateEditorMode(state, payload) {
        state.editor.config.mode = payload.mime
    },
    updateEditorBuffer(state, payload) {
        state.editor.buffer = payload.code
        // localStorage.setItem('editorBuffer', JSON.stringify(payload.code))
    },
    updateEditorBufferContent(state, payload) {
        state.editor.buffer.content = payload.content
    },
    userLogin(state, payload) {
        state.user.token = payload.token
        state.user.id = payload.id
        state.user.name = payload.name
        state.user.run_token = payload.run_token
        state.user.token_exp = payload.token_exp
        localStorage.setItem('userinfo', JSON.stringify(state.user))
    },
    userLogout(state) {
        state.user.token = ''
        state.user.id = 0
        state.user.name = ''
        state.user.run_token = ''
        state.user.token_exp = 0
        localStorage.setItem('userinfo', '{}')
    }
}

const actions = {

}

// getters are functions
const getters = {
    isLogined: state => {
        return state.user.token_exp > Date.now() / 1000
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
