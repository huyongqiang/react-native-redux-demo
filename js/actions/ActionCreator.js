/**
 * Created by wangdi on 21/11/16.
 */
'use strict';

import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}