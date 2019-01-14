import { player } from './player';
import { stopwatch } from './stopwatch';
import { init } from '@rematch/core';


export const store = init({ models: { player, stopwatch } });



