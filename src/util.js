import _ from 'underscore-contrib'

export const $ = document.querySelector.bind(document)
export const $$ = _.compose(Array.from, document.querySelectorAll.bind(document))
