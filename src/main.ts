import { mount } from 'svelte';
import App from './App.svelte';
import { initializeMosaik } from './mosaik';
import './styles.css';

initializeMosaik();

const root = document.getElementById('app');
if (!root) throw new Error('The application root #app is missing.');

mount(App, { target: root });
