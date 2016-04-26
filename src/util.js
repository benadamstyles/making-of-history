import _ from 'lodash'

export const $ = document.querySelector.bind(document)
export const $$ = _.flowRight(Array.from, document.querySelectorAll.bind(document))
