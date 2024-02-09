import initialPrompts from './initialPrompts';

export default () => (initialPrompts[Math.floor(Math.random() * initialPrompts.length)]);

