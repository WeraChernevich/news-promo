import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import lazyLoadImages from "./modules/lazy-load";
lazyLoadImages();

import uploadFile from "./modules/upload-file";
uploadFile();

import sendForm from './modules/send-form';
sendForm();

