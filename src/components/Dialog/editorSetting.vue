<template>
    <div>
        <v-dialog
        :close-on-content-click="false"
        max-width="400"
        v-model="openDialog"
        offset-x
        xs12 sm12
        >

            <v-card>
                <v-card-title>
                    <span class="headline">Editor setting</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm12>
                                <v-select
                                    v-model="globalEditorTheme"
                                    label="Theme"
                                    :items="themes"
                                    >
                                </v-select>
                            </v-flex>
                            <v-flex xs12 sm12>
                                <v-select
                                    v-model="globalBufferMode"
                                    label="Highlight Mode"
                                    :items="modes"
                                    >
                                </v-select>
                            </v-flex>
                            <v-flex xs12 sm12>
                                  <v-switch
                                    v-model="globalBufferLM"
                                    label="Line Number"
                                    hide-details
                                  ></v-switch>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click.native="openDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>


<script>
import themes from '../Editor/theme'
import { CodeMirrorMode, supportedLaguage } from '@/utils/languages'
import editorStroe from '@/store/editor'

export default {
    components: {
    },
    created() {
        var theme = localStorage.getItem('editorTheme')
        if (theme == null) {
            theme = 'blackboard'
        }
        editorStroe.commit('updateTheme', theme)
    },
    computed: {
        openDialog: {
            get: function() {
                return this.$store.state.dialog.editorSetting.show
            },
            set: function() {
                this.$store.commit({
                    type: 'taggleDialog',
                    name: 'editorSetting',
                    show: false
                })
            }
        },
        globalEditorTheme: {
            get: function() {
                return editorStroe.state.config.theme
            },
            set: function(theme) {
                editorStroe.commit('updateTheme', theme)
            }
        },
        globalBufferMode: {
            get: function() {
                if (editorStroe.state.status.isNew === true) {
                    return editorStroe.state.newBuffer.lang
                }
                return editorStroe.getters.currentBuffer.lang
            },
            set: function(lang) {
                var mime = CodeMirrorMode(lang)
                editorStroe.commit({
                    type: 'updateMode',
                    mime: mime
                })
            }

        },
        globalBufferLM: {
            get: function() {
                return editorStroe.state.config.lineNumbers
            },
            set: function(t) {
                editorStroe.commit({
                    type: 'updateLM',
                    lm: t
                })
            }

        }
    },
    data() {
        return {
            themes,
            modes: supportedLaguage
        }
    },
    methods: {

    }
}
</script>
<style scoped>
</style>
