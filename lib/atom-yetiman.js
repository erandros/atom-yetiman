'use babel';

import { CompositeDisposable } from 'atom';
import core from 'atom-yetiman-core';

export default {

  yetimanView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    core.scaffold();
    core.reload();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'yetiman:toggle': () => this.toggle(),
      'yetiman:expand': () => this.expand()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
    };
  },

  toggle() {
    console.log('Yetiman was toggled!');
    core.ask().then(function(a) {
      console.log(a);
    })
  },
  expand() {
    core.run('hello')
    .then(function(t) {
      console.log(t);
    })
  }

};
